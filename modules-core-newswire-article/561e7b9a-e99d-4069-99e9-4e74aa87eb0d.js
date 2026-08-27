try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "561e7b9a-e99d-4069-99e9-4e74aa87eb0d", e._sentryDebugIdIdentifier = "sentry-dbid-561e7b9a-e99d-4069-99e9-4e74aa87eb0d")
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
  [9663], {
    89663(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => P,
        Alert: () => p,
        AlertBanner: () => h,
        Avatar: () => w,
        Badge: () => b,
        Body: () => fe,
        Breadcrumbs: () => y,
        Button: () => D.$,
        Checkbox: () => d,
        ChipGroup: () => _,
        Code: () => he,
        Dialog: () => C,
        Display: () => ve,
        Divider: () => Z,
        Dropdown: () => s,
        Heading: () => ye,
        IconButton: () => N.K,
        Label: () => ge,
        Lightbox: () => o,
        Loader: () => ne,
        Pagination: () => x,
        PlatformButton: () => S,
        Popover: () => j,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => oe.y,
        Switch: () => a,
        Tag: () => v,
        Text: () => xe,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => we,
        Toast: () => m,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => vn,
        Content: () => hn,
        Portal: () => mn,
        Root: () => fn,
        Trigger: () => pn,
        useTooltipContext: () => un
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Ps,
        Close: () => Is,
        Content: () => ws,
        Controls: () => Rs,
        CssVars: () => zs,
        Download: () => ks,
        Image: () => Os,
        Keyboard: () => Ds,
        LightboxContext: () => fs,
        OpenIcon: () => bs,
        Overlay: () => Cs,
        Portal: () => gs,
        Reset: () => Ts,
        Root: () => ps,
        RootImplContext: () => hs,
        Thumbnail: () => ys,
        Trigger: () => ms,
        Zoom: () => Ns,
        ZoomPan: () => xs
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Wi,
        Description: () => td,
        Hint: () => rd,
        Label: () => ed,
        Option: () => nd,
        OptionIcon: () => sd,
        OptionText: () => od,
        Portal: () => ad,
        Root: () => Ki,
        ScrollArea: () => Yi,
        StatusIcon: () => dd,
        StatusRoot: () => id,
        StatusText: () => ld,
        Trigger: () => $i,
        TriggerIcon: () => Ji,
        TriggerText: () => Qi,
        Viewport: () => Ui,
        useDropdownContext: () => Gi
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Sd,
        Input: () => Pd,
        Label: () => Rd,
        Root: () => Od,
        useSwitchContext: () => jd
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Id,
        CheckMD: () => Nd,
        CheckXL: () => Td,
        DashLG: () => zd,
        DashMD: () => kd,
        DashXL: () => Ed
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Jd,
        ErrorText: () => el,
        Group: () => nl,
        GroupDescription: () => sl,
        GroupErrorText: () => il,
        GroupItems: () => al,
        GroupLabel: () => ol,
        Input: () => $d,
        Label: () => Qd,
        Root: () => Yd,
        useGroupContext: () => rl
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => _l,
        Hint: () => jl,
        Input: () => xl,
        Label: () => wl,
        Root: () => Cl,
        RootContext: () => bl,
        StatusIcon: () => Pl,
        StatusRoot: () => Ol,
        StatusText: () => Rl,
        useTextAreaContext: () => gl
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Jl,
        DotMD: () => Ql,
        DotXL: () => ec
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Zl,
        Input: () => rc,
        Label: () => Bl,
        Option: () => tc,
        OptionDescription: () => oc,
        OptionLabel: () => nc,
        Options: () => Fl,
        Root: () => Hl,
        StatusIcon: () => Xl,
        StatusRoot: () => ql,
        StatusText: () => Gl,
        useRadioGroupContext: () => Ml
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Rc,
        Control: () => jc,
        Description: () => Dc,
        Hint: () => _c,
        Icon: () => Pc,
        Input: () => Oc,
        Label: () => xc,
        PasswordButton: () => Sc,
        Root: () => wc,
        StatusIcon: () => Ic,
        StatusRoot: () => Nc,
        StatusText: () => Tc
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => tu,
        CloseButton: () => lu,
        Description: () => su,
        ErrorText: () => du,
        Footer: () => iu,
        Header: () => eu,
        Icon: () => nu,
        Link: () => au,
        Root: () => Jc,
        RootContext: () => $c,
        Title: () => ou,
        iconStatusMap: () => ru,
        useAlertContext: () => Qc
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Pu,
        CloseButton: () => Du,
        Description: () => Ou,
        Icon: () => ju,
        Link: () => Su,
        PaginationCounter: () => ku,
        PaginationNav: () => Nu,
        PaginationNextButton: () => Iu,
        PaginationPrevButton: () => Tu,
        PaginationViewport: () => Ru,
        Root: () => xu,
        RootContext: () => Cu,
        iconStatusMap: () => _u,
        useAlertBannerContext: () => wu
      });
      var v = {};
      r.r(v), r.d(v, {
        CloseButton: () => Wu,
        Icon: () => Ku,
        Label: () => Gu,
        Root: () => Xu,
        RootContext: () => Zu,
        useTagContext: () => qu
      });
      var m = {};
      r.r(m), r.d(m, {
        Action: () => Qf,
        CloseButton: () => Jf,
        Description: () => Uf,
        Icon: () => $f,
        Provider: () => qf,
        Root: () => Wf,
        RootContext: () => Gf,
        Viewport: () => Xf,
        iconAppearanceMap: () => Yf,
        useToastContext: () => Kf
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => hp,
        Item: () => pp,
        OverflowMenu: () => vp,
        OverflowMenuItem: () => mp,
        Root: () => fp,
        RootContext: () => up,
        useBreadcrumbsContext: () => cp
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => Rp,
        Label: () => Pp,
        Root: () => Op,
        useBadgeContext: () => jp
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => Hp,
        Root: () => Lp,
        Scrollbar: () => Ap,
        Thumb: () => Mp,
        Viewport: () => Vp
      });
      var C = {};
      r.r(C), r.d(C, {
        ActionArea: () => ch,
        CloseButton: () => lh,
        Content: () => th,
        Description: () => nh,
        Footer: () => uh,
        Header: () => ah,
        HeaderButton: () => dh,
        HeaderTitle: () => ih,
        Layout: () => sh,
        Overlay: () => eh,
        Portal: () => Jp,
        Root: () => Yp,
        ScrollArea: () => oh,
        Title: () => rh,
        Trigger: () => Qp
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => qh,
        Root: () => Zh,
        StatusIndicator: () => Xh,
        useAvatarContext: () => Bh
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => ov,
        Dropdown: () => lv,
        DropdownLabel: () => dv,
        Ellipsis: () => nv,
        Item: () => ev,
        Label: () => uv,
        Next: () => rv,
        Option: () => cv,
        Pages: () => Jh,
        Prev: () => tv,
        ResultsPerPage: () => iv,
        Root: () => Qh
      });
      var _ = {};
      r.r(_), r.d(_, {
        Icon: () => gm,
        Item: () => bm,
        Label: () => wm,
        Root: () => ym,
        StatusIndicator: () => Cm,
        useChipGroupContext: () => mm
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => cy,
        Arrow: () => fy,
        Close: () => hy,
        Content: () => uy,
        Portal: () => py,
        Root: () => ay,
        RootContext: () => sy,
        Trigger: () => iy,
        TriggerButton: () => ly
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => Yy,
        Label: () => $y,
        Root: () => Ky,
        Track: () => Uy,
        UnitLabel: () => Qy
      });
      var P = {};
      r.r(P), r.d(P, {
        Content: () => ug,
        Header: () => ig,
        Icon: () => lg,
        Item: () => ag,
        Root: () => og,
        Trigger: () => dg,
        TriggerIcon: () => cg
      });
      var R = {};
      r.r(R), r.d(R, {
        PC: () => vg,
        PS4: () => pg,
        PS5: () => hg,
        XboxOne: () => mg,
        XboxSeriesXS: () => yg
      });
      var S = {};
      r.r(S), r.d(S, {
        PlatformButton: () => jg
      });
      var D = r(34629),
        N = r(57491),
        I = r(39793),
        T = r(81270),
        k = r(93082),
        z = r(55267);

      function E(e) {
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

      function L(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? L(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = E(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function A(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var M, H, F = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        B = (M = {
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
        }, H = e => {
          var t = M.defaultClassName,
            r = V(V({}, M.defaultVariants), e);
          for (var n in r) {
            var o, s = null !== (o = r[n]) && void 0 !== o ? o : M.defaultVariants[n];
            if (null != s) {
              var a = s;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var i = M.variantClassNames[n][a];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of M.compoundVariants) F(d, r, M.defaultVariants) && (t += " " + l);
          return t
        }, H.variants = () => Object.keys(M.variantClassNames), H.classNames = {
          get base() {
            return M.defaultClassName.split(" ")[0]
          },
          get variants() {
            return A(M.variantClassNames, e => A(e, e => e.split(" ")[0]))
          }
        }, H);
      const Z = (0, k.forwardRef)(({
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
          c = o ? z.DX : d;
        return (0, I.jsx)(c, {
          ref: i,
          className: (0, T.clsx)(B({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
        })
      });
      var q = r(29443),
        X = r(6365),
        G = r(37494);

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

      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? W(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = K(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function(t) {
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
      var $ = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Q = "var(--foundry_9dxgbc2)",
        J = "var(--foundry_9dxgbc3)",
        ee = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = U(U({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) $(l, n, e.defaultVariants) && (r += " " + c);
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
        te = "var(--foundry_9dxgbc0)",
        re = "var(--foundry_9dxgbc1)";
      const ne = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...a
      }, i) => {
        const d = (0, G.zQ)(),
          l = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          c = (0, q.v6)({
            className: ee({
              size: l
            }),
            "data-testid": t,
            style: (0, X.DI)({
              [te]: n?.pulseColorBackground,
              [re]: n?.pulseColorForeground,
              [Q]: n?.gradientColorBackground,
              [J]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          u = e ? z.DX : "div";
        return (0, I.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, I.jsx)(z.xV, {
            children: r
          }) : (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, I.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });
      var oe = r(47399);

      function se(e) {
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

      function ae(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ae(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = se(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function de(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var le = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ce = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ie(ie({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) le(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return de(e.variantClassNames, e => de(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ue = ce({
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
      const fe = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? z.DX : "p",
          i = (0, q.v6)({
            className: ue({
              size: n,
              appearance: r
            })
          }, o);
        return (0, I.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var pe = ce({
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
      const he = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? z.DX : "p",
            a = (0, q.v6)({
              className: pe({
                appearance: r
              })
            }, n);
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        ve = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "h1",
            s = (0, q.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var me = ce({
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
      const ye = (0, k.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? z.DX : `h${7===t?6:t}`,
          a = (0, q.v6)(n, {
            className: me({
              level: t
            })
          });
        return (0, I.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var be = ce({
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
      const ge = (0, k.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? z.DX : "p",
          i = (0, q.v6)({
            className: be({
              size: n,
              appearance: r
            })
          }, o);
        return (0, I.jsx)(a, {
          ref: s,
          "data-testid": t,
          ...i
        })
      });
      var Ce = ce({
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
      const we = {
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
        xe = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? z.DX : we[r] || "span",
            a = (0, q.v6)(n, {
              className: Ce({
                semantic: r
              })
            });
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var _e = r(52514),
        je = r(93529),
        Oe = r(99206),
        Pe = r(34811);
      const Re = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Se = ([e, t]) => ({
        x: e,
        y: t
      }), De = (e, t) => (e.x = t.x, e.y = t.y, e), Ne = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ie = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Te = (e, t, r) => Math.min(Math.max(e, t), r);
      var ke = r(90004);

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

      function Ee(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ee(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ze(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ve(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ae = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Me = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Le(Le({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ae(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ve(e.variantClassNames, e => Ve(e, e => e.split(" ")[0]))
            }
          }, t
        },
        He = Me({
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
        Fe = Me({
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
      je.os.registerPlugin(Oe.L);
      const Be = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Ze = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        qe = (0, X.Tm)("var(--foundry_1a74xwb0)");
      var Xe = r(53692);
      const Ge = {
        "en-US": r.e(8696).then(r.bind(r, 68696)),
        "de-DE": r.e(5847).then(r.bind(r, 25847)),
        "es-ES": r.e(9269).then(r.bind(r, 69269)),
        "es-MX": r.e(9708).then(r.bind(r, 79708)),
        "fr-FR": r.e(9933).then(r.bind(r, 79933)),
        "it-IT": r.e(4607).then(r.bind(r, 64607)),
        "ja-JP": r.e(2656).then(r.bind(r, 62656)),
        "ko-KR": r.e(7110).then(r.bind(r, 87110)),
        "pl-PL": r.e(5529).then(r.bind(r, 25529)),
        "pt-BR": r.e(6405).then(r.bind(r, 36405)),
        "ru-RU": r.e(9103).then(r.bind(r, 99103)),
        "zh-CN": r.e(4962).then(r.bind(r, 54962)),
        "zh-TW": r.e(7602).then(r.bind(r, 37602))
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
          return r ? t : Te(t, this.max[e], this.min[e])
        }
      }
      class We {
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Ie(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Ie(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Ie(this.initial + this.step * this.steps)
        }
        getSteps() {
          return (this.options.max - this.options.min) / this.options.step
        }
      }
      class Ue {
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
      class Ye {
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", De(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (De(this.prevTap, {
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
      class $e {
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
          e.src = this.thumbnail.currentSrc ?? "", await Re(e)
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
      class Qe {
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
      class Je extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class et extends Ue {
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
          if (!this.dispatch(e, new Je(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
      class tt {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Se(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, De(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Se(e);
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
            s = De({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = De({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, De(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (De(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class rt {
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
      class nt extends Ue {
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
          super(), this.width = e, this.height = t, this.opener = new $e({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new Ye({
            options: s,
            slide: this
          }), this.scrollWheel = new Qe({
            slide: this
          }), this.zoomHandler = new tt({
            slide: this
          }), this.zoomLevels = new We({
            options: r,
            slide: this
          }), this.tapHandler = new et({
            options: n,
            slide: this
          }), this.panAreaSize = new rt({
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
          e = Ie(e), r || (e = Te(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Ne(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Ne(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), De(this.pan, this.bounds.center)
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
      var ot = r(81175);
      const st = e => "dark" === e ? ot.xW.dark : ot.xW.light;
      var at = r(47725),
        it = {};
      r.r(it), r.d(it, {
        Activity: () => at.Il,
        ArrowDown: () => at.yd,
        ArrowLeft: () => at.nk,
        ArrowRight: () => at.Qp,
        ArrowRightLeft: () => at.nF,
        ArrowUp: () => at.Do,
        ArrowUpDown: () => at.hD,
        Book: () => at.E3,
        Bookmark: () => at.Xh,
        BookmarkFilled: () => at.dA,
        Bug: () => at.zP,
        BugOff: () => at.k_,
        Calendar: () => at.Vv,
        CalendarOff: () => at.is,
        Car: () => at.TH,
        CarSide: () => at.cY,
        ChartSpline: () => at.m3,
        Check: () => at.Jl,
        ChevronDown: () => at.yQ,
        ChevronFirst: () => at.mf,
        ChevronLast: () => at.Ou,
        ChevronLeft: () => at.JG,
        ChevronRight: () => at.c_,
        ChevronUp: () => at.rX,
        ChevronsDownUp: () => at.WE,
        ChevronsLeftRight: () => at.UQ,
        ChevronsUpDown: () => at.Ml,
        Circle: () => at.jl,
        CircleCheck: () => at.rW,
        CircleCheckFilled: () => at.Dw,
        CircleDollarSign: () => at.OJ,
        CircleHelp: () => at.YC,
        CircleMinus: () => at.ZX,
        CircleMinusFilled: () => at.r0,
        CirclePerson: () => at.q_,
        CircleSlash: () => at.o6,
        CircleX: () => at.RT,
        Clipboard: () => at.B0,
        Clock: () => at.zD,
        CloudAlert: () => at.K4,
        CloudDownload: () => at.MQ,
        CloudUpload: () => at.bK,
        CodeXml: () => at.bv,
        Copy: () => at.QR,
        Cpu: () => at.fX,
        CreditCard: () => at.y5,
        Database: () => at.Wm,
        Discord: () => at.bY,
        DollarSign: () => at.G9,
        Download: () => at.f5,
        EllipsisVertical: () => at.Yb,
        Envelope: () => at.Lh,
        EnvelopeOpen: () => at.jd,
        EpicGames: () => at.fk,
        ExternalLink: () => at.Gr,
        Eye: () => at.kU,
        EyeClosed: () => at.Cz,
        EyeOff: () => at.X_,
        Facebook: () => at.f1,
        FastForward: () => at.Ej,
        FileText: () => at.iU,
        Files: () => at.sv,
        Filter: () => at.dJ,
        Flag: () => at.lN,
        FlagOff: () => at.Ih,
        Gear: () => at.OB,
        Globe: () => at.qz,
        Handshake: () => at.g6,
        Headset: () => at.BC,
        Heart: () => at.B1,
        HeartPulse: () => at.iY,
        House: () => at.tT,
        Image: () => at._V,
        Info: () => at.R2,
        Instagram: () => at.pd,
        LayoutGrid: () => at.D6,
        Lightbulb: () => at.g5,
        Link: () => at.N_,
        List: () => at.B8,
        ListFilter: () => at.xt,
        ListMusic: () => at.w7,
        LockKeyhole: () => at.NT,
        LockPassword: () => at.HI,
        LogOut: () => at.nU,
        MapPin: () => at.sD,
        Maximize: () => at.hz,
        Maximize2: () => at.h1,
        Menu: () => at.W1,
        MessageSquareText: () => at.AJ,
        Mic: () => at.GO,
        MicFilled: () => at.cX,
        Minimize: () => at.Xj,
        Minimize2: () => at.xq,
        Minus: () => at.Hs,
        Monitor: () => at.VA,
        Moon: () => at.AX,
        NintendoSwitch: () => at.Su,
        PaperPlane: () => at.d8,
        Paperclip: () => at.xv,
        PartialCircle: () => at.IM,
        Pause: () => at.vR,
        Pencil: () => at.gH,
        PencilOff: () => at.hE,
        Person: () => at._A,
        PersonBlock: () => at.hs,
        PersonMinus: () => at._E,
        PersonPlus: () => at.c1,
        Pin: () => at.yU,
        PinFilled: () => at.IF,
        Play: () => at.jG,
        Playstation: () => at.p6,
        Plus: () => at.FW,
        Power: () => at.aJ,
        Property: () => at.mA,
        Reddit: () => at.TZ,
        RefreshCcw: () => at.PM,
        RefreshCw: () => at.e9,
        RefreshCwOff: () => at.X0,
        Replay: () => at.eJ,
        Rewind: () => at.Y8,
        Save: () => at.eM,
        Search: () => at.vj,
        Server: () => at.gq,
        Share: () => at.SY,
        ShieldAlert: () => at.yZ,
        ShieldCheck: () => at.ox,
        ShoppingBag: () => at.Nw,
        SkipBack: () => at.L9,
        SkipForward: () => at.xP,
        Star: () => at.FE,
        StarOff: () => at.UM,
        Steam: () => at.Rv,
        Stop: () => at.VG,
        Store: () => at.il,
        Sun: () => at.bd,
        ThumbsDown: () => at.z9,
        ThumbsUp: () => at.tw,
        Tiktok: () => at.Tc,
        Trash: () => at.lM,
        TriangleAlert: () => at.lW,
        Trophy: () => at.Xs,
        Truck: () => at.No,
        Twitch: () => at.YA,
        Twitter: () => at.KK,
        TwoPeople: () => at.LM,
        Undo: () => at.Vn,
        Unlink: () => at.c2,
        Upload: () => at._O,
        UserCouple: () => at.Cn,
        UserGroup: () => at.zr,
        Volume: () => at.fS,
        Volume1: () => at.c6,
        Volume2: () => at.jI,
        VolumeX: () => at.XL,
        Wallet: () => at.uW,
        Weapon: () => at.Re,
        Wifi: () => at.MJ,
        WifiOff: () => at.RQ,
        Wrench: () => at.pi,
        X: () => at.X,
        Xbox: () => at.ms,
        Youtube: () => at.k,
        ZoomIn: () => at.$Z,
        ZoomOut: () => at.en
      });
      const dt = (0, Xe.YK)({
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
      var lt = "foundry_bc732x1";
      const ct = (0, k.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, ke.vC)(e, e => r?.(e), [r]), (0, I.jsx)(fe, {
        size: "XS",
        className: (0, T.clsx)("foundry_bc732x0", {
          [lt]: t
        }),
        asChild: !0,
        children: (0, I.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var ut, ft = r(71433),
        pt = r(44752),
        ht = r(85049),
        vt = r(72579),
        mt = r(41988),
        yt = r(7198),
        bt = Object.defineProperty,
        gt = (e, t) => bt(e, "name", {
          value: t,
          configurable: !0
        }),
        Ct = "dismissableLayer.update",
        wt = k.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        xt = k.forwardRef(gt(function(e, t) {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: a,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = k.useContext(wt), [u, f] = k.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, h] = k.useState({}), v = (0, ht.s)(t, f), m = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? m.indexOf(y) : -1, g = u ? m.indexOf(u) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= b, x = k.useRef(!1), _ = Pt(e => {
            s?.(e), i?.(e), e.defaultPrevented || d?.()
          }, {
            ownerDocument: p,
            deferPointerDownOutside: n,
            isDeferredPointerDownOutsideRef: x,
            dismissableSurfaces: c.dismissableSurfaces,
            shouldHandlePointerDownOutside: k.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...c.branches].some(t => t.contains(e));
              return w && !t
            }, [c.branches, w])
          }), j = Rt(e => {
            if (n && x.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (a?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p), O = !!u && g === m.length - 1, P = (0, yt.c)(e => {
            "Escape" === e.key && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          });
          return k.useEffect(() => {
            if (O) return p.addEventListener("keydown", P, {
              capture: !0
            }), () => p.removeEventListener("keydown", P, {
              capture: !0
            })
          }, [p, O, P]), k.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (ut = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), St(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = ut))
            }
          }, [u, p, r, c]), k.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), St())
          }, [u, c]), k.useEffect(() => {
            const e = gt(() => h({}), "handleUpdate");
            return document.addEventListener(Ct, e), () => document.removeEventListener(Ct, e)
          }, []), (0, I.jsx)(mt.sG.div, {
            ...l,
            ref: v,
            style: {
              pointerEvents: C ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, pt.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, pt.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, pt.mK)(e.onPointerDownCapture, _.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        _t = k.forwardRef(gt(function(e, t) {
          const r = k.useContext(wt),
            n = k.useRef(null),
            o = (0, ht.s)(t, n);
          return k.useEffect(() => {
            const e = n.current;
            if (e) return r.branches.add(e), () => {
              r.branches.delete(e)
            }
          }, [r.branches]), (0, I.jsx)(mt.sG.div, {
            ...e,
            ref: o
          })
        }, "DismissableLayerBranch"));

      function jt() {
        const e = k.useContext(wt),
          [t, r] = k.useState(null);
        return k.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), r
      }
      gt(jt, "useDismissableLayerSurface");
      var Ot = gt(() => !0, "IS_TRUE");

      function Pt(e, t) {
        const {
          ownerDocument: r = globalThis?.document,
          deferPointerDownOutside: n = !1,
          isDeferredPointerDownOutsideRef: o,
          dismissableSurfaces: s,
          shouldHandlePointerDownOutside: a = Ot
        } = t, i = (0, yt.c)(e), d = k.useRef(!1), l = k.useRef(!1), c = k.useRef(new Map), u = k.useRef(() => {});
        return k.useEffect(() => {
          function e() {
            l.current = !1, o.current = !1, c.current.clear()
          }

          function t() {
            return Array.from(c.current.values()).some(Boolean)
          }

          function f(e) {
            if (!l.current) return;
            const t = e.target;
            t instanceof Node && [...s].some(e => e.contains(t)) || c.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
              l.current && u.current()
            }, 0)
          }

          function p(e) {
            l.current && c.current.set(e.type, !1)
          }
          gt(e, "resetOutsideInteraction"), gt(t, "isOutsideInteractionIntercepted"), gt(f, "handleInteractionCapture"), gt(p, "handleInteractionBubble");
          const h = gt(s => {
              if (s.target && !d.current) {
                let f = function() {
                  r.removeEventListener("click", u.current);
                  const n = t();
                  e(), n || Dt("dismissableLayer.pointerDownOutside", i, p, {
                    discrete: !0
                  })
                };
                if (gt(f, "handleAndDispatchPointerDownOutsideEvent"), !a(s.target)) return r.removeEventListener("click", u.current), e(), void(d.current = !1);
                const p = {
                  originalEvent: s
                };
                l.current = !0, o.current = n && 0 === s.button, c.current.clear(), n && 0 === s.button ? (r.removeEventListener("click", u.current), u.current = f, r.addEventListener("click", u.current, {
                  once: !0
                })) : f()
              } else r.removeEventListener("click", u.current), e();
              d.current = !1
            }, "handlePointerDown"),
            v = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
          for (const e of v) r.addEventListener(e, f, !0), r.addEventListener(e, p);
          const m = window.setTimeout(() => {
            r.addEventListener("pointerdown", h)
          }, 0);
          return () => {
            window.clearTimeout(m), r.removeEventListener("pointerdown", h), r.removeEventListener("click", u.current);
            for (const e of v) r.removeEventListener(e, f, !0), r.removeEventListener(e, p)
          }
        }, [r, i, n, o, s, a]), {
          onPointerDownCapture: gt(() => d.current = !0, "onPointerDownCapture")
        }
      }

      function Rt(e, t = globalThis?.document) {
        const r = (0, yt.c)(e),
          n = k.useRef(!1);
        return k.useEffect(() => {
          const e = gt(e => {
            e.target && !n.current && Dt("dismissableLayer.focusOutside", r, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, r]), {
          onFocusCapture: gt(() => n.current = !0, "onFocusCapture"),
          onBlurCapture: gt(() => n.current = !1, "onBlurCapture")
        }
      }

      function St() {
        const e = new CustomEvent(Ct);
        document.dispatchEvent(e)
      }

      function Dt(e, t, r, {
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
        }), n ? (0, mt.hO)(o, s) : o.dispatchEvent(s)
      }
      gt(Pt, "usePointerDownOutside"), gt(Rt, "useFocusOutside"), gt(St, "dispatchUpdate"), gt(Dt, "handleAndDispatchCustomEvent");
      var Nt = xt,
        It = _t,
        Tt = r(88918),
        kt = r(53213),
        zt = r(60853),
        Et = Object.defineProperty,
        Lt = (e, t) => Et(e, "name", {
          value: t,
          configurable: !0
        }),
        Vt = k.forwardRef(Lt(function(e, t) {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, I.jsx)(mt.sG.svg, {
            ...s,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, I.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }, "Arrow")),
        At = Vt,
        Mt = r(9608),
        Ht = r(7078),
        Ft = Object.defineProperty,
        Bt = (e, t) => Ft(e, "name", {
          value: t,
          configurable: !0
        }),
        Zt = "Popper",
        [qt, Xt] = (0, vt.A)(Zt),
        [Gt, Kt] = qt(Zt),
        Wt = Bt(e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = k.useState(null), [s, a] = k.useState(void 0);
          return (0, I.jsx)(Gt, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: s,
            setPlacementState: a,
            children: r
          })
        }, "Popper"),
        Ut = k.forwardRef(Bt(function(e, t) {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = Kt("PopperAnchor", r), a = k.useRef(null), i = s.onAnchorChange, d = k.useCallback(e => {
            a.current = e, e && i(e)
          }, [i]), l = (0, ht.s)(t, d), c = k.useRef(null);
          k.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = s.placementState && or(s.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, I.jsx)(mt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        }, "PopperAnchor")),
        Yt = "PopperContent",
        [$t, Qt] = qt(Yt),
        Jt = k.forwardRef(Bt(function(e, t) {
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
            onPlaced: h,
            ...v
          } = e, m = Kt(Yt, r), [y, b] = k.useState(null), g = (0, ht.s)(t, b), [C, w] = k.useState(null), x = (0, Ht.X)(C), _ = x?.width ?? 0, j = x?.height ?? 0, O = n + ("center" !== s ? "-" + s : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], S = R.length > 0, D = {
            padding: P,
            boundary: R.filter(rr),
            altBoundary: S
          }, {
            refs: N,
            floatingStyles: T,
            placement: z,
            isPositioned: E,
            middlewareData: L
          } = (0, kt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: Bt((...e) => (0, zt.ll)(...e, {
              animationFrame: "always" === p
            }), "whileElementsMounted"),
            elements: {
              reference: m.anchor
            },
            middleware: [(0, kt.cY)({
              mainAxis: o + j,
              alignmentAxis: a
            }), d && (0, kt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, kt.ER)() : void 0,
              ...D
            }), d && (0, kt.UU)({
              ...D
            }), (0, kt.Ej)({
              ...D,
              apply: Bt(({
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
              }, "apply")
            }), C && (0, kt.UE)({
              element: C,
              padding: i
            }), nr({
              arrowWidth: _,
              arrowHeight: j
            }), f && (0, kt.jD)({
              strategy: "referenceHidden",
              ...D,
              boundary: S ? D.boundary : void 0
            })]
          }), V = m.setPlacementState;
          (0, Mt.N)(() => (V(z), () => {
            V(void 0)
          }), [z, V]);
          const [A, M] = or(z), H = (0, yt.c)(h);
          (0, Mt.N)(() => {
            E && H?.()
          }, [E, H]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            Z = 0 !== L.arrow?.centerOffset,
            [q, X] = k.useState();
          return (0, Mt.N)(() => {
            y && X(window.getComputedStyle(y).zIndex)
          }, [y]), (0, I.jsx)("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...T,
              transform: E ? T.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: q,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, I.jsx)($t, {
              scope: r,
              placedSide: A,
              placedAlign: M,
              onArrowChange: w,
              arrowX: F,
              arrowY: B,
              shouldHideArrow: Z,
              children: (0, I.jsx)(mt.sG.div, {
                "data-side": A,
                "data-align": M,
                ...v,
                ref: g,
                style: {
                  ...v.style,
                  animation: E ? v.style?.animation : "none"
                }
              })
            })
          })
        }, "PopperContent")),
        er = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        tr = k.forwardRef(Bt(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Qt("PopperArrow", r), s = er[o.placedSide];
          return (0, I.jsx)("span", {
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
            children: (0, I.jsx)(At, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function rr(e) {
        return null !== e
      }
      Bt(rr, "isNotNull");
      var nr = Bt(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, a = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [d, l] = or(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [l], u = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + i / 2;
          let p = "",
            h = "";
          return "bottom" === d ? (p = s ? c : `${u}px`, h = -i + "px") : "top" === d ? (p = s ? c : `${u}px`, h = `${n.floating.height+i}px`) : "right" === d ? (p = -i + "px", h = s ? c : `${f}px`) : "left" === d && (p = `${n.floating.width+i}px`, h = s ? c : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      }), "transformOrigin");

      function or(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      Bt(or, "getSideAndAlignFromPlacement");
      var sr = Wt,
        ar = Ut,
        ir = Jt,
        dr = tr,
        lr = r(84017),
        cr = Object.defineProperty,
        ur = (e, t) => cr(e, "name", {
          value: t,
          configurable: !0
        }),
        fr = k.forwardRef(ur(function(e, t) {
          const {
            container: r,
            ...n
          } = e, [o, s] = k.useState(!1);
          (0, Mt.N)(() => s(!0), []);
          const a = r || o && globalThis?.document?.body;
          return a ? lr.createPortal((0, I.jsx)(mt.sG.div, {
            ...n,
            ref: t
          }), a) : null
        }, "Portal")),
        pr = Object.defineProperty,
        hr = (e, t) => pr(e, "name", {
          value: t,
          configurable: !0
        });

      function vr(e, t) {
        return k.useReducer((e, r) => t[e][r] ?? e, e)
      }
      hr(vr, "useStateMachine");
      var mr = hr(e => {
        const {
          present: t,
          children: r
        } = e, n = yr(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : k.Children.only(r), s = gr(n.ref, wr(o));
        return "function" == typeof r || n.isPresent ? k.cloneElement(o, {
          ref: s
        }) : null
      }, "Presence");

      function yr(e) {
        const [t, r] = k.useState(), n = k.useRef(null), o = k.useRef(e), s = k.useRef("none"), a = k.useRef(void 0), i = e ? "mounted" : "unmounted", [d, l] = vr(i, {
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
        return k.useEffect(() => {
          "mounted" === d ? (s.current = a.current ?? Cr(n.current), a.current = void 0) : s.current = "none"
        }, [d]), (0, Mt.N)(() => {
          const t = n.current,
            r = o.current;
          if (r !== e) {
            const n = s.current,
              i = Cr(t);
            e ? (a.current = i, l("MOUNT")) : l("none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
          }
        }, [e, l]), (0, Mt.N)(() => {
          if (t) {
            let e;
            const r = t.ownerDocument.defaultView ?? window,
              a = hr(s => {
                const a = Cr(n.current).includes(CSS.escape(s.animationName));
                if (s.target === t && a && (l("ANIMATION_END"), !o.current)) {
                  const n = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                  })
                }
              }, "handleAnimationEnd"),
              i = hr(e => {
                e.target === t && (s.current = Cr(n.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
              r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
            }
          }
          l("ANIMATION_END")
        }, [t, l]), {
          isPresent: ["mounted", "unmountSuspended"].includes(d),
          ref: k.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              n.current = t, a.current = Cr(t)
            } else n.current = null;
            r(e)
          }, [])
        }
      }

      function br(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function gr(...e) {
        const t = k.useRef(e);
        return t.current = e, k.useCallback(e => {
          const r = t.current;
          let n = !1;
          const o = r.map(t => {
            const r = br(t, e);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let e = 0; e < o.length; e++) {
              const t = o[e];
              "function" == typeof t ? t() : br(r[e], null)
            }
          }
        }, [])
      }

      function Cr(e) {
        return e?.animationName || "none"
      }

      function wr(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
      }
      hr(yr, "usePresence"), hr(br, "setRef"), hr(gr, "useStableComposedRefs"), hr(Cr, "getAnimationName"), hr(wr, "getElementRef");
      var xr = r(93237),
        _r = r(15782),
        jr = r(94299),
        Or = Object.defineProperty,
        Pr = (e, t) => Or(e, "name", {
          value: t,
          configurable: !0
        }),
        [Rr, Sr] = (0, vt.A)("Tooltip", [Xt]),
        Dr = Xt(),
        Nr = 700,
        Ir = "tooltip.open",
        [Tr, kr] = Rr("TooltipProvider"),
        zr = Pr(e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Nr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = k.useRef(!0), i = k.useRef(!1), d = k.useRef(0);
          return k.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, I.jsx)(Tr, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: k.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), a.current = !1)
            }, [n]),
            onClose: k.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: k.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        }, "TooltipProvider"),
        Er = "Tooltip",
        [Lr, Vr] = Rr(Er),
        Ar = Pr(e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = kr(Er, e.__scopeTooltip), l = Dr(t), [c, u] = k.useState(null), [f, p] = k.useState(void 0), h = (0, Tt.B)(), v = k.useRef(0), m = a ?? d.disableHoverableContent, y = i ?? d.delayDuration, b = k.useRef(!1), [g, C] = (0, _r.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: Pr(e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Ir))) : d.onClose(), s?.(e)
            }, "onChange"),
            caller: Er
          }), w = k.useMemo(() => g ? b.current ? "delayed-open" : "instant-open" : "closed", [g]), x = k.useCallback(() => {
            window.clearTimeout(v.current), v.current = 0, b.current = !1, C(!0)
          }, [C]), _ = k.useCallback(() => {
            window.clearTimeout(v.current), v.current = 0, C(!1)
          }, [C]), j = k.useCallback(() => {
            window.clearTimeout(v.current), v.current = window.setTimeout(() => {
              b.current = !0, C(!0), v.current = 0
            }, y)
          }, [y, C]);
          k.useEffect(() => () => {
            v.current && (window.clearTimeout(v.current), v.current = 0)
          }, []);
          const O = f ?? h;
          return (0, I.jsx)(sr, {
            ...l,
            children: (0, I.jsx)(Lr, {
              scope: t,
              contentId: O,
              setContentId: p,
              open: g,
              stateAttribute: w,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: k.useCallback(() => {
                d.isOpenDelayedRef.current ? j() : x()
              }, [d.isOpenDelayedRef, j, x]),
              onTriggerLeave: k.useCallback(() => {
                m ? _() : (window.clearTimeout(v.current), v.current = 0)
              }, [_, m]),
              onOpen: x,
              onClose: _,
              disableHoverableContent: m,
              children: r
            })
          })
        }, "Tooltip"),
        Mr = "TooltipTrigger",
        Hr = k.forwardRef(Pr(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Vr(Mr, r), s = kr(Mr, r), a = Dr(r), i = k.useRef(null), d = (0, ht.s)(t, i, o.onTriggerChange), l = k.useRef(!1), c = k.useRef(!1), u = k.useCallback(() => l.current = !1, []);
          return k.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, I.jsx)(ar, {
            asChild: !0,
            ...a,
            children: (0, I.jsx)(mt.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, pt.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, pt.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, pt.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, pt.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, pt.mK)(e.onBlur, o.onClose),
              onClick: (0, pt.mK)(e.onClick, o.onClose)
            })
          })
        }, "TooltipTrigger")),
        Fr = "TooltipPortal",
        [Br, Zr] = Rr(Fr, {
          forceMount: void 0
        }),
        qr = Pr(e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Vr(Fr, t);
          return (0, I.jsx)(Br, {
            scope: t,
            forceMount: r,
            children: (0, I.jsx)(mr, {
              present: r || s.open,
              children: (0, I.jsx)(fr, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        }, "TooltipPortal"),
        Xr = "TooltipContent",
        Gr = k.forwardRef(Pr(function(e, t) {
          const r = Zr(Xr, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = Vr(Xr, e.__scopeTooltip);
          return (0, I.jsx)(mr, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, I.jsx)(Ur, {
              side: o,
              ...s,
              ref: t
            }) : (0, I.jsx)(Kr, {
              side: o,
              ...s,
              ref: t
            })
          })
        }, "TooltipContent")),
        Kr = k.forwardRef(Pr(function(e, t) {
          const r = Vr(Xr, e.__scopeTooltip),
            n = kr(Xr, e.__scopeTooltip),
            o = k.useRef(null),
            s = (0, ht.s)(t, o),
            [a, i] = k.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = k.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = k.useCallback((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = tn([...Qr(n, $r(n, r.getBoundingClientRect())), ...Jr(t.getBoundingClientRect())]);
              i(o), u(!0)
            }, [u]);
          return k.useEffect(() => () => f(), [f]), k.useEffect(() => {
            if (d && c) {
              const e = Pr(e => p(e, c), "handleTriggerLeave"),
                t = Pr(e => p(e, d), "handleContentLeave");
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), k.useEffect(() => {
            if (a) {
              const e = Pr(e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
                  o = !en(r, a);
                n ? f() : o && (f(), l())
              }, "handleTrackPointerGrace");
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, a, l, f]), (0, I.jsx)(Ur, {
            ...e,
            ref: s
          })
        }, "TooltipContentHoverable")),
        Wr = (0, xr.Dc)("TooltipContent"),
        Ur = k.forwardRef(Pr(function(e, t) {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            id: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...d
          } = e, l = Vr(Xr, r), c = Dr(r), {
            onClose: u
          } = l;
          k.useEffect(() => (document.addEventListener(Ir, u), () => document.removeEventListener(Ir, u)), [u]), k.useEffect(() => {
            if (l.trigger) {
              const e = Pr(e => {
                e.target instanceof Node && e.target.contains(l.trigger) && u()
              }, "handleScroll");
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [l.trigger, u]);
          const {
            setContentId: f
          } = l;
          return (0, Mt.N)(() => (f(s), () => {
            f(void 0)
          }), [s, f]), (0, I.jsx)(xt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, I.jsxs)(ir, {
              "data-state": l.stateAttribute,
              role: o ? void 0 : "tooltip",
              id: o ? void 0 : l.contentId,
              ...c,
              ...d,
              ref: t,
              style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, I.jsx)(Wr, {
                children: n
              }), o ? (0, I.jsx)(jr.bL, {
                id: l.contentId,
                role: "tooltip",
                children: o
              }) : null]
            })
          })
        }, "TooltipContentImpl")),
        Yr = k.forwardRef(Pr(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Dr(r);
          return (0, I.jsx)(dr, {
            ...o,
            ...n,
            ref: t
          })
        }, "TooltipArrow"));

      function $r(e, t) {
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
      }

      function Qr(e, t, r = 5) {
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
      }

      function Jr(e) {
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
      }

      function en(e, t) {
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
      }

      function tn(e) {
        const t = e.slice();
        return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), rn(t)
      }

      function rn(e) {
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
      }
      Pr($r, "getExitSideFromRect"), Pr(Qr, "getPaddedExitPoints"), Pr(Jr, "getPointsFromRect"), Pr(en, "isPointInPolygon"), Pr(tn, "getHull"), Pr(rn, "getHullPresorted");
      var nn = zr,
        on = Ar,
        sn = Hr,
        an = qr,
        dn = Gr,
        ln = Yr;
      const cn = (0, k.createContext)(null);

      function un() {
        const e = (0, k.useContext)(cn);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const fn = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          isDisabled: o,
          ...s
        }) => {
          const [a = !1, i] = (0, _e.ic)({
            defaultProp: r,
            prop: !o && s.isOpen,
            onChange: n
          });
          return (0, I.jsx)(nn, {
            delayDuration: t,
            children: (0, I.jsx)(cn.Provider, {
              value: {
                isOpen: a,
                ...s
              },
              children: (0, I.jsx)(on, {
                open: a,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        pn = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, I.jsx)(sn, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        hn = (0, k.forwardRef)(({
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
          } = un(), c = (0, _e.jt)(), u = (0, ft.CS)(dn), f = (0, ft.pn)(l, {
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
            config: ft.$W.stiff,
            immediate: c
          }), p = (0, q.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: a,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: s,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, I.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        vn = (0, k.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, q.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, I.jsx)(ln, {
            ...r,
            ref: t
          })
        }),
        mn = an;
      var yn = r(76844),
        bn = r(12430),
        gn = r(19046),
        Cn = Object.defineProperty,
        wn = (e, t) => Cn(e, "name", {
          value: t,
          configurable: !0
        });

      function xn(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, vt.A)(t),
          [o, s] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          a = wn(e => {
            const {
              scope: t,
              children: r
            } = e, n = k.useRef(null), s = k.useRef(new Map).current;
            return (0, I.jsx)(o, {
              scope: t,
              itemMap: s,
              collectionRef: n,
              children: r
            })
          }, "CollectionProvider");
        a.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, xr.TL)(i),
          l = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = s(i, r), a = (0, ht.s)(t, o.collectionRef);
            return (0, I.jsx)(d, {
              ref: a,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, xr.TL)(c),
          p = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, a = k.useRef(null), i = (0, ht.s)(t, a), d = s(c, r);
            return k.useEffect(() => (d.itemMap.set(a, {
              ref: a,
              ...o
            }), () => {
              d.itemMap.delete(a)
            })), (0, I.jsx)(f, {
              [u]: "",
              ref: i,
              children: n
            })
          });

        function h(t) {
          const r = s(e + "CollectionConsumer", t);
          return k.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }
        return p.displayName = c, wn(h, "useCollection"), [{
          Provider: a,
          Slot: l,
          ItemSlot: p
        }, h, n]
      }
      wn(xn, "createCollection");
      var _n = new WeakMap,
        jn = class e extends Map {
          static {
            wn(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], _n.set(this, !0)
          }
          set(e, t) {
            return _n.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, r) {
            const n = this.has(t),
              o = this.#e.length,
              s = Rn(e);
            let a = s >= 0 ? s : o + s;
            const i = a < 0 || a >= o ? -1 : a;
            if (i === this.size || n && i === this.size - 1 || -1 === i) return this.set(t, r), this;
            const d = this.size + (n ? 0 : 1);
            s < 0 && a++;
            const l = [...this.#e];
            let c, u = !1;
            for (let e = a; e < d; e++)
              if (a === e) {
                let o = l[e];
                l[e] === t && (o = l[e + 1]), n && this.delete(t), c = this.get(o), this.set(t, r)
              } else {
                u || l[e - 1] !== t || (u = !0);
                const r = l[u ? e : e - 1],
                  n = c;
                c = this.get(r), this.delete(r), this.set(r, n)
              } return this
          }
          with(t, r, n) {
            const o = new e(this);
            return o.insert(t, r, n), o
          }
          before(e) {
            const t = this.#e.indexOf(e) - 1;
            if (!(t < 0)) return this.entryAt(t)
          }
          setBefore(e, t, r) {
            const n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n, t, r)
          }
          after(e) {
            let t = this.#e.indexOf(e);
            if (t = -1 === t || t === this.size - 1 ? -1 : t + 1, -1 !== t) return this.entryAt(t)
          }
          setAfter(e, t, r) {
            const n = this.#e.indexOf(e);
            return -1 === n ? this : this.insert(n + 1, t, r)
          }
          first() {
            return this.entryAt(0)
          }
          last() {
            return this.entryAt(-1)
          }
          clear() {
            return this.#e = [], super.clear()
          }
          delete(e) {
            const t = super.delete(e);
            return t && this.#e.splice(this.#e.indexOf(e), 1), t
          }
          deleteAt(e) {
            const t = this.keyAt(e);
            return void 0 !== t && this.delete(t)
          }
          at(e) {
            const t = On(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = On(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return On(this.#e, e)
          }
          from(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
          }
          keyFrom(e, t) {
            const r = this.indexOf(e);
            if (-1 === r) return;
            let n = r + t;
            return n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
          }
          find(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return n;
              r++
            }
          }
          findIndex(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return r;
              r++
            }
            return -1
          }
          filter(t, r) {
            const n = [];
            let o = 0;
            for (const e of this) Reflect.apply(t, r, [e, o, this]) && n.push(e), o++;
            return new e(n)
          }
          map(t, r) {
            const n = [];
            let o = 0;
            for (const e of this) n.push([e[0], Reflect.apply(t, r, [e, o, this])]), o++;
            return new e(n)
          }
          reduce(...e) {
            const [t, r] = e;
            let n = 0,
              o = r ?? this.at(0);
            for (const r of this) o = 0 === n && 1 === e.length ? r : Reflect.apply(t, this, [o, r, n, this]), n++;
            return o
          }
          reduceRight(...e) {
            const [t, r] = e;
            let n = r ?? this.at(-1);
            for (let r = this.size - 1; r >= 0; r--) {
              const o = this.at(r);
              n = r === this.size - 1 && 1 === e.length ? o : Reflect.apply(t, this, [n, o, r, this])
            }
            return n
          }
          toSorted(t) {
            const r = [...this.entries()].sort(t);
            return new e(r)
          }
          toReversed() {
            const t = new e;
            for (let e = this.size - 1; e >= 0; e--) {
              const r = this.keyAt(e),
                n = this.get(r);
              t.set(r, n)
            }
            return t
          }
          toSpliced(...t) {
            const r = [...this.entries()];
            return r.splice(...t), new e(r)
          }
          slice(t, r) {
            const n = new e;
            let o = this.size - 1;
            if (void 0 === t) return n;
            t < 0 && (t += this.size), void 0 !== r && r > 0 && (o = r - 1);
            for (let e = t; e <= o; e++) {
              const t = this.keyAt(e),
                r = this.get(t);
              n.set(t, r)
            }
            return n
          }
          every(e, t) {
            let r = 0;
            for (const n of this) {
              if (!Reflect.apply(e, t, [n, r, this])) return !1;
              r++
            }
            return !0
          }
          some(e, t) {
            let r = 0;
            for (const n of this) {
              if (Reflect.apply(e, t, [n, r, this])) return !0;
              r++
            }
            return !1
          }
        };

      function On(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const r = Pn(e, t);
        return -1 === r ? void 0 : e[r]
      }

      function Pn(e, t) {
        const r = e.length,
          n = Rn(t),
          o = n >= 0 ? n : r + n;
        return o < 0 || o >= r ? -1 : o
      }

      function Rn(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function Sn(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        if (null == e || null == t) return !1;
        const r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (const n of r) {
          if (!Object.prototype.hasOwnProperty.call(t, n)) return !1;
          if (e[n] !== t[n]) return !1
        }
        return !0
      }

      function Dn(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function Nn(e, t) {
        return e[1].element && t[1].element ? Dn(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function In(e) {
        return new MutationObserver(t => {
          for (const r of t)
            if ("childList" === r.type) return void e()
        })
      }
      wn(On, "at"), wn(Pn, "toSafeIndex"), wn(Rn, "toSafeInteger"), wn(function(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, vt.A)(t),
          [o, s] = r(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new jn,
            setItemMap: wn(() => {}, "setItemMap")
          }),
          a = wn(({
            state: e,
            ...t
          }) => e ? (0, I.jsx)(d, {
            ...t,
            state: e
          }) : (0, I.jsx)(i, {
            ...t
          }), "CollectionProvider");
        a.displayName = t;
        const i = wn(e => {
          const t = m();
          return (0, I.jsx)(d, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        i.displayName = t + "Init";
        const d = wn(e => {
          const {
            scope: t,
            children: r,
            state: n
          } = e, s = k.useRef(null), [a, i] = k.useState(null), d = (0, ht.s)(s, i), [l, c] = n;
          return k.useEffect(() => {
            if (!a) return;
            const e = In(() => {});
            return e.observe(a, {
              childList: !0,
              subtree: !0
            }), () => {
              e.disconnect()
            }
          }, [a]), (0, I.jsx)(o, {
            scope: t,
            itemMap: l,
            setItemMap: c,
            collectionRef: d,
            collectionRefObject: s,
            collectionElement: a,
            children: r
          })
        }, "CollectionProviderImpl");
        d.displayName = t + "Impl";
        const l = e + "CollectionSlot",
          c = (0, xr.TL)(l),
          u = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = s(l, r), a = (0, ht.s)(t, o.collectionRef);
            return (0, I.jsx)(c, {
              ref: a,
              children: n
            })
          });
        u.displayName = l;
        const f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          h = (0, xr.TL)(f),
          v = k.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, a = k.useRef(null), [i, d] = k.useState(null), l = (0, ht.s)(t, a, d), c = s(f, r), {
              setItemMap: u
            } = c, v = k.useRef(o);
            Sn(v.current, o) || (v.current = o);
            const m = v.current;
            return k.useEffect(() => {
              const e = m;
              return u(t => i ? t.has(i) ? t.set(i, {
                ...e,
                element: i
              }).toSorted(Nn) : (t.set(i, {
                ...e,
                element: i
              }), t.toSorted(Nn)) : t), () => {
                u(e => i && e.has(i) ? (e.delete(i), new jn(e)) : e)
              }
            }, [i, m, u]), (0, I.jsx)(h, {
              [p]: "",
              ref: l,
              children: n
            })
          });

        function m() {
          return k.useState(new jn)
        }

        function y(t) {
          const {
            itemMap: r
          } = s(e + "CollectionConsumer", t);
          return r
        }
        return v.displayName = f, wn(m, "useInitCollection"), wn(y, "useCollection"), [{
          Provider: a,
          Slot: u,
          ItemSlot: v
        }, {
          createCollectionScope: n,
          useCollection: y,
          useInitCollection: m
        }]
      }, "createCollection"), wn(Sn, "shallowEqual"), wn(Dn, "isElementPreceding"), wn(Nn, "sortByDocumentPosition"), wn(In, "getChildListObserver");
      var Tn = Object.defineProperty,
        kn = (e, t) => Tn(e, "name", {
          value: t,
          configurable: !0
        }),
        zn = ["PageUp", "PageDown"],
        En = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Ln = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Vn = "Slider",
        [An, Mn, Hn] = xn(Vn),
        [Fn, Bn] = (0, vt.A)(Vn, [Hn]),
        [Zn, qn] = Fn(Vn),
        Xn = k.forwardRef(kn(function(e, t) {
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
            onValueChange: u = kn(() => {}, "onValueChange"),
            onValueCommit: f = kn(() => {}, "onValueCommit"),
            inverted: p = !1,
            form: h,
            ...v
          } = e, m = k.useRef(new Set), y = k.useRef(0), b = k.useRef(!1), g = "horizontal" === a ? Wn : Un, [C, w] = k.useState(null), x = (0, ht.s)(t, w), [_ = [], j] = (0, _r.i)({
            prop: c,
            defaultProp: l,
            onChange: kn(e => {
              const t = [...m.current];
              t[y.current]?.focus({
                preventScroll: !0,
                focusVisible: b.current
              }), b.current = !1, u(e)
            }, "onChange")
          }), O = k.useRef(_), P = k.useRef(_);

          function R(e) {
            N(e, uo(_, e))
          }

          function S(e) {
            N(e, y.current)
          }

          function D() {
            String(_) !== String(O.current) && f(_)
          }

          function N(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = mo(s),
              i = yo(Math.round((e - n) / s) * s + n, a),
              l = (0, yn.q)(i, [n, o]);
            j((e = []) => {
              const n = io(e, l, t);
              if (ho(n, d * s)) {
                y.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return k.useEffect(() => {
            const e = h ? C?.ownerDocument.getElementById(h) : C?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = kn(() => j(P.current), "reset");
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [C, h, j]), kn(R, "handleSlideStart"), kn(S, "handleSlideMove"), kn(D, "handleSlideEnd"), kn(N, "updateValues"), (0, I.jsx)(Zn, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: m.current,
            values: _,
            orientation: a,
            form: h,
            children: (0, I.jsx)(An.Provider, {
              scope: e.__scopeSlider,
              children: (0, I.jsx)(An.Slot, {
                scope: e.__scopeSlider,
                children: (0, I.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...v,
                  ref: x,
                  onPointerDown: (0, pt.mK)(v.onPointerDown, () => {
                    i || (O.current = _, b.current = !1)
                  }),
                  min: n,
                  max: o,
                  inverted: p,
                  onSlideStart: i ? void 0 : R,
                  onSlideMove: i ? void 0 : S,
                  onSlideEnd: i ? void 0 : D,
                  onHomeKeyDown: () => {
                    i || (b.current = !0, N(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (b.current = !0, N(o, _.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      b.current = !0;
                      const r = zn.includes(e.key) || e.shiftKey && En.includes(e.key) ? 10 : 1,
                        o = y.current;
                      N(bo(_[o], {
                        min: n,
                        step: s,
                        direction: t,
                        multiplier: r
                      }), o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }, "Slider")),
        [Gn, Kn] = Fn(Vn, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        Wn = k.forwardRef(kn(function(e, t) {
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
          } = e, [u, f] = k.useState(null), p = (0, ht.s)(t, f), h = k.useRef(void 0), v = (0, bn.jH)(o), m = "ltr" === v, y = m && !s || !m && s;

          function b(e) {
            const t = h.current || u.getBoundingClientRect(),
              o = vo([0, t.width], y ? [r, n] : [n, r]);
            return h.current = t, o(e - t.left)
          }
          return kn(b, "getValueFromPointer"), (0, I.jsx)(Gn, {
            scope: e.__scopeSlider,
            startEdge: y ? "left" : "right",
            endEdge: y ? "right" : "left",
            direction: y ? 1 : -1,
            size: "width",
            children: (0, I.jsx)(Yn, {
              dir: v,
              "data-orientation": "horizontal",
              ...c,
              ref: p,
              style: {
                ...c.style,
                "--radix-slider-thumb-transform": "translateX(-50%)"
              },
              onSlideStart: e => {
                const t = b(e.clientX);
                a?.(t)
              },
              onSlideMove: e => {
                const t = b(e.clientX);
                i?.(t)
              },
              onSlideEnd: () => {
                h.current = void 0, d?.()
              },
              onStepKeyDown: e => {
                const t = Ln[y ? "from-left" : "from-right"].includes(e.key);
                l?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderHorizontal")),
        Un = k.forwardRef(kn(function(e, t) {
          const {
            min: r,
            max: n,
            inverted: o,
            onSlideStart: s,
            onSlideMove: a,
            onSlideEnd: i,
            onStepKeyDown: d,
            ...l
          } = e, c = k.useRef(null), u = (0, ht.s)(t, c), f = k.useRef(void 0), p = !o;

          function h(e) {
            const t = f.current || c.current.getBoundingClientRect(),
              o = vo([0, t.height], p ? [n, r] : [r, n]);
            return f.current = t, o(e - t.top)
          }
          return kn(h, "getValueFromPointer"), (0, I.jsx)(Gn, {
            scope: e.__scopeSlider,
            startEdge: p ? "bottom" : "top",
            endEdge: p ? "top" : "bottom",
            size: "height",
            direction: p ? 1 : -1,
            children: (0, I.jsx)(Yn, {
              "data-orientation": "vertical",
              ...l,
              ref: u,
              style: {
                ...l.style,
                "--radix-slider-thumb-transform": "translateY(50%)"
              },
              onSlideStart: e => {
                const t = h(e.clientY);
                s?.(t)
              },
              onSlideMove: e => {
                const t = h(e.clientY);
                a?.(t)
              },
              onSlideEnd: () => {
                f.current = void 0, i?.()
              },
              onStepKeyDown: e => {
                const t = Ln[p ? "from-bottom" : "from-top"].includes(e.key);
                d?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderVertical")),
        Yn = k.forwardRef(kn(function(e, t) {
          const {
            __scopeSlider: r,
            onSlideStart: n,
            onSlideMove: o,
            onSlideEnd: s,
            onHomeKeyDown: a,
            onEndKeyDown: i,
            onStepKeyDown: d,
            ...l
          } = e, c = qn(Vn, r);
          return (0, I.jsx)(mt.sG.span, {
            ...l,
            ref: t,
            onKeyDown: (0, pt.mK)(e.onKeyDown, e => {
              "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : zn.concat(En).includes(e.key) && (d(e), e.preventDefault())
            }),
            onPointerDown: (0, pt.mK)(e.onPointerDown, e => {
              const t = e.target;
              t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
                preventScroll: !0,
                focusVisible: !1
              }) : n(e)
            }),
            onPointerMove: (0, pt.mK)(e.onPointerMove, e => {
              e.target.hasPointerCapture(e.pointerId) && o(e)
            }),
            onPointerUp: (0, pt.mK)(e.onPointerUp, e => {
              const t = e.target;
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
            })
          })
        }, "SliderImpl")),
        $n = k.forwardRef(kn(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = qn("SliderTrack", r);
          return (0, I.jsx)(mt.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...n,
            ref: t
          })
        }, "SliderTrack")),
        Qn = "SliderRange",
        Jn = k.forwardRef(kn(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = qn(Qn, r), s = Kn(Qn, r), a = k.useRef(null), i = (0, ht.s)(t, a), d = o.values.length, l = o.values.map(e => lo(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, I.jsx)(mt.sG.span, {
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
        }, "SliderRange")),
        [eo, to] = Fn("SliderThumb");

      function ro(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, s = qn("SliderThumbProvider", t), a = Mn(t), [i, d] = k.useState(null), l = k.useMemo(() => i ? a().findIndex(e => e.ref.current === i) : -1, [a, i]), c = (0, Ht.X)(i), u = !i || !!s.form || !!i.closest("form"), f = s.values[l], p = r ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), h = void 0 === f ? 0 : lo(f, s.min, s.max);
        k.useEffect(() => {
          if (i) return s.thumbs.add(i), () => {
            s.thumbs.delete(i)
          }
        }, [i, s.thumbs]);
        const v = {
          value: f,
          name: p,
          form: s.form,
          isFormControl: u,
          index: l,
          thumb: i,
          onThumbChange: d,
          percent: h,
          size: c
        };
        return (0, I.jsx)(eo, {
          scope: t,
          ...v,
          children: go(o) ? o(v) : n
        })
      }
      kn(ro, "SliderThumbProvider");
      var no = "SliderThumbTrigger",
        oo = k.forwardRef(kn(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = qn(no, r), s = Kn(no, r), {
            index: a,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = to(no, r), u = (0, ht.s)(t, c), f = co(a, o.values.length), p = l?.[s.size], h = p ? fo(p, d, s.direction) : 0;
          return (0, I.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${d}% + ${h}px)`
            },
            children: (0, I.jsx)(An.ItemSlot, {
              scope: r,
              children: (0, I.jsx)(mt.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || f,
                "aria-valuemin": o.min,
                "aria-valuenow": i,
                "aria-valuemax": o.max,
                "aria-orientation": o.orientation,
                "data-orientation": o.orientation,
                "data-disabled": o.disabled ? "" : void 0,
                tabIndex: o.disabled ? void 0 : 0,
                ...n,
                ref: u,
                style: void 0 === i ? {
                  display: "none"
                } : e.style,
                onFocus: (0, pt.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = a
                })
              })
            })
          })
        }, "SliderThumbTrigger")),
        so = k.forwardRef(kn(function(e, t) {
          const {
            __scopeSlider: r,
            name: n,
            ...o
          } = e;
          return (0, I.jsx)(ro, {
            __scopeSlider: r,
            name: n,
            internal_do_not_use_render: ({
              index: e,
              isFormControl: n
            }) => (0, I.jsxs)(I.Fragment, {
              children: [(0, I.jsx)(oo, {
                ...o,
                ref: t,
                __scopeSlider: r
              }), n ? (0, I.jsx)(ao, {
                __scopeSlider: r
              }, e) : null]
            })
          })
        }, "SliderThumb")),
        ao = k.forwardRef(kn(function({
          __scopeSlider: e,
          ...t
        }, r) {
          const {
            value: n,
            name: o,
            form: s
          } = to("SliderBubbleInput", e), a = k.useRef(null), i = (0, ht.s)(a, r), d = (0, gn.Z)(n);
          return k.useEffect(() => {
            const e = a.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (d !== n && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, n), e.dispatchEvent(t)
            }
          }, [d, n]), (0, I.jsx)(mt.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: s,
            ...t,
            ref: i,
            defaultValue: n
          })
        }, "SliderBubbleInput"));

      function io(e = [], t, r) {
        const n = [...e];
        return n[r] = t, n.sort((e, t) => e - t)
      }

      function lo(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, yn.q)(n, [0, 100])
      }

      function co(e, t) {
        return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
      }

      function uo(e, t) {
        if (1 === e.length) return 0;
        const r = e.map(e => Math.abs(e - t)),
          n = Math.min(...r);
        return r.indexOf(n)
      }

      function fo(e, t, r) {
        const n = e / 2;
        return (n - vo([0, 50], [0, n])(t) * r) * r
      }

      function po(e) {
        return e.slice(0, -1).map((t, r) => e[r + 1] - t)
      }

      function ho(e, t) {
        if (t > 0) {
          const r = po(e);
          return Math.min(...r) >= t
        }
        return !0
      }

      function vo(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function mo(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function yo(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function bo(e, {
        min: t,
        step: r,
        direction: n,
        multiplier: o
      }) {
        const s = mo(r),
          a = (e - t) / r,
          i = Math.round(a);
        let d;
        return d = yo(i * r + t, s) === yo(e, s) ? i + o * n : n > 0 ? Math.ceil(a) : Math.floor(a), yo(d * r + t, s)
      }

      function go(e) {
        return "function" == typeof e
      }
      kn(io, "getNextSortedValues"), kn(lo, "convertValueToPercentage"), kn(co, "getLabel"), kn(uo, "getClosestValueIndex"), kn(fo, "getThumbInBoundsOffset"), kn(po, "getStepsBetweenValues"), kn(ho, "hasMinStepsBetweenValues"), kn(vo, "linearScale"), kn(mo, "getDecimalCount"), kn(yo, "roundValue"), kn(bo, "getNextStepValue"), kn(go, "isFunction");
      var Co = Object.defineProperty,
        wo = (e, t) => Co(e, "name", {
          value: t,
          configurable: !0
        }),
        xo = "focusScope.autoFocusOnMount",
        _o = "focusScope.autoFocusOnUnmount",
        jo = {
          bubbles: !1,
          cancelable: !0
        },
        Oo = k.forwardRef(wo(function(e, t) {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...a
          } = e, [i, d] = k.useState(null), l = (0, yt.c)(o), c = (0, yt.c)(s), u = k.useRef(null), f = (0, ht.s)(t, d), p = k.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          k.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (p.paused || !i) return;
                  const t = e.target;
                  i.contains(t) ? u.current = t : To(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || To(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && To(i)
                };
              wo(e, "handleFocusIn"), wo(t, "handleFocusOut"), wo(r, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return i && n.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, i, p.paused]), k.useEffect(() => {
            if (i) {
              ko.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(xo, jo);
                i.addEventListener(xo, l), i.dispatchEvent(t), t.defaultPrevented || (Po(Lo(So(i)), {
                  select: !0
                }), document.activeElement === e && To(i))
              }
              return () => {
                i.removeEventListener(xo, l), setTimeout(() => {
                  const t = new CustomEvent(_o, jo);
                  i.addEventListener(_o, c), i.dispatchEvent(t), t.defaultPrevented || To(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(_o, c), ko.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const h = k.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = Ro(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && To(s, {
                select: !0
              })) : (e.preventDefault(), r && To(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, I.jsx)(mt.sG.div, {
            tabIndex: -1,
            ...a,
            ref: f,
            onKeyDown: h
          })
        }, "FocusScope"));

      function Po(e, {
        select: t = !1
      } = {}) {
        const r = document.activeElement;
        for (const n of e)
          if (To(n, {
              select: t
            }), document.activeElement !== r) return
      }

      function Ro(e) {
        const t = So(e);
        return [Do(t, e), Do(t.reverse(), e)]
      }

      function So(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: wo(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Do(e, t) {
        const r = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const n of e)
          if (!(r ? !n.checkVisibility({
              checkVisibilityCSS: !0
            }) : No(n, {
              upTo: t
            }))) return n
      }

      function No(e, {
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

      function Io(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function To(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && Io(e) && t && e.select()
        }
      }
      wo(Po, "focusFirst"), wo(Ro, "getTabbableEdges"), wo(So, "getTabbableCandidates"), wo(Do, "findVisible"), wo(No, "isHidden"), wo(Io, "isSelectableInput"), wo(To, "focus");
      var ko = zo();

      function zo() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Eo(e, t), e.unshift(t)
          },
          remove(t) {
            e = Eo(e, t), e[0]?.resume()
          }
        }
      }

      function Eo(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }

      function Lo(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      wo(zo, "createFocusScopesStack"), wo(Eo, "arrayRemove"), wo(Lo, "removeLinks");
      var Vo = r(86187),
        Ao = r(38100),
        Mo = r(45787),
        Ho = Object.defineProperty,
        Fo = (e, t) => Ho(e, "name", {
          value: t,
          configurable: !0
        }),
        Bo = "Dialog",
        [Zo, qo] = (0, vt.A)(Bo),
        [Xo, Go] = Zo(Bo),
        Ko = Fo(e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !0
          } = e, i = k.useRef(null), d = k.useRef(null), [l, c] = (0, _r.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Bo
          }), [u, f] = k.useState(0), [p, h] = k.useState(0);
          return (0, I.jsx)(Xo, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Tt.B)(),
            titleId: (0, Tt.B)(),
            descriptionId: (0, Tt.B)(),
            titlePresent: u > 0,
            descriptionPresent: p > 0,
            setTitleCount: f,
            setDescriptionCount: h,
            open: l,
            onOpenChange: c,
            onOpenToggle: k.useCallback(() => c(e => !e), [c]),
            modal: a,
            children: r
          })
        }, "Dialog"),
        Wo = k.forwardRef(Fo(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Go("DialogTrigger", r), s = (0, ht.s)(t, o.triggerRef);
          return (0, I.jsx)(mt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": us(o.open),
            ...n,
            ref: s,
            onClick: (0, pt.mK)(e.onClick, o.onOpenToggle)
          })
        }, "DialogTrigger")),
        Uo = "DialogPortal",
        [Yo, $o] = Zo(Uo, {
          forceMount: void 0
        }),
        Qo = Fo(e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Go(Uo, t);
          return (0, I.jsx)(Yo, {
            scope: t,
            forceMount: r,
            children: k.Children.map(n, e => (0, I.jsx)(mr, {
              present: r || s.open,
              children: (0, I.jsx)(fr, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        Jo = "DialogOverlay",
        es = k.forwardRef(Fo(function(e, t) {
          const r = $o(Jo, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Go(Jo, e.__scopeDialog);
          return s.modal ? (0, I.jsx)(mr, {
            present: n || s.open,
            children: (0, I.jsx)(rs, {
              ...o,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        ts = (0, xr.TL)("DialogOverlay.RemoveScroll"),
        rs = k.forwardRef(Fo(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Go(Jo, r), s = jt(), a = (0, ht.s)(t, s);
          return (0, I.jsx)(Ao.A, {
            as: ts,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, I.jsx)(mt.sG.div, {
              "data-state": us(o.open),
              ...n,
              ref: a,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        ns = "DialogContent",
        os = k.forwardRef(Fo(function(e, t) {
          const r = $o(ns, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Go(ns, e.__scopeDialog);
          return (0, I.jsx)(mr, {
            present: n || s.open,
            children: s.modal ? (0, I.jsx)(ss, {
              ...o,
              ref: t
            }) : (0, I.jsx)(as, {
              ...o,
              ref: t
            })
          })
        }, "DialogContent")),
        ss = k.forwardRef(Fo(function(e, t) {
          const r = Go(ns, e.__scopeDialog),
            n = k.useRef(null),
            o = (0, ht.s)(t, r.contentRef, n);
          return k.useEffect(() => {
            const e = n.current;
            if (e) return (0, Mo.Eq)(e)
          }, []), (0, I.jsx)(is, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, pt.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, pt.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, pt.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        as = k.forwardRef(Fo(function(e, t) {
          const r = Go(ns, e.__scopeDialog),
            n = k.useRef(!1),
            o = k.useRef(!1);
          return (0, I.jsx)(is, {
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
        }, "DialogContentNonModal")),
        is = k.forwardRef(Fo(function(e, t) {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...a
          } = e, i = Go(ns, r);
          return (0, Vo.Oh)(), (0, I.jsx)(I.Fragment, {
            children: (0, I.jsx)(Oo, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, I.jsx)(xt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionPresent ? i.descriptionId : void 0,
                "aria-labelledby": i.titlePresent ? i.titleId : void 0,
                "data-state": us(i.open),
                ...a,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        ds = k.forwardRef(Fo(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Go("DialogTitle", r), {
            setTitleCount: s
          } = o;
          return (0, Mt.N)(() => (s(e => e + 1), () => s(e => e - 1)), [s]), (0, I.jsx)(mt.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        }, "DialogTitle")),
        ls = k.forwardRef(Fo(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Go("DialogDescription", r), {
            setDescriptionCount: s
          } = o;
          return (0, Mt.N)(() => (s(e => e + 1), () => s(e => e - 1)), [s]), (0, I.jsx)(mt.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        }, "DialogDescription")),
        cs = k.forwardRef(Fo(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Go("DialogClose", r);
          return (0, I.jsx)(mt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, pt.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "DialogClose"));

      function us(e) {
        return e ? "open" : "closed"
      }
      Fo(us, "getState");
      const fs = (0, k.createContext)({
          triggerRef: (0, k.createRef)(),
          triggerBorderRef: (0, k.createRef)(),
          thumbnailRef: (0, k.createRef)(),
          openIconRef: (0, k.createRef)(),
          overlayRef: (0, k.createRef)(),
          contentRef: (0, k.createRef)(),
          containerRef: (0, k.createRef)(),
          imageRef: (0, k.createRef)(),
          placeholderRef: (0, k.createRef)(),
          zoomPanRef: (0, k.createRef)(),
          captionRef: (0, k.createRef)(),
          controlsRef: (0, k.createRef)(),
          closeRef: (0, k.createRef)(),
          zoomRef: (0, k.createRef)(),
          zoomInRef: (0, k.createRef)(),
          zoomSliderRef: (0, k.createRef)(),
          zoomOutRef: (0, k.createRef)(),
          resetRef: (0, k.createRef)(),
          downloadRef: (0, k.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        ps = ({
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
          const f = (0, G.Ym)(),
            p = (0, _e.rl)(),
            h = (0, k.useRef)(null),
            v = (0, k.useRef)(null),
            m = (0, k.useRef)(null),
            y = (0, k.useRef)(null),
            b = (0, k.useRef)(null),
            g = (0, k.useRef)(null),
            C = (0, k.useRef)(null),
            w = (0, k.useRef)(null),
            x = (0, k.useRef)(null),
            _ = (0, k.useRef)(null),
            j = (0, k.useRef)(null),
            O = (0, k.useRef)(null),
            P = (0, k.useRef)(null),
            R = (0, k.useRef)(null),
            S = (0, k.useRef)(null),
            D = (0, k.useRef)(null),
            N = (0, k.useRef)(null),
            T = (0, k.useRef)(null),
            z = (0, k.useRef)(null),
            [E = !1, L] = (0, _e.ic)({
              prop: t || n,
              onChange: r
            }),
            V = (0, k.useRef)(null);
          return V.current || (V.current = new nt({
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
          })), (0, I.jsx)(Xe.Dk, {
            messages: Ge,
            locale: f,
            children: (0, I.jsx)(fs.Provider, {
              value: {
                triggerRef: h,
                triggerBorderRef: v,
                thumbnailRef: m,
                openIconRef: y,
                overlayRef: b,
                contentRef: g,
                containerRef: C,
                zoomPanRef: w,
                imageRef: x,
                placeholderRef: _,
                captionRef: j,
                controlsRef: O,
                closeRef: P,
                zoomRef: R,
                zoomInRef: S,
                zoomSliderRef: D,
                zoomOutRef: N,
                resetRef: T,
                downloadRef: z,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: V.current
              },
              children: (0, I.jsx)(vs, {
                ...u
              })
            })
          })
        },
        hs = (0, k.createContext)({
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
        vs = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, k.useContext)(fs), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, Oe.L)(), {
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
            } = (0, k.useContext)(fs), p = (0, k.useRef)(null);
            p.current || (p.current = je.os.timeline({
              defaults: Be
            }));
            const h = (0, k.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              v = e(async e => {
                e?.preventDefault?.(), e?.target?.focus({
                  preventScroll: !0
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), je.os.set([u.current, f.current], {
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
                }), je.os.set([f.current], {
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
                  [qe]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [qe]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Re(f.current), t.closing || (je.os.set([f.current], {
                  visibility: "visible",
                  ...Ze
                }), je.os.set([u.current], {
                  visibility: "hidden",
                  ...Ze
                }))))
              }),
              m = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, k.useCallback)(async e => {
                e || (window.addEventListener("click", h), await m(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              b = (0, k.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
              openAnim: v,
              close: b
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
            } = (0, Oe.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, k.useContext)(fs), d = t(async e => {
              r.zoomTo(e), je.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              je.os.to([s.current], {
                opacity: e,
                [qe]: t,
                ...Ze
              })
            }), p = t(async () => {
              je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), h = (0, k.useCallback)(() => {
              n.current && o.current && (je.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              }), je.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Ze
              }), je.os.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, k.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", h), window.addEventListener("resize", r.resize.bind(r)), () => {
              r.removeEventListener("close", e), r.removeEventListener("animate", p), r.removeEventListener("toggle-controls", f), r.removeEventListener("resize", h), window.removeEventListener("resize", r.resize.bind(r))
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
          }), u = (0, q.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, I.jsx)(hs.Provider, {
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
            children: (0, I.jsx)(Ko, {
              ...u
            })
          })
        },
        ms = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, k.useContext)(fs),
            d = (0, _e.UP)(s, n),
            l = (0, q.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(dt.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, I.jsx)(Wo, {
            ref: d,
            ...l,
            children: (0, I.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, I.jsx)(z.xV, {
                children: t
              })
            })
          })
        }),
        ys = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, k.useContext)(fs), s = (0, _e.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? z.DX : "img";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        bs = (0, k.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, k.useContext)(fs), o = (0, _e.UP)(n, r), s = (0, q.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? z.DX : at.h1;
          return (0, I.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        gs = ({
          ...e
        }) => (0, I.jsx)(Qo, {
          ...e
        }),
        Cs = (0, k.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, k.useContext)(fs), o = (0, _e.UP)(n, r), s = (0, q.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, I.jsx)(es, {
            ref: o,
            ...s
          })
        }),
        ws = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, k.useContext)(hs), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, k.useContext)(fs), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, k.useContext)(fs), [t, r] = (0, k.useState)(e.getCursor()), n = (0, k.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, k.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [ot.xW.tokens, ot.xW.typography, ot.xW.grid, st("dark")].join(" ");
          const c = (0, _e.UP)(s, n),
            u = (0, q.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, T.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, I.jsxs)(os, {
            ref: c,
            ...u,
            children: [(0, I.jsx)(z.s6, {
              children: (0, I.jsx)(ds, {
                children: a
              })
            }), t]
          })
        }),
        xs = (0, k.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, k.useContext)(fs);
          (() => {
            const {
              contextSafe: e
            } = (0, Oe.L)(), {
              toggleControls: t
            } = (0, k.useContext)(hs), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, k.useContext)(fs), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (je.os.to([n.current], {
                ...a.getCurrentTransform(),
                ...Ze
              }), je.os.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Ze
              }), je.os.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Ze
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || je.os.to([n.current], {
                ...a.getCurrentTransform(),
                ...Ze
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (je.os.to([n.current], {
                ...a.getCurrentTransform(),
                ...Ze
              }), je.os.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Ze
              }), je.os.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Ze
              })))
            }), c = (0, k.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, _e.iQ)({
              ref: s,
              onFocusIn: c
            }), (0, Pe.NH)({
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
          const s = (0, _e.UP)(o, n),
            a = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, I.jsx)("div", {
            ref: s,
            ...a,
            children: (0, I.jsxs)(_s, {
              children: [(0, I.jsx)(js, {}), t]
            })
          })
        }),
        _s = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, k.useContext)(fs), s = (0, _e.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? z.DX : "div";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        js = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, k.useContext)(fs), s = (0, _e.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? z.DX : "img";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Os = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, k.useContext)(fs), s = (0, _e.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? z.DX : "img";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Ps = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, k.useContext)(fs), s = (0, _e.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? z.DX : "p";
          return (0, I.jsx)(ls, {
            asChild: !0,
            children: (0, I.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Rs = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, k.useContext)(fs);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, k.useContext)(hs);
            (0, ke.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, ke.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, ke.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, ke.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, _e.UP)(o, n),
            a = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? z.DX : "div";
          return (0, I.jsx)(ke.Hb, {
            children: (0, I.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Ss = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, I.jsx)(I.Fragment, {
            children: n
          });
          const s = (0, q.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, I.jsxs)(fn, {
            delayDuration: 0,
            children: [(0, I.jsx)(pn, {
              children: n
            }), (0, I.jsxs)(hn, {
              ...s,
              children: [(0, I.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, I.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, I.jsx)(vn, {})]
            })]
          })
        },
        Ds = (0, k.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.v6)(e, {
            isInline: !0
          });
          return (0, I.jsx)(ct, {
            ref: t,
            ...r
          })
        }),
        Ns = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, k.useContext)(fs),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: h,
              zoomTo: v
            } = (() => {
              const {
                slide: e
              } = (0, k.useContext)(fs), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, k.useContext)(hs), [o, s] = (0, k.useState)(!1), [a, i] = (0, k.useState)(!1), [d, l] = (0, k.useState)(0), [c, u] = (0, k.useState)(0), [f, p] = (0, k.useState)(0), h = (0, k.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), v = (0, k.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", h), () => {
                e.removeEventListener("zoom", h)
              }), [h]), {
                zoomTo: v,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: a,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            m = (0, _e.UP)(i, s),
            y = (0, q.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? z.DX : "div";
          return (0, I.jsxs)(b, {
            ref: m,
            ...y,
            children: [(0, I.jsx)(Ss, {
              side: "left",
              enabled: r,
              content: a.formatMessage(dt.ZoomInButtonLabel),
              metadata: a.formatMessage(dt.ZoomInButtonTooltip, {
                shortcut: (0, I.jsx)(Ds, {
                  shortcut: "+"
                })
              }),
              children: (0, I.jsx)(N.K, {
                label: a.formatMessage(dt.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Fe({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, I.jsxs)(Xn, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: v,
              children: [(0, I.jsx)($n, {
                className: "foundry_1a74xwbu",
                children: (0, I.jsx)(Jn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, I.jsx)(Ss, {
                side: "left",
                enabled: r,
                content: a.formatMessage(dt.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, I.jsx)(so, {
                  className: "foundry_1a74xwbw",
                  children: (0, I.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, I.jsx)(Ss, {
              side: "left",
              enabled: r,
              content: a.formatMessage(dt.ZoomOutButtonLabel),
              metadata: a.formatMessage(dt.ZoomOutButtonTooltip, {
                shortcut: (0, I.jsx)(Ds, {
                  shortcut: "-"
                })
              }),
              children: (0, I.jsx)(N.K, {
                label: a.formatMessage(dt.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Fe({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, I.jsx)(z.xV, {
              children: n
            })]
          })
        }),
        Is = (0, k.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, Xe.tz)(),
            {
              closeRef: a
            } = (0, k.useContext)(fs),
            i = (0, _e.UP)(a, o),
            d = (0, q.v6)(n, {
              "data-testid": e,
              className: He({
                styled: !t
              })
            }),
            l = t ? (0, I.jsx)(z.DX, {
              ref: i,
              ...d
            }) : (0, I.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(dt.CloseButtonLabel)
            });
          return (0, I.jsx)(Ss, {
            side: "right",
            enabled: r,
            content: s.formatMessage(dt.CloseButtonLabel),
            metadata: s.formatMessage(dt.CloseButtonTooltip, {
              shortcut: (0, I.jsx)(Ds, {
                shortcut: "Esc"
              })
            }),
            children: (0, I.jsx)(cs, {
              asChild: !0,
              children: l
            })
          })
        }),
        Ts = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, k.useContext)(fs), {
                contextSafe: r
              } = (0, Oe.L)(), {
                resetZoom: n
              } = (0, k.useContext)(hs), [o, s] = (0, k.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                je.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Ze
                })
              }), i = (0, k.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, k.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, k.useContext)(fs),
            i = (0, _e.UP)(a, n),
            d = (0, q.v6)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, I.jsx)(Ss, {
            side: "left",
            enabled: t,
            content: o.formatMessage(dt.ResetZoomButtonLabel),
            metadata: o.formatMessage(dt.ResetZoomButtonTooltip, {
              shortcut: (0, I.jsx)(Ds, {
                shortcut: "R"
              })
            }),
            children: (0, I.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(dt.ResetZoomButtonLabel)
            })
          })
        }),
        ks = (0, k.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, k.useContext)(fs),
            i = (0, _e.UP)(s, n),
            d = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, I.jsx)(Ss, {
            side: "left",
            enabled: t,
            content: o.formatMessage(dt.DownloadButtonTooltip),
            children: (0, I.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(dt.DownloadButtonTooltip),
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
        zs = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Es = r(63368);

      function Ls(e) {
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

      function Vs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function As(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vs(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ls(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ms(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hs = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fs = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = As(As({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Hs(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ms(e.variantClassNames, e => Ms(e, e => e.split(" ")[0]))
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
      const Bs = (0, k.createContext)(null);

      function Zs() {
        const e = (0, k.useContext)(Bs);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const qs = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, q.v6)({
              className: Fs({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? z.DX : "div";
          return (0, I.jsx)(Bs.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: s,
              ...a
            },
            children: (0, I.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        Xs = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Zs(), s = (0, q.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: at.Jl,
            invalid: at.X,
            neutral: at.lW
          }, i = t ? z.DX : a[o];
          return (0, I.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        Gs = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Zs(), i = (0, q.v6)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? z.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Ks = Object.defineProperty,
        Ws = (e, t) => Ks(e, "name", {
          value: t,
          configurable: !0
        });

      function Us(e, t) {
        return k.useReducer((e, r) => t[e][r] ?? e, e)
      }
      Ws(Us, "useStateMachine");
      var Ys = "ScrollArea",
        [$s, Qs] = (0, vt.A)(Ys),
        [Js, ea] = $s(Ys),
        ta = k.forwardRef(Ws(function(e, t) {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = k.useState(null), [l, c] = k.useState(null), [u, f] = k.useState(null), [p, h] = k.useState(null), [v, m] = k.useState(null), [y, b] = k.useState(0), [g, C] = k.useState(0), [w, x] = k.useState(!1), [_, j] = k.useState(!1), O = (0, ht.s)(t, d), P = (0, bn.jH)(o);
          return (0, I.jsx)(Js, {
            scope: r,
            type: n,
            dir: P,
            scrollHideDelay: s,
            scrollArea: i,
            viewport: l,
            onViewportChange: c,
            content: u,
            onContentChange: f,
            scrollbarX: p,
            onScrollbarXChange: h,
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: x,
            scrollbarY: v,
            onScrollbarYChange: m,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: b,
            onCornerHeightChange: C,
            children: (0, I.jsx)(mt.sG.div, {
              dir: P,
              ...a,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": g + "px",
                ...e.style
              }
            })
          })
        }, "ScrollArea")),
        ra = k.forwardRef(Ws(function(e, t) {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = ea("ScrollAreaViewport", r), i = k.useRef(null), d = (0, ht.s)(t, i, a.onViewportChange);
          return (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(na, {
              nonce: o
            }), (0, I.jsx)(mt.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, I.jsx)("div", {
                ref: a.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        }, "ScrollAreaViewport")),
        na = k.memo(Ws(function({
          nonce: e
        }) {
          return (0, I.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
        oa = "ScrollAreaScrollbar",
        sa = k.forwardRef(Ws(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ea(oa, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return k.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, I.jsx)(aa, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, I.jsx)(ia, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, I.jsx)(da, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, I.jsx)(la, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        aa = k.forwardRef(Ws(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ea(oa, e.__scopeScrollArea), [s, a] = k.useState(!1);
          return k.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = Ws(() => {
                  window.clearTimeout(t), a(!0)
                }, "handlePointerEnter"),
                n = Ws(() => {
                  t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, I.jsx)(mr, {
            present: r || s,
            children: (0, I.jsx)(da, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarHover")),
        ia = k.forwardRef(Ws(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ea(oa, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = Da(() => d("SCROLL_END"), 100), [i, d] = Us("hidden", {
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
          });
          return k.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), k.useEffect(() => {
            const e = o.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = Ws(() => {
                const n = e[t];
                r !== n && (d("SCROLL"), a()), r = n
              }, "handleScroll");
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, s, d, a]), (0, I.jsx)(mr, {
            present: r || "hidden" !== i,
            children: (0, I.jsx)(la, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, pt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, pt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        da = k.forwardRef(Ws(function(e, t) {
          const r = ea(oa, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = k.useState(!1),
            i = "horizontal" === e.orientation,
            d = Da(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return Na(r.viewport, d), Na(r.content, d), (0, I.jsx)(mr, {
            present: n || s,
            children: (0, I.jsx)(la, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        la = k.forwardRef(Ws(function(e, t) {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = ea(oa, e.__scopeScrollArea), s = k.useRef(null), a = k.useRef(0), [i, d] = k.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = xa(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: Ws(e => s.current = e, "onThumbChange"),
            onThumbPointerUp: Ws(() => a.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: Ws(e => a.current = e, "onThumbPointerDown")
          };

          function u(e, t) {
            return ja(e, a.current, i, t)
          }
          return Ws(u, "getScrollPosition"), "horizontal" === r ? (0, I.jsx)(ca, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Oa(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, I.jsx)(ua, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Oa(o.viewport.scrollTop, i);
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
        }, "ScrollAreaScrollbarVisible")),
        ca = k.forwardRef(Ws(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = ea(oa, e.__scopeScrollArea), [a, i] = k.useState(), d = k.useRef(null), l = (0, ht.s)(t, d, s.onScrollbarXChange);
          return k.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, I.jsx)(ha, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": _a(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Ra(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: wa(a.paddingLeft),
                  paddingEnd: wa(a.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        ua = k.forwardRef(Ws(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = ea(oa, e.__scopeScrollArea), [a, i] = k.useState(), d = k.useRef(null), l = (0, ht.s)(t, d, s.onScrollbarYChange);
          return k.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, I.jsx)(ha, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": _a(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Ra(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: wa(a.paddingTop),
                  paddingEnd: wa(a.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [fa, pa] = $s(oa),
        ha = k.forwardRef(Ws(function(e, t) {
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
          } = e, p = ea(oa, r), [h, v] = k.useState(null), m = (0, ht.s)(t, v), y = k.useRef(null), b = k.useRef(""), g = p.viewport, C = n.content - n.viewport, w = (0, yt.c)(c), x = (0, yt.c)(d), _ = Da(u, 10);

          function j(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return Ws(j, "handleDragScroll"), k.useEffect(() => {
            const e = Ws(e => {
              const t = e.target,
                r = h?.contains(t);
              r && w(e, C)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, h, C, w]), k.useEffect(x, [n, x]), Na(h, _), Na(p.content, _), (0, I.jsx)(fa, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, yt.c)(s),
            onThumbPointerUp: (0, yt.c)(a),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, yt.c)(i),
            children: (0, I.jsx)(mt.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, pt.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, pt.mK)(e.onPointerMove, j),
              onPointerUp: (0, pt.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }, "ScrollAreaScrollbarImpl")),
        va = "ScrollAreaThumb",
        ma = k.forwardRef(Ws(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = pa(va, e.__scopeScrollArea);
          return (0, I.jsx)(mr, {
            present: r || o.hasThumb,
            children: (0, I.jsx)(ya, {
              ref: t,
              ...n
            })
          })
        }, "ScrollAreaThumb")),
        ya = k.forwardRef(Ws(function(e, t) {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = ea(va, r), a = pa(va, r), {
            onThumbPositionChange: i
          } = a, d = (0, ht.s)(t, a.onThumbChange), l = k.useRef(void 0), c = Da(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return k.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = Ws(() => {
                if (c(), !l.current) {
                  const t = Sa(e, i);
                  l.current = t, i()
                }
              }, "handleScroll");
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, I.jsx)(mt.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, pt.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, pt.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        }, "ScrollAreaThumbImpl")),
        ba = "ScrollAreaCorner",
        ga = k.forwardRef(Ws(function(e, t) {
          const r = ea(ba, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, I.jsx)(Ca, {
            ...e,
            ref: t
          }) : null
        }, "ScrollAreaCorner")),
        Ca = k.forwardRef(Ws(function(e, t) {
          const {
            __scopeScrollArea: r,
            ...n
          } = e, o = ea(ba, r), [s, a] = k.useState(0), [i, d] = k.useState(0), l = Boolean(s && i), {
            onCornerWidthChange: c,
            onCornerHeightChange: u
          } = o;
          return Na(o.scrollbarX, () => {
            const e = o.scrollbarX?.offsetHeight || 0;
            o.onCornerHeightChange(e), d(e)
          }), Na(o.scrollbarY, () => {
            const e = o.scrollbarY?.offsetWidth || 0;
            o.onCornerWidthChange(e), a(e)
          }), k.useEffect(() => () => {
            c(0), u(0)
          }, [c, u]), l ? (0, I.jsx)(mt.sG.div, {
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
        }, "ScrollAreaCornerImpl"));

      function wa(e) {
        return e ? parseInt(e, 10) : 0
      }

      function xa(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function _a(e) {
        const t = xa(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function ja(e, t, r, n = "ltr") {
        const o = _a(r),
          s = t || o / 2,
          a = o - s,
          i = r.scrollbar.paddingStart + s,
          d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
          l = r.content - r.viewport;
        return Pa([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
      }

      function Oa(e, t, r = "ltr") {
        const n = _a(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = "ltr" === r ? [0, a] : [-1 * a, 0],
          l = (0, yn.q)(e, d);
        return Pa([0, a], [0, i])(l)
      }

      function Pa(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Ra(e, t) {
        return e > 0 && e < t
      }
      Ws(wa, "toInt"), Ws(xa, "getThumbRatio"), Ws(_a, "getThumbSize"), Ws(ja, "getScrollPositionFromPointer"), Ws(Oa, "getThumbOffsetFromScroll"), Ws(Pa, "linearScale"), Ws(Ra, "isScrollingWithinScrollbarBounds");
      var Sa = Ws((e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return Ws(function o() {
          const s = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = r.left !== s.left,
            i = r.top !== s.top;
          (a || i) && t(), r = s, n = window.requestAnimationFrame(o)
        }, "loop")(), () => window.cancelAnimationFrame(n)
      }, "addUnlinkedScrollListener");

      function Da(e, t) {
        const r = (0, yt.c)(e),
          n = k.useRef(0);
        return k.useEffect(() => () => window.clearTimeout(n.current), []), k.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Na(e, t) {
        const r = (0, yt.c)(t);
        (0, Mt.N)(() => {
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
      Ws(Da, "useDebounceCallback"), Ws(Na, "useResizeObserver");
      var Ia = ta,
        Ta = ra,
        ka = sa,
        za = ma,
        Ea = ga,
        La = Object.defineProperty,
        Va = (e, t) => La(e, "name", {
          value: t,
          configurable: !0
        }),
        Aa = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ma = [" ", "Enter"],
        Ha = "Select",
        [Fa, Ba, Za] = xn(Ha),
        [qa, Xa] = (0, vt.A)(Ha, [Za, Xt]),
        Ga = Xt(),
        [Ka, Wa] = qa(Ha),
        [Ua, Ya] = qa(Ha);

      function $a(e) {
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
          form: h,
          internal_do_not_use_render: v
        } = e, m = Ga(t), [y, b] = k.useState(null), [g, C] = k.useState(null), [w, x] = k.useState(!1), _ = (0, bn.jH)(l), [j, O] = (0, _r.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: s,
          caller: Ha
        }), [P, R] = (0, _r.i)({
          prop: a,
          defaultProp: i,
          onChange: d,
          caller: Ha
        }), S = k.useRef(null), D = k.useRef(P);
        k.useEffect(() => {
          const e = h ? y?.ownerDocument.getElementById(h) : y?.form;
          if (e instanceof HTMLFormElement) {
            const t = Va(() => R(D.current), "reset");
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [h, y, R]);
        const N = !y || !!h || !!y.closest("form"),
          [T, z] = k.useState(new Set),
          E = (0, Tt.B)(),
          L = Array.from(T).map(e => e.props.value).join(";"),
          V = k.useCallback(e => {
            z(t => new Set(t).add(e))
          }, []),
          A = k.useCallback(e => {
            z(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          M = {
            required: p,
            trigger: y,
            onTriggerChange: b,
            valueNode: g,
            onValueNodeChange: C,
            valueNodeHasChildren: w,
            onValueNodeHasChildrenChange: x,
            contentId: E,
            value: P,
            onValueChange: R,
            open: j,
            onOpenChange: O,
            dir: _,
            triggerPointerDownPosRef: S,
            disabled: f,
            name: c,
            autoComplete: u,
            form: h,
            nativeOptions: T,
            nativeSelectKey: L,
            isFormControl: N
          };
        return (0, I.jsx)(sr, {
          ...m,
          children: (0, I.jsx)(Ka, {
            scope: t,
            ...M,
            children: (0, I.jsx)(Fa.Provider, {
              scope: t,
              children: (0, I.jsx)(Ua, {
                scope: t,
                onNativeOptionAdd: V,
                onNativeOptionRemove: A,
                children: Si(v) ? v(M) : r
              })
            })
          })
        })
      }
      Va($a, "SelectProvider");
      var Qa = Va(e => {
          const {
            __scopeSelect: t,
            children: r,
            ...n
          } = e;
          return (0, I.jsx)($a, {
            __scopeSelect: t,
            ...n,
            internal_do_not_use_render: ({
              isFormControl: e
            }) => (0, I.jsxs)(I.Fragment, {
              children: [r, e ? (0, I.jsx)(Ri, {
                __scopeSelect: t
              }) : null]
            })
          })
        }, "Select"),
        Ja = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Ga(r), a = Wa("SelectTrigger", r), i = a.disabled || n, d = (0, ht.s)(t, a.onTriggerChange), l = Ba(r), c = k.useRef("touch"), [u, f, p] = Ni(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Ii(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = Va(e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          }, "handleOpen");
          return (0, I.jsx)(ar, {
            asChild: !0,
            ...s,
            children: (0, I.jsx)(mt.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.open ? a.contentId : void 0,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Di(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, pt.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, pt.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, pt.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Aa.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        }, "SelectTrigger")),
        ei = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Wa("SelectValue", r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, ht.s)(t, d.onValueNodeChange);
          (0, Mt.N)(() => {
            l(c)
          }, [l, c]);
          const f = Di(d.value);
          return (0, I.jsx)(mt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, I.jsx)(k.Fragment, {
              children: f ? a : s
            }, f ? "placeholder" : "value")
          })
        }, "SelectValue")),
        ti = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            ...o
          } = e;
          return (0, I.jsx)(mt.sG.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: n || "▼"
          })
        }, "SelectIcon")),
        [ri, ni] = qa("SelectPortal", {
          forceMount: void 0
        }),
        oi = Va(e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, I.jsx)(ri, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, I.jsx)(fr, {
              asChild: !0,
              ...n
            })
          })
        }, "SelectPortal"),
        si = "SelectContent",
        ai = k.forwardRef(Va(function(e, t) {
          const r = ni(si, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Wa(si, e.__scopeSelect),
            [a, i] = k.useState();
          return (0, Mt.N)(() => {
            i(new DocumentFragment)
          }, []), (0, I.jsx)(mr, {
            present: n || s.open,
            children: ({
              present: e
            }) => e ? (0, I.jsx)(fi, {
              ...o,
              ref: t
            }) : (0, I.jsx)(ii, {
              ...o,
              fragment: a
            })
          })
        }, "SelectContent")),
        ii = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            fragment: o
          } = e;
          return o ? lr.createPortal((0, I.jsx)(li, {
            scope: r,
            children: (0, I.jsx)(Fa.Slot, {
              scope: r,
              children: (0, I.jsx)("div", {
                ref: t,
                children: n
              })
            })
          }), o) : null
        }, "SelectContentFragment")),
        di = 10,
        [li, ci] = qa(si),
        ui = (0, xr.TL)("SelectContent.RemoveScroll"),
        fi = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r
          } = e, {
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
            sticky: h,
            hideWhenDetached: v,
            avoidCollisions: m,
            ...y
          } = e, b = Wa(si, r), [g, C] = k.useState(null), [w, x] = k.useState(null), _ = (0, ht.s)(t, C), [j, O] = k.useState(null), [P, R] = k.useState(null), S = Ba(r), [D, N] = k.useState(!1), T = k.useRef(!1);
          k.useEffect(() => {
            if (g) return (0, Mo.Eq)(g)
          }, [g]), (0, Vo.Oh)();
          const z = k.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, w]),
            E = k.useCallback(() => z([j, g]), [z, j, g]);
          k.useEffect(() => {
            D && E()
          }, [D, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: V
          } = b;
          k.useEffect(() => {
            if (g) {
              let e = {
                x: 0,
                y: 0
              };
              const t = Va(t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (V.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (V.current?.y ?? 0))
                  }
                }, "handlePointerMove"),
                r = Va(r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(g) || L(!1), document.removeEventListener("pointermove", t), V.current = null
                }, "handlePointerUp");
              return null !== V.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [g, L, V]), k.useEffect(() => {
            const e = Va(() => L(!1), "close");
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [A, M] = Ni(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ii(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), H = k.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (T.current = !0))
          }, [b.value]), F = k.useCallback(() => g?.focus(), [g]), B = k.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== b.value && b.value === t || n) && R(e)
          }, [b.value]), Z = "popper" === n ? hi : pi, q = Z === hi ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: h,
            hideWhenDetached: v,
            avoidCollisions: m
          } : {};
          return (0, I.jsx)(li, {
            scope: r,
            content: g,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: H,
            selectedItem: j,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: E,
            selectedItemText: P,
            position: n,
            isPositioned: D,
            searchRef: A,
            children: (0, I.jsx)(Ao.A, {
              as: ui,
              allowPinchZoom: !0,
              children: (0, I.jsx)(Oo, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, pt.mK)(o, e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, I.jsx)(xt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: a,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => b.onOpenChange(!1),
                  children: (0, I.jsx)(Z, {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...y,
                    ...q,
                    onPlaced: () => N(!0),
                    ref: _,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, pt.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = S().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => z(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        }, "SelectContentImpl")),
        pi = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            onPlaced: n,
            ...o
          } = e, s = Wa(si, r), a = ci(si, r), [i, d] = k.useState(null), [l, c] = k.useState(null), u = (0, ht.s)(t, c), f = Ba(r), p = k.useRef(!1), h = k.useRef(!0), {
            viewport: v,
            selectedItem: m,
            selectedItemText: y,
            focusSelectedItem: b
          } = a, g = k.useCallback(() => {
            if (s.trigger && s.valueNode && i && l && v && m && y) {
              const e = s.trigger.getBoundingClientRect(),
                t = l.getBoundingClientRect(),
                r = s.valueNode.getBoundingClientRect(),
                o = y.getBoundingClientRect();
              if ("rtl" !== s.dir) {
                const n = o.left - t.left,
                  s = r.left - n,
                  a = e.left - s,
                  d = e.width + a,
                  l = Math.max(d, t.width),
                  c = window.innerWidth - di,
                  u = (0, yn.q)(s, [di, Math.max(di, c - l)]);
                i.style.minWidth = d + "px", i.style.left = u + "px"
              } else {
                const n = t.right - o.right,
                  s = window.innerWidth - r.right - n,
                  a = window.innerWidth - e.right - s,
                  d = e.width + a,
                  l = Math.max(d, t.width),
                  c = window.innerWidth - di,
                  u = (0, yn.q)(s, [di, Math.max(di, c - l)]);
                i.style.minWidth = d + "px", i.style.right = u + "px"
              }
              const a = f(),
                d = window.innerHeight - 2 * di,
                c = v.scrollHeight,
                u = window.getComputedStyle(l),
                h = parseInt(u.borderTopWidth, 10),
                b = parseInt(u.paddingTop, 10),
                g = parseInt(u.borderBottomWidth, 10),
                C = h + b + c + parseInt(u.paddingBottom, 10) + g,
                w = Math.min(5 * m.offsetHeight, C),
                x = window.getComputedStyle(v),
                _ = parseInt(x.paddingTop, 10),
                j = parseInt(x.paddingBottom, 10),
                O = e.top + e.height / 2 - di,
                P = d - O,
                R = m.offsetHeight / 2,
                S = h + b + (m.offsetTop + R),
                D = C - S;
              if (S <= O) {
                const e = a.length > 0 && m === a[a.length - 1].ref.current;
                i.style.bottom = "0px";
                const t = l.clientHeight - v.offsetTop - v.offsetHeight,
                  r = S + Math.max(P, R + (e ? j : 0) + t + g);
                i.style.height = r + "px"
              } else {
                const e = a.length > 0 && m === a[0].ref.current;
                i.style.top = "0px";
                const t = Math.max(O, h + v.offsetTop + (e ? _ : 0) + R) + D;
                i.style.height = t + "px", v.scrollTop = S - O + v.offsetTop
              }
              i.style.margin = `${di}px 0`, i.style.minHeight = w + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
            }
          }, [f, s.trigger, s.valueNode, i, l, v, m, y, s.dir, n]);
          (0, Mt.N)(() => g(), [g]);
          const [C, w] = k.useState();
          (0, Mt.N)(() => {
            l && w(window.getComputedStyle(l).zIndex)
          }, [l]);
          const x = k.useCallback(e => {
            e && !0 === h.current && (g(), b?.(), h.current = !1)
          }, [g, b]);
          return (0, I.jsx)(vi, {
            scope: r,
            contentWrapper: i,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: x,
            children: (0, I.jsx)("div", {
              ref: d,
              style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: C
              },
              children: (0, I.jsx)(mt.sG.div, {
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
        }, "SelectItemAlignedPosition")),
        hi = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = di,
            ...s
          } = e, a = Ga(r);
          return (0, I.jsx)(ir, {
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
        }, "SelectPopperPosition")),
        [vi, mi] = qa(si, {}),
        yi = "SelectViewport",
        bi = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            nonce: n,
            ...o
          } = e, s = ci(yi, r), a = mi(yi, r), i = (0, ht.s)(t, s.onViewportChange), d = k.useRef(0);
          return (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, I.jsx)(Fa.Slot, {
              scope: r,
              children: (0, I.jsx)(mt.sG.div, {
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
                onScroll: (0, pt.mK)(o.onScroll, e => {
                  const t = e.currentTarget,
                    {
                      contentWrapper: r,
                      shouldExpandOnScrollRef: n
                    } = a;
                  if (n?.current && r) {
                    const e = Math.abs(d.current - t.scrollTop);
                    if (e > 0) {
                      const n = window.innerHeight - 2 * di,
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
        }, "SelectViewport")),
        [gi, Ci] = qa("SelectGroup"),
        wi = "SelectItem",
        [xi, _i] = qa(wi),
        ji = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Wa(wi, r), d = ci(wi, r), l = i.value === n, [c, u] = k.useState(s ?? ""), [f, p] = k.useState(!1), h = (0, yt.c)(e => d.itemRefCallback?.(e, n, o)), v = (0, ht.s)(t, h), m = (0, Tt.B)(), y = k.useRef("touch"), b = Va(() => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          }, "handleSelect");
          return (0, I.jsx)(xi, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: k.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, I.jsx)(Fa.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, I.jsx)(mt.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: v,
                onFocus: (0, pt.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, pt.mK)(a.onBlur, () => p(!1)),
                onClick: (0, pt.mK)(a.onClick, () => {
                  "mouse" !== y.current && b()
                }),
                onPointerUp: (0, pt.mK)(a.onPointerUp, () => {
                  "mouse" === y.current && b()
                }),
                onPointerDown: (0, pt.mK)(a.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, pt.mK)(a.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, pt.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, pt.mK)(a.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (Ma.includes(e.key) && b(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        }, "SelectItem")),
        Oi = "SelectItemText",
        Pi = k.forwardRef(Va(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Wa(Oi, r), i = ci(Oi, r), d = _i(Oi, r), l = Ya(Oi, r), [c, u] = k.useState(null), f = (0, yt.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = (0, ht.s)(t, u, d.onItemTextChange, f), h = c?.textContent, v = k.useMemo(() => (0, I.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: h
          }, d.value), [d.disabled, d.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: y
          } = l;
          return (0, Mt.N)(() => (m(v), () => y(v)), [m, y, v]), (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(mt.sG.span, {
              id: d.textId,
              ...s,
              ref: p
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren && !Di(a.value) ? lr.createPortal(s.children, a.valueNode) : null]
          })
        }, "SelectItemText")),
        Ri = k.forwardRef(Va(function({
          __scopeSelect: e,
          ...t
        }, r) {
          const n = Wa("SelectBubbleInput", e),
            {
              value: o,
              onValueChange: s,
              required: a,
              disabled: i,
              name: d,
              autoComplete: l,
              form: c
            } = n,
            {
              nativeOptions: u,
              nativeSelectKey: f
            } = n,
            p = k.useRef(null),
            h = (0, ht.s)(r, p),
            v = o ?? "",
            m = (0, gn.Z)(v),
            y = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return k.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (m !== v && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, v), e.dispatchEvent(t)
            }
          }, [m, v]), (0, I.jsxs)(mt.sG.select, {
            "aria-hidden": !0,
            required: a,
            tabIndex: -1,
            name: d,
            autoComplete: l,
            disabled: i,
            form: c,
            onChange: e => s(e.target.value),
            ...t,
            style: {
              ...jr.Qg,
              ...t.style
            },
            ref: h,
            defaultValue: v,
            children: [Di(o) && !y ? (0, I.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        }, "SelectBubbleInput"));

      function Si(e) {
        return "function" == typeof e
      }

      function Di(e) {
        return "" === e || void 0 === e
      }

      function Ni(e) {
        const t = (0, yt.c)(e),
          r = k.useRef(""),
          n = k.useRef(0),
          o = k.useCallback(e => {
            const o = r.current + e;
            t(o), Va(function e(t) {
              r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
            }, "updateSearch")(o)
          }, [t]),
          s = k.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return k.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Ii(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = Ti(e, Math.max(o, 0));
        1 === n.length && (s = s.filter(e => e !== r));
        const a = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return a !== r ? a : void 0
      }

      function Ti(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }

      function ki(e) {
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

      function zi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ei(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zi(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ki(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Li(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Va(Si, "isFunction"), Va(Di, "shouldShowPlaceholder"), Va(Ni, "useTypeaheadSearch"), Va(Ii, "findNextItem"), Va(Ti, "wrapArray");
      var Vi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ai = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ei(Ei({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vi(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Li(e.variantClassNames, e => Li(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mi = Ai({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hi = Ai({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fi = Ai({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Bi = Ai({
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
        Zi = Ai({
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
        qi = Ai({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Xi = (0, k.createContext)(null);

      function Gi() {
        const e = (0, k.useContext)(Xi);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Ki = (0, k.forwardRef)(({
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
          ...h
        }, v) => {
          const m = (0, k.useRef)(null),
            y = (0, _e.UP)(m, v),
            b = (0, k.useId)(),
            g = (0, k.useId)(),
            C = (0, k.useId)(),
            w = (0, k.useId)(),
            x = (0, k.useId)(),
            _ = (0, k.useId)(),
            j = (0, k.useRef)(null),
            O = (0, k.useRef)(null),
            P = (0, k.useRef)(null),
            [R = !1, S] = (0, _e.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, q.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, I.jsx)(Xi.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: C,
              triggerId: _,
              hintId: w,
              popoverId: x,
              labelRef: j,
              descriptionRef: O,
              hintRef: P,
              defaultValue: s,
              onValueChange: a,
              value: d,
              isOpen: R,
              setIsOpen: S,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, I.jsx)(Qa, {
              required: r,
              disabled: n,
              open: R,
              onOpenChange: () => S(!o && !R),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, I.jsx)("div", {
                ref: y,
                ...D,
                children: e
              })
            })
          })
        }),
        Wi = (0, k.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = Gi(), a = (0, q.v6)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Mi({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, I.jsx)(ai, {
            ...a,
            ref: o,
            children: (0, I.jsx)(bi, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Ui = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(bi, {
            ref: r,
            ...n
          })
        }),
        Yi = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, I.jsxs)(Ia, {
            ...o,
            ref: n,
            children: [(0, I.jsx)(Ui, {
              asChild: !0,
              children: (0, I.jsx)(Ta, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, I.jsx)(ka, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, I.jsx)(za, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        $i = (0, k.forwardRef)(({
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
            descriptionId: h,
            labelRef: v,
            descriptionRef: m,
            hintRef: y,
            isOpen: b,
            size: g
          } = Gi(), {
            isPressed: C,
            pressProps: w
          } = (0, Es.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, _] = (0, k.useState)(!1), [j, O] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            _(!!v.current || !!y.current), O(!!m.current)
          }, []);
          const P = (0, q.v6)({
              id: f,
              className: Zi({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!C,
                isDisabled: !!l
              }),
              "aria-labelledby": x ? (0, q.VW)(r, c, u) : r,
              "aria-describedby": j ? (0, q.VW)(n, h) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": b ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!C
            }, (0, q.cJ)(w, "onKeyDown"), s),
            R = o ? z.DX : Ja;
          return (0, I.jsx)(R, {
            ...P,
            ref: a,
            children: e
          })
        }),
        Qi = (0, k.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? z.DX : "span";
          return (0, I.jsx)(a, {
            ...s,
            ref: o,
            children: (0, I.jsx)(ei, {
              placeholder: e
            })
          })
        }),
        Ji = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = Gi(), i = a ? at.rX : at.yQ, d = (0, q.v6)({
            asChild: !0,
            className: qi({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, I.jsx)(ti, {
            ...d,
            ref: n,
            children: e || (0, I.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        ed = (0, k.forwardRef)(({
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
            labelRef: c,
            triggerId: u
          } = Gi(), f = i && !o, p = (0, _e.UP)(c, a), h = (0, q.v6)({
            id: s.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Bi({
              showAsterisk: f,
              isDisabled: d
            })
          }, s), v = t ? z.DX : "label";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(v, {
              ...h,
              ref: p,
              children: r
            })
          })
        }),
        td = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a,
            descriptionRef: i
          } = Gi(), d = (0, _e.UP)(i, o), l = (0, q.v6)({
            className: Hi({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? z.DX : "div";
          return (0, I.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        rd = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            hintRef: a,
            isDisabled: i
          } = Gi(), d = (0, _e.UP)(a, o), l = (0, q.v6)({
            className: Fi({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? z.DX : "div";
          return (0, I.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        nd = (0, k.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, k.useRef)(null),
            i = (0, _e.UP)(a, s),
            d = (0, q.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, I.jsx)(ji, {
            ref: i,
            ...d,
            children: e
          })
        }),
        od = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, I.jsx)(Pi, {
            ref: n,
            asChild: !0,
            children: (0, I.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        sd = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, I.jsx)(ti, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        ad = oi,
        id = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Gi(), i = (0, q.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? z.DX : qs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        dd = Xs,
        ld = Gs;
      var cd = r(35053),
        ud = r(34439);

      function fd(e) {
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

      function pd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pd(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = fd(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var md = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hd(hd({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) md(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vd(e.variantClassNames, e => vd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bd = yd({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gd = yd({
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
        Cd = yd({
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
        wd = yd({
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
        xd = yd({
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
      const _d = (0, k.createContext)(null);

      function jd() {
        const e = (0, k.useContext)(_d);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Od = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, q.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? z.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)();
          return (0, I.jsx)(_d.Provider, {
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
            children: (0, I.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Pd = (0, k.forwardRef)(({
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
          const p = (0, k.useRef)(null),
            h = (0, _e.UP)(p, f),
            {
              size: v,
              appearance: m,
              inputId: y,
              labelId: b,
              descriptionId: g,
              isDisabled: C,
              isReadOnly: w
            } = jd(),
            x = (0, ud.H)({
              isDisabled: C,
              isReadOnly: w,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: _
            } = (0, cd.K)({
              id: s || y,
              "aria-labelledby": (0, q.VW)(n, b),
              "aria-describedby": (0, q.VW)(o, g),
              name: l,
              value: c,
              isDisabled: C,
              isReadOnly: w
            }, x, p),
            j = (0, q.v6)({
              className: xd({
                appearance: m
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": C || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || C || w || x.toggle()
              }
            }, u);
          return (0, I.jsxs)("div", {
            ...j,
            children: [(0, I.jsx)(z.s6, {
              children: (0, I.jsx)("input", {
                ..._,
                ref: h
              })
            }), (0, I.jsx)("div", {
              className: wd({
                size: v
              }),
              "aria-hidden": "true",
              children: (0, I.jsx)("div", {
                className: gd({
                  size: v,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Rd = (0, k.forwardRef)(({
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
          } = jd(), c = (0, q.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Cd({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? z.DX : "label";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Sd = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = jd(), i = n.id || a, d = (0, q.v6)({
            className: bd({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? z.DX : "div";
          return (0, I.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Dd = r(53681);
      const Nd = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, I.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Id = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, I.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Td = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, I.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        kd = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, I.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        zd = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, I.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Ed = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, I.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Ld(e) {
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

      function Vd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ad(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vd(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ld(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Md(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Hd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ad(Ad({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Hd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Md(e.variantClassNames, e => Md(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Bd = Fd({
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
        Zd = Fd({
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
        qd = Fd({
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
        Xd = Fd({
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
        Gd = Fd({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kd = Fd({
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
      const Wd = (0, k.createContext)(null);

      function Ud() {
        const e = (0, k.useContext)(Wd);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Yd = (0, k.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, q.cJ)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? z.DX : "div",
            l = (0, k.useId)(),
            c = (0, k.useId)(),
            u = (0, k.useId)();
          return (0, I.jsx)(Wd.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...s
            },
            children: (0, I.jsx)(d, {
              ...i,
              ref: a,
              children: o
            })
          })
        }),
        $d = (0, k.forwardRef)(({
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
            size: h,
            appearance: v,
            isIndeterminate: m,
            isRequired: y,
            descriptionId: b,
            labelId: g,
            inputId: C,
            ...w
          } = Ud(), x = (0, k.useRef)(null), _ = f.id || C, {
            isPressed: j,
            pressProps: O
          } = (0, Es.d)({
            ref: x
          }), {
            setSelected: P,
            toggle: R,
            ...S
          } = (0, ud.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: D,
            isSelected: N,
            isDisabled: E,
            isReadOnly: L
          } = (0, Dd.v)({
            "aria-label": "",
            id: _,
            name: o,
            ...w
          }, {
            ...S,
            toggle: R,
            setSelected: w.isReadOnly ? () => !1 : P
          }, x), V = (0, q.v6)({
            className: Zd({
              size: h
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || E || L || R()
            }
          }, O, f), A = (0, q.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, q.VW)(c, g),
            "aria-describedby": (0, q.VW)(d, b),
            "aria-errormessage": (0, q.VW)(l, w.isInvalid ? b : void 0),
            "aria-required": y,
            required: y
          }, D), M = m ? i[`Dash${h}`] : i[`Check${h}`];
          return (0, I.jsxs)("div", {
            ...V,
            children: [(0, I.jsx)(z.s6, {
              children: (0, I.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, I.jsx)("div", {
              className: (0, T.clsx)(Bd({
                size: h,
                appearance: v
              }), u),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": E || L,
              "data-testid": e,
              "data-pressed": j,
              children: (0, I.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || m) && (0, I.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Qd = (0, k.forwardRef)(({
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
          } = Ud(), u = s.id || d, f = c && !o, p = (0, q.v6)({
            className: Kd({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), h = t ? z.DX : "label";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(h, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        Jd = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Ud(), i = n.id || a, d = (0, q.v6)({
            className: qd({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? z.DX : "div";
          return (0, I.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        el = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Ud(), a = n.id || s, i = (0, q.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? z.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        tl = (0, k.createContext)(null);

      function rl() {
        const e = (0, k.useContext)(tl);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const nl = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, k.useState)(null), [l, c] = (0, k.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, q.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? z.DX : "fieldset";
          return (0, I.jsx)(tl.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, I.jsx)(p, {
              ...f,
              ref: a,
              children: r
            })
          })
        }),
        ol = (0, k.forwardRef)(({
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
          } = rl(), l = d && !s, c = (0, q.v6)({
            "data-testid": r,
            className: Gd({
              showAsterisk: l
            })
          }, a), u = t ? z.DX : "legend";
          return (0, I.jsx)(z.s6, {
            enabled: o,
            children: (0, I.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, I.jsx)(z.xV, {
                children: e
              }), !d && (0, I.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        sl = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = rl(), a = (0, k.useId)(), i = n.id || a;
          (0, k.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? z.DX : "div";
          return (0, I.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        al = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = rl(), a = (0, q.v6)({
            "data-testid": r,
            className: Xd({
              size: s
            })
          }, n), i = t ? z.DX : "div";
          return (0, I.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        il = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = rl(), a = (0, k.useId)(), i = n.id || a;
          (0, k.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, q.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = at.X,
            c = t ? z.DX : "div";
          return (0, I.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, I.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, I.jsx)(z.xV, {
              children: e
            })]
          })
        });

      function dl(e) {
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

      function ll(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function cl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ll(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = dl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ll(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ul(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var fl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        pl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cl(cl({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) fl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ul(e.variantClassNames, e => ul(e, e => e.split(" ")[0]))
            }
          }, t
        },
        hl = pl({
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
        vl = pl({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ml = pl({
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
        yl = pl({
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
      const bl = (0, k.createContext)(null);

      function gl() {
        const e = (0, k.useContext)(bl);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Cl = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, q.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? z.DX : "div",
            u = (0, k.useId)(),
            f = (0, k.useId)(),
            p = (0, k.useId)(),
            h = (0, k.useId)();
          return (0, I.jsx)(bl.Provider, {
            value: {
              labelId: u,
              descriptionId: f,
              hintId: p,
              inputId: h,
              isDisabled: n,
              isReadOnly: o,
              isRequired: s,
              status: a,
              ...i
            },
            children: (0, I.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        wl = (0, k.forwardRef)(({
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
          } = gl(), u = (0, q.v6)({
            className: ml({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? z.DX : "label";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        xl = (0, k.forwardRef)(({
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
            hintId: h,
            isDisabled: v,
            isRequired: m,
            isReadOnly: y,
            status: b
          } = gl(), g = (0, k.useRef)(null), C = (0, _e.UP)(g, c), w = (0, q.v6)({
            className: yl({
              isInvalid: "invalid" === b,
              isDisabled: v,
              isReadOnly: y,
              isSuccess: "success" === b
            }),
            name: s,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: v,
            required: m,
            readOnly: y,
            placeholder: a,
            "aria-labelledby": (0, q.VW)(l.id, f, h, i),
            "aria-describedby": (0, q.VW)(u, d),
            "data-testid": r,
            ..."invalid" === b && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === b && {
              "data-success": !0
            },
            ...v && {
              "aria-disabled": !0
            },
            ...m && {
              "aria-required": !0
            }
          }, l), x = e ? z.DX : "textarea";
          return (0, I.jsx)(x, {
            ref: C,
            ...w,
            children: t
          })
        }),
        _l = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = gl(), i = (0, q.v6)({
            className: hl({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? z.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        jl = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = gl(), i = (0, q.v6)({
            className: vl({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? z.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ol = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = gl(), i = (0, q.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? z.DX : qs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Pl = Xs,
        Rl = Gs;
      var Sl = r(22718),
        Dl = r(61720);

      function Nl(e) {
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

      function Il(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Tl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Il(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Nl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Il(Object(r)).forEach(function(t) {
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
      var zl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        El = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tl(Tl({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zl(l, n, e.defaultVariants) && (r += " " + c);
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
        Ll = El({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vl = El({
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
      const Al = (0, k.createContext)(null);

      function Ml() {
        const e = (0, k.useContext)(Al);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Hl = (0, k.forwardRef)(({
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
          const f = (0, k.useRef)(null),
            p = (0, _e.UP)(f, u),
            h = (0, k.useId)(),
            v = (0, k.useId)(),
            m = (0, k.useId)(),
            y = (0, Sl.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Dl.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, q.VW)(h, a),
              "aria-describedby": (0, q.VW)(v, m, i),
              "aria-errormessage": (0, q.VW)(m, d)
            }, y),
            g = (0, q.v6)({
              className: "foundry_njguqn0"
            }, b, (0, q.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            C = s ? z.DX : "div";
          return (0, I.jsx)(Al.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: v,
              labelId: h,
              errorId: m,
              status: l,
              ...c
            },
            children: (0, I.jsx)(C, {
              ref: p,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        Fl = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = Ml(), i = (0, q.v6)({
            "data-testid": e,
            className: Vl({
              size: s,
              orientation: a
            })
          }, n), d = t ? z.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Bl = (0, k.forwardRef)(({
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
          } = Ml(), l = i && !o, c = (0, q.v6)({
            id: s.id || d,
            "data-testid": e,
            className: Ll({
              showAsterisk: l
            })
          }, s), u = t ? z.DX : "div";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Zl = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Ml(), a = (0, q.v6)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? z.DX : "div";
          return (0, I.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        ql = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = Ml(), i = (0, q.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? z.DX : qs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Xl = Xs,
        Gl = Gs;
      var Kl = r(7471),
        Wl = El({
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
        Ul = El({
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
        Yl = El({
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
        $l = El({
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
      const Ql = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, I.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        Jl = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, I.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        ec = ({
          color: e = "currentColor"
        }) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, I.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        tc = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? z.DX : "label";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        rc = (0, k.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, k.useRef)(null),
            s = (0, _e.UP)(o, n),
            a = (0, k.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Ml(),
            {
              isPressed: p,
              pressProps: h
            } = (0, Es.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: v
            } = (0, Kl.z)({
              ...r,
              id: a,
              value: t,
              "aria-label": ""
            }, i, o),
            m = v.checked,
            y = v.disabled || i?.isReadOnly,
            b = (0, q.v6)(v, {
              disabled: y,
              readOnly: u,
              required: f,
              "data-testid": e,
              ...y && {
                "aria-disabled": !0
              },
              ...f && {
                "aria-required": !0
              }
            }, r),
            g = c[`Dot${l}`];
          return (0, I.jsxs)("div", {
            className: $l({
              size: l
            }),
            children: [(0, I.jsx)(z.s6, {
              children: (0, I.jsx)("input", {
                type: "radio",
                ...b,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, I.jsx)("div", {
              className: Yl({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": m ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...h,
              children: (0, I.jsx)("span", {
                className: "foundry_1pfduet9",
                children: m && (0, I.jsx)(g, {})
              })
            })]
          })
        }),
        nc = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = Ml(), d = (0, k.useId)(), l = (0, q.v6)({
            id: d,
            "data-testid": e,
            className: Ul({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? z.DX : "div";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        oc = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Ml(), a = (0, q.v6)({
            "data-testid": e,
            className: Wl({
              isDisabled: s
            })
          }, n), i = t ? z.DX : "span";
          return (0, I.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });
      var sc = r(58900);

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
        uc = e => {
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
        },
        fc = uc({
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
        pc = uc({
          defaultClassName: "foundry_8oytzo11 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzo12",
              true: "foundry_8oytzo13"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hc = uc({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vc = uc({
          defaultClassName: "foundry_8oytzou",
          variantClassNames: {
            side: {
              left: "foundry_8oytzov",
              right: "foundry_8oytzow"
            },
            isDisabled: {
              false: "foundry_8oytzox",
              true: "foundry_8oytzoy"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        mc = uc({
          defaultClassName: "foundry_8oytzop foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              false: "foundry_8oytzoq",
              true: "foundry_8oytzor"
            },
            isReadOnly: {
              false: "foundry_8oytzos",
              true: "foundry_8oytzot"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yc = uc({
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
      const bc = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        gc = (0, k.createContext)(null);

      function Cc() {
        const e = (0, k.useContext)(gc);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const wc = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, k.useState)("text"), u = `${(0,k.useId)()}-label`, f = `${(0,k.useId)()}-input`, p = `${(0,k.useId)()}-description`, h = (0, k.useRef)(null), v = (0, k.useRef)(bc), m = (0, q.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? z.DX : "div";
          return (0, I.jsx)(gc.Provider, {
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
              inputRef: h,
              focusState: v,
              ...i
            },
            children: (0, I.jsx)(y, {
              ref: d,
              ...m,
              children: t
            })
          })
        }),
        xc = (0, k.forwardRef)(({
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
          } = Cc(), u = d && !o, f = (0, q.v6)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: yc({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? z.DX : "label";
          return (0, I.jsx)(z.s6, {
            enabled: n,
            children: (0, I.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        _c = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Cc(), a = (0, q.v6)({
            "data-testid": e,
            className: hc({
              isDisabled: s
            })
          }, n), i = t ? z.DX : "span";
          return (0, I.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        jc = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = Cc(), d = (0, q.v6)({
            "data-testid": e,
            className: (0, T.clsx)(fc({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? z.DX : "div";
          return (0, I.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Oc = (0, k.forwardRef)(({
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
            isRequired: h,
            status: v,
            labelId: m,
            inputId: y,
            descriptionId: b,
            setType: g,
            type: C,
            inputRef: w,
            focusState: x
          } = Cc();
          (0, k.useEffect)(() => g(l), []);
          const _ = "invalid" === v,
            j = (0, q.v6)({
              disabled: f,
              readOnly: p,
              required: h,
              id: y,
              type: C,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, q.VW)(m, i),
              "aria-describedby": (0, q.VW)(b, d),
              "data-testid": e,
              className: (0, T.clsx)(mc({
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
              ..._ && {
                "aria-invalid": !0,
                "aria-errormessage": b
              },
              ..."success" === v && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...h && {
                "aria-required": !0
              }
            }, c),
            O = (0, sc.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            P = (0, _e.UP)(r && n ? O : null, w, u),
            R = t ? z.DX : "input";
          return (0, I.jsx)(R, {
            ref: P,
            ...j
          })
        }),
        Pc = (0, k.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = Cc(), i = (0, q.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, T.clsx)(vc({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? z.DX : it[e];
          return (0, I.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Rc = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          icon: r,
          iconElement: n,
          label: o,
          testId: s,
          preventFocusOnPress: a = !0,
          ...i
        }, d) => {
          const l = (0, k.useRef)(null),
            c = (0, _e.UP)(l, d),
            {
              isDisabled: u
            } = Cc(),
            {
              buttonProps: f
            } = (0, _e.sL)((0, q.v6)(i, {
              isDisabled: u,
              preventFocusOnPress: a
            }), l),
            p = (0, q.v6)({
              className: (0, T.clsx)("foundry_8oytzon foundry_8kowh41 foundry_1d5mo5m0", "foundry_8oytzo3"),
              "data-testid": s
            }, f),
            h = n || (r ? it[r] : null),
            v = e ? z.DX : "button";
          return (0, I.jsxs)(v, {
            ref: c,
            ...p,
            children: [h && (0, I.jsx)(h, {
              label: o || "",
              size: "LG",
              className: "foundry_8oytzoo"
            }), (0, I.jsx)(z.xV, {
              children: t
            })]
          })
        }),
        Sc = (0, k.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i,
            isDisabled: d
          } = Cc(), l = "password" === o, c = l ? e : t;
          (0, k.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const u = (0, q.v6)({
            label: c,
            icon: l ? "Eye" : "EyeOff",
            onPress: () => {
              s(l ? "text" : "password");
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
          return (0, I.jsxs)(fn, {
            isDisabled: d,
            children: [(0, I.jsx)(pn, {
              children: (0, I.jsx)(Rc, {
                ref: n,
                ...u
              })
            }), (0, I.jsxs)(hn, {
              side: "bottom",
              align: "end",
              children: [c, (0, I.jsx)(vn, {})]
            })]
          })
        }),
        Dc = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Cc(), i = (0, q.v6)({
            className: pc({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? z.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Nc = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Cc(), i = (0, q.v6)({
            className: "foundry_8oytzo14",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? z.DX : qs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ic = Xs,
        Tc = Gs;
      var kc = r(909);

      function zc(e) {
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

      function Ec(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ec(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = zc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ec(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ac = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lc(Lc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ac(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vc(e.variantClassNames, e => Vc(e, e => e.split(" ")[0]))
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
      const Hc = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Fc = (0, k.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, k.useRef)(null),
            a = (0, _e.UP)(s, o),
            {
              buttonProps: i
            } = (0, _e.sL)(n, s),
            d = (0, q.v6)({
              "data-testid": r,
              className: Mc({
                size: t
              })
            }, i);
          return (0, I.jsx)("button", {
            ref: a,
            ...d,
            children: (0, I.jsx)(at.X, {
              label: e,
              size: Hc[t]
            })
          })
        });

      function Bc(e) {
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

      function Zc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function qc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Bc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Xc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Gc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qc(qc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Gc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xc(e.variantClassNames, e => Xc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Wc = Kc({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Uc = Kc({
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
        Yc = Kc({
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
      const $c = (0, k.createContext)(null);

      function Qc() {
        const e = (0, k.useContext)($c);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Jc = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? z.DX : "div",
            i = (0, q.v6)({
              className: Yc({
                status: r,
                background: n
              })
            }, o);
          return (0, I.jsx)($c.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, I.jsx)(a, {
              ref: s,
              "data-testid": t,
              ...i
            })
          })
        }),
        eu = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        tu = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        ru = {
          danger: at.RT,
          information: at.R2,
          success: at.rW,
          warning: at.lW
        },
        nu = (0, k.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Qc(), s = e ? z.DX : ru[o], a = (0, q.v6)({
            className: Uc({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, I.jsx)(s, {
            label: "",
            ref: n,
            ...a
          })
        }),
        ou = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        su = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        au = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, k.useRef)(null),
            a = (0, _e.UP)(s, o),
            i = e ? z.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, kc.i)(n, s),
            c = (0, q.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, I.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...c,
            children: t
          })
        }),
        iu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? z.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        du = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? z.DX : "div";
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, T.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        lu = (0, k.forwardRef)((e, t) => {
          const {
            background: r
          } = Qc(), n = "none" !== r, o = (0, q.v6)({
            className: Wc({
              hasBackground: n
            })
          }, e);
          return (0, I.jsx)(Fc, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var cu = r(64634),
        uu = r(7697),
        fu = r(17497);

      function pu(e) {
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

      function vu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hu(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = pu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
      var yu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        bu = "foundry_qmpv6yv",
        gu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vu(vu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yu(l, n, e.defaultVariants) && (r += " " + c);
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
      const Cu = (0, k.createContext)(null);

      function wu() {
        const e = (0, k.useContext)(Cu);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const xu = (0, k.forwardRef)(({
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
              const t = (0, _e.rl)(),
                r = (0, _e.jt)(),
                [n, o] = (0, k.useState)([]),
                s = n.length,
                [a, i] = (0, k.useState)(0),
                [d, l] = (0, cu.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [(0, uu.A)(), (0, fu.A)()]),
                c = (0, k.useRef)(0),
                u = (0, k.useRef)(!1),
                f = n[a],
                p = (0, k.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                h = (0, k.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                v = (0, k.useCallback)((e, t) => {
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
              return (0, k.useEffect)(() => {
                l && (h(l), v(l), l.on("reInit", h).on("reInit", v).on("scroll", v).on("slideFocus", v))
              }, [l, v]), (0, k.useEffect)(() => {
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
          (0, k.useEffect)(() => {
            o && s && f([{
              status: o,
              background: s,
              align: a
            }])
          }, []);
          const h = p > 1 ? {
              role: "region",
              "aria-roledescription": "carousel",
              "aria-label": "alerts"
            } : null,
            v = (0, q.v6)({
              className: gu(c)
            }, h, i),
            m = e ? z.DX : "div";
          return (0, I.jsx)(Cu.Provider, {
            value: l,
            children: (0, I.jsx)(m, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...v,
              children: t
            })
          })
        }),
        _u = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        ju = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = wu();
          if (!e && !n || !n?.status) return null;
          const o = e || _u[n.status],
            s = it[o],
            a = (0, q.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, I.jsx)(s, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...a
          })
        }),
        Ou = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Pu = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? z.DX : "div",
            d = (0, q.v6)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, I.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        Ru = (0, k.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = wu(), i = (0, q.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, _e.UP)(s, n), l = k.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, k.useEffect)(() => {
            l && o(l)
          }, []), a?.on("slidesChanged", () => {
            l && o(l)
          }), (0, I.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, I.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Su = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, k.useRef)(null),
            a = (0, _e.UP)(s, o),
            i = e ? z.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, kc.i)(n, s),
            c = (0, q.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, I.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: a,
            ...d,
            ...c,
            children: t
          })
        }),
        Du = (0, k.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, I.jsx)(Fc, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Nu = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? z.DX : "div",
            a = (0, q.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...a,
            children: r
          })
        }),
        Iu = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = wu(), s = (0, q.v6)({
            className: bu
          }, t);
          return (0, I.jsx)(N.K, {
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
        Tu = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = wu(), s = (0, q.v6)({
            className: bu
          }, t);
          return (0, I.jsx)(N.K, {
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
        ku = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = wu(), s = (0, q.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, I.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        });

      function zu(e) {
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

      function Eu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Eu(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = zu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Au = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lu(Lu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Au(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vu(e.variantClassNames, e => Vu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hu = Mu({
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
        Fu = Mu({
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
        Bu = Mu({
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
      const Zu = (0, k.createContext)(null);

      function qu() {
        const e = (0, k.useContext)(Zu);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Xu = (0, k.forwardRef)(({
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
            u = (0, q.v6)({
              className: Fu(c)
            }, d),
            f = e ? z.DX : "div";
          return (0, I.jsx)(Zu.Provider, {
            value: c,
            children: (0, I.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        Gu = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = qu(), a = e ? z.DX : "div", i = (0, q.v6)({
            className: Bu({
              size: s
            })
          }, n);
          return (0, I.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Ku = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = it[e],
            o = (0, q.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, I.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        Wu = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = qu(), s = (0, q.v6)({
            className: Hu({
              background: n
            })
          }, t);
          return (0, I.jsx)(N.K, {
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
      var Uu = Object.defineProperty,
        Yu = (e, t) => Uu(e, "name", {
          value: t,
          configurable: !0
        }),
        $u = "ToastProvider",
        [Qu, Ju, ef] = xn("Toast"),
        [tf, rf] = (0, vt.A)("Toast", [ef]),
        [nf, of] = tf($u),
        sf = Yu(e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            announcerContainer: a,
            children: i
          } = e, [d, l] = k.useState(null), [c, u] = k.useState(0), f = k.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${$u}\`. Expected non-empty \`string\`.`), (0, I.jsx)(Qu.Provider, {
            scope: t,
            children: (0, I.jsx)(nf, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: k.useCallback(() => u(e => e + 1), []),
              onToastRemove: k.useCallback(() => u(e => e - 1), []),
              isClosePausedRef: f,
              announcerContainer: a,
              children: i
            })
          })
        }, "ToastProvider"),
        af = ["F8"],
        df = "toast.viewportPause",
        lf = "toast.viewportResume",
        cf = k.forwardRef(Yu(function(e, t) {
          const {
            __scopeToast: r,
            hotkey: n = af,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = of("ToastViewport", r), i = Ju(r), d = k.useRef(null), l = k.useRef(null), c = k.useRef(null), u = k.useRef(null), f = (0, ht.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          k.useEffect(() => {
            const e = Yu(e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            }, "handleKeyDown");
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), k.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (h && e && t) {
              const r = Yu(() => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(df);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                }, "handlePause"),
                n = Yu(() => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(lf);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
                  }
                }, "handleResume"),
                o = Yu(t => {
                  !e.contains(t.relatedTarget) && n()
                }, "handleFocusOutResume"),
                s = Yu(() => {
                  e.contains(document.activeElement) || n()
                }, "handlePointerLeaveResume");
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", s), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", s), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [h, a.isClosePausedRef]);
          const v = k.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Rf(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return k.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = Yu(t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = v({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    s = o.findIndex(e => e === r);
                  Sf(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              }, "handleKeyDown");
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, v]), (0, I.jsxs)(It, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, I.jsx)(uf, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Sf(v({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, I.jsx)(Qu.Slot, {
              scope: r,
              children: (0, I.jsx)(mt.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, I.jsx)(uf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Sf(v({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }, "ToastViewport")),
        uf = k.forwardRef(Yu(function(e, t) {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = of("ToastFocusProxy", r);
          return (0, I.jsx)(jr.s6, {
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
        }, "ToastFocusProxy")),
        ff = "Toast",
        pf = k.forwardRef(Yu(function(e, t) {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, _r.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: ff
          });
          return (0, I.jsx)(mr, {
            present: r || i,
            children: (0, I.jsx)(mf, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, yt.c)(e.onPause),
              onResume: (0, yt.c)(e.onResume),
              onSwipeStart: (0, pt.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, pt.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, pt.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, pt.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        }, "Toast")),
        [hf, vf] = tf(ff, {
          onClose() {}
        }),
        mf = k.forwardRef(Yu(function(e, t) {
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
            ...h
          } = e, v = of(ff, r), m = Ju(r), [y, b] = k.useState(null), g = (0, ht.s)(t, b), C = k.useRef(null), w = k.useRef(null), x = o || v.duration, _ = k.useRef(0), j = k.useRef(x), O = k.useRef(0), {
            onToastAdd: P,
            onToastRemove: R
          } = v, S = (0, yt.c)(() => {
            const e = y?.contains(document.activeElement);
            e && v.viewport?.focus(), a()
          }), D = k.useCallback(e => {
            e && e !== 1 / 0 && (window.clearTimeout(O.current), _.current = (new Date).getTime(), O.current = window.setTimeout(S, e))
          }, [S]);
          k.useEffect(() => {
            const e = v.viewport;
            if (e) {
              const t = Yu(() => {
                  D(j.current), l?.()
                }, "handleResume"),
                r = Yu(() => {
                  const e = (new Date).getTime() - _.current;
                  j.current = j.current - e, window.clearTimeout(O.current), d?.()
                }, "handlePause");
              return e.addEventListener(df, r), e.addEventListener(lf, t), () => {
                e.removeEventListener(df, r), e.removeEventListener(lf, t)
              }
            }
          }, [v.viewport, x, d, l, D]), k.useEffect(() => {
            s && !v.isClosePausedRef.current && D(x)
          }, [s, x, v.isClosePausedRef, D]), k.useEffect(() => () => {
            window.clearTimeout(O.current)
          }, []), k.useEffect(() => (P(), () => R()), [P, R]);
          const N = k.useMemo(() => y ? xf(y) : null, [y]);
          return v.viewport ? (0, I.jsxs)(I.Fragment, {
            children: [N && (0, I.jsx)(yf, {
              __scopeToast: r,
              role: "status",
              "aria-live": "foreground" === n ? "assertive" : "polite",
              children: N
            }), (0, I.jsx)(hf, {
              scope: r,
              onClose: S,
              children: lr.createPortal((0, I.jsx)(Qu.ItemSlot, {
                scope: r,
                children: (0, I.jsx)(Nt, {
                  asChild: !0,
                  onEscapeKeyDown: (0, pt.mK)(i, e => {
                    const t = m().some(t => t.ref.current?.contains(e.target));
                    t || S()
                  }),
                  children: (0, I.jsx)(mt.sG.li, {
                    tabIndex: 0,
                    "data-state": s ? "open" : "closed",
                    "data-swipe-direction": v.swipeDirection,
                    ...h,
                    ref: g,
                    style: {
                      userSelect: "none",
                      touchAction: "none",
                      ...e.style
                    },
                    onKeyDown: (0, pt.mK)(e.onKeyDown, e => {
                      "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || S())
                    }),
                    onPointerDown: (0, pt.mK)(e.onPointerDown, e => {
                      0 === e.button && (C.current = {
                        x: e.clientX,
                        y: e.clientY
                      })
                    }),
                    onPointerMove: (0, pt.mK)(e.onPointerMove, e => {
                      if (!C.current) return;
                      const t = e.clientX - C.current.x,
                        r = e.clientY - C.current.y,
                        n = Boolean(w.current),
                        o = ["left", "right"].includes(v.swipeDirection),
                        s = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max,
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
                      n ? (w.current = l, _f("toast.swipeMove", u, f, {
                        discrete: !1
                      })) : jf(l, v.swipeDirection, d) ? (w.current = l, _f("toast.swipeStart", c, f, {
                        discrete: !1
                      }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (C.current = null)
                    }),
                    onPointerUp: (0, pt.mK)(e.onPointerUp, e => {
                      const t = w.current,
                        r = e.target;
                      if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, C.current = null, t) {
                        const r = e.currentTarget,
                          n = {
                            originalEvent: e,
                            delta: t
                          };
                        jf(t, v.swipeDirection, v.swipeThreshold) ? _f("toast.swipeEnd", p, n, {
                          discrete: !0
                        }) : _f("toast.swipeCancel", f, n, {
                          discrete: !0
                        }), r.addEventListener("click", e => e.preventDefault(), {
                          once: !0
                        })
                      }
                    })
                  })
                })
              }), v.viewport)
            })]
          }) : null
        }, "ToastImpl")),
        yf = Yu(e => {
          const {
            __scopeToast: t,
            children: r,
            ...n
          } = e, o = of(ff, t), [s, a] = k.useState(!1), [i, d] = k.useState(!1);
          return Of(() => a(!0)), k.useEffect(() => {
            const e = window.setTimeout(() => d(!0), 1e3);
            return () => window.clearTimeout(e)
          }, []), i ? null : (0, I.jsx)(fr, {
            asChild: !0,
            container: o.announcerContainer || void 0,
            children: (0, I.jsx)(jr.s6, {
              ...n,
              children: s && (0, I.jsxs)(I.Fragment, {
                children: [o.label, " ", r]
              })
            })
          })
        }, "ToastAnnounce"),
        bf = k.forwardRef(Yu(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e;
          return (0, I.jsx)(mt.sG.div, {
            ...n,
            ref: t
          })
        }, "ToastDescription")),
        gf = k.forwardRef(Yu(function(e, t) {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, I.jsx)(wf, {
            altText: r,
            asChild: !0,
            children: (0, I.jsx)(Cf, {
              ...n,
              ref: t
            })
          }) : (console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."), null)
        }, "ToastAction")),
        Cf = k.forwardRef(Yu(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e, o = vf("ToastClose", r);
          return (0, I.jsx)(wf, {
            asChild: !0,
            children: (0, I.jsx)(mt.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, pt.mK)(e.onClick, o.onClose)
            })
          })
        }, "ToastClose")),
        wf = k.forwardRef(Yu(function(e, t) {
          const {
            __scopeToast: r,
            altText: n,
            ...o
          } = e;
          return (0, I.jsx)(mt.sG.div, {
            "data-radix-toast-announce-exclude": "",
            "data-radix-toast-announce-alt": n || void 0,
            ...o,
            ref: t
          })
        }, "ToastAnnounceExclude"));

      function xf(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Pf(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...xf(e))
          }
        }), t
      }

      function _f(e, t, r, {
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
        }), n ? (0, mt.hO)(o, s) : o.dispatchEvent(s)
      }
      Yu(xf, "getAnnounceTextContent"), Yu(_f, "handleAndDispatchCustomEvent");
      var jf = Yu((e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      }, "isDeltaInDirection");

      function Of(e = () => {}) {
        const t = (0, yt.c)(e);
        (0, Mt.N)(() => {
          let e = 0,
            r = 0;
          return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
          }
        }, [t])
      }

      function Pf(e) {
        return e.nodeType === e.ELEMENT_NODE
      }

      function Rf(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: Yu(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Sf(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      Yu(Of, "useNextFrame"), Yu(Pf, "isHTMLElement"), Yu(Rf, "getTabbableCandidates"), Yu(Sf, "focusFirst");
      var Df = sf,
        Nf = cf,
        If = pf,
        Tf = bf,
        kf = gf,
        zf = Cf;

      function Ef(e) {
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

      function Lf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lf(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ef(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Af(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vf(Vf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Af(e.variantClassNames, e => Af(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ff = Hf({
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
        Bf = Hf({
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
        Zf = Hf({
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
      const qf = ({
          testId: e,
          ...t
        }) => (0, I.jsx)(Df, {
          "data-testid": e,
          ...t
        }),
        Xf = (0, k.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: Zf({
              position: r
            })
          }, n);
          return (0, I.jsx)(Nf, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        Gf = (0, k.createContext)(null);

      function Kf() {
        const e = (0, k.useContext)(Gf);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Wf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? z.DX : If,
            i = (0, q.v6)({
              className: Bf({
                appearance: n
              })
            }, o);
          return (0, I.jsx)(Gf.Provider, {
            value: {
              appearance: n
            },
            children: (0, I.jsx)(a, {
              ref: s,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        Uf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? z.DX : Tf,
            a = (0, q.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        Yf = {
          danger: at.RT,
          information: at.R2,
          success: at.rW,
          warning: at.lW,
          avocado: at.rW
        },
        $f = (0, k.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Kf(), o = e ? z.DX : Yf[n], s = (0, q.v6)({
            className: Ff({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, I.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        Qf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, I.jsx)(kf, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, I.jsx)(z.DX, {
              children: t
            }) : (0, I.jsx)(D.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Jf = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, q.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, I.jsx)(zf, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, I.jsx)(z.DX, {
              children: t
            }) : (0, I.jsx)(Fc, {
              size: "SM",
              label: n
            })
          })
        });
      var ep = r(20179);

      function tp(e) {
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

      function rp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function np(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = tp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function op(e, t) {
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
        ap = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = np(np({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
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
              return op(e.variantClassNames, e => op(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ip = ap({
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
        dp = ap({
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
        lp = ap({
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

      function cp() {
        const e = (0, k.useContext)(up);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const up = (0, k.createContext)(null),
        fp = (0, k.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, q.v6)({
              className: lp({
                size: n
              })
            }, o),
            i = r ? z.DX : "ol";
          return (0, I.jsx)(up.Provider, {
            value: {
              size: n
            },
            children: (0, I.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...a,
              children: e
            })
          })
        }),
        pp = (0, k.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, k.useRef)(null),
            {
              size: i
            } = cp(),
            {
              itemProps: d
            } = (0, ep.I)({
              isCurrent: e,
              children: t
            }, a),
            l = r ? z.DX : "a",
            c = (0, q.v6)({
              className: (0, T.clsx)(ip({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, I.jsx)("li", {
            className: dp({
              size: i
            }),
            ref: s,
            children: (0, I.jsx)(l, {
              ref: a,
              ...c,
              children: t
            })
          })
        }),
        hp = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = it[e];
          return (0, I.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        vp = (0, k.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, k.useState)(r), {
            size: d
          } = cp(), l = (0, q.v6)({
            className: dp({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, I.jsx)("li", {
            ref: s,
            ...l,
            children: (0, I.jsxs)(Qa, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, I.jsx)(Ja, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, I.jsx)(oi, {
                children: (0, I.jsx)(ai, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, I.jsx)(bi, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        mp = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? z.DX : ji,
            a = (0, q.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, I.jsx)(s, {
            ref: o,
            ...a,
            children: e
          })
        });

      function yp(e) {
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

      function bp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = yp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gp(gp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cp(e.variantClassNames, e => Cp(e, e => e.split(" ")[0]))
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
      const _p = (0, k.createContext)(null);

      function jp() {
        const e = (0, k.useContext)(_p);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Op = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? z.DX : "div",
            d = (0, q.v6)({
              className: xp({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, I.jsx)(_p.Provider, {
            value: {
              type: o
            },
            children: (0, I.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...d
            })
          })
        }),
        Pp = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        Rp = (0, k.forwardRef)(({
          icon: e,
          iconElement: t,
          label: r,
          ...n
        }, o) => {
          const s = t || (e ? it[e] : null),
            a = (0, q.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: r || ""
            }, n);
          return s && (0, I.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        Sp = () => {
          const e = (0, _e.Ub)(q.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Dp = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

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

      function Ip(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Tp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ip(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Np(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ip(Object(r)).forEach(function(t) {
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
      var zp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ep = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Tp(Tp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zp(l, n, e.defaultVariants) && (r += " " + c);
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
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Lp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, I.jsx)(Ia, {
            ref: r,
            ...n
          })
        }),
        Vp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, I.jsx)(Ta, {
            ref: r,
            ...n
          })
        }),
        Ap = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, I.jsx)(ka, {
            ref: r,
            ...n
          })
        }),
        Mp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, _e.rl)(),
            o = (0, q.v6)({
              "data-testid": e,
              className: Ep({
                isTouchDevice: n
              })
            }, t);
          return (0, I.jsx)(za, {
            ref: r,
            ...o
          })
        }),
        Hp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(Ea, {
            ref: r,
            ...n
          })
        });

      function Fp(e) {
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

      function Bp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Fp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function qp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zp(Zp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qp(e.variantClassNames, e => qp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Kp = Gp({
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
        Wp = Gp({
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
      const Up = (0, k.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, k.createRef)(),
          dialogSpringRef: (0, ft.$9)(),
          overlaySpringRef: (0, ft.$9)()
        }),
        Yp = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [d, l] = (0, _e.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, _e.ZC)(d);
          return (0, I.jsx)(Up.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, k.useId)(),
              descriptionId: (0, k.useId)(),
              triggerRef: (0, k.useRef)(null),
              dialogSpringRef: (0, ft.U2)(),
              overlaySpringRef: (0, ft.U2)()
            },
            children: (0, I.jsx)($p, {
              ...i
            })
          })
        },
        $p = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, k.useContext)(Up), n = (0, q.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, I.jsx)(Ko, {
            ...n
          })
        },
        Qp = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, k.useContext)(Up), s = (0, _e.UP)(o, r), a = (0, q.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, I.jsx)(Wo, {
            ...a,
            ref: s
          })
        }),
        Jp = e => (0, I.jsx)(Qo, {
          forceMount: !0,
          ...e
        }),
        eh = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, k.useContext)(Up), a = Dp(), i = (0, _e.jt)(), d = (0, ft.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: ft.$W.stiff,
            immediate: i || s
          }), l = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, ft.CS)(es);
          return (0, k.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, I.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        th = (0, k.forwardRef)(({
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
            onCloseTransitionComplete: h,
            dialogSpringRef: v,
            overlaySpringRef: m
          } = (0, k.useContext)(Up), y = (0, _e.rl)(), b = (0, _e.jt)(), g = (0, k.useRef)(null), C = Sp(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = Dp(),
              a = Sp(),
              i = (0, k.useRef)();
            return {
              bindDrag: (0, Pe.i3)(({
                velocity: [, d],
                offset: [, l],
                direction: [, c],
                cancel: u,
                last: f,
                first: p,
                target: h
              }) => {
                const {
                  height: v
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
                  }(h, c)), (!i.current || l < -70) && u(), i.current) {
                  const e = 100 * (v - l) / v;
                  r.start({
                    ...s(e),
                    immediate: !0
                  }), t.start({
                    ...a(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * v || d > .5 && c > 0 ? (t.start({
                  ...a(0),
                  immediate: !1,
                  config: ft.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: ft.$W.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: ft.$W.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: ft.$W.stiff
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
            overlaySpringRef: m,
            dialogSpringRef: v,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: h
          }), x = (0, ft.pn)(a, {
            from: C(0),
            enter: C(100),
            leave: C(0),
            delay: a ? 100 : 0,
            config: ft.$W.stiff,
            ref: v,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, k.useEffect)(() => {
            v.start()
          }, [a]);
          const _ = (0, _e.UP)(g, s),
            j = y && !b && !n && w(),
            O = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            P = (0, ft.CS)(os);
          return x((t, r) => r ? (0, I.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, I.jsx)(P, {
              forceMount: !0,
              ref: _,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        rh = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, I.jsx)(ds, {
            ref: r,
            ...n
          })
        }),
        nh = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(ls, {
            ref: r,
            ...n
          })
        }),
        oh = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, I.jsxs)(Lp, {
            ref: n,
            ...o,
            children: [(0, I.jsx)(Vp, {
              className: "foundry_xov33ni",
              children: e
            }), (0, I.jsx)(Ap, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, I.jsx)(Mp, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        sh = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? z.DX : "div";
          return (0, I.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        ah = (0, k.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: Kp({
                align: e
              })
            }, n),
            a = t ? z.DX : "header";
          return (0, I.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        ih = (0, k.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            className: Wp({
              appearance: t
            })
          }, r);
          return (0, I.jsx)(ds, {
            ref: n,
            ...o
          })
        }),
        dh = (0, k.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, I.jsx)(N.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        lh = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, I.jsx)(z.DX, {
              ref: n,
              ...o
            }) : (0, I.jsx)(Fc, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, I.jsx)(cs, {
            asChild: !0,
            children: s
          })
        }),
        ch = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? z.DX : "div";
          return (0, I.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        uh = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? z.DX : "footer";
          return (0, I.jsx)(s, {
            ref: n,
            ...o
          })
        });
      var fh = r(76733),
        ph = Object.defineProperty,
        hh = (e, t) => ph(e, "name", {
          value: t,
          configurable: !0
        }),
        vh = "Avatar",
        [mh, yh] = (0, vt.A)(vh),
        bh = [0, () => {}],
        [gh, Ch] = mh(vh),
        wh = k.forwardRef(hh(function(e, t) {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = k.useState("idle"), [a, i] = Oh();
          return (0, I.jsx)(gh, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: s,
            imageCount: a,
            setImageCount: i,
            children: (0, I.jsx)(mt.sG.span, {
              ...n,
              ref: t
            })
          })
        }, "Avatar")),
        xh = k.forwardRef(hh(function(e, t) {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...s
          } = e, a = Ch("AvatarImage", r);
          Ph(a.setImageCount);
          const i = _h(n, {
              referrerPolicy: s.referrerPolicy,
              crossOrigin: s.crossOrigin,
              loadingStatus: a.imageLoadingStatus,
              setLoadingStatus: a.setImageLoadingStatus
            }),
            d = (0, yt.c)(e => {
              o?.(e)
            }),
            l = k.useRef(i);
          return (0, Mt.N)(() => {
            const e = l.current;
            l.current = i, i !== e && d(i)
          }, [i, d]), "loaded" === i ? (0, I.jsx)(mt.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        }, "AvatarImage"));

      function _h(e, {
        loadingStatus: t,
        setLoadingStatus: r,
        referrerPolicy: n,
        crossOrigin: o
      }) {
        return (0, Mt.N)(() => {
          if (!e) return void r("error");
          const t = new window.Image,
            s = hh(e => {
              const t = e.currentTarget;
              r(jh(t))
            }, "handleLoad"),
            a = hh(() => r("error"), "handleError");
          return t.addEventListener("load", s), t.addEventListener("error", a), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(jh(t)), () => {
            t.removeEventListener("load", s), t.removeEventListener("error", a), r("idle")
          }
        }, [e, o, n, r]), t
      }

      function jh(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Oh() {
        let e = bh;
        if (fh.D) {
          e = k.useState(0);
          const [t] = e, r = k.useRef(!1);
          k.useEffect(() => {
            t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
          }, [t])
        }
        return e
      }

      function Ph(e) {
        fh.D && k.useEffect(() => (e(e => e + 1), () => {
          e(e => e - 1)
        }), [e])
      }

      function Rh(e) {
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

      function Sh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Dh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Rh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Nh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      hh(_h, "useImageLoadingStatus"), hh(jh, "getImageLoadingStatus"), hh(Oh, "useImageCount"), hh(Ph, "useUpdateImageCount");
      var Ih = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Th = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Dh(Dh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ih(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Nh(e.variantClassNames, e => Nh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        kh = Th({
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
        zh = "var(--foundry_v912w22)",
        Eh = "var(--foundry_v912w23)",
        Lh = Th({
          defaultClassName: "foundry_v912w2i",
          variantClassNames: {
            isDisabled: {
              true: "foundry_v912w2j",
              false: "foundry_v912w2k"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vh = Th({
          defaultClassName: "foundry_v912w27",
          variantClassNames: {
            size: {
              XS: "foundry_v912w28",
              SM: "foundry_v912w29",
              MD: "foundry_v912w2a",
              LG: "foundry_v912w2b",
              XL: "foundry_v912w2c"
            },
            isDisabled: {
              true: "foundry_v912w2d",
              false: "foundry_v912w2e"
            },
            isFallback: {
              true: "foundry_v912w2f",
              false: "foundry_v912w2g"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              isDisabled: !0,
              isFallback: !0
            }, "foundry_v912w2h"]
          ]
        }),
        Ah = "var(--foundry_v912w21)",
        Mh = "var(--foundry_v912w20)",
        Hh = Th({
          defaultClassName: "foundry_v912w2l",
          variantClassNames: {
            status: {
              online: "foundry_v912w2m",
              offline: "foundry_v912w2n",
              away: "foundry_v912w2o",
              busy: "foundry_v912w2p"
            },
            size: {
              XS: "foundry_v912w2q",
              SM: "foundry_v912w2r",
              MD: "foundry_v912w2s",
              LG: "foundry_v912w2t",
              XL: "foundry_v912w2u"
            },
            isDisabled: {
              true: "foundry_v912w2v",
              false: "foundry_v912w2w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Fh = (0, k.createContext)(null);

      function Bh() {
        const e = (0, k.useContext)(Fh);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Zh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, q.v6)({
            "data-testid": r,
            "aria-disabled": s,
            className: kh({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, I.jsx)(Fh.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, I.jsx)(wh, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        qh = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = Bh(), [i, d] = (0, k.useState)(!1);
          (0, k.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, q.v6)({
              className: Lh({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, I.jsx)("span", {
            className: Vh({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, I.jsx)(xh, {
              ref: o,
              ...c
            })
          })
        }),
        Xh = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, k.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = Bh(),
            d = a || "online",
            l = (0, _e.UP)(o, n),
            c = (0, q.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Hh({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [Mh]: t?.online,
                [Ah]: t?.offline,
                [zh]: t?.away,
                [Eh]: t?.busy
              })
            }, r);
          return (0, I.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Gh(e) {
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

      function Kh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Wh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Gh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $h = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wh(Wh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uh(e.variantClassNames, e => Uh(e, e => e.split(" ")[0]))
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
      const Qh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? z.DX : "nav";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Jh = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? z.DX : "div";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        ev = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, k.useRef)(null),
            i = (0, _e.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = (0, kc.i)(o, a),
            c = (0, q.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, T.clsx)($h({
                isActive: r
              }))
            }, d),
            u = e ? z.DX : "a";
          return (0, I.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        tv = (0, k.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, I.jsx)(ev, {
            ref: n,
            ...o,
            children: (0, I.jsx)(at.JG, {
              size: "LG",
              label: e
            })
          })
        }),
        rv = (0, k.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, I.jsx)(ev, {
            ref: n,
            ...o,
            children: (0, I.jsx)(at.c_, {
              size: "LG",
              label: e
            })
          })
        }),
        nv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            s = e ? z.DX : "span";
          return (0, I.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        ov = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? z.DX : "div";
          return (0, I.jsx)(s, {
            ...o,
            children: t
          })
        },
        sv = (0, k.createContext)(null);

      function av() {
        const e = (0, k.useContext)(sv);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const iv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, k.useId)(),
            s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? z.DX : "div";
          return (0, I.jsx)(sv.Provider, {
            value: {
              labelId: o
            },
            children: (0, I.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        dv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = av(), a = (0, q.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? z.DX : "label";
          return (0, I.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        lv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = av(), a = (0, q.v6)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? z.DX : Ki;
          return (0, I.jsxs)(i, {
            ...a,
            children: [(0, I.jsxs)($i, {
              ref: o,
              children: [(0, I.jsx)(Qi, {
                placeholder: r
              }), (0, I.jsx)(Ji, {})]
            }), (0, I.jsx)(ad, {
              children: (0, I.jsx)(Wi, {
                children: (0, I.jsx)(Yi, {
                  children: t
                })
              })
            })]
          })
        }),
        cv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r
            }, n),
            a = e ? z.DX : nd;
          return (0, I.jsx)(a, {
            ...s,
            ref: o,
            children: (0, I.jsx)(od, {
              children: t
            })
          })
        }),
        uv = (0, k.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? z.DX : "p";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var fv = r(25298),
        pv = Object.defineProperty,
        hv = (e, t) => pv(e, "name", {
          value: t,
          configurable: !0
        }),
        vv = "rovingFocusGroup.onEntryFocus",
        mv = {
          bubbles: !1,
          cancelable: !0
        },
        yv = "RovingFocusGroup",
        [bv, gv, Cv] = xn(yv),
        [wv, xv] = (0, vt.A)(yv, [Cv]),
        [_v, jv] = wv(yv),
        Ov = k.forwardRef(hv(function(e, t) {
          return (0, I.jsx)(bv.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, I.jsx)(bv.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, I.jsx)(Pv, {
                ...e,
                ref: t
              })
            })
          })
        }, "RovingFocusGroup")),
        Pv = k.forwardRef(hv(function(e, t) {
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
          } = e, f = k.useRef(null), p = (0, ht.s)(t, f), h = (0, bn.jH)(s), [v, m] = (0, _r.i)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: yv
          }), [y, b] = k.useState(!1), g = (0, yt.c)(l), C = gv(r), w = k.useRef(!1), [x, _] = k.useState(0);
          return k.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(vv, g), () => e.removeEventListener(vv, g)
          }, [g]), (0, I.jsx)(_v, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: v,
            onItemFocus: k.useCallback(e => m(e), [m]),
            onItemShiftTab: k.useCallback(() => b(!0), []),
            onFocusableItemAdd: k.useCallback(() => _(e => e + 1), []),
            onFocusableItemRemove: k.useCallback(() => _(e => e - 1), []),
            children: (0, I.jsx)(mt.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, pt.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, pt.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(vv, mv);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = C().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === v),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Iv(n, c)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, pt.mK)(e.onBlur, () => b(!1))
            })
          })
        }, "RovingFocusGroupImpl")),
        Rv = k.forwardRef(hv(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, Tt.B)(), l = s || d, c = jv("RovingFocusGroupItem", r), u = c.currentTabStopId === l, f = gv(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: v
          } = c, m = (0, fv.z)();
          return (0, Mt.N)(() => {
            if (m && n) return p(), () => h()
          }, [m, n, p, h]), k.useEffect(() => {
            if (!m && n) return p(), () => h()
          }, [m, n, p, h]), (0, I.jsx)(bv.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, I.jsx)(mt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, pt.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, pt.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, pt.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = Nv(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const r = f().filter(e => e.focusable);
                  let n = r.map(e => e.ref.current);
                  if ("last" === t) n.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && n.reverse();
                    const r = n.indexOf(e.currentTarget);
                    n = c.loop ? Tv(n, r + 1) : n.slice(r + 1)
                  }
                  setTimeout(() => Iv(n))
                }
              }),
              children: "function" == typeof a ? a({
                isCurrentTabStop: u,
                hasTabStop: null != v
              }) : a
            })
          })
        }, "RovingFocusGroupItem")),
        Sv = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };

      function Dv(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
      }

      function Nv(e, t, r) {
        const n = Dv(e.key, r);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return Sv[n]
      }

      function Iv(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }

      function Tv(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }
      hv(Dv, "getDirectionAwareKey"), hv(Nv, "getFocusIntent"), hv(Iv, "focusFirst"), hv(Tv, "wrapArray");
      var kv = Ov,
        zv = Rv,
        Ev = Object.defineProperty,
        Lv = (e, t) => Ev(e, "name", {
          value: t,
          configurable: !0
        }),
        Vv = k.forwardRef(Lv(function(e, t) {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, _r.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: "Toggle"
          });
          return (0, I.jsx)(mt.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, pt.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        }, "Toggle")),
        Av = Object.defineProperty,
        Mv = (e, t) => Av(e, "name", {
          value: t,
          configurable: !0
        }),
        Hv = "ToggleGroup",
        [Fv, Bv] = (0, vt.A)(Hv, [xv]),
        Zv = xv(),
        qv = k.forwardRef(Mv(function(e, t) {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, I.jsx)(Kv, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, I.jsx)(Wv, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Hv}\``)
        }, "ToggleGroup")),
        [Xv, Gv] = Fv(Hv),
        Kv = k.forwardRef(Mv(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = Mv(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, _r.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: Hv
          });
          return (0, I.jsx)(Xv, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: k.useMemo(() => a ? [a] : [], [a]),
            onItemActivate: i,
            onItemDeactivate: k.useCallback(() => i(""), [i]),
            children: (0, I.jsx)($v, {
              ...s,
              ref: t
            })
          })
        }, "ToggleGroupImplSingle")),
        Wv = k.forwardRef(Mv(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = Mv(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, _r.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: Hv
          }), d = k.useCallback(e => i((t = []) => [...t, e]), [i]), l = k.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, I.jsx)(Xv, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: a,
            onItemActivate: d,
            onItemDeactivate: l,
            children: (0, I.jsx)($v, {
              ...s,
              ref: t
            })
          })
        }, "ToggleGroupImplMultiple")),
        [Uv, Yv] = Fv(Hv),
        $v = k.forwardRef(Mv(function(e, t) {
          const {
            __scopeToggleGroup: r,
            disabled: n = !1,
            rovingFocus: o = !0,
            orientation: s,
            dir: a,
            loop: i = !0,
            ...d
          } = e, l = Zv(r), c = (0, bn.jH)(a), u = {
            dir: c,
            ...d
          };
          return (0, I.jsx)(Uv, {
            scope: r,
            rovingFocus: o,
            disabled: n,
            children: o ? (0, I.jsx)(kv, {
              asChild: !0,
              ...l,
              orientation: s,
              dir: c,
              loop: i,
              children: (0, I.jsx)(mt.sG.div, {
                ...u,
                ref: t
              })
            }) : (0, I.jsx)(mt.sG.div, {
              ...u,
              ref: t
            })
          })
        }, "ToggleGroupImpl")),
        Qv = "ToggleGroupItem",
        Jv = k.forwardRef(Mv(function(e, t) {
          const r = Gv(Qv, e.__scopeToggleGroup),
            n = Yv(Qv, e.__scopeToggleGroup),
            o = Zv(e.__scopeToggleGroup),
            s = r.value.includes(e.value),
            a = n.disabled || e.disabled,
            i = {
              ...e,
              pressed: s,
              disabled: a
            },
            d = k.useRef(null);
          return n.rovingFocus ? (0, I.jsx)(zv, {
            asChild: !0,
            ...o,
            focusable: !a,
            active: s,
            ref: d,
            children: (0, I.jsx)(em, {
              ...i,
              ref: t
            })
          }) : (0, I.jsx)(em, {
            ...i,
            ref: t
          })
        }, "ToggleGroupItem")),
        em = k.forwardRef(Mv(function(e, t) {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = Gv(Qv, r), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === s.type ? a : void 0;
          return (0, I.jsx)(Vv, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }, "ToggleGroupItemImpl"));

      function tm(e) {
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

      function rm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = tm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function om(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        am = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nm(nm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return om(e.variantClassNames, e => om(e, e => e.split(" ")[0]))
            }
          }, t
        },
        im = "var(--foundry_zxwkyk2)",
        dm = "var(--foundry_zxwkyk3)",
        lm = am({
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
        cm = am({
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
        um = am({
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
        fm = "var(--foundry_zxwkyk1)",
        pm = "var(--foundry_zxwkyk0)",
        hm = am({
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
      const vm = (0, k.createContext)(null);

      function mm() {
        const e = (0, k.useContext)(vm);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const ym = (0, k.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, q.v6)({
            "data-testid": e,
            className: lm({
              size: t
            }),
            type: r
          }, n);
          return (0, I.jsx)(vm.Provider, {
            value: {
              size: t
            },
            children: (0, I.jsx)(qv, {
              ref: o,
              ...s
            })
          })
        }),
        bm = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = mm(), o = (0, q.v6)({
            "data-testid": e,
            className: cm({
              size: n
            })
          }, t);
          return (0, I.jsx)(Jv, {
            ref: r,
            ...o
          })
        }),
        gm = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = mm(), o = it[e];
          return (0, I.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        Cm = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            "data-testid": e,
            className: hm({
              status: r
            }),
            style: (0, X.DI)({
              [pm]: t?.online,
              [fm]: t?.offline,
              [im]: t?.away,
              [dm]: t?.busy
            })
          }, n);
          return (0, I.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        wm = (0, k.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = mm(), s = (0, q.v6)({
            "data-testid": e,
            className: um({
              variant: t,
              size: o
            })
          }, r);
          return (0, I.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var xm = Object.defineProperty,
        _m = (e, t) => xm(e, "name", {
          value: t,
          configurable: !0
        }),
        jm = "Popover",
        [Om, Pm] = (0, vt.A)(jm, [Xt]),
        Rm = Xt(),
        [Sm, Dm] = Om(jm),
        Nm = _m(e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !1
          } = e, i = Rm(t), d = k.useRef(null), [l, c] = k.useState(!1), [u, f] = (0, _r.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: jm
          });
          return (0, I.jsx)(sr, {
            ...i,
            children: (0, I.jsx)(Sm, {
              scope: t,
              contentId: (0, Tt.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: k.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: k.useCallback(() => c(!0), []),
              onCustomAnchorRemove: k.useCallback(() => c(!1), []),
              modal: a,
              children: r
            })
          })
        }, "Popover"),
        Im = k.forwardRef(_m(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Dm("PopoverAnchor", r), s = Rm(r), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: i
          } = o;
          return k.useEffect(() => (a(), () => i()), [a, i]), (0, I.jsx)(ar, {
            ...s,
            ...n,
            ref: t
          })
        }, "PopoverAnchor")),
        Tm = k.forwardRef(_m(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Dm("PopoverTrigger", r), s = Rm(r), a = (0, ht.s)(t, o.triggerRef), i = (0, I.jsx)(mt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": Xm(o.open),
            ...n,
            ref: a,
            onClick: (0, pt.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, I.jsx)(ar, {
            asChild: !0,
            ...s,
            children: i
          })
        }, "PopoverTrigger")),
        km = "PopoverPortal",
        [zm, Em] = Om(km, {
          forceMount: void 0
        }),
        Lm = _m(e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Dm(km, t);
          return (0, I.jsx)(zm, {
            scope: t,
            forceMount: r,
            children: (0, I.jsx)(mr, {
              present: r || s.open,
              children: (0, I.jsx)(fr, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        }, "PopoverPortal"),
        Vm = "PopoverContent",
        Am = k.forwardRef(_m(function(e, t) {
          const r = Em(Vm, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Dm(Vm, e.__scopePopover);
          return (0, I.jsx)(mr, {
            present: n || s.open,
            children: s.modal ? (0, I.jsx)(Hm, {
              ...o,
              ref: t
            }) : (0, I.jsx)(Fm, {
              ...o,
              ref: t
            })
          })
        }, "PopoverContent")),
        Mm = (0, xr.TL)("PopoverContent.RemoveScroll"),
        Hm = k.forwardRef(_m(function(e, t) {
          const r = Dm(Vm, e.__scopePopover),
            n = k.useRef(null),
            o = (0, ht.s)(t, n),
            s = k.useRef(!1);
          return k.useEffect(() => {
            const e = n.current;
            if (e) return (0, Mo.Eq)(e)
          }, []), (0, I.jsx)(Ao.A, {
            as: Mm,
            allowPinchZoom: !0,
            children: (0, I.jsx)(Bm, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, pt.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, pt.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, pt.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        Fm = k.forwardRef(_m(function(e, t) {
          const r = Dm(Vm, e.__scopePopover),
            n = k.useRef(!1),
            o = k.useRef(!1);
          return (0, I.jsx)(Bm, {
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
        }, "PopoverContentNonModal")),
        Bm = k.forwardRef(_m(function(e, t) {
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
          } = e, f = Dm(Vm, r), p = Rm(r);
          return (0, Vo.Oh)(), (0, I.jsx)(Oo, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, I.jsx)(xt, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, I.jsx)(ir, {
                "data-state": Xm(f.open),
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
        }, "PopoverContentImpl")),
        Zm = k.forwardRef(_m(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Dm("PopoverClose", r);
          return (0, I.jsx)(mt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, pt.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "PopoverClose")),
        qm = k.forwardRef(_m(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Rm(r);
          return (0, I.jsx)(dr, {
            ...o,
            ...n,
            ref: t
          })
        }, "PopoverArrow"));

      function Xm(e) {
        return e ? "open" : "closed"
      }
      _m(Xm, "getState");
      var Gm = Nm,
        Km = Im,
        Wm = Tm,
        Um = Lm,
        Ym = Am,
        $m = Zm,
        Qm = qm;

      function Jm(e) {
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

      function ey(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ty(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ey(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Jm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ry(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ny = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        oy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ty(ty({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ny(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ry(e.variantClassNames, e => ry(e, e => e.split(" ")[0]))
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
      const sy = (0, k.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        ay = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, _e.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, q.v6)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, I.jsx)(sy.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, I.jsx)(Gm, {
              ...a
            })
          })
        },
        iy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, I.jsx)(Wm, {
            ref: r,
            ...n
          })
        }),
        dy = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        ly = (0, k.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, k.useContext)(sy), a = (0, k.useRef)(null), i = (0, _e.UP)(a, o), {
            buttonProps: d
          } = (0, _e.sL)(n, a), l = (0, q.v6)({
            "data-testid": r,
            className: oy({
              size: t
            })
          }, d), c = s ? at.rX : at.yQ;
          return (0, I.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, I.jsx)(c, {
              label: "",
              size: dy[t]
            })]
          })
        }),
        cy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(Km, {
            ref: r,
            ...n
          })
        }),
        uy = (0, k.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, I.jsx)(Ym, {
            ref: n,
            ...o
          })
        }),
        fy = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, I.jsx)(Qm, {
            ref: r,
            ...n
          })
        }),
        py = e => (0, I.jsx)(Um, {
          ...e
        }),
        hy = e => (0, I.jsx)($m, {
          ...e
        });

      function vy(e) {
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

      function my(e, t) {
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
          t % 2 ? my(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = vy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function by(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = yy(yy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return by(e.variantClassNames, e => by(e, e => e.split(" ")[0]))
            }
          }, t
        },
        wy = "var(--foundry_rmorls2)",
        xy = Cy({
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
        _y = "var(--foundry_rmorls0)",
        jy = Cy({
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
        Oy = "var(--foundry_rmorls3)",
        Py = "var(--foundry_rmorls1)",
        Ry = Cy({
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
        Sy = Object.defineProperty,
        Dy = (e, t) => Sy(e, "name", {
          value: t,
          configurable: !0
        }),
        Ny = "Progress",
        [Iy, Ty] = (0, vt.A)(Ny),
        [ky, zy] = Iy(Ny),
        Ey = k.forwardRef(Dy(function(e, t) {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = Vy,
            ...a
          } = e;
          !o && 0 !== o || Hy(o) || console.error(By(`${o}`, "Progress"));
          const i = Hy(o) ? o : 100;
          null === n || Fy(n, i) || console.error(Zy(`${n}`, "Progress"));
          const d = Fy(n, i) ? n : null,
            l = My(d) ? s(d, i) : void 0;
          return (0, I.jsx)(ky, {
            scope: r,
            value: d,
            max: i,
            children: (0, I.jsx)(mt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": My(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Ay(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        }, "Progress")),
        Ly = k.forwardRef(Dy(function(e, t) {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = zy("ProgressIndicator", r);
          return (0, I.jsx)(mt.sG.div, {
            "data-state": Ay(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        }, "ProgressIndicator"));

      function Vy(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Ay(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function My(e) {
        return "number" == typeof e
      }

      function Hy(e) {
        return My(e) && !isNaN(e) && e > 0
      }

      function Fy(e, t) {
        return My(e) && !isNaN(e) && e <= t && e >= 0
      }

      function By(e, t) {
        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
      }

      function Zy(e, t) {
        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
      }
      Dy(Vy, "defaultGetValueLabel"), Dy(Ay, "getProgressState"), Dy(My, "isNumber"), Dy(Hy, "isValidMaxNumber"), Dy(Fy, "isValidValueNumber"), Dy(By, "getInvalidMaxError"), Dy(Zy, "getInvalidValueError");
      var qy = Ey,
        Xy = Ly;
      const Gy = (0, k.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Ky = (0, k.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, I.jsx)(Gy.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, I.jsx)(Wy, {
              ...n,
              ref: o
            })
          })
        }),
        Wy = (0, k.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? z.DX : "div";
          return (0, I.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        Uy = (0, k.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, k.useContext)(Gy), i = (0, q.v6)({
            "data-testid": e,
            className: jy({
              size: a
            }),
            value: o,
            max: s,
            style: (0, X.DI)({
              [Oy]: t
            }),
            "data-track": !0
          }, r);
          return (0, I.jsx)(qy, {
            ref: n,
            ...i
          })
        }),
        Yy = (0, k.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, k.useContext)(Gy), i = a ? "-100%" : `-${100-s}%`, d = (0, q.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [_y]: i,
              [Py]: `${t}ms`,
              [wy]: r
            })
          }, n);
          return (0, I.jsx)(Xy, {
            ref: o,
            ...d
          })
        }),
        $y = (0, k.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, k.useContext)(Gy), s = (0, q.v6)({
            "data-testid": t,
            className: xy({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? z.DX : "span";
          return (0, I.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        Qy = (0, k.forwardRef)(({
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
          } = (0, k.useContext)(Gy), l = (0, q.v6)({
            "data-testid": e,
            className: xy({
              size: a
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, I.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, I.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, I.jsx)("span", {
              className: Ry({
                size: a
              }),
              children: "%"
            })]
          }) : (0, I.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", s]
          })
        });
      var Jy = Object.defineProperty,
        eb = (e, t) => Jy(e, "name", {
          value: t,
          configurable: !0
        }),
        tb = "Collapsible",
        [rb, nb] = (0, vt.A)(tb),
        [ob, sb] = rb(tb),
        ab = k.forwardRef(eb(function(e, t) {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: s,
            onOpenChange: a,
            ...i
          } = e, [d, l] = (0, _r.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: tb
          });
          return (0, I.jsx)(ob, {
            scope: r,
            disabled: s,
            contentId: (0, Tt.B)(),
            open: d,
            onOpenToggle: k.useCallback(() => l(e => !e), [l]),
            children: (0, I.jsx)(mt.sG.div, {
              "data-state": ub(d),
              "data-disabled": s ? "" : void 0,
              ...i,
              ref: t
            })
          })
        }, "Collapsible")),
        ib = k.forwardRef(eb(function(e, t) {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = sb("CollapsibleTrigger", r);
          return (0, I.jsx)(mt.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": ub(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, pt.mK)(e.onClick, o.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        db = "CollapsibleContent",
        lb = k.forwardRef(eb(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = sb(db, e.__scopeCollapsible);
          return (0, I.jsx)(mr, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, I.jsx)(cb, {
              ...n,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        cb = k.forwardRef(eb(function(e, t) {
          const {
            __scopeCollapsible: r,
            present: n,
            children: o,
            ...s
          } = e, a = sb(db, r), [i, d] = k.useState(n), l = k.useRef(null), c = (0, ht.s)(t, l), u = k.useRef(0), f = u.current, p = k.useRef(0), h = p.current, v = a.open || i, m = k.useRef(v), y = k.useRef(void 0);
          return k.useEffect(() => {
            const e = requestAnimationFrame(() => m.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, Mt.N)(() => {
            const e = l.current;
            if (e) {
              y.current = y.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              u.current = t.height, p.current = t.width, m.current || (e.style.transitionDuration = y.current.transitionDuration, e.style.animationName = y.current.animationName), d(n)
            }
          }, [a.open, n]), (0, I.jsx)(mt.sG.div, {
            "data-state": ub(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            id: a.contentId,
            hidden: !v,
            ...s,
            ref: c,
            style: {
              "--radix-collapsible-content-height": f ? `${f}px` : void 0,
              "--radix-collapsible-content-width": h ? `${h}px` : void 0,
              ...e.style
            },
            children: v && o
          })
        }, "CollapsibleContentImpl"));

      function ub(e) {
        return e ? "open" : "closed"
      }
      eb(ub, "getState");
      var fb = ab,
        pb = ib,
        hb = lb,
        vb = Object.defineProperty,
        mb = (e, t) => vb(e, "name", {
          value: t,
          configurable: !0
        }),
        yb = "Accordion",
        bb = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [gb, Cb, wb] = xn(yb),
        [xb, _b] = (0, vt.A)(yb, [wb, nb]),
        jb = nb(),
        Ob = k.forwardRef(mb(function(e, t) {
          const {
            type: r,
            ...n
          } = e, o = n, s = n;
          return (0, I.jsx)(gb.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, I.jsx)(Ib, {
              ...s,
              ref: t
            }) : (0, I.jsx)(Nb, {
              ...o,
              ref: t
            })
          })
        }, "Accordion")),
        [Pb, Rb] = xb(yb),
        [Sb, Db] = xb(yb, {
          collapsible: !1
        }),
        Nb = k.forwardRef(mb(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = mb(() => {}, "onValueChange"),
            collapsible: s = !1,
            ...a
          } = e, [i, d] = (0, _r.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: yb
          });
          return (0, I.jsx)(Pb, {
            scope: e.__scopeAccordion,
            value: k.useMemo(() => i ? [i] : [], [i]),
            onItemOpen: d,
            onItemClose: k.useCallback(() => s && d(""), [s, d]),
            children: (0, I.jsx)(Sb, {
              scope: e.__scopeAccordion,
              collapsible: s,
              children: (0, I.jsx)(zb, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        Ib = k.forwardRef(mb(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = mb(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, _r.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: yb
          }), d = k.useCallback(e => i((t = []) => [...t, e]), [i]), l = k.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, I.jsx)(Pb, {
            scope: e.__scopeAccordion,
            value: a,
            onItemOpen: d,
            onItemClose: l,
            children: (0, I.jsx)(Sb, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, I.jsx)(zb, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Tb, kb] = xb(yb),
        zb = k.forwardRef(mb(function(e, t) {
          const {
            __scopeAccordion: r,
            disabled: n,
            dir: o,
            orientation: s = "vertical",
            ...a
          } = e, i = k.useRef(null), d = (0, ht.s)(i, t), l = Cb(r), c = "ltr" === (0, bn.jH)(o), u = (0, pt.mK)(e.onKeyDown, e => {
            if (!bb.includes(e.key)) return;
            const t = e.target,
              r = l().filter(e => !e.ref.current?.disabled),
              n = r.findIndex(e => e.ref.current === t),
              o = r.length;
            if (-1 === n) return;
            e.preventDefault();
            let a = n;
            const i = o - 1,
              d = mb(() => {
                a = n + 1, a > i && (a = 0)
              }, "moveNext"),
              u = mb(() => {
                a = n - 1, a < 0 && (a = i)
              }, "movePrev");
            switch (e.key) {
              case "Home":
                a = 0;
                break;
              case "End":
                a = i;
                break;
              case "ArrowRight":
                "horizontal" === s && (c ? d() : u());
                break;
              case "ArrowDown":
                "vertical" === s && d();
                break;
              case "ArrowLeft":
                "horizontal" === s && (c ? u() : d());
                break;
              case "ArrowUp":
                "vertical" === s && u()
            }
            const f = a % o;
            r[f].ref.current?.focus()
          });
          return (0, I.jsx)(Tb, {
            scope: r,
            disabled: n,
            direction: o,
            orientation: s,
            children: (0, I.jsx)(gb.Slot, {
              scope: r,
              children: (0, I.jsx)(mt.sG.div, {
                ...a,
                "data-orientation": s,
                ref: d,
                onKeyDown: n ? void 0 : u
              })
            })
          })
        }, "AccordionImpl")),
        Eb = "AccordionItem",
        [Lb, Vb] = xb(Eb),
        Ab = k.forwardRef(mb(function(e, t) {
          const {
            __scopeAccordion: r,
            value: n,
            ...o
          } = e, s = kb(Eb, r), a = Rb(Eb, r), i = jb(r), d = (0, Tt.B)(), l = n && a.value.includes(n) || !1, c = s.disabled || e.disabled;
          return (0, I.jsx)(Lb, {
            scope: r,
            open: l,
            disabled: c,
            triggerId: d,
            children: (0, I.jsx)(fb, {
              "data-orientation": s.orientation,
              "data-state": Zb(l),
              ...i,
              ...o,
              ref: t,
              disabled: c,
              open: l,
              onOpenChange: e => {
                e ? a.onItemOpen(n) : a.onItemClose(n)
              }
            })
          })
        }, "AccordionItem")),
        Mb = k.forwardRef(mb(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = kb(yb, r), s = Vb("AccordionHeader", r);
          return (0, I.jsx)(mt.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": Zb(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        }, "AccordionHeader")),
        Hb = "AccordionTrigger",
        Fb = k.forwardRef(mb(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = kb(yb, r), s = Vb(Hb, r), a = Db(Hb, r), i = jb(r);
          return (0, I.jsx)(gb.ItemSlot, {
            scope: r,
            children: (0, I.jsx)(pb, {
              "aria-disabled": s.open && !a.collapsible || void 0,
              "data-orientation": o.orientation,
              id: s.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        Bb = k.forwardRef(mb(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = kb(yb, r), s = Vb("AccordionContent", r), a = jb(r);
          return (0, I.jsx)(hb, {
            role: "region",
            "aria-labelledby": s.triggerId,
            "data-orientation": o.orientation,
            ...a,
            ...n,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        }, "AccordionContent"));

      function Zb(e) {
        return e ? "open" : "closed"
      }
      mb(Zb, "getState");
      var qb = Ob,
        Xb = Ab,
        Gb = Mb,
        Kb = Fb,
        Wb = Bb;

      function Ub(e) {
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

      function $b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yb(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ub(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yb(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        eg = "foundry_1vzsjid2",
        tg = "foundry_1vzsjidm",
        rg = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $b($b({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Jb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qb(e.variantClassNames, e => Qb(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1vzsjid5",
          variantClassNames: {
            mode: {
              solid: "foundry_1vzsjid6",
              alpha: "foundry_1vzsjid7"
            },
            layer: {
              0: "foundry_1vzsjid8",
              1: "foundry_1vzsjid9",
              2: "foundry_1vzsjida",
              3: "foundry_1vzsjidb"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              mode: "alpha",
              layer: 0
            }, "foundry_1vzsjidc"],
            [{
              mode: "alpha",
              layer: 1
            }, "foundry_1vzsjidd"],
            [{
              mode: "alpha",
              layer: 2
            }, "foundry_1vzsjide"],
            [{
              mode: "alpha",
              layer: 3
            }, "foundry_1vzsjidf"]
          ]
        });
      const ng = (0, k.createContext)({
          mode: "solid",
          layer: 0
        }),
        og = (0, k.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, I.jsx)(ng.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, I.jsx)(sg, {
            ...n,
            ref: o,
            type: r
          })
        })),
        sg = (0, k.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, I.jsx)(qb, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        ag = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, k.useContext)(ng), s = (0, q.v6)({
            className: rg({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, I.jsx)(Xb, {
            ref: r,
            ...s
          })
        }),
        ig = (0, k.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, I.jsx)(Gb, {
            ref: r,
            ...n
          })
        }),
        dg = (0, k.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, I.jsx)(Kb, {
            ref: n,
            ...o,
            children: r.asChild && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, I.jsx)("span", {
                className: eg,
                children: e.props.children
              })
            }) : (0, I.jsx)("span", {
              className: eg,
              children: e
            })
          })
        }),
        lg = (0, k.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = it[e],
            o = (0, q.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, I.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        cg = (0, k.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = it[e],
            o = (0, q.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, I.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        ug = (0, k.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, I.jsx)(Wb, {
            ref: o,
            ...s,
            children: t && (0, k.isValidElement)(e) ? (0, k.cloneElement)(e, {
              children: (0, I.jsx)("div", {
                className: tg,
                children: e.props.children
              })
            }) : (0, I.jsx)("div", {
              className: tg,
              children: e
            })
          })
        }),
        fg = {
          MD: X.LU.global.spacing.dimensions[200],
          LG: X.LU.global.spacing.dimensions[250],
          XL: X.LU.global.spacing.dimensions[300]
        },
        pg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: fg[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, I.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        hg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: fg[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, I.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        vg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: fg[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, I.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, I.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        mg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: fg[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, I.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        yg = (0, k.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: fg[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, I.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function bg(e) {
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

      function gg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gg(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = bg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function wg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var xg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        _g = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cg(Cg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) xg(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wg(e.variantClassNames, e => wg(e, e => e.split(" ")[0]))
            }
          }, t
        })({
          defaultClassName: "foundry_1lhhotm0",
          variantClassNames: {
            size: {
              MD: "foundry_1lhhotm1",
              LG: "foundry_1lhhotm2",
              XL: "foundry_1lhhotm3"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const jg = (0, k.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, s) => {
        const a = (0, q.v6)({
            className: _g({
              size: t
            }),
            size: t
          }, o),
          i = R[e];
        if (r && (0, k.isValidElement)(n)) {
          const e = (0, k.cloneElement)(n, n.props, (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(i, {
              size: t,
              "aria-hidden": !0
            }), n.props.children]
          }));
          return (0, I.jsx)(D.$, {
            asChild: !0,
            size: t,
            ref: s,
            ...o,
            children: e
          })
        }
        return (0, I.jsx)(D.$, {
          ...a,
          ref: s,
          children: (0, I.jsx)(i, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    }
  }
]);