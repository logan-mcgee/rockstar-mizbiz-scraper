try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "92e5d1a4-1a03-4d51-9679-c71826a3fd06", e._sentryDebugIdIdentifier = "sentry-dbid-92e5d1a4-1a03-4d51-9679-c71826a3fd06")
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
  [2649, 4956], {
    42649: e => {
      var t, r, n = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          r = i
        }
      }();
      var a, l = [],
        u = !1,
        c = -1;

      function d() {
        u && a && (u = !1, a.length ? l = a.concat(l) : c = -1, l.length && f())
      }

      function f() {
        if (!u) {
          var e = s(d);
          u = !0;
          for (var t = l.length; t;) {
            for (a = l, l = []; ++c < t;) a && a[c].run();
            c = -1, t = l.length
          }
          a = null, u = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new h(e, t)), 1 !== l.length || u || s(f)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    46436: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Badge: () => g,
        Body: () => wn,
        Breadcrumbs: () => y,
        Button: () => Hr,
        Checkbox: () => l,
        Code: () => Pn,
        Dialog: () => b,
        Display: () => xn,
        Divider: () => tn,
        Dropdown: () => i,
        Heading: () => Sn,
        IconButton: () => Wr,
        Label: () => On,
        Lightbox: () => o,
        Loader: () => hn,
        RadioGroup: () => d,
        Spinner: () => Sr,
        Switch: () => s,
        Tag: () => m,
        Text: () => kn,
        TextArea: () => u,
        TextField: () => f,
        TextSemantics: () => jn,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Yp,
        Content: () => $p,
        Portal: () => Qp,
        Root: () => Wp,
        Trigger: () => Zp,
        useTooltipContext: () => Xp
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Zm,
        Close: () => ev,
        Content: () => Gm,
        Controls: () => $m,
        CssVars: () => nv,
        Download: () => rv,
        Image: () => Wm,
        Keyboard: () => Qm,
        LightboxContext: () => Dm,
        OpenIcon: () => Vm,
        Overlay: () => Um,
        Portal: () => Fm,
        Reset: () => tv,
        Root: () => Am,
        RootImplContext: () => Mm,
        Thumbnail: () => zm,
        Trigger: () => Bm,
        Zoom: () => Jm,
        ZoomPan: () => qm
      });
      var i = {};
      r.r(i), r.d(i, {
        Content: () => kb,
        Description: () => Mb,
        Hint: () => Hb,
        Label: () => Ab,
        Option: () => Bb,
        OptionIcon: () => Vb,
        OptionText: () => zb,
        Portal: () => Fb,
        Root: () => jb,
        ScrollArea: () => Ib,
        StatusIcon: () => Gb,
        StatusRoot: () => Ub,
        StatusText: () => qb,
        Trigger: () => Nb,
        TriggerIcon: () => Db,
        TriggerText: () => Lb,
        useDropdownContext: () => Rb
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => f_,
        Input: () => c_,
        Label: () => d_,
        Root: () => u_,
        useSwitchContext: () => l_
      });
      var a = {};
      r.r(a), r.d(a, {
        CheckLG: () => C_,
        CheckMD: () => x_,
        CheckXL: () => S_,
        DashLG: () => O_,
        DashMD: () => T_,
        DashXL: () => R_
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => q_,
        ErrorText: () => K_,
        Input: () => U_,
        Label: () => G_,
        Root: () => F_
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => lw,
        Hint: () => uw,
        Input: () => aw,
        Label: () => sw,
        Root: () => iw,
        RootContext: () => nw,
        StatusIcon: () => dw,
        StatusRoot: () => cw,
        StatusText: () => fw,
        useTextAreaContext: () => ow
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => eE,
        DotMD: () => Jw,
        DotXL: () => tE
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => qw,
        Input: () => nE,
        Label: () => Gw,
        Option: () => rE,
        OptionDescription: () => iE,
        OptionLabel: () => oE,
        Options: () => Uw,
        Root: () => Fw,
        StatusIcon: () => Xw,
        StatusRoot: () => Kw,
        StatusText: () => Ww,
        useRadioGroupContext: () => Vw
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => sP,
        Control: () => nP,
        Description: () => lP,
        Hint: () => rP,
        Icon: () => iP,
        Input: () => oP,
        Label: () => tP,
        PasswordButton: () => aP,
        Root: () => eP,
        StatusIcon: () => cP,
        StatusRoot: () => uP,
        StatusText: () => dP
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => NP,
        CloseButton: () => VP,
        Description: () => MP,
        ErrorText: () => zP,
        Footer: () => BP,
        Header: () => IP,
        Icon: () => DP,
        Link: () => HP,
        Root: () => kP,
        RootContext: () => RP,
        Title: () => AP,
        iconStatusMap: () => LP,
        useAlertContext: () => jP
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => Fx,
        CloseButton: () => qx,
        Description: () => Vx,
        Icon: () => zx,
        Link: () => Gx,
        PaginationCounter: () => Zx,
        PaginationNav: () => Kx,
        PaginationNextButton: () => Xx,
        PaginationPrevButton: () => Wx,
        PaginationViewport: () => Ux,
        Root: () => Hx,
        RootContext: () => Ax,
        iconStatusMap: () => Bx,
        useAlertBannerContext: () => Mx
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => cC,
        Icon: () => uC,
        Label: () => lC,
        Root: () => aC,
        RootContext: () => iC,
        useTagContext: () => sC
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => hS,
        CloseButton: () => pS,
        Description: () => cS,
        Icon: () => fS,
        Provider: () => iS,
        Root: () => uS,
        RootContext: () => aS,
        Viewport: () => sS,
        iconAppearanceMap: () => dS,
        useToastContext: () => lS
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => OS,
        Item: () => TS,
        OverflowMenu: () => RS,
        OverflowMenuItem: () => jS,
        Root: () => SS,
        RootContext: () => CS,
        useBreadcrumbsContext: () => xS
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => BS,
        Label: () => HS,
        Root: () => MS
      });
      var b = {};
      r.r(b), r.d(b, {
        ActionArea: () => wk,
        Button: () => Tk,
        CloseButton: () => Ck,
        Content: () => mk,
        Description: () => gk,
        Footer: () => Pk,
        Header: () => Ek,
        HeaderButton: () => Sk,
        HeaderTitle: () => xk,
        Layout: () => _k,
        Overlay: () => pk,
        Portal: () => vk,
        Root: () => hk,
        ScrollArea: () => bk,
        Title: () => yk,
        Trigger: () => Ok,
        useDialogContext: () => fk
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
      var P = E;

      function x(e) {
        if ("string" != typeof e) throw new P(e);
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
          if (!r) throw new P(e);
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
        const o = j.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const i = k.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (w(0, 100, r) !== r) throw new P(e);
          if (w(0, 100, n) !== n) throw new P(e);
          return [...L(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new P(e)
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
        j = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${T(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        k = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        I = /^[a-z]+$/i,
        N = e => Math.round(255 * e),
        L = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(N);
          const o = (e % 360 + 360) % 360 / 60,
            i = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = i * (1 - Math.abs(o % 2 - 1));
          let a = 0,
            l = 0,
            u = 0;
          o >= 0 && o < 1 ? (a = i, l = s) : o >= 1 && o < 2 ? (a = s, l = i) : o >= 2 && o < 3 ? (l = i, u = s) : o >= 3 && o < 4 ? (l = s, u = i) : o >= 4 && o < 5 ? (a = s, u = i) : o >= 5 && o < 6 && (a = i, u = s);
          const c = n - i / 2;
          return [a + c, l + c, u + c].map(N)
        };

      function D(e, t) {
        const [r, n, o, i] = function(e) {
          const [t, r, n, o] = x(e).map((e, t) => 3 === t ? e : e / 255), i = Math.max(t, r, n), s = Math.min(t, r, n), a = (i + s) / 2;
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
        H = r.n(M),
        B = r(93715),
        z = r(57461),
        V = r(75523);
      const F = {
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
          (0, M.useEffect)(() => {
            if (!e.current || !i || !u) return;
            const c = `${i}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, V.IO)(c, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = x(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(i);
                return {
                  text: l || (e > t ? B.LU.global.color.black.static[100] : B.LU.global.color.white.static[100]),
                  hover: s || (e >= r ? D(i, n) : A(i, n)),
                  pressed: a || (e >= r ? D(i, o) : A(i, o))
                }
              });
            return e.current.style.setProperty(F.enabled.background, i), e.current.style.setProperty(F.enabled.border, i), e.current.style.setProperty(F.enabled.text, d), e.current.style.setProperty(F.hover.background, f), e.current.style.setProperty(F.hover.border, f), e.current.style.setProperty(F.hover.text, d), e.current.style.setProperty(F.focus.background, f), e.current.style.setProperty(F.focus.border, f), e.current.style.setProperty(F.focus.text, d), e.current.style.setProperty(F.pressed.background, h), e.current.style.setProperty(F.pressed.border, h), e.current.style.setProperty(F.pressed.text, d), e.current.style.setProperty(F.loading.background, f), e.current.style.setProperty(F.loading.border, f), e.current.style.setProperty(F.loading.text, d), () => {
              e.current?.style.removeProperty(F.enabled.background), e.current?.style.removeProperty(F.enabled.border), e.current?.style.removeProperty(F.enabled.text), e.current?.style.removeProperty(F.hover.background), e.current?.style.removeProperty(F.hover.border), e.current?.style.removeProperty(F.hover.text), e.current?.style.removeProperty(F.focus.background), e.current?.style.removeProperty(F.focus.border), e.current?.style.removeProperty(F.focus.text), e.current?.style.removeProperty(F.pressed.background), e.current?.style.removeProperty(F.pressed.border), e.current?.style.removeProperty(F.pressed.text), e.current?.style.removeProperty(F.loading.background), e.current?.style.removeProperty(F.loading.border), e.current?.style.removeProperty(F.loading.text)
            }
          }, [e.current, t, r, n, o, i, s, a, l, u, ...c])
        };
      var G = r(60211);

      function q(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => G.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, M.useState)(() => r ? n(e) : t);

        function s() {
          i(n(e))
        }
        return (0, M.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }, [e]), o
      }

      function K(e) {
        const t = (0, M.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function X(...e) {
        const t = (0, M.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const W = () => q("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function Z(e) {
        const t = (0, M.useRef)(e);
        return (0, M.useEffect)(() => {
          t.current = e
        }), (0, M.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function $({
        prop: e,
        defaultProp: t,
        onChange: r = () => {}
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, M.useState)(e),
            [n] = r,
            o = (0, M.useRef)(n),
            i = Z(t);
          return (0, M.useEffect)(() => {
            o.current !== n && (i(n), o.current = n)
          }, [n, o, i]), r
        }({
          defaultProp: t,
          onChange: r
        }), i = void 0 !== e, s = i ? e : n, a = Z(r), l = (0, M.useCallback)(t => {
          if (i) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && a(r)
          } else o(t)
        }, [i, e, o, a]);
        return [s, l]
      }

      function Y(e, t, r, n) {
        const o = (0, M.useRef)(t);
        (0, M.useEffect)(() => {
          o.current = t
        }, [t]), (0, M.useEffect)(() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, n), () => {
            t.removeEventListener(e, i, n)
          }
        }, [e, r?.current, n])
      }

      function Q(e = !0) {
        const t = q("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }

      function J(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const ee = "undefined" != typeof document ? M.useLayoutEffect : () => {};
      var te;
      const re = null !== (te = M.useInsertionEffect) && void 0 !== te ? te : ee;

      function ne(e) {
        const t = (0, M.useRef)(null);
        return re(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }
      const oe = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ie = M.createContext(oe),
        se = M.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let ae = new WeakMap;
      const le = "function" == typeof M.useId ? function(e) {
        let t = M.useId(),
          [r] = (0, M.useState)(fe());
        return e || `${r?"react-aria":`react-aria${oe.prefix}`}-${t}`
      } : function(e) {
        let t = (0, M.useContext)(ie),
          r = function(e = !1) {
            let t = (0, M.useContext)(ie),
              r = (0, M.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = ae.get(e);
                null == r ? ae.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, ae.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function ue() {
        return !1
      }

      function ce() {
        return !0
      }

      function de(e) {
        return () => {}
      }

      function fe() {
        return "function" == typeof M.useSyncExternalStore ? M.useSyncExternalStore(de, ue, ce) : (0, M.useContext)(se)
      }
      let he, pe = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        me = new Map;

      function ve(e) {
        let [t, r] = (0, M.useState)(e), n = (0, M.useRef)(null), o = le(t), i = (0, M.useRef)(null);
        if (he && he.register(i, o), pe) {
          const e = me.get(o);
          e && !e.includes(n) ? e.push(n) : me.set(o, [n])
        }
        return ee(() => {
          let e = o;
          return () => {
            he && he.unregister(i), me.delete(e)
          }
        }, [o]), (0, M.useEffect)(() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        }), o
      }

      function ye(e, t) {
        if (e === t) return e;
        let r = me.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = me.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function ge(e = []) {
        let t = ve(),
          [r, n] = function(e) {
            let [t, r] = (0, M.useState)(e), n = (0, M.useRef)(null), o = ne(() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            });
            ee(() => {
              n.current && o()
            });
            let i = ne(e => {
              n.current = e(t), o()
            });
            return [t, i]
          }(t),
          o = (0, M.useCallback)(() => {
            n(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, n]);
        return ee(o, [t, o, ...e]), r
      }
      "undefined" != typeof FinalizationRegistry && (he = new FinalizationRegistry(e => {
        me.delete(e)
      }));
      var be = r(4572);

      function _e(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = J(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = ye(r, o) : t[e] = void 0 !== o ? o : r : t[e] = be(r, o)
          }
        }
        return t
      }
      const we = new Set(["id"]),
        Ee = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Pe = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        xe = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        Ce = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        Se = /^(data-.*)$/;

      function Te(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          global: o,
          events: i = o,
          propNames: s
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (we.has(t) || r && Ee.has(t) || n && Pe.has(t) || o && xe.has(t) || i && Ce.has(t) || t.endsWith("Capture") && Ce.has(t.slice(0, -7)) || (null == s ? void 0 : s.has(t)) || Se.test(t)) && (a[t] = e[t]);
        return a
      }
      const Oe = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Re = e => e && "window" in e && e.window === e ? e : Oe(e).defaultView || window;
      const je = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function ke(e, t) {
        return je ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = Re(e);
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
        }(e, t) && (!e.parentElement || ke(e.parentElement, e))
      }
      const Ie = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        Ne = Ie.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Ie.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Le = Ie.join(':not([hidden]):not([tabindex="-1"]),');

      function De(e) {
        return e.matches(Ne) && ke(e) && !Me(e)
      }

      function Ae(e) {
        return e.matches(Le) && ke(e) && !Me(e)
      }

      function Me(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function He(e) {
        if (function() {
            if (null == Be) {
              Be = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Be = !0, !0
                  }
                })
              } catch {}
            }
            return Be
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
      let Be = null;

      function ze(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Ve(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Fe(e) {
        let t = (0, M.useRef)({
          isFocused: !1,
          observer: null
        });
        ee(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []);
        let r = ne(t => {
          null == e || e(t)
        });
        return (0, M.useCallback)(e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = ze(e);
                  r(t)
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
        }, [r])
      }
      let Ue = !1;

      function Ge(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function qe(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ke(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Xe = Ke(function() {
          return qe(/^Mac/i)
        }),
        We = Ke(function() {
          return qe(/^iPhone/i)
        }),
        Ze = Ke(function() {
          return qe(/^iPad/i) || Xe() && navigator.maxTouchPoints > 1
        }),
        $e = Ke(function() {
          return We() || Ze()
        }),
        Ye = (Ke(function() {
          return Xe() || $e()
        }), Ke(function() {
          return Ge(/AppleWebKit/i) && !Qe()
        })),
        Qe = Ke(function() {
          return Ge(/Chrome/i)
        }),
        Je = Ke(function() {
          return Ge(/Android/i)
        }),
        et = Ke(function() {
          return Ge(/Firefox/i)
        });
      let tt = new Map,
        rt = new Set;

      function nt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = tt.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), tt.delete(r.target)), 0 === tt.size)) {
            for (let e of rt) e();
            rt.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = tt.get(r.target);
          n || (n = new Set, tt.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function ot(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of tt) "isConnected" in e && !e.isConnected && tt.delete(e)
          }(), 0 === tt.size ? e() : rt.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? nt() : document.addEventListener("DOMContentLoaded", nt));
      let it = "default",
        st = "",
        at = new WeakMap;

      function lt(e) {
        if ($e()) {
          if ("disabled" !== it) return;
          it = "restoring", setTimeout(() => {
            ot(() => {
              if ("restoring" === it) {
                const t = Oe(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = st || ""), st = "", it = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && at.has(e)) {
          let t = at.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), at.delete(e)
        }
      }
      const ut = M.createContext({
        register: () => {}
      });

      function ct(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function dt(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, ct(e, t, "get"))
      }

      function ft(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }

      function ht(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, ct(e, t, "set"), r), r
      }

      function pt(e, t) {
        ee(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }

      function mt() {
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
      }
      ut.displayName = "PressResponderContext";

      function vt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const yt = (e = document) => e.activeElement;

      function gt(e) {
        return e.target
      }
      const bt = (0, M.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, e => wt(e, t))
        },
        useHref: e => e
      });

      function _t() {
        return (0, M.useContext)(bt)
      }

      function wt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        et() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Xe() ? i = !0 : s = !0);
        let u = Ye() && Xe() && !Ze() ? new KeyboardEvent("keydown", {
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
        wt.isOpening = r, He(e), e.dispatchEvent(u), wt.isOpening = !1
      }

      function Et(e) {
        var t;
        const r = _t().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function Pt(e, t, r, n) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let r = e.getAttribute("target");
          return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && r && (e.preventDefault(), t.open(e.currentTarget, e, r, n))
      }

      function xt(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (Je() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      wt.isOpening = !1;
      var Ct = r(44853),
        St = new WeakMap;
      class Tt {
        continuePropagation() {
          ht(this, St, !1)
        }
        get shouldStopPropagation() {
          return dt(this, St)
        }
        constructor(e, t, r, n) {
          var o;
          ft(this, St, {
            writable: !0,
            value: void 0
          }), ht(this, St, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, u = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), s && (null != l && null != c ? (a = l - s.left, u = c - s.top) : (a = s.width / 2, u = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = u
        }
      }
      const Ot = Symbol("linkClicked"),
        Rt = "react-aria-pressable-style",
        jt = "data-react-aria-pressable";

      function kt(e) {
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
          ...h
        } = function(e) {
          let t = (0, M.useContext)(ut);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = _e(n, e), r()
          }
          return pt(t, e.ref), e
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
        } = mt(), b = ne((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Tt("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }), _ = ne((e, n, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Tt("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !a) {
            let r = new Tt("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }), w = ne((e, t) => {
          let r = v.current;
          if (a) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Tt("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), E = ne(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Lt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || lt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), P = ne(e => {
          c && E(e)
        }), x = ne(e => {
          a || null == s || s(e)
        }), C = ne((e, t) => {
          if (!a && s) {
            let r = new MouseEvent("click", e);
            Ve(r, t), s(ze(r))
          }
        }), S = (0, M.useMemo)(() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Nt(t.nativeEvent, t.currentTarget) && vt(t.currentTarget, gt(t.nativeEvent))) {
                  var n;
                  Dt(gt(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Nt(t, n) && !t.repeat && vt(n, gt(t)) && e.target && w(Lt(e.target, t), "keyboard")
                      };
                    y(Oe(t.currentTarget), "keyup", J(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Xe() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || vt(t.currentTarget, gt(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !wt.isOpening) {
                  let r = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !xt(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w(Lt(t.currentTarget, t), n),
                        i = _(Lt(t.currentTarget, t), n, !0);
                      r = o && i, e.isOverTarget = !1, x(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      n = w(t, "virtual"),
                      o = _(t, "virtual");
                    x(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Nt(t, e.target)) {
                var n;
                Dt(gt(t), t.key) && t.preventDefault();
                let r = gt(t),
                  o = vt(e.target, gt(t));
                _(Lt(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && It(e.target) && vt(e.target, r) && !t[Ot] && (t[Ot] = !0, wt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !vt(t.currentTarget, gt(t.nativeEvent))) return;
              if (o = t.nativeEvent, !Je() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if ($e()) {
                    if ("default" === it) {
                      const t = Oe(e);
                      st = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    it = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    at.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = gt(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(Oe(t.currentTarget), "pointerup", r, !1), y(Oe(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (vt(t.currentTarget, gt(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let r = function(e) {
                    for (; e && !De(e);) e = e.parentElement;
                    let t = Re(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    Ue = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, He(r), l()))
                      },
                      s = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, He(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), Ue = !1, n = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              vt(t.currentTarget, gt(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b(Lt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Lt(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (vt(e.target, gt(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (He(e.target), e.target.click()))
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
              vt(e.currentTarget, gt(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, a, u, g, d, E, P, _, b, w, x, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = Oe(f.current);
          if (!e || !e.head || e.getElementById(Rt)) return;
          const t = e.createElement("style");
          t.id = Rt, t.textContent = `\n@layer {\n  [${jt}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || lt(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: _e(h, S, {
            [jt]: !0
          })
        }
      }

      function It(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Nt(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Re(o).HTMLInputElement && !Mt(o, r) || o instanceof Re(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && It(o)) && "Enter" !== r)
      }

      function Lt(e, t) {
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

      function Dt(e, t) {
        return e instanceof HTMLInputElement ? !Mt(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : It(e)))
        }(e)
      }
      const At = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Mt(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : At.has(e.type)
      }
      let Ht = null,
        Bt = new Set,
        zt = new Map,
        Vt = !1,
        Ft = !1;

      function Ut(e, t) {
        for (let r of Bt) r(e, t)
      }

      function Gt(e) {
        Vt = !0,
          function(e) {
            return !(e.metaKey || !Xe() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ht = "keyboard", Ut("keyboard", e))
      }

      function qt(e) {
        Ht = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Vt = !0, Ut("pointer", e))
      }

      function Kt(e) {
        xt(e) && (Vt = !0, Ht = "virtual")
      }

      function Xt(e) {
        e.target !== window && e.target !== document && !Ue && e.isTrusted && (Vt || Ft || (Ht = "virtual", Ut("virtual", e)), Vt = !1, Ft = !1)
      }

      function Wt() {
        Ue || (Vt = !1, Ft = !0)
      }

      function Zt(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || zt.get(Re(e))) return;
        const t = Re(e),
          r = Oe(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Vt = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Gt, !0), r.addEventListener("keyup", Gt, !0), r.addEventListener("click", Kt, !0), t.addEventListener("focus", Xt, !0), t.addEventListener("blur", Wt, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", qt, !0), r.addEventListener("pointermove", qt, !0), r.addEventListener("pointerup", qt, !0)), t.addEventListener("beforeunload", () => {
          $t(e)
        }, {
          once: !0
        }), zt.set(t, {
          focus: n
        })
      }
      const $t = (e, t) => {
        const r = Re(e),
          n = Oe(e);
        t && n.removeEventListener("DOMContentLoaded", t), zt.has(r) && (r.HTMLElement.prototype.focus = zt.get(r).focus, n.removeEventListener("keydown", Gt, !0), n.removeEventListener("keyup", Gt, !0), n.removeEventListener("click", Kt, !0), r.removeEventListener("focus", Xt, !0), r.removeEventListener("blur", Wt, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", qt, !0), n.removeEventListener("pointermove", qt, !0), n.removeEventListener("pointerup", qt, !0)), zt.delete(r))
      };

      function Yt(e) {
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
        const t = Oe(e);
        let r;
        "loading" !== t.readyState ? Zt(e) : (r = () => {
          Zt(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Qt = M.createContext(null);

      function Jt(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const i = (0, M.useCallback)(e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }, [n, o]),
            s = Fe(i),
            a = (0, M.useCallback)(e => {
              const t = Oe(e.target),
                n = t ? yt(t) : yt();
              e.target === e.currentTarget && n === gt(e.nativeEvent) && (r && r(e), o && o(!0), s(e))
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
              onKeyDown: Yt(e.onKeyDown),
              onKeyUp: Yt(e.onKeyUp)
            }
          }
        }(e), o = _e(r, n), i = function(e) {
          let t = (0, M.useContext)(Qt) || {};
          pt(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), s = e.isDisabled ? {} : i, a = (0, M.useRef)(e.autoFocus);
        (0, M.useEffect)(() => {
          a.current && t.current && function(e) {
            const t = Oe(e),
              r = yt(t);
            if ("virtual" === Ht) {
              let n = r;
              ot(() => {
                yt(t) === n && e.isConnected && He(e)
              })
            } else He(e)
          }(t.current), a.current = !1
        }, [t]);
        let l = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (l = void 0), {
          focusableProps: _e({
            ...o,
            tabIndex: l
          }, s)
        }
      }
      const er = /^(on.*)$/,
        tr = /^(onPress.*)$/;
      var rr = r(51105);
      const nr = ({
        inert: e,
        className: t,
        onClick: r,
        isLoading: n,
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
          const r = {},
            n = {};
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (tr.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : er.test(o) ? r[o] = e[o] : n[o] = e[o]);
          return {
            events: r,
            others: n
          }
        }(o, {
          onPress: !1
        }), {
          buttonProps: l,
          isPressed: u
        } = function(e, t) {
          let r, {
            elementType: n = "button",
            isDisabled: o,
            onPress: i,
            onPressStart: s,
            onPressEnd: a,
            onPressUp: l,
            onPressChange: u,
            preventFocusOnPress: c,
            allowFocusWhenDisabled: d,
            onClick: f,
            href: h,
            target: p,
            rel: m,
            type: v = "button"
          } = e;
          r = "button" === n ? {
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
            href: "a" !== n || o ? void 0 : h,
            target: "a" === n ? p : void 0,
            type: "input" === n ? v : void 0,
            disabled: "input" === n ? o : void 0,
            "aria-disabled": o && "input" !== n ? o : void 0,
            rel: "a" === n ? m : void 0
          };
          let {
            pressProps: y,
            isPressed: g
          } = kt({
            onPressStart: s,
            onPressEnd: a,
            onPressChange: u,
            onPress: i,
            onPressUp: l,
            onClick: f,
            isDisabled: o,
            preventFocusOnPress: c,
            ref: t
          }), {
            focusableProps: b
          } = Jt(e, t);
          d && (b.tabIndex = o ? -1 : b.tabIndex);
          let _ = _e(b, y, Te(e, {
            labelable: !0
          }));
          return {
            isPressed: g,
            buttonProps: _e(r, _, {
              "aria-haspopup": e["aria-haspopup"],
              "aria-expanded": e["aria-expanded"],
              "aria-controls": e["aria-controls"],
              "aria-pressed": e["aria-pressed"],
              "aria-current": e["aria-current"],
              "aria-disabled": e["aria-disabled"]
            })
          }
        }({
          ...a,
          elementType: "button",
          preventFocusOnPress: !0,
          onPress: e => {
            n || (a.onPress?.(e) ?? r?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, i), c = {
          ...l,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": n,
          "aria-busy": n
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, rr.v)(e ? {} : c, {
            ...s,
            className: t
          })
        }
      };
      var or = r(32067),
        ir = (r(10131), {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        }),
        sr = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        ar = {
          dark: "foundry_nu8bkp6",
          darkHc: "foundry_nu8bkp8",
          light: "foundry_nu8bkp5",
          lightHc: "foundry_nu8bkp7",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        lr = "--foundry-platform-scales-ratio-65afb887",
        ur = "foundry_nu8bkp4",
        cr = "foundry_nu8bkp3";
      const dr = (0, M.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: sr,
          platformScaleBreakpoints: ir,
          locale: "en-US"
        }),
        fr = () => (0, M.useContext)(dr),
        hr = () => {
          const {
            platformScale: e
          } = fr();
          return e
        },
        pr = (e, t) => {
          const r = "more" === t ? ar.lightHc : ar.light,
            n = "more" === t ? ar.darkHc : ar.dark;
          return "dark" === e ? n : r
        };
      const mr = () => V.X3 ? null : document.body;
      (0, M.forwardRef)(({
        children: e,
        className: t,
        container: r = mr(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: i,
        contrastMode: s,
        defaultContrastMode: a,
        platformScaleBreakpoints: l,
        platformScaleRatios: u,
        defaultPlatformScale: c,
        platformScale: d,
        onPlatformScaleChange: f,
        locale: h = "en-US"
      }, p) => {
        const m = (0, M.useRef)(null),
          v = X(m, p),
          y = (0, M.useRef)(r),
          {
            ratio: g,
            scale: b
          } = function(e) {
            const t = (0, M.useMemo)(() => ({
                ...sr,
                ...e.platformScaleRatios
              }), [e.platformScaleRatios]),
              r = (0, M.useMemo)(() => ({
                ...ir,
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
            platformScaleRatios: u,
            defaultPlatformScale: c,
            platformScale: d
          }),
          {
            appearanceClass: w,
            otherAppearanceClasses: E,
            providerColor: P,
            providerContrast: x
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const o = q("(prefers-color-scheme: light)"),
              i = q("(prefers-color-scheme: dark)"),
              s = q("(prefers-contrast: more)"),
              a = "system" !== e && e || o && "light" || i && "dark" || t,
              l = r || s && "more" || n,
              u = (0, M.useMemo)(() => pr(a, l), [a, l]),
              c = (0, M.useMemo)(() => ((e, t) => {
                const r = pr(e, t);
                return [ar.light, ar.dark, ar.lightHc, ar.darkHc].filter(e => e !== r)
              })(a, l), [a, l]);
            return {
              appearanceClass: u,
              otherAppearanceClasses: c,
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
          const s = K(i),
            a = K(e.current);
          (0, M.useEffect)(() => {
            e.current?.classList.contains(ur) || e.current?.classList.add(ur), e.current?.classList.contains(cr) || e.current?.classList.add(cr), e.current?.classList.add(r), e.current?.classList.remove(...n), s && i && e.current?.classList.contains(s) ? e.current?.classList.replace(s, i) : s && !i && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : i && e.current?.classList.add(i)
          }, [r, i]), (0, M.useEffect)(() => {
            e.current?.setAttribute("lang", o)
          }, [o]), (0, M.useEffect)(() => {
            e.current?.style.setProperty(lr, t.toString())
          }, [t]), (0, M.useEffect)(() => {
            a?.classList.remove(ur), a?.classList.remove(cr), a?.classList.remove(r), a?.style.removeProperty(lr), i && a?.classList.remove(i)
          }, [a])
        })({
          locale: h,
          className: t,
          appearanceClass: w,
          otherAppearanceClasses: E,
          currentScale: g,
          container: n ? m : y
        }), (0, _.jsx)(dr.Provider, {
          value: {
            locale: h,
            defaultColorScheme: i,
            colorScheme: P,
            defaultContrastMode: a,
            contrastMode: x,
            defaultPlatformScale: c,
            platformScale: b,
            platformScaleRatios: u,
            platformScaleBreakpoints: l
          },
          children: n ? (0, _.jsx)(or.DX, {
            ref: v,
            children: e
          }) : e
        })
      });
      var vr = r(71753);

      function yr(e) {
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

      function gr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function br(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gr(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = yr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function _r(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wr, Er, Pr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xr = (wr = {
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
        }, Er = e => {
          var t = wr.defaultClassName,
            r = br(br({}, wr.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : wr.defaultVariants[n];
            if (null != i) {
              var s = i;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var a = wr.variantClassNames[n][s];
              a && (t += " " + a)
            }
          }
          for (var [l, u] of wr.compoundVariants) Pr(l, r, wr.defaultVariants) && (t += " " + u);
          return t
        }, Er.variants = () => Object.keys(wr.variantClassNames), Er.classNames = {
          get base() {
            return wr.defaultClassName.split(" ")[0]
          },
          get variants() {
            return _r(wr.variantClassNames, e => _r(e, e => e.split(" ")[0]))
          }
        }, Er);
      const Cr = "pageMD",
        Sr = (0, M.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = Cr,
          testId: n,
          ...o
        }, i) => {
          const s = hr(),
            a = "string" == typeof r ? r : r?.[s] ?? r.default ?? Cr,
            l = (0, V.v6)({
              className: xr({
                size: a
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, _.jsx)(vr.b, {
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
      var Tr = r(45021);

      function Or(e) {
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

      function Rr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rr(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Or(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ir = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jr(jr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ir(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kr(e.variantClassNames, e => kr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Lr = Nr({
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
      Nr({
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
      var Dr = Nr({
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
        Ar = Nr({
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
        Mr = Nr({
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
      const Hr = (0, M.forwardRef)(({
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
        override_textLuminance: h = .179,
        override_hoverLuminance: p = .08,
        override_pressedLuminance: m = .15,
        override_backgroundColor: v,
        override_hoverColor: y,
        override_pressedColor: g,
        override_textColor: b,
        ...w
      }, E) => {
        const P = (0, M.useRef)(null),
          x = X(P, E),
          C = hr(),
          S = "string" == typeof l ? l : l?.[C] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = nr((0, V.v6)(w, {
            isLoading: c
          }), P);
        U({
          refs: {
            buttonRef: P
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
            className: Lr({
              appearance: a,
              size: S,
              fullWidth: u,
              iconLeft: !!n,
              iconRight: !!i,
              isLoading: c
            }),
            "data-testid": e
          }, T),
          R = n && Tr[n],
          j = i && Tr[i],
          k = t ? or.DX : "button",
          I = u && (j || j && R);
        return (0, _.jsxs)(k, {
          ref: x,
          ...O,
          children: [I && (0, _.jsx)("div", {
            className: "foundry_17pcofy15"
          }), R && (0, _.jsx)(R, {
            label: o || "",
            size: S,
            className: (0, be.clsx)(Dr({
              size: S
            }), "foundry_17pcofy11")
          }), (0, _.jsx)(or.xV, {
            children: r
          }), j && (0, _.jsx)(j, {
            label: s || "",
            size: S,
            className: (0, be.clsx)(Dr({
              size: S
            }), Ar({
              fullWidth: u
            }))
          }), c && (0, _.jsx)("div", {
            className: "foundry_17pcofy16",
            children: (0, _.jsx)(Sr, {
              label: d || "",
              size: "inline" + ("LG" === S ? "LG" : "MD"),
              hideTrack: !0,
              className: Mr({
                size: S
              })
            })
          })]
        })
      });

      function Br(e) {
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

      function zr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zr(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Br(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zr(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ur = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vr(Vr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ur(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fr(e.variantClassNames, e => Fr(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qr = Gr({
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
        Kr = Gr({
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
        Xr = Gr({
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
      const Wr = (0, M.forwardRef)(({
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
        override_pressedLuminance: h = .15,
        override_backgroundColor: p,
        override_hoverColor: m,
        override_pressedColor: v,
        override_textColor: y,
        ...g
      }, b) => {
        const w = (0, M.useRef)(null),
          E = X(w, b),
          P = hr(),
          x = "string" == typeof s ? s : s?.[P] ?? s.default ?? "LG",
          {
            buttonProps: C
          } = nr((0, V.v6)(g, {
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
            className: Kr({
              appearance: o,
              size: x,
              fullWidth: i,
              isLoading: l
            }),
            "data-testid": e
          }, C),
          T = Tr[r],
          O = t ? or.DX : "button";
        return (0, _.jsxs)(O, {
          ref: E,
          ...S,
          children: [T && (0, _.jsx)(T, {
            label: n || "",
            size: x,
            className: qr({
              size: x
            })
          }), (0, _.jsx)(or.xV, {
            children: a
          }), l && (0, _.jsx)("div", {
            className: "foundry_a5x3khl",
            children: (0, _.jsx)(Sr, {
              label: u || "",
              size: x && "SM" !== x ? `inline${x}` : "inlineMD",
              hideTrack: !0,
              className: Xr({
                size: x
              })
            })
          })]
        })
      });

      function Zr(e) {
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

      function $r(e, t) {
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
          t % 2 ? $r(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Zr(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $r(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qr(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jr = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        en = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yr(Yr({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Jr(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qr(e.variantClassNames, e => Qr(e, e => e.split(" ")[0]))
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
      const tn = (0, M.forwardRef)(({
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
          c = o ? or.DX : l;
        return (0, _.jsx)(c, {
          ref: a,
          className: (0, be.clsx)(en({
            thickness: r,
            orientation: t
          }), e),
          role: u,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      });

      function rn(e) {
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

      function nn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function on(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nn(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = rn(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var an = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ln = "var(--foundry_9dxgbc2)",
        un = "var(--foundry_9dxgbc3)",
        cn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = on(on({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) an(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sn(e.variantClassNames, e => sn(e, e => e.split(" ")[0]))
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
        dn = "var(--foundry_9dxgbc0)",
        fn = "var(--foundry_9dxgbc1)";
      const hn = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: i = "MD",
        ...s
      }, a) => {
        const l = hr(),
          u = "string" == typeof i ? i : i?.[l] ?? i.default ?? "MD",
          c = (0, V.v6)({
            className: cn({
              size: u
            }),
            "data-testid": t,
            style: (0, B.DI)({
              [dn]: n?.pulseColorBackground,
              [fn]: n?.pulseColorForeground,
              [ln]: n?.gradientColorBackground,
              [un]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          d = e ? or.DX : "div";
        return (0, _.jsx)(d, {
          ref: a,
          ...c,
          children: e ? (0, _.jsx)(or.xV, {
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

      function mn(e, t) {
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
          t % 2 ? mn(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = pn(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vn(vn({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) gn(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yn(e.variantClassNames, e => yn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _n = bn({
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
      const wn = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? or.DX : "p",
          a = (0, V.v6)({
            className: _n({
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
      var En = bn({
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
      const Pn = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const i = e ? or.DX : "p",
            s = (0, V.v6)({
              className: En({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        xn = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? or.DX : "h1",
            i = (0, V.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        });
      var Cn = bn({
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
      const Sn = (0, M.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? or.DX : `h${t}`,
          s = (0, V.v6)(n, {
            className: Cn({
              level: t
            })
          });
        return (0, _.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Tn = bn({
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
      const On = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? or.DX : "p",
          a = (0, V.v6)({
            className: Tn({
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
      var Rn = bn({
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
      const jn = {
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
        kn = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const i = e ? or.DX : jn[r] || "span",
            s = (0, V.v6)(n, {
              className: Rn({
                semantic: r
              })
            });
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var In = r(42828),
        Nn = r(27654);
      const Ln = {
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

      function Dn(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function An(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Dn(t - e, r - t, n) + t : e > r ? +Dn(e - r, r - t, n) + r : e
      }

      function Mn(e, t, r) {
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

      function Hn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Bn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hn(Object(r), !0).forEach(function(t) {
            Mn(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const zn = {
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

      function Vn(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Fn = ["enter", "leave"];
      const Un = ["gotpointercapture", "lostpointercapture"];

      function Gn(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = Un.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function qn(e) {
        return "touches" in e
      }

      function Kn(e) {
        return qn(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Xn(e) {
        return qn(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Wn(e, t) {
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

      function Zn(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return Wn(r, n)
      }

      function $n(e) {
        const t = Xn(e);
        return qn(e) ? t.identifier : t.pointerId
      }

      function Yn(e) {
        const t = Xn(e);
        return [t.clientX, t.clientY]
      }

      function Qn(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function Jn(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function eo() {}

      function to(...e) {
        return 0 === e.length ? eo : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function ro(e, t) {
        return Object.assign({}, t, e || {})
      }
      class no {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? Jn(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Ln.addTo(t._distance, e)
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
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = Jn(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
              return [An(t, i, s, n), An(r, a, l, o)]
            }(t._bounds, t.offset, _), t.delta = Ln.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = Ln.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Ln.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(Bn(Bn(Bn({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class oo extends no {
        constructor(...e) {
          super(...e), Mn(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Ln.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Ln.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[Kn(e)] : r.axisThreshold;
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
      const io = e => e,
        so = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => Bn(Bn({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Ln.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Ln.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || io
          },
          threshold: e => Ln.toVector(e, 0)
        },
        ao = Bn(Bn({}, so), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => ao.bounds(e(t));
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
        lo = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        uo = "undefined" != typeof window && window.document && window.document.createElement;

      function co() {
        return uo && "ontouchstart" in window
      }
      const fo = {
          isBrowser: uo,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: co(),
          touchscreen: co() || uo && window.navigator.maxTouchPoints > 1,
          pointer: uo && "onpointerdown" in window,
          pointerLock: uo && "exitPointerLock" in window.document
        },
        ho = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        po = Bn(Bn({}, ao), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && fo.pointerLock, fo.touch && r ? "touch" : this.pointerLock ? "mouse" : fo.pointer && !o ? "pointer" : fo.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, fo.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const i = Ln.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, i
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform(Ln.toVector(e)),
              distance: this.transform(Ln.toVector(t)),
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
          axisThreshold: e => e ? Bn(Bn({}, ho), e) : ho,
          keyboardDisplacement: (e = 10) => e
        });

      function mo(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [i, s] = e._direction;
        (t < 0 && n > 0 && i < 0 || t > 0 && n < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const vo = Bn(Bn({}, so), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !fo.touch && fo.gesture) return "gesture";
            if (fo.touch && n) return "touch";
            if (fo.touchscreen) {
              if (fo.pointer) return "pointer";
              if (fo.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = ro(Jn(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              i = e => {
                const t = ro(Jn(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), i()] : e => [o(e), i(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, Ln.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        yo = Bn(Bn({}, ao), {}, {
          mouseOnly: (e = !0) => e
        }),
        go = ao,
        bo = ao,
        _o = Bn(Bn({}, ao), {}, {
          mouseOnly: (e = !0) => e
        }),
        wo = new Map,
        Eo = new Map;

      function Po(e) {
        wo.set(e.key, e.engine), Eo.set(e.key, e.resolver)
      }
      const xo = {
          key: "drag",
          engine: class extends oo {
            constructor(...e) {
              super(...e), Mn(this, "ingKey", "dragging")
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
                e._bounds = ao.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = $n(e), r._pointerActive = !0, this.computeValues(Yn(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Kn(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = $n(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = Yn(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Ln.sub(o, t._values), this.computeValues(o)), Ln.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = $n(e);
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
              const t = lo[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, Ln.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in lo && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: po
        },
        Co = {
          key: "hover",
          engine: class extends oo {
            constructor(...e) {
              super(...e), Mn(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Yn(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = Yn(e);
              t._movement = t._delta = Ln.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: _o
        },
        So = {
          key: "move",
          engine: class extends oo {
            constructor(...e) {
              super(...e), Mn(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Yn(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Yn(e),
                r = this.state;
              r._delta = Ln.sub(t, r._values), Ln.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: yo
        },
        To = {
          key: "pinch",
          engine: class extends no {
            constructor(...e) {
              super(...e), Mn(this, "ingKey", "pinching"), Mn(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Ln.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = Zn(e, t._touchIds);
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
              const o = Wn(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = Zn(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = Wn(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Ln.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-Qn(e)[1] / 100 * t.offset[0], 0], Ln.addTo(t._movement, t._delta), mo(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: vo
        },
        Oo = {
          key: "scroll",
          engine: class extends oo {
            constructor(...e) {
              super(...e), Mn(this, "ingKey", "scrolling")
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
              t._delta = Ln.sub(r, t._values), Ln.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: go
        },
        Ro = {
          key: "wheel",
          engine: class extends oo {
            constructor(...e) {
              super(...e), Mn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Qn(e), Ln.addTo(t._movement, t._delta), mo(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: bo
        };
      const jo = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (fo.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        ko = ["target", "eventOptions", "window", "enabled", "transform"];

      function Io(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Io(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class No {
        constructor(e, t) {
          Mn(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const i = this._listeners,
            s = function(e, t = "") {
              const r = zn[e];
              return e + (r && r[t] || t)
            }(t, r),
            a = Bn(Bn({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class Lo {
        constructor() {
          Mn(this, "_timeouts", new Map)
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
      class Do {
        constructor(e) {
          var t, r;
          Mn(this, "gestures", new Set), Mn(this, "_targetEventStore", new No(this)), Mn(this, "gestureEventStores", {}), Mn(this, "gestureTimeoutStores", {}), Mn(this, "handlers", {}), Mn(this, "config", {}), Mn(this, "pointerIds", new Set), Mn(this, "touchIds", new Set), Mn(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Ao(t, "drag"), r.wheel && Ao(t, "wheel"), r.scroll && Ao(t, "scroll"), r.move && Ao(t, "move"), r.pinch && Ao(t, "pinch"), r.hover && Ao(t, "hover")
        }
        setEventIds(e) {
          return qn(e) ? (this.touchIds = new Set(function(e) {
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
              }(n, ko);
            if (r.shared = Io({
                target: o,
                eventOptions: i,
                window: s,
                enabled: a,
                transform: l
              }, jo), t) {
              const e = Eo.get(t);
              r[t] = Io(Bn({
                shared: r.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = Eo.get(e);
                t && (r[e] = Io(Bn({
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
                  i = Mo(r, o.eventOptions, !!n);
                o.enabled && new(wo.get(t))(this, e, t).bind(i)
              }
              const o = Mo(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](Bn(Bn({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = to(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: i
              } = Gn(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: i
              })
            }
          }
        }
      }

      function Ao(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new No(e, t), e.gestureTimeoutStores[t] = new Lo
      }
      const Mo = (e, t, r) => (n, o, i, s = {}, a = !1) => {
          var l, u;
          const c = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = s.passive) && void 0 !== u ? u : t.passive;
          let f = a ? n : function(e, t = "", r = !1) {
            const n = zn[e],
              o = n && n[t] || t;
            return "on" + Vn(e) + Vn(o) + (function(e = !1, t) {
              return e && !Fn.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, c);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Ho = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Bo(e, t, r, n, o, i) {
        if (!e.has(r)) return;
        if (!wo.has(n)) return;
        const s = r + "Start",
          a = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && a in t && t[a](e), n
        }, i[n] = i[n] || {}
      }

      function zo(e, t = {}, r, n) {
        const o = H().useMemo(() => new Do(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), H().useEffect(o.effect.bind(o)), H().useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function Vo(e, t) {
        const r = ([xo, To, Oo, Ro, So, Co].forEach(Po), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Ho.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), i = {};
            return Bo(o, r, "onDrag", "drag", i, t), Bo(o, r, "onWheel", "wheel", i, t), Bo(o, r, "onScroll", "scroll", i, t), Bo(o, r, "onPinch", "pinch", i, t), Bo(o, r, "onMove", "move", i, t), Bo(o, r, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return zo(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const Fo = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Uo = ([e, t]) => ({
        x: e,
        y: t
      }), Go = (e, t) => (e.x = t.x, e.y = t.y, e), qo = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ko = (e, t, r) => Math.min(Math.max(e, t), r);

      function Xo() {
        return Xo = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, Xo.apply(null, arguments)
      }
      var Wo = ["shift", "alt", "meta", "mod", "ctrl"],
        Zo = {
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

      function $o(e) {
        return (e && Zo[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Yo(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Qo(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return $o(e)
        });
        return Xo({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !Wo.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && ti([$o(e.key), $o(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && ri([$o(e.key), $o(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        Jo.clear()
      });
      var Jo = new Set;

      function ei(e) {
        return Array.isArray(e)
      }

      function ti(e) {
        var t = Array.isArray(e) ? e : [e];
        Jo.has("meta") && Jo.forEach(function(e) {
          return ! function(e) {
            return Wo.includes(e)
          }(e) && Jo.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return Jo.add(e.toLowerCase())
        })
      }

      function ri(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Jo.clear() : t.forEach(function(e) {
          return Jo.delete(e.toLowerCase())
        })
      }

      function ni(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, ei(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var oi = (0, M.createContext)(void 0);

      function ii(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, _.jsx)(oi.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function si(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && si(e[n], t[n])
        }, !0) : e === t
      }
      var ai = (0, M.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        li = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, M.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            a = (0, M.useState)([]),
            l = a[0],
            u = a[1],
            c = (0, M.useCallback)(function(e) {
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
              u(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, M.useCallback)(function(e) {
              u(function(t) {
                return t.filter(function(t) {
                  return !si(t, e)
                })
              })
            }, []);
          return (0, _.jsx)(ai.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: l,
              enableScope: c,
              disableScope: d,
              toggleScope: f
            },
            children: (0, _.jsx)(ii, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        ui = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        ci = "undefined" != typeof window ? M.useLayoutEffect : M.useEffect;

      function di(e, t, r, n) {
        var o = (0, M.useState)(null),
          i = o[0],
          s = o[1],
          a = (0, M.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          u = ei(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          c = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, M.useCallback)(t, null != c ? c : []),
          f = (0, M.useRef)(d);
        f.current = c ? d : t;
        var h = function(e) {
            var t = (0, M.useRef)(void 0);
            return si(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, M.useContext)(ai).enabledScopes,
          m = (0, M.useContext)(oi);
        return ci(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !ni(e, ["input", "textarea", "select"]) || ni(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void ui(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && Yo(u, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = Qo(r, null == h ? void 0 : h.combinationKey);
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
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = $o(f),
                          g = d.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (i === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (a) {
                            if (!p && !h) return !1
                          } else {
                            if (s === !p && "meta" !== g && "os" !== g) return !1;
                            if (u === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (ei(n = c) ? n : n.split(o)).every(function(e) {
                          return Jo.has(e.trim().toLowerCase())
                        })) : !c)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void ui(e);
                      f.current(e, o), t || (a.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (ti($o(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (ri($o(e.code)), a.current = !1, null != h && h.keyup && r(e, !0))
              },
              s = i || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Yo(u, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(Qo(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && Yo(u, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(Qo(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [i, u, h, p]), s
      }

      function fi(e) {
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

      function hi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function pi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hi(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = fi(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yi = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pi(pi({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) vi(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mi(e.variantClassNames, e => mi(e, e => e.split(" ")[0]))
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
      In.gsap.registerPlugin(Nn.useGSAP);
      const gi = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        bi = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        _i = (0, B.Tm)("var(--foundry_1a74xwb0)");
      var wi = r(78322);

      function Ei(e, t) {
        var r = t && t.cache ? t.cache : Ni,
          n = t && t.serializer ? t.serializer : Ti;
        return (t && t.strategy ? t.strategy : Si)(e, {
          cache: r,
          serializer: n
        })
      }

      function Pi(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function xi(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function Ci(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function Si(e, t) {
        return Ci(e, this, 1 === e.length ? Pi : xi, t.cache.create(), t.serializer)
      }
      var Ti = function() {
        return JSON.stringify(arguments)
      };

      function Oi() {
        this.cache = Object.create(null)
      }
      Oi.prototype.get = function(e) {
        return this.cache[e]
      }, Oi.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Ri, ji, ki, Ii, Ni = {
          create: function() {
            return new Oi
          }
        },
        Li = {
          variadic: function(e, t) {
            return Ci(e, this, xi, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Ci(e, this, Pi, t.cache.create(), t.serializer)
          }
        };

      function Di(e) {
        return e.type === ji.literal
      }

      function Ai(e) {
        return e.type === ji.argument
      }

      function Mi(e) {
        return e.type === ji.number
      }

      function Hi(e) {
        return e.type === ji.date
      }

      function Bi(e) {
        return e.type === ji.time
      }

      function zi(e) {
        return e.type === ji.select
      }

      function Vi(e) {
        return e.type === ji.plural
      }

      function Fi(e) {
        return e.type === ji.pound
      }

      function Ui(e) {
        return e.type === ji.tag
      }

      function Gi(e) {
        return !(!e || "object" != typeof e || e.type !== ki.number)
      }

      function qi(e) {
        return !(!e || "object" != typeof e || e.type !== ki.dateTime)
      }(Ii = Ri || (Ri = {}))[Ii.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Ii[Ii.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Ii[Ii.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Ii[Ii.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Ii[Ii.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Ii[Ii.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Ii[Ii.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Ii[Ii.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Ii[Ii.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Ii[Ii.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Ii[Ii.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Ii[Ii.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Ii[Ii.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Ii[Ii.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Ii[Ii.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Ii[Ii.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Ii[Ii.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Ii[Ii.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Ii[Ii.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Ii[Ii.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Ii[Ii.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Ii[Ii.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Ii[Ii.INVALID_TAG = 23] = "INVALID_TAG", Ii[Ii.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Ii[Ii.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Ii[Ii.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(ji || (ji = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(ki || (ki = {}));
      var Ki = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Xi = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Wi(e) {
        var t = {};
        return e.replace(Xi, function(e) {
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
      var Zi = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function $i(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, n = e.split(Zi).filter(function(e) {
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

      function Yi(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Qi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Ji = /^(@+)?(\+|#+)?[rs]?$/g,
        es = /(\*)(0+)|(#+)(0+)|(0+)/g,
        ts = /^(0+)$/;

      function rs(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Ji, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function ns(e) {
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

      function os(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !ts.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function is(e) {
        return ns(e) || {}
      }

      function ss(e) {
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
              t.style = "unit", t.unit = Yi(o.options[0]);
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
              t = (0, wi.__assign)((0, wi.__assign)((0, wi.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, wi.__assign)((0, wi.__assign)({}, e), is(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, wi.__assign)((0, wi.__assign)((0, wi.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, wi.__assign)((0, wi.__assign)({}, e), is(t))
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
              o.options[0].replace(es, function(e, r, n, o, i, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (ts.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Qi.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Qi, function(e, r, n, o, i, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && s ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var i = o.options[0];
            "w" === i ? t = (0, wi.__assign)((0, wi.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, wi.__assign)((0, wi.__assign)({}, t), rs(i)))
          } else if (Ji.test(o.stem)) t = (0, wi.__assign)((0, wi.__assign)({}, t), rs(o.stem));
          else {
            var s = ns(o.stem);
            s && (t = (0, wi.__assign)((0, wi.__assign)({}, t), s));
            var a = os(o.stem);
            a && (t = (0, wi.__assign)((0, wi.__assign)({}, t), a))
          }
        }
        return t
      }
      var as, ls = {
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

      function us(e) {
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
        return "root" !== n && (r = e.maximize().region), (ls[r || ""] || ls[n || ""] || ls["".concat(n, "-001")] || ls["001"])[0]
      }
      var cs = new RegExp("^".concat(Ki.source, "*")),
        ds = new RegExp("".concat(Ki.source, "*$"));

      function fs(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var hs = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        ps = !!String.fromCodePoint,
        ms = !!Object.fromEntries,
        vs = !!String.prototype.codePointAt,
        ys = !!String.prototype.trimStart,
        gs = !!String.prototype.trimEnd,
        bs = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        _s = !0;
      try {
        _s = "a" === (null === (as = Os("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === as ? void 0 : as[0])
      } catch (e) {
        _s = !1
      }
      var ws, Es = hs ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Ps = ps ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        xs = ms ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        Cs = vs ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Ss = ys ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(cs, "")
        },
        Ts = gs ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ds, "")
        };

      function Os(e, t) {
        return new RegExp(e, t)
      }
      if (_s) {
        var Rs = Os("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        ws = function(e, t) {
          var r;
          return Rs.lastIndex = t, null !== (r = Rs.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else ws = function(e, t) {
        for (var r = [];;) {
          var n = Cs(e, t);
          if (void 0 === n || Ds(n) || As(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Ps.apply(void 0, r)
      };
      var js, ks, Is = function() {
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
                  return this.error(Ri.UNMATCHED_CLOSING_TAG, fs(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ns(this.peek() || 0)) {
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
                  type: ji.pound,
                  location: fs(s, this.clonePosition())
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
              type: ji.literal,
              value: "<".concat(n, "/>"),
              location: fs(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ns(this.char())) return this.error(Ri.INVALID_TAG, fs(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Ri.UNMATCHED_CLOSING_TAG, fs(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: ji.tag,
                  value: n,
                  children: i,
                  location: fs(r, this.clonePosition())
                },
                err: null
              } : this.error(Ri.INVALID_TAG, fs(s, this.clonePosition())))
            }
            return this.error(Ri.UNCLOSED_TAG, fs(r, this.clonePosition()))
          }
          return this.error(Ri.INVALID_TAG, fs(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Ls(this.char());) this.bump();
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
          var a = fs(r, this.clonePosition());
          return {
            val: {
              type: ji.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ns(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Ps.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Ps(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ri.EXPECT_ARGUMENT_CLOSING_BRACE, fs(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ri.EMPTY_ARGUMENT, fs(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Ri.MALFORMED_ARGUMENT, fs(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ri.EXPECT_ARGUMENT_CLOSING_BRACE, fs(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: ji.argument,
                  value: n,
                  location: fs(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ri.EXPECT_ARGUMENT_CLOSING_BRACE, fs(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Ri.MALFORMED_ARGUMENT, fs(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = ws(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: fs(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(Ri.EXPECT_ARGUMENT_TYPE, fs(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Ts(y.val)).length) return this.error(Ri.EXPECT_ARGUMENT_STYLE, fs(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: fs(u, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var c = fs(n, this.clonePosition());
              if (l && Es(null == l ? void 0 : l.style, "::", 0)) {
                var d = Ss(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: ji.number,
                    value: r,
                    location: c,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ri.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = us(t);
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
                  parsedOptions: this.shouldParseSkeletons ? Wi(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? ji.date : ji.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? ji.number : "date" === s ? ji.date : ji.time,
                  value: r,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ri.EXPECT_SELECT_ARGUMENT_OPTIONS, fs(p, (0, wi.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ri.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, fs(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Ri.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ri.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = fs(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: ji.select,
                  value: r,
                  options: xs(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: ji.plural,
                  value: r,
                  options: xs(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ri.INVALID_ARGUMENT_TYPE, fs(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ri.EXPECT_ARGUMENT_CLOSING_BRACE, fs(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ri.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, fs(r, this.clonePosition()));
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
            r = $i(e)
          } catch (e) {
            return this.error(Ri.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: ki.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ss(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, u = n.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ri.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ri.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = fs(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? Ri.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ri.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ri.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ri.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, fs(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: fs(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === s.length ? this.error("select" === t ? Ri.EXPECT_SELECT_ARGUMENT_SELECTOR : Ri.EXPECT_PLURAL_ARGUMENT_SELECTOR, fs(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ri.MISSING_OTHER_CLAUSE, fs(this.clonePosition(), this.clonePosition())) : {
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
          var a = fs(n, this.clonePosition());
          return o ? bs(i *= r) ? {
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
          var t = Cs(this.message, e);
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
          if (Es(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Ds(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function Ns(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Ls(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Ds(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function As(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Ms(e) {
        e.forEach(function(e) {
          if (delete e.location, zi(e) || Vi(e))
            for (var t in e.options) delete e.options[t].location, Ms(e.options[t].value);
          else Mi(e) && Gi(e.style) || (Hi(e) || Bi(e)) && qi(e.style) ? delete e.style.location : Ui(e) && Ms(e.children)
        })
      }

      function Hs(e, t) {
        void 0 === t && (t = {}), t = (0, wi.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Is(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Ri[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || Ms(r.val), r.val
      }(ks = js || (js = {})).MISSING_VALUE = "MISSING_VALUE", ks.INVALID_VALUE = "INVALID_VALUE", ks.MISSING_INTL_API = "MISSING_INTL_API";
      var Bs, zs = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, wi.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Vs = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), js.INVALID_VALUE, o) || this
          }
          return (0, wi.__extends)(t, e), t
        }(zs),
        Fs = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), js.INVALID_VALUE, n) || this
          }
          return (0, wi.__extends)(t, e), t
        }(zs),
        Us = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), js.MISSING_VALUE, r) || this
          }
          return (0, wi.__extends)(t, e), t
        }(zs);

      function Gs(e) {
        return "function" == typeof e
      }

      function qs(e, t, r, n, o, i, s) {
        if (1 === e.length && Di(e[0])) return [{
          type: Bs.literal,
          value: e[0].value
        }];
        for (var a = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Di(c)) a.push({
            type: Bs.literal,
            value: c.value
          });
          else if (Fi(c)) "number" == typeof i && a.push({
            type: Bs.literal,
            value: r.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new Us(d, s);
            var f = o[d];
            if (Ai(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), a.push({
              type: "string" == typeof f ? Bs.literal : Bs.object,
              value: f
            });
            else if (Hi(c)) {
              var h = "string" == typeof c.style ? n.date[c.style] : qi(c.style) ? c.style.parsedOptions : void 0;
              a.push({
                type: Bs.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Bi(c)) h = "string" == typeof c.style ? n.time[c.style] : qi(c.style) ? c.style.parsedOptions : n.time.medium, a.push({
              type: Bs.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Mi(c))(h = "string" == typeof c.style ? n.number[c.style] : Gi(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), a.push({
              type: Bs.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Ui(c)) {
                var p = c.children,
                  m = c.value,
                  v = o[m];
                if (!Gs(v)) throw new Fs(m, "function", s);
                var y = v(qs(p, t, r, n, o, i).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), a.push.apply(a, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? Bs.literal : Bs.object,
                    value: e
                  }
                }))
              }
              if (zi(c)) {
                if (!(g = c.options[f] || c.options.other)) throw new Vs(c.value, f, Object.keys(c.options), s);
                a.push.apply(a, qs(g.value, t, r, n, o))
              } else if (Vi(c)) {
                var g;
                if (!(g = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new zs('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', js.MISSING_INTL_API, s);
                  var b = r.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  g = c.options[b] || c.options.other
                }
                if (!g) throw new Vs(c.value, f, Object.keys(c.options), s);
                a.push.apply(a, qs(g.value, t, r, n, o, f - (c.offset || 0)))
              }
            }
          }
        }
        return (_ = a).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === Bs.literal && t.type === Bs.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function Ks(e) {
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
      }(Bs || (Bs = {}));
      var Xs, Ws = function() {
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
                return e.length && t.type === Bs.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return qs(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var u = o || {},
              c = (u.formatters, (0, wi.__rest)(u, ["formatters"]));
            this.ast = e.__parse(t, (0, wi.__assign)((0, wi.__assign)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (s = e.formats, (a = n) ? Object.keys(s).reduce(function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, wi.__assign)((0, wi.__assign)((0, wi.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                return r[n] = (0, wi.__assign)((0, wi.__assign)({}, e[n]), t[n] || {}), r
              }, {})) : e
            }(s[t], a[t]), e
          }, (0, wi.__assign)({}, s)) : s), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Ei(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Ks(i.number),
              strategy: Li.variadic
            }),
            getDateTimeFormat: Ei(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Ks(i.dateTime),
              strategy: Li.variadic
            }),
            getPluralRules: Ei(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
            }, {
              cache: Ks(i.pluralRules),
              strategy: Li.variadic
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
        }, e.__parse = Hs, e.formats = {
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
      }(Xs || (Xs = {}));
      var Zs = function(e) {
          function t(r, n, o) {
            var i = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, wi.__extends)(t, e), t
        }(Error),
        $s = function(e) {
          function t(t, r) {
            return e.call(this, Xs.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, wi.__extends)(t, e), t
        }(Zs),
        Ys = function(e) {
          function t(t, r) {
            return e.call(this, Xs.INVALID_CONFIG, t, r) || this
          }
          return (0, wi.__extends)(t, e), t
        }(Zs),
        Qs = function(e) {
          function t(t, r) {
            return e.call(this, Xs.MISSING_DATA, t, r) || this
          }
          return (0, wi.__extends)(t, e), t
        }(Zs),
        Js = function(e) {
          function t(t, r, n) {
            var o = e.call(this, Xs.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, wi.__extends)(t, e), t
        }(Zs),
        ea = function(e) {
          function t(t, r, n, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return i.descriptor = n, i.locale = r, i
          }
          return (0, wi.__extends)(t, e), t
        }(Js),
        ta = function(e) {
          function t(t, r) {
            var n = e.call(this, Xs.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, wi.__extends)(t, e), t
        }(Zs);

      function ra(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var na = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function oa(e) {
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

      function ia(e, t, r, n) {
        var o, i = e && e[t];
        if (i && (o = i[r]), o) return o;
        n(new $s("No ".concat(t, " format named: ").concat(r)))
      }

      function sa(e, t) {
        var r = t && t.cache ? t.cache : ha,
          n = t && t.serializer ? t.serializer : da;
        return (t && t.strategy ? t.strategy : ca)(e, {
          cache: r,
          serializer: n
        })
      }

      function aa(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function la(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function ua(e, t, r, n, o) {
        return r.bind(t, e, n, o)
      }

      function ca(e, t) {
        return ua(e, this, 1 === e.length ? aa : la, t.cache.create(), t.serializer)
      }
      var da = function() {
        return JSON.stringify(arguments)
      };

      function fa() {
        this.cache = Object.create(null)
      }
      fa.prototype.get = function(e) {
        return this.cache[e]
      }, fa.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ha = {
          create: function() {
            return new fa
          }
        },
        pa = {
          variadic: function(e, t) {
            return ua(e, this, la, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return ua(e, this, aa, t.cache.create(), t.serializer)
          }
        };

      function ma(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      sa(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: pa.variadic
      }), sa(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: pa.variadic
      }), sa(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: pa.variadic
      }), sa(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: pa.variadic
      }), sa(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: pa.variadic
      });
      var va = (0, wi.__assign)((0, wi.__assign)({}, na), {
        textComponent: M.Fragment
      });
      r(35255);
      var ya = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? M.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = M.createContext(null)),
        ga = (ya.Consumer, ya.Provider),
        ba = ya;

      function _a(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, wi.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function wa(e, t) {
        return Object.keys((0, wi.__assign)((0, wi.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, wi.__assign)((0, wi.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function Ea(e, t) {
        if (!t) return e;
        var r = Ws.formats;
        return (0, wi.__assign)((0, wi.__assign)((0, wi.__assign)({}, r), e), {
          date: wa(_a(r.date, t), _a(e.date || {}, t)),
          time: wa(_a(r.time, t), _a(e.time || {}, t))
        })
      }
      Ei(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Li.variadic
      }), Ei(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Li.variadic
      }), Ei(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Li.variadic
      }), Ei(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Li.variadic
      }), Ei(function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.ListFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
      }, {
        strategy: Li.variadic
      });
      var Pa = function(e, t, r, n, o) {
          var i = e.locale,
            s = e.formats,
            a = e.messages,
            l = e.defaultLocale,
            u = e.defaultFormats,
            c = e.fallbackOnEmptyString,
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
          if (Array.isArray(y) && 1 === y.length && y[0].type === ji.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, wi.__assign)((0, wi.__assign)({}, h), n || {}), s = Ea(s, f), u = Ea(u, f), !y) {
            if (!1 === c && "" === y) return y;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new ta(r, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(n)
            } catch (e) {
              return d(new ea('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, i, s, (0, wi.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new ea('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(n)
          } catch (e) {
            d(new ea('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        xa = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Ca(e, t, r) {
        var n = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === r && (r = {});
        var s = r.format,
          a = s && ia(o, "number", s, i) || {};
        return t(n, ra(r, xa, a))
      }

      function Sa(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Ca(e, t, n).format(r)
        } catch (t) {
          e.onError(new Js("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function Ta(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Ca(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Js("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Oa = ["numeric", "style"];

      function Ra(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new zs('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', js.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === r && (r = {});
            var s = r.format,
              a = !!s && ia(o, "relative", s, i) || {};
            return t(n, ra(r, Oa, a))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new Js("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var ja = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function ka(e, t, r, n) {
        var o = e.locale,
          i = e.formats,
          s = e.onError,
          a = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          u = (0, wi.__assign)((0, wi.__assign)({}, a && {
            timeZone: a
          }), l && ia(i, t, l, s)),
          c = ra(n, ja, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, wi.__assign)((0, wi.__assign)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, c)
      }

      function Ia(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ka(e, "date", t, s).format(a)
        } catch (t) {
          e.onError(new Js("Error formatting date.", e.locale, t))
        }
        return String(a)
      }

      function Na(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ka(e, "time", t, s).format(a)
        } catch (t) {
          e.onError(new Js("Error formatting time.", e.locale, t))
        }
        return String(a)
      }

      function La(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = r[2],
          a = void 0 === s ? {} : s,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = ra(a, ja, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new Js("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Da(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ka(e, "date", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Js("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Aa(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          i = r[1],
          s = void 0 === i ? {} : i,
          a = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return ka(e, "time", t, s).formatToParts(a)
        } catch (t) {
          e.onError(new Js("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Ma = ["type"];

      function Ha(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || i(new zs('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', js.MISSING_INTL_API));
        var s = ra(n, Ma);
        try {
          return t(o, s).select(r)
        } catch (e) {
          i(new Js("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Ba = ["type", "style"],
        za = Date.now();

      function Va(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Fa(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Fa(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || i(new zs('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', js.MISSING_INTL_API));
        var s = ra(n, Ba);
        try {
          var a = {},
            l = r.map(function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(za, "_").concat(e, "_").concat(za)
                }(t);
                return a[r] = e, r
              }
              return String(e)
            });
          return t(o, s).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, wi.__assign)((0, wi.__assign)({}, e), {
              value: a[e.value] || e.value
            })
          })
        } catch (e) {
          i(new Js("Error formatting list.", o, e))
        }
        return r
      }
      var Ua, Ga, qa, Ka = ["style", "type", "fallback", "languageDisplay"];

      function Xa(e, t, r, n) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new zs('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', js.MISSING_INTL_API));
        var s = ra(n, Ka);
        try {
          return t(o, s).of(r)
        } catch (e) {
          i(new Js("Error formatting display name.", o, e))
        }
      }

      function Wa(e, t) {
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
              o = Ei(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
              }, {
                cache: oa(e.dateTime),
                strategy: Li.variadic
              }),
              i = Ei(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
              }, {
                cache: oa(e.number),
                strategy: Li.variadic
              }),
              s = Ei(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, wi.__spreadArray)([void 0], t, !1)))
              }, {
                cache: oa(e.pluralRules),
                strategy: Li.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: Ei(function(e, t, r, n) {
                return new Ws(e, t, r, (0, wi.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: s
                  }
                }, n || {}))
              }, {
                cache: oa(e.message),
                strategy: Li.variadic
              }),
              getRelativeTimeFormat: Ei(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, wi.__spreadArray)([void 0], e, !1)))
              }, {
                cache: oa(e.relativeTime),
                strategy: Li.variadic
              }),
              getPluralRules: s,
              getListFormat: Ei(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, wi.__spreadArray)([void 0], e, !1)))
              }, {
                cache: oa(e.list),
                strategy: Li.variadic
              }),
              getDisplayNames: Ei(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, wi.__spreadArray)([void 0], e, !1)))
              }, {
                cache: oa(e.displayNames),
                strategy: Li.variadic
              })
            }
          }(t),
          n = (0, wi.__assign)((0, wi.__assign)({}, na), e),
          o = n.locale,
          i = n.defaultLocale,
          s = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new Qs('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new Qs('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new Ys('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, wi.__assign)((0, wi.__assign)({}, n), {
            formatters: r,
            formatNumber: Sa.bind(null, n, r.getNumberFormat),
            formatNumberToParts: Ta.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Ra.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Ia.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Da.bind(null, n, r.getDateTimeFormat),
            formatTime: Na.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: La.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Aa.bind(null, n, r.getDateTimeFormat),
            formatPlural: Ha.bind(null, n, r.getPluralRules),
            formatMessage: Pa.bind(null, n, r),
            $t: Pa.bind(null, n, r),
            formatList: Va.bind(null, n, r.getListFormat),
            formatListToParts: Fa.bind(null, n, r.getListFormat),
            formatDisplayName: Xa.bind(null, n, r.getDisplayNames)
          })
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ua || (Ua = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Ga || (Ga = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(qa || (qa = {}));
      var Za, $a = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Ya = {
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

      function Qa(e) {
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
        return "root" !== n && (r = e.maximize().region), (Ya[r || ""] || Ya[n || ""] || Ya["".concat(n, "-001")] || Ya["001"])[0]
      }
      var Ja = new RegExp("^".concat($a.source, "*")),
        el = new RegExp("".concat($a.source, "*$"));

      function tl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var rl = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        nl = !!String.fromCodePoint,
        ol = !!Object.fromEntries,
        il = !!String.prototype.codePointAt,
        sl = !!String.prototype.trimStart,
        al = !!String.prototype.trimEnd,
        ll = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        ul = !0;
      try {
        ul = "a" === (null === (Za = gl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Za ? void 0 : Za[0])
      } catch (e) {
        ul = !1
      }
      var cl, dl, fl = rl ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        hl = nl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, i = 0; o > i;) {
            if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        pl = ol ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              i = o[0],
              s = o[1];
            t[i] = s
          }
          return t
        },
        ml = il ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        vl = sl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ja, "")
        },
        yl = al ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(el, "")
        };

      function gl(e, t) {
        return new RegExp(e, t)
      }
      if (ul) {
        var bl = gl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        cl = function(e, t) {
          var r;
          return bl.lastIndex = t, null !== (r = bl.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else cl = function(e, t) {
        for (var r = [];;) {
          var n = ml(e, t);
          if (void 0 === n || El(n) || Pl(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return hl.apply(void 0, r)
      };

      function _l(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function wl(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function El(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Pl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function xl(e) {
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
                  return this.error(Ua.UNMATCHED_CLOSING_TAG, tl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && _l(this.peek() || 0)) {
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
                  type: Ga.pound,
                  location: tl(s, this.clonePosition())
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
              type: Ga.literal,
              value: "<".concat(n, "/>"),
              location: tl(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !_l(this.char())) return this.error(Ua.INVALID_TAG, tl(s, this.clonePosition()));
              var a = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Ua.UNMATCHED_CLOSING_TAG, tl(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ga.tag,
                  value: n,
                  children: i,
                  location: tl(r, this.clonePosition())
                },
                err: null
              } : this.error(Ua.INVALID_TAG, tl(s, this.clonePosition())))
            }
            return this.error(Ua.UNCLOSED_TAG, tl(r, this.clonePosition()))
          }
          return this.error(Ua.INVALID_TAG, tl(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && wl(this.char());) this.bump();
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
          var a = tl(r, this.clonePosition());
          return {
            val: {
              type: Ga.literal,
              value: n,
              location: a
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (_l(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return hl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), hl(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ua.EXPECT_ARGUMENT_CLOSING_BRACE, tl(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ua.EMPTY_ARGUMENT, tl(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Ua.MALFORMED_ARGUMENT, tl(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ua.EXPECT_ARGUMENT_CLOSING_BRACE, tl(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ga.argument,
                  value: n,
                  location: tl(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ua.EXPECT_ARGUMENT_CLOSING_BRACE, tl(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Ua.MALFORMED_ARGUMENT, tl(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = cl(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: tl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (s) {
            case "":
              return this.error(Ua.EXPECT_ARGUMENT_TYPE, tl(i, a));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = yl(y.val)).length) return this.error(Ua.EXPECT_ARGUMENT_STYLE, tl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: tl(u, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var c = tl(n, this.clonePosition());
              if (l && fl(null == l ? void 0 : l.style, "::", 0)) {
                var d = vl(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: Ga.number,
                    value: r,
                    location: c,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ua.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
                      var s = 1 + (1 & i),
                        a = i < 2 ? 1 : 3 + (i >> 1),
                        l = Qa(t);
                      for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: qa.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Wi(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? Ga.date : Ga.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? Ga.number : "date" === s ? Ga.date : Ga.time,
                  value: r,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ua.EXPECT_SELECT_ARGUMENT_OPTIONS, tl(p, (0, wi.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ua.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tl(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Ua.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ua.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = tl(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: Ga.select,
                  value: r,
                  options: pl(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: Ga.plural,
                  value: r,
                  options: pl(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Ua.INVALID_ARGUMENT_TYPE, tl(i, a))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ua.EXPECT_ARGUMENT_CLOSING_BRACE, tl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ua.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, tl(r, this.clonePosition()));
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
            r = $i(e)
          } catch (e) {
            return this.error(Ua.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: qa.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? ss(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, i = !1, s = [], a = new Set, l = n.value, u = n.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ua.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ua.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = tl(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (a.has(l)) return this.error("select" === t ? Ua.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ua.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ua.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ua.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, tl(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: tl(f, this.clonePosition())
            }]), a.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === s.length ? this.error("select" === t ? Ua.EXPECT_SELECT_ARGUMENT_SELECTOR : Ua.EXPECT_PLURAL_ARGUMENT_SELECTOR, tl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ua.MISSING_OTHER_CLAUSE, tl(this.clonePosition(), this.clonePosition())) : {
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
          var a = tl(n, this.clonePosition());
          return o ? ll(i *= r) ? {
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
          var t = ml(this.message, e);
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
          if (fl(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && El(this.char());) this.bump()
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
      }(dl || (dl = {}));
      var Cl = function(e, t, r, n) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var s = xl(n),
            a = Pa.apply(void 0, (0, wi.__spreadArray)([e, t, r, s], o, !1));
          return Array.isArray(a) ? M.Children.toArray(a) : a
        },
        Sl = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, wi.__rest)(e, ["defaultRichTextElements"]),
            o = xl(r),
            i = Wa((0, wi.__assign)((0, wi.__assign)((0, wi.__assign)({}, va), n), {
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
          return (0, wi.__assign)((0, wi.__assign)({}, i), {
            formatMessage: Cl.bind(null, s, i.formatters),
            $t: Cl.bind(null, s, i.formatters)
          })
        };

      function Tl(e) {
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
      var Ol = function(e) {
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
            intl: Sl(Tl(t.props), t.cache),
            prevConfig: Tl(t.props)
          }, t
        }
        return (0, wi.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = Tl(e);
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
            intl: Sl(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return ma(this.state.intl), M.createElement(ga, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = va, t
      }(M.PureComponent);
      const Rl = Ol;

      function jl() {
        var e = M.useContext(ba);
        return ma(e), e
      }
      var kl, Il;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(kl || (kl = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Il || (Il = {}));
      var Nl = function(e) {
        var t = jl(),
          r = e.value,
          n = e.children,
          o = (0, wi.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Ll(e) {
        var t = function(t) {
          var r = jl(),
            n = t.value,
            o = t.children,
            i = (0, wi.__rest)(t, ["value", "children"]),
            s = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(s, i) : r.formatTimeToParts(s, i))
        };
        return t.displayName = Il[e], t
      }

      function Dl(e) {
        var t = function(t) {
          var r = jl(),
            n = t.value,
            o = t.children,
            i = (0, wi.__rest)(t, ["value", "children"]),
            s = r[e](n, i);
          if ("function" == typeof o) return o(s);
          var a = r.textComponent || M.Fragment;
          return M.createElement(a, null, s)
        };
        return t.displayName = kl[e], t
      }
      Nl.displayName = "FormattedNumberParts", Nl.displayName = "FormattedNumberParts", Dl("formatDate"), Dl("formatTime"), Dl("formatNumber"), Dl("formatList"), Dl("formatDisplayName"), Ll("formatDate"), Ll("formatTime");
      const Al = ({
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
          }, [r]), o ? (0, _.jsx)(Rl, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        Ml = {
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
        Hl = (e, t) => {
          const r = "more" === t ? ar.lightHc : ar.light,
            n = "more" === t ? ar.darkHc : ar.dark;
          return "dark" === e ? n : r
        };
      class Bl {
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
          return r ? t : Ko(t, this.max[e], this.min[e])
        }
      }
      class zl {
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
      class Vl {
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
      class Fl {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Go(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Go(this.prevTap, {
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
      class Ul {
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
          e.src = this.thumbnail.currentSrc ?? "", await Fo(e)
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
      class Gl {
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
      class ql extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Kl extends Vl {
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
          if (!this.dispatch(e, new ql(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Xl {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Uo(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Go(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Uo(e);
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
            i = Go({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Go({
            x: 0,
            y: 0
          }, i);
          var a, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Go(this.startPan, i)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = i, ((a = s).x !== l.x || a.y !== l.y || n || o) && (Go(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class Wl extends Vl {
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
          super(), this.width = e, this.height = t, this.opener = new Ul({
            slide: this
          }), this.bounds = new Bl({
            slide: this
          }), this.dragHandler = new Fl({
            slide: this
          }), this.scrollWheel = new Gl({
            slide: this
          }), this.zoomHandler = new Xl({
            slide: this
          }), this.zoomLevels = new zl({
            options: r
          }), this.tapHandler = new Kl({
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
          r || (e = Ko(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), qo(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), qo(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Go(this.pan, this.bounds.center)
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
      const Zl = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        $l = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        Yl = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Ql = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Jl = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        eu = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        tu = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        ru = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        nu = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        ou = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        iu = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        su = new Map;

      function au(e, t) {
        if (e === t) return e;
        const r = su.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const n = su.get(t);
        return n ? (n.forEach(t => t(e)), e) : t
      }

      function lu(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function uu(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const n = e[r];
          for (const e in n) {
            const r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = lu(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = au(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, be.clsx)(r, o)
          }
        }
        return t
      }
      var cu;
      r(98312), r(41972), r(56265), r(31454), r(10533), r(10613), r(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(cu || (cu = {})), Symbol.toStringTag;
      var du = r(39447);

      function fu(e) {
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

      function hu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function pu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hu(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = fu(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pu(pu({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) vu(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mu(e.variantClassNames, e => mu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        gu = yu({
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
      const bu = (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? du.DX : "p",
          a = uu({
            className: gu({
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
      var _u = yu({
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
      (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const i = e ? du.DX : "p",
          s = uu({
            className: _u({
              appearance: r
            })
          }, n);
        return (0, _.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...s
        })
      }), (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? du.DX : "h1",
          i = uu({
            className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
          }, r);
        return (0, _.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...i
        })
      });
      var wu = yu({
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
      (0, M.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const i = e ? du.DX : `h${t}`,
          s = uu(n, {
            className: wu({
              level: t
            })
          });
        return (0, _.jsx)(i, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Eu = yu({
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
      (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, i) => {
        const s = e ? du.DX : "p",
          a = uu({
            className: Eu({
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
      var Pu = yu({
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
      const xu = {
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
      (0, M.forwardRef)(({
        asChild: e,
        testId: t,
        semantic: r = "default",
        ...n
      }, o) => {
        const i = e ? du.DX : xu[r] || "span",
          s = uu(n, {
            className: Pu({
              semantic: r
            })
          });
        return (0, _.jsx)(i, {
          ref: o,
          "data-testid": t,
          ...s
        })
      });
      var Cu = "foundry_bc732x1";
      const Su = (0, M.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (di(e, e => r?.(e), [r]), (0, _.jsx)(bu, {
        size: "XS",
        className: (0, be.clsx)("foundry_bc732x0", {
          [Cu]: t
        }),
        asChild: !0,
        children: (0, _.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var Tu = Uu(),
        Ou = e => Bu(e, Tu),
        Ru = Uu();
      Ou.write = e => Bu(e, Ru);
      var ju = Uu();
      Ou.onStart = e => Bu(e, ju);
      var ku = Uu();
      Ou.onFrame = e => Bu(e, ku);
      var Iu = Uu();
      Ou.onFinish = e => Bu(e, Iu);
      var Nu = [];
      Ou.setTimeout = (e, t) => {
        const r = Ou.now() + t,
          n = () => {
            const e = Nu.findIndex(e => e.cancel == n);
            ~e && Nu.splice(e, 1), Mu -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Nu.splice(Lu(r), 0, o), Mu += 1, zu(), o
      };
      var Lu = e => ~(~Nu.findIndex(t => t.time > e) || ~Nu.length);
      Ou.cancel = e => {
        ju.delete(e), ku.delete(e), Iu.delete(e), Tu.delete(e), Ru.delete(e)
      }, Ou.sync = e => {
        Hu = !0, Ou.batchedUpdates(e), Hu = !1
      }, Ou.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Ou.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          ju.delete(r), t = null
        }, n
      };
      var Du = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Ou.use = e => Du = e, Ou.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Ou.batchedUpdates = e => e(), Ou.catch = console.error, Ou.frameLoop = "always", Ou.advance = () => {
        "demand" !== Ou.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Fu()
      };
      var Au = -1,
        Mu = 0,
        Hu = !1;

      function Bu(e, t) {
        Hu ? (t.delete(e), e(0)) : (t.add(e), zu())
      }

      function zu() {
        Au < 0 && (Au = 0, "demand" !== Ou.frameLoop && Du(Vu))
      }

      function Vu() {
        ~Au && (Du(Vu), Ou.batchedUpdates(Fu))
      }

      function Fu() {
        const e = Au;
        Au = Ou.now();
        const t = Lu(Au);
        t && (Gu(Nu.splice(0, t), e => e.handler()), Mu -= t), Mu ? (ju.flush(), Tu.flush(e ? Math.min(64, Au - e) : 16.667), ku.flush(), Ru.flush(), Iu.flush()) : Au = -1
      }

      function Uu() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Mu += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Mu -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Mu -= t.size, Gu(t, t => t(r) && e.add(t)), Mu += e.size, t = e)
          }
        }
      }

      function Gu(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Ou.catch(e)
          }
        })
      }
      var qu = Object.defineProperty,
        Ku = {};

      function Xu() {}((e, t) => {
        for (var r in t) qu(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Ku, {
        assign: () => ac,
        colors: () => oc,
        createStringInterpolator: () => ec,
        skipAnimation: () => ic,
        to: () => tc,
        willAdvance: () => sc
      });
      var Wu = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Zu(e, t) {
        if (Wu.arr(e)) {
          if (!Wu.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var $u = (e, t) => e.forEach(t);

      function Yu(e, t, r) {
        if (Wu.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Qu = e => Wu.und(e) ? [] : Wu.arr(e) ? e : [e];

      function Ju(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), $u(r, t)
        }
      }
      var ec, tc, rc = (e, ...t) => Ju(e, e => e(...t)),
        nc = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        oc = null,
        ic = !1,
        sc = Xu,
        ac = e => {
          e.to && (tc = e.to), e.now && (Ou.now = e.now), void 0 !== e.colors && (oc = e.colors), null != e.skipAnimation && (ic = e.skipAnimation), e.createStringInterpolator && (ec = e.createStringInterpolator), e.requestAnimationFrame && Ou.use(e.requestAnimationFrame), e.batchedUpdates && (Ou.batchedUpdates = e.batchedUpdates), e.willAdvance && (sc = e.willAdvance), e.frameLoop && (Ou.frameLoop = e.frameLoop)
        },
        lc = new Set,
        uc = [],
        cc = [],
        dc = 0,
        fc = {
          get idle() {
            return !lc.size && !uc.length
          },
          start(e) {
            dc > e.priority ? (lc.add(e), Ou.onStart(hc)) : (pc(e), Ou(vc))
          },
          advance: vc,
          sort(e) {
            if (dc) Ou.onFrame(() => fc.sort(e));
            else {
              const t = uc.indexOf(e);
              ~t && (uc.splice(t, 1), mc(e))
            }
          },
          clear() {
            uc = [], lc.clear()
          }
        };

      function hc() {
        lc.forEach(pc), lc.clear(), Ou(vc)
      }

      function pc(e) {
        uc.includes(e) || mc(e)
      }

      function mc(e) {
        uc.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(uc), 0, e)
      }

      function vc(e) {
        const t = cc;
        for (let r = 0; r < uc.length; r++) {
          const n = uc[r];
          dc = n.priority, n.idle || (sc(n), n.advance(e), n.idle || t.push(n))
        }
        return dc = 0, (cc = uc).length = 0, (uc = t).length > 0
      }
      var yc = "[-+]?\\d*\\.?\\d+",
        gc = yc + "%";

      function bc(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var _c = new RegExp("rgb" + bc(yc, yc, yc)),
        wc = new RegExp("rgba" + bc(yc, yc, yc, yc)),
        Ec = new RegExp("hsl" + bc(yc, gc, gc)),
        Pc = new RegExp("hsla" + bc(yc, gc, gc, yc)),
        xc = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Cc = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Sc = /^#([0-9a-fA-F]{6})$/,
        Tc = /^#([0-9a-fA-F]{8})$/;

      function Oc(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Rc(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = Oc(o, n, e + 1 / 3),
          s = Oc(o, n, e),
          a = Oc(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function jc(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function kc(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ic(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Nc(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Lc(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Sc.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : oc && void 0 !== oc[e] ? oc[e] : (t = _c.exec(e)) ? (jc(t[1]) << 24 | jc(t[2]) << 16 | jc(t[3]) << 8 | 255) >>> 0 : (t = wc.exec(e)) ? (jc(t[1]) << 24 | jc(t[2]) << 16 | jc(t[3]) << 8 | Ic(t[4])) >>> 0 : (t = xc.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Tc.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Cc.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ec.exec(e)) ? (255 | Rc(kc(t[1]), Nc(t[2]), Nc(t[3]))) >>> 0 : (t = Pc.exec(e)) ? (Rc(kc(t[1]), Nc(t[2]), Nc(t[3])) | Ic(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Dc = (e, t, r) => {
          if (Wu.fun(e)) return e;
          if (Wu.arr(e)) return Dc({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Wu.str(e.output[0])) return ec(e);
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
        Ac = 1.70158,
        Mc = 1.525 * Ac,
        Hc = Ac + 1,
        Bc = 2 * Math.PI / 3,
        zc = 2 * Math.PI / 4.5,
        Vc = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Fc = {
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
          easeInBack: e => Hc * e * e * e - Ac * e * e,
          easeOutBack: e => 1 + Hc * Math.pow(e - 1, 3) + Ac * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Mc) / 2 : (Math.pow(2 * e - 2, 2) * ((Mc + 1) * (2 * e - 2) + Mc) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Bc),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Bc) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * zc) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * zc) / 2 + 1,
          easeInBounce: e => 1 - Vc(1 - e),
          easeOutBounce: Vc,
          easeInOutBounce: e => e < .5 ? (1 - Vc(1 - 2 * e)) / 2 : (1 + Vc(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Uc = Symbol.for("FluidValue.get"),
        Gc = Symbol.for("FluidValue.observers"),
        qc = e => Boolean(e && e[Uc]),
        Kc = e => e && e[Uc] ? e[Uc]() : e,
        Xc = e => e[Gc] || null;

      function Wc(e, t) {
        const r = e[Gc];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Zc = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            $c(this, e)
          }
        },
        $c = (e, t) => ed(e, Uc, t);

      function Yc(e, t) {
        if (e[Uc]) {
          let r = e[Gc];
          r || ed(e, Gc, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Qc(e, t) {
        const r = e[Gc];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Gc] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Jc, ed = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        td = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rd = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        nd = new RegExp(`(${td.source})(%|[a-z]+)`, "i"),
        od = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        id = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        sd = e => {
          const [t, r] = ad(e);
          if (!t || nc()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && id.test(r) ? sd(r) : r || e
        },
        ad = e => {
          const t = id.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        ld = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        ud = e => {
          Jc || (Jc = oc ? new RegExp(`(${Object.keys(oc).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Kc(e).replace(id, sd).replace(rd, Lc).replace(Jc, Lc)),
            r = t.map(e => e.match(td).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Dc({
              ...e,
              output: t
            }));
          return e => {
            const r = !nd.test(t[0]) && t.find(e => nd.test(e))?.replace(td, "");
            let n = 0;
            return t[0].replace(td, () => `${o[n++](e)}${r||""}`).replace(od, ld)
          }
        },
        cd = "react-spring: ",
        dd = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${cd}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        fd = dd(console.warn),
        hd = dd(console.warn);

      function pd(e) {
        return Wu.str(e) && ("#" == e[0] || /\d/.test(e) || !nc() && id.test(e) || e in (oc || {}))
      }
      var md = nc() ? M.useEffect : M.useLayoutEffect;

      function vd() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return md(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var yd = e => (0, M.useEffect)(e, gd),
        gd = [];

      function bd(e) {
        const t = (0, M.useRef)();
        return (0, M.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var _d = Symbol.for("Animated:node"),
        wd = e => e && e[_d],
        Ed = (e, t) => {
          return r = e, n = _d, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Pd = e => e && e[_d] && e[_d].getPayload(),
        xd = class {
          constructor() {
            Ed(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Cd = class extends xd {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Wu.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Cd(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Wu.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Wu.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Sd = class extends Cd {
          constructor(e) {
            super(0), this._string = null, this._toString = Dc({
              output: [e, e]
            })
          }
          static create(e) {
            return new Sd(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Wu.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Dc({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Td = {
          dependencies: null
        },
        Od = class extends xd {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Yu(this.source, (r, n) => {
              var o;
              (o = r) && o[_d] === o ? t[n] = r.getValue(e) : qc(r) ? t[n] = Kc(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && $u(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Yu(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Td.dependencies && qc(e) && Td.dependencies.add(e);
            const t = Pd(e);
            t && $u(t, e => this.add(e))
          }
        },
        Rd = class extends Od {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Rd(e)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(jd)), !0)
          }
        };

      function jd(e) {
        return (pd(e) ? Sd : Cd).create(e)
      }

      function kd(e) {
        const t = wd(e);
        return t ? t.constructor : Wu.arr(e) ? Rd : pd(e) ? Sd : Cd
      }
      var Id = (e, t) => {
          const r = !Wu.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const i = (0, M.useRef)(null),
              s = r && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (Wu.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return Td.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Od(e), Td.dependencies = null, [e, r]
              }(n, t),
              u = vd(),
              c = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && u()
              },
              d = new Nd(c, l),
              f = (0, M.useRef)();
            md(() => (f.current = d, $u(l, e => Yc(e, d)), () => {
              f.current && ($u(f.current.deps, e => Qc(e, f.current)), Ou.cancel(f.current.update))
            })), (0, M.useEffect)(c, []), yd(() => () => {
              const e = f.current;
              $u(e.deps, t => Qc(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        Nd = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Ou.write(this.update)
          }
        },
        Ld = Symbol.for("AnimatedComponent"),
        Dd = e => Wu.str(e) ? e : e && Wu.str(e.displayName) ? e.displayName : Wu.fun(e) && e.name || null;

      function Ad(e, ...t) {
        return Wu.fun(e) ? e(...t) : e
      }
      var Md = (e, t) => !0 === e || !!(t && e && (Wu.fun(e) ? e(t) : Qu(e).includes(t))),
        Hd = (e, t) => Wu.obj(e) ? t && e[t] : e,
        Bd = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        zd = e => e,
        Vd = (e, t = zd) => {
          let r = Fd;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Wu.und(r) || (n[o] = r)
          }
          return n
        },
        Fd = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Ud = {
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

      function Gd(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Yu(e, (e, n) => {
              Ud[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Yu(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function qd(e) {
        return e = Kc(e), Wu.arr(e) ? e.map(qd) : pd(e) ? Ku.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Kd(e) {
        return Wu.fun(e) || Wu.arr(e) && Wu.obj(e[0])
      }
      var Xd = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Fc.linear,
          clamp: !1
        },
        Wd = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Xd)
          }
        };

      function Zd(e, t) {
        if (Wu.und(t.decay)) {
          const r = !Wu.und(t.tension) || !Wu.und(t.friction);
          !r && Wu.und(t.frequency) && Wu.und(t.damping) && Wu.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var $d = [],
        Yd = class {
          constructor() {
            this.changed = !1, this.values = $d, this.toValues = null, this.fromValues = $d, this.config = new Wd, this.immediate = !1
          }
        };

      function Qd(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, u, c = Md(r.cancel ?? n?.cancel, t);
          if (c) h();
          else {
            Wu.und(r.pause) || (o.paused = Md(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Md(e, t)), l = Ad(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - Ou.now()
          }

          function f() {
            l > 0 && !Ku.skipAnimation ? (o.delayed = !0, u = Ou.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
          }

          function h() {
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
      var Jd = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? rf(e.get()) : t.every(e => e.noop) ? ef(e.get()) : tf(e.get(), t.every(e => e.finished)),
        ef = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        tf = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        rf = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function nf(e, t, r, n) {
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
          const u = Vd(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, d;
          const f = new Promise((e, t) => (c = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && rf(n) || o !== r.asyncId && tf(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new sf,
                s = new af;
              return (async () => {
                if (Ku.skipAnimation) throw of(r), s.result = tf(n, !1), d(s), s;
                h(i);
                const a = Wu.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, Yu(u, (e, t) => {
                  Wu.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (Ku.skipAnimation) return of(r), tf(n, !1);
          try {
            let t;
            t = Wu.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = tf(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof sf) m = e.result;
            else {
              if (!(e instanceof af)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return Wu.fun(s) && Ou.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function of(e, t) {
        Ju(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var sf = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        af = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        lf = e => e instanceof cf,
        uf = 1,
        cf = class extends Zc {
          constructor() {
            super(...arguments), this.id = uf++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = wd(this);
            return e && e.getValue()
          }
          to(...e) {
            return Ku.to(this, e)
          }
          interpolate(...e) {
            return fd(`${cd}The "interpolate" function is deprecated in v9 (use "to" instead)`), Ku.to(this, e)
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
            Wc(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || fc.sort(this), Wc(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        df = Symbol.for("SpringPhase"),
        ff = e => (1 & e[df]) > 0,
        hf = e => (2 & e[df]) > 0,
        pf = e => (4 & e[df]) > 0,
        mf = (e, t) => t ? e[df] |= 3 : e[df] &= -3,
        vf = (e, t) => t ? e[df] |= 4 : e[df] &= -5,
        yf = class extends cf {
          constructor(e, t) {
            if (super(), this.animation = new Yd, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Wu.und(e) || !Wu.und(t)) {
              const r = Wu.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Wu.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(hf(this) || this._state.asyncTo) || pf(this)
          }
          get goal() {
            return Kc(this.animation.to)
          }
          get velocity() {
            const e = wd(this);
            return e instanceof Cd ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return ff(this)
          }
          get isAnimating() {
            return hf(this)
          }
          get isPaused() {
            return pf(this)
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
            } = n, s = Pd(n.to);
            !s && qc(n.to) && (o = Qu(Kc(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const u = a.constructor == Sd ? 1 : s ? s[l].lastPosition : o[l];
              let c = n.immediate,
                d = u;
              if (!c) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = Wu.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (Wu.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), c = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !Wu.und(n),
                      h = r == u ? a.v0 > 0 : r < u;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == h, m && (s = -s * n, d = u)), s += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + i.easing(n) * (u - r), s = (d - a.lastPosition) / e, c = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              s && !s[l].done && (c = !1), c ? a.done = !0 : t = !1, a.setValue(d, i.round) && (r = !0)
            });
            const a = wd(this),
              l = a.getValue();
            if (t) {
              const e = Kc(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Ou.batchedUpdates(() => {
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
            if (hf(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Ou.batchedUpdates(() => {
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
            return Wu.und(e) ? (r = this.queue || [], this.queue = []) : r = [Wu.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => Jd(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), of(this._state, e && this._lastCallId), Ou.batchedUpdates(() => this._stop(t, e)), this
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
            r = Wu.obj(r) ? r[t] : r, (null == r || Kd(r)) && (r = void 0), n = Wu.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return ff(this) || (e.reverse && ([r, n] = [n, r]), n = Kc(n), Wu.und(n) ? wd(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Vd(e, (e, t) => /^on/.test(t) ? Hd(e, r) : e)), xf(this, e, "onProps"), Cf(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Qd(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  pf(this) || (vf(this, !0), rc(i.pauseQueue), Cf(this, "onPause", tf(this, gf(this, this.animation.to)), this))
                },
                resume: () => {
                  pf(this) && (vf(this, !1), hf(this) && this._resume(), rc(i.resumeQueue), Cf(this, "onResume", tf(this, gf(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = bf(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(rf(this));
            const n = !Wu.und(e.to),
              o = !Wu.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(rf(this));
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
            !o || n || t.default && !Wu.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !Zu(d, u);
            f && (a.from = d), d = Kc(d);
            const h = !Zu(c, l);
            h && this._focus(c);
            const p = Kd(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Zd(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Zd(e, t), Object.assign(e, t);
              for (const t in Xd) null == e[t] && (e[t] = Xd[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Wu.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, Ad(t.config, i), t.config !== s.config ? Ad(s.config, i) : void 0);
            let g = wd(this);
            if (!g || Wu.und(c)) return r(tf(this, !0));
            const b = Wu.und(t.reset) ? o && !t.default : !Wu.und(d) && Md(t.reset, i),
              _ = b ? d : this.get(),
              w = qd(c),
              E = Wu.num(w) || Wu.arr(w) || pd(w),
              P = !p && (!E || Md(s.immediate || t.immediate, i));
            if (h) {
              const e = kd(c);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const x = g.constructor;
            let C = qc(c),
              S = !1;
            if (!C) {
              const e = b || !ff(this) && f;
              (h || e) && (S = Zu(qd(_), w), C = !S), (Zu(a.immediate, P) || P) && Zu(m.decay, v) && Zu(m.velocity, y) || (C = !0)
            }
            if (S && hf(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || qc(l)) && (a.values = g.getPayload(), a.toValues = qc(c) ? null : x == Sd ? [1] : Qu(w)), a.immediate != P && (a.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              $u(Pf, e => xf(this, t, e));
              const n = tf(this, gf(this, l));
              rc(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && Ou.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? Ad(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(nf(t.to, t, this._state, this)) : C ? this._start() : hf(this) && !h ? this._pendingCalls.add(r) : r(ef(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Xc(this) && this._detach(), t.to = e, Xc(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            qc(t) && (Yc(t, this), lf(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            qc(e) && Qc(e, this)
          }
          _set(e, t = !0) {
            const r = Kc(e);
            if (!Wu.und(r)) {
              const e = wd(this);
              if (!e || !Zu(r, e.getValue())) {
                const n = kd(r);
                e && e.constructor == n ? e.setValue(r) : Ed(this, n.create(r)), e && Ou.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return wd(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Cf(this, "onStart", tf(this, gf(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ad(this.animation.onChange, e, this)), Ad(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            wd(this).reset(Kc(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), hf(this) || (mf(this, !0), pf(this) || this._resume())
          }
          _resume() {
            Ku.skipAnimation ? this.finish() : fc.start(this)
          }
          _stop(e, t) {
            if (hf(this)) {
              mf(this, !1);
              const r = this.animation;
              $u(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Wc(this, {
                type: "idle",
                parent: this
              });
              const n = t ? rf(this.get()) : tf(this.get(), gf(this, e ?? r.to));
              rc(this._pendingCalls, n), r.changed && (r.changed = !1, Cf(this, "onRest", n, this))
            }
          }
        };

      function gf(e, t) {
        const r = qd(t);
        return Zu(qd(e.get()), r)
      }

      function bf(e, t = e.loop, r = e.to) {
        const n = Ad(t);
        if (n) {
          const o = !0 !== n && Gd(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return _f({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Kd(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function _f(e) {
        const {
          to: t,
          from: r
        } = e = Gd(e), n = new Set;
        return Wu.obj(t) && Ef(t, n), Wu.obj(r) && Ef(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function wf(e) {
        const t = _f(e);
        return Wu.und(t.default) && (t.default = Vd(t)), t
      }

      function Ef(e, t) {
        Yu(e, (e, r) => null != e && t.add(r))
      }
      var Pf = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function xf(e, t, r) {
        e.animation[r] = t[r] !== Bd(t, r) ? Hd(t[r], e.key) : void 0
      }

      function Cf(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Sf = ["onStart", "onChange", "onRest"],
        Tf = 1,
        Of = class {
          constructor(e, t) {
            this.id = Tf++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Wu.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(_f(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Qu(e).map(_f) : this.queue = [], this._flush ? this._flush(this, t) : (Df(this, t), Rf(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              $u(Qu(t), t => r[t].stop(!!e))
            } else of(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Wu.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              $u(Qu(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Wu.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              $u(Qu(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Yu(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Ju(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && Ju(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, Ju(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Ou.onFrame(this._onFrame)
          }
        };

      function Rf(e, t) {
        return Promise.all(t.map(t => jf(e, t))).then(t => Jd(e, t))
      }
      async function jf(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, u = Wu.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = Wu.arr(o) || Wu.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : $u(Sf, r => {
          const n = t[r];
          if (Wu.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, rc(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === Bd(t, "cancel");
        (c || h && d.asyncId) && f.push(Qd(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Xu,
            resume: Xu,
            start(t, r) {
              h ? (of(d, e._lastAsyncId), r(rf(e))) : (t.onRest = a, r(nf(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = Jd(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = bf(t, s, o);
          if (r) return Df(e, [r]), jf(e, r, !0)
        }
        return l && Ou.batchedUpdates(() => l(p, e, e.item)), p
      }

      function kf(e, t) {
        const r = {
          ...e.springs
        };
        return t && $u(Qu(t), e => {
          Wu.und(e.keys) && (e = _f(e)), Wu.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Lf(r, e, e => Nf(e))
        }), If(e, r), r
      }

      function If(e, t) {
        Yu(t, (t, r) => {
          e.springs[r] || (e.springs[r] = t, Yc(t, e))
        })
      }

      function Nf(e, t) {
        const r = new yf;
        return r.key = e, t && Yc(r, t), r
      }

      function Lf(e, t, r) {
        t.keys && $u(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function Df(e, t) {
        $u(t, t => {
          Lf(e.springs, t, t => Nf(t, e))
        })
      }
      var Af, Mf, Hf = ({
          children: e,
          ...t
        }) => {
          const r = (0, M.useContext)(Bf),
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
          } = Bf;
          return M.createElement(i, {
            value: t
          }, e)
        },
        Bf = (Af = Hf, Mf = {}, Object.assign(Af, M.createContext(Mf)), Af.Provider._context = Af, Af.Consumer._context = Af, Af);
      Hf.Provider = Bf.Provider, Hf.Consumer = Bf.Consumer;
      var zf = () => {
        const e = [],
          t = function(t) {
            hd(`${cd}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return $u(e, (e, o) => {
              if (Wu.und(t)) n.push(e.start());
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
          return $u(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
          return $u(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
          $u(e, (e, r) => {
            const n = Wu.fun(t) ? t(r, e) : t;
            n && e.set(n)
          })
        }, t.start = function(t) {
          const r = [];
          return $u(e, (e, n) => {
            if (Wu.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          }), r
        }, t.stop = function() {
          return $u(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
          return $u(e, (e, r) => e.update(this._getProps(t, e, r))), this
        };
        const r = function(e, t, r) {
          return Wu.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Vf(e, t) {
        const r = Wu.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Wu.fun(t) && t;
            n && !r && (r = []);
            const o = (0, M.useMemo)(() => n || 3 == arguments.length ? zf() : void 0, []),
              i = (0, M.useRef)(0),
              s = vd(),
              a = (0, M.useMemo)(() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = kf(e, t);
                  return i.current > 0 && !a.queue.length && !Object.keys(r).some(t => !e.springs[t]) ? Rf(e, t) : new Promise(n => {
                    If(e, r), a.queue.push(() => {
                      n(Rf(e, t))
                    }), s()
                  })
                }
              }), []),
              l = (0, M.useRef)([...a.ctrls]),
              u = [],
              c = bd(e) || 0;

            function d(e, r) {
              for (let o = e; o < r; o++) {
                const e = l.current[o] || (l.current[o] = new Of(null, a.flush)),
                  r = n ? n(o, e) : t[o];
                r && (u[o] = wf(r))
              }
            }(0, M.useMemo)(() => {
              $u(l.current.slice(e, c), e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              }), l.current.length = e, d(c, e)
            }, [e]), (0, M.useMemo)(() => {
              d(0, Math.min(c, e))
            }, r);
            const f = l.current.map((e, t) => kf(e, u[t])),
              h = (0, M.useContext)(Hf),
              p = bd(h),
              m = h !== p && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            md(() => {
              i.current++, a.ctrls = l.current;
              const {
                queue: e
              } = a;
              e.length && (a.queue = [], $u(e, e => e())), $u(l.current, (e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = u[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              })
            }), yd(() => () => {
              $u(a.ctrls, e => e.stop(!0))
            });
            const v = f.map(e => ({
              ...e
            }));
            return o ? [v, o] : v
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Ff = class extends cf {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Dc(...t);
          const r = this._get(),
            n = kd(r);
          Ed(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          Zu(t, this.get()) || (wd(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Gf(this._active) && qf(this)
        }
        _get() {
          const e = Wu.arr(this.source) ? this.source.map(Kc) : Qu(Kc(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Gf(this._active) && (this.idle = !1, $u(Pd(this), e => {
            e.done = !1
          }), Ku.skipAnimation ? (Ou.batchedUpdates(() => this.advance()), qf(this)) : fc.start(this))
        }
        _attach() {
          let e = 1;
          $u(Qu(this.source), t => {
            qc(t) && Yc(t, this), lf(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          $u(Qu(this.source), e => {
            qc(e) && Qc(e, this)
          }), this._active.clear(), qf(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Qu(this.source).reduce((e, t) => Math.max(e, (lf(t) ? t.priority : 0) + 1), 0))
        }
      };

      function Uf(e) {
        return !1 !== e.idle
      }

      function Gf(e) {
        return !e.size || Array.from(e).every(Uf)
      }

      function qf(e) {
        e.idle || (e.idle = !0, $u(Pd(e), e => {
          e.done = !0
        }), Wc(e, {
          type: "idle",
          parent: e
        }))
      }
      Ku.assign({
        createStringInterpolator: ud,
        to: (e, t) => new Ff(e, t)
      }), fc.advance;
      var Kf = /^--/;

      function Xf(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Kf.test(e) || Zf.hasOwnProperty(e) && Zf[e] ? ("" + t).trim() : t + "px"
      }
      var Wf = {},
        Zf = {
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
        $f = ["Webkit", "Ms", "Moz", "O"];
      Zf = Object.keys(Zf).reduce((e, t) => ($f.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), Zf);
      var Yf = /^(matrix|translate|scale|rotate|skew)/,
        Qf = /^(translate)/,
        Jf = /^(rotate|skew)/,
        eh = (e, t) => Wu.num(e) && 0 !== e ? e + t : e,
        th = (e, t) => Wu.arr(e) ? e.every(e => th(e, t)) : Wu.num(e) ? e === t : parseFloat(e) === t,
        rh = class extends Od {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>eh(e,"px")).join(",")})`, th(e, 0)])), Yu(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (Yf.test(t)) {
                if (delete n[t], Wu.und(e)) return;
                const r = Qf.test(t) ? "px" : Jf.test(t) ? "deg" : "";
                o.push(Qu(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${eh(o,r)})`, th(o, 0)] : e => [`${t}(${e.map(e=>eh(e,r)).join(",")})`, th(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new nh(o, i)), super(n)
          }
        },
        nh = class extends Zc {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return $u(this.inputs, (r, n) => {
              const o = Kc(r[0]),
                [i, s] = this.transforms[n](Wu.arr(o) ? o : r.map(Kc));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && $u(this.inputs, e => $u(e, e => qc(e) && Yc(e, this)))
          }
          observerRemoved(e) {
            0 == e && $u(this.inputs, e => $u(e, e => qc(e) && Qc(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Wc(this, e)
          }
        };
      Ku.assign({
        batchedUpdates: Ct.unstable_batchedUpdates,
        createStringInterpolator: ud,
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
      var oh, ih = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Od(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = Dd(e) || "Anonymous";
              return (e = Wu.str(e) ? i[e] || (i[e] = Id(e, o)) : e[Ld] || (e[Ld] = Id(e, o))).displayName = `Animated(${t})`, e
            };
          return Yu(e, (t, r) => {
            Wu.arr(e) && (r = Dd(t)), i[r] = i(t)
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
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : Wf[t] || (Wf[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Xf(t, o[t]);
                Kf.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new rh(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        sh = ih.animated,
        ah = r(94118),
        lh = r(95362),
        uh = r(85426),
        ch = r(78004),
        dh = r(76286),
        fh = r(94040),
        hh = "dismissableLayer.update",
        ph = M.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        mh = M.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
          } = e, u = M.useContext(ph), [c, d] = M.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, h] = M.useState({}), p = (0, lh.s)(t, e => d(e)), m = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(v), g = c ? m.indexOf(c) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= y, E = function(e, t = globalThis?.document) {
            const r = (0, dh.c)(e),
              n = M.useRef(!1),
              o = M.useRef(() => {});
            return M.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      gh("dismissableLayer.pointerDownOutside", r, i, {
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
          }, f), P = function(e, t = globalThis?.document) {
            const r = (0, dh.c)(e),
              n = M.useRef(!1);
            return M.useEffect(() => {
              const e = e => {
                e.target && !n.current && gh("dismissableLayer.focusOutside", r, {
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
          return (0, fh.U)(e => {
            g === u.layers.size - 1 && (n?.(e), !e.defaultPrevented && a && (e.preventDefault(), a()))
          }, f), M.useEffect(() => {
            if (c) return r && (0 === u.layersWithOutsidePointerEventsDisabled.size && (oh = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), yh(), () => {
              r && 1 === u.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = oh)
            }
          }, [c, f, r, u]), M.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), yh())
          }, [c, u]), M.useEffect(() => {
            const e = () => h({});
            return document.addEventListener(hh, e), () => document.removeEventListener(hh, e)
          }, []), (0, _.jsx)(ch.sG.div, {
            ...l,
            ref: p,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, ah.mK)(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: (0, ah.mK)(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: (0, ah.mK)(e.onPointerDownCapture, E.onPointerDownCapture)
          })
        });
      mh.displayName = "DismissableLayer";
      var vh = M.forwardRef((e, t) => {
        const r = M.useContext(ph),
          n = M.useRef(null),
          o = (0, lh.s)(t, n);
        return M.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, _.jsx)(ch.sG.div, {
          ...e,
          ref: o
        })
      });

      function yh() {
        const e = new CustomEvent(hh);
        document.dispatchEvent(e)
      }

      function gh(e, t, r, {
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
        }), n ? (0, ch.hO)(o, i) : o.dispatchEvent(i)
      }
      vh.displayName = "DismissableLayerBranch";
      var bh = mh,
        _h = vh,
        wh = r(86126),
        Eh = r(64728),
        Ph = "undefined" != typeof document ? M.useLayoutEffect : function() {};

      function xh(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; 0 !== n--;)
              if (!xh(e[n], t[n])) return !1;
            return !0
          }
          if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--;) {
            const r = o[n];
            if (!("_owner" === r && e.$$typeof || xh(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Ch(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Sh(e, t) {
        const r = Ch(e);
        return Math.round(t * r) / r
      }

      function Th(e) {
        const t = M.useRef(e);
        return Ph(() => {
          t.current = e
        }), t
      }
      const Oh = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: r,
              padding: n
            } = "function" == typeof e ? e(t) : e;
            return r && (o = r, {}.hasOwnProperty.call(o, "current")) ? null != r.current ? (0, Eh.UE)({
              element: r.current,
              padding: n
            }).fn(t) : {} : r ? (0, Eh.UE)({
              element: r,
              padding: n
            }).fn(t) : {};
            var o
          }
        }),
        Rh = (e, t) => ({
          ...(0, Eh.cY)(e),
          options: [e, t]
        }),
        jh = (e, t) => ({
          ...(0, Eh.BN)(e),
          options: [e, t]
        }),
        kh = (e, t) => ({
          ...(0, Eh.ER)(e),
          options: [e, t]
        }),
        Ih = (e, t) => ({
          ...(0, Eh.UU)(e),
          options: [e, t]
        }),
        Nh = (e, t) => ({
          ...(0, Eh.Ej)(e),
          options: [e, t]
        }),
        Lh = (e, t) => ({
          ...(0, Eh.jD)(e),
          options: [e, t]
        }),
        Dh = (e, t) => ({
          ...Oh(e),
          options: [e, t]
        });
      var Ah = M.forwardRef((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...i
        } = e;
        return (0, _.jsx)(ch.sG.svg, {
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
      Ah.displayName = "Arrow";
      var Mh = Ah,
        Hh = r(63155);

      function Bh(e) {
        const [t, r] = M.useState(void 0);
        return (0, Hh.N)(() => {
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
      var zh = "Popper",
        [Vh, Fh] = (0, uh.A)(zh),
        [Uh, Gh] = Vh(zh),
        qh = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = M.useState(null);
          return (0, _.jsx)(Uh, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      qh.displayName = zh;
      var Kh = "PopperAnchor",
        Xh = M.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = Gh(Kh, r), s = M.useRef(null), a = (0, lh.s)(t, s), l = M.useRef(null);
          return M.useEffect(() => {
            const e = l.current;
            l.current = n?.current || s.current, e !== l.current && i.onAnchorChange(l.current)
          }), n ? null : (0, _.jsx)(ch.sG.div, {
            ...o,
            ref: a
          })
        });
      Xh.displayName = Kh;
      var Wh = "PopperContent",
        [Zh, $h] = Vh(Wh),
        Yh = M.forwardRef((e, t) => {
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
            updatePositionStrategy: h = "optimized",
            onPlaced: p,
            ...m
          } = e, v = Gh(Wh, r), [y, g] = M.useState(null), b = (0, lh.s)(t, e => g(e)), [w, E] = M.useState(null), P = Bh(w), x = P?.width ?? 0, C = P?.height ?? 0, S = n + ("center" !== i ? "-" + i : ""), T = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, O = Array.isArray(u) ? u : [u], R = O.length > 0, j = {
            padding: T,
            boundary: O.filter(tp),
            altBoundary: R
          }, {
            refs: k,
            floatingStyles: I,
            placement: N,
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
              open: u
            } = e, [c, d] = M.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = M.useState(n);
            xh(f, n) || h(n);
            const [p, m] = M.useState(null), [v, y] = M.useState(null), g = M.useCallback(e => {
              e !== E.current && (E.current = e, m(e))
            }, []), b = M.useCallback(e => {
              e !== P.current && (P.current = e, y(e))
            }, []), _ = i || p, w = s || v, E = M.useRef(null), P = M.useRef(null), x = M.useRef(c), C = null != l, S = Th(l), T = Th(o), O = Th(u), R = M.useCallback(() => {
              if (!E.current || !P.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              T.current && (e.platform = T.current), (0, Eh.rD)(E.current, P.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== O.current
                };
                j.current && !xh(x.current, t) && (x.current = t, Ct.flushSync(() => {
                  d(t)
                }))
              })
            }, [f, t, r, T, O]);
            Ph(() => {
              !1 === u && x.current.isPositioned && (x.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [u]);
            const j = M.useRef(!1);
            Ph(() => (j.current = !0, () => {
              j.current = !1
            }), []), Ph(() => {
              if (_ && (E.current = _), w && (P.current = w), _ && w) {
                if (S.current) return S.current(_, w, R);
                R()
              }
            }, [_, w, R, S, C]);
            const k = M.useMemo(() => ({
                reference: E,
                floating: P,
                setReference: g,
                setFloating: b
              }), [g, b]),
              I = M.useMemo(() => ({
                reference: _,
                floating: w
              }), [_, w]),
              N = M.useMemo(() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!I.floating) return e;
                const t = Sh(I.floating, c.x),
                  n = Sh(I.floating, c.y);
                return a ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...Ch(I.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }, [r, a, I.floating, c.x, c.y]);
            return M.useMemo(() => ({
              ...c,
              update: R,
              refs: k,
              elements: I,
              floatingStyles: N
            }), [c, R, k, I, N])
          }({
            strategy: "fixed",
            placement: S,
            whileElementsMounted: (...e) => (0, Eh.ll)(...e, {
              animationFrame: "always" === h
            }),
            elements: {
              reference: v.anchor
            },
            middleware: [Rh({
              mainAxis: o + C,
              alignmentAxis: s
            }), l && jh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === d ? kh() : void 0,
              ...j
            }), l && Ih({
              ...j
            }), Nh({
              ...j,
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
            }), w && Dh({
              element: w,
              padding: a
            }), rp({
              arrowWidth: x,
              arrowHeight: C
            }), f && Lh({
              strategy: "referenceHidden",
              ...j
            })]
          }), [A, H] = np(N), B = (0, dh.c)(p);
          (0, Hh.N)(() => {
            L && B?.()
          }, [L, B]);
          const z = D.arrow?.x,
            V = D.arrow?.y,
            F = 0 !== D.arrow?.centerOffset,
            [U, G] = M.useState();
          return (0, Hh.N)(() => {
            y && G(window.getComputedStyle(y).zIndex)
          }, [y]), (0, _.jsx)("div", {
            ref: k.setFloating,
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
            children: (0, _.jsx)(Zh, {
              scope: r,
              placedSide: A,
              onArrowChange: E,
              arrowX: z,
              arrowY: V,
              shouldHideArrow: F,
              children: (0, _.jsx)(ch.sG.div, {
                "data-side": A,
                "data-align": H,
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
      Yh.displayName = Wh;
      var Qh = "PopperArrow",
        Jh = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        ep = M.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = $h(Qh, r), i = Jh[o.placedSide];
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
            children: (0, _.jsx)(Mh, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function tp(e) {
        return null !== e
      }
      ep.displayName = Qh;
      var rp = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, u] = np(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + a / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? c : `${d}px`, p = -a + "px") : "top" === l ? (h = i ? c : `${d}px`, p = `${n.floating.height+a}px`) : "right" === l ? (h = -a + "px", p = i ? c : `${f}px`) : "left" === l && (h = `${n.floating.width+a}px`, p = i ? c : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function np(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var op = qh,
        ip = Xh,
        sp = Yh,
        ap = ep,
        lp = M.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, i] = M.useState(!1);
          (0, Hh.N)(() => i(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? Ct.createPortal((0, _.jsx)(ch.sG.div, {
            ...n,
            ref: t
          }), s) : null
        });
      lp.displayName = "Portal";
      var up = r(53146),
        cp = r(53054),
        dp = r(69055),
        [fp, hp] = (0, uh.A)("Tooltip", [Fh]),
        pp = Fh(),
        mp = "TooltipProvider",
        vp = 700,
        yp = "tooltip.open",
        [gp, bp] = fp(mp),
        _p = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = vp,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, s = M.useRef(!0), a = M.useRef(!1), l = M.useRef(0);
          return M.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, _.jsx)(gp, {
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
      _p.displayName = mp;
      var wp = "Tooltip",
        [Ep, Pp] = fp(wp),
        xp = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            disableHoverableContent: s,
            delayDuration: a
          } = e, l = bp(wp, e.__scopeTooltip), u = pp(t), [c, d] = M.useState(null), f = (0, wh.B)(), h = M.useRef(0), p = s ?? l.disableHoverableContent, m = a ?? l.delayDuration, v = M.useRef(!1), [y, g] = (0, cp.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(yp))) : l.onClose(), i?.(e)
            },
            caller: wp
          }), b = M.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), w = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), E = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), P = M.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return M.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, _.jsx)(op, {
            ...u,
            children: (0, _.jsx)(Ep, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: d,
              onTriggerEnter: M.useCallback(() => {
                l.isOpenDelayedRef.current ? P() : w()
              }, [l.isOpenDelayedRef, P, w]),
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
      xp.displayName = wp;
      var Cp = "TooltipTrigger",
        Sp = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Pp(Cp, r), i = bp(Cp, r), s = pp(r), a = M.useRef(null), l = (0, lh.s)(t, a, o.onTriggerChange), u = M.useRef(!1), c = M.useRef(!1), d = M.useCallback(() => u.current = !1, []);
          return M.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, _.jsx)(ip, {
            asChild: !0,
            ...s,
            children: (0, _.jsx)(ch.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, ah.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ah.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ah.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, ah.mK)(e.onFocus, () => {
                u.current || o.onOpen()
              }),
              onBlur: (0, ah.mK)(e.onBlur, o.onClose),
              onClick: (0, ah.mK)(e.onClick, o.onClose)
            })
          })
        });
      Sp.displayName = Cp;
      var Tp = "TooltipPortal",
        [Op, Rp] = fp(Tp, {
          forceMount: void 0
        }),
        jp = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = Pp(Tp, t);
          return (0, _.jsx)(Op, {
            scope: t,
            forceMount: r,
            children: (0, _.jsx)(up.C, {
              present: r || i.open,
              children: (0, _.jsx)(lp, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      jp.displayName = Tp;
      var kp = "TooltipContent",
        Ip = M.forwardRef((e, t) => {
          const r = Rp(kp, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = Pp(kp, e.__scopeTooltip);
          return (0, _.jsx)(up.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, _.jsx)(Mp, {
              side: o,
              ...i,
              ref: t
            }) : (0, _.jsx)(Np, {
              side: o,
              ...i,
              ref: t
            })
          })
        }),
        Np = M.forwardRef((e, t) => {
          const r = Pp(kp, e.__scopeTooltip),
            n = bp(kp, e.__scopeTooltip),
            o = M.useRef(null),
            i = (0, lh.s)(t, o),
            [s, a] = M.useState(null),
            {
              trigger: l,
              onClose: u
            } = r,
            c = o.current,
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
            if (l && c) {
              const e = e => h(e, c),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [l, c, h, f]), M.useEffect(() => {
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
          }, [l, c, s, u, f]), (0, _.jsx)(Mp, {
            ...e,
            ref: i
          })
        }),
        [Lp, Dp] = fp(wp, {
          isInside: !1
        }),
        Ap = (0, du.Dc)("TooltipContent"),
        Mp = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
          } = e, l = Pp(kp, r), u = pp(r), {
            onClose: c
          } = l;
          return M.useEffect(() => (document.addEventListener(yp, c), () => document.removeEventListener(yp, c)), [c]), M.useEffect(() => {
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
          }, [l.trigger, c]), (0, _.jsx)(mh, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, _.jsxs)(sp, {
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
              children: [(0, _.jsx)(Ap, {
                children: n
              }), (0, _.jsx)(Lp, {
                scope: r,
                isInside: !0,
                children: (0, _.jsx)(dp.bL, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Ip.displayName = kp;
      var Hp = "TooltipArrow",
        Bp = M.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = pp(r);
          return Dp(Hp, r).isInside ? null : (0, _.jsx)(ap, {
            ...o,
            ...n,
            ref: t
          })
        });
      Bp.displayName = Hp;
      var zp = _p,
        Vp = xp,
        Fp = Sp,
        Up = jp,
        Gp = Ip,
        qp = Bp;
      const Kp = (0, M.createContext)(null);

      function Xp() {
        const e = (0, M.useContext)(Kp);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Wp = ({
          children: e,
          delayDuration: t,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [i = !1, s] = $({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, _.jsx)(zp, {
            delayDuration: t,
            children: (0, _.jsx)(Kp.Provider, {
              value: {
                isOpen: i,
                ...o
              },
              children: (0, _.jsx)(Vp, {
                open: i,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Zp = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(Fp, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        $p = (0, M.forwardRef)(({
          testId: e,
          children: t,
          collisionBoundary: r,
          collisionPadding: n,
          onEscapeKeyDown: o,
          onPointerDownOutside: i,
          side: s = "top",
          sideOffset: a = 8,
          align: l = "center",
          alignOffset: u = 0,
          avoidCollisions: c = !0,
          sticky: d = "partial",
          ...f
        }, h) => {
          const {
            isOpen: p
          } = Xp(), m = K(p), v = Vf({
            opacity: p ? 1 : 0,
            immediate: p && !m
          }), y = (0, V.v6)({
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, f);
          return (0, _.jsx)(Gp, {
            forceMount: !0,
            "data-testid": e,
            side: s,
            align: l,
            sticky: d,
            sideOffset: a,
            alignOffset: u,
            avoidCollisions: c,
            collisionPadding: n,
            collisionBoundary: r,
            onEscapeKeyDown: o,
            onPointerDownOutside: i,
            asChild: !0,
            children: (0, _.jsx)(sh.div, {
              style: v,
              ...y,
              ref: h,
              children: t
            })
          })
        }),
        Yp = (0, M.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, V.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, _.jsx)(qp, {
            ...r,
            ref: t
          })
        }),
        Qp = Up;

      function Jp(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var em = r(77768);

      function tm(e) {
        const t = M.useRef({
          value: e,
          previous: e
        });
        return M.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
      var rm = r(20027),
        nm = ["PageUp", "PageDown"],
        om = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        im = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        sm = "Slider",
        [am, lm, um] = (0, rm.N)(sm),
        [cm, dm] = (0, uh.A)(sm, [um]),
        [fm, hm] = cm(sm),
        pm = M.forwardRef((e, t) => {
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
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = M.useRef(new Set), y = M.useRef(0), g = "horizontal" === s ? ym : gm, [b = [], w] = (0, cp.i)({
            prop: c,
            defaultProp: u,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), E = M.useRef(b);

          function P(e, t, {
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
              u = Jp(a, [n, o]);
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
          return (0, _.jsx)(fm, {
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
            children: (0, _.jsx)(am.Provider, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(am.Slot, {
                scope: e.__scopeSlider,
                children: (0, _.jsx)(g, {
                  "aria-disabled": a,
                  "data-disabled": a ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, ah.mK)(m.onPointerDown, () => {
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
                    P(e, t)
                  },
                  onSlideMove: a ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: a ? void 0 : function() {
                    const e = E.current[y.current];
                    b[y.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !a && P(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !a && P(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!a) {
                      const r = nm.includes(e.key) || e.shiftKey && om.includes(e.key) ? 10 : 1,
                        n = y.current;
                      P(b[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      pm.displayName = sm;
      var [mm, vm] = cm(sm, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), ym = M.forwardRef((e, t) => {
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
        } = e, [d, f] = M.useState(null), h = (0, lh.s)(t, e => f(e)), p = M.useRef(void 0), m = (0, em.jH)(o), v = "ltr" === m, y = v && !i || !v && i;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = Rm([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, _.jsx)(mm, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, _.jsx)(bm, {
            dir: m,
            "data-orientation": "horizontal",
            ...c,
            ref: h,
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
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = im[y ? "from-left" : "from-right"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), gm = M.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: a,
          onStepKeyDown: l,
          ...u
        } = e, c = M.useRef(null), d = (0, lh.s)(t, c), f = M.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Rm([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, _.jsx)(mm, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, _.jsx)(bm, {
            "data-orientation": "vertical",
            ...u,
            ref: d,
            style: {
              ...u.style,
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
              const t = im[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), bm = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: a,
          onStepKeyDown: l,
          ...u
        } = e, c = hm(sm, r);
        return (0, _.jsx)(ch.sG.span, {
          ...u,
          ref: t,
          onKeyDown: (0, ah.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (a(e), e.preventDefault()) : nm.concat(om).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, ah.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, ah.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, ah.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          })
        })
      }), _m = "SliderTrack", wm = M.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = hm(_m, r);
        return (0, _.jsx)(ch.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      wm.displayName = _m;
      var Em = "SliderRange",
        Pm = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = hm(Em, r), i = vm(Em, r), s = M.useRef(null), a = (0, lh.s)(t, s), l = o.values.length, u = o.values.map(e => Om(e, o.min, o.max)), c = l > 1 ? Math.min(...u) : 0, d = 100 - Math.max(...u);
          return (0, _.jsx)(ch.sG.span, {
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
      Pm.displayName = Em;
      var xm = "SliderThumb",
        Cm = M.forwardRef((e, t) => {
          const r = lm(e.__scopeSlider),
            [n, o] = M.useState(null),
            i = (0, lh.s)(t, e => o(e)),
            s = M.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, _.jsx)(Sm, {
            ...e,
            ref: i,
            index: s
          })
        }),
        Sm = M.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, s = hm(xm, r), a = vm(xm, r), [l, u] = M.useState(null), c = (0, lh.s)(t, e => u(e)), d = !l || s.form || !!l.closest("form"), f = Bh(l), h = s.values[n], p = void 0 === h ? 0 : Om(h, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[a.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - Rm([0, 50], [0, n])(t) * r) * r
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
            children: [(0, _.jsx)(am.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, _.jsx)(ch.sG.span, {
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
                ref: c,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, ah.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, _.jsx)(Tm, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: h
            }, n)]
          })
        });
      Cm.displayName = xm;
      var Tm = M.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          i = (0, lh.s)(o, n),
          s = tm(t);
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
        }, [s, t]), (0, _.jsx)(ch.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: i,
          defaultValue: t
        })
      });

      function Om(e, t, r) {
        return Jp(100 / (r - t) * (e - t), [0, 100])
      }

      function Rm(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Tm.displayName = "RadioBubbleInput";
      var jm = pm,
        km = wm,
        Im = Pm,
        Nm = Cm,
        Lm = r(48141);
      const Dm = (0, M.createContext)({
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
        Am = ({
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
          const f = (() => {
              const {
                locale: e
              } = fr();
              return e
            })(),
            h = Q(),
            p = (0, M.useRef)(null),
            m = (0, M.useRef)(null),
            v = (0, M.useRef)(null),
            y = (0, M.useRef)(null),
            g = (0, M.useRef)(null),
            b = (0, M.useRef)(null),
            w = (0, M.useRef)(null),
            E = (0, M.useRef)(null),
            P = (0, M.useRef)(null),
            x = (0, M.useRef)(null),
            C = (0, M.useRef)(null),
            S = (0, M.useRef)(null),
            T = (0, M.useRef)(null),
            O = (0, M.useRef)(null),
            R = (0, M.useRef)(null),
            j = (0, M.useRef)(null),
            k = (0, M.useRef)(null),
            I = (0, M.useRef)(null),
            N = (0, M.useRef)(null),
            [L = !1, D] = $({
              prop: t || n,
              onChange: r
            }),
            A = (0, M.useRef)(null);
          return A.current || (A.current = new Wl({
            width: 0,
            height: 0,
            zoomLevelOptions: {
              max: i,
              min: o,
              step: s
            },
            actionOptions: {
              click: a,
              tap: u || h ? "toggle-controls" : "close",
              doubleTap: l || h ? "zoom" : "none"
            }
          })), (0, _.jsx)(Al, {
            messages: Ml,
            locale: f,
            children: (0, _.jsx)(Dm.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: E,
                imageRef: P,
                placeholderRef: x,
                captionRef: C,
                controlsRef: S,
                closeRef: T,
                zoomRef: O,
                zoomInRef: R,
                zoomSliderRef: j,
                zoomOutRef: k,
                resetRef: I,
                downloadRef: N,
                open: L,
                setOpen: D,
                altText: e,
                hideTrigger: c,
                slide: A.current
              },
              children: (0, _.jsx)(Hm, {
                ...d
              })
            })
          })
        },
        Mm = (0, M.createContext)({
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
        Hm = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, M.useContext)(Dm), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, Nn.useGSAP)(), {
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
            } = (0, M.useContext)(Dm), h = (0, M.useRef)(null);
            h.current || (h.current = In.gsap.timeline({
              defaults: gi
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
                }), l.current && a.current && (t.opening = !0, t.setup(a.current, l.current), t.zoomAndPanToInitial(), In.gsap.set([d.current, f.current], {
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
                }), In.gsap.set([f.current], {
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
                }), h.current.to([c.current], {
                  width: "100%",
                  height: "100%",
                  duration: 0
                }), h.current.to([u.current], {
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
                }), h.current.fromTo([u.current], {
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
                }, 0), h.current.fromTo([c.current], {
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
                  [_i]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [_i]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Fo(f.current), t.closing || (In.gsap.set([f.current], {
                  visibility: "visible",
                  ...bi
                }), In.gsap.set([d.current], {
                  visibility: "hidden",
                  ...bi
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
            resetZoom: u,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, Nn.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: i,
              containerRef: s,
              placeholderRef: a
            } = (0, M.useContext)(Dm), l = t(async e => {
              r.zoomTo(e), In.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...bi
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), In.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...bi
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), In.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...bi
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), In.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...bi
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              In.gsap.to([i.current], {
                opacity: e,
                [_i]: t,
                ...bi
              })
            }), h = t(async () => {
              In.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...bi
              })
            }), p = (0, M.useCallback)(() => {
              n.current && o.current && (r.resize(), In.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...bi
              }), In.gsap.set([n.current, a.current], {
                ...r.getUpdatedContentSize(),
                ...bi
              }), In.gsap.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, M.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", h), r.removeEventListener("toggle-controls", f), window.removeEventListener("resize", p)
            }), []), {
              zoomIn: u,
              zoomOut: c,
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
          return (0, _.jsx)(Mm.Provider, {
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
            children: (0, _.jsx)(Lm.bL, {
              ...d
            })
          })
        },
        Bm = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = jl(),
            {
              triggerRef: i,
              triggerBorderRef: s,
              altText: a
            } = (0, M.useContext)(Dm),
            l = X(i, n),
            u = (0, V.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(Zl, {
                description: a
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, _.jsx)(Lm.l9, {
            ref: l,
            ...u,
            children: (0, _.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, _.jsx)(or.xV, {
                children: t
              })
            })
          })
        }),
        zm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, M.useContext)(Dm), i = X(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), a = t ? or.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Vm = (0, M.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, M.useContext)(Dm), o = X(n, r), i = (0, V.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? or.DX : Tr.Maximize2;
          return (0, _.jsx)(s, {
            ref: o,
            ...i
          })
        }),
        Fm = ({
          ...e
        }) => (0, _.jsx)(Lm.ZL, {
          ...e
        }),
        Um = (0, M.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, M.useContext)(Dm), o = X(n, r), i = (0, V.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, _.jsx)(Lm.hJ, {
            ref: o,
            ...i
          })
        }),
        Gm = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, M.useContext)(Mm), {
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
            } = fr();
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
          } = (0, M.useContext)(Dm), {
            cursor: u
          } = (() => {
            const {
              slide: e
            } = (0, M.useContext)(Dm), [t, r] = (0, M.useState)(e.getCursor()), n = (0, M.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, M.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), c = ((e, t) => [ar.tokens, ar.typography, Hl("dark", t)].join(" "))(0, i), d = X(s, n), f = (0, V.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, l),
            className: (0, be.clsx)("foundry_1a74xwb9", c),
            style: {
              cursor: u
            }
          });
          return (0, _.jsxs)(Lm.UC, {
            ref: d,
            ...f,
            children: [(0, _.jsx)(or.s6, {
              children: (0, _.jsx)(Lm.hE, {
                children: a
              })
            }), t]
          })
        }),
        qm = (0, M.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, M.useContext)(Dm);
          (() => {
            const {
              contextSafe: e
            } = (0, Nn.useGSAP)(), {
              toggleControls: t
            } = (0, M.useContext)(Mm), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: i,
              slide: s
            } = (0, M.useContext)(Dm), a = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (In.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...bi
              }), In.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...bi
              }), In.gsap.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...bi
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || In.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...bi
              }))
            }), u = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (In.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...bi
              }), In.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...bi
              }), In.gsap.to([i.current], {
                opacity: s.getControlsOpacity(),
                ...bi
              })))
            }), c = (0, M.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (({
              ref: e,
              onChange: t,
              onFocusIn: r,
              onFocusOut: n,
              enabled: o = !0
            }) => {
              const [i, s] = (0, M.useState)(!1);
              Y("focusin", e => {
                s(!0), r?.(e), t?.(!0, e)
              }, e), Y("focusout", e => {
                s(!1), n?.(e), t?.(!1, e)
              }, e)
            })({
              ref: i,
              onFocusIn: c
            }), Vo({
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
          const i = X(o, n),
            s = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, _.jsx)("div", {
            ref: i,
            ...s,
            children: (0, _.jsxs)(Km, {
              children: [(0, _.jsx)(Xm, {}), t]
            })
          })
        }),
        Km = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, M.useContext)(Dm), i = X(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), a = t ? or.DX : "div";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Xm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, M.useContext)(Dm), i = X(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), a = t ? or.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Wm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, M.useContext)(Dm), i = X(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), a = t ? or.DX : "img";
          return (0, _.jsx)(a, {
            ref: i,
            ...s
          })
        }),
        Zm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, M.useContext)(Dm), i = X(o, n), s = (0, V.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), a = t ? or.DX : "p";
          return (0, _.jsx)(Lm.VY, {
            asChild: !0,
            children: (0, _.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        $m = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, M.useContext)(Dm);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, M.useContext)(Mm);
            di(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), di(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), di("r", n, {
              enabled: e,
              preventDefault: !0
            }), di("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const i = X(o, n),
            s = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            a = t ? or.DX : "div";
          return (0, _.jsx)(li, {
            children: (0, _.jsx)(a, {
              ref: i,
              ...s
            })
          })
        }),
        Ym = ({
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
          return (0, _.jsxs)(Wp, {
            delayDuration: 0,
            children: [(0, _.jsx)(Zp, {
              children: n
            }), (0, _.jsxs)($p, {
              ...i,
              children: [(0, _.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, _.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, _.jsx)(Yp, {})]
            })]
          })
        },
        Qm = (0, M.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, V.v6)(e, {
            isInline: !0
          });
          return (0, _.jsx)(Su, {
            ref: t,
            ...r
          })
        }),
        Jm = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, i) {
          const s = jl(),
            {
              zoomRef: a
            } = (0, M.useContext)(Dm),
            {
              canZoomIn: l,
              zoomIn: u,
              canZoomOut: c,
              zoomOut: d,
              zoomProgress: f,
              minZoomLevel: h,
              maxZoomLevel: p,
              zoomTo: m
            } = (() => {
              const {
                slide: e
              } = (0, M.useContext)(Dm), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, M.useContext)(Mm), [o, i] = (0, M.useState)(!1), [s, a] = (0, M.useState)(!1), [l, u] = (0, M.useState)(0), [c, d] = (0, M.useState)(0), [f, h] = (0, M.useState)(0), p = (0, M.useCallback)(() => {
                i(e.currZoomLevel < e.zoomLevels.max), a(e.currZoomLevel > e.zoomLevels.min), u(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
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
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            v = X(a, i),
            y = (0, V.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbn"
            }),
            g = t ? or.DX : "div";
          return (0, _.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, _.jsx)(Ym, {
              side: "left",
              enabled: r,
              content: s.formatMessage(Ql),
              metadata: s.formatMessage(Jl, {
                shortcut: (0, _.jsx)(Qm, {
                  shortcut: "+"
                })
              }),
              children: (0, _.jsx)(Wr, {
                label: s.formatMessage(Ql),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: yi({
                  position: "top"
                }),
                onPress: u,
                isDisabled: !l
              })
            }), (0, _.jsxs)(jm, {
              className: "foundry_1a74xwbr",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, _.jsx)(km, {
                className: "foundry_1a74xwbs",
                children: (0, _.jsx)(Im, {
                  className: "foundry_1a74xwbt"
                })
              }), (0, _.jsx)(Ym, {
                side: "left",
                enabled: r,
                content: s.formatMessage(ou, {
                  zoom: f.toFixed(0)
                }),
                children: (0, _.jsx)(Nm, {
                  className: "foundry_1a74xwbu",
                  children: (0, _.jsx)("span", {
                    className: "foundry_1a74xwbv"
                  })
                })
              })]
            }), (0, _.jsx)(Ym, {
              side: "left",
              enabled: r,
              content: s.formatMessage(eu),
              metadata: s.formatMessage(tu, {
                shortcut: (0, _.jsx)(Qm, {
                  shortcut: "-"
                })
              }),
              children: (0, _.jsx)(Wr, {
                label: s.formatMessage(eu),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: yi({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !c
              })
            }), (0, _.jsx)(or.xV, {
              children: n
            })]
          })
        }),
        ev = (0, M.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const i = jl(),
            {
              closeRef: s
            } = (0, M.useContext)(Dm),
            a = X(s, o),
            l = (0, V.v6)(n, {
              "data-testid": e,
              className: "foundry_1a74xwbk foundry_1a74xwbj"
            }),
            u = t ? (0, _.jsx)(or.DX, {
              ref: a,
              ...l
            }) : (0, _.jsx)(Wr, {
              ref: a,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: i.formatMessage($l)
            });
          return (0, _.jsx)(Ym, {
            side: "right",
            enabled: r,
            content: i.formatMessage($l),
            metadata: i.formatMessage(Yl, {
              shortcut: (0, _.jsx)(Qm, {
                shortcut: "Esc"
              })
            }),
            children: (0, _.jsx)(Lm.bm, {
              asChild: !0,
              children: u
            })
          })
        }),
        tv = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = jl(),
            i = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, M.useContext)(Dm), {
                contextSafe: r
              } = (0, Nn.useGSAP)(), {
                resetZoom: n
              } = (0, M.useContext)(Mm), [o, i] = (0, M.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                In.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...bi
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
            } = (0, M.useContext)(Dm),
            a = X(s, n),
            l = (0, V.v6)(r, i, {
              "data-testid": e,
              className: "foundry_1a74xwbl foundry_1a74xwbj"
            });
          return (0, _.jsx)(Ym, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ru),
            metadata: o.formatMessage(nu, {
              shortcut: (0, _.jsx)(Qm, {
                shortcut: "R"
              })
            }),
            children: (0, _.jsx)(Wr, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(ru)
            })
          })
        }),
        rv = (0, M.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = jl(),
            {
              downloadRef: i,
              imageRef: s
            } = (0, M.useContext)(Dm),
            a = X(i, n),
            l = (0, V.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbm foundry_1a74xwbj"
            });
          return (0, _.jsx)(Ym, {
            side: "left",
            enabled: t,
            content: o.formatMessage(iu),
            children: (0, _.jsx)(Wr, {
              ref: a,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(iu),
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
        nv = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        },
        ov = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        iv = ov.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function sv(e) {
        return e.matches(iv)
      }
      ov.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), ov.join(':not([hidden]):not([tabindex="-1"]),');
      const av = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        lv = e => e && "window" in e && e.window === e ? e : av(e).defaultView || window;

      function uv(e) {
        if (function() {
            if (null == cv) {
              cv = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return cv = !0, !0
                  }
                })
              } catch {}
            }
            return cv
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
      let cv = null;
      let dv = !1;

      function fv(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
      }

      function hv(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function pv(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const mv = pv(function() {
          return hv(/^Mac/i)
        }),
        vv = pv(function() {
          return hv(/^iPhone/i)
        }),
        yv = pv(function() {
          return hv(/^iPad/i) || mv() && navigator.maxTouchPoints > 1
        }),
        gv = pv(function() {
          return vv() || yv()
        }),
        bv = (pv(function() {
          return mv() || gv()
        }), pv(function() {
          return fv(/AppleWebKit/i) && !_v()
        })),
        _v = pv(function() {
          return fv(/Chrome/i)
        }),
        wv = pv(function() {
          return fv(/Android/i)
        }),
        Ev = pv(function() {
          return fv(/Firefox/i)
        });
      let Pv = new Map,
        xv = new Set;

      function Cv() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Pv.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Pv.delete(r.target)), 0 === Pv.size)) {
            for (let e of xv) e();
            xv.clear()
          }
        };
        document.body.addEventListener("transitionrun", r => {
          if (!e(r) || !r.target) return;
          let n = Pv.get(r.target);
          n || (n = new Set, Pv.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Cv() : document.addEventListener("DOMContentLoaded", Cv));
      let Sv = "default",
        Tv = "",
        Ov = new WeakMap;

      function Rv(e) {
        if (gv()) {
          if ("disabled" !== Sv) return;
          Sv = "restoring", setTimeout(() => {
            var t;
            t = () => {
              if ("restoring" === Sv) {
                const t = av(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Tv || ""), Tv = "", Sv = "default"
              }
            }, requestAnimationFrame(() => {
              ! function() {
                for (const [e] of Pv) "isConnected" in e && !e.isConnected && Pv.delete(e)
              }(), 0 === Pv.size ? t() : xv.add(t)
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ov.has(e)) {
          let t = Ov.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Ov.delete(e)
        }
      }
      const jv = M.createContext({
        register: () => {}
      });

      function kv(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      jv.displayName = "PressResponderContext", Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Iv, Nv = new Map;

      function Lv(e, t) {
        if (e === t) return e;
        let r = Nv.get(e);
        if (r) return r.forEach(e => e.current = t), t;
        let n = Nv.get(t);
        return n ? (n.forEach(t => t.current = e), e) : t
      }

      function Dv(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = kv(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Lv(r, o) : t[e] = void 0 !== o ? o : r : t[e] = be(r, o)
          }
        }
        return t
      }
      "undefined" != typeof FinalizationRegistry && (Iv = new FinalizationRegistry(e => {
        Nv.delete(e)
      }));
      const Av = "undefined" != typeof document ? M.useLayoutEffect : () => {};

      function Mv(e) {
        const t = (0, M.useRef)(null);
        return Av(() => {
          t.current = e
        }, [e]), (0, M.useCallback)((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }, [])
      }

      function Hv(e, t) {
        return !(!t || !e) && e.contains(t)
      }

      function Bv(e) {
        return e.target
      }

      function zv(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: a,
          shiftKey: l
        } = t;
        Ev() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (mv() ? i = !0 : s = !0);
        let u = bv() && mv() && !yv() ? new KeyboardEvent("keydown", {
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
        zv.isOpening = r, uv(e), e.dispatchEvent(u), zv.isOpening = !1
      }

      function Vv(e) {
        let t = (0, M.useContext)(jv);
        if (t) {
          let {
            register: r,
            ...n
          } = t;
          e = Dv(n, e), r()
        }
        return function(e, t) {
          Av(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          })
        }(t, e.ref), e
      }
      zv.isOpening = !1;
      var Fv = new WeakMap;
      class Uv {
        continuePropagation() {
          ht(this, Fv, !1)
        }
        get shouldStopPropagation() {
          return dt(this, Fv)
        }
        constructor(e, t, r, n) {
          var o;
          ft(this, Fv, {
            writable: !0,
            value: void 0
          }), ht(this, Fv, !0);
          let i = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const s = null == i ? void 0 : i.getBoundingClientRect();
          let a, l, u = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), s && (null != l && null != c ? (a = l - s.left, u = c - s.top) : (a = s.width / 2, u = s.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = a, this.y = u
        }
      }
      const Gv = Symbol("linkClicked"),
        qv = "react-aria-pressable-style",
        Kv = "data-react-aria-pressable";

      function Xv(e) {
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
          ...h
        } = Vv(e), [p, m] = (0, M.useState)(!1), v = (0, M.useRef)({
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
        }(), b = Mv((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Uv("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        }), _ = Mv((e, n, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Uv("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), m(!1), t && i && !a) {
            let r = new Uv("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        }), w = Mv((e, t) => {
          let r = v.current;
          if (a) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Uv("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        }), E = Mv(e => {
          let t = v.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _($v(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Rv(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), P = Mv(e => {
          c && E(e)
        }), x = Mv(e => {
          null == s || s(e)
        }), C = Mv((e, t) => {
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
                if (Zv(t.nativeEvent, t.currentTarget) && Hv(t.currentTarget, Bv(t.nativeEvent))) {
                  var n;
                  Yv(Bv(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = b(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Zv(t, n) && !t.repeat && Hv(n, Bv(t)) && e.target && w($v(e.target, t), "keyboard")
                      };
                    y(av(t.currentTarget), "keyup", kv(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && mv() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || Hv(t.currentTarget, Bv(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !zv.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (wv() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = w($v(t.currentTarget, t), r),
                        i = _($v(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, x(t), E(t)
                    }
                  } else {
                    let e = b(t, "virtual"),
                      r = w(t, "virtual"),
                      o = _(t, "virtual");
                    x(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Zv(t, e.target)) {
                var n;
                Yv(Bv(t), t.key) && t.preventDefault();
                let r = Bv(t),
                  o = Hv(e.target, Bv(t));
                _($v(e.target, t), "keyboard", o), o && C(t, e.target), g(), "Enter" !== t.key && Wv(e.target) && Hv(e.target, r) && !t[Gv] && (t[Gv] = !0, zv(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !Hv(t.currentTarget, Bv(t.nativeEvent))) return;
              if (o = t.nativeEvent, !wv() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, d || function(e) {
                  if (gv()) {
                    if ("default" === Sv) {
                      const t = av(e);
                      Tv = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Sv = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Ov.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = b(t, e.pointerType);
                let o = Bv(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(av(t.currentTarget), "pointerup", r, !1), y(av(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (Hv(t.currentTarget, Bv(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let r = function(e) {
                    for (; e && !sv(e);) e = e.parentElement;
                    let t = lv(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    dv = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, uv(r), l()))
                      },
                      s = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      a = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, uv(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", a, !0), t.addEventListener("focus", s, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", a, !0), t.removeEventListener("focus", s, !0), dv = !1, n = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              Hv(t.currentTarget, Bv(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || w(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, b($v(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _($v(e.target, t), e.pointerType, !1), P(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (Hv(e.target, Bv(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? E(t) : (uv(e.target), e.target.click()))
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
              Hv(e.currentTarget, Bv(e.nativeEvent)) && E(e)
            }
          }
          return t
        }, [y, a, u, g, d, E, P, _, b, w, x, C]);
        return (0, M.useEffect)(() => {
          if (!f) return;
          const e = av(f.current);
          if (!e || !e.head || e.getElementById(qv)) return;
          const t = e.createElement("style");
          t.id = qv, t.textContent = `\n@layer {\n  [${Kv}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [f]), (0, M.useEffect)(() => {
          let e = v.current;
          return () => {
            var t;
            d || Rv(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [d]), {
          isPressed: l || p,
          pressProps: Dv(h, S, {
            [Kv]: !0
          })
        }
      }

      function Wv(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Zv(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof lv(o).HTMLInputElement && !Jv(o, r) || o instanceof lv(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Wv(o)) && "Enter" !== r)
      }

      function $v(e, t) {
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

      function Yv(e, t) {
        return e instanceof HTMLInputElement ? !Jv(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Wv(e)))
        }(e)
      }
      const Qv = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Jv(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Qv.has(e.type)
      }

      function ey(e) {
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

      function ty(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ry(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ty(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ey(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ny(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        iy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ry(ry({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) oy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ny(e.variantClassNames, e => ny(e, e => e.split(" ")[0]))
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
      const sy = (0, M.createContext)(null);

      function ay() {
        const e = (0, M.useContext)(sy);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ly = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: i = "neutral",
          ...s
        }, a) => {
          const l = (0, V.v6)({
              className: iy({
                status: i
              }),
              "data-testid": t
            }, s),
            u = r ? or.DX : "div";
          return (0, _.jsx)(sy.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: i,
              ...s
            },
            children: (0, _.jsx)(u, {
              ...l,
              ref: a,
              children: e
            })
          })
        }),
        uy = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = ay(), i = (0, V.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: Tr.Check,
            invalid: Tr.X,
            neutral: Tr.TriangleAlert
          }, a = t ? or.DX : s[o];
          return (0, _.jsx)(a, {
            ref: n,
            ...i
          })
        }),
        cy = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            errorId: s
          } = ay(), a = (0, V.v6)({
            "data-testid": t,
            id: s || i
          }, n), l = r ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        });
      var dy = "ScrollArea",
        [fy, hy] = (0, uh.A)(dy),
        [py, my] = fy(dy),
        vy = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...s
          } = e, [a, l] = M.useState(null), [u, c] = M.useState(null), [d, f] = M.useState(null), [h, p] = M.useState(null), [m, v] = M.useState(null), [y, g] = M.useState(0), [b, w] = M.useState(0), [E, P] = M.useState(!1), [x, C] = M.useState(!1), S = (0, lh.s)(t, e => l(e)), T = (0, em.jH)(o);
          return (0, _.jsx)(py, {
            scope: r,
            type: n,
            dir: T,
            scrollHideDelay: i,
            scrollArea: a,
            viewport: u,
            onViewportChange: c,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: P,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: x,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, _.jsx)(ch.sG.div, {
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
      vy.displayName = dy;
      var yy = "ScrollAreaViewport",
        gy = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, s = my(yy, r), a = M.useRef(null), l = (0, lh.s)(t, a, s.onViewportChange);
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, _.jsx)(ch.sG.div, {
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
      gy.displayName = yy;
      var by = "ScrollAreaScrollbar",
        _y = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = my(by, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: s
          } = o, a = "horizontal" === e.orientation;
          return M.useEffect(() => (a ? i(!0) : s(!0), () => {
            a ? i(!1) : s(!1)
          }), [a, i, s]), "hover" === o.type ? (0, _.jsx)(wy, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, _.jsx)(Ey, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, _.jsx)(Py, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, _.jsx)(xy, {
            ...n,
            ref: t
          }) : null
        });
      _y.displayName = by;
      var wy = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = my(by, e.__scopeScrollArea), [i, s] = M.useState(!1);
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, _.jsx)(up.C, {
            present: r || i,
            children: (0, _.jsx)(Py, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Ey = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = my(by, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Fy(() => l("SCROLL_END"), 100), [a, l] = (u = {
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
          }, M.useReducer((e, t) => u[e][t] ?? e, "hidden"));
          var u;
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
          }, [o.viewport, i, l, s]), (0, _.jsx)(up.C, {
            present: r || "hidden" !== a,
            children: (0, _.jsx)(xy, {
              "data-state": "hidden" === a ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ah.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, ah.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        Py = M.forwardRef((e, t) => {
          const r = my(by, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = M.useState(!1),
            a = "horizontal" === e.orientation,
            l = Fy(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(a ? e : t)
              }
            }, 10);
          return Uy(r.viewport, l), Uy(r.content, l), (0, _.jsx)(up.C, {
            present: n || i,
            children: (0, _.jsx)(xy, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        xy = M.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = my(by, e.__scopeScrollArea), i = M.useRef(null), s = M.useRef(0), [a, l] = M.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = Ay(a.viewport, a.content), c = {
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
              const o = My(r),
                i = t || o / 2,
                s = o - i,
                a = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                u = r.content - r.viewport;
              return By([a, l], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
            }(e, s.current, a, t)
          }
          return "horizontal" === r ? (0, _.jsx)(Cy, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Hy(o.viewport.scrollLeft, a, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, _.jsx)(Sy, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Hy(o.viewport.scrollTop, a);
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
        Cy = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = my(by, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), u = (0, lh.s)(t, l, i.onScrollbarXChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(Ry, {
            "data-orientation": "horizontal",
            ...o,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": My(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), zy(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Dy(s.paddingLeft),
                  paddingEnd: Dy(s.paddingRight)
                }
              })
            }
          })
        }),
        Sy = M.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = my(by, e.__scopeScrollArea), [s, a] = M.useState(), l = M.useRef(null), u = (0, lh.s)(t, l, i.onScrollbarYChange);
          return M.useEffect(() => {
            l.current && a(getComputedStyle(l.current))
          }, [l]), (0, _.jsx)(Ry, {
            "data-orientation": "vertical",
            ...o,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": My(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), zy(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && i.viewport && s && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Dy(s.paddingTop),
                  paddingEnd: Dy(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Ty, Oy] = fy(by),
        Ry = M.forwardRef((e, t) => {
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
          } = e, h = my(by, r), [p, m] = M.useState(null), v = (0, lh.s)(t, e => m(e)), y = M.useRef(null), g = M.useRef(""), b = h.viewport, w = n.content - n.viewport, E = (0, dh.c)(c), P = (0, dh.c)(l), x = Fy(d, 10);

          function C(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              u({
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
          }, [b, p, w, E]), M.useEffect(P, [n, P]), Uy(p, x), Uy(h.content, x), (0, _.jsx)(Ty, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, dh.c)(i),
            onThumbPointerUp: (0, dh.c)(s),
            onThumbPositionChange: P,
            onThumbPointerDown: (0, dh.c)(a),
            children: (0, _.jsx)(ch.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ah.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, ah.mK)(e.onPointerMove, C),
              onPointerUp: (0, ah.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        jy = "ScrollAreaThumb",
        ky = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Oy(jy, e.__scopeScrollArea);
          return (0, _.jsx)(up.C, {
            present: r || o.hasThumb,
            children: (0, _.jsx)(Iy, {
              ref: t,
              ...n
            })
          })
        }),
        Iy = M.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = my(jy, r), s = Oy(jy, r), {
            onThumbPositionChange: a
          } = s, l = (0, lh.s)(t, e => s.onThumbChange(e)), u = M.useRef(void 0), c = Fy(() => {
            u.current && (u.current(), u.current = void 0)
          }, 100);
          return M.useEffect(() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (c(), !u.current) {
                  const t = Vy(e, a);
                  u.current = t, a()
                }
              };
              return a(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [i.viewport, c, a]), (0, _.jsx)(ch.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ah.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ah.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      ky.displayName = jy;
      var Ny = "ScrollAreaCorner";
      M.forwardRef((e, t) => {
        const r = my(Ny, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, _.jsx)(Ly, {
          ...e,
          ref: t
        }) : null
      }).displayName = Ny;
      var Ly = M.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = my(Ny, r), [i, s] = M.useState(0), [a, l] = M.useState(0), u = Boolean(i && a);
        return Uy(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), Uy(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), u ? (0, _.jsx)(ch.sG.div, {
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

      function Dy(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Ay(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function My(e) {
        const t = Ay(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Hy(e, t, r = "ltr") {
        const n = My(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          s = t.content - t.viewport,
          a = i - n,
          l = Jp(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return By([0, s], [0, a])(l)
      }

      function By(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function zy(e, t) {
        return e > 0 && e < t
      }
      var Vy = (e, t = () => {}) => {
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

      function Fy(e, t) {
        const r = (0, dh.c)(e),
          n = M.useRef(0);
        return M.useEffect(() => () => window.clearTimeout(n.current), []), M.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Uy(e, t) {
        const r = (0, dh.c)(t);
        (0, Hh.N)(() => {
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
      var Gy = vy,
        qy = gy,
        Ky = _y,
        Xy = ky,
        Wy = 0;

      function Zy() {
        M.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? $y()), document.body.insertAdjacentElement("beforeend", e[1] ?? $y()), Wy++, () => {
            1 === Wy && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), Wy--
          }
        }, [])
      }

      function $y() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var Yy = "focusScope.autoFocusOnMount",
        Qy = "focusScope.autoFocusOnUnmount",
        Jy = {
          bubbles: !1,
          cancelable: !0
        },
        eg = M.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...s
          } = e, [a, l] = M.useState(null), u = (0, dh.c)(o), c = (0, dh.c)(i), d = M.useRef(null), f = (0, lh.s)(t, e => l(e)), h = M.useRef({
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
                  a.contains(t) ? d.current = t : og(d.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (h.paused || !a) return;
                  const t = e.relatedTarget;
                  null !== t && (a.contains(t) || og(d.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && og(a)
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
              ig.add(h);
              const e = document.activeElement;
              if (!a.contains(e)) {
                const t = new CustomEvent(Yy, Jy);
                a.addEventListener(Yy, u), a.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (og(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(tg(a).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && og(a))
              }
              return () => {
                a.removeEventListener(Yy, u), setTimeout(() => {
                  const t = new CustomEvent(Qy, Jy);
                  a.addEventListener(Qy, c), a.dispatchEvent(t), t.defaultPrevented || og(e ?? document.body, {
                    select: !0
                  }), a.removeEventListener(Qy, c), ig.remove(h)
                }, 0)
              }
            }
          }, [a, u, c, h]);
          const p = M.useCallback(e => {
            if (!r && !n) return;
            if (h.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, i] = function(e) {
                  const t = tg(e);
                  return [rg(t, e), rg(t.reverse(), e)]
                }(t);
              n && i ? e.shiftKey || o !== i ? e.shiftKey && o === n && (e.preventDefault(), r && og(i, {
                select: !0
              })) : (e.preventDefault(), r && og(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, h.paused]);
          return (0, _.jsx)(ch.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: p
          })
        });

      function tg(e) {
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

      function rg(e, t) {
        for (const r of e)
          if (!ng(r, {
              upTo: t
            })) return r
      }

      function ng(e, {
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

      function og(e, {
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
      eg.displayName = "FocusScope";
      var ig = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = sg(e, t), e.unshift(t)
          },
          remove(t) {
            e = sg(e, t), e[0]?.resume()
          }
        }
      }();

      function sg(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var ag = r(94926),
        lg = r(97359),
        ug = [" ", "Enter", "ArrowUp", "ArrowDown"],
        cg = [" ", "Enter"],
        dg = "Select",
        [fg, hg, pg] = (0, rm.N)(dg),
        [mg, vg] = (0, uh.A)(dg, [pg, Fh]),
        yg = Fh(),
        [gg, bg] = mg(dg),
        [_g, wg] = mg(dg),
        Eg = e => {
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
            required: h,
            form: p
          } = e, m = yg(t), [v, y] = M.useState(null), [g, b] = M.useState(null), [w, E] = M.useState(!1), P = (0, em.jH)(u), [x, C] = (0, cp.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: dg
          }), [S, T] = (0, cp.i)({
            prop: s,
            defaultProp: a,
            onChange: l,
            caller: dg
          }), O = M.useRef(null), R = !v || p || !!v.closest("form"), [j, k] = M.useState(new Set), I = Array.from(j).map(e => e.props.value).join(";");
          return (0, _.jsx)(op, {
            ...m,
            children: (0, _.jsxs)(gg, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: E,
              contentId: (0, wh.B)(),
              value: S,
              onValueChange: T,
              open: x,
              onOpenChange: C,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: f,
              children: [(0, _.jsx)(fg.Provider, {
                scope: t,
                children: (0, _.jsx)(_g, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: M.useCallback(e => {
                    k(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: M.useCallback(e => {
                    k(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), R ? (0, _.jsxs)(nb, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: c,
                autoComplete: d,
                value: S,
                onChange: e => T(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, _.jsx)("option", {
                  value: ""
                }) : null, Array.from(j)]
              }, I) : null]
            })
          })
        };
      Eg.displayName = dg;
      var Pg = "SelectTrigger",
        xg = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = yg(r), s = bg(Pg, r), a = s.disabled || n, l = (0, lh.s)(t, s.onTriggerChange), u = hg(r), c = M.useRef("touch"), [d, f, h] = ib(e => {
            const t = u().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = sb(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), p = e => {
            a || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, _.jsx)(ip, {
            asChild: !0,
            ...i,
            children: (0, _.jsx)(ch.sG.button, {
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
              "data-placeholder": ob(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, ah.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && p(e)
              }),
              onPointerDown: (0, ah.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, ah.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || ug.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      xg.displayName = Pg;
      var Cg = "SelectValue",
        Sg = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...a
          } = e, l = bg(Cg, r), {
            onValueNodeHasChildrenChange: u
          } = l, c = void 0 !== i, d = (0, lh.s)(t, l.onValueNodeChange);
          return (0, Hh.N)(() => {
            u(c)
          }, [u, c]), (0, _.jsx)(ch.sG.span, {
            ...a,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: ob(l.value) ? (0, _.jsx)(_.Fragment, {
              children: s
            }) : i
          })
        });
      Sg.displayName = Cg;
      var Tg = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, _.jsx)(ch.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Tg.displayName = "SelectIcon";
      var Og = e => (0, _.jsx)(lp, {
        asChild: !0,
        ...e
      });
      Og.displayName = "SelectPortal";
      var Rg = "SelectContent",
        jg = M.forwardRef((e, t) => {
          const r = bg(Rg, e.__scopeSelect),
            [n, o] = M.useState();
          if ((0, Hh.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? Ct.createPortal((0, _.jsx)(Ig, {
              scope: e.__scopeSelect,
              children: (0, _.jsx)(fg.Slot, {
                scope: e.__scopeSelect,
                children: (0, _.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, _.jsx)(Dg, {
            ...e,
            ref: t
          })
        });
      jg.displayName = Rg;
      var kg = 10,
        [Ig, Ng] = mg(Rg),
        Lg = (0, du.TL)("SelectContent.RemoveScroll"),
        Dg = M.forwardRef((e, t) => {
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
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v,
            ...y
          } = e, g = bg(Rg, r), [b, w] = M.useState(null), [E, P] = M.useState(null), x = (0, lh.s)(t, e => w(e)), [C, S] = M.useState(null), [T, O] = M.useState(null), R = hg(r), [j, k] = M.useState(!1), I = M.useRef(!1);
          M.useEffect(() => {
            if (b) return (0, ag.Eq)(b)
          }, [b]), Zy();
          const N = M.useCallback(e => {
              const [t, ...r] = R().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && E && (E.scrollTop = 0), r === n && E && (E.scrollTop = E.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [R, E]),
            L = M.useCallback(() => N([C, b]), [N, C, b]);
          M.useEffect(() => {
            j && L()
          }, [j, L]);
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
          const [H, B] = ib(e => {
            const t = R().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = sb(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), z = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), V = M.useCallback(() => b?.focus(), [b]), F = M.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && O(e)
          }, [g.value]), U = "popper" === n ? Mg : Ag, G = U === Mg ? {
            side: a,
            sideOffset: l,
            align: u,
            alignOffset: c,
            arrowPadding: d,
            collisionBoundary: f,
            collisionPadding: h,
            sticky: p,
            hideWhenDetached: m,
            avoidCollisions: v
          } : {};
          return (0, _.jsx)(Ig, {
            scope: r,
            content: b,
            viewport: E,
            onViewportChange: P,
            itemRefCallback: z,
            selectedItem: C,
            onItemLeave: V,
            itemTextRefCallback: F,
            focusSelectedItem: L,
            selectedItemText: T,
            position: n,
            isPositioned: j,
            searchRef: H,
            children: (0, _.jsx)(lg.A, {
              as: Lg,
              allowPinchZoom: !0,
              children: (0, _.jsx)(eg, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ah.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, _.jsx)(mh, {
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
                    onPlaced: () => k(!0),
                    ref: x,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, ah.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
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
      Dg.displayName = "SelectContentImpl";
      var Ag = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = bg(Rg, r), s = Ng(Rg, r), [a, l] = M.useState(null), [u, c] = M.useState(null), d = (0, lh.s)(t, e => c(e)), f = hg(r), h = M.useRef(!1), p = M.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = M.useCallback(() => {
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
                c = window.innerWidth - kg,
                d = Jp(i, [kg, Math.max(kg, c - u)]);
              a.style.minWidth = l + "px", a.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - i,
                l = e.width + s,
                u = Math.max(l, t.width),
                c = window.innerWidth - kg,
                d = Jp(i, [kg, Math.max(kg, c - u)]);
              a.style.minWidth = l + "px", a.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * kg,
              c = m.scrollHeight,
              d = window.getComputedStyle(u),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + c + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              E = window.getComputedStyle(m),
              P = parseInt(E.paddingTop, 10),
              x = parseInt(E.paddingBottom, 10),
              C = e.top + e.height / 2 - kg,
              S = l - C,
              T = v.offsetHeight / 2,
              O = p + g + (v.offsetTop + T),
              R = _ - O;
            if (O <= C) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              a.style.bottom = "0px";
              const t = u.clientHeight - m.offsetTop - m.offsetHeight,
                r = O + Math.max(S, T + (e ? x : 0) + t + b);
              a.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              a.style.top = "0px";
              const t = Math.max(C, p + m.offsetTop + (e ? P : 0) + T) + R;
              a.style.height = t + "px", m.scrollTop = O - C + m.offsetTop
            }
            a.style.margin = `${kg}px 0`, a.style.minHeight = w + "px", a.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, i.trigger, i.valueNode, a, u, m, v, y, i.dir, n]);
        (0, Hh.N)(() => b(), [b]);
        const [w, E] = M.useState();
        (0, Hh.N)(() => {
          u && E(window.getComputedStyle(u).zIndex)
        }, [u]);
        const P = M.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, _.jsx)(Hg, {
          scope: r,
          contentWrapper: a,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: P,
          children: (0, _.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, _.jsx)(ch.sG.div, {
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
      Ag.displayName = "SelectItemAlignedPosition";
      var Mg = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = kg,
          ...i
        } = e, s = yg(r);
        return (0, _.jsx)(sp, {
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
      Mg.displayName = "SelectPopperPosition";
      var [Hg, Bg] = mg(Rg, {}), zg = "SelectViewport", Vg = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Ng(zg, r), s = Bg(zg, r), a = (0, lh.s)(t, i.onViewportChange), l = M.useRef(0);
        return (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, _.jsx)(fg.Slot, {
            scope: r,
            children: (0, _.jsx)(ch.sG.div, {
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
              onScroll: (0, ah.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * kg,
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
      Vg.displayName = zg;
      var Fg = "SelectGroup",
        [Ug, Gg] = mg(Fg);
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, wh.B)();
        return (0, _.jsx)(Ug, {
          scope: r,
          id: o,
          children: (0, _.jsx)(ch.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Fg;
      var qg = "SelectLabel";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Gg(qg, r);
        return (0, _.jsx)(ch.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = qg;
      var Kg = "SelectItem",
        [Xg, Wg] = mg(Kg),
        Zg = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...s
          } = e, a = bg(Kg, r), l = Ng(Kg, r), u = a.value === n, [c, d] = M.useState(i ?? ""), [f, h] = M.useState(!1), p = (0, lh.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, wh.B)(), v = M.useRef("touch"), y = () => {
            o || (a.onValueChange(n), a.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, _.jsx)(Xg, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: u,
            onItemTextChange: M.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, _.jsx)(fg.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, _.jsx)(ch.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": u && f,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: p,
                onFocus: (0, ah.mK)(s.onFocus, () => h(!0)),
                onBlur: (0, ah.mK)(s.onBlur, () => h(!1)),
                onClick: (0, ah.mK)(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, ah.mK)(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, ah.mK)(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, ah.mK)(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ah.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, ah.mK)(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (cg.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Zg.displayName = Kg;
      var $g = "SelectItemText",
        Yg = M.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, s = bg($g, r), a = Ng($g, r), l = Wg($g, r), u = wg($g, r), [c, d] = M.useState(null), f = (0, lh.s)(t, e => d(e), l.onItemTextChange, e => a.itemTextRefCallback?.(e, l.value, l.disabled)), h = c?.textContent, p = M.useMemo(() => (0, _.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = u;
          return (0, Hh.N)(() => (m(p), () => v(p)), [m, v, p]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(ch.sG.span, {
              id: l.textId,
              ...i,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Ct.createPortal(i.children, s.valueNode) : null]
          })
        });
      Yg.displayName = $g;
      var Qg = "SelectItemIndicator";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Wg(Qg, r).isSelected ? (0, _.jsx)(ch.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Qg;
      var Jg = "SelectScrollUpButton";
      M.forwardRef((e, t) => {
        const r = Ng(Jg, e.__scopeSelect),
          n = Bg(Jg, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, lh.s)(t, n.onScrollButtonChange);
        return (0, Hh.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(tb, {
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
      }).displayName = Jg;
      var eb = "SelectScrollDownButton";
      M.forwardRef((e, t) => {
        const r = Ng(eb, e.__scopeSelect),
          n = Bg(eb, e.__scopeSelect),
          [o, i] = M.useState(!1),
          s = (0, lh.s)(t, n.onScrollButtonChange);
        return (0, Hh.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, _.jsx)(tb, {
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
      }).displayName = eb;
      var tb = M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Ng("SelectScrollButton", r), s = M.useRef(null), a = hg(r), l = M.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return M.useEffect(() => () => l(), [l]), (0, Hh.N)(() => {
          const e = a().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [a]), (0, _.jsx)(ch.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ah.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ah.mK)(o.onPointerMove, () => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, ah.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, _.jsx)(ch.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var rb = "SelectArrow";
      M.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = yg(r), i = bg(rb, r), s = Ng(rb, r);
        return i.open && "popper" === s.position ? (0, _.jsx)(ap, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = rb;
      var nb = M.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = M.useRef(null),
          i = (0, lh.s)(n, o),
          s = tm(t);
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
        }, [s, t]), (0, _.jsx)(ch.sG.select, {
          ...r,
          style: {
            ...dp.Qg,
            ...r.style
          },
          ref: i,
          defaultValue: t
        })
      });

      function ob(e) {
        return "" === e || void 0 === e
      }

      function ib(e) {
        const t = (0, dh.c)(e),
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

      function sb(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (s = e, a = Math.max(o, 0), s.map((e, t) => s[(a + t) % s.length]));
        var s, a;
        1 === n.length && (i = i.filter(e => e !== r));
        const l = i.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      nb.displayName = "SelectBubbleInput";
      var ab = Eg,
        lb = xg,
        ub = Sg,
        cb = Tg,
        db = Og,
        fb = jg,
        hb = Vg,
        pb = Zg,
        mb = Yg;

      function vb(e) {
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

      function yb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yb(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = vb(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _b = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gb(gb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) _b(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bb(e.variantClassNames, e => bb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Eb = wb({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Pb = wb({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xb = wb({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Cb = wb({
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
        Sb = wb({
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
        Tb = wb({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ob = (0, M.createContext)(null);

      function Rb() {
        const e = (0, M.useContext)(Ob);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const jb = (0, M.forwardRef)(({
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
          status: h = "neutral",
          ...p
        }, m) => {
          const v = X((0, M.useRef)(null), m),
            y = (0, M.useId)(),
            g = (0, M.useId)(),
            b = (0, M.useId)(),
            w = (0, M.useId)(),
            E = (0, M.useId)(),
            P = (0, M.useId)(),
            [x = !1, C] = $({
              prop: d,
              defaultProp: u,
              onChange: c
            }),
            S = (0, V.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, _.jsx)(Ob.Provider, {
            value: {
              labelId: y,
              errorId: g,
              descriptionId: b,
              triggerId: P,
              hintId: w,
              popoverId: E,
              defaultValue: i,
              onValueChange: s,
              value: l,
              isOpen: x,
              setIsOpen: C,
              defaultOpen: u,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: h,
              size: f
            },
            children: (0, _.jsx)(ab, {
              required: r,
              disabled: n,
              open: x,
              onOpenChange: () => C(!o && !x),
              value: l,
              defaultValue: i,
              onValueChange: s,
              name: a,
              children: (0, _.jsx)("div", {
                ref: v,
                ...S,
                children: e
              })
            })
          })
        }),
        kb = (0, M.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: i
          } = Rb(), s = (0, V.v6)({
            id: i,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Eb({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, _.jsx)(fb, {
            ...s,
            ref: o,
            children: (0, _.jsx)(hb, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Ib = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(Gy, {
            ...o,
            ref: n,
            children: [(0, _.jsx)(qy, {
              className: "foundry_uaq1gwu",
              style: {
                overflowY: void 0
              },
              children: e
            }), (0, _.jsx)(Ky, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, _.jsx)(Xy, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Nb = (0, M.forwardRef)(({
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
            popoverId: h,
            descriptionId: p,
            isOpen: m,
            value: v,
            size: y
          } = Rb(), {
            isPressed: g,
            pressProps: b
          } = Xv({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, V.v6)({
            id: f,
            className: Sb({
              size: y,
              isReadOnly: !!a,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!u
            }),
            "aria-labelledby": (0, V.VW)(r, c, d),
            "aria-describedby": (0, V.VW)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, V.cJ)(b, "onKeyDown"), i), E = o ? or.DX : lb;
          return (0, _.jsx)(E, {
            ...w,
            ref: s,
            children: e
          })
        }),
        Lb = (0, M.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            value: i
          } = Rb(), s = (0, V.v6)({
            className: "foundry_uaq1gwh",
            "data-testid": r
          }, n), a = t ? or.DX : "span";
          return (0, _.jsx)(a, {
            ...s,
            ref: o,
            children: (0, _.jsx)(ub, {
              placeholder: e,
              "aria-label": i
            })
          })
        }),
        Db = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: i,
            isOpen: s
          } = Rb(), a = s ? Tr.ChevronUp : Tr.ChevronDown, l = (0, V.v6)({
            asChild: !0,
            className: Tb({
              isDisabled: i || o
            }),
            "data-testid": t
          }, r);
          return (0, _.jsx)(cb, {
            ...l,
            ref: n,
            children: e || (0, _.jsx)(a, {
              size: "LG",
              label: ""
            })
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
            isDisabled: l,
            labelId: u,
            triggerId: c
          } = Rb(), d = a && !o, f = (0, V.v6)({
            id: i.id || u,
            htmlFor: c,
            "data-testid": e,
            className: Cb({
              showAsterisk: d,
              isDisabled: l
            })
          }, i), h = t ? or.DX : "label";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        Mb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = Rb(), a = (0, V.v6)({
            className: Pb({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Hb = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = Rb(), a = (0, V.v6)({
            className: xb({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Bb = (0, M.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, i) => {
          const s = X((0, M.useRef)(null), i),
            a = (0, V.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, _.jsx)(pb, {
            ref: s,
            ...a,
            children: e
          })
        }),
        zb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, _.jsx)(mb, {
            ref: n,
            asChild: !0,
            children: (0, _.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Vb = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, _.jsx)(cb, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Fb = db,
        Ub = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = Rb(), a = (0, V.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? or.DX : ly;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Gb = uy,
        qb = cy;

      function Kb(e, t, r) {
        let n = ne(() => {
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

      function Xb(e, t, r) {
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
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g
        } = e, {
          pressProps: b,
          isPressed: _
        } = kt({
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
        } = kt({
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
          focusableProps: P
        } = Jt(e, r), x = _e(b, P), C = Te(e, {
          labelable: !0
        });
        return Kb(r, t.defaultSelected, t.setSelected), {
          labelProps: _e(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: _e(C, {
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
            ...x
          }),
          isSelected: t.isSelected,
          isPressed: _ || E,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }

      function Wb(e, t, r) {
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

      function Zb(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Wb(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, M.useState)(r);
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

      function Yb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yb(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $b(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yb(Object(r)).forEach(function(t) {
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
      var e_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        t_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qb(Qb({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) e_(u, n, e.defaultVariants) && (r += " " + c);
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
        r_ = t_({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        n_ = t_({
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
        o_ = t_({
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
        i_ = t_({
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
        s_ = t_({
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
      const a_ = (0, M.createContext)(null);

      function l_() {
        const e = (0, M.useContext)(a_);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const u_ = (0, M.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: i = !1,
          isReadOnly: s = !1,
          ...a
        }, l) => {
          const u = (0, V.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, a),
            c = n ? or.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)();
          return (0, _.jsx)(a_.Provider, {
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
            children: (0, _.jsx)(c, {
              ...u,
              ref: l,
              children: o
            })
          })
        }),
        c_ = (0, M.forwardRef)(({
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
          const h = (0, M.useRef)(null),
            p = X(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: E
            } = l_(),
            P = Zb({
              isDisabled: w,
              isReadOnly: E,
              isSelected: s,
              defaultSelected: a,
              onChange: l
            }),
            {
              inputProps: x
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: i,
                isPressed: s,
                isDisabled: a,
                isReadOnly: l
              } = Xb(e, t, r);
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
              name: u,
              value: c,
              isDisabled: w,
              isReadOnly: E
            }, P, h),
            C = (0, V.v6)({
              className: s_({
                appearance: v
              }),
              "data-state": P.isSelected ? "selected" : "unselected",
              "data-disabled": w || E,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || E || P.toggle()
              }
            }, d);
          return (0, _.jsxs)("div", {
            ...C,
            children: [(0, _.jsx)(or.s6, {
              children: (0, _.jsx)("input", {
                ...x,
                ref: p
              })
            }), (0, _.jsx)("div", {
              className: i_({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, _.jsx)("div", {
                className: n_({
                  size: m,
                  isSelected: P.isSelected
                })
              })
            })]
          })
        }),
        d_ = (0, M.forwardRef)(({
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
          } = l_(), c = (0, V.v6)({
            id: o.id || a,
            htmlFor: l,
            "data-testid": e,
            className: o_({
              isDisabled: s,
              size: u
            })
          }, o), d = t ? or.DX : "label";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...c,
              ref: i,
              children: r
            })
          })
        }),
        f_ = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = l_(), a = n.id || s, l = (0, V.v6)({
            className: r_({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), u = t ? or.DX : "div";
          return (0, _.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        h_ = {
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
        p_ = {
          ...h_,
          customError: !0,
          valid: !1
        },
        m_ = {
          isInvalid: !1,
          validationDetails: h_,
          validationErrors: []
        },
        v_ = (0, M.createContext)({}),
        y_ = "__formValidationState" + Date.now();

      function g_(e) {
        if (e[y_]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[y_];
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
              validationDetails: p_
            } : null,
            u = (0, M.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return b_(r)
                }
                return []
              }(s, o);
              return __(e)
            }, [s, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let c = (0, M.useContext)(v_),
            d = (0, M.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => b_(c[e])) : b_(c[n]) : [], [c, n]),
            [f, h] = (0, M.useState)(c),
            [p, m] = (0, M.useState)(!1);
          c !== f && (h(c), m(!1));
          let v = (0, M.useMemo)(() => __(p ? [] : d), [p, d]),
            y = (0, M.useRef)(m_),
            [g, b] = (0, M.useState)(m_),
            _ = (0, M.useRef)(m_),
            [w, E] = (0, M.useState)(!1);
          return (0, M.useEffect)(() => {
            if (!w) return;
            E(!1);
            let e = u || i || y.current;
            w_(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || u || i || m_,
            displayValidation: "native" === a ? l || v || g : l || v || u || i || g,
            updateValidation(e) {
              "aria" !== a || w_(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = m_;
              w_(e, _.current) || (_.current = e, b(e)), "native" === a && E(!1), m(!0)
            },
            commitValidation() {
              "native" === a && E(!0), m(!0)
            }
          }
        }(e)
      }

      function b_(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function __(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: p_
        } : null
      }

      function w_(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }

      function E_(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        ee(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: P_(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let i = (0, M.useRef)(!1),
          s = ne(() => {
            i.current || t.resetValidation()
          }),
          a = ne(e => {
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
            }(i) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), Ht = "keyboard", Ut("keyboard", null)), e.preventDefault()
          }),
          l = ne(() => {
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

      function P_(e) {
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
      const x_ = ({
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
        C_ = ({
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
        S_ = ({
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
        T_ = ({
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
        O_ = ({
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
        R_ = ({
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

      function j_(e) {
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

      function I_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? k_(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = j_(o)) in n ? Object.defineProperty(n, o, {
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

      function N_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var L_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        D_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = I_(I_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) L_(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return N_(e.variantClassNames, e => N_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        A_ = D_({
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
        M_ = D_({
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
        H_ = D_({
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
        B_ = D_({
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
      const z_ = (0, M.createContext)(null);

      function V_() {
        const e = (0, M.useContext)(z_);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const F_ = (0, M.forwardRef)(({
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
            l = n ? or.DX : "div",
            u = (0, M.useId)(),
            c = (0, M.useId)(),
            d = (0, M.useId)();
          return (0, _.jsx)(z_.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: c,
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
        U_ = (0, M.forwardRef)(({
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
            size: h,
            appearance: p,
            isIndeterminate: m,
            isRequired: v,
            descriptionId: y,
            labelId: g,
            inputId: b,
            ...w
          } = V_(), E = (0, M.useRef)(null), P = d.id || b, {
            isPressed: x,
            pressProps: C
          } = Xv({
            ref: E
          }), {
            setSelected: S,
            toggle: T,
            ...O
          } = Zb({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: R,
            isSelected: j,
            isDisabled: k,
            isReadOnly: I
          } = function(e, t, r) {
            let n = g_({
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
              } = Xb({
                ...e,
                isInvalid: o
              }, t, r);
            E_(e, n, r);
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
            } = kt({
              isDisabled: d || f,
              onPress() {
                let {
                  [y_]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: _e(a, v, (0, M.useMemo)(() => ({
                onMouseDown: e => e.preventDefault()
              }), [])),
              inputProps: {
                ...l,
                checked: u,
                "aria-required": p && "aria" === m || void 0,
                required: p && "native" === m
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
            id: P,
            name: o,
            ...w
          }, {
            ...O,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : S
          }, E), N = (0, V.v6)({
            className: M_({
              size: h
            }),
            onClick: e => {
              i?.(e) ?? s?.(e), e.defaultPrevented || k || I || T()
            }
          }, C, d), L = (0, V.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, V.VW)(c, g),
            "aria-describedby": (0, V.VW)(l, y),
            "aria-errormessage": (0, V.VW)(u, w.isInvalid ? y : void 0),
            "aria-required": v,
            required: v
          }, R), D = m ? a[`Dash${h}`] : a[`Check${h}`];
          return (0, _.jsxs)("div", {
            ...N,
            children: [(0, _.jsx)(or.s6, {
              children: (0, _.jsx)("input", {
                ...L,
                ref: f
              })
            }), (0, _.jsx)("div", {
              className: A_({
                size: h,
                appearance: p
              }),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : j ? "checked" : "unchecked",
              "data-disabled": k || I,
              "data-testid": e,
              "data-pressed": x,
              children: (0, _.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (j || m) && (0, _.jsx)(D, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        G_ = (0, M.forwardRef)(({
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
          } = V_(), d = i.id || l, f = c && !o, h = (0, V.v6)({
            className: B_({
              size: a,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: i.htmlFor || u
          }, i), p = t ? or.DX : "label";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(p, {
              ...h,
              ref: s,
              children: e
            })
          })
        }),
        q_ = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = V_(), a = n.id || s, l = (0, V.v6)({
            className: H_({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), u = t ? or.DX : "div";
          return (0, _.jsx)(u, {
            ...l,
            ref: o,
            children: e
          })
        }),
        K_ = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = V_(), s = n.id || i, a = (0, V.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
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

      function Z_(e) {
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
      var Y_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Q_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Z_(Z_({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Y_(u, n, e.defaultVariants) && (r += " " + c);
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
        J_ = Q_({
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
        ew = Q_({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tw = Q_({
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
        rw = Q_({
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
      const nw = (0, M.createContext)(null);

      function ow() {
        const e = (0, M.useContext)(nw);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const iw = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const u = (0, V.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, a),
            c = e ? or.DX : "div",
            d = (0, M.useId)(),
            f = (0, M.useId)(),
            h = (0, M.useId)(),
            p = (0, M.useId)();
          return (0, _.jsx)(nw.Provider, {
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
            children: (0, _.jsx)(c, {
              ref: l,
              ...u,
              children: t
            })
          })
        }),
        sw = (0, M.forwardRef)(({
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
          } = ow(), d = (0, V.v6)({
            className: tw({
              isDisabled: u,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: a,
            htmlFor: l
          }, i), f = t ? or.DX : "label";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        aw = (0, M.forwardRef)(({
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
            inputId: h,
            hintId: p,
            isDisabled: m,
            isRequired: v,
            isReadOnly: y,
            status: g
          } = ow(), b = X((0, M.useRef)(null), c), {
            isPressed: w,
            pressProps: E
          } = Xv({}), P = (0, V.v6)({
            className: rw({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isPressed: w,
              isSuccess: "success" === g
            }),
            name: i,
            id: u.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, V.VW)(u.id, f, p, a),
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
          }, E, u), x = e ? or.DX : "textarea";
          return (0, _.jsx)(x, {
            ref: b,
            ...P,
            children: t
          })
        }),
        lw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = ow(), a = (0, V.v6)({
            className: J_({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        uw = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: i,
            isDisabled: s
          } = ow(), a = (0, V.v6)({
            className: ew({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        cw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = ow(), a = (0, V.v6)({
            className: "foundry_vq8c3jm",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? or.DX : ly;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        dw = uy,
        fw = cy;
      let hw = Math.round(1e10 * Math.random()),
        pw = 0;
      const mw = new WeakMap;

      function vw(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
      }
      class yw {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new gw({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && vw(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new yw;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new gw({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class gw {
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

      function bw(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = ve(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function _w(e) {
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
          t = ve(t);
          let s = ve(),
            a = {};
          return r && (n = n ? `${s} ${n}` : s, a = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: a,
            fieldProps: bw({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), a = ge([Boolean(t), Boolean(r), n, o]), l = ge([Boolean(t), Boolean(r), n, o]);
        return s = _e(s, {
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
      new yw;
      const ww = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Ew = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Pw(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return ww.has(t.script)
        }
        let t = e.split("-")[0];
        return Ew.has(t)
      }
      const xw = Symbol.for("react-aria.i18n.locale");

      function Cw() {
        let e = "undefined" != typeof window && window[xw] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Pw(e) ? "rtl" : "ltr"
        }
      }
      let Sw = Cw(),
        Tw = new Set;

      function Ow() {
        Sw = Cw();
        for (let e of Tw) e(Sw)
      }
      const Rw = M.createContext(null);

      function jw() {
        let e = function() {
          let e = fe(),
            [t, r] = (0, M.useState)(Sw);
          return (0, M.useEffect)(() => (0 === Tw.size && window.addEventListener("languagechange", Ow), Tw.add(r), () => {
            Tw.delete(r), 0 === Tw.size && window.removeEventListener("languagechange", Ow)
          }), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, M.useContext)(Rw) || e
      }

      function kw(e, t) {
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
        } = jw(), {
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = _w({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = Te(e, {
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
          } = mt(), l = (0, M.useCallback)(e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, a(), r && r(e), o && o(!1))
          }, [r, o, i, a]), u = Fe(l), c = (0, M.useCallback)(e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = Oe(e.target),
              r = yt(t);
            if (!i.current.isFocusWithin && r === gt(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              s(t, "focus", e => {
                if (i.current.isFocusWithin && !vt(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Ve(n, r);
                  let o = ze(n);
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
        }), b = ve(r);
        return mw.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: _e(y, {
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
              let n, o = function(e, t, r) {
                let n = (null == t ? void 0 : t.tabbable) ? Ae : De,
                  o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
                  i = Oe(o),
                  s = function(e, t, r, n) {
                    return e.createTreeWalker(t, r, n)
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
                            } else t = [...Oe(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(e => !e.form);
                            return !!t && !t.some(e => e.checked)
                          }(e)) return NodeFilter.FILTER_REJECT;
                        if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
                      }
                      return !n(e) || r && !vw(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                    }
                  });
                return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
              }(e.currentTarget, {
                from: e.target,
                accept: e => e instanceof Re(e).HTMLInputElement && "radio" === e.type
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
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        }
      }

      function Iw(e) {
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

      function Nw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nw(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Iw(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Aw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lw(Lw({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Aw(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dw(e.variantClassNames, e => Dw(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hw = Mw({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bw = Mw({
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
      const zw = (0, M.createContext)(null);

      function Vw() {
        const e = (0, M.useContext)(zw);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Fw = (0, M.forwardRef)(({
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
          const f = X((0, M.useRef)(null), d),
            h = (0, M.useId)(),
            p = (0, M.useId)(),
            m = (0, M.useId)(),
            v = function(e) {
              let t = (0, M.useMemo)(() => e.name || `radio-group-${hw}-${++pw}`, [e.name]);
              var r;
              let [n, o] = Wb(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i] = (0, M.useState)(n), [s, a] = (0, M.useState)(null), l = g_({
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
              radioGroupProps: y
            } = kw({
              ...c,
              orientation: r,
              "aria-labelledby": (0, V.VW)(h, s),
              "aria-describedby": (0, V.VW)(p, m, a),
              "aria-errormessage": (0, V.VW)(m, l)
            }, v),
            g = (0, V.v6)({
              className: "foundry_njguqn0"
            }, y, (0, V.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            b = i ? or.DX : "div";
          return (0, _.jsx)(zw.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: p,
              labelId: h,
              errorId: m,
              status: u,
              ...c
            },
            children: (0, _.jsx)(b, {
              ref: f,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        Uw = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: i,
            orientation: s
          } = Vw(), a = (0, V.v6)({
            "data-testid": e,
            className: Bw({
              size: i,
              orientation: s
            })
          }, n), l = t ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Gw = (0, M.forwardRef)(({
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
          } = Vw(), u = a && !o, c = (0, V.v6)({
            id: i.id || l,
            "data-testid": e,
            className: Hw({
              showAsterisk: u
            })
          }, i), d = t ? or.DX : "div";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(d, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        qw = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: i
          } = Vw(), s = (0, V.v6)({
            id: i,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), a = t ? or.DX : "div";
          return (0, _.jsx)(a, {
            ...s,
            ref: o,
            children: r
          })
        }),
        Kw = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: i,
            status: s
          } = Vw(), a = (0, V.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: i,
            status: s
          }, n), l = r ? or.DX : ly;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        Xw = uy,
        Ww = cy;
      var Zw = Mw({
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
        $w = Mw({
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
        Yw = Mw({
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
        Qw = Mw({
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
      const Jw = ({
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
        eE = ({
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
        tE = ({
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
        rE = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? or.DX : "label";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        nE = (0, M.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, M.useRef)(null),
            i = X(o, n),
            s = (0, M.useId)(),
            {
              state: a,
              appearance: l,
              size: u,
              isReadOnly: d,
              isRequired: f
            } = Vw(),
            {
              isPressed: h,
              pressProps: p
            } = Xv({}),
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
              const h = e.isDisabled || t.isDisabled;
              let p = t.selectedValue === n,
                {
                  pressProps: m,
                  isPressed: v
                } = kt({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPress: c,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h
                }),
                {
                  pressProps: y,
                  isPressed: g
                } = kt({
                  onPressStart: a,
                  onPressEnd: l,
                  onPressChange: u,
                  onPressUp: d,
                  onClick: f,
                  isDisabled: h,
                  onPress(e) {
                    var o;
                    null == c || c(e), t.setSelectedValue(n), null === (o = r.current) || void 0 === o || o.focus()
                  }
                }),
                {
                  focusableProps: b
                } = Jt(_e(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = _e(m, b),
                w = Te(e, {
                  labelable: !0
                }),
                E = -1;
              null != t.selectedValue ? t.selectedValue === n && (E = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (E = 0), h && (E = void 0);
              let {
                name: P,
                form: x,
                descriptionId: C,
                errorMessageId: S,
                validationBehavior: T
              } = mw.get(t);
              return Kb(r, t.defaultSelectedValue, t.setSelectedValue), E_({
                validationBehavior: T
              }, t, r), {
                labelProps: _e(y, (0, M.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: _e(w, {
                  ..._,
                  type: "radio",
                  name: P,
                  form: x,
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
            b = c[`Dot${u}`];
          return (0, _.jsxs)("div", {
            className: Qw({
              size: u
            }),
            children: [(0, _.jsx)(or.s6, {
              children: (0, _.jsx)("input", {
                type: "radio",
                ...g,
                ref: i,
                className: "foundry_1pfduet1"
              })
            }), (0, _.jsx)("div", {
              className: Yw({
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
        oE = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, i) => {
          const {
            size: s,
            state: a
          } = Vw(), l = (0, M.useId)(), u = (0, V.v6)({
            id: l,
            "data-testid": e,
            className: $w({
              size: s,
              isDisabled: a?.isDisabled
            })
          }, o), c = t ? or.DX : "div";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(c, {
              ...u,
              ref: i,
              children: r
            })
          })
        }),
        iE = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = Vw(), s = (0, V.v6)({
            "data-testid": e,
            className: Zw({
              isDisabled: i
            })
          }, n), a = t ? or.DX : "span";
          return (0, _.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        });

      function sE(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function aE(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return sE(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sE(e, t) : void 0
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

      function lE(e, t, r) {
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

      function uE(e) {
        return uE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, uE(e)
      }

      function cE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (cE = function() {
          return !!e
        })()
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
            lE(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hE(e, t) {
        return hE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, hE(e, t)
      }

      function pE(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          s = n,
          a = "",
          l = aE(e);
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

      function mE(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          s = t.showMask,
          a = 0,
          l = "",
          u = aE(n);
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

      function vE(e, t) {
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

      function yE(e) {
        return e.length > 0 ? lE({}, e, /./) : {}
      }

      function gE(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, s = t.replacement, a = t.separate, l = e.slice(n, o), u = i.slice(n, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && a && (c += u[d])
        }
        return c
      }

      function bE(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? yE(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return mE(pE(e, {
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
      var _E = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function wE(e) {
        return _E.includes(e) ? "\\".concat(e) : e
      }

      function EE(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function PE(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function xE(e, t, r) {
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

      function CE(e) {
        return CE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, CE(e)
      }

      function SE() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (SE = function() {
          return !!e
        })()
      }

      function TE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function OE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? TE(Object(r), !0).forEach(function(t) {
            xE(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function RE(e, t) {
        return RE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, RE(e, t)
      }

      function jE(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return jE = function(e) {
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
              if (SE()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && RE(o, r.prototype), o
            }(e, arguments, CE(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), RE(r, e)
        }, jE(e)
      }
      var kE, IE = function(e) {
          function t(e) {
            var r;
            return EE(this, t), (r = function(e, t, r) {
              return t = CE(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, SE() ? Reflect.construct(t, r || [], CE(e).constructor) : t.apply(e, r))
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
            }), t && RE(e, t)
          }(t, e), PE(t)
        }(jE(Error)),
        NE = ["options"],
        LE = ["text", "email", "tel", "search", "url"],
        DE = PE(function e(t) {
          var r = t.init,
            n = t.tracking;
          EE(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (LE.includes(e.type)) {
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
              Object.defineProperty(e, "value", OE(OE({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new IE("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      s = e.selectionStart,
                      a = e.selectionEnd;
                    if (null === s || null === a) throw new IE("The selection attributes have not been initialized.");
                    var l, u = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = u.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new IE("Input type detection error.");
                    var c = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) c = i.slice(m.selectionStart, s);
                    else {
                      var v = u.length - i.length;
                      d = s, f = s + v
                    }
                    h.value !== u ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
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
                      }(g, NE);
                    e.value = _.value, e.setSelectionRange(_.selectionStart, _.selectionEnd), h.value = _.value, h.options = b, m.selectionStart = _.selectionStart, m.selectionEnd = _.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, u)
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
      kE = DE, Object.defineProperty(kE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var AE, ME = ["track", "modify"];

      function HE(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? yE(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var BE = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = uE(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, cE() ? Reflect.construct(t, r || [], uE(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = HE(r),
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
                l = HE(r),
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
                }(l, ME),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = fE(fE({}, "insert" === t ? {
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
              if (!1 === y) throw new IE("Custom tracking stop.");
              null === y ? i = "" : !0 !== y && void 0 !== y && (i = y);
              var g = null == c ? void 0 : c(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? yE(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = gE(n, fE({
                  end: s
                }, o)),
                _ = gE(n, fE({
                  start: a
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                E = f.replace(w, "");
              if (b && (b = pE(b, {
                  replacementChars: E,
                  replacement: h,
                  separate: m
                }), E = E.slice(b.length)), i && (i = pE(i, {
                  replacementChars: E,
                  replacement: h,
                  separate: !1
                }), E = E.slice(i.length)), "insert" === t && "" === i) throw new IE("The character does not match the key value of the `replacement` object.");
              if (m) {
                var P = f.slice(s, a).replace(w, ""),
                  x = P.length - i.length;
                x < 0 ? _ = _.slice(-x) : x > 0 && (_ = P.slice(-x) + _)
              }
              _ && (_ = pE(_, {
                replacementChars: E,
                replacement: h,
                separate: m
              }));
              var C = mE(b + i + _, {
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
                    u = e.separate,
                    c = vE(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    }),
                    d = null === (t = c[a.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = c[a.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = c[a.length + s.length]) || void 0 === n ? void 0 : n.index;
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
            return bE(e, HE(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? yE(n) : n;
              return vE(bE(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, HE(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? yE(n) : n,
                i = gE(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return pE(i, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, HE(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? yE(n) : n, i = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, a = "", l = 0; l < r.length; l++) {
                var u = r[l];
                0 === l && (a = "^"), i && (a += "("), a += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(s ? "(?!".concat(wE(u), ")") : "", "(").concat(o[u].source, ")") : wE(u), l === r.length - 1 && (i && (a += ")?".repeat(r.length)), a += "$")
              }
              return a
            }(e, HE(r))
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
            }), t && hE(e, t)
          }(e, DE),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function zE(e) {
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

      function VE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function FE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? VE(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = zE(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : VE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function UE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      AE = BE, Object.defineProperty(AE.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var GE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qE = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = FE(FE({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) GE(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return UE(e.variantClassNames, e => UE(e, e => e.split(" ")[0]))
            }
          }, t
        },
        KE = qE({
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
        XE = qE({
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
        WE = qE({
          defaultClassName: "foundry_8oytzo9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ZE = qE({
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
        $E = qE({
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
        YE = qE({
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
      const QE = (0, M.createContext)(null);

      function JE() {
        const e = (0, M.useContext)(QE);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const eP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: i = !1,
          status: s = "neutral",
          ...a
        }, l) => {
          const [u, c] = (0, M.useState)("text"), d = (0, M.useId)(), f = (0, M.useId)(), h = (0, M.useId)(), {
            isPressed: p,
            pressProps: m
          } = Xv({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !0
          }), v = {
            ...m,
            onKeyDown: () => {}
          }, y = (0, V.v6)({
            "data-testid": r,
            className: "foundry_8oytzo3"
          }, a), g = e ? or.DX : "div";
          return (0, _.jsx)(QE.Provider, {
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
              type: u,
              setType: c,
              ...a
            },
            children: (0, _.jsx)(g, {
              ref: l,
              ...y,
              children: t
            })
          })
        }),
        tP = (0, M.forwardRef)(({
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
          } = JE(), d = l && !o, f = (0, V.v6)({
            id: i.id || c,
            htmlFor: i.htmlFor || u,
            "data-testid": e,
            className: YE({
              showAsterisk: d,
              isDisabled: a
            })
          }, i), h = t ? or.DX : "label";
          return (0, _.jsx)(or.s6, {
            enabled: n,
            children: (0, _.jsx)(h, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        rP = (0, M.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: i
          } = JE(), s = (0, V.v6)({
            "data-testid": e,
            className: WE({
              isDisabled: i
            })
          }, n), a = t ? or.DX : "span";
          return (0, _.jsx)(a, {
            ref: o,
            ...s,
            children: r
          })
        }),
        nP = (0, M.forwardRef)(({
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
            status: u
          } = JE(), c = (0, V.v6)({
            "data-testid": e,
            "data-pressed": a,
            className: (0, be.clsx)(KE({
              isDisabled: i,
              isReadOnly: s,
              isInvalid: "invalid" === u,
              isPressed: a,
              isSuccess: "success" === u
            }), "foundry_8oytzo1")
          }, l, n), d = t ? or.DX : "div";
          return (0, _.jsx)(d, {
            ref: o,
            ...c,
            children: r
          })
        }),
        oP = (0, M.forwardRef)(({
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
            isReadOnly: h,
            isRequired: p,
            status: m,
            labelId: v,
            inputId: y,
            descriptionId: g,
            setType: b,
            type: w
          } = JE();
          (0, M.useEffect)(() => b(u), []);
          const E = "invalid" === m,
            P = (0, V.v6)({
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
              className: (0, be.clsx)($E({
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
            }, c),
            x = function() {
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
                }(a, new BE(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: i
            }),
            C = X(r && n ? x : null, d),
            S = t ? or.DX : "input";
          return (0, _.jsx)(S, {
            ref: C,
            ...P
          })
        }),
        iP = (0, M.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, i) => {
          const {
            isDisabled: s
          } = JE(), a = (0, V.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, be.clsx)(ZE({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? or.DX : Tr[e];
          return (0, _.jsx)(l, {
            ref: i,
            ...a
          })
        }),
        sP = (0, M.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = JE(), n = (0, V.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: "foundry_8oytzo10"
          }, e);
          return (0, _.jsx)(Wr, {
            ref: t,
            ...n
          })
        }),
        aP = (0, M.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: i
          } = JE(), s = "password" === o, a = s ? e : t, l = (0, V.v6)({
            label: a,
            icon: s ? "Eye" : "EyeOff",
            onPress: () => {
              i(s ? "text" : "password")
            }
          }, r);
          return (0, _.jsxs)(Wp, {
            children: [(0, _.jsx)(Zp, {
              children: (0, _.jsx)(sP, {
                ref: n,
                ...l
              })
            }), (0, _.jsxs)($p, {
              side: "bottom",
              align: "end",
              children: [a, (0, _.jsx)(Yp, {})]
            })]
          })
        }),
        lP = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: i,
            descriptionId: s
          } = JE(), a = (0, V.v6)({
            className: XE({
              isDisabled: i
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? or.DX : "div";
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        uP = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: i,
            status: s
          } = JE(), a = (0, V.v6)({
            className: "foundry_8oytzo16",
            "data-testid": t,
            descriptionId: i,
            status: s
          }, n), l = r ? or.DX : ly;
          return (0, _.jsx)(l, {
            ...a,
            ref: o,
            children: e
          })
        }),
        cP = uy,
        dP = cy;

      function fP(e, t) {
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
        } = Jt(e, t), {
          pressProps: d,
          isPressed: f
        } = kt({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: s,
          isDisabled: a,
          ref: t
        }), h = Te(l, {
          labelable: !0
        }), p = _e(c, d), m = _t();
        return {
          isPressed: f,
          linkProps: _e(h, Et(e), {
            ...p,
            ...u,
            "aria-disabled": a || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), Pt(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function hP(e) {
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

      function mP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = hP(o)) in n ? Object.defineProperty(n, o, {
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

      function vP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mP(mP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) yP(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vP(e.variantClassNames, e => vP(e, e => e.split(" ")[0]))
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
      const bP = (0, M.forwardRef)(({
        children: e,
        ...t
      }, r) => {
        const n = hr(),
          o = "string" == typeof t.size ? t.size : t.size?.[n] ?? "LG",
          i = (0, V.v6)({
            className: gP({
              size: o
            })
          }, t);
        return (0, _.jsx)(Wr, {
          appearance: "ghost",
          icon: "X",
          ...i,
          ref: r,
          children: e
        })
      });

      function _P(e) {
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

      function wP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function EP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wP(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = _P(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wP(Object(r)).forEach(function(t) {
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
      var xP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        CP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = EP(EP({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) xP(u, n, e.defaultVariants) && (r += " " + c);
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
        },
        SP = CP({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        TP = CP({
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
        OP = CP({
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
      const RP = (0, M.createContext)(null);

      function jP() {
        const e = (0, M.useContext)(RP);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const kP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, i) => {
          const s = e ? or.DX : "div",
            a = (0, V.v6)({
              className: OP({
                status: r,
                background: n
              })
            }, o);
          return (0, _.jsx)(RP.Provider, {
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
        IP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? or.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        NP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? or.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        LP = {
          danger: Tr.CircleX,
          information: Tr.Info,
          success: Tr.CircleCheck,
          warning: Tr.TriangleAlert
        },
        DP = (0, M.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = jP(), i = e ? or.DX : LP[o], s = (0, V.v6)({
            className: TP({
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
        AP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? or.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        MP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? or.DX : "div",
            i = (0, V.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        HP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, M.useRef)(null),
            s = X(i, o),
            a = e ? or.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = fP(n, i),
            c = (0, V.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, _.jsx)(a, {
            "data-pressed": u,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        BP = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? or.DX : "div",
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
        zP = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const i = e ? or.DX : "div";
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, be.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        VP = (0, M.forwardRef)((e, t) => {
          const {
            background: r
          } = jP(), n = "none" !== r, o = (0, V.v6)({
            className: SP({
              hasBackground: n
            })
          }, e);
          return (0, _.jsx)(bP, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function FP(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function UP(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : FP(n) && FP(o) ? UP(n, o) : n === o
        }))
      }

      function GP(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function qP(e) {
        return "number" == typeof e
      }

      function KP(e) {
        return "string" == typeof e
      }

      function XP(e) {
        return "boolean" == typeof e
      }

      function WP(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function ZP(e) {
        return Math.abs(e)
      }

      function $P(e) {
        return Math.sign(e)
      }

      function YP(e, t) {
        return ZP(e - t)
      }

      function QP(e) {
        return nx(e).map(Number)
      }

      function JP(e) {
        return e[ex(e)]
      }

      function ex(e) {
        return Math.max(0, e.length - 1)
      }

      function tx(e, t) {
        return t === ex(e)
      }

      function rx(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function nx(e) {
        return Object.keys(e)
      }

      function ox(e, t) {
        return [e, t].reduce((e, t) => (nx(t).forEach(r => {
          const n = e[r],
            o = t[r],
            i = WP(n) && WP(o);
          e[r] = i ? ox(n, o) : o
        }), e), {})
      }

      function ix(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function sx() {
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

      function ax(e = 0, t = 0) {
        const r = ZP(e - t);

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

      function lx(e, t, r) {
        const {
          constrain: n
        } = ax(0, e), o = e + 1;
        let i = s(t);

        function s(e) {
          return r ? ZP((o + e) % o) : n(e)
        }

        function a() {
          return i
        }

        function l() {
          return lx(e, a(), r)
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

      function ux(e, t, r, n, o, i, s, a, l, u, c, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], E = {
          passive: !1
        }, P = sx(), x = sx(), C = ax(50, 225).constrain(h.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, T = {
          mouse: 500,
          touch: 600
        }, O = p ? 43 : 25;
        let R = !1,
          j = 0,
          k = 0,
          I = !1,
          N = !1,
          L = !1,
          D = !1;

        function A(e) {
          if (!ix(e, n) && e.touches.length >= 2) return M(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            s = YP(t, j),
            l = YP(r, k);
          if (!N && !D) {
            if (!e.cancelable) return M(e);
            if (N = s > l, !N) return M(e)
          }
          const c = i.pointerMove(e);
          s > m && (L = !0), u.useFriction(.3).useDuration(.75), a.start(), o.add(_(c)), e.preventDefault()
        }

        function M(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? T : S)[D ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * $P(e)),
                n = c.byDistance(e, !p).distance;
              return p || ZP(e) < C ? n : v && t ? .5 * n : c.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (ZP(e) <= ZP(t)) return 0;
              const r = YP(ZP(e), ZP(t));
              return ZP(r / e)
            }(r, n),
            s = O - 10 * o,
            a = y + o / 50;
          N = !1, I = !1, x.clear(), u.useDuration(s).useFriction(a), l.distance(n, !p), D = !1, f.emit("pointerUp")
        }

        function H(e) {
          L && (e.stopPropagation(), e.preventDefault(), L = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function a(a) {
              (XP(g) || g(e, a)) && function(e) {
                const a = ix(e, n);
                D = a, L = p && a && !e.buttons && R, R = YP(o.get(), s.get()) >= 2, a && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (I = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = D ? r : t;
                  x.add(e, "touchmove", A, E).add(e, "touchend", M).add(e, "mousemove", A, E).add(e, "mouseup", M)
                }(), j = i.readPoint(e), k = i.readPoint(e, b), f.emit("pointerDown"))
              }(a)
            }
            const l = t;
            P.add(l, "dragstart", e => e.preventDefault(), E).add(l, "touchmove", () => {}, E).add(l, "touchend", () => {}).add(l, "touchstart", a).add(l, "mousedown", a).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", H, !0)
          },
          destroy: function() {
            P.clear(), x.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function cx(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (ix(r, t) ? r : r.touches[0])[o]
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
            return s && !a && ZP(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function dx(e, t, r, n, o, i, s) {
        const a = [e].concat(n);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = n.map(f), l = new ResizeObserver(r => {
              (XP(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    s = n.indexOf(i.target),
                    a = r ? u : c[s];
                  if (ZP(f(r ? e : n[s]) - a) >= .5) {
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

      function fx(e, t, r, n, o) {
        const i = o.measure(10),
          s = o.measure(50),
          a = ax(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = ZP(e[l] - t.get()),
              d = r.get() - t.get(),
              f = a.constrain(c / s);
            r.subtract(d * f), !o && ZP(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function hx(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = ax(o, i),
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

      function px(e) {
        let t = e;

        function r(e) {
          return qP(e) ? e : e.get()
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

      function mx(e, t) {
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

      function vx(e, t, r, n, o, i, s, a, l) {
        const u = QP(o),
          c = QP(o).reverse(),
          d = function() {
            const e = s[0];
            return p(h(c, e), r, !1)
          }().concat(function() {
            const e = t - s[0] - 1;
            return p(h(u, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce((e, t) => e - o[t], t)
        }

        function h(e, t) {
          return e.reduce((e, r) => f(e, t) > 0 ? e.concat([r]) : e, [])
        }

        function p(o, s, u) {
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
              slideLocation: px(-1),
              translate: mx(e, l[t]),
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

      function yx(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver(e => {
              o || (XP(r) || r(i, e)) && function(e) {
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

      function gx(e, t, r, n, o, i, s) {
        const {
          align: a,
          axis: l,
          direction: u,
          startIndex: c,
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
        } = i, P = {
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
        }, x = P.measure(t), C = r.map(P.measure), S = function(e, t) {
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
        }(l, u), T = S.measureSize(x), O = function(e) {
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
              return KP(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(a, T), j = !d && !!g, k = d || !!g, {
          slideSizes: I,
          slideSizesWithGaps: N,
          startGap: L,
          endGap: D
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: l
          } = e, u = r[0] && o, c = function() {
            if (!u) return 0;
            const e = r[0];
            return ZP(t[a] - e[a])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(JP(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(s), h = r.map((e, t, r) => {
            const n = !t,
              o = tx(r, t);
            return n ? f[t] + c : o ? f[t] + d : r[t + 1][a] - e[a]
          }).map(ZP);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: c,
            endGap: d
          }
        }(S, x, C, r, k, o), A = function(e, t, r, n, o, i, s, a, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = qP(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return QP(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? QP(e).reduce((r, f, h) => {
                  const p = JP(r) || 0,
                    m = 0 === p,
                    v = f === ex(e),
                    y = o[u] - i[p][u],
                    g = o[u] - i[f][c],
                    b = !n && m ? d(s) : 0,
                    _ = ZP(g - (!n && v ? d(a) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return h
        }(S, T, v, d, x, C, L, D, 2), {
          snaps: M,
          snapsAligned: H
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: s
          } = e, {
            groupSlides: a
          } = o, l = a(n).map(e => JP(e)[s] - e[0][i]).map(ZP).map(t.measure), u = n.map(e => r[i] - e[i]).map(e => -ZP(e)), c = a(u).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: u,
            snapsAligned: c
          }
        }(S, R, x, C, A), B = -JP(M) + JP(N), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = ax(-t + e, 0),
            i = r.map((e, t) => {
              const {
                min: n,
                max: i
              } = o, s = o.constrain(e), l = !t, u = tx(r, t);
              return l ? i : u || a(n, s) ? n : a(i, s) ? i : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = i[0],
                t = JP(i);
              return ax(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function a(e, t) {
            return YP(e, t) <= 1
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
        }(T, B, H, g), F = j ? z : H, {
          limit: U
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: ax(r ? n - e : JP(t), n)
          }
        }(B, F, d), G = lx(ex(F), c, d), q = G.clone(), K = QP(r), X = function(e, t, r, n) {
          const o = sx(),
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
          const h = e.settled(),
            p = !c.shouldConstrain(),
            m = d ? h : h && p,
            v = m && !a.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (i.loop(e.direction()), s.loop()), t.to(n.get()), v && u.emit("settle"), m || u.emit("scroll")
        })(ae, e)), W = F[G.get()], Z = px(W), $ = px(W), Y = px(W), Q = px(W), J = function(e, t, r, n, o) {
          let i = 0,
            s = 0,
            a = o,
            l = .68,
            u = e.get(),
            c = 0;

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
              return a ? (r.set(e), i += t / a, i *= l, u += i, e.add(i), o = u - c) : (i = 0, r.set(n), e.set(n), o = t), s = $P(o), c = u, h
            },
            settled: function() {
              return ZP(n.get() - t.get()) < .001
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
            return e.concat().sort((e, t) => ZP(e) - ZP(t))[0]
          }

          function u(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter(e => $P(e) === n);
            return i.length ? l(i) : JP(o) - r
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
                    })).sort((e, t) => ZP(e.diff) - ZP(t.diff)),
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
        }(d, F, B, U, Q), te = function(e, t, r, n, o, i, s) {
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
        }(U), ne = sx(), oe = function(e, t, r, n) {
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
                return nx(o).reduce((t, r) => {
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
                o = tx(r, t);
              return n ? rx(JP(r[0]) + 1) : o ? rx(ex(i) - JP(r)[0] + 1, JP(r)[0]) : e
            })
          }();
          return {
            slideRegistry: u
          }
        }(j, g, F, V, A, K), se = function(e, t, r, n, o, i, s, a) {
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
                  (XP(a) || a(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex(e => e.includes(t));
                    qP(i) && (o.useDuration(0), n.index(i, 0), s.emit("slideFocus"))
                  }(c)
                }, l)
              }))
            }
          };
          return d
        }(e, r, ie, te, J, ne, s, E), ae = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: s,
          containerRect: x,
          slideRects: C,
          animation: X,
          axis: S,
          dragHandler: ux(S, e, n, o, Q, cx(S, o), Z, X, te, J, ee, G, s, O, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: O,
          index: G,
          indexPrevious: q,
          limit: U,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: i,
          resizeHandler: dx(t, s, o, r, S, b, P),
          scrollBody: J,
          scrollBounds: fx(U, Y, Q, J, O),
          scrollLooper: hx(B, U, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: vx(S, T, B, I, N, M, F, Y, r),
          slideFocus: se,
          slidesHandler: yx(t, s, _),
          slidesInView: oe,
          slideIndexes: K,
          slideRegistry: ie,
          slidesToScroll: A,
          target: Q,
          translate: mx(S, t)
        };
        return ae
      }
      const bx = {
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

      function _x(e) {
        function t(e, t) {
          return ox(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = nx(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => nx(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function wx(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = _x(o),
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
          a = sx(),
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
            off: h,
            emit: p
          } = l,
          m = S;
        let v, y, g, b, _ = !1,
          w = u(bx, wx.globalOptions),
          E = u(w),
          P = [];

        function x(t) {
          const r = gx(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? x(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function C(t, r) {
          _ || (w = u(w, t), E = c(w), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = E, n = KP(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = KP(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = x(E), d([w, ...P.map(({
            options: e
          }) => e)]).forEach(e => a.add(e, "change", S)), E.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(j), v.eventHandler.init(j), v.resizeHandler.init(j), v.slidesHandler.init(j), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(j), y = s.init(j, P)))
        }

        function S(e, t) {
          const r = R();
          T(), C(u({
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
        const j = {
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
        return C(t, r), setTimeout(() => l.emit("init"), 0), j
      }

      function Ex(e = {}, t = []) {
        const r = (0, M.useRef)(e),
          n = (0, M.useRef)(t),
          [o, i] = (0, M.useState)(),
          [s, a] = (0, M.useState)(),
          l = (0, M.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, M.useEffect)(() => {
          UP(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, M.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = GP(e),
              n = GP(t);
            return r.every((e, t) => UP(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, M.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            wx.globalOptions = Ex.globalOptions;
            const e = wx(s, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }, [s, i]), [a, o]
      }

      function Px(e = {}) {
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
      wx.globalOptions = void 0, Ex.globalOptions = void 0, Px.globalOptions = void 0;
      const xx = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function Cx(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function Sx(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Tx(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Ox(e = {}) {
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
          ("pointerDown" === t ? Tx : Sx)(n, c.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            i = e.map(e => o[e]);
          return n.forEach(e => Sx(e, r)), i.forEach(e => Tx(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          i = f(t, i, c.snapped)
        }

        function p() {
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
            } = s, v = f(xx, Ox.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (c.loop = Cx(t.loop), Tx(n, c.loop)), t.draggable && _ && (c.draggable = Cx(t.draggable), Tx(n, c.draggable)), t.dragging && (c.dragging = Cx(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (c.snapped = Cx(t.snapped), a.forEach(e => r.on(e, h)), h()), t.inView && (c.inView = Cx(t.inView), u.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), a.forEach(e => r.off(e, h)), u.forEach(e => r.off(e, p)), Sx(n, c.loop), Sx(n, c.draggable), Sx(n, c.dragging), f([], i, c.snapped), f([], s, c.inView), Object.keys(c).forEach(e => {
              c[e] = []
            })
          }
        };
        return m
      }
      Ox.globalOptions = void 0;

      function Rx(e) {
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

      function jx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Rx(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jx(Object(r)).forEach(function(t) {
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
      var Nx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lx = "foundry_qmpv6yt",
        Dx = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kx(kx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Nx(u, n, e.defaultVariants) && (r += " " + c);
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
      const Ax = (0, M.createContext)(null);

      function Mx() {
        const e = (0, M.useContext)(Ax);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Hx = (0, M.forwardRef)(({
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
              const t = Q(),
                r = W(),
                [n, o] = (0, M.useState)([]),
                i = n.length,
                [s, a] = (0, M.useState)(0),
                [l, u] = Ex({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && i > 1
                }, [Px(), Ox()]),
                c = (0, M.useRef)(0),
                d = (0, M.useRef)(!1),
                f = n[s],
                h = (0, M.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), a(t), d.current = !0
                }, [u]),
                p = (0, M.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
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
                      const l = (u = 1 - Math.abs(a * c.current), Math.min(Math.max(u, 0), 1)).toString();
                      var u;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, M.useEffect)(() => {
                u && (p(u), m(u), u.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [u, m]), (0, M.useEffect)(() => {
                u && (h(u), u.on("select", h).on("reInit", h))
              }, [u, h]), {
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
              numAlerts: h
            } = u;
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
              className: Dx(c)
            }, p, a),
            v = e ? or.DX : "div";
          return (0, _.jsx)(Ax.Provider, {
            value: u,
            children: (0, _.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        Bx = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        zx = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Mx();
          if (!e && !n || !n?.status) return null;
          const o = e || Bx[n.status],
            i = Tr[o],
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
        Vx = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? or.DX : "div",
            i = (0, V.v6)({
              className: "foundry_qmpv6yo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, _.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...i
          })
        }),
        Fx = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...i
        }, s) => {
          const a = e ? or.DX : "div",
            l = (0, V.v6)({
              className: "foundry_qmpv6yk"
            }, i);
          return (0, _.jsx)(a, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        Ux = (0, M.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: i
          } = Mx(), s = (0, V.v6)({
            className: "foundry_qmpv6yl"
          }, r), a = X(i, n), l = M.Children.map(t, e => {
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
        Gx = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, M.useRef)(null),
            s = X(i, o),
            a = e ? or.DX : "a",
            {
              linkProps: l,
              isPressed: u
            } = fP(n, i),
            c = (0, V.v6)({
              className: "foundry_qmpv6yp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, _.jsx)(a, {
            "data-pressed": u,
            "data-testid": r,
            ref: s,
            ...l,
            ...c,
            children: t
          })
        }),
        qx = (0, M.forwardRef)((e, t) => {
          const r = (0, V.v6)({
            className: "foundry_qmpv6yq"
          }, e);
          return (0, _.jsx)(bP, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Kx = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const i = e ? or.DX : "div",
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
        Xx = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Mx(), i = (0, V.v6)({
            className: Lx
          }, t);
          return (0, _.jsx)(Wr, {
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
        Wx = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Mx(), i = (0, V.v6)({
            className: Lx
          }, t);
          return (0, _.jsx)(Wr, {
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
        Zx = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Mx(), i = (0, V.v6)({
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

      function $x(e) {
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

      function Yx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yx(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $x(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Jx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var eC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qx(Qx({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) eC(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jx(e.variantClassNames, e => Jx(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rC = tC({
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
        nC = tC({
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
        oC = tC({
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
      const iC = (0, M.createContext)(null);

      function sC() {
        const e = (0, M.useContext)(iC);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const aC = (0, M.forwardRef)(({
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
            d = (0, V.v6)({
              className: nC(c)
            }, l),
            f = e ? or.DX : "div";
          return (0, _.jsx)(iC.Provider, {
            value: c,
            children: (0, _.jsx)(f, {
              ref: u,
              "data-testid": r,
              "aria-disabled": a,
              ...d,
              children: t
            })
          })
        }),
        lC = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: i
          } = sC(), s = e ? or.DX : "div", a = (0, V.v6)({
            className: oC({
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
        uC = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Tr[e],
            o = (0, V.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, _.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        cC = (0, M.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = sC(), i = (0, V.v6)({
            className: rC({
              background: n
            })
          }, t);
          return (0, _.jsx)(Wr, {
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
      var dC = "ToastProvider",
        [fC, hC, pC] = (0, rm.N)("Toast"),
        [mC, vC] = (0, uh.A)("Toast", [pC]),
        [yC, gC] = mC(dC),
        bC = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
          } = e, [a, l] = M.useState(null), [u, c] = M.useState(0), d = M.useRef(!1), f = M.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${dC}\`. Expected non-empty \`string\`.`), (0, _.jsx)(fC.Provider, {
            scope: t,
            children: (0, _.jsx)(yC, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: i,
              toastCount: u,
              viewport: a,
              onViewportChange: l,
              onToastAdd: M.useCallback(() => c(e => e + 1), []),
              onToastRemove: M.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      bC.displayName = dC;
      var _C = "ToastViewport",
        wC = ["F8"],
        EC = "toast.viewportPause",
        PC = "toast.viewportResume",
        xC = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = wC,
            label: o = "Notifications ({hotkey})",
            ...i
          } = e, s = gC(_C, r), a = hC(r), l = M.useRef(null), u = M.useRef(null), c = M.useRef(null), d = M.useRef(null), f = (0, lh.s)(t, d, s.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = s.toastCount > 0;
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
                    const e = new CustomEvent(EC);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(PC);
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
                n = [r, ...FC(r)];
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
                  if (t.target === e && n) return void u.current?.focus();
                  const o = m({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    i = o.findIndex(e => e === r);
                  UC(o.slice(i + 1)) ? t.preventDefault() : n ? u.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [a, m]), (0, _.jsxs)(_h, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, _.jsx)(SC, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                UC(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, _.jsx)(fC.Slot, {
              scope: r,
              children: (0, _.jsx)(ch.sG.ol, {
                tabIndex: -1,
                ...i,
                ref: f
              })
            }), p && (0, _.jsx)(SC, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                UC(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      xC.displayName = _C;
      var CC = "ToastFocusProxy",
        SC = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, i = gC(CC, r);
          return (0, _.jsx)(dp.s6, {
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
      SC.displayName = CC;
      var TC = "Toast",
        OC = M.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            ...s
          } = e, [a, l] = (0, cp.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: i,
            caller: TC
          });
          return (0, _.jsx)(up.C, {
            present: r || a,
            children: (0, _.jsx)(kC, {
              open: a,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, dh.c)(e.onPause),
              onResume: (0, dh.c)(e.onResume),
              onSwipeStart: (0, ah.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ah.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ah.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ah.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      OC.displayName = TC;
      var [RC, jC] = mC(TC, {
        onClose() {}
      }), kC = M.forwardRef((e, t) => {
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
          onSwipeEnd: h,
          ...p
        } = e, m = gC(TC, r), [v, y] = M.useState(null), g = (0, lh.s)(t, e => y(e)), b = M.useRef(null), w = M.useRef(null), E = o || m.duration, P = M.useRef(0), x = M.useRef(E), C = M.useRef(0), {
          onToastAdd: S,
          onToastRemove: T
        } = m, O = (0, dh.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), R = M.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), P.current = (new Date).getTime(), C.current = window.setTimeout(O, e))
        }, [O]);
        M.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                R(x.current), u?.()
              },
              r = () => {
                const e = (new Date).getTime() - P.current;
                x.current = x.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(EC, r), e.addEventListener(PC, t), () => {
              e.removeEventListener(EC, r), e.removeEventListener(PC, t)
            }
          }
        }, [m.viewport, E, l, u, R]), M.useEffect(() => {
          i && !m.isClosePausedRef.current && R(E)
        }, [i, E, m.isClosePausedRef, R]), M.useEffect(() => (S(), () => T()), [S, T]);
        const j = M.useMemo(() => v ? BC(v) : null, [v]);
        return m.viewport ? (0, _.jsxs)(_.Fragment, {
          children: [j && (0, _.jsx)(IC, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: j
          }), (0, _.jsx)(RC, {
            scope: r,
            onClose: O,
            children: Ct.createPortal((0, _.jsx)(fC.ItemSlot, {
              scope: r,
              children: (0, _.jsx)(bh, {
                asChild: !0,
                onEscapeKeyDown: (0, ah.mK)(a, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, _.jsx)(ch.sG.li, {
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
                  onKeyDown: (0, ah.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (a?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()))
                  }),
                  onPointerDown: (0, ah.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ah.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = u, zC("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : VC(u, m.swipeDirection, l) ? (w.current = u, zC("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, ah.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      VC(t, m.swipeDirection, m.swipeThreshold) ? zC("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : zC("toast.swipeCancel", f, n, {
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
      }), IC = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = gC(TC, t), [i, s] = M.useState(!1), [a, l] = M.useState(!1);
        return function(e = () => {}) {
          const t = (0, dh.c)(e);
          (0, Hh.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), M.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), a ? null : (0, _.jsx)(lp, {
          asChild: !0,
          children: (0, _.jsx)(dp.s6, {
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
        return (0, _.jsx)(ch.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var NC = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, _.jsx)(ch.sG.div, {
          ...n,
          ref: t
        })
      });
      NC.displayName = "ToastDescription";
      var LC = "ToastAction",
        DC = M.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, _.jsx)(HC, {
            altText: r,
            asChild: !0,
            children: (0, _.jsx)(MC, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${LC}\`. Expected non-empty \`string\`.`), null)
        });
      DC.displayName = LC;
      var AC = "ToastClose",
        MC = M.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = jC(AC, r);
          return (0, _.jsx)(HC, {
            asChild: !0,
            children: (0, _.jsx)(ch.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ah.mK)(e.onClick, o.onClose)
            })
          })
        });
      MC.displayName = AC;
      var HC = M.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, _.jsx)(ch.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function BC(e) {
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
              } else t.push(...BC(e))
          }
        }), t
      }

      function zC(e, t, r, {
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
        }), n ? (0, ch.hO)(o, i) : o.dispatchEvent(i)
      }
      var VC = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          i = n > o;
        return "left" === t || "right" === t ? i && n > r : !i && o > r
      };

      function FC(e) {
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

      function UC(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var GC = bC,
        qC = xC,
        KC = OC,
        XC = NC,
        WC = DC,
        ZC = MC;

      function $C(e) {
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

      function YC(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function QC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? YC(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = $C(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : YC(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function JC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var eS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        tS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = QC(QC({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) eS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return JC(e.variantClassNames, e => JC(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rS = tS({
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
        nS = tS({
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
        oS = tS({
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
      const iS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, _.jsx)(GC, {
          ref: n,
          "data-testid": t,
          ...r,
          children: e
        })),
        sS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const i = (0, V.v6)({
            className: oS({
              position: r
            })
          }, n);
          return (0, _.jsx)(qC, {
            ref: o,
            "data-testid": t,
            ...i,
            children: e
          })
        }),
        aS = (0, M.createContext)(null);

      function lS() {
        const e = (0, M.useContext)(aS);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const uS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, i) => {
          const s = e ? or.DX : KC,
            a = (0, V.v6)({
              className: nS({
                appearance: n
              })
            }, o);
          return (0, _.jsx)(aS.Provider, {
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
        cS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? or.DX : XC,
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
        dS = {
          danger: Tr.CircleX,
          information: Tr.Info,
          success: Tr.CircleCheck,
          warning: Tr.TriangleAlert,
          avocado: Tr.CircleCheck
        },
        fS = (0, M.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = lS(), o = e ? or.DX : dS[n], i = (0, V.v6)({
            className: rS({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, _.jsx)(o, {
            ref: r,
            ...i
          })
        }),
        hS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? or.DX : WC,
            s = (0, V.v6)({
              className: "foundry_dnh2nzq",
              asChild: !0
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, _.jsx)(or.xV, {
              children: t
            }) : (0, _.jsx)(Hr, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        pS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? or.DX : ZC,
            s = (0, V.v6)({
              className: "foundry_dnh2nzr",
              asChild: !0
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, _.jsx)(or.xV, {
              children: t
            }) : (0, _.jsx)(bP, {
              size: "SM",
              label: ""
            })
          })
        });

      function mS(e) {
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

      function vS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = mS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _S = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yS(yS({}, e.defaultVariants), t);
            for (var o in n) {
              var i, s = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != s) {
                var a = s;
                "boolean" == typeof a && (a = !0 === a ? "true" : "false");
                var l = e.variantClassNames[o][a];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) bS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gS(e.variantClassNames, e => gS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wS = _S({
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
        ES = _S({
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
        PS = _S({
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

      function xS() {
        const e = (0, M.useContext)(CS);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const CS = (0, M.createContext)(null),
        SS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, i) => {
          const s = (0, V.v6)({
              className: PS({
                size: n
              })
            }, o),
            a = r ? or.DX : "ol";
          return (0, _.jsx)(CS.Provider, {
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
        TS = (0, M.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, i) => {
          const s = (0, M.useRef)(null),
            {
              size: a
            } = xS(),
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
              } = fP({
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
            u = r ? or.DX : "a",
            c = (0, V.v6)({
              className: (0, be.clsx)(wS({
                size: a
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, _.jsx)("li", {
            className: ES({
              size: a
            }),
            ref: i,
            children: (0, _.jsx)(u, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        OS = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Tr[e];
          return (0, _.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        RS = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, i) => {
          const [s, a] = (0, M.useState)(r), {
            size: l
          } = xS(), u = (0, V.v6)({
            className: ES({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, _.jsx)("li", {
            ref: i,
            ...u,
            children: (0, _.jsxs)(ab, {
              open: s,
              onOpenChange: () => a(!s),
              children: [(0, _.jsx)(lb, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, _.jsx)(db, {
                children: (0, _.jsx)(fb, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, _.jsx)(hb, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        jS = (0, M.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const i = t ? or.DX : pb,
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

      function kS(e) {
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

      function IS(e, t) {
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
          t % 2 ? IS(Object(r), !0).forEach(function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = kS(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : IS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function LS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var DS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        AS = (e => {
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
            for (var [u, c] of e.compoundVariants) DS(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LS(e.variantClassNames, e => LS(e, e => e.split(" ")[0]))
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
      const MS = (0, M.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          ...n
        }, o) => {
          const i = e ? or.DX : "div",
            s = (0, V.v6)({
              className: AS({
                appearance: r
              })
            }, n);
          return (0, _.jsx)(i, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        HS = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = e ? or.DX : "div",
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
        BS = (0, M.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = Tr[e],
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
      var zS = rT(),
        VS = e => QS(e, zS),
        FS = rT();
      VS.write = e => QS(e, FS);
      var US = rT();
      VS.onStart = e => QS(e, US);
      var GS = rT();
      VS.onFrame = e => QS(e, GS);
      var qS = rT();
      VS.onFinish = e => QS(e, qS);
      var KS = [];
      VS.setTimeout = (e, t) => {
        const r = VS.now() + t,
          n = () => {
            const e = KS.findIndex(e => e.cancel == n);
            ~e && KS.splice(e, 1), $S -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return KS.splice(XS(r), 0, o), $S += 1, JS(), o
      };
      var XS = e => ~(~KS.findIndex(t => t.time > e) || ~KS.length);
      VS.cancel = e => {
        US.delete(e), GS.delete(e), qS.delete(e), zS.delete(e), FS.delete(e)
      }, VS.sync = e => {
        YS = !0, VS.batchedUpdates(e), YS = !1
      }, VS.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, VS.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          US.delete(r), t = null
        }, n
      };
      var WS = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      VS.use = e => WS = e, VS.now = "undefined" != typeof performance ? () => performance.now() : Date.now, VS.batchedUpdates = e => e(), VS.catch = console.error, VS.frameLoop = "always", VS.advance = () => {
        "demand" !== VS.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : tT()
      };
      var ZS = -1,
        $S = 0,
        YS = !1;

      function QS(e, t) {
        YS ? (t.delete(e), e(0)) : (t.add(e), JS())
      }

      function JS() {
        ZS < 0 && (ZS = 0, "demand" !== VS.frameLoop && WS(eT))
      }

      function eT() {
        ~ZS && (WS(eT), VS.batchedUpdates(tT))
      }

      function tT() {
        const e = ZS;
        ZS = VS.now();
        const t = XS(ZS);
        t && (nT(KS.splice(0, t), e => e.handler()), $S -= t), $S ? (US.flush(), zS.flush(e ? Math.min(64, ZS - e) : 16.667), GS.flush(), FS.flush(), qS.flush()) : ZS = -1
      }

      function rT() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            $S += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => ($S -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, $S -= t.size, nT(t, t => t(r) && e.add(t)), $S += e.size, t = e)
          }
        }
      }

      function nT(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            VS.catch(e)
          }
        })
      }
      var oT = Object.defineProperty,
        iT = {};

      function sT() {}((e, t) => {
        for (var r in t) oT(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(iT, {
        assign: () => _T,
        colors: () => yT,
        createStringInterpolator: () => hT,
        skipAnimation: () => gT,
        to: () => pT,
        willAdvance: () => bT
      });
      var aT = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function lT(e, t) {
        if (aT.arr(e)) {
          if (!aT.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var uT = (e, t) => e.forEach(t);

      function cT(e, t, r) {
        if (aT.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var dT = e => aT.und(e) ? [] : aT.arr(e) ? e : [e];

      function fT(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), uT(r, t)
        }
      }
      var hT, pT, mT = (e, ...t) => fT(e, e => e(...t)),
        vT = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        yT = null,
        gT = !1,
        bT = sT,
        _T = e => {
          e.to && (pT = e.to), e.now && (VS.now = e.now), void 0 !== e.colors && (yT = e.colors), null != e.skipAnimation && (gT = e.skipAnimation), e.createStringInterpolator && (hT = e.createStringInterpolator), e.requestAnimationFrame && VS.use(e.requestAnimationFrame), e.batchedUpdates && (VS.batchedUpdates = e.batchedUpdates), e.willAdvance && (bT = e.willAdvance), e.frameLoop && (VS.frameLoop = e.frameLoop)
        },
        wT = new Set,
        ET = [],
        PT = [],
        xT = 0,
        CT = {
          get idle() {
            return !wT.size && !ET.length
          },
          start(e) {
            xT > e.priority ? (wT.add(e), VS.onStart(ST)) : (TT(e), VS(RT))
          },
          advance: RT,
          sort(e) {
            if (xT) VS.onFrame(() => CT.sort(e));
            else {
              const t = ET.indexOf(e);
              ~t && (ET.splice(t, 1), OT(e))
            }
          },
          clear() {
            ET = [], wT.clear()
          }
        };

      function ST() {
        wT.forEach(TT), wT.clear(), VS(RT)
      }

      function TT(e) {
        ET.includes(e) || OT(e)
      }

      function OT(e) {
        ET.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(ET), 0, e)
      }

      function RT(e) {
        const t = PT;
        for (let r = 0; r < ET.length; r++) {
          const n = ET[r];
          xT = n.priority, n.idle || (bT(n), n.advance(e), n.idle || t.push(n))
        }
        return xT = 0, (PT = ET).length = 0, (ET = t).length > 0
      }
      var jT = "[-+]?\\d*\\.?\\d+",
        kT = jT + "%";

      function IT(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var NT = new RegExp("rgb" + IT(jT, jT, jT)),
        LT = new RegExp("rgba" + IT(jT, jT, jT, jT)),
        DT = new RegExp("hsl" + IT(jT, kT, kT)),
        AT = new RegExp("hsla" + IT(jT, kT, kT, jT)),
        MT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        HT = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        BT = /^#([0-9a-fA-F]{6})$/,
        zT = /^#([0-9a-fA-F]{8})$/;

      function VT(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function FT(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = VT(o, n, e + 1 / 3),
          s = VT(o, n, e),
          a = VT(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * s) << 16 | Math.round(255 * a) << 8
      }

      function UT(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function GT(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function qT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function KT(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function XT(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = BT.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : yT && void 0 !== yT[e] ? yT[e] : (t = NT.exec(e)) ? (UT(t[1]) << 24 | UT(t[2]) << 16 | UT(t[3]) << 8 | 255) >>> 0 : (t = LT.exec(e)) ? (UT(t[1]) << 24 | UT(t[2]) << 16 | UT(t[3]) << 8 | qT(t[4])) >>> 0 : (t = MT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = zT.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = HT.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = DT.exec(e)) ? (255 | FT(GT(t[1]), KT(t[2]), KT(t[3]))) >>> 0 : (t = AT.exec(e)) ? (FT(GT(t[1]), KT(t[2]), KT(t[3])) | qT(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var WT = (e, t, r) => {
          if (aT.fun(e)) return e;
          if (aT.arr(e)) return WT({
            range: e,
            output: t,
            extrapolate: r
          });
          if (aT.str(e.output[0])) return hT(e);
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
        ZT = 1.70158,
        $T = 2.5949095,
        YT = 2.70158,
        QT = 2 * Math.PI / 3,
        JT = 2 * Math.PI / 4.5,
        eO = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        tO = {
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
          easeInBack: e => YT * e * e * e - ZT * e * e,
          easeOutBack: e => 1 + YT * Math.pow(e - 1, 3) + ZT * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - $T) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + $T) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * QT),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * QT) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * JT) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * JT) / 2 + 1,
          easeInBounce: e => 1 - eO(1 - e),
          easeOutBounce: eO,
          easeInOutBounce: e => e < .5 ? (1 - eO(1 - 2 * e)) / 2 : (1 + eO(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        rO = Symbol.for("FluidValue.get"),
        nO = Symbol.for("FluidValue.observers"),
        oO = e => Boolean(e && e[rO]),
        iO = e => e && e[rO] ? e[rO]() : e,
        sO = e => e[nO] || null;

      function aO(e, t) {
        const r = e[nO];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var lO = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            uO(this, e)
          }
        },
        uO = (e, t) => hO(e, rO, t);

      function cO(e, t) {
        if (e[rO]) {
          let r = e[nO];
          r || hO(e, nO, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function dO(e, t) {
        const r = e[nO];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[nO] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var fO, hO = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        pO = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        mO = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        vO = new RegExp(`(${pO.source})(%|[a-z]+)`, "i"),
        yO = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        gO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        bO = e => {
          const [t, r] = _O(e);
          if (!t || vT()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && gO.test(r) ? bO(r) : r || e
        },
        _O = e => {
          const t = gO.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        wO = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        EO = e => {
          fO || (fO = yT ? new RegExp(`(${Object.keys(yT).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => iO(e).replace(gO, bO).replace(mO, XT).replace(fO, XT)),
            r = t.map(e => e.match(pO).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => WT({
              ...e,
              output: t
            }));
          return e => {
            const r = !vO.test(t[0]) && t.find(e => vO.test(e))?.replace(pO, "");
            let n = 0;
            return t[0].replace(pO, () => `${o[n++](e)}${r||""}`).replace(yO, wO)
          }
        },
        PO = "react-spring: ",
        xO = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${PO}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        CO = xO(console.warn),
        SO = xO(console.warn);

      function TO(e) {
        return aT.str(e) && ("#" == e[0] || /\d/.test(e) || !vT() && gO.test(e) || e in (yT || {}))
      }
      var OO = vT() ? M.useEffect : M.useLayoutEffect;

      function RO() {
        const e = (0, M.useState)()[1],
          t = (() => {
            const e = (0, M.useRef)(!1);
            return OO(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var jO = e => (0, M.useEffect)(e, kO),
        kO = [],
        IO = Symbol.for("Animated:node"),
        NO = e => e && e[IO],
        LO = (e, t) => {
          return r = e, n = IO, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        DO = e => e && e[IO] && e[IO].getPayload(),
        AO = class {
          constructor() {
            LO(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        MO = class e extends AO {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, aT.num(this._value) && (this.lastPosition = this._value)
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
            return aT.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, aT.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        HO = class e extends MO {
          constructor(e) {
            super(0), this._string = null, this._toString = WT({
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
            if (aT.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = WT({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        BO = {
          dependencies: null
        },
        zO = class extends AO {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return cT(this.source, (r, n) => {
              var o;
              (o = r) && o[IO] === o ? t[n] = r.getValue(e) : oO(r) ? t[n] = iO(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && uT(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return cT(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            BO.dependencies && oO(e) && BO.dependencies.add(e);
            const t = DO(e);
            t && uT(t, e => this.add(e))
          }
        },
        VO = class e extends zO {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(FO)), !0)
          }
        };

      function FO(e) {
        return (TO(e) ? HO : MO).create(e)
      }

      function UO(e) {
        const t = NO(e);
        return t ? t.constructor : aT.arr(e) ? VO : TO(e) ? HO : MO
      }
      var GO = (e, t) => {
          const r = !aT.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, M.forwardRef)((n, o) => {
            const i = (0, M.useRef)(null),
              s = r && (0, M.useCallback)(e => {
                i.current = function(e, t) {
                  return e && (aT.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [a, l] = function(e, t) {
                const r = new Set;
                return BO.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new zO(e), BO.dependencies = null, [e, r]
              }(n, t),
              u = RO(),
              c = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) && u()
              },
              d = new qO(c, l),
              f = (0, M.useRef)(void 0);
            OO(() => (f.current = d, uT(l, e => cO(e, d)), () => {
              f.current && (uT(f.current.deps, e => dO(e, f.current)), VS.cancel(f.current.update))
            })), (0, M.useEffect)(c, []), jO(() => () => {
              const e = f.current;
              uT(e.deps, t => dO(t, e))
            });
            const h = t.getComponentProps(a.getValue());
            return M.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        qO = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && VS.write(this.update)
          }
        },
        KO = Symbol.for("AnimatedComponent"),
        XO = e => aT.str(e) ? e : e && aT.str(e.displayName) ? e.displayName : aT.fun(e) && e.name || null;

      function WO(e, ...t) {
        return aT.fun(e) ? e(...t) : e
      }
      var ZO = (e, t) => !0 === e || !!(t && e && (aT.fun(e) ? e(t) : dT(e).includes(t))),
        $O = (e, t) => aT.obj(e) ? t && e[t] : e,
        YO = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        QO = e => e,
        JO = (e, t = QO) => {
          let r = eR;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            aT.und(r) || (n[o] = r)
          }
          return n
        },
        eR = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        tR = {
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

      function rR(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (cT(e, (e, n) => {
              tR[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return cT(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function nR(e) {
        return e = iO(e), aT.arr(e) ? e.map(nR) : TO(e) ? iT.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function oR(e) {
        return aT.fun(e) || aT.arr(e) && aT.obj(e[0])
      }

      function iR(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var sR = {
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
        aR = {
          ...sR.default,
          mass: 1,
          damping: 1,
          easing: tO.linear,
          clamp: !1
        },
        lR = class {
          constructor() {
            this.velocity = 0, Object.assign(this, aR)
          }
        };

      function uR(e, t) {
        if (aT.und(t.decay)) {
          const r = !aT.und(t.tension) || !aT.und(t.friction);
          !r && aT.und(t.frequency) && aT.und(t.damping) && aT.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var cR = [],
        dR = class {
          constructor() {
            this.changed = !1, this.values = cR, this.toValues = null, this.fromValues = cR, this.config = new lR, this.immediate = !1
          }
        };

      function fR(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise((s, a) => {
          let l, u, c = ZO(r.cancel ?? n?.cancel, t);
          if (c) h();
          else {
            aT.und(r.pause) || (o.paused = ZO(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || ZO(e, t)), l = WO(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - VS.now()
          }

          function f() {
            l > 0 && !iT.skipAnimation ? (o.delayed = !0, u = VS.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
          }

          function h() {
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
      var hR = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? vR(e.get()) : t.every(e => e.noop) ? pR(e.get()) : mR(e.get(), t.every(e => e.finished)),
        pR = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        mR = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        vR = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function yR(e, t, r, n) {
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
          const u = JO(t, (e, t) => "onRest" === t ? void 0 : e);
          let c, d;
          const f = new Promise((e, t) => (c = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && vR(n) || o !== r.asyncId && mR(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new bR,
                s = new _R;
              return (async () => {
                if (iT.skipAnimation) throw gR(r), s.result = mR(n, !1), d(s), s;
                h(i);
                const a = aT.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                a.parentId = o, cT(u, (e, t) => {
                  aT.und(a[t]) && (a[t] = e)
                });
                const l = await n.start(a);
                return h(i), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (iT.skipAnimation) return gR(r), mR(n, !1);
          try {
            let t;
            t = aT.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(c), f]), m = mR(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof bR) m = e.result;
            else {
              if (!(e instanceof _R)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? a : void 0, r.promise = i ? l : void 0)
          }
          return aT.fun(s) && VS.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function gR(e, t) {
        fT(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var bR = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        _R = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        wR = e => e instanceof PR,
        ER = 1,
        PR = class extends lO {
          constructor() {
            super(...arguments), this.id = ER++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = NO(this);
            return e && e.getValue()
          }
          to(...e) {
            return iT.to(this, e)
          }
          interpolate(...e) {
            return CO(`${PO}The "interpolate" function is deprecated in v9 (use "to" instead)`), iT.to(this, e)
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
            aO(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || CT.sort(this), aO(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        xR = Symbol.for("SpringPhase"),
        CR = e => (1 & e[xR]) > 0,
        SR = e => (2 & e[xR]) > 0,
        TR = e => (4 & e[xR]) > 0,
        OR = (e, t) => t ? e[xR] |= 3 : e[xR] &= -3,
        RR = (e, t) => t ? e[xR] |= 4 : e[xR] &= -5,
        jR = class extends PR {
          constructor(e, t) {
            if (super(), this.animation = new dR, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !aT.und(e) || !aT.und(t)) {
              const r = aT.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              aT.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(SR(this) || this._state.asyncTo) || TR(this)
          }
          get goal() {
            return iO(this.animation.to)
          }
          get velocity() {
            const e = NO(this);
            return e instanceof MO ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return CR(this)
          }
          get isAnimating() {
            return SR(this)
          }
          get isPaused() {
            return TR(this)
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
            } = n, s = DO(n.to);
            !s && oO(n.to) && (o = dT(iO(n.to))), n.values.forEach((a, l) => {
              if (a.done) return;
              const u = a.constructor == HO ? 1 : s ? s[l].lastPosition : o[l];
              let c = n.immediate,
                d = u;
              if (!c) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != a.v0 ? a.v0 : a.v0 = aT.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let s;
                const f = i.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (aT.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), c = Math.abs(a.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == a.lastVelocity ? o : a.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !aT.und(n),
                      h = r == u ? a.v0 > 0 : r < u;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == h, m && (s = -s * n, d = u)), s += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * s) / i.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, a.durationProgress = n), d = r + i.easing(n) * (u - r), s = (d - a.lastPosition) / e, c = 1 == n
                }
                a.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              s && !s[l].done && (c = !1), c ? a.done = !0 : t = !1, a.setValue(d, i.round) && (r = !0)
            });
            const a = NO(this),
              l = a.getValue();
            if (t) {
              const e = iO(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (a.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return VS.batchedUpdates(() => {
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
            if (SR(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              VS.batchedUpdates(() => {
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
            return aT.und(e) ? (r = this.queue || [], this.queue = []) : r = [aT.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => hR(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), gR(this._state, e && this._lastCallId), VS.batchedUpdates(() => this._stop(t, e)), this
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
            r = aT.obj(r) ? r[t] : r, (null == r || oR(r)) && (r = void 0), n = aT.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return CR(this) || (e.reverse && ([r, n] = [n, r]), n = iO(n), aT.und(n) ? NO(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, JO(e, (e, t) => /^on/.test(t) ? $O(e, r) : e)), AR(this, e, "onProps"), MR(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return fR(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  TR(this) || (RR(this, !0), mT(i.pauseQueue), MR(this, "onPause", mR(this, kR(this, this.animation.to)), this))
                },
                resume: () => {
                  TR(this) && (RR(this, !1), SR(this) && this._resume(), mT(i.resumeQueue), MR(this, "onResume", mR(this, kR(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = IR(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(vR(this));
            const n = !aT.und(e.to),
              o = !aT.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(vR(this));
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
            !o || n || t.default && !aT.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !lT(d, u);
            f && (a.from = d), d = iO(d);
            const h = !lT(c, l);
            h && this._focus(c);
            const p = oR(t.to),
              {
                config: m
              } = a,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (uR(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), uR(e, t), Object.assign(e, t);
              for (const t in aR) null == e[t] && (e[t] = aR[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              aT.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(m, WO(t.config, i), t.config !== s.config ? WO(s.config, i) : void 0);
            let g = NO(this);
            if (!g || aT.und(c)) return r(mR(this, !0));
            const b = aT.und(t.reset) ? o && !t.default : !aT.und(d) && ZO(t.reset, i),
              _ = b ? d : this.get(),
              w = nR(c),
              E = aT.num(w) || aT.arr(w) || TO(w),
              P = !p && (!E || ZO(s.immediate || t.immediate, i));
            if (h) {
              const e = UO(c);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const x = g.constructor;
            let C = oO(c),
              S = !1;
            if (!C) {
              const e = b || !CR(this) && f;
              (h || e) && (S = lT(nR(_), w), C = !S), (lT(a.immediate, P) || P) && lT(m.decay, v) && lT(m.velocity, y) || (C = !0)
            }
            if (S && SR(this) && (a.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || oO(l)) && (a.values = g.getPayload(), a.toValues = oO(c) ? null : x == HO ? [1] : dT(w)), a.immediate != P && (a.immediate = P, P || b || this._set(l)), C)) {
              const {
                onRest: e
              } = a;
              uT(DR, e => AR(this, t, e));
              const n = mR(this, kR(this, l));
              mT(this._pendingCalls, n), this._pendingCalls.add(r), a.changed && VS.batchedUpdates(() => {
                a.changed = !b, e?.(n, this), b ? WO(s.onRest, n) : a.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(yR(t.to, t, this._state, this)) : C ? this._start() : SR(this) && !h ? this._pendingCalls.add(r) : r(pR(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (sO(this) && this._detach(), t.to = e, sO(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            oO(t) && (cO(t, this), wR(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            oO(e) && dO(e, this)
          }
          _set(e, t = !0) {
            const r = iO(e);
            if (!aT.und(r)) {
              const e = NO(this);
              if (!e || !lT(r, e.getValue())) {
                const n = UO(r);
                e && e.constructor == n ? e.setValue(r) : LO(this, n.create(r)), e && VS.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return NO(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, MR(this, "onStart", mR(this, kR(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), WO(this.animation.onChange, e, this)), WO(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            NO(this).reset(iO(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), SR(this) || (OR(this, !0), TR(this) || this._resume())
          }
          _resume() {
            iT.skipAnimation ? this.finish() : CT.start(this)
          }
          _stop(e, t) {
            if (SR(this)) {
              OR(this, !1);
              const r = this.animation;
              uT(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), aO(this, {
                type: "idle",
                parent: this
              });
              const n = t ? vR(this.get()) : mR(this.get(), kR(this, e ?? r.to));
              mT(this._pendingCalls, n), r.changed && (r.changed = !1, MR(this, "onRest", n, this))
            }
          }
        };

      function kR(e, t) {
        const r = nR(t);
        return lT(nR(e.get()), r)
      }

      function IR(e, t = e.loop, r = e.to) {
        const n = WO(t);
        if (n) {
          const o = !0 !== n && rR(n),
            i = (o || e).reverse,
            s = !o || o.reset;
          return NR({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || oR(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function NR(e) {
        const {
          to: t,
          from: r
        } = e = rR(e), n = new Set;
        return aT.obj(t) && LR(t, n), aT.obj(r) && LR(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function LR(e, t) {
        cT(e, (e, r) => null != e && t.add(r))
      }
      var DR = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function AR(e, t, r) {
        e.animation[r] = t[r] !== YO(t, r) ? $O(t[r], e.key) : void 0
      }

      function MR(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var HR = ["onStart", "onChange", "onRest"],
        BR = 1,
        zR = class {
          constructor(e, t) {
            this.id = BR++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              aT.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(NR(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = dT(e).map(NR) : this.queue = [], this._flush ? this._flush(this, t) : (qR(this, t), function(e, t) {
              return Promise.all(t.map(t => VR(e, t))).then(t => hR(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              uT(dT(t), t => r[t].stop(!!e))
            } else gR(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (aT.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              uT(dT(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (aT.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              uT(dT(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            cT(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, fT(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !n && this._started,
              s = o || i && r.size ? this.get() : null;
            o && t.size && fT(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), i && (this._started = !1, fT(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            VS.onFrame(this._onFrame)
          }
        };
      async function VR(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: s,
          onRest: a,
          onResolve: l
        } = t, u = aT.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = aT.arr(o) || aT.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : uT(HR, r => {
          const n = t[r];
          if (aT.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, mT(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === YO(t, "cancel");
        (c || h && d.asyncId) && f.push(fR(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: sT,
            resume: sT,
            start(t, r) {
              h ? (gR(d, e._lastAsyncId), r(vR(e))) : (t.onRest = a, r(yR(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = hR(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = IR(t, s, o);
          if (r) return qR(e, [r]), VR(e, r, !0)
        }
        return l && VS.batchedUpdates(() => l(p, e, e.item)), p
      }

      function FR(e, t) {
        const r = {
          ...e.springs
        };
        return t && uT(dT(t), e => {
            aT.und(e.keys) && (e = NR(e)), aT.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), GR(r, e, e => UR(e))
          }),
          function(e, t) {
            cT(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, cO(t, e))
            })
          }(e, r), r
      }

      function UR(e, t) {
        const r = new jR;
        return r.key = e, t && cO(r, t), r
      }

      function GR(e, t, r) {
        t.keys && uT(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function qR(e, t) {
        uT(t, t => {
          GR(e.springs, t, t => UR(t, e))
        })
      }
      var KR = M.createContext({
          pause: !1,
          immediate: !1
        }),
        XR = () => {
          const e = [],
            t = function(t) {
              SO(`${PO}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return uT(e, (e, o) => {
                if (aT.und(t)) n.push(e.start());
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
            return uT(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return uT(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            uT(e, (e, r) => {
              const n = aT.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return uT(e, (e, n) => {
              if (aT.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return uT(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return uT(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return aT.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        WR = () => XR(),
        ZR = () => (0, M.useState)(WR)[0];

      function $R(e, t, r) {
        const n = aT.fun(t) && t,
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
          f = (0, M.useMemo)(() => n || 3 == arguments.length ? XR() : void 0, []),
          h = dT(e),
          p = [],
          m = (0, M.useRef)(null),
          v = o ? null : m.current;
        OO(() => {
          m.current = p
        }), jO(() => (uT(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          uT(m.current, e => {
            e.expired && clearTimeout(e.expirationId), iR(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : YR++
              })
            }
            return aT.und(r) ? e : aT.fun(r) ? e.map(r) : dT(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        OO(() => uT(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          iR(e, f), WO(u, t, r)
        }));
        const b = [];
        if (v && uT(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), uT(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new zR
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          uT(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        aT.fun(i) && p.sort((e, t) => i(e.item, t.item));
        let _ = -s;
        const w = RO(),
          E = JO(t),
          P = new Map,
          x = (0, M.useRef)(new Map),
          C = (0, M.useRef)(!1);
        uT(p, (e, r) => {
          const o = e.key,
            i = e.phase,
            u = n ? n() : t;
          let f, h;
          const p = WO(u.delay || 0, o);
          if ("mount" == i) f = u.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != i)
              if (e) f = u.leave, h = "leave";
              else {
                if (!(f = u.update)) return;
                h = "update"
              }
            else {
              if (e) return;
              f = u.enter, h = "enter"
            }
          }
          if (f = WO(f, e.item, r), f = aT.obj(f) ? rR(f) : {
              to: f
            }, !f.config) {
            const t = d || E.config;
            f.config = WO(t, e.item, r, h)
          }
          _ += s;
          const g = {
            ...E,
            delay: p + _,
            ref: c,
            immediate: u.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && aT.und(g.from)) {
            const o = n ? n() : t,
              i = aT.und(o.initial) || v ? o.from : o.initial;
            g.from = WO(i, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            WO(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = WO(a, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (x.current.delete(r), l && (C.current = !0), w())
            }
          };
          const S = FR(e.ctrl, g);
          "leave" === h && l ? x.current.set(e, {
            phase: h,
            springs: S,
            payload: g
          }) : P.set(e, {
            phase: h,
            springs: S,
            payload: g
          })
        });
        const S = (0, M.useContext)(KR),
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
        OO(() => {
          O && uT(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), uT(P, (e, t) => {
          if (x.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), OO(() => {
          uT(x.current.size ? x.current : P, ({
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
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), i = aT.str(t.key) || aT.num(t.key) ? t.key : t.ctrl.id, s = M.version < "19.0.0", a = o?.props ?? {}, l = s ? o?.ref : a?.ref;
          return o && o.type ? M.createElement(o.type, {
            ...a,
            key: i,
            ref: l
          }) : o
        }));
        return f ? [R, f] : R
      }
      var YR = 1,
        QR = class extends PR {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = WT(...t);
            const r = this._get(),
              n = UO(r);
            LO(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            lT(t, this.get()) || (NO(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ej(this._active) && tj(this)
          }
          _get() {
            const e = aT.arr(this.source) ? this.source.map(iO) : dT(iO(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !ej(this._active) && (this.idle = !1, uT(DO(this), e => {
              e.done = !1
            }), iT.skipAnimation ? (VS.batchedUpdates(() => this.advance()), tj(this)) : CT.start(this))
          }
          _attach() {
            let e = 1;
            uT(dT(this.source), t => {
              oO(t) && cO(t, this), wR(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            uT(dT(this.source), e => {
              oO(e) && dO(e, this)
            }), this._active.clear(), tj(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = dT(this.source).reduce((e, t) => Math.max(e, (wR(t) ? t.priority : 0) + 1), 0))
          }
        };

      function JR(e) {
        return !1 !== e.idle
      }

      function ej(e) {
        return !e.size || Array.from(e).every(JR)
      }

      function tj(e) {
        e.idle || (e.idle = !0, uT(DO(e), e => {
          e.done = !0
        }), aO(e, {
          type: "idle",
          parent: e
        }))
      }
      iT.assign({
        createStringInterpolator: EO,
        to: (e, t) => new QR(e, t)
      }), CT.advance;
      var rj = /^--/;

      function nj(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || rj.test(e) || ij.hasOwnProperty(e) && ij[e] ? ("" + t).trim() : t + "px"
      }
      var oj = {},
        ij = {
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
        sj = ["Webkit", "Ms", "Moz", "O"];
      ij = Object.keys(ij).reduce((e, t) => (sj.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), ij);
      var aj = /^(matrix|translate|scale|rotate|skew)/,
        lj = /^(translate)/,
        uj = /^(rotate|skew)/,
        cj = (e, t) => aT.num(e) && 0 !== e ? e + t : e,
        dj = (e, t) => aT.arr(e) ? e.every(e => dj(e, t)) : aT.num(e) ? e === t : parseFloat(e) === t,
        fj = class extends zO {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push(e => [`translate3d(${e.map(e=>cj(e,"px")).join(",")})`, dj(e, 0)])), cT(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push(e => [e, "" === e]);
              else if (aj.test(t)) {
                if (delete n[t], aT.und(e)) return;
                const r = lj.test(t) ? "px" : uj.test(t) ? "deg" : "";
                o.push(dT(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${cj(o,r)})`, dj(o, 0)] : e => [`${t}(${e.map(e=>cj(e,r)).join(",")})`, dj(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new hj(o, i)), super(n)
          }
        },
        hj = class extends lO {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return uT(this.inputs, (r, n) => {
              const o = iO(r[0]),
                [i, s] = this.transforms[n](aT.arr(o) ? o : r.map(iO));
              e += " " + i, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && uT(this.inputs, e => uT(e, e => oO(e) && cO(e, this)))
          }
          observerRemoved(e) {
            0 == e && uT(this.inputs, e => uT(e, e => oO(e) && dO(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), aO(this, e)
          }
        };
      iT.assign({
        batchedUpdates: Ct.unstable_batchedUpdates,
        createStringInterpolator: EO,
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
      var pj = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new zO(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = XO(e) || "Anonymous";
              return (e = aT.str(e) ? i[e] || (i[e] = GO(e, o)) : e[KO] || (e[KO] = GO(e, o))).displayName = `Animated(${t})`, e
            };
          return cT(e, (t, r) => {
            aT.arr(e) && (r = XO(t)), i[r] = i(t)
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
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map(t => r || e.hasAttribute(t) ? t : oj[t] || (oj[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = nj(t, o[t]);
                rj.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, c[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new fj(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        mj = pj.animated,
        vj = "Dialog",
        [yj, gj] = (0, uh.A)(vj),
        [bj, _j] = yj(vj),
        wj = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            modal: s = !0
          } = e, a = M.useRef(null), l = M.useRef(null), [u, c] = (0, cp.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: i,
            caller: vj
          });
          return (0, _.jsx)(bj, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: (0, wh.B)(),
            titleId: (0, wh.B)(),
            descriptionId: (0, wh.B)(),
            open: u,
            onOpenChange: c,
            onOpenToggle: M.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        };
      wj.displayName = vj;
      var Ej = "DialogTrigger",
        Pj = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = _j(Ej, r), i = (0, lh.s)(t, o.triggerRef);
          return (0, _.jsx)(ch.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Fj(o.open),
            ...n,
            ref: i,
            onClick: (0, ah.mK)(e.onClick, o.onOpenToggle)
          })
        });
      Pj.displayName = Ej;
      var xj = "DialogPortal",
        [Cj, Sj] = yj(xj, {
          forceMount: void 0
        }),
        Tj = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = _j(xj, t);
          return (0, _.jsx)(Cj, {
            scope: t,
            forceMount: r,
            children: M.Children.map(n, e => (0, _.jsx)(up.C, {
              present: r || i.open,
              children: (0, _.jsx)(lp, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      Tj.displayName = xj;
      var Oj = "DialogOverlay",
        Rj = M.forwardRef((e, t) => {
          const r = Sj(Oj, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = _j(Oj, e.__scopeDialog);
          return i.modal ? (0, _.jsx)(up.C, {
            present: n || i.open,
            children: (0, _.jsx)(kj, {
              ...o,
              ref: t
            })
          }) : null
        });
      Rj.displayName = Oj;
      var jj = (0, du.TL)("DialogOverlay.RemoveScroll"),
        kj = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = _j(Oj, r);
          return (0, _.jsx)(lg.A, {
            as: jj,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, _.jsx)(ch.sG.div, {
              "data-state": Fj(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        Ij = "DialogContent",
        Nj = M.forwardRef((e, t) => {
          const r = Sj(Ij, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            i = _j(Ij, e.__scopeDialog);
          return (0, _.jsx)(up.C, {
            present: n || i.open,
            children: i.modal ? (0, _.jsx)(Lj, {
              ...o,
              ref: t
            }) : (0, _.jsx)(Dj, {
              ...o,
              ref: t
            })
          })
        });
      Nj.displayName = Ij;
      var Lj = M.forwardRef((e, t) => {
          const r = _j(Ij, e.__scopeDialog),
            n = M.useRef(null),
            o = (0, lh.s)(t, r.contentRef, n);
          return M.useEffect(() => {
            const e = n.current;
            if (e) return (0, ag.Eq)(e)
          }, []), (0, _.jsx)(Aj, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, ah.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, ah.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, ah.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        Dj = M.forwardRef((e, t) => {
          const r = _j(Ij, e.__scopeDialog),
            n = M.useRef(!1),
            o = M.useRef(!1);
          return (0, _.jsx)(Aj, {
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
        Aj = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: i,
            ...s
          } = e, a = _j(Ij, r), l = M.useRef(null), u = (0, lh.s)(t, l);
          return Zy(), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(eg, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, _.jsx)(mh, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Fj(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
              })
            }), (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(Kj, {
                titleId: a.titleId
              }), (0, _.jsx)(Xj, {
                contentRef: l,
                descriptionId: a.descriptionId
              })]
            })]
          })
        }),
        Mj = "DialogTitle",
        Hj = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = _j(Mj, r);
          return (0, _.jsx)(ch.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      Hj.displayName = Mj;
      var Bj = "DialogDescription",
        zj = M.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = _j(Bj, r);
          return (0, _.jsx)(ch.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      zj.displayName = Bj;
      var Vj = "DialogClose";

      function Fj(e) {
        return e ? "open" : "closed"
      }
      M.forwardRef((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = _j(Vj, r);
        return (0, _.jsx)(ch.sG.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: (0, ah.mK)(e.onClick, () => o.onOpenChange(!1))
        })
      }).displayName = Vj;
      var Uj = "DialogTitleWarning",
        [Gj, qj] = (0, uh.q)(Uj, {
          contentName: Ij,
          titleName: Mj,
          docsSlug: "dialog"
        }),
        Kj = ({
          titleId: e
        }) => {
          const t = qj(Uj),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return M.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        Xj = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${qj("DialogDescriptionWarning").contentName}}.`;
          return M.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        Wj = wj,
        Zj = Pj,
        $j = Tj,
        Yj = Rj,
        Qj = Nj,
        Jj = Hj,
        ek = zj;
      const tk = () => {
          const e = q(V.fi.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        rk = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function nk({
        dialogRef: e,
        dialogSpringRef: t,
        overlaySpringRef: r,
        onCloseTransitionStart: n,
        onCloseTransitionComplete: o
      }) {
        const i = rk(),
          s = tk(),
          a = (0, M.useRef)(),
          l = (Po(xo), zo({
            drag: ({
              velocity: [, l],
              offset: [, u],
              direction: [, c],
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
                }(p, c)), (!a.current || u < -70) && d(), a.current) {
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
                config: sR.stiff,
                onStart: n,
                onRest: o
              }), r.start({
                ...i(0),
                immediate: !1,
                config: sR.stiff
              })) : (t.start({
                ...s(100),
                immediate: !1,
                config: sR.stiff
              }), r.start({
                ...i(100),
                immediate: !1,
                config: sR.stiff
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
        uk = "foundry_8kowh41",
        ck = (e => {
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
            for (var [u, c] of e.compoundVariants) lk(u, n, e.defaultVariants) && (r += " " + c);
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
      const dk = (0, M.createContext)(null);

      function fk() {
        const e = (0, M.useContext)(dk);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const hk = (0, M.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r,
          onOpenChange: n,
          isOpen: o,
          onOpenTransitionStart: i,
          onOpenTransitionComplete: s,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: l,
          ...u
        }, c) => {
          const d = (0, V.v6)({
              "data-testid": t
            }, u),
            [f, h] = $({
              prop: o,
              defaultProp: r ?? !1,
              onChange: n
            }),
            p = K(f);
          return (0, _.jsx)(dk.Provider, {
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
              dialogSpringRef: ZR(),
              overlaySpringRef: ZR()
            },
            children: (0, _.jsx)(Wj, {
              ref: c,
              open: f,
              onOpenChange: h,
              ...d,
              children: e
            })
          })
        }),
        pk = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isOpen: o,
            overlaySpringRef: i,
            openImmediately: s
          } = fk(), a = rk(), l = W(), u = $R(o, {
            ref: i,
            delay: o ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: sR.stiff,
            immediate: l || s
          }), c = (0, V.v6)({
            "data-testid": t,
            className: "foundry_xov33n0"
          }, r), d = mj(Yj);
          return (0, M.useEffect)(() => {
            i.start()
          }, [o]), u((t, r) => r ? (0, _.jsx)(d, {
            forceMount: !0,
            ref: n,
            ...c,
            style: t,
            children: e
          }) : null)
        }),
        mk = (0, M.forwardRef)(({
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
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = fk(), y = Q(), g = W(), b = (0, M.useRef)(null), w = tk(), {
            bindDrag: E
          } = nk({
            dialogRef: b,
            overlaySpringRef: v,
            dialogSpringRef: m,
            onCloseTransitionStart: () => {
              a(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), P = $R(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: sR.stiff,
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
          const x = X(b, i),
            C = y && !g && !n && E(),
            S = (0, V.v6)({
              "data-testid": t,
              className: "foundry_xov33n1",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: u
            }, C || {}, o),
            T = mj(Qj);
          return P((t, r) => r ? (0, _.jsx)(T, {
            forceMount: !0,
            ref: x,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        vk = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t
          }, r);
          return (0, _.jsx)($j, {
            forceMount: !0,
            ref: n,
            ...o,
            children: e
          })
        }),
        yk = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t,
            className: "foundry_xov33n7 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, _.jsx)(Jj, {
            ref: n,
            ...o,
            children: e
          })
        }),
        gk = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            "data-testid": t
          }, r);
          return (0, _.jsx)(ek, {
            ref: n,
            ...o,
            children: e
          })
        }),
        bk = (0, M.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, V.v6)({
            className: "foundry_xov33nd",
            "data-testid": t
          }, r);
          return (0, _.jsxs)(Gy, {
            ref: n,
            ...o,
            children: [(0, _.jsx)(qy, {
              className: "foundry_xov33ne",
              children: e
            }), (0, _.jsx)(Ky, {
              className: "foundry_xov33nf",
              orientation: "vertical",
              children: (0, _.jsx)(Xy, {
                className: "foundry_xov33ng"
              })
            })]
          })
        }),
        _k = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33n2"
            }, n),
            s = e ? or.DX : "div";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        wk = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33n3"
            }, n),
            s = e ? or.DX : "div";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        Ek = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33n8"
            }, n),
            s = e ? or.DX : "header";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        Pk = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const i = (0, V.v6)({
              "data-testid": r,
              className: "foundry_xov33nc"
            }, n),
            s = e ? or.DX : "footer";
          return (0, _.jsx)(s, {
            ref: o,
            ...i,
            children: t
          })
        }),
        xk = (0, M.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n,
          ...o
        }, i) => {
          const s = (0, V.v6)({
              "data-testid": r,
              className: ck({
                align: n
              })
            }, o),
            a = e ? or.DX : Jj;
          return (0, _.jsx)(a, {
            ref: i,
            ...s,
            children: t
          })
        }),
        Ck = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = fk(), a = (0, V.v6)({
            className: "foundry_xov33n4",
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, _.jsx)(bP, {
            ...a,
            size: "MD",
            ref: o,
            children: e
          })
        }),
        Sk = (0, M.forwardRef)((e, t) => {
          const r = (0, V.v6)({
            className: "foundry_xov33n5"
          }, e);
          return (0, _.jsx)(Wr, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "SM"
          })
        }),
        Tk = (0, M.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: i,
            setIsOpen: s
          } = fk(), a = (0, V.v6)({
            className: uk,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !i && s(!1)
            }
          }, n);
          return (0, _.jsx)(Hr, {
            ref: o,
            ...a,
            children: e
          })
        }),
        Ok = (0, M.forwardRef)(({
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
          } = fk(), d = X(c, i), f = (0, V.v6)({
            className: uk,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": u,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && a(!0)
            }
          }, o), h = e ? or.DX : Zj;
          return (0, _.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        })
    },
    79465: e => {
      "use strict";
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