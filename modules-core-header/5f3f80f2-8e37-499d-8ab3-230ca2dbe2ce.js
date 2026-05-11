try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5f3f80f2-8e37-499d-8ab3-230ca2dbe2ce", e._sentryDebugIdIdentifier = "sentry-dbid-5f3f80f2-8e37-499d-8ab3-230ca2dbe2ce")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5488], {
    35255(e, t, r) {
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
        a = {
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
        i = {};

      function l(e) {
        return n.isMemo(e) ? s : i[e.$$typeof] || o
      }
      i[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, i[n.Memo] = s;
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
          for (var i = l(t), m = l(r), v = 0; v < s.length; ++v) {
            var y = s[v];
            if (!(a[y] || n && n[y] || m && m[y] || i && i[y])) {
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
    16859(e, t) {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        i = r ? Symbol.for("react.profiler") : 60114,
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
                case a:
                case i:
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

      function x(e) {
        return w(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = a, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = i, t.StrictMode = s, t.Suspense = h, t.isAsyncMode = function(e) {
        return x(e) || w(e) === u
      }, t.isConcurrentMode = x, t.isContextConsumer = function(e) {
        return w(e) === c
      }, t.isContextProvider = function(e) {
        return w(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return w(e) === f
      }, t.isFragment = function(e) {
        return w(e) === a
      }, t.isLazy = function(e) {
        return w(e) === v
      }, t.isMemo = function(e) {
        return w(e) === m
      }, t.isPortal = function(e) {
        return w(e) === o
      }, t.isProfiler = function(e) {
        return w(e) === i
      }, t.isStrictMode = function(e) {
        return w(e) === s
      }, t.isSuspense = function(e) {
        return w(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === i || e === s || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === _ || e.$$typeof === y)
      }, t.typeOf = w
    },
    88335(e, t, r) {
      e.exports = r(16859)
    },
    44622(e, t, r) {
      var n = r(71127),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        a = n.useState,
        s = n.useEffect,
        i = n.useLayoutEffect,
        l = n.useDebugValue;

      function c(e) {
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
          n = a({
            inst: {
              value: r,
              getSnapshot: t
            }
          }),
          o = n[0].inst,
          u = n[1];
        return i(function() {
          o.value = r, o.getSnapshot = t, c(o) && u({
            inst: o
          })
        }, [e, r, t]), s(function() {
          return c(o) && u({
            inst: o
          }), e(function() {
            c(o) && u({
              inst: o
            })
          })
        }, [e]), l(r), r
      };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u
    },
    36553(e, t, r) {
      e.exports = r(44622)
    },
    5488(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => h,
        AlertBanner: () => p,
        Avatar: () => w,
        Badge: () => g,
        Body: () => It,
        Breadcrumbs: () => y,
        Button: () => $e,
        Checkbox: () => l,
        ChipGroup: () => P,
        Code: () => Dt,
        Dialog: () => _,
        Display: () => Lt,
        Divider: () => ht,
        Dropdown: () => a,
        Heading: () => Mt,
        IconButton: () => st,
        Label: () => Ht,
        Lightbox: () => o,
        Loader: () => Ct,
        Pagination: () => x,
        Popover: () => C,
        RadioGroup: () => d,
        ScrollArea: () => b,
        Spinner: () => Me,
        Switch: () => s,
        Tag: () => m,
        Text: () => Ft,
        TextArea: () => c,
        TextField: () => f,
        TextSemantics: () => Vt,
        Toast: () => v,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Qd,
        Content: () => Yd,
        Portal: () => Jd,
        Root: () => Zd,
        Trigger: () => $d,
        useTooltipContext: () => Wd
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Qf,
        Close: () => nh,
        Content: () => Kf,
        Controls: () => Jf,
        CssVars: () => sh,
        Download: () => ah,
        Image: () => Yf,
        Keyboard: () => th,
        LightboxContext: () => Bf,
        OpenIcon: () => Uf,
        Overlay: () => Xf,
        Portal: () => qf,
        Reset: () => oh,
        Root: () => Hf,
        RootImplContext: () => zf,
        Thumbnail: () => Gf,
        Trigger: () => Ff,
        Zoom: () => rh,
        ZoomPan: () => Wf
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => Lm,
        Description: () => Vm,
        Hint: () => Fm,
        Label: () => zm,
        Option: () => Gm,
        OptionIcon: () => qm,
        OptionText: () => Um,
        Portal: () => Xm,
        Root: () => Dm,
        ScrollArea: () => Am,
        StatusIcon: () => Wm,
        StatusRoot: () => Km,
        StatusText: () => Zm,
        Trigger: () => Mm,
        TriggerIcon: () => Hm,
        TriggerText: () => Bm,
        useDropdownContext: () => km
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Pv,
        Input: () => wv,
        Label: () => xv,
        Root: () => _v,
        useSwitchContext: () => bv
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Bv,
        CheckMD: () => Mv,
        CheckXL: () => Hv,
        DashLG: () => Vv,
        DashMD: () => zv,
        DashXL: () => Fv
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => sy,
        ErrorText: () => iy,
        Group: () => uy,
        GroupDescription: () => fy,
        GroupErrorText: () => py,
        GroupItems: () => hy,
        GroupLabel: () => dy,
        Input: () => oy,
        Label: () => ay,
        Root: () => ny,
        useGroupContext: () => cy
      });
      var c = {};
      r.r(c), r.d(c, {
        Description: () => Ny,
        Hint: () => Ry,
        Input: () => jy,
        Label: () => Ty,
        Root: () => Oy,
        RootContext: () => Ey,
        StatusIcon: () => ky,
        StatusRoot: () => Iy,
        StatusText: () => Dy,
        useTextAreaContext: () => Sy
      });
      var u = {};
      r.r(u), r.d(u, {
        DotLG: () => Rg,
        DotMD: () => Ng,
        DotXL: () => Ig
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => xg,
        Input: () => Dg,
        Label: () => wg,
        Option: () => kg,
        OptionDescription: () => Ag,
        OptionLabel: () => Lg,
        Options: () => _g,
        Root: () => bg,
        StatusIcon: () => Cg,
        StatusRoot: () => Pg,
        StatusText: () => Eg,
        useRadioGroupContext: () => gg
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Hb,
        Control: () => Ab,
        Description: () => Vb,
        Hint: () => Lb,
        Icon: () => Bb,
        Input: () => Mb,
        Label: () => Db,
        PasswordButton: () => zb,
        Root: () => kb,
        StatusIcon: () => Gb,
        StatusRoot: () => Fb,
        StatusText: () => Ub
      });
      var h = {};
      r.r(h), r.d(h, {
        Body: () => p_,
        CloseButton: () => x_,
        Description: () => g_,
        ErrorText: () => w_,
        Footer: () => __,
        Header: () => h_,
        Icon: () => v_,
        Link: () => b_,
        Root: () => f_,
        RootContext: () => u_,
        Title: () => y_,
        iconStatusMap: () => m_,
        useAlertContext: () => d_
      });
      var p = {};
      r.r(p), r.d(p, {
        Alert: () => Pw,
        CloseButton: () => Sw,
        Description: () => xw,
        Icon: () => ww,
        Link: () => Ew,
        PaginationCounter: () => Nw,
        PaginationNav: () => Ow,
        PaginationNextButton: () => Tw,
        PaginationPrevButton: () => jw,
        PaginationViewport: () => Cw,
        Root: () => bw,
        RootContext: () => yw,
        iconStatusMap: () => _w,
        useAlertBannerContext: () => gw
      });
      var m = {};
      r.r(m), r.d(m, {
        CloseButton: () => qw,
        Icon: () => Uw,
        Label: () => Gw,
        Root: () => Fw,
        RootContext: () => zw,
        useTagContext: () => Vw
      });
      var v = {};
      r.r(v), r.d(v, {
        Action: () => $x,
        CloseButton: () => Yx,
        Description: () => Kx,
        Icon: () => Zx,
        Provider: () => Fx,
        Root: () => Xx,
        RootContext: () => Ux,
        Viewport: () => Gx,
        iconAppearanceMap: () => Wx,
        useToastContext: () => qx
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => dP,
        Item: () => uP,
        OverflowMenu: () => fP,
        OverflowMenuItem: () => hP,
        Root: () => cP,
        RootContext: () => lP,
        useBreadcrumbsContext: () => iP
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => CP,
        Label: () => PP,
        Root: () => xP,
        useBadgeContext: () => wP
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => ZP,
        Root: () => qP,
        Scrollbar: () => KP,
        Thumb: () => WP,
        Viewport: () => XP
      });
      var _ = {};
      r.r(_), r.d(_, {
        ActionArea: () => _C,
        Button: () => wC,
        CloseButton: () => gC,
        Content: () => dC,
        Description: () => hC,
        Footer: () => xC,
        Header: () => vC,
        HeaderButton: () => bC,
        HeaderTitle: () => yC,
        Layout: () => mC,
        Overlay: () => uC,
        Portal: () => CC,
        Root: () => cC,
        ScrollArea: () => pC,
        Title: () => fC,
        Trigger: () => PC,
        useDialogContext: () => lC
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => aE,
        Root: () => oE,
        StatusIndicator: () => sE,
        useAvatarContext: () => nE
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => bE,
        Dropdown: () => CE,
        DropdownLabel: () => PE,
        Ellipsis: () => gE,
        Item: () => mE,
        Label: () => SE,
        Next: () => yE,
        Option: () => EE,
        Pages: () => pE,
        Prev: () => vE,
        ResultsPerPage: () => xE,
        Root: () => hE
      });
      var P = {};
      r.r(P), r.d(P, {
        Icon: () => TS,
        Item: () => OS,
        Label: () => NS,
        Root: () => SS,
        StatusIndicator: () => jS,
        useChipGroupContext: () => ES
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => GS,
        Arrow: () => qS,
        Close: () => KS,
        Content: () => US,
        Portal: () => XS,
        Root: () => HS,
        RootContext: () => BS,
        Trigger: () => zS,
        TriggerButton: () => FS
      });
      var E = r(42295);

      function S(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      class O extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var T = O;

      function j(e) {
        if ("string" != typeof e) throw new T(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = M.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = R[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new T(e);
          return `#${r}`
        }(e) : e;
        const r = k.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(I(e, 2), 16)), parseInt(I(e[3] || "f", 2), 16) / 255]
        }
        const n = D.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 16)), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = L.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map(e => parseInt(e, 10)), parseFloat(e[3] || "1")]
        }
        const a = A.exec(t);
        if (a) {
          const [t, r, n, o] = Array.from(a).slice(1).map(parseFloat);
          if (S(0, 100, r) !== r) throw new T(e);
          if (S(0, 100, n) !== n) throw new T(e);
          return [...H(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new T(e)
      }
      const N = e => parseInt(e.replace(/_/g, ""), 36),
        R = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
          const r = N(t.substring(0, 3)),
            n = N(t.substring(3)).toString(16);
          let o = "";
          for (let e = 0; e < 6 - n.length; e++) o += "0";
          return e[r] = `${o}${n}`, e
        }, {}),
        I = (e, t) => Array.from(Array(t)).map(() => e).join(""),
        k = new RegExp(`^#${I("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        D = new RegExp(`^#${I("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        L = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${I(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        A = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        M = /^[a-z]+$/i,
        B = e => Math.round(255 * e),
        H = (e, t, r) => {
          let n = r / 100;
          if (0 === t) return [n, n, n].map(B);
          const o = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * n - 1)) * (t / 100),
            s = a * (1 - Math.abs(o % 2 - 1));
          let i = 0,
            l = 0,
            c = 0;
          o >= 0 && o < 1 ? (i = a, l = s) : o >= 1 && o < 2 ? (i = s, l = a) : o >= 2 && o < 3 ? (l = a, c = s) : o >= 3 && o < 4 ? (l = s, c = a) : o >= 4 && o < 5 ? (i = s, c = a) : o >= 5 && o < 6 && (i = a, c = s);
          const u = n - a / 2;
          return [i + u, l + u, c + u].map(B)
        };

      function z(e, t) {
        const [r, n, o, a] = function(e) {
          const [t, r, n, o] = j(e).map((e, t) => 3 === t ? e : e / 255), a = Math.max(t, r, n), s = Math.min(t, r, n), i = (a + s) / 2;
          if (a === s) return [0, 0, i, o];
          const l = a - s;
          return [60 * (t === a ? (r - n) / l + (r < n ? 6 : 0) : r === a ? (n - t) / l + 2 : (t - r) / l + 4), i > .5 ? l / (2 - a - s) : l / (a + s), i, o]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${S(0,100,100*t).toFixed()}%, ${S(0,100,100*r).toFixed()}%, ${parseFloat(S(0,1,n).toFixed(3))})`
        }(r, n, o - t, a)
      }

      function V(e, t) {
        return z(e, -t)
      }
      var F = r(71127),
        G = r(23644);

      function U(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, G.Bx)(t, (e, t) => {
            if (null != e) {
              var o = (0, G.Jt)(n, t);
              r[(0, G.Tm)(o)] = String(e)
            }
          })
        } else {
          var o = e;
          for (var a in o) {
            var s = o[a];
            null != s && (r[(0, G.Tm)(a)] = s)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
          },
          writable: !1
        }), r
      }
      r(10357);
      var q = {
          grey: {
            static: {
              25: "var(--foundry-global-color-grey-static-25-05dae190)",
              50: "var(--foundry-global-color-grey-static-50-767699a7)",
              75: "var(--foundry-global-color-grey-static-75-a2172132)",
              100: "var(--foundry-global-color-grey-static-100-01811cdb)",
              200: "var(--foundry-global-color-grey-static-200-8230761c)",
              300: "var(--foundry-global-color-grey-static-300-60d2d1b8)",
              400: "var(--foundry-global-color-grey-static-400-b9847fcb)",
              500: "var(--foundry-global-color-grey-static-500-c92b4dd8)",
              600: "var(--foundry-global-color-grey-static-600-048e9067)",
              700: "var(--foundry-global-color-grey-static-700-6ebcd800)",
              800: "var(--foundry-global-color-grey-static-800-35f77231)",
              900: "var(--foundry-global-color-grey-static-900-a85ec23d)"
            },
            adaptive: {
              25: "var(--foundry-global-color-grey-adaptive-25-4181979c)",
              50: "var(--foundry-global-color-grey-adaptive-50-2026f5f9)",
              75: "var(--foundry-global-color-grey-adaptive-75-e832421c)",
              100: "var(--foundry-global-color-grey-adaptive-100-ed36bf65)",
              200: "var(--foundry-global-color-grey-adaptive-200-fb12d031)",
              300: "var(--foundry-global-color-grey-adaptive-300-02700b85)",
              400: "var(--foundry-global-color-grey-adaptive-400-54ccd69e)",
              500: "var(--foundry-global-color-grey-adaptive-500-ddc3fb78)",
              600: "var(--foundry-global-color-grey-adaptive-600-e8d9db01)",
              700: "var(--foundry-global-color-grey-adaptive-700-e3418aa4)",
              800: "var(--foundry-global-color-grey-adaptive-800-59c03dd7)",
              900: "var(--foundry-global-color-grey-adaptive-900-bbecd7df)",
              1e3: "var(--foundry-global-color-grey-adaptive-1000-020dfb1f)"
            }
          },
          red: {
            static: {
              100: "var(--foundry-global-color-red-static-100-5234bf51)",
              200: "var(--foundry-global-color-red-static-200-9b555022)",
              300: "var(--foundry-global-color-red-static-300-6ef42061)",
              400: "var(--foundry-global-color-red-static-400-bd31684b)",
              500: "var(--foundry-global-color-red-static-500-b89c22c5)",
              600: "var(--foundry-global-color-red-static-600-ed4f7808)",
              700: "var(--foundry-global-color-red-static-700-20c326c5)",
              800: "var(--foundry-global-color-red-static-800-60c90a7b)",
              900: "var(--foundry-global-color-red-static-900-55f69265)",
              1e3: "var(--foundry-global-color-red-static-1000-12c1e6bb)",
              1100: "var(--foundry-global-color-red-static-1100-284ef4c0)",
              1200: "var(--foundry-global-color-red-static-1200-5d3f7911)",
              1300: "var(--foundry-global-color-red-static-1300-43fd11f8)",
              1400: "var(--foundry-global-color-red-static-1400-dff9f9a5)"
            },
            adaptive: {
              100: "var(--foundry-global-color-red-adaptive-100-9f218b31)",
              200: "var(--foundry-global-color-red-adaptive-200-b287e195)",
              300: "var(--foundry-global-color-red-adaptive-300-3513afa6)",
              400: "var(--foundry-global-color-red-adaptive-400-2e43b523)",
              500: "var(--foundry-global-color-red-adaptive-500-d198b061)",
              600: "var(--foundry-global-color-red-adaptive-600-7da276f6)",
              700: "var(--foundry-global-color-red-adaptive-700-6f634812)",
              800: "var(--foundry-global-color-red-adaptive-800-7f423e03)",
              900: "var(--foundry-global-color-red-adaptive-900-43f71e11)",
              1e3: "var(--foundry-global-color-red-adaptive-1000-9f5e2924)",
              1100: "var(--foundry-global-color-red-adaptive-1100-f2f72614)",
              1200: "var(--foundry-global-color-red-adaptive-1200-aef5078c)",
              1300: "var(--foundry-global-color-red-adaptive-1300-3c79c39b)",
              1400: "var(--foundry-global-color-red-adaptive-1400-918ac2c6)"
            }
          },
          yellow: {
            static: {
              100: "var(--foundry-global-color-yellow-static-100-2887d8ce)",
              200: "var(--foundry-global-color-yellow-static-200-1dceac31)",
              300: "var(--foundry-global-color-yellow-static-300-bda8dae5)",
              400: "var(--foundry-global-color-yellow-static-400-e603ca1c)",
              500: "var(--foundry-global-color-yellow-static-500-b9703bbc)",
              600: "var(--foundry-global-color-yellow-static-600-828a39a0)",
              700: "var(--foundry-global-color-yellow-static-700-cb059cba)",
              800: "var(--foundry-global-color-yellow-static-800-e49b6916)",
              900: "var(--foundry-global-color-yellow-static-900-ff35761e)",
              1e3: "var(--foundry-global-color-yellow-static-1000-7c6c4551)",
              1100: "var(--foundry-global-color-yellow-static-1100-2e821a8c)",
              1200: "var(--foundry-global-color-yellow-static-1200-aea00231)",
              1300: "var(--foundry-global-color-yellow-static-1300-7eec7bd0)",
              1400: "var(--foundry-global-color-yellow-static-1400-0ff6b89d)"
            },
            adaptive: {
              100: "var(--foundry-global-color-yellow-adaptive-100-8f09820e)",
              200: "var(--foundry-global-color-yellow-adaptive-200-63c3f5ee)",
              300: "var(--foundry-global-color-yellow-adaptive-300-4deab2f6)",
              400: "var(--foundry-global-color-yellow-adaptive-400-78286ac3)",
              500: "var(--foundry-global-color-yellow-adaptive-500-f0427a70)",
              600: "var(--foundry-global-color-yellow-adaptive-600-3f6d60dc)",
              700: "var(--foundry-global-color-yellow-adaptive-700-959c799c)",
              800: "var(--foundry-global-color-yellow-adaptive-800-099fea86)",
              900: "var(--foundry-global-color-yellow-adaptive-900-9443df02)",
              1e3: "var(--foundry-global-color-yellow-adaptive-1000-abbedd59)",
              1100: "var(--foundry-global-color-yellow-adaptive-1100-ff18d083)",
              1200: "var(--foundry-global-color-yellow-adaptive-1200-4bc40f51)",
              1300: "var(--foundry-global-color-yellow-adaptive-1300-b3a4b5b4)",
              1400: "var(--foundry-global-color-yellow-adaptive-1400-3048335a)"
            }
          },
          green: {
            static: {
              100: "var(--foundry-global-color-green-static-100-753f09df)",
              200: "var(--foundry-global-color-green-static-200-b1b43708)",
              300: "var(--foundry-global-color-green-static-300-d66b3241)",
              400: "var(--foundry-global-color-green-static-400-a93942e5)",
              500: "var(--foundry-global-color-green-static-500-2888e254)",
              600: "var(--foundry-global-color-green-static-600-aebbfb3a)",
              700: "var(--foundry-global-color-green-static-700-89b4ffdc)",
              800: "var(--foundry-global-color-green-static-800-87b9bb4f)",
              900: "var(--foundry-global-color-green-static-900-b42b84da)",
              1e3: "var(--foundry-global-color-green-static-1000-43ecb25e)",
              1100: "var(--foundry-global-color-green-static-1100-d4597796)",
              1200: "var(--foundry-global-color-green-static-1200-a4dad299)",
              1300: "var(--foundry-global-color-green-static-1300-7861b376)",
              1400: "var(--foundry-global-color-green-static-1400-4d463023)"
            },
            adaptive: {
              100: "var(--foundry-global-color-green-adaptive-100-e36f5da3)",
              200: "var(--foundry-global-color-green-adaptive-200-e50d247c)",
              300: "var(--foundry-global-color-green-adaptive-300-e74a73b3)",
              400: "var(--foundry-global-color-green-adaptive-400-3e375ae0)",
              500: "var(--foundry-global-color-green-adaptive-500-5eb32af8)",
              600: "var(--foundry-global-color-green-adaptive-600-67db0104)",
              700: "var(--foundry-global-color-green-adaptive-700-b46c5b6e)",
              800: "var(--foundry-global-color-green-adaptive-800-62f4ea41)",
              900: "var(--foundry-global-color-green-adaptive-900-456c793d)",
              1e3: "var(--foundry-global-color-green-adaptive-1000-ebe84050)",
              1100: "var(--foundry-global-color-green-adaptive-1100-7d1a8857)",
              1200: "var(--foundry-global-color-green-adaptive-1200-f5a760b2)",
              1300: "var(--foundry-global-color-green-adaptive-1300-98111c27)",
              1400: "var(--foundry-global-color-green-adaptive-1400-c7a2c7e4)"
            }
          },
          blue: {
            static: {
              100: "var(--foundry-global-color-blue-static-100-e67c243c)",
              200: "var(--foundry-global-color-blue-static-200-d053fe98)",
              300: "var(--foundry-global-color-blue-static-300-564f6a4f)",
              400: "var(--foundry-global-color-blue-static-400-803833dc)",
              500: "var(--foundry-global-color-blue-static-500-029df7ec)",
              600: "var(--foundry-global-color-blue-static-600-55155611)",
              700: "var(--foundry-global-color-blue-static-700-f0d799e8)",
              800: "var(--foundry-global-color-blue-static-800-6d071594)",
              900: "var(--foundry-global-color-blue-static-900-92d3b7cc)",
              1e3: "var(--foundry-global-color-blue-static-1000-cc0c4d91)",
              1100: "var(--foundry-global-color-blue-static-1100-674881c3)",
              1200: "var(--foundry-global-color-blue-static-1200-81ade28f)",
              1300: "var(--foundry-global-color-blue-static-1300-92c235c9)",
              1400: "var(--foundry-global-color-blue-static-1400-1b5feb14)"
            },
            adaptive: {
              100: "var(--foundry-global-color-blue-adaptive-100-b6c46a86)",
              200: "var(--foundry-global-color-blue-adaptive-200-0ccc0c81)",
              300: "var(--foundry-global-color-blue-adaptive-300-e5d80c0e)",
              400: "var(--foundry-global-color-blue-adaptive-400-44a2af0b)",
              500: "var(--foundry-global-color-blue-adaptive-500-64093fc7)",
              600: "var(--foundry-global-color-blue-adaptive-600-41bcc0d5)",
              700: "var(--foundry-global-color-blue-adaptive-700-6f985a0d)",
              800: "var(--foundry-global-color-blue-adaptive-800-c66fae2b)",
              900: "var(--foundry-global-color-blue-adaptive-900-f87fb7ab)",
              1e3: "var(--foundry-global-color-blue-adaptive-1000-129c45a7)",
              1100: "var(--foundry-global-color-blue-adaptive-1100-579d2d7f)",
              1200: "var(--foundry-global-color-blue-adaptive-1200-5b826b61)",
              1300: "var(--foundry-global-color-blue-adaptive-1300-5864a192)",
              1400: "var(--foundry-global-color-blue-adaptive-1400-b9e5f8ab)"
            }
          },
          seafoam: {
            static: {
              100: "var(--foundry-global-color-seafoam-static-100-a401f55d)",
              200: "var(--foundry-global-color-seafoam-static-200-157f98a6)",
              300: "var(--foundry-global-color-seafoam-static-300-f057cb2a)",
              400: "var(--foundry-global-color-seafoam-static-400-5c314058)",
              500: "var(--foundry-global-color-seafoam-static-500-4eba9472)",
              600: "var(--foundry-global-color-seafoam-static-600-bb39e74b)",
              700: "var(--foundry-global-color-seafoam-static-700-97a0e42c)",
              800: "var(--foundry-global-color-seafoam-static-800-c898779d)",
              900: "var(--foundry-global-color-seafoam-static-900-ca1e00fd)",
              1e3: "var(--foundry-global-color-seafoam-static-1000-97b36592)",
              1100: "var(--foundry-global-color-seafoam-static-1100-7a540639)",
              1200: "var(--foundry-global-color-seafoam-static-1200-9d613b2f)",
              1300: "var(--foundry-global-color-seafoam-static-1300-5d82dc91)",
              1400: "var(--foundry-global-color-seafoam-static-1400-c9f1799c)"
            },
            adaptive: {
              100: "var(--foundry-global-color-seafoam-adaptive-100-9fd7898d)",
              200: "var(--foundry-global-color-seafoam-adaptive-200-ad5ea160)",
              300: "var(--foundry-global-color-seafoam-adaptive-300-339db442)",
              400: "var(--foundry-global-color-seafoam-adaptive-400-bacc52ab)",
              500: "var(--foundry-global-color-seafoam-adaptive-500-24d9f0ae)",
              600: "var(--foundry-global-color-seafoam-adaptive-600-28f1d217)",
              700: "var(--foundry-global-color-seafoam-adaptive-700-f8862c98)",
              800: "var(--foundry-global-color-seafoam-adaptive-800-240ff22d)",
              900: "var(--foundry-global-color-seafoam-adaptive-900-30744fa2)",
              1e3: "var(--foundry-global-color-seafoam-adaptive-1000-cecc3b2f)",
              1100: "var(--foundry-global-color-seafoam-adaptive-1100-307fe74e)",
              1200: "var(--foundry-global-color-seafoam-adaptive-1200-1d61b617)",
              1300: "var(--foundry-global-color-seafoam-adaptive-1300-26c82681)",
              1400: "var(--foundry-global-color-seafoam-adaptive-1400-6cf3df35)"
            }
          },
          white: {
            static: {
              5: "var(--foundry-global-color-white-static-5-c4aa496e)",
              10: "var(--foundry-global-color-white-static-10-fc74444e)",
              15: "var(--foundry-global-color-white-static-15-e98f967d)",
              20: "var(--foundry-global-color-white-static-20-6326998e)",
              35: "var(--foundry-global-color-white-static-35-fdd05d92)",
              40: "var(--foundry-global-color-white-static-40-a06b4074)",
              50: "var(--foundry-global-color-white-static-50-195bb728)",
              65: "var(--foundry-global-color-white-static-65-c30f2d6e)",
              80: "var(--foundry-global-color-white-static-80-1525ba22)",
              85: "var(--foundry-global-color-white-static-85-79c7cc6b)",
              90: "var(--foundry-global-color-white-static-90-5959c519)",
              95: "var(--foundry-global-color-white-static-95-becabaec)",
              100: "var(--foundry-global-color-white-static-100-d44db539)"
            }
          },
          black: {
            static: {
              5: "var(--foundry-global-color-black-static-5-5a16f697)",
              10: "var(--foundry-global-color-black-static-10-16a76e5e)",
              15: "var(--foundry-global-color-black-static-15-d198b2a6)",
              20: "var(--foundry-global-color-black-static-20-3ae064df)",
              35: "var(--foundry-global-color-black-static-35-1523cb80)",
              40: "var(--foundry-global-color-black-static-40-32fa6bf3)",
              50: "var(--foundry-global-color-black-static-50-e761096d)",
              65: "var(--foundry-global-color-black-static-65-1c288c8d)",
              80: "var(--foundry-global-color-black-static-80-ceca67af)",
              85: "var(--foundry-global-color-black-static-85-3cb71ba6)",
              90: "var(--foundry-global-color-black-static-90-45219d0a)",
              95: "var(--foundry-global-color-black-static-95-4042e3bb)",
              100: "var(--foundry-global-color-black-static-100-43aea341)"
            }
          },
          alpha: {
            adaptive: {
              5: "var(--foundry-global-color-alpha-adaptive-5-b141acdd)",
              10: "var(--foundry-global-color-alpha-adaptive-10-2f911b2f)",
              15: "var(--foundry-global-color-alpha-adaptive-15-695b3a30)",
              20: "var(--foundry-global-color-alpha-adaptive-20-8e38b04d)",
              35: "var(--foundry-global-color-alpha-adaptive-35-f9b0b74d)",
              40: "var(--foundry-global-color-alpha-adaptive-40-29c77778)",
              50: "var(--foundry-global-color-alpha-adaptive-50-f61afb4a)",
              65: "var(--foundry-global-color-alpha-adaptive-65-5c75d572)",
              80: "var(--foundry-global-color-alpha-adaptive-80-6e56c3f3)",
              85: "var(--foundry-global-color-alpha-adaptive-85-130819b2)",
              90: "var(--foundry-global-color-alpha-adaptive-90-a416f5ef)",
              95: "var(--foundry-global-color-alpha-adaptive-95-68274c65)"
            }
          }
        },
        X = r(78806);
      const K = e => {
        const t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      };

      function W(e) {
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

      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Z(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = W(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach(function(t) {
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
      var Q = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        J = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $($({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Q(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Y(e.variantClassNames, e => Y(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ee = "var(--foundry_1qqcnua0)",
        te = "var(--foundry_1qqcnua1)",
        re = "var(--foundry_1qqcnua2)",
        ne = "var(--foundry_1qqcnua3)",
        oe = "var(--foundry_1qqcnua4)",
        ae = "var(--foundry_1qqcnua5)",
        se = "var(--foundry_1qqcnua6)",
        ie = "var(--foundry_1qqcnua7)",
        le = "var(--foundry_1qqcnua8)",
        ce = "var(--foundry_1qqcnua9)",
        ue = "var(--foundry_1qqcnuaa)",
        de = "var(--foundry_1qqcnuab)",
        fe = "var(--foundry_1qqcnuac)",
        he = "var(--foundry_1qqcnuad)",
        pe = "var(--foundry_1qqcnuae)",
        me = "var(--foundry_1qqcnuaf)",
        ve = "var(--foundry_1qqcnuag)",
        ye = "var(--foundry_1qqcnuah)",
        ge = "var(--foundry_1qqcnuai)",
        be = "var(--foundry_1qqcnuaj)",
        _e = "var(--foundry_1qqcnuak)",
        we = "var(--foundry_1qqcnual)",
        xe = "var(--foundry_1qqcnuam)",
        Pe = "var(--foundry_1qqcnuan)";
      J({
        defaultClassName: "foundry_1qqcnuao",
        variantClassNames: {
          appearance: {
            primary: "foundry_1qqcnuap",
            secondary: "foundry_1qqcnuaq",
            tertiary: "foundry_1qqcnuar",
            ghost: "foundry_1qqcnuas",
            information: "foundry_1qqcnuat",
            danger: "foundry_1qqcnuau",
            accent: "foundry_1qqcnuav",
            link: "foundry_1qqcnuaw"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), J({
        defaultClassName: "foundry_tdsdcda foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdc",
            MD: "foundry_tdsdcdd",
            SM: "foundry_tdsdcde",
            XS: "foundry_tdsdcdf"
          },
          appearance: {
            default: "foundry_tdsdcdg",
            bold: "foundry_tdsdcdh",
            hyperlink: "foundry_tdsdcdi"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), J({
        defaultClassName: "foundry_tdsdcds foundry_tdsdcd0",
        variantClassNames: {
          appearance: {
            default: "foundry_tdsdcdu",
            bold: "foundry_tdsdcdv"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), J({
        defaultClassName: "foundry_tdsdcd2 foundry_tdsdcd0",
        variantClassNames: {
          level: {
            1: "foundry_tdsdcd4",
            2: "foundry_tdsdcd5",
            3: "foundry_tdsdcd6",
            4: "foundry_tdsdcd7",
            5: "foundry_tdsdcd8",
            6: "foundry_tdsdcd9"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      }), J({
        defaultClassName: "foundry_tdsdcdj foundry_tdsdcd0",
        variantClassNames: {
          size: {
            LG: "foundry_tdsdcdl",
            MD: "foundry_tdsdcdm",
            SM: "foundry_tdsdcdn",
            XS: "foundry_tdsdcdo",
            XXS: "foundry_tdsdcdp"
          },
          appearance: {
            default: "foundry_tdsdcdq",
            bold: "foundry_tdsdcdr"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Ce = {
          enabled: {
            background: K(ee),
            border: K(te),
            text: K(re),
            outline: K(ne)
          },
          hover: {
            background: K(oe),
            border: K(ae),
            text: K(se),
            outline: K(ie)
          },
          focus: {
            background: K(le),
            border: K(ce),
            text: K(ue),
            outline: K(de)
          },
          pressed: {
            background: K(fe),
            border: K(he),
            text: K(pe),
            outline: K(me)
          },
          disabled: {
            background: K(ve),
            border: K(ye),
            text: K(ge),
            outline: K(be)
          },
          loading: {
            background: K(_e),
            border: K(we),
            text: K(xe),
            outline: K(Pe)
          }
        },
        Ee = ({
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
            backgroundColor: a,
            hoverColor: s,
            pressedColor: i,
            textColor: l
          },
          enabled: c = !1
        }, u = []) => {
          (0, F.useEffect)(() => {
            if (!e.current || !a || !c) return;
            const u = `${a}:${t}:${r}`,
              {
                text: d,
                hover: f,
                pressed: h
              } = (0, X.getOrSet)(u, () => {
                const e = function(e) {
                  if ("transparent" === e) return 0;

                  function t(e) {
                    const t = e / 255;
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                  }
                  const [r, n, o] = j(e);
                  return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
                }(a);
                return {
                  text: l || (e > t ? q.black.static[100] : q.white.static[100]),
                  hover: s || (e >= r ? z(a, n) : V(a, n)),
                  pressed: i || (e >= r ? z(a, o) : V(a, o))
                }
              });
            return e.current.style.setProperty(Ce.enabled.background, a), e.current.style.setProperty(Ce.enabled.border, a), e.current.style.setProperty(Ce.enabled.text, d), e.current.style.setProperty(Ce.hover.background, f), e.current.style.setProperty(Ce.hover.border, f), e.current.style.setProperty(Ce.hover.text, d), e.current.style.setProperty(Ce.focus.background, f), e.current.style.setProperty(Ce.focus.border, f), e.current.style.setProperty(Ce.focus.text, d), e.current.style.setProperty(Ce.pressed.background, h), e.current.style.setProperty(Ce.pressed.border, h), e.current.style.setProperty(Ce.pressed.text, d), e.current.style.setProperty(Ce.loading.background, f), e.current.style.setProperty(Ce.loading.border, f), e.current.style.setProperty(Ce.loading.text, d), () => {
              e.current?.style.removeProperty(Ce.enabled.background), e.current?.style.removeProperty(Ce.enabled.border), e.current?.style.removeProperty(Ce.enabled.text), e.current?.style.removeProperty(Ce.hover.background), e.current?.style.removeProperty(Ce.hover.border), e.current?.style.removeProperty(Ce.hover.text), e.current?.style.removeProperty(Ce.focus.background), e.current?.style.removeProperty(Ce.focus.border), e.current?.style.removeProperty(Ce.focus.text), e.current?.style.removeProperty(Ce.pressed.background), e.current?.style.removeProperty(Ce.pressed.border), e.current?.style.removeProperty(Ce.pressed.text), e.current?.style.removeProperty(Ce.loading.background), e.current?.style.removeProperty(Ce.loading.border), e.current?.style.removeProperty(Ce.loading.text)
            }
          }, [e.current, t, r, n, o, a, s, i, l, c, ...u])
        };
      var Se = r(95628),
        Oe = r(32067),
        Te = r(43661),
        je = r(71753);

      function Ne(e) {
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

      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Re(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ne(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ke(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var De = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Le = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ie(Ie({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) De(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ke(e.variantClassNames, e => ke(e, e => e.split(" ")[0]))
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
      const Ae = "pageMD",
        Me = (0, F.forwardRef)(({
          label: e,
          hideTrack: t = !1,
          size: r = Ae,
          testId: n,
          ...o
        }, a) => {
          const s = (0, Te.zQ)(),
            i = "string" == typeof r ? r : r?.[s] ?? r.default ?? Ae,
            l = (0, X.mergeProps)({
              className: Le({
                size: i
              }),
              "data-testid": n,
              "aria-label": e
            }, o);
          return (0, E.jsx)(je.b, {
            label: e,
            children: (0, E.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              ...l,
              ref: a,
              viewBox: "0 0 16 16",
              children: [!t && (0, E.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd18"
              }), (0, E.jsx)("circle", {
                cx: 8,
                cy: 8,
                r: 6.75,
                className: "foundry_1d33zd19"
              })]
            })
          })
        });
      var Be = r(1556),
        He = r(67774);

      function ze(e) {
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

      function Ve(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ve(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ze(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ve(Object(r)).forEach(function(t) {
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
      var Ue = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qe = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fe(Fe({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Ue(c, n, e.defaultVariants) && (r += " " + u);
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
        },
        Xe = qe({
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
      qe({
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
      var Ke = qe({
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
        We = qe({
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
        Ze = qe({
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
      const $e = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        children: r,
        iconLeft: n,
        iconLeftLabel: o,
        iconRight: a,
        iconRightLabel: s,
        appearance: i,
        size: l = "MD",
        fullWidth: c = !1,
        isLoading: u = !1,
        spinnerLabel: d,
        preventFocusOnPress: f = !1,
        override_darkenLuminance: h = .035,
        override_textLuminance: p = .179,
        override_hoverLuminance: m = .08,
        override_pressedLuminance: v = .15,
        override_backgroundColor: y,
        override_hoverColor: g,
        override_pressedColor: b,
        override_textColor: _,
        ...w
      }, x) => {
        const P = (0, F.useRef)(null),
          C = (0, Se.UP)(P, x),
          S = (0, Te.zQ)(),
          O = "string" == typeof l ? l : l?.[S] ?? l.default ?? "MD",
          {
            buttonProps: T
          } = (0, Se.sL)((0, X.mergeProps)(w, {
            isLoading: u,
            preventFocusOnPress: f
          }), P);
        Ee({
          refs: {
            buttonRef: P
          },
          config: {
            textLuminance: p,
            darkenLuminance: h,
            hoverLuminance: m,
            pressedLuminance: v
          },
          overrides: {
            backgroundColor: y,
            hoverColor: g,
            pressedColor: b,
            textColor: _
          },
          enabled: "accent" === i
        }, [t]);
        const j = (0, X.mergeProps)({
            className: Xe({
              appearance: i,
              size: O,
              fullWidth: c,
              iconLeft: !!n,
              iconRight: !!a
            }),
            "data-testid": e
          }, T),
          N = n && He[n],
          R = a && He[a],
          I = t ? Oe.DX : "button",
          k = c && (R || R && N);
        return (0, E.jsxs)(I, {
          ref: C,
          ...j,
          children: [k && (0, E.jsx)("div", {
            className: "foundry_17pcofy14"
          }), N && (0, E.jsx)(N, {
            label: o || "",
            size: O,
            className: (0, Be.clsx)(Ke({
              size: O
            }), "foundry_17pcofy10")
          }), (0, E.jsx)(Oe.xV, {
            children: r
          }), R && (0, E.jsx)(R, {
            label: s || "",
            size: O,
            className: (0, Be.clsx)(Ke({
              size: O
            }), We({
              fullWidth: c
            }))
          }), u && (0, E.jsx)("div", {
            className: "foundry_17pcofy15",
            children: (0, E.jsx)(Me, {
              label: d || "",
              size: "inline" + ("LG" === O ? "LG" : "MD"),
              hideTrack: !0,
              className: Ze({
                size: O
              })
            })
          })]
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

      function Qe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qe(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ye(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qe(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function et(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var tt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Je(Je({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) tt(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return et(e.variantClassNames, e => et(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nt = rt({
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
        ot = rt({
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
        at = rt({
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
      const st = (0, F.forwardRef)(({
        testId: e,
        asChild: t,
        icon: r,
        label: n,
        appearance: o,
        fullWidth: a = !1,
        size: s = "LG",
        children: i,
        isLoading: l = !1,
        spinnerLabel: c,
        preventFocusOnPress: u = !1,
        override_darkenLuminance: d = .035,
        override_textLuminance: f = .179,
        override_hoverLuminance: h = .08,
        override_pressedLuminance: p = .15,
        override_backgroundColor: m,
        override_hoverColor: v,
        override_pressedColor: y,
        override_textColor: g,
        ...b
      }, _) => {
        const w = (0, F.useRef)(null),
          x = (0, Se.UP)(w, _),
          P = (0, Te.zQ)(),
          C = "string" == typeof s ? s : s?.[P] ?? s.default ?? "LG",
          {
            buttonProps: S
          } = (0, Se.sL)((0, X.mergeProps)(b, {
            isLoading: l,
            preventFocusOnPress: u
          }), w);
        Ee({
          refs: {
            buttonRef: w
          },
          config: {
            textLuminance: f,
            darkenLuminance: d,
            hoverLuminance: h,
            pressedLuminance: p
          },
          overrides: {
            backgroundColor: m,
            hoverColor: v,
            pressedColor: y,
            textColor: g
          },
          enabled: "accent" === o
        }, [t]);
        const O = (0, X.mergeProps)({
            className: ot({
              appearance: o,
              size: C,
              fullWidth: a
            }),
            "data-testid": e
          }, S),
          T = He[r],
          j = t ? Oe.DX : "button";
        return (0, E.jsxs)(j, {
          ref: x,
          ...O,
          children: [T && (0, E.jsx)(T, {
            label: n || "",
            size: C,
            className: nt({
              size: C
            })
          }), (0, E.jsx)(Oe.xV, {
            children: i
          }), l && (0, E.jsx)("div", {
            className: "foundry_a5x3khk",
            children: (0, E.jsx)(Me, {
              label: c || "",
              size: C && "SM" !== C ? `inline${C}` : "inlineMD",
              hideTrack: !0,
              className: at({
                size: C
              })
            })
          })]
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

      function lt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = it(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lt(Object(r)).forEach(function(t) {
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
        ft = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ct(ct({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) dt(c, n, e.defaultVariants) && (r += " " + u);
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
      const ht = (0, F.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const l = "horizontal" !== t || n ? "div" : "hr",
          c = n || "hr" === l ? void 0 : "separator",
          u = o ? Oe.DX : l;
        return (0, E.jsx)(u, {
          ref: i,
          className: (0, Be.clsx)(ft({
            thickness: r,
            orientation: t
          }), e),
          role: c,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });

      function pt(e) {
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

      function mt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mt(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bt = "var(--foundry_9dxgbc2)",
        _t = "var(--foundry_9dxgbc3)",
        wt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vt(vt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) gt(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yt(e.variantClassNames, e => yt(e, e => e.split(" ")[0]))
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
        xt = "var(--foundry_9dxgbc0)",
        Pt = "var(--foundry_9dxgbc1)";
      const Ct = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const l = (0, Te.zQ)(),
          c = "string" == typeof a ? a : a?.[l] ?? a.default ?? "MD",
          u = (0, X.mergeProps)({
            className: wt({
              size: c
            }),
            "data-testid": t,
            style: U({
              [xt]: n?.pulseColorBackground,
              [Pt]: n?.pulseColorForeground,
              [bt]: n?.gradientColorBackground,
              [_t]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          d = e ? Oe.DX : "div";
        return (0, E.jsx)(d, {
          ref: i,
          ...u,
          children: e ? (0, E.jsx)(Oe.xV, {
            children: r
          }) : (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, E.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });

      function Et(e) {
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

      function St(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? St(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Et(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : St(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jt = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nt = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ot(Ot({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) jt(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tt(e.variantClassNames, e => Tt(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rt = Nt({
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
      const It = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? Oe.DX : "p",
          i = (0, X.mergeProps)({
            className: Rt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, E.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var kt = Nt({
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
      const Dt = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? Oe.DX : "p",
            s = (0, X.mergeProps)({
              className: kt({
                appearance: r
              })
            }, n);
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        Lt = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "h1",
            a = (0, X.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var At = Nt({
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
      const Mt = (0, F.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? Oe.DX : `h${t}`,
          s = (0, X.mergeProps)(n, {
            className: At({
              level: t
            })
          });
        return (0, E.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var Bt = Nt({
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
      const Ht = (0, F.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? Oe.DX : "p",
          i = (0, X.mergeProps)({
            className: Bt({
              size: n,
              appearance: r
            })
          }, o);
        return (0, E.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var zt = Nt({
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
      const Vt = {
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
        Ft = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? Oe.DX : Vt[r] || "span",
            s = (0, X.mergeProps)(n, {
              className: zt({
                semantic: r
              })
            });
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var Gt = r(31142);
      let Ut = "undefined" != typeof document ? F.useLayoutEffect : F.useEffect,
        qt = e => e && !Array.isArray(e) && "object" == typeof e,
        Xt = [],
        Kt = {},
        Wt = Gt.default;
      const Zt = (e, t = Xt) => {
        let r = Kt;
        qt(e) ? (r = e, e = null, t = "dependencies" in r ? r.dependencies : Xt) : qt(t) && (r = t, t = "dependencies" in r ? r.dependencies : Xt), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
        const {
          scope: n,
          revertOnUpdate: o
        } = r, a = (0, F.useRef)(!1), s = (0, F.useRef)(Wt.context(() => {}, n)), i = (0, F.useRef)(e => s.current.add(null, e)), l = t && t.length && !o;
        return l && Ut(() => (a.current = !0, () => s.current.revert()), Xt), Ut(() => {
          if (e && s.current.add(e, n), !l || !a.current) return () => s.current.revert()
        }, t), {
          context: s.current,
          contextSafe: i.current
        }
      };
      Zt.register = e => {
        Wt = e
      }, Zt.headless = !0;
      const $t = {
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

      function Yt(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * r) : e * t * r / (t + r * e)
      }

      function Qt(e, t, r, n = .15) {
        return 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Yt(t - e, r - t, n) + t : e > r ? +Yt(e - r, r - t, n) + r : e
      }

      function Jt(e, t, r) {
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

      function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? er(Object(r), !0).forEach(function(t) {
            Jt(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }
      const rr = {
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

      function nr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const or = ["enter", "leave"];
      const ar = ["gotpointercapture", "lostpointercapture"];

      function sr(e) {
        let t = e.substring(2).toLowerCase();
        const r = !!~t.indexOf("passive");
        r && (t = t.replace("passive", ""));
        const n = ar.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(n);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: r
        }
      }

      function ir(e) {
        return "touches" in e
      }

      function lr(e) {
        return ir(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function cr(e) {
        return ir(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function ur(e, t) {
        try {
          const r = t.clientX - e.clientX,
            n = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            a = (t.clientY + e.clientY) / 2,
            s = Math.hypot(r, n);
          return {
            angle: -180 * Math.atan2(r, n) / Math.PI,
            distance: s,
            origin: [o, a]
          }
        } catch (e) {}
        return null
      }

      function dr(e, t) {
        const [r, n] = Array.from(e.touches).filter(e => t.includes(e.identifier));
        return ur(r, n)
      }

      function fr(e) {
        const t = cr(e);
        return ir(e) ? t.identifier : t.pointerId
      }

      function hr(e) {
        const t = cr(e);
        return [t.clientX, t.clientY]
      }

      function pr(e) {
        let {
          deltaX: t,
          deltaY: r,
          deltaMode: n
        } = e;
        return 1 === n ? (t *= 40, r *= 40) : 2 === n && (t *= 800, r *= 800), [t, r]
      }

      function mr(e, ...t) {
        return "function" == typeof e ? e(...t) : e
      }

      function vr() {}

      function yr(...e) {
        return 0 === e.length ? vr : 1 === e.length ? e[0] : function() {
          let t;
          for (const r of e) t = r.apply(this, arguments) || t;
          return t
        }
      }

      function gr(e, t) {
        return Object.assign({}, t, e || {})
      }
      class br {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = r.from ? mr(r.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
                  ctrlKey: a
                } = e;
                Object.assign(t, {
                  shiftKey: r,
                  altKey: n,
                  metaKey: o,
                  ctrlKey: a
                })
              }
              return t
            }(e)), n.down = n.pressed = n.buttons % 2 == 1 || n.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            $t.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [a, s] = t._movement, [i, l] = r.threshold, {
            _step: c,
            values: u
          } = t;
          if (r.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(a) >= i && u[0]), !1 === c[1] && (c[1] = Math.abs(s) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(a) >= i && Math.sign(a) * i), !1 === c[1] && (c[1] = Math.abs(s) >= l && Math.sign(s) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (r.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? a - c[0] : 0, d[1] = !1 !== c[1] ? s - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = n[this.ingKey] = t._active, e && (t.first && ("bounds" in r && (t._bounds = mr(r.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, y],
            [g, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > y ? 1 : 0, m < g ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const _ = t._active && r.rubberband || [0, 0];
          if (t.offset = function(e, [t, r], [n, o]) {
              const [
                [a, s],
                [i, l]
              ] = e;
              return [Qt(t, a, s, n), Qt(r, i, l, o)]
            }(t._bounds, t.offset, _), t.delta = $t.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = $t.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            $t.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            r = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !r.triggerAllEvents) return;
          const n = this.handler(tr(tr(tr({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== n && (e.memo = n)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class _r extends br {
        constructor(...e) {
          super(...e), Jt(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = $t.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = $t.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            r = this.config;
          if (!t.axis && e) {
            const n = "object" == typeof r.axisThreshold ? r.axisThreshold[lr(e)] : r.axisThreshold;
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
      const wr = e => e,
        xr = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, r) => tr(tr({}, r.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return $t.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? $t.toVector(e) : void 0,
          transform(e, t, r) {
            const n = e || r.shared.transform;
            return this.hasCustomTransform = !!n, n || wr
          },
          threshold: e => $t.toVector(e, 0)
        },
        Pr = tr(tr({}, xr), {}, {
          axis(e, t, {
            axis: r
          }) {
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold: (e = 0) => e,
          bounds(e = {}) {
            if ("function" == typeof e) return t => Pr.bounds(e(t));
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
        Cr = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t]
        },
        Er = "undefined" != typeof window && window.document && window.document.createElement;

      function Sr() {
        return Er && "ontouchstart" in window
      }
      const Or = {
          isBrowser: Er,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Sr(),
          touchscreen: Sr() || Er && window.navigator.maxTouchPoints > 1,
          pointer: Er && "onpointerdown" in window,
          pointerLock: Er && "exitPointerLock" in window.document
        },
        Tr = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        jr = tr(tr({}, Pr), {}, {
          device(e, t, {
            pointer: {
              touch: r = !1,
              lock: n = !1,
              mouse: o = !1
            } = {}
          }) {
            return this.pointerLock = n && Or.pointerLock, Or.touch && r ? "touch" : this.pointerLock ? "mouse" : Or.pointer && !o ? "pointer" : Or.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, {
            preventScroll: r
          }) {
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Or.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = $t.toVector(e, r ? n : o ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = n, a
          },
          swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: r = 250
          } = {}) {
            return {
              velocity: this.transform($t.toVector(e)),
              distance: this.transform($t.toVector(t)),
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
          axisThreshold: e => e ? tr(tr({}, Tr), e) : Tr,
          keyboardDisplacement: (e = 10) => e
        });

      function Nr(e) {
        const [t, r] = e.overflow, [n, o] = e._delta, [a, s] = e._direction;
        (t < 0 && n > 0 && a < 0 || t > 0 && n < 0 && a > 0) && (e._movement[0] = e._movementBound[0]), (r < 0 && o > 0 && s < 0 || r > 0 && o < 0 && s > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Rr = tr(tr({}, xr), {}, {
          device(e, t, {
            shared: r,
            pointer: {
              touch: n = !1
            } = {}
          }) {
            if (r.target && !Or.touch && Or.gesture) return "gesture";
            if (Or.touch && n) return "touch";
            if (Or.touchscreen) {
              if (Or.pointer) return "pointer";
              if (Or.touch) return "touch"
            }
          },
          bounds(e, t, {
            scaleBounds: r = {},
            angleBounds: n = {}
          }) {
            const o = e => {
                const t = gr(mr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = gr(mr(n, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof n ? [o(), a()] : e => [o(e), a(e)]
          },
          threshold(e, t, r) {
            return this.lockDirection = "lock" === r.axis, $t.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel: (e = !0) => e
        }),
        Ir = tr(tr({}, Pr), {}, {
          mouseOnly: (e = !0) => e
        }),
        kr = Pr,
        Dr = Pr,
        Lr = tr(tr({}, Pr), {}, {
          mouseOnly: (e = !0) => e
        }),
        Ar = new Map,
        Mr = new Map;

      function Br(e) {
        Ar.set(e.key, e.engine), Mr.set(e.key, e.resolver)
      }
      const Hr = {
          key: "drag",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "dragging")
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
                e._bounds = Pr.bounds(n)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), n && n.size > 1 && r._pointerActive || (this.start(e), this.setupPointer(e), r._pointerId = fr(e), r._pointerActive = !0, this.computeValues(hr(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== lr(e) ? (r._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                r = this.config;
              if (!t._pointerActive) return;
              const n = fr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              const o = hr(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = $t.sub(o, t._values), this.computeValues(o)), $t.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : r.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === r.preventScrollAxis || "xy" === r.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                r = this.config;
              if (!t._active || !t._pointerActive) return;
              const n = fr(e);
              if (void 0 !== t._pointerId && n !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, a] = t._distance;
              if (t.tap = o <= r.tapsThreshold && a <= r.tapsThreshold, t.tap && r.filterTaps) t._force = !0;
              else {
                const [e, n] = t._delta, [o, a] = t._movement, [s, i] = r.swipe.velocity, [l, c] = r.swipe.distance, u = r.swipe.duration;
                if (t.elapsedTime < u) {
                  const r = Math.abs(e / t.timeDelta),
                    u = Math.abs(n / t.timeDelta);
                  r > s && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > i && Math.abs(a) > c && (t.swipe[1] = Math.sign(n))
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
              const t = Cr[e.key];
              if (t) {
                const r = this.state,
                  n = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), r._delta = t(this.config.keyboardDisplacement, n), r._keyboardActive = !0, $t.addTo(r._movement, r._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in Cr && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: jr
        },
        zr = {
          key: "hover",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(hr(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const r = hr(e);
              t._movement = t._delta = $t.sub(r, t._values), this.computeValues(r), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Lr
        },
        Vr = {
          key: "move",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(hr(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = hr(e),
                r = this.state;
              r._delta = $t.sub(t, r._values), $t.addTo(r._movement, r._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Ir
        },
        Fr = {
          key: "pinch",
          engine: class extends br {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "pinching"), Jt(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? $t.add(t, r) : [(1 + t[0]) * r[0], t[1] + r[1]]
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
              const n = dr(e, t._touchIds);
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
              const o = ur(...Array.from(r.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = dr(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const r = ur(...Array.from(t.values()));
              r && this.pinchMove(e, r)
            }
            pinchMove(e, t) {
              const r = this.state,
                n = r._values[1],
                o = t.angle - n;
              let a = 0;
              Math.abs(o) > 270 && (a += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * a]), r.origin = t.origin, r.turns = a, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(e), this.emit()
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
              t._movement = [e.scale - 1, e.rotation], t._delta = $t.sub(t._movement, r), this.compute(e), this.emit()
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
              t._delta = [-pr(e)[1] / 100 * t.offset[0], 0], $t.addTo(t._movement, t._delta), Nr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Rr
        },
        Gr = {
          key: "scroll",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "scrolling")
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
                    scrollLeft: a,
                    scrollTop: s
                  } = e.currentTarget;
                  return [null !== (t = null != n ? n : a) && void 0 !== t ? t : 0, null !== (r = null != o ? o : s) && void 0 !== r ? r : 0]
                }(e);
              t._delta = $t.sub(r, t._values), $t.addTo(t._movement, t._delta), this.computeValues(r), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: kr
        },
        Ur = {
          key: "wheel",
          engine: class extends _r {
            constructor(...e) {
              super(...e), Jt(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = pr(e), $t.addTo(t._movement, t._delta), Nr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Dr
        };
      const qr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled: (e = !0) => e,
          window: (e = (Or.isBrowser ? window : void 0)) => e,
          eventOptions: ({
            passive: e = !0,
            capture: t = !1
          } = {}) => ({
            passive: e,
            capture: t
          }),
          transform: e => e
        },
        Xr = ["target", "eventOptions", "window", "enabled", "transform"];

      function Kr(e = {}, t) {
        const r = {};
        for (const [n, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            r[n] = o.call(r, e[n], n, e);
            break;
          case "object":
            r[n] = Kr(e[n], o);
            break;
          case "boolean":
            o && (r[n] = e[n])
        }
        return r
      }
      class Wr {
        constructor(e, t) {
          Jt(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, r, n, o) {
          const a = this._listeners,
            s = function(e, t = "") {
              const r = rr[e];
              return e + (r && r[t] || t)
            }(t, r),
            i = tr(tr({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(s, n, i);
          const l = () => {
            e.removeEventListener(s, n, i), a.delete(l)
          };
          return a.add(l), l
        }
        clean() {
          this._listeners.forEach(e => e()), this._listeners.clear()
        }
      }
      class Zr {
        constructor() {
          Jt(this, "_timeouts", new Map)
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
      class $r {
        constructor(e) {
          var t, r;
          Jt(this, "gestures", new Set), Jt(this, "_targetEventStore", new Wr(this)), Jt(this, "gestureEventStores", {}), Jt(this, "gestureTimeoutStores", {}), Jt(this, "handlers", {}), Jt(this, "config", {}), Jt(this, "pointerIds", new Set), Jt(this, "touchIds", new Set), Jt(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (r = e).drag && Yr(t, "drag"), r.wheel && Yr(t, "wheel"), r.scroll && Yr(t, "scroll"), r.move && Yr(t, "move"), r.pinch && Yr(t, "pinch"), r.hover && Yr(t, "hover")
        }
        setEventIds(e) {
          return ir(e) ? (this.touchIds = new Set(function(e) {
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
                eventOptions: a,
                window: s,
                enabled: i,
                transform: l
              } = n,
              c = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = {},
                    a = Object.keys(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
              }(n, Xr);
            if (r.shared = Kr({
                target: o,
                eventOptions: a,
                window: s,
                enabled: i,
                transform: l
              }, qr), t) {
              const e = Mr.get(t);
              r[t] = Kr(tr({
                shared: r.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Mr.get(e);
                t && (r[e] = Kr(tr({
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
                  a = Qr(r, o.eventOptions, !!n);
                o.enabled && new(Ar.get(t))(this, e, t).bind(a)
              }
              const o = Qr(r, t.eventOptions, !!n);
              for (const t in this.nativeHandlers) o(t, "", r => this.nativeHandlers[t](tr(tr({}, this.state.shared), {}, {
                event: r,
                args: e
              })), void 0, !0)
            }
            for (const e in r) r[e] = yr(...r[e]);
            if (!n) return r;
            for (const e in r) {
              const {
                device: t,
                capture: o,
                passive: a
              } = sr(e);
              this._targetEventStore.add(n, t, "", r[e], {
                capture: o,
                passive: a
              })
            }
          }
        }
      }

      function Yr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Wr(e, t), e.gestureTimeoutStores[t] = new Zr
      }
      const Qr = (e, t, r) => (n, o, a, s = {}, i = !1) => {
          var l, c;
          const u = null !== (l = s.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = s.passive) && void 0 !== c ? c : t.passive;
          let f = i ? n : function(e, t = "", r = !1) {
            const n = rr[e],
              o = n && n[t] || t;
            return "on" + nr(e) + nr(o) + (function(e = !1, t) {
              return e && !or.includes(t)
            }(r, o) ? "Capture" : "")
          }(n, o, u);
          r && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(a)
        },
        Jr = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function en(e, t, r, n, o, a) {
        if (!e.has(r)) return;
        if (!Ar.has(n)) return;
        const s = r + "Start",
          i = r + "End";
        o[n] = e => {
          let n;
          return e.first && s in t && t[s](e), r in t && (n = t[r](e)), e.last && i in t && t[i](e), n
        }, a[n] = a[n] || {}
      }

      function tn(e, t = {}, r, n) {
        const o = F.useMemo(() => new $r(e), []);
        if (o.applyHandlers(e, n), o.applyConfig(t, r), F.useEffect(o.effect.bind(o)), F.useEffect(() => o.clean.bind(o), []), void 0 === t.target) return o.bind.bind(o)
      }

      function rn(e, t) {
        const r = ([Hr, Fr, Gr, Ur, Vr, zr].forEach(Br), function(e, t) {
          const {
            handlers: r,
            nativeHandlers: n,
            config: o
          } = function(e, t) {
            const [r, n, o] = function(e) {
              const t = {},
                r = {},
                n = new Set;
              for (let o in e) Jr.test(o) ? (n.add(RegExp.lastMatch), r[o] = e[o]) : t[o] = e[o];
              return [r, t, n]
            }(e), a = {};
            return en(o, r, "onDrag", "drag", a, t), en(o, r, "onWheel", "wheel", a, t), en(o, r, "onScroll", "scroll", a, t), en(o, r, "onPinch", "pinch", a, t), en(o, r, "onMove", "move", a, t), en(o, r, "onHover", "hover", a, t), {
              handlers: a,
              config: t,
              nativeHandlers: n
            }
          }(e, t || {});
          return tn(r, o, void 0, n)
        });
        return r(e, t || {})
      }
      const nn = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), on = ([e, t]) => ({
        x: e,
        y: t
      }), an = (e, t) => (e.x = t.x, e.y = t.y, e), sn = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, ln = (e, t, r) => Math.min(Math.max(e, t), r);

      function cn() {
        return cn = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, cn.apply(null, arguments)
      }
      var un = ["shift", "alt", "meta", "mod", "ctrl"],
        dn = {
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

      function fn(e) {
        return (e && dn[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function hn(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function pn(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map(function(e) {
          return fn(e)
        });
        return cn({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter(function(e) {
            return !un.includes(e)
          }),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", function(e) {
        void 0 !== e.key && yn([fn(e.key), fn(e.code)])
      }), document.addEventListener("keyup", function(e) {
        void 0 !== e.key && gn([fn(e.key), fn(e.code)])
      })), "undefined" != typeof window && window.addEventListener("blur", function() {
        mn.clear()
      });
      var mn = new Set;

      function vn(e) {
        return Array.isArray(e)
      }

      function yn(e) {
        var t = Array.isArray(e) ? e : [e];
        mn.has("meta") && mn.forEach(function(e) {
          return ! function(e) {
            return un.includes(e)
          }(e) && mn.delete(e.toLowerCase())
        }), t.forEach(function(e) {
          return mn.add(e.toLowerCase())
        })
      }

      function gn(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? mn.clear() : t.forEach(function(e) {
          return mn.delete(e.toLowerCase())
        })
      }

      function bn(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          a = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, vn(t) ? Boolean(n && t && t.some(function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        })) : Boolean(n && t && t)
      }
      var _n = (0, F.createContext)(void 0);

      function wn(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, E.jsx)(_n.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function xn(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(r, n) {
          return r && xn(e[n], t[n])
        }, !0) : e === t
      }
      var Pn = (0, F.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Cn = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, F.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            a = o[0],
            s = o[1],
            i = (0, F.useState)([]),
            l = i[0],
            c = i[1],
            u = (0, F.useCallback)(function(e) {
              s(function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            d = (0, F.useCallback)(function(e) {
              s(function(t) {
                return 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                })
              })
            }, []),
            f = (0, F.useCallback)(function(e) {
              s(function(t) {
                return t.includes(e) ? 0 === t.filter(function(t) {
                  return t !== e
                }).length ? ["*"] : t.filter(function(t) {
                  return t !== e
                }) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              })
            }, []),
            h = (0, F.useCallback)(function(e) {
              c(function(t) {
                return [].concat(t, [e])
              })
            }, []),
            p = (0, F.useCallback)(function(e) {
              c(function(t) {
                return t.filter(function(t) {
                  return !xn(t, e)
                })
              })
            }, []);
          return (0, E.jsx)(Pn.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: l,
              enableScope: u,
              disableScope: d,
              toggleScope: f
            },
            children: (0, E.jsx)(wn, {
              addHotkey: h,
              removeHotkey: p,
              children: n
            })
          })
        },
        En = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Sn = "undefined" != typeof window ? F.useLayoutEffect : F.useEffect;

      function On(e, t, r, n) {
        var o = (0, F.useState)(null),
          a = o[0],
          s = o[1],
          i = (0, F.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          c = vn(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, F.useCallback)(t, null != u ? u : []),
          f = (0, F.useRef)(d);
        f.current = u ? d : t;
        var h = function(e) {
            var t = (0, F.useRef)(void 0);
            return xn(t.current, e) || (t.current = e), t.current
          }(l),
          p = (0, F.useContext)(Pn).enabledScopes,
          m = (0, F.useContext)(_n);
        return Sn(function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = p, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some(function(e) {
              return t.includes(e)
            }) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !bn(e, ["input", "textarea", "select"]) || bn(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== a) {
                    var n = a.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== a && !a.contains(n.activeElement)) return void En(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != h && h.enableOnContentEditable) && hn(c, null == h ? void 0 : h.splitKey).forEach(function(r) {
                    var n, o = pn(r, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          s = t.meta,
                          i = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          y = fn(f),
                          g = d.toLowerCase();
                        if (!(null != u && u.includes(y) || null != u && u.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (a === !v && "alt" !== g) return !1;
                          if (l === !m && "shift" !== g) return !1;
                          if (i) {
                            if (!p && !h) return !1
                          } else {
                            if (s === !p && "meta" !== g && "os" !== g) return !1;
                            if (c === !h && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(g) && !u.includes(y)) || (u ? (void 0 === o && (o = ","), (vn(n = u) ? n : n.split(o)).every(function(e) {
                          return mn.has(e.trim().toLowerCase())
                        })) : !u)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == h ? void 0 : h.enabled)) return void En(e);
                      f.current(e, o), t || (i.current = !0)
                    }
                  })
                }
              },
              n = function(e) {
                void 0 !== e.key && (yn(fn(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (gn(fn(e.code)), i.current = !1, null != h && h.keyup && r(e, !0))
              },
              s = a || (null == l ? void 0 : l.document) || document;
            return s.addEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.addEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && hn(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                return m.addHotkey(pn(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              }),
              function() {
                s.removeEventListener("keyup", o, null == l ? void 0 : l.eventListenerOptions), s.removeEventListener("keydown", n, null == l ? void 0 : l.eventListenerOptions), m && hn(c, null == h ? void 0 : h.splitKey).forEach(function(e) {
                  return m.removeHotkey(pn(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                })
              }
          }
        }, [a, c, h, p]), s
      }

      function Tn(e) {
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

      function jn(e, t) {
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
          t % 2 ? jn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Rn(e, t) {
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
        kn = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nn(Nn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) In(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rn(e.variantClassNames, e => Rn(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Dn = kn({
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
        Ln = kn({
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
      Gt.gsap.registerPlugin(Zt);
      const An = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Mn = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Bn = K("var(--foundry_1a74xwb0)");
      var Hn, zn, Vn, Fn = r(78322),
        Gn = r(30762);

      function Un(e) {
        return e.type === zn.literal
      }

      function qn(e) {
        return e.type === zn.argument
      }

      function Xn(e) {
        return e.type === zn.number
      }

      function Kn(e) {
        return e.type === zn.date
      }

      function Wn(e) {
        return e.type === zn.time
      }

      function Zn(e) {
        return e.type === zn.select
      }

      function $n(e) {
        return e.type === zn.plural
      }

      function Yn(e) {
        return e.type === zn.pound
      }

      function Qn(e) {
        return e.type === zn.tag
      }

      function Jn(e) {
        return !(!e || "object" != typeof e || e.type !== Vn.number)
      }

      function eo(e) {
        return !(!e || "object" != typeof e || e.type !== Vn.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Hn || (Hn = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(zn || (zn = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Vn || (Vn = {}));
      var to = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        ro = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function no(e) {
        var t = {};
        return e.replace(ro, function(e) {
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
      var oo = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function ao(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var so = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        io = /^(@+)?(\+|#+)?[rs]?$/g,
        lo = /(\*)(0+)|(#+)(0+)|(0+)/g,
        co = /^(0+)$/;

      function uo(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(io, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function fo(e) {
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

      function ho(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !co.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function po(e) {
        return fo(e) || {}
      }

      function mo(e) {
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
              t.style = "unit", t.unit = ao(o.options[0]);
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
              t = (0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, Fn.__assign)((0, Fn.__assign)({}, e), po(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, Fn.__assign)((0, Fn.__assign)({}, e), po(t))
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
              o.options[0].replace(lo, function(e, r, n, o, a, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && a) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (co.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (so.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(so, function(e, r, n, o, a, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : a && s ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var a = o.options[0];
            "w" === a ? t = (0, Fn.__assign)((0, Fn.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = (0, Fn.__assign)((0, Fn.__assign)({}, t), uo(a)))
          } else if (io.test(o.stem)) t = (0, Fn.__assign)((0, Fn.__assign)({}, t), uo(o.stem));
          else {
            var s = fo(o.stem);
            s && (t = (0, Fn.__assign)((0, Fn.__assign)({}, t), s));
            var i = ho(o.stem);
            i && (t = (0, Fn.__assign)((0, Fn.__assign)({}, t), i))
          }
        }
        return t
      }
      var vo, yo = {
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

      function go(e) {
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
        return "root" !== n && (r = e.maximize().region), (yo[r || ""] || yo[n || ""] || yo["".concat(n, "-001")] || yo["001"])[0]
      }
      var bo = new RegExp("^".concat(to.source, "*")),
        _o = new RegExp("".concat(to.source, "*$"));

      function wo(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var xo = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Po = !!String.fromCodePoint,
        Co = !!Object.fromEntries,
        Eo = !!String.prototype.codePointAt,
        So = !!String.prototype.trimStart,
        Oo = !!String.prototype.trimEnd,
        To = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        jo = !0;
      try {
        jo = "a" === (null === (vo = Mo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === vo ? void 0 : vo[0])
      } catch (e) {
        jo = !1
      }
      var No, Ro = xo ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Io = Po ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        ko = Co ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              s = o[1];
            t[a] = s
          }
          return t
        },
        Do = Eo ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Lo = So ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(bo, "")
        },
        Ao = Oo ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(_o, "")
        };

      function Mo(e, t) {
        return new RegExp(e, t)
      }
      if (jo) {
        var Bo = Mo("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        No = function(e, t) {
          var r;
          return Bo.lastIndex = t, null !== (r = Bo.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else No = function(e, t) {
        for (var r = [];;) {
          var n = Do(e, t);
          if (void 0 === n || Go(n) || Uo(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Io.apply(void 0, r)
      };
      var Ho, zo = function() {
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
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Hn.UNMATCHED_CLOSING_TAG, wo(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Vo(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), n.push({
                  type: zn.pound,
                  location: wo(s, this.clonePosition())
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
              type: zn.literal,
              value: "<".concat(n, "/>"),
              location: wo(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Vo(this.char())) return this.error(Hn.INVALID_TAG, wo(s, this.clonePosition()));
              var i = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Hn.UNMATCHED_CLOSING_TAG, wo(i, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: zn.tag,
                  value: n,
                  children: a,
                  location: wo(r, this.clonePosition())
                },
                err: null
              } : this.error(Hn.INVALID_TAG, wo(s, this.clonePosition())))
            }
            return this.error(Hn.UNCLOSED_TAG, wo(r, this.clonePosition()))
          }
          return this.error(Hn.INVALID_TAG, wo(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && Fo(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var i = wo(r, this.clonePosition());
          return {
            val: {
              type: zn.literal,
              value: n,
              location: i
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Vo(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Io.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Io(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Hn.EXPECT_ARGUMENT_CLOSING_BRACE, wo(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Hn.EMPTY_ARGUMENT, wo(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Hn.MALFORMED_ARGUMENT, wo(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Hn.EXPECT_ARGUMENT_CLOSING_BRACE, wo(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: zn.argument,
                  value: n,
                  location: wo(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Hn.EXPECT_ARGUMENT_CLOSING_BRACE, wo(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Hn.MALFORMED_ARGUMENT, wo(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = No(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: wo(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            i = this.clonePosition();
          switch (s) {
            case "":
              return this.error(Hn.EXPECT_ARGUMENT_TYPE, wo(a, i));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = Ao(y.val)).length) return this.error(Hn.EXPECT_ARGUMENT_STYLE, wo(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: wo(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = wo(n, this.clonePosition());
              if (l && Ro(null == l ? void 0 : l.style, "::", 0)) {
                var d = Lo(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: zn.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Hn.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var s = 1 + (1 & a),
                        i = a < 2 ? 1 : 3 + (a >> 1),
                        l = go(t);
                      for ("H" != l && "k" != l || (i = 0); i-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: Vn.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? no(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? zn.date : zn.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? zn.number : "date" === s ? zn.date : zn.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Hn.EXPECT_SELECT_ARGUMENT_OPTIONS, wo(p, (0, Fn.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Hn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, wo(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Hn.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Hn.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = wo(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: zn.select,
                  value: r,
                  options: ko(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: zn.plural,
                  value: r,
                  options: ko(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(Hn.INVALID_ARGUMENT_TYPE, wo(a, i))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Hn.EXPECT_ARGUMENT_CLOSING_BRACE, wo(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Hn.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, wo(r, this.clonePosition()));
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
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(oo).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var a = o[0], s = o.slice(1), i = 0, l = s; i < l.length; i++)
                  if (0 === l[i].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: a,
                  options: s
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Hn.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Vn.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? mo(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, s = [], i = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Hn.EXPECT_PLURAL_ARGUMENT_SELECTOR, Hn.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = wo(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (i.has(l)) return this.error("select" === t ? Hn.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Hn.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Hn.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Hn.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, wo(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: wo(f, this.clonePosition())
            }]), i.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? Hn.EXPECT_SELECT_ARGUMENT_SELECTOR : Hn.EXPECT_PLURAL_ARGUMENT_SELECTOR, wo(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(Hn.MISSING_OTHER_CLAUSE, wo(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, a = 10 * a + (s - 48), this.bump()
          }
          var i = wo(n, this.clonePosition());
          return o ? To(a *= r) ? {
            val: a,
            err: null
          } : this.error(t, i) : this.error(e, i)
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
          var t = Do(this.message, e);
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
          if (Ro(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Go(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function Vo(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Fo(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function Go(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Uo(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function qo(e) {
        e.forEach(function(e) {
          if (delete e.location, Zn(e) || $n(e))
            for (var t in e.options) delete e.options[t].location, qo(e.options[t].value);
          else Xn(e) && Jn(e.style) || (Kn(e) || Wn(e)) && eo(e.style) ? delete e.style.location : Qn(e) && qo(e.children)
        })
      }

      function Xo(e, t) {
        void 0 === t && (t = {}), t = (0, Fn.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new zo(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Hn[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || qo(r.val), r.val
      }! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(Ho || (Ho = {}));
      var Ko, Wo = function(e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return o.code = r, o.originalMessage = n, o
          }
          return (0, Fn.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Zo = function(e) {
          function t(t, r, n, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), Ho.INVALID_VALUE, o) || this
          }
          return (0, Fn.__extends)(t, e), t
        }(Wo),
        $o = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), Ho.INVALID_VALUE, n) || this
          }
          return (0, Fn.__extends)(t, e), t
        }(Wo),
        Yo = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), Ho.MISSING_VALUE, r) || this
          }
          return (0, Fn.__extends)(t, e), t
        }(Wo);

      function Qo(e) {
        return "function" == typeof e
      }

      function Jo(e, t, r, n, o, a, s) {
        if (1 === e.length && Un(e[0])) return [{
          type: Ko.literal,
          value: e[0].value
        }];
        for (var i = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (Un(u)) i.push({
            type: Ko.literal,
            value: u.value
          });
          else if (Yn(u)) "number" == typeof a && i.push({
            type: Ko.literal,
            value: r.getNumberFormat(t).format(a)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new Yo(d, s);
            var f = o[d];
            if (qn(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), i.push({
              type: "string" == typeof f ? Ko.literal : Ko.object,
              value: f
            });
            else if (Kn(u)) {
              var h = "string" == typeof u.style ? n.date[u.style] : eo(u.style) ? u.style.parsedOptions : void 0;
              i.push({
                type: Ko.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Wn(u)) h = "string" == typeof u.style ? n.time[u.style] : eo(u.style) ? u.style.parsedOptions : n.time.medium, i.push({
              type: Ko.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Xn(u))(h = "string" == typeof u.style ? n.number[u.style] : Jn(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), i.push({
              type: Ko.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Qn(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!Qo(v)) throw new $o(m, "function", s);
                var y = v(Jo(p, t, r, n, o, a).map(function(e) {
                  return e.value
                }));
                Array.isArray(y) || (y = [y]), i.push.apply(i, y.map(function(e) {
                  return {
                    type: "string" == typeof e ? Ko.literal : Ko.object,
                    value: e
                  }
                }))
              }
              if (Zn(u)) {
                if (!(g = u.options[f] || u.options.other)) throw new Zo(u.value, f, Object.keys(u.options), s);
                i.push.apply(i, Jo(g.value, t, r, n, o))
              } else if ($n(u)) {
                var g;
                if (!(g = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Wo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Ho.MISSING_INTL_API, s);
                  var b = r.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  g = u.options[b] || u.options.other
                }
                if (!g) throw new Zo(u.value, f, Object.keys(u.options), s);
                i.push.apply(i, Jo(g.value, t, r, n, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (_ = i).length < 2 ? _ : _.reduce(function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === Ko.literal && t.type === Ko.literal ? r.value += t.value : e.push(t), e
        }, []);
        var _
      }

      function ea(e) {
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
      }(Ko || (Ko = {}));
      var ta, ra = function() {
        function e(t, r, n, o) {
          void 0 === r && (r = e.defaultLocale);
          var a, s = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = s.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function(e, t) {
                return e.length && t.type === Ko.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }, []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Jo(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
              }
            }, this.getAst = function() {
              return s.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var i = o || {},
              l = (i.formatters, (0, Fn.__rest)(i, ["formatters"]));
            this.ast = e.__parse(t, (0, Fn.__assign)((0, Fn.__assign)({}, l), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = function(e, t) {
            return t ? Object.keys(e).reduce(function(r, n) {
              return r[n] = function(e, t) {
                return t ? (0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
                  return r[n] = (0, Fn.__assign)((0, Fn.__assign)({}, e[n]), t[n] || {}), r
                }, {})) : e
              }(e[n], t[n]), r
            }, (0, Fn.__assign)({}, e)) : e
          }(e.formats, n), this.formatters = o && o.formatters || (void 0 === (a = this.formatterCache) && (a = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, Gn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Fn.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ea(a.number),
              strategy: Gn.W.variadic
            }),
            getDateTimeFormat: (0, Gn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Fn.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ea(a.dateTime),
              strategy: Gn.W.variadic
            }),
            getPluralRules: (0, Gn.B)(function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Fn.__spreadArray)([void 0], t, !1)))
            }, {
              cache: ea(a.pluralRules),
              strategy: Gn.W.variadic
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
        }, e.__parse = Xo, e.formats = {
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
      }(ta || (ta = {}));
      var na = function(e) {
          function t(r, n, o) {
            var a = this,
              s = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (a = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(s ? "\n".concat(s.message, "\n").concat(s.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
          }
          return (0, Fn.__extends)(t, e), t
        }(Error),
        oa = function(e) {
          function t(t, r) {
            return e.call(this, ta.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, Fn.__extends)(t, e), t
        }(na),
        aa = function(e) {
          function t(t, r) {
            return e.call(this, ta.INVALID_CONFIG, t, r) || this
          }
          return (0, Fn.__extends)(t, e), t
        }(na),
        sa = function(e) {
          function t(t, r) {
            return e.call(this, ta.MISSING_DATA, t, r) || this
          }
          return (0, Fn.__extends)(t, e), t
        }(na),
        ia = function(e) {
          function t(t, r, n) {
            var o = e.call(this, ta.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return o.locale = r, o
          }
          return (0, Fn.__extends)(t, e), t
        }(na),
        la = function(e) {
          function t(t, r, n, o) {
            var a = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, o) || this;
            return a.descriptor = n, a.locale = r, a
          }
          return (0, Fn.__extends)(t, e), t
        }(ia),
        ca = function(e) {
          function t(t, r) {
            var n = e.call(this, ta.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map(function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            }).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, Fn.__extends)(t, e), t
        }(na);

      function ua(e, t, r) {
        return void 0 === r && (r = {}), t.reduce(function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }, {})
      }
      var da = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function fa(e) {
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

      function ha(e, t, r, n) {
        var o, a = e && e[t];
        if (a && (o = a[r]), o) return o;
        n(new oa("No ".concat(t, " format named: ").concat(r)))
      }

      function pa(e) {
        ! function(e, t, r) {
          if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var ma, va, ya, ga = (0, Fn.__assign)((0, Fn.__assign)({}, da), {
          textComponent: F.Fragment
        }),
        ba = function(e, t) {
          return F.isValidElement(e) ? F.cloneElement(e, {
            key: t
          }) : e
        },
        _a = function(e) {
          var t;
          return null !== (t = F.Children.map(e, ba)) && void 0 !== t ? t : []
        };
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(ma || (ma = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(va || (va = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(ya || (ya = {}));
      var wa = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        xa = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Pa(e) {
        var t = {};
        return e.replace(xa, function(e) {
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
      var Ca = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function Ea(e) {
        return e.replace(/^(.*?)-/, "")
      }
      var Sa = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Oa = /^(@+)?(\+|#+)?[rs]?$/g,
        Ta = /(\*)(0+)|(#+)(0+)|(0+)/g,
        ja = /^(0+)$/;

      function Na(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Oa, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function Ra(e) {
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

      function Ia(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !ja.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function ka(e) {
        return Ra(e) || {}
      }

      function Da(e) {
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
              t.style = "unit", t.unit = Ea(o.options[0]);
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
              t = (0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce(function(e, t) {
                return (0, Fn.__assign)((0, Fn.__assign)({}, e), ka(t))
              }, {}));
              continue;
            case "engineering":
              t = (0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce(function(e, t) {
                return (0, Fn.__assign)((0, Fn.__assign)({}, e), ka(t))
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
              o.options[0].replace(Ta, function(e, r, n, o, a, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (o && a) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (ja.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Sa.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Sa, function(e, r, n, o, a, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : a && s ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            var a = o.options[0];
            "w" === a ? t = (0, Fn.__assign)((0, Fn.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : a && (t = (0, Fn.__assign)((0, Fn.__assign)({}, t), Na(a)))
          } else if (Oa.test(o.stem)) t = (0, Fn.__assign)((0, Fn.__assign)({}, t), Na(o.stem));
          else {
            var s = Ra(o.stem);
            s && (t = (0, Fn.__assign)((0, Fn.__assign)({}, t), s));
            var i = Ia(o.stem);
            i && (t = (0, Fn.__assign)((0, Fn.__assign)({}, t), i))
          }
        }
        return t
      }
      var La, Aa = {
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

      function Ma(e) {
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
        return "root" !== n && (r = e.maximize().region), (Aa[r || ""] || Aa[n || ""] || Aa["".concat(n, "-001")] || Aa["001"])[0]
      }
      var Ba = new RegExp("^".concat(wa.source, "*")),
        Ha = new RegExp("".concat(wa.source, "*$"));

      function za(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Va = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Fa = !!String.fromCodePoint,
        Ga = !!Object.fromEntries,
        Ua = !!String.prototype.codePointAt,
        qa = !!String.prototype.trimStart,
        Xa = !!String.prototype.trimEnd,
        Ka = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Wa = !0;
      try {
        Wa = "a" === (null === (La = rs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === La ? void 0 : La[0])
      } catch (e) {
        Wa = !1
      }
      var Za, $a = Va ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        Ya = Fa ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", o = e.length, a = 0; o > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Qa = Ga ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var o = n[r],
              a = o[0],
              s = o[1];
            t[a] = s
          }
          return t
        },
        Ja = Ua ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536
          }
        },
        es = qa ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Ba, "")
        },
        ts = Xa ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Ha, "")
        };

      function rs(e, t) {
        return new RegExp(e, t)
      }
      if (Wa) {
        var ns = rs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Za = function(e, t) {
          var r;
          return ns.lastIndex = t, null !== (r = ns.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Za = function(e, t) {
        for (var r = [];;) {
          var n = Ja(e, t);
          if (void 0 === n || ss(n) || is(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return Ya.apply(void 0, r)
      };

      function os(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function as(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function ss(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function is(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function ls(e, t) {
        return Object.keys(e).reduce(function(r, n) {
          return r[n] = (0, Fn.__assign)({
            timeZone: t
          }, e[n]), r
        }, {})
      }

      function cs(e, t) {
        return Object.keys((0, Fn.__assign)((0, Fn.__assign)({}, e), t)).reduce(function(r, n) {
          return r[n] = (0, Fn.__assign)((0, Fn.__assign)({}, e[n] || {}), t[n] || {}), r
        }, {})
      }

      function us(e, t) {
        if (!t) return e;
        var r = ra.formats;
        return (0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, r), e), {
          date: cs(ls(r.date, t), ls(e.date || {}, t)),
          time: cs(ls(r.time, t), ls(e.time || {}, t))
        })
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
              if ((a = this.parseArgument(e, r)).err) return a;
              n.push(a.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(ma.UNMATCHED_CLOSING_TAG, za(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && os(this.peek() || 0)) {
                  if ((a = this.parseTag(e, t)).err) return a;
                  n.push(a.val)
                } else {
                  var a;
                  if ((a = this.parseLiteral(e, t)).err) return a;
                  n.push(a.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), n.push({
                  type: va.pound,
                  location: za(s, this.clonePosition())
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
              type: va.literal,
              value: "<".concat(n, "/>"),
              location: za(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var a = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !os(this.char())) return this.error(ma.INVALID_TAG, za(s, this.clonePosition()));
              var i = this.clonePosition();
              return n !== this.parseTagName() ? this.error(ma.UNMATCHED_CLOSING_TAG, za(i, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: va.tag,
                  value: n,
                  children: a,
                  location: za(r, this.clonePosition())
                },
                err: null
              } : this.error(ma.INVALID_TAG, za(s, this.clonePosition())))
            }
            return this.error(ma.UNCLOSED_TAG, za(r, this.clonePosition()))
          }
          return this.error(ma.INVALID_TAG, za(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e = this.offset();
          for (this.bump(); !this.isEOF() && as(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var o = this.tryParseQuote(t);
            if (o) n += o;
            else {
              var a = this.tryParseUnquoted(e, t);
              if (a) n += a;
              else {
                var s = this.tryParseLeftAngleBracket();
                if (!s) break;
                n += s
              }
            }
          }
          var i = za(r, this.clonePosition());
          return {
            val: {
              type: va.literal,
              value: n,
              location: i
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (os(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Ya.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), Ya(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(ma.EXPECT_ARGUMENT_CLOSING_BRACE, za(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(ma.EMPTY_ARGUMENT, za(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(ma.MALFORMED_ARGUMENT, za(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(ma.EXPECT_ARGUMENT_CLOSING_BRACE, za(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: va.argument,
                  value: n,
                  location: za(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ma.EXPECT_ARGUMENT_CLOSING_BRACE, za(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(ma.MALFORMED_ARGUMENT, za(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Za(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: za(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var o, a = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            i = this.clonePosition();
          switch (s) {
            case "":
              return this.error(ma.EXPECT_ARGUMENT_TYPE, za(a, i));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (h = ts(y.val)).length) return this.error(ma.EXPECT_ARGUMENT_STYLE, za(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: za(c, this.clonePosition())
                }
              }
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var u = za(n, this.clonePosition());
              if (l && $a(null == l ? void 0 : l.style, "::", 0)) {
                var d = es(l.style.slice(2));
                if ("number" === s) return (y = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? y : {
                  val: {
                    type: va.number,
                    value: r,
                    location: u,
                    style: y.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(ma.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var o = e.charAt(n);
                    if ("j" === o) {
                      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === o;) a++, n++;
                      var s = 1 + (1 & a),
                        i = a < 2 ? 1 : 3 + (a >> 1),
                        l = Ma(t);
                      for ("H" != l && "k" != l || (i = 0); i-- > 0;) r += "a";
                      for (; s-- > 0;) r = l + r
                    } else r += "J" === o ? "H" : o
                  }
                  return r
                }(d, this.locale));
                var h = {
                  type: ya.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Pa(f) : {}
                };
                return {
                  val: {
                    type: "date" === s ? va.date : va.time,
                    value: r,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === s ? va.number : "date" === s ? va.date : va.time,
                  value: r,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(ma.EXPECT_SELECT_ARGUMENT_OPTIONS, za(p, (0, Fn.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== s && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(ma.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, za(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(ma.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ma.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = y.val
              }
              var g, b = this.tryParsePluralOrSelectOptions(e, s, t, m);
              if (b.err) return b;
              if ((g = this.tryParseArgumentClose(n)).err) return g;
              var _ = za(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: va.select,
                  value: r,
                  options: Qa(b.val),
                  location: _
                },
                err: null
              } : {
                val: {
                  type: va.plural,
                  value: r,
                  options: Qa(b.val),
                  offset: v,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: _
                },
                err: null
              };
            default:
              return this.error(ma.INVALID_ARGUMENT_TYPE, za(a, i))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(ma.EXPECT_ARGUMENT_CLOSING_BRACE, za(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(ma.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, za(r, this.clonePosition()));
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
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(Ca).filter(function(e) {
                  return e.length > 0
                }); r < n.length; r++) {
                var o = n[r].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var a = o[0], s = o.slice(1), i = 0, l = s; i < l.length; i++)
                  if (0 === l[i].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: a,
                  options: s
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(ma.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: ya.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Da(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var o, a = !1, s = [], i = new Set, l = n.value, c = n.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(ma.EXPECT_PLURAL_ARGUMENT_SELECTOR, ma.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = za(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (i.has(l)) return this.error("select" === t ? ma.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ma.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (a = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? ma.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ma.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, za(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            s.push([l, {
              value: h.val,
              location: za(f, this.clonePosition())
            }]), i.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === s.length ? this.error("select" === t ? ma.EXPECT_SELECT_ARGUMENT_SELECTOR : ma.EXPECT_PLURAL_ARGUMENT_SELECTOR, za(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(ma.MISSING_OTHER_CLAUSE, za(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var o = !1, a = 0; !this.isEOF();) {
            var s = this.char();
            if (!(s >= 48 && s <= 57)) break;
            o = !0, a = 10 * a + (s - 48), this.bump()
          }
          var i = za(n, this.clonePosition());
          return o ? Ka(a *= r) ? {
            val: a,
            err: null
          } : this.error(t, i) : this.error(e, i)
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
          var t = Ja(this.message, e);
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
          if ($a(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && ss(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }
      }();
      var ds = function(e, t, r, n, o) {
          var a = e.locale,
            s = e.formats,
            i = e.messages,
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
            if (void 0 === r && (r = Error), !e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            y = i && Object.prototype.hasOwnProperty.call(i, v) && i[v];
          if (Array.isArray(y) && 1 === y.length && y[0].type === va.literal) return y[0].value;
          if (!n && y && "string" == typeof y && !h) return y.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, Fn.__assign)((0, Fn.__assign)({}, h), n || {}), s = us(s, f), c = us(c, f), !y) {
            if (!1 === u && "" === y) return y;
            if ((!m || a && a.toLowerCase() !== l.toLowerCase()) && d(new ca(r, a)), m) try {
              return t.getMessageFormat(m, l, c, o).format(n)
            } catch (e) {
              return d(new la('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), a, r, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(y, a, s, (0, Fn.__assign)({
              formatters: t
            }, o || {})).format(n)
          } catch (e) {
            d(new la('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), a, r, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(n)
          } catch (e) {
            d(new la('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), a, r, e))
          }
          return "string" == typeof y ? y : "string" == typeof m ? m : v
        },
        fs = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function hs(e, t, r, n) {
        var o = e.locale,
          a = e.formats,
          s = e.onError,
          i = e.timeZone;
        void 0 === n && (n = {});
        var l = n.format,
          c = (0, Fn.__assign)((0, Fn.__assign)({}, i && {
            timeZone: i
          }), l && ha(a, t, l, s)),
          u = ua(n, fs, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, Fn.__assign)((0, Fn.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), r(o, u)
      }

      function ps(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          s = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hs(e, "date", t, s).format(i)
        } catch (t) {
          e.onError(new ia("Error formatting date.", e.locale, t))
        }
        return String(i)
      }

      function ms(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          s = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hs(e, "time", t, s).format(i)
        } catch (t) {
          e.onError(new ia("Error formatting time.", e.locale, t))
        }
        return String(i)
      }

      function vs(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          s = r[2],
          i = void 0 === s ? {} : s,
          l = "string" == typeof o ? new Date(o || 0) : o,
          c = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return hs(e, "dateTimeRange", t, i).formatRange(l, c)
        } catch (t) {
          e.onError(new ia("Error formatting date time range.", e.locale, t))
        }
        return String(l)
      }

      function ys(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          s = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hs(e, "date", t, s).formatToParts(i)
        } catch (t) {
          e.onError(new ia("Error formatting date.", e.locale, t))
        }
        return []
      }

      function gs(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = r[0],
          a = r[1],
          s = void 0 === a ? {} : a,
          i = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return hs(e, "time", t, s).formatToParts(i)
        } catch (t) {
          e.onError(new ia("Error formatting time.", e.locale, t))
        }
        return []
      }
      var bs = ["style", "type", "fallback", "languageDisplay"];

      function _s(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        Intl.DisplayNames || a(new Wo('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Ho.MISSING_INTL_API));
        var s = ua(n, bs);
        try {
          return t(o, s).of(r)
        } catch (e) {
          a(new ia("Error formatting display name.", o, e))
        }
      }
      var ws = ["type", "style"],
        xs = Date.now();

      function Ps(e, t, r, n) {
        void 0 === n && (n = {});
        var o = Cs(e, t, r, n).reduce(function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Cs(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || a(new Wo('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Ho.MISSING_INTL_API));
        var s = ua(n, ws);
        try {
          var i = {},
            l = Array.from(r).map(function(e, t) {
              if ("object" == typeof e && null !== e) {
                var r = function(e) {
                  return "".concat(xs, "_").concat(e, "_").concat(xs)
                }(t);
                return i[r] = e, r
              }
              return String(e)
            });
          return t(o, s).formatToParts(l).map(function(e) {
            return "literal" === e.type ? e : (0, Fn.__assign)((0, Fn.__assign)({}, e), {
              value: i[e.value] || e.value
            })
          })
        } catch (e) {
          a(new ia("Error formatting list.", o, e))
        }
        return r
      }
      var Es = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Ss(e, t, r) {
        var n = e.locale,
          o = e.formats,
          a = e.onError;
        void 0 === r && (r = {});
        var s = r.format,
          i = s && ha(o, "number", s, a) || {};
        return t(n, ua(r, Es, i))
      }

      function Os(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Ss(e, t, n).format(r)
        } catch (t) {
          e.onError(new ia("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function Ts(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return Ss(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new ia("Error formatting number.", e.locale, t))
        }
        return []
      }
      var js = ["type"];

      function Ns(e, t, r, n) {
        var o = e.locale,
          a = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || a(new Wo('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Ho.MISSING_INTL_API));
        var s = ua(n, js);
        try {
          return t(o, s).select(r)
        } catch (e) {
          a(new ia("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Rs = ["numeric", "style"];

      function Is(e, t, r, n, o) {
        void 0 === o && (o = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Wo('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Ho.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              o = e.formats,
              a = e.onError;
            void 0 === r && (r = {});
            var s = r.format,
              i = !!s && ha(o, "relative", s, a) || {};
            return t(n, ua(r, Rs, i))
          }(e, t, o).format(r, n)
        } catch (t) {
          e.onError(new ia("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }

      function ks(e, t) {
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
              o = (0, Gn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Fn.__spreadArray)([void 0], t, !1)))
              }, {
                cache: fa(e.dateTime),
                strategy: Gn.W.variadic
              }),
              a = (0, Gn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Fn.__spreadArray)([void 0], t, !1)))
              }, {
                cache: fa(e.number),
                strategy: Gn.W.variadic
              }),
              s = (0, Gn.B)(function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Fn.__spreadArray)([void 0], t, !1)))
              }, {
                cache: fa(e.pluralRules),
                strategy: Gn.W.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: a,
              getMessageFormat: (0, Gn.B)(function(e, t, r, n) {
                return new ra(e, t, r, (0, Fn.__assign)({
                  formatters: {
                    getNumberFormat: a,
                    getDateTimeFormat: o,
                    getPluralRules: s
                  }
                }, n || {}))
              }, {
                cache: fa(e.message),
                strategy: Gn.W.variadic
              }),
              getRelativeTimeFormat: (0, Gn.B)(function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, Fn.__spreadArray)([void 0], e, !1)))
              }, {
                cache: fa(e.relativeTime),
                strategy: Gn.W.variadic
              }),
              getPluralRules: s,
              getListFormat: (0, Gn.B)(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Fn.__spreadArray)([void 0], e, !1)))
              }, {
                cache: fa(e.list),
                strategy: Gn.W.variadic
              }),
              getDisplayNames: (0, Gn.B)(function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Fn.__spreadArray)([void 0], e, !1)))
              }, {
                cache: fa(e.displayNames),
                strategy: Gn.W.variadic
              })
            }
          }(t),
          n = (0, Fn.__assign)((0, Fn.__assign)({}, da), e),
          o = n.locale,
          a = n.defaultLocale,
          s = n.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && s ? s(new sa('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && s && s(new sa('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(a, '" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details'))) : (s && s(new aa('"locale" was not configured, using "'.concat(a, '" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(n), (0, Fn.__assign)((0, Fn.__assign)({}, n), {
            formatters: r,
            formatNumber: Os.bind(null, n, r.getNumberFormat),
            formatNumberToParts: Ts.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Is.bind(null, n, r.getRelativeTimeFormat),
            formatDate: ps.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: ys.bind(null, n, r.getDateTimeFormat),
            formatTime: ms.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: vs.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: gs.bind(null, n, r.getDateTimeFormat),
            formatPlural: Ns.bind(null, n, r.getPluralRules),
            formatMessage: ds.bind(null, n, r),
            $t: ds.bind(null, n, r),
            formatList: Ps.bind(null, n, r.getListFormat),
            formatListToParts: Cs.bind(null, n, r.getListFormat),
            formatDisplayName: _s.bind(null, n, r.getDisplayNames)
          })
      }

      function Ds(e) {
        return e ? Object.keys(e).reduce(function(t, r) {
          var n, o = e[r];
          return t[r] = Qo(o) ? (n = o, function(e) {
            return n(_a(e))
          }) : o, t
        }, {}) : e
      }
      var Ls = function(e, t, r, n) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var s = Ds(n),
            i = ds.apply(void 0, (0, Fn.__spreadArray)([e, t, r, s], o, !1));
          return Array.isArray(i) ? _a(i) : i
        },
        As = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, Fn.__rest)(e, ["defaultRichTextElements"]),
            o = Ds(r),
            a = ks((0, Fn.__assign)((0, Fn.__assign)((0, Fn.__assign)({}, ga), n), {
              defaultRichTextElements: o
            }), t),
            s = {
              locale: a.locale,
              timeZone: a.timeZone,
              fallbackOnEmptyString: a.fallbackOnEmptyString,
              formats: a.formats,
              defaultLocale: a.defaultLocale,
              defaultFormats: a.defaultFormats,
              messages: a.messages,
              onError: a.onError,
              defaultRichTextElements: o
            };
          return (0, Fn.__assign)((0, Fn.__assign)({}, a), {
            formatMessage: Ls.bind(null, s, a.formatters),
            $t: Ls.bind(null, s, a.formatters)
          })
        };
      r(35255);
      var Ms = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? F.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = F.createContext(null)),
        Bs = (Ms.Consumer, Ms.Provider),
        Hs = Ms;

      function zs(e) {
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
      var Vs = function(e) {
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
            intl: As(zs(t.props), t.cache),
            prevConfig: zs(t.props)
          }, t
        }
        return (0, Fn.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            o = zs(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              o = r.length;
            if (n.length !== o) return !1;
            for (var a = 0; a < o; a++) {
              var s = r[a];
              if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
            }
            return !0
          }(r, o) ? null : {
            intl: As(o, n),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return pa(this.state.intl), F.createElement(Bs, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = ga, t
      }(F.PureComponent);
      const Fs = Vs;

      function Gs() {
        var e = F.useContext(Hs);
        return pa(e), e
      }
      var Us, qs;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Us || (Us = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(qs || (qs = {}));
      var Xs = function(e) {
        var t = Gs(),
          r = e.value,
          n = e.children,
          o = (0, Fn.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function Ks(e) {
        var t = function(t) {
          var r = Gs(),
            n = t.value,
            o = t.children,
            a = (0, Fn.__rest)(t, ["value", "children"]),
            s = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(s, a) : r.formatTimeToParts(s, a))
        };
        return t.displayName = qs[e], t
      }

      function Ws(e) {
        var t = function(t) {
          var r = Gs(),
            n = t.value,
            o = t.children,
            a = (0, Fn.__rest)(t, ["value", "children"]),
            s = r[e](n, a);
          if ("function" == typeof o) return o(s);
          var i = r.textComponent || F.Fragment;
          return F.createElement(i, null, s)
        };
        return t.displayName = Us[e], t
      }
      Xs.displayName = "FormattedNumberParts", Xs.displayName = "FormattedNumberParts", Ws("formatDate"), Ws("formatTime"), Ws("formatNumber"), Ws("formatList"), Ws("formatDisplayName"), Ks("formatDate"), Ks("formatTime");
      const Zs = ({
          children: e,
          messages: t,
          locale: r,
          fallback: n
        }) => {
          const [o, a] = (0, F.useState)(null);
          return (0, F.useEffect)(() => {
            (t?.[r] ?? t["en-US"]).then(e => {
              a(e.default)
            })
          }, [r]), o ? (0, E.jsx)(Fs, {
            locale: r,
            messages: o,
            children: e
          }) : n ?? null
        },
        $s = {
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
      class Ys {
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
          return r ? t : ln(t, this.max[e], this.min[e])
        }
      }
      class Qs {
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
      class Js {
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
      class ei {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", an(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, a = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && a && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && a ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
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
          const a = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (an(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, a))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, a = this.slide.pan[e], s = a + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(a),
              t = this.getVerticalDragRatio(s);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const i = this.slide.bounds.correctPan(e, s);
          a !== i && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = i)
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
      class ti {
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
          e.src = this.thumbnail.currentSrc ?? "", await nn(e)
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
      class ri {
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
      class ni extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class oi extends Js {
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
          if (!this.dispatch(e, new ni(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class ai {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = on(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, an(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = on(e);
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
            a = an({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = an({
            x: 0,
            y: 0
          }, a);
          var i, l;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, an(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), l = a, ((i = s).x !== l.x || i.y !== l.y || n || o) && (an(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class si {
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
      class ii extends Js {
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
          zoomLevelOptions: r,
          actionOptions: n,
          panAreaOptions: o,
          dragOptions: a
        }) {
          super(), this.width = e, this.height = t, this.opener = new ti({
            slide: this
          }), this.bounds = new Ys({
            slide: this
          }), this.dragHandler = new ei({
            options: a,
            slide: this
          }), this.scrollWheel = new ri({
            slide: this
          }), this.zoomHandler = new ai({
            slide: this
          }), this.zoomLevels = new Qs({
            options: r
          }), this.tapHandler = new oi({
            options: n,
            slide: this
          }), this.panAreaSize = new si({
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
        panTo(e, t, r) {
          this.pan.x = this.bounds.correctPan("x", e, r), this.pan.y = this.bounds.correctPan("y", t, r)
        }
        zoomTo(e, t, r) {
          const n = this.currZoomLevel;
          r || (e = ln(e, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), sn(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.max;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), sn(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), an(this.pan, this.bounds.center)
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
      var li = r(25778);
      const ci = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "{description} - View image in lightbox"
        },
        ui = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close"
        },
        di = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        fi = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        hi = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        pi = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        mi = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        vi = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        yi = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        gi = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        bi = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };
      var _i = "foundry_bc732x1";
      const wi = (0, F.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (On(e, e => r?.(e), [r]), (0, E.jsx)(It, {
        size: "XS",
        className: (0, Be.clsx)("foundry_bc732x0", {
          [_i]: t
        }),
        asChild: !0,
        children: (0, E.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var xi = Bi(),
        Pi = e => Di(e, xi),
        Ci = Bi();
      Pi.write = e => Di(e, Ci);
      var Ei = Bi();
      Pi.onStart = e => Di(e, Ei);
      var Si = Bi();
      Pi.onFrame = e => Di(e, Si);
      var Oi = Bi();
      Pi.onFinish = e => Di(e, Oi);
      var Ti = [];
      Pi.setTimeout = (e, t) => {
        const r = Pi.now() + t,
          n = () => {
            const e = Ti.findIndex(e => e.cancel == n);
            ~e && Ti.splice(e, 1), Ii -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Ti.splice(ji(r), 0, o), Ii += 1, Li(), o
      };
      var ji = e => ~(~Ti.findIndex(t => t.time > e) || ~Ti.length);
      Pi.cancel = e => {
        Ei.delete(e), Si.delete(e), Oi.delete(e), xi.delete(e), Ci.delete(e)
      }, Pi.sync = e => {
        ki = !0, Pi.batchedUpdates(e), ki = !1
      }, Pi.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Pi.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Ei.delete(r), t = null
        }, n
      };
      var Ni = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Pi.use = e => Ni = e, Pi.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Pi.batchedUpdates = e => e(), Pi.catch = console.error, Pi.frameLoop = "always", Pi.advance = () => {
        "demand" !== Pi.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Mi()
      };
      var Ri = -1,
        Ii = 0,
        ki = !1;

      function Di(e, t) {
        ki ? (t.delete(e), e(0)) : (t.add(e), Li())
      }

      function Li() {
        Ri < 0 && (Ri = 0, "demand" !== Pi.frameLoop && Ni(Ai))
      }

      function Ai() {
        ~Ri && (Ni(Ai), Pi.batchedUpdates(Mi))
      }

      function Mi() {
        const e = Ri;
        Ri = Pi.now();
        const t = ji(Ri);
        t && (Hi(Ti.splice(0, t), e => e.handler()), Ii -= t), Ii ? (Ei.flush(), xi.flush(e ? Math.min(64, Ri - e) : 16.667), Si.flush(), Ci.flush(), Oi.flush()) : Ri = -1
      }

      function Bi() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ii += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ii -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ii -= t.size, Hi(t, t => t(r) && e.add(t)), Ii += e.size, t = e)
          }
        }
      }

      function Hi(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            Pi.catch(e)
          }
        })
      }
      var zi = Object.defineProperty,
        Vi = {};

      function Fi() {}((e, t) => {
        for (var r in t) zi(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Vi, {
        assign: () => rl,
        colors: () => Ji,
        createStringInterpolator: () => Zi,
        skipAnimation: () => el,
        to: () => $i,
        willAdvance: () => tl
      });
      var Gi = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Ui(e, t) {
        if (Gi.arr(e)) {
          if (!Gi.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var qi = (e, t) => e.forEach(t);

      function Xi(e, t, r) {
        if (Gi.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Ki = e => Gi.und(e) ? [] : Gi.arr(e) ? e : [e];

      function Wi(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), qi(r, t)
        }
      }
      var Zi, $i, Yi = (e, ...t) => Wi(e, e => e(...t)),
        Qi = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ji = null,
        el = !1,
        tl = Fi,
        rl = e => {
          e.to && ($i = e.to), e.now && (Pi.now = e.now), void 0 !== e.colors && (Ji = e.colors), null != e.skipAnimation && (el = e.skipAnimation), e.createStringInterpolator && (Zi = e.createStringInterpolator), e.requestAnimationFrame && Pi.use(e.requestAnimationFrame), e.batchedUpdates && (Pi.batchedUpdates = e.batchedUpdates), e.willAdvance && (tl = e.willAdvance), e.frameLoop && (Pi.frameLoop = e.frameLoop)
        },
        nl = new Set,
        ol = [],
        al = [],
        sl = 0,
        il = {
          get idle() {
            return !nl.size && !ol.length
          },
          start(e) {
            sl > e.priority ? (nl.add(e), Pi.onStart(ll)) : (cl(e), Pi(dl))
          },
          advance: dl,
          sort(e) {
            if (sl) Pi.onFrame(() => il.sort(e));
            else {
              const t = ol.indexOf(e);
              ~t && (ol.splice(t, 1), ul(e))
            }
          },
          clear() {
            ol = [], nl.clear()
          }
        };

      function ll() {
        nl.forEach(cl), nl.clear(), Pi(dl)
      }

      function cl(e) {
        ol.includes(e) || ul(e)
      }

      function ul(e) {
        ol.splice(function(t) {
          const r = t.findIndex(t => t.priority > e.priority);
          return r < 0 ? t.length : r
        }(ol), 0, e)
      }

      function dl(e) {
        const t = al;
        for (let r = 0; r < ol.length; r++) {
          const n = ol[r];
          sl = n.priority, n.idle || (tl(n), n.advance(e), n.idle || t.push(n))
        }
        return sl = 0, (al = ol).length = 0, (ol = t).length > 0
      }
      var fl = {
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
        hl = "[-+]?\\d*\\.?\\d+",
        pl = hl + "%";

      function ml(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var vl = new RegExp("rgb" + ml(hl, hl, hl)),
        yl = new RegExp("rgba" + ml(hl, hl, hl, hl)),
        gl = new RegExp("hsl" + ml(hl, pl, pl)),
        bl = new RegExp("hsla" + ml(hl, pl, pl, hl)),
        _l = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        wl = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xl = /^#([0-9a-fA-F]{6})$/,
        Pl = /^#([0-9a-fA-F]{8})$/;

      function Cl(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function El(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = Cl(o, n, e + 1 / 3),
          s = Cl(o, n, e),
          i = Cl(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * s) << 16 | Math.round(255 * i) << 8
      }

      function Sl(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Ol(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Tl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function jl(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Nl(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = xl.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ji && void 0 !== Ji[e] ? Ji[e] : (t = vl.exec(e)) ? (Sl(t[1]) << 24 | Sl(t[2]) << 16 | Sl(t[3]) << 8 | 255) >>> 0 : (t = yl.exec(e)) ? (Sl(t[1]) << 24 | Sl(t[2]) << 16 | Sl(t[3]) << 8 | Tl(t[4])) >>> 0 : (t = _l.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Pl.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = wl.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = gl.exec(e)) ? (255 | El(Ol(t[1]), jl(t[2]), jl(t[3]))) >>> 0 : (t = bl.exec(e)) ? (El(Ol(t[1]), jl(t[2]), jl(t[3])) | Tl(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Rl = (e, t, r) => {
          if (Gi.fun(e)) return e;
          if (Gi.arr(e)) return Rl({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Gi.str(e.output[0])) return Zi(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            s = n.extrapolateLeft || n.extrapolate || "extend",
            i = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, s, i, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === s) return c;
                "clamp" === s && (c = t)
              }
              if (c > r) {
                if ("identity" === i) return c;
                "clamp" === i && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, s, i, n.map)
          }
        },
        Il = 1.70158,
        kl = 1.525 * Il,
        Dl = Il + 1,
        Ll = 2 * Math.PI / 3,
        Al = 2 * Math.PI / 4.5,
        Ml = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Bl = {
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
          easeInBack: e => Dl * e * e * e - Il * e * e,
          easeOutBack: e => 1 + Dl * Math.pow(e - 1, 3) + Il * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - kl) / 2 : (Math.pow(2 * e - 2, 2) * ((kl + 1) * (2 * e - 2) + kl) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Ll),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Ll) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Al) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Al) / 2 + 1,
          easeInBounce: e => 1 - Ml(1 - e),
          easeOutBounce: Ml,
          easeInOutBounce: e => e < .5 ? (1 - Ml(1 - 2 * e)) / 2 : (1 + Ml(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        Hl = Symbol.for("FluidValue.get"),
        zl = Symbol.for("FluidValue.observers"),
        Vl = e => Boolean(e && e[Hl]),
        Fl = e => e && e[Hl] ? e[Hl]() : e,
        Gl = e => e[zl] || null;

      function Ul(e, t) {
        const r = e[zl];
        r && r.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var ql = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Xl(this, e)
          }
        },
        Xl = (e, t) => $l(e, Hl, t);

      function Kl(e, t) {
        if (e[Hl]) {
          let r = e[zl];
          r || $l(e, zl, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Wl(e, t) {
        const r = e[zl];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[zl] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Zl, $l = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Yl = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ql = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Jl = new RegExp(`(${Yl.source})(%|[a-z]+)`, "i"),
        ec = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        tc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        rc = e => {
          const [t, r] = nc(e);
          if (!t || Qi()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && tc.test(r) ? rc(r) : r || e
        },
        nc = e => {
          const t = tc.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        oc = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        ac = e => {
          Zl || (Zl = Ji ? new RegExp(`(${Object.keys(Ji).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Fl(e).replace(tc, rc).replace(Ql, Nl).replace(Zl, Nl)),
            r = t.map(e => e.match(Yl).map(Number)),
            n = r[0].map((e, t) => r.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })),
            o = n.map(t => Rl({
              ...e,
              output: t
            }));
          return e => {
            const r = !Jl.test(t[0]) && t.find(e => Jl.test(e))?.replace(Yl, "");
            let n = 0;
            return t[0].replace(Yl, () => `${o[n++](e)}${r||""}`).replace(ec, oc)
          }
        },
        sc = "react-spring: ",
        ic = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${sc}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        lc = ic(console.warn),
        cc = ic(console.warn);

      function uc(e) {
        return Gi.str(e) && ("#" == e[0] || /\d/.test(e) || !Qi() && tc.test(e) || e in (Ji || {}))
      }
      var dc = Qi() ? F.useEffect : F.useLayoutEffect;

      function fc() {
        const e = (0, F.useState)()[1],
          t = (() => {
            const e = (0, F.useRef)(!1);
            return dc(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var hc = e => (0, F.useEffect)(e, pc),
        pc = [],
        mc = Symbol.for("Animated:node"),
        vc = e => e && e[mc],
        yc = (e, t) => {
          return r = e, n = mc, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        gc = e => e && e[mc] && e[mc].getPayload(),
        bc = class {
          constructor() {
            yc(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        _c = class e extends bc {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Gi.num(this._value) && (this.lastPosition = this._value)
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
            return Gi.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Gi.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        wc = class e extends _c {
          constructor(e) {
            super(0), this._string = null, this._toString = Rl({
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
            if (Gi.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Rl({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        xc = {
          dependencies: null
        },
        Pc = class extends bc {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Xi(this.source, (r, n) => {
              var o;
              (o = r) && o[mc] === o ? t[n] = r.getValue(e) : Vl(r) ? t[n] = Fl(r) : e || (t[n] = r)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && qi(this.payload, e => e.reset())
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Xi(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            xc.dependencies && Vl(e) && xc.dependencies.add(e);
            const t = gc(e);
            t && qi(t, e => this.add(e))
          }
        },
        Cc = class e extends Pc {
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
            return e.length == t.length ? t.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(Ec)), !0)
          }
        };

      function Ec(e) {
        return (uc(e) ? wc : _c).create(e)
      }

      function Sc(e) {
        const t = vc(e);
        return t ? t.constructor : Gi.arr(e) ? Cc : uc(e) ? wc : _c
      }
      var Oc = (e, t) => {
          const r = !Gi.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, F.forwardRef)((n, o) => {
            const a = (0, F.useRef)(null),
              s = r && (0, F.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (Gi.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }, [o]),
              [i, l] = function(e, t) {
                const r = new Set;
                return xc.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Pc(e), xc.dependencies = null, [e, r]
              }(n, t),
              c = fc(),
              u = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && c()
              },
              d = new Tc(u, l),
              f = (0, F.useRef)(void 0);
            dc(() => (f.current = d, qi(l, e => Kl(e, d)), () => {
              f.current && (qi(f.current.deps, e => Wl(e, f.current)), Pi.cancel(f.current.update))
            })), (0, F.useEffect)(u, []), hc(() => () => {
              const e = f.current;
              qi(e.deps, t => Wl(t, e))
            });
            const h = t.getComponentProps(i.getValue());
            return F.createElement(e, {
              ...h,
              ref: s
            })
          })
        },
        Tc = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Pi.write(this.update)
          }
        },
        jc = Symbol.for("AnimatedComponent"),
        Nc = (e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new Pc(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = Rc(e) || "Anonymous";
              return (e = Gi.str(e) ? a[e] || (a[e] = Oc(e, o)) : e[jc] || (e[jc] = Oc(e, o))).displayName = `Animated(${t})`, e
            };
          return Xi(e, (t, r) => {
            Gi.arr(e) && (r = Rc(t)), a[r] = a(t)
          }), {
            animated: a
          }
        },
        Rc = e => Gi.str(e) ? e : e && Gi.str(e.displayName) ? e.displayName : Gi.fun(e) && e.name || null;

      function Ic(e, ...t) {
        return Gi.fun(e) ? e(...t) : e
      }
      var kc = (e, t) => !0 === e || !!(t && e && (Gi.fun(e) ? e(t) : Ki(e).includes(t))),
        Dc = (e, t) => Gi.obj(e) ? t && e[t] : e,
        Lc = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Ac = e => e,
        Mc = (e, t = Ac) => {
          let r = Bc;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Gi.und(r) || (n[o] = r)
          }
          return n
        },
        Bc = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Hc = {
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

      function zc(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Xi(e, (e, n) => {
              Hc[n] || (t[n] = e, r++)
            }), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Xi(e, (e, n) => n in t || (r[n] = e)), r
        }
        return {
          ...e
        }
      }

      function Vc(e) {
        return e = Fl(e), Gi.arr(e) ? e.map(Vc) : uc(e) ? Vi.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Fc(e) {
        return Gi.fun(e) || Gi.arr(e) && Gi.obj(e[0])
      }

      function Gc(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }
      var Uc = {
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
        qc = {
          ...Uc.default,
          mass: 1,
          damping: 1,
          easing: Bl.linear,
          clamp: !1
        },
        Xc = class {
          constructor() {
            this.velocity = 0, Object.assign(this, qc)
          }
        };

      function Kc(e, t) {
        if (Gi.und(t.decay)) {
          const r = !Gi.und(t.tension) || !Gi.und(t.friction);
          !r && Gi.und(t.frequency) && Gi.und(t.damping) && Gi.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Wc = [],
        Zc = class {
          constructor() {
            this.changed = !1, this.values = Wc, this.toValues = null, this.fromValues = Wc, this.config = new Xc, this.immediate = !1
          }
        };

      function $c(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise((s, i) => {
          let l, c, u = kc(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            Gi.und(r.pause) || (o.paused = kc(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || kc(e, t)), l = Ic(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - Pi.now()
          }

          function f() {
            l > 0 && !Vi.skipAnimation ? (o.delayed = !0, c = Pi.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: u
              }, s)
            } catch (e) {
              i(e)
            }
          }
        })
      }
      var Yc = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? eu(e.get()) : t.every(e => e.noop) ? Qc(e.get()) : Jc(e.get(), t.every(e => e.finished)),
        Qc = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Jc = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        eu = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function tu(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: s
        } = t, {
          asyncTo: i,
          promise: l
        } = r;
        return a || e !== i || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = Mc(t, (e, t) => "onRest" === t ? void 0 : e);
          let u, d;
          const f = new Promise((e, t) => (u = e, d = t)),
            h = e => {
              const t = o <= (r.cancelId || 0) && eu(n) || o !== r.asyncId && Jc(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const a = new nu,
                s = new ou;
              return (async () => {
                if (Vi.skipAnimation) throw ru(r), s.result = Jc(n, !1), d(s), s;
                h(a);
                const i = Gi.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = o, Xi(c, (e, t) => {
                  Gi.und(i[t]) && (i[t] = e)
                });
                const l = await n.start(i);
                return h(a), r.paused && await new Promise(e => {
                  r.resumeQueue.add(e)
                }), l
              })()
            };
          let m;
          if (Vi.skipAnimation) return ru(r), Jc(n, !1);
          try {
            let t;
            t = Gi.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), m = Jc(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof nu) m = e.result;
            else {
              if (!(e instanceof ou)) throw e;
              m = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? i : void 0, r.promise = a ? l : void 0)
          }
          return Gi.fun(s) && Pi.batchedUpdates(() => {
            s(m, n, n.item)
          }), m
        })() : l
      }

      function ru(e, t) {
        Wi(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var nu = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        ou = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        au = e => e instanceof iu,
        su = 1,
        iu = class extends ql {
          constructor() {
            super(...arguments), this.id = su++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = vc(this);
            return e && e.getValue()
          }
          to(...e) {
            return Vi.to(this, e)
          }
          interpolate(...e) {
            return lc(`${sc}The "interpolate" function is deprecated in v9 (use "to" instead)`), Vi.to(this, e)
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
            Ul(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || il.sort(this), Ul(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        lu = Symbol.for("SpringPhase"),
        cu = e => (1 & e[lu]) > 0,
        uu = e => (2 & e[lu]) > 0,
        du = e => (4 & e[lu]) > 0,
        fu = (e, t) => t ? e[lu] |= 3 : e[lu] &= -3,
        hu = (e, t) => t ? e[lu] |= 4 : e[lu] &= -5,
        pu = class extends iu {
          constructor(e, t) {
            if (super(), this.animation = new Zc, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Gi.und(e) || !Gi.und(t)) {
              const r = Gi.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Gi.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(uu(this) || this._state.asyncTo) || du(this)
          }
          get goal() {
            return Fl(this.animation.to)
          }
          get velocity() {
            const e = vc(this);
            return e instanceof _c ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
          }
          get hasAnimated() {
            return cu(this)
          }
          get isAnimating() {
            return uu(this)
          }
          get isPaused() {
            return du(this)
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
              config: a
            } = n, s = gc(n.to);
            !s && Vl(n.to) && (o = Ki(Fl(n.to))), n.values.forEach((i, l) => {
              if (i.done) return;
              const c = i.constructor == wc ? 1 : s ? s[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = i.lastPosition, a.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != i.v0 ? i.v0 : i.v0 = Gi.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let s;
                const f = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (Gi.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(i.lastPosition - d) <= f, s = o * n
                  } else {
                    s = null == i.lastVelocity ? o : i.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !Gi.und(n),
                      h = r == c ? i.v0 > 0 : r < c;
                    let p, m = !1;
                    const v = 1,
                      y = Math.ceil(e / v);
                    for (let e = 0; e < y && (p = Math.abs(s) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (s = -s * n, d = c)), s += (1e-6 * -a.tension * (d - c) + .001 * -a.friction * s) / a.mass * v, d += s * v
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, i.durationProgress > 0 && (i.elapsedTime = a.duration * i.durationProgress, t = i.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, i.durationProgress = n), d = r + a.easing(n) * (c - r), s = (d - i.lastPosition) / e, u = 1 == n
                }
                i.lastVelocity = s, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              s && !s[l].done && (u = !1), u ? i.done = !0 : t = !1, i.setValue(d, a.round) && (r = !0)
            });
            const i = vc(this),
              l = i.getValue();
            if (t) {
              const e = Fl(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return Pi.batchedUpdates(() => {
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
            if (uu(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Pi.batchedUpdates(() => {
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
            return Gi.und(e) ? (r = this.queue || [], this.queue = []) : r = [Gi.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map(e => this._update(e))).then(e => Yc(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ru(this._state, e && this._lastCallId), Pi.batchedUpdates(() => this._stop(t, e)), this
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
            r = Gi.obj(r) ? r[t] : r, (null == r || Fc(r)) && (r = void 0), n = Gi.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return cu(this) || (e.reverse && ([r, n] = [n, r]), n = Fl(n), Gi.und(n) ? vc(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Mc(e, (e, t) => /^on/.test(t) ? Dc(e, r) : e)), _u(this, e, "onProps"), wu(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return $c(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  du(this) || (hu(this, !0), Yi(a.pauseQueue), wu(this, "onPause", Jc(this, mu(this, this.animation.to)), this))
                },
                resume: () => {
                  du(this) && (hu(this, !1), uu(this) && this._resume(), Yi(a.resumeQueue), wu(this, "onResume", Jc(this, mu(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then(r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = vu(e);
                if (t) return this._update(t, !0)
              }
              return r
            })
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(eu(this));
            const n = !Gi.und(e.to),
              o = !Gi.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(eu(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: s,
              animation: i
            } = this, {
              to: l,
              from: c
            } = i;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !Gi.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Ui(d, c);
            f && (i.from = d), d = Fl(d);
            const h = !Ui(u, l);
            h && this._focus(u);
            const p = Fc(t.to),
              {
                config: m
              } = i,
              {
                decay: v,
                velocity: y
              } = m;
            (n || o) && (m.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Kc(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Kc(e, t), Object.assign(e, t);
              for (const t in qc) null == e[t] && (e[t] = qc[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              Gi.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(m, Ic(t.config, a), t.config !== s.config ? Ic(s.config, a) : void 0);
            let g = vc(this);
            if (!g || Gi.und(u)) return r(Jc(this, !0));
            const b = Gi.und(t.reset) ? o && !t.default : !Gi.und(d) && kc(t.reset, a),
              _ = b ? d : this.get(),
              w = Vc(u),
              x = Gi.num(w) || Gi.arr(w) || uc(w),
              P = !p && (!x || kc(s.immediate || t.immediate, a));
            if (h) {
              const e = Sc(u);
              if (e !== g.constructor) {
                if (!P) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(w)
              }
            }
            const C = g.constructor;
            let E = Vl(u),
              S = !1;
            if (!E) {
              const e = b || !cu(this) && f;
              (h || e) && (S = Ui(Vc(_), w), E = !S), (Ui(i.immediate, P) || P) && Ui(m.decay, v) && Ui(m.velocity, y) || (E = !0)
            }
            if (S && uu(this) && (i.changed && !b ? E = !0 : E || this._stop(l)), !p && ((E || Vl(l)) && (i.values = g.getPayload(), i.toValues = Vl(u) ? null : C == wc ? [1] : Ki(w)), i.immediate != P && (i.immediate = P, P || b || this._set(l)), E)) {
              const {
                onRest: e
              } = i;
              qi(bu, e => _u(this, t, e));
              const n = Jc(this, mu(this, l));
              Yi(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Pi.batchedUpdates(() => {
                i.changed = !b, e?.(n, this), b ? Ic(s.onRest, n) : i.onStart?.(n, this)
              })
            }
            b && this._set(_), p ? r(tu(t.to, t, this._state, this)) : E ? this._start() : uu(this) && !h ? this._pendingCalls.add(r) : r(Qc(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Gl(this) && this._detach(), t.to = e, Gl(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Vl(t) && (Kl(t, this), au(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Vl(e) && Wl(e, this)
          }
          _set(e, t = !0) {
            const r = Fl(e);
            if (!Gi.und(r)) {
              const e = vc(this);
              if (!e || !Ui(r, e.getValue())) {
                const n = Sc(r);
                e && e.constructor == n ? e.setValue(r) : yc(this, n.create(r)), e && Pi.batchedUpdates(() => {
                  this._onChange(r, t)
                })
              }
            }
            return vc(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, wu(this, "onStart", Jc(this, mu(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ic(this.animation.onChange, e, this)), Ic(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            vc(this).reset(Fl(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), uu(this) || (fu(this, !0), du(this) || this._resume())
          }
          _resume() {
            Vi.skipAnimation ? this.finish() : il.start(this)
          }
          _stop(e, t) {
            if (uu(this)) {
              fu(this, !1);
              const r = this.animation;
              qi(r.values, e => {
                e.done = !0
              }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Ul(this, {
                type: "idle",
                parent: this
              });
              const n = t ? eu(this.get()) : Jc(this.get(), mu(this, e ?? r.to));
              Yi(this._pendingCalls, n), r.changed && (r.changed = !1, wu(this, "onRest", n, this))
            }
          }
        };

      function mu(e, t) {
        const r = Vc(t);
        return Ui(Vc(e.get()), r)
      }

      function vu(e, t = e.loop, r = e.to) {
        const n = Ic(t);
        if (n) {
          const o = !0 !== n && zc(n),
            a = (o || e).reverse,
            s = !o || o.reset;
          return yu({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Fc(r) ? r : void 0,
            from: s ? e.from : void 0,
            reset: s,
            ...o
          })
        }
      }

      function yu(e) {
        const {
          to: t,
          from: r
        } = e = zc(e), n = new Set;
        return Gi.obj(t) && gu(t, n), Gi.obj(r) && gu(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function gu(e, t) {
        Xi(e, (e, r) => null != e && t.add(r))
      }
      var bu = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function _u(e, t, r) {
        e.animation[r] = t[r] !== Lc(t, r) ? Dc(t[r], e.key) : void 0
      }

      function wu(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var xu = ["onStart", "onChange", "onRest"],
        Pu = 1,
        Cu = class {
          constructor(e, t) {
            this.id = Pu++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Gi.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(yu(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Ki(e).map(yu) : this.queue = [], this._flush ? this._flush(this, t) : (ju(this, t), function(e, t) {
              return Promise.all(t.map(t => Eu(e, t))).then(t => Yc(e, t))
            }(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              qi(Ki(t), t => r[t].stop(!!e))
            } else ru(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (Gi.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              qi(Ki(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (Gi.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              qi(Ki(e), e => t[e].resume())
            }
            return this
          }
          each(e) {
            Xi(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Wi(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const a = !n && this._started,
              s = o || a && r.size ? this.get() : null;
            o && t.size && Wi(t, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }), a && (this._started = !1, Wi(r, ([e, t]) => {
              t.value = s, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Pi.onFrame(this._onFrame)
          }
        };
      async function Eu(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: s,
          onRest: i,
          onResolve: l
        } = t, c = Gi.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const u = Gi.arr(o) || Gi.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : qi(xu, r => {
          const n = t[r];
          if (Gi.fun(n)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Yi(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map(r => e.springs[r].start(t)),
          h = !0 === t.cancel || !0 === Lc(t, "cancel");
        (u || h && d.asyncId) && f.push($c(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Fi,
            resume: Fi,
            start(t, r) {
              h ? (ru(d, e._lastAsyncId), r(eu(e))) : (t.onRest = i, r(tu(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise(e => {
          d.resumeQueue.add(e)
        });
        const p = Yc(e, await Promise.all(f));
        if (s && p.finished && (!r || !p.noop)) {
          const r = vu(t, s, o);
          if (r) return ju(e, [r]), Eu(e, r, !0)
        }
        return l && Pi.batchedUpdates(() => l(p, e, e.item)), p
      }

      function Su(e, t) {
        const r = {
          ...e.springs
        };
        return t && qi(Ki(t), e => {
            Gi.und(e.keys) && (e = yu(e)), Gi.obj(e.to) || (e = {
              ...e,
              to: void 0
            }), Tu(r, e, e => Ou(e))
          }),
          function(e, t) {
            Xi(t, (t, r) => {
              e.springs[r] || (e.springs[r] = t, Kl(t, e))
            })
          }(e, r), r
      }

      function Ou(e, t) {
        const r = new pu;
        return r.key = e, t && Kl(r, t), r
      }

      function Tu(e, t, r) {
        t.keys && qi(t.keys, n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        })
      }

      function ju(e, t) {
        qi(t, t => {
          Tu(e.springs, t, t => Ou(t, e))
        })
      }
      var Nu = F.createContext({
          pause: !1,
          immediate: !1
        }),
        Ru = () => {
          const e = [],
            t = function(t) {
              cc(`${sc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const n = [];
              return qi(e, (e, o) => {
                if (Gi.und(t)) n.push(e.start());
                else {
                  const a = r(t, e, o);
                  a && n.push(e.start(a))
                }
              }), n
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const r = e.indexOf(t);
            ~r && e.splice(r, 1)
          }, t.pause = function() {
            return qi(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return qi(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            qi(e, (e, r) => {
              const n = Gi.fun(t) ? t(r, e) : t;
              n && e.set(n)
            })
          }, t.start = function(t) {
            const r = [];
            return qi(e, (e, n) => {
              if (Gi.und(t)) r.push(e.start());
              else {
                const o = this._getProps(t, e, n);
                o && r.push(e.start(o))
              }
            }), r
          }, t.stop = function() {
            return qi(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return qi(e, (e, r) => e.update(this._getProps(t, e, r))), this
          };
          const r = function(e, t, r) {
            return Gi.fun(e) ? e(r, t) : e
          };
          return t._getProps = r, t
        },
        Iu = () => Ru(),
        ku = () => (0, F.useState)(Iu)[0];

      function Du(e, t, r) {
        const n = Gi.fun(t) && t,
          {
            reset: o,
            sort: a,
            trail: s = 0,
            expires: i = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: c,
            ref: u,
            config: d
          } = n ? n() : t,
          f = (0, F.useMemo)(() => n || 3 == arguments.length ? Ru() : void 0, []),
          h = Ki(e),
          p = [],
          m = (0, F.useRef)(null),
          v = o ? null : m.current;
        dc(() => {
          m.current = p
        }), hc(() => (qi(p, e => {
          f?.add(e.ctrl), e.ctrl.ref = f
        }), () => {
          qi(m.current, e => {
            e.expired && clearTimeout(e.expirationId), Gc(e.ctrl, f), e.ctrl.stop(!0)
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
                return r ? (t.add(r), r.key) : Lu++
              })
            }
            return Gi.und(r) ? e : Gi.fun(r) ? e.map(r) : Ki(r)
          }(h, n ? n() : t, v),
          g = o && m.current || [];
        dc(() => qi(g, ({
          ctrl: e,
          item: t,
          key: r
        }) => {
          Gc(e, f), Ic(c, t, r)
        }));
        const b = [];
        if (v && qi(v, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), g.push(e)) : ~(t = b[t] = y.indexOf(e.key)) && (p[t] = e)
          }), qi(h, (e, t) => {
            p[t] || (p[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Cu
            }, p[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: r
          } = n ? n() : t;
          qi(b, (t, n) => {
            const o = v[n];
            ~t ? (e = p.indexOf(o), p[e] = {
              ...o,
              item: h[t]
            }) : r && p.splice(++e, 0, o)
          })
        }
        Gi.fun(a) && p.sort((e, t) => a(e.item, t.item));
        let _ = -s;
        const w = fc(),
          x = Mc(t),
          P = new Map,
          C = (0, F.useRef)(new Map),
          E = (0, F.useRef)(!1);
        qi(p, (e, r) => {
          const o = e.key,
            a = e.phase,
            c = n ? n() : t;
          let f, h;
          const p = Ic(c.delay || 0, o);
          if ("mount" == a) f = c.enter, h = "enter";
          else {
            const e = y.indexOf(o) < 0;
            if ("leave" != a)
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
          if (f = Ic(f, e.item, r), f = Gi.obj(f) ? zc(f) : {
              to: f
            }, !f.config) {
            const t = d || x.config;
            f.config = Ic(t, e.item, r, h)
          }
          _ += s;
          const g = {
            ...x,
            delay: p + _,
            ref: u,
            immediate: c.immediate,
            reset: !1,
            ...f
          };
          if ("enter" == h && Gi.und(g.from)) {
            const o = n ? n() : t,
              a = Gi.und(o.initial) || v ? o.from : o.initial;
            g.from = Ic(a, e.item, r)
          }
          const {
            onResolve: b
          } = g;
          g.onResolve = e => {
            Ic(b, e);
            const t = m.current,
              r = t.find(e => e.key === o);
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == r.phase) {
                const t = Ic(i, r.item);
                if (!1 !== t) {
                  const n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(w, n)))
                }
              }
              e && t.some(e => e.expired) && (C.current.delete(r), l && (E.current = !0), w())
            }
          };
          const S = Su(e.ctrl, g);
          "leave" === h && l ? C.current.set(e, {
            phase: h,
            springs: S,
            payload: g
          }) : P.set(e, {
            phase: h,
            springs: S,
            payload: g
          })
        });
        const S = (0, F.useContext)(Nu),
          O = function(e) {
            const t = (0, F.useRef)(void 0);
            return (0, F.useEffect)(() => {
              t.current = e
            }), t.current
          }(S),
          T = S !== O && function(e) {
            for (const t in e) return !0;
            return !1
          }(S);
        dc(() => {
          T && qi(p, e => {
            e.ctrl.start({
              default: S
            })
          })
        }, [S]), qi(P, (e, t) => {
          if (C.current.size) {
            const e = p.findIndex(e => e.key === t.key);
            p.splice(e, 1)
          }
        }), dc(() => {
          qi(C.current.size ? C.current : P, ({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: n
            } = r;
            r.phase = e, f?.add(n), T && "enter" == e && n.start({
              default: S
            }), t && (function(e, t) {
              t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
            }(n, t.ref), !n.ref && !f || E.current ? (n.start(t), E.current && (E.current = !1)) : n.update(t))
          })
        }, o ? void 0 : r);
        const j = e => F.createElement(F.Fragment, null, p.map((t, r) => {
          const {
            springs: n
          } = P.get(t) || t.ctrl, o = e({
            ...n
          }, t.item, t, r), a = Gi.str(t.key) || Gi.num(t.key) ? t.key : t.ctrl.id, s = F.version < "19.0.0", i = o?.props ?? {}, l = s ? o?.ref : i?.ref;
          return o && o.type ? F.createElement(o.type, {
            ...i,
            key: a,
            ref: l
          }) : o
        }));
        return f ? [j, f] : j
      }
      var Lu = 1,
        Au = class extends iu {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Rl(...t);
            const r = this._get(),
              n = Sc(r);
            yc(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            Ui(t, this.get()) || (vc(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Bu(this._active) && Hu(this)
          }
          _get() {
            const e = Gi.arr(this.source) ? this.source.map(Fl) : Ki(Fl(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Bu(this._active) && (this.idle = !1, qi(gc(this), e => {
              e.done = !1
            }), Vi.skipAnimation ? (Pi.batchedUpdates(() => this.advance()), Hu(this)) : il.start(this))
          }
          _attach() {
            let e = 1;
            qi(Ki(this.source), t => {
              Vl(t) && Kl(t, this), au(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            }), this.priority = e, this._start()
          }
          _detach() {
            qi(Ki(this.source), e => {
              Vl(e) && Wl(e, this)
            }), this._active.clear(), Hu(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Ki(this.source).reduce((e, t) => Math.max(e, (au(t) ? t.priority : 0) + 1), 0))
          }
        };

      function Mu(e) {
        return !1 !== e.idle
      }

      function Bu(e) {
        return !e.size || Array.from(e).every(Mu)
      }

      function Hu(e) {
        e.idle || (e.idle = !0, qi(gc(e), e => {
          e.done = !0
        }), Ul(e, {
          type: "idle",
          parent: e
        }))
      }
      Vi.assign({
        createStringInterpolator: ac,
        to: (e, t) => new Au(e, t)
      }), il.advance;
      var zu = r(18429),
        Vu = /^--/;

      function Fu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Vu.test(e) || Uu.hasOwnProperty(e) && Uu[e] ? ("" + t).trim() : t + "px"
      }
      var Gu = {},
        Uu = {
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
        qu = ["Webkit", "Ms", "Moz", "O"];
      Uu = Object.keys(Uu).reduce((e, t) => (qu.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), Uu);
      var Xu = /^(matrix|translate|scale|rotate|skew)/,
        Ku = /^(translate)/,
        Wu = /^(rotate|skew)/,
        Zu = (e, t) => Gi.num(e) && 0 !== e ? e + t : e,
        $u = (e, t) => Gi.arr(e) ? e.every(e => $u(e, t)) : Gi.num(e) ? e === t : parseFloat(e) === t,
        Yu = class extends Pc {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>Zu(e,"px")).join(",")})`, $u(e, 0)])), Xi(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (Xu.test(t)) {
                if (delete n[t], Gi.und(e)) return;
                const r = Ku.test(t) ? "px" : Wu.test(t) ? "deg" : "";
                o.push(Ki(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Zu(o,r)})`, $u(o, 0)] : e => [`${t}(${e.map(e=>Zu(e,r)).join(",")})`, $u(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new Qu(o, a)), super(n)
          }
        },
        Qu = class extends ql {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return qi(this.inputs, (r, n) => {
              const o = Fl(r[0]),
                [a, s] = this.transforms[n](Gi.arr(o) ? o : r.map(Fl));
              e += " " + a, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && qi(this.inputs, e => qi(e, e => Vl(e) && Kl(e, this)))
          }
          observerRemoved(e) {
            0 == e && qi(this.inputs, e => qi(e, e => Vl(e) && Wl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ul(this, e)
          }
        };
      Vi.assign({
        batchedUpdates: zu.unstable_batchedUpdates,
        createStringInterpolator: ac,
        colors: fl
      });
      var Ju = Nc(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: s,
                scrollLeft: i,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : Gu[t] || (Gu[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Fu(t, o[t]);
                Vu.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== i && (e.scrollLeft = i), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Yu(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        ed = Ju.animated,
        td = r(94118),
        rd = r(95362),
        nd = r(85426),
        od = r(1573),
        ad = r(10250),
        sd = r(96077),
        id = r(46169),
        ld = r(53146),
        cd = r(78004),
        ud = r(90273),
        dd = r(66190),
        fd = r(3425),
        [hd, pd] = (0, nd.A)("Tooltip", [sd.Bk]),
        md = (0, sd.Bk)(),
        vd = "TooltipProvider",
        yd = 700,
        gd = "tooltip.open",
        [bd, _d] = hd(vd),
        wd = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = yd,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = F.useRef(!0), i = F.useRef(!1), l = F.useRef(0);
          return F.useEffect(() => {
            const e = l.current;
            return () => window.clearTimeout(e)
          }, []), (0, E.jsx)(bd, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: F.useCallback(() => {
              window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: F.useCallback(() => {
              window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: F.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      wd.displayName = vd;
      var xd = "Tooltip",
        [Pd, Cd] = hd(xd),
        Ed = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, l = _d(xd, e.__scopeTooltip), c = md(t), [u, d] = F.useState(null), f = (0, ad.useId)(), h = F.useRef(0), p = s ?? l.disableHoverableContent, m = i ?? l.delayDuration, v = F.useRef(!1), [y, g] = (0, dd.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (l.onOpen(), document.dispatchEvent(new CustomEvent(gd))) : l.onClose(), a?.(e)
            },
            caller: xd
          }), b = F.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), _ = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, v.current = !1, g(!0)
          }, [g]), w = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = 0, g(!1)
          }, [g]), x = F.useCallback(() => {
            window.clearTimeout(h.current), h.current = window.setTimeout(() => {
              v.current = !0, g(!0), h.current = 0
            }, m)
          }, [m, g]);
          return F.useEffect(() => () => {
            h.current && (window.clearTimeout(h.current), h.current = 0)
          }, []), (0, E.jsx)(sd.bL, {
            ...c,
            children: (0, E.jsx)(Pd, {
              scope: t,
              contentId: f,
              open: y,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: F.useCallback(() => {
                l.isOpenDelayedRef.current ? x() : _()
              }, [l.isOpenDelayedRef, x, _]),
              onTriggerLeave: F.useCallback(() => {
                p ? w() : (window.clearTimeout(h.current), h.current = 0)
              }, [w, p]),
              onOpen: _,
              onClose: w,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Ed.displayName = xd;
      var Sd = "TooltipTrigger",
        Od = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Cd(Sd, r), a = _d(Sd, r), s = md(r), i = F.useRef(null), l = (0, rd.s)(t, i, o.onTriggerChange), c = F.useRef(!1), u = F.useRef(!1), d = F.useCallback(() => c.current = !1, []);
          return F.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), (0, E.jsx)(sd.Mz, {
            asChild: !0,
            ...s,
            children: (0, E.jsx)(cd.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: l,
              onPointerMove: (0, td.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (u.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), u.current = !0))
              }),
              onPointerLeave: (0, td.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), u.current = !1
              }),
              onPointerDown: (0, td.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", d, {
                  once: !0
                })
              }),
              onFocus: (0, td.mK)(e.onFocus, () => {
                c.current || o.onOpen()
              }),
              onBlur: (0, td.mK)(e.onBlur, o.onClose),
              onClick: (0, td.mK)(e.onClick, o.onClose)
            })
          })
        });
      Od.displayName = Sd;
      var Td = "TooltipPortal",
        [jd, Nd] = hd(Td, {
          forceMount: void 0
        }),
        Rd = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Cd(Td, t);
          return (0, E.jsx)(jd, {
            scope: t,
            forceMount: r,
            children: (0, E.jsx)(ld.C, {
              present: r || a.open,
              children: (0, E.jsx)(id.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Rd.displayName = Td;
      var Id = "TooltipContent",
        kd = F.forwardRef((e, t) => {
          const r = Nd(Id, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Cd(Id, e.__scopeTooltip);
          return (0, E.jsx)(ld.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, E.jsx)(Bd, {
              side: o,
              ...a,
              ref: t
            }) : (0, E.jsx)(Dd, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Dd = F.forwardRef((e, t) => {
          const r = Cd(Id, e.__scopeTooltip),
            n = _d(Id, e.__scopeTooltip),
            o = F.useRef(null),
            a = (0, rd.s)(t, o),
            [s, i] = F.useState(null),
            {
              trigger: l,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: d
            } = n,
            f = F.useCallback(() => {
              i(null), d(!1)
            }, [d]),
            h = F.useCallback((e, t) => {
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
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, a)) {
                    case a:
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
                a = function(e) {
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
              i(a), d(!0)
            }, [d]);
          return F.useEffect(() => () => f(), [f]), F.useEffect(() => {
            if (l && u) {
              const e = e => h(e, u),
                t = e => h(e, l);
              return l.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                l.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }, [l, u, h, f]), F.useEffect(() => {
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
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const s = t[e],
                        i = t[a],
                        l = s.x,
                        c = s.y,
                        u = i.x,
                        d = i.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [l, u, s, c, f]), (0, E.jsx)(Bd, {
            ...e,
            ref: a
          })
        }),
        [Ld, Ad] = hd(xd, {
          isInside: !1
        }),
        Md = (0, ud.createSlottable)("TooltipContent"),
        Bd = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, l = Cd(Id, r), c = md(r), {
            onClose: u
          } = l;
          return F.useEffect(() => (document.addEventListener(gd, u), () => document.removeEventListener(gd, u)), [u]), F.useEffect(() => {
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
          }, [l.trigger, u]), (0, E.jsx)(od.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, E.jsxs)(sd.UC, {
              "data-state": l.stateAttribute,
              ...c,
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
              children: [(0, E.jsx)(Md, {
                children: n
              }), (0, E.jsx)(Ld, {
                scope: r,
                isInside: !0,
                children: (0, E.jsx)(fd.Root, {
                  id: l.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      kd.displayName = Id;
      var Hd = "TooltipArrow",
        zd = F.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = md(r);
          return Ad(Hd, r).isInside ? null : (0, E.jsx)(sd.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      zd.displayName = Hd;
      var Vd = wd,
        Fd = Ed,
        Gd = Od,
        Ud = Rd,
        qd = kd,
        Xd = zd;
      const Kd = (0, F.createContext)(null);

      function Wd() {
        const e = (0, F.useContext)(Kd);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Zd = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, Se.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, E.jsx)(Vd, {
            delayDuration: t,
            children: (0, E.jsx)(Kd.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, E.jsx)(Fd, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        $d = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, E.jsx)(Gd, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Yd = (0, F.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, l) => {
          const {
            isOpen: c
          } = Wd(), u = (0, Se.jt)(), d = ed(qd), f = Du(c, {
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
            config: Uc.stiff,
            immediate: u
          }), h = (0, X.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }, i);
          return f(e => (0, E.jsx)(d, {
            ...h,
            style: e,
            ref: l
          }))
        }),
        Qd = (0, F.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, X.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, E.jsx)(Xd, {
            ...r,
            ref: t
          })
        }),
        Jd = Ud;

      function ef(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      var tf = r(77768),
        rf = r(29044),
        nf = r(60528),
        of = r(20027),
        af = ["PageUp", "PageDown"],
        sf = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        lf = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        cf = "Slider",
        [uf, df, ff] = (0, of.N)(cf),
        [hf, pf] = (0, nd.A)(cf, [ff]),
        [mf, vf] = hf(cf),
        yf = F.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: d = () => {},
            onValueCommit: f = () => {},
            inverted: h = !1,
            form: p,
            ...m
          } = e, v = F.useRef(new Set), y = F.useRef(0), g = "horizontal" === s ? _f : wf, [b = [], _] = (0, dd.useControllableState)({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...v.current];
              t[y.current]?.focus(), d(e)
            }
          }), w = F.useRef(b);

          function x(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, s),
              c = ef(i, [n, o]);
            _((e = []) => {
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
                }(n, l * a)) {
                y.current = n.indexOf(c);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, E.jsx)(mf, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: b,
            orientation: s,
            form: p,
            children: (0, E.jsx)(uf.Provider, {
              scope: e.__scopeSlider,
              children: (0, E.jsx)(uf.Slot, {
                scope: e.__scopeSlider,
                children: (0, E.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, td.mK)(m.onPointerDown, () => {
                    i || (w.current = b)
                  }),
                  min: n,
                  max: o,
                  inverted: h,
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
                    const e = w.current[y.current];
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
                      const r = af.includes(e.key) || e.shiftKey && sf.includes(e.key) ? 10 : 1,
                        n = y.current;
                      x(b[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      yf.displayName = cf;
      var [gf, bf] = hf(cf, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), _f = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: l,
          onStepKeyDown: c,
          ...u
        } = e, [d, f] = F.useState(null), h = (0, rd.s)(t, e => f(e)), p = F.useRef(void 0), m = (0, tf.jH)(o), v = "ltr" === m, y = v && !a || !v && a;

        function g(e) {
          const t = p.current || d.getBoundingClientRect(),
            o = If([0, t.width], y ? [r, n] : [n, r]);
          return p.current = t, o(e - t.left)
        }
        return (0, E.jsx)(gf, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, E.jsx)(xf, {
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
              i?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, l?.()
            },
            onStepKeyDown: e => {
              const t = lf[y ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), wf = F.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: l,
          ...c
        } = e, u = F.useRef(null), d = (0, rd.s)(t, u), f = F.useRef(void 0), h = !o;

        function p(e) {
          const t = f.current || u.current.getBoundingClientRect(),
            o = If([0, t.height], h ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, E.jsx)(gf, {
          scope: e.__scopeSlider,
          startEdge: h ? "bottom" : "top",
          endEdge: h ? "top" : "bottom",
          size: "height",
          direction: h ? 1 : -1,
          children: (0, E.jsx)(xf, {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const t = lf[h ? "from-bottom" : "from-top"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), xf = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: l,
          ...c
        } = e, u = vf(cf, r);
        return (0, E.jsx)(cd.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, td.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : af.concat(sf).includes(e.key) && (l(e), e.preventDefault())
          }),
          onPointerDown: (0, td.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, td.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, td.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Pf = "SliderTrack", Cf = F.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = vf(Pf, r);
        return (0, E.jsx)(cd.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Cf.displayName = Pf;
      var Ef = "SliderRange",
        Sf = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = vf(Ef, r), a = bf(Ef, r), s = F.useRef(null), i = (0, rd.s)(t, s), l = o.values.length, c = o.values.map(e => Rf(e, o.min, o.max)), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
          return (0, E.jsx)(cd.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: u + "%",
              [a.endEdge]: d + "%"
            }
          })
        });
      Sf.displayName = Ef;
      var Of = "SliderThumb",
        Tf = F.forwardRef((e, t) => {
          const r = df(e.__scopeSlider),
            [n, o] = F.useState(null),
            a = (0, rd.s)(t, e => o(e)),
            s = F.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, E.jsx)(jf, {
            ...e,
            ref: a,
            index: s
          })
        }),
        jf = F.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, s = vf(Of, r), i = bf(Of, r), [l, c] = F.useState(null), u = (0, rd.s)(t, e => c(e)), d = !l || s.form || !!l.closest("form"), f = (0, nf.X)(l), h = s.values[n], p = void 0 === h ? 0 : Rf(h, s.min, s.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), v = f?.[i.size], y = v ? function(e, t, r) {
            const n = e / 2;
            return (n - If([0, 50], [0, n])(t) * r) * r
          }(v, p, i.direction) : 0;
          return F.useEffect(() => {
            if (l) return s.thumbs.add(l), () => {
              s.thumbs.delete(l)
            }
          }, [l, s.thumbs]), (0, E.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${p}% + ${y}px)`
            },
            children: [(0, E.jsx)(uf.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, E.jsx)(cd.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": s.min,
                "aria-valuenow": h,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...a,
                ref: u,
                style: void 0 === h ? {
                  display: "none"
                } : e.style,
                onFocus: (0, td.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), d && (0, E.jsx)(Nf, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: h
            }, n)]
          })
        });
      Tf.displayName = Of;
      var Nf = F.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          a = (0, rd.s)(o, n),
          s = (0, rf.Z)(t);
        return F.useEffect(() => {
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
        }, [s, t]), (0, E.jsx)(cd.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function Rf(e, t, r) {
        return ef(100 / (r - t) * (e - t), [0, 100])
      }

      function If(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Nf.displayName = "RadioBubbleInput";
      var kf = yf,
        Df = Cf,
        Lf = Sf,
        Af = Tf,
        Mf = r(46514);
      const Bf = (0, F.createContext)({
          triggerRef: (0, F.createRef)(),
          triggerBorderRef: (0, F.createRef)(),
          thumbnailRef: (0, F.createRef)(),
          openIconRef: (0, F.createRef)(),
          overlayRef: (0, F.createRef)(),
          contentRef: (0, F.createRef)(),
          containerRef: (0, F.createRef)(),
          imageRef: (0, F.createRef)(),
          placeholderRef: (0, F.createRef)(),
          zoomPanRef: (0, F.createRef)(),
          captionRef: (0, F.createRef)(),
          controlsRef: (0, F.createRef)(),
          closeRef: (0, F.createRef)(),
          zoomRef: (0, F.createRef)(),
          zoomInRef: (0, F.createRef)(),
          zoomSliderRef: (0, F.createRef)(),
          zoomOutRef: (0, F.createRef)(),
          resetRef: (0, F.createRef)(),
          downloadRef: (0, F.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        Hf = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: s = 100,
          clickAction: i = "close",
          doubleTapAction: l,
          tapAction: c,
          hideTrigger: u = !0,
          ...d
        }) => {
          const f = (0, Te.Ym)(),
            h = (0, Se.rl)(),
            p = (0, F.useRef)(null),
            m = (0, F.useRef)(null),
            v = (0, F.useRef)(null),
            y = (0, F.useRef)(null),
            g = (0, F.useRef)(null),
            b = (0, F.useRef)(null),
            _ = (0, F.useRef)(null),
            w = (0, F.useRef)(null),
            x = (0, F.useRef)(null),
            P = (0, F.useRef)(null),
            C = (0, F.useRef)(null),
            S = (0, F.useRef)(null),
            O = (0, F.useRef)(null),
            T = (0, F.useRef)(null),
            j = (0, F.useRef)(null),
            N = (0, F.useRef)(null),
            R = (0, F.useRef)(null),
            I = (0, F.useRef)(null),
            k = (0, F.useRef)(null),
            [D = !1, L] = (0, Se.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, F.useRef)(null);
          return A.current || (A.current = new ii({
            zoomLevelOptions: {
              max: a,
              min: o,
              step: s
            },
            actionOptions: {
              click: i,
              tap: c || (h ? "toggle-controls" : "close"),
              doubleTap: l || (h ? "zoom" : "none")
            }
          })), (0, E.jsx)(Zs, {
            messages: $s,
            locale: f,
            children: (0, E.jsx)(Bf.Provider, {
              value: {
                triggerRef: p,
                triggerBorderRef: m,
                thumbnailRef: v,
                openIconRef: y,
                overlayRef: g,
                contentRef: b,
                containerRef: _,
                zoomPanRef: w,
                imageRef: x,
                placeholderRef: P,
                captionRef: C,
                controlsRef: S,
                closeRef: O,
                zoomRef: T,
                zoomInRef: j,
                zoomSliderRef: N,
                zoomOutRef: R,
                resetRef: I,
                downloadRef: k,
                open: D,
                setOpen: L,
                altText: e,
                hideTrigger: u,
                slide: A.current
              },
              children: (0, E.jsx)(Vf, {
                ...d
              })
            })
          })
        },
        zf = (0, F.createContext)({
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
        Vf = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, F.useContext)(Bf), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = Zt(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: a,
              triggerRef: s,
              triggerBorderRef: i,
              thumbnailRef: l,
              containerRef: c,
              zoomPanRef: u,
              placeholderRef: d,
              imageRef: f
            } = (0, F.useContext)(Bf), h = (0, F.useRef)(null);
            h.current || (h.current = Gt.gsap.timeline({
              defaults: An
            }));
            const p = (0, F.useCallback)(e => {
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
                }), l.current && i.current && (t.opening = !0, t.setup(i.current, l.current), t.zoomAndPanToInitial(), Gt.gsap.set([d.current, f.current], {
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
                }), Gt.gsap.set([f.current], {
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
                }), n && h.current.to([s.current, i.current], {
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
                }, 0), h.current.fromTo([a.current], {
                  opacity: 0,
                  [Bn]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Bn]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (h.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await nn(f.current), t.closing || (Gt.gsap.set([f.current], {
                  visibility: "visible",
                  ...Mn
                }), Gt.gsap.set([d.current], {
                  visibility: "hidden",
                  ...Mn
                }))))
              }),
              v = e(async () => {
                t.close(), h.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await h.current.reverse()
              }),
              y = (0, F.useCallback)(async e => {
                e || (window.addEventListener("click", p), await v(), window.removeEventListener("click", p)), r(e)
              }, [r]),
              g = (0, F.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: m,
              close: g
            }
          })(), {
            update: a,
            zoomIn: s,
            zoomOut: i,
            zoomTo: l,
            resetZoom: c,
            toggleControls: u
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = Zt(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, F.useContext)(Bf), l = t(async e => {
              r.zoomTo(e), Gt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Mn
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), Gt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Mn
              })
            }), u = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), Gt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Mn
              })
            }), d = t(async () => {
              r.zoomAndPanToInitial(), Gt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Mn
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              Gt.gsap.to([a.current], {
                opacity: e,
                [Bn]: t,
                ...Mn
              })
            }), h = t(async () => {
              Gt.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Mn
              })
            }), p = (0, F.useCallback)(() => {
              n.current && o.current && (r.resize(), Gt.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Mn
              }), Gt.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Mn
              }), Gt.gsap.set([s.current], {
                width: r.panAreaSize.x,
                height: r.panAreaSize.y
              }))
            }, []);
            return (0, F.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", h), r.addEventListener("toggle-controls", f), window.addEventListener("resize", p), () => {
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
          }), d = (0, X.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, E.jsx)(zf.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: i,
              zoomTo: l,
              resetZoom: c,
              toggleControls: u,
              onOpenChange: r
            },
            children: (0, E.jsx)(Mf.Root, {
              ...d
            })
          })
        },
        Ff = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = Gs(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, F.useContext)(Bf),
            l = (0, Se.UP)(a, n),
            c = (0, X.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(ci, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, E.jsx)(Mf.Trigger, {
            ref: l,
            ...c,
            children: (0, E.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, E.jsx)(Oe.xV, {
                children: t
              })
            })
          })
        }),
        Gf = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, F.useContext)(Bf), a = (0, Se.UP)(o, n), s = (0, X.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? Oe.DX : "img";
          return (0, E.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Uf = (0, F.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, F.useContext)(Bf), o = (0, Se.UP)(n, r), a = (0, X.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? Oe.DX : He.Maximize2;
          return (0, E.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        qf = ({
          ...e
        }) => (0, E.jsx)(Mf.Portal, {
          ...e
        }),
        Xf = (0, F.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, F.useContext)(Bf), o = (0, Se.UP)(n, r), a = (0, X.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, E.jsx)(Mf.Overlay, {
            ref: o,
            ...a
          })
        }),
        Kf = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, F.useContext)(zf), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, F.useContext)(Bf), {
            cursor: l
          } = (() => {
            const {
              slide: e
            } = (0, F.useContext)(Bf), [t, r] = (0, F.useState)(e.getCursor()), n = (0, F.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, F.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), c = (0, li.m)("dark"), u = (0, Se.UP)(a, n), d = (0, X.mergeProps)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, Be.clsx)("foundry_1a74xwb9", c),
            style: {
              cursor: l
            }
          });
          return (0, E.jsxs)(Mf.Content, {
            ref: u,
            ...d,
            children: [(0, E.jsx)(Oe.s6, {
              children: (0, E.jsx)(Mf.Title, {
                children: s
              })
            }), t]
          })
        }),
        Wf = (0, F.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, F.useContext)(Bf);
          (() => {
            const {
              contextSafe: e
            } = Zt(), {
              toggleControls: t
            } = (0, F.useContext)(zf), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, F.useContext)(Bf), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (Gt.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Mn
              }), Gt.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Mn
              }), Gt.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Mn
              })))
            }), l = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || Gt.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Mn
              }))
            }), c = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (Gt.gsap.to([n.current], {
                ...s.getCurrentTransform(),
                ...Mn
              }), Gt.gsap.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Mn
              }), Gt.gsap.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Mn
              })))
            }), u = (0, F.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, Se.iQ)({
              ref: a,
              onFocusIn: u
            }), rn({
              onWheel: l,
              onDrag: i,
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
          const a = (0, Se.UP)(o, n),
            s = (0, X.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, E.jsx)("div", {
            ref: a,
            ...s,
            children: (0, E.jsxs)(Zf, {
              children: [(0, E.jsx)($f, {}), t]
            })
          })
        }),
        Zf = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, F.useContext)(Bf), a = (0, Se.UP)(o, n), s = (0, X.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? Oe.DX : "div";
          return (0, E.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        $f = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, F.useContext)(Bf), a = (0, Se.UP)(o, n), s = (0, X.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? Oe.DX : "img";
          return (0, E.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Yf = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, F.useContext)(Bf), a = (0, Se.UP)(o, n), s = (0, X.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? Oe.DX : "img";
          return (0, E.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Qf = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, F.useContext)(Bf), a = (0, Se.UP)(o, n), s = (0, X.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
          }), i = t ? Oe.DX : "p";
          return (0, E.jsx)(Mf.Description, {
            asChild: !0,
            children: (0, E.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Jf = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, F.useContext)(Bf);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, F.useContext)(zf);
            On(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), On(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), On("r", n, {
              enabled: e,
              preventDefault: !0
            }), On("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, Se.UP)(o, n),
            s = (0, X.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? Oe.DX : "div";
          return (0, E.jsx)(Cn, {
            children: (0, E.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        eh = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, E.jsx)(E.Fragment, {
            children: n
          });
          const a = (0, X.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, E.jsxs)(Zd, {
            delayDuration: 0,
            children: [(0, E.jsx)($d, {
              children: n
            }), (0, E.jsxs)(Yd, {
              ...a,
              children: [(0, E.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, E.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, E.jsx)(Qd, {})]
            })]
          })
        },
        th = (0, F.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, X.mergeProps)(e, {
            isInline: !0
          });
          return (0, E.jsx)(wi, {
            ref: t,
            ...r
          })
        }),
        rh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = Gs(),
            {
              zoomRef: i
            } = (0, F.useContext)(Bf),
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
              } = (0, F.useContext)(Bf), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, F.useContext)(zf), [o, a] = (0, F.useState)(!1), [s, i] = (0, F.useState)(!1), [l, c] = (0, F.useState)(0), [u, d] = (0, F.useState)(0), [f, h] = (0, F.useState)(0), p = (0, F.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), c(Math.ceil(100 * e.currZoomLevel)), d(Math.ceil(100 * e.zoomLevels.min)), h(Math.ceil(100 * e.zoomLevels.max))
              }, []), m = (0, F.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", p), () => {
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
            v = (0, Se.UP)(i, a),
            y = (0, X.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? Oe.DX : "div";
          return (0, E.jsxs)(g, {
            ref: v,
            ...y,
            children: [(0, E.jsx)(eh, {
              side: "left",
              enabled: r,
              content: s.formatMessage(fi),
              metadata: s.formatMessage(hi, {
                shortcut: (0, E.jsx)(th, {
                  shortcut: "+"
                })
              }),
              children: (0, E.jsx)(st, {
                label: s.formatMessage(fi),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ln({
                  position: "top"
                }),
                onPress: c,
                isDisabled: !l
              })
            }), (0, E.jsxs)(kf, {
              className: "foundry_1a74xwbt",
              max: p,
              min: h,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: m,
              children: [(0, E.jsx)(Df, {
                className: "foundry_1a74xwbu",
                children: (0, E.jsx)(Lf, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, E.jsx)(eh, {
                side: "left",
                enabled: r,
                content: s.formatMessage(gi, {
                  zoom: f.toFixed(0)
                }),
                children: (0, E.jsx)(Af, {
                  className: "foundry_1a74xwbw",
                  children: (0, E.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, E.jsx)(eh, {
              side: "left",
              enabled: r,
              content: s.formatMessage(pi),
              metadata: s.formatMessage(mi, {
                shortcut: (0, E.jsx)(th, {
                  shortcut: "-"
                })
              }),
              children: (0, E.jsx)(st, {
                label: s.formatMessage(pi),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Ln({
                  position: "bottom"
                }),
                onPress: d,
                isDisabled: !u
              })
            }), (0, E.jsx)(Oe.xV, {
              children: n
            })]
          })
        }),
        nh = (0, F.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = Gs(),
            {
              closeRef: s
            } = (0, F.useContext)(Bf),
            i = (0, Se.UP)(s, o),
            l = (0, X.mergeProps)(n, {
              "data-testid": e,
              className: Dn({
                styled: !t
              })
            }),
            c = t ? (0, E.jsx)(Oe.DX, {
              ref: i,
              ...l
            }) : (0, E.jsx)(st, {
              ref: i,
              ...l,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(ui)
            });
          return (0, E.jsx)(eh, {
            side: "right",
            enabled: r,
            content: a.formatMessage(ui),
            metadata: a.formatMessage(di, {
              shortcut: (0, E.jsx)(th, {
                shortcut: "Esc"
              })
            }),
            children: (0, E.jsx)(Mf.Close, {
              asChild: !0,
              children: c
            })
          })
        }),
        oh = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = Gs(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, F.useContext)(Bf), {
                contextSafe: r
              } = Zt(), {
                resetZoom: n
              } = (0, F.useContext)(zf), [o, a] = (0, F.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                Gt.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Mn
                })
              }), i = (0, F.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, F.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, F.useContext)(Bf),
            i = (0, Se.UP)(s, n),
            l = (0, X.mergeProps)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, E.jsx)(eh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(vi),
            metadata: o.formatMessage(yi, {
              shortcut: (0, E.jsx)(th, {
                shortcut: "R"
              })
            }),
            children: (0, E.jsx)(st, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(vi)
            })
          })
        }),
        ah = (0, F.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = Gs(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, F.useContext)(Bf),
            i = (0, Se.UP)(a, n),
            l = (0, X.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, E.jsx)(eh, {
            side: "left",
            enabled: t,
            content: o.formatMessage(bi),
            children: (0, E.jsx)(st, {
              ref: i,
              ...l,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(bi),
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
        sh = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var ih = r(46773);

      function lh(e) {
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

      function ch(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function uh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ch(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = lh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ch(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hh = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = uh(uh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fh(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dh(e.variantClassNames, e => dh(e, e => e.split(" ")[0]))
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
      const ph = (0, F.createContext)(null);

      function mh() {
        const e = (0, F.useContext)(ph);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const vh = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const l = (0, X.mergeProps)({
              className: hh({
                status: a
              }),
              "data-testid": t
            }, s),
            c = r ? Oe.DX : "div";
          return (0, E.jsx)(ph.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, E.jsx)(c, {
              ...l,
              ref: i,
              children: e
            })
          })
        }),
        yh = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = mh(), a = (0, X.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: He.Check,
            invalid: He.X,
            neutral: He.TriangleAlert
          }, i = t ? Oe.DX : s[o];
          return (0, E.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        gh = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = mh(), i = (0, X.mergeProps)({
            "data-testid": t,
            id: s || a
          }, n), l = r ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        });
      var bh = r(76286),
        _h = r(63155),
        wh = "ScrollArea",
        [xh, Ph] = (0, nd.A)(wh),
        [Ch, Eh] = xh(wh),
        Sh = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, l] = F.useState(null), [c, u] = F.useState(null), [d, f] = F.useState(null), [h, p] = F.useState(null), [m, v] = F.useState(null), [y, g] = F.useState(0), [b, _] = F.useState(0), [w, x] = F.useState(!1), [P, C] = F.useState(!1), S = (0, rd.s)(t, e => l(e)), O = (0, tf.jH)(o);
          return (0, E.jsx)(Ch, {
            scope: r,
            type: n,
            dir: O,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: c,
            onViewportChange: u,
            content: d,
            onContentChange: f,
            scrollbarX: h,
            onScrollbarXChange: p,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: v,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: _,
            children: (0, E.jsx)(cd.sG.div, {
              dir: O,
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
      Sh.displayName = wh;
      var Oh = "ScrollAreaViewport",
        Th = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = Eh(Oh, r), i = F.useRef(null), l = (0, rd.s)(t, i, s.onViewportChange);
          return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, E.jsx)(cd.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: l,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, E.jsx)("div", {
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
      Th.displayName = Oh;
      var jh = "ScrollAreaScrollbar",
        Nh = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Eh(jh, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return F.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, E.jsx)(Rh, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, E.jsx)(Ih, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, E.jsx)(kh, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, E.jsx)(Dh, {
            ...n,
            ref: t
          }) : null
        });
      Nh.displayName = jh;
      var Rh = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Eh(jh, e.__scopeScrollArea), [a, s] = F.useState(!1);
          return F.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, E.jsx)(ld.C, {
            present: r || a,
            children: (0, E.jsx)(kh, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Ih = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Eh(jh, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Jh(() => l("SCROLL_END"), 100), [i, l] = (c = {
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
          }, F.useReducer((e, t) => c[e][t] ?? e, "hidden"));
          var c;
          return F.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, l]), F.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (l("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, l, s]), (0, E.jsx)(ld.C, {
            present: r || "hidden" !== i,
            children: (0, E.jsx)(Dh, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, td.mK)(e.onPointerEnter, () => l("POINTER_ENTER")),
              onPointerLeave: (0, td.mK)(e.onPointerLeave, () => l("POINTER_LEAVE"))
            })
          })
        }),
        kh = F.forwardRef((e, t) => {
          const r = Eh(jh, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = F.useState(!1),
            i = "horizontal" === e.orientation,
            l = Jh(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return ep(r.viewport, l), ep(r.content, l), (0, E.jsx)(ld.C, {
            present: n || a,
            children: (0, E.jsx)(Dh, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Dh = F.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Eh(jh, e.__scopeScrollArea), a = F.useRef(null), s = F.useRef(0), [i, l] = F.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = Kh(i.viewport, i.content), u = {
            ...n,
            sizes: i,
            onSizesChange: l,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function d(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Wh(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                c = r.content - r.viewport;
              return $h([i, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, E.jsx)(Lh, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Zh(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = d(e, o.dir))
            }
          }) : "vertical" === r ? (0, E.jsx)(Ah, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Zh(o.viewport.scrollTop, i);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
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
        Lh = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Eh(jh, e.__scopeScrollArea), [s, i] = F.useState(), l = F.useRef(null), c = (0, rd.s)(t, l, a.onScrollbarXChange);
          return F.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, E.jsx)(Hh, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Wh(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Yh(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: l.current.clientWidth,
                  paddingStart: Xh(s.paddingLeft),
                  paddingEnd: Xh(s.paddingRight)
                }
              })
            }
          })
        }),
        Ah = F.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Eh(jh, e.__scopeScrollArea), [s, i] = F.useState(), l = F.useRef(null), c = (0, rd.s)(t, l, a.onScrollbarYChange);
          return F.useEffect(() => {
            l.current && i(getComputedStyle(l.current))
          }, [l]), (0, E.jsx)(Hh, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Wh(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Yh(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              l.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: l.current.clientHeight,
                  paddingStart: Xh(s.paddingTop),
                  paddingEnd: Xh(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Mh, Bh] = xh(jh),
        Hh = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: l,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: d,
            ...f
          } = e, h = Eh(jh, r), [p, m] = F.useState(null), v = (0, rd.s)(t, e => m(e)), y = F.useRef(null), g = F.useRef(""), b = h.viewport, _ = n.content - n.viewport, w = (0, bh.c)(u), x = (0, bh.c)(l), P = Jh(d, 10);

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
          return F.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && w(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, p, _, w]), F.useEffect(x, [n, x]), ep(p, P), ep(h.content, P), (0, E.jsx)(Mh, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: (0, bh.c)(a),
            onThumbPointerUp: (0, bh.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, bh.c)(i),
            children: (0, E.jsx)(cd.sG.div, {
              ...f,
              ref: v,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, td.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = p.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, td.mK)(e.onPointerMove, C),
              onPointerUp: (0, td.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        zh = "ScrollAreaThumb",
        Vh = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Bh(zh, e.__scopeScrollArea);
          return (0, E.jsx)(ld.C, {
            present: r || o.hasThumb,
            children: (0, E.jsx)(Fh, {
              ref: t,
              ...n
            })
          })
        }),
        Fh = F.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Eh(zh, r), s = Bh(zh, r), {
            onThumbPositionChange: i
          } = s, l = (0, rd.s)(t, e => s.onThumbChange(e)), c = F.useRef(void 0), u = Jh(() => {
            c.current && (c.current(), c.current = void 0)
          }, 100);
          return F.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = Qh(e, i);
                  c.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, u, i]), (0, E.jsx)(cd.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: l,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, td.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, td.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      Vh.displayName = zh;
      var Gh = "ScrollAreaCorner",
        Uh = F.forwardRef((e, t) => {
          const r = Eh(Gh, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, E.jsx)(qh, {
            ...e,
            ref: t
          }) : null
        });
      Uh.displayName = Gh;
      var qh = F.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Eh(Gh, r), [a, s] = F.useState(0), [i, l] = F.useState(0), c = Boolean(a && i);
        return ep(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), l(e)
        }), ep(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), c ? (0, E.jsx)(cd.sG.div, {
          ...n,
          ref: t,
          style: {
            width: a,
            height: i,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function Xh(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Kh(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Wh(e) {
        const t = Kh(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Zh(e, t, r = "ltr") {
        const n = Wh(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          l = ef(e, "ltr" === r ? [0, s] : [-1 * s, 0]);
        return $h([0, s], [0, i])(l)
      }

      function $h(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Yh(e, t) {
        return e > 0 && e < t
      }
      var Qh = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            s = r.left !== a.left,
            i = r.top !== a.top;
          (s || i) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function Jh(e, t) {
        const r = (0, bh.c)(e),
          n = F.useRef(0);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), F.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function ep(e, t) {
        const r = (0, bh.c)(t);
        (0, _h.N)(() => {
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
      var tp = Sh,
        rp = Th,
        np = Nh,
        op = Vh,
        ap = Uh,
        sp = r(15234),
        ip = r(49715),
        lp = r(92302),
        cp = r(83674),
        up = r(18692),
        dp = r(94926),
        fp = r(82422),
        hp = [" ", "Enter", "ArrowUp", "ArrowDown"],
        pp = [" ", "Enter"],
        mp = "Select",
        [vp, yp, gp] = (0, of.N)(mp),
        [bp, _p] = (0, nd.A)(mp, [gp, sd.Bk]),
        wp = (0, sd.Bk)(),
        [xp, Pp] = bp(mp),
        [Cp, Ep] = bp(mp),
        Sp = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: s,
            defaultValue: i,
            onValueChange: l,
            dir: c,
            name: u,
            autoComplete: d,
            disabled: f,
            required: h,
            form: p
          } = e, m = wp(t), [v, y] = F.useState(null), [g, b] = F.useState(null), [_, w] = F.useState(!1), x = (0, tf.jH)(c), [P, C] = (0, dd.useControllableState)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: mp
          }), [S, O] = (0, dd.useControllableState)({
            prop: s,
            defaultProp: i,
            onChange: l,
            caller: mp
          }), T = F.useRef(null), j = !v || p || !!v.closest("form"), [N, R] = F.useState(new Set), I = Array.from(N).map(e => e.props.value).join(";");
          return (0, E.jsx)(sd.bL, {
            ...m,
            children: (0, E.jsxs)(xp, {
              required: h,
              scope: t,
              trigger: v,
              onTriggerChange: y,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: _,
              onValueNodeHasChildrenChange: w,
              contentId: (0, ad.useId)(),
              value: S,
              onValueChange: O,
              open: P,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: T,
              disabled: f,
              children: [(0, E.jsx)(vp.Provider, {
                scope: t,
                children: (0, E.jsx)(Cp, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: F.useCallback(e => {
                    R(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: F.useCallback(e => {
                    R(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), j ? (0, E.jsxs)(im, {
                "aria-hidden": !0,
                required: h,
                tabIndex: -1,
                name: u,
                autoComplete: d,
                value: S,
                onChange: e => O(e.target.value),
                disabled: f,
                form: p,
                children: [void 0 === S ? (0, E.jsx)("option", {
                  value: ""
                }) : null, Array.from(N)]
              }, I) : null]
            })
          })
        };
      Sp.displayName = mp;
      var Op = "SelectTrigger",
        Tp = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = wp(r), s = Pp(Op, r), i = s.disabled || n, l = (0, rd.s)(t, s.onTriggerChange), c = yp(r), u = F.useRef("touch"), [d, f, h] = cm(e => {
            const t = c().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = um(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), p = e => {
            i || (s.onOpenChange(!0), h()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, E.jsx)(sd.Mz, {
            asChild: !0,
            ...a,
            children: (0, E.jsx)(cd.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": lm(s.value) ? "" : void 0,
              ...o,
              ref: l,
              onClick: (0, td.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== u.current && p(e)
              }),
              onPointerDown: (0, td.mK)(o.onPointerDown, e => {
                u.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (p(e), e.preventDefault())
              }),
              onKeyDown: (0, td.mK)(o.onKeyDown, e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || hp.includes(e.key) && (p(), e.preventDefault())
              })
            })
          })
        });
      Tp.displayName = Op;
      var jp = "SelectValue",
        Np = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, l = Pp(jp, r), {
            onValueNodeHasChildrenChange: c
          } = l, u = void 0 !== a, d = (0, rd.s)(t, l.onValueNodeChange);
          return (0, _h.N)(() => {
            c(u)
          }, [c, u]), (0, E.jsx)(cd.sG.span, {
            ...i,
            ref: d,
            style: {
              pointerEvents: "none"
            },
            children: lm(l.value) ? (0, E.jsx)(E.Fragment, {
              children: s
            }) : a
          })
        });
      Np.displayName = jp;
      var Rp = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, E.jsx)(cd.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Rp.displayName = "SelectIcon";
      var Ip = e => (0, E.jsx)(lp.Portal, {
        asChild: !0,
        ...e
      });
      Ip.displayName = "SelectPortal";
      var kp = "SelectContent",
        Dp = F.forwardRef((e, t) => {
          const r = Pp(kp, e.__scopeSelect),
            [n, o] = F.useState();
          if ((0, _h.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? zu.createPortal((0, E.jsx)(Ap, {
              scope: e.__scopeSelect,
              children: (0, E.jsx)(vp.Slot, {
                scope: e.__scopeSelect,
                children: (0, E.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, E.jsx)(Hp, {
            ...e,
            ref: t
          })
        });
      Dp.displayName = kp;
      var Lp = 10,
        [Ap, Mp] = bp(kp),
        Bp = (0, cp.createSlot)("SelectContent.RemoveScroll"),
        Hp = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
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
          } = e, g = Pp(kp, r), [b, _] = F.useState(null), [w, x] = F.useState(null), P = (0, rd.s)(t, e => _(e)), [C, S] = F.useState(null), [O, T] = F.useState(null), j = yp(r), [N, R] = F.useState(!1), I = F.useRef(!1);
          F.useEffect(() => {
            if (b) return (0, dp.Eq)(b)
          }, [b]), (0, sp.Oh)();
          const k = F.useCallback(e => {
              const [t, ...r] = j().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [j, w]),
            D = F.useCallback(() => k([C, b]), [k, C, b]);
          F.useEffect(() => {
            N && D()
          }, [N, D]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = g;
          F.useEffect(() => {
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
          }, [b, L, A]), F.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [M, B] = cm(e => {
            const t = j().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = um(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), H = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && (S(e), n && (I.current = !0))
          }, [g.value]), z = F.useCallback(() => b?.focus(), [b]), V = F.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== g.value && g.value === t || n) && T(e)
          }, [g.value]), G = "popper" === n ? Vp : zp, U = G === Vp ? {
            side: i,
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
          return (0, E.jsx)(Ap, {
            scope: r,
            content: b,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: H,
            selectedItem: C,
            onItemLeave: z,
            itemTextRefCallback: V,
            focusSelectedItem: D,
            selectedItemText: O,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, E.jsx)(fp.RemoveScroll, {
              as: Bp,
              allowPinchZoom: !0,
              children: (0, E.jsx)(ip.FocusScope, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, td.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, E.jsx)(od.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, E.jsx)(G, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...U,
                    onPlaced: () => R(!0),
                    ref: P,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, td.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = j().filter(e => !e.disabled);
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
      Hp.displayName = "SelectContentImpl";
      var zp = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Pp(kp, r), s = Mp(kp, r), [i, l] = F.useState(null), [c, u] = F.useState(null), d = (0, rd.s)(t, e => u(e)), f = yp(r), h = F.useRef(!1), p = F.useRef(!0), {
          viewport: m,
          selectedItem: v,
          selectedItemText: y,
          focusSelectedItem: g
        } = s, b = F.useCallback(() => {
          if (a.trigger && a.valueNode && i && c && m && v && y) {
            const e = a.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - Lp,
                d = ef(a, [Lp, Math.max(Lp, u - c)]);
              i.style.minWidth = l + "px", i.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                l = e.width + s,
                c = Math.max(l, t.width),
                u = window.innerWidth - Lp,
                d = ef(a, [Lp, Math.max(Lp, u - c)]);
              i.style.minWidth = l + "px", i.style.right = d + "px"
            }
            const s = f(),
              l = window.innerHeight - 2 * Lp,
              u = m.scrollHeight,
              d = window.getComputedStyle(c),
              p = parseInt(d.borderTopWidth, 10),
              g = parseInt(d.paddingTop, 10),
              b = parseInt(d.borderBottomWidth, 10),
              _ = p + g + u + parseInt(d.paddingBottom, 10) + b,
              w = Math.min(5 * v.offsetHeight, _),
              x = window.getComputedStyle(m),
              P = parseInt(x.paddingTop, 10),
              C = parseInt(x.paddingBottom, 10),
              E = e.top + e.height / 2 - Lp,
              S = l - E,
              O = v.offsetHeight / 2,
              T = p + g + (v.offsetTop + O),
              j = _ - T;
            if (T <= E) {
              const e = s.length > 0 && v === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = c.clientHeight - m.offsetTop - m.offsetHeight,
                r = T + Math.max(S, O + (e ? C : 0) + t + b);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && v === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(E, p + m.offsetTop + (e ? P : 0) + O) + j;
              i.style.height = t + "px", m.scrollTop = T - E + m.offsetTop
            }
            i.style.margin = `${Lp}px 0`, i.style.minHeight = w + "px", i.style.maxHeight = l + "px", n?.(), requestAnimationFrame(() => h.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, c, m, v, y, a.dir, n]);
        (0, _h.N)(() => b(), [b]);
        const [_, w] = F.useState();
        (0, _h.N)(() => {
          c && w(window.getComputedStyle(c).zIndex)
        }, [c]);
        const x = F.useCallback(e => {
          e && !0 === p.current && (b(), g?.(), p.current = !1)
        }, [b, g]);
        return (0, E.jsx)(Fp, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: x,
          children: (0, E.jsx)("div", {
            ref: l,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, E.jsx)(cd.sG.div, {
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
      zp.displayName = "SelectItemAlignedPosition";
      var Vp = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Lp,
          ...a
        } = e, s = wp(r);
        return (0, E.jsx)(sd.UC, {
          ...s,
          ...a,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      Vp.displayName = "SelectPopperPosition";
      var [Fp, Gp] = bp(kp, {}), Up = "SelectViewport", qp = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = Mp(Up, r), s = Gp(Up, r), i = (0, rd.s)(t, a.onViewportChange), l = F.useRef(0);
        return (0, E.jsxs)(E.Fragment, {
          children: [(0, E.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, E.jsx)(vp.Slot, {
            scope: r,
            children: (0, E.jsx)(cd.sG.div, {
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
              onScroll: (0, td.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(l.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Lp,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      s = Math.max(o, a);
                    if (s < n) {
                      const o = s + e,
                        a = Math.min(n, o),
                        i = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                l.current = t.scrollTop
              })
            })
          })]
        })
      });
      qp.displayName = Up;
      var Xp = "SelectGroup",
        [Kp, Wp] = bp(Xp);
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ad.useId)();
        return (0, E.jsx)(Kp, {
          scope: r,
          id: o,
          children: (0, E.jsx)(cd.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Xp;
      var Zp = "SelectLabel";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Wp(Zp, r);
        return (0, E.jsx)(cd.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Zp;
      var $p = "SelectItem",
        [Yp, Qp] = bp($p),
        Jp = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Pp($p, r), l = Mp($p, r), c = i.value === n, [u, d] = F.useState(a ?? ""), [f, h] = F.useState(!1), p = (0, rd.s)(t, e => l.itemRefCallback?.(e, n, o)), m = (0, ad.useId)(), v = F.useRef("touch"), y = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, E.jsx)(Yp, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: c,
            onItemTextChange: F.useCallback(e => {
              d(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, E.jsx)(vp.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, E.jsx)(cd.sG.div, {
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
                onFocus: (0, td.mK)(s.onFocus, () => h(!0)),
                onBlur: (0, td.mK)(s.onBlur, () => h(!1)),
                onClick: (0, td.mK)(s.onClick, () => {
                  "mouse" !== v.current && y()
                }),
                onPointerUp: (0, td.mK)(s.onPointerUp, () => {
                  "mouse" === v.current && y()
                }),
                onPointerDown: (0, td.mK)(s.onPointerDown, e => {
                  v.current = e.pointerType
                }),
                onPointerMove: (0, td.mK)(s.onPointerMove, e => {
                  v.current = e.pointerType, o ? l.onItemLeave?.() : "mouse" === v.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, td.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && l.onItemLeave?.()
                }),
                onKeyDown: (0, td.mK)(s.onKeyDown, e => {
                  "" !== l.searchRef?.current && " " === e.key || (pp.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Jp.displayName = $p;
      var em = "SelectItemText",
        tm = F.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Pp(em, r), i = Mp(em, r), l = Qp(em, r), c = Ep(em, r), [u, d] = F.useState(null), f = (0, rd.s)(t, e => d(e), l.onItemTextChange, e => i.itemTextRefCallback?.(e, l.value, l.disabled)), h = u?.textContent, p = F.useMemo(() => (0, E.jsx)("option", {
            value: l.value,
            disabled: l.disabled,
            children: h
          }, l.value), [l.disabled, l.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: v
          } = c;
          return (0, _h.N)(() => (m(p), () => v(p)), [m, v, p]), (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(cd.sG.span, {
              id: l.textId,
              ...a,
              ref: f
            }), l.isSelected && s.valueNode && !s.valueNodeHasChildren ? zu.createPortal(a.children, s.valueNode) : null]
          })
        });
      tm.displayName = em;
      var rm = "SelectItemIndicator";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Qp(rm, r).isSelected ? (0, E.jsx)(cd.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = rm;
      var nm = "SelectScrollUpButton";
      F.forwardRef((e, t) => {
        const r = Mp(nm, e.__scopeSelect),
          n = Gp(nm, e.__scopeSelect),
          [o, a] = F.useState(!1),
          s = (0, rd.s)(t, n.onScrollButtonChange);
        return (0, _h.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, E.jsx)(am, {
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
      }).displayName = nm;
      var om = "SelectScrollDownButton";
      F.forwardRef((e, t) => {
        const r = Mp(om, e.__scopeSelect),
          n = Gp(om, e.__scopeSelect),
          [o, a] = F.useState(!1),
          s = (0, rd.s)(t, n.onScrollButtonChange);
        return (0, _h.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, E.jsx)(am, {
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
      }).displayName = om;
      var am = F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = Mp("SelectScrollButton", r), s = F.useRef(null), i = yp(r), l = F.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return F.useEffect(() => () => l(), [l]), (0, _h.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, E.jsx)(cd.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, td.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, td.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, td.mK)(o.onPointerLeave, () => {
            l()
          })
        })
      });
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, E.jsx)(cd.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var sm = "SelectArrow";
      F.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = wp(r), a = Pp(sm, r), s = Mp(sm, r);
        return a.open && "popper" === s.position ? (0, E.jsx)(sd.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = sm;
      var im = F.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = F.useRef(null),
          a = (0, rd.s)(n, o),
          s = (0, rf.Z)(t);
        return F.useEffect(() => {
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
        }, [s, t]), (0, E.jsx)(cd.sG.select, {
          ...r,
          style: {
            ...up.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function lm(e) {
        return "" === e || void 0 === e
      }

      function cm(e) {
        const t = (0, bh.c)(e),
          r = F.useRef(""),
          n = F.useRef(0),
          o = F.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = F.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return F.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function um(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const l = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return l !== r ? l : void 0
      }
      im.displayName = "SelectBubbleInput";
      var dm = Sp,
        fm = Tp,
        hm = Np,
        pm = Rp,
        mm = Ip,
        vm = Dp,
        ym = qp,
        gm = Jp,
        bm = tm;

      function _m(e) {
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

      function wm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function xm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wm(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = _m(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Pm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Em = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xm(xm({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Cm(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pm(e.variantClassNames, e => Pm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sm = Em({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Om = Em({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Tm = Em({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        jm = Em({
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
        Nm = Em({
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
        Rm = Em({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Im = (0, F.createContext)(null);

      function km() {
        const e = (0, F.useContext)(Im);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Dm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: l,
          defaultOpen: c,
          onOpenChange: u,
          isOpen: d,
          size: f = "MD",
          status: h = "neutral",
          ...p
        }, m) => {
          const v = (0, F.useRef)(null),
            y = (0, Se.UP)(v, m),
            g = (0, F.useId)(),
            b = (0, F.useId)(),
            _ = (0, F.useId)(),
            w = (0, F.useId)(),
            x = (0, F.useId)(),
            P = (0, F.useId)(),
            [C = !1, S] = (0, Se.ic)({
              prop: d,
              defaultProp: c,
              onChange: u
            }),
            O = (0, X.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, p);
          return (0, E.jsx)(Im.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: _,
              triggerId: P,
              hintId: w,
              popoverId: x,
              defaultValue: a,
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
            children: (0, E.jsx)(dm, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => S(!o && !C),
              value: l,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, E.jsx)("div", {
                ref: y,
                ...O,
                children: e
              })
            })
          })
        }),
        Lm = (0, F.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = km(), s = (0, X.mergeProps)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Sm({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, E.jsx)(vm, {
            ...s,
            ref: o,
            children: (0, E.jsx)(ym, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Am = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, E.jsxs)(tp, {
            ...o,
            ref: n,
            children: [(0, E.jsx)(ym, {
              asChild: !0,
              children: (0, E.jsx)(rp, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, E.jsx)(np, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, E.jsx)(op, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Mm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, s) => {
          const {
            isReadOnly: i,
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
          } = km(), {
            isPressed: g,
            pressProps: b
          } = (0, ih.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), _ = (0, X.mergeProps)({
            id: f,
            className: Nm({
              size: y,
              isReadOnly: !!i,
              isInvalid: "invalid" === l,
              isPressed: !!g,
              isDisabled: !!c
            }),
            "aria-labelledby": (0, X.joinStrings)(r, u, d),
            "aria-describedby": (0, X.joinStrings)(n, p),
            "aria-activedescendant": v,
            "aria-controls": h,
            "aria-invalid": "invalid" === l,
            "data-state": m ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, X.omit)(b, "onKeyDown"), a), w = o ? Oe.DX : fm;
          return (0, E.jsx)(w, {
            ..._,
            ref: s,
            children: e
          })
        }),
        Bm = (0, F.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? Oe.DX : "span";
          return (0, E.jsx)(s, {
            ...a,
            ref: o,
            children: (0, E.jsx)(hm, {
              placeholder: e
            })
          })
        }),
        Hm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = km(), i = s ? He.ChevronUp : He.ChevronDown, l = (0, X.mergeProps)({
            asChild: !0,
            className: Rm({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, E.jsx)(pm, {
            ...l,
            ref: n,
            children: e || (0, E.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        zm = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: l,
            labelId: c,
            triggerId: u
          } = km(), d = i && !o, f = (0, X.mergeProps)({
            id: a.id || c,
            htmlFor: u,
            "data-testid": e,
            className: jm({
              showAsterisk: d,
              isDisabled: l
            })
          }, a), h = t ? Oe.DX : "label";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(h, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        Vm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = km(), i = (0, X.mergeProps)({
            className: Om({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Fm = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = km(), i = (0, X.mergeProps)({
            className: Tm({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Gm = (0, F.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, F.useRef)(null),
            i = (0, Se.UP)(s, a),
            l = (0, X.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, E.jsx)(gm, {
            ref: i,
            ...l,
            children: e
          })
        }),
        Um = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, E.jsx)(bm, {
            ref: n,
            asChild: !0,
            children: (0, E.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        qm = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, E.jsx)(pm, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Xm = mm,
        Km = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = km(), i = (0, X.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), l = r ? Oe.DX : vh;
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Wm = yh,
        Zm = gh;
      var $m = r(13569),
        Ym = r(64720),
        Qm = r(99098),
        Jm = r(79888);

      function ev(e, t, r) {
        let n = (0, Jm.J)(() => {
          r && r(t)
        });
        (0, F.useEffect)(() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", n), () => {
            null == r || r.removeEventListener("reset", n)
          }
        }, [e])
      }
      var tv, rv = r(52061);

      function nv(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: a,
          name: s,
          form: i,
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
        } = (0, ih.d)({
          onPressStart: h,
          onPressEnd: p,
          onPressChange: m,
          onPress: v,
          onPressUp: y,
          onClick: g,
          isDisabled: n
        }), {
          pressProps: w,
          isPressed: x
        } = (0, ih.d)({
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
        } = (0, rv.Wc)(e, r), C = (0, Ym.v)(b, P), E = (0, Qm.$)(e, {
          labelable: !0
        });
        return ev(r, t.defaultSelected, t.setSelected), {
          labelProps: (0, Ym.v)(w, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, Ym.v)(E, {
            "aria-invalid": f || "invalid" === d || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected((0, $m.wt)(e).checked)
            },
            disabled: n,
            ...null == a ? {} : {
              value: a
            },
            name: s,
            form: i,
            type: "checkbox",
            ...C
          }),
          isSelected: t.isSelected,
          isPressed: _ || x,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: f || "invalid" === d
        }
      }
      const ov = "undefined" != typeof document ? null !== (tv = F.useInsertionEffect) && void 0 !== tv ? tv : F.useLayoutEffect : () => {};

      function av(e, t, r) {
        let [n, o] = (0, F.useState)(e || t), a = (0, F.useRef)(n), s = (0, F.useRef)(void 0 !== e), i = void 0 !== e;
        (0, F.useEffect)(() => {
          s.current, s.current = i
        }, [i]);
        let l = i ? e : n;
        ov(() => {
          a.current = l
        });
        let [, c] = (0, F.useReducer)(() => ({}), {}), u = (0, F.useCallback)((e, ...t) => {
          let n = "function" == typeof e ? e(a.current) : e;
          Object.is(a.current, n) || (a.current = n, o(n), c(), null == r || r(n, ...t))
        }, [r]);
        return [l, u]
      }

      function sv(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = av(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = (0, F.useState)(r);
        var a;
        return {
          isSelected: r,
          defaultSelected: null !== (a = e.defaultSelected) && void 0 !== a ? a : o,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function iv(e) {
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

      function lv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = iv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function uv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cv(cv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) dv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uv(e.variantClassNames, e => uv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hv = fv({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pv = fv({
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
        mv = fv({
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
        vv = fv({
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
        yv = fv({
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
      const gv = (0, F.createContext)(null);

      function bv() {
        const e = (0, F.useContext)(gv);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const _v = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, l) => {
          const c = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            u = n ? Oe.DX : "div",
            d = (0, F.useId)(),
            f = (0, F.useId)(),
            h = (0, F.useId)();
          return (0, E.jsx)(gv.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: d,
              descriptionId: f,
              inputId: h,
              isDisabled: a,
              isReadOnly: s,
              ...i
            },
            children: (0, E.jsx)(u, {
              ...c,
              ref: l,
              children: o
            })
          })
        }),
        wv = (0, F.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: a,
          isSelected: s,
          defaultSelected: i,
          onSelectedChange: l,
          name: c,
          value: u,
          ...d
        }, f) => {
          const h = (0, F.useRef)(null),
            p = (0, Se.UP)(h, f),
            {
              size: m,
              appearance: v,
              inputId: y,
              labelId: g,
              descriptionId: b,
              isDisabled: _,
              isReadOnly: w
            } = bv(),
            x = sv({
              isDisabled: _,
              isReadOnly: w,
              isSelected: s,
              defaultSelected: i,
              onChange: l
            }),
            {
              inputProps: P
            } = function(e, t, r) {
              let {
                labelProps: n,
                inputProps: o,
                isSelected: a,
                isPressed: s,
                isDisabled: i,
                isReadOnly: l
              } = nv(e, t, r);
              return {
                labelProps: n,
                inputProps: {
                  ...o,
                  role: "switch",
                  checked: a
                },
                isSelected: a,
                isPressed: s,
                isDisabled: i,
                isReadOnly: l
              }
            }({
              id: a || y,
              "aria-labelledby": (0, X.joinStrings)(n, g),
              "aria-describedby": (0, X.joinStrings)(o, b),
              name: c,
              value: u,
              isDisabled: _,
              isReadOnly: w
            }, x, h),
            C = (0, X.mergeProps)({
              className: yv({
                appearance: v
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": _ || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || _ || w || x.toggle()
              }
            }, d);
          return (0, E.jsxs)("div", {
            ...C,
            children: [(0, E.jsx)(Oe.s6, {
              children: (0, E.jsx)("input", {
                ...P,
                ref: p
              })
            }), (0, E.jsx)("div", {
              className: vv({
                size: m
              }),
              "aria-hidden": "true",
              children: (0, E.jsx)("div", {
                className: pv({
                  size: m,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        xv = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            isDisabled: s,
            labelId: i,
            inputId: l,
            size: c
          } = bv(), u = (0, X.mergeProps)({
            id: o.id || i,
            htmlFor: l,
            "data-testid": e,
            className: mv({
              isDisabled: s,
              size: c
            })
          }, o), d = t ? Oe.DX : "label";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(d, {
              ...u,
              ref: a,
              children: r
            })
          })
        }),
        Pv = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = bv(), i = n.id || s, l = (0, X.mergeProps)({
            className: hv({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), c = t ? Oe.DX : "div";
          return (0, E.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        Cv = {
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
        Ev = {
          ...Cv,
          customError: !0,
          valid: !1
        },
        Sv = {
          isInvalid: !1,
          validationDetails: Cv,
          validationErrors: []
        },
        Ov = (0, F.createContext)({}),
        Tv = "__formValidationState" + Date.now();

      function jv(e) {
        if (e[Tv]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          } = e[Tv];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: a,
            validate: s,
            validationBehavior: i = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let l = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Ev
            } : null,
            c = (0, F.useMemo)(() => {
              if (!s || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Nv(r)
                }
                return []
              }(s, o);
              return Rv(e)
            }, [s, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = void 0);
          let u = (0, F.useContext)(Ov),
            d = (0, F.useMemo)(() => n ? Array.isArray(n) ? n.flatMap(e => Nv(u[e])) : Nv(u[n]) : [], [u, n]),
            [f, h] = (0, F.useState)(u),
            [p, m] = (0, F.useState)(!1);
          u !== f && (h(u), m(!1));
          let v = (0, F.useMemo)(() => Rv(p ? [] : d), [p, d]),
            y = (0, F.useRef)(Sv),
            [g, b] = (0, F.useState)(Sv),
            _ = (0, F.useRef)(Sv),
            [w, x] = (0, F.useState)(!1);
          return (0, F.useEffect)(() => {
            if (!w) return;
            x(!1);
            let e = c || a || y.current;
            Iv(e, _.current) || (_.current = e, b(e))
          }), {
            realtimeValidation: l || v || c || a || Sv,
            displayValidation: "native" === i ? l || v || g : l || v || c || a || g,
            updateValidation(e) {
              "aria" !== i || Iv(g, e) ? y.current = e : b(e)
            },
            resetValidation() {
              let e = Sv;
              Iv(e, _.current) || (_.current = e, b(e)), "native" === i && x(!1), m(!0)
            },
            commitValidation() {
              "native" === i && x(!0), m(!0)
            }
          }
        }(e)
      }

      function Nv(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Rv(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Ev
        } : null
      }

      function Iv(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, r) => e === t.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => t.validationDetails[e] === r)
      }
      var kv = r(28830),
        Dv = r(38223);

      function Lv(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        (0, kv.N)(() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: Av(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        });
        let a = (0, F.useRef)(!1),
          s = (0, Jm.J)(() => {
            a.current || t.resetValidation()
          }),
          i = (0, Jm.J)(e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var s;
            !e.defaultPrevented && r && a && function(e) {
              for (let r = 0; r < e.elements.length; r++) {
                var t;
                let n = e.elements[r];
                if (!1 === (null === (t = n.validity) || void 0 === t ? void 0 : t.valid)) return n
              }
              return null
            }(a) === r.current && (o ? o() : null === (s = r.current) || void 0 === s || s.focus(), (0, Dv.Cl)("keyboard")), e.preventDefault()
          }),
          l = (0, Jm.J)(() => {
            t.commitValidation()
          });
        (0, F.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            n = null == t ? void 0 : t.reset;
          return t && (t.reset = () => {
            a.current = !window.event || "message" === window.event.type && (0, $m.wt)(window.event) instanceof MessagePort, null == n || n.call(t), a.current = !1
          }), e.addEventListener("invalid", i), e.addEventListener("change", l), null == t || t.addEventListener("reset", s), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", s), t && (t.reset = n)
          }
        }, [r, n])
      }

      function Av(e) {
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
      const Mv = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Bv = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Hv = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        zv = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Vv = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Fv = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, E.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Gv(e) {
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

      function qv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Gv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Kv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qv(qv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Kv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xv(e.variantClassNames, e => Xv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Zv = Wv({
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
        $v = Wv({
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
        Yv = Wv({
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
        Qv = Wv({
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
        Jv = Wv({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ey = Wv({
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
      const ty = (0, F.createContext)(null);

      function ry() {
        const e = (0, F.useContext)(ty);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const ny = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, X.omit)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            l = n ? Oe.DX : "div",
            c = (0, F.useId)(),
            u = (0, F.useId)(),
            d = (0, F.useId)();
          return (0, E.jsx)(ty.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: c,
              descriptionId: u,
              inputId: d,
              ...a
            },
            children: (0, E.jsx)(l, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        oy = (0, F.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: a,
          onClick: s,
          "aria-describedby": l,
          "aria-errormessage": c,
          "aria-labelledby": u,
          className: d,
          ...f
        }, h) => {
          const {
            size: p,
            appearance: m,
            isIndeterminate: v,
            isRequired: y,
            descriptionId: g,
            labelId: b,
            inputId: _,
            ...w
          } = ry(), x = (0, F.useRef)(null), P = f.id || _, {
            isPressed: C,
            pressProps: S
          } = (0, ih.d)({
            ref: x
          }), {
            setSelected: O,
            toggle: T,
            ...j
          } = sv({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: R,
            isDisabled: I,
            isReadOnly: k
          } = function(e, t, r) {
            let n = jv({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: a,
                validationDetails: s
              } = n.displayValidation,
              {
                labelProps: i,
                inputProps: l,
                isSelected: c,
                isPressed: u,
                isDisabled: d,
                isReadOnly: f
              } = nv({
                ...e,
                isInvalid: o
              }, t, r);
            Lv(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: p,
              validationBehavior: m = "aria"
            } = e;
            (0, F.useEffect)(() => {
              r.current && (r.current.indeterminate = !!h)
            });
            let {
              pressProps: v
            } = (0, ih.d)({
              isDisabled: d || f,
              onPress() {
                let {
                  [Tv]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: (0, Ym.v)(i, v, (0, F.useMemo)(() => ({
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
              validationErrors: a,
              validationDetails: s
            }
          }({
            "aria-label": "",
            id: P,
            name: o,
            ...w
          }, {
            ...j,
            toggle: T,
            setSelected: w.isReadOnly ? () => !1 : O
          }, x), D = (0, X.mergeProps)({
            className: $v({
              size: p
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || I || k || T()
            }
          }, S, f), L = (0, X.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, X.joinStrings)(u, b),
            "aria-describedby": (0, X.joinStrings)(l, g),
            "aria-errormessage": (0, X.joinStrings)(c, w.isInvalid ? g : void 0),
            "aria-required": y,
            required: y
          }, N), A = v ? i[`Dash${p}`] : i[`Check${p}`];
          return (0, E.jsxs)("div", {
            ...D,
            children: [(0, E.jsx)(Oe.s6, {
              children: (0, E.jsx)("input", {
                ...L,
                ref: h
              })
            }), (0, E.jsx)("div", {
              className: (0, Be.clsx)(Zv({
                size: p,
                appearance: m
              }), d),
              "aria-hidden": "true",
              "data-state": v ? "mixed" : R ? "checked" : "unchecked",
              "data-disabled": I || k,
              "data-testid": e,
              "data-pressed": C,
              children: (0, E.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (R || v) && (0, E.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        ay = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            size: i,
            labelId: l,
            inputId: c,
            isRequired: u
          } = ry(), d = a.id || l, f = u && !o, h = (0, X.mergeProps)({
            className: ey({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: d,
            htmlFor: a.htmlFor || c
          }, a), p = t ? Oe.DX : "label";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(p, {
              ...h,
              ref: s,
              children: e
            })
          })
        }),
        sy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = ry(), i = n.id || s, l = (0, X.mergeProps)({
            className: Yv({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), c = t ? Oe.DX : "div";
          return (0, E.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        iy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = ry(), s = n.id || a, i = (0, X.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
            "data-testid": r,
            id: s
          }, n), l = t ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ly = (0, F.createContext)(null);

      function cy() {
        const e = (0, F.useContext)(ly);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const uy = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, l] = (0, F.useState)(null), [c, u] = (0, F.useState)(null), d = [i, c].filter(Boolean).join(" "), f = (0, X.mergeProps)({
            "data-testid": e,
            "aria-describedby": d,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), h = t ? Oe.DX : "fieldset";
          return (0, E.jsx)(ly.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: c,
              setDescriptionId: l,
              setErrorTextId: u
            },
            children: (0, E.jsx)(h, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        dy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: a,
          ...s
        }, i) => {
          const {
            isRequired: l
          } = cy(), c = l && !a, u = (0, X.mergeProps)({
            "data-testid": r,
            className: Jv({
              showAsterisk: c
            })
          }, s), d = t ? Oe.DX : "legend";
          return (0, E.jsx)(Oe.s6, {
            enabled: o,
            children: (0, E.jsxs)(d, {
              ...u,
              ref: i,
              children: [(0, E.jsx)(Oe.xV, {
                children: e
              }), !l && (0, E.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        fy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = cy(), s = (0, F.useId)(), i = n.id || s;
          (0, F.useEffect)(() => {
            a(i)
          }, [a, i]);
          const l = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg",
              id: i
            }, n),
            c = t ? Oe.DX : "div";
          return (0, E.jsx)(c, {
            ...l,
            ref: o,
            children: e
          })
        }),
        hy = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = cy(), s = (0, X.mergeProps)({
            "data-testid": r,
            className: Qv({
              size: a
            })
          }, n), i = t ? Oe.DX : "div";
          return (0, E.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        py = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = cy(), s = (0, F.useId)(), i = n.id || s;
          (0, F.useEffect)(() => {
            a(i)
          }, [a, i]);
          const l = (0, X.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdh"
            }, n),
            c = He.X,
            u = t ? Oe.DX : "div";
          return (0, E.jsxs)(u, {
            ...l,
            ref: o,
            children: [(0, E.jsx)(c, {
              label: "",
              size: "SM"
            }), (0, E.jsx)(Oe.xV, {
              children: e
            })]
          })
        });

      function my(e) {
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

      function vy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = my(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var by = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _y = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yy(yy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) by(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gy(e.variantClassNames, e => gy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wy = _y({
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
        xy = _y({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Py = _y({
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
        Cy = _y({
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
      const Ey = (0, F.createContext)(null);

      function Sy() {
        const e = (0, F.useContext)(Ey);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Oy = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, l) => {
          const c = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            u = e ? Oe.DX : "div",
            d = (0, F.useId)(),
            f = (0, F.useId)(),
            h = (0, F.useId)(),
            p = (0, F.useId)();
          return (0, E.jsx)(Ey.Provider, {
            value: {
              labelId: d,
              descriptionId: f,
              hintId: h,
              inputId: p,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              ...i
            },
            children: (0, E.jsx)(u, {
              ref: l,
              ...c,
              children: t
            })
          })
        }),
        Ty = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            labelId: i,
            inputId: l,
            isDisabled: c,
            isRequired: u
          } = Sy(), d = (0, X.mergeProps)({
            className: Py({
              isDisabled: c,
              showAsterisk: u && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: l
          }, a), f = t ? Oe.DX : "label";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(f, {
              ...d,
              ref: s,
              children: e
            })
          })
        }),
        jy = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: a,
          placeholder: s = " ",
          "aria-labelledby": i,
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
          } = Sy(), b = (0, F.useRef)(null), _ = (0, Se.UP)(b, u), w = (0, X.mergeProps)({
            className: Cy({
              isInvalid: "invalid" === g,
              isDisabled: m,
              isReadOnly: y,
              isSuccess: "success" === g
            }),
            name: a,
            id: c.id || h,
            rows: n,
            defaultValue: o,
            disabled: m,
            required: v,
            readOnly: y,
            placeholder: s,
            "aria-labelledby": (0, X.joinStrings)(c.id, f, p, i),
            "aria-describedby": (0, X.joinStrings)(d, l),
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
          }, c), x = e ? Oe.DX : "textarea";
          return (0, E.jsx)(x, {
            ref: _,
            ...w,
            children: t
          })
        }),
        Ny = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Sy(), i = (0, X.mergeProps)({
            className: wy({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ry = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Sy(), i = (0, X.mergeProps)({
            className: xy({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), l = t ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Iy = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Sy(), i = (0, X.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), l = r ? Oe.DX : vh;
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ky = yh,
        Dy = gh;
      let Ly = Math.round(1e10 * Math.random()),
        Ay = 0;
      const My = new WeakMap;
      var By = r(62993),
        Hy = r(49652),
        zy = r(64732),
        Vy = r(35412);
      class Fy {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, $m.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
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
          return (0, $m.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
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

      function Gy(e, t) {
        return !!e && !!t && t.some(t => (0, $m.sD)(t, e))
      }

      function Uy(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? zy.A : zy.t,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          a = (0, By.TW)(o),
          s = function(e, t, r, n) {
            return (0, Vy.Nf)() ? new Fy(e, t, r, n) : e.createTreeWalker(t, r, n)
          }(a, e || a, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              if ((0, $m.sD)(null == t ? void 0 : t.from, e)) return NodeFilter.FILTER_REJECT;
              if ((null == t ? void 0 : t.tabbable) && "INPUT" === e.tagName && "radio" === e.getAttribute("type")) {
                if (! function(e) {
                    if (e.checked) return !0;
                    const t = function(e) {
                      if (!e.form) return Array.from((0, By.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                      const t = e.form.elements.namedItem(e.name);
                      let r = (0, By.mD)(e);
                      return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                  }(e)) return NodeFilter.FILTER_REJECT;
                if ("INPUT" === s.currentNode.tagName && "radio" === s.currentNode.type && s.currentNode.name === e.name) return NodeFilter.FILTER_REJECT
              }
              return !n(e) || r && !Gy(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s
      }
      class qy {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new Xy({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && Gy(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new qy;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Xy({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Xy {
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

      function Ky(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = (0, Hy.Bi)(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function Wy(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: s
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = (0, Hy.Bi)(t);
          let s = (0, Hy.Bi)(),
            i = {};
          return r && (n = n ? `${s} ${n}` : s, i = {
            id: s,
            htmlFor: "label" === a ? t : void 0
          }), {
            labelProps: i,
            fieldProps: Ky({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), i = (0, Hy.X1)([Boolean(t), Boolean(r), n, o]), l = (0, Hy.X1)([Boolean(t), Boolean(r), n, o]);
        return s = (0, Ym.v)(s, {
          "aria-describedby": [i, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: s,
          descriptionProps: {
            id: i
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      new qy;
      var Zy = r(89839),
        $y = r(73581);
      const Yy = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Qy = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Jy(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return Yy.has(t.script)
        }
        let t = e.split("-")[0];
        return Qy.has(t)
      }
      var eg = r(50336);
      const tg = Symbol.for("react-aria.i18n.locale");

      function rg() {
        let e = "undefined" != typeof window && window[tg] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Jy(e) ? "rtl" : "ltr"
        }
      }
      let ng = rg(),
        og = new Set;

      function ag() {
        ng = rg();
        for (let e of og) e(ng)
      }
      const sg = F.createContext(null);

      function ig() {
        let e = function() {
          let e = (0, eg.wR)(),
            [t, r] = (0, F.useState)(ng);
          return (0, F.useEffect)(() => (0 === og.size && window.addEventListener("languagechange", ag), og.add(r), () => {
            og.delete(r), 0 === og.size && window.removeEventListener("languagechange", ag)
          }), []), e ? {
            locale: "undefined" != typeof window && window[tg] || "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, F.useContext)(sg) || e
      }

      function lg(e, t) {
        let {
          name: r,
          form: n,
          isReadOnly: o,
          isRequired: a,
          isDisabled: s,
          orientation: i = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = ig(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = Wy({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = (0, Qm.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, a = (0, F.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: s,
            removeAllGlobalListeners: i
          } = (0, $y.A)(), l = (0, F.useCallback)(e => {
            (0, $m.sD)(e.currentTarget, (0, $m.wt)(e)) && a.current.isFocusWithin && !(0, $m.sD)(e.currentTarget, e.relatedTarget) && (a.current.isFocusWithin = !1, i(), r && r(e), o && o(!1))
          }, [r, o, a, i]), c = (0, Zy.yB)(l), u = (0, F.useCallback)(e => {
            if (!(0, $m.sD)(e.currentTarget, (0, $m.wt)(e))) return;
            let t = (0, $m.wt)(e);
            const r = (0, By.TW)(t),
              i = (0, $m.bq)(r);
            if (!a.current.isFocusWithin && i === t) {
              n && n(e), o && o(!0), a.current.isFocusWithin = !0, c(e);
              let t = e.currentTarget;
              s(r, "focus", e => {
                let n = (0, $m.wt)(e);
                if (a.current.isFocusWithin && !(0, $m.sD)(t, n)) {
                  let e = new r.defaultView.FocusEvent("blur", {
                    relatedTarget: n
                  });
                  (0, Zy.o1)(e, t);
                  let o = (0, Zy.eg)(e);
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
        }), b = (0, Hy.Bi)(r);
        return My.set(t, {
          name: b,
          form: n,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: (0, Ym.v)(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== i ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== i ? "next" : "prev";
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
              let n, o = Uy(e.currentTarget, {
                from: (0, $m.wt)(e),
                accept: e => e instanceof(0, By.mD)(e).HTMLInputElement && "radio" === e.type
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": o || void 0,
            "aria-required": a || void 0,
            "aria-disabled": s || void 0,
            "aria-orientation": i,
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

      function dg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ug(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cg(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function fg(e, t) {
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
        pg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dg(dg({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) hg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fg(e.variantClassNames, e => fg(e, e => e.split(" ")[0]))
            }
          }, t
        },
        mg = pg({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vg = pg({
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
      const yg = (0, F.createContext)(null);

      function gg() {
        const e = (0, F.useContext)(yg);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const bg = (0, F.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": s,
          "aria-describedby": i,
          "aria-errormessage": l,
          status: c = "neutral",
          ...u
        }, d) => {
          const f = (0, F.useRef)(null),
            h = (0, Se.UP)(f, d),
            p = (0, F.useId)(),
            m = (0, F.useId)(),
            v = (0, F.useId)(),
            y = function(e) {
              let t = (0, F.useMemo)(() => e.name || `radio-group-${Ly}-${++Ay}`, [e.name]);
              var r;
              let [n, o] = av(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [a] = (0, F.useState)(n), [s, i] = (0, F.useState)(null), l = jv({
                ...e,
                value: n
              }), c = l.displayValidation.isInvalid;
              var u;
              return {
                ...l,
                name: t,
                selectedValue: n,
                defaultSelectedValue: void 0 !== e.value ? a : null !== (u = e.defaultValue) && void 0 !== u ? u : null,
                setSelectedValue: t => {
                  e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
                },
                lastFocusedValue: s,
                setLastFocusedValue: i,
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
            } = lg({
              ...u,
              orientation: r,
              "aria-labelledby": (0, X.joinStrings)(p, s),
              "aria-describedby": (0, X.joinStrings)(m, v, i),
              "aria-errormessage": (0, X.joinStrings)(v, l)
            }, y),
            b = (0, X.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, X.omit)(u, "isDisabled", "isRequired", "isReadOnly", "name")),
            _ = a ? Oe.DX : "div";
          return (0, E.jsx)(yg.Provider, {
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
            children: (0, E.jsx)(_, {
              ref: h,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        _g = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = gg(), i = (0, X.mergeProps)({
            "data-testid": e,
            className: vg({
              size: a,
              orientation: s
            })
          }, n), l = t ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: r
          })
        }),
        wg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            labelId: l
          } = gg(), c = i && !o, u = (0, X.mergeProps)({
            id: a.id || l,
            "data-testid": e,
            className: mg({
              showAsterisk: c
            })
          }, a), d = t ? Oe.DX : "div";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(d, {
              ...u,
              ref: s,
              children: r
            })
          })
        }),
        xg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = gg(), s = (0, X.mergeProps)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdg"
          }, n), i = t ? Oe.DX : "div";
          return (0, E.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        Pg = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = gg(), i = (0, X.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), l = r ? Oe.DX : vh;
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Cg = yh,
        Eg = gh;
      var Sg = pg({
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
        Og = pg({
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
        Tg = pg({
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
        jg = pg({
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
      const Ng = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, E.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Rg = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, E.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Ig = ({
          color: e = "currentColor"
        }) => (0, E.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, E.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        kg = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? Oe.DX : "label";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Dg = (0, F.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            a = (0, Se.UP)(o, n),
            s = (0, F.useId)(),
            {
              state: i,
              appearance: l,
              size: c,
              isReadOnly: d,
              isRequired: f
            } = gg(),
            {
              isPressed: h,
              pressProps: p
            } = (0, ih.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: m
            } = function(e, t, r) {
              let {
                value: n,
                children: o,
                "aria-label": a,
                "aria-labelledby": s,
                onPressStart: i,
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
                } = (0, ih.d)({
                  onPressStart: i,
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
                } = (0, ih.d)({
                  onPressStart: i,
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
                } = (0, rv.Wc)((0, Ym.v)(e, {
                  onFocus: () => t.setLastFocusedValue(n)
                }), r),
                _ = (0, Ym.v)(m, b),
                w = (0, Qm.$)(e, {
                  labelable: !0
                }),
                x = -1;
              null != t.selectedValue ? t.selectedValue === n && (x = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (x = 0), h && (x = void 0);
              let {
                name: P,
                form: C,
                descriptionId: E,
                errorMessageId: S,
                validationBehavior: O
              } = My.get(t);
              return ev(r, t.defaultSelectedValue, t.setSelectedValue), Lv({
                validationBehavior: O
              }, t, r), {
                labelProps: (0, Ym.v)(y, (0, F.useMemo)(() => ({
                  onClick: e => e.preventDefault(),
                  onMouseDown: e => e.preventDefault()
                }), [])),
                inputProps: (0, Ym.v)(w, {
                  ..._,
                  type: "radio",
                  name: P,
                  form: C,
                  tabIndex: x,
                  disabled: h,
                  required: t.isRequired && "native" === O,
                  checked: p,
                  value: n,
                  onChange: e => {
                    e.stopPropagation(), t.setSelectedValue(n)
                  },
                  "aria-describedby": [e["aria-describedby"], t.isInvalid ? S : null, E].filter(Boolean).join(" ") || void 0
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
            }, i, o),
            v = m.checked,
            y = m.disabled || i?.isReadOnly,
            g = (0, X.mergeProps)(m, {
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
          return (0, E.jsxs)("div", {
            className: jg({
              size: c
            }),
            children: [(0, E.jsx)(Oe.s6, {
              children: (0, E.jsx)("input", {
                type: "radio",
                ...g,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, E.jsx)("div", {
              className: Tg({
                appearance: l
              }),
              "aria-hidden": "true",
              "data-state": v ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": h,
              ...p,
              children: (0, E.jsx)("span", {
                className: "foundry_1pfduet9",
                children: v && (0, E.jsx)(b, {})
              })
            })]
          })
        }),
        Lg = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = gg(), l = (0, F.useId)(), c = (0, X.mergeProps)({
            id: l,
            "data-testid": e,
            className: Og({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), u = t ? Oe.DX : "div";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Ag = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = gg(), s = (0, X.mergeProps)({
            "data-testid": e,
            className: Sg({
              isDisabled: a
            })
          }, n), i = t ? Oe.DX : "span";
          return (0, E.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });

      function Mg(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Bg(e, t, r) {
        return t = Vg(t),
          function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(e, Fg() ? Reflect.construct(t, r || [], Vg(e).constructor) : t.apply(e, r))
      }

      function Hg(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Mg(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Mg(e, t) : void 0
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
        var a, s = !0,
          i = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return s = e.done, e
          },
          e: function(e) {
            i = !0, a = e
          },
          f: function() {
            try {
              s || null == r.return || r.return()
            } finally {
              if (i) throw a
            }
          }
        }
      }

      function zg(e, t, r) {
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

      function Vg(e) {
        return Vg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Vg(e)
      }

      function Fg() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (Fg = function() {
          return !!e
        })()
      }

      function Gg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ug(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gg(Object(r), !0).forEach(function(t) {
            zg(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qg(e, t) {
        return qg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, qg(e, t)
      }

      function Xg(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          a = t.separate,
          s = n,
          i = "",
          l = Hg(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[s[0]]) || void 0 === c ? void 0 : c.test(u));
            (a && u === s[0] || d) && (s = s.slice(1), i += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return i
      }

      function Kg(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          a = t.separate,
          s = t.showMask,
          i = 0,
          l = "",
          c = Hg(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!s && void 0 === e[i]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[i] ? l += e[i++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (a && !s) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function Wg(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], a = 0; a < r.length; a++) {
          var s, i = null !== (s = e[a]) && void 0 !== s ? s : r[a],
            l = Object.prototype.hasOwnProperty.call(n, i) ? "replacement" : void 0 !== e[a] && e[a] !== r[a] ? "input" : "mask";
          o.push({
            type: l,
            value: i,
            index: a
          })
        }
        return o
      }

      function Zg(e) {
        return e.length > 0 ? zg({}, e, /./) : {}
      }

      function $g(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, a = t.mask, s = t.replacement, i = t.separate, l = e.slice(n, o), c = a.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(s, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && i && (u += c[d])
        }
        return u
      }

      function Yg(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Zg(n) : n,
          a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Kg(Xg(e, {
          replacementChars: r.replace(a, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }
      var Qg = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Jg(e) {
        return Qg.includes(e) ? "\\".concat(e) : e
      }

      function eb(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function tb(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function rb(e, t, r) {
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

      function nb(e) {
        return nb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, nb(e)
      }

      function ob() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch (e) {}
        return (ob = function() {
          return !!e
        })()
      }

      function ab(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ab(Object(r), !0).forEach(function(t) {
            rb(e, t, r[t])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ab(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ib(e, t) {
        return ib = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, ib(e, t)
      }

      function lb(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return lb = function(e) {
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
              if (ob()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && ib(o, r.prototype), o
            }(e, arguments, nb(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), ib(r, e)
        }, lb(e)
      }
      var cb, ub = function(e) {
          function t(e) {
            var r;
            return eb(this, t), (r = function(e, t, r) {
              return t = nb(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, ob() ? Reflect.construct(t, r || [], nb(e).constructor) : t.apply(e, r))
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
            }), t && ib(e, t)
          }(t, e), tb(t)
        }(lb(Error)),
        db = ["options"],
        fb = ["text", "email", "tel", "search", "url"],
        hb = tb(function e(t) {
          var r = t.init,
            n = t.tracking;
          eb(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (fb.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                s = a.initialValue,
                i = void 0 === s ? "" : s,
                l = a.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || i,
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
              Object.defineProperty(e, "value", sb(sb({}, v), {}, {
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
                    if (p.cachedId === p.id) throw new ub("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var a = e.value,
                      s = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === s || null === i) throw new ub("The selection attributes have not been initialized.");
                    var l, c = m.value;
                    if (void 0 === t.inputType && (m.selectionStart = 0, m.selectionEnd = c.length), s > m.selectionStart ? l = "insert" : s <= m.selectionStart && s < m.selectionEnd ? l = "deleteBackward" : s === m.selectionEnd && a.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && a.length > c.length) throw new ub("Input type detection error.");
                    var u = "",
                      d = m.selectionStart,
                      f = m.selectionEnd;
                    if ("insert" === l) u = a.slice(m.selectionStart, s);
                    else {
                      var v = c.length - a.length;
                      d = s, f = s + v
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var y = h.options,
                      g = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: y,
                        value: a,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: s,
                        selectionEnd: i
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
                          var a = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(g, db);
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
      cb = hb, Object.defineProperty(cb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var pb, mb = ["track", "modify"];

      function vb(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Zg(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var yb = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = Bg(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = vb(r),
                a = o.mask,
                s = o.replacement,
                i = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? a : "",
                options: {
                  mask: a,
                  replacement: s,
                  separate: i
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                a = e.addedValue,
                s = e.changeStart,
                i = e.changeEnd,
                l = vb(r),
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
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, mb),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                m = d.separate,
                v = Ug(Ug({}, "insert" === t ? {
                  inputType: t,
                  data: a
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: s,
                  selectionEnd: i
                }),
                y = null == c ? void 0 : c(v);
              if (!1 === y) throw new ub("Custom tracking stop.");
              null === y ? a = "" : !0 !== y && void 0 !== y && (a = y);
              var g = null == u ? void 0 : u(v);
              void 0 !== (null == g ? void 0 : g.mask) && (f = g.mask), void 0 !== (null == g ? void 0 : g.replacement) && (h = "string" == typeof(null == g ? void 0 : g.replacement) ? Zg(null == g ? void 0 : g.replacement) : g.replacement), void 0 !== (null == g ? void 0 : g.showMask) && (p = g.showMask), void 0 !== (null == g ? void 0 : g.separate) && (m = g.separate);
              var b = $g(n, Ug({
                  end: s
                }, o)),
                _ = $g(n, Ug({
                  start: i
                }, o)),
                w = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                x = f.replace(w, "");
              if (b && (b = Xg(b, {
                  replacementChars: x,
                  replacement: h,
                  separate: m
                }), x = x.slice(b.length)), a && (a = Xg(a, {
                  replacementChars: x,
                  replacement: h,
                  separate: !1
                }), x = x.slice(a.length)), "insert" === t && "" === a) throw new ub("The character does not match the key value of the `replacement` object.");
              if (m) {
                var P = f.slice(s, i).replace(w, ""),
                  C = P.length - a.length;
                C < 0 ? _ = _.slice(-C) : C > 0 && (_ = P.slice(-C) + _)
              }
              _ && (_ = Xg(_, {
                replacementChars: x,
                replacement: h,
                separate: m
              }));
              var E = Kg(b + a + _, {
                  mask: f,
                  replacement: h,
                  separate: m,
                  showMask: p
                }),
                S = function(e) {
                  var t, r, n, o = e.inputType,
                    a = e.value,
                    s = e.addedValue,
                    i = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = Wg(a, {
                      mask: e.mask,
                      replacement: l
                    }).filter(function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    }),
                    d = null === (t = u[i.length + s.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[i.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[i.length + s.length]) || void 0 === n ? void 0 : n.index;
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
                  var p = a.split("").findIndex(function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  });
                  return -1 !== p ? p : a.length
                }({
                  inputType: t,
                  value: E,
                  addedValue: a,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: m
                });
              return {
                value: E,
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
            return Yg(e, vb(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Zg(n) : n;
              return Wg(Yg(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, vb(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Zg(n) : n,
                a = $g(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                s = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Xg(a, {
                replacementChars: r.replace(s, ""),
                replacement: o,
                separate: !1
              })
            }(e, vb(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Zg(n) : n, a = "partial" === e || "partial-inexact" === e, s = "full" === e || "partial" === e, i = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (i = "^"), a && (i += "("), i += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(s ? "(?!".concat(Jg(c), ")") : "", "(").concat(o[c].source, ")") : Jg(c), l === r.length - 1 && (a && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, vb(r))
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
            }), t && qg(e, t)
          }(e, hb),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function gb(e) {
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

      function bb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = gb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function wb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      pb = yb, Object.defineProperty(pb.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var xb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pb = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _b(_b({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) xb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wb(e.variantClassNames, e => wb(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cb = Pb({
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
        Eb = Pb({
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
        Sb = Pb({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ob = Pb({
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
        Tb = Pb({
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
        jb = Pb({
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
      const Nb = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Rb = (0, F.createContext)(null);

      function Ib() {
        const e = (0, F.useContext)(Rb);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const kb = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, l) => {
          const [c, u] = (0, F.useState)("text"), d = `${(0,F.useId)()}-label`, f = `${(0,F.useId)()}-input`, h = `${(0,F.useId)()}-description`, p = (0, F.useRef)(null), m = (0, F.useRef)(Nb), v = (0, X.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? Oe.DX : "div";
          return (0, E.jsx)(Rb.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              labelId: d,
              inputId: f,
              descriptionId: h,
              type: c,
              setType: u,
              inputRef: p,
              focusState: m,
              ...i
            },
            children: (0, E.jsx)(y, {
              ref: l,
              ...v,
              children: t
            })
          })
        }),
        Db = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            isDisabled: i,
            isRequired: l,
            inputId: c,
            labelId: u
          } = Ib(), d = l && !o, f = (0, X.mergeProps)({
            id: a.id || u,
            htmlFor: a.htmlFor || c,
            "data-testid": e,
            className: jb({
              showAsterisk: d,
              isDisabled: i
            })
          }, a), h = t ? Oe.DX : "label";
          return (0, E.jsx)(Oe.s6, {
            enabled: n,
            children: (0, E.jsx)(h, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Lb = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Ib(), s = (0, X.mergeProps)({
            "data-testid": e,
            className: Sb({
              isDisabled: a
            })
          }, n), i = t ? Oe.DX : "span";
          return (0, E.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Ab = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Ib(), l = (0, X.mergeProps)({
            "data-testid": e,
            className: (0, Be.clsx)(Cb({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), c = t ? Oe.DX : "div";
          return (0, E.jsx)(c, {
            ref: o,
            ...l,
            children: r
          })
        }),
        Mb = (0, F.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: a,
          placeholder: s = " ",
          "aria-labelledby": i,
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
            type: _,
            inputRef: w,
            focusState: x
          } = Ib();
          (0, F.useEffect)(() => b(c), []);
          const P = "invalid" === m,
            C = (0, X.mergeProps)({
              disabled: f,
              readOnly: h,
              required: p,
              id: y,
              type: _,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, X.joinStrings)(v, i),
              "aria-describedby": (0, X.joinStrings)(g, l),
              "data-testid": e,
              className: (0, Be.clsx)(Tb({
                isDisabled: f,
                isReadOnly: h
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
              ...P && {
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
            S = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.mask,
                r = e.replacement,
                n = e.showMask,
                o = e.separate,
                a = e.track,
                s = e.modify,
                i = (0, F.useRef)(null),
                l = (0, F.useRef)({
                  mask: t,
                  replacement: r,
                  showMask: n,
                  separate: o,
                  track: a,
                  modify: s
                });
              return l.current.mask = t, l.current.replacement = r, l.current.showMask = n, l.current.separate = o, l.current.track = a, l.current.modify = s, (0, F.useMemo)(function() {
                return function(e, t) {
                  return new Proxy(e, {
                    set: function(r, n, o) {
                      return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                    }
                  })
                }(i, new yb(l.current))
              }, [])
            }({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            O = (0, Se.UP)(r && n ? S : null, w, d),
            T = t ? Oe.DX : "input";
          return (0, E.jsx)(T, {
            ref: O,
            ...C
          })
        }),
        Bb = (0, F.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = Ib(), i = (0, X.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, Be.clsx)(Ob({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), l = t ? Oe.DX : He[e];
          return (0, E.jsx)(l, {
            ref: a,
            ...i
          })
        }),
        Hb = (0, F.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Ib(), n = (0, X.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, Be.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, E.jsx)(st, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        zb = (0, F.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = Ib(), l = "password" === o, c = l ? e : t;
          (0, F.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const u = (0, X.mergeProps)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              a(l ? "text" : "password");
              const e = s.current;
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
          return (0, E.jsxs)(Zd, {
            children: [(0, E.jsx)($d, {
              children: (0, E.jsx)(Hb, {
                ref: n,
                ...u
              })
            }), (0, E.jsxs)(Yd, {
              side: "bottom",
              align: "end",
              children: [c, (0, E.jsx)(Qd, {})]
            })]
          })
        }),
        Vb = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ib(), i = (0, X.mergeProps)({
            className: Eb({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), l = r ? Oe.DX : "div";
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Fb = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Ib(), i = (0, X.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), l = r ? Oe.DX : vh;
          return (0, E.jsx)(l, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Gb = yh,
        Ub = gh;
      var qb = r(36566);

      function Xb(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: s,
          isDisabled: i,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: i ? void 0 : 0
        });
        let {
          focusableProps: u
        } = (0, rv.Wc)(e, t), {
          pressProps: d,
          isPressed: f
        } = (0, ih.d)({
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: s,
          isDisabled: i,
          ref: t
        }), h = (0, Qm.$)(l, {
          labelable: !0
        }), p = (0, Ym.v)(u, d), m = (0, qb.rd)(), v = (0, qb._h)(e);
        return {
          isPressed: f,
          linkProps: (0, Ym.v)(h, v, {
            ...p,
            ...c,
            "aria-disabled": i || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), (0, qb.PJ)(t, m, e.href, e.routerOptions)
            }
          })
        }
      }

      function Kb(e) {
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

      function Wb(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Wb(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Kb(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $b(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zb(Zb({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Yb(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $b(e.variantClassNames, e => $b(e, e => e.split(" ")[0]))
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
      const Jb = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        e_ = (0, F.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.useRef)(null),
            s = (0, Se.UP)(a, o),
            {
              buttonProps: i
            } = (0, Se.sL)(n, a),
            l = (0, X.mergeProps)({
              "data-testid": r,
              className: Qb({
                size: t
              })
            }, i);
          return (0, E.jsx)("button", {
            ref: s,
            ...l,
            children: (0, E.jsx)(He.X, {
              label: e,
              size: Jb[t]
            })
          })
        });

      function t_(e) {
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

      function r_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function n_(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r_(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = t_(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : r_(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function o_(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var a_ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        s_ = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = n_(n_({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) a_(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return o_(e.variantClassNames, e => o_(e, e => e.split(" ")[0]))
            }
          }, t
        },
        i_ = s_({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        l_ = s_({
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
        c_ = s_({
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
      const u_ = (0, F.createContext)(null);

      function d_() {
        const e = (0, F.useContext)(u_);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const f_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? Oe.DX : "div",
            i = (0, X.mergeProps)({
              className: c_({
                status: r,
                background: n
              })
            }, o);
          return (0, E.jsx)(u_.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, E.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        h_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "div",
            a = (0, X.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        p_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "div",
            a = (0, X.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        m_ = {
          danger: He.CircleX,
          information: He.Info,
          success: He.CircleCheck,
          warning: He.TriangleAlert
        },
        v_ = (0, F.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = d_(), a = e ? Oe.DX : m_[o], s = (0, X.mergeProps)({
            className: l_({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, E.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        y_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "div",
            a = (0, X.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        g_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "div",
            a = (0, X.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        b_ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.useRef)(null),
            s = (0, Se.UP)(a, o),
            i = e ? Oe.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = Xb(n, a),
            u = (0, X.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, l);
          return (0, E.jsx)(i, {
            "data-pressed": c,
            "data-testid": r,
            ref: s,
            ...u,
            children: t
          })
        }),
        __ = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Oe.DX : "div",
            s = (0, X.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        w_ = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? Oe.DX : "div";
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, Be.clsx)(r, "foundry_1m368qhp foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"),
            ...n
          })
        }),
        x_ = (0, F.forwardRef)((e, t) => {
          const {
            background: r
          } = d_(), n = "none" !== r, o = (0, X.mergeProps)({
            className: i_({
              hasBackground: n
            })
          }, e);
          return (0, E.jsx)(e_, {
            size: "SM",
            ref: t,
            ...o
          })
        });

      function P_(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function C_(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every(r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : P_(n) && P_(o) ? C_(n, o) : n === o
        }))
      }

      function E_(e) {
        return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
      }

      function S_(e) {
        return "number" == typeof e
      }

      function O_(e) {
        return "string" == typeof e
      }

      function T_(e) {
        return "boolean" == typeof e
      }

      function j_(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function N_(e) {
        return Math.abs(e)
      }

      function R_(e) {
        return Math.sign(e)
      }

      function I_(e, t) {
        return N_(e - t)
      }

      function k_(e) {
        return B_(e).map(Number)
      }

      function D_(e) {
        return e[L_(e)]
      }

      function L_(e) {
        return Math.max(0, e.length - 1)
      }

      function A_(e, t) {
        return t === L_(e)
      }

      function M_(e, t = 0) {
        return Array.from(Array(e), (e, r) => t + r)
      }

      function B_(e) {
        return Object.keys(e)
      }

      function H_(e, t) {
        return [e, t].reduce((e, t) => (B_(t).forEach(r => {
          const n = e[r],
            o = t[r],
            a = j_(n) && j_(o);
          e[r] = a ? H_(n, o) : o
        }), e), {})
      }

      function z_(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function V_() {
        let e = [];
        const t = {
          add: function(r, n, o, a = {
            passive: !0
          }) {
            let s;
            if ("addEventListener" in r) r.addEventListener(n, o, a), s = () => r.removeEventListener(n, o, a);
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

      function F_(e = 0, t = 0) {
        const r = N_(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function a(e) {
          return n(e) || o(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return a(r) ? n(r) ? e : t : r
          },
          reachedAny: a,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function G_(e, t, r) {
        const {
          constrain: n
        } = F_(0, e), o = e + 1;
        let a = s(t);

        function s(e) {
          return r ? N_((o + e) % o) : n(e)
        }

        function i() {
          return a
        }

        function l() {
          return G_(e, i(), r)
        }
        const c = {
          get: i,
          set: function(e) {
            return a = s(e), c
          },
          add: function(e) {
            return l().set(i() + e)
          },
          clone: l
        };
        return c
      }

      function U_(e, t, r, n, o, a, s, i, l, c, u, d, f, h, p, m, v, y, g) {
        const {
          cross: b,
          direction: _
        } = e, w = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, P = V_(), C = V_(), E = F_(50, 225).constrain(h.measure(20)), S = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, T = p ? 43 : 25;
        let j = !1,
          N = 0,
          R = 0,
          I = !1,
          k = !1,
          D = !1,
          L = !1;

        function A(e) {
          if (!z_(e, n) && e.touches.length >= 2) return M(e);
          const t = a.readPoint(e),
            r = a.readPoint(e, b),
            s = I_(t, N),
            l = I_(r, R);
          if (!k && !L) {
            if (!e.cancelable) return M(e);
            if (k = s > l, !k) return M(e)
          }
          const u = a.pointerMove(e);
          s > m && (D = !0), c.useFriction(.3).useDuration(.75), i.start(), o.add(_(u)), e.preventDefault()
        }

        function M(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = a.pointerUp(e) * (p ? O : S)[L ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * R_(e)),
                n = u.byDistance(e, !p).distance;
              return p || N_(e) < E ? n : v && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(_(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (N_(e) <= N_(t)) return 0;
              const r = I_(N_(e), N_(t));
              return N_(r / e)
            }(r, n),
            s = T - 10 * o,
            i = y + o / 50;
          k = !1, I = !1, C.clear(), c.useDuration(s).useFriction(i), l.distance(n, !p), L = !1, f.emit("pointerUp")
        }

        function B(e) {
          D && (e.stopPropagation(), e.preventDefault(), D = !1)
        }
        return {
          init: function(e) {
            if (!g) return;

            function i(i) {
              (T_(g) || g(e, i)) && function(e) {
                const i = z_(e, n);
                L = i, D = p && i && !e.buttons && j, j = I_(o.get(), s.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return w.includes(t)
                }(e.target) || (I = !0, a.pointerDown(e), c.useFriction(0).useDuration(0), o.set(s), function() {
                  const e = L ? r : t;
                  C.add(e, "touchmove", A, x).add(e, "touchend", M).add(e, "mousemove", A, x).add(e, "mouseup", M)
                }(), N = a.readPoint(e), R = a.readPoint(e, b), f.emit("pointerDown"))
              }(i)
            }
            const l = t;
            P.add(l, "dragstart", e => e.preventDefault(), x).add(l, "touchmove", () => {}, x).add(l, "touchend", () => {}).add(l, "touchstart", i).add(l, "mousedown", i).add(l, "touchcancel", M).add(l, "contextmenu", M).add(l, "click", B, !0)
          },
          destroy: function() {
            P.clear(), C.clear()
          },
          pointerDown: function() {
            return I
          }
        }
      }

      function q_(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function a(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (z_(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, a(e)
          },
          pointerMove: function(e) {
            const t = a(e) - a(n),
              s = o(e) - o(r) > 170;
            return n = e, s && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = a(n) - a(r),
              s = o(e) - o(r),
              i = o(e) - o(n) > 170,
              l = t / s;
            return s && !i && N_(l) > .1 ? l : 0
          },
          readPoint: a
        }
      }

      function X_(e, t, r, n, o, a, s) {
        const i = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(s.measure(e))
        }
        return {
          init: function(o) {
            a && (c = f(e), u = n.map(f), l = new ResizeObserver(r => {
              (T_(a) || a(o, r)) && function(r) {
                for (const a of r) {
                  if (d) return;
                  const r = a.target === e,
                    s = n.indexOf(a.target),
                    i = r ? c : u[s];
                  if (N_(f(r ? e : n[s]) - i) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            }), r.requestAnimationFrame(() => {
              i.forEach(e => l.observe(e))
            }))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function K_(e, t, r, n, o) {
        const a = o.measure(10),
          s = o.measure(50),
          i = F_(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = N_(e[l] - t.get()),
              d = r.get() - t.get(),
              f = i.constrain(u / s);
            r.subtract(d * f), !o && N_(d) < a && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function W_(e, t, r, n) {
        const o = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: s,
            reachedMax: i
          } = F_(o, a),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? i(r.get()) : -1 === e && s(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach(e => e.add(o))
            }
          };
        return l
      }

      function Z_(e) {
        let t = e;

        function r(e) {
          return S_(e) ? e : e.get()
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

      function $_(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          a = !1;
        return {
          clear: function() {
            a || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (a) return;
            const s = (i = e.direction(t), Math.round(100 * i) / 100);
            var i;
            s !== o && (n.transform = r(s), o = s)
          },
          toggleActive: function(e) {
            a = !e
          }
        }
      }

      function Y_(e, t, r, n, o, a, s, i, l) {
        const c = k_(o),
          u = k_(o).reverse(),
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
            return a.map((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            }))
          }(s);
          return o.map(t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              a = c ? "end" : "start",
              s = u[t][a];
            return {
              index: t,
              loopPoint: s,
              slideLocation: Z_(-1),
              translate: $_(e, l[t]),
              target: () => i.get() > s ? n : o
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

      function Q_(e, t, r) {
        let n, o = !1;
        return {
          init: function(a) {
            r && (n = new MutationObserver(e => {
              o || (T_(r) || r(a, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    a.reInit(), t.emit("slidesChanged");
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

      function J_(e, t, r, n, o, a, s) {
        const {
          align: i,
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
          watchFocus: x
        } = a, P = {
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
        }, C = P.measure(t), E = r.map(P.measure), S = function(e, t) {
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
        }(l, c), O = S.measureSize(C), T = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), j = function(e, t) {
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
              return O_(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(i, O), N = !d && !!g, R = d || !!g, {
          slideSizes: I,
          slideSizesWithGaps: k,
          startGap: D,
          endGap: L
        } = function(e, t, r, n, o, a) {
          const {
            measureSize: s,
            startEdge: i,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return N_(t[i] - e[i])
          }(), d = function() {
            if (!c) return 0;
            const e = a.getComputedStyle(D_(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(s), h = r.map((e, t, r) => {
            const n = !t,
              o = A_(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][i] - e[i]
          }).map(N_);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(S, C, E, r, R, o), A = function(e, t, r, n, o, a, s, i, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = S_(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return k_(e).filter(e => e % t === 0).map(r => e.slice(r, r + t))
              }(e, r) : function(e) {
                return e.length ? k_(e).reduce((r, f, h) => {
                  const p = D_(r) || 0,
                    m = 0 === p,
                    v = f === L_(e),
                    y = o[c] - a[p][c],
                    g = o[c] - a[f][u],
                    b = !n && m ? d(s) : 0,
                    _ = N_(g - (!n && v ? d(i) : 0) - (y + b));
                  return h && _ > t + l && r.push(f), v && r.push(e.length), r
                }, []).map((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                }) : []
              }(e)
            }
          };
          return h
        }(S, O, v, d, C, E, D, L, 2), {
          snaps: M,
          snapsAligned: B
        } = function(e, t, r, n, o) {
          const {
            startEdge: a,
            endEdge: s
          } = e, {
            groupSlides: i
          } = o, l = i(n).map(e => D_(e)[s] - e[0][a]).map(N_).map(t.measure), c = n.map(e => r[a] - e[a]).map(e => -N_(e)), u = i(c).map(e => e[0]).map((e, t) => e + l[t]);
          return {
            snaps: c,
            snapsAligned: u
          }
        }(S, j, C, E, A), H = -D_(M) + D_(k), {
          snapsContained: z,
          scrollContainLimit: V
        } = function(e, t, r, n) {
          const o = F_(-t + e, 0),
            a = r.map((e, t) => {
              const {
                min: n,
                max: a
              } = o, s = o.constrain(e), l = !t, c = A_(r, t);
              return l ? a : c || i(n, s) ? n : i(a, s) ? a : s
            }).map(e => parseFloat(e.toFixed(3))),
            s = function() {
              const e = a[0],
                t = D_(a);
              return F_(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function i(e, t) {
            return I_(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return a;
              const {
                min: r,
                max: i
              } = s;
              return a.slice(r, i)
            }(),
            scrollContainLimit: s
          }
        }(O, H, B, g), F = N ? z : B, {
          limit: G
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: F_(r ? n - e : D_(t), n)
          }
        }(H, F, d), U = G_(L_(F), u, d), q = U.clone(), X = k_(r), K = function(e, t, r, n) {
          const o = V_(),
            a = 1e3 / 60;
          let s = null,
            i = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            s || (s = e, r(), r());
            const o = e - s;
            for (s = e, i += o; i >= a;) r(), i -= a;
            n(i / a), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), s = null, i = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", () => {
                e.hidden && (s = null, i = 0)
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
        })(ie), e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: n,
          previousLocation: o,
          scrollLooper: a,
          slideLooper: s,
          dragHandler: i,
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
            v = m && !i.pointerDown();
          v && l.stop();
          const y = r.get() * f + o.get() * (1 - f);
          n.set(y), d && (a.loop(e.direction()), s.loop()), t.to(n.get()), v && c.emit("settle"), m || c.emit("scroll")
        })(ie, e)), W = F[U.get()], Z = Z_(W), $ = Z_(W), Y = Z_(W), Q = Z_(W), J = function(e, t, r, n, o) {
          let a = 0,
            s = 0,
            i = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return i = e, h
          }

          function f(e) {
            return l = e, h
          }
          const h = {
            direction: function() {
              return s
            },
            duration: function() {
              return i
            },
            velocity: function() {
              return a
            },
            seek: function() {
              const t = n.get() - e.get();
              let o = 0;
              return i ? (r.set(e), a += t / i, a *= l, c += a, e.add(a), o = c - u) : (a = 0, r.set(n), e.set(n), o = t), s = R_(o), u = c, h
            },
            settled: function() {
              return N_(n.get() - t.get()) < .001
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
            reachedAny: a,
            removeOffset: s,
            constrain: i
          } = n;

          function l(e) {
            return e.concat().sort((e, t) => N_(e) - N_(t))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const a = o.filter(e => R_(e) === n);
            return a.length ? l(a) : D_(o) - r
          }
          return {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? s(r) : i(r),
                    o = t.map((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    })).sort((e, t) => N_(e.diff) - N_(t.diff)),
                    {
                      index: a
                    } = o[0];
                  return {
                    index: a,
                    distance: n
                  }
                }(l),
                f = !e && a(l);
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
          }
        }(d, F, H, G, Q), te = function(e, t, r, n, o, a, s) {
          function i(o) {
            const i = o.distance,
              l = o.index !== t.get();
            a.add(i), i && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), s.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              i(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              i(o.byIndex(n.get(), r))
            }
          };
          return l
        }(K, U, q, J, ee, Q, s), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(G), ne = V_(), oe = function(e, t, r, n) {
          const o = {};
          let a, s = null,
            i = null,
            l = !1;
          return {
            init: function() {
              a = new IntersectionObserver(e => {
                l || (e.forEach(e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                }), s = null, i = null, r.emit("slidesInView"))
              }, {
                root: e.parentElement,
                threshold: n
              }), t.forEach(e => a.observe(e))
            },
            destroy: function() {
              a && a.disconnect(), l = !0
            },
            get: function(e = !0) {
              if (e && s) return s;
              if (!e && i) return i;
              const t = function(e) {
                return B_(o).reduce((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: a
                    } = o[n];
                  return (e && a || !e && !a) && t.push(n), t
                }, [])
              }(e);
              return e && (s = t), e || (i = t), t
            }
          }
        }(t, r, s, m), {
          slideRegistry: ae
        } = function(e, t, r, n, o, a) {
          const {
            groupSlides: s
          } = o, {
            min: i,
            max: l
          } = n, c = function() {
            const n = s(a),
              o = !e || "keepSnaps" === t;
            return 1 === r.length ? [a] : o ? n : n.slice(i, l).map((e, t, r) => {
              const n = !t,
                o = A_(r, t);
              return n ? M_(D_(r[0]) + 1) : o ? M_(L_(a) - D_(r)[0] + 1, D_(r)[0]) : e
            })
          }();
          return {
            slideRegistry: c
          }
        }(N, g, F, V, A, X), se = function(e, t, r, n, o, a, s, i) {
          const l = {
            passive: !0,
            capture: !0
          };
          let c = 0;

          function u(e) {
            "Tab" === e.code && (c = (new Date).getTime())
          }
          return {
            init: function(d) {
              i && (a.add(document, "keydown", u, !1), t.forEach((t, u) => {
                a.add(t, "focus", t => {
                  (T_(i) || i(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    s.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = r.findIndex(e => e.includes(t));
                    S_(a) && (o.useDuration(0), n.index(a, 0), s.emit("slideFocus"))
                  }(u)
                }, l)
              }))
            }
          }
        }(e, r, ae, te, J, ne, s, x), ie = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: s,
          containerRect: C,
          slideRects: E,
          animation: K,
          axis: S,
          dragHandler: U_(S, e, n, o, Q, q_(S, o), Z, K, te, J, ee, U, s, T, h, p, y, .68, w),
          eventStore: ne,
          percentOfView: T,
          index: U,
          indexPrevious: q,
          limit: G,
          location: Z,
          offsetLocation: Y,
          previousLocation: $,
          options: a,
          resizeHandler: X_(t, s, o, r, S, b, P),
          scrollBody: J,
          scrollBounds: K_(G, Y, Q, J, T),
          scrollLooper: W_(H, G, Y, [Z, Y, $, Q]),
          scrollProgress: re,
          scrollSnapList: F.map(re.get),
          scrollSnaps: F,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: Y_(S, O, H, I, k, M, F, Y, r),
          slideFocus: se,
          slidesHandler: Q_(t, s, _),
          slidesInView: oe,
          slideIndexes: X,
          slideRegistry: ae,
          slidesToScroll: A,
          target: Q,
          translate: $_(S, t)
        };
        return ie
      }
      const ew = {
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

      function tw(e) {
        function t(e, t) {
          return H_(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = B_(n).filter(t => e.matchMedia(t).matches).map(e => n[e]).reduce((e, r) => t(e, r), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(e => B_(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia)
          }
        };
        return r
      }

      function rw(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          a = tw(o),
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
          }(a),
          i = V_(),
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
          } = a,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          m = S;
        let v, y, g, b, _ = !1,
          w = c(ew, rw.globalOptions),
          x = c(w),
          P = [];

        function C(t) {
          const r = J_(e, g, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function E(t, r) {
          _ || (w = c(w, t), x = u(w), P = r || P, function() {
            const {
              container: t,
              slides: r
            } = x, n = O_(t) ? e.querySelector(t) : t;
            g = n || e.children[0];
            const o = O_(r) ? g.querySelectorAll(r) : r;
            b = [].slice.call(o || g.children)
          }(), v = C(x), d([w, ...P.map(({
            options: e
          }) => e)]).forEach(e => i.add(e, "change", S)), x.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(N), v.eventHandler.init(N), v.resizeHandler.init(N), v.slidesHandler.init(N), v.options.loop && v.slideLooper.loop(), g.offsetParent && b.length && v.dragHandler.init(N), y = s.init(N, P)))
        }

        function S(e, t) {
          const r = j();
          O(), E(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function O() {
          v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), s.destroy(), i.clear()
        }

        function T(e, t, r) {
          x.active && !_ && (v.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), v.scrollTo.index(e, r || 0))
        }

        function j() {
          return v.index.get()
        }
        const N = {
          canScrollNext: function() {
            return v.index.add(1).get() !== j()
          },
          canScrollPrev: function() {
            return v.index.add(-1).get() !== j()
          },
          containerNode: function() {
            return g
          },
          internalEngine: function() {
            return v
          },
          destroy: function() {
            _ || (_ = !0, i.clear(), O(), l.emit("destroy"), l.clear())
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
            T(v.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            T(v.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return v.scrollProgress.get(v.offsetLocation.get())
          },
          scrollSnapList: function() {
            return v.scrollSnapList
          },
          scrollTo: T,
          selectedScrollSnap: j,
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
        return E(t, r), setTimeout(() => l.emit("init"), 0), N
      }

      function nw(e = {}, t = []) {
        const r = (0, F.useRef)(e),
          n = (0, F.useRef)(t),
          [o, a] = (0, F.useState)(),
          [s, i] = (0, F.useState)(),
          l = (0, F.useCallback)(() => {
            o && o.reInit(r.current, n.current)
          }, [o]);
        return (0, F.useEffect)(() => {
          C_(r.current, e) || (r.current = e, l())
        }, [e, l]), (0, F.useEffect)(() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = E_(e),
              n = E_(t);
            return r.every((e, t) => C_(e, n[t]))
          })(n.current, t) || (n.current = t, l())
        }, [t, l]), (0, F.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && s) {
            rw.globalOptions = nw.globalOptions;
            const e = rw(s, r.current, n.current);
            return a(e), () => e.destroy()
          }
          a(void 0)
        }, [s, a]), [i, o]
      }

      function ow(e = {}) {
        let t, r = [];
        const n = ["select", "slideFocus"];

        function o() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          return n ? n.map(e => r[e]).reduce((e, t) => Math.max(e, t), 0) : null
        }

        function a() {
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
            "y" !== o && (r = s.map(e => e.height), n.forEach(e => t.on(e, a)), a())
          },
          destroy: function() {
            n.forEach(e => t.off(e, a));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      rw.globalOptions = void 0, nw.globalOptions = void 0, ow.globalOptions = void 0;
      const aw = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function sw(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function iw(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function lw(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function cw(e = {}) {
        let t, r, n, o, a = [],
          s = [];
        const i = ["select"],
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
          ("pointerDown" === t ? lw : iw)(n, u.dragging)
        }

        function f(e = [], t = [], r) {
          const n = t.map(e => o[e]),
            a = e.map(e => o[e]);
          return n.forEach(e => iw(e, r)), a.forEach(e => lw(e, r)), e
        }

        function h() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          a = f(t, a, u.snapped)
        }

        function p() {
          const e = r.slidesInView();
          s = f(e, s, u.inView)
        }
        const m = {
          name: "classNames",
          options: e,
          init: function(a, s) {
            r = a;
            const {
              mergeOptions: f,
              optionsAtMedia: m
            } = s, v = f(aw, cw.globalOptions), y = f(v, e);
            t = m(y), n = r.rootNode(), o = r.slideNodes();
            const {
              watchDrag: g,
              loop: b
            } = r.internalEngine().options, _ = !!g;
            t.loop && b && (u.loop = sw(t.loop), lw(n, u.loop)), t.draggable && _ && (u.draggable = sw(t.draggable), lw(n, u.draggable)), t.dragging && (u.dragging = sw(t.dragging), l.forEach(e => r.on(e, d))), t.snapped && (u.snapped = sw(t.snapped), i.forEach(e => r.on(e, h)), h()), t.inView && (u.inView = sw(t.inView), c.forEach(e => r.on(e, p)), p())
          },
          destroy: function() {
            l.forEach(e => r.off(e, d)), i.forEach(e => r.off(e, h)), c.forEach(e => r.off(e, p)), iw(n, u.loop), iw(n, u.draggable), iw(n, u.dragging), f([], a, u.snapped), f([], s, u.inView), Object.keys(u).forEach(e => {
              u[e] = []
            })
          }
        };
        return m
      }
      cw.globalOptions = void 0;

      function uw(e) {
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

      function dw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dw(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = uw(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hw(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var pw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mw = "foundry_qmpv6yv",
        vw = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fw(fw({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) pw(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hw(e.variantClassNames, e => hw(e, e => e.split(" ")[0]))
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
      const yw = (0, F.createContext)(null);

      function gw() {
        const e = (0, F.useContext)(yw);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const bw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: a,
          align: s = "left",
          ...i
        }, l) => {
          const c = (({
              loopPagination: e = !0
            }) => {
              const t = (0, Se.rl)(),
                r = (0, Se.jt)(),
                [n, o] = (0, F.useState)([]),
                a = n.length,
                [s, i] = (0, F.useState)(0),
                [l, c] = nw({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [ow(), cw()]),
                u = (0, F.useRef)(0),
                d = (0, F.useRef)(!1),
                f = n[s],
                h = (0, F.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), d.current = !0
                }, [c]),
                p = (0, F.useCallback)(e => {
                  u.current = .94 * e.scrollSnapList().length
                }, []),
                m = (0, F.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    a = "scroll" === t;
                  e.scrollSnapList().forEach((t, s) => {
                    let i = t - n;
                    r.slideRegistry[s].forEach(s => {
                      if (a && !o.includes(s)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (s === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (i = t - (1 + n)), 1 === e && (i = t + (1 - n))
                        }
                      });
                      const l = (c = 1 - Math.abs(i * u.current), Math.min(Math.max(c, 0), 1)).toString();
                      var c;
                      e.slideNodes()[s].style.opacity = l
                    })
                  })
                }, []);
              return (0, F.useEffect)(() => {
                c && (p(c), m(c), c.on("reInit", p).on("reInit", m).on("scroll", m).on("slideFocus", m))
              }, [c, m]), (0, F.useEffect)(() => {
                c && (h(c), c.on("select", h).on("reInit", h))
              }, [c, h]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: l,
                prevAlert: () => c?.scrollPrev(r),
                nextAlert: () => c?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: i,
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
          (0, F.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: s
            }])
          }, []);
          const p = h > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            m = (0, X.mergeProps)({
              className: vw(u)
            }, p, i),
            v = e ? Oe.DX : "div";
          return (0, E.jsx)(yw.Provider, {
            value: c,
            children: (0, E.jsx)(v, {
              ref: l,
              "data-testid": r,
              "data-initialized": d,
              ...m,
              children: t
            })
          })
        }),
        _w = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        ww = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = gw();
          if (!e && !n || !n?.status) return null;
          const o = e || _w[n.status],
            a = He[o],
            s = (0, X.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, E.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        xw = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "div",
            a = (0, X.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Pw = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? Oe.DX : "div",
            l = (0, X.mergeProps)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, E.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...l
          })
        }),
        Cw = (0, F.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a
          } = gw(), s = (0, X.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), i = (0, Se.UP)(a, n), l = F.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, F.useEffect)(() => {
            l && o(l)
          }, []), (0, E.jsx)("div", {
            ref: i,
            "data-testid": e,
            ...s,
            children: (0, E.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Ew = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.useRef)(null),
            s = (0, Se.UP)(a, o),
            i = e ? Oe.DX : "a",
            {
              linkProps: l,
              isPressed: c
            } = Xb(n, a),
            u = (0, X.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi foundry_1d5mo5m0"
            }, n);
          return (0, E.jsx)(i, {
            "data-pressed": c,
            "data-testid": r,
            ref: s,
            ...l,
            ...u,
            children: t
          })
        }),
        Sw = (0, F.forwardRef)((e, t) => {
          const r = (0, X.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, E.jsx)(e_, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Ow = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? Oe.DX : "div",
            s = (0, X.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Tw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = gw(), a = (0, X.mergeProps)({
            className: mw
          }, t);
          return (0, E.jsx)(st, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        jw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = gw(), a = (0, X.mergeProps)({
            className: mw
          }, t);
          return (0, E.jsx)(st, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...a
          })
        }),
        Nw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = gw(), a = (0, X.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn foundry_tdsdcdr"
          }, t);
          return (0, E.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function Rw(e) {
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

      function Iw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kw(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Iw(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Rw(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iw(Object(r)).forEach(function(t) {
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
      var Lw = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Aw = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kw(kw({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Lw(c, n, e.defaultVariants) && (r += " " + u);
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
        Mw = Aw({
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
        Bw = Aw({
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
        Hw = Aw({
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
      const zw = (0, F.createContext)(null);

      function Vw() {
        const e = (0, F.useContext)(zw);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Fw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: a,
          hasBorder: s,
          isDisabled: i,
          ...l
        }, c) => {
          const u = {
              size: n,
              background: o,
              color: a,
              hasBorder: s,
              isDisabled: i
            },
            d = (0, X.mergeProps)({
              className: Bw(u)
            }, l),
            f = e ? Oe.DX : "div";
          return (0, E.jsx)(zw.Provider, {
            value: u,
            children: (0, E.jsx)(f, {
              ref: c,
              "data-testid": r,
              "aria-disabled": i,
              ...d,
              children: t
            })
          })
        }),
        Gw = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = Vw(), s = e ? Oe.DX : "div", i = (0, X.mergeProps)({
            className: Hw({
              size: a
            })
          }, n);
          return (0, E.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Uw = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = He[e],
            o = (0, X.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, E.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        qw = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Vw(), a = (0, X.mergeProps)({
            className: Mw({
              background: n
            })
          }, t);
          return (0, E.jsx)(st, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...a
          })
        });
      var Xw = r(50281),
        Kw = r(72753),
        Ww = "ToastProvider",
        [Zw, $w, Yw] = (0, of.N)("Toast"),
        [Qw, Jw] = (0, nd.A)("Toast", [Yw]),
        [ex, tx] = Qw(Ww),
        rx = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: s
          } = e, [i, l] = F.useState(null), [c, u] = F.useState(0), d = F.useRef(!1), f = F.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Ww}\`. Expected non-empty \`string\`.`), (0, E.jsx)(Zw.Provider, {
            scope: t,
            children: (0, E.jsx)(ex, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: i,
              onViewportChange: l,
              onToastAdd: F.useCallback(() => u(e => e + 1), []),
              onToastRemove: F.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      rx.displayName = Ww;
      var nx = "ToastViewport",
        ox = ["F8"],
        ax = "toast.viewportPause",
        sx = "toast.viewportResume",
        ix = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = ox,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = tx(nx, r), i = $w(r), l = F.useRef(null), c = F.useRef(null), u = F.useRef(null), d = F.useRef(null), f = (0, rd.s)(t, d, s.onViewportChange), h = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), p = s.toastCount > 0;
          F.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && d.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), F.useEffect(() => {
            const e = l.current,
              t = d.current;
            if (p && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(ax);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(sx);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                a = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", a), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [p, s.isClosePausedRef]);
          const m = F.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Ex(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return F.useEffect(() => {
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
                    a = o.findIndex(e => e === r);
                  Sx(o.slice(a + 1)) ? t.preventDefault() : n ? c.current?.focus() : u.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, m]), (0, E.jsxs)(od.lg, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
              pointerEvents: p ? void 0 : "none"
            },
            children: [p && (0, E.jsx)(cx, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Sx(m({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, E.jsx)(Zw.Slot, {
              scope: r,
              children: (0, E.jsx)(cd.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), p && (0, E.jsx)(cx, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                Sx(m({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      ix.displayName = nx;
      var lx = "ToastFocusProxy",
        cx = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = tx(lx, r);
          return (0, E.jsx)(Kw.VisuallyHidden, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !a.viewport?.contains(t) && n()
            }
          })
        });
      cx.displayName = lx;
      var ux = "Toast",
        dx = F.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, l] = (0, dd.useControllableState)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: ux
          });
          return (0, E.jsx)(ld.C, {
            present: r || i,
            children: (0, E.jsx)(px, {
              open: i,
              ...s,
              ref: t,
              onClose: () => l(!1),
              onPause: (0, bh.c)(e.onPause),
              onResume: (0, bh.c)(e.onResume),
              onSwipeStart: (0, td.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, td.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, td.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, td.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), l(!1)
              })
            })
          })
        });
      dx.displayName = ux;
      var [fx, hx] = Qw(ux, {
        onClose() {}
      }), px = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: s,
          onEscapeKeyDown: i,
          onPause: l,
          onResume: c,
          onSwipeStart: u,
          onSwipeMove: d,
          onSwipeCancel: f,
          onSwipeEnd: h,
          ...p
        } = e, m = tx(ux, r), [v, y] = F.useState(null), g = (0, rd.s)(t, e => y(e)), b = F.useRef(null), _ = F.useRef(null), w = o || m.duration, x = F.useRef(0), P = F.useRef(w), C = F.useRef(0), {
          onToastAdd: S,
          onToastRemove: O
        } = m, T = (0, bh.c)(() => {
          const e = v?.contains(document.activeElement);
          e && m.viewport?.focus(), s()
        }), j = F.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), x.current = (new Date).getTime(), C.current = window.setTimeout(T, e))
        }, [T]);
        F.useEffect(() => {
          const e = m.viewport;
          if (e) {
            const t = () => {
                j(P.current), c?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                P.current = P.current - e, window.clearTimeout(C.current), l?.()
              };
            return e.addEventListener(ax, r), e.addEventListener(sx, t), () => {
              e.removeEventListener(ax, r), e.removeEventListener(sx, t)
            }
          }
        }, [m.viewport, w, l, c, j]), F.useEffect(() => {
          a && !m.isClosePausedRef.current && j(w)
        }, [a, w, m.isClosePausedRef, j]), F.useEffect(() => (S(), () => O()), [S, O]);
        const N = F.useMemo(() => v ? xx(v) : null, [v]);
        return m.viewport ? (0, E.jsxs)(E.Fragment, {
          children: [N && (0, E.jsx)(mx, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, E.jsx)(fx, {
            scope: r,
            onClose: T,
            children: zu.createPortal((0, E.jsx)(Zw.ItemSlot, {
              scope: r,
              children: (0, E.jsx)(od.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, td.mK)(i, () => {
                  m.isFocusedToastEscapeKeyDownRef.current || T(), m.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, E.jsx)(cd.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": m.swipeDirection,
                  ...p,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, td.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, T()))
                  }),
                  onPointerDown: (0, td.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, td.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(_.current),
                      o = ["left", "right"].includes(m.swipeDirection),
                      a = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                      s = o ? a(0, t) : 0,
                      i = o ? 0 : a(0, r),
                      l = "touch" === e.pointerType ? 10 : 2,
                      c = {
                        x: s,
                        y: i
                      },
                      f = {
                        originalEvent: e,
                        delta: c
                      };
                    n ? (_.current = c, Px("toast.swipeMove", d, f, {
                      discrete: !1
                    })) : Cx(c, m.swipeDirection, l) ? (_.current = c, Px("toast.swipeStart", u, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (b.current = null)
                  }),
                  onPointerUp: (0, td.mK)(e.onPointerUp, e => {
                    const t = _.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), _.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Cx(t, m.swipeDirection, m.swipeThreshold) ? Px("toast.swipeEnd", h, n, {
                        discrete: !0
                      }) : Px("toast.swipeCancel", f, n, {
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
      }), mx = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = tx(ux, t), [a, s] = F.useState(!1), [i, l] = F.useState(!1);
        return function(e = () => {}) {
          const t = (0, bh.c)(e);
          (0, _h.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), F.useEffect(() => {
          const e = window.setTimeout(() => l(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, E.jsx)(Xw.Portal, {
          asChild: !0,
          children: (0, E.jsx)(Kw.VisuallyHidden, {
            ...n,
            children: a && (0, E.jsxs)(E.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, E.jsx)(cd.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var vx = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, E.jsx)(cd.sG.div, {
          ...n,
          ref: t
        })
      });
      vx.displayName = "ToastDescription";
      var yx = "ToastAction",
        gx = F.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, E.jsx)(wx, {
            altText: r,
            asChild: !0,
            children: (0, E.jsx)(_x, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${yx}\`. Expected non-empty \`string\`.`), null)
        });
      gx.displayName = yx;
      var bx = "ToastClose",
        _x = F.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = hx(bx, r);
          return (0, E.jsx)(wx, {
            asChild: !0,
            children: (0, E.jsx)(cd.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, td.mK)(e.onClick, o.onClose)
            })
          })
        });
      _x.displayName = bx;
      var wx = F.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, E.jsx)(cd.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function xx(e) {
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
              } else t.push(...xx(e))
          }
        }), t
      }

      function Px(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.currentTarget,
          a = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, cd.hO)(o, a) : o.dispatchEvent(a)
      }
      var Cx = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Ex(e) {
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

      function Sx(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Ox = rx,
        Tx = ix,
        jx = dx,
        Nx = vx,
        Rx = gx,
        Ix = _x;

      function kx(e) {
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

      function Dx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dx(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = kx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ax(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mx = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bx = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lx(Lx({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Mx(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
        Hx = Bx({
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
        zx = Bx({
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
        Vx = Bx({
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
      const Fx = ({
          testId: e,
          ...t
        }) => (0, E.jsx)(Ox, {
          "data-testid": e,
          ...t
        }),
        Gx = (0, F.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
            className: Vx({
              position: r
            })
          }, n);
          return (0, E.jsx)(Tx, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        Ux = (0, F.createContext)(null);

      function qx() {
        const e = (0, F.useContext)(Ux);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Xx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? Oe.DX : jx,
            i = (0, X.mergeProps)({
              className: zx({
                appearance: n
              })
            }, o);
          return (0, E.jsx)(Ux.Provider, {
            value: {
              appearance: n
            },
            children: (0, E.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        Kx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? Oe.DX : Nx,
            s = (0, X.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcde"
            }, n);
          return (0, E.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Wx = {
          danger: He.CircleX,
          information: He.Info,
          success: He.CircleCheck,
          warning: He.TriangleAlert,
          avocado: He.CircleCheck
        },
        Zx = (0, F.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = qx(), o = e ? Oe.DX : Wx[n], a = (0, X.mergeProps)({
            className: Hx({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, E.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        $x = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, E.jsx)(Rx, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, E.jsx)(Oe.DX, {
              children: t
            }) : (0, E.jsx)($e, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Yx = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, X.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, E.jsx)(Ix, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, E.jsx)(Oe.DX, {
              children: t
            }) : (0, E.jsx)(e_, {
              size: "SM",
              label: n
            })
          })
        });

      function Qx(e) {
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

      function Jx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jx(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Qx(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jx(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nP = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = eP(eP({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) rP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tP(e.variantClassNames, e => tP(e, e => e.split(" ")[0]))
            }
          }, t
        },
        oP = nP({
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
        aP = nP({
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
        sP = nP({
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

      function iP() {
        const e = (0, F.useContext)(lP);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const lP = (0, F.createContext)(null),
        cP = (0, F.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, X.mergeProps)({
              className: sP({
                size: n
              })
            }, o),
            i = r ? Oe.DX : "ol";
          return (0, E.jsx)(lP.Provider, {
            value: {
              size: n
            },
            children: (0, E.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        uP = (0, F.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, F.useRef)(null),
            {
              size: i
            } = iP(),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: a = "a",
                ...s
              } = e, {
                linkProps: i
              } = Xb({
                isDisabled: n || r,
                elementType: a,
                ...s
              }, t), l = {};
              return /^h[1-6]$/.test(a) || (l = i), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              isCurrent: e,
              children: t
            }, s),
            c = r ? Oe.DX : "a",
            u = (0, X.mergeProps)({
              className: (0, Be.clsx)(oP({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, l, o);
          return (0, E.jsx)("li", {
            className: aP({
              size: i
            }),
            ref: a,
            children: (0, E.jsx)(c, {
              ref: s,
              ...u,
              children: t
            })
          })
        }),
        dP = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = He[e];
          return (0, E.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        fP = (0, F.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, F.useState)(r), {
            size: l
          } = iP(), c = (0, X.mergeProps)({
            className: aP({
              size: l
            }),
            "data-testid": t
          }, o);
          return (0, E.jsx)("li", {
            ref: a,
            ...c,
            children: (0, E.jsxs)(dm, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, E.jsx)(fm, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdh",
                "aria-label": n,
                children: "..."
              }), (0, E.jsx)(mm, {
                children: (0, E.jsx)(vm, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, E.jsx)(ym, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        hP = (0, F.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? Oe.DX : gm,
            s = (0, X.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdg",
              "data-testid": r
            }, n);
          return (0, E.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function pP(e) {
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

      function mP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mP(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pP(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vP(vP({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) gP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yP(e.variantClassNames, e => yP(e, e => e.split(" ")[0]))
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
      const _P = (0, F.createContext)(null);

      function wP() {
        const e = (0, F.useContext)(_P);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const xP = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? Oe.DX : "div",
            l = (0, X.mergeProps)({
              className: bP({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, E.jsx)(_P.Provider, {
            value: {
              type: o
            },
            children: (0, E.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...l
            })
          })
        }),
        PP = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? Oe.DX : "div",
            a = (0, X.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, E.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        CP = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = He[e],
            o = (0, X.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, E.jsx)(n, {
            ref: r,
            ...o
          })
        });
      var EP = /^--/;

      function SP(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || EP.test(e) || TP.hasOwnProperty(e) && TP[e] ? ("" + t).trim() : t + "px"
      }
      var OP = {},
        TP = {
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
        jP = ["Webkit", "Ms", "Moz", "O"];
      TP = Object.keys(TP).reduce((e, t) => (jP.forEach(r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t]), e), TP);
      var NP = /^(matrix|translate|scale|rotate|skew)/,
        RP = /^(translate)/,
        IP = /^(rotate|skew)/,
        kP = (e, t) => Gi.num(e) && 0 !== e ? e + t : e,
        DP = (e, t) => Gi.arr(e) ? e.every(e => DP(e, t)) : Gi.num(e) ? e === t : parseFloat(e) === t,
        LP = class extends Pc {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push(e => [`translate3d(${e.map(e=>kP(e,"px")).join(",")})`, DP(e, 0)])), Xi(n, (e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push(e => [e, "" === e]);
              else if (NP.test(t)) {
                if (delete n[t], Gi.und(e)) return;
                const r = RP.test(t) ? "px" : IP.test(t) ? "deg" : "";
                o.push(Ki(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${kP(o,r)})`, DP(o, 0)] : e => [`${t}(${e.map(e=>kP(e,r)).join(",")})`, DP(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (n.transform = new AP(o, a)), super(n)
          }
        },
        AP = class extends ql {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return qi(this.inputs, (r, n) => {
              const o = Fl(r[0]),
                [a, s] = this.transforms[n](Gi.arr(o) ? o : r.map(Fl));
              e += " " + a, t = t && s
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && qi(this.inputs, e => qi(e, e => Vl(e) && Kl(e, this)))
          }
          observerRemoved(e) {
            0 == e && qi(this.inputs, e => qi(e, e => Vl(e) && Wl(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ul(this, e)
          }
        };
      Vi.assign({
        batchedUpdates: zu.unstable_batchedUpdates,
        createStringInterpolator: ac,
        colors: fl
      });
      var MP = Nc(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: s,
                scrollLeft: i,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map(t => r || e.hasAttribute(t) ? t : OP[t] || (OP[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = SP(t, o[t]);
                EP.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach((t, r) => {
              e.setAttribute(t, u[r])
            }), void 0 !== n && (e.className = n), void 0 !== s && (e.scrollTop = s), void 0 !== i && (e.scrollLeft = i), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new LP(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        BP = MP.animated;

      function HP(e) {
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

      function zP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function VP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zP(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = HP(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function FP(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var GP = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        UP = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = VP(VP({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) GP(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return FP(e.variantClassNames, e => FP(e, e => e.split(" ")[0]))
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
      const qP = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, E.jsx)(tp, {
            ref: r,
            ...n
          })
        }),
        XP = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172",
            tabIndex: 0
          }, t);
          return (0, E.jsx)(rp, {
            ref: r,
            ...n
          })
        }),
        KP = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, E.jsx)(np, {
            ref: r,
            ...n
          })
        }),
        WP = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, Se.rl)(),
            o = (0, X.mergeProps)({
              "data-testid": e,
              className: UP({
                isTouchDevice: n
              })
            }, t);
          return (0, E.jsx)(op, {
            ref: r,
            ...o
          })
        }),
        ZP = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e
          }, t);
          return (0, E.jsx)(ap, {
            ref: r,
            ...n
          })
        }),
        $P = () => {
          const e = (0, Se.Ub)(X.breakpoints.mobile);
          return t => e ? {
            transform: `translate3d(0,${100-t}%,0)`
          } : {
            opacity: t / 100,
            transform: `translate(-50%, -50%) scale(${.95+t/100*.05})`
          }
        },
        YP = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function QP(e) {
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

      function JP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function eC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? JP(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = QP(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : JP(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tC(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rC = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = eC(eC({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) rC(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
        oC = "foundry_8kowh41",
        aC = nC({
          defaultClassName: "foundry_xov33n5",
          variantClassNames: {
            headerAlign: {
              left: "foundry_xov33n6",
              center: "foundry_xov33n7"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sC = nC({
          defaultClassName: "foundry_xov33n9",
          variantClassNames: {
            align: {
              left: "foundry_xov33na",
              center: "foundry_xov33nb"
            },
            appearance: {
              sentence: "foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8",
              uppercase: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm foundry_tdsdcdr"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const iC = (0, F.createContext)({
        isControlled: !1,
        openImmediately: !1,
        setIsOpen: () => {},
        contentId: "",
        descriptionId: "",
        triggerRef: (0, F.createRef)(),
        dialogSpringRef: Ru(),
        overlaySpringRef: Ru(),
        headerAlign: "center",
        setHeaderAlign: () => {}
      });

      function lC() {
        const e = (0, F.useContext)(iC);
        if (!e) throw Error("useDialogContext can only be used in a <Dialog.Root />");
        return e
      }
      const cC = ({
          testId: e,
          defaultOpen: t,
          onOpenChange: r,
          isOpen: n,
          onOpenTransitionStart: o,
          onOpenTransitionComplete: a,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: i,
          ...l
        }) => {
          const [c, u] = (0, F.useState)("center"), d = (0, X.mergeProps)({
            "data-testid": e
          }, l), [f, h] = (0, Se.ic)({
            prop: n,
            defaultProp: t ?? !1,
            onChange: r
          }), p = (0, Se.ZC)(f);
          return (0, E.jsx)(iC.Provider, {
            value: {
              isOpen: f,
              isControlled: void 0 !== n,
              openImmediately: !(void 0 !== p || !t),
              setIsOpen: h,
              onOpenTransitionStart: o,
              onOpenTransitionComplete: a,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: i,
              contentId: (0, F.useId)(),
              descriptionId: (0, F.useId)(),
              triggerRef: (0, F.useRef)(null),
              dialogSpringRef: ku(),
              overlaySpringRef: ku(),
              headerAlign: c,
              setHeaderAlign: u
            },
            children: (0, E.jsx)(Mf.Root, {
              open: f,
              onOpenChange: h,
              ...d
            })
          })
        },
        uC = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = lC(), s = YP(), i = (0, Se.jt)(), l = Du(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: Uc.stiff,
            immediate: i || a
          }), c = (0, X.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n0"
          }, t), u = BP(Mf.Overlay);
          return (0, F.useEffect)(() => {
            o.start()
          }, [n]), l((e, t) => t ? (0, E.jsx)(u, {
            forceMount: !0,
            ref: r,
            ...c,
            style: e
          }) : null)
        }),
        dC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, a) => {
          const {
            isOpen: s,
            setIsOpen: i,
            openImmediately: l,
            contentId: c,
            triggerRef: u,
            onOpenTransitionStart: d,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: h,
            onCloseTransitionComplete: p,
            dialogSpringRef: m,
            overlaySpringRef: v
          } = lC(), y = (0, Se.rl)(), g = (0, Se.jt)(), b = (0, F.useRef)(null), _ = $P(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = YP(),
              s = $P(),
              i = (0, F.useRef)();
            var l;
            return {
              bindDrag: (l = ({
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
                if (h && (i.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(p, u)), (!i.current || c < -70) && d(), i.current) {
                  const e = 100 * (m - c) / m;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (c > .5 * m || l > .5 && u > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: Uc.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: Uc.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: Uc.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: Uc.stiff
                })))
              }, Br(Hr), tn({
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
              i(!1), h?.()
            },
            onCloseTransitionComplete: p
          }), x = Du(s, {
            from: _(0),
            enter: _(100),
            leave: _(0),
            delay: s ? 100 : 0,
            config: Uc.stiff,
            ref: m,
            immediate: g || l,
            onStart: (e, t, r) => {
              r ? d?.() : h?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : p?.()
            }
          });
          (0, F.useEffect)(() => {
            m.start()
          }, [s]);
          const P = (0, Se.UP)(b, a),
            C = y && !g && !n && w(),
            S = (0, X.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || u.current?.focus()
              },
              id: c
            }, C || {}, o),
            O = BP(Mf.Content);
          return x((t, r) => r ? (0, E.jsx)(O, {
            forceMount: !0,
            ref: P,
            ...S,
            style: t,
            children: e
          }) : null)
        }),
        fC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            "data-testid": t,
            className: "foundry_xov33n4 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, r);
          return (0, E.jsx)(Mf.Title, {
            ref: n,
            ...o,
            children: e
          })
        }),
        hC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            "data-testid": t
          }, r);
          return (0, E.jsx)(Mf.Description, {
            ref: n,
            ...o,
            children: e
          })
        }),
        pC = (0, F.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            className: "foundry_xov33ni",
            "data-testid": t
          }, r);
          return (0, E.jsxs)(qP, {
            ref: n,
            ...o,
            children: [(0, E.jsx)(XP, {
              className: "foundry_xov33nj",
              children: e
            }), (0, E.jsx)(KP, {
              className: "foundry_xov33nk",
              orientation: "vertical",
              children: (0, E.jsx)(WP, {
                className: "foundry_xov33nl"
              })
            })]
          })
        }),
        mC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nf"
            }, n),
            s = e ? Oe.DX : "div";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        vC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            headerAlign: a
          } = (0, F.useContext)(iC), s = (0, X.mergeProps)({
            "data-testid": r,
            className: aC({
              headerAlign: a
            })
          }, n), i = e ? Oe.DX : "header";
          return (0, E.jsx)(i, {
            ref: o,
            ...s,
            children: t
          })
        }),
        yC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          align: n = "left",
          appearance: o = "sentence",
          ...a
        }, s) => {
          const {
            setHeaderAlign: i
          } = (0, F.useContext)(iC);
          (0, F.useEffect)(() => {
            i(n)
          }, [n]);
          const l = (0, X.mergeProps)({
              "data-testid": r,
              className: sC({
                align: n,
                appearance: o
              })
            }, a),
            c = e ? Oe.DX : Mf.Title;
          return (0, E.jsx)(c, {
            ref: s,
            ...l,
            children: t
          })
        }),
        gC = (0, F.forwardRef)(({
          onPress: e,
          onClick: t,
          ...r
        }, n) => {
          const {
            isControlled: o,
            setIsOpen: a
          } = lC(), s = (0, X.mergeProps)({
            className: (0, Be.clsx)("foundry_xov33n8", "foundry_xov33n1"),
            onPress: function(r) {
              e?.(r) ?? t?.(r), !o && a(!1)
            }
          }, r);
          return (0, E.jsx)(e_, {
            ...s,
            size: "LG",
            ref: n
          })
        }),
        bC = (0, F.forwardRef)((e, t) => {
          const r = (0, X.mergeProps)({
            className: "foundry_xov33n2"
          }, e);
          return (0, E.jsx)(st, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        _C = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33ng"
            }, n),
            s = e ? Oe.DX : "div";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        wC = (0, F.forwardRef)(({
          children: e,
          onPress: t,
          onClick: r,
          ...n
        }, o) => {
          const {
            isControlled: a,
            setIsOpen: s
          } = lC(), i = (0, X.mergeProps)({
            className: oC,
            size: "LG",
            fullWidth: !1,
            onPress: function(e) {
              t?.(e) ?? r?.(e), !a && s(!1)
            }
          }, n);
          return (0, E.jsx)($e, {
            ref: o,
            ...i,
            children: e
          })
        }),
        xC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_xov33nh"
            }, n),
            s = e ? Oe.DX : "footer";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        PC = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          onPress: r,
          onClick: n,
          ...o
        }, a) => {
          const {
            isControlled: s,
            setIsOpen: i,
            isOpen: l,
            contentId: c,
            triggerRef: u
          } = lC(), d = (0, Se.UP)(u, a), f = (0, X.mergeProps)({
            className: oC,
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": l,
            "aria-controls": c,
            onClick: function(e) {
              r?.(e) ?? n?.(e), !s && i(!0)
            }
          }, o), h = e ? Oe.DX : Mf.Trigger;
          return (0, E.jsx)(h, {
            ...f,
            ref: d,
            children: t
          })
        }),
        CC = ({
          testId: e,
          ...t
        }) => {
          const r = (0, X.mergeProps)({
            "data-testid": e
          }, t);
          return (0, E.jsx)(Mf.Portal, {
            forceMount: !0,
            ...r
          })
        };

      function EC(...e) {
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
            return F.useMemo(() => ({
              [`__scope${t.scopeName}`]: n
            }), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var SC = r(45824),
        OC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, SC.createSlot)(`Primitive.${t}`),
            n = F.forwardRef((e, n) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, E.jsx)(s, {
                ...a,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {}),
        TC = r(36553);

      function jC() {
        return () => {}
      }
      var NC = "Avatar",
        [RC, IC] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map(e => F.createContext(e));
            return function(r) {
              const n = r?.[e] || t;
              return F.useMemo(() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              }), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = F.createContext(n);
            o.displayName = t + "Context";
            const a = r.length;
            r = [...r, n];
            const s = t => {
              const {
                scope: r,
                children: n,
                ...s
              } = t, i = r?.[e]?.[a] || o, l = F.useMemo(() => s, Object.values(s));
              return (0, E.jsx)(i.Provider, {
                value: l,
                children: n
              })
            };
            return s.displayName = t + "Provider", [s, function(r, s) {
              const i = s?.[e]?.[a] || o,
                l = F.useContext(i);
              if (l) return l;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, EC(n, ...t)]
        }(NC),
        [kC, DC] = RC(NC),
        LC = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = F.useState("idle");
          return (0, E.jsx)(kC, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, E.jsx)(OC.span, {
              ...n,
              ref: t
            })
          })
        });
      LC.displayName = NC;
      var AC = "AvatarImage",
        MC = F.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...a
          } = e, s = DC(AC, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, TC.useSyncExternalStore)(jC, () => !0, () => !1),
              o = F.useRef(null),
              a = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, i] = F.useState(() => HC(a, e));
            return (0, _h.N)(() => {
              i(HC(a, e))
            }, [a, e]), (0, _h.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!a) return;
              const n = e("loaded"),
                o = e("error");
              return a.addEventListener("load", n), a.addEventListener("error", o), t && (a.referrerPolicy = t), "string" == typeof r && (a.crossOrigin = r), () => {
                a.removeEventListener("load", n), a.removeEventListener("error", o)
              }
            }, [a, r, t]), s
          }(n, a), l = (0, bh.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, _h.N)(() => {
            "idle" !== i && l(i)
          }, [i, l]), "loaded" === i ? (0, E.jsx)(OC.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      MC.displayName = AC;
      var BC = "AvatarFallback";

      function HC(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      F.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = DC(BC, r), [s, i] = F.useState(void 0 === n);
        return F.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, E.jsx)(OC.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = BC;
      var zC = LC,
        VC = MC;

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

      function GC(e, t) {
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
          t % 2 ? GC(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = FC(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : GC(Object(r)).forEach(function(t) {
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
        KC = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = UC(UC({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
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
        WC = KC({
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
        ZC = "var(--foundry_v912w22)",
        $C = "var(--foundry_v912w23)",
        YC = KC({
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
        QC = KC({
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
        JC = "var(--foundry_v912w21)",
        eE = "var(--foundry_v912w20)",
        tE = KC({
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
      const rE = (0, F.createContext)(null);

      function nE() {
        const e = (0, F.useContext)(rE);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const oE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const l = (0, X.mergeProps)({
            "data-testid": r,
            "aria-disabled": a,
            className: WC({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, E.jsx)(rE.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, E.jsx)(zC, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        aE = (0, F.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = nE(), [i, l] = (0, F.useState)(!1);
          (0, F.useEffect)(() => {
            l(!1)
          }, [r]);
          const c = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            u = (0, X.mergeProps)({
              className: YC({
                isDisabled: s
              }),
              src: c,
              onLoadingStatusChange: e => {
                "error" === e && l(!0)
              },
              asChild: e
            }, n);
          return (0, E.jsx)("span", {
            className: QC({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, E.jsx)(VC, {
              ref: o,
              ...u
            })
          })
        }),
        sE = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, F.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = nE(),
            l = (0, Se.UP)(o, n),
            c = (0, X.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: tE({
                status: s,
                size: a,
                isDisabled: i
              }),
              style: U({
                [eE]: t?.online,
                [JC]: t?.offline,
                [ZC]: t?.away,
                [$C]: t?.busy
              })
            }, r);
          return (0, E.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function iE(e) {
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

      function lE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? lE(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = iE(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lE(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function uE(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dE = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fE = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cE(cE({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) dE(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return uE(e.variantClassNames, e => uE(e, e => e.split(" ")[0]))
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
      const hE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? Oe.DX : "nav";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        pE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? Oe.DX : "div";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        mE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, F.useRef)(null),
            i = (0, Se.UP)(s, a),
            {
              linkProps: l,
              isPressed: c
            } = Xb(o, s),
            u = (0, X.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": c,
              "data-active": r,
              className: (0, Be.clsx)(fE({
                isActive: r
              }))
            }, l),
            d = e ? Oe.DX : "a";
          return (0, E.jsx)(d, {
            ref: i,
            ...u,
            children: t
          })
        }),
        vE = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, E.jsx)(mE, {
            ref: n,
            ...o,
            children: (0, E.jsx)(He.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        yE = (0, F.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, E.jsx)(mE, {
            ref: n,
            ...o,
            children: (0, E.jsx)(He.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        gE = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, X.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdh"
            }, n),
            a = e ? Oe.DX : "span";
          return (0, E.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        bE = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? Oe.DX : "div";
          return (0, E.jsx)(a, {
            ...o,
            children: t
          })
        },
        _E = (0, F.createContext)(null);

      function wE() {
        const e = (0, F.useContext)(_E);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const xE = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.useId)(),
            a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? Oe.DX : "div";
          return (0, E.jsx)(_E.Provider, {
            value: {
              labelId: o
            },
            children: (0, E.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        PE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = wE(), s = (0, X.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
          }, n), i = e ? Oe.DX : "label";
          return (0, E.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        CE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = wE(), s = (0, X.mergeProps)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? Oe.DX : Dm;
          return (0, E.jsxs)(i, {
            ...s,
            children: [(0, E.jsxs)(Mm, {
              ref: o,
              children: [(0, E.jsx)(Bm, {
                placeholder: r
              }), (0, E.jsx)(Hm, {})]
            }), (0, E.jsx)(Xm, {
              children: (0, E.jsx)(Lm, {
                children: (0, E.jsx)(Am, {
                  children: t
                })
              })
            })]
          })
        }),
        EE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r
            }, n),
            s = e ? Oe.DX : Gm;
          return (0, E.jsx)(s, {
            ...a,
            ref: o,
            children: (0, E.jsx)(Um, {
              children: t
            })
          })
        }),
        SE = (0, F.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdd foundry_tdsdcdg"
            }, n),
            s = e ? Oe.DX : "p";
          return (0, E.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var OE = "rovingFocusGroup.onEntryFocus",
        TE = {
          bubbles: !1,
          cancelable: !0
        },
        jE = "RovingFocusGroup",
        [NE, RE, IE] = (0, of.N)(jE),
        [kE, DE] = (0, nd.A)(jE, [IE]),
        [LE, AE] = kE(jE),
        ME = F.forwardRef((e, t) => (0, E.jsx)(NE.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, E.jsx)(NE.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, E.jsx)(BE, {
              ...e,
              ref: t
            })
          })
        }));
      ME.displayName = jE;
      var BE = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: l,
            onEntryFocus: c,
            preventScrollOnEntryFocus: u = !1,
            ...d
          } = e, f = F.useRef(null), h = (0, rd.s)(t, f), p = (0, tf.jH)(a), [m, v] = (0, dd.useControllableState)({
            prop: s,
            defaultProp: i ?? null,
            onChange: l,
            caller: jE
          }), [y, g] = F.useState(!1), b = (0, bh.c)(c), _ = RE(r), w = F.useRef(!1), [x, P] = F.useState(0);
          return F.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(OE, b), () => e.removeEventListener(OE, b)
          }, [b]), (0, E.jsx)(LE, {
            scope: r,
            orientation: n,
            dir: p,
            loop: o,
            currentTabStopId: m,
            onItemFocus: F.useCallback(e => v(e), [v]),
            onItemShiftTab: F.useCallback(() => g(!0), []),
            onFocusableItemAdd: F.useCallback(() => P(e => e + 1), []),
            onFocusableItemRemove: F.useCallback(() => P(e => e - 1), []),
            children: (0, E.jsx)(cd.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...d,
              ref: h,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, td.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, td.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(OE, TE);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = _().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === m),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    FE(n, u)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, td.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        HE = "RovingFocusGroupItem",
        zE = F.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, l = (0, ad.useId)(), c = a || l, u = AE(HE, r), d = u.currentTabStopId === c, f = RE(r), {
            onFocusableItemAdd: h,
            onFocusableItemRemove: p,
            currentTabStopId: m
          } = u;
          return F.useEffect(() => {
            if (n) return h(), () => p()
          }, [n, h, p]), (0, E.jsx)(NE.ItemSlot, {
            scope: r,
            id: c,
            focusable: n,
            active: o,
            children: (0, E.jsx)(cd.sG.span, {
              tabIndex: d ? 0 : -1,
              "data-orientation": u.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, td.mK)(e.onMouseDown, e => {
                n ? u.onItemFocus(c) : e.preventDefault()
              }),
              onFocus: (0, td.mK)(e.onFocus, () => u.onItemFocus(c)),
              onKeyDown: (0, td.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void u.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : VE[n]
                }(e, u.orientation, u.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let a = o.map(e => e.ref.current);
                  if ("last" === t) a.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && a.reverse();
                    const o = a.indexOf(e.currentTarget);
                    a = u.loop ? (n = o + 1, (r = a).map((e, t) => r[(n + t) % r.length])) : a.slice(o + 1)
                  }
                  setTimeout(() => FE(a))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: d,
                hasTabStop: null != m
              }) : s
            })
          })
        });
      zE.displayName = HE;
      var VE = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function FE(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var GE = ME,
        UE = zE,
        qE = "Toggle",
        XE = F.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, dd.useControllableState)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: qE
          });
          return (0, E.jsx)(cd.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, td.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      XE.displayName = qE;
      var KE = "ToggleGroup",
        [WE, ZE] = (0, nd.A)(KE, [DE]),
        $E = DE(),
        YE = F.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, E.jsx)(eS, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, E.jsx)(tS, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${KE}\``)
        });
      YE.displayName = KE;
      var [QE, JE] = WE(KE), eS = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, dd.useControllableState)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: KE
        });
        return (0, E.jsx)(QE, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: F.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: F.useCallback(() => i(""), [i]),
          children: (0, E.jsx)(oS, {
            ...a,
            ref: t
          })
        })
      }), tS = F.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, dd.useControllableState)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: KE
        }), l = F.useCallback(e => i((t = []) => [...t, e]), [i]), c = F.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, E.jsx)(QE, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: l,
          onItemDeactivate: c,
          children: (0, E.jsx)(oS, {
            ...a,
            ref: t
          })
        })
      });
      YE.displayName = KE;
      var [rS, nS] = WE(KE), oS = F.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...l
        } = e, c = $E(r), u = (0, tf.jH)(s), d = {
          role: "group",
          dir: u,
          ...l
        };
        return (0, E.jsx)(rS, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, E.jsx)(GE, {
            asChild: !0,
            ...c,
            orientation: a,
            dir: u,
            loop: i,
            children: (0, E.jsx)(cd.sG.div, {
              ...d,
              ref: t
            })
          }) : (0, E.jsx)(cd.sG.div, {
            ...d,
            ref: t
          })
        })
      }), aS = "ToggleGroupItem", sS = F.forwardRef((e, t) => {
        const r = JE(aS, e.__scopeToggleGroup),
          n = nS(aS, e.__scopeToggleGroup),
          o = $E(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          l = F.useRef(null);
        return n.rovingFocus ? (0, E.jsx)(UE, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: l,
          children: (0, E.jsx)(iS, {
            ...i,
            ref: t
          })
        }) : (0, E.jsx)(iS, {
          ...i,
          ref: t
        })
      });
      sS.displayName = aS;
      var iS = F.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = JE(aS, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, E.jsx)(XE, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }),
        lS = YE,
        cS = sS;

      function uS(e) {
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

      function dS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function fS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dS(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = uS(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dS(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hS(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var pS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mS = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fS(fS({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) pS(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hS(e.variantClassNames, e => hS(e, e => e.split(" ")[0]))
            }
          }, t
        },
        vS = "var(--foundry_zxwkyk2)",
        yS = "var(--foundry_zxwkyk3)",
        gS = mS({
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
        bS = mS({
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
        _S = mS({
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
        wS = "var(--foundry_zxwkyk1)",
        xS = "var(--foundry_zxwkyk0)",
        PS = mS({
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
      const CS = (0, F.createContext)(null);

      function ES() {
        const e = (0, F.useContext)(CS);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const SS = (0, F.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
            "data-testid": e,
            className: gS({
              size: t
            }),
            type: r
          }, n);
          return (0, E.jsx)(CS.Provider, {
            value: {
              size: t
            },
            children: (0, E.jsx)(lS, {
              ref: o,
              ...a
            })
          })
        }),
        OS = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = ES(), o = (0, X.mergeProps)({
            "data-testid": e,
            className: bS({
              size: n
            })
          }, t);
          return (0, E.jsx)(cS, {
            ref: r,
            ...o
          })
        }),
        TS = (0, F.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = ES(), o = He[e];
          return (0, E.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        jS = (0, F.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, X.mergeProps)({
            "data-testid": e,
            className: PS({
              status: r
            }),
            style: U({
              [xS]: t?.online,
              [wS]: t?.offline,
              [vS]: t?.away,
              [yS]: t?.busy
            })
          }, n);
          return (0, E.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        NS = (0, F.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = ES(), a = (0, X.mergeProps)({
            "data-testid": e,
            className: _S({
              variant: t,
              size: o
            })
          }, r);
          return (0, E.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var RS = r(42512);

      function IS(e) {
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

      function kS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function DS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kS(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = IS(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kS(Object(r)).forEach(function(t) {
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
      var AS = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        MS = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = DS(DS({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var l = e.variantClassNames[o][i];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) AS(c, n, e.defaultVariants) && (r += " " + u);
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
      const BS = (0, F.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        HS = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, Se.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, X.mergeProps)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, E.jsx)(BS.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, E.jsx)(RS.Root, {
              ...s
            })
          })
        },
        zS = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, E.jsx)(RS.Trigger, {
            ref: r,
            ...n
          })
        }),
        VS = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        FS = (0, F.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, F.useContext)(BS), s = (0, F.useRef)(null), i = (0, Se.UP)(s, o), {
            buttonProps: l
          } = (0, Se.sL)(n, s), c = (0, X.mergeProps)({
            "data-testid": r,
            className: MS({
              size: t
            })
          }, l), u = a ? He.ChevronUp : He.ChevronDown;
          return (0, E.jsxs)("button", {
            ref: i,
            ...c,
            children: [e, (0, E.jsx)(u, {
              label: "",
              size: VS[t]
            })]
          })
        }),
        GS = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e
          }, t);
          return (0, E.jsx)(RS.Anchor, {
            ref: r,
            ...n
          })
        }),
        US = (0, F.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, X.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, E.jsx)(RS.Content, {
            ref: n,
            ...o
          })
        }),
        qS = (0, F.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, X.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, E.jsx)(RS.Arrow, {
            ref: r,
            ...n
          })
        }),
        XS = e => (0, E.jsx)(RS.Portal, {
          ...e
        }),
        KS = e => (0, E.jsx)(RS.Close, {
          ...e
        })
    },
    71753(e, t, r) {
      r.d(t, {
        b: () => i
      });
      var n = r(71127),
        o = r(89630),
        a = r(42295),
        s = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(o.Root, {
              children: t
            })]
          })
        };
      s.displayName = "AccessibleIcon";
      var i = s
    },
    20027(e, t, r) {
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(85426),
        a = r(95362),
        s = r(91738),
        i = r(42295);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [c, u] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), a = n.useRef(new Map).current;
            return (0, i.jsx)(c, {
              scope: t,
              itemMap: a,
              collectionRef: o,
              children: r
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          h = (0, s.createSlot)(f),
          p = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(f, r), s = (0, a.s)(t, o.collectionRef);
            return (0, i.jsx)(h, {
              ref: s,
              children: n
            })
          });
        p.displayName = f;
        const m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          y = (0, s.createSlot)(m),
          g = n.forwardRef((e, t) => {
            const {
              scope: r,
              children: o,
              ...s
            } = e, l = n.useRef(null), c = (0, a.s)(t, l), d = u(m, r);
            return n.useEffect(() => (d.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              d.itemMap.delete(l)
            })), (0, i.jsx)(y, {
              [v]: "",
              ref: c,
              children: o
            })
          });
        return g.displayName = m, [{
          Provider: d,
          Slot: p,
          ItemSlot: g
        }, function(t) {
          const r = u(e + "CollectionConsumer", t);
          return n.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${v}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, l]
      }
      Map
    },
    77768(e, t, r) {
      r.d(t, {
        jH: () => a
      });
      var n = r(71127),
        o = (r(42295), n.createContext(void 0));

      function a(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    },
    29044(e, t, r) {
      r.d(t, {
        Z: () => o
      });
      var n = r(71127);

      function o(e) {
        const t = n.useRef({
          value: e,
          previous: e
        });
        return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    }
  }
]);