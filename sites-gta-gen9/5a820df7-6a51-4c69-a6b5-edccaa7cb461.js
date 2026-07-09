try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a820df7-6a51-4c69-a6b5-edccaa7cb461", e._sentryDebugIdIdentifier = "sentry-dbid-5a820df7-6a51-4c69-a6b5-edccaa7cb461")
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
  [3740], {
    33740(e, t, r) {
      r.r(t), r.d(t, {
        Alert: () => p,
        AlertBanner: () => m,
        Avatar: () => x,
        Badge: () => g,
        Body: () => le,
        Breadcrumbs: () => v,
        Button: () => O.$,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => ue,
        Dialog: () => w,
        Display: () => fe,
        Divider: () => F,
        Dropdown: () => s,
        Heading: () => me,
        IconButton: () => R.K,
        Label: () => ye,
        Lightbox: () => o,
        Loader: () => ee,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => te.y,
        Switch: () => a,
        Tag: () => h,
        Text: () => be,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => ge,
        Toast: () => y,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Gr,
        Content: () => Hr,
        Portal: () => Wr,
        Root: () => Kr,
        Trigger: () => Zr,
        useTooltipContext: () => Xr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Ho,
        Close: () => Yo,
        Content: () => Bo,
        Controls: () => Go,
        CssVars: () => es,
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
      var s = {};
      r.r(s), r.d(s, {
        Content: () => wi,
        Description: () => Ri,
        Hint: () => Ni,
        Label: () => Oi,
        Option: () => Si,
        OptionIcon: () => Ii,
        OptionText: () => Di,
        Portal: () => Ti,
        Root: () => bi,
        ScrollArea: () => _i,
        StatusIcon: () => Ei,
        StatusRoot: () => zi,
        StatusText: () => ki,
        Trigger: () => ji,
        TriggerIcon: () => Pi,
        TriggerText: () => Ci,
        Viewport: () => xi,
        useDropdownContext: () => gi
      });
      var a = {};
      r.r(a), r.d(a, {
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
        DashLG: () => ad,
        DashMD: () => sd,
        DashXL: () => id
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Pd,
        ErrorText: () => Od,
        Group: () => Sd,
        GroupDescription: () => Id,
        GroupErrorText: () => zd,
        GroupItems: () => Td,
        GroupLabel: () => Dd,
        Input: () => jd,
        Label: () => Cd,
        Root: () => _d,
        useGroupContext: () => Nd
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ud,
        Hint: () => $d,
        Input: () => Wd,
        Label: () => Gd,
        Root: () => Hd,
        RootContext: () => Kd,
        StatusIcon: () => Qd,
        StatusRoot: () => Yd,
        StatusText: () => Jd,
        useTextAreaContext: () => Zd
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Pl,
        DotMD: () => Cl,
        DotXL: () => Ol
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => hl,
        Input: () => Nl,
        Label: () => ml,
        Option: () => Rl,
        OptionDescription: () => Dl,
        OptionLabel: () => Sl,
        Options: () => pl,
        Root: () => fl,
        StatusIcon: () => vl,
        StatusRoot: () => yl,
        StatusText: () => gl,
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
        Label: () => Wl,
        PasswordButton: () => ec,
        Root: () => Gl,
        StatusIcon: () => nc,
        StatusRoot: () => rc,
        StatusText: () => oc
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Rc,
        CloseButton: () => kc,
        Description: () => Ic,
        ErrorText: () => Ec,
        Footer: () => zc,
        Header: () => Oc,
        Icon: () => Sc,
        Link: () => Tc,
        Root: () => Pc,
        RootContext: () => jc,
        Title: () => Dc,
        iconStatusMap: () => Nc,
        useAlertContext: () => Cc
      });
      var m = {};
      r.r(m), r.d(m, {
        Alert: () => Qc,
        CloseButton: () => tu,
        Description: () => Yc,
        Icon: () => $c,
        Link: () => eu,
        PaginationCounter: () => su,
        PaginationNav: () => ru,
        PaginationNextButton: () => nu,
        PaginationPrevButton: () => ou,
        PaginationViewport: () => Jc,
        Root: () => Wc,
        RootContext: () => Hc,
        iconStatusMap: () => Uc,
        useAlertBannerContext: () => Gc
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => wu,
        Icon: () => bu,
        Label: () => gu,
        Root: () => vu,
        RootContext: () => hu,
        useTagContext: () => yu
      });
      var y = {};
      r.r(y), r.d(y, {
        Action: () => Cf,
        CloseButton: () => Pf,
        Description: () => xf,
        Icon: () => jf,
        Provider: () => yf,
        Root: () => wf,
        RootContext: () => gf,
        Viewport: () => vf,
        iconAppearanceMap: () => _f,
        useToastContext: () => bf
      });
      var v = {};
      r.r(v), r.d(v, {
        Icon: () => Ff,
        Item: () => Mf,
        OverflowMenu: () => Bf,
        OverflowMenuItem: () => qf,
        Root: () => Vf,
        RootContext: () => Af,
        useBreadcrumbsContext: () => Lf
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Jf,
        Label: () => Qf,
        Root: () => Yf,
        useBadgeContext: () => $f
      });
      var b = {};
      r.r(b), r.d(b, {
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
        Content: () => Rp,
        Description: () => Sp,
        Footer: () => Ap,
        Header: () => Tp,
        HeaderButton: () => Ep,
        HeaderTitle: () => zp,
        Layout: () => Ip,
        Overlay: () => Op,
        Portal: () => Pp,
        Root: () => _p,
        ScrollArea: () => Dp,
        Title: () => Np,
        Trigger: () => Cp
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => ym,
        Root: () => hm,
        StatusIndicator: () => vm,
        useAvatarContext: () => mm
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => Dm,
        Dropdown: () => km,
        DropdownLabel: () => Em,
        Ellipsis: () => Sm,
        Item: () => Om,
        Label: () => Am,
        Next: () => Nm,
        Option: () => Lm,
        Pages: () => Pm,
        Prev: () => Rm,
        ResultsPerPage: () => zm,
        Root: () => Cm
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => Mh,
        Item: () => Vh,
        Label: () => Bh,
        Root: () => Ah,
        StatusIndicator: () => Fh,
        useChipGroupContext: () => Lh
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => Iy,
        Arrow: () => zy,
        Close: () => ky,
        Content: () => Ty,
        Portal: () => Ey,
        Root: () => Ry,
        RootContext: () => Oy,
        Trigger: () => Ny,
        TriggerButton: () => Dy
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => mv,
        Label: () => hv,
        Root: () => uv,
        Track: () => pv,
        UnitLabel: () => yv
      });
      var O = r(9089),
        R = r(82459),
        N = r(39793),
        S = r(81270),
        D = r(93082),
        I = r(22878);

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = T(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
            var o, s = null !== (o = r[n]) && void 0 !== o ? o : L.defaultVariants[n];
            if (null != s) {
              var a = s;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var i = L.variantClassNames[n][a];
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
      const F = (0, D.forwardRef)(({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: s,
        ...a
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          c = o ? I.DX : d;
        return (0, N.jsx)(c, {
          ref: i,
          className: (0, S.clsx)(M({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
        })
      });
      var B = r(94555),
        q = r(31066),
        X = r(7186);

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = K(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function G(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var W = (e, t, r) => {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) W(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return G(e.variantClassNames, e => G(e, e => e.split(" ")[0]))
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
      const ee = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...a
      }, i) => {
        const d = (0, X.zQ)(),
          l = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          c = (0, B.mergeProps)({
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
          }, a),
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
      var te = r(69837);

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = re(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function se(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ae = (e, t, r) => {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ae(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return se(e.variantClassNames, e => se(e, e => e.split(" ")[0]))
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
      const le = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? I.DX : "p",
          i = (0, B.mergeProps)({
            className: de({
              size: n,
              appearance: r
            })
          }, o);
        return (0, N.jsx)(a, {
          ref: s,
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
      const ue = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? I.DX : "p",
            a = (0, B.mergeProps)({
              className: ce({
                appearance: r
              })
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        fe = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "h1",
            s = (0, B.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
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
      const me = (0, D.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? I.DX : `h${7===t?6:t}`,
          a = (0, B.mergeProps)(n, {
            className: pe({
              level: t
            })
          });
        return (0, N.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
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
      const ye = (0, D.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? I.DX : "p",
          i = (0, B.mergeProps)({
            className: he({
              size: n,
              appearance: r
            })
          }, o);
        return (0, N.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var ve = ie({
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
      const ge = {
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
        be = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? I.DX : ge[r] || "span",
            a = (0, B.mergeProps)(n, {
              className: ve({
                semantic: r
              })
            });
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var we = r(77710),
        xe = r(35812),
        _e = r(67347),
        je = r(34811);
      const Ce = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Pe = ([e, t]) => ({
        x: e,
        y: t
      }), Oe = (e, t) => (e.x = t.x, e.y = t.y, e), Re = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ne = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Se = (e, t, r) => Math.min(Math.max(e, t), r);
      var De = r(90004);

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ie(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
      xe.gsap.registerPlugin(_e.useGSAP);
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
      var qe = r(99817);
      const Xe = {
        "en-US": r.e(7902).then(r.bind(r, 67902)),
        "de-DE": r.e(685).then(r.bind(r, 40685)),
        "es-ES": r.e(5963).then(r.bind(r, 95963)),
        "es-MX": r.e(3982).then(r.bind(r, 93982)),
        "fr-FR": r.e(1003).then(r.bind(r, 31003)),
        "it-IT": r.e(8805).then(r.bind(r, 98805)),
        "ja-JP": r.e(1374).then(r.bind(r, 31374)),
        "ko-KR": r.e(4292).then(r.bind(r, 64292)),
        "pl-PL": r.e(6279).then(r.bind(r, 56279)),
        "pt-BR": r.e(6035).then(r.bind(r, 56035)),
        "ru-RU": r.e(8853).then(r.bind(r, 88853)),
        "zh-CN": r.e(5612).then(r.bind(r, 75612)),
        "zh-TW": r.e(4656).then(r.bind(r, 4656))
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
          return r ? t : Se(t, this.max[e], this.min[e])
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
      class Ge {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Oe(this.startPan, this.slide.pan)
        }
        change(e) {
          const {
            touches: t,
            delta: [r, n]
          } = e, o = t > 1, s = this.slide.currZoomLevel <= this.slide.zoomLevels.initial;
          "y" === this.dragAxis && s && !o ? (this.setPanWithFriction("y", this.slide.pan.y + n, .6), this.slide.updateOverlayOpacity(1 - Math.abs(this.getVerticalDragRatio(this.slide.pan.y)))) : "x" === this.dragAxis && s ? this.setPanWithFriction("x", this.slide.pan.x + r, .35) : (this.setPanWithFriction("x", this.slide.pan.x + r), this.setPanWithFriction("y", this.slide.pan.y + n))
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
          const s = "none" !== this.slide.tapHandler.options.doubleTap ? 300 : 0;
          this.tapTimer ? (this.clearTapTimer(), ((e, t) => {
            const r = Math.abs(e.x - t.x),
              n = Math.abs(e.y - t.y);
            return Math.sqrt(r * r + n * n)
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Oe(this.prevTap, {
            x: t,
            y: r
          }), this.tapTimer = setTimeout(() => {
            this.slide.tapHandler.tap(n, o), this.clearTapTimer()
          }, s))
        }
        finishPanGestureForAxis(e, t) {
          const {
            delta: [r, n]
          } = t, o = "x" === e ? r : n, s = this.slide.pan[e], a = s + o;
          if (this.options.dragToClose && this.slide.getOverlayOpacity() < 1 && "y" === e) {
            const e = this.getVerticalDragRatio(s),
              t = this.getVerticalDragRatio(a);
            if (e < 0 && t < -.4 || e > 0 && t > .4) return this.animate = !1, void this.slide.dispatch("close")
          }
          const i = this.slide.bounds.correctPan(e, a);
          s !== i && (this.slide.updateOverlayOpacity(1), this.slide.pan[e] = i)
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
      class We {
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
          e.src = this.thumbnail.currentSrc ?? "", await Ce(e)
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Pe(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Oe(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Pe(e);
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
            s = Oe({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = Oe({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Oe(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (Oe(this.slide.pan, a), this.slide.setZoomLevel(r))
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
          dragOptions: s
        }) {
          super(), this.width = e, this.height = t, this.opener = new We({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new Ge({
            options: s,
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
          e = Ne(e), r || (e = Se(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Re(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Re(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Oe(this.pan, this.bounds.center)
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
      var tt = r(85464);
      const rt = e => "dark" === e ? tt.xW.dark : tt.xW.light;
      var nt = r(52920);
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
      var st = "foundry_bc732x1";
      const at = (0, D.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, De.vC)(e, e => r?.(e), [r]), (0, N.jsx)(le, {
        size: "XS",
        className: (0, S.clsx)("foundry_bc732x0", {
          [st]: t
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
            n = D.forwardRef((e, n) => {
              const {
                asChild: o,
                ...s
              } = e, a = o ? r : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, N.jsx)(a, {
                ...s,
                ref: n
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {});

      function mt(e, t) {
        e && ut.flushSync(() => e.dispatchEvent(t))
      }
      var ht, yt = r(38351),
        vt = r(2471),
        gt = "dismissableLayer.update",
        bt = D.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        wt = D.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: a,
            onDismiss: i,
            ...d
          } = e, l = D.useContext(bt), [c, u] = D.useState(null), f = c?.ownerDocument ?? globalThis?.document, [, p] = D.useState({}), m = (0, lt.s)(t, e => u(e)), h = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(y), g = c ? h.indexOf(c) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= v, x = function(e, t = globalThis?.document) {
            const r = (0, yt.c)(e),
              n = D.useRef(!1),
              o = D.useRef(() => {});
            return D.useEffect(() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      jt("dismissableLayer.pointerDownOutside", r, s, {
                        discrete: !0
                      })
                    };
                    const s = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                s = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(s), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }, [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }(e => {
            const t = e.target,
              r = [...l.branches].some(e => e.contains(t));
            w && !r && (o?.(e), a?.(e), e.defaultPrevented || i?.())
          }, f), _ = function(e, t = globalThis?.document) {
            const r = (0, yt.c)(e),
              n = D.useRef(!1);
            return D.useEffect(() => {
              const e = e => {
                e.target && !n.current && jt("dismissableLayer.focusOutside", r, {
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
            [...l.branches].some(e => e.contains(t)) || (s?.(e), a?.(e), e.defaultPrevented || i?.())
          }, f);
          return (0, vt.U)(e => {
            g === l.layers.size - 1 && (n?.(e), !e.defaultPrevented && i && (e.preventDefault(), i()))
          }, f), D.useEffect(() => {
            if (c) return r && (0 === l.layersWithOutsidePointerEventsDisabled.size && (ht = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(c)), l.layers.add(c), _t(), () => {
              r && 1 === l.layersWithOutsidePointerEventsDisabled.size && (f.body.style.pointerEvents = ht)
            }
          }, [c, f, r, l]), D.useEffect(() => () => {
            c && (l.layers.delete(c), l.layersWithOutsidePointerEventsDisabled.delete(c), _t())
          }, [c, l]), D.useEffect(() => {
            const e = () => p({});
            return document.addEventListener(gt, e), () => document.removeEventListener(gt, e)
          }, []), (0, N.jsx)(pt.div, {
            ...d,
            ref: m,
            style: {
              pointerEvents: b ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, dt.mK)(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: (0, dt.mK)(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: (0, dt.mK)(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        });
      wt.displayName = "DismissableLayer";
      var xt = D.forwardRef((e, t) => {
        const r = D.useContext(bt),
          n = D.useRef(null),
          o = (0, lt.s)(t, n);
        return D.useEffect(() => {
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
        const e = new CustomEvent(gt);
        document.dispatchEvent(e)
      }

      function jt(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? mt(o, s) : o.dispatchEvent(s)
      }
      xt.displayName = "DismissableLayerBranch";
      var Ct = wt,
        Pt = xt,
        Ot = r(96883),
        Rt = r(17966),
        Nt = r(45750),
        St = D.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, N.jsx)(pt.svg, {
            ...s,
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
      St.displayName = "Arrow";
      var Dt = St,
        It = r(86627),
        Tt = r(94119),
        zt = "Popper",
        [Et, kt] = (0, ct.A)(zt),
        [Lt, At] = Et(zt),
        Vt = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = D.useState(null);
          return (0, N.jsx)(Lt, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Vt.displayName = zt;
      var Mt = "PopperAnchor",
        Ft = D.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = At(Mt, r), a = D.useRef(null), i = (0, lt.s)(t, a), d = D.useRef(null);
          return D.useEffect(() => {
            const e = d.current;
            d.current = n?.current || a.current, e !== d.current && s.onAnchorChange(d.current)
          }), n ? null : (0, N.jsx)(pt.div, {
            ...o,
            ref: i
          })
        });
      Ft.displayName = Mt;
      var Bt = "PopperContent",
        [qt, Xt] = Et(Bt),
        Kt = D.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: a = 0,
            arrowPadding: i = 0,
            avoidCollisions: d = !0,
            collisionBoundary: l = [],
            collisionPadding: c = 0,
            sticky: u = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: m,
            ...h
          } = e, y = At(Bt, r), [v, g] = D.useState(null), b = (0, lt.s)(t, e => g(e)), [w, x] = D.useState(null), _ = (0, Tt.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, P = n + ("center" !== s ? "-" + s : ""), O = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], S = R.length > 0, I = {
            padding: O,
            boundary: R.filter(Wt),
            altBoundary: S
          }, {
            refs: T,
            floatingStyles: z,
            placement: E,
            isPositioned: k,
            middlewareData: L
          } = (0, Rt.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, Nt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(0, Rt.cY)({
              mainAxis: o + C,
              alignmentAxis: a
            }), d && (0, Rt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Rt.ER)() : void 0,
              ...I
            }), d && (0, Rt.UU)({
              ...I
            }), (0, Rt.Ej)({
              ...I,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: s
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${r}px`), a.setProperty("--radix-popper-available-height", `${n}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${s}px`)
              }
            }), w && (0, Rt.UE)({
              element: w,
              padding: i
            }), Ut({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Rt.jD)({
              strategy: "referenceHidden",
              ...I
            })]
          }), [A, V] = $t(E), M = (0, yt.c)(m);
          (0, It.N)(() => {
            k && M?.()
          }, [k, M]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            q = 0 !== L.arrow?.centerOffset,
            [X, K] = D.useState();
          return (0, It.N)(() => {
            v && K(window.getComputedStyle(v).zIndex)
          }, [v]), (0, N.jsx)("div", {
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
                ref: b,
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
        Gt = D.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Xt(Zt, r), s = Ht[o.placedSide];
          return (0, N.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [s]: 0,
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
            children: (0, N.jsx)(Dt, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Wt(e) {
        return null !== e
      }
      Gt.displayName = Zt;
      var Ut = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, a = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [d, l] = $t(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            m = "";
          return "bottom" === d ? (p = s ? c : `${u}px`, m = -i + "px") : "top" === d ? (p = s ? c : `${u}px`, m = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", m = s ? c : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, m = s ? c : `${f}px`), {
            data: {
              x: p,
              y: m
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
        er = Gt,
        tr = D.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, s] = D.useState(!1);
          (0, It.N)(() => s(!0), []);
          const a = r || o && globalThis?.document?.body;
          return a ? ut.createPortal((0, N.jsx)(pt.div, {
            ...n,
            ref: t
          }), a) : null
        });
      tr.displayName = "Portal";
      var rr = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = D.useState(), n = D.useRef(null), o = D.useRef(e), s = D.useRef("none"), a = e ? "mounted" : "unmounted", [i, d] = function(e, t) {
            return D.useReducer((e, r) => t[e][r] ?? e, e)
          }(a, {
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
          return D.useEffect(() => {
            const e = nr(n.current);
            s.current = "mounted" === i ? e : "none"
          }, [i]), (0, It.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = s.current,
                a = nr(t);
              d(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : r && n !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, d]), (0, It.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                a = s => {
                  const a = nr(n.current).includes(CSS.escape(s.animationName));
                  if (s.target === t && a && (d("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                i = e => {
                  e.target === t && (s.current = nr(n.current))
                };
              return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
              }
            }
            d("ANIMATION_END")
          }, [t, d]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: D.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : D.Children.only(r), s = (0, lt.s)(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? D.cloneElement(o, {
          ref: s
        }) : null
      };

      function nr(e) {
        return e?.animationName || "none"
      }
      rr.displayName = "Presence";
      var or = r(1531),
        sr = Object.freeze({
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
        ar = D.forwardRef((e, t) => (0, N.jsx)(pt.span, {
          ...e,
          ref: t,
          style: {
            ...sr,
            ...e.style
          }
        }));
      ar.displayName = "VisuallyHidden";
      var ir = ar,
        [dr, lr] = (0, ct.A)("Tooltip", [kt]),
        cr = kt(),
        ur = "TooltipProvider",
        fr = 700,
        pr = "tooltip.open",
        [mr, hr] = dr(ur),
        yr = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = fr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = D.useRef(!0), i = D.useRef(!1), d = D.useRef(0);
          return D.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, N.jsx)(mr, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: D.useCallback(() => {
              window.clearTimeout(d.current), a.current = !1
            }, []),
            onClose: D.useCallback(() => {
              window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n)
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: D.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      yr.displayName = ur;
      var vr = "Tooltip",
        [gr, br] = dr(vr),
        wr = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = hr(vr, e.__scopeTooltip), l = cr(t), [c, u] = D.useState(null), f = (0, Ot.B)(), p = D.useRef(0), m = a ?? d.disableHoverableContent, h = i ?? d.delayDuration, y = D.useRef(!1), [v, g] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(pr))) : d.onClose(), s?.(e)
            },
            caller: vr
          }), b = D.useMemo(() => v ? y.current ? "delayed-open" : "instant-open" : "closed", [v]), w = D.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, y.current = !1, g(!0)
          }, [g]), x = D.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), _ = D.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              y.current = !0, g(!0), p.current = 0
            }, h)
          }, [h, g]);
          return D.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, N.jsx)(Yt, {
            ...l,
            children: (0, N.jsx)(gr, {
              scope: t,
              contentId: f,
              open: v,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: D.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: D.useCallback(() => {
                m ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, m]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: m,
              children: r
            })
          })
        };
      wr.displayName = vr;
      var xr = "TooltipTrigger",
        _r = D.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = br(xr, r), s = hr(xr, r), a = cr(r), i = D.useRef(null), d = (0, lt.s)(t, i, o.onTriggerChange), l = D.useRef(!1), c = D.useRef(!1), u = D.useCallback(() => l.current = !1, []);
          return D.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, N.jsx)(Qt, {
            asChild: !0,
            ...a,
            children: (0, N.jsx)(pt.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, dt.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
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
      var jr = "TooltipPortal",
        [Cr, Pr] = dr(jr, {
          forceMount: void 0
        }),
        Or = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = br(jr, t);
          return (0, N.jsx)(Cr, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(rr, {
              present: r || s.open,
              children: (0, N.jsx)(tr, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Or.displayName = jr;
      var Rr = "TooltipContent",
        Nr = D.forwardRef((e, t) => {
          const r = Pr(Rr, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = br(Rr, e.__scopeTooltip);
          return (0, N.jsx)(rr, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, N.jsx)(zr, {
              side: o,
              ...s,
              ref: t
            }) : (0, N.jsx)(Sr, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Sr = D.forwardRef((e, t) => {
          const r = br(Rr, e.__scopeTooltip),
            n = hr(Rr, e.__scopeTooltip),
            o = D.useRef(null),
            s = (0, lt.s)(t, o),
            [a, i] = D.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = D.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = D.useCallback((e, t) => {
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
                    s = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, s)) {
                    case s:
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
                s = function(e) {
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
              i(s), u(!0)
            }, [u]);
          return D.useEffect(() => () => f(), [f]), D.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), D.useEffect(() => {
            if (a) {
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
                    for (let e = 0, s = t.length - 1; e < t.length; s = e++) {
                      const a = t[e],
                        i = t[s],
                        d = a.x,
                        l = a.y,
                        c = i.x,
                        u = i.y;
                      l > n != u > n && r < (c - d) * (n - l) / (u - l) + d && (o = !o)
                    }
                    return o
                  }(r, a);
                n ? f() : o && (f(), l())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, a, l, f]), (0, N.jsx)(zr, {
            ...e,
            ref: s
          })
        }),
        [Dr, Ir] = dr(vr, {
          isInside: !1
        }),
        Tr = (0, ft.Dc)("TooltipContent"),
        zr = D.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
          } = e, d = br(Rr, r), l = cr(r), {
            onClose: c
          } = d;
          return D.useEffect(() => (document.addEventListener(pr, c), () => document.removeEventListener(pr, c)), [c]), D.useEffect(() => {
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
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
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
              }), (0, N.jsx)(Dr, {
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
      Nr.displayName = Rr;
      var Er = "TooltipArrow",
        kr = D.forwardRef((e, t) => {
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
        Mr = Or,
        Fr = Nr,
        Br = kr;
      const qr = (0, D.createContext)(null);

      function Xr() {
        const e = (0, D.useContext)(qr);
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
          const [s = !1, a] = (0, we.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, N.jsx)(Lr, {
            delayDuration: t,
            children: (0, N.jsx)(qr.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, N.jsx)(Ar, {
                open: s,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        Zr = (0, D.forwardRef)(({
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
        Hr = (0, D.forwardRef)(({
          testId: e,
          side: t = "top",
          sideOffset: r = 8,
          align: n = "center",
          alignOffset: o = 0,
          avoidCollisions: s = !0,
          sticky: a = "partial",
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
          }), p = (0, B.mergeProps)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: a,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, N.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        Gr = (0, D.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, B.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, N.jsx)(Br, {
            ...r,
            ref: t
          })
        }),
        Wr = Mr;
      var Ur = r(47690),
        $r = r(93689),
        Yr = r(14823);

      function Qr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, ct.A)(t),
          [o, s] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          a = e => {
            const {
              scope: t,
              children: r
            } = e, n = D.useRef(null), s = D.useRef(new Map).current;
            return (0, N.jsx)(o, {
              scope: t,
              itemMap: s,
              collectionRef: n,
              children: r
            })
          };
        a.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, ft.TL)(i),
          l = D.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = s(i, r), a = (0, lt.s)(t, o.collectionRef);
            return (0, N.jsx)(d, {
              ref: a,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, ft.TL)(c),
          p = D.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, a = D.useRef(null), i = (0, lt.s)(t, a), d = s(c, r);
            return D.useEffect(() => (d.itemMap.set(a, {
              ref: a,
              ...o
            }), () => {
              d.itemMap.delete(a)
            })), (0, N.jsx)(f, {
              [u]: "",
              ref: i,
              children: n
            })
          });
        return p.displayName = c, [{
          Provider: a,
          Slot: l,
          ItemSlot: p
        }, function(t) {
          const r = s(e + "CollectionConsumer", t);
          return D.useCallback(() => {
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
        [nn, on, sn] = Qr(rn),
        [an, dn] = (0, ct.A)(rn, [sn]),
        [ln, cn] = an(rn),
        un = D.forwardRef((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: s = 1,
            orientation: a = "horizontal",
            disabled: i = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: l = [n],
            value: c,
            onValueChange: u = () => {},
            onValueCommit: f = () => {},
            inverted: p = !1,
            form: m,
            ...h
          } = e, y = D.useRef(new Set), v = D.useRef(0), g = "horizontal" === a ? mn : hn, [b = [], w] = (0, or.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...y.current];
              t[v.current]?.focus(), u(e)
            }
          }), x = D.useRef(b);

          function _(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(s),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / s) * s + n, a),
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
                }(n, d * s)) {
                v.current = n.indexOf(l);
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
            valueIndexToChangeRef: v,
            thumbs: y.current,
            values: b,
            orientation: a,
            form: m,
            children: (0, N.jsx)(nn.Provider, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(nn.Slot, {
                scope: e.__scopeSlider,
                children: (0, N.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: t,
                  onPointerDown: (0, dt.mK)(h.onPointerDown, () => {
                    i || (x.current = b)
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
                    }(b, e);
                    _(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    _(e, v.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = x.current[v.current];
                    b[v.current] !== e && f(b)
                  },
                  onHomeKeyDown: () => !i && _(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !i && _(o, b.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      const r = Jr.includes(e.key) || e.shiftKey && en.includes(e.key) ? 10 : 1,
                        n = v.current;
                      _(b[n] + s * r * t, n, {
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
      var [fn, pn] = an(rn, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), mn = D.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: s,
          onSlideStart: a,
          onSlideMove: i,
          onSlideEnd: d,
          onStepKeyDown: l,
          ...c
        } = e, [u, f] = D.useState(null), p = (0, lt.s)(t, e => f(e)), m = D.useRef(void 0), h = (0, $r.jH)(o), y = "ltr" === h, v = y && !s || !y && s;

        function g(e) {
          const t = m.current || u.getBoundingClientRect(),
            o = On([0, t.width], v ? [r, n] : [n, r]);
          return m.current = t, o(e - t.left)
        }
        return (0, N.jsx)(fn, {
          scope: e.__scopeSlider,
          startEdge: v ? "left" : "right",
          endEdge: v ? "right" : "left",
          direction: v ? 1 : -1,
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
              const t = g(e.clientX);
              a?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientX);
              i?.(t)
            },
            onSlideEnd: () => {
              m.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = tn[v ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), hn = D.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = D.useRef(null), u = (0, lt.s)(t, c), f = D.useRef(void 0), p = !o;

        function m(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = On([0, t.height], p ? [n, r] : [r, n]);
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
              const t = m(e.clientY);
              s?.(t)
            },
            onSlideMove: e => {
              const t = m(e.clientY);
              a?.(t)
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
      }), yn = D.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = cn(rn, r);
        return (0, N.jsx)(pt.span, {
          ...l,
          ref: t,
          onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Jr.concat(en).includes(e.key) && (d(e), e.preventDefault())
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
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), vn = "SliderTrack", gn = D.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = cn(vn, r);
        return (0, N.jsx)(pt.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      gn.displayName = vn;
      var bn = "SliderRange",
        wn = D.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = cn(bn, r), s = pn(bn, r), a = D.useRef(null), i = (0, lt.s)(t, a), d = o.values.length, l = o.values.map(e => Pn(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, N.jsx)(pt.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [s.startEdge]: c + "%",
              [s.endEdge]: u + "%"
            }
          })
        });
      wn.displayName = bn;
      var xn = "SliderThumb",
        _n = D.forwardRef((e, t) => {
          const r = on(e.__scopeSlider),
            [n, o] = D.useState(null),
            s = (0, lt.s)(t, e => o(e)),
            a = D.useMemo(() => n ? r().findIndex(e => e.ref.current === n) : -1, [r, n]);
          return (0, N.jsx)(jn, {
            ...e,
            ref: s,
            index: a
          })
        }),
        jn = D.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...s
          } = e, a = cn(xn, r), i = pn(xn, r), [d, l] = D.useState(null), c = (0, lt.s)(t, e => l(e)), u = !d || a.form || !!d.closest("form"), f = (0, Tt.X)(d), p = a.values[n], m = void 0 === p ? 0 : Pn(p, a.min, a.max), h = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, a.values.length), y = f?.[i.size], v = y ? function(e, t, r) {
            const n = e / 2;
            return (n - On([0, 50], [0, n])(t) * r) * r
          }(y, m, i.direction) : 0;
          return D.useEffect(() => {
            if (d) return a.thumbs.add(d), () => {
              a.thumbs.delete(d)
            }
          }, [d, a.thumbs]), (0, N.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [i.startEdge]: `calc(${m}% + ${v}px)`
            },
            children: [(0, N.jsx)(nn.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(pt.span, {
                role: "slider",
                "aria-label": e["aria-label"] || h,
                "aria-valuemin": a.min,
                "aria-valuenow": p,
                "aria-valuemax": a.max,
                "aria-orientation": a.orientation,
                "data-orientation": a.orientation,
                "data-disabled": a.disabled ? "" : void 0,
                tabIndex: a.disabled ? void 0 : 0,
                ...s,
                ref: c,
                style: void 0 === p ? {
                  display: "none"
                } : e.style,
                onFocus: (0, dt.mK)(e.onFocus, () => {
                  a.valueIndexToChangeRef.current = n
                })
              })
            }), u && (0, N.jsx)(Cn, {
              name: o ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: p
            }, n)]
          })
        });
      _n.displayName = xn;
      var Cn = D.forwardRef(({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = D.useRef(null),
          s = (0, lt.s)(o, n),
          a = (0, Yr.Z)(t);
        return D.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (a !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [a, t]), (0, N.jsx)(pt.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: s,
          defaultValue: t
        })
      });

      function Pn(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, Ur.q)(n, [0, 100])
      }

      function On(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      Cn.displayName = "RadioBubbleInput";
      var Rn = un,
        Nn = gn,
        Sn = wn,
        Dn = _n,
        In = "focusScope.autoFocusOnMount",
        Tn = "focusScope.autoFocusOnUnmount",
        zn = {
          bubbles: !1,
          cancelable: !0
        },
        En = D.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...a
          } = e, [i, d] = D.useState(null), l = (0, yt.c)(o), c = (0, yt.c)(s), u = D.useRef(null), f = (0, lt.s)(t, e => d(e)), p = D.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          D.useEffect(() => {
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
          }, [n, i, p.paused]), D.useEffect(() => {
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
          const m = D.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = function(e) {
                  const t = kn(e);
                  return [Ln(t, e), Ln(t.reverse(), e)]
                }(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && Vn(s, {
                select: !0
              })) : (e.preventDefault(), r && Vn(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, N.jsx)(pt.div, {
            tabIndex: -1,
            ...a,
            ref: f,
            onKeyDown: m
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
        [Gn, Wn] = Zn(Kn),
        Un = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !0
          } = e, i = D.useRef(null), d = D.useRef(null), [l, c] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Kn
          });
          return (0, N.jsx)(Gn, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Ot.B)(),
            titleId: (0, Ot.B)(),
            descriptionId: (0, Ot.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: D.useCallback(() => c(e => !e), [c]),
            modal: a,
            children: r
          })
        };
      Un.displayName = Kn;
      var $n = "DialogTrigger",
        Yn = D.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn($n, r), s = (0, lt.s)(t, o.triggerRef);
          return (0, N.jsx)(pt.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": go(o.open),
            ...n,
            ref: s,
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
          } = e, s = Wn(Qn, t);
          return (0, N.jsx)(Jn, {
            scope: t,
            forceMount: r,
            children: D.Children.map(n, e => (0, N.jsx)(rr, {
              present: r || s.open,
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
        no = D.forwardRef((e, t) => {
          const r = eo(ro, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Wn(ro, e.__scopeDialog);
          return s.modal ? (0, N.jsx)(rr, {
            present: n || s.open,
            children: (0, N.jsx)(so, {
              ...o,
              ref: t
            })
          }) : null
        });
      no.displayName = ro;
      var oo = (0, ft.TL)("DialogOverlay.RemoveScroll"),
        so = D.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(ro, r);
          return (0, N.jsx)(qn.A, {
            as: oo,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, N.jsx)(pt.div, {
              "data-state": go(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        ao = "DialogContent",
        io = D.forwardRef((e, t) => {
          const r = eo(ao, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Wn(ao, e.__scopeDialog);
          return (0, N.jsx)(rr, {
            present: n || s.open,
            children: s.modal ? (0, N.jsx)(lo, {
              ...o,
              ref: t
            }) : (0, N.jsx)(co, {
              ...o,
              ref: t
            })
          })
        });
      io.displayName = ao;
      var lo = D.forwardRef((e, t) => {
          const r = Wn(ao, e.__scopeDialog),
            n = D.useRef(null),
            o = (0, lt.s)(t, r.contentRef, n);
          return D.useEffect(() => {
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
        co = D.forwardRef((e, t) => {
          const r = Wn(ao, e.__scopeDialog),
            n = D.useRef(!1),
            o = D.useRef(!1);
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
              const s = t.target,
                a = r.triggerRef.current?.contains(s);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        uo = D.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...a
          } = e, i = Wn(ao, r), d = D.useRef(null), l = (0, lt.s)(t, d);
          return (0, Bn.Oh)(), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(En, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, N.jsx)(wt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": go(i.open),
                ...a,
                ref: l,
                onDismiss: () => i.onOpenChange(!1)
              })
            }), (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(_o, {
                titleId: i.titleId
              }), (0, N.jsx)(jo, {
                contentRef: d,
                descriptionId: i.descriptionId
              })]
            })]
          })
        }),
        fo = "DialogTitle",
        po = D.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(fo, r);
          return (0, N.jsx)(pt.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      po.displayName = fo;
      var mo = "DialogDescription",
        ho = D.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(mo, r);
          return (0, N.jsx)(pt.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      ho.displayName = mo;
      var yo = "DialogClose",
        vo = D.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(yo, r);
          return (0, N.jsx)(pt.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, dt.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function go(e) {
        return e ? "open" : "closed"
      }
      vo.displayName = yo;
      var bo = "DialogTitleWarning",
        [wo, xo] = (0, ct.q)(bo, {
          contentName: ao,
          titleName: fo,
          docsSlug: "dialog"
        }),
        _o = ({
          titleId: e
        }) => {
          const t = xo(bo),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return D.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
          }, [r, e]), null
        },
        jo = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xo("DialogDescriptionWarning").contentName}}.`;
          return D.useEffect(() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }, [r, e, t]), null
        },
        Co = Un,
        Po = Yn,
        Oo = to,
        Ro = no,
        No = io,
        So = po,
        Do = ho,
        Io = vo;
      const To = (0, D.createContext)({
          triggerRef: (0, D.createRef)(),
          triggerBorderRef: (0, D.createRef)(),
          thumbnailRef: (0, D.createRef)(),
          openIconRef: (0, D.createRef)(),
          overlayRef: (0, D.createRef)(),
          contentRef: (0, D.createRef)(),
          containerRef: (0, D.createRef)(),
          imageRef: (0, D.createRef)(),
          placeholderRef: (0, D.createRef)(),
          zoomPanRef: (0, D.createRef)(),
          captionRef: (0, D.createRef)(),
          controlsRef: (0, D.createRef)(),
          closeRef: (0, D.createRef)(),
          zoomRef: (0, D.createRef)(),
          zoomInRef: (0, D.createRef)(),
          zoomSliderRef: (0, D.createRef)(),
          zoomOutRef: (0, D.createRef)(),
          resetRef: (0, D.createRef)(),
          downloadRef: (0, D.createRef)(),
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
          maxZoomLevel: s = 300,
          zoomLevelStep: a = 100,
          clickAction: i = "close",
          doubleTapAction: d,
          tapAction: l,
          hideTrigger: c = !0,
          ...u
        }) => {
          const f = (0, X.Ym)(),
            p = (0, we.rl)(),
            m = (0, D.useRef)(null),
            h = (0, D.useRef)(null),
            y = (0, D.useRef)(null),
            v = (0, D.useRef)(null),
            g = (0, D.useRef)(null),
            b = (0, D.useRef)(null),
            w = (0, D.useRef)(null),
            x = (0, D.useRef)(null),
            _ = (0, D.useRef)(null),
            j = (0, D.useRef)(null),
            C = (0, D.useRef)(null),
            P = (0, D.useRef)(null),
            O = (0, D.useRef)(null),
            R = (0, D.useRef)(null),
            S = (0, D.useRef)(null),
            I = (0, D.useRef)(null),
            T = (0, D.useRef)(null),
            z = (0, D.useRef)(null),
            E = (0, D.useRef)(null),
            [k = !1, L] = (0, we.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, D.useRef)(null);
          return A.current || (A.current = new et({
            zoomLevelOptions: {
              max: s,
              min: o,
              step: a
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
                triggerRef: m,
                triggerBorderRef: h,
                thumbnailRef: y,
                openIconRef: v,
                overlayRef: g,
                contentRef: b,
                containerRef: w,
                zoomPanRef: x,
                imageRef: _,
                placeholderRef: j,
                captionRef: C,
                controlsRef: P,
                closeRef: O,
                zoomRef: R,
                zoomInRef: S,
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
        Eo = (0, D.createContext)({
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
          } = (0, D.useContext)(To), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, _e.useGSAP)(), {
              slide: t,
              setOpen: r,
              hideTrigger: n,
              overlayRef: o,
              controlsRef: s,
              triggerRef: a,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, D.useContext)(To), p = (0, D.useRef)(null);
            p.current || (p.current = xe.gsap.timeline({
              defaults: Me
            }));
            const m = (0, D.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), xe.gsap.set([u.current, f.current], {
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
                }), xe.gsap.set([f.current], {
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
                }), n && p.current.to([a.current, i.current], {
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
                }, 0), p.current.fromTo([s.current], {
                  opacity: 0,
                  [Be]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Be]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Ce(f.current), t.closing || (xe.gsap.set([f.current], {
                  visibility: "visible",
                  ...Fe
                }), xe.gsap.set([u.current], {
                  visibility: "hidden",
                  ...Fe
                }))))
              }),
              y = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              v = (0, D.useCallback)(async e => {
                e || (window.addEventListener("click", m), await y(), window.removeEventListener("click", m)), r(e)
              }, [r]),
              g = (0, D.useCallback)(() => v(!1), [v]);
            return {
              onOpenChange: v,
              openAnim: h,
              close: g
            }
          })(), {
            update: s,
            zoomIn: a,
            zoomOut: i,
            zoomTo: d,
            resetZoom: l,
            toggleControls: c
          } = (({
            close: e
          }) => {
            const {
              contextSafe: t
            } = (0, _e.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, D.useContext)(To), d = t(async e => {
              r.zoomTo(e), xe.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), xe.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), xe.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), xe.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              xe.gsap.to([s.current], {
                opacity: e,
                [Be]: t,
                ...Fe
              })
            }), p = t(async () => {
              xe.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              })
            }), m = (0, D.useCallback)(() => {
              n.current && o.current && (xe.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Fe
              }), xe.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Fe
              }), xe.gsap.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, D.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", m), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", m), window.removeEventListener("resize", r.resize.bind(r))
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
          }), u = (0, B.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, N.jsx)(Eo.Provider, {
            value: {
              update: s,
              openAnim: n,
              close: o,
              zoomIn: a,
              zoomOut: i,
              zoomTo: d,
              resetZoom: l,
              toggleControls: c,
              onOpenChange: r
            },
            children: (0, N.jsx)(Co, {
              ...u
            })
          })
        },
        Lo = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, qe.tz)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, D.useContext)(To),
            d = (0, we.UP)(s, n),
            l = (0, B.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(ot.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, N.jsx)(Po, {
            ref: d,
            ...l,
            children: (0, N.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, N.jsx)(I.xV, {
                children: t
              })
            })
          })
        }),
        Ao = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, D.useContext)(To), s = (0, we.UP)(o, n), a = (0, B.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Vo = (0, D.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, D.useContext)(To), o = (0, we.UP)(n, r), s = (0, B.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? I.DX : nt.Maximize2;
          return (0, N.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Mo = ({
          ...e
        }) => (0, N.jsx)(Oo, {
          ...e
        }),
        Fo = (0, D.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, D.useContext)(To), o = (0, we.UP)(n, r), s = (0, B.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, N.jsx)(Ro, {
            ref: o,
            ...s
          })
        }),
        Bo = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, D.useContext)(Eo), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, D.useContext)(To), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, D.useContext)(To), [t, r] = (0, D.useState)(e.getCursor()), n = (0, D.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, D.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [tt.xW.tokens, tt.xW.typography, tt.xW.grid, rt("dark")].join(" ");
          const c = (0, we.UP)(s, n),
            u = (0, B.mergeProps)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, S.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, N.jsxs)(No, {
            ref: c,
            ...u,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)(So, {
                children: a
              })
            }), t]
          })
        }),
        qo = (0, D.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, D.useContext)(To);
          (() => {
            const {
              contextSafe: e
            } = (0, _e.useGSAP)(), {
              toggleControls: t
            } = (0, D.useContext)(Eo), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, D.useContext)(To), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (xe.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...Fe
              }), xe.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Fe
              }), xe.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Fe
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || xe.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...Fe
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (xe.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...Fe
              }), xe.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Fe
              }), xe.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Fe
              })))
            }), c = (0, D.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, we.iQ)({
              ref: s,
              onFocusIn: c
            }), (0, je.useGesture)({
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
          const s = (0, we.UP)(o, n),
            a = (0, B.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, N.jsx)("div", {
            ref: s,
            ...a,
            children: (0, N.jsxs)(Xo, {
              children: [(0, N.jsx)(Ko, {}), t]
            })
          })
        }),
        Xo = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, D.useContext)(To), s = (0, we.UP)(o, n), a = (0, B.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Ko = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, D.useContext)(To), s = (0, we.UP)(o, n), a = (0, B.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Zo = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, D.useContext)(To), s = (0, we.UP)(o, n), a = (0, B.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Ho = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, D.useContext)(To), s = (0, we.UP)(o, n), a = (0, B.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? I.DX : "p";
          return (0, N.jsx)(Do, {
            asChild: !0,
            children: (0, N.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Go = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, D.useContext)(To);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, D.useContext)(Eo);
            (0, De.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, De.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, De.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, De.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, we.UP)(o, n),
            a = (0, B.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? I.DX : "div";
          return (0, N.jsx)(De.Hb, {
            children: (0, N.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Wo = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, N.jsx)(N.Fragment, {
            children: n
          });
          const s = (0, B.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, N.jsxs)(Kr, {
            delayDuration: 0,
            children: [(0, N.jsx)(Zr, {
              children: n
            }), (0, N.jsxs)(Hr, {
              ...s,
              children: [(0, N.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, N.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, N.jsx)(Gr, {})]
            })]
          })
        },
        Uo = (0, D.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, B.mergeProps)(e, {
            isInline: !0
          });
          return (0, N.jsx)(at, {
            ref: t,
            ...r
          })
        }),
        $o = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, qe.tz)(),
            {
              zoomRef: i
            } = (0, D.useContext)(To),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: m,
              zoomTo: h
            } = (() => {
              const {
                slide: e
              } = (0, D.useContext)(To), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, D.useContext)(Eo), [o, s] = (0, D.useState)(!1), [a, i] = (0, D.useState)(!1), [d, l] = (0, D.useState)(0), [c, u] = (0, D.useState)(0), [f, p] = (0, D.useState)(0), m = (0, D.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), h = (0, D.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, D.useEffect)(() => (e.addEventListener("zoom", m), () => {
                e.removeEventListener("zoom", m)
              }), [m]), {
                zoomTo: h,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: a,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            y = (0, we.UP)(i, s),
            v = (0, B.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? I.DX : "div";
          return (0, N.jsxs)(g, {
            ref: y,
            ...v,
            children: [(0, N.jsx)(Wo, {
              side: "left",
              enabled: r,
              content: a.formatMessage(ot.ZoomInButtonLabel),
              metadata: a.formatMessage(ot.ZoomInButtonTooltip, {
                shortcut: (0, N.jsx)(Uo, {
                  shortcut: "+"
                })
              }),
              children: (0, N.jsx)(R.K, {
                label: a.formatMessage(ot.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Ve({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, N.jsxs)(Rn, {
              className: "foundry_1a74xwbt",
              max: m,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, N.jsx)(Nn, {
                className: "foundry_1a74xwbu",
                children: (0, N.jsx)(Sn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, N.jsx)(Wo, {
                side: "left",
                enabled: r,
                content: a.formatMessage(ot.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, N.jsx)(Dn, {
                  className: "foundry_1a74xwbw",
                  children: (0, N.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, N.jsx)(Wo, {
              side: "left",
              enabled: r,
              content: a.formatMessage(ot.ZoomOutButtonLabel),
              metadata: a.formatMessage(ot.ZoomOutButtonTooltip, {
                shortcut: (0, N.jsx)(Uo, {
                  shortcut: "-"
                })
              }),
              children: (0, N.jsx)(R.K, {
                label: a.formatMessage(ot.ZoomOutButtonLabel),
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
        Yo = (0, D.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, qe.tz)(),
            {
              closeRef: a
            } = (0, D.useContext)(To),
            i = (0, we.UP)(a, o),
            d = (0, B.mergeProps)(n, {
              "data-testid": e,
              className: Ae({
                styled: !t
              })
            }),
            l = t ? (0, N.jsx)(I.DX, {
              ref: i,
              ...d
            }) : (0, N.jsx)(R.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(ot.CloseButtonLabel)
            });
          return (0, N.jsx)(Wo, {
            side: "right",
            enabled: r,
            content: s.formatMessage(ot.CloseButtonLabel),
            metadata: s.formatMessage(ot.CloseButtonTooltip, {
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
        Qo = (0, D.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, qe.tz)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, D.useContext)(To), {
                contextSafe: r
              } = (0, _e.useGSAP)(), {
                resetZoom: n
              } = (0, D.useContext)(Eo), [o, s] = (0, D.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                xe.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Fe
                })
              }), i = (0, D.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, D.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, D.useContext)(To),
            i = (0, we.UP)(a, n),
            d = (0, B.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, N.jsx)(Wo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ot.ResetZoomButtonLabel),
            metadata: o.formatMessage(ot.ResetZoomButtonTooltip, {
              shortcut: (0, N.jsx)(Uo, {
                shortcut: "R"
              })
            }),
            children: (0, N.jsx)(R.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(ot.ResetZoomButtonLabel)
            })
          })
        }),
        Jo = (0, D.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, qe.tz)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, D.useContext)(To),
            i = (0, we.UP)(s, n),
            d = (0, B.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, N.jsx)(Wo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ot.DownloadButtonTooltip),
            children: (0, N.jsx)(R.K, {
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
              })(a.current)
            })
          })
        }),
        es = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var ts = r(13258);

      function rs(e) {
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

      function ns(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function os(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ns(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = rs(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ns(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ss(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var as = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        is = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = os(os({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) as(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ss(e.variantClassNames, e => ss(e, e => e.split(" ")[0]))
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
      const ds = (0, D.createContext)(null);

      function ls() {
        const e = (0, D.useContext)(ds);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const cs = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, B.mergeProps)({
              className: is({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? I.DX : "div";
          return (0, N.jsx)(ds.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, N.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        us = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = ls(), s = (0, B.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: nt.Check,
            invalid: nt.X,
            neutral: nt.TriangleAlert
          }, i = t ? I.DX : a[o];
          return (0, N.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        fs = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = ls(), i = (0, B.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var ps = "ScrollArea",
        [ms, hs] = (0, ct.A)(ps),
        [ys, vs] = ms(ps),
        gs = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = D.useState(null), [l, c] = D.useState(null), [u, f] = D.useState(null), [p, m] = D.useState(null), [h, y] = D.useState(null), [v, g] = D.useState(0), [b, w] = D.useState(0), [x, _] = D.useState(!1), [j, C] = D.useState(!1), P = (0, lt.s)(t, e => d(e)), O = (0, $r.jH)(o);
          return (0, N.jsx)(ys, {
            scope: r,
            type: n,
            dir: O,
            scrollHideDelay: s,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: m,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: _,
            scrollbarY: h,
            onScrollbarYChange: y,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: g,
            onCornerHeightChange: w,
            children: (0, N.jsx)(pt.div, {
              dir: O,
              ...a,
              ref: P,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": v + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        });
      gs.displayName = ps;
      var bs = "ScrollAreaViewport",
        ws = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = vs(bs, r), i = D.useRef(null), d = (0, lt.s)(t, i, a.onViewportChange);
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, N.jsx)(pt.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, N.jsx)("div", {
                ref: a.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        });
      ws.displayName = bs;
      var xs = "ScrollAreaScrollbar",
        _s = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = vs(xs, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return D.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, N.jsx)(js, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, N.jsx)(Cs, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, N.jsx)(Ps, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, N.jsx)(Os, {
            ...n,
            ref: t
          }) : null
        });
      _s.displayName = xs;
      var js = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = vs(xs, e.__scopeScrollArea), [s, a] = D.useState(!1);
          return D.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), a(!0)
                },
                n = () => {
                  t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, N.jsx)(rr, {
            present: r || s,
            children: (0, N.jsx)(Ps, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Cs = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = vs(xs, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = Zs(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, D.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return D.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), D.useEffect(() => {
            const e = o.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (d("SCROLL"), a()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, s, d, a]), (0, N.jsx)(rr, {
            present: r || "hidden" !== i,
            children: (0, N.jsx)(Os, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, dt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, dt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Ps = D.forwardRef((e, t) => {
          const r = vs(xs, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = D.useState(!1),
            i = "horizontal" === e.orientation,
            d = Zs(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return Hs(r.viewport, d), Hs(r.content, d), (0, N.jsx)(rr, {
            present: n || s,
            children: (0, N.jsx)(Os, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Os = D.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = vs(xs, e.__scopeScrollArea), s = D.useRef(null), a = D.useRef(0), [i, d] = D.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Ms(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => a.current = 0,
            onThumbPointerDown: e => a.current = e
          };

          function u(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Fs(r),
                s = t || o / 2,
                a = o - s,
                i = r.scrollbar.paddingStart + s,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                l = r.content - r.viewport;
              return qs([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, i, t)
          }
          return "horizontal" === r ? (0, N.jsx)(Rs, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Bs(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, N.jsx)(Ns, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Bs(o.viewport.scrollTop, i);
                s.current.style.transform = `translate3d(0, ${e}px, 0)`
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
        Rs = D.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = vs(xs, e.__scopeScrollArea), [a, i] = D.useState(), d = D.useRef(null), l = (0, lt.s)(t, d, s.onScrollbarXChange);
          return D.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(Is, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Fs(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Xs(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Vs(a.paddingLeft),
                  paddingEnd: Vs(a.paddingRight)
                }
              })
            }
          })
        }),
        Ns = D.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = vs(xs, e.__scopeScrollArea), [a, i] = D.useState(), d = D.useRef(null), l = (0, lt.s)(t, d, s.onScrollbarYChange);
          return D.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(Is, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Fs(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Xs(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Vs(a.paddingTop),
                  paddingEnd: Vs(a.paddingBottom)
                }
              })
            }
          })
        }),
        [Ss, Ds] = ms(xs),
        Is = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: s,
            onThumbPointerUp: a,
            onThumbPointerDown: i,
            onThumbPositionChange: d,
            onDragScroll: l,
            onWheelScroll: c,
            onResize: u,
            ...f
          } = e, p = vs(xs, r), [m, h] = D.useState(null), y = (0, lt.s)(t, e => h(e)), v = D.useRef(null), g = D.useRef(""), b = p.viewport, w = n.content - n.viewport, x = (0, yt.c)(c), _ = (0, yt.c)(d), j = Zs(u, 10);

          function C(e) {
            if (v.current) {
              const t = e.clientX - v.current.left,
                r = e.clientY - v.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return D.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = m?.contains(t);
              r && x(e, w)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [b, m, w, x]), D.useEffect(_, [n, _]), Hs(m, j), Hs(p.content, j), (0, N.jsx)(Ss, {
            scope: r,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, yt.c)(s),
            onThumbPointerUp: (0, yt.c)(a),
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
                0 === e.button && (e.target.setPointerCapture(e.pointerId), v.current = m.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, dt.mK)(e.onPointerMove, C),
              onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null
              })
            })
          })
        }),
        Ts = "ScrollAreaThumb",
        zs = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Ds(Ts, e.__scopeScrollArea);
          return (0, N.jsx)(rr, {
            present: r || o.hasThumb,
            children: (0, N.jsx)(Es, {
              ref: t,
              ...n
            })
          })
        }),
        Es = D.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = vs(Ts, r), a = Ds(Ts, r), {
            onThumbPositionChange: i
          } = a, d = (0, lt.s)(t, e => a.onThumbChange(e)), l = D.useRef(void 0), c = Zs(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return D.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = Ks(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, N.jsx)(pt.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
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
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, dt.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      zs.displayName = Ts;
      var ks = "ScrollAreaCorner",
        Ls = D.forwardRef((e, t) => {
          const r = vs(ks, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, N.jsx)(As, {
            ...e,
            ref: t
          }) : null
        });
      Ls.displayName = ks;
      var As = D.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = vs(ks, r), [s, a] = D.useState(0), [i, d] = D.useState(0), l = Boolean(s && i);
        return Hs(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), Hs(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), l ? (0, N.jsx)(pt.div, {
          ...n,
          ref: t,
          style: {
            width: s,
            height: i,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      });

      function Vs(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Ms(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Fs(e) {
        const t = Ms(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Bs(e, t, r = "ltr") {
        const n = Fs(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = "ltr" === r ? [0, a] : [-1 * a, 0],
          l = (0, Ur.q)(e, d);
        return qs([0, a], [0, i])(l)
      }

      function qs(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Xs(e, t) {
        return e > 0 && e < t
      }
      var Ks = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const s = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = r.left !== s.left,
            i = r.top !== s.top;
          (a || i) && t(), r = s, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function Zs(e, t) {
        const r = (0, yt.c)(e),
          n = D.useRef(0);
        return D.useEffect(() => () => window.clearTimeout(n.current), []), D.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Hs(e, t) {
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
      var Gs = gs,
        Ws = ws,
        Us = _s,
        $s = zs,
        Ys = Ls,
        Qs = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Js = [" ", "Enter"],
        ea = "Select",
        [ta, ra, na] = Qr(ea),
        [oa, sa] = (0, ct.A)(ea, [na, kt]),
        aa = kt(),
        [ia, da] = oa(ea),
        [la, ca] = oa(ea),
        ua = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            value: a,
            defaultValue: i,
            onValueChange: d,
            dir: l,
            name: c,
            autoComplete: u,
            disabled: f,
            required: p,
            form: m
          } = e, h = aa(t), [y, v] = D.useState(null), [g, b] = D.useState(null), [w, x] = D.useState(!1), _ = (0, $r.jH)(l), [j, C] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: ea
          }), [P, O] = (0, or.i)({
            prop: a,
            defaultProp: i,
            onChange: d,
            caller: ea
          }), R = D.useRef(null), S = !y || m || !!y.closest("form"), [I, T] = D.useState(new Set), z = Array.from(I).map(e => e.props.value).join(";");
          return (0, N.jsx)(Yt, {
            ...h,
            children: (0, N.jsxs)(ia, {
              required: p,
              scope: t,
              trigger: y,
              onTriggerChange: v,
              valueNode: g,
              onValueNodeChange: b,
              valueNodeHasChildren: w,
              onValueNodeHasChildrenChange: x,
              contentId: (0, Ot.B)(),
              value: P,
              onValueChange: O,
              open: j,
              onOpenChange: C,
              dir: _,
              triggerPointerDownPosRef: R,
              disabled: f,
              children: [(0, N.jsx)(ta.Provider, {
                scope: t,
                children: (0, N.jsx)(la, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: D.useCallback(e => {
                    T(t => new Set(t).add(e))
                  }, []),
                  onNativeOptionRemove: D.useCallback(e => {
                    T(t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    })
                  }, []),
                  children: r
                })
              }), S ? (0, N.jsxs)(Ha, {
                "aria-hidden": !0,
                required: p,
                tabIndex: -1,
                name: c,
                autoComplete: u,
                value: P,
                onChange: e => O(e.target.value),
                disabled: f,
                form: m,
                children: [void 0 === P ? (0, N.jsx)("option", {
                  value: ""
                }) : null, Array.from(I)]
              }, z) : null]
            })
          })
        };
      ua.displayName = ea;
      var fa = "SelectTrigger",
        pa = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = aa(r), a = da(fa, r), i = a.disabled || n, d = (0, lt.s)(t, a.onTriggerChange), l = ra(r), c = D.useRef("touch"), [u, f, p] = Wa(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Ua(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), m = e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, N.jsx)(Qt, {
            asChild: !0,
            ...s,
            children: (0, N.jsx)(pt.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Ga(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, dt.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && m(e)
              }),
              onPointerDown: (0, dt.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e), e.preventDefault())
              }),
              onKeyDown: (0, dt.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Qs.includes(e.key) && (m(), e.preventDefault())
              })
            })
          })
        });
      pa.displayName = fa;
      var ma = "SelectValue",
        ha = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = da(ma, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, lt.s)(t, d.onValueNodeChange);
          return (0, It.N)(() => {
            l(c)
          }, [l, c]), (0, N.jsx)(pt.span, {
            ...i,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: Ga(d.value) ? (0, N.jsx)(N.Fragment, {
              children: a
            }) : s
          })
        });
      ha.displayName = ma;
      var ya = D.forwardRef((e, t) => {
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
      ya.displayName = "SelectIcon";
      var va = e => (0, N.jsx)(tr, {
        asChild: !0,
        ...e
      });
      va.displayName = "SelectPortal";
      var ga = "SelectContent",
        ba = D.forwardRef((e, t) => {
          const r = da(ga, e.__scopeSelect),
            [n, o] = D.useState();
          if ((0, It.N)(() => {
              o(new DocumentFragment)
            }, []), !r.open) {
            const t = n;
            return t ? ut.createPortal((0, N.jsx)(xa, {
              scope: e.__scopeSelect,
              children: (0, N.jsx)(ta.Slot, {
                scope: e.__scopeSelect,
                children: (0, N.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, N.jsx)(Ca, {
            ...e,
            ref: t
          })
        });
      ba.displayName = ga;
      var wa = 10,
        [xa, _a] = oa(ga),
        ja = (0, ft.TL)("SelectContent.RemoveScroll"),
        Ca = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: m,
            hideWhenDetached: h,
            avoidCollisions: y,
            ...v
          } = e, g = da(ga, r), [b, w] = D.useState(null), [x, _] = D.useState(null), j = (0, lt.s)(t, e => w(e)), [C, P] = D.useState(null), [O, R] = D.useState(null), S = ra(r), [I, T] = D.useState(!1), z = D.useRef(!1);
          D.useEffect(() => {
            if (b) return (0, Xn.Eq)(b)
          }, [b]), (0, Bn.Oh)();
          const E = D.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, x]),
            k = D.useCallback(() => E([C, b]), [E, C, b]);
          D.useEffect(() => {
            I && k()
          }, [I, k]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = g;
          D.useEffect(() => {
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
          }, [b, L, A]), D.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = Wa(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ua(t, e, r);
            n && setTimeout(() => n.ref.current.focus())
          }), F = D.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (z.current = !0))
          }, [g.value]), B = D.useCallback(() => b?.focus(), [b]), q = D.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== g.value && g.value === t || n) && R(e)
          }, [g.value]), X = "popper" === n ? Oa : Pa, K = X === Oa ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: m,
            hideWhenDetached: h,
            avoidCollisions: y
          } : {};
          return (0, N.jsx)(xa, {
            scope: r,
            content: b,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: F,
            selectedItem: C,
            onItemLeave: B,
            itemTextRefCallback: q,
            focusSelectedItem: k,
            selectedItemText: O,
            position: n,
            isPositioned: I,
            searchRef: V,
            children: (0, N.jsx)(qn.A, {
              as: ja,
              allowPinchZoom: !0,
              children: (0, N.jsx)(En, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, dt.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, N.jsx)(wt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => g.onOpenChange(!1),
                  children: (0, N.jsx)(X, {
                    role: "listbox",
                    id: g.contentId,
                    "data-state": g.open ? "open" : "closed",
                    dir: g.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...v,
                    ...K,
                    onPlaced: () => T(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: (0, dt.mK)(v.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = S().filter(e => !e.disabled);
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
      Ca.displayName = "SelectContentImpl";
      var Pa = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = da(ga, r), a = _a(ga, r), [i, d] = D.useState(null), [l, c] = D.useState(null), u = (0, lt.s)(t, e => c(e)), f = ra(r), p = D.useRef(!1), m = D.useRef(!0), {
          viewport: h,
          selectedItem: y,
          selectedItemText: v,
          focusSelectedItem: g
        } = a, b = D.useCallback(() => {
          if (s.trigger && s.valueNode && i && l && h && y && v) {
            const e = s.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              r = s.valueNode.getBoundingClientRect(),
              o = v.getBoundingClientRect();
            if ("rtl" !== s.dir) {
              const n = o.left - t.left,
                s = r.left - n,
                a = e.left - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - wa,
                u = (0, Ur.q)(s, [wa, Math.max(wa, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - wa,
                u = (0, Ur.q)(s, [wa, Math.max(wa, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const a = f(),
              d = window.innerHeight - 2 * wa,
              c = h.scrollHeight,
              u = window.getComputedStyle(l),
              m = parseInt(u.borderTopWidth, 10),
              g = parseInt(u.paddingTop, 10),
              b = parseInt(u.borderBottomWidth, 10),
              w = m + g + c + parseInt(u.paddingBottom, 10) + b,
              x = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(h),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              P = e.top + e.height / 2 - wa,
              O = d - P,
              R = y.offsetHeight / 2,
              N = m + g + (y.offsetTop + R),
              S = w - N;
            if (N <= P) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                r = N + Math.max(O, R + (e ? C : 0) + t + b);
              i.style.height = r + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(P, m + h.offsetTop + (e ? j : 0) + R) + S;
              i.style.height = t + "px", h.scrollTop = N - P + h.offsetTop
            }
            i.style.margin = `${wa}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, i, l, h, y, v, s.dir, n]);
        (0, It.N)(() => b(), [b]);
        const [w, x] = D.useState();
        (0, It.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = D.useCallback(e => {
          e && !0 === m.current && (b(), g?.(), m.current = !1)
        }, [b, g]);
        return (0, N.jsx)(Ra, {
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
      Pa.displayName = "SelectItemAlignedPosition";
      var Oa = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = wa,
          ...s
        } = e, a = aa(r);
        return (0, N.jsx)(Jt, {
          ...a,
          ...s,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...s.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      });
      Oa.displayName = "SelectPopperPosition";
      var [Ra, Na] = oa(ga, {}), Sa = "SelectViewport", Da = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = _a(Sa, r), a = Na(Sa, r), i = (0, lt.s)(t, s.onViewportChange), d = D.useRef(0);
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, N.jsx)(ta.Slot, {
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
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * wa,
                      o = parseFloat(r.style.minHeight),
                      s = parseFloat(r.style.height),
                      a = Math.max(o, s);
                    if (a < n) {
                      const o = a + e,
                        s = Math.min(n, o),
                        i = o - s;
                      r.style.height = s + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = t.scrollTop
              })
            })
          })]
        })
      });
      Da.displayName = Sa;
      var Ia = "SelectGroup",
        [Ta, za] = oa(Ia);
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ot.B)();
        return (0, N.jsx)(Ta, {
          scope: r,
          id: o,
          children: (0, N.jsx)(pt.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Ia;
      var Ea = "SelectLabel";
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = za(Ea, r);
        return (0, N.jsx)(pt.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Ea;
      var ka = "SelectItem",
        [La, Aa] = oa(ka),
        Va = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = da(ka, r), d = _a(ka, r), l = i.value === n, [c, u] = D.useState(s ?? ""), [f, p] = D.useState(!1), m = (0, lt.s)(t, e => d.itemRefCallback?.(e, n, o)), h = (0, Ot.B)(), y = D.useRef("touch"), v = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, N.jsx)(La, {
            scope: r,
            value: n,
            disabled: o,
            textId: h,
            isSelected: l,
            onItemTextChange: D.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, N.jsx)(ta.ItemSlot, {
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
                ...a,
                ref: m,
                onFocus: (0, dt.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, dt.mK)(a.onBlur, () => p(!1)),
                onClick: (0, dt.mK)(a.onClick, () => {
                  "mouse" !== y.current && v()
                }),
                onPointerUp: (0, dt.mK)(a.onPointerUp, () => {
                  "mouse" === y.current && v()
                }),
                onPointerDown: (0, dt.mK)(a.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, dt.mK)(a.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, dt.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, dt.mK)(a.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Js.includes(e.key) && v(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Va.displayName = ka;
      var Ma = "SelectItemText",
        Fa = D.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = da(Ma, r), i = _a(Ma, r), d = Aa(Ma, r), l = ca(Ma, r), [c, u] = D.useState(null), f = (0, lt.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, m = D.useMemo(() => (0, N.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: y
          } = l;
          return (0, It.N)(() => (h(m), () => y(m)), [h, y, m]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(pt.span, {
              id: d.textId,
              ...s,
              ref: f
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren ? ut.createPortal(s.children, a.valueNode) : null]
          })
        });
      Fa.displayName = Ma;
      var Ba = "SelectItemIndicator";
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Aa(Ba, r).isSelected ? (0, N.jsx)(pt.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Ba;
      var qa = "SelectScrollUpButton";
      D.forwardRef((e, t) => {
        const r = _a(qa, e.__scopeSelect),
          n = Na(qa, e.__scopeSelect),
          [o, s] = D.useState(!1),
          a = (0, lt.s)(t, n.onScrollButtonChange);
        return (0, It.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Ka, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      }).displayName = qa;
      var Xa = "SelectScrollDownButton";
      D.forwardRef((e, t) => {
        const r = _a(Xa, e.__scopeSelect),
          n = Na(Xa, e.__scopeSelect),
          [o, s] = D.useState(!1),
          a = (0, lt.s)(t, n.onScrollButtonChange);
        return (0, It.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Ka, {
          ...e,
          ref: a,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      }).displayName = Xa;
      var Ka = D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = _a("SelectScrollButton", r), a = D.useRef(null), i = ra(r), d = D.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return D.useEffect(() => () => d(), [d]), (0, It.N)(() => {
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
            null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, dt.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, dt.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      D.forwardRef((e, t) => {
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
      var Za = "SelectArrow";
      D.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = aa(r), s = da(Za, r), a = _a(Za, r);
        return s.open && "popper" === a.position ? (0, N.jsx)(er, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Za;
      var Ha = D.forwardRef(({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = D.useRef(null),
          s = (0, lt.s)(n, o),
          a = (0, Yr.Z)(t);
        return D.useEffect(() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (a !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }, [a, t]), (0, N.jsx)(pt.select, {
          ...r,
          style: {
            ...sr,
            ...r.style
          },
          ref: s,
          defaultValue: t
        })
      });

      function Ga(e) {
        return "" === e || void 0 === e
      }

      function Wa(e) {
        const t = (0, yt.c)(e),
          r = D.useRef(""),
          n = D.useRef(0),
          o = D.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = D.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return D.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Ua(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
        var a, i;
        1 === n.length && (s = s.filter(e => e !== r));
        const d = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }
      Ha.displayName = "SelectBubbleInput";
      var $a = ua,
        Ya = pa,
        Qa = ha,
        Ja = ya,
        ei = va,
        ti = ba,
        ri = Da,
        ni = Va,
        oi = Fa;

      function si(e) {
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

      function ai(e, t) {
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
          t % 2 ? ai(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = si(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ai(Object(r)).forEach(function(t) {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        mi = ci({
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
      const vi = (0, D.createContext)(null);

      function gi() {
        const e = (0, D.useContext)(vi);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const bi = (0, D.forwardRef)(({
          children: e,
          testId: t,
          isRequired: r,
          isDisabled: n,
          isReadOnly: o,
          defaultValue: s,
          onValueChange: a,
          name: i,
          value: d,
          defaultOpen: l,
          onOpenChange: c,
          isOpen: u,
          size: f = "MD",
          status: p = "neutral",
          ...m
        }, h) => {
          const y = (0, D.useRef)(null),
            v = (0, we.UP)(y, h),
            g = (0, D.useId)(),
            b = (0, D.useId)(),
            w = (0, D.useId)(),
            x = (0, D.useId)(),
            _ = (0, D.useId)(),
            j = (0, D.useId)(),
            [C = !1, P] = (0, we.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            O = (0, B.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, m);
          return (0, N.jsx)(vi.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: j,
              hintId: x,
              popoverId: _,
              defaultValue: s,
              onValueChange: a,
              value: d,
              isOpen: C,
              setIsOpen: P,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, N.jsx)($a, {
              required: r,
              disabled: n,
              open: C,
              onOpenChange: () => P(!o && !C),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, N.jsx)("div", {
                ref: v,
                ...O,
                children: e
              })
            })
          })
        }),
        wi = (0, D.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = gi(), a = (0, B.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: ui({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, N.jsx)(ti, {
            ...a,
            ref: o,
            children: (0, N.jsx)(ri, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        xi = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(ri, {
            ref: r,
            ...n
          })
        }),
        _i = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(Gs, {
            ...o,
            ref: n,
            children: [(0, N.jsx)(xi, {
              asChild: !0,
              children: (0, N.jsx)(Ws, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, N.jsx)(Us, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, N.jsx)($s, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ji = (0, D.forwardRef)(({
          children: e,
          testId: t,
          "aria-labelledby": r,
          "aria-describedby": n,
          asChild: o,
          ...s
        }, a) => {
          const {
            isReadOnly: i,
            status: d,
            isDisabled: l,
            labelId: c,
            hintId: u,
            triggerId: f,
            popoverId: p,
            descriptionId: m,
            isOpen: h,
            value: y,
            size: v
          } = gi(), {
            isPressed: g,
            pressProps: b
          } = (0, ts.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), w = (0, B.mergeProps)({
            id: f,
            className: hi({
              size: v,
              isReadOnly: !!i,
              isInvalid: "invalid" === d,
              isPressed: !!g,
              isDisabled: !!l
            }),
            "aria-labelledby": (0, B.joinStrings)(r, c, u),
            "aria-describedby": (0, B.joinStrings)(n, m),
            "aria-activedescendant": y,
            "aria-controls": p,
            "aria-invalid": "invalid" === d,
            "data-state": h ? "open" : "closed",
            "data-testid": t,
            "data-pressed": !!g
          }, (0, B.omit)(b, "onKeyDown"), s), x = o ? I.DX : Ya;
          return (0, N.jsx)(x, {
            ...w,
            ref: a,
            children: e
          })
        }),
        Ci = (0, D.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? I.DX : "span";
          return (0, N.jsx)(a, {
            ...s,
            ref: o,
            children: (0, N.jsx)(Qa, {
              placeholder: e
            })
          })
        }),
        Pi = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = gi(), i = a ? nt.ChevronUp : nt.ChevronDown, d = (0, B.mergeProps)({
            asChild: !0,
            className: yi({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, N.jsx)(Ja, {
            ...d,
            ref: n,
            children: e || (0, N.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Oi = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            isRequired: i,
            isDisabled: d,
            labelId: l,
            triggerId: c
          } = gi(), u = i && !o, f = (0, B.mergeProps)({
            id: s.id || l,
            htmlFor: c,
            "data-testid": e,
            className: mi({
              showAsterisk: u,
              isDisabled: d
            })
          }, s), p = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        Ri = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = gi(), i = (0, B.mergeProps)({
            className: fi({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ni = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = gi(), i = (0, B.mergeProps)({
            className: pi({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Si = (0, D.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, D.useRef)(null),
            i = (0, we.UP)(a, s),
            d = (0, B.mergeProps)({
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
        Di = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
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
        Ii = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, N.jsx)(Ja, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        Ti = ei,
        zi = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = gi(), i = (0, B.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? I.DX : cs;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ei = us,
        ki = fs;
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Vi(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        Gi = Xi({
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
        Wi = Xi({
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
      const Ui = (0, D.createContext)(null);

      function $i() {
        const e = (0, D.useContext)(Ui);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Yi = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? I.DX : "div",
            u = (0, D.useId)(),
            f = (0, D.useId)(),
            p = (0, D.useId)();
          return (0, N.jsx)(Ui.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: u,
              descriptionId: f,
              inputId: p,
              isDisabled: s,
              isReadOnly: a,
              ...i
            },
            children: (0, N.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Qi = (0, D.forwardRef)(({
          testId: e,
          onPress: t,
          onClick: r,
          "aria-labelledby": n,
          "aria-describedby": o,
          id: s,
          isSelected: a,
          defaultSelected: i,
          onSelectedChange: d,
          name: l,
          value: c,
          ...u
        }, f) => {
          const p = (0, D.useRef)(null),
            m = (0, we.UP)(p, f),
            {
              size: h,
              appearance: y,
              inputId: v,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: x
            } = $i(),
            _ = (0, Ai.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, Li.K)({
              id: s || v,
              "aria-labelledby": (0, B.joinStrings)(n, g),
              "aria-describedby": (0, B.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, B.mergeProps)({
              className: Wi({
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
            ...C,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                ...j,
                ref: m
              })
            }), (0, N.jsx)("div", {
              className: Gi({
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
        Ji = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            isDisabled: a,
            labelId: i,
            inputId: d,
            size: l
          } = $i(), c = (0, B.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Hi({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        ed = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = $i(), i = n.id || a, d = (0, B.mergeProps)({
            className: Ki({
              isDisabled: s
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
        sd = ({
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
        ad = ({
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = dd(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        md = pd({
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
        vd = pd({
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
        gd = pd({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bd = pd({
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
      const wd = (0, D.createContext)(null);

      function xd() {
        const e = (0, D.useContext)(wd);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const _d = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, B.omit)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? I.DX : "div",
            l = (0, D.useId)(),
            c = (0, D.useId)(),
            u = (0, D.useId)();
          return (0, N.jsx)(wd.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, N.jsx)(d, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        jd = (0, D.forwardRef)(({
          testId: e,
          isChecked: t,
          defaultChecked: r,
          onCheckedChange: n,
          name: o,
          onPress: s,
          onClick: a,
          "aria-describedby": d,
          "aria-errormessage": l,
          "aria-labelledby": c,
          className: u,
          ...f
        }, p) => {
          const {
            size: m,
            appearance: h,
            isIndeterminate: y,
            isRequired: v,
            descriptionId: g,
            labelId: b,
            inputId: w,
            ...x
          } = xd(), _ = (0, D.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, ts.d)({
            ref: _
          }), {
            setSelected: O,
            toggle: R,
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
            id: j,
            name: o,
            ...x
          }, {
            ...T,
            toggle: R,
            setSelected: x.isReadOnly ? () => !1 : O
          }, _), A = (0, B.mergeProps)({
            className: hd({
              size: m
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || k || L || R()
            }
          }, P, f), V = (0, B.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, B.joinStrings)(c, b),
            "aria-describedby": (0, B.joinStrings)(d, g),
            "aria-errormessage": (0, B.joinStrings)(l, x.isInvalid ? g : void 0),
            "aria-required": v,
            required: v
          }, z), M = y ? i[`Dash${m}`] : i[`Check${m}`];
          return (0, N.jsxs)("div", {
            ...A,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, N.jsx)("div", {
              className: (0, S.clsx)(md({
                size: m,
                appearance: h
              }), u),
              "aria-hidden": "true",
              "data-state": y ? "mixed" : E ? "checked" : "unchecked",
              "data-disabled": k || L,
              "data-testid": e,
              "data-pressed": C,
              children: (0, N.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (E || y) && (0, N.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Cd = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, a) => {
          const {
            size: i,
            labelId: d,
            inputId: l,
            isRequired: c
          } = xd(), u = s.id || d, f = c && !o, p = (0, B.mergeProps)({
            className: bd({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), m = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(m, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        Pd = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = xd(), i = n.id || a, d = (0, B.mergeProps)({
            className: yd({
              isDisabled: s
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
        Od = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = xd(), a = n.id || s, i = (0, B.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Rd = (0, D.createContext)(null);

      function Nd() {
        const e = (0, D.useContext)(Rd);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const Sd = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, D.useState)(null), [l, c] = (0, D.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, B.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? I.DX : "fieldset";
          return (0, N.jsx)(Rd.Provider, {
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
              ref: a,
              children: r
            })
          })
        }),
        Dd = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          optionalText: n = "optional",
          hideVisually: o = !1,
          hideRequiredAsterisk: s,
          ...a
        }, i) => {
          const {
            isRequired: d
          } = Nd(), l = d && !s, c = (0, B.mergeProps)({
            "data-testid": r,
            className: gd({
              showAsterisk: l
            })
          }, a), u = t ? I.DX : "legend";
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
        Id = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = Nd(), a = (0, D.useId)(), i = n.id || a;
          (0, D.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, B.mergeProps)({
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
        Td = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = Nd(), a = (0, B.mergeProps)({
            "data-testid": r,
            className: vd({
              size: s
            })
          }, n), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        zd = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = Nd(), a = (0, D.useId)(), i = n.id || a;
          (0, D.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, B.mergeProps)({
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ed(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
      const Kd = (0, D.createContext)(null);

      function Zd() {
        const e = (0, D.useContext)(Kd);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Hd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? I.DX : "div",
            u = (0, D.useId)(),
            f = (0, D.useId)(),
            p = (0, D.useId)(),
            m = (0, D.useId)();
          return (0, N.jsx)(Kd.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: m,
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: a,
              ...i
            },
            children: (0, N.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Gd = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            labelId: i,
            inputId: d,
            isDisabled: l,
            isRequired: c
          } = Zd(), u = (0, B.mergeProps)({
            className: qd({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        Wd = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          rows: n = 5,
          defaultValue: o,
          name: s,
          placeholder: a = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          ...l
        }, c) => {
          const {
            descriptionId: u,
            labelId: f,
            inputId: p,
            hintId: m,
            isDisabled: h,
            isRequired: y,
            isReadOnly: v,
            status: g
          } = Zd(), b = (0, D.useRef)(null), w = (0, we.UP)(b, c), x = (0, B.mergeProps)({
            className: Xd({
              isInvalid: "invalid" === g,
              isDisabled: h,
              isReadOnly: v,
              isSuccess: "success" === g
            }),
            name: s,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: h,
            required: y,
            readOnly: v,
            placeholder: a,
            "aria-labelledby": (0, B.joinStrings)(l.id, f, m, i),
            "aria-describedby": (0, B.joinStrings)(u, d),
            "data-testid": r,
            ..."invalid" === g && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === g && {
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
        Ud = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Zd(), i = (0, B.mergeProps)({
            className: Fd({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        $d = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Zd(), i = (0, B.mergeProps)({
            className: Bd({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Yd = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Zd(), i = (0, B.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? I.DX : cs;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Qd = us,
        Jd = fs;
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = rl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var al = (e, t, r) => {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) al(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sl(e.variantClassNames, e => sl(e, e => e.split(" ")[0]))
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
      const cl = (0, D.createContext)(null);

      function ul() {
        const e = (0, D.useContext)(cl);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const fl = (0, D.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          orientation: r = "vertical",
          children: n,
          testId: o,
          asChild: s,
          "aria-labelledby": a,
          "aria-describedby": i,
          "aria-errormessage": d,
          status: l = "neutral",
          ...c
        }, u) => {
          const f = (0, D.useRef)(null),
            p = (0, we.UP)(f, u),
            m = (0, D.useId)(),
            h = (0, D.useId)(),
            y = (0, D.useId)(),
            v = (0, el.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: g
            } = (0, tl.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, B.joinStrings)(m, a),
              "aria-describedby": (0, B.joinStrings)(h, y, i),
              "aria-errormessage": (0, B.joinStrings)(y, d)
            }, v),
            b = (0, B.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, B.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? I.DX : "div";
          return (0, N.jsx)(cl.Provider, {
            value: {
              state: v,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: h,
              labelId: m,
              errorId: y,
              status: l,
              ...c
            },
            children: (0, N.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...b,
              children: n
            })
          })
        }),
        pl = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = ul(), i = (0, B.mergeProps)({
            "data-testid": e,
            className: ll({
              size: s,
              orientation: a
            })
          }, n), d = t ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        ml = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o = !1,
          ...s
        }, a) => {
          const {
            isRequired: i,
            labelId: d
          } = ul(), l = i && !o, c = (0, B.mergeProps)({
            id: s.id || d,
            "data-testid": e,
            className: dl({
              showAsterisk: l
            })
          }, s), u = t ? I.DX : "div";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        hl = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = ul(), a = (0, B.mergeProps)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        yl = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = ul(), i = (0, B.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? I.DX : cs;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        vl = us,
        gl = fs;
      var bl = r(9153),
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
        jl = il({
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
      const Cl = ({
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
        Pl = ({
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
        Ol = ({
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
        Rl = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? I.DX : "label";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Nl = (0, D.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, D.useRef)(null),
            s = (0, we.UP)(o, n),
            a = (0, D.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = ul(),
            {
              isPressed: p,
              pressProps: m
            } = (0, ts.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, bl.z)({
              ...r,
              id: a,
              value: t,
              "aria-label": ""
            }, i, o),
            y = h.checked,
            v = h.disabled || i?.isReadOnly,
            g = (0, B.mergeProps)(h, {
              disabled: v,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...v && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            b = c[`Dot${l}`];
          return (0, N.jsxs)("div", {
            className: jl({
              size: l
            }),
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, N.jsx)("div", {
              className: _l({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": y ? "checked" : "unchecked",
              "data-disabled": v,
              "data-pressed": p,
              ...m,
              children: (0, N.jsx)("span", {
                className: "foundry_1pfduet9",
                children: y && (0, N.jsx)(b, {})
              })
            })]
          })
        }),
        Sl = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = ul(), d = (0, D.useId)(), l = (0, B.mergeProps)({
            id: d,
            "data-testid": e,
            className: xl({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? I.DX : "div";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        Dl = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = ul(), a = (0, B.mergeProps)({
            "data-testid": e,
            className: wl({
              isDisabled: s
            })
          }, n), i = t ? I.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...a,
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Tl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        Zl = (0, D.createContext)(null);

      function Hl() {
        const e = (0, D.useContext)(Zl);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Gl = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, D.useState)("text"), u = `${(0,D.useId)()}-label`, f = `${(0,D.useId)()}-input`, p = `${(0,D.useId)()}-description`, m = (0, D.useRef)(null), h = (0, D.useRef)(Kl), y = (0, B.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), v = e ? I.DX : "div";
          return (0, N.jsx)(Zl.Provider, {
            value: {
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: a,
              labelId: u,
              inputId: f,
              descriptionId: p,
              type: l,
              setType: c,
              inputRef: m,
              focusState: h,
              ...i
            },
            children: (0, N.jsx)(v, {
              ref: d,
              ...y,
              children: t
            })
          })
        }),
        Wl = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          hideRequiredAsterisk: o,
          ...s
        }, a) => {
          const {
            isDisabled: i,
            isRequired: d,
            inputId: l,
            labelId: c
          } = Hl(), u = d && !o, f = (0, B.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: Xl({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        Ul = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Hl(), a = (0, B.mergeProps)({
            "data-testid": e,
            className: Fl({
              isDisabled: s
            })
          }, n), i = t ? I.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        $l = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = Hl(), d = (0, B.mergeProps)({
            "data-testid": e,
            className: (0, S.clsx)(Vl({
              isDisabled: s,
              isReadOnly: a,
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
        Yl = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          mask: r,
          replacement: n,
          showMask: o = !0,
          track: s,
          placeholder: a = " ",
          "aria-labelledby": i,
          "aria-describedby": d,
          type: l = "text",
          ...c
        }, u) => {
          const {
            isDisabled: f,
            isReadOnly: p,
            isRequired: m,
            status: h,
            labelId: y,
            inputId: v,
            descriptionId: g,
            setType: b,
            type: w,
            inputRef: x,
            focusState: _
          } = Hl();
          (0, D.useEffect)(() => b(l), []);
          const j = "invalid" === h,
            C = (0, B.mergeProps)({
              disabled: f,
              readOnly: p,
              required: m,
              id: v,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, B.joinStrings)(y, i),
              "aria-describedby": (0, B.joinStrings)(g, d),
              "data-testid": e,
              className: (0, S.clsx)(ql({
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
              ...j && {
                "aria-invalid": !0,
                "aria-errormessage": g
              },
              ..."success" === h && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...m && {
                "aria-required": !0
              }
            }, c),
            P = (0, Il.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            O = (0, we.UP)(r && n ? P : null, x, u),
            R = t ? I.DX : "input";
          return (0, N.jsx)(R, {
            ref: O,
            ...C
          })
        }),
        Ql = (0, D.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = Hl(), i = (0, B.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, S.clsx)(Bl({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? I.DX : nt[e];
          return (0, N.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Jl = (0, D.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = Hl(), n = (0, B.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, S.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, N.jsx)(R.K, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        ec = (0, D.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i
          } = Hl(), d = "password" === o, l = d ? e : t;
          (0, D.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, B.mergeProps)({
            label: l,
            icon: d ? "Eye" : "EyeOff",
            onPress: () => {
              s(d ? "text" : "password");
              const e = a.current;
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
              children: [l, (0, N.jsx)(Gr, {})]
            })]
          })
        }),
        tc = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Hl(), i = (0, B.mergeProps)({
            className: Ml({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        rc = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Hl(), i = (0, B.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? I.DX : cs;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        nc = us,
        oc = fs;
      var sc = r(16319);

      function ac(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = ac(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        pc = (0, D.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, D.useRef)(null),
            a = (0, we.UP)(s, o),
            {
              buttonProps: i
            } = (0, we.sL)(n, s),
            d = (0, B.mergeProps)({
              "data-testid": r,
              className: uc({
                size: t
              })
            }, i);
          return (0, N.jsx)("button", {
            ref: a,
            ...d,
            children: (0, N.jsx)(nt.X, {
              label: e,
              size: fc[t]
            })
          })
        });

      function mc(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = mc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yc(yc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vc(e.variantClassNames, e => vc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wc = bc({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xc = bc({
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
        _c = bc({
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
      const jc = (0, D.createContext)(null);

      function Cc() {
        const e = (0, D.useContext)(jc);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Pc = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? I.DX : "div",
            i = (0, B.mergeProps)({
              className: _c({
                status: r,
                background: n
              })
            }, o);
          return (0, N.jsx)(jc.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, N.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i
            })
          })
        }),
        Oc = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            s = (0, B.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Rc = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            s = (0, B.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Nc = {
          danger: nt.CircleX,
          information: nt.Info,
          success: nt.CircleCheck,
          warning: nt.TriangleAlert
        },
        Sc = (0, D.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Cc(), s = e ? I.DX : Nc[o], a = (0, B.mergeProps)({
            className: xc({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, N.jsx)(s, {
            label: "",
            ref: n,
            ...a
          })
        }),
        Dc = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            s = (0, B.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Ic = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            s = (0, B.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Tc = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, D.useRef)(null),
            a = (0, we.UP)(s, o),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, sc.i)(n, s),
            c = (0, B.mergeProps)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, N.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        zc = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? I.DX : "div",
            a = (0, B.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Ec = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? I.DX : "div";
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, S.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        kc = (0, D.forwardRef)((e, t) => {
          const {
            background: r
          } = Cc(), n = "none" !== r, o = (0, B.mergeProps)({
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Mc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
      const Hc = (0, D.createContext)(null);

      function Gc() {
        const e = (0, D.useContext)(Hc);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Wc = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          loopPagination: n,
          status: o,
          background: s,
          align: a = "left",
          ...i
        }, d) => {
          const l = (({
              loopPagination: e = !0
            }) => {
              const t = (0, we.rl)(),
                r = (0, we.jt)(),
                [n, o] = (0, D.useState)([]),
                s = n.length,
                [a, i] = (0, D.useState)(0),
                [d, l] = (0, Lc.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [(0, Ac.A)(), (0, Vc.A)()]),
                c = (0, D.useRef)(0),
                u = (0, D.useRef)(!1),
                f = n[a],
                p = (0, D.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                m = (0, D.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                h = (0, D.useCallback)((e, t) => {
                  const r = e.internalEngine(),
                    n = e.scrollProgress(),
                    o = e.slidesInView(),
                    s = "scroll" === t;
                  e.scrollSnapList().forEach((t, a) => {
                    let i = t - n;
                    r.slideRegistry[a].forEach(a => {
                      if (s && !o.includes(a)) return;
                      r.options.loop && r.slideLooper.loopPoints.forEach(e => {
                        const r = e.target();
                        if (a === e.index && 0 !== r) {
                          const e = Math.sign(r); - 1 === e && (i = t - (1 + n)), 1 === e && (i = t + (1 - n))
                        }
                      });
                      const d = (l = 1 - Math.abs(i * c.current), Math.min(Math.max(l, 0), 1)).toString();
                      var l;
                      e.slideNodes()[a].style.opacity = d
                    })
                  })
                }, []);
              return (0, D.useEffect)(() => {
                l && (m(l), h(l), l.on("reInit", m).on("reInit", h).on("scroll", h).on("slideFocus", h))
              }, [l, h]), (0, D.useEffect)(() => {
                l && (p(l), l.on("select", p).on("reInit", p))
              }, [l, p]), {
                setAlerts: o,
                alerts: n,
                numAlerts: s,
                emblaRef: d,
                emblaApi: l,
                prevAlert: () => l?.scrollPrev(r),
                nextAlert: () => l?.scrollNext(r),
                currentAlert: f,
                currentAlertIndex: a,
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
          (0, D.useEffect)(() => {
            o && s && f([{
              status: o,
              background: s,
              align: a
            }])
          }, []);
          const m = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            h = (0, B.mergeProps)({
              className: Zc(c)
            }, m, i),
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
        $c = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Gc();
          if (!e && !n || !n?.status) return null;
          const o = e || Uc[n.status],
            s = nt[o],
            a = (0, B.mergeProps)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, N.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        Yc = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            s = (0, B.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Qc = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? I.DX : "div",
            d = (0, B.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, N.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        Jc = (0, D.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = Gc(), i = (0, B.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, we.UP)(s, n), l = D.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, D.useEffect)(() => {
            l && o(l)
          }, []), a?.on("slidesChanged", () => {
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
        eu = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, D.useRef)(null),
            a = (0, we.UP)(s, o),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, sc.i)(n, s),
            c = (0, B.mergeProps)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, N.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...d,
            ...c,
            children: t
          })
        }),
        tu = (0, D.forwardRef)((e, t) => {
          const r = (0, B.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, N.jsx)(pc, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        ru = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? I.DX : "div",
            a = (0, B.mergeProps)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        }),
        nu = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Gc(), s = (0, B.mergeProps)({
            className: Kc
          }, t);
          return (0, N.jsx)(R.K, {
            ref: r,
            size: "SM",
            icon: "ChevronRight",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...s
          })
        }),
        ou = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Gc(), s = (0, B.mergeProps)({
            className: Kc
          }, t);
          return (0, N.jsx)(R.K, {
            ref: r,
            size: "SM",
            icon: "ChevronLeft",
            appearance: "ghost",
            "data-testid": e,
            onPress: n,
            isDisabled: !o(),
            ...s
          })
        }),
        su = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Gc(), s = (0, B.mergeProps)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, N.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

      function au(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = au(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        mu = uu({
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
      const hu = (0, D.createContext)(null);

      function yu() {
        const e = (0, D.useContext)(hu);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const vu = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          background: o,
          color: s,
          hasBorder: a,
          isDisabled: i,
          ...d
        }, l) => {
          const c = {
              size: n,
              background: o,
              color: s,
              hasBorder: a,
              isDisabled: i
            },
            u = (0, B.mergeProps)({
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
        gu = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = yu(), a = e ? I.DX : "div", i = (0, B.mergeProps)({
            className: mu({
              size: s
            })
          }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        bu = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, B.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        wu = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = yu(), s = (0, B.mergeProps)({
            className: fu({
              background: n
            })
          }, t);
          return (0, N.jsx)(R.K, {
            ref: r,
            "data-testid": e,
            "data-close-btn": !0,
            appearance: "ghost",
            icon: "X",
            size: "SM",
            isDisabled: o,
            ...s
          })
        });
      var xu = "ToastProvider",
        [_u, ju, Cu] = Qr("Toast"),
        [Pu, Ou] = (0, ct.A)("Toast", [Cu]),
        [Ru, Nu] = Pu(xu),
        Su = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            children: a
          } = e, [i, d] = D.useState(null), [l, c] = D.useState(0), u = D.useRef(!1), f = D.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${xu}\`. Expected non-empty \`string\`.`), (0, N.jsx)(_u.Provider, {
            scope: t,
            children: (0, N.jsx)(Ru, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: l,
              viewport: i,
              onViewportChange: d,
              onToastAdd: D.useCallback(() => c(e => e + 1), []),
              onToastRemove: D.useCallback(() => c(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: u,
              isClosePausedRef: f,
              children: a
            })
          })
        };
      Su.displayName = xu;
      var Du = "ToastViewport",
        Iu = ["F8"],
        Tu = "toast.viewportPause",
        zu = "toast.viewportResume",
        Eu = D.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = Iu,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = Nu(Du, r), i = ju(r), d = D.useRef(null), l = D.useRef(null), c = D.useRef(null), u = D.useRef(null), f = (0, lt.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = a.toastCount > 0;
          D.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), D.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (m && e && t) {
              const r = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(Tu);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(zu);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
                  }
                },
                o = t => {
                  !e.contains(t.relatedTarget) && n()
                },
                s = () => {
                  e.contains(document.activeElement) || n()
                };
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", s), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", s), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [m, a.isClosePausedRef]);
          const h = D.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Qu(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return D.useEffect(() => {
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
                    s = o.findIndex(e => e === r);
                  Ju(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, h]), (0, N.jsxs)(Pt, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: m ? void 0 : "none"
            },
            children: [m && (0, N.jsx)(Lu, {
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
                ...s,
                ref: f
              })
            }), m && (0, N.jsx)(Lu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Ju(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Eu.displayName = Du;
      var ku = "ToastFocusProxy",
        Lu = D.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = Nu(ku, r);
          return (0, N.jsx)(ar, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
              position: "fixed"
            },
            onFocus: e => {
              const t = e.relatedTarget;
              !s.viewport?.contains(t) && n()
            }
          })
        });
      Lu.displayName = ku;
      var Au = "Toast",
        Vu = D.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: Au
          });
          return (0, N.jsx)(rr, {
            present: r || i,
            children: (0, N.jsx)(Bu, {
              open: i,
              ...a,
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
      var [Mu, Fu] = Pu(Au, {
        onClose() {}
      }), Bu = D.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          type: n = "foreground",
          duration: o,
          open: s,
          onClose: a,
          onEscapeKeyDown: i,
          onPause: d,
          onResume: l,
          onSwipeStart: c,
          onSwipeMove: u,
          onSwipeCancel: f,
          onSwipeEnd: p,
          ...m
        } = e, h = Nu(Au, r), [y, v] = D.useState(null), g = (0, lt.s)(t, e => v(e)), b = D.useRef(null), w = D.useRef(null), x = o || h.duration, _ = D.useRef(0), j = D.useRef(x), C = D.useRef(0), {
          onToastAdd: P,
          onToastRemove: O
        } = h, R = (0, yt.c)(() => {
          const e = y?.contains(document.activeElement);
          e && h.viewport?.focus(), a()
        }), S = D.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(R, e))
        }, [R]);
        D.useEffect(() => {
          const e = h.viewport;
          if (e) {
            const t = () => {
                S(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(Tu, r), e.addEventListener(zu, t), () => {
              e.removeEventListener(Tu, r), e.removeEventListener(zu, t)
            }
          }
        }, [h.viewport, x, d, l, S]), D.useEffect(() => {
          s && !h.isClosePausedRef.current && S(x)
        }, [s, x, h.isClosePausedRef, S]), D.useEffect(() => (P(), () => O()), [P, O]);
        const I = D.useMemo(() => y ? Uu(y) : null, [y]);
        return h.viewport ? (0, N.jsxs)(N.Fragment, {
          children: [I && (0, N.jsx)(qu, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: I
          }), (0, N.jsx)(Mu, {
            scope: r,
            onClose: R,
            children: ut.createPortal((0, N.jsx)(_u.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(Ct, {
                asChild: !0,
                onEscapeKeyDown: (0, dt.mK)(i, () => {
                  h.isFocusedToastEscapeKeyDownRef.current || R(), h.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, N.jsx)(pt.li, {
                  tabIndex: 0,
                  "data-state": s ? "open" : "closed",
                  "data-swipe-direction": h.swipeDirection,
                  ...m,
                  ref: g,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, R()))
                  }),
                  onPointerDown: (0, dt.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, dt.mK)(e.onPointerMove, e => {
                    if (!b.current) return;
                    const t = e.clientX - b.current.x,
                      r = e.clientY - b.current.y,
                      n = Boolean(w.current),
                      o = ["left", "right"].includes(h.swipeDirection),
                      s = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max,
                      a = o ? s(0, t) : 0,
                      i = o ? 0 : s(0, r),
                      d = "touch" === e.pointerType ? 10 : 2,
                      l = {
                        x: a,
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
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
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
        } = e, o = Nu(Au, t), [s, a] = D.useState(!1), [i, d] = D.useState(!1);
        return function(e = () => {}) {
          const t = (0, yt.c)(e);
          (0, It.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => a(!0)), D.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, N.jsx)(tr, {
          asChild: !0,
          children: (0, N.jsx)(ar, {
            ...n,
            children: s && (0, N.jsxs)(N.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      D.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Xu = D.forwardRef((e, t) => {
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
        Zu = D.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, N.jsx)(Wu, {
            altText: r,
            asChild: !0,
            children: (0, N.jsx)(Gu, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`), null)
        });
      Zu.displayName = Ku;
      var Hu = "ToastClose",
        Gu = D.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Fu(Hu, r);
          return (0, N.jsx)(Wu, {
            asChild: !0,
            children: (0, N.jsx)(pt.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, dt.mK)(e.onClick, o.onClose)
            })
          })
        });
      Gu.displayName = Hu;
      var Wu = D.forwardRef((e, t) => {
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
          s = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? mt(o, s) : o.dispatchEvent(s)
      }
      var Yu = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
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
      var ef = Su,
        tf = Eu,
        rf = Vu,
        nf = Xu,
        of = Zu,
        sf = Gu;

      function af(e) {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = af(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        mf = ff({
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
        vf = (0, D.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
            className: hf({
              position: r
            })
          }, n);
          return (0, N.jsx)(tf, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        gf = (0, D.createContext)(null);

      function bf() {
        const e = (0, D.useContext)(gf);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const wf = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? I.DX : rf,
            i = (0, B.mergeProps)({
              className: mf({
                appearance: n
              })
            }, o);
          return (0, N.jsx)(gf.Provider, {
            value: {
              appearance: n
            },
            children: (0, N.jsx)(a, {
              ref: s,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        xf = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? I.DX : nf,
            a = (0, B.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
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
        jf = (0, D.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = bf(), o = e ? I.DX : _f[n], s = (0, B.mergeProps)({
            className: pf({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, N.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        Cf = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, N.jsx)(of, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, N.jsx)(I.DX, {
              children: t
            }) : (0, N.jsx)(O.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Pf = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, B.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, N.jsx)(sf, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, N.jsx)(I.DX, {
              children: t
            }) : (0, N.jsx)(pc, {
              size: "SM",
              label: n
            })
          })
        });
      var Of = r(92405);

      function Rf(e) {
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

      function Sf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nf(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Rf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Df(e, t) {
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
              n = Sf(Sf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
              return Df(e.variantClassNames, e => Df(e, e => e.split(" ")[0]))
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
        const e = (0, D.useContext)(Af);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Af = (0, D.createContext)(null),
        Vf = (0, D.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, B.mergeProps)({
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
              ref: s,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        Mf = (0, D.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, D.useRef)(null),
            {
              size: i
            } = Lf(),
            {
              itemProps: d
            } = (0, Of.I)({
              isCurrent: e,
              children: t
            }, a),
            l = r ? I.DX : "a",
            c = (0, B.mergeProps)({
              className: (0, S.clsx)(zf({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, N.jsx)("li", {
            className: Ef({
              size: i
            }),
            ref: s,
            children: (0, N.jsx)(l, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        Ff = (0, D.forwardRef)(({
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
        Bf = (0, D.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, D.useState)(r), {
            size: d
          } = Lf(), l = (0, B.mergeProps)({
            className: Ef({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, N.jsx)("li", {
            ref: s,
            ...l,
            children: (0, N.jsxs)($a, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, N.jsx)(Ya, {
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
        qf = (0, D.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? I.DX : ni,
            a = (0, B.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
      var Gf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zf(Zf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Gf(l, n, e.defaultVariants) && (r += " " + c);
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
      const Uf = (0, D.createContext)(null);

      function $f() {
        const e = (0, D.useContext)(Uf);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Yf = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? I.DX : "div",
            d = (0, B.mergeProps)({
              className: Wf({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, N.jsx)(Uf.Provider, {
            value: {
              type: o
            },
            children: (0, N.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...d
            })
          })
        }),
        Qf = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            s = (0, B.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        Jf = (0, D.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, B.mergeProps)({
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
          const e = (0, we.Ub)(B.breakpoints.mobile);
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = rp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ap = (e, t, r) => {
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ap(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sp(e.variantClassNames, e => sp(e, e => e.split(" ")[0]))
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
      const dp = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, N.jsx)(Gs, {
            ref: r,
            ...n
          })
        }),
        lp = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, N.jsx)(Ws, {
            ref: r,
            ...n
          })
        }),
        cp = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, N.jsx)(Us, {
            ref: r,
            ...n
          })
        }),
        up = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, we.rl)(),
            o = (0, B.mergeProps)({
              "data-testid": e,
              className: ip({
                isTouchDevice: n
              })
            }, t);
          return (0, N.jsx)($s, {
            ref: r,
            ...o
          })
        }),
        fp = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Ys, {
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

      function mp(e, t) {
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
          t % 2 ? mp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = pp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mp(Object(r)).forEach(function(t) {
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
      var vp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hp(hp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) vp(l, n, e.defaultVariants) && (r += " " + c);
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
        bp = gp({
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
        wp = gp({
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
      const xp = (0, D.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, D.createRef)(),
          dialogSpringRef: (0, it.$9)(),
          overlaySpringRef: (0, it.$9)()
        }),
        _p = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
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
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, D.useId)(),
              descriptionId: (0, D.useId)(),
              triggerRef: (0, D.useRef)(null),
              dialogSpringRef: (0, it.U2)(),
              overlaySpringRef: (0, it.U2)()
            },
            children: (0, N.jsx)(jp, {
              ...i
            })
          })
        },
        jp = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, D.useContext)(xp), n = (0, B.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, N.jsx)(Co, {
            ...n
          })
        },
        Cp = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, D.useContext)(xp), s = (0, we.UP)(o, r), a = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, N.jsx)(Po, {
            ...a,
            ref: s
          })
        }),
        Pp = e => (0, N.jsx)(Oo, {
          forceMount: !0,
          ...e
        }),
        Op = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, D.useContext)(xp), a = tp(), i = (0, we.jt)(), d = (0, it.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: it.$W.stiff,
            immediate: i || s
          }), l = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, it.CS)(Ro);
          return (0, D.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, N.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        Rp = (0, D.forwardRef)(({
          children: e,
          testId: t,
          onCloseAutoFocus: r,
          disableDrag: n = !1,
          ...o
        }, s) => {
          const {
            isOpen: a,
            setIsOpen: i,
            openImmediately: d,
            contentId: l,
            triggerRef: c,
            onOpenTransitionStart: u,
            onOpenTransitionComplete: f,
            onCloseTransitionStart: p,
            onCloseTransitionComplete: m,
            dialogSpringRef: h,
            overlaySpringRef: y
          } = (0, D.useContext)(xp), v = (0, we.rl)(), g = (0, we.jt)(), b = (0, D.useRef)(null), w = ep(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = tp(),
              a = ep(),
              i = (0, D.useRef)();
            return {
              bindDrag: (0, je.useDrag)(({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: m
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
                  }(m, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (h - l) / h;
                  r.start({
                    ...s(e),
                    immediate: !0
                  }), t.start({
                    ...a(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * h || d > .5 && c > 0 ? (t.start({
                  ...a(0),
                  immediate: !1,
                  config: it.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: it.$W.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: it.$W.stiff
                }), r.start({
                  ...s(100),
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
            dialogRef: b,
            overlaySpringRef: y,
            dialogSpringRef: h,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: m
          }), _ = (0, it.pn)(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: it.$W.stiff,
            ref: h,
            immediate: g || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : m?.()
            }
          });
          (0, D.useEffect)(() => {
            h.start()
          }, [a]);
          const j = (0, we.UP)(b, s),
            C = v && !g && !n && x(),
            P = (0, B.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            O = (0, it.CS)(No);
          return _((t, r) => r ? (0, N.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, N.jsx)(O, {
              forceMount: !0,
              ref: j,
              ...P,
              style: t,
              children: e
            })
          }) : null)
        }),
        Np = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, N.jsx)(So, {
            ref: r,
            ...n
          })
        }),
        Sp = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Do, {
            ref: r,
            ...n
          })
        }),
        Dp = (0, D.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
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
        Ip = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? I.DX : "div";
          return (0, N.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        Tp = (0, D.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              "data-testid": r,
              className: bp({
                align: e
              })
            }, n),
            a = t ? I.DX : "header";
          return (0, N.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        zp = (0, D.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
            "data-testid": e,
            className: wp({
              appearance: t
            })
          }, r);
          return (0, N.jsx)(So, {
            ref: n,
            ...o
          })
        }),
        Ep = (0, D.forwardRef)((e, t) => {
          const r = (0, B.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, N.jsx)(R.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        kp = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, N.jsx)(I.DX, {
              ref: n,
              ...o
            }) : (0, N.jsx)(pc, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, N.jsx)(Io, {
            asChild: !0,
            children: s
          })
        }),
        Lp = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? I.DX : "div";
          return (0, N.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        Ap = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? I.DX : "footer";
          return (0, N.jsx)(s, {
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
        Hp = D.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = D.useState("idle");
          return (0, N.jsx)(Kp, {
            scope: r,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: s,
            children: (0, N.jsx)(Mp.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Hp.displayName = Bp;
      var Gp = "AvatarImage",
        Wp = D.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o = () => {},
            ...s
          } = e, a = Zp(Gp, r), i = function(e, {
            referrerPolicy: t,
            crossOrigin: r
          }) {
            const n = (0, Fp.z)(),
              o = D.useRef(null),
              s = n ? (o.current || (o.current = new window.Image), o.current) : null,
              [a, i] = D.useState(() => $p(s, e));
            return (0, It.N)(() => {
              i($p(s, e))
            }, [s, e]), (0, It.N)(() => {
              const e = e => () => {
                i(e)
              };
              if (!s) return;
              const n = e("loaded"),
                o = e("error");
              return s.addEventListener("load", n), s.addEventListener("error", o), t && (s.referrerPolicy = t), "string" == typeof r && (s.crossOrigin = r), () => {
                s.removeEventListener("load", n), s.removeEventListener("error", o)
              }
            }, [s, r, t]), a
          }(n, s), d = (0, yt.c)(e => {
            o(e), a.onImageLoadingStatusChange(e)
          });
          return (0, It.N)(() => {
            "idle" !== i && d(i)
          }, [i, d]), "loaded" === i ? (0, N.jsx)(Mp.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      Wp.displayName = Gp;
      var Up = "AvatarFallback";

      function $p(e, t) {
        return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
      }
      D.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = Zp(Up, r), [a, i] = D.useState(void 0 === n);
        return D.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), a && "loaded" !== s.imageLoadingStatus ? (0, N.jsx)(Mp.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Up;
      var Yp = Hp,
        Qp = Wp;

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

      function em(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? em(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Jp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        om = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tm(tm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) nm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rm(e.variantClassNames, e => rm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        sm = om({
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
        am = "var(--foundry_v912w22)",
        im = "var(--foundry_v912w23)",
        dm = om({
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
        lm = om({
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
        cm = "var(--foundry_v912w21)",
        um = "var(--foundry_v912w20)",
        fm = om({
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
      const pm = (0, D.createContext)(null);

      function mm() {
        const e = (0, D.useContext)(pm);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const hm = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, B.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: sm({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, N.jsx)(pm.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, N.jsx)(Yp, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        ym = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = mm(), [i, d] = (0, D.useState)(!1);
          (0, D.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, B.mergeProps)({
              className: dm({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, N.jsx)("span", {
            className: lm({
              size: s,
              isDisabled: a,
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
        vm = (0, D.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, D.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = mm(),
            d = a || "online",
            l = (0, we.UP)(o, n),
            c = (0, B.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: fm({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, q.DI)({
                [um]: t?.online,
                [cm]: t?.offline,
                [am]: t?.away,
                [im]: t?.busy
              })
            }, r);
          return (0, N.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function gm(e) {
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

      function bm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = gm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _m = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jm = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wm(wm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _m(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xm(e.variantClassNames, e => xm(e, e => e.split(" ")[0]))
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
      const Cm = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? I.DX : "nav";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Pm = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Om = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, D.useRef)(null),
            i = (0, we.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = (0, sc.i)(o, a),
            c = (0, B.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, S.clsx)(jm({
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
        Rm = (0, D.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(Om, {
            ref: n,
            ...o,
            children: (0, N.jsx)(nt.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Nm = (0, D.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(Om, {
            ref: n,
            ...o,
            children: (0, N.jsx)(nt.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Sm = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, B.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            s = e ? I.DX : "span";
          return (0, N.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        Dm = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? I.DX : "div";
          return (0, N.jsx)(s, {
            ...o,
            children: t
          })
        },
        Im = (0, D.createContext)(null);

      function Tm() {
        const e = (0, D.useContext)(Im);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const zm = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, D.useId)(),
            s = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? I.DX : "div";
          return (0, N.jsx)(Im.Provider, {
            value: {
              labelId: o
            },
            children: (0, N.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        Em = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = Tm(), a = (0, B.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? I.DX : "label";
          return (0, N.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        km = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = Tm(), a = (0, B.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? I.DX : bi;
          return (0, N.jsxs)(i, {
            ...a,
            children: [(0, N.jsxs)(ji, {
              ref: o,
              children: [(0, N.jsx)(Ci, {
                placeholder: r
              }), (0, N.jsx)(Pi, {})]
            }), (0, N.jsx)(Ti, {
              children: (0, N.jsx)(wi, {
                children: (0, N.jsx)(_i, {
                  children: t
                })
              })
            })]
          })
        }),
        Lm = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? I.DX : Si;
          return (0, N.jsx)(a, {
            ...s,
            ref: o,
            children: (0, N.jsx)(Di, {
              children: t
            })
          })
        }),
        Am = (0, D.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? I.DX : "p";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var Vm = "rovingFocusGroup.onEntryFocus",
        Mm = {
          bubbles: !1,
          cancelable: !0
        },
        Fm = "RovingFocusGroup",
        [Bm, qm, Xm] = Qr(Fm),
        [Km, Zm] = (0, ct.A)(Fm, [Xm]),
        [Hm, Gm] = Km(Fm),
        Wm = D.forwardRef((e, t) => (0, N.jsx)(Bm.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, N.jsx)(Bm.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, N.jsx)(Um, {
              ...e,
              ref: t
            })
          })
        }));
      Wm.displayName = Fm;
      var Um = D.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            orientation: n,
            loop: o = !1,
            dir: s,
            currentTabStopId: a,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: d,
            onEntryFocus: l,
            preventScrollOnEntryFocus: c = !1,
            ...u
          } = e, f = D.useRef(null), p = (0, lt.s)(t, f), m = (0, $r.jH)(s), [h, y] = (0, or.i)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: Fm
          }), [v, g] = D.useState(!1), b = (0, yt.c)(l), w = qm(r), x = D.useRef(!1), [_, j] = D.useState(0);
          return D.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Vm, b), () => e.removeEventListener(Vm, b)
          }, [b]), (0, N.jsx)(Hm, {
            scope: r,
            orientation: n,
            dir: m,
            loop: o,
            currentTabStopId: h,
            onItemFocus: D.useCallback(e => y(e), [y]),
            onItemShiftTab: D.useCallback(() => g(!0), []),
            onFocusableItemAdd: D.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: D.useCallback(() => j(e => e - 1), []),
            children: (0, N.jsx)(pt.div, {
              tabIndex: v || 0 === _ ? -1 : 0,
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
                if (e.target === e.currentTarget && t && !v) {
                  const t = new CustomEvent(Vm, Mm);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Jm(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, dt.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        $m = "RovingFocusGroupItem",
        Ym = D.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, Ot.B)(), l = s || d, c = Gm($m, r), u = c.currentTabStopId === l, f = qm(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: m,
            currentTabStopId: h
          } = c;
          return D.useEffect(() => {
            if (n) return p(), () => m()
          }, [n, p, m]), (0, N.jsx)(Bm.ItemSlot, {
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
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : Qm[n]
                }(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const o = f().filter(e => e.focusable);
                  let s = o.map(e => e.ref.current);
                  if ("last" === t) s.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && s.reverse();
                    const o = s.indexOf(e.currentTarget);
                    s = c.loop ? (n = o + 1, (r = s).map((e, t) => r[(n + t) % r.length])) : s.slice(o + 1)
                  }
                  setTimeout(() => Jm(s))
                }
                var r, n
              }),
              children: "function" == typeof a ? a({
                isCurrentTabStop: u,
                hasTabStop: null != h
              }) : a
            })
          })
        });
      Ym.displayName = $m;
      var Qm = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Jm(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var eh = Wm,
        th = Ym,
        rh = "Toggle",
        nh = D.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, or.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: rh
          });
          return (0, N.jsx)(pt.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, dt.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        });
      nh.displayName = rh;
      var oh = "ToggleGroup",
        [sh, ah] = (0, ct.A)(oh, [Zm]),
        ih = Zm(),
        dh = D.forwardRef((e, t) => {
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
      var [lh, ch] = sh(oh), uh = D.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, or.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: oh
        });
        return (0, N.jsx)(lh, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: D.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: i,
          onItemDeactivate: D.useCallback(() => i(""), [i]),
          children: (0, N.jsx)(hh, {
            ...s,
            ref: t
          })
        })
      }), fh = D.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, or.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: oh
        }), d = D.useCallback(e => i((t = []) => [...t, e]), [i]), l = D.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, N.jsx)(lh, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, N.jsx)(hh, {
            ...s,
            ref: t
          })
        })
      });
      dh.displayName = oh;
      var [ph, mh] = sh(oh), hh = D.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: i = !0,
          ...d
        } = e, l = ih(r), c = (0, $r.jH)(a), u = {
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
            orientation: s,
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
      }), yh = "ToggleGroupItem", vh = D.forwardRef((e, t) => {
        const r = ch(yh, e.__scopeToggleGroup),
          n = mh(yh, e.__scopeToggleGroup),
          o = ih(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          a = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: s,
            disabled: a
          },
          d = D.useRef(null);
        return n.rovingFocus ? (0, N.jsx)(th, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: s,
          ref: d,
          children: (0, N.jsx)(gh, {
            ...i,
            ref: t
          })
        }) : (0, N.jsx)(gh, {
          ...i,
          ref: t
        })
      });
      vh.displayName = yh;
      var gh = D.forwardRef((e, t) => {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = ch(yh, r), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === s.type ? a : void 0;
          return (0, N.jsx)(nh, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }),
        bh = dh,
        wh = vh;

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

      function jh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _h(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = xh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ch(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ph = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Oh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jh(jh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ph(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ch(e.variantClassNames, e => Ch(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rh = "var(--foundry_zxwkyk2)",
        Nh = "var(--foundry_zxwkyk3)",
        Sh = Oh({
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
        Dh = Oh({
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
        Ih = Oh({
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
        Eh = Oh({
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
      const kh = (0, D.createContext)(null);

      function Lh() {
        const e = (0, D.useContext)(kh);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const Ah = (0, D.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
            "data-testid": e,
            className: Sh({
              size: t
            }),
            type: r
          }, n);
          return (0, N.jsx)(kh.Provider, {
            value: {
              size: t
            },
            children: (0, N.jsx)(bh, {
              ref: o,
              ...s
            })
          })
        }),
        Vh = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Lh(), o = (0, B.mergeProps)({
            "data-testid": e,
            className: Dh({
              size: n
            })
          }, t);
          return (0, N.jsx)(wh, {
            ref: r,
            ...o
          })
        }),
        Mh = (0, D.forwardRef)(({
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
        Fh = (0, D.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, B.mergeProps)({
            "data-testid": e,
            className: Eh({
              status: r
            }),
            style: (0, q.DI)({
              [zh]: t?.online,
              [Th]: t?.offline,
              [Rh]: t?.away,
              [Nh]: t?.busy
            })
          }, n);
          return (0, N.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        Bh = (0, D.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = Lh(), s = (0, B.mergeProps)({
            "data-testid": e,
            className: Ih({
              variant: t,
              size: o
            })
          }, r);
          return (0, N.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var qh = "Popover",
        [Xh, Kh] = (0, ct.A)(qh, [kt]),
        Zh = kt(),
        [Hh, Gh] = Xh(qh),
        Wh = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !1
          } = e, i = Zh(t), d = D.useRef(null), [l, c] = D.useState(!1), [u, f] = (0, or.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: qh
          });
          return (0, N.jsx)(Yt, {
            ...i,
            children: (0, N.jsx)(Hh, {
              scope: t,
              contentId: (0, Ot.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: D.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: D.useCallback(() => c(!0), []),
              onCustomAnchorRemove: D.useCallback(() => c(!1), []),
              modal: a,
              children: r
            })
          })
        };
      Wh.displayName = qh;
      var Uh = "PopoverAnchor",
        $h = D.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Gh(Uh, r), s = Zh(r), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: i
          } = o;
          return D.useEffect(() => (a(), () => i()), [a, i]), (0, N.jsx)(Qt, {
            ...s,
            ...n,
            ref: t
          })
        });
      $h.displayName = Uh;
      var Yh = "PopoverTrigger",
        Qh = D.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Gh(Yh, r), s = Zh(r), a = (0, lt.s)(t, o.triggerRef), i = (0, N.jsx)(pt.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": fy(o.open),
            ...n,
            ref: a,
            onClick: (0, dt.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, N.jsx)(Qt, {
            asChild: !0,
            ...s,
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
          } = e, s = Gh(Jh, t);
          return (0, N.jsx)(ey, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(rr, {
              present: r || s.open,
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
        oy = D.forwardRef((e, t) => {
          const r = ty(ny, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Gh(ny, e.__scopePopover);
          return (0, N.jsx)(rr, {
            present: n || s.open,
            children: s.modal ? (0, N.jsx)(ay, {
              ...o,
              ref: t
            }) : (0, N.jsx)(iy, {
              ...o,
              ref: t
            })
          })
        });
      oy.displayName = ny;
      var sy = (0, ft.TL)("PopoverContent.RemoveScroll"),
        ay = D.forwardRef((e, t) => {
          const r = Gh(ny, e.__scopePopover),
            n = D.useRef(null),
            o = (0, lt.s)(t, n),
            s = D.useRef(!1);
          return D.useEffect(() => {
            const e = n.current;
            if (e) return (0, Xn.Eq)(e)
          }, []), (0, N.jsx)(qn.A, {
            as: sy,
            allowPinchZoom: !0,
            children: (0, N.jsx)(dy, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, dt.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, dt.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, dt.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        iy = D.forwardRef((e, t) => {
          const r = Gh(ny, e.__scopePopover),
            n = D.useRef(!1),
            o = D.useRef(!1);
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
              const s = t.target,
                a = r.triggerRef.current?.contains(s);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        }),
        dy = D.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: i,
            onPointerDownOutside: d,
            onFocusOutside: l,
            onInteractOutside: c,
            ...u
          } = e, f = Gh(ny, r), p = Zh(r);
          return (0, Bn.Oh)(), (0, N.jsx)(En, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, N.jsx)(wt, {
              asChild: !0,
              disableOutsidePointerEvents: a,
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
        cy = D.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Gh(ly, r);
          return (0, N.jsx)(pt.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, dt.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      cy.displayName = ly;
      var uy = D.forwardRef((e, t) => {
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
      var py = Wh,
        my = $h,
        hy = Qh,
        yy = ry,
        vy = oy,
        gy = cy,
        by = uy;

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = wy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Py = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _y(_y({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jy(e.variantClassNames, e => jy(e, e => e.split(" ")[0]))
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
      const Oy = (0, D.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        Ry = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, we.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, B.mergeProps)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, N.jsx)(Oy.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, N.jsx)(py, {
              ...a
            })
          })
        },
        Ny = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, N.jsx)(hy, {
            ref: r,
            ...n
          })
        }),
        Sy = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        Dy = (0, D.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, D.useContext)(Oy), a = (0, D.useRef)(null), i = (0, we.UP)(a, o), {
            buttonProps: d
          } = (0, we.sL)(n, a), l = (0, B.mergeProps)({
            "data-testid": r,
            className: Py({
              size: t
            })
          }, d), c = s ? nt.ChevronUp : nt.ChevronDown;
          return (0, N.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, N.jsx)(c, {
              label: "",
              size: Sy[t]
            })]
          })
        }),
        Iy = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(my, {
            ref: r,
            ...n
          })
        }),
        Ty = (0, D.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, N.jsx)(vy, {
            ref: n,
            ...o
          })
        }),
        zy = (0, D.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, N.jsx)(by, {
            ref: r,
            ...n
          })
        }),
        Ey = e => (0, N.jsx)(yy, {
          ...e
        }),
        ky = e => (0, N.jsx)(gy, {
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
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ly(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
        Gy = "var(--foundry_rmorls1)",
        Wy = By({
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
        ev = D.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = nv,
            ...a
          } = e;
          !o && 0 !== o || av(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = av(o) ? o : 100;
          null === n || iv(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = iv(n, i) ? n : null,
            l = sv(d) ? s(d, i) : void 0;
          return (0, N.jsx)(Qy, {
            scope: r,
            value: d,
            max: i,
            children: (0, N.jsx)(Mp.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": sv(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": ov(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        });
      ev.displayName = Uy;
      var tv = "ProgressIndicator",
        rv = D.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Jy(tv, r);
          return (0, N.jsx)(Mp.sG.div, {
            "data-state": ov(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function nv(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function ov(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function sv(e) {
        return "number" == typeof e
      }

      function av(e) {
        return sv(e) && !isNaN(e) && e > 0
      }

      function iv(e, t) {
        return sv(e) && !isNaN(e) && e <= t && e >= 0
      }
      rv.displayName = tv;
      var dv = ev,
        lv = rv;
      const cv = (0, D.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        uv = (0, D.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, N.jsx)(cv.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, N.jsx)(fv, {
              ...n,
              ref: o
            })
          })
        }),
        fv = (0, D.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, B.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? I.DX : "div";
          return (0, N.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        pv = (0, D.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, D.useContext)(cv), i = (0, B.mergeProps)({
            "data-testid": e,
            className: Zy({
              size: a
            }),
            value: o,
            max: s,
            style: (0, q.DI)({
              [Hy]: t
            }),
            "data-track": !0
          }, r);
          return (0, N.jsx)(dv, {
            ref: n,
            ...i
          })
        }),
        mv = (0, D.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, D.useContext)(cv), i = a ? "-100%" : `-${100-s}%`, d = (0, B.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, q.DI)({
              [Ky]: i,
              [Gy]: `${t}ms`,
              [qy]: r
            })
          }, n);
          return (0, N.jsx)(lv, {
            ref: o,
            ...d
          })
        }),
        hv = (0, D.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, D.useContext)(cv), s = (0, B.mergeProps)({
            "data-testid": t,
            className: Xy({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? I.DX : "span";
          return (0, N.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        yv = (0, D.forwardRef)(({
          testId: e,
          format: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a,
            percentage: i,
            isInvalid: d
          } = (0, D.useContext)(cv), l = (0, B.mergeProps)({
            "data-testid": e,
            className: Xy({
              size: a
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
              className: Wy({
                size: a
              }),
              children: "%"
            })]
          }) : (0, N.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", s]
          })
        })
    }
  }
]);