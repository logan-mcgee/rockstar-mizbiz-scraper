try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5f1ba559-6591-4f09-9964-12257fa1a110", e._sentryDebugIdIdentifier = "sentry-dbid-5f1ba559-6591-4f09-9964-12257fa1a110")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8587], {
    8587(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => b,
        Body: () => le,
        Breadcrumbs: () => m,
        Button: () => R.$,
        Checkbox: () => d,
        ChipGroup: () => C,
        Code: () => ue,
        Dialog: () => w,
        Display: () => fe,
        Divider: () => F,
        Dropdown: () => a,
        Heading: () => ve,
        IconButton: () => P.K,
        Label: () => ye,
        Lightbox: () => o,
        Loader: () => ee,
        Pagination: () => _,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => te.y,
        Switch: () => s,
        Tag: () => h,
        Text: () => ge,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => be,
        Toast: () => y,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Wr,
        Content: () => Hr,
        Portal: () => Gr,
        Root: () => Kr,
        Trigger: () => Zr,
        useTooltipContext: () => Xr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Ho,
        Close: () => Yo,
        Content: () => Bo,
        Controls: () => Wo,
        CssVars: () => ea,
        Download: () => Jo,
        Image: () => Zo,
        Keyboard: () => Uo,
        LightboxContext: () => To,
        OpenIcon: () => Vo,
        Overlay: () => Fo,
        Portal: () => Mo,
        Reset: () => Qo,
        Root: () => zo,
        RootImplContext: () => Eo,
        Thumbnail: () => Ao,
        Trigger: () => Lo,
        Zoom: () => $o,
        ZoomPan: () => qo
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => wi,
        Description: () => Pi,
        Hint: () => Ni,
        Label: () => Ri,
        Option: () => Di,
        OptionIcon: () => Ii,
        OptionText: () => Si,
        Portal: () => Ti,
        Root: () => gi,
        ScrollArea: () => _i,
        StatusIcon: () => Ei,
        StatusRoot: () => zi,
        StatusText: () => ki,
        Trigger: () => Ci,
        TriggerIcon: () => Oi,
        TriggerText: () => ji,
        Viewport: () => xi,
        useDropdownContext: () => bi
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => ed,
        Input: () => Qi,
        Label: () => Ji,
        Root: () => Yi,
        useSwitchContext: () => $i
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => nd,
        CheckMD: () => rd,
        CheckXL: () => od,
        DashLG: () => sd,
        DashMD: () => ad,
        DashXL: () => id
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Od,
        ErrorText: () => Rd,
        Group: () => Dd,
        GroupDescription: () => Id,
        GroupErrorText: () => zd,
        GroupItems: () => Td,
        GroupLabel: () => Sd,
        Input: () => Cd,
        Label: () => jd,
        Root: () => _d,
        useGroupContext: () => Nd
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ud,
        Hint: () => $d,
        Input: () => Gd,
        Label: () => Wd,
        Root: () => Hd,
        RootContext: () => Kd,
        StatusIcon: () => Qd,
        StatusRoot: () => Yd,
        StatusText: () => Jd,
        useTextAreaContext: () => Zd
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Ol,
        DotMD: () => jl,
        DotXL: () => Rl
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => hl,
        Input: () => Nl,
        Label: () => vl,
        Option: () => Pl,
        OptionDescription: () => Sl,
        OptionLabel: () => Dl,
        Options: () => pl,
        Root: () => fl,
        StatusIcon: () => ml,
        StatusRoot: () => yl,
        StatusText: () => bl,
        useRadioGroupContext: () => ul
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Jl,
        Control: () => $l,
        Description: () => tc,
        Hint: () => Ul,
        Icon: () => Ql,
        Input: () => Yl,
        Label: () => Gl,
        PasswordButton: () => ec,
        Root: () => Wl,
        StatusIcon: () => nc,
        StatusRoot: () => rc,
        StatusText: () => oc
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Pc,
        CloseButton: () => kc,
        Description: () => Ic,
        ErrorText: () => Ec,
        Footer: () => zc,
        Header: () => Rc,
        Icon: () => Dc,
        Link: () => Tc,
        Root: () => Oc,
        RootContext: () => Cc,
        Title: () => Sc,
        iconStatusMap: () => Nc,
        useAlertContext: () => jc
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => Qc,
        CloseButton: () => tu,
        Description: () => Yc,
        Icon: () => $c,
        Link: () => eu,
        PaginationCounter: () => au,
        PaginationNav: () => ru,
        PaginationNextButton: () => nu,
        PaginationPrevButton: () => ou,
        PaginationViewport: () => Jc,
        Root: () => Gc,
        RootContext: () => Hc,
        iconStatusMap: () => Uc,
        useAlertBannerContext: () => Wc
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => wu,
        Icon: () => gu,
        Label: () => bu,
        Root: () => mu,
        RootContext: () => hu,
        useTagContext: () => yu
      });
      var y = {};
      r.r(y), r.d(y, {
        Action: () => jf,
        CloseButton: () => Of,
        Description: () => xf,
        Icon: () => Cf,
        Provider: () => yf,
        Root: () => wf,
        RootContext: () => bf,
        Viewport: () => mf,
        iconAppearanceMap: () => _f,
        useToastContext: () => gf
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => Ff,
        Item: () => Mf,
        OverflowMenu: () => Bf,
        OverflowMenuItem: () => qf,
        Root: () => Vf,
        RootContext: () => Af,
        useBreadcrumbsContext: () => Lf
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => Jf,
        Label: () => Qf,
        Root: () => Yf,
        useBadgeContext: () => $f
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => fp,
        Root: () => dp,
        Scrollbar: () => cp,
        Thumb: () => up,
        Viewport: () => lp
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => Lp,
        CloseButton: () => kp,
        Content: () => Pp,
        Description: () => Dp,
        Footer: () => Ap,
        Header: () => Tp,
        HeaderButton: () => Ep,
        HeaderTitle: () => zp,
        Layout: () => Ip,
        Overlay: () => Rp,
        Portal: () => Op,
        Root: () => _p,
        ScrollArea: () => Sp,
        Title: () => Np,
        Trigger: () => jp
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => yv,
        Root: () => hv,
        StatusIndicator: () => mv,
        useAvatarContext: () => vv
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => Sv,
        Dropdown: () => kv,
        DropdownLabel: () => Ev,
        Ellipsis: () => Dv,
        Item: () => Rv,
        Label: () => Av,
        Next: () => Nv,
        Option: () => Lv,
        Pages: () => Ov,
        Prev: () => Pv,
        ResultsPerPage: () => zv,
        Root: () => jv
      });
      var C = {};
      r.r(C), r.d(C, {
        Icon: () => Mh,
        Item: () => Vh,
        Label: () => Bh,
        Root: () => Ah,
        StatusIndicator: () => Fh,
        useChipGroupContext: () => Lh
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => Iy,
        Arrow: () => zy,
        Close: () => ky,
        Content: () => Ty,
        Portal: () => Ey,
        Root: () => Py,
        RootContext: () => Ry,
        Trigger: () => Ny,
        TriggerButton: () => Sy
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => vm,
        Label: () => hm,
        Root: () => um,
        Track: () => pm,
        UnitLabel: () => ym
      });
      var R = r(90179),
        P = r(76789),
        N = r(39793),
        D = r(81270),
        S = r(93082),
        I = r(84173);

      function T(e) {
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

      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? z(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = T(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function k(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var L, A, V = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        M = (L = {
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
        }, A = e => {
          var t = L.defaultClassName,
            r = E(E({}, L.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : L.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = L.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of L.compoundVariants) V(d, r, L.defaultVariants) && (t += " " + l);
          return t
        }, A.variants = () => Object.keys(L.variantClassNames), A.classNames = {
          get base() {
            return L.defaultClassName.split(" ")[0]
          },
          get variants() {
            return k(L.variantClassNames, e => k(e, e => e.split(" ")[0]))
          }
        }, A);
      const F = (0, S.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          c = o ? I.DX : d;
        return (0, N.jsx)(c, {
          ref: i,
          className: (0, D.clsx)(M({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var B = r(69353),
        q = r(819),
        X = r(40632);

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

      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Z(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = K(o)) in n ? Object.defineProperty(n, o, {
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

      function W(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var G = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        U = "var(--foundry_9dxgbc2)",
        $ = "var(--foundry_9dxgbc3)",
        Y = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = H(H({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) G(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return W(e.variantClassNames, e => W(e, e => e.split(" ")[0]))
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
        Q = "var(--foundry_9dxgbc0)",
        J = "var(--foundry_9dxgbc1)";
      const ee = (0, S.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: a = "MD",
        ...s
      }, i) => {
        const d = (0, X.zQ)(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, B.v6)({
            className: Y({
              size: l
            }),
            "data-testid": t,
            style: (0, q.DI)({
              [Q]: n?.pulseColorBackground,
              [J]: n?.pulseColorForeground,
              [U]: n?.gradientColorBackground,
              [$]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? I.DX : "div";
        return (0, N.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, N.jsx)(I.xV, {
            children: r
          }) : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, N.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });
      var te = r(14889);

      function re(e) {
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

      function ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ne(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = re(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function(t) {
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
      var se = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ie = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oe(oe({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) se(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ae(e.variantClassNames, e => ae(e, e => e.split(" ")[0]))
            }
          }, t
        },
        de = ie({
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
      const le = (0, S.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? I.DX : "p",
          i = (0, B.v6)({
            className: de({
              size: n,
              appearance: r
            })
          }, o);
        return (0, N.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var ce = ie({
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
      const ue = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? I.DX : "p",
            s = (0, B.v6)({
              className: ce({
                appearance: r
              })
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        fe = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "h1",
            a = (0, B.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var pe = ie({
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
      const ve = (0, S.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? I.DX : `h${7===t?6:t}`,
          s = (0, B.v6)(n, {
            className: pe({
              level: t
            })
          });
        return (0, N.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var he = ie({
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
      const ye = (0, S.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? I.DX : "p",
          i = (0, B.v6)({
            className: he({
              size: n,
              appearance: r
            })
          }, o);
        return (0, N.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var me = ie({
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
      const be = {
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
        ge = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? I.DX : be[r] || "span",
            s = (0, B.v6)(n, {
              className: me({
                semantic: r
              })
            });
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var we = r(32996),
        xe = r(93529),
        _e = r(99206),
        Ce = r(34811);
      const je = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Oe = ([e, t]) => ({
        x: e,
        y: t
      }), Re = (e, t) => (e.x = t.x, e.y = t.y, e), Pe = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ne = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), De = (e, t, r) => Math.min(Math.max(e, t), r);
      var Se = r(90004);

      function Ie(e) {
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

      function Te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Te(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ie(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Te(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ee(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ke = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Le = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ze(ze({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ke(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ee(e.variantClassNames, e => Ee(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ae = Le({
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
        Ve = Le({
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
      xe.os.registerPlugin(_e.L);
      const Me = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Fe = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Be = (0, q.Tm)("var(--foundry_1a74xwb0)");
      var qe = r(50888);
      const Xe = {
        "en-US": r.e(4974).then(r.bind(r, 84974)),
        "de-DE": r.e(5389).then(r.bind(r, 55389)),
        "es-ES": r.e(4235).then(r.bind(r, 4235)),
        "es-MX": r.e(5038).then(r.bind(r, 85038)),
        "fr-FR": r.e(9947).then(r.bind(r, 59947)),
        "it-IT": r.e(2837).then(r.bind(r, 72837)),
        "ja-JP": r.e(622).then(r.bind(r, 90622)),
        "ko-KR": r.e(4756).then(r.bind(r, 4756)),
        "pl-PL": r.e(9447).then(r.bind(r, 69447)),
        "pt-BR": r.e(8915).then(r.bind(r, 8915)),
        "ru-RU": r.e(6501).then(r.bind(r, 26501)),
        "zh-CN": r.e(4572).then(r.bind(r, 74572)),
        "zh-TW": r.e(4144).then(r.bind(r, 34144))
      };
      class Ke {
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
          return r ? t : De(t, this.max[e], this.min[e])
        }
      }
      class Ze {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Ne(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Ne(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Ne(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class He {
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
      class We {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Re(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Re(this.prevTap, {
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
          return (e - (this.slide.bounds.center.y ?? 0)) / (this.slide.panAreaSize.h / 3)
        }
        clearTapTimer() {
          this.tapTimer && (clearTimeout(this.tapTimer), this.tapTimer = null)
        }
      }
      class Ge {
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
          e.src = this.thumbnail.currentSrc ?? "", await je(e)
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
              r = this.slide.panAreaSize.w / e,
              n = this.slide.panAreaSize.h / t;
            this.width = n > r ? this.slide.panAreaSize.w : e * n, this.height = r > n ? this.slide.panAreaSize.h : t * r
          }
        }
      }
      class Ue {
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
      class $e extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class Ye extends He {
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
          if (!this.dispatch(e, new $e(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class Qe {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Oe(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Re(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Oe(e);
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
            a = Re({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Re({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Re(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || n || o) && (Re(this.slide.pan, s), this.slide.setZoomLevel(r))
        }
      }
      class Je {
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
      class et extends He {
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
          dragOptions: a
        }) {
          super(), this.width = e, this.height = t, this.opener = new Ge({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new We({
            options: a,
            slide: this
          }), this.scrollWheel = new Ue({
            slide: this
          }), this.zoomHandler = new Qe({
            slide: this
          }), this.zoomLevels = new Ze({
            options: r,
            slide: this
          }), this.tapHandler = new Ye({
            options: n,
            slide: this
          }), this.panAreaSize = new Je({
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
          e = Ne(e), r || (e = De(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Pe(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Pe(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Re(this.pan, this.bounds.center)
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
      var tt = r(8789);
      const rt = e => "dark" === e ? tt.xW.dark : tt.xW.light;
      var nt = r(32760);
      const ot = (0, qe.YK)({
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
      var at = "foundry_bc732x1";
      const st = (0, S.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, Se.vC)(e, e => r?.(e), [r]), (0, N.jsx)(le, {
        size: "XS",
        className: (0, D.clsx)("foundry_bc732x0", {
          [at]: t
        }),
        asChild: !0,
        children: (0, N.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var it = r(30818),
        dt = r(8316),
        lt = r(50446),
        ct = r(31201),
        ut = r(84017),
        ft = r(2976),
        pt = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const r = (0, ft.TL)(`Primitive.${t}`),
            n = S.forwardRef((e, n) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, N.jsx)(s, {
                ...a,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {});

      function vt(e, t) {
        e && ut.flushSync(() => e.dispatchEvent(t))
      }
      var ht, yt = r(38351),
        mt = r(2471),
        bt = "dismissableLayer.update",
        gt = S.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        wt = S.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: s,
            onDismiss: i,
            ...d
          } = e, l = S.useContext(gt), [c, u] = S.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = S.useState({}), v = (0, lt.s)(t, e => u(e)), h = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), m = h.indexOf(y), b = c ? h.indexOf(c) : -1, g = l.layersWithOutsidePointerEventsDisabled.size > 0, w = b >= m, x = function(e, t = globalThis?.document) {
            const r = (0, yt.c)(e),
              n = S.useRef(!1),
              o = S.useRef(() => {});
            return S.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Ct("dismissableLayer.pointerDownOutside", r, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                a = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }(e => {
            const t = e.target,
              r = [...l.branches].some(e => e.contains(t));
            w && !r && (o?.(e), s?.(e), e.defaultPrevented || i?.())
          }, f), _ = function(e, t = globalThis?.document) {
            const r = (0, yt.c)(e),
              n = S.useRef(!1);
            return S.useEffect(() => {
              const e = e => {
                e.target && !n.current && Ct("dismissableLayer.focusOutside", r, {
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
            [...l.branches].some(e => e.contains(t)) || (a?.(e), s?.(e), e.defaultPrevented || i?.())
          }, f);
          return (0, mt.U)(e => {
            b === l.layers.size - 1 && (n?.(e), !e.defaultPrevented && i && (e.preventDefault(), i()))
          }, f), S.useEffect(() => {
            if (c) return r && (0 === l.layersWithOutsidePointerEventsDisabled.size && (ht = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(c)), l.layers.add(c), _t(), () => {
              r && 1 === l.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = ht)
            }
          }, [c, f, r, l]), S.useEffect(() => () => {
            c && (l.layers.delete(c), l.layersWithOutsidePointerEventsDisabled.delete(c), _t())
          }, [c, l]), S.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(bt, e), () => document.removeEventListener(bt, e)
          }, []), (0, N.jsx)(pt.div, {
            ...d,
            ref: v,
            style: {
              pointerEvents: g ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, dt.mK)(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: (0, dt.mK)(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: (0, dt.mK)(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        });
      wt.displayName = "DismissableLayer";
      var xt = S.forwardRef((e, t) => {
        const r = S.useContext(gt),
          n = S.useRef(null),
          o = (0, lt.s)(t, n);
        return S.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, N.jsx)(pt.div, {
          ...e,
          ref: o
        })
      });

      function _t() {
        const e = new CustomEvent(bt);
        document.dispatchEvent(e)
      }

      function Ct(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? vt(o, a) : o.dispatchEvent(a)
      }
      xt.displayName = "DismissableLayerBranch";
      var jt = wt,
        Ot = xt,
        Rt = r(96883),
        Pt = r(17966),
        Nt = r(10376),
        Dt = S.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, N.jsx)(pt.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, N.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Dt.displayName = "Arrow";
      var St = Dt,
        It = r(86627),
        Tt = r(94119),
        zt = "Popper",
        [Et, kt] = (0, ct.A)(zt),
        [Lt, At] = Et(zt),
        Vt = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = S.useState(null);
          return (0, N.jsx)(Lt, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Vt.displayName = zt;
      var Mt = "PopperAnchor",
        Ft = S.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = At(Mt, r), s = S.useRef(null), i = (0, lt.s)(t, s), d = S.useRef(null);
          return S.useEffect(() => {
            const e = d.current;
            d.current = n?.current || s.current, e !== d.current && a.onAnchorChange(d.current)
          }), n ? null : (0, N.jsx)(pt.div, {
            ...o,
            ref: i
          })
        });
      Ft.displayName = Mt;
      var Bt = "PopperContent",
        [qt, Xt] = Et(Bt),
        Kt = S.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: s = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: l = [],
            collisionPadding: c = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: v,
            ...h
          } = e, y = At(Bt, r), [m, b] = S.useState(null), g = (0, lt.s)(t, e => b(e)), [w, x] = S.useState(null), _ = (0, Tt.X)(w), C = _?.width ?? 0, j = _?.height ?? 0, O = n + ("center" !== a ? "-" + a : ""), R = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, P = Array.isArray(l) ? l : [l], D = P.length > 0, I = {
            padding: R,
            boundary: P.filter(Gt),
            altBoundary: D
          }, {
            refs: T,
            floatingStyles: z,
            placement: E,
            isPositioned: k,
            middlewareData: L
          } = (0, Pt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Nt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(0, Pt.cY)({
              mainAxis: o + j,
              alignmentAxis: s
            }), d && (0, Pt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Pt.ER)() : void 0,
              ...I
            }), d && (0, Pt.UU)({
              ...I
            }), (0, Pt.Ej)({
              ...I,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: a
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${r}px`), s.setProperty("--radix-popper-available-height", `${n}px`), s.setProperty("--radix-popper-anchor-width", `${o}px`), s.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), w && (0, Pt.UE)({
              element: w,
              padding: i
            }), Ut({
              arrowWidth: C,
              arrowHeight: j
            }), f && (0, Pt.jD)({
              strategy: "referenceHidden",
              ...I
            })]
          }), [A, V] = $t(E), M = (0, yt.c)(v);
          (0, It.N)(() => {
            k && M?.()
          }, [k, M]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            q = 0 !== L.arrow?.centerOffset,
            [X, K] = S.useState();
          return (0, It.N)(() => {
            m && K(window.getComputedStyle(m).zIndex)
          }, [m]), (0, N.jsx)("div", {
            ref: T.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...z,
              transform: k ? z.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, N.jsx)(qt, {
              scope: r,
              placedSide: A,
              onArrowChange: x,
              arrowX: F,
              arrowY: B,
              shouldHideArrow: q,
              children: (0, N.jsx)(pt.div, {
                "data-side": A,
                "data-align": V,
                ...h,
                ref: g,
                style: {
                  ...h.style,
                  animation: k ? void 0 : "none"
                }
              })
            })
          })
        });
      Kt.displayName = Bt;
      var Zt = "PopperArrow",
        Ht = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Wt = S.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Xt(Zt, r), a = Ht[o.placedSide];
          return (0, N.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
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
            children: (0, N.jsx)(St, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Gt(e) {
        return null !== e
      }
      Wt.displayName = Zt;
      var Ut = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = $t(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (o.arrow?.x ?? 0) + s / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            v = "";
          return "bottom" === d ? (p = a ? c : `${u}px`, v = -i + "px") : "top" === d ? (p = a ? c : `${u}px`, v = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", v = a ? c : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, v = a ? c : `${f}px`), {
            data: {
              x: p,
              y: v
            }
          }
        }
      });

      function $t(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Yt = Vt,
        Qt = Ft,
        Jt = Kt,
        er = Wt,
        tr = S.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, a] = S.useState(!1);
          (0, It.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? ut.createPortal((0, N.jsx)(pt.div, {
            ...n,
            ref: t
          }), s) : null
        });
      tr.displayName = "Portal";
      var rr = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = S.useState(), n = S.useRef(null), o = S.useRef(e), a = S.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = function(e, t) {
            return S.useReducer((e, r) => t[e][r] ?? e, e)
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
          return S.useEffect(() => {
            const e = nr(n.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, It.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                s = nr(t);
              d(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, d]), (0, It.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = nr(n.current).includes(CSS.escape(a.animationName));
                  if (a.target === t && s && (d("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                i = e => {
                  e.target === t && (a.current = nr(n.current))
                };
              return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", s), t.addEventListener("animationend", s), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", s), t.removeEventListener("animationend", s)
              }
            }
            d("ANIMATION_END")
          }, [t, d]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: S.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : S.Children.only(r), a = (0, lt.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? S.cloneElement(o, {
          ref: a
        }) : null
      };

      function nr(e) {
        return e?.animationName || "none"
      }
      rr.displayName = "Presence";
      var or = r(1531),
        ar = Object.freeze({
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
        sr = S.forwardRef((e, t) => (0, N.jsx)(pt.span, {
          ...e,
          ref: t,
          style: {
            ...ar,
            ...e.style
          }
        }));
      sr.displayName = "VisuallyHidden";
      var ir = sr,
        [dr, lr] = (0, ct.A)("Tooltip", [kt]),
        cr = kt(),
        ur = "TooltipProvider",
        fr = 700,
        pr = "tooltip.open",
        [vr, hr] = dr(ur),
        yr = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = fr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = S.useRef(!0), i = S.useRef(!1), d = S.useRef(0);
          return S.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, N.jsx)(vr, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: S.useCallback(() => {
              window.clearTimeout(d.current), s.current = !1
            }, []),
            onClose: S.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: S.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      yr.displayName = ur;
      var mr = "Tooltip",
        [br, gr] = dr(mr),
        wr = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = hr(mr, e.__scopeTooltip), l = cr(t), [c, u] = S.useState(null), f = (0, Rt.B)(), p = S.useRef(0), v = s ?? d.disableHoverableContent, h = i ?? d.delayDuration, y = S.useRef(!1), [m, b] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(pr))) : d.onClose(), a?.(e)
            },
            caller: mr
          }), g = S.useMemo(() => m ? y.current ? "delayed-open" : "instant-open" : "closed", [m]), w = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, y.current = !1, b(!0)
          }, [b]), x = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
          }, [b]), _ = S.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              y.current = !0, b(!0), p.current = 0
            }, h)
          }, [h, b]);
          return S.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, N.jsx)(Yt, {
            ...l,
            children: (0, N.jsx)(br, {
              scope: t,
              contentId: f,
              open: m,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: S.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: S.useCallback(() => {
                v ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, v]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: v,
              children: r
            })
          })
        };
      wr.displayName = mr;
      var xr = "TooltipTrigger",
        _r = S.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = gr(xr, r), a = hr(xr, r), s = cr(r), i = S.useRef(null), d = (0, lt.s)(t, i, o.onTriggerChange), l = S.useRef(!1), c = S.useRef(!1), u = S.useCallback(() => l.current = !1, []);
          return S.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, N.jsx)(Qt, {
            asChild: !0,
            ...s,
            children: (0, N.jsx)(pt.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, dt.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, dt.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, dt.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, dt.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, dt.mK)(e.onBlur, o.onClose),
              onClick: (0, dt.mK)(e.onClick, o.onClose)
            })
          })
        });
      _r.displayName = xr;
      var Cr = "TooltipPortal",
        [jr, Or] = dr(Cr, {
          forceMount: void 0
        }),
        Rr = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = gr(Cr, t);
          return (0, N.jsx)(jr, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(rr, {
              present: r || a.open,
              children: (0, N.jsx)(tr, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Rr.displayName = Cr;
      var Pr = "TooltipContent",
        Nr = S.forwardRef((e, t) => {
          const r = Or(Pr, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = gr(Pr, e.__scopeTooltip);
          return (0, N.jsx)(rr, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, N.jsx)(zr, {
              side: o,
              ...a,
              ref: t
            }) : (0, N.jsx)(Dr, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Dr = S.forwardRef((e, t) => {
          const r = gr(Pr, e.__scopeTooltip),
            n = hr(Pr, e.__scopeTooltip),
            o = S.useRef(null),
            a = (0, lt.s)(t, o),
            [s, i] = S.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = S.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = S.useCallback((e, t) => {
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
              i(a), u(!0)
            }, [u]);
          return S.useEffect(() => () => f(), [f]), S.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), S.useEffect(() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const s = t[e],
                        i = t[a],
                        d = s.x,
                        l = s.y,
                        c = i.x,
                        u = i.y;
                      l > n != u > n && r < (c - d) * (n - l) / (u - l) + d && (o = !o)
                    }
                    return o
                  }(r, s);
                n ? f() : o && (f(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, s, l, f]), (0, N.jsx)(zr, {
            ...e,
            ref: a
          })
        }),
        [Sr, Ir] = dr(mr, {
          isInside: !1
        }),
        Tr = (0, ft.Dc)("TooltipContent"),
        zr = S.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = gr(Pr, r), l = cr(r), {
            onClose: c
          } = d;
          return S.useEffect(() => (document.addEventListener(pr, c), () => document.removeEventListener(pr, c)), [c]), S.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, N.jsx)(wt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, N.jsxs)(Jt, {
              "data-state": d.stateAttribute,
              ...l,
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
              children: [(0, N.jsx)(Tr, {
                children: n
              }), (0, N.jsx)(Sr, {
                scope: r,
                isInside: !0,
                children: (0, N.jsx)(ir, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Nr.displayName = Pr;
      var Er = "TooltipArrow",
        kr = S.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = cr(r);
          return Ir(Er, r).isInside ? null : (0, N.jsx)(er, {
            ...o,
            ...n,
            ref: t
          })
        });
      kr.displayName = Er;
      var Lr = yr,
        Ar = wr,
        Vr = _r,
        Mr = Rr,
        Fr = Nr,
        Br = kr;
      const qr = (0, S.createContext)(null);

      function Xr() {
        const e = (0, S.useContext)(qr);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Kr = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, we.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, N.jsx)(Lr, {
            delayDuration: t,
            children: (0, N.jsx)(qr.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, N.jsx)(Ar, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Zr = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, N.jsx)(Vr, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Hr = (0, S.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: a = !0,
          sticky: s = "partial",
          ...i
        }, d) => {
          const {
            isOpen: l
          } = Xr(), c = (0, we.jt)(), u = (0, it.CS)(Fr), f = (0, it.pn)(l, {
            delay: l ? 0 : 200,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            config: it.$W.stiff,
            immediate: c
          }), p = (0, B.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, N.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        Wr = (0, S.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, B.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, N.jsx)(Br, {
            ...r,
            ref: t
          })
        }),
        Gr = Mr;
      var Ur = r(47690),
        $r = r(93689),
        Yr = r(14823);

      function Qr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, ct.A)(t),
          [o, a] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          s = e => {
            const {
              scope: t,
              children: r
            } = e, n = S.useRef(null), a = S.useRef(new Map).current;
            return (0, N.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, ft.TL)(i),
          l = S.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, lt.s)(t, o.collectionRef);
            return (0, N.jsx)(d, {
              ref: s,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, ft.TL)(c),
          p = S.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = S.useRef(null), i = (0, lt.s)(t, s), d = a(c, r);
            return S.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              d.itemMap.delete(s)
            })), (0, N.jsx)(f, {
              [u]: "",
              ref: i,
              children: n
            })
          });
        return p.displayName = c, [{
          Provider: s,
          Slot: l,
          ItemSlot: p
        }, function(t) {
          const r = a(e + "CollectionConsumer", t);
          return S.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, n]
      }
      Map;
      var Jr = ["PageUp", "PageDown"],
        en = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        tn = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        rn = "Slider",
        [nn, on, an] = Qr(rn),
        [sn, dn] = (0, ct.A)(rn, [an]),
        [ln, cn] = sn(rn),
        un = S.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: s = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: l = [n],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: v,
            ...h
          } = e, y = S.useRef(new Set), m = S.useRef(0), b = "horizontal" === s ? vn : hn, [g = [], w] = (0, or.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...y.current];
              t[m.current]?.focus(), u(e)
            }
          }), x = S.useRef(g);

          function _(e, t, {
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
              l = (0, Ur.q)(i, [n, o]);
            w((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort((e, t) => e - t)
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map((t, r) => e[r + 1] - t)
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, d * a)) {
                m.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, N.jsx)(ln, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: y.current,
            values: g,
            orientation: s,
            form: v,
            children: (0, N.jsx)(nn.Provider, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(nn.Slot, {
                scope: e.__scopeSlider,
                children: (0, N.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: t,
                  onPointerDown: (0, dt.mK)(h.onPointerDown, () => {
                    i || (x.current = g)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: i ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map(e => Math.abs(e - t)),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(g, e);
                    _(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    _(e, m.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = x.current[m.current];
                    g[m.current] !== e && f(g)
                  },
                  onHomeKeyDown: () => !i && _(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && _(o, g.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      const r = Jr.includes(e.key) || e.shiftKey && en.includes(e.key) ? 10 : 1,
                        n = m.current;
                      _(g[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      un.displayName = rn;
      var [fn, pn] = sn(rn, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), vn = S.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: l,
          ...c
        } = e, [u, f] = S.useState(null), p = (0, lt.s)(t, e => f(e)), v = S.useRef(void 0), h = (0, $r.jH)(o), y = "ltr" === h, m = y && !a || !y && a;

        function b(e) {
          const t = v.current || u.getBoundingClientRect(),
            o = Rn([0, t.width], m ? [r, n] : [n, r]);
          return v.current = t, o(e - t.left)
        }
        return (0, N.jsx)(fn, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, N.jsx)(yn, {
            dir: h,
            "data-orientation": "horizontal",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = b(e.clientX);
              s?.(t)
            },
            onSlideMove: e => {
              const t = b(e.clientX);
              i?.(t)
            },
            onSlideEnd: () => {
              v.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = tn[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), hn = S.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = S.useRef(null), u = (0, lt.s)(t, c), f = S.useRef(void 0), p = !o;

        function v(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Rn([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, N.jsx)(fn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, N.jsx)(yn, {
            "data-orientation": "vertical",
            ...l,
            ref: u,
            style: {
              ...l.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = v(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = v(e.clientY);
              s?.(t)
            },
            onSlideEnd: () => {
              f.current = void 0, i?.()
            },
            onStepKeyDown: e => {
              const t = tn[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), yn = S.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = cn(rn, r);
        return (0, N.jsx)(pt.span, {
          ...l,
          ref: t,
          onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Jr.concat(en).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, dt.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus() : n(e)
          }),
          onPointerMove: (0, dt.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), mn = "SliderTrack", bn = S.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = cn(mn, r);
        return (0, N.jsx)(pt.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      bn.displayName = mn;
      var gn = "SliderRange",
        wn = S.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = cn(gn, r), a = pn(gn, r), s = S.useRef(null), i = (0, lt.s)(t, s), d = o.values.length, l = o.values.map(e => On(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, N.jsx)(pt.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [a.startEdge]: c + "%",
              [a.endEdge]: u + "%"
            }
          })
        });
      wn.displayName = gn;
      var xn = "SliderThumb",
        _n = S.forwardRef((e, t) => {
          const r = on(e.__scopeSlider),
            [n, o] = S.useState(null),
            a = (0, lt.s)(t, e => o(e)),
            s = S.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, N.jsx)(Cn, {
            ...e,
            ref: a,
            index: s
          })
        }),
        Cn = S.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, s = cn(xn, r), i = pn(xn, r), [d, l] = S.useState(null), c = (0, lt.s)(t, e => l(e)), u = !d || s.form || !!d.closest("form"), f = (0, Tt.X)(d), p = s.values[n], v = void 0 === p ? 0 : On(p, s.min, s.max), h = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, s.values.length), y = f?.[i.size], m = y ? function(e, t, r) {
            const n = e / 2;
            return (n - Rn([0, 50], [0, n])(t) * r) * r
          }(y, v, i.direction) : 0;
          return S.useEffect(() => {
            if (d) return s.thumbs.add(d), () => {
              s.thumbs.delete(d)
            }
          }, [d, s.thumbs]), (0, N.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${v}% + ${m}px)`
            },
            children: [(0, N.jsx)(nn.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(pt.span, {
                role: "slider",
                "aria-label": e["aria-label"] || h,
                "aria-valuemin": s.min,
                "aria-valuenow": p,
                "aria-valuemax": s.max,
                "aria-orientation": s.orientation,
                "data-orientation": s.orientation,
                "data-disabled": s.disabled ? "" : void 0,
                tabIndex: s.disabled ? void 0 : 0,
                ...a,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, dt.mK)(e.onFocus, () => {
                  s.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, N.jsx)(jn, {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: p
            }, n)]
          })
        });
      _n.displayName = xn;
      var jn = S.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = S.useRef(null),
          a = (0, lt.s)(o, n),
          s = (0, Yr.Z)(t);
        return S.useEffect(() => {
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
        }, [s, t]), (0, N.jsx)(pt.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      });

      function On(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, Ur.q)(n, [0, 100])
      }

      function Rn(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      jn.displayName = "RadioBubbleInput";
      var Pn = un,
        Nn = bn,
        Dn = wn,
        Sn = _n,
        In = "focusScope.autoFocusOnMount",
        Tn = "focusScope.autoFocusOnUnmount",
        zn = {
          bubbles: !1,
          cancelable: !0
        },
        En = S.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = S.useState(null), l = (0, yt.c)(o), c = (0, yt.c)(a), u = S.useRef(null), f = (0, lt.s)(t, e => d(e)), p = S.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          S.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (p.paused || !i) return;
                  const t = e.target;
                  i.contains(t) ? u.current = t : Vn(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Vn(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Vn(i)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return i && n.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, i, p.paused]), S.useEffect(() => {
            if (i) {
              Mn.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(In, zn);
                i.addEventListener(In, l), i.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Vn(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(kn(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Vn(i))
              }
              return () => {
                i.removeEventListener(In, l), setTimeout(() => {
                  const t = new CustomEvent(Tn, zn);
                  i.addEventListener(Tn, c), i.dispatchEvent(t), t.defaultPrevented || Vn(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(Tn, c), Mn.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const v = S.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = function(e) {
                  const t = kn(e);
                  return [Ln(t, e), Ln(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && Vn(a, {
                select: !0
              })) : (e.preventDefault(), r && Vn(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, N.jsx)(pt.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function kn(e) {
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

      function Ln(e, t) {
        for (const r of e)
          if (!An(r, {
              upTo: t
            })) return r
      }

      function An(e, {
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

      function Vn(e, {
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
      En.displayName = "FocusScope";
      var Mn = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Fn(e, t), e.unshift(t)
          },
          remove(t) {
            e = Fn(e, t), e[0]?.resume()
          }
        }
      }();

      function Fn(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Bn = r(91685),
        qn = r(35328),
        Xn = r(45787),
        Kn = "Dialog",
        [Zn, Hn] = (0, ct.A)(Kn),
        [Wn, Gn] = Zn(Kn),
        Un = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !0
          } = e, i = S.useRef(null), d = S.useRef(null), [l, c] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Kn
          });
          return (0, N.jsx)(Wn, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Rt.B)(),
            titleId: (0, Rt.B)(),
            descriptionId: (0, Rt.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: S.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        };
      Un.displayName = Kn;
      var $n = "DialogTrigger",
        Yn = S.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn($n, r), a = (0, lt.s)(t, o.triggerRef);
          return (0, N.jsx)(pt.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": bo(o.open),
            ...n,
            ref: a,
            onClick: (0, dt.mK)(e.onClick, o.onOpenToggle)
          })
        });
      Yn.displayName = $n;
      var Qn = "DialogPortal",
        [Jn, eo] = Zn(Qn, {
          forceMount: void 0
        }),
        to = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Gn(Qn, t);
          return (0, N.jsx)(Jn, {
            scope: t,
            forceMount: r,
            children: S.Children.map(n, e => (0, N.jsx)(rr, {
              present: r || a.open,
              children: (0, N.jsx)(tr, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      to.displayName = Qn;
      var ro = "DialogOverlay",
        no = S.forwardRef((e, t) => {
          const r = eo(ro, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Gn(ro, e.__scopeDialog);
          return a.modal ? (0, N.jsx)(rr, {
            present: n || a.open,
            children: (0, N.jsx)(ao, {
              ...o,
              ref: t
            })
          }) : null
        });
      no.displayName = ro;
      var oo = (0, ft.TL)("DialogOverlay.RemoveScroll"),
        ao = S.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn(ro, r);
          return (0, N.jsx)(qn.A, {
            as: oo,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, N.jsx)(pt.div, {
              "data-state": bo(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        so = "DialogContent",
        io = S.forwardRef((e, t) => {
          const r = eo(so, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Gn(so, e.__scopeDialog);
          return (0, N.jsx)(rr, {
            present: n || a.open,
            children: a.modal ? (0, N.jsx)(lo, {
              ...o,
              ref: t
            }) : (0, N.jsx)(co, {
              ...o,
              ref: t
            })
          })
        });
      io.displayName = so;
      var lo = S.forwardRef((e, t) => {
          const r = Gn(so, e.__scopeDialog),
            n = S.useRef(null),
            o = (0, lt.s)(t, r.contentRef, n);
          return S.useEffect(() => {
            const e = n.current;
            if (e) return (0, Xn.Eq)(e)
          }, []), (0, N.jsx)(uo, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, dt.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, dt.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, dt.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        co = S.forwardRef((e, t) => {
          const r = Gn(so, e.__scopeDialog),
            n = S.useRef(!1),
            o = S.useRef(!1);
          return (0, N.jsx)(uo, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        uo = S.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = Gn(so, r), d = S.useRef(null), l = (0, lt.s)(t, d);
          return (0, Bn.Oh)(), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(En, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, N.jsx)(wt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": bo(i.open),
                ...s,
                ref: l,
                onDismiss: () => i.onOpenChange(!1)
              })
            }), (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(_o, {
                titleId: i.titleId
              }), (0, N.jsx)(Co, {
                contentRef: d,
                descriptionId: i.descriptionId
              })]
            })]
          })
        }),
        fo = "DialogTitle",
        po = S.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn(fo, r);
          return (0, N.jsx)(pt.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      po.displayName = fo;
      var vo = "DialogDescription",
        ho = S.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn(vo, r);
          return (0, N.jsx)(pt.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      ho.displayName = vo;
      var yo = "DialogClose",
        mo = S.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Gn(yo, r);
          return (0, N.jsx)(pt.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, dt.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function bo(e) {
        return e ? "open" : "closed"
      }
      mo.displayName = yo;
      var go = "DialogTitleWarning",
        [wo, xo] = (0, ct.q)(go, {
          contentName: so,
          titleName: fo,
          docsSlug: "dialog"
        }),
        _o = ({
          titleId: e
        }) => {
          const t = xo(go),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return S.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        Co = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xo("DialogDescriptionWarning").contentName}}.`;
          return S.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        jo = Un,
        Oo = Yn,
        Ro = to,
        Po = no,
        No = io,
        Do = po,
        So = ho,
        Io = mo;
      const To = (0, S.createContext)({
          triggerRef: (0, S.createRef)(),
          triggerBorderRef: (0, S.createRef)(),
          thumbnailRef: (0, S.createRef)(),
          openIconRef: (0, S.createRef)(),
          overlayRef: (0, S.createRef)(),
          contentRef: (0, S.createRef)(),
          containerRef: (0, S.createRef)(),
          imageRef: (0, S.createRef)(),
          placeholderRef: (0, S.createRef)(),
          zoomPanRef: (0, S.createRef)(),
          captionRef: (0, S.createRef)(),
          controlsRef: (0, S.createRef)(),
          closeRef: (0, S.createRef)(),
          zoomRef: (0, S.createRef)(),
          zoomInRef: (0, S.createRef)(),
          zoomSliderRef: (0, S.createRef)(),
          zoomOutRef: (0, S.createRef)(),
          resetRef: (0, S.createRef)(),
          downloadRef: (0, S.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        zo = ({
          altText: e,
          open: t,
          onOpenChange: r,
          defaultOpen: n,
          minZoomLevel: o = 100,
          maxZoomLevel: a = 300,
          zoomLevelStep: s = 100,
          clickAction: i = "close",
          doubleTapAction: d,
          tapAction: l,
          hideTrigger: c = !0,
          ...u
        }) => {
          const f = (0, X.Ym)(),
            p = (0, we.rl)(),
            v = (0, S.useRef)(null),
            h = (0, S.useRef)(null),
            y = (0, S.useRef)(null),
            m = (0, S.useRef)(null),
            b = (0, S.useRef)(null),
            g = (0, S.useRef)(null),
            w = (0, S.useRef)(null),
            x = (0, S.useRef)(null),
            _ = (0, S.useRef)(null),
            C = (0, S.useRef)(null),
            j = (0, S.useRef)(null),
            O = (0, S.useRef)(null),
            R = (0, S.useRef)(null),
            P = (0, S.useRef)(null),
            D = (0, S.useRef)(null),
            I = (0, S.useRef)(null),
            T = (0, S.useRef)(null),
            z = (0, S.useRef)(null),
            E = (0, S.useRef)(null),
            [k = !1, L] = (0, we.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, S.useRef)(null);
          return A.current || (A.current = new et({
            zoomLevelOptions: {
              max: a,
              min: o,
              step: s
            },
            actionOptions: {
              click: i,
              tap: l || (p ? "toggle-controls" : "close"),
              doubleTap: d || (p ? "zoom" : "none")
            }
          })), (0, N.jsx)(qe.Dk, {
            messages: Xe,
            locale: f,
            children: (0, N.jsx)(To.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: h,
                thumbnailRef: y,
                openIconRef: m,
                overlayRef: b,
                contentRef: g,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: C,
                captionRef: j,
                controlsRef: O,
                closeRef: R,
                zoomRef: P,
                zoomInRef: D,
                zoomSliderRef: I,
                zoomOutRef: T,
                resetRef: z,
                downloadRef: E,
                open: k,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: A.current
              },
              children: (0, N.jsx)(ko, {
                ...u
              })
            })
          })
        },
        Eo = (0, S.createContext)({
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
        ko = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, S.useContext)(To), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, _e.L)(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: a,
              triggerRef: s,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, S.useContext)(To), p = (0, S.useRef)(null);
            p.current || (p.current = xe.os.timeline({
              defaults: Me
            }));
            const v = (0, S.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              h = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), xe.os.set([u.current, f.current], {
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
                }), xe.os.set([f.current], {
                  visibility: "hidden"
                }), await t.opener.loadPlaceholder(u.current), p.current.clear(), u.current && (p.current.to([u.current, f.current], {
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
                }), p.current.to([l.current], {
                  x: () => t.opener.containerBounds.x,
                  y: () => t.opener.containerBounds.y,
                  width: () => t.opener.containerBounds.w,
                  height: () => t.opener.containerBounds.h,
                  duration: 0,
                  data: {
                    invalidate: !0
                  }
                }), n && p.current.to([s.current, i.current], {
                  opacity: 0,
                  duration: 0
                }), p.current.to([u.current, f.current], {
                  opacity: t.opener.containerOpacity,
                  borderRadius: t.opener.placeholderRadius,
                  clipPath: t.opener.placeholderClip,
                  duration: 0
                }), p.current.fromTo([l.current], {
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
                }, 0), p.current.fromTo([u.current, f.current], {
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
                }, 0), p.current.fromTo([a.current], {
                  opacity: 0,
                  [Be]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Be]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await je(f.current), t.closing || (xe.os.set([f.current], {
                  visibility: "visible",
                  ...Fe
                }), xe.os.set([u.current], {
                  visibility: "hidden",
                  ...Fe
                }))))
              }),
              y = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, S.useCallback)(async e => {
                e || (window.addEventListener("click", v), await y(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              b = (0, S.useCallback)(() => m(!1), [m]);
            return {
              onOpenChange: m,
              openAnim: h,
              close: b
            }
          })(), {
            update: a,
            zoomIn: s,
            zoomOut: i,
            zoomTo: d,
            resetZoom: l,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, _e.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, S.useContext)(To), d = t(async e => {
              r.zoomTo(e), xe.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), xe.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), xe.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), xe.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              xe.os.to([a.current], {
                opacity: e,
                [Be]: t,
                ...Fe
              })
            }), p = t(async () => {
              xe.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), v = (0, S.useCallback)(() => {
              n.current && o.current && (xe.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              }), xe.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Fe
              }), xe.os.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, S.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", v), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", v), window.removeEventListener("resize", r.resize.bind(r))
            }), []), {
              zoomIn: l,
              zoomOut: c,
              zoomTo: d,
              resetZoom: u,
              toggleControls: f,
              update: p
            }
          })({
            close: o
          }), u = (0, B.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, N.jsx)(Eo.Provider, {
            value: {
              update: a,
              openAnim: n,
              close: o,
              zoomIn: s,
              zoomOut: i,
              zoomTo: d,
              resetZoom: l,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, N.jsx)(jo, {
              ...u
            })
          })
        },
        Lo = (0, S.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, qe.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, S.useContext)(To),
            d = (0, we.UP)(a, n),
            l = (0, B.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(ot.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, N.jsx)(Oo, {
            ref: d,
            ...l,
            children: (0, N.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, N.jsx)(I.xV, {
                children: t
              })
            })
          })
        }),
        Ao = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, S.useContext)(To), a = (0, we.UP)(o, n), s = (0, B.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Vo = (0, S.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, S.useContext)(To), o = (0, we.UP)(n, r), a = (0, B.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? I.DX : nt.Maximize2;
          return (0, N.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Mo = ({
          ...e
        }) => (0, N.jsx)(Ro, {
          ...e
        }),
        Fo = (0, S.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, S.useContext)(To), o = (0, we.UP)(n, r), a = (0, B.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, N.jsx)(Po, {
            ref: o,
            ...a
          })
        }),
        Bo = (0, S.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, S.useContext)(Eo), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, S.useContext)(To), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, S.useContext)(To), [t, r] = (0, S.useState)(e.getCursor()), n = (0, S.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, S.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [tt.xW.tokens, tt.xW.typography, tt.xW.grid, rt("dark")].join(" ");
          const c = (0, we.UP)(a, n),
            u = (0, B.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, D.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, N.jsxs)(No, {
            ref: c,
            ...u,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)(Do, {
                children: s
              })
            }), t]
          })
        }),
        qo = (0, S.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, S.useContext)(To);
          (() => {
            const {
              contextSafe: e
            } = (0, _e.L)(), {
              toggleControls: t
            } = (0, S.useContext)(Eo), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, S.useContext)(To), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (xe.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Fe
              }), xe.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Fe
              }), xe.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Fe
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || xe.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Fe
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (xe.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Fe
              }), xe.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Fe
              }), xe.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Fe
              })))
            }), c = (0, S.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, we.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Ce.useGesture)({
              onWheel: d,
              onDrag: i,
              onPinch: l
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
          const a = (0, we.UP)(o, n),
            s = (0, B.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, N.jsx)("div", {
            ref: a,
            ...s,
            children: (0, N.jsxs)(Xo, {
              children: [(0, N.jsx)(Ko, {}), t]
            })
          })
        }),
        Xo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, S.useContext)(To), a = (0, we.UP)(o, n), s = (0, B.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ko = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, S.useContext)(To), a = (0, we.UP)(o, n), s = (0, B.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Zo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, S.useContext)(To), a = (0, we.UP)(o, n), s = (0, B.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Ho = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, S.useContext)(To), a = (0, we.UP)(o, n), s = (0, B.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? I.DX : "p";
          return (0, N.jsx)(So, {
            asChild: !0,
            children: (0, N.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Wo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, S.useContext)(To);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, S.useContext)(Eo);
            (0, Se.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Se.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Se.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, Se.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, we.UP)(o, n),
            s = (0, B.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? I.DX : "div";
          return (0, N.jsx)(Se.Hb, {
            children: (0, N.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Go = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, N.jsx)(N.Fragment, {
            children: n
          });
          const a = (0, B.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, N.jsxs)(Kr, {
            delayDuration: 0,
            children: [(0, N.jsx)(Zr, {
              children: n
            }), (0, N.jsxs)(Hr, {
              ...a,
              children: [(0, N.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, N.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, N.jsx)(Wr, {})]
            })]
          })
        },
        Uo = (0, S.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, B.v6)(e, {
            isInline: !0
          });
          return (0, N.jsx)(st, {
            ref: t,
            ...r
          })
        }),
        $o = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, qe.tz)(),
            {
              zoomRef: i
            } = (0, S.useContext)(To),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: v,
              zoomTo: h
            } = (() => {
              const {
                slide: e
              } = (0, S.useContext)(To), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, S.useContext)(Eo), [o, a] = (0, S.useState)(!1), [s, i] = (0, S.useState)(!1), [d, l] = (0, S.useState)(0), [c, u] = (0, S.useState)(0), [f, p] = (0, S.useState)(0), v = (0, S.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), h = (0, S.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", v), () => {
                e.removeEventListener("zoom", v)
              }), [v]), {
                zoomTo: h,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            y = (0, we.UP)(i, a),
            m = (0, B.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? I.DX : "div";
          return (0, N.jsxs)(b, {
            ref: y,
            ...m,
            children: [(0, N.jsx)(Go, {
              side: "left",
              enabled: r,
              content: s.formatMessage(ot.ZoomInButtonLabel),
              metadata: s.formatMessage(ot.ZoomInButtonTooltip, {
                shortcut: (0, N.jsx)(Uo, {
                  shortcut: "+"
                })
              }),
              children: (0, N.jsx)(P.K, {
                label: s.formatMessage(ot.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ve({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, N.jsxs)(Pn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, N.jsx)(Nn, {
                className: "foundry_1a74xwbu",
                children: (0, N.jsx)(Dn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, N.jsx)(Go, {
                side: "left",
                enabled: r,
                content: s.formatMessage(ot.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, N.jsx)(Sn, {
                  className: "foundry_1a74xwbw",
                  children: (0, N.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, N.jsx)(Go, {
              side: "left",
              enabled: r,
              content: s.formatMessage(ot.ZoomOutButtonLabel),
              metadata: s.formatMessage(ot.ZoomOutButtonTooltip, {
                shortcut: (0, N.jsx)(Uo, {
                  shortcut: "-"
                })
              }),
              children: (0, N.jsx)(P.K, {
                label: s.formatMessage(ot.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Ve({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, N.jsx)(I.xV, {
              children: n
            })]
          })
        }),
        Yo = (0, S.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, qe.tz)(),
            {
              closeRef: s
            } = (0, S.useContext)(To),
            i = (0, we.UP)(s, o),
            d = (0, B.v6)(n, {
              "data-testid": e,
              className: Ae({
                styled: !t
              })
            }),
            l = t ? (0, N.jsx)(I.DX, {
              ref: i,
              ...d
            }) : (0, N.jsx)(P.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(ot.CloseButtonLabel)
            });
          return (0, N.jsx)(Go, {
            side: "right",
            enabled: r,
            content: a.formatMessage(ot.CloseButtonLabel),
            metadata: a.formatMessage(ot.CloseButtonTooltip, {
              shortcut: (0, N.jsx)(Uo, {
                shortcut: "Esc"
              })
            }),
            children: (0, N.jsx)(Io, {
              asChild: !0,
              children: l
            })
          })
        }),
        Qo = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, qe.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, S.useContext)(To), {
                contextSafe: r
              } = (0, _e.L)(), {
                resetZoom: n
              } = (0, S.useContext)(Eo), [o, a] = (0, S.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                xe.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Fe
                })
              }), i = (0, S.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, S.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, S.useContext)(To),
            i = (0, we.UP)(s, n),
            d = (0, B.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, N.jsx)(Go, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ot.ResetZoomButtonLabel),
            metadata: o.formatMessage(ot.ResetZoomButtonTooltip, {
              shortcut: (0, N.jsx)(Uo, {
                shortcut: "R"
              })
            }),
            children: (0, N.jsx)(P.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(ot.ResetZoomButtonLabel)
            })
          })
        }),
        Jo = (0, S.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, qe.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, S.useContext)(To),
            i = (0, we.UP)(a, n),
            d = (0, B.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, N.jsx)(Go, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ot.DownloadButtonTooltip),
            children: (0, N.jsx)(P.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(ot.DownloadButtonTooltip),
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
        ea = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var ta = r(13258);

      function ra(e) {
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

      function na(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? na(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ra(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : na(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function aa(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sa = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ia = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oa(oa({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sa(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return aa(e.variantClassNames, e => aa(e, e => e.split(" ")[0]))
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
      const da = (0, S.createContext)(null);

      function la() {
        const e = (0, S.useContext)(da);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ca = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, B.v6)({
              className: ia({
                status: a
              }),
              "data-testid": t
            }, s),
            l = r ? I.DX : "div";
          return (0, N.jsx)(da.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, N.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        ua = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = la(), a = (0, B.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: nt.Check,
            invalid: nt.X,
            neutral: nt.TriangleAlert
          }, i = t ? I.DX : s[o];
          return (0, N.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        fa = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = la(), i = (0, B.v6)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var pa = "ScrollArea",
        [va, ha] = (0, ct.A)(pa),
        [ya, ma] = va(pa),
        ba = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(null), [u, f] = S.useState(null), [p, v] = S.useState(null), [h, y] = S.useState(null), [m, b] = S.useState(0), [g, w] = S.useState(0), [x, _] = S.useState(!1), [C, j] = S.useState(!1), O = (0, lt.s)(t, e => d(e)), R = (0, $r.jH)(o);
          return (0, N.jsx)(ya, {
            scope: r,
            type: n,
            dir: R,
            scrollHideDelay: a,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: v,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: _,
            scrollbarY: h,
            onScrollbarYChange: y,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, N.jsx)(pt.div, {
              dir: R,
              ...s,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": m + "px",
                "--radix-scroll-area-corner-height": g + "px",
                ...e.style
              }
            })
          })
        });
      ba.displayName = pa;
      var ga = "ScrollAreaViewport",
        wa = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = ma(ga, r), i = S.useRef(null), d = (0, lt.s)(t, i, s.onViewportChange);
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, N.jsx)(pt.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, N.jsx)("div", {
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
      wa.displayName = ga;
      var xa = "ScrollAreaScrollbar",
        _a = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ma(xa, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return S.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, N.jsx)(Ca, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, N.jsx)(ja, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, N.jsx)(Oa, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, N.jsx)(Ra, {
            ...n,
            ref: t
          }) : null
        });
      _a.displayName = xa;
      var Ca = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ma(xa, e.__scopeScrollArea), [a, s] = S.useState(!1);
          return S.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, N.jsx)(rr, {
            present: r || a,
            children: (0, N.jsx)(Oa, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        ja = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ma(xa, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Za(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, S.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return S.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), S.useEffect(() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (d("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, d, s]), (0, N.jsx)(rr, {
            present: r || "hidden" !== i,
            children: (0, N.jsx)(Ra, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, dt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, dt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Oa = S.forwardRef((e, t) => {
          const r = ma(xa, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = S.useState(!1),
            i = "horizontal" === e.orientation,
            d = Za(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return Ha(r.viewport, d), Ha(r.content, d), (0, N.jsx)(rr, {
            present: n || a,
            children: (0, N.jsx)(Ra, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Ra = S.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = ma(xa, e.__scopeScrollArea), a = S.useRef(null), s = S.useRef(0), [i, d] = S.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Ma(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => s.current = 0,
            onThumbPointerDown: e => s.current = e
          };

          function u(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Fa(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return qa([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, N.jsx)(Pa, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ba(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, N.jsx)(Na, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ba(o.viewport.scrollTop, i);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = u(e))
            }
          }) : null
        }),
        Pa = S.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = ma(xa, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, lt.s)(t, d, a.onScrollbarXChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(Ia, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Fa(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Xa(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Va(s.paddingLeft),
                  paddingEnd: Va(s.paddingRight)
                }
              })
            }
          })
        }),
        Na = S.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = ma(xa, e.__scopeScrollArea), [s, i] = S.useState(), d = S.useRef(null), l = (0, lt.s)(t, d, a.onScrollbarYChange);
          return S.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(Ia, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Fa(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Xa(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Va(s.paddingTop),
                  paddingEnd: Va(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Da, Sa] = va(xa),
        Ia = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: s,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: l,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = ma(xa, r), [v, h] = S.useState(null), y = (0, lt.s)(t, e => h(e)), m = S.useRef(null), b = S.useRef(""), g = p.viewport, w = n.content - n.viewport, x = (0, yt.c)(c), _ = (0, yt.c)(d), C = Za(u, 10);

          function j(e) {
            if (m.current) {
              const t = e.clientX - m.current.left,
                r = e.clientY - m.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return S.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = v?.contains(t);
              r && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, v, w, x]), S.useEffect(_, [n, _]), Ha(v, C), Ha(p.content, C), (0, N.jsx)(Da, {
            scope: r,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: (0, yt.c)(a),
            onThumbPointerUp: (0, yt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, yt.c)(i),
            children: (0, N.jsx)(pt.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, dt.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, dt.mK)(e.onPointerMove, j),
              onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        Ta = "ScrollAreaThumb",
        za = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Sa(Ta, e.__scopeScrollArea);
          return (0, N.jsx)(rr, {
            present: r || o.hasThumb,
            children: (0, N.jsx)(Ea, {
              ref: t,
              ...n
            })
          })
        }),
        Ea = S.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = ma(Ta, r), s = Sa(Ta, r), {
            onThumbPositionChange: i
          } = s, d = (0, lt.s)(t, e => s.onThumbChange(e)), l = S.useRef(void 0), c = Za(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return S.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = Ka(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, N.jsx)(pt.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, dt.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, dt.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      za.displayName = Ta;
      var ka = "ScrollAreaCorner",
        La = S.forwardRef((e, t) => {
          const r = ma(ka, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, N.jsx)(Aa, {
            ...e,
            ref: t
          }) : null
        });
      La.displayName = ka;
      var Aa = S.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = ma(ka, r), [a, s] = S.useState(0), [i, d] = S.useState(0), l = Boolean(a && i);
        return Ha(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), Ha(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), l ? (0, N.jsx)(pt.div, {
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

      function Va(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Ma(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Fa(e) {
        const t = Ma(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Ba(e, t, r = "ltr") {
        const n = Fa(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, Ur.q)(e, d);
        return qa([0, s], [0, i])(l)
      }

      function qa(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Xa(e, t) {
        return e > 0 && e < t
      }
      var Ka = (e, t = () => {}) => {
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

      function Za(e, t) {
        const r = (0, yt.c)(e),
          n = S.useRef(0);
        return S.useEffect(() => () => window.clearTimeout(n.current), []), S.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Ha(e, t) {
        const r = (0, yt.c)(t);
        (0, It.N)(() => {
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
      var Wa = ba,
        Ga = wa,
        Ua = _a,
        $a = za,
        Ya = La,
        Qa = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ja = [" ", "Enter"],
        es = "Select",
        [ts, rs, ns] = Qr(es),
        [os, as] = (0, ct.A)(es, [ns, kt]),
        ss = kt(),
        [is, ds] = os(es),
        [ls, cs] = os(es),
        us = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: s,
            defaultValue: i,
            onValueChange: d,
            dir: l,
            name: c,
            autoComplete: u,
            disabled: f,
            required: p,
            form: v
          } = e, h = ss(t), [y, m] = S.useState(null), [b, g] = S.useState(null), [w, x] = S.useState(!1), _ = (0, $r.jH)(l), [C, j] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: es
          }), [O, R] = (0, or.i)({
            prop: s,
            defaultProp: i,
            onChange: d,
            caller: es
          }), P = S.useRef(null), D = !y || v || !!y.closest("form"), [I, T] = S.useState(new Set), z = Array.from(I).map(e => e.props.value).join(";");
          return (0, N.jsx)(Yt, {
            ...h,
            children: (0, N.jsxs)(is, {
              required: p,
              scope: t,
              trigger: y,
              onTriggerChange: m,
              valueNode: b,
              onValueNodeChange: g,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: x,
              contentId: (0, Rt.B)(),
              value: O,
              onValueChange: R,
              open: C,
              onOpenChange: j,
              dir: _,
              triggerPointerDownPosRef: P,
              disabled: f,
              children: [(0, N.jsx)(ts.Provider, {
                scope: t,
                children: (0, N.jsx)(ls, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: S.useCallback(e => {
                    T(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: S.useCallback(e => {
                    T(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), D ? (0, N.jsxs)(Hs, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: O,
                onChange: e => R(e.target.value),
                disabled: f,
                form: v,
                children: [void 0 === O ? (0, N.jsx)("option", {
                  value: ""
                }) : null, Array.from(I)]
              }, z) : null]
            })
          })
        };
      us.displayName = es;
      var fs = "SelectTrigger",
        ps = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = ss(r), s = ds(fs, r), i = s.disabled || n, d = (0, lt.s)(t, s.onTriggerChange), l = rs(r), c = S.useRef("touch"), [u, f, p] = Gs(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Us(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, N.jsx)(Qt, {
            asChild: !0,
            ...a,
            children: (0, N.jsx)(pt.button, {
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
              "data-placeholder": Ws(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, dt.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, dt.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, dt.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Qa.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      ps.displayName = fs;
      var vs = "SelectValue",
        hs = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = ds(vs, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, lt.s)(t, d.onValueNodeChange);
          return (0, It.N)(() => {
            l(c)
          }, [l, c]), (0, N.jsx)(pt.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: Ws(d.value) ? (0, N.jsx)(N.Fragment, {
              children: s
            }) : a
          })
        });
      hs.displayName = vs;
      var ys = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, N.jsx)(pt.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      ys.displayName = "SelectIcon";
      var ms = e => (0, N.jsx)(tr, {
        asChild: !0,
        ...e
      });
      ms.displayName = "SelectPortal";
      var bs = "SelectContent",
        gs = S.forwardRef((e, t) => {
          const r = ds(bs, e.__scopeSelect),
            [n, o] = S.useState();
          if ((0, It.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? ut.createPortal((0, N.jsx)(xs, {
              scope: e.__scopeSelect,
              children: (0, N.jsx)(ts.Slot, {
                scope: e.__scopeSelect,
                children: (0, N.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, N.jsx)(js, {
            ...e,
            ref: t
          })
        });
      gs.displayName = bs;
      var ws = 10,
        [xs, _s] = os(bs),
        Cs = (0, ft.TL)("SelectContent.RemoveScroll"),
        js = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: h,
            avoidCollisions: y,
            ...m
          } = e, b = ds(bs, r), [g, w] = S.useState(null), [x, _] = S.useState(null), C = (0, lt.s)(t, e => w(e)), [j, O] = S.useState(null), [R, P] = S.useState(null), D = rs(r), [I, T] = S.useState(!1), z = S.useRef(!1);
          S.useEffect(() => {
            if (g) return (0, Xn.Eq)(g)
          }, [g]), (0, Bn.Oh)();
          const E = S.useCallback(e => {
              const [t, ...r] = D().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [D, x]),
            k = S.useCallback(() => E([j, g]), [E, j, g]);
          S.useEffect(() => {
            I && k()
          }, [I, k]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = b;
          S.useEffect(() => {
            if (g) {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : g.contains(r.target) || L(!1), document.removeEventListener("pointermove", t), A.current = null
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
          }, [g, L, A]), S.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = Gs(e => {
            const t = D().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Us(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), F = S.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (z.current = !0))
          }, [b.value]), B = S.useCallback(() => g?.focus(), [g]), q = S.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== b.value && b.value === t || n) && P(e)
          }, [b.value]), X = "popper" === n ? Rs : Os, K = X === Rs ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: h,
            avoidCollisions: y
          } : {};
          return (0, N.jsx)(xs, {
            scope: r,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: F,
            selectedItem: j,
            onItemLeave: B,
            itemTextRefCallback: q,
            focusSelectedItem: k,
            selectedItemText: R,
            position: n,
            isPositioned: I,
            searchRef: V,
            children: (0, N.jsx)(qn.A, {
              as: Cs,
              allowPinchZoom: !0,
              children: (0, N.jsx)(En, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, dt.mK)(o, e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, N.jsx)(wt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => b.onOpenChange(!1),
                  children: (0, N.jsx)(X, {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...K,
                    onPlaced: () => T(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, dt.mK)(m.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = D().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => E(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      js.displayName = "SelectContentImpl";
      var Os = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = ds(bs, r), s = _s(bs, r), [i, d] = S.useState(null), [l, c] = S.useState(null), u = (0, lt.s)(t, e => c(e)), f = rs(r), p = S.useRef(!1), v = S.useRef(!0), {
          viewport: h,
          selectedItem: y,
          selectedItemText: m,
          focusSelectedItem: b
        } = s, g = S.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && h && y && m) {
            const e = a.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = m.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - ws,
                u = (0, Ur.q)(a, [ws, Math.max(ws, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - ws,
                u = (0, Ur.q)(a, [ws, Math.max(ws, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * ws,
              c = h.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              b = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + b + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(h),
              C = parseInt(_.paddingTop, 10),
              j = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - ws,
              R = d - O,
              P = y.offsetHeight / 2,
              N = v + b + (y.offsetTop + P),
              D = w - N;
            if (N <= O) {
              const e = s.length > 0 && y === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                r = N + Math.max(R, P + (e ? j : 0) + t + g);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && y === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, v + h.offsetTop + (e ? C : 0) + P) + D;
              i.style.height = t + "px", h.scrollTop = N - O + h.offsetTop
            }
            i.style.margin = `${ws}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, h, y, m, a.dir, n]);
        (0, It.N)(() => g(), [g]);
        const [w, x] = S.useState();
        (0, It.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = S.useCallback(e => {
          e && !0 === v.current && (g(), b?.(), v.current = !1)
        }, [g, b]);
        return (0, N.jsx)(Ps, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: _,
          children: (0, N.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, N.jsx)(pt.div, {
              ...o,
              ref: u,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      });
      Os.displayName = "SelectItemAlignedPosition";
      var Rs = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = ws,
          ...a
        } = e, s = ss(r);
        return (0, N.jsx)(Jt, {
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
      Rs.displayName = "SelectPopperPosition";
      var [Ps, Ns] = os(bs, {}), Ds = "SelectViewport", Ss = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = _s(Ds, r), s = Ns(Ds, r), i = (0, lt.s)(t, a.onViewportChange), d = S.useRef(0);
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, N.jsx)(ts.Slot, {
            scope: r,
            children: (0, N.jsx)(pt.div, {
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
              onScroll: (0, dt.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * ws,
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
                d.current = t.scrollTop
              })
            })
          })]
        })
      });
      Ss.displayName = Ds;
      var Is = "SelectGroup",
        [Ts, zs] = os(Is);
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Rt.B)();
        return (0, N.jsx)(Ts, {
          scope: r,
          id: o,
          children: (0, N.jsx)(pt.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Is;
      var Es = "SelectLabel";
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = zs(Es, r);
        return (0, N.jsx)(pt.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Es;
      var ks = "SelectItem",
        [Ls, As] = os(ks),
        Vs = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = ds(ks, r), d = _s(ks, r), l = i.value === n, [c, u] = S.useState(a ?? ""), [f, p] = S.useState(!1), v = (0, lt.s)(t, e => d.itemRefCallback?.(e, n, o)), h = (0, Rt.B)(), y = S.useRef("touch"), m = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, N.jsx)(Ls, {
            scope: r,
            value: n,
            disabled: o,
            textId: h,
            isSelected: l,
            onItemTextChange: S.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, N.jsx)(ts.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, N.jsx)(pt.div, {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: (0, dt.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, dt.mK)(s.onBlur, () => p(!1)),
                onClick: (0, dt.mK)(s.onClick, () => {
                  "mouse" !== y.current && m()
                }),
                onPointerUp: (0, dt.mK)(s.onPointerUp, () => {
                  "mouse" === y.current && m()
                }),
                onPointerDown: (0, dt.mK)(s.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, dt.mK)(s.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, dt.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, dt.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Ja.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Vs.displayName = ks;
      var Ms = "SelectItemText",
        Fs = S.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = ds(Ms, r), i = _s(Ms, r), d = As(Ms, r), l = cs(Ms, r), [c, u] = S.useState(null), f = (0, lt.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = S.useMemo(() => (0, N.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: y
          } = l;
          return (0, It.N)(() => (h(v), () => y(v)), [h, y, v]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(pt.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? ut.createPortal(a.children, s.valueNode) : null]
          })
        });
      Fs.displayName = Ms;
      var Bs = "SelectItemIndicator";
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return As(Bs, r).isSelected ? (0, N.jsx)(pt.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Bs;
      var qs = "SelectScrollUpButton";
      S.forwardRef((e, t) => {
        const r = _s(qs, e.__scopeSelect),
          n = Ns(qs, e.__scopeSelect),
          [o, a] = S.useState(!1),
          s = (0, lt.s)(t, n.onScrollButtonChange);
        return (0, It.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Ks, {
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
      }).displayName = qs;
      var Xs = "SelectScrollDownButton";
      S.forwardRef((e, t) => {
        const r = _s(Xs, e.__scopeSelect),
          n = Ns(Xs, e.__scopeSelect),
          [o, a] = S.useState(!1),
          s = (0, lt.s)(t, n.onScrollButtonChange);
        return (0, It.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Ks, {
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
      }).displayName = Xs;
      var Ks = S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = _s("SelectScrollButton", r), s = S.useRef(null), i = rs(r), d = S.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return S.useEffect(() => () => d(), [d]), (0, It.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, N.jsx)(pt.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, dt.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, dt.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, dt.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Zs = "SelectArrow";
      S.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = ss(r), a = ds(Zs, r), s = _s(Zs, r);
        return a.open && "popper" === s.position ? (0, N.jsx)(er, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Zs;
      var Hs = S.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = S.useRef(null),
          a = (0, lt.s)(n, o),
          s = (0, Yr.Z)(t);
        return S.useEffect(() => {
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
        }, [s, t]), (0, N.jsx)(pt.select, {
          ...r,
          style: {
            ...ar,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      });

      function Ws(e) {
        return "" === e || void 0 === e
      }

      function Gs(e) {
        const t = (0, yt.c)(e),
          r = S.useRef(""),
          n = S.useRef(0),
          o = S.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = S.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return S.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Us(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }
      Hs.displayName = "SelectBubbleInput";
      var $s = us,
        Ys = ps,
        Qs = hs,
        Js = ys,
        ei = ms,
        ti = gs,
        ri = Ss,
        ni = Vs,
        oi = Fs;

      function ai(e) {
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

      function si(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ii(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? si(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ai(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : si(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function di(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var li = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ci = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ii(ii({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) li(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return di(e.variantClassNames, e => di(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ui = ci({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fi = ci({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pi = ci({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vi = ci({
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
        hi = ci({
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
        yi = ci({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const mi = (0, S.createContext)(null);

      function bi() {
        const e = (0, S.useContext)(mi);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const gi = (0, S.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: a,
          onValueChange: s,
          name: i,
          value: d,
          defaultOpen: l,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...v
        }, h) => {
          const y = (0, S.useRef)(null),
            m = (0, we.UP)(y, h),
            b = (0, S.useId)(),
            g = (0, S.useId)(),
            w = (0, S.useId)(),
            x = (0, S.useId)(),
            _ = (0, S.useId)(),
            C = (0, S.useId)(),
            [j = !1, O] = (0, we.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            R = (0, B.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, N.jsx)(mi.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: w,
              triggerId: C,
              hintId: x,
              popoverId: _,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: j,
              setIsOpen: O,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, N.jsx)($s, {
              required: r,
              disabled: n,
              open: j,
              onOpenChange: () => O(!o && !j),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, N.jsx)("div", {
                ref: m,
                ...R,
                children: e
              })
            })
          })
        }),
        wi = (0, S.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = bi(), s = (0, B.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: ui({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, N.jsx)(ti, {
            ...s,
            ref: o,
            children: (0, N.jsx)(ri, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        xi = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(ri, {
            ref: r,
            ...n
          })
        }),
        _i = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(Wa, {
            ...o,
            ref: n,
            children: [(0, N.jsx)(xi, {
              asChild: !0,
              children: (0, N.jsx)(Ga, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, N.jsx)(Ua, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, N.jsx)($a, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Ci = (0, S.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...a
        }, s) => {
          const {
            isReadOnly: i,
            status: d,
            isDisabled: l,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: v,
            isOpen: h,
            value: y,
            size: m
          } = bi(), {
            isPressed: b,
            pressProps: g
          } = (0, ta.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, B.v6)({
            id: f,
            className: hi({
              size: m,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!b,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, B.VW)(r, c, u),
            "aria-describedby": (0, B.VW)(n, v),
            "aria-activedescendant": y,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": h ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!b
          }, (0, B.cJ)(g, "onKeyDown"), a), x = o ? I.DX : Ys;
          return (0, N.jsx)(x, {
            ...w,
            ref: s,
            children: e
          })
        }),
        ji = (0, S.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? I.DX : "span";
          return (0, N.jsx)(s, {
            ...a,
            ref: o,
            children: (0, N.jsx)(Qs, {
              placeholder: e
            })
          })
        }),
        Oi = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = bi(), i = s ? nt.ChevronUp : nt.ChevronDown, d = (0, B.v6)({
            asChild: !0,
            className: yi({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, N.jsx)(Js, {
            ...d,
            ref: n,
            children: e || (0, N.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Ri = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: l,
            triggerId: c
          } = bi(), u = i && !o, f = (0, B.v6)({
            id: a.id || l,
            htmlFor: c,
            "data-testid": e,
            className: vi({
              showAsterisk: u,
              isDisabled: d
            })
          }, a), p = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        Pi = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = bi(), i = (0, B.v6)({
            className: fi({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ni = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = bi(), i = (0, B.v6)({
            className: pi({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Di = (0, S.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, we.UP)(s, a),
            d = (0, B.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, N.jsx)(ni, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Si = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, N.jsx)(oi, {
            ref: n,
            asChild: !0,
            children: (0, N.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        Ii = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, N.jsx)(Js, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Ti = ei,
        zi = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = bi(), i = (0, B.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? I.DX : ca;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ei = ua,
        ki = fa;
      var Li = r(28687),
        Ai = r(76646);

      function Vi(e) {
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

      function Mi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bi(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fi(Fi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qi(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bi(e.variantClassNames, e => Bi(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ki = Xi({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zi = Xi({
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
        Hi = Xi({
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
        Wi = Xi({
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
        Gi = Xi({
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
      const Ui = (0, S.createContext)(null);

      function $i() {
        const e = (0, S.useContext)(Ui);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Yi = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, B.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? I.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)();
          return (0, N.jsx)(Ui.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: a,
              isReadOnly: s,
              ...i
            },
            children: (0, N.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Qi = (0, S.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: a,
          isSelected: s,
          defaultSelected: i,
          onSelectedChange: d,
          name: l,
          value: c,
          ...u
        }, f) => {
          const p = (0, S.useRef)(null),
            v = (0, we.UP)(p, f),
            {
              size: h,
              appearance: y,
              inputId: m,
              labelId: b,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = $i(),
            _ = (0, Ai.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: C
            } = (0, Li.K)({
              id: a || m,
              "aria-labelledby": (0, B.VW)(n, b),
              "aria-describedby": (0, B.VW)(o, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            j = (0, B.v6)({
              className: Gi({
                appearance: y
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, N.jsxs)("div", {
            ...j,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                ...C,
                ref: v
              })
            }), (0, N.jsx)("div", {
              className: Wi({
                size: h
              }),
              "aria-hidden": "true",
              children: (0, N.jsx)("div", {
                className: Zi({
                  size: h,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        Ji = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            isDisabled: s,
            labelId: i,
            inputId: d,
            size: l
          } = $i(), c = (0, B.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Hi({
              isDisabled: s,
              size: l
            })
          }, o), u = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        ed = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = $i(), i = n.id || s, d = (0, B.v6)({
            className: Ki({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? I.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var td = r(58611);
      const rd = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, N.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        nd = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, N.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        od = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, N.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        ad = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, N.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        sd = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, N.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        id = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, N.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function dd(e) {
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

      function ld(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ld(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = dd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ld(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ud(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cd(cd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) fd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ud(e.variantClassNames, e => ud(e, e => e.split(" ")[0]))
            }
          }, t
        },
        vd = pd({
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
        hd = pd({
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
        yd = pd({
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
        md = pd({
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
        bd = pd({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gd = pd({
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
      const wd = (0, S.createContext)(null);

      function xd() {
        const e = (0, S.useContext)(wd);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const _d = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, B.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, B.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? I.DX : "div",
            l = (0, S.useId)(),
            c = (0, S.useId)(),
            u = (0, S.useId)();
          return (0, N.jsx)(wd.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, N.jsx)(d, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        Cd = (0, S.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: a,
          onClick: s,
          "aria-describedby": d,
          "aria-errormessage": l,
          "aria-labelledby": c,
          className: u,
          ...f
        }, p) => {
          const {
            size: v,
            appearance: h,
            isIndeterminate: y,
            isRequired: m,
            descriptionId: b,
            labelId: g,
            inputId: w,
            ...x
          } = xd(), _ = (0, S.useRef)(null), C = f.id || w, {
            isPressed: j,
            pressProps: O
          } = (0, ta.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: P,
            ...T
          } = (0, Ai.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: z,
            isSelected: E,
            isDisabled: k,
            isReadOnly: L
          } = (0, td.v)({
            "aria-label": "",
            id: C,
            name: o,
            ...x
          }, {
            ...T,
            toggle: P,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), A = (0, B.v6)({
            className: hd({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || k || L || P()
            }
          }, O, f), V = (0, B.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, B.VW)(c, g),
            "aria-describedby": (0, B.VW)(d, b),
            "aria-errormessage": (0, B.VW)(l, x.isInvalid ? b : void 0),
            "aria-required": m,
            required: m
          }, z), M = y ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, N.jsxs)("div", {
            ...A,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, N.jsx)("div", {
              className: (0, D.clsx)(vd({
                size: v,
                appearance: h
              }), u),
              "aria-hidden": "true",
              "data-state": y ? "mixed" : E ? "checked" : "unchecked",
              "data-disabled": k || L,
              "data-testid": e,
              "data-pressed": j,
              children: (0, N.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (E || y) && (0, N.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        jd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            size: i,
            labelId: d,
            inputId: l,
            isRequired: c
          } = xd(), u = a.id || d, f = c && !o, p = (0, B.v6)({
            className: gd({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        Od = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = xd(), i = n.id || s, d = (0, B.v6)({
            className: yd({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? I.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Rd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = xd(), s = n.id || a, i = (0, B.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Pd = (0, S.createContext)(null);

      function Nd() {
        const e = (0, S.useContext)(Pd);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Dd = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, S.useState)(null), [l, c] = (0, S.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, B.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? I.DX : "fieldset";
          return (0, N.jsx)(Pd.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, N.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        Sd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: a,
          ...s
        }, i) => {
          const {
            isRequired: d
          } = Nd(), l = d && !a, c = (0, B.v6)({
            "data-testid": r,
            className: bd({
              showAsterisk: l
            })
          }, s), u = t ? I.DX : "legend";
          return (0, N.jsx)(I.s6, {
            enabled: o,
            children: (0, N.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, N.jsx)(I.xV, {
                children: e
              }), !d && (0, N.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        Id = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = Nd(), s = (0, S.useId)(), i = n.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, B.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? I.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Td = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = Nd(), s = (0, B.v6)({
            "data-testid": r,
            className: md({
              size: a
            })
          }, n), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        zd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = Nd(), s = (0, S.useId)(), i = n.id || s;
          (0, S.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, B.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = nt.X,
            c = t ? I.DX : "div";
          return (0, N.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, N.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, N.jsx)(I.xV, {
              children: e
            })]
          })
        });

      function Ed(e) {
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

      function kd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ld(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ed(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ad(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Md = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ld(Ld({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ad(e.variantClassNames, e => Ad(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Fd = Md({
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
        Bd = Md({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qd = Md({
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
        Xd = Md({
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
      const Kd = (0, S.createContext)(null);

      function Zd() {
        const e = (0, S.useContext)(Kd);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Hd = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, B.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? I.DX : "div",
            u = (0, S.useId)(),
            f = (0, S.useId)(),
            p = (0, S.useId)(),
            v = (0, S.useId)();
          return (0, N.jsx)(Kd.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: v,
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              ...i
            },
            children: (0, N.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Wd = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            labelId: i,
            inputId: d,
            isDisabled: l,
            isRequired: c
          } = Zd(), u = (0, B.v6)({
            className: qd({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, a), f = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Gd = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: a,
          placeholder: s = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          ...l
        }, c) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: v,
            isDisabled: h,
            isRequired: y,
            isReadOnly: m,
            status: b
          } = Zd(), g = (0, S.useRef)(null), w = (0, we.UP)(g, c), x = (0, B.v6)({
            className: Xd({
              isInvalid: "invalid" === b,
              isDisabled: h,
              isReadOnly: m,
              isSuccess: "success" === b
            }),
            name: a,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: h,
            required: y,
            readOnly: m,
            placeholder: s,
            "aria-labelledby": (0, B.VW)(l.id, f, v, i),
            "aria-describedby": (0, B.VW)(u, d),
            "data-testid": r,
            ..."invalid" === b && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === b && {
              "data-success": !0
            },
            ...h && {
              "aria-disabled": !0
            },
            ...y && {
              "aria-required": !0
            }
          }, l), _ = e ? I.DX : "textarea";
          return (0, N.jsx)(_, {
            ref: w,
            ...x,
            children: t
          })
        }),
        Ud = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Zd(), i = (0, B.v6)({
            className: Fd({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        $d = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = Zd(), i = (0, B.v6)({
            className: Bd({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Yd = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Zd(), i = (0, B.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? I.DX : ca;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Qd = ua,
        Jd = fa;
      var el = r(27097),
        tl = r(18222);

      function rl(e) {
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

      function nl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ol(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nl(Object(r)).forEach(function(t) {
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
      var sl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        il = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ol(ol({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sl(l, n, e.defaultVariants) && (r += " " + c);
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
        dl = il({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ll = il({
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
      const cl = (0, S.createContext)(null);

      function ul() {
        const e = (0, S.useContext)(cl);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const fl = (0, S.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: a,
          "aria-labelledby": s,
          "aria-describedby": i,
          "aria-errormessage": d,
          status: l = "neutral",
          ...c
        }, u) => {
          const f = (0, S.useRef)(null),
            p = (0, we.UP)(f, u),
            v = (0, S.useId)(),
            h = (0, S.useId)(),
            y = (0, S.useId)(),
            m = (0, el.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, tl.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, B.VW)(v, s),
              "aria-describedby": (0, B.VW)(h, y, i),
              "aria-errormessage": (0, B.VW)(y, d)
            }, m),
            g = (0, B.v6)({
              className: "foundry_njguqn0"
            }, b, (0, B.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? I.DX : "div";
          return (0, N.jsx)(cl.Provider, {
            value: {
              state: m,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: h,
              labelId: v,
              errorId: y,
              status: l,
              ...c
            },
            children: (0, N.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        pl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = ul(), i = (0, B.v6)({
            "data-testid": e,
            className: ll({
              size: a,
              orientation: s
            })
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        vl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...a
        }, s) => {
          const {
            isRequired: i,
            labelId: d
          } = ul(), l = i && !o, c = (0, B.v6)({
            id: a.id || d,
            "data-testid": e,
            className: dl({
              showAsterisk: l
            })
          }, a), u = t ? I.DX : "div";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        hl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = ul(), s = (0, B.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        yl = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = ul(), i = (0, B.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? I.DX : ca;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ml = ua,
        bl = fa;
      var gl = r(9153),
        wl = il({
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
        xl = il({
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
        _l = il({
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
        Cl = il({
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
      const jl = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, N.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Ol = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, N.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Rl = ({
          color: e = "currentColor"
        }) => (0, N.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, N.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        Pl = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? I.DX : "label";
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Nl = (0, S.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, S.useRef)(null),
            a = (0, we.UP)(o, n),
            s = (0, S.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = ul(),
            {
              isPressed: p,
              pressProps: v
            } = (0, ta.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, gl.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            y = h.checked,
            m = h.disabled || i?.isReadOnly,
            b = (0, B.v6)(h, {
              disabled: m,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...m && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            g = c[`Dot${l}`];
          return (0, N.jsxs)("div", {
            className: Cl({
              size: l
            }),
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                type: "radio",
                ...b,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, N.jsx)("div", {
              className: _l({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": y ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...v,
              children: (0, N.jsx)("span", {
                className: "foundry_1pfduet9",
                children: y && (0, N.jsx)(g, {})
              })
            })]
          })
        }),
        Dl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = ul(), d = (0, S.useId)(), l = (0, B.v6)({
            id: d,
            "data-testid": e,
            className: xl({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? I.DX : "div";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(c, {
              ...l,
              ref: a,
              children: r
            })
          })
        }),
        Sl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = ul(), s = (0, B.v6)({
            "data-testid": e,
            className: wl({
              isDisabled: a
            })
          }, n), i = t ? I.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var Il = r(35462);

      function Tl(e) {
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

      function zl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function El(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ll = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Al = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = El(El({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ll(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kl(e.variantClassNames, e => kl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vl = Al({
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
        Ml = Al({
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
        Fl = Al({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bl = Al({
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
        ql = Al({
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
        Xl = Al({
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
      const Kl = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Zl = (0, S.createContext)(null);

      function Hl() {
        const e = (0, S.useContext)(Zl);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Wl = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, S.useState)("text"), u = `${(0,S.useId)()}-label`, f = `${(0,S.useId)()}-input`, p = `${(0,S.useId)()}-description`, v = (0, S.useRef)(null), h = (0, S.useRef)(Kl), y = (0, B.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), m = e ? I.DX : "div";
          return (0, N.jsx)(Zl.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: a,
              status: s,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: l,
              setType: c,
              inputRef: v,
              focusState: h,
              ...i
            },
            children: (0, N.jsx)(m, {
              ref: d,
              ...y,
              children: t
            })
          })
        }),
        Gl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...a
        }, s) => {
          const {
            isDisabled: i,
            isRequired: d,
            inputId: l,
            labelId: c
          } = Hl(), u = d && !o, f = (0, B.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: Xl({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Ul = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Hl(), s = (0, B.v6)({
            "data-testid": e,
            className: Fl({
              isDisabled: a
            })
          }, n), i = t ? I.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        $l = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = Hl(), d = (0, B.v6)({
            "data-testid": e,
            className: (0, D.clsx)(Vl({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? I.DX : "div";
          return (0, N.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Yl = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: a,
          placeholder: s = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          type: l = "text",
          ...c
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: v,
            status: h,
            labelId: y,
            inputId: m,
            descriptionId: b,
            setType: g,
            type: w,
            inputRef: x,
            focusState: _
          } = Hl();
          (0, S.useEffect)(() => g(l), []);
          const C = "invalid" === h,
            j = (0, B.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, B.VW)(y, i),
              "aria-describedby": (0, B.VW)(b, d),
              "data-testid": e,
              className: (0, D.clsx)(ql({
                isDisabled: f,
                isReadOnly: p
              }), "foundry_8oytzo2"),
              onBlur: e => {
                if (_.current) {
                  const {
                    selectionStart: t,
                    selectionEnd: r
                  } = e.currentTarget;
                  _.current.selectionStart = t, _.current.selectionEnd = r
                }
              },
              ...C && {
                "aria-invalid": !0,
                "aria-errormessage": b
              },
              ..."success" === h && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, c),
            O = (0, Il.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            R = (0, we.UP)(r && n ? O : null, x, u),
            P = t ? I.DX : "input";
          return (0, N.jsx)(P, {
            ref: R,
            ...j
          })
        }),
        Ql = (0, S.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = Hl(), i = (0, B.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, D.clsx)(Bl({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? I.DX : nt[e];
          return (0, N.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        Jl = (0, S.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Hl(), n = (0, B.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, D.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, N.jsx)(P.K, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        ec = (0, S.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = Hl(), d = "password" === o, l = d ? e : t;
          (0, S.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, B.v6)({
            label: l,
            icon: d ? "Eye" : "EyeOff",
            onPress: () => {
              a(d ? "text" : "password");
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
          return (0, N.jsxs)(Kr, {
            children: [(0, N.jsx)(Zr, {
              children: (0, N.jsx)(Jl, {
                ref: n,
                ...c
              })
            }), (0, N.jsxs)(Hr, {
              side: "bottom",
              align: "end",
              children: [l, (0, N.jsx)(Wr, {})]
            })]
          })
        }),
        tc = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Hl(), i = (0, B.v6)({
            className: Ml({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        rc = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Hl(), i = (0, B.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? I.DX : ca;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        nc = ua,
        oc = fa;
      var ac = r(16319);

      function sc(e) {
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

      function ic(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function dc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ic(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = sc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ic(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        uc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dc(dc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lc(e.variantClassNames, e => lc(e, e => e.split(" ")[0]))
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
      const fc = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        pc = (0, S.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, S.useRef)(null),
            s = (0, we.UP)(a, o),
            {
              buttonProps: i
            } = (0, we.sL)(n, a),
            d = (0, B.v6)({
              "data-testid": r,
              className: uc({
                size: t
              })
            }, i);
          return (0, N.jsx)("button", {
            ref: s,
            ...d,
            children: (0, N.jsx)(nt.X, {
              label: e,
              size: fc[t]
            })
          })
        });

      function vc(e) {
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

      function hc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function yc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = vc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function mc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var bc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yc(yc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) bc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mc(e.variantClassNames, e => mc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wc = gc({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xc = gc({
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
        _c = gc({
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
      const Cc = (0, S.createContext)(null);

      function jc() {
        const e = (0, S.useContext)(Cc);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Oc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? I.DX : "div",
            i = (0, B.v6)({
              className: _c({
                status: r,
                background: n
              })
            }, o);
          return (0, N.jsx)(Cc.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, N.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        Rc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, B.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Pc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, B.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Nc = {
          danger: nt.CircleX,
          information: nt.Info,
          success: nt.CircleCheck,
          warning: nt.TriangleAlert
        },
        Dc = (0, S.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = jc(), a = e ? I.DX : Nc[o], s = (0, B.v6)({
            className: xc({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, N.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        Sc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, B.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Ic = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, B.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Tc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, S.useRef)(null),
            s = (0, we.UP)(a, o),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, ac.i)(n, a),
            c = (0, B.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, N.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        zc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? I.DX : "div",
            s = (0, B.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Ec = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, D.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        kc = (0, S.forwardRef)((e, t) => {
          const {
            background: r
          } = jc(), n = "none" !== r, o = (0, B.v6)({
            className: wc({
              hasBackground: n
            })
          }, e);
          return (0, N.jsx)(pc, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var Lc = r(64634),
        Ac = r(7697),
        Vc = r(17497);

      function Mc(e) {
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

      function Fc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Bc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Mc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kc = "foundry_qmpv6yv",
        Zc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bc(Bc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qc(e.variantClassNames, e => qc(e, e => e.split(" ")[0]))
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
      const Hc = (0, S.createContext)(null);

      function Wc() {
        const e = (0, S.useContext)(Hc);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Gc = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: a,
          align: s = "left",
          ...i
        }, d) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const t = (0, we.rl)(),
                r = (0, we.jt)(),
                [n, o] = (0, S.useState)([]),
                a = n.length,
                [s, i] = (0, S.useState)(0),
                [d, l] = (0, Lc.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, Ac.A)(), (0, Vc.A)()]),
                c = (0, S.useRef)(0),
                u = (0, S.useRef)(!1),
                f = n[s],
                p = (0, S.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                v = (0, S.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                h = (0, S.useCallback)((e, t) => {
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
                      const d = (l = 1 - Math.abs(i * c.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[s].style.opacity = d
                    })
                  })
                }, []);
              return (0, S.useEffect)(() => {
                l && (v(l), h(l), l.on("reInit", v).on("reInit", h).on("scroll", h).on("slideFocus", h))
              }, [l, h]), (0, S.useEffect)(() => {
                l && (p(l), l.on("select", p).on("reInit", p))
              }, [l, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: a,
                emblaRef: d,
                emblaApi: l,
                prevAlert: () => l?.scrollPrev(r),
                nextAlert: () => l?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: s,
                setCurrentAlertIndex: i,
                isInitialized: u.current,
                loopPagination: e,
                canScrollNext: () => l?.canScrollNext() || !1,
                canScrollPrev: () => l?.canScrollPrev() || !1
              }
            })({
              loopPagination: n
            }),
            {
              currentAlert: c,
              isInitialized: u,
              setAlerts: f,
              numAlerts: p
            } = l;
          (0, S.useEffect)(() => {
            o && a && f([{
              status: o,
              background: a,
              align: s
            }])
          }, []);
          const v = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            h = (0, B.v6)({
              className: Zc(c)
            }, v, i),
            y = e ? I.DX : "div";
          return (0, N.jsx)(Hc.Provider, {
            value: l,
            children: (0, N.jsx)(y, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...h,
              children: t
            })
          })
        }),
        Uc = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        $c = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Wc();
          if (!e && !n || !n?.status) return null;
          const o = e || Uc[n.status],
            a = nt[o],
            s = (0, B.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, N.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Yc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, B.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Qc = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? I.DX : "div",
            d = (0, B.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, N.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        Jc = (0, S.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Wc(), i = (0, B.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, we.UP)(a, n), l = S.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, S.useEffect)(() => {
            l && o(l)
          }, []), s?.on("slidesChanged", () => {
            l && o(l)
          }), (0, N.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, N.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        eu = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, S.useRef)(null),
            s = (0, we.UP)(a, o),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, ac.i)(n, a),
            c = (0, B.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, N.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...d,
            ...c,
            children: t
          })
        }),
        tu = (0, S.forwardRef)((e, t) => {
          const r = (0, B.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, N.jsx)(pc, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        ru = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? I.DX : "div",
            s = (0, B.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        nu = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Wc(), a = (0, B.v6)({
            className: Kc
          }, t);
          return (0, N.jsx)(P.K, {
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
        ou = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Wc(), a = (0, B.v6)({
            className: Kc
          }, t);
          return (0, N.jsx)(P.K, {
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
        au = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Wc(), a = (0, B.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, N.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function su(e) {
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

      function iu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function du(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? iu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = su(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        uu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = du(du({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lu(e.variantClassNames, e => lu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        fu = uu({
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
        pu = uu({
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
        vu = uu({
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
      const hu = (0, S.createContext)(null);

      function yu() {
        const e = (0, S.useContext)(hu);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const mu = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: a,
          hasBorder: s,
          isDisabled: i,
          ...d
        }, l) => {
          const c = {
              size: n,
              background: o,
              color: a,
              hasBorder: s,
              isDisabled: i
            },
            u = (0, B.v6)({
              className: pu(c)
            }, d),
            f = e ? I.DX : "div";
          return (0, N.jsx)(hu.Provider, {
            value: c,
            children: (0, N.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        bu = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = yu(), s = e ? I.DX : "div", i = (0, B.v6)({
            className: vu({
              size: a
            })
          }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        gu = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, B.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        wu = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = yu(), a = (0, B.v6)({
            className: fu({
              background: n
            })
          }, t);
          return (0, N.jsx)(P.K, {
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
      var xu = "ToastProvider",
        [_u, Cu, ju] = Qr("Toast"),
        [Ou, Ru] = (0, ct.A)("Toast", [ju]),
        [Pu, Nu] = Ou(xu),
        Du = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            children: s
          } = e, [i, d] = S.useState(null), [l, c] = S.useState(0), u = S.useRef(!1), f = S.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${xu}\`. Expected non-empty \`string\`.`), (0, N.jsx)(_u.Provider, {
            scope: t,
            children: (0, N.jsx)(Pu, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: l,
              viewport: i,
              onViewportChange: d,
              onToastAdd: S.useCallback(() => c(e => e + 1), []),
              onToastRemove: S.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: s
            })
          })
        };
      Du.displayName = xu;
      var Su = "ToastViewport",
        Iu = ["F8"],
        Tu = "toast.viewportPause",
        zu = "toast.viewportResume",
        Eu = S.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = Iu,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = Nu(Su, r), i = Cu(r), d = S.useRef(null), l = S.useRef(null), c = S.useRef(null), u = S.useRef(null), f = (0, lt.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          S.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), S.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (v && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(Tu);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(zu);
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
          }, [v, s.isClosePausedRef]);
          const h = S.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Qu(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return S.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = h({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  Ju(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, h]), (0, N.jsxs)(Ot, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, N.jsx)(Lu, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Ju(h({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, N.jsx)(_u.Slot, {
              scope: r,
              children: (0, N.jsx)(pt.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, N.jsx)(Lu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Ju(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Eu.displayName = Su;
      var ku = "ToastFocusProxy",
        Lu = S.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = Nu(ku, r);
          return (0, N.jsx)(sr, {
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
      Lu.displayName = ku;
      var Au = "Toast",
        Vu = S.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: Au
          });
          return (0, N.jsx)(rr, {
            present: r || i,
            children: (0, N.jsx)(Bu, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, yt.c)(e.onPause),
              onResume: (0, yt.c)(e.onResume),
              onSwipeStart: (0, dt.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, dt.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, dt.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, dt.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      Vu.displayName = Au;
      var [Mu, Fu] = Ou(Au, {
        onClose() {}
      }), Bu = S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: a,
          onClose: s,
          onEscapeKeyDown: i,
          onPause: d,
          onResume: l,
          onSwipeStart: c,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...v
        } = e, h = Nu(Au, r), [y, m] = S.useState(null), b = (0, lt.s)(t, e => m(e)), g = S.useRef(null), w = S.useRef(null), x = o || h.duration, _ = S.useRef(0), C = S.useRef(x), j = S.useRef(0), {
          onToastAdd: O,
          onToastRemove: R
        } = h, P = (0, yt.c)(() => {
          const e = y?.contains(document.activeElement);
          e && h.viewport?.focus(), s()
        }), D = S.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), _.current = (new Date).getTime(), j.current = window.setTimeout(P, e))
        }, [P]);
        S.useEffect(() => {
          const e = h.viewport;
          if (e) {
            const t = () => {
                D(C.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                C.current = C.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(Tu, r), e.addEventListener(zu, t), () => {
              e.removeEventListener(Tu, r), e.removeEventListener(zu, t)
            }
          }
        }, [h.viewport, x, d, l, D]), S.useEffect(() => {
          a && !h.isClosePausedRef.current && D(x)
        }, [a, x, h.isClosePausedRef, D]), S.useEffect(() => (O(), () => R()), [O, R]);
        const I = S.useMemo(() => y ? Uu(y) : null, [y]);
        return h.viewport ? (0, N.jsxs)(N.Fragment, {
          children: [I && (0, N.jsx)(qu, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: I
          }), (0, N.jsx)(Mu, {
            scope: r,
            onClose: P,
            children: ut.createPortal((0, N.jsx)(_u.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(jt, {
                asChild: !0,
                onEscapeKeyDown: (0, dt.mK)(i, () => {
                  h.isFocusedToastEscapeKeyDownRef.current || P(), h.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, N.jsx)(pt.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": h.swipeDirection,
                  ...v,
                  ref: b,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, P()))
                  }),
                  onPointerDown: (0, dt.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, dt.mK)(e.onPointerMove, e => {
                    if (!g.current) return;
                    const t = e.clientX - g.current.x,
                      r = e.clientY - g.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(h.swipeDirection),
                      a = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max,
                      s = o ? a(0, t) : 0,
                      i = o ? 0 : a(0, r),
                      d = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: s,
                        y: i
                      },
                      f = {
                        originalEvent: e,
                        delta: l
                      };
                    n ? (w.current = l, $u("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Yu(l, h.swipeDirection, d) ? (w.current = l, $u("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, g.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Yu(t, h.swipeDirection, h.swipeThreshold) ? $u("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : $u("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), h.viewport)
          })]
        }) : null
      }), qu = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = Nu(Au, t), [a, s] = S.useState(!1), [i, d] = S.useState(!1);
        return function(e = () => {}) {
          const t = (0, yt.c)(e);
          (0, It.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), S.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, N.jsx)(tr, {
          asChild: !0,
          children: (0, N.jsx)(sr, {
            ...n,
            children: a && (0, N.jsxs)(N.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Xu = S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.div, {
          ...n,
          ref: t
        })
      });
      Xu.displayName = "ToastDescription";
      var Ku = "ToastAction",
        Zu = S.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, N.jsx)(Gu, {
            altText: r,
            asChild: !0,
            children: (0, N.jsx)(Wu, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`), null)
        });
      Zu.displayName = Ku;
      var Hu = "ToastClose",
        Wu = S.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Fu(Hu, r);
          return (0, N.jsx)(Gu, {
            asChild: !0,
            children: (0, N.jsx)(pt.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, dt.mK)(e.onClick, o.onClose)
            })
          })
        });
      Wu.displayName = Hu;
      var Gu = S.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, N.jsx)(pt.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Uu(e) {
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
              } else t.push(...Uu(e))
          }
        }), t
      }

      function $u(e, t, r, {
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
        }), n ? vt(o, a) : o.dispatchEvent(a)
      }
      var Yu = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Qu(e) {
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

      function Ju(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var ef = Du,
        tf = Eu,
        rf = Vu,
        nf = Xu,
        of = Zu,
        af = Wu;

      function sf(e) {
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

      function df(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function lf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? df(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = sf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : df(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var uf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ff = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = lf(lf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) uf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cf(e.variantClassNames, e => cf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pf = ff({
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
        vf = ff({
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
        hf = ff({
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
      const yf = ({
          testId: e,
          ...t
        }) => (0, N.jsx)(ef, {
          "data-testid": e,
          ...t
        }),
        mf = (0, S.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, B.v6)({
            className: hf({
              position: r
            })
          }, n);
          return (0, N.jsx)(tf, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        bf = (0, S.createContext)(null);

      function gf() {
        const e = (0, S.useContext)(bf);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const wf = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? I.DX : rf,
            i = (0, B.v6)({
              className: vf({
                appearance: n
              })
            }, o);
          return (0, N.jsx)(bf.Provider, {
            value: {
              appearance: n
            },
            children: (0, N.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        xf = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? I.DX : nf,
            s = (0, B.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        _f = {
          danger: nt.CircleX,
          information: nt.Info,
          success: nt.CircleCheck,
          warning: nt.TriangleAlert,
          avocado: nt.CircleCheck
        },
        Cf = (0, S.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = gf(), o = e ? I.DX : _f[n], a = (0, B.v6)({
            className: pf({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, N.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        jf = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, N.jsx)(of, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, N.jsx)(I.DX, {
              children: t
            }) : (0, N.jsx)(R.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Of = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, B.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, N.jsx)(af, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, N.jsx)(I.DX, {
              children: t
            }) : (0, N.jsx)(pc, {
              size: "SM",
              label: n
            })
          })
        });
      var Rf = r(92405);

      function Pf(e) {
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

      function Nf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Df(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var If = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Df(Df({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) If(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sf(e.variantClassNames, e => Sf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zf = Tf({
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
        Ef = Tf({
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
        kf = Tf({
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

      function Lf() {
        const e = (0, S.useContext)(Af);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Af = (0, S.createContext)(null),
        Vf = (0, S.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, B.v6)({
              className: kf({
                size: n
              })
            }, o),
            i = r ? I.DX : "ol";
          return (0, N.jsx)(Af.Provider, {
            value: {
              size: n
            },
            children: (0, N.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        Mf = (0, S.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, S.useRef)(null),
            {
              size: i
            } = Lf(),
            {
              itemProps: d
            } = (0, Rf.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? I.DX : "a",
            c = (0, B.v6)({
              className: (0, D.clsx)(zf({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, N.jsx)("li", {
            className: Ef({
              size: i
            }),
            ref: a,
            children: (0, N.jsx)(l, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        Ff = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e];
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Bf = (0, S.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, S.useState)(r), {
            size: d
          } = Lf(), l = (0, B.v6)({
            className: Ef({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, N.jsx)("li", {
            ref: a,
            ...l,
            children: (0, N.jsxs)($s, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, N.jsx)(Ys, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, N.jsx)(ei, {
                children: (0, N.jsx)(ti, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, N.jsx)(ri, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        qf = (0, S.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? I.DX : ni,
            s = (0, B.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function Xf(e) {
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

      function Kf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Xf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zf(Zf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hf(e.variantClassNames, e => Hf(e, e => e.split(" ")[0]))
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
      const Uf = (0, S.createContext)(null);

      function $f() {
        const e = (0, S.useContext)(Uf);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Yf = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? I.DX : "div",
            d = (0, B.v6)({
              className: Gf({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, N.jsx)(Uf.Provider, {
            value: {
              type: o
            },
            children: (0, N.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...d
            })
          })
        }),
        Qf = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, B.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        Jf = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, B.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        ep = () => {
          const e = (0, we.Ub)(B.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        tp = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function rp(e) {
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

      function np(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function op(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? np(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ap(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ip = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = op(op({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ap(e.variantClassNames, e => ap(e, e => e.split(" ")[0]))
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
      const dp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, N.jsx)(Wa, {
            ref: r,
            ...n
          })
        }),
        lp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, N.jsx)(Ga, {
            ref: r,
            ...n
          })
        }),
        cp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, N.jsx)(Ua, {
            ref: r,
            ...n
          })
        }),
        up = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, we.rl)(),
            o = (0, B.v6)({
              "data-testid": e,
              className: ip({
                isTouchDevice: n
              })
            }, t);
          return (0, N.jsx)($a, {
            ref: r,
            ...o
          })
        }),
        fp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Ya, {
            ref: r,
            ...n
          })
        });

      function pp(e) {
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

      function vp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = pp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hp(hp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yp(e.variantClassNames, e => yp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        gp = bp({
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
        wp = bp({
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
      const xp = (0, S.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, S.createRef)(),
          dialogSpringRef: (0, it.$9)(),
          overlaySpringRef: (0, it.$9)()
        }),
        _p = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, we.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, we.ZC)(d);
          return (0, N.jsx)(xp.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, S.useId)(),
              descriptionId: (0, S.useId)(),
              triggerRef: (0, S.useRef)(null),
              dialogSpringRef: (0, it.U2)(),
              overlaySpringRef: (0, it.U2)()
            },
            children: (0, N.jsx)(Cp, {
              ...i
            })
          })
        },
        Cp = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, S.useContext)(xp), n = (0, B.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, N.jsx)(jo, {
            ...n
          })
        },
        jp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, S.useContext)(xp), a = (0, we.UP)(o, r), s = (0, B.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, N.jsx)(Oo, {
            ...s,
            ref: a
          })
        }),
        Op = e => (0, N.jsx)(Ro, {
          forceMount: !0,
          ...e
        }),
        Rp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, S.useContext)(xp), s = tp(), i = (0, we.jt)(), d = (0, it.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: it.$W.stiff,
            immediate: i || a
          }), l = (0, B.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, it.CS)(Po);
          return (0, S.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, N.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        Pp = (0, S.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, a) => {
          const {
            isOpen: s,
            setIsOpen: i,
            openImmediately: d,
            contentId: l,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: v,
            dialogSpringRef: h,
            overlaySpringRef: y
          } = (0, S.useContext)(xp), m = (0, we.rl)(), b = (0, we.jt)(), g = (0, S.useRef)(null), w = ep(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = tp(),
              s = ep(),
              i = (0, S.useRef)();
            return {
              bindDrag: (0, Ce.useDrag)(({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: v
              }) => {
                const {
                  height: h
                } = e.current.getBoundingClientRect();
                if (p && (i.current = function(e, t) {
                    for (; e;) {
                      if (e.scrollHeight > e.clientHeight) {
                        if (0 !== e.scrollTop) return !1;
                        if (t < 0) return !1;
                        if ("dialog" === e.getAttribute("role")) return !0
                      }
                      e = e.parentNode
                    }
                  }(v, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (h - l) / h;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * h || d > .5 && c > 0 ? (t.start({
                  ...s(0),
                  immediate: !1,
                  config: it.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: it.$W.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: it.$W.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: it.$W.stiff
                })))
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
              })
            }
          }({
            dialogRef: g,
            overlaySpringRef: y,
            dialogSpringRef: h,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: v
          }), _ = (0, it.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: it.$W.stiff,
            ref: h,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : v?.()
            }
          });
          (0, S.useEffect)(() => {
            h.start()
          }, [s]);
          const C = (0, we.UP)(g, a),
            j = m && !b && !n && x(),
            O = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            R = (0, it.CS)(No);
          return _((t, r) => r ? (0, N.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, N.jsx)(R, {
              forceMount: !0,
              ref: C,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        Np = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, N.jsx)(Do, {
            ref: r,
            ...n
          })
        }),
        Dp = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(So, {
            ref: r,
            ...n
          })
        }),
        Sp = (0, S.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(dp, {
            ref: n,
            ...o,
            children: [(0, N.jsx)(lp, {
              className: "foundry_xov33ni",
              children: e
            }), (0, N.jsx)(cp, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, N.jsx)(up, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Ip = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        Tp = (0, S.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              "data-testid": r,
              className: gp({
                align: e
              })
            }, n),
            s = t ? I.DX : "header";
          return (0, N.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        zp = (0, S.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, B.v6)({
            "data-testid": e,
            className: wp({
              appearance: t
            })
          }, r);
          return (0, N.jsx)(Do, {
            ref: n,
            ...o
          })
        }),
        Ep = (0, S.forwardRef)((e, t) => {
          const r = (0, B.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, N.jsx)(P.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        kp = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, N.jsx)(I.DX, {
              ref: n,
              ...o
            }) : (0, N.jsx)(pc, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, N.jsx)(Io, {
            asChild: !0,
            children: a
          })
        }),
        Lp = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        Ap = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? I.DX : "footer";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var Vp = r(93367),
        Mp = r(20972),
        Fp = r(2559),
        Bp = "Avatar",
        [qp, Xp] = (0, Vp.A)(Bp),
        [Kp, Zp] = qp(Bp),
        Hp = S.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = S.useState("idle");
          return (0, N.jsx)(Kp, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, N.jsx)(Mp.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Hp.displayName = Bp;
      var Wp = "AvatarImage",
        Gp = S.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...a
          } = e, s = Zp(Wp, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, Fp.z)(),
              o = S.useRef(null),
              a = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [s, i] = S.useState(() => $p(a, e));
            return (0, It.N)(() => {
              i($p(a, e))
            }, [a, e]), (0, It.N)(() => {
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
          }(n, a), d = (0, yt.c)(e => {
            o(e), s.onImageLoadingStatusChange(e)
          });
          return (0, It.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, N.jsx)(Mp.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      Gp.displayName = Wp;
      var Up = "AvatarFallback";

      function $p(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      S.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = Zp(Up, r), [s, i] = S.useState(void 0 === n);
        return S.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, N.jsx)(Mp.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Up;
      var Yp = Hp,
        Qp = Gp;

      function Jp(e) {
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

      function ev(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ev(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Jp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ov = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tv(tv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) nv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rv(e.variantClassNames, e => rv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        av = ov({
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
        sv = "var(--foundry_v912w22)",
        iv = "var(--foundry_v912w23)",
        dv = ov({
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
        lv = ov({
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
        cv = "var(--foundry_v912w21)",
        uv = "var(--foundry_v912w20)",
        fv = ov({
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
      const pv = (0, S.createContext)(null);

      function vv() {
        const e = (0, S.useContext)(pv);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const hv = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, B.v6)({
            "data-testid": r,
            "aria-disabled": a,
            className: av({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, N.jsx)(pv.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, N.jsx)(Yp, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        yv = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = vv(), [i, d] = (0, S.useState)(!1);
          (0, S.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, B.v6)({
              className: dv({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, N.jsx)("span", {
            className: lv({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, N.jsx)(Qp, {
              ref: o,
              ...c
            })
          })
        }),
        mv = (0, S.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, S.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = vv(),
            d = s || "online",
            l = (0, we.UP)(o, n),
            c = (0, B.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: fv({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, q.DI)({
                [uv]: t?.online,
                [cv]: t?.offline,
                [sv]: t?.away,
                [iv]: t?.busy
              })
            }, r);
          return (0, N.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function bv(e) {
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

      function gv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _v = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wv(wv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _v(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xv(e.variantClassNames, e => xv(e, e => e.split(" ")[0]))
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
      const jv = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? I.DX : "nav";
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Ov = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? I.DX : "div";
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Rv = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, S.useRef)(null),
            i = (0, we.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, ac.i)(o, s),
            c = (0, B.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, D.clsx)(Cv({
                isActive: r
              }))
            }, d),
            u = e ? I.DX : "a";
          return (0, N.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        Pv = (0, S.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(Rv, {
            ref: n,
            ...o,
            children: (0, N.jsx)(nt.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Nv = (0, S.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(Rv, {
            ref: n,
            ...o,
            children: (0, N.jsx)(nt.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Dv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, B.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            a = e ? I.DX : "span";
          return (0, N.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        Sv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ...o,
            children: t
          })
        },
        Iv = (0, S.createContext)(null);

      function Tv() {
        const e = (0, S.useContext)(Iv);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const zv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, S.useId)(),
            a = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? I.DX : "div";
          return (0, N.jsx)(Iv.Provider, {
            value: {
              labelId: o
            },
            children: (0, N.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        Ev = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = Tv(), s = (0, B.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? I.DX : "label";
          return (0, N.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        kv = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = Tv(), s = (0, B.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? I.DX : gi;
          return (0, N.jsxs)(i, {
            ...s,
            children: [(0, N.jsxs)(Ci, {
              ref: o,
              children: [(0, N.jsx)(ji, {
                placeholder: r
              }), (0, N.jsx)(Oi, {})]
            }), (0, N.jsx)(Ti, {
              children: (0, N.jsx)(wi, {
                children: (0, N.jsx)(_i, {
                  children: t
                })
              })
            })]
          })
        }),
        Lv = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              "data-testid": r
            }, n),
            s = e ? I.DX : Di;
          return (0, N.jsx)(s, {
            ...a,
            ref: o,
            children: (0, N.jsx)(Si, {
              children: t
            })
          })
        }),
        Av = (0, S.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            s = e ? I.DX : "p";
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var Vv = "rovingFocusGroup.onEntryFocus",
        Mv = {
          bubbles: !1,
          cancelable: !0
        },
        Fv = "RovingFocusGroup",
        [Bv, qv, Xv] = Qr(Fv),
        [Kv, Zv] = (0, ct.A)(Fv, [Xv]),
        [Hv, Wv] = Kv(Fv),
        Gv = S.forwardRef((e, t) => (0, N.jsx)(Bv.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, N.jsx)(Bv.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, N.jsx)(Uv, {
              ...e,
              ref: t
            })
          })
        }));
      Gv.displayName = Fv;
      var Uv = S.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: a,
            currentTabStopId: s,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = S.useRef(null), p = (0, lt.s)(t, f), v = (0, $r.jH)(a), [h, y] = (0, or.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Fv
          }), [m, b] = S.useState(!1), g = (0, yt.c)(l), w = qv(r), x = S.useRef(!1), [_, C] = S.useState(0);
          return S.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Vv, g), () => e.removeEventListener(Vv, g)
          }, [g]), (0, N.jsx)(Hv, {
            scope: r,
            orientation: n,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: S.useCallback(e => y(e), [y]),
            onItemShiftTab: S.useCallback(() => b(!0), []),
            onFocusableItemAdd: S.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: S.useCallback(() => C(e => e - 1), []),
            children: (0, N.jsx)(pt.div, {
              tabIndex: m || 0 === _ ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, dt.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, dt.mK)(e.onFocus, e => {
                const t = !x.current;
                if (e.target === e.currentTarget && t && !m) {
                  const t = new CustomEvent(Vv, Mv);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Jv(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, dt.mK)(e.onBlur, () => b(!1))
            })
          })
        }),
        $v = "RovingFocusGroupItem",
        Yv = S.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Rt.B)(), l = a || d, c = Wv($v, r), u = c.currentTabStopId === l, f = qv(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: h
          } = c;
          return S.useEffect(() => {
            if (n) return p(), () => v()
          }, [n, p, v]), (0, N.jsx)(Bv.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, N.jsx)(pt.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, dt.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, dt.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : Qv[n]
                }(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let a = o.map(e => e.ref.current);
                  if ("last" === t) a.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && a.reverse();
                    const o = a.indexOf(e.currentTarget);
                    a = c.loop ? (n = o + 1, (r = a).map((e, t) => r[(n + t) % r.length])) : a.slice(o + 1)
                  }
                  setTimeout(() => Jv(a))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != h
              }) : s
            })
          })
        });
      Yv.displayName = $v;
      var Qv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Jv(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var eh = Gv,
        th = Yv,
        rh = "Toggle",
        nh = S.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, or.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: rh
          });
          return (0, N.jsx)(pt.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, dt.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      nh.displayName = rh;
      var oh = "ToggleGroup",
        [ah, sh] = (0, ct.A)(oh, [Zv]),
        ih = Zv(),
        dh = S.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, N.jsx)(uh, {
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, N.jsx)(fh, {
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${oh}\``)
        });
      dh.displayName = oh;
      var [lh, ch] = ah(oh), uh = S.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, or.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: oh
        });
        return (0, N.jsx)(lh, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: S.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: S.useCallback(() => i(""), [i]),
          children: (0, N.jsx)(hh, {
            ...a,
            ref: t
          })
        })
      }), fh = S.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, or.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: oh
        }), d = S.useCallback(e => i((t = []) => [...t, e]), [i]), l = S.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, N.jsx)(lh, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, N.jsx)(hh, {
            ...a,
            ref: t
          })
        })
      });
      dh.displayName = oh;
      var [ph, vh] = ah(oh), hh = S.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = ih(r), c = (0, $r.jH)(s), u = {
          role: "group",
          dir: c,
          ...d
        };
        return (0, N.jsx)(ph, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, N.jsx)(eh, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, N.jsx)(pt.div, {
              ...u,
              ref: t
            })
          }) : (0, N.jsx)(pt.div, {
            ...u,
            ref: t
          })
        })
      }), yh = "ToggleGroupItem", mh = S.forwardRef((e, t) => {
        const r = ch(yh, e.__scopeToggleGroup),
          n = vh(yh, e.__scopeToggleGroup),
          o = ih(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = S.useRef(null);
        return n.rovingFocus ? (0, N.jsx)(th, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, N.jsx)(bh, {
            ...i,
            ref: t
          })
        }) : (0, N.jsx)(bh, {
          ...i,
          ref: t
        })
      });
      mh.displayName = yh;
      var bh = S.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, a = ch(yh, r), s = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === a.type ? s : void 0;
          return (0, N.jsx)(nh, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? a.onItemActivate(n) : a.onItemDeactivate(n)
            }
          })
        }),
        gh = dh,
        wh = mh;

      function xh(e) {
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

      function _h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ch(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _h(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Oh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ch(Ch({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Oh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jh(e.variantClassNames, e => jh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ph = "var(--foundry_zxwkyk2)",
        Nh = "var(--foundry_zxwkyk3)",
        Dh = Rh({
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
        Sh = Rh({
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
        Ih = Rh({
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
        Th = "var(--foundry_zxwkyk1)",
        zh = "var(--foundry_zxwkyk0)",
        Eh = Rh({
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
      const kh = (0, S.createContext)(null);

      function Lh() {
        const e = (0, S.useContext)(kh);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Ah = (0, S.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: Dh({
              size: t
            }),
            type: r
          }, n);
          return (0, N.jsx)(kh.Provider, {
            value: {
              size: t
            },
            children: (0, N.jsx)(gh, {
              ref: o,
              ...a
            })
          })
        }),
        Vh = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Lh(), o = (0, B.v6)({
            "data-testid": e,
            className: Sh({
              size: n
            })
          }, t);
          return (0, N.jsx)(wh, {
            ref: r,
            ...o
          })
        }),
        Mh = (0, S.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Lh(), o = nt[e];
          return (0, N.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        Fh = (0, S.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, B.v6)({
            "data-testid": e,
            className: Eh({
              status: r
            }),
            style: (0, q.DI)({
              [zh]: t?.online,
              [Th]: t?.offline,
              [Ph]: t?.away,
              [Nh]: t?.busy
            })
          }, n);
          return (0, N.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        Bh = (0, S.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = Lh(), a = (0, B.v6)({
            "data-testid": e,
            className: Ih({
              variant: t,
              size: o
            })
          }, r);
          return (0, N.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var qh = "Popover",
        [Xh, Kh] = (0, ct.A)(qh, [kt]),
        Zh = kt(),
        [Hh, Wh] = Xh(qh),
        Gh = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Zh(t), d = S.useRef(null), [l, c] = S.useState(!1), [u, f] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: qh
          });
          return (0, N.jsx)(Yt, {
            ...i,
            children: (0, N.jsx)(Hh, {
              scope: t,
              contentId: (0, Rt.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: S.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: S.useCallback(() => c(!0), []),
              onCustomAnchorRemove: S.useCallback(() => c(!1), []),
              modal: s,
              children: r
            })
          })
        };
      Gh.displayName = qh;
      var Uh = "PopoverAnchor",
        $h = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Wh(Uh, r), a = Zh(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return S.useEffect(() => (s(), () => i()), [s, i]), (0, N.jsx)(Qt, {
            ...a,
            ...n,
            ref: t
          })
        });
      $h.displayName = Uh;
      var Yh = "PopoverTrigger",
        Qh = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Wh(Yh, r), a = Zh(r), s = (0, lt.s)(t, o.triggerRef), i = (0, N.jsx)(pt.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": fy(o.open),
            ...n,
            ref: s,
            onClick: (0, dt.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, N.jsx)(Qt, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      Qh.displayName = Yh;
      var Jh = "PopoverPortal",
        [ey, ty] = Xh(Jh, {
          forceMount: void 0
        }),
        ry = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Wh(Jh, t);
          return (0, N.jsx)(ey, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(rr, {
              present: r || a.open,
              children: (0, N.jsx)(tr, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      ry.displayName = Jh;
      var ny = "PopoverContent",
        oy = S.forwardRef((e, t) => {
          const r = ty(ny, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Wh(ny, e.__scopePopover);
          return (0, N.jsx)(rr, {
            present: n || a.open,
            children: a.modal ? (0, N.jsx)(sy, {
              ...o,
              ref: t
            }) : (0, N.jsx)(iy, {
              ...o,
              ref: t
            })
          })
        });
      oy.displayName = ny;
      var ay = (0, ft.TL)("PopoverContent.RemoveScroll"),
        sy = S.forwardRef((e, t) => {
          const r = Wh(ny, e.__scopePopover),
            n = S.useRef(null),
            o = (0, lt.s)(t, n),
            a = S.useRef(!1);
          return S.useEffect(() => {
            const e = n.current;
            if (e) return (0, Xn.Eq)(e)
          }, []), (0, N.jsx)(qn.A, {
            as: ay,
            allowPinchZoom: !0,
            children: (0, N.jsx)(dy, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, dt.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, dt.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, dt.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        iy = S.forwardRef((e, t) => {
          const r = Wh(ny, e.__scopePopover),
            n = S.useRef(!1),
            o = S.useRef(!1);
          return (0, N.jsx)(dy, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                s = r.triggerRef.current?.contains(a);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        dy = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...u
          } = e, f = Wh(ny, r), p = Zh(r);
          return (0, Bn.Oh)(), (0, N.jsx)(En, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, N.jsx)(wt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, N.jsx)(Jt, {
                "data-state": fy(f.open),
                role: "dialog",
                id: f.contentId,
                ...p,
                ...u,
                ref: t,
                style: {
                  ...u.style,
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
        ly = "PopoverClose",
        cy = S.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Wh(ly, r);
          return (0, N.jsx)(pt.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, dt.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      cy.displayName = ly;
      var uy = S.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Zh(r);
        return (0, N.jsx)(er, {
          ...o,
          ...n,
          ref: t
        })
      });

      function fy(e) {
        return e ? "open" : "closed"
      }
      uy.displayName = "PopoverArrow";
      var py = Gh,
        vy = $h,
        hy = Qh,
        yy = ry,
        my = oy,
        by = cy,
        gy = uy;

      function wy(e) {
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

      function xy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var jy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Oy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _y(_y({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) jy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cy(e.variantClassNames, e => Cy(e, e => e.split(" ")[0]))
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
      const Ry = (0, S.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Py = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, we.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, B.v6)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, N.jsx)(Ry.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, N.jsx)(py, {
              ...s
            })
          })
        },
        Ny = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, N.jsx)(hy, {
            ref: r,
            ...n
          })
        }),
        Dy = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Sy = (0, S.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, S.useContext)(Ry), s = (0, S.useRef)(null), i = (0, we.UP)(s, o), {
            buttonProps: d
          } = (0, we.sL)(n, s), l = (0, B.v6)({
            "data-testid": r,
            className: Oy({
              size: t
            })
          }, d), c = a ? nt.ChevronUp : nt.ChevronDown;
          return (0, N.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, N.jsx)(c, {
              label: "",
              size: Dy[t]
            })]
          })
        }),
        Iy = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(vy, {
            ref: r,
            ...n
          })
        }),
        Ty = (0, S.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, N.jsx)(my, {
            ref: n,
            ...o
          })
        }),
        zy = (0, S.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, N.jsx)(gy, {
            ref: r,
            ...n
          })
        }),
        Ey = e => (0, N.jsx)(yy, {
          ...e
        }),
        ky = e => (0, N.jsx)(by, {
          ...e
        });

      function Ly(e) {
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

      function Ay(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ay(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ly(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ay(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function My(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Fy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        By = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vy(Vy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Fy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return My(e.variantClassNames, e => My(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qy = "var(--foundry_rmorls2)",
        Xy = By({
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
        Ky = "var(--foundry_rmorls0)",
        Zy = By({
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
        Hy = "var(--foundry_rmorls3)",
        Wy = "var(--foundry_rmorls1)",
        Gy = By({
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
        Uy = "Progress",
        [$y, Yy] = (0, Vp.A)(Uy),
        [Qy, Jy] = $y(Uy),
        em = S.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = nm,
            ...s
          } = e;
          !o && 0 !== o || sm(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = sm(o) ? o : 100;
          null === n || im(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = im(n, i) ? n : null,
            l = am(d) ? a(d, i) : void 0;
          return (0, N.jsx)(Qy, {
            scope: r,
            value: d,
            max: i,
            children: (0, N.jsx)(Mp.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": am(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": om(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      em.displayName = Uy;
      var tm = "ProgressIndicator",
        rm = S.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Jy(tm, r);
          return (0, N.jsx)(Mp.sG.div, {
            "data-state": om(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function nm(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function om(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function am(e) {
        return "number" == typeof e
      }

      function sm(e) {
        return am(e) && !isNaN(e) && e > 0
      }

      function im(e, t) {
        return am(e) && !isNaN(e) && e <= t && e >= 0
      }
      rm.displayName = tm;
      var dm = em,
        lm = rm;
      const cm = (0, S.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        um = (0, S.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, N.jsx)(cm.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, N.jsx)(fm, {
              ...n,
              ref: o
            })
          })
        }),
        fm = (0, S.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, B.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? I.DX : "div";
          return (0, N.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        pm = (0, S.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, S.useContext)(cm), i = (0, B.v6)({
            "data-testid": e,
            className: Zy({
              size: s
            }),
            value: o,
            max: a,
            style: (0, q.DI)({
              [Hy]: t
            }),
            "data-track": !0
          }, r);
          return (0, N.jsx)(dm, {
            ref: n,
            ...i
          })
        }),
        vm = (0, S.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, S.useContext)(cm), i = s ? "-100%" : `-${100-a}%`, d = (0, B.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, q.DI)({
              [Ky]: i,
              [Wy]: `${t}ms`,
              [qy]: r
            })
          }, n);
          return (0, N.jsx)(lm, {
            ref: o,
            ...d
          })
        }),
        hm = (0, S.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, S.useContext)(cm), a = (0, B.v6)({
            "data-testid": t,
            className: Xy({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? I.DX : "span";
          return (0, N.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        ym = (0, S.forwardRef)(({
          testId: e,
          format: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s,
            percentage: i,
            isInvalid: d
          } = (0, S.useContext)(cm), l = (0, B.v6)({
            "data-testid": e,
            className: Xy({
              size: s
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, N.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, N.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, N.jsx)("span", {
              className: Gy({
                size: s
              }),
              children: "%"
            })]
          }) : (0, N.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        })
    }
  }
]);