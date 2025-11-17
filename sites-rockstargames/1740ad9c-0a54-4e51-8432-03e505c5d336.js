try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1740ad9c-0a54-4e51-8432-03e505c5d336", e._sentryDebugIdIdentifier = "sentry-dbid-1740ad9c-0a54-4e51-8432-03e505c5d336")
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
  [7956], {
    6521: (e, t, n) => {},
    11394: (e, t, n) => {
      n.d(t, {
        v6: () => o.v
      }), n(6521);
      var r, o = n(43607);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    16348: (e, t, n) => {
      n.r(t), n.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => wr,
        Breadcrumbs: () => y,
        Button: () => Cn,
        Checkbox: () => l,
        Code: () => Er,
        Dialog: () => b,
        Display: () => xr,
        Divider: () => Kn,
        Dropdown: () => i,
        Heading: () => Cr,
        IconButton: () => Bn,
        Label: () => Tr,
        Lightbox: () => o,
        Loader: () => ar,
        RadioGroup: () => d,
        Spinner: () => pn,
        Switch: () => s,
        Tag: () => m,
        Text: () => Nr,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => Rr,
        Toast: () => v,
        Tooltip: () => r
      });
      var r = {};
      n.r(r), n.d(r, {
        Arrow: () => yv,
        Content: () => vv,
        Portal: () => gv,
        Root: () => pv,
        Trigger: () => mv,
        useTooltipContext: () => hv
      });
      var o = {};
      n.r(o), n.d(o, {
        Caption: () => jg,
        Close: () => Dg,
        Content: () => Sg,
        Controls: () => Ig,
        CssVars: () => Bg,
        Download: () => Hg,
        Image: () => Ng,
        Keyboard: () => Ag,
        LightboxContext: () => yg,
        OpenIcon: () => xg,
        Overlay: () => Cg,
        Portal: () => Pg,
        Reset: () => Mg,
        Root: () => gg,
        RootImplContext: () => bg,
        Thumbnail: () => Eg,
        Trigger: () => _g,
        Zoom: () => Lg,
        ZoomPan: () => Tg
      });
      var i = {};
      n.r(i), n.d(i, {
        Content: () => xE,
        Description: () => RE,
        Hint: () => NE,
        Label: () => OE,
        Option: () => jE,
        OptionIcon: () => kE,
        OptionText: () => IE,
        Portal: () => AE,
        Root: () => EE,
        ScrollArea: () => PE,
        StatusIcon: () => DE,
        StatusRoot: () => LE,
        StatusText: () => ME,
        Trigger: () => CE,
        TriggerIcon: () => TE,
        TriggerText: () => SE,
        useDropdownContext: () => _E
      });
      var s = {};
      n.r(s), n.d(s, {
        Description: () => dx,
        Input: () => cx,
        Label: () => ux,
        Root: () => lx,
        useSwitchContext: () => ax
      });
      var a = {};
      n.r(a), n.d(a, {
        CheckLG: () => jx,
        CheckMD: () => Nx,
        CheckXL: () => Ix,
        DashLG: () => Ax,
        DashMD: () => kx,
        DashXL: () => Lx
      });
      var l = {};
      n.r(l), n.d(l, {
        Description: () => Yx,
        ErrorText: () => Qx,
        Input: () => $x,
        Label: () => Zx,
        Root: () => Wx
      });
      var c = {};
      n.r(c), n.d(c, {
        Description: () => _P,
        Hint: () => EP,
        Input: () => wP,
        Label: () => bP,
        Root: () => gP,
        RootContext: () => vP,
        StatusIcon: () => PP,
        StatusRoot: () => xP,
        StatusText: () => CP,
        useTextAreaContext: () => yP
      });
      var u = {};
      n.r(u), n.d(u, {
        DotLG: () => _C,
        DotMD: () => wC,
        DotXL: () => EC
      });
      var d = {};
      n.r(d), n.d(d, {
        Description: () => fC,
        Input: () => PC,
        Label: () => dC,
        Option: () => xC,
        OptionDescription: () => SC,
        OptionLabel: () => CC,
        Options: () => uC,
        Root: () => cC,
        StatusIcon: () => pC,
        StatusRoot: () => hC,
        StatusText: () => mC,
        useRadioGroupContext: () => lC
      });
      var f = {};
      n.r(f), n.d(f, {
        Button: () => jS,
        Control: () => OS,
        Description: () => kS,
        Hint: () => TS,
        Icon: () => NS,
        Input: () => RS,
        Label: () => SS,
        PasswordButton: () => IS,
        Root: () => CS,
        StatusIcon: () => LS,
        StatusRoot: () => AS,
        StatusText: () => DS
      });
      var h = {};
      n.r(h), n.d(h, {
        Body: () => JS,
        CloseButton: () => aT,
        Description: () => rT,
        ErrorText: () => sT,
        Footer: () => iT,
        Header: () => QS,
        Icon: () => tT,
        Link: () => oT,
        Root: () => YS,
        RootContext: () => $S,
        Title: () => nT,
        iconStatusMap: () => eT,
        useAlertContext: () => ZS
      });
      var p = {};
      n.r(p), n.d(p, {
        Alert: () => AT,
        CloseButton: () => MT,
        Description: () => kT,
        Icon: () => IT,
        Link: () => DT,
        PaginationCounter: () => FT,
        PaginationNav: () => HT,
        PaginationNextButton: () => BT,
        PaginationPrevButton: () => zT,
        PaginationViewport: () => LT,
        Root: () => NT,
        RootContext: () => OT,
        iconStatusMap: () => jT,
        useAlertBannerContext: () => RT
      });
      var m = {};
      n.r(m), n.d(m, {
        CloseButton: () => iO,
        Icon: () => oO,
        Label: () => rO,
        Root: () => nO,
        RootContext: () => eO,
        useTagContext: () => tO
      });
      var v = {};
      n.r(v), n.d(v, {
        Action: () => uR,
        CloseButton: () => dR,
        Description: () => aR,
        Icon: () => cR,
        Provider: () => nR,
        Root: () => sR,
        RootContext: () => oR,
        Viewport: () => rR,
        iconAppearanceMap: () => lR,
        useToastContext: () => iR
      });
      var y = {};
      n.r(y), n.d(y, {
        Icon: () => OR,
        Item: () => TR,
        OverflowMenu: () => RR,
        OverflowMenuItem: () => NR,
        Root: () => SR,
        RootContext: () => CR,
        useBreadcrumbsContext: () => PR
      });
      var g = {};
      n.r(g), n.d(g, {
        Icon: () => GR,
        Label: () => UR,
        Root: () => VR
      });
      var b = {};
      n.r(b), n.d(b, {
        ActionArea: () => DA,
        Button: () => VA,
        CloseButton: () => zA,
        Content: () => NA,
        Description: () => kA,
        Footer: () => HA,
        Header: () => MA,
        HeaderButton: () => FA,
        HeaderTitle: () => BA,
        Layout: () => LA,
        Overlay: () => RA,
        Portal: () => jA,
        Root: () => OA,
        ScrollArea: () => AA,
        Title: () => IA,
        Trigger: () => UA,
        useDialogContext: () => TA
      });
      var w = n(42295);

      function _(e, t, n) {
        return Math.min(Math.max(e, n), t)
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
            n = S[function(e) {
              let t = 5381,
                n = e.length;
              for (; n;) t = 33 * t ^ e.charCodeAt(--n);
              return (t >>> 0) % 2341
            }(t)];
          if (!n) throw new x(e);
          return `#${n}`
        }(e) : e;
        const n = O.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(T(e, 2), 16)), parseInt(T(e[3] || "f", 2), 16) / 255]
        }
        const r = R.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = N.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = j.exec(t);
        if (i) {
          const [t, n, r, o] = Array.from(i).slice(1).map(parseFloat);
          if (_(0, 100, n) !== n) throw new x(e);
          if (_(0, 100, r) !== r) throw new x(e);
          return [...A(t, n, r), Number.isNaN(o) ? 1 : o]
        }
        throw new x(e)
      }
      const C = e => parseInt(e.replace(/_/g, ""), 36),
        S = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const n = C(t.substring(0, 3)),
            r = C(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - r.length; e++) o += "0";
          return e[n] = `${o}${r}`, e
        }, {}),
        T = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        O = new RegExp(`^#${T("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        R = new RegExp(`^#${T("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        N = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        j = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        k = e => Math.round(255 * e),
        A = (e, t, n) => {
          let r = n / 100;
          if (0 === t) return [r, r, r].map(k);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * r - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, c = s) : o >= 3 && o < 4 ? (l = s, c = i) : o >= 4 && o < 5 ? (a = s, c = i) : o >= 5 && o < 6 && (a = i, c = s);
          const u = r - i / 2;
          return [a + u, l + u, c + u].map(k)
        };

      function L(e, t) {
        const [n, r, o, i] = function(e) {
          const [t, n, r, o] = P(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, n, r), s = Math.min(t, n, r), a = (i + s) / 2;
          if (i === s) return [0, 0, a, o];
          const l = i - s;
          return [60 * (t === i ? (n - r) / l + (n < r ? 6 : 0) : n === i ? (r - t) / l + 2 : (t - n) / l + 4), a > .5 ? l / (2 - i - s) : l / (i + s), a, o]
        }(e);
        return function(e, t, n, r) {
          return `hsla(${(e%360).toFixed()}, ${_(0,100,100*t).toFixed()}%, ${_(0,100,100*n).toFixed()}%, ${parseFloat(_(0,1,r).toFixed(3))})`
        }(n, r, o - t, i)
      }

      function D(e, t) {
        return L(e, -t)
      }
      var M = n(62229),
        H = n.n(M),
        B = n(8141),
        z = n(57461),
        F = n(22673);
      const V = {
          enabled: {
            background: (0, B.Tm)(z.no.enabled.background),
            border: (0, B.Tm)(z.no.enabled.border),
            text: (0, B.Tm)(z.no.enabled.text),
            outline: (0, B.Tm)(z.no.enabled.outline)
          },
          hover: {
            background: (0, B.Tm)(z.no.hover.background),
            border: (0, B.Tm)(z.no.hover.border),
            text: (0, B.Tm)(z.no.hover.text),
            outline: (0, B.Tm)(z.no.hover.outline)
          },
          focus: {
            background: (0, B.Tm)(z.no.focus.background),
            border: (0, B.Tm)(z.no.focus.border),
            text: (0, B.Tm)(z.no.focus.text),
            outline: (0, B.Tm)(z.no.focus.outline)
          },
          pressed: {
            background: (0, B.Tm)(z.no.pressed.background),
            border: (0, B.Tm)(z.no.pressed.border),
            text: (0, B.Tm)(z.no.pressed.text),
            outline: (0, B.Tm)(z.no.pressed.outline)
          },
          disabled: {
            background: (0, B.Tm)(z.no.disabled.background),
            border: (0, B.Tm)(z.no.disabled.border),
            text: (0, B.Tm)(z.no.disabled.text),
            outline: (0, B.Tm)(z.no.disabled.outline)
          },
          loading: {
            background: (0, B.Tm)(z.no.loading.background),
            border: (0, B.Tm)(z.no.loading.border),
            text: (0, B.Tm)(z.no.loading.text),
            outline: (0, B.Tm)(z.no.loading.outline)
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
          enabled: c = !1
        }, u = []) => {
          (0, M.useEffect)(() => {
            if (!e.current || !i || !c) return;
            const u = `${i}:${t}:${n}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, F.IO)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [n, r, o] = P(e);
                  return .2126 * t(n) + .7152 * t(r) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? B.LU.global.color.black.static[100] : B.LU.global.color.white.static[100]),
                  hover: s || (e >= n ? L(i, r) : D(i, r)),
                  pressed: a || (e >= n ? L(i, o) : D(i, o))
                }
              });
            return e.current.style.setProperty(V.enabled.background, i), e.current.style.setProperty(V.enabled.border, i), e.current.style.setProperty(V.enabled.text, d), e.current.style.setProperty(V.hover.background, f), e.current.style.setProperty(V.hover.border, f), e.current.style.setProperty(V.hover.text, d), e.current.style.setProperty(V.focus.background, f), e.current.style.setProperty(V.focus.border, f), e.current.style.setProperty(V.focus.text, d), e.current.style.setProperty(V.pressed.background, h), e.current.style.setProperty(V.pressed.border, h), e.current.style.setProperty(V.pressed.text, d), e.current.style.setProperty(V.loading.background, f), e.current.style.setProperty(V.loading.border, f), e.current.style.setProperty(V.loading.text, d), () => {
              e.current?.style.removeProperty(V.enabled.background), e.current?.style.removeProperty(V.enabled.border), e.current?.style.removeProperty(V.enabled.text), e.current?.style.removeProperty(V.hover.background), e.current?.style.removeProperty(V.hover.border), e.current?.style.removeProperty(V.hover.text), e.current?.style.removeProperty(V.focus.background), e.current?.style.removeProperty(V.focus.border), e.current?.style.removeProperty(V.focus.text), e.current?.style.removeProperty(V.pressed.background), e.current?.style.removeProperty(V.pressed.border), e.current?.style.removeProperty(V.pressed.text), e.current?.style.removeProperty(V.loading.background), e.current?.style.removeProperty(V.loading.border), e.current?.style.removeProperty(V.loading.text)
            }
          }, [e.current, t, n, r, o, i, s, a, l, c, ...u])
        };

      function G(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n(55311);
      const q = "undefined" != typeof document ? M.useLayoutEffect : () => {};
      var K;
      const X = null !== (K = M.useInsertionEffect) && void 0 !== K ? K : q;

      function W(e) {
        const t = (0, M.useRef)(null);
        return X(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
      const $ = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Z = M.createContext($),
        Y = M.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Q = new WeakMap;
      const J = "function" == typeof M.useId ? function(e) {
        let t = M.useId(),
          [n] = (0, M.useState)(re());
        return e || `${n?"react-aria":`react-aria${$.prefix}`}-${t}`
      } : function(e) {
        let t = (0, M.useContext)(Z),
          n = function(e = !1) {
            let t = (0, M.useContext)(Z),
              n = (0, M.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = Q.get(e);
                null == n ? Q.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, Q.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function ee() {
        return !1
      }

      function te() {
        return !0
      }

      function ne(e) {
        return () => {}
      }

      function re() {
        return "function" == typeof M.useSyncExternalStore ? M.useSyncExternalStore(ne, ee, te) : (0, M.useContext)(Y)
      }
      let oe, ie = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        se = new Map;

      function ae(e) {
        let [t, n] = (0, M.useState)(e), r = (0, M.useRef)(null), o = J(t), i = (0, M.useRef)(null);
        if (oe && oe.register(i, o), ie) {
          const e = se.get(o);
          e && !e.includes(r) ? e.push(r) : se.set(o, [r])
        }
        return q(() => {
          let e = o;
          return () => {
            oe && oe.unregister(i), se.delete(e)
          }
        }, [o]), (0, M.useEffect)(() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        }), o
      }

      function le(e, t) {
        if (e === t) return e;
        let n = se.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = se.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function ce(e = []) {
        let t = ae(),
          [n, r] = function(e) {
            let [t, n] = (0, M.useState)(e), r = (0, M.useRef)(null), o = W(() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            });
            q(() => {
              r.current && o()
            });
            let i = W(e => {
              r.current = e(t), o()
            });
            return [t, i]
          }(t),
          o = (0, M.useCallback)(() => {
            r(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, r]);
        return q(o, [t, o, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (oe = new FinalizationRegistry(e => {
        se.delete(e)
      }));
      var ue = n(4572);

      function de(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = G(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = le(n, o) : t[e] = void 0 !== o ? o : n : t[e] = ue(n, o)
          }
        }
        return t
      }
      const fe = new Set(["id"]),
        he = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        pe = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        me = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        ve = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        ye = /^(data-.*)$/;

      function ge(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          global: o,
          events: i = o,
          propNames: s
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (fe.has(t) || n && he.has(t) || r && pe.has(t) || o && me.has(t) || i && ve.has(t) || t.endsWith("Capture") && ve.has(t.slice(0, -7)) || (null == s ? void 0 : s.has(t)) || ye.test(t)) && (a[t] = e[t]);
        return a
      }
      const be = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        we = e => e && "window" in e && e.window === e ? e : be(e).defaultView || window;
      const _e = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function Ee(e, t) {
        return _e ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = we(e);
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
        }(e, t) && (!e.parentElement || Ee(e.parentElement, e))
      }
      const xe = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Pe = xe.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      xe.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Ce = xe.join(':not([hidden]):not([tabindex="-1"]),');

      function Se(e) {
        return e.matches(Pe) && Ee(e) && !Oe(e)
      }

      function Te(e) {
        return e.matches(Ce) && Ee(e) && !Oe(e)
      }

      function Oe(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function Re(e) {
        if (function() {
            if (null == Ne) {
              Ne = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Ne = !0, !0
                  }
                })
              } catch {}
            }
            return Ne
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
      let Ne = null;

      function je(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Ie(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function ke(e) {
        let t = (0, M.useRef)({
          isFocused: !1,
          observer: null
        });
        q(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []);
        let n = W(t => {
          null == e || e(t)
        });
        return (0, M.useCallback)(e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = je(e);
                  n(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver(() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            }), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }, [n])
      }
      let Ae = !1;

      function Le(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function De(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Me(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const He = Me(function() {
          return De(/^Mac/i)
        }),
        Be = Me(function() {
          return De(/^iPhone/i)
        }),
        ze = Me(function() {
          return De(/^iPad/i) || He() && navigator.maxTouchPoints > 1
        }),
        Fe = Me(function() {
          return Be() || ze()
        }),
        Ve = (Me(function() {
          return He() || Fe()
        }), Me(function() {
          return Le(/AppleWebKit/i) && !Ue()
        })),
        Ue = Me(function() {
          return Le(/Chrome/i)
        }),
        Ge = Me(function() {
          return Le(/Android/i)
        }),
        qe = Me(function() {
          return Le(/Firefox/i)
        });
      let Ke = new Map,
        Xe = new Set;

      function We() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Ke.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Ke.delete(n.target)), 0 === Ke.size)) {
            for (let e of Xe) e();
            Xe.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let r = Ke.get(n.target);
          r || (r = new Set, Ke.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function $e(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of Ke) "isConnected" in e && !e.isConnected && Ke.delete(e)
          }(), 0 === Ke.size ? e() : Xe.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? We() : document.addEventListener("DOMContentLoaded", We));
      let Ze = "default",
        Ye = "",
        Qe = new WeakMap;

      function Je(e) {
        if (Fe()) {
          if ("disabled" !== Ze) return;
          Ze = "restoring", setTimeout(() => {
            $e(() => {
              if ("restoring" === Ze) {
                const t = be(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Ye || ""), Ye = "", Ze = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Qe.has(e)) {
          let t = Qe.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Qe.delete(e)
        }
      }
      const et = M.createContext({
        register: () => {}
      });

      function tt(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function nt(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, tt(e, t, "get"))
      }

      function rt(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }

      function ot(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, tt(e, t, "set"), n), n
      }

      function it(e, t) {
        q(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function st() {
        let e = (0, M.useRef)(new Map),
          t = (0, M.useCallback)((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(n, i, o)
          }, []),
          n = (0, M.useCallback)((t, n, r, o) => {
            var i;
            let s = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, s, o), e.current.delete(r)
          }, []),
          r = (0, M.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            })
          }, [n]);
        return (0, M.useEffect)(() => r, [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }
      et.displayName = "PressResponderContext";

      function at(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const lt = (e = document) => e.activeElement;

      function ct(e) {
        return e.target
      }
      const ut = (0, M.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, e => ft(e, t))
        },
        useHref: e => e
      });

      function dt() {
        return (0, M.useContext)(ut)
      }

      function ft(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        qe() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (He() ? i = !0 : s = !0);
        let c = Ve() && He() && !ze() ? new KeyboardEvent("keydown", {
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
        ft.isOpening = n, Re(e), e.dispatchEvent(c), ft.isOpening = !1
      }

      function ht(e) {
        var t;
        const n = dt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function pt(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }

      function mt(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (Ge() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      ft.isOpening = !1;
      var vt = n(44853),
        yt = new WeakMap;
      class gt {
        continuePropagation() {
          ot(this, yt, !1)
        }
        get shouldStopPropagation() {
          return nt(this, yt)
        }
        constructor(e, t, n, r) {
          var o;
          rt(this, yt, {
            writable: !0,
            value: void 0
          }), ot(this, yt, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = c
        }
      }
      const bt = Symbol("linkClicked"),
        wt = "react-aria-pressable-style",
        _t = "data-react-aria-pressable";

      function Et(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
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
        } = function(e) {
          let t = (0, M.useContext)(et);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = de(r, e), n()
          }
          return it(t, e.ref), e
        }(e), [p, m] = (0, M.useState)(!1), v = (0, M.useRef)({
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
        } = st(), b = W((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new gt("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }), w = W((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new gt("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new gt("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }), _ = W((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new gt("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), E = W(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(Ct(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Je(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), x = W(e => {
          u && E(e)
        }), P = W(e => {
          a || null == s || s(e)
        }), C = W((e, t) => {
          if (!a && s) {
            let n = new MouseEvent("click", e);
            Ie(n, t), s(je(n))
          }
        }), S = (0, M.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Pt(t.nativeEvent, t.currentTarget) && at(t.currentTarget, ct(t.nativeEvent))) {
                  var r;
                  St(ct(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Pt(t, r) && !t.repeat && at(r, ct(t)) && e.target && _(Ct(e.target, t), "keyboard")
                      };
                    y(be(t.currentTarget), "keyup", G(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && He() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || at(t.currentTarget, ct(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !ft.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !mt(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = _(Ct(t.currentTarget, t), r),
                        i = w(Ct(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, P(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = _(t, "virtual"),
                      o = w(t, "virtual");
                    P(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && Pt(t, e.target)) {
                var r;
                St(ct(t), t.key) && t.preventDefault();
                let n = ct(t),
                  o = at(e.target, ct(t));
                w(Ct(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && xt(e.target) && at(e.target, n) && !t[bt] && (t[bt] = !0, ft(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !at(t.currentTarget, ct(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Ge() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (Fe()) {
                    if ("default" === Ze) {
                      const t = be(e);
                      Ye = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Ze = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Qe.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = ct(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(be(t.currentTarget), "pointerup", n, !1), y(be(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (at(t.currentTarget, ct(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !Se(e);) e = e.parentElement;
                    let t = we(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Ae = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Re(n), l()))
                      },
                      s = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Re(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), Ae = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              at(t.currentTarget, ct(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || _(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Ct(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Ct(e.target, t), e.pointerType, !1), x(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (at(e.target, ct(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? E(t) : (Re(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                E(e)
              };
            t.onDragStart = e => {
              at(e.currentTarget, ct(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, a, c, g, d, E, x, w, b, _, P, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = be(f.current);
          if (!e || !e.head || e.getElementById(wt)) return;
          const t = e.createElement("style");
          t.id = wt, t.textContent = `\n@layer {\n  [${_t}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || Je(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: de(h, S, {
            [_t]: !0
          })
        }
      }

      function xt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Pt(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof we(o).HTMLInputElement && !Ot(o, n) || o instanceof we(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && xt(o)) && "Enter" !== n)
      }

      function Ct(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function St(e, t) {
        return e instanceof HTMLInputElement ? !Ot(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : xt(e)))
        }(e)
      }
      const Tt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Ot(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Tt.has(e.type)
      }
      let Rt = null,
        Nt = new Set,
        jt = new Map,
        It = !1,
        kt = !1;

      function At(e, t) {
        for (let n of Nt) n(e, t)
      }

      function Lt(e) {
        It = !0,
          function(e) {
            return !(e.metaKey || !He() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Rt = "keyboard", At("keyboard", e))
      }

      function Dt(e) {
        Rt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (It = !0, At("pointer", e))
      }

      function Mt(e) {
        mt(e) && (It = !0, Rt = "virtual")
      }

      function Ht(e) {
        e.target !== window && e.target !== document && !Ae && e.isTrusted && (It || kt || (Rt = "virtual", At("virtual", e)), It = !1, kt = !1)
      }

      function Bt() {
        Ae || (It = !1, kt = !0)
      }

      function zt(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || jt.get(we(e))) return;
        const t = we(e),
          n = be(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          It = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Lt, !0), n.addEventListener("keyup", Lt, !0), n.addEventListener("click", Mt, !0), t.addEventListener("focus", Ht, !0), t.addEventListener("blur", Bt, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", Dt, !0), n.addEventListener("pointermove", Dt, !0), n.addEventListener("pointerup", Dt, !0)), t.addEventListener("beforeunload", () => {
          Ft(e)
        }, {
          once: !0
        }), jt.set(t, {
          focus: r
        })
      }
      const Ft = (e, t) => {
        const n = we(e),
          r = be(e);
        t && r.removeEventListener("DOMContentLoaded", t), jt.has(n) && (n.HTMLElement.prototype.focus = jt.get(n).focus, r.removeEventListener("keydown", Lt, !0), r.removeEventListener("keyup", Lt, !0), r.removeEventListener("click", Mt, !0), n.removeEventListener("focus", Ht, !0), n.removeEventListener("blur", Bt, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", Dt, !0), r.removeEventListener("pointermove", Dt, !0), r.removeEventListener("pointerup", Dt, !0)), jt.delete(n))
      };

      function Vt(e) {
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
        const t = be(e);
        let n;
        "loading" !== t.readyState ? zt(e) : (n = () => {
          zt(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Ut = M.createContext(null);

      function Gt(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, M.useCallback)(e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }, [r, o]),
            s = ke(i),
            a = (0, M.useCallback)(e => {
              const t = be(e.target),
                r = t ? lt(t) : lt();
              e.target === e.currentTarget && r === ct(e.nativeEvent) && (n && n(e), o && o(!0), s(e))
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
              onKeyDown: Vt(e.onKeyDown),
              onKeyUp: Vt(e.onKeyUp)
            }
          }
        }(e), o = de(n, r), i = function(e) {
          let t = (0, M.useContext)(Ut) || {};
          it(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), s = e.isDisabled ? {} : i, a = (0, M.useRef)(e.autoFocus);
        (0, M.useEffect)(() => {
          a.current && t.current && function(e) {
            const t = be(e),
              n = lt(t);
            if ("virtual" === Rt) {
              let r = n;
              $e(() => {
                lt(t) === r && e.isConnected && Re(e)
              })
            } else Re(e)
          }(t.current), a.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: de({
            ...o,
            tabIndex: l
          }, s)
        }
      }

      function qt(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: s,
          onPressEnd: a,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: h,
          target: p,
          rel: m,
          type: v = "button"
        } = e;
        n = "button" === r ? {
          type: v,
          disabled: o,
          form: e.form,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formMethod: e.formMethod,
          formNoValidate: e.formNoValidate,
          formTarget: e.formTarget,
          name: e.name,
          value: e.value
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : h,
          target: "a" === r ? p : void 0,
          type: "input" === r ? v : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? m : void 0
        };
        let {
          pressProps: y,
          isPressed: g
        } = Et({
          onPressStart: s,
          onPressEnd: a,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = Gt(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = de(b, y, ge(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: de(n, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      const Kt = /^(on.*)$/,
        Xt = /^(onPress.*)$/;
      var Wt = n(35205);
      var $t = n(39447),
        Zt = n(33736),
        Yt = n(72580);
      const Qt = new Map;

      function Jt(e, t) {
        if (e === t) return e;
        const n = Qt.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = Qt.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function en(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      n(98312);
      var tn, nn = n(41972);
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(tn || (tn = {})), Symbol.toStringTag;
      var rn = n(71753);

      function on(e) {
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

      function sn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function an(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = on(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function ln(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var cn, un, dn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        fn = (cn = {
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
        }, un = e => {
          var t = cn.defaultClassName,
            n = an(an({}, cn.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : cn.defaultVariants[r];
            if (null != i) {
              var s = i;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var a = cn.variantClassNames[r][s];
              a && (t += " " + a)
            }
          }
          for (var [l, c] of cn.compoundVariants) dn(l, n, cn.defaultVariants) && (t += " " + c);
          return t
        }, un.variants = () => Object.keys(cn.variantClassNames), un.classNames = {
          get base() {
            return cn.defaultClassName.split(" ")[0]
          },
          get variants() {
            return ln(cn.variantClassNames, e => ln(e, e => e.split(" ")[0]))
          }
        }, un);
      const hn = "pageMD",
        pn = (0, M.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: n = hn,
          testId: r,
          ...o
        }, i) => {
          const s = (0, Zt.zQ)(),
            a = "string" == typeof n ? n : n?.[s] ?? n.default ?? hn,
            l = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = en(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Jt(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
                }
              }
              return t
            }({
              className: fn({
                size: a
              }),
              "data-testid": r,
              "aria-label": e
            }, o);
          return (0, w.jsx)(rn.b, {
            label: e,
            children: (0, w.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: i,
              viewBox: "0 0 16 16",
              children: [!t && (0, w.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, w.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var mn = n(87419),
        vn = n.t(mn, 2);

      function yn(e) {
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

      function gn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function bn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = yn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function wn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var _n = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        En = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = bn(bn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _n(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wn(e.variantClassNames, e => wn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xn = En({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
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
              SM: "foundry_17pcofy9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdh",
              MD: "foundry_17pcofya foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh",
              LG: "foundry_17pcofyb foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            },
            fullWidth: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
            },
            iconLeft: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            },
            iconRight: {
              true: "foundry_17pcofyg",
              false: "foundry_17pcofyh"
            },
            isLoading: {
              true: "foundry_17pcofyi"
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
              appearance: "ghost"
            }, "foundry_17pcofyp"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_17pcofyq"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_17pcofyr"]
          ]
        });
      En({
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
      var Pn = En({
        defaultClassName: "foundry_17pcofyx",
        variantClassNames: {
          fullWidth: {
            true: "foundry_17pcofyy",
            false: "foundry_17pcofyz"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Cn = (0, M.forwardRef)(({
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
        override_darkenLuminance: f = .035,
        override_textLuminance: h = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ..._
      }, E) => {
        const x = (0, M.useRef)(null),
          P = function(...e) {
            const t = (0, M.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(x, E),
          C = (0, Zt.zQ)(),
          S = "string" == typeof l ? l : l?.[C] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (({
            inert: e,
            className: t,
            onClick: n,
            isLoading: r,
            ...o
          }, i) => {
            const {
              events: s,
              others: a
            } = function(e, {
              onPress: t
            } = {
              onPress: !0
            }) {
              const n = {},
                r = {};
              for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (Xt.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : Kt.test(o) ? n[o] = e[o] : r[o] = e[o]);
              return {
                events: n,
                others: r
              }
            }(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = qt({
              ...a,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                r || (a.onPress?.(e) ?? n?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, i), u = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": r,
              "aria-busy": r
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, Wt.v)(e ? {} : u, {
                ...s,
                className: t
              })
            }
          })((0, Yt.v6)(_, {
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
        const O = (0, Yt.v6)({
            className: xn({
              appearance: a,
              size: S,
              fullWidth: c,
              iconLeft: !!r,
              iconRight: !!i,
              isLoading: u
            }),
            "data-testid": e
          }, T),
          R = r && vn[r],
          N = i && vn[i],
          j = t ? $t.DX : "button",
          I = c && (N || N && R);
        return (0, w.jsxs)(j, {
          ref: P,
          ...O,
          children: [I && (0, w.jsx)("div", {
            className: "foundry_17pcofy10"
          }), R && (0, w.jsx)(R, {
            label: o || "",
            size: S,
            className: "foundry_17pcofyw"
          }), (0, w.jsx)($t.xV, {
            children: n
          }), N && (0, w.jsx)(N, {
            label: s || "",
            size: S,
            className: Pn({
              fullWidth: c
            })
          }), u && (0, w.jsx)("div", {
            className: "foundry_17pcofy11",
            children: (0, w.jsx)(pn, {
              label: d || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0
            })
          })]
        })
      });
      n(6521);
      const Sn = /^(on.*)$/,
        Tn = /^(onPress.*)$/;
      var On = n(43607);
      var Rn = n(11394);

      function Nn(e) {
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

      function jn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function In(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Nn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function kn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var An = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ln = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = In(In({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) An(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kn(e.variantClassNames, e => kn(e, e => e.split(" ")[0]))
            }
          }, t
        };
      Ln({
        defaultClassName: "foundry_a5x3khg",
        variantClassNames: {
          isLoading: {
            true: "foundry_a5x3khh"
          },
          fullWidth: {
            true: "foundry_a5x3khi",
            false: "foundry_a5x3khj"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      var Dn = Ln({
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
        Mn = n(91253),
        Hn = n.t(Mn, 2);
      const Bn = (0, M.forwardRef)(({
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
        const _ = (0, M.useRef)(null),
          E = function(...e) {
            const t = (0, M.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }(_, b),
          x = (0, Zt.zQ)(),
          P = "string" == typeof s ? s : s?.[x] ?? s.default ?? "LG",
          {
            buttonProps: C
          } = (({
            inert: e,
            className: t,
            onClick: n,
            isLoading: r,
            ...o
          }, i) => {
            const {
              events: s,
              others: a
            } = function(e, {
              onPress: t
            } = {
              onPress: !0
            }) {
              const n = {},
                r = {};
              for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (Tn.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : Sn.test(o) ? n[o] = e[o] : r[o] = e[o]);
              return {
                events: n,
                others: r
              }
            }(o, {
              onPress: !1
            }), {
              buttonProps: l,
              isPressed: c
            } = qt({
              ...a,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => {
                r || (a.onPress?.(e) ?? n?.({
                  ...e,
                  currentTarget: e.target
                }))
              }
            }, i), u = {
              ...l,
              role: "button",
              "data-pressed": !e && c,
              "data-loading": r,
              "aria-busy": r
            };
            return {
              isPressed: !e && c,
              buttonProps: (0, On.v)(e ? {} : u, {
                ...s,
                className: t
              })
            }
          })((0, Rn.v6)(g, {
            isLoading: l
          }), _);
        U({
          refs: {
            buttonRef: _
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
        const S = (0, Rn.v6)({
            className: Dn({
              appearance: o,
              size: P,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = Hn[n],
          O = t ? $t.DX : "button";
        return (0, w.jsxs)(O, {
          ref: E,
          ...S,
          children: [T && (0, w.jsx)(T, {
            label: r || "",
            size: P
          }), (0, w.jsx)($t.xV, {
            children: a
          }), l && (0, w.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, w.jsx)(pn, {
              label: c || "",
              size: P && "SM" !== P ? `inline${P}` : "inlineMD",
              hideTrack: !0
            })
          })]
        })
      });

      function zn(e) {
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

      function Fn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = zn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Un(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Gn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        qn = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Vn(Vn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Gn(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Un(e.variantClassNames, e => Un(e, e => e.split(" ")[0]))
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
      const Kn = (0, M.forwardRef)(({
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
            u = o ? $t.DX : l;
          return (0, w.jsx)(u, {
            ref: a,
            className: (0, ue.clsx)(qn({
              thickness: n,
              orientation: t
            }), e),
            role: c,
            "aria-orientation": t,
            "data-testid": i,
            ...s
          })
        }),
        Xn = new Map;

      function Wn(e, t) {
        if (e === t) return e;
        const n = Xn.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = Xn.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function $n(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }
      var Zn;

      function Yn(e) {
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

      function Qn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Jn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qn(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Yn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function er(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Zn || (Zn = {})), Symbol.toStringTag;
      var tr = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        nr = "var(--foundry_9dxgbc2)",
        rr = "var(--foundry_9dxgbc3)",
        or = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Jn(Jn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) tr(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return er(e.variantClassNames, e => er(e, e => e.split(" ")[0]))
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
        ir = "var(--foundry_9dxgbc0)",
        sr = "var(--foundry_9dxgbc1)";
      const ar = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          children: n,
          colorOverride: r,
          label: o,
          size: i = "MD",
          ...s
        }, a) => {
          const l = (0, Zt.zQ)(),
            c = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
            u = function(...e) {
              const t = {
                ...e[0]
              };
              for (let n = 1; n < e.length; n++) {
                const r = e[n];
                for (const e in r) {
                  const n = t[e],
                    o = r[e];
                  "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = $n(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Wn(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
                }
              }
              return t
            }({
              className: or({
                size: c
              }),
              "data-testid": t,
              style: (0, B.DI)({
                [ir]: r?.pulseColorBackground,
                [sr]: r?.pulseColorForeground,
                [nr]: r?.gradientColorBackground,
                [rr]: r?.gradientColorForeground
              }),
              role: "status",
              "aria-atomic": !0,
              "aria-label": o
            }, s),
            d = e ? $t.DX : "div";
          return (0, w.jsx)(d, {
            ref: a,
            ...u,
            children: e ? (0, w.jsx)($t.xV, {
              children: n
            }) : (0, w.jsxs)(w.Fragment, {
              children: [(0, w.jsx)("div", {
                className: "foundry_9dxgbcd"
              }), (0, w.jsx)("div", {
                className: "foundry_9dxgbcc"
              })]
            })
          })
        }),
        lr = new Map;

      function cr(e, t) {
        if (e === t) return e;
        const n = lr.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = lr.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function ur(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function dr(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ur(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = cr(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var fr;

      function hr(e) {
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

      function pr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function mr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pr(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = hr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pr(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function vr(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(fr || (fr = {})), Symbol.toStringTag;
      var yr = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        gr = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = mr(mr({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yr(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vr(e.variantClassNames, e => vr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        br = gr({
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
      const wr = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const s = e ? $t.DX : "p",
          a = dr({
            className: br({
              size: r,
              appearance: n
            })
          }, o);
        return (0, w.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var _r = gr({
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
      const Er = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "default",
          ...r
        }, o) => {
          const i = e ? $t.DX : "p",
            s = dr({
              className: _r({
                appearance: n
              })
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        xr = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? $t.DX : "h1",
            i = dr({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, n);
          return (0, w.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        });
      var Pr = gr({
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
      const Cr = (0, M.forwardRef)(({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const i = e ? $t.DX : `h${t}`,
          s = dr(r, {
            className: Pr({
              level: t
            })
          });
        return (0, w.jsx)(i, {
          ref: o,
          "data-testid": n,
          ...s
        })
      });
      var Sr = gr({
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
      const Tr = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, i) => {
        const s = e ? $t.DX : "p",
          a = dr({
            className: Sr({
              size: r,
              appearance: n
            })
          }, o);
        return (0, w.jsx)(s, {
          ref: i,
          "data-testid": t,
          ...a
        })
      });
      var Or = gr({
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
      const Rr = {
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
        Nr = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const i = e ? $t.DX : Rr[n] || "span",
            s = dr(r, {
              className: Or({
                semantic: n
              })
            });
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var jr = n(69055);
      const Ir = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? jr.s6 : M.Fragment;
        return (0, w.jsx)(n, {
          ...t
        })
      };

      function kr(...e) {
        const t = (0, M.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function Ar(e) {
        const t = (0, M.useRef)(e);
        return (0, M.useEffect)(() => {
          t.current = e
        }), (0, M.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function Lr(e, t, n, r) {
        const o = (0, M.useRef)(t);
        (0, M.useEffect)(() => {
          o.current = t
        }, [t]), (0, M.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, r), () => {
            t.removeEventListener(e, i, r)
          }
        }, [e, n?.current, r])
      }
      n(68138), n(38476);
      var Dr = n(79719),
        Mr = n(44154);
      const Hr = {
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

      function Br(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function zr(e, t, n, r = .15) {
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Br(t - e, n - t, r) + t : e > n ? +Br(e - n, n - t, r) + n : e
      }

      function Fr(e, t, n) {
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

      function Vr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Ur(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vr(Object(n), !0).forEach(function(t) {
            Fr(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }
      const Gr = {
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

      function qr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Kr = ["enter", "leave"];
      const Xr = ["gotpointercapture", "lostpointercapture"];

      function Wr(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = Xr.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function $r(e) {
        return "touches" in e
      }

      function Zr(e) {
        return $r(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Yr(e) {
        return $r(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Qr(e, t) {
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

      function Jr(e, t) {
        const [n, r] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Qr(n, r)
      }

      function eo(e) {
        const t = Yr(e);
        return $r(e) ? t.identifier : t.pointerId
      }

      function to(e) {
        const t = Yr(e);
        return [t.clientX, t.clientY]
      }

      function no(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function ro(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function oo() {}

      function io(...e) {
        return 0 === e.length ? oo : 1 === e.length ? e[0] : function() {
          let t;
          for (const n of e) t = n.apply(this, arguments) || t;
          return t
        }
      }

      function so(e, t) {
        return Object.assign({}, t, e || {})
      }
      class ao {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? ro(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Hr.addTo(t._distance, e)
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
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = ro(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, [t, n], [r, o]) {
              const [
                [i, s],
                [a, l]
              ] = e;
              return [zr(t, i, s, r), zr(n, a, l, o)]
            }(t._bounds, t.offset, w), t.delta = Hr.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = Hr.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Hr.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(Ur(Ur(Ur({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class lo extends ao {
        constructor(...e) {
          super(...e), Fr(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Hr.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Hr.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[Zr(e)] : n.axisThreshold;
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
      const co = e => e,
        uo = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => Ur(Ur({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Hr.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Hr.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || co
          },
          threshold: e => Hr.toVector(e, 0)
        },
        fo = Ur(Ur({}, uo), {}, {
          axis(e, t, {
            axis: n
          }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => fo.bounds(e(t));
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
        ho = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        po = "undefined" != typeof window && window.document && window.document.createElement;

      function mo() {
        return po && "ontouchstart" in window
      }
      const vo = {
          isBrowser: po,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: mo(),
          touchscreen: mo() || po && window.navigator.maxTouchPoints > 1,
          pointer: po && "onpointerdown" in window,
          pointerLock: po && "exitPointerLock" in window.document
        },
        yo = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        go = Ur(Ur({}, fo), {}, {
          device(e, t, {
            pointer: {
              touch: n = !1,
              lock: r = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = r && vo.pointerLock, vo.touch && n ? "touch" : this.pointerLock ? "mouse" : vo.pointer && !o ? "pointer" : vo.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: n
          }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, vo.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
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
            const i = Hr.toVector(e, n ? r : o ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = r, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
          } = {}) {
            return {
              velocity: this.transform(Hr.toVector(e)),
              distance: this.transform(Hr.toVector(t)),
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
          axisThreshold: e => e ? Ur(Ur({}, yo), e) : yo,
          keyboardDisplacement: (e = 10) => e
        });

      function bo(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, s] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && s < 0 || n > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const wo = Ur(Ur({}, uo), {}, {
          device(e, t, {
            shared: n,
            pointer: {
              touch: r = !1
            } = {}
          }) {
            if (n.target && !vo.touch && vo.gesture) return "gesture";
            if (vo.touch && r) return "touch";
            if (vo.touchscreen) {
              if (vo.pointer) return "pointer";
              if (vo.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: n = {},
            angleBounds: r = {}
          }) {
            const o = e => {
                const t = so(ro(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = so(ro(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof n && "function" != typeof r ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, Hr.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        _o = Ur(Ur({}, fo), {}, {
          mouseOnly: (e = !0) => e
        }),
        Eo = fo,
        xo = fo,
        Po = Ur(Ur({}, fo), {}, {
          mouseOnly: (e = !0) => e
        }),
        Co = new Map,
        So = new Map;

      function To(e) {
        Co.set(e.key, e.engine), So.set(e.key, e.resolver)
      }
      const Oo = {
          key: "drag",
          engine: class extends lo {
            constructor(...e) {
              super(...e), Fr(this, "ingKey", "dragging")
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
                e._bounds = fo.bounds(r)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = eo(e), n._pointerActive = !0, this.computeValues(to(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Zr(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = eo(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = to(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Hr.sub(o, t._values), this.computeValues(o)), Hr.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = eo(e);
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
              const t = ho[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Hr.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in ho && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: go
        },
        Ro = {
          key: "hover",
          engine: class extends lo {
            constructor(...e) {
              super(...e), Fr(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(to(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = to(e);
              t._movement = t._delta = Hr.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Po
        },
        No = {
          key: "move",
          engine: class extends lo {
            constructor(...e) {
              super(...e), Fr(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(to(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = to(e),
                n = this.state;
              n._delta = Hr.sub(t, n._values), Hr.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: _o
        },
        jo = {
          key: "pinch",
          engine: class extends ao {
            constructor(...e) {
              super(...e), Fr(this, "ingKey", "pinching"), Fr(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Hr.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              const r = Jr(e, t._touchIds);
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
              const o = Qr(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Jr(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = Qr(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Hr.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-no(e)[1] / 100 * t.offset[0], 0], Hr.addTo(t._movement, t._delta), bo(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: wo
        },
        Io = {
          key: "scroll",
          engine: class extends lo {
            constructor(...e) {
              super(...e), Fr(this, "ingKey", "scrolling")
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
              t._delta = Hr.sub(n, t._values), Hr.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Eo
        },
        ko = {
          key: "wheel",
          engine: class extends lo {
            constructor(...e) {
              super(...e), Fr(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = no(e), Hr.addTo(t._movement, t._delta), bo(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: xo
        };
      const Ao = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (vo.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Lo = ["target", "eventOptions", "window", "enabled", "transform"];

      function Do(e = {}, t) {
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = Do(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class Mo {
        constructor(e, t) {
          Fr(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const n = Gr[e];
              return e + (n && n[t] || t)
            }(t, n),
            a = Ur(Ur({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class Ho {
        constructor() {
          Fr(this, "_timeouts", new Map)
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
      class Bo {
        constructor(e) {
          var t, n;
          Fr(this, "gestures", new Set), Fr(this, "_targetEventStore", new Mo(this)), Fr(this, "gestureEventStores", {}), Fr(this, "gestureTimeoutStores", {}), Fr(this, "handlers", {}), Fr(this, "config", {}), Fr(this, "pointerIds", new Set), Fr(this, "touchIds", new Set), Fr(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && zo(t, "drag"), n.wheel && zo(t, "wheel"), n.scroll && zo(t, "scroll"), n.move && zo(t, "move"), n.pinch && zo(t, "pinch"), n.hover && zo(t, "hover")
        }
        setEventIds(e) {
          return $r(e) ? (this.touchIds = new Set(function(e) {
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
              }(r, Lo);
            if (n.shared = Do({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, Ao), t) {
              const e = So.get(t);
              n[t] = Do(Ur({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = So.get(e);
                t && (n[e] = Do(Ur({
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
                  i = Fo(n, o.eventOptions, !!r);
                o.enabled && new(Co.get(t))(this, e, t).bind(i)
              }
              const o = Fo(n, t.eventOptions, !!r);
              for (const t in this.nativeHandlers) o(t, "", n => this.nativeHandlers[t](Ur(Ur({}, this.state.shared), {}, {
                event: n,
                args: e
              })), void 0, !0)
            }
            for (const e in n) n[e] = io(...n[e]);
            if (!r) return n;
            for (const e in n) {
              const {
                device: t,
                capture: o,
                passive: i
              } = Wr(e);
              this._targetEventStore.add(r, t, "", n[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function zo(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Mo(e, t), e.gestureTimeoutStores[t] = new Ho
      }
      const Fo = (e, t, n) => (r, o, i, s = {}, a = !1) => {
          var l, c;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = s.passive) && void 0 !== c ? c : t.passive;
          let f = a ? r : function(e, t = "", n = !1) {
            const r = Gr[e],
              o = r && r[t] || t;
            return "on" + qr(e) + qr(o) + (function(e = !1, t) {
              return e && !Kr.includes(t)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Vo = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Uo(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Co.has(r)) return;
        const s = n + "Start",
          a = n + "End";
        o[r] = e => {
          let r;
          return e.first && s in t && t[s](e), n in t && (r = t[n](e)), e.last && a in t && t[a](e), r
        }, i[r] = i[r] || {}
      }

      function Go(e, t = {}, n, r) {
        const o = H().useMemo(() => new Bo(e), []);
        if (o.applyHandlers(e, r), o.applyConfig(t, n), H().useEffect(o.effect.bind(o)), H().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function qo(e, t) {
        const n = ([Oo, jo, Io, ko, No, Ro].forEach(To), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) Vo.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return Uo(o, n, "onDrag", "drag", i, t), Uo(o, n, "onWheel", "wheel", i, t), Uo(o, n, "onScroll", "scroll", i, t), Uo(o, n, "onPinch", "pinch", i, t), Uo(o, n, "onMove", "move", i, t), Uo(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return Go(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      const Ko = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, n) => {
        e.onload = () => t(), e.onerror = n
      }), Xo = ([e, t]) => ({
        x: e,
        y: t
      }), Wo = (e, t) => (e.x = t.x, e.y = t.y, e), $o = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Zo = (e, t, n) => Math.min(Math.max(e, t), n);

      function Yo() {
        return Yo = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Yo.apply(null, arguments)
      }
      var Qo = ["shift", "alt", "meta", "mod", "ctrl"],
        Jo = {
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

      function ei(e) {
        return (e && Jo[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function ti(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function ni(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map(function(e) {
          return ei(e)
        });
        return Yo({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter(function(e) {
            return !Qo.includes(e)
          }),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && ii([ei(e.key), ei(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && si([ei(e.key), ei(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        ri.clear()
      });
      var ri = new Set;

      function oi(e) {
        return Array.isArray(e)
      }

      function ii(e) {
        var t = Array.isArray(e) ? e : [e];
        ri.has("meta") && ri.forEach(function(e) {
          return ! function(e) {
            return Qo.includes(e)
          }(e) && ri.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return ri.add(e.toLowerCase())
        })
      }

      function si(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? ri.clear() : t.forEach(function(e) {
          return ri.delete(e.toLowerCase())
        })
      }

      function ai(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, oi(t) ? Boolean(r && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        })) : Boolean(r && t && t)
      }
      var li = (0, M.createContext)(void 0);

      function ci(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, w.jsx)(li.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function ui(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(n, r) {
          return n && ui(e[r], t[r])
        }, !0) : e === t
      }
      var di = (0, M.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        fi = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, M.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
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
                  return !ui(t, e)
                })
              })
            }, []);
          return (0, w.jsx)(di.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, w.jsx)(ci, {
              addHotkey: h,
              removeHotkey: p,
              children: r
            })
          })
        },
        hi = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        pi = "undefined" != typeof window ? M.useLayoutEffect : M.useEffect;

      function mi(e, t, n, r) {
        var o = (0, M.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, M.useRef)(!1),
          l = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = oi(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          d = (0, M.useCallback)(t, null != u ? u : []),
          f = (0, M.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, M.useRef)(void 0);
            return ui(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, M.useContext)(di).enabledScopes,
          m = (0, M.useContext)(li);
        return pi(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !ai(e, ["input", "textarea", "select"]) || ai(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void hi(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != h && h.enableOnContentEditable) && ti(c, null == h ? void 0 : h.splitKey).forEach(function(n) {
                    var r, o = ni(n, null == h ? void 0 : h.combinationKey);
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
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = ei(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!n) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!p && !h) return !1
                          } else {
                            if (s === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (oi(r = u) ? r : r.split(o)).every(function(e) {
                          return ri.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == h ? void 0 : h.enabled)) return void hi(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              r = function(e) {
                void 0 !== e.key && (ii(ei(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (si(ei(e.code)), a.current = !1, null != h && h.keyup && n(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), m && ti(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(ni(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", r, null == l ? void 0 : l.eventListenerOptions), m && ti(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(ni(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [i, c, h, p]), s
      }

      function vi(e) {
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

      function yi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function gi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yi(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = vi(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yi(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function bi(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var wi = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        _i = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = gi(gi({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) wi(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bi(e.variantClassNames, e => bi(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1a74xwbm foundry_1a74xwbh",
          variantClassNames: {
            position: {
              top: "foundry_1a74xwbn",
              bottom: "foundry_1a74xwbo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      Dr.os.registerPlugin(Mr.L);
      const Ei = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        xi = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Pi = (0, B.Tm)("var(--foundry_1a74xwb0)");
      var Ci = n(78322);

      function Si(e, t) {
        var n = t && t.cache ? t.cache : Mi,
          r = t && t.serializer ? t.serializer : ji;
        return (t && t.strategy ? t.strategy : Ni)(e, {
          cache: n,
          serializer: r
        })
      }

      function Ti(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, r), t.set(i, s)), s
      }

      function Oi(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function Ri(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function Ni(e, t) {
        return Ri(e, this, 1 === e.length ? Ti : Oi, t.cache.create(), t.serializer)
      }
      var ji = function() {
        return JSON.stringify(arguments)
      };

      function Ii() {
        this.cache = Object.create(null)
      }
      Ii.prototype.get = function(e) {
        return this.cache[e]
      }, Ii.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ki, Ai, Li, Di, Mi = {
          create: function() {
            return new Ii
          }
        },
        Hi = {
          variadic: function(e, t) {
            return Ri(e, this, Oi, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Ri(e, this, Ti, t.cache.create(), t.serializer)
          }
        };

      function Bi(e) {
        return e.type === Ai.literal
      }

      function zi(e) {
        return e.type === Ai.argument
      }

      function Fi(e) {
        return e.type === Ai.number
      }

      function Vi(e) {
        return e.type === Ai.date
      }

      function Ui(e) {
        return e.type === Ai.time
      }

      function Gi(e) {
        return e.type === Ai.select
      }

      function qi(e) {
        return e.type === Ai.plural
      }

      function Ki(e) {
        return e.type === Ai.pound
      }

      function Xi(e) {
        return e.type === Ai.tag
      }

      function Wi(e) {
        return !(!e || "object" != typeof e || e.type !== Li.number)
      }

      function $i(e) {
        return !(!e || "object" != typeof e || e.type !== Li.dateTime)
      }(Di = ki || (ki = {}))[Di.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Di[Di.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Di[Di.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Di[Di.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Di[Di.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Di[Di.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Di[Di.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Di[Di.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Di[Di.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Di[Di.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Di[Di.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Di[Di.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Di[Di.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Di[Di.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Di[Di.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Di[Di.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Di[Di.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Di[Di.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Di[Di.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Di[Di.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Di[Di.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Di[Di.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Di[Di.INVALID_TAG = 23] = "INVALID_TAG", Di[Di.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Di[Di.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Di[Di.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Ai || (Ai = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Li || (Li = {}));
      var Zi = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Yi = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Qi(e) {
        var t = {};
        return e.replace(Yi, function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
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
      var Ji = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function es(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], n = 0, r = e.split(Ji).filter(function(e) {
            return e.length > 0
          }); n < r.length; n++) {
          var o = r[n].split("/");
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

      function ts(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var ns = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        rs = /^(@+)?(\+|#+)?[rs]?$/g,
        os = /(\*)(0+)|(#+)(0+)|(0+)/g,
        is = /^(0+)$/;

      function ss(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(rs, function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        }), t
      }

      function as(e) {
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

      function ls(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !is.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function cs(e) {
        return as(e) || {}
      }

      function us(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
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
              t.style = "unit", t.unit = ts(o.options[0]);
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
              t = (0, Ci.__assign)((0, Ci.__assign)((0, Ci.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, Ci.__assign)((0, Ci.__assign)({}, e), cs(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, Ci.__assign)((0, Ci.__assign)((0, Ci.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, Ci.__assign)((0, Ci.__assign)({}, e), cs(t))
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
              o.options[0].replace(os, function(e, n, r, o, i, s) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (is.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (ns.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(ns, function(e, n, r, o, i, s) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            });
            var i = o.options[0];
            "w" === i ? t = (0, Ci.__assign)((0, Ci.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Ci.__assign)((0, Ci.__assign)({}, t), ss(i)))
          } else if (rs.test(o.stem)) t = (0, Ci.__assign)((0, Ci.__assign)({}, t), ss(o.stem));
          else {
            var s = as(o.stem);
            s && (t = (0, Ci.__assign)((0, Ci.__assign)({}, t), s));
            var a = ls(o.stem);
            a && (t = (0, Ci.__assign)((0, Ci.__assign)({}, t), a))
          }
        }
        return t
      }
      var ds, fs = {
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

      function hs(e) {
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (fs[n || ""] || fs[r || ""] || fs["".concat(r, "-001")] || fs["001"])[0]
      }
      var ps = new RegExp("^".concat(Zi.source, "*")),
        ms = new RegExp("".concat(Zi.source, "*$"));

      function vs(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var ys = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        gs = !!String.fromCodePoint,
        bs = !!Object.fromEntries,
        ws = !!String.prototype.codePointAt,
        _s = !!String.prototype.trimStart,
        Es = !!String.prototype.trimEnd,
        xs = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Ps = !0;
      try {
        Ps = "a" === (null === (ds = Is("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === ds ? void 0 : ds[0])
      } catch (e) {
        Ps = !1
      }
      var Cs, Ss = ys ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Ts = gs ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Os = bs ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        Rs = ws ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Ns = _s ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ps, "")
        },
        js = Es ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ms, "")
        };

      function Is(e, t) {
        return new RegExp(e, t)
      }
      if (Ps) {
        var ks = Is("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Cs = function(e, t) {
          var n;
          return ks.lastIndex = t, null !== (n = ks.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else Cs = function(e, t) {
        for (var n = [];;) {
          var r = Rs(e, t);
          if (void 0 === r || Bs(r) || zs(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Ts.apply(void 0, n)
      };
      var As, Ls, Ds = function() {
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
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, n)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(ki.UNMATCHED_CLOSING_TAG, vs(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ms(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  r.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), r.push({
                  type: Ai.pound,
                  location: vs(s, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Ai.literal,
              value: "<".concat(r, "/>"),
              location: vs(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ms(this.char())) return this.error(ki.INVALID_TAG, vs(s, this.clonePosition()));
              var a = this.clonePosition();
              return r !== this.parseTagName() ? this.error(ki.UNMATCHED_CLOSING_TAG, vs(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ai.tag,
                  value: r,
                  children: i,
                  location: vs(n, this.clonePosition())
                },
                err: null
              } : this.error(ki.INVALID_TAG, vs(s, this.clonePosition())))
            }
            return this.error(ki.UNCLOSED_TAG, vs(n, this.clonePosition()))
          }
          return this.error(ki.INVALID_TAG, vs(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Hs(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) r += i;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                r += s
              }
            }
          }
          var a = vs(n, this.clonePosition());
          return {
            val: {
              type: Ai.literal,
              value: r,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ms(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return Ts.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Ts(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ki.EXPECT_ARGUMENT_CLOSING_BRACE, vs(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ki.EMPTY_ARGUMENT, vs(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(ki.MALFORMED_ARGUMENT, vs(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ki.EXPECT_ARGUMENT_CLOSING_BRACE, vs(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ai.argument,
                  value: r,
                  location: vs(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ki.EXPECT_ARGUMENT_CLOSING_BRACE, vs(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(ki.MALFORMED_ARGUMENT, vs(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = Cs(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: vs(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(ki.EXPECT_ARGUMENT_TYPE, vs(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = js(y.val)).length) return this.error(ki.EXPECT_ARGUMENT_STYLE, vs(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: vs(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var u = vs(r, this.clonePosition());
              if (l && Ss(null == l ? void 0 : l.style, "::", 0)) {
                var d = Ns(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Ai.number,
                    value: n,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ki.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = hs(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) n += "a";
                      for (; s-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Li.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Qi(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? Ai.date : Ai.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? Ai.number : "date" === s ? Ai.date : Ai.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ki.EXPECT_SELECT_ARGUMENT_OPTIONS, vs(p, (0, Ci.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ki.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, vs(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(ki.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ki.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var w = vs(r, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: Ai.select,
                  value: n,
                  options: Os(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Ai.plural,
                  value: n,
                  options: Os(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(ki.INVALID_ARGUMENT_TYPE, vs(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ki.EXPECT_ARGUMENT_CLOSING_BRACE, vs(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ki.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, vs(n, this.clonePosition()));
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
          var n = [];
          try {
            n = es(e)
          } catch (e) {
            return this.error(ki.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Li.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? us(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, s = [], a = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ki.EXPECT_PLURAL_ARGUMENT_SELECTOR, ki.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = vs(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? ki.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ki.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ki.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ki.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, vs(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: vs(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? ki.EXPECT_SELECT_ARGUMENT_SELECTOR : ki.EXPECT_PLURAL_ARGUMENT_SELECTOR, vs(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(ki.MISSING_OTHER_CLAUSE, vs(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = vs(r, this.clonePosition());
          return o ? xs(i *= n) ? {
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
          var t = Rs(this.message, e);
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
          if (Ss(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Bs(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Ms(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Hs(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Bs(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function zs(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Fs(e) {
        e.forEach(function(e) {
          if (delete e.location, Gi(e) || qi(e))
            for (var t in e.options) delete e.options[t].location, Fs(e.options[t].value);
          else Fi(e) && Wi(e.style) || (Vi(e) || Ui(e)) && $i(e.style) ? delete e.style.location : Xi(e) && Fs(e.children)
        })
      }

      function Vs(e, t) {
        void 0 === t && (t = {}), t = (0, Ci.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Ds(e, t).parse();
        if (n.err) {
          var r = SyntaxError(ki[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Fs(n.val), n.val
      }(Ls = As || (As = {})).MISSING_VALUE = "MISSING_VALUE", Ls.INVALID_VALUE = "INVALID_VALUE", Ls.MISSING_INTL_API = "MISSING_INTL_API";
      var Us, Gs = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, Ci.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        qs = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), As.INVALID_VALUE, o) || this
          }
          return (0, Ci.__extends)(t, e), t
        }(Gs),
        Ks = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), As.INVALID_VALUE, r) || this
          }
          return (0, Ci.__extends)(t, e), t
        }(Gs),
        Xs = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), As.MISSING_VALUE, n) || this
          }
          return (0, Ci.__extends)(t, e), t
        }(Gs);

      function Ws(e) {
        return "function" == typeof e
      }

      function $s(e, t, n, r, o, i, s) {
        if (1 === e.length && Bi(e[0])) return [{
          type: Us.literal,
          value: e[0].value
        }];
        for (var a = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (Bi(u)) a.push({
            type: Us.literal,
            value: u.value
          });
          else if (Ki(u)) "number" == typeof i && a.push({
            type: Us.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Xs(d, s);
            var f = o[d];
            if (zi(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), a.push({
              type: "string" == typeof f ? Us.literal : Us.object,
              value: f
            });
            else if (Vi(u)) {
              var h = "string" == typeof u.style ? r.date[u.style] : $i(u.style) ? u.style.parsedOptions : void 0;
              a.push({
                type: Us.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if (Ui(u)) h = "string" == typeof u.style ? r.time[u.style] : $i(u.style) ? u.style.parsedOptions : r.time.medium, a.push({
              type: Us.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (Fi(u))(h = "string" == typeof u.style ? r.number[u.style] : Wi(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), a.push({
              type: Us.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (Xi(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!Ws(v)) throw new Ks(m, "function", s);
                var y = v($s(p, t, n, r, o, i).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? Us.literal : Us.object,
                    value: e
                  }
                }))
              }
              if (Gi(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new qs(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, $s(g.value, t, n, r, o))
              } else if (qi(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Gs('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', As.MISSING_INTL_API, s);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new qs(u.value, f, Object.keys(u.options), s);
                a.push.apply(a, $s(g.value, t, n, r, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (w = a).length < 2 ? w : w.reduce(function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Us.literal && t.type === Us.literal ? n.value += t.value : e.push(t), e
        }, []);
        var w
      }

      function Zs(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Us || (Us = {}));
      var Ys, Qs = function() {
        function e(t, n, r, o) {
          void 0 === n && (n = e.defaultLocale);
          var i, s, a, l = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce(function(e, t) {
                return e.length && t.type === Us.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return $s(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              u = (c.formatters, (0, Ci.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, Ci.__assign)((0, Ci.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (s = e.formats, (a = r) ? Object.keys(s).reduce(function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, Ci.__assign)((0, Ci.__assign)((0, Ci.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
                return n[r] = (0, Ci.__assign)((0, Ci.__assign)({}, e[r]), t[r] || {}), n
              }, {})) : e
            }(s[t], a[t]), e
          }, (0, Ci.__assign)({}, s)) : s), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Si(function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Zs(i.number),
              strategy: Hi.variadic
            }),
            getDateTimeFormat: Si(function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Zs(i.dateTime),
              strategy: Hi.variadic
            }),
            getPluralRules: Si(function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Zs(i.pluralRules),
              strategy: Hi.variadic
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
        }, e.__parse = Vs, e.formats = {
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
      }(Ys || (Ys = {}));
      var Js = function(e) {
          function t(n, r, o) {
            var i = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, Ci.__extends)(t, e), t
        }(Error),
        ea = function(e) {
          function t(t, n) {
            return e.call(this, Ys.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, Ci.__extends)(t, e), t
        }(Js),
        ta = function(e) {
          function t(t, n) {
            return e.call(this, Ys.INVALID_CONFIG, t, n) || this
          }
          return (0, Ci.__extends)(t, e), t
        }(Js),
        na = function(e) {
          function t(t, n) {
            return e.call(this, Ys.MISSING_DATA, t, n) || this
          }
          return (0, Ci.__extends)(t, e), t
        }(Js),
        ra = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Ys.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, Ci.__extends)(t, e), t
        }(Js),
        oa = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, Ci.__extends)(t, e), t
        }(ra),
        ia = function(e) {
          function t(t, n) {
            var r = e.call(this, Ys.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, Ci.__extends)(t, e), t
        }(Js);

      function sa(e, t, n) {
        return void 0 === n && (n = {}), t.reduce(function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }, {})
      }
      var aa = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function la(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }

      function ca(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new ea("No ".concat(t, " format named: ").concat(n)))
      }

      function ua(e, t) {
        var n = t && t.cache ? t.cache : ya,
          r = t && t.serializer ? t.serializer : ma;
        return (t && t.strategy ? t.strategy : pa)(e, {
          cache: n,
          serializer: r
        })
      }

      function da(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, r), t.set(i, s)), s
      }

      function fa(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function ha(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function pa(e, t) {
        return ha(e, this, 1 === e.length ? da : fa, t.cache.create(), t.serializer)
      }
      var ma = function() {
        return JSON.stringify(arguments)
      };

      function va() {
        this.cache = Object.create(null)
      }
      va.prototype.get = function(e) {
        return this.cache[e]
      }, va.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ya = {
          create: function() {
            return new va
          }
        },
        ga = {
          variadic: function(e, t) {
            return ha(e, this, fa, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ha(e, this, da, t.cache.create(), t.serializer)
          }
        };

      function ba(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      ua(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ga.variadic
      }), ua(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ga.variadic
      }), ua(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ga.variadic
      }), ua(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ga.variadic
      }), ua(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: ga.variadic
      });
      var wa = (0, Ci.__assign)((0, Ci.__assign)({}, aa), {
        textComponent: M.Fragment
      });
      n(35255);
      var _a = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? M.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = M.createContext(null)),
        Ea = (_a.Consumer, _a.Provider),
        xa = _a;

      function Pa(e, t) {
        return Object.keys(e).reduce(function(n, r) {
          return n[r] = (0, Ci.__assign)({
            timeZone: t
          }, e[r]), n
        }, {})
      }

      function Ca(e, t) {
        return Object.keys((0, Ci.__assign)((0, Ci.__assign)({}, e), t)).reduce(function(n, r) {
          return n[r] = (0, Ci.__assign)((0, Ci.__assign)({}, e[r] || {}), t[r] || {}), n
        }, {})
      }

      function Sa(e, t) {
        if (!t) return e;
        var n = Qs.formats;
        return (0, Ci.__assign)((0, Ci.__assign)((0, Ci.__assign)({}, n), e), {
          date: Ca(Pa(n.date, t), Pa(e.date || {}, t)),
          time: Ca(Pa(n.time, t), Pa(e.time || {}, t))
        })
      }
      Si(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Hi.variadic
      }), Si(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Hi.variadic
      }), Si(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Hi.variadic
      }), Si(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Hi.variadic
      }), Si(function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Hi.variadic
      });
      var Ta = function(e, t, n, r, o) {
          var i = e.locale,
            s = e.formats,
            a = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
            d = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === n && (n = {
            id: ""
          });
          var p = n.id,
            m = n.defaultMessage;
          ! function(e, t, n) {
            if (void 0 === n && (n = Error), !e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = a && Object.prototype.hasOwnProperty.call(a, v) && a[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === Ai.literal) return y[0].value;
          if (!r && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, Ci.__assign)((0, Ci.__assign)({}, h), r || {}), s = Sa(s, f), c = Sa(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new ia(n, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(r)
            } catch (e) {
              return d(new oa('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, s, (0, Ci.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new oa('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            d(new oa('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        Oa = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Ra(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var s = n.format,
          a = s && ca(o, "number", s, i) || {};
        return t(r, sa(n, Oa, a))
      }

      function Na(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return Ra(e, t, r).format(n)
        } catch (t) {
          e.onError(new ra("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function ja(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return Ra(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new ra("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Ia = ["numeric", "style"];

      function ka(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Gs('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', As.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var s = n.format,
              a = !!s && ca(o, "relative", s, i) || {};
            return t(r, sa(n, Ia, a))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new ra("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var Aa = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function La(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          s = e.onError,
          a = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          c = (0, Ci.__assign)((0, Ci.__assign)({}, a && {
            timeZone: a
          }), l && ca(i, t, l, s)),
          u = sa(r, Aa, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, Ci.__assign)((0, Ci.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function Da(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return La(e, "date", t, s).format(a)
        } catch (t) {
          e.onError(new ra("Error formatting date.", e.locale, t))
        }
        return String(a)
      }

      function Ma(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return La(e, "time", t, s).format(a)
        } catch (t) {
          e.onError(new ra("Error formatting time.", e.locale, t))
        }
        return String(a)
      }

      function Ha(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          s = n[2],
          a = void 0 === s ? {} : s,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = sa(a, Aa, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new ra("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Ba(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return La(e, "date", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new ra("Error formatting date.", e.locale, t))
        }
        return []
      }

      function za(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return La(e, "time", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new ra("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Fa = ["type"];

      function Va(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Gs('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', As.MISSING_INTL_API));
        var s = sa(r, Fa);
        try {
          return t(o, s).select(n)
        } catch (e) {
          i(new ra("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ua = ["type", "style"],
        Ga = Date.now();

      function qa(e, t, n, r) {
        void 0 === r && (r = {});
        var o = Ka(e, t, n, r).reduce(function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Ka(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Gs('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', As.MISSING_INTL_API));
        var s = sa(r, Ua);
        try {
          var a = {},
            l = n.map(function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Ga, "_").concat(e, "_").concat(Ga)
                }(t);
                return a[n] = e, n
              }
              return String(e)
            });
          return t(o, s).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, Ci.__assign)((0, Ci.__assign)({}, e), {
              value: a[e.value] || e.value
            })
          })
        } catch (e) {
          i(new ra("Error formatting list.", o, e))
        }
        return n
      }
      var Xa, Wa, $a, Za = ["style", "type", "fallback", "languageDisplay"];

      function Ya(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Gs('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', As.MISSING_INTL_API));
        var s = sa(r, Za);
        try {
          return t(o, s).of(n)
        } catch (e) {
          i(new ra("Error formatting display name.", o, e))
        }
      }

      function Qa(e, t) {
        var n = function(e) {
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
              n = Intl.ListFormat,
              r = Intl.DisplayNames,
              o = Si(function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
              }, {
                cache: la(e.dateTime),
                strategy: Hi.variadic
              }),
              i = Si(function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
              }, {
                cache: la(e.number),
                strategy: Hi.variadic
              }),
              s = Si(function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Ci.__spreadArray)([void 0], t, !1)))
              }, {
                cache: la(e.pluralRules),
                strategy: Hi.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: Si(function(e, t, n, r) {
                return new Qs(e, t, n, (0, Ci.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: s
                  }
                }, r || {}))
              }, {
                cache: la(e.message),
                strategy: Hi.variadic
              }),
              getRelativeTimeFormat: Si(function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, Ci.__spreadArray)([void 0], e, !1)))
              }, {
                cache: la(e.relativeTime),
                strategy: Hi.variadic
              }),
              getPluralRules: s,
              getListFormat: Si(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Ci.__spreadArray)([void 0], e, !1)))
              }, {
                cache: la(e.list),
                strategy: Hi.variadic
              }),
              getDisplayNames: Si(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Ci.__spreadArray)([void 0], e, !1)))
              }, {
                cache: la(e.displayNames),
                strategy: Hi.variadic
              })
            }
          }(t),
          r = (0, Ci.__assign)((0, Ci.__assign)({}, aa), e),
          o = r.locale,
          i = r.defaultLocale,
          s = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new na('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new na('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new ta('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, Ci.__assign)((0, Ci.__assign)({}, r), {
            formatters: n,
            formatNumber: Na.bind(null, r, n.getNumberFormat),
            formatNumberToParts: ja.bind(null, r, n.getNumberFormat),
            formatRelativeTime: ka.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Da.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Ba.bind(null, r, n.getDateTimeFormat),
            formatTime: Ma.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Ha.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: za.bind(null, r, n.getDateTimeFormat),
            formatPlural: Va.bind(null, r, n.getPluralRules),
            formatMessage: Ta.bind(null, r, n),
            $t: Ta.bind(null, r, n),
            formatList: qa.bind(null, r, n.getListFormat),
            formatListToParts: Ka.bind(null, r, n.getListFormat),
            formatDisplayName: Ya.bind(null, r, n.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Xa || (Xa = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Wa || (Wa = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }($a || ($a = {}));
      var Ja, el = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        tl = {
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

      function nl(e) {
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
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (tl[n || ""] || tl[r || ""] || tl["".concat(r, "-001")] || tl["001"])[0]
      }
      var rl = new RegExp("^".concat(el.source, "*")),
        ol = new RegExp("".concat(el.source, "*$"));

      function il(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var sl = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        al = !!String.fromCodePoint,
        ll = !!Object.fromEntries,
        cl = !!String.prototype.codePointAt,
        ul = !!String.prototype.trimStart,
        dl = !!String.prototype.trimEnd,
        fl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        hl = !0;
      try {
        hl = "a" === (null === (Ja = El("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Ja ? void 0 : Ja[0])
      } catch (e) {
        hl = !1
      }
      var pl, ml, vl = sl ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        yl = al ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        gl = ll ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        bl = cl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        wl = ul ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(rl, "")
        },
        _l = dl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ol, "")
        };

      function El(e, t) {
        return new RegExp(e, t)
      }
      if (hl) {
        var xl = El("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        pl = function(e, t) {
          var n;
          return xl.lastIndex = t, null !== (n = xl.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else pl = function(e, t) {
        for (var n = [];;) {
          var r = bl(e, t);
          if (void 0 === r || Sl(r) || Tl(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return yl.apply(void 0, n)
      };

      function Pl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Cl(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Sl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Tl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Ol(e) {
        return e ? Object.keys(e).reduce(function(t, n) {
          var r, o = e[n];
          return t[n] = "function" == typeof o ? (r = o, function(e) {
            return r(M.Children.toArray(e))
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
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, n)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(Xa.UNMATCHED_CLOSING_TAG, il(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Pl(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  r.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), r.push({
                  type: Wa.pound,
                  location: il(s, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Wa.literal,
              value: "<".concat(r, "/>"),
              location: il(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Pl(this.char())) return this.error(Xa.INVALID_TAG, il(s, this.clonePosition()));
              var a = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Xa.UNMATCHED_CLOSING_TAG, il(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Wa.tag,
                  value: r,
                  children: i,
                  location: il(n, this.clonePosition())
                },
                err: null
              } : this.error(Xa.INVALID_TAG, il(s, this.clonePosition())))
            }
            return this.error(Xa.UNCLOSED_TAG, il(n, this.clonePosition()))
          }
          return this.error(Xa.INVALID_TAG, il(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Cl(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) r += i;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                r += s
              }
            }
          }
          var a = il(n, this.clonePosition());
          return {
            val: {
              type: Wa.literal,
              value: r,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Pl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return yl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), yl(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Xa.EXPECT_ARGUMENT_CLOSING_BRACE, il(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Xa.EMPTY_ARGUMENT, il(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Xa.MALFORMED_ARGUMENT, il(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Xa.EXPECT_ARGUMENT_CLOSING_BRACE, il(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Wa.argument,
                  value: r,
                  location: il(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Xa.EXPECT_ARGUMENT_CLOSING_BRACE, il(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Xa.MALFORMED_ARGUMENT, il(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = pl(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: il(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(Xa.EXPECT_ARGUMENT_TYPE, il(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = _l(y.val)).length) return this.error(Xa.EXPECT_ARGUMENT_STYLE, il(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: il(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var u = il(r, this.clonePosition());
              if (l && vl(null == l ? void 0 : l.style, "::", 0)) {
                var d = wl(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Wa.number,
                    value: n,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Xa.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = nl(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) n += "a";
                      for (; s-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: $a.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Qi(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? Wa.date : Wa.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? Wa.number : "date" === s ? Wa.date : Wa.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Xa.EXPECT_SELECT_ARGUMENT_OPTIONS, il(p, (0, Ci.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Xa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, il(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Xa.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xa.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(r)).err) return g;
              var w = il(r, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: Wa.select,
                  value: n,
                  options: gl(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Wa.plural,
                  value: n,
                  options: gl(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Xa.INVALID_ARGUMENT_TYPE, il(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Xa.EXPECT_ARGUMENT_CLOSING_BRACE, il(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Xa.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, il(n, this.clonePosition()));
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
          var n = [];
          try {
            n = es(e)
          } catch (e) {
            return this.error(Xa.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: $a.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? us(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, s = [], a = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Xa.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xa.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = il(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? Xa.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Xa.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Xa.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Xa.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, il(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: il(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? Xa.EXPECT_SELECT_ARGUMENT_SELECTOR : Xa.EXPECT_PLURAL_ARGUMENT_SELECTOR, il(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Xa.MISSING_OTHER_CLAUSE, il(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, i = 10 * i + (s - 48), this.bump()
          }
          var a = il(r, this.clonePosition());
          return o ? fl(i *= n) ? {
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
          var t = bl(this.message, e);
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
          if (vl(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Sl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }(),
      function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(ml || (ml = {}));
      var Rl = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var s = Ol(r),
            a = Ta.apply(void 0, (0, Ci.__spreadArray)([e, t, n, s], o, !1));
          return Array.isArray(a) ? M.Children.toArray(a) : a
        },
        Nl = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, Ci.__rest)(e, ["defaultRichTextElements"]),
            o = Ol(n),
            i = Qa((0, Ci.__assign)((0, Ci.__assign)((0, Ci.__assign)({}, wa), r), {
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
          return (0, Ci.__assign)((0, Ci.__assign)({}, i), {
            formatMessage: Rl.bind(null, s, i.formatters),
            $t: Rl.bind(null, s, i.formatters)
          })
        };

      function jl(e) {
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
      var Il = function(e) {
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
            intl: Nl(jl(t.props), t.cache),
            prevConfig: jl(t.props)
          }, t
        }
        return (0, Ci.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = jl(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var n = Object.keys(e),
              r = Object.keys(t),
              o = n.length;
            if (r.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var s = n[i];
              if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
            }
            return !0
          }(n, o) ? null : {
            intl: Nl(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ba(this.state.intl), M.createElement(Ea, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = wa, t
      }(M.PureComponent);
      const kl = Il;

      function Al() {
        var e = M.useContext(xa);
        return ba(e), e
      }
      var Ll, Dl;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Ll || (Ll = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Dl || (Dl = {}));
      var Ml = function(e) {
        var t = Al(),
          n = e.value,
          r = e.children,
          o = (0, Ci.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Hl(e) {
        var t = function(t) {
          var n = Al(),
            r = t.value,
            o = t.children,
            i = (0, Ci.__rest)(t, ["value", "children"]),
            s = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(s, i) : n.formatTimeToParts(s, i))
        };
        return t.displayName = Dl[e], t
      }

      function Bl(e) {
        var t = function(t) {
          var n = Al(),
            r = t.value,
            o = t.children,
            i = (0, Ci.__rest)(t, ["value", "children"]),
            s = n[e](r, i);
          if ("function" == typeof o) return o(s);
          var a = n.textComponent || M.Fragment;
          return M.createElement(a, null, s)
        };
        return t.displayName = Ll[e], t
      }
      Ml.displayName = "FormattedNumberParts", Ml.displayName = "FormattedNumberParts", Bl("formatDate"), Bl("formatTime"), Bl("formatNumber"), Bl("formatList"), Bl("formatDisplayName"), Hl("formatDate"), Hl("formatTime");
      const zl = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, i] = (0, M.useState)(null);
          return (0, M.useEffect)(() => {
            (t?.[n] ?? t["en-US"]).then(e => {
              i(e.default)
            })
          }, [n]), o ? (0, w.jsx)(kl, {
            locale: n,
            messages: o,
            children: e
          }) : r ?? null
        },
        Fl = {
          "en-US": n.e(9760).then(n.bind(n, 9760)),
          "de-DE": n.e(7407).then(n.bind(n, 27407)),
          "es-ES": n.e(173).then(n.bind(n, 40173)),
          "es-MX": n.e(68).then(n.bind(n, 30068)),
          "fr-FR": n.e(8325).then(n.bind(n, 38325)),
          "it-IT": n.e(5415).then(n.bind(n, 75415)),
          "ja-JP": n.e(3896).then(n.bind(n, 3896)),
          "ko-KR": n.e(1758).then(n.bind(n, 11758)),
          "pl-PL": n.e(5265).then(n.bind(n, 5265)),
          "pt-BR": n.e(8845).then(n.bind(n, 28845)),
          "ru-RU": n.e(6471).then(n.bind(n, 96471)),
          "zh-CN": n.e(8938).then(n.bind(n, 58938)),
          "zh-TW": n.e(2234).then(n.bind(n, 82234))
        };
      var Vl = n(25778),
        Ul = n(82543);
      class Gl {
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
          return n ? t : Zo(t, this.max[e], this.min[e])
        }
      }
      class ql {
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
      class Kl {
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
      class Xl {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Wo(this.startPan, this.slide.pan)
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
          })(this.prevTap, r) < 25 && this.slide.tapHandler.doubleTap(r, o)) : (Wo(this.prevTap, {
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
          if (this.slide.getOverlayOpacity() < 1 && "y" === e) {
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
      class Wl {
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
          e.src = this.thumbnail.currentSrc ?? "", await Ko(e)
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
      class $l {
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
      class Zl extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, n, r) {
          super(e), this.point = n, this.tapTarget = t, this.originalEvent = r
        }
      }
      class Yl extends Kl {
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
          if (!this.dispatch(e, new Zl(e, t, n, r)).defaultPrevented) switch (this.options[e]) {
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
      class Ql {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Xo(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Wo(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const n = this.slide.zoomLevels.min,
            r = this.slide.zoomLevels.max;
          this.zoomPoint = Xo(e);
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
            i = Wo({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Wo({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Wo(this.startPan, i)), r && (s = {
            x: this.calculatePanForZoomLevel("x", n),
            y: this.calculatePanForZoomLevel("y", n)
          }), this.slide.setZoomLevel(n, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || r || o) && (Wo(this.slide.pan, s), this.slide.setZoomLevel(n))
        }
      }
      class Jl extends Kl {
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
          zoomLevelOptions: n,
          actionOptions: r
        }) {
          super(), this.width = e, this.height = t, this.opener = new Wl({
            slide: this
          }), this.bounds = new Gl({
            slide: this
          }), this.dragHandler = new Xl({
            slide: this
          }), this.scrollWheel = new $l({
            slide: this
          }), this.zoomHandler = new Ql({
            slide: this
          }), this.zoomLevels = new ql({
            options: n
          }), this.tapHandler = new Yl({
            options: r,
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
        panTo(e, t, n) {
          this.pan.x = this.bounds.correctPan("x", e, n), this.pan.y = this.bounds.correctPan("y", t, n)
        }
        zoomTo(e, t, n) {
          const r = this.currZoomLevel;
          n || (e = Zo(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, r), this.pan.y = this.calculateZoomToPanOffset("y", t, r), $o(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            n = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(n), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), $o(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Wo(this.pan, this.bounds.center)
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
      var ec = n(7454);
      const tc = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        nc = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        rc = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        oc = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        ic = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        sc = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        ac = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        lc = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        cc = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        uc = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        dc = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var fc = "foundry_bc732x1";
      const hc = (0, M.forwardRef)(({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, r) => (mi(e, e => n?.(e), [n]), (0, w.jsx)(wr, {
          size: "XS",
          className: (0, ue.clsx)("foundry_bc732x0", {
            [fc]: t
          }),
          asChild: !0,
          children: (0, w.jsx)("kbd", {
            ref: r,
            children: e
          })
        }))),
        pc = new Map;

      function mc(e, t) {
        if (e === t) return e;
        const n = pc.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = pc.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function vc(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function yc(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = vc(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = mc(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var gc;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(gc || (gc = {})), Symbol.toStringTag;
      var bc = Lc(),
        wc = e => jc(e, bc),
        _c = Lc();
      wc.write = e => jc(e, _c);
      var Ec = Lc();
      wc.onStart = e => jc(e, Ec);
      var xc = Lc();
      wc.onFrame = e => jc(e, xc);
      var Pc = Lc();
      wc.onFinish = e => jc(e, Pc);
      var Cc = [];
      wc.setTimeout = (e, t) => {
        const n = wc.now() + t,
          r = () => {
            const e = Cc.findIndex(e => e.cancel == r);
            ~e && Cc.splice(e, 1), Rc -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return Cc.splice(Sc(n), 0, o), Rc += 1, Ic(), o
      };
      var Sc = e => ~(~Cc.findIndex(t => t.time > e) || ~Cc.length);
      wc.cancel = e => {
        Ec.delete(e), xc.delete(e), Pc.delete(e), bc.delete(e), _c.delete(e)
      }, wc.sync = e => {
        Nc = !0, wc.batchedUpdates(e), Nc = !1
      }, wc.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, wc.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          Ec.delete(n), t = null
        }, r
      };
      var Tc = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      wc.use = e => Tc = e, wc.now = "undefined" != typeof performance ? () => performance.now() : Date.now, wc.batchedUpdates = e => e(), wc.catch = console.error, wc.frameLoop = "always", wc.advance = () => {
        "demand" !== wc.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ac()
      };
      var Oc = -1,
        Rc = 0,
        Nc = !1;

      function jc(e, t) {
        Nc ? (t.delete(e), e(0)) : (t.add(e), Ic())
      }

      function Ic() {
        Oc < 0 && (Oc = 0, "demand" !== wc.frameLoop && Tc(kc))
      }

      function kc() {
        ~Oc && (Tc(kc), wc.batchedUpdates(Ac))
      }

      function Ac() {
        const e = Oc;
        Oc = wc.now();
        const t = Sc(Oc);
        t && (Dc(Cc.splice(0, t), e => e.handler()), Rc -= t), Rc ? (Ec.flush(), bc.flush(e ? Math.min(64, Oc - e) : 16.667), xc.flush(), _c.flush(), Pc.flush()) : Oc = -1
      }

      function Lc() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Rc += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Rc -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Rc -= t.size, Dc(t, t => t(n) && e.add(t)), Rc += e.size, t = e)
          }
        }
      }

      function Dc(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            wc.catch(e)
          }
        })
      }
      var Mc = Object.defineProperty,
        Hc = {};

      function Bc() {}((e, t) => {
        for (var n in t) Mc(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Hc, {
        assign: () => Jc,
        colors: () => Zc,
        createStringInterpolator: () => Kc,
        skipAnimation: () => Yc,
        to: () => Xc,
        willAdvance: () => Qc
      });
      var zc = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Fc(e, t) {
        if (zc.arr(e)) {
          if (!zc.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Vc = (e, t) => e.forEach(t);

      function Uc(e, t, n) {
        if (zc.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Gc = e => zc.und(e) ? [] : zc.arr(e) ? e : [e];

      function qc(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Vc(n, t)
        }
      }
      var Kc, Xc, Wc = (e, ...t) => qc(e, e => e(...t)),
        $c = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Zc = null,
        Yc = !1,
        Qc = Bc,
        Jc = e => {
          e.to && (Xc = e.to), e.now && (wc.now = e.now), void 0 !== e.colors && (Zc = e.colors), null != e.skipAnimation && (Yc = e.skipAnimation), e.createStringInterpolator && (Kc = e.createStringInterpolator), e.requestAnimationFrame && wc.use(e.requestAnimationFrame), e.batchedUpdates && (wc.batchedUpdates = e.batchedUpdates), e.willAdvance && (Qc = e.willAdvance), e.frameLoop && (wc.frameLoop = e.frameLoop)
        },
        eu = new Set,
        tu = [],
        nu = [],
        ru = 0,
        ou = {
          get idle() {
            return !eu.size && !tu.length
          },
          start(e) {
            ru > e.priority ? (eu.add(e), wc.onStart(iu)) : (su(e), wc(lu))
          },
          advance: lu,
          sort(e) {
            if (ru) wc.onFrame(() => ou.sort(e));
            else {
              const t = tu.indexOf(e);
              ~t && (tu.splice(t, 1), au(e))
            }
          },
          clear() {
            tu = [], eu.clear()
          }
        };

      function iu() {
        eu.forEach(su), eu.clear(), wc(lu)
      }

      function su(e) {
        tu.includes(e) || au(e)
      }

      function au(e) {
        tu.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(tu), 0, e)
      }

      function lu(e) {
        const t = nu;
        for (let n = 0; n < tu.length; n++) {
          const r = tu[n];
          ru = r.priority, r.idle || (Qc(r), r.advance(e), r.idle || t.push(r))
        }
        return ru = 0, (nu = tu).length = 0, (tu = t).length > 0
      }
      var cu = "[-+]?\\d*\\.?\\d+",
        uu = cu + "%";

      function du(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var fu = new RegExp("rgb" + du(cu, cu, cu)),
        hu = new RegExp("rgba" + du(cu, cu, cu, cu)),
        pu = new RegExp("hsl" + du(cu, uu, uu)),
        mu = new RegExp("hsla" + du(cu, uu, uu, cu)),
        vu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        yu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        gu = /^#([0-9a-fA-F]{6})$/,
        bu = /^#([0-9a-fA-F]{8})$/;

      function wu(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function _u(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = wu(o, r, e + 1 / 3),
          s = wu(o, r, e),
          a = wu(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function Eu(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function xu(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Pu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Cu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Su(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = gu.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Zc && void 0 !== Zc[e] ? Zc[e] : (t = fu.exec(e)) ? (Eu(t[1]) << 24 | Eu(t[2]) << 16 | Eu(t[3]) << 8 | 255) >>> 0 : (t = hu.exec(e)) ? (Eu(t[1]) << 24 | Eu(t[2]) << 16 | Eu(t[3]) << 8 | Pu(t[4])) >>> 0 : (t = vu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = bu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = yu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = pu.exec(e)) ? (255 | _u(xu(t[1]), Cu(t[2]), Cu(t[3]))) >>> 0 : (t = mu.exec(e)) ? (_u(xu(t[1]), Cu(t[2]), Cu(t[3])) | Pu(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Tu = (e, t, n) => {
          if (zc.fun(e)) return e;
          if (zc.arr(e)) return Tu({
            range: e,
            output: t,
            extrapolate: n
          });
          if (zc.str(e.output[0])) return Kc(e);
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
        Ou = 1.70158,
        Ru = 1.525 * Ou,
        Nu = Ou + 1,
        ju = 2 * Math.PI / 3,
        Iu = 2 * Math.PI / 4.5,
        ku = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        Au = {
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
          easeInBack: e => Nu * e * e * e - Ou * e * e,
          easeOutBack: e => 1 + Nu * Math.pow(e - 1, 3) + Ou * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Ru) / 2 : (Math.pow(2 * e - 2, 2) * ((Ru + 1) * (2 * e - 2) + Ru) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ju),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ju) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Iu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Iu) / 2 + 1,
          easeInBounce: e => 1 - ku(1 - e),
          easeOutBounce: ku,
          easeInOutBounce: e => e < .5 ? (1 - ku(1 - 2 * e)) / 2 : (1 + ku(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        Lu = Symbol.for("FluidValue.get"),
        Du = Symbol.for("FluidValue.observers"),
        Mu = e => Boolean(e && e[Lu]),
        Hu = e => e && e[Lu] ? e[Lu]() : e,
        Bu = e => e[Du] || null;

      function zu(e, t) {
        const n = e[Du];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Fu = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Vu(this, e)
          }
        },
        Vu = (e, t) => Ku(e, Lu, t);

      function Uu(e, t) {
        if (e[Lu]) {
          let n = e[Du];
          n || Ku(e, Du, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Gu(e, t) {
        const n = e[Du];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Du] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var qu, Ku = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Xu = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Wu = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        $u = new RegExp(`(${Xu.source})(%|[a-z]+)`, "i"),
        Zu = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Yu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Qu = e => {
          const [t, n] = Ju(e);
          if (!t || $c()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Yu.test(n) ? Qu(n) : n || e
        },
        Ju = e => {
          const t = Yu.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        ed = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        td = e => {
          qu || (qu = Zc ? new RegExp(`(${Object.keys(Zc).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Hu(e).replace(Yu, Qu).replace(Wu, Su).replace(qu, Su)),
            n = t.map(e => e.match(Xu).map(Number)),
            r = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = r.map(t => Tu({
              ...e,
              output: t
            }));
          return e => {
            const n = !$u.test(t[0]) && t.find(e => $u.test(e))?.replace(Xu, "");
            let r = 0;
            return t[0].replace(Xu, () => `${o[r++](e)}${n||""}`).replace(Zu, ed)
          }
        },
        nd = "react-spring: ",
        rd = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${nd}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        od = rd(console.warn),
        id = rd(console.warn);

      function sd(e) {
        return zc.str(e) && ("#" == e[0] || /\d/.test(e) || !$c() && Yu.test(e) || e in (Zc || {}))
      }
      var ad = $c() ? M.useEffect : M.useLayoutEffect;

      function ld() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return ad(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var cd = e => (0, M.useEffect)(e, ud),
        ud = [];

      function dd(e) {
        const t = (0, M.useRef)();
        return (0, M.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var fd = Symbol.for("Animated:node"),
        hd = e => e && e[fd],
        pd = (e, t) => {
          return n = e, r = fd, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        md = e => e && e[fd] && e[fd].getPayload(),
        vd = class {
          constructor() {
            pd(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        yd = class extends vd {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, zc.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new yd(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return zc.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, zc.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        gd = class extends yd {
          constructor(e) {
            super(0), this._string = null, this._toString = Tu({
              output: [e, e]
            })
          }
          static create(e) {
            return new gd(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (zc.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Tu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        bd = {
          dependencies: null
        },
        wd = class extends vd {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Uc(this.source, (n, r) => {
              var o;
              (o = n) && o[fd] === o ? t[r] = n.getValue(e) : Mu(n) ? t[r] = Hu(n) : e || (t[r] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Vc(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Uc(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            bd.dependencies && Mu(e) && bd.dependencies.add(e);
            const t = md(e);
            t && Vc(t, e => this.add(e))
          }
        },
        _d = class extends wd {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new _d(e)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(Ed)), !0)
          }
        };

      function Ed(e) {
        return (sd(e) ? gd : yd).create(e)
      }

      function xd(e) {
        const t = hd(e);
        return t ? t.constructor : zc.arr(e) ? _d : sd(e) ? gd : yd
      }
      var Pd = (e, t) => {
          const n = !zc.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((r, o) => {
            const i = (0, M.useRef)(null),
              s = n && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (zc.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const n = new Set;
                return bd.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new wd(e), bd.dependencies = null, [e, n]
              }(r, t),
              c = ld(),
              u = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new Cd(u, l),
              f = (0, M.useRef)();
            ad(() => (f.current = d, Vc(l, e => Uu(e, d)), () => {
              f.current && (Vc(f.current.deps, e => Gu(e, f.current)), wc.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), cd(() => () => {
              const e = f.current;
              Vc(e.deps, t => Gu(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        Cd = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && wc.write(this.update)
          }
        },
        Sd = Symbol.for("AnimatedComponent"),
        Td = e => zc.str(e) ? e : e && zc.str(e.displayName) ? e.displayName : zc.fun(e) && e.name || null;

      function Od(e, ...t) {
        return zc.fun(e) ? e(...t) : e
      }
      var Rd = (e, t) => !0 === e || !!(t && e && (zc.fun(e) ? e(t) : Gc(e).includes(t))),
        Nd = (e, t) => zc.obj(e) ? t && e[t] : e,
        jd = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Id = e => e,
        kd = (e, t = Id) => {
          let n = Ad;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            zc.und(n) || (r[o] = n)
          }
          return r
        },
        Ad = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ld = {
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

      function Dd(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Uc(e, (e, r) => {
              Ld[r] || (t[r] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Uc(e, (e, r) => r in t || (n[r] = e)), n
        }
        return {
          ...e
        }
      }

      function Md(e) {
        return e = Hu(e), zc.arr(e) ? e.map(Md) : sd(e) ? Hc.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Hd(e) {
        return zc.fun(e) || zc.arr(e) && zc.obj(e[0])
      }
      var Bd = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Au.linear,
          clamp: !1
        },
        zd = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Bd)
          }
        };

      function Fd(e, t) {
        if (zc.und(t.decay)) {
          const n = !zc.und(t.tension) || !zc.und(t.friction);
          !n && zc.und(t.frequency) && zc.und(t.damping) && zc.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Vd = [],
        Ud = class {
          constructor() {
            this.changed = !1, this.values = Vd, this.toValues = null, this.fromValues = Vd, this.config = new zd, this.immediate = !1
          }
        };

      function Gd(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = Rd(n.cancel ?? r?.cancel, t);
          if (u) h();
          else {
            zc.und(n.pause) || (o.paused = Rd(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || Rd(e, t)), l = Od(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - wc.now()
          }

          function f() {
            l > 0 && !Hc.skipAnimation ? (o.delayed = !0, c = wc.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
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
      var qd = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? Wd(e.get()) : t.every(e => e.noop) ? Kd(e.get()) : Xd(e.get(), t.every(e => e.finished)),
        Kd = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Xd = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Wd = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function $d(e, t, n, r) {
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
          const c = kd(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (n.cancelId || 0) && Wd(r) || o !== n.asyncId && Xd(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Yd,
                s = new Qd;
              return (async () => {
                if (Hc.skipAnimation) throw Zd(n), s.result = Xd(r, !1), d(s), s;
                h(i);
                const a = zc.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, Uc(c, (e, t) => {
                  zc.und(a[t]) && (a[t] = e)
                });
                const l = await r.start(a);
                return h(i), n.paused && await new Promise(e => {
                  n.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (Hc.skipAnimation) return Zd(n), Xd(r, !1);
          try {
            let t;
            t = zc.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), f]), m = Xd(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Yd) m = e.result;
            else {
              if (!(e instanceof Qd)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? l : void 0)
          }
          return zc.fun(s) && wc.batchedUpdates(() => {
            s(m, r, r.item)
          }), m
        })() : l
      }

      function Zd(e, t) {
        qc(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Yd = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Qd = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Jd = e => e instanceof tf,
        ef = 1,
        tf = class extends Fu {
          constructor() {
            super(...arguments), this.id = ef++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = hd(this);
            return e && e.getValue()
          }
          to(...e) {
            return Hc.to(this, e)
          }
          interpolate(...e) {
            return od(`${nd}The "interpolate" function is deprecated in v9 (use "to" instead)`), Hc.to(this, e)
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
            zu(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ou.sort(this), zu(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        nf = Symbol.for("SpringPhase"),
        rf = e => (1 & e[nf]) > 0,
        of = e => (2 & e[nf]) > 0,
        sf = e => (4 & e[nf]) > 0,
        af = (e, t) => t ? e[nf] |= 3 : e[nf] &= -3,
        lf = (e, t) => t ? e[nf] |= 4 : e[nf] &= -5,
        cf = class extends tf {
          constructor(e, t) {
            if (super(), this.animation = new Ud, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !zc.und(e) || !zc.und(t)) {
              const n = zc.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              zc.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(of(this) || this._state.asyncTo) || sf(this)
          }
          get goal() {
            return Hu(this.animation.to)
          }
          get velocity() {
            const e = hd(this);
            return e instanceof yd ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return rf(this)
          }
          get isAnimating() {
            return of(this)
          }
          get isPaused() {
            return sf(this)
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
            } = r, s = md(r.to);
            !s && Mu(r.to) && (o = Gc(Hu(r.to))), r.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == gd ? 1 : s ? s[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = zc.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (zc.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(a.lastPosition - d) <= f, s = o * r
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !zc.und(r),
                      h = n == c ? a.v0 > 0 : n < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (s = -s * r, d = c)), s += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, a.durationProgress = r), d = n + i.easing(r) * (c - n), s = (d - a.lastPosition) / e, u = 1 == r
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
            });
            const a = hd(this),
              l = a.getValue();
            if (t) {
              const e = Hu(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return wc.batchedUpdates(() => {
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
            if (of(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              wc.batchedUpdates(() => {
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
            return zc.und(e) ? (n = this.queue || [], this.queue = []) : n = [zc.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => qd(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Zd(this._state, e && this._lastCallId), wc.batchedUpdates(() => this._stop(t, e)), this
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
            n = zc.obj(n) ? n[t] : n, (null == n || Hd(n)) && (n = void 0), r = zc.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return rf(this) || (e.reverse && ([n, r] = [r, n]), r = Hu(r), zc.und(r) ? hd(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, kd(e, (e, t) => /^on/.test(t) ? Nd(e, n) : e)), vf(this, e, "onProps"), yf(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Gd(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  sf(this) || (lf(this, !0), Wc(i.pauseQueue), yf(this, "onPause", Xd(this, uf(this, this.animation.to)), this))
                },
                resume: () => {
                  sf(this) && (lf(this, !1), of(this) && this._resume(), Wc(i.resumeQueue), yf(this, "onResume", Xd(this, uf(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = df(e);
                if (t) return this._update(t, !0)
              }
              return n
            })
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Wd(this));
            const r = !zc.und(e.to),
              o = !zc.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Wd(this));
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
            !o || r || t.default && !zc.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Fc(d, c);
            f && (a.from = d), d = Hu(d);
            const h = !Fc(u, l);
            h && this._focus(u);
            const p = Hd(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Fd(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Fd(e, t), Object.assign(e, t);
              for (const t in Bd) null == e[t] && (e[t] = Bd[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              zc.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Od(t.config, i), t.config !== s.config ? Od(s.config, i) : void 0);
            let g = hd(this);
            if (!g || zc.und(u)) return n(Xd(this, !0));
            const b = zc.und(t.reset) ? o && !t.default : !zc.und(d) && Rd(t.reset, i),
              w = b ? d : this.get(),
              _ = Md(u),
              E = zc.num(_) || zc.arr(_) || sd(_),
              x = !p && (!E || Rd(s.immediate || t.immediate, i));
            if (h) {
              const e = xd(u);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const P = g.constructor;
            let C = Mu(u),
              S = !1;
            if (!C) {
              const e = b || !rf(this) && f;
              (h || e) && (S = Fc(Md(w), _), C = !S), (Fc(a.immediate, x) || x) && Fc(m.decay, v) && Fc(m.velocity, y) || (C = !0)
            }
            if (S && of(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || Mu(l)) && (a.values = g.getPayload(), a.toValues = Mu(u) ? null : P == gd ? [1] : Gc(_)), a.immediate != x && (a.immediate = x, x || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              Vc(mf, e => vf(this, t, e));
              const r = Xd(this, uf(this, l));
              Wc(this._pendingCalls, r), this._pendingCalls.add(n), a.changed && wc.batchedUpdates(() => {
                a.changed = !b, e?.(r, this), b ? Od(s.onRest, r) : a.onStart?.(r, this)
              })
            }
            b && this._set(w), p ? n($d(t.to, t, this._state, this)) : C ? this._start() : of(this) && !h ? this._pendingCalls.add(n) : n(Kd(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Bu(this) && this._detach(), t.to = e, Bu(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Mu(t) && (Uu(t, this), Jd(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Mu(e) && Gu(e, this)
          }
          _set(e, t = !0) {
            const n = Hu(e);
            if (!zc.und(n)) {
              const e = hd(this);
              if (!e || !Fc(n, e.getValue())) {
                const r = xd(n);
                e && e.constructor == r ? e.setValue(n) : pd(this, r.create(n)), e && wc.batchedUpdates(() => {
                  this._onChange(n, t)
                })
              }
            }
            return hd(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, yf(this, "onStart", Xd(this, uf(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Od(this.animation.onChange, e, this)), Od(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            hd(this).reset(Hu(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), of(this) || (af(this, !0), sf(this) || this._resume())
          }
          _resume() {
            Hc.skipAnimation ? this.finish() : ou.start(this)
          }
          _stop(e, t) {
            if (of(this)) {
              af(this, !1);
              const n = this.animation;
              Vc(n.values, e => {
                e.done = !0
              }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), zu(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Wd(this.get()) : Xd(this.get(), uf(this, e ?? n.to));
              Wc(this._pendingCalls, r), n.changed && (n.changed = !1, yf(this, "onRest", r, this))
            }
          }
        };

      function uf(e, t) {
        const n = Md(t);
        return Fc(Md(e.get()), n)
      }

      function df(e, t = e.loop, n = e.to) {
        const r = Od(t);
        if (r) {
          const o = !0 !== r && Dd(r),
            i = (o || e).reverse,
            s = !o || o.reset;
          return ff({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Hd(n) ? n : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function ff(e) {
        const {
          to: t,
          from: n
        } = e = Dd(e), r = new Set;
        return zc.obj(t) && pf(t, r), zc.obj(n) && pf(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function hf(e) {
        const t = ff(e);
        return zc.und(t.default) && (t.default = kd(t)), t
      }

      function pf(e, t) {
        Uc(e, (e, n) => null != e && t.add(n))
      }
      var mf = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function vf(e, t, n) {
        e.animation[n] = t[n] !== jd(t, n) ? Nd(t[n], e.key) : void 0
      }

      function yf(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var gf = ["onStart", "onChange", "onRest"],
        bf = 1,
        wf = class {
          constructor(e, t) {
            this.id = bf++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              zc.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(ff(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Gc(e).map(ff) : this.queue = [], this._flush ? this._flush(this, t) : (Tf(this, t), _f(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Vc(Gc(t), t => n[t].stop(!!e))
            } else Zd(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (zc.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Vc(Gc(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (zc.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Vc(Gc(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Uc(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, qc(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !r && this._started,
              s = o || i && n.size ? this.get() : null;
            o && t.size && qc(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, qc(n, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            wc.onFrame(this._onFrame)
          }
        };

      function _f(e, t) {
        return Promise.all(t.map(t => Ef(e, t))).then(t => qd(e, t))
      }
      async function Ef(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = zc.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = zc.arr(o) || zc.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Vc(gf, n => {
          const r = t[n];
          if (zc.fun(r)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Wc(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          h = !0 === t.cancel || !0 === jd(t, "cancel");
        (u || h && d.asyncId) && f.push(Gd(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Bc,
            resume: Bc,
            start(t, n) {
              h ? (Zd(d, e._lastAsyncId), n(Wd(e))) : (t.onRest = a, n($d(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = qd(e, await Promise.all(f));
        if (s && p.finished && (!n || !p.noop)) {
          const n = df(t, s, o);
          if (n) return Tf(e, [n]), Ef(e, n, !0)
        }
        return l && wc.batchedUpdates(() => l(p, e, e.item)), p
      }

      function xf(e, t) {
        const n = {
          ...e.springs
        };
        return t && Vc(Gc(t), e => {
          zc.und(e.keys) && (e = ff(e)), zc.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Sf(n, e, e => Cf(e))
        }), Pf(e, n), n
      }

      function Pf(e, t) {
        Uc(t, (t, n) => {
          e.springs[n] || (e.springs[n] = t, Uu(t, e))
        })
      }

      function Cf(e, t) {
        const n = new cf;
        return n.key = e, t && Uu(n, t), n
      }

      function Sf(e, t, n) {
        t.keys && Vc(t.keys, r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
      }

      function Tf(e, t) {
        Vc(t, t => {
          Sf(e.springs, t, t => Cf(t, e))
        })
      }
      var Of, Rf, Nf = ({
          children: e,
          ...t
        }) => {
          const n = (0, M.useContext)(jf),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, M.useState)(() => ({
              inputs: t,
              result: e()
            })), r = (0, M.useRef)(), o = r.current;
            let i = o;
            if (i) {
              const n = Boolean(t && i.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                  if (e[n] !== t[n]) return !1;
                return !0
              }(t, i.inputs));
              n || (i = {
                inputs: t,
                result: e()
              })
            } else i = n;
            return (0, M.useEffect)(() => {
              r.current = i, o == n && (n.inputs = n.result = void 0)
            }, [i]), i.result
          }(() => ({
            pause: r,
            immediate: o
          }), [r, o]);
          const {
            Provider: i
          } = jf;
          return M.createElement(i, {
            value: t
          }, e)
        },
        jf = (Of = Nf, Rf = {}, Object.assign(Of, M.createContext(Rf)), Of.Provider._context = Of, Of.Consumer._context = Of, Of);
      Nf.Provider = jf.Provider, Nf.Consumer = jf.Consumer;
      var If = () => {
        const e = [],
          t = function(t) {
            id(`${nd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Vc(e, (e, o) => {
              if (zc.und(t)) r.push(e.start());
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
          return Vc(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
          return Vc(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
          Vc(e, (e, n) => {
            const r = zc.fun(t) ? t(n, e) : t;
            r && e.set(r)
          })
        }, t.start = function(t) {
          const n = [];
          return Vc(e, (e, r) => {
            if (zc.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          }), n
        }, t.stop = function() {
          return Vc(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
          return Vc(e, (e, n) => e.update(this._getProps(t, e, n))), this
        };
        const n = function(e, t, n) {
          return zc.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function kf(e, t) {
        const n = zc.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = zc.fun(t) && t;
            r && !n && (n = []);
            const o = (0, M.useMemo)(() => r || 3 == arguments.length ? If() : void 0, []),
              i = (0, M.useRef)(0),
              s = ld(),
              a = (0, M.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = xf(e, t);
                  return i.current > 0 && !a.queue.length && !Object.keys(n).some(t => !e.springs[t]) ? _f(e, t) : new Promise(r => {
                    Pf(e, n), a.queue.push(() => {
                      r(_f(e, t))
                    }), s()
                  })
                }
              }), []),
              l = (0, M.useRef)([...a.ctrls]),
              c = [],
              u = dd(e) || 0;

            function d(e, n) {
              for (let o = e; o < n; o++) {
                const e = l.current[o] || (l.current[o] = new wf(null, a.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = hf(n))
              }
            }(0, M.useMemo)(() => {
              Vc(l.current.slice(e, u), e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              }), l.current.length = e, d(u, e)
            }, [e]), (0, M.useMemo)(() => {
              d(0, Math.min(u, e))
            }, n);
            const f = l.current.map((e, t) => xf(e, c[t])),
              h = (0, M.useContext)(Nf),
              p = dd(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            ad(() => {
              i.current++, a.ctrls = l.current;
              const {
                queue: e
              } = a;
              e.length && (a.queue = [], Vc(e, e => e())), Vc(l.current, (e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const n = c[t];
                n && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              })
            }), cd(() => () => {
              Vc(a.ctrls, e => e.stop(!0))
            });
            const v = f.map(e => ({
              ...e
            }));
            return o ? [v, o] : v
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Af = class extends tf {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Tu(...t);
          const n = this._get(),
            r = xd(n);
          pd(this, r.create(n))
        }
        advance(e) {
          const t = this._get();
          Fc(t, this.get()) || (hd(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Df(this._active) && Mf(this)
        }
        _get() {
          const e = zc.arr(this.source) ? this.source.map(Hu) : Gc(Hu(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Df(this._active) && (this.idle = !1, Vc(md(this), e => {
            e.done = !1
          }), Hc.skipAnimation ? (wc.batchedUpdates(() => this.advance()), Mf(this)) : ou.start(this))
        }
        _attach() {
          let e = 1;
          Vc(Gc(this.source), t => {
            Mu(t) && Uu(t, this), Jd(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          Vc(Gc(this.source), e => {
            Mu(e) && Gu(e, this)
          }), this._active.clear(), Mf(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Gc(this.source).reduce((e, t) => Math.max(e, (Jd(t) ? t.priority : 0) + 1), 0))
        }
      };

      function Lf(e) {
        return !1 !== e.idle
      }

      function Df(e) {
        return !e.size || Array.from(e).every(Lf)
      }

      function Mf(e) {
        e.idle || (e.idle = !0, Vc(md(e), e => {
          e.done = !0
        }), zu(e, {
          type: "idle",
          parent: e
        }))
      }
      Hc.assign({
        createStringInterpolator: td,
        to: (e, t) => new Af(e, t)
      }), ou.advance;
      var Hf = /^--/;

      function Bf(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Hf.test(e) || Ff.hasOwnProperty(e) && Ff[e] ? ("" + t).trim() : t + "px"
      }
      var zf = {},
        Ff = {
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
        Vf = ["Webkit", "Ms", "Moz", "O"];
      Ff = Object.keys(Ff).reduce((e, t) => (Vf.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), Ff);
      var Uf = /^(matrix|translate|scale|rotate|skew)/,
        Gf = /^(translate)/,
        qf = /^(rotate|skew)/,
        Kf = (e, t) => zc.num(e) && 0 !== e ? e + t : e,
        Xf = (e, t) => zc.arr(e) ? e.every(e => Xf(e, t)) : zc.num(e) ? e === t : parseFloat(e) === t,
        Wf = class extends wd {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>Kf(e,"px")).join(",")})`, Xf(e, 0)])), Uc(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (Uf.test(t)) {
                if (delete r[t], zc.und(e)) return;
                const n = Gf.test(t) ? "px" : qf.test(t) ? "deg" : "";
                o.push(Gc(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Kf(o,n)})`, Xf(o, 0)] : e => [`${t}(${e.map(e=>Kf(e,n)).join(",")})`, Xf(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new $f(o, i)), super(r)
          }
        },
        $f = class extends Fu {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Vc(this.inputs, (n, r) => {
              const o = Hu(n[0]),
                [i, s] = this.transforms[r](zc.arr(o) ? o : n.map(Hu));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Vc(this.inputs, e => Vc(e, e => Mu(e) && Uu(e, this)))
          }
          observerRemoved(e) {
            0 == e && Vc(this.inputs, e => Vc(e, e => Mu(e) && Gu(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), zu(this, e)
          }
        };
      Hc.assign({
        batchedUpdates: vt.unstable_batchedUpdates,
        createStringInterpolator: td,
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
      var Zf = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new wd(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Td(e) || "Anonymous";
              return (e = zc.str(e) ? i[e] || (i[e] = Pd(e, o)) : e[Sd] || (e[Sd] = Pd(e, o))).displayName = `Animated(${t})`, e
            };
          return Uc(e, (t, n) => {
            zc.arr(e) && (n = Td(t)), i[n] = i(t)
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
              d = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : zf[t] || (zf[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = Bf(t, o[t]);
                Hf.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              e.setAttribute(t, u[n])
            }), void 0 !== r && (e.className = r), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Wf(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        Yf = Zf.animated;

      function Qf(e) {
        const t = (0, M.useRef)(e);
        return (0, M.useEffect)(() => {
          t.current = e
        }), (0, M.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function Jf(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      "undefined" == typeof window || !window.document || window.document.createElement;
      var eh, th = n(95362),
        nh = n(85426),
        rh = n(78004),
        oh = n(76286),
        ih = n(94040),
        sh = "dismissableLayer.update",
        ah = M.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        lh = M.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, c = M.useContext(ah), [u, d] = M.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, h] = M.useState({}), p = (0, th.s)(t, e => d(e)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= y, E = function(e, t = globalThis?.document) {
            const n = (0, oh.c)(e),
              r = M.useRef(!1),
              o = M.useRef(() => {});
            return M.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      dh("dismissableLayer.pointerDownOutside", n, i, {
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
            _ && !n && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), x = function(e, t = globalThis?.document) {
            const n = (0, oh.c)(e),
              r = M.useRef(!1);
            return M.useEffect(() => {
              const e = e => {
                e.target && !r.current && dh("dismissableLayer.focusOutside", n, {
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
          return (0, ih.U)(e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), M.useEffect(() => {
            if (u) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (eh = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), uh(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = eh)
            }
          }, [u, f, n, c]), M.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), uh())
          }, [u, c]), M.useEffect(() => {
            const e = () => h({});
            return document.addEventListener(sh, e), () => document.removeEventListener(sh, e)
          }, []), (0, w.jsx)(rh.sG.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Jf(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: Jf(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: Jf(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        });
      lh.displayName = "DismissableLayer";
      var ch = M.forwardRef((e, t) => {
        const n = M.useContext(ah),
          r = M.useRef(null),
          o = (0, th.s)(t, r);
        return M.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, w.jsx)(rh.sG.div, {
          ...e,
          ref: o
        })
      });

      function uh() {
        const e = new CustomEvent(sh);
        document.dispatchEvent(e)
      }

      function dh(e, t, n, {
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
        }), r ? (0, rh.hO)(o, i) : o.dispatchEvent(i)
      }
      ch.displayName = "DismissableLayerBranch";
      var fh = lh,
        hh = ch,
        ph = n(86126);
      const mh = ["top", "right", "bottom", "left"],
        vh = Math.min,
        yh = Math.max,
        gh = Math.round,
        bh = Math.floor,
        wh = e => ({
          x: e,
          y: e
        }),
        _h = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Eh = {
          start: "end",
          end: "start"
        };

      function xh(e, t, n) {
        return yh(e, vh(t, n))
      }

      function Ph(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Ch(e) {
        return e.split("-")[0]
      }

      function Sh(e) {
        return e.split("-")[1]
      }

      function Th(e) {
        return "x" === e ? "y" : "x"
      }

      function Oh(e) {
        return "y" === e ? "height" : "width"
      }
      const Rh = new Set(["top", "bottom"]);

      function Nh(e) {
        return Rh.has(Ch(e)) ? "y" : "x"
      }

      function jh(e) {
        return Th(Nh(e))
      }

      function Ih(e) {
        return e.replace(/start|end/g, e => Eh[e])
      }
      const kh = ["left", "right"],
        Ah = ["right", "left"],
        Lh = ["top", "bottom"],
        Dh = ["bottom", "top"];

      function Mh(e) {
        return e.replace(/left|right|bottom|top/g, e => _h[e])
      }

      function Hh(e) {
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

      function Bh(e) {
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

      function zh(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Nh(t),
          s = jh(t),
          a = Oh(s),
          l = Ch(t),
          c = "y" === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[a] / 2 - o[a] / 2;
        let h;
        switch (l) {
          case "top":
            h = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            h = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: r.x,
              y: r.y
            }
        }
        switch (Sh(t)) {
          case "start":
            h[s] -= f * (n && c ? -1 : 1);
            break;
          case "end":
            h[s] += f * (n && c ? -1 : 1)
        }
        return h
      }
      async function Fh(e, t) {
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
          padding: h = 0
        } = Ph(t, e), p = Hh(h), m = a[f ? "floating" === d ? "reference" : "floating" : d], v = Bh(await i.getClippingRect({
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
        }, w = Bh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: y,
          offsetParent: g,
          strategy: l
        }) : y);
        return {
          top: (v.top - w.top + p.top) / b.y,
          bottom: (w.bottom - v.bottom + p.bottom) / b.y,
          left: (v.left - w.left + p.left) / b.x,
          right: (w.right - v.right + p.right) / b.x
        }
      }

      function Vh(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function Uh(e) {
        return mh.some(t => e[t] >= 0)
      }
      const Gh = new Set(["left", "top"]);

      function qh() {
        return "undefined" != typeof window
      }

      function Kh(e) {
        return $h(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function Xh(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function Wh(e) {
        var t;
        return null == (t = ($h(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function $h(e) {
        return !!qh() && (e instanceof Node || e instanceof Xh(e).Node)
      }

      function Zh(e) {
        return !!qh() && (e instanceof Element || e instanceof Xh(e).Element)
      }

      function Yh(e) {
        return !!qh() && (e instanceof HTMLElement || e instanceof Xh(e).HTMLElement)
      }

      function Qh(e) {
        return !(!qh() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof Xh(e).ShadowRoot)
      }
      const Jh = new Set(["inline", "contents"]);

      function ep(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = fp(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Jh.has(o)
      }
      const tp = new Set(["table", "td", "th"]);

      function np(e) {
        return tp.has(Kh(e))
      }
      const rp = [":popover-open", ":modal"];

      function op(e) {
        return rp.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      const ip = ["transform", "translate", "scale", "rotate", "perspective"],
        sp = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        ap = ["paint", "layout", "strict", "content"];

      function lp(e) {
        const t = cp(),
          n = Zh(e) ? fp(e) : e;
        return ip.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || sp.some(e => (n.willChange || "").includes(e)) || ap.some(e => (n.contain || "").includes(e))
      }

      function cp() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const up = new Set(["html", "body", "#document"]);

      function dp(e) {
        return up.has(Kh(e))
      }

      function fp(e) {
        return Xh(e).getComputedStyle(e)
      }

      function hp(e) {
        return Zh(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function pp(e) {
        if ("html" === Kh(e)) return e;
        const t = e.assignedSlot || e.parentNode || Qh(e) && e.host || Wh(e);
        return Qh(t) ? t.host : t
      }

      function mp(e) {
        const t = pp(e);
        return dp(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yh(t) && ep(t) ? t : mp(t)
      }

      function vp(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = mp(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          s = Xh(o);
        if (i) {
          const e = yp(s);
          return t.concat(s, s.visualViewport || [], ep(o) ? o : [], e && n ? vp(e) : [])
        }
        return t.concat(o, vp(o, [], n))
      }

      function yp(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function gp(e) {
        const t = fp(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = Yh(e),
          i = o ? e.offsetWidth : n,
          s = o ? e.offsetHeight : r,
          a = gh(n) !== i || gh(r) !== s;
        return a && (n = i, r = s), {
          width: n,
          height: r,
          $: a
        }
      }

      function bp(e) {
        return Zh(e) ? e : e.contextElement
      }

      function wp(e) {
        const t = bp(e);
        if (!Yh(t)) return wh(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = gp(t);
        let s = (i ? gh(n.width) : n.width) / r,
          a = (i ? gh(n.height) : n.height) / o;
        return s && Number.isFinite(s) || (s = 1), a && Number.isFinite(a) || (a = 1), {
          x: s,
          y: a
        }
      }
      const _p = wh(0);

      function Ep(e) {
        const t = Xh(e);
        return cp() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : _p
      }

      function xp(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = bp(e);
        let s = wh(1);
        t && (r ? Zh(r) && (s = wp(r)) : s = wp(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== Xh(e)) && t
        }(i, n, r) ? Ep(i) : wh(0);
        let l = (o.left + a.x) / s.x,
          c = (o.top + a.y) / s.y,
          u = o.width / s.x,
          d = o.height / s.y;
        if (i) {
          const e = Xh(i),
            t = r && Zh(r) ? Xh(r) : r;
          let n = e,
            o = yp(n);
          for (; o && r && t !== n;) {
            const e = wp(o),
              t = o.getBoundingClientRect(),
              r = fp(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              s = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += s, n = Xh(o), o = yp(n)
          }
        }
        return Bh({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function Pp(e, t) {
        const n = hp(e).scrollLeft;
        return t ? t.left + n : xp(Wh(e)).left + n
      }

      function Cp(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - Pp(e, n),
          y: n.top + t.scrollTop
        }
      }
      const Sp = new Set(["absolute", "fixed"]);

      function Tp(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = Xh(e),
            r = Wh(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            s = r.clientHeight,
            a = 0,
            l = 0;
          if (o) {
            i = o.width, s = o.height;
            const e = cp();
            (!e || e && "fixed" === t) && (a = o.offsetLeft, l = o.offsetTop)
          }
          const c = Pp(r);
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
          const t = Wh(e),
            n = hp(e),
            r = e.ownerDocument.body,
            o = yh(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = yh(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + Pp(e);
          const a = -n.scrollTop;
          return "rtl" === fp(r).direction && (s += yh(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: s,
            y: a
          }
        }(Wh(e));
        else if (Zh(t)) r = function(e, t) {
          const n = xp(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = Yh(e) ? wp(e) : wh(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = Ep(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return Bh(r)
      }

      function Op(e, t) {
        const n = pp(e);
        return !(n === t || !Zh(n) || dp(n)) && ("fixed" === fp(n).position || Op(n, t))
      }

      function Rp(e, t, n) {
        const r = Yh(t),
          o = Wh(t),
          i = "fixed" === n,
          s = xp(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = wh(0);

        function c() {
          l.x = Pp(o)
        }
        if (r || !r && !i)
          if (("body" !== Kh(t) || ep(o)) && (a = hp(t)), r) {
            const e = xp(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && c();
        i && !r && o && c();
        const u = !o || r || i ? wh(0) : Cp(o, a);
        return {
          x: s.left + a.scrollLeft - l.x - u.x,
          y: s.top + a.scrollTop - l.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function Np(e) {
        return "static" === fp(e).position
      }

      function jp(e, t) {
        if (!Yh(e) || "fixed" === fp(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return Wh(e) === n && (n = n.ownerDocument.body), n
      }

      function Ip(e, t) {
        const n = Xh(e);
        if (op(e)) return n;
        if (!Yh(e)) {
          let t = pp(e);
          for (; t && !dp(t);) {
            if (Zh(t) && !Np(t)) return t;
            t = pp(t)
          }
          return n
        }
        let r = jp(e, t);
        for (; r && np(r) && Np(r);) r = jp(r, t);
        return r && dp(r) && Np(r) && !lp(r) ? n : r || function(e) {
          let t = pp(e);
          for (; Yh(t) && !dp(t);) {
            if (lp(t)) return t;
            if (op(t)) return null;
            t = pp(t)
          }
          return null
        }(e) || n
      }
      const kp = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            s = Wh(r),
            a = !!t && op(t.floating);
          if (r === s || a && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            c = wh(1);
          const u = wh(0),
            d = Yh(r);
          if ((d || !d && !i) && (("body" !== Kh(r) || ep(s)) && (l = hp(r)), Yh(r))) {
            const e = xp(r);
            c = wp(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop
          }
          const f = !s || d || i ? wh(0) : Cp(s, l);
          return {
            width: n.width * c.x,
            height: n.height * c.y,
            x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
            y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
          }
        },
        getDocumentElement: Wh,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? op(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = vp(e, [], !1).filter(e => Zh(e) && "body" !== Kh(e)),
                o = null;
              const i = "fixed" === fp(e).position;
              let s = i ? pp(e) : e;
              for (; Zh(s) && !dp(s);) {
                const t = fp(s),
                  n = lp(s);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && Sp.has(o.position) || ep(s) && !n && Op(e, s)) ? r = r.filter(e => e !== s) : o = t, s = pp(s)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            s = i[0],
            a = i.reduce((e, n) => {
              const r = Tp(t, n, o);
              return e.top = yh(r.top, e.top), e.right = vh(r.right, e.right), e.bottom = vh(r.bottom, e.bottom), e.left = yh(r.left, e.left), e
            }, Tp(t, s, o));
          return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
          }
        },
        getOffsetParent: Ip,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || Ip,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: Rp(e.reference, await t(e.floating), e.strategy),
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
          } = gp(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: wp,
        isElement: Zh,
        isRTL: function(e) {
          return "rtl" === fp(e).direction
        }
      };

      function Ap(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const Lp = function(e) {
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
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), s = Ch(n), a = Sh(n), l = "y" === Nh(n), c = Gh.has(s) ? -1 : 1, u = i && l ? -1 : 1, d = Ph(t, e);
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
        },
        Dp = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: s = !1,
                limiter: a = {
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
                ...l
              } = Ph(e, t), c = {
                x: n,
                y: r
              }, u = await Fh(t, l), d = Nh(Ch(o)), f = Th(d);
              let h = c[f],
                p = c[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                h = xh(h + u["y" === f ? "top" : "left"], h, h - u[e])
              }
              if (s) {
                const e = "y" === d ? "bottom" : "right";
                p = xh(p + u["y" === d ? "top" : "left"], p, p - u[e])
              }
              const m = a.fn({
                ...t,
                [f]: h,
                [d]: p
              });
              return {
                ...m,
                data: {
                  x: m.x - n,
                  y: m.y - r,
                  enabled: {
                    [f]: i,
                    [d]: s
                  }
                }
              }
            }
          }
        },
        Mp = function(e) {
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
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: m = !0,
                ...v
              } = Ph(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const y = Ch(o),
                g = Nh(a),
                b = Ch(a) === a,
                w = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                _ = f || (b || !m ? [Mh(a)] : function(e) {
                  const t = Mh(e);
                  return [Ih(e), t, Ih(t)]
                }(a)),
                E = "none" !== p;
              !f && E && _.push(... function(e, t, n, r) {
                const o = Sh(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? Ah : kh : t ? kh : Ah;
                    case "left":
                    case "right":
                      return t ? Lh : Dh;
                    default:
                      return []
                  }
                }(Ch(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(Ih)))), i
              }(a, m, p, w));
              const x = [a, ..._],
                P = await Fh(t, v),
                C = [];
              let S = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && C.push(P[y]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Sh(e),
                    o = jh(e),
                    i = Oh(o);
                  let s = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = Mh(s)), [s, Mh(s)]
                }(o, s, w);
                C.push(P[e[0]], P[e[1]])
              }
              if (S = [...S, {
                  placement: o,
                  overflows: C
                }], !C.every(e => e <= 0)) {
                var T, O;
                const e = ((null == (T = i.flip) ? void 0 : T.index) || 0) + 1,
                  t = x[e];
                if (t && ("alignment" !== d || g === Nh(t) || S.every(e => Nh(e.placement) !== g || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: S
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (O = S.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : O.placement;
                if (!n) switch (h) {
                  case "bestFit": {
                    var R;
                    const e = null == (R = S.filter(e => {
                      if (E) {
                        const t = Nh(e.placement);
                        return t === g || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : R[0];
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
        Hp = function(e) {
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
              } = Ph(e, t), u = await Fh(t, c), d = Ch(o), f = Sh(o), h = "y" === Nh(o), {
                width: p,
                height: m
              } = i.floating;
              let v, y;
              "top" === d || "bottom" === d ? (v = d, y = f === (await (null == s.isRTL ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = "end" === f ? "top" : "bottom");
              const g = m - u.top - u.bottom,
                b = p - u.left - u.right,
                w = vh(m - u[v], g),
                _ = vh(p - u[y], b),
                E = !t.middlewareData.shift;
              let x = w,
                P = _;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (P = b), null != (r = t.middlewareData.shift) && r.enabled.y && (x = g), E && !f) {
                const e = yh(u.left, 0),
                  t = yh(u.right, 0),
                  n = yh(u.top, 0),
                  r = yh(u.bottom, 0);
                h ? P = p - 2 * (0 !== e || 0 !== t ? e + t : yh(u.left, u.right)) : x = m - 2 * (0 !== n || 0 !== r ? n + r : yh(u.top, u.bottom))
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
        Bp = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = Ph(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = Vh(await Fh(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: Uh(e)
                    }
                  }
                }
                case "escaped": {
                  const e = Vh(await Fh(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: Uh(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        zp = e => ({
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
            } = Ph(e, t) || {};
            if (null == c) return {};
            const d = Hh(u),
              f = {
                x: n,
                y: r
              },
              h = jh(o),
              p = Oh(h),
              m = await s.getDimensions(c),
              v = "y" === h,
              y = v ? "top" : "left",
              g = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[p] + i.reference[h] - f[h] - i.floating[p],
              _ = f[h] - i.reference[h],
              E = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(c));
            let x = E ? E[b] : 0;
            x && await (null == s.isElement ? void 0 : s.isElement(E)) || (x = a.floating[b] || i.floating[p]);
            const P = w / 2 - _ / 2,
              C = x / 2 - m[p] / 2 - 1,
              S = vh(d[y], C),
              T = vh(d[g], C),
              O = S,
              R = x - m[p] - T,
              N = x / 2 - m[p] / 2 + P,
              j = xh(O, N, R),
              I = !l.arrow && null != Sh(o) && N !== j && i.reference[p] / 2 - (N < O ? S : T) - m[p] / 2 < 0,
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
        Fp = function(e) {
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
              } = Ph(e, t), u = {
                x: n,
                y: r
              }, d = Nh(o), f = Th(d);
              let h = u[f],
                p = u[d];
              const m = Ph(a, t),
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
                h < t ? h = t : h > n && (h = n)
              }
              if (c) {
                var y, g;
                const e = "y" === f ? "width" : "height",
                  t = Gh.has(Ch(o)),
                  n = i.reference[d] - i.floating[e] + (t && (null == (y = s.offset) ? void 0 : y[d]) || 0) + (t ? 0 : v.crossAxis),
                  r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (g = s.offset) ? void 0 : g[d]) || 0) - (t ? v.crossAxis : 0);
                p < n ? p = n : p > r && (p = r)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        Vp = (e, t, n) => {
          const r = new Map,
            o = {
              platform: kp,
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
            } = n, a = i.filter(Boolean), l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = zh(c, r, l),
              f = r,
              h = {},
              p = 0;
            for (let n = 0; n < a.length; n++) {
              const {
                name: i,
                fn: m
              } = a[n], {
                x: v,
                y,
                data: g,
                reset: b
              } = await m({
                x: u,
                y: d,
                initialPlacement: r,
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
              } = zh(c, f, l))), n = -1)
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
      var Up = "undefined" != typeof document ? M.useLayoutEffect : function() {};

      function Gp(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Gp(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Gp(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function qp(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Kp(e, t) {
        const n = qp(e);
        return Math.round(t * n) / n
      }

      function Xp(e) {
        const t = M.useRef(e);
        return Up(() => {
          t.current = e
        }), t
      }
      const Wp = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? zp({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? zp({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        }),
        $p = (e, t) => ({
          ...Lp(e),
          options: [e, t]
        }),
        Zp = (e, t) => ({
          ...Dp(e),
          options: [e, t]
        }),
        Yp = (e, t) => ({
          ...Fp(e),
          options: [e, t]
        }),
        Qp = (e, t) => ({
          ...Mp(e),
          options: [e, t]
        }),
        Jp = (e, t) => ({
          ...Hp(e),
          options: [e, t]
        }),
        em = (e, t) => ({
          ...Bp(e),
          options: [e, t]
        }),
        tm = (e, t) => ({
          ...Wp(e),
          options: [e, t]
        });
      var nm = M.forwardRef((e, t) => {
        const {
          children: n,
          width: r = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, w.jsx)(rh.sG.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, w.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      });
      nm.displayName = "Arrow";
      var rm = nm,
        om = n(63155);

      function im(e) {
        const [t, n] = M.useState(void 0);
        return (0, om.N)(() => {
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
      var sm = "Popper",
        [am, lm] = (0, nh.A)(sm),
        [cm, um] = am(sm),
        dm = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = M.useState(null);
          return (0, w.jsx)(cm, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      dm.displayName = sm;
      var fm = "PopperAnchor",
        hm = M.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, i = um(fm, n), s = M.useRef(null), a = (0, th.s)(t, s), l = M.useRef(null);
          return M.useEffect(() => {
            const e = l.current;
            l.current = r?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), r ? null : (0, w.jsx)(rh.sG.div, {
            ...o,
            ref: a
          })
        });
      hm.displayName = fm;
      var pm = "PopperContent",
        [mm, vm] = am(pm),
        ym = M.forwardRef((e, t) => {
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
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...m
          } = e, v = um(pm, n), [y, g] = M.useState(null), b = (0, th.s)(t, e => g(e)), [_, E] = M.useState(null), x = im(_), P = x?.width ?? 0, C = x?.height ?? 0, S = r + ("center" !== i ? "-" + i : ""), T = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, O = Array.isArray(c) ? c : [c], R = O.length > 0, N = {
            padding: T,
            boundary: O.filter(_m),
            altBoundary: R
          }, {
            refs: j,
            floatingStyles: I,
            placement: k,
            isPositioned: A,
            middlewareData: L
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
            } = e, [u, d] = M.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = M.useState(r);
            Gp(f, r) || h(r);
            const [p, m] = M.useState(null), [v, y] = M.useState(null), g = M.useCallback(e => {
              e !== E.current && (E.current = e, m(e))
            }, []), b = M.useCallback(e => {
              e !== x.current && (x.current = e, y(e))
            }, []), w = i || p, _ = s || v, E = M.useRef(null), x = M.useRef(null), P = M.useRef(u), C = null != l, S = Xp(l), T = Xp(o), O = Xp(c), R = M.useCallback(() => {
              if (!E.current || !x.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: f
              };
              T.current && (e.platform = T.current), Vp(E.current, x.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                N.current && !Gp(P.current, t) && (P.current = t, vt.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, n, T, O]);
            Up(() => {
              !1 === c && P.current.isPositioned && (P.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [c]);
            const N = M.useRef(!1);
            Up(() => (N.current = !0, () => {
              N.current = !1
            }), []), Up(() => {
              if (w && (E.current = w), _ && (x.current = _), w && _) {
                if (S.current) return S.current(w, _, R);
                R()
              }
            }, [w, _, R, S, C]);
            const j = M.useMemo(() => ({
                reference: E,
                floating: x,
                setReference: g,
                setFloating: b
              }), [g, b]),
              I = M.useMemo(() => ({
                reference: w,
                floating: _
              }), [w, _]),
              k = M.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!I.floating) return e;
                const t = Kp(I.floating, u.x),
                  r = Kp(I.floating, u.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...qp(I.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, a, I.floating, u.x, u.y]);
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
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: s = "function" == typeof ResizeObserver,
                layoutShift: a = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = bp(e), u = o || i ? [...c ? vp(c) : [], ...vp(t)] : [];
              u.forEach(e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              });
              const d = c && a ? function(e, t) {
                let n, r = null;
                const o = Wh(e);

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
                      height: h
                    } = c;
                  if (a || t(), !f || !h) return;
                  const p = {
                    rootMargin: -bh(d) + "px " + -bh(o.clientWidth - (u + f)) + "px " + -bh(o.clientHeight - (d + h)) + "px " + -bh(u) + "px",
                    threshold: yh(0, vh(1, l)) || 1
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
                    1 !== r || Ap(c, e.getBoundingClientRect()) || s(), m = !1
                  }
                  try {
                    r = new IntersectionObserver(v, {
                      ...p,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(v, p)
                  }
                  r.observe(e)
                }(!0), i
              }(c, n) : null;
              let f, h = -1,
                p = null;
              s && (p = new ResizeObserver(e => {
                let [r] = e;
                r && r.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                  var e;
                  null == (e = p) || e.observe(t)
                })), n()
              }), c && !l && p.observe(c), p.observe(t));
              let m = l ? xp(e) : null;
              return l && function t() {
                const r = xp(e);
                m && !Ap(m, r) && n(), m = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                u.forEach(e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                }), null == d || d(), null == (e = p) || e.disconnect(), p = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [$p({
              mainAxis: o + C,
              alignmentAxis: s
            }), l && Zp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? Yp() : void 0,
              ...N
            }), l && Qp({
              ...N
            }), Jp({
              ...N,
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
            }), _ && tm({
              element: _,
              padding: a
            }), Em({
              arrowWidth: P,
              arrowHeight: C
            }), f && em({
              strategy: "referenceHidden",
              ...N
            })]
          }), [D, H] = xm(k), B = (0, oh.c)(p);
          (0, om.N)(() => {
            A && B?.()
          }, [A, B]);
          const z = L.arrow?.x,
            F = L.arrow?.y,
            V = 0 !== L.arrow?.centerOffset,
            [U, G] = M.useState();
          return (0, om.N)(() => {
            y && G(window.getComputedStyle(y).zIndex)
          }, [y]), (0, w.jsx)("div", {
            ref: j.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...I,
              transform: A ? I.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: U,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, w.jsx)(mm, {
              scope: n,
              placedSide: D,
              onArrowChange: E,
              arrowX: z,
              arrowY: F,
              shouldHideArrow: V,
              children: (0, w.jsx)(rh.sG.div, {
                "data-side": D,
                "data-align": H,
                ...m,
                ref: b,
                style: {
                  ...m.style,
                  animation: A ? void 0 : "none"
                }
              })
            })
          })
        });
      ym.displayName = pm;
      var gm = "PopperArrow",
        bm = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        wm = M.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = vm(gm, n), i = bm[o.placedSide];
          return (0, w.jsx)("span", {
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
            children: (0, w.jsx)(rm, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        });

      function _m(e) {
        return null !== e
      }
      wm.displayName = gm;
      var Em = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = xm(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? u : `${d}px`, p = -a + "px") : "top" === l ? (h = i ? u : `${d}px`, p = `${r.floating.height+a}px`) : "right" === l ? (h = -a + "px", p = i ? u : `${f}px`) : "left" === l && (h = `${r.floating.width+a}px`, p = i ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function xm(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Pm = dm,
        Cm = hm,
        Sm = ym,
        Tm = wm,
        Om = M.forwardRef((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, i] = M.useState(!1);
          (0, om.N)(() => i(!0), []);
          const s = n || o && globalThis?.document?.body;
          return s ? vt.createPortal((0, w.jsx)(rh.sG.div, {
            ...r,
            ref: t
          }), s) : null
        });
      Om.displayName = "Portal";
      var Rm = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = M.useState(), r = M.useRef(null), o = M.useRef(e), i = M.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return M.useReducer((e, n) => t[e][n] ?? e, e)
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
            const e = Nm(r.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), (0, om.N)(() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                s = Nm(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, om.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = Nm(r.current).includes(CSS.escape(i.animationName));
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = Nm(r.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: M.useCallback(e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : M.Children.only(n), i = (0, th.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? M.cloneElement(o, {
          ref: i
        }) : null
      };

      function Nm(e) {
        return e?.animationName || "none"
      }
      Rm.displayName = "Presence";
      var jm = n(53054),
        [Im, km] = (0, nh.A)("Tooltip", [lm]),
        Am = lm(),
        Lm = "TooltipProvider",
        Dm = 700,
        Mm = "tooltip.open",
        [Hm, Bm] = Im(Lm),
        zm = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Dm,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = M.useRef(!0), a = M.useRef(!1), l = M.useRef(0);
          return M.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, w.jsx)(Hm, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: M.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: M.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: M.useCallback(e => {
              a.current = e
            }, []),
            disableHoverableContent: o,
            children: i
          })
        };
      zm.displayName = Lm;
      var Fm = "Tooltip",
        [Vm, Um] = Im(Fm),
        Gm = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = Bm(Fm, e.__scopeTooltip), c = Am(t), [u, d] = M.useState(null), f = (0, ph.B)(), h = M.useRef(0), p = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = M.useRef(!1), [y, g] = (0, jm.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Mm))) : l.onClose(), i?.(e)
            },
            caller: Fm
          }), b = M.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = M.useCallback(() => {
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
          }, []), (0, w.jsx)(Pm, {
            ...c,
            children: (0, w.jsx)(Vm, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: M.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : _()
              }, [l.isOpenDelayedRef, x, _]),
              onTriggerLeave: M.useCallback(() => {
                p ? E() : (window.clearTimeout(h.current), h.current = 0)
              }, [E, p]),
              onOpen: _,
              onClose: E,
              disableHoverableContent: p,
              children: n
            })
          })
        };
      Gm.displayName = Fm;
      var qm = "TooltipTrigger",
        Km = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Um(qm, n), i = Bm(qm, n), s = Am(n), a = M.useRef(null), l = (0, th.s)(t, a, o.onTriggerChange), c = M.useRef(!1), u = M.useRef(!1), d = M.useCallback(() => c.current = !1, []);
          return M.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, w.jsx)(Cm, {
            asChild: !0,
            ...s,
            children: (0, w.jsx)(rh.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: Jf(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: Jf(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: Jf(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: Jf(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: Jf(e.onBlur, o.onClose),
              onClick: Jf(e.onClick, o.onClose)
            })
          })
        });
      Km.displayName = qm;
      var Xm = "TooltipPortal",
        [Wm, $m] = Im(Xm, {
          forceMount: void 0
        }),
        Zm = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Um(Xm, t);
          return (0, w.jsx)(Wm, {
            scope: t,
            forceMount: n,
            children: (0, w.jsx)(Rm, {
              present: n || i.open,
              children: (0, w.jsx)(Om, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Zm.displayName = Xm;
      var Ym = "TooltipContent",
        Qm = M.forwardRef((e, t) => {
          const n = $m(Ym, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = Um(Ym, e.__scopeTooltip);
          return (0, w.jsx)(Rm, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, w.jsx)(rv, {
              side: o,
              ...i,
              ref: t
            }) : (0, w.jsx)(Jm, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        Jm = M.forwardRef((e, t) => {
          const n = Um(Ym, e.__scopeTooltip),
            r = Bm(Ym, e.__scopeTooltip),
            o = M.useRef(null),
            i = (0, th.s)(t, o),
            [s, a] = M.useState(null),
            {
              trigger: l,
              onClose: c
            } = n,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = r,
            f = M.useCallback(() => {
              a(null), d(!1)
            }, [d]),
            h = M.useCallback((e, t) => {
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
          }, [l, u, s, c, f]), (0, w.jsx)(rv, {
            ...e,
            ref: i
          })
        }),
        [ev, tv] = Im(Fm, {
          isInside: !1
        }),
        nv = (0, $t.Dc)("TooltipContent"),
        rv = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = Um(Ym, n), c = Am(n), {
            onClose: u
          } = l;
          return M.useEffect(() => (document.addEventListener(Mm, u), () => document.removeEventListener(Mm, u)), [u]), M.useEffect(() => {
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
          }, [l.trigger, u]), (0, w.jsx)(lh, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, w.jsxs)(Sm, {
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
              children: [(0, w.jsx)(nv, {
                children: r
              }), (0, w.jsx)(ev, {
                scope: n,
                isInside: !0,
                children: (0, w.jsx)(jr.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        });
      Qm.displayName = Ym;
      var ov = "TooltipArrow",
        iv = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Am(n);
          return tv(ov, n).isInside ? null : (0, w.jsx)(Tm, {
            ...o,
            ...r,
            ref: t
          })
        });
      iv.displayName = ov;
      var sv = zm,
        av = Gm,
        lv = Km,
        cv = Zm,
        uv = Qm,
        dv = iv;
      const fv = (0, M.createContext)(null);

      function hv() {
        const e = (0, M.useContext)(fv);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const pv = ({
          children: e,
          delayDuration: t,
          defaultOpen: n,
          onOpenChange: r,
          ...o
        }) => {
          const [i = !1, s] = function({
            prop: e,
            defaultProp: t,
            onChange: n = () => {}
          }) {
            const [r, o] = function({
              defaultProp: e,
              onChange: t
            }) {
              const n = (0, M.useState)(e),
                [r] = n,
                o = (0, M.useRef)(r),
                i = Qf(t);
              return (0, M.useEffect)(() => {
                o.current !== r && (i(r), o.current = r)
              }, [r, o, i]), n
            }({
              defaultProp: t,
              onChange: n
            }), i = void 0 !== e, s = i ? e : r, a = Qf(n), l = (0, M.useCallback)(t => {
              if (i) {
                const n = "function" == typeof t ? t(e) : t;
                n !== e && a(n)
              } else o(t)
            }, [i, e, o, a]);
            return [s, l]
          }({
            defaultProp: n,
            prop: o.isOpen,
            onChange: r
          });
          return (0, w.jsx)(sv, {
            delayDuration: t,
            children: (0, w.jsx)(fv.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, w.jsx)(av, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        mv = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => (0, w.jsx)(lv, {
          asChild: !0,
          "data-testid": t,
          ...n,
          ref: r,
          children: e
        })),
        vv = (0, M.forwardRef)(({
          testId: e,
          children: t,
          collisionBoundary: n,
          collisionPadding: r,
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
          } = hv(), m = function(e) {
            const t = (0, M.useRef)({
                value: e,
                prev: void 0
              }),
              n = t.current.value;
            return e !== n && (t.current = {
              value: e,
              prev: n
            }), t.current.prev
          }(p), v = kf({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = yc({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, w.jsx)(uv, {
            forceMount: !0,
            "data-testid": e,
            side: s,
            align: l,
            sticky: d,
            sideOffset: a,
            alignOffset: c,
            avoidCollisions: u,
            collisionPadding: r,
            collisionBoundary: n,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            asChild: !0,
            children: (0, w.jsx)(Yf.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        }),
        yv = (0, M.forwardRef)(({
          testId: e
        }, t) => {
          const n = yc({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, w.jsx)(dv, {
            ...n,
            ref: t
          })
        }),
        gv = cv;

      function bv(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
      var wv = M.createContext(void 0);

      function _v(e) {
        const t = M.useContext(wv);
        return e || t || "ltr"
      }

      function Ev(e) {
        const t = M.useRef({
          value: e,
          previous: e
        });
        return M.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }

      function xv(e) {
        const t = e + "CollectionProvider",
          [n, r] = (0, nh.A)(t),
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
            } = e, r = M.useRef(null), i = M.useRef(new Map).current;
            return (0, w.jsx)(o, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        s.displayName = t;
        const a = e + "CollectionSlot",
          l = (0, $t.TL)(a),
          c = M.forwardRef((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = i(a, n), s = (0, th.s)(t, o.collectionRef);
            return (0, w.jsx)(l, {
              ref: s,
              children: r
            })
          });
        c.displayName = a;
        const u = e + "CollectionItemSlot",
          d = "data-radix-collection-item",
          f = (0, $t.TL)(u),
          h = M.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...o
            } = e, s = M.useRef(null), a = (0, th.s)(t, s), l = i(u, n);
            return M.useEffect(() => (l.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              l.itemMap.delete(s)
            })), (0, w.jsx)(f, {
              [d]: "",
              ref: a,
              children: r
            })
          });
        return h.displayName = u, [{
          Provider: s,
          Slot: c,
          ItemSlot: h
        }, function(t) {
          const n = i(e + "CollectionConsumer", t),
            r = M.useCallback(() => {
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
      var Pv = ["PageUp", "PageDown"],
        Cv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Sv = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Tv = "Slider",
        [Ov, Rv, Nv] = xv(Tv),
        [jv, Iv] = (0, nh.A)(Tv, [Nv]),
        [kv, Av] = jv(Tv),
        Lv = M.forwardRef((e, t) => {
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
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = M.useRef(new Set), y = M.useRef(0), g = "horizontal" === s ? Hv : Bv, [b = [], _] = (0, jm.i)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), E = M.useRef(b);

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
              c = bv(a, [r, o]);
            _((e = []) => {
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
          return (0, w.jsx)(kv, {
            scope: e.__scopeSlider,
            name: n,
            disabled: a,
            min: r,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: s,
            form: p,
            children: (0, w.jsx)(Ov.Provider, {
              scope: e.__scopeSlider,
              children: (0, w.jsx)(Ov.Slot, {
                scope: e.__scopeSlider,
                children: (0, w.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: Jf(m.onPointerDown, () => {
                    a || (E.current = b)
                  }),
                  min: r,
                  max: o,
                  inverted: h,
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
                    const e = E.current[y.current];
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
                      const n = Pv.includes(e.key) || e.shiftKey && Cv.includes(e.key) ? 10 : 1,
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
      Lv.displayName = Tv;
      var [Dv, Mv] = jv(Tv, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Hv = M.forwardRef((e, t) => {
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
        } = e, [d, f] = M.useState(null), h = (0, th.s)(t, e => f(e)), p = M.useRef(void 0), m = _v(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = Zv([0, t.width], y ? [n, r] : [r, n]);
          return p.current = t, o(e - t.left)
        }
        return (0, w.jsx)(Dv, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, w.jsx)(zv, {
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
              const t = Sv[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Bv = M.forwardRef((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...c
        } = e, u = M.useRef(null), d = (0, th.s)(t, u), f = M.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = Zv([0, t.height], h ? [r, n] : [n, r]);
          return f.current = t, o(e - t.top)
        }
        return (0, w.jsx)(Dv, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, w.jsx)(zv, {
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
              const t = Sv[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), zv = M.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...c
        } = e, u = Av(Tv, n);
        return (0, w.jsx)(rh.sG.span, {
          ...c,
          ref: t,
          onKeyDown: Jf(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : Pv.concat(Cv).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: Jf(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : r(e)
          }),
          onPointerMove: Jf(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: Jf(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), Fv = "SliderTrack", Vv = M.forwardRef((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Av(Fv, n);
        return (0, w.jsx)(rh.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      });
      Vv.displayName = Fv;
      var Uv = "SliderRange",
        Gv = M.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Av(Uv, n), i = Mv(Uv, n), s = M.useRef(null), a = (0, th.s)(t, s), l = o.values.length, c = o.values.map(e => $v(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, w.jsx)(rh.sG.span, {
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
      Gv.displayName = Uv;
      var qv = "SliderThumb",
        Kv = M.forwardRef((e, t) => {
          const n = Rv(e.__scopeSlider),
            [r, o] = M.useState(null),
            i = (0, th.s)(t, e => o(e)),
            s = M.useMemo(() => r ? n().findIndex(e => e.ref.current === r) : -1, [n, r]);
          return (0, w.jsx)(Xv, {
            ...e,
            ref: i,
            index: s
          })
        }),
        Xv = M.forwardRef((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...i
          } = e, s = Av(qv, n), a = Mv(qv, n), [l, c] = M.useState(null), u = (0, th.s)(t, e => c(e)), d = !l || s.form || !!l.closest("form"), f = im(l), h = s.values[r], p = void 0 === h ? 0 : $v(h, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, s.values.length), v = f?.[a.size], y = v ? function(e, t, n) {
            const r = e / 2;
            return (r - Zv([0, 50], [0, r])(t) * n) * n
          }(v, p, a.direction) : 0;
          return M.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, w.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, w.jsx)(Ov.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, w.jsx)(rh.sG.span, {
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
                onFocus: Jf(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = r
                })
              })
            }), d && (0, w.jsx)(Wv, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: h
            }, r)]
          })
        });
      Kv.displayName = qv;
      var Wv = M.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = M.useRef(null),
          i = (0, th.s)(o, r),
          s = Ev(t);
        return M.useEffect(() => {
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
        }, [s, t]), (0, w.jsx)(rh.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: i,
          defaultValue: t
        })
      });

      function $v(e, t, n) {
        return bv(100 / (n - t) * (e - t), [0, 100])
      }

      function Zv(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      Wv.displayName = "RadioBubbleInput";
      var Yv = Lv,
        Qv = Vv,
        Jv = Gv,
        ey = Kv;

      function ty(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function ny(e) {
        const t = ry(e),
          n = M.forwardRef((e, n) => {
            const {
              children: r,
              ...o
            } = e, i = M.Children.toArray(r), s = i.find(iy);
            if (s) {
              const e = s.props.children,
                r = i.map(t => t === s ? M.Children.count(e) > 1 ? M.Children.only(null) : M.isValidElement(e) ? e.props.children : null : t);
              return (0, w.jsx)(t, {
                ...o,
                ref: n,
                children: M.isValidElement(e) ? M.cloneElement(e, void 0, r) : null
              })
            }
            return (0, w.jsx)(t, {
              ...o,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function ry(e) {
        const t = M.forwardRef((e, t) => {
          const {
            children: n,
            ...r
          } = e;
          if (M.isValidElement(n)) {
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
                    i(...e), o(...e)
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
            return n.type !== M.Fragment && (o.ref = t ? (0, th.t)(t, e) : e), M.cloneElement(n, o)
          }
          return M.Children.count(n) > 1 ? M.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var oy = Symbol("radix.slottable");

      function iy(e) {
        return M.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === oy
      }
      var sy, ay = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = ny(`Primitive.${t}`),
            r = M.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, w.jsx)(s, {
                ...i,
                ref: r
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {}),
        ly = "dismissableLayer.update",
        cy = M.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        uy = M.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, c = M.useContext(cy), [u, d] = M.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, h] = M.useState({}), p = (0, th.s)(t, e => d(e)), m = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = u ? m.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = g >= y, E = function(e, t = globalThis?.document) {
            const n = (0, oh.c)(e),
              r = M.useRef(!1),
              o = M.useRef(() => {});
            return M.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      fy("dismissableLayer.pointerDownOutside", n, i, {
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
            _ && !n && (o?.(e), s?.(e), e.defaultPrevented || a?.())
          }, f), x = function(e, t = globalThis?.document) {
            const n = (0, oh.c)(e),
              r = M.useRef(!1);
            return M.useEffect(() => {
              const e = e => {
                e.target && !r.current && fy("dismissableLayer.focusOutside", n, {
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
          return (0, ih.U)(e => {
            g === c.layers.size - 1 && (r?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), M.useEffect(() => {
            if (u) return n && (0 === c.layersWithOutsidePointerEventsDisabled.size && (sy = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), dy(), () => {
              n && 1 === c.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = sy)
            }
          }, [u, f, n, c]), M.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), dy())
          }, [u, c]), M.useEffect(() => {
            const e = () => h({});
            return document.addEventListener(ly, e), () => document.removeEventListener(ly, e)
          }, []), (0, w.jsx)(ay.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: ty(e.onFocusCapture, x.onFocusCapture),
            onBlurCapture: ty(e.onBlurCapture, x.onBlurCapture),
            onPointerDownCapture: ty(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        });

      function dy() {
        const e = new CustomEvent(ly);
        document.dispatchEvent(e)
      }

      function fy(e, t, n, {
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
          e && vt.flushSync(() => e.dispatchEvent(t))
        }(o, i) : o.dispatchEvent(i)
      }
      uy.displayName = "DismissableLayer", M.forwardRef((e, t) => {
        const n = M.useContext(cy),
          r = M.useRef(null),
          o = (0, th.s)(t, r);
        return M.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, w.jsx)(ay.div, {
          ...e,
          ref: o
        })
      }).displayName = "DismissableLayerBranch";
      var hy = "focusScope.autoFocusOnMount",
        py = "focusScope.autoFocusOnUnmount",
        my = {
          bubbles: !1,
          cancelable: !0
        },
        vy = M.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = M.useState(null), c = (0, oh.c)(o), u = (0, oh.c)(i), d = M.useRef(null), f = (0, th.s)(t, e => l(e)), h = M.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          M.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : wy(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || wy(d.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && wy(a)
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
          }, [r, a, h.paused]), M.useEffect(() => {
            if (a) {
              _y.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(hy, my);
                a.addEventListener(hy, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (wy(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(yy(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && wy(a))
              }
              return () => {
                a.removeEventListener(hy, c), setTimeout(() => {
                  const t = new CustomEvent(py, my);
                  a.addEventListener(py, u), a.dispatchEvent(t), t.defaultPrevented || wy(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(py, u), _y.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = M.useCallback(e => {
            if (!n && !r) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = yy(e);
                  return [gy(t, e), gy(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && wy(i, {
                select: !0
              })) : (e.preventDefault(), n && wy(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, r, h.paused]);
          return (0, w.jsx)(ay.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function yy(e) {
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

      function gy(e, t) {
        for (const n of e)
          if (!by(n, {
              upTo: t
            })) return n
      }

      function by(e, {
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

      function wy(e, {
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
      vy.displayName = "FocusScope";
      var _y = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Ey(e, t), e.unshift(t)
          },
          remove(t) {
            e = Ey(e, t), e[0]?.resume()
          }
        }
      }();

      function Ey(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var xy = M.forwardRef((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, i] = M.useState(!1);
        (0, om.N)(() => i(!0), []);
        const s = n || o && globalThis?.document?.body;
        return s ? vt.createPortal((0, w.jsx)(ay.div, {
          ...r,
          ref: t
        }), s) : null
      });
      xy.displayName = "Portal";
      var Py = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = M.useState(), r = M.useRef(null), o = M.useRef(e), i = M.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = function(e, t) {
            return M.useReducer((e, n) => t[e][n] ?? e, e)
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
            const e = Cy(r.current);
            i.current = "mounted" === a ? e : "none"
          }, [a]), (0, om.N)(() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                s = Cy(t);
              l(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, l]), (0, om.N)(() => {
            if (t) {
              let e;
              const n = t.ownerDocument.defaultView ?? window,
                s = i => {
                  const s = Cy(r.current).includes(i.animationName);
                  if (i.target === t && s && (l("ANIMATION_END"), !o.current)) {
                    const r = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                    })
                  }
                },
                a = e => {
                  e.target === t && (i.current = Cy(r.current))
                };
              return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            l("ANIMATION_END")
          }, [t, l]), {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: M.useCallback(e => {
              r.current = e ? getComputedStyle(e) : null, n(e)
            }, [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : M.Children.only(n), i = (0, th.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? M.cloneElement(o, {
          ref: i
        }) : null
      };

      function Cy(e) {
        return e?.animationName || "none"
      }
      Py.displayName = "Presence";
      var Sy = 0;

      function Ty() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Oy = n(97359),
        Ry = n(94926),
        Ny = "Dialog",
        [jy, Iy] = (0, nh.A)(Ny),
        [ky, Ay] = jy(Ny),
        Ly = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = M.useRef(null), l = M.useRef(null), [c, u] = (0, jm.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: Ny
          });
          return (0, w.jsx)(ky, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, ph.B)(),
            titleId: (0, ph.B)(),
            descriptionId: (0, ph.B)(),
            open: c,
            onOpenChange: u,
            onOpenToggle: M.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: n
          })
        };
      Ly.displayName = Ny;
      var Dy = "DialogTrigger",
        My = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ay(Dy, n), i = (0, th.s)(t, o.triggerRef);
          return (0, w.jsx)(ay.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": rg(o.open),
            ...r,
            ref: i,
            onClick: ty(e.onClick, o.onOpenToggle)
          })
        });
      My.displayName = Dy;
      var Hy = "DialogPortal",
        [By, zy] = jy(Hy, {
          forceMount: void 0
        }),
        Fy = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Ay(Hy, t);
          return (0, w.jsx)(By, {
            scope: t,
            forceMount: n,
            children: M.Children.map(r, e => (0, w.jsx)(Py, {
              present: n || i.open,
              children: (0, w.jsx)(xy, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      Fy.displayName = Hy;
      var Vy = "DialogOverlay",
        Uy = M.forwardRef((e, t) => {
          const n = zy(Vy, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ay(Vy, e.__scopeDialog);
          return i.modal ? (0, w.jsx)(Py, {
            present: r || i.open,
            children: (0, w.jsx)(qy, {
              ...o,
              ref: t
            })
          }) : null
        });
      Uy.displayName = Vy;
      var Gy = ny("DialogOverlay.RemoveScroll"),
        qy = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ay(Vy, n);
          return (0, w.jsx)(Oy.A, {
            as: Gy,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, w.jsx)(ay.div, {
              "data-state": rg(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        Ky = "DialogContent",
        Xy = M.forwardRef((e, t) => {
          const n = zy(Ky, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ay(Ky, e.__scopeDialog);
          return (0, w.jsx)(Py, {
            present: r || i.open,
            children: i.modal ? (0, w.jsx)(Wy, {
              ...o,
              ref: t
            }) : (0, w.jsx)($y, {
              ...o,
              ref: t
            })
          })
        });
      Xy.displayName = Ky;
      var Wy = M.forwardRef((e, t) => {
          const n = Ay(Ky, e.__scopeDialog),
            r = M.useRef(null),
            o = (0, th.s)(t, n.contentRef, r);
          return M.useEffect(() => {
            const e = r.current;
            if (e) return (0, Ry.Eq)(e)
          }, []), (0, w.jsx)(Zy, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ty(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: ty(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: ty(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        $y = M.forwardRef((e, t) => {
          const n = Ay(Ky, e.__scopeDialog),
            r = M.useRef(!1),
            o = M.useRef(!1);
          return (0, w.jsx)(Zy, {
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
        Zy = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = Ay(Ky, n), l = M.useRef(null), c = (0, th.s)(t, l);
          return M.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ty()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ty()), Sy++, () => {
              1 === Sy && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Sy--
            }
          }, []), (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)(vy, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, w.jsx)(uy, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": rg(a.open),
                ...s,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, w.jsxs)(w.Fragment, {
              children: [(0, w.jsx)(ag, {
                titleId: a.titleId
              }), (0, w.jsx)(lg, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        Yy = "DialogTitle",
        Qy = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ay(Yy, n);
          return (0, w.jsx)(ay.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      Qy.displayName = Yy;
      var Jy = "DialogDescription",
        eg = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ay(Jy, n);
          return (0, w.jsx)(ay.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      eg.displayName = Jy;
      var tg = "DialogClose",
        ng = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ay(tg, n);
          return (0, w.jsx)(ay.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ty(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function rg(e) {
        return e ? "open" : "closed"
      }
      ng.displayName = tg;
      var og = "DialogTitleWarning",
        [ig, sg] = (0, nh.q)(og, {
          contentName: Ky,
          titleName: Yy,
          docsSlug: "dialog"
        }),
        ag = ({
          titleId: e
        }) => {
          const t = sg(og),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return M.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        lg = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${sg("DialogDescriptionWarning").contentName}}.`;
          return M.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        cg = Ly,
        ug = My,
        dg = Fy,
        fg = Uy,
        hg = Xy,
        pg = Qy,
        mg = eg,
        vg = ng;
      const yg = (0, M.createContext)({
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
        gg = ({
          altText: e,
          open: t,
          onOpenChange: n,
          defaultOpen: r,
          minZoomLevel: o = 100,
          maxZoomLevel: i = 300,
          zoomLevelStep: s = 100,
          clickAction: a = "close",
          doubleTapAction: l = "zoom",
          tapAction: c = "toggle-controls",
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, Zt.Ym)(),
            h = (0, M.useRef)(null),
            p = (0, M.useRef)(null),
            m = (0, M.useRef)(null),
            v = (0, M.useRef)(null),
            y = (0, M.useRef)(null),
            g = (0, M.useRef)(null),
            b = (0, M.useRef)(null),
            _ = (0, M.useRef)(null),
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
            [k = !1, A] = function({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              const [r, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const n = (0, M.useState)(e),
                  [r] = n,
                  o = (0, M.useRef)(r),
                  i = Ar(t);
                return (0, M.useEffect)(() => {
                  o.current !== r && (i(r), o.current = r)
                }, [r, o, i]), n
              }({
                defaultProp: t,
                onChange: n
              }), i = void 0 !== e, s = i ? e : r, a = Ar(n), l = (0, M.useCallback)(t => {
                if (i) {
                  const n = "function" == typeof t ? t(e) : t;
                  n !== e && a(n)
                } else o(t)
              }, [i, e, o, a]);
              return [s, l]
            }({
              prop: t || r,
              onChange: n
            }),
            L = (0, M.useRef)(null);
          return L.current || (L.current = new Jl({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: c,
              doubleTap: l
            }
          })), (0, w.jsx)(zl, {
            messages: Fl,
            locale: f,
            children: (0, w.jsx)(yg.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: p,
                thumbnailRef: m,
                openIconRef: v,
                overlayRef: y,
                contentRef: g,
                containerRef: b,
                zoomPanRef: _,
                imageRef: E,
                placeholderRef: x,
                captionRef: P,
                controlsRef: C,
                closeRef: S,
                zoomRef: T,
                zoomInRef: O,
                zoomSliderRef: R,
                zoomOutRef: N,
                resetRef: j,
                downloadRef: I,
                open: k,
                setOpen: A,
                altText: e,
                hideTrigger: u,
                slide: L.current
              },
              children: (0, w.jsx)(wg, {
                ...d
              })
            })
          })
        },
        bg = (0, M.createContext)({
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
        wg = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, M.useContext)(yg), {
            onOpenChange: n,
            openAnim: r,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, Mr.L)(), {
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
            } = (0, M.useContext)(yg), h = (0, M.useRef)(null);
            h.current || (h.current = Dr.os.timeline({
              defaults: Ei
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), Dr.os.set([d.current, f.current], {
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
                }), Dr.os.set([f.current], {
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
                }), r && h.current.to([s.current, a.current], {
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
                  [Pi]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Pi]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Ko(f.current), t.closing || (Dr.os.set([f.current], {
                  visibility: "visible",
                  ...xi
                }), Dr.os.set([d.current], {
                  visibility: "hidden",
                  ...xi
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, M.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), n(e)
              }, [n]),
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
            } = (0, Mr.L)(), {
              slide: n,
              imageRef: r,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, M.useContext)(yg), l = t(async e => {
              n.zoomTo(e), Dr.os.set([o.current], {
                ...n.getCurrentTransform(),
                ...xi
              })
            }), c = t(async () => {
              n.zoomTo(n.currZoomLevel + n.zoomLevels.step), Dr.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...xi
              })
            }), u = t(async () => {
              n.zoomTo(n.currZoomLevel - n.zoomLevels.step), Dr.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...xi
              })
            }), d = t(async () => {
              n.zoomAndPanToInitial(), Dr.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...xi
              })
            }), f = t(async () => {
              if (n.closing) return;
              n.toggleControls();
              const e = n.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Dr.os.to([i.current], {
                opacity: e,
                [Pi]: t,
                ...xi
              })
            }), h = t(async () => {
              Dr.os.to([o.current], {
                ...n.getCurrentTransform(),
                ...xi
              })
            }), p = (0, M.useCallback)(() => {
              r.current && o.current && (n.resize(), Dr.os.set([o.current], {
                ...n.getCurrentTransform(),
                ...xi
              }), Dr.os.set([r.current, a.current], {
                ...n.getUpdatedContentSize(),
                ...xi
              }), Dr.os.set([s.current], {
                width: n.panAreaSize.x,
                height: n.panAreaSize.y
              }))
            }, []);
            return (0, M.useEffect)(() => (n.addEventListener("close", e), n.addEventListener("animate", h), n.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
              n.removeEventListener("close", e), n.removeEventListener("animate", h), n.removeEventListener("toggle-controls", f), window.removeEventListener("resize", p)
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
          }), d = (0, Ul.v6)(e, {
            open: t,
            onOpenChange: n
          });
          return (0, w.jsx)(bg.Provider, {
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
            children: (0, w.jsx)(cg, {
              ...d
            })
          })
        },
        _g = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const o = Al(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, M.useContext)(yg),
            l = kr(i, r),
            c = (0, Ul.v6)(n, {
              "data-testid": e,
              "aria-label": o.formatMessage(tc, {
                description: a
              }),
              className: "foundry_1a74xwb3 foundry_8kowh41"
            });
          return (0, w.jsx)(ug, {
            ref: l,
            ...c,
            children: (0, w.jsx)("div", {
              className: "foundry_1a74xwb4",
              ref: s,
              children: (0, w.jsx)($t.xV, {
                children: t
              })
            })
          })
        }),
        Eg = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            thumbnailRef: o
          } = (0, M.useContext)(yg), i = kr(o, r), s = (0, Ul.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb5"
          }), a = t ? $t.DX : "img";
          return (0, w.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        xg = (0, M.forwardRef)(function({
          asChild: e,
          ...t
        }, n) {
          const {
            openIconRef: r
          } = (0, M.useContext)(yg), o = kr(r, n), i = (0, Ul.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb6",
            size: "SM"
          }), s = e ? $t.DX : ec.Plus;
          return (0, w.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        Pg = ({
          ...e
        }) => (0, w.jsx)(dg, {
          ...e
        }),
        Cg = (0, M.forwardRef)(function({
          testId: e,
          ...t
        }, n) {
          const {
            overlayRef: r
          } = (0, M.useContext)(yg), o = kr(r, n), i = (0, Ul.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb7"
          });
          return (0, w.jsx)(fg, {
            ref: o,
            ...i
          })
        }),
        Sg = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            openAnim: o
          } = (0, M.useContext)(bg), {
            contrastMode: i
          } = (0, Zt.DP)(), {
            contentRef: s,
            altText: a,
            triggerRef: l
          } = (0, M.useContext)(yg), {
            cursor: c
          } = (() => {
            const {
              slide: e
            } = (0, M.useContext)(yg), [t, n] = (0, M.useState)(e.getCursor()), r = (0, M.useCallback)(() => {
              n(e.getCursor())
            }, []);
            return (0, M.useEffect)(() => (e.addEventListener("zoom", r), () => {
              e.removeEventListener("zoom", r)
            }), [r]), {
              cursor: t
            }
          })(), u = (0, Vl.m)("dark", i), d = kr(s, r), f = (0, Ul.v6)(n, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, ue.clsx)("foundry_1a74xwb8", u),
            style: {
              cursor: c
            }
          });
          return (0, w.jsxs)(hg, {
            ref: d,
            ...f,
            children: [(0, w.jsx)(Ir, {
              children: (0, w.jsx)(pg, {
                children: a
              })
            }), t]
          })
        }),
        Tg = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...n
        }, r) {
          const {
            containerRef: o
          } = (0, M.useContext)(yg);
          (() => {
            const {
              contextSafe: e
            } = (0, Mr.L)(), {
              toggleControls: t
            } = (0, M.useContext)(bg), {
              containerRef: n,
              zoomPanRef: r,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, M.useContext)(yg), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Dr.os.to([r.current], {
                ...s.getCurrentTransform(),
                ...xi
              }), Dr.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...xi
              }), Dr.os.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...xi
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Dr.os.to([r.current], {
                ...s.getCurrentTransform(),
                ...xi
              }))
            }), c = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Dr.os.to([r.current], {
                ...s.getCurrentTransform(),
                ...xi
              }), Dr.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...xi
              }), Dr.os.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...xi
              })))
            }), u = (0, M.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (({
              ref: e,
              onChange: t,
              onFocusIn: n,
              onFocusOut: r,
              enabled: o = !0
            }) => {
              const [i, s] = (0, M.useState)(!1);
              Lr("focusin", e => {
                s(!0), n?.(e), t?.(!0, e)
              }, e), Lr("focusout", e => {
                s(!1), r?.(e), t?.(!1, e)
              }, e)
            })({
              ref: i,
              onFocusIn: u
            }), qo({
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
          const i = kr(o, r),
            s = (0, Ul.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwb9 foundry_1a74xwb1"
            });
          return (0, w.jsx)("div", {
            ref: i,
            ...s,
            children: (0, w.jsxs)(Og, {
              children: [(0, w.jsx)(Rg, {}), t]
            })
          })
        }),
        Og = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            zoomPanRef: o
          } = (0, M.useContext)(yg), i = kr(o, r), s = (0, Ul.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwba foundry_1a74xwb1"
          }), a = t ? $t.DX : "div";
          return (0, w.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Rg = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            placeholderRef: o
          } = (0, M.useContext)(yg), i = kr(o, r), s = (0, Ul.v6)(n, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb2 foundry_1a74xwb1"
          }), a = t ? $t.DX : "img";
          return (0, w.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Ng = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            imageRef: o
          } = (0, M.useContext)(yg), i = kr(o, r), s = (0, Ul.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwb2",
            draggable: !1
          }), a = t ? $t.DX : "img";
          return (0, w.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        jg = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            captionRef: o
          } = (0, M.useContext)(yg), i = kr(o, r), s = (0, Ul.v6)(n, {
            "data-testid": e,
            className: "foundry_1a74xwbg foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? $t.DX : "p";
          return (0, w.jsx)(mg, {
            asChild: !0,
            children: (0, w.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Ig = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...n
        }, r) {
          const {
            controlsRef: o
          } = (0, M.useContext)(yg);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: n,
              resetZoom: r,
              close: o
            } = (0, M.useContext)(bg);
            mi(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), mi(["minus", "subtract"], n, {
              enabled: e,
              preventDefault: !0
            }), mi("r", r, {
              enabled: e,
              preventDefault: !0
            }), mi("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = kr(o, r),
            s = (0, Ul.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbd foundry_1a74xwb1 foundry_1a74xwb2"
            }),
            a = t ? $t.DX : "div";
          return (0, w.jsx)(fi, {
            children: (0, w.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        kg = ({
          content: e,
          metadata: t,
          enabled: n = !0,
          children: r,
          ...o
        }) => {
          if (!n) return (0, w.jsx)(w.Fragment, {
            children: r
          });
          const i = (0, Ul.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, w.jsxs)(pv, {
            delayDuration: 0,
            children: [(0, w.jsx)(mv, {
              children: r
            }), (0, w.jsxs)(vv, {
              ...i,
              children: [(0, w.jsxs)("div", {
                className: "foundry_1a74xwbe",
                children: [e, t && (0, w.jsx)("div", {
                  className: "foundry_1a74xwbf",
                  children: t
                })]
              }), (0, w.jsx)(yv, {})]
            })]
          })
        },
        Ag = (0, M.forwardRef)(function({
          ...e
        }, t) {
          const n = (0, Ul.v6)(e, {
            isInline: !0
          });
          return (0, w.jsx)(hc, {
            ref: t,
            ...n
          })
        }),
        Lg = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          children: r,
          ...o
        }, i) {
          const s = Al(),
            {
              zoomRef: a
            } = (0, M.useContext)(yg),
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
              } = (0, M.useContext)(yg), {
                zoomIn: t,
                zoomOut: n,
                zoomTo: r
              } = (0, M.useContext)(bg), [o, i] = (0, M.useState)(!1), [s, a] = (0, M.useState)(!1), [l, c] = (0, M.useState)(0), [u, d] = (0, M.useState)(0), [f, h] = (0, M.useState)(0), p = (0, M.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, M.useCallback)(([e]) => {
                r(e / 100)
              }, [r]);
              return (0, M.useEffect)(() => (e.addEventListener("zoom", p), () => {
                e.removeEventListener("zoom", p)
              }), [p]), {
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
            v = kr(a, i),
            y = (0, Ul.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbl"
            }),
            g = t ? $t.DX : "div";
          return (0, w.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, w.jsx)(kg, {
              side: "left",
              enabled: n,
              content: s.formatMessage(oc),
              metadata: s.formatMessage(ic, {
                shortcut: (0, w.jsx)(Ag, {
                  shortcut: "+"
                })
              }),
              children: (0, w.jsx)(Bn, {
                label: s.formatMessage(oc),
                size: {
                  mobile: "MD",
                  default: "XL"
                },
                icon: "Plus",
                appearance: "tertiary",
                className: _i({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, w.jsxs)(Yv, {
              className: "foundry_1a74xwbp",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, w.jsx)(Qv, {
                className: "foundry_1a74xwbq",
                children: (0, w.jsx)(Jv, {
                  className: "foundry_1a74xwbr"
                })
              }), (0, w.jsx)(kg, {
                side: "left",
                enabled: n,
                content: s.formatMessage(uc, {
                  zoom: f.toFixed(0)
                }),
                children: (0, w.jsx)(ey, {
                  className: "foundry_1a74xwbs",
                  children: (0, w.jsx)("span", {
                    className: "foundry_1a74xwbt"
                  })
                })
              })]
            }), (0, w.jsx)(kg, {
              side: "left",
              enabled: n,
              content: s.formatMessage(sc),
              metadata: s.formatMessage(ac, {
                shortcut: (0, w.jsx)(Ag, {
                  shortcut: "-"
                })
              }),
              children: (0, w.jsx)(Bn, {
                label: s.formatMessage(sc),
                size: {
                  mobile: "MD",
                  default: "XL"
                },
                icon: "Minus",
                appearance: "tertiary",
                className: _i({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, w.jsx)($t.xV, {
              children: r
            })]
          })
        }),
        Dg = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: n = !0,
          ...r
        }, o) {
          const i = Al(),
            {
              closeRef: s
            } = (0, M.useContext)(yg),
            a = kr(s, o),
            l = (0, Ul.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbi"
            }),
            c = t ? (0, w.jsx)($t.DX, {
              ref: a,
              ...l
            }) : (0, w.jsx)(Bn, {
              ref: a,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "ArrowLeft",
              appearance: "tertiary",
              label: i.formatMessage(nc)
            });
          return (0, w.jsx)(kg, {
            side: "right",
            enabled: n,
            content: i.formatMessage(nc),
            metadata: i.formatMessage(rc, {
              shortcut: (0, w.jsx)(Ag, {
                shortcut: "Esc"
              })
            }),
            children: (0, w.jsx)(vg, {
              asChild: !0,
              children: c
            })
          })
        }),
        Mg = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = Al(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, M.useContext)(yg), {
                contextSafe: n
              } = (0, Mr.L)(), {
                resetZoom: r
              } = (0, M.useContext)(bg), [o, i] = (0, M.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = n(e => {
                Dr.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...xi
                })
              }), a = (0, M.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                i(t), s(t)
              }, [i]);
              return (0, M.useEffect)(() => (e.addEventListener("zoom", a), () => {
                e.removeEventListener("zoom", a)
              }), [a]), {
                isDisabled: !o,
                onPress: r,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, M.useContext)(yg),
            a = kr(s, r),
            l = (0, Ul.v6)(n, i, {
              "data-testid": e,
              className: "foundry_1a74xwbj"
            });
          return (0, w.jsx)(kg, {
            side: "left",
            enabled: t,
            content: o.formatMessage(lc),
            metadata: o.formatMessage(cc, {
              shortcut: (0, w.jsx)(Ag, {
                shortcut: "R"
              })
            }),
            children: (0, w.jsx)(Bn, {
              ref: a,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(lc)
            })
          })
        }),
        Hg = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...n
        }, r) {
          const o = Al(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, M.useContext)(yg),
            a = kr(i, r),
            l = (0, Ul.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbk"
            });
          return (0, w.jsx)(kg, {
            side: "left",
            enabled: t,
            content: o.formatMessage(dc),
            children: (0, w.jsx)(Bn, {
              ref: a,
              ...l,
              size: {
                mobile: "MD",
                default: "XL"
              },
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(dc),
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
        Bg = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        zg = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? jr.s6 : M.Fragment;
          return (0, w.jsx)(n, {
            ...t
          })
        },
        Fg = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        Vg = Fg.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function Ug(e) {
        return e.matches(Vg)
      }
      Fg.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), Fg.join(':not([hidden]):not([tabindex="-1"]),');
      const Gg = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        qg = e => e && "window" in e && e.window === e ? e : Gg(e).defaultView || window;

      function Kg(e) {
        if (function() {
            if (null == Xg) {
              Xg = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Xg = !0, !0
                  }
                })
              } catch {}
            }
            return Xg
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
      let Xg = null;
      let Wg = !1;

      function $g(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function Zg(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Yg(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Qg = Yg(function() {
          return Zg(/^Mac/i)
        }),
        Jg = Yg(function() {
          return Zg(/^iPhone/i)
        }),
        eb = Yg(function() {
          return Zg(/^iPad/i) || Qg() && navigator.maxTouchPoints > 1
        }),
        tb = Yg(function() {
          return Jg() || eb()
        }),
        nb = (Yg(function() {
          return Qg() || tb()
        }), Yg(function() {
          return $g(/AppleWebKit/i) && !rb()
        })),
        rb = Yg(function() {
          return $g(/Chrome/i)
        }),
        ob = Yg(function() {
          return $g(/Android/i)
        }),
        ib = Yg(function() {
          return $g(/Firefox/i)
        });
      let sb = new Map,
        ab = new Set;

      function lb() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = sb.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), sb.delete(n.target)), 0 === sb.size)) {
            for (let e of ab) e();
            ab.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let r = sb.get(n.target);
          r || (r = new Set, sb.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? lb() : document.addEventListener("DOMContentLoaded", lb));
      let cb = "default",
        ub = "",
        db = new WeakMap;

      function fb(e) {
        if (tb()) {
          if ("disabled" !== cb) return;
          cb = "restoring", setTimeout(() => {
            var t;
            t = () => {
              if ("restoring" === cb) {
                const t = Gg(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = ub || ""), ub = "", cb = "default"
              }
            }, requestAnimationFrame(() => {
              ! function() {
                for (const [e] of sb) "isConnected" in e && !e.isConnected && sb.delete(e)
              }(), 0 === sb.size ? t() : ab.add(t)
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && db.has(e)) {
          let t = db.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), db.delete(e)
        }
      }
      const hb = M.createContext({
        register: () => {}
      });

      function pb(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      hb.displayName = "PressResponderContext", Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let mb, vb = new Map;

      function yb(e, t) {
        if (e === t) return e;
        let n = vb.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = vb.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function gb(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = pb(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = yb(n, o) : t[e] = void 0 !== o ? o : n : t[e] = ue(n, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (mb = new FinalizationRegistry(e => {
        vb.delete(e)
      }));
      const bb = "undefined" != typeof document ? M.useLayoutEffect : () => {};

      function wb(e) {
        const t = (0, M.useRef)(null);
        return bb(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }

      function _b(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function Eb(e) {
        return e.target
      }

      function xb(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        ib() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Qg() ? i = !0 : s = !0);
        let c = nb() && Qg() && !eb() ? new KeyboardEvent("keydown", {
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
        xb.isOpening = n, Kg(e), e.dispatchEvent(c), xb.isOpening = !1
      }

      function Pb(e) {
        let t = (0, M.useContext)(hb);
        if (t) {
          let {
            register: n,
            ...r
          } = t;
          e = gb(r, e), n()
        }
        return function(e, t) {
          bb(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          })
        }(t, e.ref), e
      }
      xb.isOpening = !1;
      var Cb = new WeakMap;
      class Sb {
        continuePropagation() {
          ot(this, Cb, !1)
        }
        get shouldStopPropagation() {
          return nt(this, Cb)
        }
        constructor(e, t, n, r) {
          var o;
          rt(this, Cb, {
            writable: !0,
            value: void 0
          }), ot(this, Cb, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), s && (null != l && null != u ? (a = l - s.left, c = u - s.top) : (a = s.width / 2, c = s.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = a, this.y = c
        }
      }
      const Tb = Symbol("linkClicked"),
        Ob = "react-aria-pressable-style",
        Rb = "data-react-aria-pressable";

      function Nb(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
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
        } = Pb(e), [p, m] = (0, M.useState)(!1), v = (0, M.useRef)({
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
            t = (0, M.useCallback)((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, i, o)
            }, []),
            n = (0, M.useCallback)((t, n, r, o) => {
              var i;
              let s = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, s, o), e.current.delete(r)
            }, []),
            r = (0, M.useCallback)(() => {
              e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              })
            }, [n]);
          return (0, M.useEffect)(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), b = wb((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Sb("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }), w = wb((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Sb("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new Sb("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }), _ = wb((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Sb("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), E = wb(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && w(kb(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || fb(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), x = wb(e => {
          u && E(e)
        }), P = wb(e => {
          null == s || s(e)
        }), C = wb((e, t) => {
          if (s) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), s(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(n))
          }
        }), S = (0, M.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Ib(t.nativeEvent, t.currentTarget) && _b(t.currentTarget, Eb(t.nativeEvent))) {
                  var r;
                  Ab(Eb(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Ib(t, r) && !t.repeat && _b(r, Eb(t)) && e.target && _(kb(e.target, t), "keyboard")
                      };
                    y(Gg(t.currentTarget), "keyup", pb(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Qg() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var n;
                if ((!t || _b(t.currentTarget, Eb(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !xb.isOpening) {
                  let r = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (n = t.nativeEvent).mozInputSource || !n.isTrusted) && (ob() && n.pointerType ? "click" !== n.type || 1 !== n.buttons : 0 !== n.detail || n.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = _(kb(t.currentTarget, t), n),
                        i = w(kb(t.currentTarget, t), n, !0);
                      r = o && i, e.isOverTarget = !1, P(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = _(t, "virtual"),
                      o = w(t, "virtual");
                    P(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && Ib(t, e.target)) {
                var r;
                Ab(Eb(t), t.key) && t.preventDefault();
                let n = Eb(t),
                  o = _b(e.target, Eb(t));
                w(kb(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && jb(e.target) && _b(e.target, n) && !t[Tb] && (t[Tb] = !0, xb(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !_b(t.currentTarget, Eb(t.nativeEvent))) return;
              if (o = t.nativeEvent, !ob() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (tb()) {
                    if ("default" === cb) {
                      const t = Gg(e);
                      ub = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    cb = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    db.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = Eb(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Gg(t.currentTarget), "pointerup", n, !1), y(Gg(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (_b(t.currentTarget, Eb(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !Ug(e);) e = e.parentElement;
                    let t = qg(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Wg = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Kg(n), l()))
                      },
                      s = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Kg(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), Wg = !1, r = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              _b(t.currentTarget, Eb(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || _(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(kb(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(kb(e.target, t), e.pointerType, !1), x(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (_b(e.target, Eb(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? E(t) : (Kg(e.target), e.target.click()))
                      }, 80);
                    y(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else E(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                E(e)
              };
            t.onDragStart = e => {
              _b(e.currentTarget, Eb(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, a, c, g, d, E, x, w, b, _, P, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = Gg(f.current);
          if (!e || !e.head || e.getElementById(Ob)) return;
          const t = e.createElement("style");
          t.id = Ob, t.textContent = `\n@layer {\n  [${Rb}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || fb(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: gb(h, S, {
            [Rb]: !0
          })
        }
      }

      function jb(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Ib(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof qg(o).HTMLInputElement && !Db(o, n) || o instanceof qg(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && jb(o)) && "Enter" !== n)
      }

      function kb(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function Ab(e, t) {
        return e instanceof HTMLInputElement ? !Db(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : jb(e)))
        }(e)
      }
      const Lb = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Db(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Lb.has(e.type)
      }
      var Mb = n(90744);
      const Hb = new Map;

      function Bb(e, t) {
        if (e === t) return e;
        const n = Hb.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = Hb.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function zb(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function Fb(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = zb(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Bb(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var Vb;

      function Ub(e) {
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

      function Gb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function qb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gb(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Ub(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gb(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Kb(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(Vb || (Vb = {})), Symbol.toStringTag;
      var Xb = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Wb = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = qb(qb({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xb(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kb(e.variantClassNames, e => Kb(e, e => e.split(" ")[0]))
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
        }),
        $b = n(84999),
        Zb = n.t($b, 2);
      const Yb = (0, M.createContext)(null);

      function Qb() {
        const e = (0, M.useContext)(Yb);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Jb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          descriptionId: r = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = Fb({
              className: Wb({
                status: i
              }),
              "data-testid": t
            }, s),
            c = n ? $t.DX : "div";
          return (0, w.jsx)(Yb.Provider, {
            value: {
              descriptionId: r,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, w.jsx)(c, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        ew = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          ...n
        }, r) => {
          const {
            status: o
          } = Qb(), i = Fb({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, n), s = {
            success: $b.Check,
            invalid: $b.X,
            neutral: $b.TriangleAlert
          }, a = t ? $t.DX : s[o];
          return (0, w.jsx)(a, {
            ref: r,
            ...i
          })
        }),
        tw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = Qb(), a = Fb({
            "data-testid": t,
            id: s || i
          }, r), l = n ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });

      function nw(...e) {
        const t = (0, M.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }

      function rw(e) {
        const t = (0, M.useRef)(e);
        return (0, M.useEffect)(() => {
          t.current = e
        }), (0, M.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      n(43778), n(24244);
      var ow = "ScrollArea",
        [iw, sw] = (0, nh.A)(ow),
        [aw, lw] = iw(ow),
        cw = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = M.useState(null), [c, u] = M.useState(null), [d, f] = M.useState(null), [h, p] = M.useState(null), [m, v] = M.useState(null), [y, g] = M.useState(0), [b, _] = M.useState(0), [E, x] = M.useState(!1), [P, C] = M.useState(!1), S = (0, th.s)(t, e => l(e)), T = _v(o);
          return (0, w.jsx)(aw, {
            scope: n,
            type: r,
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
            onCornerHeightChange: _,
            children: (0, w.jsx)(rh.sG.div, {
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
      cw.displayName = ow;
      var uw = "ScrollAreaViewport",
        dw = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...i
          } = e, s = lw(uw, n), a = M.useRef(null), l = (0, th.s)(t, a, s.onViewportChange);
          return (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, w.jsx)(rh.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, w.jsx)("div", {
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
      dw.displayName = uw;
      var fw = "ScrollAreaScrollbar",
        hw = M.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = lw(fw, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return M.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, w.jsx)(pw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, w.jsx)(mw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, w.jsx)(vw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, w.jsx)(yw, {
            ...r,
            ref: t
          }) : null
        });
      hw.displayName = fw;
      var pw = M.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = lw(fw, e.__scopeScrollArea), [i, s] = M.useState(!1);
          return M.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, w.jsx)(Rm, {
            present: n || i,
            children: (0, w.jsx)(vw, {
              "data-state": i ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        }),
        mw = M.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = lw(fw, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Lw(() => l("SCROLL_END"), 100), [a, l] = (c = {
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
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (l("SCROLL"), s()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [o.viewport, i, l, s]), (0, w.jsx)(Rm, {
            present: n || "hidden" !== a,
            children: (0, w.jsx)(yw, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Jf(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: Jf(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        vw = M.forwardRef((e, t) => {
          const n = lw(fw, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [i, s] = M.useState(!1),
            a = "horizontal" === e.orientation,
            l = Lw(() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return Dw(n.viewport, l), Dw(n.content, l), (0, w.jsx)(Rm, {
            present: r || i,
            children: (0, w.jsx)(yw, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        yw = M.forwardRef((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = lw(fw, e.__scopeScrollArea), i = M.useRef(null), s = M.useRef(0), [a, l] = M.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Rw(a.viewport, a.content), u = {
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
              const o = Nw(n),
                i = t || o / 2,
                s = o - i,
                a = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
                c = n.content - n.viewport;
              return Iw([a, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === n ? (0, w.jsx)(gw, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = jw(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === n ? (0, w.jsx)(bw, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = jw(o.viewport.scrollTop, a);
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
        gw = M.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = lw(fw, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), c = (0, th.s)(t, l, i.onScrollbarXChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, w.jsx)(Ew, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Nw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), kw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && r({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Ow(s.paddingLeft),
                  paddingEnd: Ow(s.paddingRight)
                }
              })
            }
          })
        }),
        bw = M.forwardRef((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, i = lw(fw, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), c = (0, th.s)(t, l, i.onScrollbarYChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, w.jsx)(Ew, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Nw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (i.viewport) {
                const r = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), kw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && r({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Ow(s.paddingTop),
                  paddingEnd: Ow(s.paddingBottom)
                }
              })
            }
          })
        }),
        [ww, _w] = iw(fw),
        Ew = M.forwardRef((e, t) => {
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
          } = e, h = lw(fw, n), [p, m] = M.useState(null), v = (0, th.s)(t, e => m(e)), y = M.useRef(null), g = M.useRef(""), b = h.viewport, _ = r.content - r.viewport, E = (0, oh.c)(u), x = (0, oh.c)(l), P = Lw(d, 10);

          function C(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                n = e.clientY - y.current.top;
              c({
                x: t,
                y: n
              })
            }
          }
          return M.useEffect(() => {
            const e = e => {
              const t = e.target,
                n = p?.contains(t);
              n && E(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, _, E]), M.useEffect(x, [r, x]), Dw(p, P), Dw(h.content, P), (0, w.jsx)(ww, {
            scope: n,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, oh.c)(i),
            onThumbPointerUp: (0, oh.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, oh.c)(a),
            children: (0, w.jsx)(rh.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: Jf(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: Jf(e.onPointerMove, C),
              onPointerUp: Jf(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        xw = "ScrollAreaThumb",
        Pw = M.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = _w(xw, e.__scopeScrollArea);
          return (0, w.jsx)(Rm, {
            present: n || o.hasThumb,
            children: (0, w.jsx)(Cw, {
              ref: t,
              ...r
            })
          })
        }),
        Cw = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, i = lw(xw, n), s = _w(xw, n), {
            onThumbPositionChange: a
          } = s, l = (0, th.s)(t, e => s.onThumbChange(e)), c = M.useRef(void 0), u = Lw(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return M.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = Aw(e, a);
                  c.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, u, a]), (0, w.jsx)(rh.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Jf(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              s.onThumbPointerDown({
                x: n,
                y: r
              })
            }),
            onPointerUp: Jf(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Pw.displayName = xw;
      var Sw = "ScrollAreaCorner";
      M.forwardRef((e, t) => {
        const n = lw(Sw, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, w.jsx)(Tw, {
          ...e,
          ref: t
        }) : null
      }).displayName = Sw;
      var Tw = M.forwardRef((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = lw(Sw, n), [i, s] = M.useState(0), [a, l] = M.useState(0), c = Boolean(i && a);
        return Dw(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), Dw(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), c ? (0, w.jsx)(rh.sG.div, {
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

      function Ow(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Rw(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function Nw(e) {
        const t = Rw(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function jw(e, t, n = "ltr") {
        const r = Nw(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - r,
          l = bv(e, "ltr" === n ? [0, s] : [-1 * s, 0]);
        return Iw([0, s], [0, a])(l)
      }

      function Iw(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function kw(e, t) {
        return e > 0 && e < t
      }
      var Aw = (e, t = () => {}) => {
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

      function Lw(e, t) {
        const n = (0, oh.c)(e),
          r = M.useRef(0);
        return M.useEffect(() => () => window.clearTimeout(r.current), []), M.useCallback(() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }, [n, t])
      }

      function Dw(e, t) {
        const n = (0, oh.c)(t);
        (0, om.N)(() => {
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
      var Mw = cw,
        Hw = dw,
        Bw = hw,
        zw = Pw,
        Fw = 0;

      function Vw() {
        M.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? Uw()), document.body.insertAdjacentElement("beforeend", e[1] ?? Uw()), Fw++, () => {
            1 === Fw && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Fw--
          }
        }, [])
      }

      function Uw() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Gw = "focusScope.autoFocusOnMount",
        qw = "focusScope.autoFocusOnUnmount",
        Kw = {
          bubbles: !1,
          cancelable: !0
        },
        Xw = M.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = M.useState(null), c = (0, oh.c)(o), u = (0, oh.c)(i), d = M.useRef(null), f = (0, th.s)(t, e => l(e)), h = M.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          M.useEffect(() => {
            if (r) {
              let e = function(e) {
                  if (h.paused || !a) return;
                  const t = e.target;
                  a.contains(t) ? d.current = t : Yw(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || Yw(d.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Yw(a)
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
          }, [r, a, h.paused]), M.useEffect(() => {
            if (a) {
              Qw.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Gw, Kw);
                a.addEventListener(Gw, c), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Yw(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Ww(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Yw(a))
              }
              return () => {
                a.removeEventListener(Gw, c), setTimeout(() => {
                  const t = new CustomEvent(qw, Kw);
                  a.addEventListener(qw, u), a.dispatchEvent(t), t.defaultPrevented || Yw(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(qw, u), Qw.remove(h)
                }, 0)
              }
            }
          }, [a, c, u, h]);
          const p = M.useCallback(e => {
            if (!n && !r) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = Ww(e);
                  return [$w(t, e), $w(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Yw(i, {
                select: !0
              })) : (e.preventDefault(), n && Yw(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, r, h.paused]);
          return (0, w.jsx)(rh.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function Ww(e) {
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

      function $w(e, t) {
        for (const n of e)
          if (!Zw(n, {
              upTo: t
            })) return n
      }

      function Zw(e, {
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

      function Yw(e, {
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
      Xw.displayName = "FocusScope";
      var Qw = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Jw(e, t), e.unshift(t)
          },
          remove(t) {
            e = Jw(e, t), e[0]?.resume()
          }
        }
      }();

      function Jw(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var e_ = [" ", "Enter", "ArrowUp", "ArrowDown"],
        t_ = [" ", "Enter"],
        n_ = "Select",
        [r_, o_, i_] = xv(n_),
        [s_, a_] = (0, nh.A)(n_, [i_, lm]),
        l_ = lm(),
        [c_, u_] = s_(n_),
        [d_, f_] = s_(n_),
        h_ = e => {
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
            required: h,
            form: p
          } = e, m = l_(t), [v, y] = M.useState(null), [g, b] = M.useState(null), [_, E] = M.useState(!1), x = _v(c), [P, C] = (0, jm.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: n_
          }), [S, T] = (0, jm.i)({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: n_
          }), O = M.useRef(null), R = !v || p || !!v.closest("form"), [N, j] = M.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, w.jsx)(Pm, {
            ...m,
            children: (0, w.jsxs)(c_, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: E,
              contentId: (0, ph.B)(),
              value: S,
              onValueChange: T,
              open: P,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, w.jsx)(r_.Provider, {
                scope: t,
                children: (0, w.jsx)(d_, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: M.useCallback(e => {
                    j(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: M.useCallback(e => {
                    j(t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    })
                  }, []),
                  children: n
                })
              }), R ? (0, w.jsxs)(W_, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, w.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      h_.displayName = n_;
      var p_ = "SelectTrigger",
        m_ = M.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, i = l_(n), s = u_(p_, n), a = s.disabled || r, l = (0, th.s)(t, s.onTriggerChange), c = o_(n), u = M.useRef("touch"), [d, f, h] = Z_(e => {
            const t = c().filter(e => !e.disabled),
              n = t.find(e => e.value === s.value),
              r = Y_(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          }), p = e => {
            a || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, w.jsx)(Cm, {
            asChild: !0,
            ...i,
            children: (0, w.jsx)(rh.sG.button, {
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
              "data-placeholder": $_(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: Jf(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: Jf(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: Jf(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || e_.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      m_.displayName = p_;
      var v_ = "SelectValue",
        y_ = M.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = u_(v_, n), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== i, d = (0, th.s)(t, l.onValueNodeChange);
          return (0, om.N)(() => {
            c(u)
          }, [c, u]), (0, w.jsx)(rh.sG.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: $_(l.value) ? (0, w.jsx)(w.Fragment, {
              children: s
            }) : i
          })
        });
      y_.displayName = v_;
      var g_ = M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, w.jsx)(rh.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      });
      g_.displayName = "SelectIcon";
      var b_ = e => (0, w.jsx)(Om, {
        asChild: !0,
        ...e
      });
      b_.displayName = "SelectPortal";
      var w_ = "SelectContent",
        __ = M.forwardRef((e, t) => {
          const n = u_(w_, e.__scopeSelect),
            [r, o] = M.useState();
          if ((0, om.N)(() => {
              o(new DocumentFragment)
            }, []), !n.open) {
            const t = r;
            return t ? vt.createPortal((0, w.jsx)(x_, {
              scope: e.__scopeSelect,
              children: (0, w.jsx)(r_.Slot, {
                scope: e.__scopeSelect,
                children: (0, w.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, w.jsx)(S_, {
            ...e,
            ref: t
          })
        });
      __.displayName = w_;
      var E_ = 10,
        [x_, P_] = s_(w_),
        C_ = (0, $t.TL)("SelectContent.RemoveScroll"),
        S_ = M.forwardRef((e, t) => {
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
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = u_(w_, n), [b, _] = M.useState(null), [E, x] = M.useState(null), P = (0, th.s)(t, e => _(e)), [C, S] = M.useState(null), [T, O] = M.useState(null), R = o_(n), [N, j] = M.useState(!1), I = M.useRef(!1);
          M.useEffect(() => {
            if (b) return (0, Ry.Eq)(b)
          }, [b]), Vw();
          const k = M.useCallback(e => {
              const [t, ...n] = R().map(e => e.ref.current), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && E && (E.scrollTop = 0), n === r && E && (E.scrollTop = E.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }, [R, E]),
            A = M.useCallback(() => k([C, b]), [k, C, b]);
          M.useEffect(() => {
            N && A()
          }, [N, A]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: D
          } = g;
          M.useEffect(() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (D.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (D.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : b.contains(n.target) || L(!1), document.removeEventListener("pointermove", t), D.current = null
                };
              return null !== D.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }, [b, L, D]), M.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [H, B] = Z_(e => {
            const t = R().filter(e => !e.disabled),
              n = t.find(e => e.ref.current === document.activeElement),
              r = Y_(t, e, n);
            r && setTimeout(() => r.ref.current.focus())
          }), z = M.useCallback((e, t, n) => {
            const r = !I.current && !n;
            (void 0 !== g.value && g.value === t || r) && (S(e), r && (I.current = !0))
          }, [g.value]), F = M.useCallback(() => b?.focus(), [b]), V = M.useCallback((e, t, n) => {
            const r = !I.current && !n;
            (void 0 !== g.value && g.value === t || r) && O(e)
          }, [g.value]), U = "popper" === r ? O_ : T_, G = U === O_ ? {
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
          return (0, w.jsx)(x_, {
            scope: n,
            content: b,
            viewport: E,
            onViewportChange: x,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: F,
            itemTextRefCallback: V,
            focusSelectedItem: A,
            selectedItemText: T,
            position: r,
            isPositioned: N,
            searchRef: H,
            children: (0, w.jsx)(Oy.A, {
              as: C_,
              allowPinchZoom: !0,
              children: (0, w.jsx)(Xw, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Jf(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, w.jsx)(lh, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, w.jsx)(U, {
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
                    onKeyDown: Jf(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = R().filter(e => !e.disabled);
                        let n = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout(() => k(n)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      S_.displayName = "SelectContentImpl";
      var T_ = M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, i = u_(w_, n), s = P_(w_, n), [a, l] = M.useState(null), [c, u] = M.useState(null), d = (0, th.s)(t, e => u(e)), f = o_(n), h = M.useRef(!1), p = M.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = M.useCallback(() => {
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
                u = window.innerWidth - E_,
                d = bv(i, [E_, Math.max(E_, u - c)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - E_,
                d = bv(i, [E_, Math.max(E_, u - c)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * E_,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              w = p + g + u + parseInt(d.paddingBottom, 10) + b,
              _ = Math.min(5 * v.offsetHeight, w),
              E = window.getComputedStyle(m),
              x = parseInt(E.paddingTop, 10),
              P = parseInt(E.paddingBottom, 10),
              C = e.top + e.height / 2 - E_,
              S = l - C,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              R = w - O;
            if (O <= C) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                n = O + Math.max(S, T + (e ? P : 0) + t + b);
              a.style.height = n + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? x : 0) + T) + R;
              a.style.height = t + "px", m.scrollTop = O - C + m.offsetTop
            }
            a.style.margin = `${E_}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = l + "px", r?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, c, m, v, y, i.dir, r]);
        (0, om.N)(() => b(), [b]);
        const [_, E] = M.useState();
        (0, om.N)(() => {
          c && E(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = M.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, w.jsx)(R_, {
          scope: n,
          contentWrapper: a,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: x,
          children: (0, w.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, w.jsx)(rh.sG.div, {
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
      T_.displayName = "SelectItemAlignedPosition";
      var O_ = M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = E_,
          ...i
        } = e, s = l_(n);
        return (0, w.jsx)(Sm, {
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
      O_.displayName = "SelectPopperPosition";
      var [R_, N_] = s_(w_, {}), j_ = "SelectViewport", I_ = M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, i = P_(j_, n), s = N_(j_, n), a = (0, th.s)(t, i.onViewportChange), l = M.useRef(0);
        return (0, w.jsxs)(w.Fragment, {
          children: [(0, w.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, w.jsx)(r_.Slot, {
            scope: n,
            children: (0, w.jsx)(rh.sG.div, {
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
              onScroll: Jf(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = s;
                if (r?.current && n) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * E_,
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
      I_.displayName = j_;
      var k_ = "SelectGroup",
        [A_, L_] = s_(k_);
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = (0, ph.B)();
        return (0, w.jsx)(A_, {
          scope: n,
          id: o,
          children: (0, w.jsx)(rh.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      }).displayName = k_;
      var D_ = "SelectLabel";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = L_(D_, n);
        return (0, w.jsx)(rh.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      }).displayName = D_;
      var M_ = "SelectItem",
        [H_, B_] = s_(M_),
        z_ = M.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = u_(M_, n), l = P_(M_, n), c = a.value === r, [u, d] = M.useState(i ?? ""), [f, h] = M.useState(!1), p = (0, th.s)(t, e => l.itemRefCallback?.(e, r, o)), m = (0, ph.B)(), v = M.useRef("touch"), y = () => {
            o || (a.onValueChange(r), a.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, w.jsx)(H_, {
            scope: n,
            value: r,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: M.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, w.jsx)(r_.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: u,
              children: (0, w.jsx)(rh.sG.div, {
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
                onFocus: Jf(s.onFocus, () => h(!0)),
                onBlur: Jf(s.onBlur, () => h(!1)),
                onClick: Jf(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: Jf(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: Jf(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: Jf(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: Jf(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: Jf(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (t_.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      z_.displayName = M_;
      var F_ = "SelectItemText",
        V_ = M.forwardRef((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...i
          } = e, s = u_(F_, n), a = P_(F_, n), l = B_(F_, n), c = f_(F_, n), [u, d] = M.useState(null), f = (0, th.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = M.useMemo(() => (0, w.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, om.N)(() => (m(p), () => v(p)), [m, v, p]), (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)(rh.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? vt.createPortal(i.children, s.valueNode) : null]
          })
        });
      V_.displayName = F_;
      var U_ = "SelectItemIndicator";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return B_(U_, n).isSelected ? (0, w.jsx)(rh.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      }).displayName = U_;
      var G_ = "SelectScrollUpButton";
      M.forwardRef((e, t) => {
        const n = P_(G_, e.__scopeSelect),
          r = N_(G_, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, th.s)(t, r.onScrollButtonChange);
        return (0, om.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, w.jsx)(K_, {
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
      }).displayName = G_;
      var q_ = "SelectScrollDownButton";
      M.forwardRef((e, t) => {
        const n = P_(q_, e.__scopeSelect),
          r = N_(q_, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, th.s)(t, r.onScrollButtonChange);
        return (0, om.N)(() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              i(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [n.viewport, n.isPositioned]), o ? (0, w.jsx)(K_, {
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
      }).displayName = q_;
      var K_ = M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, i = P_("SelectScrollButton", n), s = M.useRef(null), a = o_(n), l = M.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return M.useEffect(() => () => l(), [l]), (0, om.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, w.jsx)(rh.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Jf(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(r, 50))
          }),
          onPointerMove: Jf(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(r, 50))
          }),
          onPointerLeave: Jf(o.onPointerLeave, () => {
            l()
          })
        })
      });
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, w.jsx)(rh.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var X_ = "SelectArrow";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = l_(n), i = u_(X_, n), s = P_(X_, n);
        return i.open && "popper" === s.position ? (0, w.jsx)(Tm, {
          ...o,
          ...r,
          ref: t
        }) : null
      }).displayName = X_;
      var W_ = M.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = M.useRef(null),
          i = (0, th.s)(r, o),
          s = Ev(t);
        return M.useEffect(() => {
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
        }, [s, t]), (0, w.jsx)(rh.sG.select, {
          ...n,
          style: {
            ...jr.Qg,
            ...n.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function $_(e) {
        return "" === e || void 0 === e
      }

      function Z_(e) {
        const t = (0, oh.c)(e),
          n = M.useRef(""),
          r = M.useRef(0),
          o = M.useCallback(e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          i = M.useCallback(() => {
            n.current = "", window.clearTimeout(r.current)
          }, []);
        return M.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
      }

      function Y_(e, t, n) {
        const r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === r.length && (i = i.filter(e => e !== n));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return l !== n ? l : void 0
      }
      W_.displayName = "SelectBubbleInput";
      var Q_ = h_,
        J_ = m_,
        eE = y_,
        tE = g_,
        nE = b_,
        rE = __,
        oE = I_,
        iE = z_,
        sE = V_,
        aE = n(56614);

      function lE(e) {
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

      function cE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function uE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cE(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = lE(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cE(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function dE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var fE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        hE = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = uE(uE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dE(e.variantClassNames, e => dE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pE = hE({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mE = hE({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vE = hE({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yE = hE({
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
        gE = hE({
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
        bE = hE({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const wE = (0, M.createContext)(null);

      function _E() {
        const e = (0, M.useContext)(wE);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const EE = (0, M.forwardRef)(({
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
          status: h = "neutral",
          ...p
        }, m) => {
          const v = nw((0, M.useRef)(null), m),
            y = (0, M.useId)(),
            g = (0, M.useId)(),
            b = (0, M.useId)(),
            _ = (0, M.useId)(),
            E = (0, M.useId)(),
            x = (0, M.useId)(),
            [P = !1, C] = function({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              const [r, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const n = (0, M.useState)(e),
                  [r] = n,
                  o = (0, M.useRef)(r),
                  i = rw(t);
                return (0, M.useEffect)(() => {
                  o.current !== r && (i(r), o.current = r)
                }, [r, o, i]), n
              }({
                defaultProp: t,
                onChange: n
              }), i = void 0 !== e, s = i ? e : r, a = rw(n), l = (0, M.useCallback)(t => {
                if (i) {
                  const n = "function" == typeof t ? t(e) : t;
                  n !== e && a(n)
                } else o(t)
              }, [i, e, o, a]);
              return [s, l]
            }({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            S = (0, Mb.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, w.jsx)(wE.Provider, {
            value: {
              labelId: y,
              errorId: g,
              descriptionId: b,
              triggerId: x,
              hintId: _,
              popoverId: E,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: P,
              setIsOpen: C,
              defaultOpen: c,
              onOpenChange: u,
              isRequired: n,
              isDisabled: r,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, w.jsx)(Q_, {
              required: n,
              disabled: r,
              open: P,
              onOpenChange: () => C(!o && !P),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, w.jsx)("div", {
                ref: v,
                ...S,
                children: e
              })
            })
          })
        }),
        xE = (0, M.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            popoverId: i
          } = _E(), s = (0, Mb.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: pE({
              hideDividers: e
            }),
            "data-testid": n
          }, r);
          return (0, w.jsx)(rE, {
            ...s,
            ref: o,
            children: (0, w.jsx)(oE, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        PE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, Mb.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, n);
          return (0, w.jsxs)(Mw, {
            ...o,
            ref: r,
            children: [(0, w.jsx)(Hw, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, w.jsx)(Bw, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, w.jsx)(zw, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        CE = (0, M.forwardRef)(({
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
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: v,
            size: y
          } = _E(), {
            isPressed: g,
            pressProps: b
          } = Nb({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, Mb.v6)({
            id: f,
            className: gE({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, Mb.VW)(n, u, d),
            "aria-describedby": (0, Mb.VW)(r, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, Mb.cJ)(b, "onKeyDown"), i), E = o ? $t.DX : J_;
          return (0, w.jsx)(E, {
            ..._,
            ref: s,
            children: e
          })
        }),
        SE = (0, M.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            value: i
          } = _E(), s = (0, Mb.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": n
          }, r), a = t ? $t.DX : "span";
          return (0, w.jsx)(a, {
            ...s,
            ref: o,
            children: (0, w.jsx)(eE, {
              placeholder: e,
              "aria-label": i
            })
          })
        }),
        TE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = _E(), a = s ? aE.ChevronUp : aE.ChevronDown, l = (0, Mb.v6)({
            asChild: !0,
            className: bE({
              isDisabled: i || o
            }),
            "data-testid": t
          }, n);
          return (0, w.jsx)(tE, {
            ...l,
            ref: r,
            children: e || (0, w.jsx)(a, {
              size: "LG",
              label: ""
            })
          })
        }),
        OE = (0, M.forwardRef)(({
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
          } = _E(), d = a && !o, f = (0, Mb.v6)({
            id: i.id || c,
            htmlFor: u,
            "data-testid": e,
            className: yE({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? $t.DX : "label";
          return (0, w.jsx)(zg, {
            enabled: r,
            children: (0, w.jsx)(h, {
              ...f,
              ref: s,
              children: n
            })
          })
        }),
        RE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = _E(), a = (0, Mb.v6)({
            className: mE({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        NE = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = _E(), a = (0, Mb.v6)({
            className: vE({
              isDisabled: s
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        jE = (0, M.forwardRef)(({
          children: e,
          value: t,
          isDisabled: n,
          testId: r,
          ...o
        }, i) => {
          const s = nw((0, M.useRef)(null), i),
            a = (0, Mb.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: n,
              "data-testid": r
            }, o);
          return (0, w.jsx)(iE, {
            ref: s,
            ...a,
            children: e
          })
        }),
        IE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, Mb.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, n);
          return (0, w.jsx)(sE, {
            ref: r,
            asChild: !0,
            children: (0, w.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        kE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = (0, Mb.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, n);
          return (0, w.jsx)(tE, {
            asChild: !0,
            ...o,
            ref: r,
            children: e
          })
        }),
        AE = nE,
        LE = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = _E(), a = (0, Mb.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? $t.DX : Jb;
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        DE = ew,
        ME = tw,
        HE = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? jr.s6 : M.Fragment;
          return (0, w.jsx)(n, {
            ...t
          })
        };

      function BE(e, t, n) {
        let r = W(() => {
          n && n(t)
        });
        (0, M.useEffect)(() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", r), () => {
            null == n || n.removeEventListener("reset", r)
          }
        }, [e, r])
      }

      function zE(e, t, n) {
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
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: w
        } = Et({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: r
        }), {
          pressProps: _,
          isPressed: E
        } = Et({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPressUp: y,
          onClick: g,
          onPress(e) {
            var r;
            null == v || v(e), t.toggle(), null === (r = n.current) || void 0 === r || r.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: x
        } = Gt(e, n), P = de(b, x), C = ge(e, {
          labelable: !0
        });
        return BE(n, t.defaultSelected, t.setSelected), {
          labelProps: de(_, {
            onClick: e => e.preventDefault()
          }),
          inputProps: de(C, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: s,
            form: a,
            type: "checkbox",
            ...P
          }),
          isSelected: t.isSelected,
          isPressed: w || E,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      const FE = new Map;

      function VE(e, t) {
        if (e === t) return e;
        const n = FE.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = FE.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function UE(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function GE(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = UE(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = VE(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var qE;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(qE || (qE = {})), Symbol.toStringTag;
      const KE = (...e) => e.filter(e => e).join(" ");

      function XE(e, t, n) {
        let [r, o] = (0, M.useState)(e || t), i = (0, M.useRef)(void 0 !== e), s = void 0 !== e;
        (0, M.useEffect)(() => {
          i.current, i.current = s
        }, [s]);
        let a = s ? e : r,
          l = (0, M.useCallback)((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(a, e) || n(e, ...t)), s || (a = e)
            };
            "function" == typeof e ? o((n, ...o) => {
              let i = e(s ? a : n, ...o);
              return r(i, ...t), s ? n : i
            }) : (s || o(e), r(e, ...t))
          }, [s, a, n]);
        return [a, l]
      }

      function WE(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = XE(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, M.useState)(n);
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

      function $E(e) {
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

      function ZE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function YE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ZE(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = $E(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ZE(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function QE(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var JE = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ex = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = YE(YE({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) JE(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return QE(e.variantClassNames, e => QE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tx = ex({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nx = ex({
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
        rx = ex({
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
        ox = ex({
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
        ix = ex({
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
      const sx = (0, M.createContext)(null);

      function ax() {
        const e = (0, M.useContext)(sx);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const lx = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const c = GE({
              "data-testid": n,
              className: "foundry_okz6z20"
            }, a),
            u = r ? $t.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)();
          return (0, w.jsx)(sx.Provider, {
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
            children: (0, w.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        cx = (0, M.forwardRef)(({
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
          const h = (0, M.useRef)(null),
            p = function(...e) {
              const t = (0, M.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: E
            } = ax(),
            x = WE({
              isDisabled: _,
              isReadOnly: E,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: P
            } = function(e, t, n) {
              let {
                labelProps: r,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = zE(e, t, n);
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
              "aria-labelledby": KE(r, g),
              "aria-describedby": KE(o, b),
              name: c,
              value: u,
              isDisabled: _,
              isReadOnly: E
            }, x, h),
            C = GE({
              className: ix({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": _ || E,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? n?.(e), e.defaultPrevented || _ || E || x.toggle()
              }
            }, d);
          return (0, w.jsxs)("div", {
            ...C,
            children: [(0, w.jsx)(HE, {
              children: (0, w.jsx)("input", {
                ...P,
                ref: p
              })
            }), (0, w.jsx)("div", {
              className: ox({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, w.jsx)("div", {
                className: nx({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        ux = (0, M.forwardRef)(({
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
          } = ax(), u = GE({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: rx({
              isDisabled: s,
              size: c
            })
          }, o), d = t ? $t.DX : "label";
          return (0, w.jsx)(HE, {
            enabled: r,
            children: (0, w.jsx)(d, {
              ...u,
              ref: i,
              children: n
            })
          })
        }),
        dx = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = ax(), a = r.id || s, l = GE({
            className: tx({
              isDisabled: i
            }),
            "data-testid": n,
            id: a
          }, r), c = t ? $t.DX : "div";
          return (0, w.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        fx = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? jr.s6 : M.Fragment;
          return (0, w.jsx)(n, {
            ...t
          })
        },
        hx = new Map;

      function px(e, t) {
        if (e === t) return e;
        const n = hx.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = hx.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function mx(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function vx(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = mx(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = px(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var yx;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(yx || (yx = {})), Symbol.toStringTag;
      const gx = (...e) => e.filter(e => e).join(" "),
        bx = {
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
        wx = {
          ...bx,
          customError: !0,
          valid: !1
        },
        _x = {
          isInvalid: !1,
          validationDetails: bx,
          validationErrors: []
        },
        Ex = (0, M.createContext)({}),
        xx = "__formValidationState" + Date.now();

      function Px(e) {
        if (e[xx]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[xx];
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
              validationDetails: wx
            } : null,
            c = (0, M.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return Cx(n)
                }
                return []
              }(s, o);
              return Sx(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let u = (0, M.useContext)(Ex),
            d = (0, M.useMemo)(() => r ? Array.isArray(r) ? r.flatMap(e => Cx(u[e])) : Cx(u[r]) : [], [u, r]),
            [f, h] = (0, M.useState)(u),
            [p, m] = (0, M.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, M.useMemo)(() => Sx(p ? [] : d), [p, d]),
            y = (0, M.useRef)(_x),
            [g, b] = (0, M.useState)(_x),
            w = (0, M.useRef)(_x),
            [_, E] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
            if (!_) return;
            E(!1);
            let e = c || i || y.current;
            Tx(e, w.current) || (w.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || i || _x,
            displayValidation: "native" === a ? l || v || g : l || v || c || i || g,
            updateValidation(e) {
              "aria" !== a || Tx(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = _x;
              Tx(e, w.current) || (w.current = e, b(e)), "native" === a && E(!1), m(!0)
            },
            commitValidation() {
              "native" === a && E(!0), m(!0)
            }
          }
        }(e)
      }

      function Cx(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Sx(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: wx
        } : null
      }

      function Tx(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
      }

      function Ox(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        q(() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: Rx(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, M.useRef)(!1),
          s = W(() => {
            i.current || t.resetValidation()
          }),
          a = W(e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var s;
            !e.defaultPrevented && n && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(i) === n.current && (o ? o() : null === (s = n.current) || void 0 === s || s.focus(), Rt = "keyboard", At("keyboard", null)), e.preventDefault()
          }),
          l = W(() => {
            t.commitValidation()
          });
        (0, M.useEffect)(() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form,
            r = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            i.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == r || r.call(t), i.current = !1
          }), e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = r)
          }
        }, [n, a, l, s, r])
      }

      function Rx(e) {
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
      const Nx = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        jx = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ix = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        kx = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Ax = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Lx = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, w.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
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

      function Mx(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function Hx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mx(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Dx(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mx(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function Bx(e, t) {
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
        Fx = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Hx(Hx({}, e.defaultVariants), t);
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
              return Bx(e.variantClassNames, e => Bx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vx = Fx({
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
        Ux = Fx({
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
        Gx = Fx({
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
        qx = Fx({
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
      const Kx = (0, M.createContext)(null);

      function Xx() {
        const e = (0, M.useContext)(Kx);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Wx = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: n,
          asChild: r,
          children: o,
          ...i
        }, s) => {
          const a = vx({
              "data-testid": n,
              className: "foundry_11gbdty0"
            }, nn(i, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = r ? $t.DX : "div",
            c = (0, M.useId)(),
            u = (0, M.useId)(),
            d = (0, M.useId)();
          return (0, w.jsx)(Kx.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...i
            },
            children: (0, w.jsx)(l, {
              ...a,
              ref: s,
              children: o
            })
          })
        }),
        $x = (0, M.forwardRef)(({
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
            size: h,
            appearance: p,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ..._
          } = Xx(), E = (0, M.useRef)(null), x = d.id || b, {
            isPressed: P,
            pressProps: C
          } = Nb({
            ref: E
          }), {
            setSelected: S,
            toggle: T,
            ...O
          } = WE({
            isSelected: t,
            defaultSelected: n,
            onChange: r
          }), {
            inputProps: R,
            isSelected: N,
            isDisabled: j,
            isReadOnly: I
          } = function(e, t, n) {
            let r = Px({
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
              } = zE({
                ...e,
                isInvalid: o
              }, t, n);
            Ox(e, r, n);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, M.useEffect)(() => {
              n.current && (n.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = Et({
              isDisabled: d || f,
              onPress() {
                let {
                  [xx]: t
                } = e, {
                  commitValidation: n
                } = t || r;
                n()
              }
            });
            return {
              labelProps: de(a, v, (0, M.useMemo)(() => ({
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
            ..._
          }, {
            ...O,
            toggle: T,
            setSelected: _.isReadOnly ? () => !1 : S
          }, E), k = vx({
            className: Ux({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || j || I || T()
            }
          }, C, d), A = vx({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": gx(u, g),
            "aria-describedby": gx(l, y),
            "aria-errormessage": gx(c, _.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), L = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, w.jsxs)("div", {
            ...k,
            children: [(0, w.jsx)(fx, {
              children: (0, w.jsx)("input", {
                ...A,
                ref: f
              })
            }), (0, w.jsx)("div", {
              className: Vx({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": j || I,
              "data-testid": e,
              "data-pressed": P,
              children: (0, w.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || m) && (0, w.jsx)(L, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Zx = (0, M.forwardRef)(({
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
          } = Xx(), d = i.id || l, f = vx({
            className: qx({
              size: a,
              showAsterisk: u && !o
            }),
            "data-testid": n,
            id: d,
            htmlFor: i.htmlFor || c
          }, i), h = t ? $t.DX : "label";
          return (0, w.jsx)(fx, {
            enabled: r,
            children: (0, w.jsx)(h, {
              ...f,
              ref: s,
              children: e
            })
          })
        }),
        Yx = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Xx(), a = r.id || s, l = vx({
            className: Gx({
              isDisabled: i
            }),
            "data-testid": n,
            id: a
          }, r), c = t ? $t.DX : "div";
          return (0, w.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Qx = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = Xx(), s = vx({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": n,
            id: r.id || i
          }, r), a = t ? $t.DX : "div";
          return (0, w.jsx)(a, {
            ...s,
            ref: o,
            children: e
          })
        }),
        Jx = new Map;

      function eP(e, t) {
        if (e === t) return e;
        const n = Jx.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = Jx.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function tP(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function nP(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = tP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = eP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var rP;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(rP || (rP = {})), Symbol.toStringTag;
      const oP = (...e) => e.filter(e => e).join(" "),
        iP = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? jr.s6 : M.Fragment;
          return (0, w.jsx)(n, {
            ...t
          })
        };

      function sP(e) {
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

      function aP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function lP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? aP(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = sP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aP(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function cP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var uP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        dP = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = lP(lP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) uP(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cP(e.variantClassNames, e => cP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fP = dP({
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
        hP = dP({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pP = dP({
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
        mP = dP({
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
      const vP = (0, M.createContext)(null);

      function yP() {
        const e = (0, M.useContext)(vP);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const gP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const c = nP({
              "data-testid": n,
              className: "foundry_vq8c3j0"
            }, a),
            u = e ? $t.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)(),
            p = (0, M.useId)();
          return (0, w.jsx)(vP.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: r,
              isReadOnly: o,
              isRequired: i,
              status: s,
              ...a
            },
            children: (0, w.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        bP = (0, M.forwardRef)(({
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
          } = yP(), d = nP({
            className: pP({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": n,
            id: a,
            htmlFor: l
          }, i), f = t ? $t.DX : "label";
          return (0, w.jsx)(iP, {
            enabled: r,
            children: (0, w.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        wP = (0, M.forwardRef)(({
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
            inputId: h,
            hintId: p,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = yP(), b = function(...e) {
            const t = (0, M.useRef)(null);
            return t.current || (t.current = t => {
              e.forEach(e => {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
              })
            }), t.current
          }((0, M.useRef)(null), u), {
            isPressed: _,
            pressProps: E
          } = Nb({}), x = nP({
            className: mP({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isPressed: _,
              isSuccess: "success" === g
            }),
            name: i,
            id: c.id || h,
            rows: r,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": oP(c.id, f, p, a),
            "aria-describedby": oP(d, l),
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
          }, E, c), P = e ? $t.DX : "textarea";
          return (0, w.jsx)(P, {
            ref: b,
            ...x,
            children: t
          })
        }),
        _P = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = yP(), a = nP({
            className: fP({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        EP = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = yP(), a = nP({
            className: hP({
              isDisabled: s
            }),
            "data-testid": n,
            id: i
          }, r), l = t ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        xP = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = yP(), a = nP({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? $t.DX : Jb;
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        PP = ew,
        CP = tw,
        SP = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? jr.s6 : M.Fragment;
          return (0, w.jsx)(n, {
            ...t
          })
        };

      function TP(...e) {
        const t = (0, M.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const OP = new Map;

      function RP(e, t) {
        if (e === t) return e;
        const n = OP.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = OP.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function NP(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function jP(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = NP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = RP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var IP;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(IP || (IP = {})), Symbol.toStringTag;
      const kP = (...e) => e.filter(e => e).join(" ");
      let AP = Math.round(1e10 * Math.random()),
        LP = 0;
      const DP = new WeakMap;

      function MP(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
      }
      class HP {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new BP({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && MP(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new HP;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new BP({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class BP {
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

      function zP(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = ae(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function FP(e) {
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
          t = ae(t);
          let s = ae(),
            a = {};
          return n && (r = r ? `${s} ${r}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: zP({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), a = ce([Boolean(t), Boolean(n), r, o]), l = ce([Boolean(t), Boolean(n), r, o]);
        return s = de(s, {
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
      new HP;
      const VP = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        UP = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function GP(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return VP.has(t.script)
        }
        let t = e.split("-")[0];
        return UP.has(t)
      }
      const qP = Symbol.for("react-aria.i18n.locale");

      function KP() {
        let e = "undefined" != typeof window && window[qP] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: GP(e) ? "rtl" : "ltr"
        }
      }
      let XP = KP(),
        WP = new Set;

      function $P() {
        XP = KP();
        for (let e of WP) e(XP)
      }
      const ZP = M.createContext(null);

      function YP() {
        let e = function() {
          let e = re(),
            [t, n] = (0, M.useState)(XP);
          return (0, M.useEffect)(() => (0 === WP.size && window.addEventListener("languagechange", $P), WP.add(n), () => {
            WP.delete(n), 0 === WP.size && window.removeEventListener("languagechange", $P)
          }), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, M.useContext)(ZP) || e
      }

      function QP(e, t) {
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
        } = YP(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = FP({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = ge(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, M.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: a
          } = st(), l = (0, M.useCallback)(e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, a(), n && n(e), o && o(!1))
          }, [n, o, i, a]), c = ke(l), u = (0, M.useCallback)(e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = be(e.target),
              n = lt(t);
            if (!i.current.isFocusWithin && n === ct(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let n = e.currentTarget;
              s(t, "focus", e => {
                if (i.current.isFocusWithin && !at(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Ie(r, n);
                  let o = je(r);
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
        }), b = ae(n);
        return DP.set(t, {
          name: b,
          form: r,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: de(y, {
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
              let r, o = function(e, t, n) {
                let r = (null == t ? void 0 : t.tabbable) ? Te : Se,
                  o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
                  i = be(o),
                  s = function(e, t, n, r) {
                    return e.createTreeWalker(t, n, r)
                  }(i, e || i, NodeFilter.SHOW_ELEMENT, {
                    acceptNode(e) {
                      var o;
                      if (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) return NodeFilter.FILTER_REJECT;
                      if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                        if (! function(e) {
                            if (e.checked) return !0;
                            let t = [];
                            if (e.form) {
                              var n, r;
                              let o = null === (r = e.form) || void 0 === r || null === (n = r.elements) || void 0 === n ? void 0 : n.namedItem(e.name);
                              t = [...null != o ? o : []]
                            } else t = [...be(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                            return !!t && !t.some(e => e.checked)
                          }(e)) return NodeFilter.FILTER_REJECT;
                        if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
                      }
                      return !r(e) || n && !MP(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    }
                  });
                return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
              }(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof we(e).HTMLInputElement && "radio" === e.type
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
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

      function JP(e) {
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

      function eC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function tC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eC(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = JP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function nC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var rC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        oC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = tC(tC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) rC(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nC(e.variantClassNames, e => nC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        iC = oC({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sC = oC({
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
      const aC = (0, M.createContext)(null);

      function lC() {
        const e = (0, M.useContext)(aC);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const cC = (0, M.forwardRef)(({
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
          const f = TP((0, M.useRef)(null), d),
            h = (0, M.useId)(),
            p = (0, M.useId)(),
            m = (0, M.useId)(),
            v = function(e) {
              let t = (0, M.useMemo)(() => e.name || `radio-group-${AP}-${++LP}`, [e.name]);
              var n;
              let [r, o] = XE(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i] = (0, M.useState)(r), [s, a] = (0, M.useState)(null), l = Px({
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
              radioGroupProps: y
            } = QP({
              ...u,
              orientation: n,
              "aria-labelledby": kP(h, s),
              "aria-describedby": kP(p, m, a),
              "aria-errormessage": kP(m, l)
            }, v),
            g = jP({
              className: "foundry_njguqn0"
            }, y, nn(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            b = i ? $t.DX : "div";
          return (0, w.jsx)(aC.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: n,
              descriptionId: p,
              labelId: h,
              errorId: m,
              status: c,
              ...u
            },
            children: (0, w.jsx)(b, {
              ref: f,
              "data-testid": o,
              ...g,
              children: r
            })
          })
        }),
        uC = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            size: i,
            orientation: s
          } = lC(), a = jP({
            "data-testid": e,
            className: sC({
              size: i,
              orientation: s
            })
          }, r), l = t ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: n
          })
        }),
        dC = (0, M.forwardRef)(({
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
          } = lC(), c = a && !o, u = jP({
            id: i.id || l,
            "data-testid": e,
            className: iC({
              showAsterisk: c
            })
          }, i), d = t ? $t.DX : "div";
          return (0, w.jsx)(SP, {
            enabled: r,
            children: (0, w.jsx)(d, {
              ...u,
              ref: s,
              children: n
            })
          })
        }),
        fC = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            descriptionId: i
          } = lC(), s = jP({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, r), a = t ? $t.DX : "div";
          return (0, w.jsx)(a, {
            ...s,
            ref: o,
            children: n
          })
        }),
        hC = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            errorId: i,
            status: s
          } = lC(), a = jP({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, r), l = n ? $t.DX : Jb;
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        pC = ew,
        mC = tw;
      var vC = oC({
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
        yC = oC({
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
        gC = oC({
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
        bC = oC({
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
      const wC = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, w.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        _C = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, w.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        EC = ({
          color: e = "currentColor"
        }) => (0, w.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, w.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        xC = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = jP({
              "data-testid": n,
              className: "foundry_1pfduet0"
            }, r),
            s = e ? $t.DX : "label";
          return (0, w.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        PC = (0, M.forwardRef)(({
          testId: e,
          value: t,
          ...n
        }, r) => {
          const o = (0, M.useRef)(null),
            i = TP(o, r),
            s = (0, M.useId)(),
            {
              state: a,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = lC(),
            {
              isPressed: h,
              pressProps: p
            } = Nb({}),
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
              const h = e.isDisabled || t.isDisabled;
              let p = t.selectedValue === r,
                {
                  pressProps: m,
                  isPressed: v
                } = Et({
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
                } = Et({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h,
                  onPress(e) {
                    var o;
                    null == u || u(e), t.setSelectedValue(r), null === (o = n.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = Gt(de(e, {
                  onFocus: () => t.setLastFocusedValue(r)
                }), n),
                w = de(m, b),
                _ = ge(e, {
                  labelable: !0
                }),
                E = -1;
              null != t.selectedValue ? t.selectedValue === r && (E = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (E = 0), h && (E = void 0);
              let {
                name: x,
                form: P,
                descriptionId: C,
                errorMessageId: S,
                validationBehavior: T
              } = DP.get(t);
              return BE(n, t.defaultSelectedValue, t.setSelectedValue), Ox({
                validationBehavior: T
              }, t, n), {
                labelProps: de(y, (0, M.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: de(_, {
                  ...w,
                  type: "radio",
                  name: x,
                  form: P,
                  tabIndex: E,
                  disabled: h,
                  required: t.isRequired && "native" === T,
                  checked: p,
                  value: r,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(r)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, C].filter(Boolean).join(" ") || void 0
                }),
                isDisabled: h,
                isSelected: p,
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
            g = jP(m, {
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
          return (0, w.jsxs)("div", {
            className: bC({
              size: c
            }),
            children: [(0, w.jsx)(SP, {
              children: (0, w.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, w.jsx)("div", {
              className: gC({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, w.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, w.jsx)(b, {})
              })
            })]
          })
        }),
        CC = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          hideVisually: r = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = lC(), l = jP({
            id: (0, M.useId)(),
            "data-testid": e,
            className: yC({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), c = t ? $t.DX : "div";
          return (0, w.jsx)(SP, {
            enabled: r,
            children: (0, w.jsx)(c, {
              ...l,
              ref: i,
              children: n
            })
          })
        }),
        SC = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = lC(), s = jP({
            "data-testid": e,
            className: vC({
              isDisabled: i
            })
          }, r), a = t ? $t.DX : "span";
          return (0, w.jsx)(a, {
            ref: o,
            ...s,
            children: n
          })
        });

      function TC(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function OC(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return TC(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? TC(e, t) : void 0
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

      function RC(e, t, n) {
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

      function NC(e) {
        return NC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, NC(e)
      }

      function jC() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (jC = function() {
          return !!e
        })()
      }

      function IC(e, t) {
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
          t % 2 ? IC(Object(n), !0).forEach(function(t) {
            RC(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : IC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function AC(e, t) {
        return AC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, AC(e, t)
      }

      function LC(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = r,
          a = "",
          l = OC(e);
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

      function DC(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          c = OC(r);
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

      function MC(e, t) {
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

      function HC(e) {
        return e.length > 0 ? RC({}, e, /./) : {}
      }

      function BC(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(r, o), c = i.slice(r, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && a && (u += c[d])
        }
        return u
      }

      function zC(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? HC(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return DC(LC(e, {
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
      var FC = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function VC(e) {
        return FC.includes(e) ? "\\".concat(e) : e
      }

      function UC(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function GC(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function qC(e, t, n) {
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

      function KC(e) {
        return KC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, KC(e)
      }

      function XC() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (XC = function() {
          return !!e
        })()
      }

      function WC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function $C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? WC(Object(n), !0).forEach(function(t) {
            qC(e, t, n[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WC(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function ZC(e, t) {
        return ZC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ZC(e, t)
      }

      function YC(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return YC = function(e) {
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
              if (XC()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && ZC(o, n.prototype), o
            }(e, arguments, KC(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), ZC(n, e)
        }, YC(e)
      }
      var QC, JC = function(e) {
          function t(e) {
            var n;
            return UC(this, t), (n = function(e, t, n) {
              return t = KC(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, XC() ? Reflect.construct(t, n || [], KC(e).constructor) : t.apply(e, n))
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
            }), t && ZC(e, t)
          }(t, e), GC(t)
        }(YC(Error)),
        eS = ["options"],
        tS = ["text", "email", "tel", "search", "url"],
        nS = GC(function e(t) {
          var n = t.init,
            r = t.tracking;
          UC(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (tS.includes(e.type)) {
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
              Object.defineProperty(e, "value", $C($C({}, v), {}, {
                set: function(t) {
                  var n;
                  m.value = t, null == v || null === (n = v.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var y = function() {
                  var t = function() {
                    var n, r;
                    m.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, m.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                g = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (p.cachedId === p.id) throw new JC("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new JC("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new JC("Input type detection error.");
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
                      }(g, eS);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), h.value = w.value, h.options = b, m.selectionStart = w.selectionStart, m.selectionEnd = w.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, c)
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
      QC = nS, Object.defineProperty(QC.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var rS, oS = ["track", "modify"];

      function iS(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? HC(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var sS = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = NC(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, jC() ? Reflect.construct(t, n || [], NC(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = iS(n),
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
                l = iS(n),
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
                }(l, oS),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = kC(kC({}, "insert" === t ? {
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
              if (!1 === y) throw new JC("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? HC(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = BC(r, kC({
                  end: s
                }, o)),
                w = BC(r, kC({
                  start: a
                }, o)),
                _ = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(_, "");
              if (b && (b = LC(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = LC(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new JC("The character does not match the key value of the `replacement` object.");
              if (m) {
                var x = f.slice(s, a).replace(_, ""),
                  P = x.length - i.length;
                P < 0 ? w = w.slice(-P) : P > 0 && (w = x.slice(-P) + w)
              }
              w && (w = LC(w, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = DC(b + i + w, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    s = e.addedValue,
                    a = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = MC(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = u[a.length - 1]) || void 0 === n ? void 0 : n.index,
                    h = null === (r = u[a.length + s.length]) || void 0 === r ? void 0 : r.index;
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
            return zC(e, iS(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? HC(r) : r;
              return MC(zC(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, iS(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? HC(r) : r,
                i = BC(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return LC(i, {
                replacementChars: n.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, iS(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? HC(r) : r, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < n.length; l++) {
                var c = n[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(VC(c), ")") : "", "(").concat(o[c].source, ")") : VC(c), l === n.length - 1 && (i && (a += ")?".repeat(n.length)), a += "$")
              }
              return a
            }(e, iS(n))
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
            }), t && AC(e, t)
          }(e, nS),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();
      rS = sS, Object.defineProperty(rS.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      }), n(60893), n(42131);
      var aS = n(39725);
      const lS = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? jr.s6 : M.Fragment;
        return (0, w.jsx)(n, {
          ...t
        })
      };

      function cS(e) {
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

      function uS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function dS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = cS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function fS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var hS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        pS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = dS(dS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) hS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fS(e.variantClassNames, e => fS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mS = pS({
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
        vS = pS({
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
        yS = pS({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gS = pS({
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
        bS = pS({
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
        wS = pS({
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
        }),
        _S = n(13201),
        ES = n.t(_S, 2);
      const xS = (0, M.createContext)(null);

      function PS() {
        const e = (0, M.useContext)(xS);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const CS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          isDisabled: r = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [c, u] = (0, M.useState)("text"), d = (0, M.useId)(), f = (0, M.useId)(), h = (0, M.useId)(), {
            isPressed: p,
            pressProps: m
          } = Nb({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, aS.v6)({
            "data-testid": n,
            className: "foundry_8oytzo3"
          }, a), g = e ? $t.DX : "div";
          return (0, w.jsx)(xS.Provider, {
            value: {
              isDisabled: r,
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
            children: (0, w.jsx)(g, {
              ref: l,
              ...y,
              children: t
            })
          })
        }),
        SS = (0, M.forwardRef)(({
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
          } = PS(), d = l && !o, f = (0, aS.v6)({
            id: i.id || u,
            htmlFor: i.htmlFor || c,
            "data-testid": e,
            className: wS({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), h = t ? $t.DX : "label";
          return (0, w.jsx)(lS, {
            enabled: r,
            children: (0, w.jsx)(h, {
              ref: s,
              ...f,
              children: n
            })
          })
        }),
        TS = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i
          } = PS(), s = (0, aS.v6)({
            "data-testid": e,
            className: yS({
              isDisabled: i
            })
          }, r), a = t ? $t.DX : "span";
          return (0, w.jsx)(a, {
            ref: o,
            ...s,
            children: n
          })
        }),
        OS = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            isReadOnly: s,
            isPressed: a,
            pressProps: l,
            status: c
          } = PS(), u = (0, aS.v6)({
            "data-testid": e,
            "data-pressed": a,
            className: (0, ue.clsx)(mS({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === c,
              isPressed: a,
              isSuccess: "success" === c
            }), "foundry_8oytzo1")
          }, l, r), d = t ? $t.DX : "div";
          return (0, w.jsx)(d, {
            ref: o,
            ...u,
            children: n
          })
        }),
        RS = (0, M.forwardRef)(({
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
            isReadOnly: h,
            isRequired: p,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: _
          } = PS();
          (0, M.useEffect)(() => b(c), []);
          const E = "invalid" === m,
            x = (0, aS.v6)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, aS.VW)(v, a),
              "aria-describedby": (0, aS.VW)(g, l),
              "data-testid": e,
              className: (0, ue.clsx)(bS({
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
                n = e.replacement,
                r = e.showMask,
                o = e.separate,
                i = e.track,
                s = e.modify,
                a = (0, M.useRef)(null),
                l = (0, M.useRef)({
                  mask: t,
                  replacement: n,
                  showMask: r,
                  separate: o,
                  track: i,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = n, l.current.showMask = r, l.current.separate = o, l.current.track = i, l.current.modify = s, (0, M.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(n, r, o) {
                      return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                    }
                  })
                }(a, new sS(l.current))
              }, [])
            }({
              mask: n,
              replacement: r,
              showMask: o,
              track: i
            }),
            C = function(...e) {
              const t = (0, M.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(n && r ? P : null, d),
            S = t ? $t.DX : "input";
          return (0, w.jsx)(S, {
            ref: C,
            ...x
          })
        }),
        NS = (0, M.forwardRef)(({
          icon: e,
          asChild: t,
          testId: n,
          side: r,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = PS(), a = (0, aS.v6)({
            size: "LG",
            "data-testid": n,
            className: (0, ue.clsx)(gS({
              side: r,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? $t.DX : ES[e];
          return (0, w.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        jS = (0, M.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: n
          } = PS(), r = (0, aS.v6)({
            isDisabled: n,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, w.jsx)(Bn, {
            ref: t,
            ...r
          })
        }),
        IS = (0, M.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...n
        }, r) => {
          const {
            type: o,
            setType: i
          } = PS(), s = "password" === o, a = s ? e : t, l = (0, aS.v6)({
            label: a,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              i(s ? "text" : "password")
            }
          }, n);
          return (0, w.jsxs)(pv, {
            children: [(0, w.jsx)(mv, {
              children: (0, w.jsx)(jS, {
                ref: r,
                ...l
              })
            }), (0, w.jsxs)(vv, {
              side: "bottom",
              align: "end",
              children: [a, (0, w.jsx)(yv, {})]
            })]
          })
        }),
        kS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = PS(), a = (0, aS.v6)({
            className: vS({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, r), l = n ? $t.DX : "div";
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        AS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          ...r
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = PS(), a = (0, aS.v6)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, r), l = n ? $t.DX : Jb;
          return (0, w.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        LS = ew,
        DS = tw;
      var MS = n(32884);

      function HS(e, t) {
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
        } = Gt(e, t), {
          pressProps: d,
          isPressed: f
        } = Et({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), h = ge(l, {
          labelable: !0
        }), p = de(u, d), m = dt();
        return {
          isPressed: f,
          linkProps: de(h, ht(e), {
            ...p,
            ...c,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = d.onClick) || void 0 === n || n.call(d, t), pt(t, m, e.href, e.routerOptions)
            }
          })
        }
      }
      n(17695), n(96277);
      var BS = n(49252);

      function zS(e) {
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

      function FS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function VS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? FS(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = zS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : FS(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function US(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var GS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        qS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = VS(VS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) GS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return US(e.variantClassNames, e => US(e, e => e.split(" ")[0]))
            }
          }, t
        },
        KS = qS({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        XS = qS({
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
        WS = qS({
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
      const $S = (0, M.createContext)(null);

      function ZS() {
        const e = (0, M.useContext)($S);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const YS = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, i) => {
          const s = e ? $t.DX : "div",
            a = (0, MS.v6)({
              className: WS({
                status: n,
                background: r
              })
            }, o);
          return (0, w.jsx)($S.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, w.jsx)(s, {
              ref: i,
              "data-testid": t,
              ...a
            })
          })
        }),
        QS = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? $t.DX : "div",
            i = (0, MS.v6)({
              className: "foundry_1m368qha"
            }, n);
          return (0, w.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        JS = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? $t.DX : "div",
            i = (0, MS.v6)({
              className: "foundry_1m368qhb"
            }, n);
          return (0, w.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        eT = {
          danger: BS.CircleX,
          information: BS.Info,
          success: BS.CircleCheck,
          warning: BS.TriangleAlert
        },
        tT = (0, M.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...n
        }, r) => {
          const {
            status: o
          } = ZS(), i = e ? $t.DX : eT[o], s = (0, MS.v6)({
            className: XS({
              status: o,
              size: t
            }),
            size: t
          }, n);
          return (0, w.jsx)(i, {
            label: "",
            ref: r,
            ...s
          })
        }),
        nT = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? $t.DX : "div",
            i = (0, MS.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, n);
          return (0, w.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        rT = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? $t.DX : "div",
            i = (0, MS.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, w.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        oT = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, M.useRef)(null),
            s = function(...e) {
              const t = (0, M.useRef)(null);
              return t.current || (t.current = t => {
                e.forEach(e => {
                  "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
              }), t.current
            }(i, o),
            a = e ? $t.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = HS(r, i),
            u = (0, MS.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, w.jsx)(a, {
            "data-pressed": c,
            "data-testid": n,
            ref: s,
            ...u,
            children: t
          })
        }),
        iT = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : "div",
            s = (0, MS.v6)({
              className: "foundry_1m368qhm"
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        sT = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : "div";
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, ue.clsx)(n, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...r
          })
        }),
        aT = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            background: r
          } = ZS(), o = (0, MS.v6)({
            className: KS({
              hasBackground: "none" !== r
            })
          }, t);
          return (0, w.jsx)(Bn, {
            ref: n,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...o
          })
        });
      var lT = n(16675);

      function cT(e = {}) {
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
      cT.globalOptions = void 0;
      const uT = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function dT(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function fT(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function hT(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function pT(e = {}) {
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
          ("pointerDown" === t ? hT : fT)(r, u.dragging)
        }

        function f(e = [], t = [], n) {
          const r = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return r.forEach(e => fT(e, n)), i.forEach(e => hT(e, n)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = n.internalEngine(), t = e[n.selectedScrollSnap()];
          i = f(t, i, u.snapped)
        }

        function p() {
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
            } = s, v = f(uT, pT.globalOptions), y = f(v, e);
            t = m(y), r = n.rootNode(), o = n.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = n.internalEngine().options, w = !!g;
            t.loop && b && (u.loop = dT(t.loop), hT(r, u.loop)), t.draggable && w && (u.draggable = dT(t.draggable), hT(r, u.draggable)), t.dragging && (u.dragging = dT(t.dragging), l.forEach(e => n.on(e, d))), t.snapped && (u.snapped = dT(t.snapped), a.forEach(e => n.on(e, h)), h()), t.inView && (u.inView = dT(t.inView), c.forEach(e => n.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => n.off(e, d)), a.forEach(e => n.off(e, h)), c.forEach(e => n.off(e, p)), fT(r, u.loop), fT(r, u.draggable), fT(r, u.dragging), f([], i, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      pT.globalOptions = void 0;
      var mT = n(77680);

      function vT(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => mT.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, M.useState)(() => n ? r(e) : t);

        function s() {
          i(r(e))
        }
        return (0, M.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }, [e]), o
      }

      function yT(...e) {
        const t = (0, M.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      n(33834);
      var gT = n(53985),
        bT = n(84636),
        wT = n.t(bT, 2);

      function _T(e) {
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

      function ET(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function xT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ET(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = _T(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ET(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function PT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var CT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ST = "foundry_qmpv6yt",
        TT = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = xT(xT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) CT(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return PT(e.variantClassNames, e => PT(e, e => e.split(" ")[0]))
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
      const OT = (0, M.createContext)(null);

      function RT() {
        const e = (0, M.useContext)(OT);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const NT = (0, M.forwardRef)(({
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
              const t = function(e = !0) {
                  const t = vT("screen and (pointer: coarse) and (hover: none)");
                  return !!e && t
                }(),
                n = vT("(prefers-reduced-motion: reduce)", {
                  defaultValue: !1,
                  initializeWithValue: !0
                }),
                [r, o] = (0, M.useState)([]),
                i = r.length,
                [s, a] = (0, M.useState)(0),
                [l, c] = (0, lT.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [cT(), pT()]),
                u = (0, M.useRef)(0),
                d = (0, M.useRef)(!1),
                f = r[s],
                h = (0, M.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, n) => {
                    e.style.visibility = n === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [c]),
                p = (0, M.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, M.useCallback)((e, t) => {
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
              return (0, M.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, M.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
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
            m = (0, gT.v6)({
              className: TT(u)
            }, p, a),
            v = e ? $t.DX : "div";
          return (0, w.jsx)(OT.Provider, {
            value: c,
            children: (0, w.jsx)(v, {
              ref: l,
              "data-testid": n,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        jT = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        IT = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const {
            currentAlert: r
          } = RT();
          if (!e && !r || !r?.status) return null;
          const o = e || jT[r.status],
            i = wT[o],
            s = (0, gT.v6)({
              className: "foundry_qmpv6yn"
            }, t);
          return (0, w.jsx)(i, {
            label: "",
            ref: n,
            size: "LG",
            "data-icon": !0,
            ...s
          })
        }),
        kT = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? $t.DX : "div",
            i = (0, gT.v6)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, w.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...i
          })
        }),
        AT = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          align: n = "left",
          status: r,
          background: o,
          ...i
        }, s) => {
          const a = e ? $t.DX : "div",
            l = (0, gT.v6)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, w.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        LT = (0, M.forwardRef)(({
          testId: e,
          children: t,
          ...n
        }, r) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = RT(), s = (0, gT.v6)({
            className: "foundry_qmpv6yl"
          }, n), a = yT(i, r), l = M.Children.map(t, e => {
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
          }, []), (0, w.jsx)("div", {
            ref: a,
            "data-testid": e,
            ...s,
            children: (0, w.jsx)("div", {
              className: "foundry_qmpv6ym",
              children: t
            })
          })
        }),
        DT = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = (0, M.useRef)(null),
            s = yT(i, o),
            a = e ? $t.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = HS(r, i),
            u = (0, gT.v6)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, r);
          return (0, w.jsx)(a, {
            "data-pressed": c,
            "data-testid": n,
            ref: s,
            ...l,
            ...u,
            children: t
          })
        }),
        MT = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const r = (0, gT.v6)({
            className: "foundry_qmpv6yq"
          }, t);
          return (0, w.jsx)(Bn, {
            ref: n,
            "data-close-btn": !0,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            ...r
          })
        }),
        HT = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          children: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : "div",
            s = (0, gT.v6)({
              className: "foundry_qmpv6ys"
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: n
          })
        }),
        BT = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            nextAlert: r,
            canScrollNext: o
          } = RT(), i = (0, gT.v6)({
            className: ST
          }, t);
          return (0, w.jsx)(Bn, {
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
        zT = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            prevAlert: r,
            canScrollPrev: o
          } = RT(), i = (0, gT.v6)({
            className: ST
          }, t);
          return (0, w.jsx)(Bn, {
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
        FT = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            currentAlertIndex: r,
            numAlerts: o
          } = RT(), i = (0, gT.v6)({
            className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
          }, t);
          return (0, w.jsxs)("div", {
            ref: n,
            "data-testid": e,
            "aria-hidden": !0,
            ...i,
            children: [r + 1, "/", o]
          })
        });
      var VT = n(17532),
        UT = n(56045),
        GT = n.t(UT, 2);

      function qT(e) {
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

      function KT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function XT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? KT(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = qT(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : KT(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function WT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var $T = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ZT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = XT(XT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) $T(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return WT(e.variantClassNames, e => WT(e, e => e.split(" ")[0]))
            }
          }, t
        },
        YT = ZT({
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
        QT = ZT({
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
        JT = ZT({
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
      const eO = (0, M.createContext)(null);

      function tO() {
        const e = (0, M.useContext)(eO);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const nO = (0, M.forwardRef)(({
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
            d = (0, VT.v6)({
              className: QT(u)
            }, l),
            f = e ? $t.DX : "div";
          return (0, w.jsx)(eO.Provider, {
            value: u,
            children: (0, w.jsx)(f, {
              ref: c,
              "data-testid": n,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        rO = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const {
            size: i
          } = tO(), s = e ? $t.DX : "div", a = (0, VT.v6)({
            className: JT({
              size: i
            })
          }, r);
          return (0, w.jsx)(s, {
            ref: o,
            "data-testid": n,
            ...a,
            children: t
          })
        }),
        oO = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = GT[e],
            o = (0, VT.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, w.jsx)(r, {
            ref: n,
            size: "SM",
            ...o
          })
        }),
        iO = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, n) => {
          const {
            background: r,
            isDisabled: o
          } = tO(), i = (0, VT.v6)({
            className: YT({
              background: r
            })
          }, t);
          return (0, w.jsx)(Bn, {
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
      var sO = n(19198),
        aO = n(70073),
        lO = "ToastProvider",
        [cO, uO, dO] = xv("Toast"),
        [fO, hO] = (0, nh.A)("Toast", [dO]),
        [pO, mO] = fO(lO),
        vO = e => {
          const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = M.useState(null), [c, u] = M.useState(0), d = M.useRef(!1), f = M.useRef(!1);
          return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${lO}\`. Expected non-empty \`string\`.`), (0, w.jsx)(cO.Provider, {
            scope: t,
            children: (0, w.jsx)(pO, {
              scope: t,
              label: n,
              duration: r,
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
      vO.displayName = lO;
      var yO = "ToastViewport",
        gO = ["F8"],
        bO = "toast.viewportPause",
        wO = "toast.viewportResume",
        _O = M.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            hotkey: r = gO,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = mO(yO, n), a = uO(n), l = M.useRef(null), c = M.useRef(null), u = M.useRef(null), d = M.useRef(null), f = (0, th.s)(t, d, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = s.toastCount > 0;
          M.useEffect(() => {
            const e = e => {
              0 !== r.length && r.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [r]), M.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const n = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(bO);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                r = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(wO);
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
          }, [p, s.isClosePausedRef]);
          const m = M.useCallback(({
            tabbingDirection: e
          }) => {
            const t = a().map(t => {
              const n = t.ref.current,
                r = [n, ...BO(n)];
              return "forwards" === e ? r : r.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [a]);
          return M.useEffect(() => {
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
                  zO(o.slice(i + 1)) ? t.preventDefault() : r ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, w.jsxs)(hh, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, w.jsx)(xO, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                zO(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, w.jsx)(cO.Slot, {
              scope: n,
              children: (0, w.jsx)(rh.sG.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), p && (0, w.jsx)(xO, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                zO(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      _O.displayName = yO;
      var EO = "ToastFocusProxy",
        xO = M.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
          } = e, i = mO(EO, n);
          return (0, w.jsx)(jr.s6, {
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
      xO.displayName = EO;
      var PO = "Toast",
        CO = M.forwardRef((e, t) => {
          const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = (0, jm.i)({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: PO
          });
          return (0, w.jsx)(Rm, {
            present: n || a,
            children: (0, w.jsx)(OO, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, oh.c)(e.onPause),
              onResume: (0, oh.c)(e.onResume),
              onSwipeStart: Jf(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: Jf(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${n}px`)
              }),
              onSwipeCancel: Jf(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: Jf(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: n
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${n}px`), l(!1)
              })
            })
          })
        });
      CO.displayName = PO;
      var [SO, TO] = fO(PO, {
        onClose() {}
      }), OO = M.forwardRef((e, t) => {
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
          onSwipeEnd: h,
          ...p
        } = e, m = mO(PO, n), [v, y] = M.useState(null), g = (0, th.s)(t, e => y(e)), b = M.useRef(null), _ = M.useRef(null), E = o || m.duration, x = M.useRef(0), P = M.useRef(E), C = M.useRef(0), {
          onToastAdd: S,
          onToastRemove: T
        } = m, O = (0, oh.c)(() => {
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
              n = () => {
                const e = (new Date).getTime() - x.current;
                P.current = P.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(bO, n), e.addEventListener(wO, t), () => {
              e.removeEventListener(bO, n), e.removeEventListener(wO, t)
            }
          }
        }, [m.viewport, E, l, c, R]), M.useEffect(() => {
          i && !m.isClosePausedRef.current && R(E)
        }, [i, E, m.isClosePausedRef, R]), M.useEffect(() => (S(), () => T()), [S, T]);
        const N = M.useMemo(() => v ? DO(v) : null, [v]);
        return m.viewport ? (0, w.jsxs)(w.Fragment, {
          children: [N && (0, w.jsx)(RO, {
            __scopeToast: n,
            role: "status",
            "aria-live": "foreground" === r ? "assertive" : "polite",
            children: N
          }), (0, w.jsx)(SO, {
            scope: n,
            onClose: O,
            children: vt.createPortal((0, w.jsx)(cO.ItemSlot, {
              scope: n,
              children: (0, w.jsx)(fh, {
                asChild: !0,
                onEscapeKeyDown: Jf(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, w.jsx)(rh.sG.li, {
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
                  onKeyDown: Jf(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: Jf(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: Jf(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      n = e.clientY - b.current.y,
                      r = Boolean(_.current),
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
                    r ? (_.current = c, MO("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : HO(c, m.swipeDirection, l) ? (_.current = c, MO("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(n) > l) && (b.current = null)
                  }),
                  onPointerUp: Jf(e.onPointerUp, e => {
                    const t = _.current,
                      n = e.target;
                    if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const n = e.currentTarget,
                        r = {
                          originalEvent: e,
                          delta: t
                        };
                      HO(t, m.swipeDirection, m.swipeThreshold) ? MO("toast.swipeEnd", h, r, {
                        discrete: !0
                      }) : MO("toast.swipeCancel", f, r, {
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
      }), RO = e => {
        const {
          __scopeToast: t,
          children: n,
          ...r
        } = e, o = mO(PO, t), [i, s] = M.useState(!1), [a, l] = M.useState(!1);
        return function(e = () => {}) {
          const t = (0, oh.c)(e);
          (0, om.N)(() => {
            let e = 0,
              n = 0;
            return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
            }
          }, [t])
        }(() => s(!0)), M.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, w.jsx)(Om, {
          asChild: !0,
          children: (0, w.jsx)(jr.s6, {
            ...r,
            children: i && (0, w.jsxs)(w.Fragment, {
              children: [o.label, " ", n]
            })
          })
        })
      };
      M.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, w.jsx)(rh.sG.div, {
          ...r,
          ref: t
        })
      }).displayName = "ToastTitle";
      var NO = M.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          ...r
        } = e;
        return (0, w.jsx)(rh.sG.div, {
          ...r,
          ref: t
        })
      });
      NO.displayName = "ToastDescription";
      var jO = "ToastAction",
        IO = M.forwardRef((e, t) => {
          const {
            altText: n,
            ...r
          } = e;
          return n.trim() ? (0, w.jsx)(LO, {
            altText: n,
            asChild: !0,
            children: (0, w.jsx)(AO, {
              ...r,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${jO}\`. Expected non-empty \`string\`.`), null)
        });
      IO.displayName = jO;
      var kO = "ToastClose",
        AO = M.forwardRef((e, t) => {
          const {
            __scopeToast: n,
            ...r
          } = e, o = TO(kO, n);
          return (0, w.jsx)(LO, {
            asChild: !0,
            children: (0, w.jsx)(rh.sG.button, {
              type: "button",
              ...r,
              ref: t,
              onClick: Jf(e.onClick, o.onClose)
            })
          })
        });
      AO.displayName = kO;
      var LO = M.forwardRef((e, t) => {
        const {
          __scopeToast: n,
          altText: r,
          ...o
        } = e;
        return (0, w.jsx)(rh.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": r || void 0,
          ...o,
          ref: t
        })
      });

      function DO(e) {
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
              } else t.push(...DO(e))
          }
        }), t
      }

      function MO(e, t, n, {
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
        }), r ? (0, rh.hO)(o, i) : o.dispatchEvent(i)
      }
      var HO = (e, t, n = 0) => {
        const r = Math.abs(e.x),
          o = Math.abs(e.y),
          i = r > o;
        return "left" === t || "right" === t ? i && r > n : !i && o > n
      };

      function BO(e) {
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

      function zO(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var FO = vO,
        VO = _O,
        UO = CO,
        GO = NO,
        qO = IO,
        KO = AO;

      function XO(e) {
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

      function WO(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function $O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? WO(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = XO(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : WO(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function ZO(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var YO = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        QO = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = $O($O({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) YO(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ZO(e.variantClassNames, e => ZO(e, e => e.split(" ")[0]))
            }
          }, t
        },
        JO = QO({
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
        eR = QO({
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
        tR = QO({
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
      const nR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => (0, w.jsx)(FO, {
          ref: r,
          "data-testid": t,
          ...n,
          children: e
        })),
        rR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          position: n = "bottomRight",
          ...r
        }, o) => {
          const i = (0, aO.v6)({
            className: tR({
              position: n
            })
          }, r);
          return (0, w.jsx)(VO, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        oR = (0, M.createContext)(null);

      function iR() {
        const e = (0, M.useContext)(oR);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const sR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          appearance: r = "success",
          ...o
        }, i) => {
          const s = e ? $t.DX : UO,
            a = (0, aO.v6)({
              className: eR({
                appearance: r
              })
            }, o);
          return (0, w.jsx)(oR.Provider, {
            value: {
              appearance: r
            },
            children: (0, w.jsx)(s, {
              ref: i,
              "data-testid": n,
              ...a,
              children: t
            })
          })
        }),
        aR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : GO,
            s = (0, aO.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        lR = {
          danger: sO.CircleX,
          information: sO.Info,
          success: sO.CircleCheck,
          warning: sO.TriangleAlert,
          avocado: sO.CircleCheck
        },
        cR = (0, M.forwardRef)(({
          asChild: e,
          ...t
        }, n) => {
          const {
            appearance: r
          } = iR(), o = e ? $t.DX : lR[r], i = (0, aO.v6)({
            className: JO({
              appearance: r
            }),
            size: "LG"
          }, t);
          return (0, w.jsx)(o, {
            ref: n,
            ...i
          })
        }),
        uR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : qO,
            s = (0, aO.v6)({
              className: "foundry_dnh2nzq",
              asChild: !0
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: e ? (0, w.jsx)($t.xV, {
              children: t
            }) : (0, w.jsx)(Cn, {
              size: "MD",
              appearance: "ghost",
              children: t
            })
          })
        }),
        dR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : KO,
            s = (0, aO.v6)({
              className: "foundry_dnh2nzr",
              asChild: !0
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: e ? (0, w.jsx)($t.xV, {
              children: t
            }) : (0, w.jsx)(Bn, {
              appearance: "ghost",
              icon: "X",
              size: "SM",
              label: ""
            })
          })
        });
      var fR = n(48942),
        hR = n(58511),
        pR = n.t(hR, 2);

      function mR(e) {
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

      function vR(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function yR(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = mR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function gR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var bR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        wR = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = yR(yR({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) bR(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gR(e.variantClassNames, e => gR(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _R = wR({
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
        ER = wR({
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
        xR = wR({
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

      function PR() {
        const e = (0, M.useContext)(CR);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const CR = (0, M.createContext)(null),
        SR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: n,
          size: r = "MD",
          ...o
        }, i) => {
          const s = (0, fR.v6)({
              className: xR({
                size: r
              })
            }, o),
            a = n ? $t.DX : "ol";
          return (0, w.jsx)(CR.Provider, {
            value: {
              size: r
            },
            children: (0, w.jsx)(a, {
              ref: i,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        TR = (0, M.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: n,
          testId: r,
          ...o
        }, i) => {
          const s = (0, M.useRef)(null),
            {
              size: a
            } = PR(),
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
              } = HS({
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
            c = n ? $t.DX : "a",
            u = (0, fR.v6)({
              className: (0, ue.clsx)(_R({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": r
            }, l, o);
          return (0, w.jsx)("li", {
            className: ER({
              size: a
            }),
            ref: i,
            children: (0, w.jsx)(c, {
              ref: s,
              ...u,
              children: t
            })
          })
        }),
        OR = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = pR[e];
          return (0, w.jsx)(r, {
            ref: n,
            size: "LG",
            ...t
          })
        }),
        RR = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: n = !1,
          label: r,
          ...o
        }, i) => {
          const [s, a] = (0, M.useState)(n), {
            size: l
          } = PR(), c = (0, fR.v6)({
            className: ER({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, w.jsx)("li", {
            ref: i,
            ...c,
            children: (0, w.jsxs)(Q_, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, w.jsx)(J_, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": r,
                children: "..."
              }), (0, w.jsx)(nE, {
                children: (0, w.jsx)(rE, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, w.jsx)(oE, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        NR = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: n,
          ...r
        }, o) => {
          const i = t ? $t.DX : iE,
            s = (0, fR.v6)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": n
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            ...s,
            children: e
          })
        }),
        jR = new Map;

      function IR(e, t) {
        if (e === t) return e;
        const n = jR.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = jR.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function kR(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function AR(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = kR(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = IR(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var LR;

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

      function MR(e, t) {
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
          t % 2 ? MR(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = DR(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : MR(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function BR(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(LR || (LR = {})), Symbol.toStringTag;
      var zR = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        FR = (e => {
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
            for (var [c, u] of e.compoundVariants) zR(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return BR(e.variantClassNames, e => BR(e, e => e.split(" ")[0]))
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
      const VR = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: n = "primary",
          ...r
        }, o) => {
          const i = e ? $t.DX : "div",
            s = AR({
              className: FR({
                appearance: n
              })
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        UR = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = e ? $t.DX : "div",
            s = AR({
              className: "foundry_18omk9t4 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdq foundry_tdsdcdo"
            }, r);
          return (0, w.jsx)(i, {
            ref: o,
            "data-testid": n,
            ...s,
            children: t
          })
        }),
        GR = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, n) => {
          const r = Zb[e],
            o = AR({
              size: "SM",
              className: "foundry_18omk9t3",
              label: ""
            }, t);
          return (0, w.jsx)(r, {
            ref: n,
            ...o
          })
        });
      var qR = aN(),
        KR = e => rN(e, qR),
        XR = aN();
      KR.write = e => rN(e, XR);
      var WR = aN();
      KR.onStart = e => rN(e, WR);
      var $R = aN();
      KR.onFrame = e => rN(e, $R);
      var ZR = aN();
      KR.onFinish = e => rN(e, ZR);
      var YR = [];
      KR.setTimeout = (e, t) => {
        const n = KR.now() + t,
          r = () => {
            const e = YR.findIndex(e => e.cancel == r);
            ~e && YR.splice(e, 1), tN -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return YR.splice(QR(n), 0, o), tN += 1, oN(), o
      };
      var QR = e => ~(~YR.findIndex(t => t.time > e) || ~YR.length);
      KR.cancel = e => {
        WR.delete(e), $R.delete(e), ZR.delete(e), qR.delete(e), XR.delete(e)
      }, KR.sync = e => {
        nN = !0, KR.batchedUpdates(e), nN = !1
      }, KR.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, KR.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          WR.delete(n), t = null
        }, r
      };
      var JR = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      KR.use = e => JR = e, KR.now = "undefined" != typeof performance ? () => performance.now() : Date.now, KR.batchedUpdates = e => e(), KR.catch = console.error, KR.frameLoop = "always", KR.advance = () => {
        "demand" !== KR.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : sN()
      };
      var eN = -1,
        tN = 0,
        nN = !1;

      function rN(e, t) {
        nN ? (t.delete(e), e(0)) : (t.add(e), oN())
      }

      function oN() {
        eN < 0 && (eN = 0, "demand" !== KR.frameLoop && JR(iN))
      }

      function iN() {
        ~eN && (JR(iN), KR.batchedUpdates(sN))
      }

      function sN() {
        const e = eN;
        eN = KR.now();
        const t = QR(eN);
        t && (lN(YR.splice(0, t), e => e.handler()), tN -= t), tN ? (WR.flush(), qR.flush(e ? Math.min(64, eN - e) : 16.667), $R.flush(), XR.flush(), ZR.flush()) : eN = -1
      }

      function aN() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            tN += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (tN -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, tN -= t.size, lN(t, t => t(n) && e.add(t)), tN += e.size, t = e)
          }
        }
      }

      function lN(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            KR.catch(e)
          }
        })
      }
      var cN = Object.defineProperty,
        uN = {};

      function dN() {}((e, t) => {
        for (var n in t) cN(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(uN, {
        assign: () => CN,
        colors: () => EN,
        createStringInterpolator: () => gN,
        skipAnimation: () => xN,
        to: () => bN,
        willAdvance: () => PN
      });
      var fN = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function hN(e, t) {
        if (fN.arr(e)) {
          if (!fN.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var pN = (e, t) => e.forEach(t);

      function mN(e, t, n) {
        if (fN.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var vN = e => fN.und(e) ? [] : fN.arr(e) ? e : [e];

      function yN(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), pN(n, t)
        }
      }
      var gN, bN, wN = (e, ...t) => yN(e, e => e(...t)),
        _N = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        EN = null,
        xN = !1,
        PN = dN,
        CN = e => {
          e.to && (bN = e.to), e.now && (KR.now = e.now), void 0 !== e.colors && (EN = e.colors), null != e.skipAnimation && (xN = e.skipAnimation), e.createStringInterpolator && (gN = e.createStringInterpolator), e.requestAnimationFrame && KR.use(e.requestAnimationFrame), e.batchedUpdates && (KR.batchedUpdates = e.batchedUpdates), e.willAdvance && (PN = e.willAdvance), e.frameLoop && (KR.frameLoop = e.frameLoop)
        },
        SN = new Set,
        TN = [],
        ON = [],
        RN = 0,
        NN = {
          get idle() {
            return !SN.size && !TN.length
          },
          start(e) {
            RN > e.priority ? (SN.add(e), KR.onStart(jN)) : (IN(e), KR(AN))
          },
          advance: AN,
          sort(e) {
            if (RN) KR.onFrame(() => NN.sort(e));
            else {
              const t = TN.indexOf(e);
              ~t && (TN.splice(t, 1), kN(e))
            }
          },
          clear() {
            TN = [], SN.clear()
          }
        };

      function jN() {
        SN.forEach(IN), SN.clear(), KR(AN)
      }

      function IN(e) {
        TN.includes(e) || kN(e)
      }

      function kN(e) {
        TN.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(TN), 0, e)
      }

      function AN(e) {
        const t = ON;
        for (let n = 0; n < TN.length; n++) {
          const r = TN[n];
          RN = r.priority, r.idle || (PN(r), r.advance(e), r.idle || t.push(r))
        }
        return RN = 0, (ON = TN).length = 0, (TN = t).length > 0
      }
      var LN = "[-+]?\\d*\\.?\\d+",
        DN = LN + "%";

      function MN(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var HN = new RegExp("rgb" + MN(LN, LN, LN)),
        BN = new RegExp("rgba" + MN(LN, LN, LN, LN)),
        zN = new RegExp("hsl" + MN(LN, DN, DN)),
        FN = new RegExp("hsla" + MN(LN, DN, DN, LN)),
        VN = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        UN = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        GN = /^#([0-9a-fA-F]{6})$/,
        qN = /^#([0-9a-fA-F]{8})$/;

      function KN(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function XN(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = KN(o, r, e + 1 / 3),
          s = KN(o, r, e),
          a = KN(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function WN(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function $N(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ZN(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function YN(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function QN(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = GN.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : EN && void 0 !== EN[e] ? EN[e] : (t = HN.exec(e)) ? (WN(t[1]) << 24 | WN(t[2]) << 16 | WN(t[3]) << 8 | 255) >>> 0 : (t = BN.exec(e)) ? (WN(t[1]) << 24 | WN(t[2]) << 16 | WN(t[3]) << 8 | ZN(t[4])) >>> 0 : (t = VN.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = qN.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = UN.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = zN.exec(e)) ? (255 | XN($N(t[1]), YN(t[2]), YN(t[3]))) >>> 0 : (t = FN.exec(e)) ? (XN($N(t[1]), YN(t[2]), YN(t[3])) | ZN(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var JN = (e, t, n) => {
          if (fN.fun(e)) return e;
          if (fN.arr(e)) return JN({
            range: e,
            output: t,
            extrapolate: n
          });
          if (fN.str(e.output[0])) return gN(e);
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
        ej = 1.70158,
        tj = 2.5949095,
        nj = 2.70158,
        rj = 2 * Math.PI / 3,
        oj = 2 * Math.PI / 4.5,
        ij = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        sj = {
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
          easeInBack: e => nj * e * e * e - ej * e * e,
          easeOutBack: e => 1 + nj * Math.pow(e - 1, 3) + ej * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - tj) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + tj) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * rj),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * rj) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * oj) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * oj) / 2 + 1,
          easeInBounce: e => 1 - ij(1 - e),
          easeOutBounce: ij,
          easeInOutBounce: e => e < .5 ? (1 - ij(1 - 2 * e)) / 2 : (1 + ij(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        aj = Symbol.for("FluidValue.get"),
        lj = Symbol.for("FluidValue.observers"),
        cj = e => Boolean(e && e[aj]),
        uj = e => e && e[aj] ? e[aj]() : e,
        dj = e => e[lj] || null;

      function fj(e, t) {
        const n = e[lj];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var hj = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            pj(this, e)
          }
        },
        pj = (e, t) => gj(e, aj, t);

      function mj(e, t) {
        if (e[aj]) {
          let n = e[lj];
          n || gj(e, lj, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function vj(e, t) {
        const n = e[lj];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[lj] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var yj, gj = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        bj = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        wj = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        _j = new RegExp(`(${bj.source})(%|[a-z]+)`, "i"),
        Ej = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        xj = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Pj = e => {
          const [t, n] = Cj(e);
          if (!t || _N()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && xj.test(n) ? Pj(n) : n || e
        },
        Cj = e => {
          const t = xj.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Sj = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Tj = e => {
          yj || (yj = EN ? new RegExp(`(${Object.keys(EN).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => uj(e).replace(xj, Pj).replace(wj, QN).replace(yj, QN)),
            n = t.map(e => e.match(bj).map(Number)),
            r = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = r.map(t => JN({
              ...e,
              output: t
            }));
          return e => {
            const n = !_j.test(t[0]) && t.find(e => _j.test(e))?.replace(bj, "");
            let r = 0;
            return t[0].replace(bj, () => `${o[r++](e)}${n||""}`).replace(Ej, Sj)
          }
        },
        Oj = "react-spring: ",
        Rj = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Oj}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Nj = Rj(console.warn),
        jj = Rj(console.warn);

      function Ij(e) {
        return fN.str(e) && ("#" == e[0] || /\d/.test(e) || !_N() && xj.test(e) || e in (EN || {}))
      }
      var kj = _N() ? M.useEffect : M.useLayoutEffect;

      function Aj() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return kj(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Lj = e => (0, M.useEffect)(e, Dj),
        Dj = [],
        Mj = Symbol.for("Animated:node"),
        Hj = e => e && e[Mj],
        Bj = (e, t) => {
          return n = e, r = Mj, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        zj = e => e && e[Mj] && e[Mj].getPayload(),
        Fj = class {
          constructor() {
            Bj(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Vj = class e extends Fj {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, fN.num(this._value) && (this.lastPosition = this._value)
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
            return fN.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, fN.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Uj = class e extends Vj {
          constructor(e) {
            super(0), this._string = null, this._toString = JN({
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
            if (fN.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = JN({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Gj = {
          dependencies: null
        },
        qj = class extends Fj {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return mN(this.source, (n, r) => {
              var o;
              (o = n) && o[Mj] === o ? t[r] = n.getValue(e) : cj(n) ? t[r] = uj(n) : e || (t[r] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && pN(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return mN(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Gj.dependencies && cj(e) && Gj.dependencies.add(e);
            const t = zj(e);
            t && pN(t, e => this.add(e))
          }
        },
        Kj = class e extends qj {
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
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(Xj)), !0)
          }
        };

      function Xj(e) {
        return (Ij(e) ? Uj : Vj).create(e)
      }

      function Wj(e) {
        const t = Hj(e);
        return t ? t.constructor : fN.arr(e) ? Kj : Ij(e) ? Uj : Vj
      }
      var $j = (e, t) => {
          const n = !fN.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((r, o) => {
            const i = (0, M.useRef)(null),
              s = n && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (fN.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const n = new Set;
                return Gj.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new qj(e), Gj.dependencies = null, [e, n]
              }(r, t),
              c = Aj(),
              u = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && c()
              },
              d = new Zj(u, l),
              f = (0, M.useRef)(void 0);
            kj(() => (f.current = d, pN(l, e => mj(e, d)), () => {
              f.current && (pN(f.current.deps, e => vj(e, f.current)), KR.cancel(f.current.update))
            })), (0, M.useEffect)(u, []), Lj(() => () => {
              const e = f.current;
              pN(e.deps, t => vj(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        Zj = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && KR.write(this.update)
          }
        },
        Yj = Symbol.for("AnimatedComponent"),
        Qj = e => fN.str(e) ? e : e && fN.str(e.displayName) ? e.displayName : fN.fun(e) && e.name || null;

      function Jj(e, ...t) {
        return fN.fun(e) ? e(...t) : e
      }
      var eI = (e, t) => !0 === e || !!(t && e && (fN.fun(e) ? e(t) : vN(e).includes(t))),
        tI = (e, t) => fN.obj(e) ? t && e[t] : e,
        nI = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        rI = e => e,
        oI = (e, t = rI) => {
          let n = iI;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            fN.und(n) || (r[o] = n)
          }
          return r
        },
        iI = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        sI = {
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

      function aI(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (mN(e, (e, r) => {
              sI[r] || (t[r] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return mN(e, (e, r) => r in t || (n[r] = e)), n
        }
        return {
          ...e
        }
      }

      function lI(e) {
        return e = uj(e), fN.arr(e) ? e.map(lI) : Ij(e) ? uN.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function cI(e) {
        return fN.fun(e) || fN.arr(e) && fN.obj(e[0])
      }

      function uI(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var dI = {
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
        fI = {
          ...dI.default,
          mass: 1,
          damping: 1,
          easing: sj.linear,
          clamp: !1
        },
        hI = class {
          constructor() {
            this.velocity = 0, Object.assign(this, fI)
          }
        };

      function pI(e, t) {
        if (fN.und(t.decay)) {
          const n = !fN.und(t.tension) || !fN.und(t.friction);
          !n && fN.und(t.frequency) && fN.und(t.damping) && fN.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var mI = [],
        vI = class {
          constructor() {
            this.changed = !1, this.values = mI, this.toValues = null, this.fromValues = mI, this.config = new hI, this.immediate = !1
          }
        };

      function yI(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, c, u = eI(n.cancel ?? r?.cancel, t);
          if (u) h();
          else {
            fN.und(n.pause) || (o.paused = eI(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || eI(e, t)), l = Jj(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - KR.now()
          }

          function f() {
            l > 0 && !uN.skipAnimation ? (o.delayed = !0, c = KR.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
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
      var gI = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? _I(e.get()) : t.every(e => e.noop) ? bI(e.get()) : wI(e.get(), t.every(e => e.finished)),
        bI = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        wI = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        _I = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function EI(e, t, n, r) {
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
          const c = oI(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (n.cancelId || 0) && _I(r) || o !== n.asyncId && wI(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new PI,
                s = new CI;
              return (async () => {
                if (uN.skipAnimation) throw xI(n), s.result = wI(r, !1), d(s), s;
                h(i);
                const a = fN.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, mN(c, (e, t) => {
                  fN.und(a[t]) && (a[t] = e)
                });
                const l = await r.start(a);
                return h(i), n.paused && await new Promise(e => {
                  n.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (uN.skipAnimation) return xI(n), wI(r, !1);
          try {
            let t;
            t = fN.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), f]), m = wI(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof PI) m = e.result;
            else {
              if (!(e instanceof CI)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? l : void 0)
          }
          return fN.fun(s) && KR.batchedUpdates(() => {
            s(m, r, r.item)
          }), m
        })() : l
      }

      function xI(e, t) {
        yN(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var PI = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        CI = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        SI = e => e instanceof OI,
        TI = 1,
        OI = class extends hj {
          constructor() {
            super(...arguments), this.id = TI++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Hj(this);
            return e && e.getValue()
          }
          to(...e) {
            return uN.to(this, e)
          }
          interpolate(...e) {
            return Nj(`${Oj}The "interpolate" function is deprecated in v9 (use "to" instead)`), uN.to(this, e)
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
            fj(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || NN.sort(this), fj(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        RI = Symbol.for("SpringPhase"),
        NI = e => (1 & e[RI]) > 0,
        jI = e => (2 & e[RI]) > 0,
        II = e => (4 & e[RI]) > 0,
        kI = (e, t) => t ? e[RI] |= 3 : e[RI] &= -3,
        AI = (e, t) => t ? e[RI] |= 4 : e[RI] &= -5,
        LI = class extends OI {
          constructor(e, t) {
            if (super(), this.animation = new vI, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !fN.und(e) || !fN.und(t)) {
              const n = fN.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              fN.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(jI(this) || this._state.asyncTo) || II(this)
          }
          get goal() {
            return uj(this.animation.to)
          }
          get velocity() {
            const e = Hj(this);
            return e instanceof Vj ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return NI(this)
          }
          get isAnimating() {
            return jI(this)
          }
          get isPaused() {
            return II(this)
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
            } = r, s = zj(r.to);
            !s && cj(r.to) && (o = vN(uj(r.to))), r.values.forEach((a, l) => {
              if (a.done) return;
              const c = a.constructor == Uj ? 1 : s ? s[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = fN.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (fN.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(a.lastPosition - d) <= f, s = o * r
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !fN.und(r),
                      h = n == c ? a.v0 > 0 : n < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (s = -s * r, d = c)), s += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, a.durationProgress = r), d = n + i.easing(r) * (c - n), s = (d - a.lastPosition) / e, u = 1 == r
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
            });
            const a = Hj(this),
              l = a.getValue();
            if (t) {
              const e = uj(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return KR.batchedUpdates(() => {
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
            if (jI(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              KR.batchedUpdates(() => {
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
            return fN.und(e) ? (n = this.queue || [], this.queue = []) : n = [fN.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => gI(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), xI(this._state, e && this._lastCallId), KR.batchedUpdates(() => this._stop(t, e)), this
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
            n = fN.obj(n) ? n[t] : n, (null == n || cI(n)) && (n = void 0), r = fN.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return NI(this) || (e.reverse && ([n, r] = [r, n]), r = uj(r), fN.und(r) ? Hj(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, oI(e, (e, t) => /^on/.test(t) ? tI(e, n) : e)), FI(this, e, "onProps"), VI(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return yI(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  II(this) || (AI(this, !0), wN(i.pauseQueue), VI(this, "onPause", wI(this, DI(this, this.animation.to)), this))
                },
                resume: () => {
                  II(this) && (AI(this, !1), jI(this) && this._resume(), wN(i.resumeQueue), VI(this, "onResume", wI(this, DI(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = MI(e);
                if (t) return this._update(t, !0)
              }
              return n
            })
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(_I(this));
            const r = !fN.und(e.to),
              o = !fN.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(_I(this));
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
            !o || r || t.default && !fN.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !hN(d, c);
            f && (a.from = d), d = uj(d);
            const h = !hN(u, l);
            h && this._focus(u);
            const p = cI(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (pI(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), pI(e, t), Object.assign(e, t);
              for (const t in fI) null == e[t] && (e[t] = fI[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              fN.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Jj(t.config, i), t.config !== s.config ? Jj(s.config, i) : void 0);
            let g = Hj(this);
            if (!g || fN.und(u)) return n(wI(this, !0));
            const b = fN.und(t.reset) ? o && !t.default : !fN.und(d) && eI(t.reset, i),
              w = b ? d : this.get(),
              _ = lI(u),
              E = fN.num(_) || fN.arr(_) || Ij(_),
              x = !p && (!E || eI(s.immediate || t.immediate, i));
            if (h) {
              const e = Wj(u);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(_)
              }
            }
            const P = g.constructor;
            let C = cj(u),
              S = !1;
            if (!C) {
              const e = b || !NI(this) && f;
              (h || e) && (S = hN(lI(w), _), C = !S), (hN(a.immediate, x) || x) && hN(m.decay, v) && hN(m.velocity, y) || (C = !0)
            }
            if (S && jI(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || cj(l)) && (a.values = g.getPayload(), a.toValues = cj(u) ? null : P == Uj ? [1] : vN(_)), a.immediate != x && (a.immediate = x, x || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              pN(zI, e => FI(this, t, e));
              const r = wI(this, DI(this, l));
              wN(this._pendingCalls, r), this._pendingCalls.add(n), a.changed && KR.batchedUpdates(() => {
                a.changed = !b, e?.(r, this), b ? Jj(s.onRest, r) : a.onStart?.(r, this)
              })
            }
            b && this._set(w), p ? n(EI(t.to, t, this._state, this)) : C ? this._start() : jI(this) && !h ? this._pendingCalls.add(n) : n(bI(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (dj(this) && this._detach(), t.to = e, dj(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            cj(t) && (mj(t, this), SI(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            cj(e) && vj(e, this)
          }
          _set(e, t = !0) {
            const n = uj(e);
            if (!fN.und(n)) {
              const e = Hj(this);
              if (!e || !hN(n, e.getValue())) {
                const r = Wj(n);
                e && e.constructor == r ? e.setValue(n) : Bj(this, r.create(n)), e && KR.batchedUpdates(() => {
                  this._onChange(n, t)
                })
              }
            }
            return Hj(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, VI(this, "onStart", wI(this, DI(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Jj(this.animation.onChange, e, this)), Jj(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Hj(this).reset(uj(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), jI(this) || (kI(this, !0), II(this) || this._resume())
          }
          _resume() {
            uN.skipAnimation ? this.finish() : NN.start(this)
          }
          _stop(e, t) {
            if (jI(this)) {
              kI(this, !1);
              const n = this.animation;
              pN(n.values, e => {
                e.done = !0
              }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), fj(this, {
                type: "idle",
                parent: this
              });
              const r = t ? _I(this.get()) : wI(this.get(), DI(this, e ?? n.to));
              wN(this._pendingCalls, r), n.changed && (n.changed = !1, VI(this, "onRest", r, this))
            }
          }
        };

      function DI(e, t) {
        const n = lI(t);
        return hN(lI(e.get()), n)
      }

      function MI(e, t = e.loop, n = e.to) {
        const r = Jj(t);
        if (r) {
          const o = !0 !== r && aI(r),
            i = (o || e).reverse,
            s = !o || o.reset;
          return HI({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || cI(n) ? n : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function HI(e) {
        const {
          to: t,
          from: n
        } = e = aI(e), r = new Set;
        return fN.obj(t) && BI(t, r), fN.obj(n) && BI(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function BI(e, t) {
        mN(e, (e, n) => null != e && t.add(n))
      }
      var zI = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function FI(e, t, n) {
        e.animation[n] = t[n] !== nI(t, n) ? tI(t[n], e.key) : void 0
      }

      function VI(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var UI = ["onStart", "onChange", "onRest"],
        GI = 1,
        qI = class {
          constructor(e, t) {
            this.id = GI++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              fN.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(HI(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = vN(e).map(HI) : this.queue = [], this._flush ? this._flush(this, t) : (ZI(this, t), function(e, t) {
              return Promise.all(t.map(t => KI(e, t))).then(t => gI(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              pN(vN(t), t => n[t].stop(!!e))
            } else xI(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (fN.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              pN(vN(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (fN.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              pN(vN(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            mN(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, yN(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !r && this._started,
              s = o || i && n.size ? this.get() : null;
            o && t.size && yN(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, yN(n, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            KR.onFrame(this._onFrame)
          }
        };
      async function KI(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, c = fN.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = fN.arr(o) || fN.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : pN(UI, n => {
          const r = t[n];
          if (fN.fun(r)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, wN(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          h = !0 === t.cancel || !0 === nI(t, "cancel");
        (u || h && d.asyncId) && f.push(yI(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: dN,
            resume: dN,
            start(t, n) {
              h ? (xI(d, e._lastAsyncId), n(_I(e))) : (t.onRest = a, n(EI(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = gI(e, await Promise.all(f));
        if (s && p.finished && (!n || !p.noop)) {
          const n = MI(t, s, o);
          if (n) return ZI(e, [n]), KI(e, n, !0)
        }
        return l && KR.batchedUpdates(() => l(p, e, e.item)), p
      }

      function XI(e, t) {
        const n = {
          ...e.springs
        };
        return t && pN(vN(t), e => {
            fN.und(e.keys) && (e = HI(e)), fN.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), $I(n, e, e => WI(e))
          }),
          function(e, t) {
            mN(t, (t, n) => {
              e.springs[n] || (e.springs[n] = t, mj(t, e))
            })
          }(e, n), n
      }

      function WI(e, t) {
        const n = new LI;
        return n.key = e, t && mj(n, t), n
      }

      function $I(e, t, n) {
        t.keys && pN(t.keys, r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        })
      }

      function ZI(e, t) {
        pN(t, t => {
          $I(e.springs, t, t => WI(t, e))
        })
      }
      var YI = M.createContext({
          pause: !1,
          immediate: !1
        }),
        QI = () => {
          const e = [],
            t = function(t) {
              jj(`${Oj}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const r = [];
              return pN(e, (e, o) => {
                if (fN.und(t)) r.push(e.start());
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
            return pN(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return pN(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            pN(e, (e, n) => {
              const r = fN.fun(t) ? t(n, e) : t;
              r && e.set(r)
            })
          }, t.start = function(t) {
            const n = [];
            return pN(e, (e, r) => {
              if (fN.und(t)) n.push(e.start());
              else {
                const o = this._getProps(t, e, r);
                o && n.push(e.start(o))
              }
            }), n
          }, t.stop = function() {
            return pN(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return pN(e, (e, n) => e.update(this._getProps(t, e, n))), this
          };
          const n = function(e, t, n) {
            return fN.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        },
        JI = () => QI(),
        ek = () => (0, M.useState)(JI)[0];

      function tk(e, t, n) {
        const r = fN.fun(t) && t,
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
          f = (0, M.useMemo)(() => r || 3 == arguments.length ? QI() : void 0, []),
          h = vN(e),
          p = [],
          m = (0, M.useRef)(null),
          v = o ? null : m.current;
        kj(() => {
          m.current = p
        }), Lj(() => (pN(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          pN(m.current, e => {
            e.expired && clearTimeout(e.expirationId), uI(e.ctrl, f), e.ctrl.stop(!0)
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
                return n ? (t.add(n), n.key) : nk++
              })
            }
            return fN.und(n) ? e : fN.fun(n) ? e.map(n) : vN(n)
          }(h, r ? r() : t, v),
          g = o && m.current || [];
        kj(() => pN(g, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          uI(e, f), Jj(c, t, n)
        }));
        const b = [];
        if (v && pN(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), pN(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new qI
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: n
          } = r ? r() : t;
          pN(b, (t, r) => {
            const o = v[r];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : n && p.splice(++e, 0, o)
          })
        }
        fN.fun(i) && p.sort((e, t) => i(e.item, t.item));
        let w = -s;
        const _ = Aj(),
          E = oI(t),
          x = new Map,
          P = (0, M.useRef)(new Map),
          C = (0, M.useRef)(!1);
        pN(p, (e, n) => {
          const o = e.key,
            i = e.phase,
            c = r ? r() : t;
          let f, h;
          const p = Jj(c.delay || 0, o);
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
          if (f = Jj(f, e.item, n), f = fN.obj(f) ? aI(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = Jj(t, e.item, n, h)
          }
          w += s;
          const g = {
            ...E,
            delay: p + w,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && fN.und(g.from)) {
            const o = r ? r() : t,
              i = fN.und(o.initial) || v ? o.from : o.initial;
            g.from = Jj(i, e.item, n)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Jj(b, e);
            const t = m.current,
              n = t.find(e => e.key === o);
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == n.phase) {
                const t = Jj(a, n.item);
                if (!1 !== t) {
                  const r = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(_, r)))
                }
              }
              e && t.some(e => e.expired) && (P.current.delete(n), l && (C.current = !0), _())
            }
          };
          const S = XI(e.ctrl, g);
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
        const S = (0, M.useContext)(YI),
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
        kj(() => {
          O && pN(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), pN(x, (e, t) => {
          if (P.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), kj(() => {
          pN(P.current.size ? P.current : x, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: r
            } = n;
            n.phase = e, f?.add(r), O && "enter" == e && r.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(r, t.ref), !r.ref && !f || C.current ? (r.start(t), C.current && (C.current = !1)) : r.update(t))
          })
        }, o ? void 0 : n);
        const R = e => M.createElement(M.Fragment, null, p.map((t, n) => {
          const {
            springs: r
          } = x.get(t) || t.ctrl, o = e({
            ...r
          }, t.item, t, n), i = fN.str(t.key) || fN.num(t.key) ? t.key : t.ctrl.id, s = M.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? M.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var nk = 1,
        rk = class extends OI {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = JN(...t);
            const n = this._get(),
              r = Wj(n);
            Bj(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            hN(t, this.get()) || (Hj(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ik(this._active) && sk(this)
          }
          _get() {
            const e = fN.arr(this.source) ? this.source.map(uj) : vN(uj(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ik(this._active) && (this.idle = !1, pN(zj(this), e => {
              e.done = !1
            }), uN.skipAnimation ? (KR.batchedUpdates(() => this.advance()), sk(this)) : NN.start(this))
          }
          _attach() {
            let e = 1;
            pN(vN(this.source), t => {
              cj(t) && mj(t, this), SI(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            pN(vN(this.source), e => {
              cj(e) && vj(e, this)
            }), this._active.clear(), sk(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = vN(this.source).reduce((e, t) => Math.max(e, (SI(t) ? t.priority : 0) + 1), 0))
          }
        };

      function ok(e) {
        return !1 !== e.idle
      }

      function ik(e) {
        return !e.size || Array.from(e).every(ok)
      }

      function sk(e) {
        e.idle || (e.idle = !0, pN(zj(e), e => {
          e.done = !0
        }), fj(e, {
          type: "idle",
          parent: e
        }))
      }
      uN.assign({
        createStringInterpolator: Tj,
        to: (e, t) => new rk(e, t)
      }), NN.advance;
      var ak = /^--/;

      function lk(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ak.test(e) || uk.hasOwnProperty(e) && uk[e] ? ("" + t).trim() : t + "px"
      }
      var ck = {},
        uk = {
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
        dk = ["Webkit", "Ms", "Moz", "O"];
      uk = Object.keys(uk).reduce((e, t) => (dk.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), uk);
      var fk = /^(matrix|translate|scale|rotate|skew)/,
        hk = /^(translate)/,
        pk = /^(rotate|skew)/,
        mk = (e, t) => fN.num(e) && 0 !== e ? e + t : e,
        vk = (e, t) => fN.arr(e) ? e.every(e => vk(e, t)) : fN.num(e) ? e === t : parseFloat(e) === t,
        yk = class extends qj {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>mk(e,"px")).join(",")})`, vk(e, 0)])), mN(r, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (fk.test(t)) {
                if (delete r[t], fN.und(e)) return;
                const n = hk.test(t) ? "px" : pk.test(t) ? "deg" : "";
                o.push(vN(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${mk(o,n)})`, vk(o, 0)] : e => [`${t}(${e.map(e=>mk(e,n)).join(",")})`, vk(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (r.transform = new gk(o, i)), super(r)
          }
        },
        gk = class extends hj {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return pN(this.inputs, (n, r) => {
              const o = uj(n[0]),
                [i, s] = this.transforms[r](fN.arr(o) ? o : n.map(uj));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && pN(this.inputs, e => pN(e, e => cj(e) && mj(e, this)))
          }
          observerRemoved(e) {
            0 == e && pN(this.inputs, e => pN(e, e => cj(e) && vj(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), fj(this, e)
          }
        };
      uN.assign({
        batchedUpdates: vt.unstable_batchedUpdates,
        createStringInterpolator: Tj,
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
      var bk = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new qj(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = Qj(e) || "Anonymous";
              return (e = fN.str(e) ? i[e] || (i[e] = $j(e, o)) : e[Yj] || (e[Yj] = $j(e, o))).displayName = `Animated(${t})`, e
            };
          return mN(e, (t, n) => {
            fN.arr(e) && (n = Qj(t)), i[n] = i(t)
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
              d = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : ck[t] || (ck[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = lk(t, o[t]);
                ak.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              e.setAttribute(t, u[n])
            }), void 0 !== r && (e.className = r), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new yk(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        wk = bk.animated,
        _k = "Dialog",
        [Ek, xk] = (0, nh.A)(_k),
        [Pk, Ck] = Ek(_k),
        Sk = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = M.useRef(null), l = M.useRef(null), [c, u] = (0, jm.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: i,
            caller: _k
          });
          return (0, w.jsx)(Pk, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, ph.B)(),
            titleId: (0, ph.B)(),
            descriptionId: (0, ph.B)(),
            open: c,
            onOpenChange: u,
            onOpenToggle: M.useCallback(() => u(e => !e), [u]),
            modal: s,
            children: n
          })
        };
      Sk.displayName = _k;
      var Tk = "DialogTrigger",
        Ok = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ck(Tk, n), i = (0, th.s)(t, o.triggerRef);
          return (0, w.jsx)(rh.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Xk(o.open),
            ...r,
            ref: i,
            onClick: Jf(e.onClick, o.onOpenToggle)
          })
        });
      Ok.displayName = Tk;
      var Rk = "DialogPortal",
        [Nk, jk] = Ek(Rk, {
          forceMount: void 0
        }),
        Ik = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, i = Ck(Rk, t);
          return (0, w.jsx)(Nk, {
            scope: t,
            forceMount: n,
            children: M.Children.map(r, e => (0, w.jsx)(Rm, {
              present: n || i.open,
              children: (0, w.jsx)(Om, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      Ik.displayName = Rk;
      var kk = "DialogOverlay",
        Ak = M.forwardRef((e, t) => {
          const n = jk(kk, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ck(kk, e.__scopeDialog);
          return i.modal ? (0, w.jsx)(Rm, {
            present: r || i.open,
            children: (0, w.jsx)(Dk, {
              ...o,
              ref: t
            })
          }) : null
        });
      Ak.displayName = kk;
      var Lk = (0, $t.TL)("DialogOverlay.RemoveScroll"),
        Dk = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ck(kk, n);
          return (0, w.jsx)(Oy.A, {
            as: Lk,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, w.jsx)(rh.sG.div, {
              "data-state": Xk(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        Mk = "DialogContent",
        Hk = M.forwardRef((e, t) => {
          const n = jk(Mk, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            i = Ck(Mk, e.__scopeDialog);
          return (0, w.jsx)(Rm, {
            present: r || i.open,
            children: i.modal ? (0, w.jsx)(Bk, {
              ...o,
              ref: t
            }) : (0, w.jsx)(zk, {
              ...o,
              ref: t
            })
          })
        });
      Hk.displayName = Mk;
      var Bk = M.forwardRef((e, t) => {
          const n = Ck(Mk, e.__scopeDialog),
            r = M.useRef(null),
            o = (0, th.s)(t, n.contentRef, r);
          return M.useEffect(() => {
            const e = r.current;
            if (e) return (0, Ry.Eq)(e)
          }, []), (0, w.jsx)(Fk, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Jf(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: Jf(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: Jf(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        zk = M.forwardRef((e, t) => {
          const n = Ck(Mk, e.__scopeDialog),
            r = M.useRef(!1),
            o = M.useRef(!1);
          return (0, w.jsx)(Fk, {
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
        Fk = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = Ck(Mk, n), l = M.useRef(null), c = (0, th.s)(t, l);
          return Vw(), (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)(Xw, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, w.jsx)(lh, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Xk(a.open),
                ...s,
                ref: c,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, w.jsxs)(w.Fragment, {
              children: [(0, w.jsx)(Yk, {
                titleId: a.titleId
              }), (0, w.jsx)(Qk, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        Vk = "DialogTitle",
        Uk = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ck(Vk, n);
          return (0, w.jsx)(rh.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      Uk.displayName = Vk;
      var Gk = "DialogDescription",
        qk = M.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Ck(Gk, n);
          return (0, w.jsx)(rh.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      qk.displayName = Gk;
      var Kk = "DialogClose";

      function Xk(e) {
        return e ? "open" : "closed"
      }
      M.forwardRef((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = Ck(Kk, n);
        return (0, w.jsx)(rh.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Jf(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = Kk;
      var Wk = "DialogTitleWarning",
        [$k, Zk] = (0, nh.q)(Wk, {
          contentName: Mk,
          titleName: Vk,
          docsSlug: "dialog"
        }),
        Yk = ({
          titleId: e
        }) => {
          const t = Zk(Wk),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return M.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        Qk = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zk("DialogDescriptionWarning").contentName}}.`;
          return M.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        Jk = Sk,
        eA = Ok,
        tA = Ik,
        nA = Ak,
        rA = Hk,
        oA = Uk,
        iA = qk;
      const sA = "undefined" == typeof window,
        aA = new Map;

      function lA(e, t) {
        if (e === t) return e;
        const n = aA.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = aA.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function cA(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function uA(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = cA(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = lA(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, ue.clsx)(n, o)
          }
        }
        return t
      }
      var dA;

      function fA(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => sA || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, M.useState)(() => n ? r(e) : t);

        function s() {
          i(r(e))
        }
        return (0, M.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }, [e]), o
      }

      function hA(...e) {
        const t = (0, M.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(dA || (dA = {})), Symbol.toStringTag;
      const pA = () => fA("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function mA(e) {
        const t = (0, M.useRef)(e);
        return (0, M.useEffect)(() => {
          t.current = e
        }), (0, M.useMemo)(() => (...e) => t.current?.(...e), [])
      }
      const vA = () => {
          const e = fA("(min-width: 0px) and (max-width: 767px)");
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        yA = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function gA({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: n,
        onCloseTransitionStart: r,
        onCloseTransitionComplete: o
      }) {
        const i = yA(),
          s = vA(),
          a = (0, M.useRef)(),
          l = (To(Oo), Go({
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
                config: dI.stiff,
                onStart: r,
                onRest: o
              }), n.start({
                ...i(0),
                immediate: !1,
                config: dI.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: dI.stiff
              }), n.start({
                ...i(100),
                immediate: !1,
                config: dI.stiff
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

      function bA(e) {
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

      function wA(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function _A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wA(Object(n), !0).forEach(function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = bA(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wA(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function EA(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var xA = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        PA = "foundry_8kowh41",
        CA = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = _A(_A({}, e.defaultVariants), t);
            for (var o in r) {
              var i, s = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) xA(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return EA(e.variantClassNames, e => EA(e, e => e.split(" ")[0]))
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
      const SA = (0, M.createContext)(null);

      function TA() {
        const e = (0, M.useContext)(SA);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const OA = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: n,
          onOpenChange: r,
          isOpen: o,
          onOpenTransitionStart: i,
          onOpenTransitionComplete: s,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: l,
          ...c
        }, u) => {
          const d = uA({
              "data-testid": t
            }, c),
            [f, h] = function({
              prop: e,
              defaultProp: t,
              onChange: n = () => {}
            }) {
              const [r, o] = function({
                defaultProp: e,
                onChange: t
              }) {
                const n = (0, M.useState)(e),
                  [r] = n,
                  o = (0, M.useRef)(r),
                  i = mA(t);
                return (0, M.useEffect)(() => {
                  o.current !== r && (i(r), o.current = r)
                }, [r, o, i]), n
              }({
                defaultProp: t,
                onChange: n
              }), i = void 0 !== e, s = i ? e : r, a = mA(n), l = (0, M.useCallback)(t => {
                if (i) {
                  const n = "function" == typeof t ? t(e) : t;
                  n !== e && a(n)
                } else o(t)
              }, [i, e, o, a]);
              return [s, l]
            }({
              prop: o,
              defaultProp: n ?? !1,
              onChange: r
            }),
            p = function(e) {
              const t = (0, M.useRef)({
                  value: e,
                  prev: void 0
                }),
                n = t.current.value;
              return e !== n && (t.current = {
                value: e,
                prev: n
              }), t.current.prev
            }(f);
          return (0, w.jsx)(SA.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== o,
              openImmediately: !(void 0 !== p || !n),
              setIsOpen: h,
              onOpenTransitionStart: i,
              onOpenTransitionComplete: s,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: l,
              contentId: (0, M.useId)(),
              descriptionId: (0, M.useId)(),
              triggerRef: (0, M.useRef)(null),
              dialogSpringRef: ek(),
              overlaySpringRef: ek()
            },
            children: (0, w.jsx)(Jk, {
              ref: u,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        }),
        RA = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const {
            isOpen: o,
            overlaySpringRef: i,
            openImmediately: s
          } = TA(), a = yA(), l = pA(), c = tk(o, {
            ref: i,
            delay: o ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: dI.stiff,
            immediate: l || s
          }), u = uA({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, n), d = wk(nA);
          return (0, M.useEffect)(() => {
            i.start()
          }, [o]), c((t, n) => n ? (0, w.jsx)(d, {
            forceMount: !0,
            ref: r,
            ...u,
            style: t,
            children: e
          }) : null)
        }),
        NA = (0, M.forwardRef)(({
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
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = TA(), y = function(e = !0) {
            const t = fA("screen and (pointer: coarse) and (hover: none)");
            return !!e && t
          }(), g = pA(), b = (0, M.useRef)(null), _ = vA(), {
            bindDrag: E
          } = gA({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              a(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), x = tk(s, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: s ? 100 : 0,
            config: dI.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, n) => {
              n ? d?.() : h?.()
            },
            onRest: (e, t, n) => {
              n ? f?.() : p?.()
            }
          });
          (0, M.useEffect)(() => {
            m.start()
          }, [s]);
          const P = hA(b, i),
            C = uA({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                n?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, y && !g && !r && E() || {}, o),
            S = wk(rA);
          return x((t, n) => n ? (0, w.jsx)(S, {
            forceMount: !0,
            ref: P,
            ...C,
            style: t,
            children: e
          }) : null)
        }),
        jA = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = uA({
            "data-testid": t
          }, n);
          return (0, w.jsx)(tA, {
            forceMount: !0,
            ref: r,
            ...o,
            children: e
          })
        }),
        IA = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = uA({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, n);
          return (0, w.jsx)(oA, {
            ref: r,
            ...o,
            children: e
          })
        }),
        kA = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = uA({
            "data-testid": t
          }, n);
          return (0, w.jsx)(iA, {
            ref: r,
            ...o,
            children: e
          })
        }),
        AA = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...n
        }, r) => {
          const o = uA({
            className: "foundry_xov33nd",
            "data-testid": t
          }, n);
          return (0, w.jsxs)(Mw, {
            ref: r,
            ...o,
            children: [(0, w.jsx)(Hw, {
              className: "foundry_xov33ne",
              children: e
            }), (0, w.jsx)(Bw, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, w.jsx)(zw, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        LA = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = uA({
              "data-testid": n,
              className: "foundry_xov33n2"
            }, r),
            s = e ? $t.DX : "div";
          return (0, w.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        DA = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = uA({
              "data-testid": n,
              className: "foundry_xov33n3"
            }, r),
            s = e ? $t.DX : "div";
          return (0, w.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        MA = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = uA({
              "data-testid": n,
              className: "foundry_xov33n8"
            }, r),
            s = e ? $t.DX : "header";
          return (0, w.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        HA = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const i = uA({
              "data-testid": n,
              className: "foundry_xov33nc"
            }, r),
            s = e ? $t.DX : "footer";
          return (0, w.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        BA = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: n,
          align: r,
          ...o
        }, i) => {
          const s = uA({
              "data-testid": n,
              className: CA({
                align: r
              })
            }, o),
            a = e ? $t.DX : oA;
          return (0, w.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        zA = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: n,
          ...r
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = TA(), a = uA({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? n?.(e), !i && s(!1)
            }
          }, r);
          return (0, w.jsx)(Bn, {
            ref: o,
            ...a,
            appearance: "ghost",
            icon: "X",
            size: "MD",
            children: e
          })
        }),
        FA = (0, M.forwardRef)((e, t) => {
          const n = uA({
            className: "foundry_xov33n5"
          }, e);
          return (0, w.jsx)(Bn, {
            ref: t,
            ...n,
            appearance: "ghost",
            size: "SM"
          })
        }),
        VA = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: n,
          ...r
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = TA(), a = uA({
            className: PA,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? n?.(e), !i && s(!1)
            }
          }, r);
          return (0, w.jsx)(Cn, {
            ref: o,
            ...a,
            children: e
          })
        }),
        UA = (0, M.forwardRef)(({
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
          } = TA(), d = hA(u, i), f = uA({
            className: PA,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              n?.(e) ?? r?.(e), !s && a(!0)
            }
          }, o), h = e ? $t.DX : eA;
          return (0, w.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        })
    },
    16859: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        s = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        g = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;

      function _(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
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
        return _(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function(e) {
        return E(e) || _(e) === u
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return _(e) === c
      }, t.isContextProvider = function(e) {
        return _(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return _(e) === f
      }, t.isFragment = function(e) {
        return _(e) === i
      }, t.isLazy = function(e) {
        return _(e) === v
      }, t.isMemo = function(e) {
        return _(e) === m
      }, t.isPortal = function(e) {
        return _(e) === o
      }, t.isProfiler = function(e) {
        return _(e) === a
      }, t.isStrictMode = function(e) {
        return _(e) === s
      }, t.isSuspense = function(e) {
        return _(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === a || e === s || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
      }, t.typeOf = _
    },
    17532: (e, t, n) => {
      n.d(t, {
        v6: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
      var l;
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag
    },
    17695: (e, t, n) => {},
    24244: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    32884: (e, t, n) => {
      n.d(t, {
        v6: () => o.v
      }), n(17695);
      var r, o = n(96277);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    33834: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    35205: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    35255: (e, t, n) => {
      var r = n(88335),
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
        return r.isMemo(e) ? s : a[e.$$typeof] || o
      }
      a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[r.Memo] = s;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && e(t, o, r)
          }
          var s = u(n);
          d && (s = s.concat(d(n)));
          for (var a = l(t), m = l(n), v = 0; v < s.length; ++v) {
            var y = s[v];
            if (!(i[y] || r && r[y] || m && m[y] || a && a[y])) {
              var g = f(n, y);
              try {
                c(t, y, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    38476: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    39725: (e, t, n) => {
      n.d(t, {
        VW: () => i,
        v6: () => o.v
      }), n(60893);
      var r, o = n(42131);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag;
      const i = (...e) => e.filter(e => e).join(" ")
    },
    42131: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    43607: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    43778: (e, t, n) => {},
    48942: (e, t, n) => {
      n.d(t, {
        v6: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
      var l;
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag
    },
    53985: (e, t, n) => {
      n.d(t, {
        v6: () => o.v
      }), n(77680);
      var r, o = n(33834);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    55311: (e, t, n) => {},
    60893: (e, t, n) => {},
    68138: (e, t, n) => {},
    70073: (e, t, n) => {
      n.d(t, {
        v6: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
      var l;
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(l || (l = {})), Symbol.toStringTag
    },
    71753: (e, t, n) => {
      n.d(t, {
        b: () => a
      });
      var r = n(62229),
        o = n(69055),
        i = n(42295),
        s = ({
          children: e,
          label: t
        }) => {
          const n = r.Children.only(e);
          return (0, i.jsxs)(i.Fragment, {
            children: [r.cloneElement(n, {
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
    72580: (e, t, n) => {
      n.d(t, {
        v6: () => o.v
      }), n(55311);
      var r, o = n(35205);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    77680: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    79465: e => {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === n
            }(e)
          }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function r(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? a((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
        var n
      }

      function o(e, t, n) {
        return e.concat(t).map(function(e) {
          return r(e, n)
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

      function a(e, n, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = r;
        var c = Array.isArray(n);
        return c === Array.isArray(e) ? c ? l.arrayMerge(e, n, l) : function(e, t, n) {
          var o = {};
          return n.isMergeableObject(e) && i(e).forEach(function(t) {
            o[t] = r(e[t], n)
          }), i(t).forEach(function(i) {
            (function(e, t) {
              return s(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, i) || (s(e, i) && n.isMergeableObject(t[i]) ? o[i] = function(e, t) {
              if (!t.customMerge) return a;
              var n = t.customMerge(e);
              return "function" == typeof n ? n : a
            }(i, n)(e[i], t[i], n) : o[i] = r(t[i], n))
          }), o
        }(e, n, l) : r(n, l)
      }
      a.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, n) {
          return a(e, n, t)
        }, {})
      };
      var l = a;
      e.exports = l
    },
    82543: (e, t, n) => {
      n.d(t, {
        v6: () => o.v
      }), n(68138);
      var r, o = n(38476);
      n(98312), n(41972), n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    88335: (e, t, n) => {
      e.exports = n(16859)
    },
    90744: (e, t, n) => {
      n.d(t, {
        VW: () => a,
        v6: () => r.v,
        cJ: () => s
      }), n(43778);
      var r = n(24244);
      n(98312);
      var o, i = n(41972);

      function s(e, ...t) {
        return i(e, ...t)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag;
      const a = (...e) => e.filter(e => e).join(" ")
    },
    96277: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    }
  }
]);