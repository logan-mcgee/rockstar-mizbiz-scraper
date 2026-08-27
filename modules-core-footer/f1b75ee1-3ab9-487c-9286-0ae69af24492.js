try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f1b75ee1-3ab9-487c-9286-0ae69af24492", e._sentryDebugIdIdentifier = "sentry-dbid-f1b75ee1-3ab9-487c-9286-0ae69af24492")
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
  [4630], {
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
        ChipGroup: () => j,
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
        Popover: () => _,
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
        Arrow: () => hn,
        Content: () => pn,
        Portal: () => vn,
        Root: () => un,
        Trigger: () => fn,
        useTooltipContext: () => cn
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Os,
        Close: () => Ns,
        Content: () => Cs,
        Controls: () => Ps,
        CssVars: () => zs,
        Download: () => Ts,
        Image: () => _s,
        Keyboard: () => Ss,
        LightboxContext: () => us,
        OpenIcon: () => ys,
        Overlay: () => gs,
        Portal: () => bs,
        Reset: () => Is,
        Root: () => fs,
        RootImplContext: () => ps,
        Thumbnail: () => ms,
        Trigger: () => vs,
        Zoom: () => Ds,
        ZoomPan: () => ws
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => Ki,
        Description: () => ed,
        Hint: () => td,
        Label: () => Ji,
        Option: () => rd,
        OptionIcon: () => od,
        OptionText: () => nd,
        Portal: () => sd,
        Root: () => Gi,
        ScrollArea: () => Ui,
        StatusIcon: () => id,
        StatusRoot: () => ad,
        StatusText: () => dd,
        Trigger: () => $i,
        TriggerIcon: () => Qi,
        TriggerText: () => Yi,
        Viewport: () => Wi,
        useDropdownContext: () => Xi
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Rd,
        Input: () => Od,
        Label: () => Pd,
        Root: () => _d,
        useSwitchContext: () => jd
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Nd,
        CheckMD: () => Dd,
        CheckXL: () => Id,
        DashLG: () => zd,
        DashMD: () => Td,
        DashXL: () => kd
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Qd,
        ErrorText: () => Jd,
        Group: () => rl,
        GroupDescription: () => ol,
        GroupErrorText: () => al,
        GroupItems: () => sl,
        GroupLabel: () => nl,
        Input: () => $d,
        Label: () => Yd,
        Root: () => Ud,
        useGroupContext: () => tl
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => xl,
        Hint: () => jl,
        Input: () => wl,
        Label: () => Cl,
        Root: () => gl,
        RootContext: () => yl,
        StatusIcon: () => Ol,
        StatusRoot: () => _l,
        StatusText: () => Pl,
        useTextAreaContext: () => bl
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Ql,
        DotMD: () => Yl,
        DotXL: () => Jl
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Bl,
        Input: () => tc,
        Label: () => Fl,
        Option: () => ec,
        OptionDescription: () => nc,
        OptionLabel: () => rc,
        Options: () => Hl,
        Root: () => Ml,
        StatusIcon: () => ql,
        StatusRoot: () => Zl,
        StatusText: () => Xl,
        useRadioGroupContext: () => Al
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Pc,
        Control: () => jc,
        Description: () => Sc,
        Hint: () => xc,
        Icon: () => Oc,
        Input: () => _c,
        Label: () => wc,
        PasswordButton: () => Rc,
        Root: () => Cc,
        StatusIcon: () => Nc,
        StatusRoot: () => Dc,
        StatusText: () => Ic
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => eu,
        CloseButton: () => du,
        Description: () => ou,
        ErrorText: () => iu,
        Footer: () => au,
        Header: () => Jc,
        Icon: () => ru,
        Link: () => su,
        Root: () => Qc,
        RootContext: () => $c,
        Title: () => nu,
        iconStatusMap: () => tu,
        useAlertContext: () => Yc
      });
      var h = {};
      r.r(h), r.d(h, {
        Alert: () => Ou,
        CloseButton: () => Su,
        Description: () => _u,
        Icon: () => ju,
        Link: () => Ru,
        PaginationCounter: () => Tu,
        PaginationNav: () => Du,
        PaginationNextButton: () => Nu,
        PaginationPrevButton: () => Iu,
        PaginationViewport: () => Pu,
        Root: () => wu,
        RootContext: () => gu,
        iconStatusMap: () => xu,
        useAlertBannerContext: () => Cu
      });
      var v = {};
      r.r(v), r.d(v, {
        CloseButton: () => Ku,
        Icon: () => Gu,
        Label: () => Xu,
        Root: () => qu,
        RootContext: () => Bu,
        useTagContext: () => Zu
      });
      var m = {};
      r.r(m), r.d(m, {
        Action: () => Yf,
        CloseButton: () => Qf,
        Description: () => Wf,
        Icon: () => $f,
        Provider: () => Zf,
        Root: () => Kf,
        RootContext: () => Xf,
        Viewport: () => qf,
        iconAppearanceMap: () => Uf,
        useToastContext: () => Gf
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => pp,
        Item: () => fp,
        OverflowMenu: () => hp,
        OverflowMenuItem: () => vp,
        Root: () => up,
        RootContext: () => cp,
        useBreadcrumbsContext: () => lp
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => Pp,
        Label: () => Op,
        Root: () => _p,
        useBadgeContext: () => jp
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => Mp,
        Root: () => Ep,
        Scrollbar: () => Vp,
        Thumb: () => Ap,
        Viewport: () => Lp
      });
      var C = {};
      r.r(C), r.d(C, {
        ActionArea: () => lh,
        CloseButton: () => dh,
        Content: () => eh,
        Description: () => rh,
        Footer: () => ch,
        Header: () => sh,
        HeaderButton: () => ih,
        HeaderTitle: () => ah,
        Layout: () => oh,
        Overlay: () => Jp,
        Portal: () => Qp,
        Root: () => Up,
        ScrollArea: () => nh,
        Title: () => th,
        Trigger: () => Yp
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => Zh,
        Root: () => Bh,
        StatusIndicator: () => qh,
        useAvatarContext: () => Fh
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => nv,
        Dropdown: () => dv,
        DropdownLabel: () => iv,
        Ellipsis: () => rv,
        Item: () => Jh,
        Label: () => cv,
        Next: () => tv,
        Option: () => lv,
        Pages: () => Qh,
        Prev: () => ev,
        ResultsPerPage: () => av,
        Root: () => Yh
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => bm,
        Item: () => ym,
        Label: () => Cm,
        Root: () => mm,
        StatusIndicator: () => gm,
        useChipGroupContext: () => vm
      });
      var _ = {};
      r.r(_), r.d(_, {
        Anchor: () => ly,
        Arrow: () => uy,
        Close: () => py,
        Content: () => cy,
        Portal: () => fy,
        Root: () => sy,
        RootContext: () => oy,
        Trigger: () => ay,
        TriggerButton: () => dy
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => Uy,
        Label: () => $y,
        Root: () => Gy,
        Track: () => Wy,
        UnitLabel: () => Yy
      });
      var P = {};
      r.r(P), r.d(P, {
        Content: () => cg,
        Header: () => ag,
        Icon: () => dg,
        Item: () => sg,
        Root: () => ng,
        Trigger: () => ig,
        TriggerIcon: () => lg
      });
      var R = {};
      r.r(R), r.d(R, {
        PC: () => hg,
        PS4: () => fg,
        PS5: () => pg,
        XboxOne: () => vg,
        XboxSeriesXS: () => mg
      });
      var S = {};
      r.r(S), r.d(S, {
        PlatformButton: () => jg
      });
      var D = r(34629),
        N = r(57491),
        I = r(39793),
        T = r(4921),
        z = r(4637),
        k = r(55267);

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
      const Z = (0, z.forwardRef)(({
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
          c = o ? k.DX : d;
        return (0, I.jsx)(c, {
          ref: i,
          className: (0, T.$)(B({
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

      function $(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Y = (e, t, r) => {
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
            for (var [l, c] of e.compoundVariants) Y(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $(e.variantClassNames, e => $(e, e => e.split(" ")[0]))
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
      const ne = (0, z.forwardRef)(({
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
          u = e ? k.DX : "div";
        return (0, I.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, I.jsx)(k.xV, {
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
      const fe = (0, z.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? k.DX : "p",
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
      const he = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? k.DX : "p",
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
        ve = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "h1",
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
      const ye = (0, z.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? k.DX : `h${7===t?6:t}`,
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
      const ge = (0, z.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? k.DX : "p",
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
        xe = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? k.DX : we[r] || "span",
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
      var je = r(52514),
        _e = r(93529),
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
      var ze = r(90004);

      function ke(e) {
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
            n = e, o = t, s = r[t], (o = ke(o)) in n ? Object.defineProperty(n, o, {
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
      _e.os.registerPlugin(Oe.L);
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
      class $e {
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
      class Ye {
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
          super(), this.width = e, this.height = t, this.opener = new Ye({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new $e({
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
      var at = r(45866);
      const it = (0, Xe.YK)({
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
      var dt = "foundry_bc732x1";
      const lt = (0, z.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, ze.vC)(e, e => r?.(e), [r]), (0, I.jsx)(fe, {
        size: "XS",
        className: (0, T.$)("foundry_bc732x0", {
          [dt]: t
        }),
        asChild: !0,
        children: (0, I.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var ct, ut = r(71433),
        ft = r(44752),
        pt = r(85049),
        ht = r(72579),
        vt = r(41988),
        mt = r(7198),
        yt = Object.defineProperty,
        bt = (e, t) => yt(e, "name", {
          value: t,
          configurable: !0
        }),
        gt = "dismissableLayer.update",
        Ct = z.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        wt = z.forwardRef(bt(function(e, t) {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: a,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = z.useContext(Ct), [u, f] = z.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, h] = z.useState({}), v = (0, pt.s)(t, f), m = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? m.indexOf(y) : -1, g = u ? m.indexOf(u) : -1, C = c.layersWithOutsidePointerEventsDisabled.size > 0, w = g >= b, x = z.useRef(!1), j = Ot(e => {
            s?.(e), i?.(e), e.defaultPrevented || d?.()
          }, {
            ownerDocument: p,
            deferPointerDownOutside: n,
            isDeferredPointerDownOutsideRef: x,
            dismissableSurfaces: c.dismissableSurfaces,
            shouldHandlePointerDownOutside: z.useCallback(e => {
              if (!(e instanceof Node)) return !1;
              const t = [...c.branches].some(t => t.contains(e));
              return w && !t
            }, [c.branches, w])
          }), _ = Pt(e => {
            if (n && x.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (a?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p), O = !!u && g === m.length - 1, P = (0, mt.c)(e => {
            "Escape" === e.key && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          });
          return z.useEffect(() => {
            if (O) return p.addEventListener("keydown", P, {
              capture: !0
            }), () => p.removeEventListener("keydown", P, {
              capture: !0
            })
          }, [p, O, P]), z.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (ct = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Rt(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = ct))
            }
          }, [u, p, r, c]), z.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Rt())
          }, [u, c]), z.useEffect(() => {
            const e = bt(() => h({}), "handleUpdate");
            return document.addEventListener(gt, e), () => document.removeEventListener(gt, e)
          }, []), (0, I.jsx)(vt.sG.div, {
            ...l,
            ref: v,
            style: {
              pointerEvents: C ? w ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, ft.mK)(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: (0, ft.mK)(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: (0, ft.mK)(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        }, "DismissableLayer")),
        xt = z.forwardRef(bt(function(e, t) {
          const r = z.useContext(Ct),
            n = z.useRef(null),
            o = (0, pt.s)(t, n);
          return z.useEffect(() => {
            const e = n.current;
            if (e) return r.branches.add(e), () => {
              r.branches.delete(e)
            }
          }, [r.branches]), (0, I.jsx)(vt.sG.div, {
            ...e,
            ref: o
          })
        }, "DismissableLayerBranch"));

      function jt() {
        const e = z.useContext(Ct),
          [t, r] = z.useState(null);
        return z.useEffect(() => {
          if (t) return e.dismissableSurfaces.add(t), () => {
            e.dismissableSurfaces.delete(t)
          }
        }, [t, e.dismissableSurfaces]), r
      }
      bt(jt, "useDismissableLayerSurface");
      var _t = bt(() => !0, "IS_TRUE");

      function Ot(e, t) {
        const {
          ownerDocument: r = globalThis?.document,
          deferPointerDownOutside: n = !1,
          isDeferredPointerDownOutsideRef: o,
          dismissableSurfaces: s,
          shouldHandlePointerDownOutside: a = _t
        } = t, i = (0, mt.c)(e), d = z.useRef(!1), l = z.useRef(!1), c = z.useRef(new Map), u = z.useRef(() => {});
        return z.useEffect(() => {
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
          bt(e, "resetOutsideInteraction"), bt(t, "isOutsideInteractionIntercepted"), bt(f, "handleInteractionCapture"), bt(p, "handleInteractionBubble");
          const h = bt(s => {
              if (s.target && !d.current) {
                let f = function() {
                  r.removeEventListener("click", u.current);
                  const n = t();
                  e(), n || St("dismissableLayer.pointerDownOutside", i, p, {
                    discrete: !0
                  })
                };
                if (bt(f, "handleAndDispatchPointerDownOutsideEvent"), !a(s.target)) return r.removeEventListener("click", u.current), e(), void(d.current = !1);
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
          onPointerDownCapture: bt(() => d.current = !0, "onPointerDownCapture")
        }
      }

      function Pt(e, t = globalThis?.document) {
        const r = (0, mt.c)(e),
          n = z.useRef(!1);
        return z.useEffect(() => {
          const e = bt(e => {
            e.target && !n.current && St("dismissableLayer.focusOutside", r, {
              originalEvent: e
            }, {
              discrete: !1
            })
          }, "handleFocus");
          return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
        }, [t, r]), {
          onFocusCapture: bt(() => n.current = !0, "onFocusCapture"),
          onBlurCapture: bt(() => n.current = !1, "onBlurCapture")
        }
      }

      function Rt() {
        const e = new CustomEvent(gt);
        document.dispatchEvent(e)
      }

      function St(e, t, r, {
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
        }), n ? (0, vt.hO)(o, s) : o.dispatchEvent(s)
      }
      bt(Ot, "usePointerDownOutside"), bt(Pt, "useFocusOutside"), bt(Rt, "dispatchUpdate"), bt(St, "handleAndDispatchCustomEvent");
      var Dt = wt,
        Nt = xt,
        It = r(88918),
        Tt = r(53213),
        zt = r(60853),
        kt = Object.defineProperty,
        Et = (e, t) => kt(e, "name", {
          value: t,
          configurable: !0
        }),
        Lt = z.forwardRef(Et(function(e, t) {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, I.jsx)(vt.sG.svg, {
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
        Vt = Lt,
        At = r(9608),
        Mt = r(7078),
        Ht = Object.defineProperty,
        Ft = (e, t) => Ht(e, "name", {
          value: t,
          configurable: !0
        }),
        Bt = "Popper",
        [Zt, qt] = (0, ht.A)(Bt),
        [Xt, Gt] = Zt(Bt),
        Kt = Ft(e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = z.useState(null), [s, a] = z.useState(void 0);
          return (0, I.jsx)(Xt, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: s,
            setPlacementState: a,
            children: r
          })
        }, "Popper"),
        Wt = z.forwardRef(Ft(function(e, t) {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = Gt("PopperAnchor", r), a = z.useRef(null), i = s.onAnchorChange, d = z.useCallback(e => {
            a.current = e, e && i(e)
          }, [i]), l = (0, pt.s)(t, d), c = z.useRef(null);
          z.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = s.placementState && nr(s.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, I.jsx)(vt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        }, "PopperAnchor")),
        Ut = "PopperContent",
        [$t, Yt] = Zt(Ut),
        Qt = z.forwardRef(Ft(function(e, t) {
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
          } = e, m = Gt(Ut, r), [y, b] = z.useState(null), g = (0, pt.s)(t, b), [C, w] = z.useState(null), x = (0, Mt.X)(C), j = x?.width ?? 0, _ = x?.height ?? 0, O = n + ("center" !== s ? "-" + s : ""), P = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], S = R.length > 0, D = {
            padding: P,
            boundary: R.filter(tr),
            altBoundary: S
          }, {
            refs: N,
            floatingStyles: T,
            placement: k,
            isPositioned: E,
            middlewareData: L
          } = (0, Tt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: Ft((...e) => (0, zt.ll)(...e, {
              animationFrame: "always" === p
            }), "whileElementsMounted"),
            elements: {
              reference: m.anchor
            },
            middleware: [(0, Tt.cY)({
              mainAxis: o + _,
              alignmentAxis: a
            }), d && (0, Tt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Tt.ER)() : void 0,
              ...D
            }), d && (0, Tt.UU)({
              ...D
            }), (0, Tt.Ej)({
              ...D,
              apply: Ft(({
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
            }), C && (0, Tt.UE)({
              element: C,
              padding: i
            }), rr({
              arrowWidth: j,
              arrowHeight: _
            }), f && (0, Tt.jD)({
              strategy: "referenceHidden",
              ...D,
              boundary: S ? D.boundary : void 0
            })]
          }), V = m.setPlacementState;
          (0, At.N)(() => (V(k), () => {
            V(void 0)
          }), [k, V]);
          const [A, M] = nr(k), H = (0, mt.c)(h);
          (0, At.N)(() => {
            E && H?.()
          }, [E, H]);
          const F = L.arrow?.x,
            B = L.arrow?.y,
            Z = 0 !== L.arrow?.centerOffset,
            [q, X] = z.useState();
          return (0, At.N)(() => {
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
              children: (0, I.jsx)(vt.sG.div, {
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
        Jt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        er = z.forwardRef(Ft(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Yt("PopperArrow", r), s = Jt[o.placedSide];
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
            children: (0, I.jsx)(Vt, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }, "PopperArrow"));

      function tr(e) {
        return null !== e
      }
      Ft(tr, "isNotNull");
      var rr = Ft(e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, a = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [d, l] = nr(r), c = {
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

      function nr(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      Ft(nr, "getSideAndAlignFromPlacement");
      var or = Kt,
        sr = Wt,
        ar = Qt,
        ir = er,
        dr = r(84017),
        lr = Object.defineProperty,
        cr = (e, t) => lr(e, "name", {
          value: t,
          configurable: !0
        }),
        ur = z.forwardRef(cr(function(e, t) {
          const {
            container: r,
            ...n
          } = e, [o, s] = z.useState(!1);
          (0, At.N)(() => s(!0), []);
          const a = r || o && globalThis?.document?.body;
          return a ? dr.createPortal((0, I.jsx)(vt.sG.div, {
            ...n,
            ref: t
          }), a) : null
        }, "Portal")),
        fr = Object.defineProperty,
        pr = (e, t) => fr(e, "name", {
          value: t,
          configurable: !0
        });

      function hr(e, t) {
        return z.useReducer((e, r) => t[e][r] ?? e, e)
      }
      pr(hr, "useStateMachine");
      var vr = pr(e => {
        const {
          present: t,
          children: r
        } = e, n = mr(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : z.Children.only(r), s = br(n.ref, Cr(o));
        return "function" == typeof r || n.isPresent ? z.cloneElement(o, {
          ref: s
        }) : null
      }, "Presence");

      function mr(e) {
        const [t, r] = z.useState(), n = z.useRef(null), o = z.useRef(e), s = z.useRef("none"), a = z.useRef(void 0), i = e ? "mounted" : "unmounted", [d, l] = hr(i, {
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
        return z.useEffect(() => {
          "mounted" === d ? (s.current = a.current ?? gr(n.current), a.current = void 0) : s.current = "none"
        }, [d]), (0, At.N)(() => {
          const t = n.current,
            r = o.current;
          if (r !== e) {
            const n = s.current,
              i = gr(t);
            e ? (a.current = i, l("MOUNT")) : l("none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
          }
        }, [e, l]), (0, At.N)(() => {
          if (t) {
            let e;
            const r = t.ownerDocument.defaultView ?? window,
              a = pr(s => {
                const a = gr(n.current).includes(CSS.escape(s.animationName));
                if (s.target === t && a && (l("ANIMATION_END"), !o.current)) {
                  const n = t.style.animationFillMode;
                  t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                    "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                  })
                }
              }, "handleAnimationEnd"),
              i = pr(e => {
                e.target === t && (s.current = gr(n.current))
              }, "handleAnimationStart");
            return t.addEventListener("animationstart", i), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
              r.clearTimeout(e), t.removeEventListener("animationstart", i), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
            }
          }
          l("ANIMATION_END")
        }, [t, l]), {
          isPresent: ["mounted", "unmountSuspended"].includes(d),
          ref: z.useCallback(e => {
            if (e) {
              const t = getComputedStyle(e);
              n.current = t, a.current = gr(t)
            } else n.current = null;
            r(e)
          }, [])
        }
      }

      function yr(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function br(...e) {
        const t = z.useRef(e);
        return t.current = e, z.useCallback(e => {
          const r = t.current;
          let n = !1;
          const o = r.map(t => {
            const r = yr(t, e);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let e = 0; e < o.length; e++) {
              const t = o[e];
              "function" == typeof t ? t() : yr(r[e], null)
            }
          }
        }, [])
      }

      function gr(e) {
        return e?.animationName || "none"
      }

      function Cr(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
      }
      pr(mr, "usePresence"), pr(yr, "setRef"), pr(br, "useStableComposedRefs"), pr(gr, "getAnimationName"), pr(Cr, "getElementRef");
      var wr = r(93237),
        xr = r(15782),
        jr = r(94299),
        _r = Object.defineProperty,
        Or = (e, t) => _r(e, "name", {
          value: t,
          configurable: !0
        }),
        [Pr, Rr] = (0, ht.A)("Tooltip", [qt]),
        Sr = qt(),
        Dr = 700,
        Nr = "tooltip.open",
        [Ir, Tr] = Pr("TooltipProvider"),
        zr = Or(e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Dr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = z.useRef(!0), i = z.useRef(!1), d = z.useRef(0);
          return z.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, I.jsx)(Ir, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: z.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), a.current = !1)
            }, [n]),
            onClose: z.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: z.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        }, "TooltipProvider"),
        kr = "Tooltip",
        [Er, Lr] = Pr(kr),
        Vr = Or(e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = Tr(kr, e.__scopeTooltip), l = Sr(t), [c, u] = z.useState(null), [f, p] = z.useState(void 0), h = (0, It.B)(), v = z.useRef(0), m = a ?? d.disableHoverableContent, y = i ?? d.delayDuration, b = z.useRef(!1), [g, C] = (0, xr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: Or(e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Nr))) : d.onClose(), s?.(e)
            }, "onChange"),
            caller: kr
          }), w = z.useMemo(() => g ? b.current ? "delayed-open" : "instant-open" : "closed", [g]), x = z.useCallback(() => {
            window.clearTimeout(v.current), v.current = 0, b.current = !1, C(!0)
          }, [C]), j = z.useCallback(() => {
            window.clearTimeout(v.current), v.current = 0, C(!1)
          }, [C]), _ = z.useCallback(() => {
            window.clearTimeout(v.current), v.current = window.setTimeout(() => {
              b.current = !0, C(!0), v.current = 0
            }, y)
          }, [y, C]);
          z.useEffect(() => () => {
            v.current && (window.clearTimeout(v.current), v.current = 0)
          }, []);
          const O = f ?? h;
          return (0, I.jsx)(or, {
            ...l,
            children: (0, I.jsx)(Er, {
              scope: t,
              contentId: O,
              setContentId: p,
              open: g,
              stateAttribute: w,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: z.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : x()
              }, [d.isOpenDelayedRef, _, x]),
              onTriggerLeave: z.useCallback(() => {
                m ? j() : (window.clearTimeout(v.current), v.current = 0)
              }, [j, m]),
              onOpen: x,
              onClose: j,
              disableHoverableContent: m,
              children: r
            })
          })
        }, "Tooltip"),
        Ar = "TooltipTrigger",
        Mr = z.forwardRef(Or(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Lr(Ar, r), s = Tr(Ar, r), a = Sr(r), i = z.useRef(null), d = (0, pt.s)(t, i, o.onTriggerChange), l = z.useRef(!1), c = z.useRef(!1), u = z.useCallback(() => l.current = !1, []);
          return z.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, I.jsx)(sr, {
            asChild: !0,
            ...a,
            children: (0, I.jsx)(vt.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ft.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ft.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ft.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, ft.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, ft.mK)(e.onBlur, o.onClose),
              onClick: (0, ft.mK)(e.onClick, o.onClose)
            })
          })
        }, "TooltipTrigger")),
        Hr = "TooltipPortal",
        [Fr, Br] = Pr(Hr, {
          forceMount: void 0
        }),
        Zr = Or(e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Lr(Hr, t);
          return (0, I.jsx)(Fr, {
            scope: t,
            forceMount: r,
            children: (0, I.jsx)(vr, {
              present: r || s.open,
              children: (0, I.jsx)(ur, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        }, "TooltipPortal"),
        qr = "TooltipContent",
        Xr = z.forwardRef(Or(function(e, t) {
          const r = Br(qr, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = Lr(qr, e.__scopeTooltip);
          return (0, I.jsx)(vr, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, I.jsx)(Wr, {
              side: o,
              ...s,
              ref: t
            }) : (0, I.jsx)(Gr, {
              side: o,
              ...s,
              ref: t
            })
          })
        }, "TooltipContent")),
        Gr = z.forwardRef(Or(function(e, t) {
          const r = Lr(qr, e.__scopeTooltip),
            n = Tr(qr, e.__scopeTooltip),
            o = z.useRef(null),
            s = (0, pt.s)(t, o),
            [a, i] = z.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = z.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = z.useCallback((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = en([...Yr(n, $r(n, r.getBoundingClientRect())), ...Qr(t.getBoundingClientRect())]);
              i(o), u(!0)
            }, [u]);
          return z.useEffect(() => () => f(), [f]), z.useEffect(() => {
            if (d && c) {
              const e = Or(e => p(e, c), "handleTriggerLeave"),
                t = Or(e => p(e, d), "handleContentLeave");
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), z.useEffect(() => {
            if (a) {
              const e = Or(e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || c?.contains(t),
                  o = !Jr(r, a);
                n ? f() : o && (f(), l())
              }, "handleTrackPointerGrace");
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }, [d, c, a, l, f]), (0, I.jsx)(Wr, {
            ...e,
            ref: s
          })
        }, "TooltipContentHoverable")),
        Kr = (0, wr.Dc)("TooltipContent"),
        Wr = z.forwardRef(Or(function(e, t) {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            id: s,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...d
          } = e, l = Lr(qr, r), c = Sr(r), {
            onClose: u
          } = l;
          z.useEffect(() => (document.addEventListener(Nr, u), () => document.removeEventListener(Nr, u)), [u]), z.useEffect(() => {
            if (l.trigger) {
              const e = Or(e => {
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
          return (0, At.N)(() => (f(s), () => {
            f(void 0)
          }), [s, f]), (0, I.jsx)(wt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, I.jsxs)(ar, {
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
              children: [(0, I.jsx)(Kr, {
                children: n
              }), o ? (0, I.jsx)(jr.bL, {
                id: l.contentId,
                role: "tooltip",
                children: o
              }) : null]
            })
          })
        }, "TooltipContentImpl")),
        Ur = z.forwardRef(Or(function(e, t) {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Sr(r);
          return (0, I.jsx)(ir, {
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

      function Yr(e, t, r = 5) {
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

      function Qr(e) {
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

      function Jr(e, t) {
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

      function en(e) {
        const t = e.slice();
        return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0), tn(t)
      }

      function tn(e) {
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
      Or($r, "getExitSideFromRect"), Or(Yr, "getPaddedExitPoints"), Or(Qr, "getPointsFromRect"), Or(Jr, "isPointInPolygon"), Or(en, "getHull"), Or(tn, "getHullPresorted");
      var rn = zr,
        nn = Vr,
        on = Mr,
        sn = Zr,
        an = Xr,
        dn = Ur;
      const ln = (0, z.createContext)(null);

      function cn() {
        const e = (0, z.useContext)(ln);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const un = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          isDisabled: o,
          ...s
        }) => {
          const [a = !1, i] = (0, je.ic)({
            defaultProp: r,
            prop: !o && s.isOpen,
            onChange: n
          });
          return (0, I.jsx)(rn, {
            delayDuration: t,
            children: (0, I.jsx)(ln.Provider, {
              value: {
                isOpen: a,
                ...s
              },
              children: (0, I.jsx)(nn, {
                open: a,
                onOpenChange: i,
                children: e
              })
            })
          })
        },
        fn = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, I.jsx)(on, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        pn = (0, z.forwardRef)(({
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
          } = cn(), c = (0, je.jt)(), u = (0, ut.CS)(an), f = (0, ut.pn)(l, {
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
            config: ut.$W.stiff,
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
        hn = (0, z.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, q.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, I.jsx)(dn, {
            ...r,
            ref: t
          })
        }),
        vn = sn;
      var mn = r(76844),
        yn = r(12430),
        bn = r(19046),
        gn = Object.defineProperty,
        Cn = (e, t) => gn(e, "name", {
          value: t,
          configurable: !0
        });

      function wn(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, ht.A)(t),
          [o, s] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          a = Cn(e => {
            const {
              scope: t,
              children: r
            } = e, n = z.useRef(null), s = z.useRef(new Map).current;
            return (0, I.jsx)(o, {
              scope: t,
              itemMap: s,
              collectionRef: n,
              children: r
            })
          }, "CollectionProvider");
        a.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, wr.TL)(i),
          l = z.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = s(i, r), a = (0, pt.s)(t, o.collectionRef);
            return (0, I.jsx)(d, {
              ref: a,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, wr.TL)(c),
          p = z.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, a = z.useRef(null), i = (0, pt.s)(t, a), d = s(c, r);
            return z.useEffect(() => (d.itemMap.set(a, {
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
          return z.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }
        return p.displayName = c, Cn(h, "useCollection"), [{
          Provider: a,
          Slot: l,
          ItemSlot: p
        }, h, n]
      }
      Cn(wn, "createCollection");
      var xn = new WeakMap,
        jn = class e extends Map {
          static {
            Cn(this, "OrderedDict")
          }
          #e;
          constructor(e) {
            super(e), this.#e = [...super.keys()], xn.set(this, !0)
          }
          set(e, t) {
            return xn.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this
          }
          insert(e, t, r) {
            const n = this.has(t),
              o = this.#e.length,
              s = Pn(e);
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
            const t = _n(this.#e, e);
            if (void 0 !== t) return this.get(t)
          }
          entryAt(e) {
            const t = _n(this.#e, e);
            if (void 0 !== t) return [t, this.get(t)]
          }
          indexOf(e) {
            return this.#e.indexOf(e)
          }
          keyAt(e) {
            return _n(this.#e, e)
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

      function _n(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        const r = On(e, t);
        return -1 === r ? void 0 : e[r]
      }

      function On(e, t) {
        const r = e.length,
          n = Pn(t),
          o = n >= 0 ? n : r + n;
        return o < 0 || o >= r ? -1 : o
      }

      function Pn(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e)
      }

      function Rn(e, t) {
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

      function Sn(e, t) {
        return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
      }

      function Dn(e, t) {
        return e[1].element && t[1].element ? Sn(e[1].element, t[1].element) ? -1 : 1 : 0
      }

      function Nn(e) {
        return new MutationObserver(t => {
          for (const r of t)
            if ("childList" === r.type) return void e()
        })
      }
      Cn(_n, "at"), Cn(On, "toSafeIndex"), Cn(Pn, "toSafeInteger"), Cn(function(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, ht.A)(t),
          [o, s] = r(t, {
            collectionElement: null,
            collectionRef: {
              current: null
            },
            collectionRefObject: {
              current: null
            },
            itemMap: new jn,
            setItemMap: Cn(() => {}, "setItemMap")
          }),
          a = Cn(({
            state: e,
            ...t
          }) => e ? (0, I.jsx)(d, {
            ...t,
            state: e
          }) : (0, I.jsx)(i, {
            ...t
          }), "CollectionProvider");
        a.displayName = t;
        const i = Cn(e => {
          const t = m();
          return (0, I.jsx)(d, {
            ...e,
            state: t
          })
        }, "CollectionInit");
        i.displayName = t + "Init";
        const d = Cn(e => {
          const {
            scope: t,
            children: r,
            state: n
          } = e, s = z.useRef(null), [a, i] = z.useState(null), d = (0, pt.s)(s, i), [l, c] = n;
          return z.useEffect(() => {
            if (!a) return;
            const e = Nn(() => {});
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
          c = (0, wr.TL)(l),
          u = z.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = s(l, r), a = (0, pt.s)(t, o.collectionRef);
            return (0, I.jsx)(c, {
              ref: a,
              children: n
            })
          });
        u.displayName = l;
        const f = e + "CollectionItemSlot",
          p = "data-radix-collection-item",
          h = (0, wr.TL)(f),
          v = z.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, a = z.useRef(null), [i, d] = z.useState(null), l = (0, pt.s)(t, a, d), c = s(f, r), {
              setItemMap: u
            } = c, v = z.useRef(o);
            Rn(v.current, o) || (v.current = o);
            const m = v.current;
            return z.useEffect(() => {
              const e = m;
              return u(t => i ? t.has(i) ? t.set(i, {
                ...e,
                element: i
              }).toSorted(Dn) : (t.set(i, {
                ...e,
                element: i
              }), t.toSorted(Dn)) : t), () => {
                u(e => i && e.has(i) ? (e.delete(i), new jn(e)) : e)
              }
            }, [i, m, u]), (0, I.jsx)(h, {
              [p]: "",
              ref: l,
              children: n
            })
          });

        function m() {
          return z.useState(new jn)
        }

        function y(t) {
          const {
            itemMap: r
          } = s(e + "CollectionConsumer", t);
          return r
        }
        return v.displayName = f, Cn(m, "useInitCollection"), Cn(y, "useCollection"), [{
          Provider: a,
          Slot: u,
          ItemSlot: v
        }, {
          createCollectionScope: n,
          useCollection: y,
          useInitCollection: m
        }]
      }, "createCollection"), Cn(Rn, "shallowEqual"), Cn(Sn, "isElementPreceding"), Cn(Dn, "sortByDocumentPosition"), Cn(Nn, "getChildListObserver");
      var In = Object.defineProperty,
        Tn = (e, t) => In(e, "name", {
          value: t,
          configurable: !0
        }),
        zn = ["PageUp", "PageDown"],
        kn = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        En = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Ln = "Slider",
        [Vn, An, Mn] = wn(Ln),
        [Hn, Fn] = (0, ht.A)(Ln, [Mn]),
        [Bn, Zn] = Hn(Ln),
        qn = z.forwardRef(Tn(function(e, t) {
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
            onValueChange: u = Tn(() => {}, "onValueChange"),
            onValueCommit: f = Tn(() => {}, "onValueCommit"),
            inverted: p = !1,
            form: h,
            ...v
          } = e, m = z.useRef(new Set), y = z.useRef(0), b = z.useRef(!1), g = "horizontal" === a ? Kn : Wn, [C, w] = z.useState(null), x = (0, pt.s)(t, w), [j = [], _] = (0, xr.i)({
            prop: c,
            defaultProp: l,
            onChange: Tn(e => {
              const t = [...m.current];
              t[y.current]?.focus({
                preventScroll: !0,
                focusVisible: b.current
              }), b.current = !1, u(e)
            }, "onChange")
          }), O = z.useRef(j), P = z.useRef(j);

          function R(e) {
            N(e, co(j, e))
          }

          function S(e) {
            N(e, y.current)
          }

          function D() {
            String(j) !== String(O.current) && f(j)
          }

          function N(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = vo(s),
              i = mo(Math.round((e - n) / s) * s + n, a),
              l = (0, mn.q)(i, [n, o]);
            _((e = []) => {
              const n = ao(e, l, t);
              if (po(n, d * s)) {
                y.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return z.useEffect(() => {
            const e = h ? C?.ownerDocument.getElementById(h) : C?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = Tn(() => _(P.current), "reset");
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [C, h, _]), Tn(R, "handleSlideStart"), Tn(S, "handleSlideMove"), Tn(D, "handleSlideEnd"), Tn(N, "updateValues"), (0, I.jsx)(Bn, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: m.current,
            values: j,
            orientation: a,
            form: h,
            children: (0, I.jsx)(Vn.Provider, {
              scope: e.__scopeSlider,
              children: (0, I.jsx)(Vn.Slot, {
                scope: e.__scopeSlider,
                children: (0, I.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...v,
                  ref: x,
                  onPointerDown: (0, ft.mK)(v.onPointerDown, () => {
                    i || (O.current = j, b.current = !1)
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
                    i || (b.current = !0, N(o, j.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      b.current = !0;
                      const r = zn.includes(e.key) || e.shiftKey && kn.includes(e.key) ? 10 : 1,
                        o = y.current;
                      N(yo(j[o], {
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
        [Xn, Gn] = Hn(Ln, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        Kn = z.forwardRef(Tn(function(e, t) {
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
          } = e, [u, f] = z.useState(null), p = (0, pt.s)(t, f), h = z.useRef(void 0), v = (0, yn.jH)(o), m = "ltr" === v, y = m && !s || !m && s;

          function b(e) {
            const t = h.current || u.getBoundingClientRect(),
              o = ho([0, t.width], y ? [r, n] : [n, r]);
            return h.current = t, o(e - t.left)
          }
          return Tn(b, "getValueFromPointer"), (0, I.jsx)(Xn, {
            scope: e.__scopeSlider,
            startEdge: y ? "left" : "right",
            endEdge: y ? "right" : "left",
            direction: y ? 1 : -1,
            size: "width",
            children: (0, I.jsx)(Un, {
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
                const t = En[y ? "from-left" : "from-right"].includes(e.key);
                l?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderHorizontal")),
        Wn = z.forwardRef(Tn(function(e, t) {
          const {
            min: r,
            max: n,
            inverted: o,
            onSlideStart: s,
            onSlideMove: a,
            onSlideEnd: i,
            onStepKeyDown: d,
            ...l
          } = e, c = z.useRef(null), u = (0, pt.s)(t, c), f = z.useRef(void 0), p = !o;

          function h(e) {
            const t = f.current || c.current.getBoundingClientRect(),
              o = ho([0, t.height], p ? [n, r] : [r, n]);
            return f.current = t, o(e - t.top)
          }
          return Tn(h, "getValueFromPointer"), (0, I.jsx)(Xn, {
            scope: e.__scopeSlider,
            startEdge: p ? "bottom" : "top",
            endEdge: p ? "top" : "bottom",
            size: "height",
            direction: p ? 1 : -1,
            children: (0, I.jsx)(Un, {
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
                const t = En[p ? "from-bottom" : "from-top"].includes(e.key);
                d?.({
                  event: e,
                  direction: t ? -1 : 1
                })
              }
            })
          })
        }, "SliderVertical")),
        Un = z.forwardRef(Tn(function(e, t) {
          const {
            __scopeSlider: r,
            onSlideStart: n,
            onSlideMove: o,
            onSlideEnd: s,
            onHomeKeyDown: a,
            onEndKeyDown: i,
            onStepKeyDown: d,
            ...l
          } = e, c = Zn(Ln, r);
          return (0, I.jsx)(vt.sG.span, {
            ...l,
            ref: t,
            onKeyDown: (0, ft.mK)(e.onKeyDown, e => {
              "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : zn.concat(kn).includes(e.key) && (d(e), e.preventDefault())
            }),
            onPointerDown: (0, ft.mK)(e.onPointerDown, e => {
              const t = e.target;
              t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
                preventScroll: !0,
                focusVisible: !1
              }) : n(e)
            }),
            onPointerMove: (0, ft.mK)(e.onPointerMove, e => {
              e.target.hasPointerCapture(e.pointerId) && o(e)
            }),
            onPointerUp: (0, ft.mK)(e.onPointerUp, e => {
              const t = e.target;
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
            })
          })
        }, "SliderImpl")),
        $n = z.forwardRef(Tn(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Zn("SliderTrack", r);
          return (0, I.jsx)(vt.sG.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...n,
            ref: t
          })
        }, "SliderTrack")),
        Yn = "SliderRange",
        Qn = z.forwardRef(Tn(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Zn(Yn, r), s = Gn(Yn, r), a = z.useRef(null), i = (0, pt.s)(t, a), d = o.values.length, l = o.values.map(e => io(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, I.jsx)(vt.sG.span, {
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
        [Jn, eo] = Hn("SliderThumb");

      function to(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, s = Zn("SliderThumbProvider", t), a = An(t), [i, d] = z.useState(null), l = z.useMemo(() => i ? a().findIndex(e => e.ref.current === i) : -1, [a, i]), c = (0, Mt.X)(i), u = !i || !!s.form || !!i.closest("form"), f = s.values[l], p = r ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), h = void 0 === f ? 0 : io(f, s.min, s.max);
        z.useEffect(() => {
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
        return (0, I.jsx)(Jn, {
          scope: t,
          ...v,
          children: bo(o) ? o(v) : n
        })
      }
      Tn(to, "SliderThumbProvider");
      var ro = "SliderThumbTrigger",
        no = z.forwardRef(Tn(function(e, t) {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Zn(ro, r), s = Gn(ro, r), {
            index: a,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = eo(ro, r), u = (0, pt.s)(t, c), f = lo(a, o.values.length), p = l?.[s.size], h = p ? uo(p, d, s.direction) : 0;
          return (0, I.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${d}% + ${h}px)`
            },
            children: (0, I.jsx)(Vn.ItemSlot, {
              scope: r,
              children: (0, I.jsx)(vt.sG.span, {
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
                onFocus: (0, ft.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = a
                })
              })
            })
          })
        }, "SliderThumbTrigger")),
        oo = z.forwardRef(Tn(function(e, t) {
          const {
            __scopeSlider: r,
            name: n,
            ...o
          } = e;
          return (0, I.jsx)(to, {
            __scopeSlider: r,
            name: n,
            internal_do_not_use_render: ({
              index: e,
              isFormControl: n
            }) => (0, I.jsxs)(I.Fragment, {
              children: [(0, I.jsx)(no, {
                ...o,
                ref: t,
                __scopeSlider: r
              }), n ? (0, I.jsx)(so, {
                __scopeSlider: r
              }, e) : null]
            })
          })
        }, "SliderThumb")),
        so = z.forwardRef(Tn(function({
          __scopeSlider: e,
          ...t
        }, r) {
          const {
            value: n,
            name: o,
            form: s
          } = eo("SliderBubbleInput", e), a = z.useRef(null), i = (0, pt.s)(a, r), d = (0, bn.Z)(n);
          return z.useEffect(() => {
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
          }, [d, n]), (0, I.jsx)(vt.sG.input, {
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

      function ao(e = [], t, r) {
        const n = [...e];
        return n[r] = t, n.sort((e, t) => e - t)
      }

      function io(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, mn.q)(n, [0, 100])
      }

      function lo(e, t) {
        return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
      }

      function co(e, t) {
        if (1 === e.length) return 0;
        const r = e.map(e => Math.abs(e - t)),
          n = Math.min(...r);
        return r.indexOf(n)
      }

      function uo(e, t, r) {
        const n = e / 2;
        return (n - ho([0, 50], [0, n])(t) * r) * r
      }

      function fo(e) {
        return e.slice(0, -1).map((t, r) => e[r + 1] - t)
      }

      function po(e, t) {
        if (t > 0) {
          const r = fo(e);
          return Math.min(...r) >= t
        }
        return !0
      }

      function ho(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function vo(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function mo(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function yo(e, {
        min: t,
        step: r,
        direction: n,
        multiplier: o
      }) {
        const s = vo(r),
          a = (e - t) / r,
          i = Math.round(a);
        let d;
        return d = mo(i * r + t, s) === mo(e, s) ? i + o * n : n > 0 ? Math.ceil(a) : Math.floor(a), mo(d * r + t, s)
      }

      function bo(e) {
        return "function" == typeof e
      }
      Tn(ao, "getNextSortedValues"), Tn(io, "convertValueToPercentage"), Tn(lo, "getLabel"), Tn(co, "getClosestValueIndex"), Tn(uo, "getThumbInBoundsOffset"), Tn(fo, "getStepsBetweenValues"), Tn(po, "hasMinStepsBetweenValues"), Tn(ho, "linearScale"), Tn(vo, "getDecimalCount"), Tn(mo, "roundValue"), Tn(yo, "getNextStepValue"), Tn(bo, "isFunction");
      var go = Object.defineProperty,
        Co = (e, t) => go(e, "name", {
          value: t,
          configurable: !0
        }),
        wo = "focusScope.autoFocusOnMount",
        xo = "focusScope.autoFocusOnUnmount",
        jo = {
          bubbles: !1,
          cancelable: !0
        },
        _o = z.forwardRef(Co(function(e, t) {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...a
          } = e, [i, d] = z.useState(null), l = (0, mt.c)(o), c = (0, mt.c)(s), u = z.useRef(null), f = (0, pt.s)(t, d), p = z.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          z.useEffect(() => {
            if (n) {
              let e = function(e) {
                  if (p.paused || !i) return;
                  const t = e.target;
                  i.contains(t) ? u.current = t : Io(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Io(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Io(i)
                };
              Co(e, "handleFocusIn"), Co(t, "handleFocusOut"), Co(r, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return i && n.observe(i, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }, [n, i, p.paused]), z.useEffect(() => {
            if (i) {
              To.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(wo, jo);
                i.addEventListener(wo, l), i.dispatchEvent(t), t.defaultPrevented || (Oo(Eo(Ro(i)), {
                  select: !0
                }), document.activeElement === e && Io(i))
              }
              return () => {
                i.removeEventListener(wo, l), setTimeout(() => {
                  const t = new CustomEvent(xo, jo);
                  i.addEventListener(xo, c), i.dispatchEvent(t), t.defaultPrevented || Io(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(xo, c), To.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const h = z.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = Po(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && Io(s, {
                select: !0
              })) : (e.preventDefault(), r && Io(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, I.jsx)(vt.sG.div, {
            tabIndex: -1,
            ...a,
            ref: f,
            onKeyDown: h
          })
        }, "FocusScope"));

      function Oo(e, {
        select: t = !1
      } = {}) {
        const r = document.activeElement;
        for (const n of e)
          if (Io(n, {
              select: t
            }), document.activeElement !== r) return
      }

      function Po(e) {
        const t = Ro(e);
        return [So(t, e), So(t.reverse(), e)]
      }

      function Ro(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: Co(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function So(e, t) {
        const r = "function" == typeof t.checkVisibility && t.checkVisibility({
          checkVisibilityCSS: !0
        });
        for (const n of e)
          if (!(r ? !n.checkVisibility({
              checkVisibilityCSS: !0
            }) : Do(n, {
              upTo: t
            }))) return n
      }

      function Do(e, {
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

      function No(e) {
        return e instanceof HTMLInputElement && "select" in e
      }

      function Io(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && No(e) && t && e.select()
        }
      }
      Co(Oo, "focusFirst"), Co(Po, "getTabbableEdges"), Co(Ro, "getTabbableCandidates"), Co(So, "findVisible"), Co(Do, "isHidden"), Co(No, "isSelectableInput"), Co(Io, "focus");
      var To = zo();

      function zo() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = ko(e, t), e.unshift(t)
          },
          remove(t) {
            e = ko(e, t), e[0]?.resume()
          }
        }
      }

      function ko(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }

      function Eo(e) {
        return e.filter(e => "A" !== e.tagName)
      }
      Co(zo, "createFocusScopesStack"), Co(ko, "arrayRemove"), Co(Eo, "removeLinks");
      var Lo = r(86187),
        Vo = r(38100),
        Ao = r(45787),
        Mo = Object.defineProperty,
        Ho = (e, t) => Mo(e, "name", {
          value: t,
          configurable: !0
        }),
        Fo = "Dialog",
        [Bo, Zo] = (0, ht.A)(Fo),
        [qo, Xo] = Bo(Fo),
        Go = Ho(e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !0
          } = e, i = z.useRef(null), d = z.useRef(null), [l, c] = (0, xr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Fo
          }), [u, f] = z.useState(0), [p, h] = z.useState(0);
          return (0, I.jsx)(qo, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, It.B)(),
            titleId: (0, It.B)(),
            descriptionId: (0, It.B)(),
            titlePresent: u > 0,
            descriptionPresent: p > 0,
            setTitleCount: f,
            setDescriptionCount: h,
            open: l,
            onOpenChange: c,
            onOpenToggle: z.useCallback(() => c(e => !e), [c]),
            modal: a,
            children: r
          })
        }, "Dialog"),
        Ko = z.forwardRef(Ho(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Xo("DialogTrigger", r), s = (0, pt.s)(t, o.triggerRef);
          return (0, I.jsx)(vt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": cs(o.open),
            ...n,
            ref: s,
            onClick: (0, ft.mK)(e.onClick, o.onOpenToggle)
          })
        }, "DialogTrigger")),
        Wo = "DialogPortal",
        [Uo, $o] = Bo(Wo, {
          forceMount: void 0
        }),
        Yo = Ho(e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Xo(Wo, t);
          return (0, I.jsx)(Uo, {
            scope: t,
            forceMount: r,
            children: z.Children.map(n, e => (0, I.jsx)(vr, {
              present: r || s.open,
              children: (0, I.jsx)(ur, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        }, "DialogPortal"),
        Qo = "DialogOverlay",
        Jo = z.forwardRef(Ho(function(e, t) {
          const r = $o(Qo, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Xo(Qo, e.__scopeDialog);
          return s.modal ? (0, I.jsx)(vr, {
            present: n || s.open,
            children: (0, I.jsx)(ts, {
              ...o,
              ref: t
            })
          }) : null
        }, "DialogOverlay")),
        es = (0, wr.TL)("DialogOverlay.RemoveScroll"),
        ts = z.forwardRef(Ho(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Xo(Qo, r), s = jt(), a = (0, pt.s)(t, s);
          return (0, I.jsx)(Vo.A, {
            as: es,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, I.jsx)(vt.sG.div, {
              "data-state": cs(o.open),
              ...n,
              ref: a,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }, "DialogOverlayImpl")),
        rs = "DialogContent",
        ns = z.forwardRef(Ho(function(e, t) {
          const r = $o(rs, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Xo(rs, e.__scopeDialog);
          return (0, I.jsx)(vr, {
            present: n || s.open,
            children: s.modal ? (0, I.jsx)(os, {
              ...o,
              ref: t
            }) : (0, I.jsx)(ss, {
              ...o,
              ref: t
            })
          })
        }, "DialogContent")),
        os = z.forwardRef(Ho(function(e, t) {
          const r = Xo(rs, e.__scopeDialog),
            n = z.useRef(null),
            o = (0, pt.s)(t, r.contentRef, n);
          return z.useEffect(() => {
            const e = n.current;
            if (e) return (0, Ao.Eq)(e)
          }, []), (0, I.jsx)(as, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, ft.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, ft.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, ft.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }, "DialogContentModal")),
        ss = z.forwardRef(Ho(function(e, t) {
          const r = Xo(rs, e.__scopeDialog),
            n = z.useRef(!1),
            o = z.useRef(!1);
          return (0, I.jsx)(as, {
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
        as = z.forwardRef(Ho(function(e, t) {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...a
          } = e, i = Xo(rs, r);
          return (0, Lo.Oh)(), (0, I.jsx)(I.Fragment, {
            children: (0, I.jsx)(_o, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, I.jsx)(wt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionPresent ? i.descriptionId : void 0,
                "aria-labelledby": i.titlePresent ? i.titleId : void 0,
                "data-state": cs(i.open),
                ...a,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }, "DialogContentImpl")),
        is = z.forwardRef(Ho(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Xo("DialogTitle", r), {
            setTitleCount: s
          } = o;
          return (0, At.N)(() => (s(e => e + 1), () => s(e => e - 1)), [s]), (0, I.jsx)(vt.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        }, "DialogTitle")),
        ds = z.forwardRef(Ho(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Xo("DialogDescription", r), {
            setDescriptionCount: s
          } = o;
          return (0, At.N)(() => (s(e => e + 1), () => s(e => e - 1)), [s]), (0, I.jsx)(vt.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        }, "DialogDescription")),
        ls = z.forwardRef(Ho(function(e, t) {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Xo("DialogClose", r);
          return (0, I.jsx)(vt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ft.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "DialogClose"));

      function cs(e) {
        return e ? "open" : "closed"
      }
      Ho(cs, "getState");
      const us = (0, z.createContext)({
          triggerRef: (0, z.createRef)(),
          triggerBorderRef: (0, z.createRef)(),
          thumbnailRef: (0, z.createRef)(),
          openIconRef: (0, z.createRef)(),
          overlayRef: (0, z.createRef)(),
          contentRef: (0, z.createRef)(),
          containerRef: (0, z.createRef)(),
          imageRef: (0, z.createRef)(),
          placeholderRef: (0, z.createRef)(),
          zoomPanRef: (0, z.createRef)(),
          captionRef: (0, z.createRef)(),
          controlsRef: (0, z.createRef)(),
          closeRef: (0, z.createRef)(),
          zoomRef: (0, z.createRef)(),
          zoomInRef: (0, z.createRef)(),
          zoomSliderRef: (0, z.createRef)(),
          zoomOutRef: (0, z.createRef)(),
          resetRef: (0, z.createRef)(),
          downloadRef: (0, z.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        fs = ({
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
            p = (0, je.rl)(),
            h = (0, z.useRef)(null),
            v = (0, z.useRef)(null),
            m = (0, z.useRef)(null),
            y = (0, z.useRef)(null),
            b = (0, z.useRef)(null),
            g = (0, z.useRef)(null),
            C = (0, z.useRef)(null),
            w = (0, z.useRef)(null),
            x = (0, z.useRef)(null),
            j = (0, z.useRef)(null),
            _ = (0, z.useRef)(null),
            O = (0, z.useRef)(null),
            P = (0, z.useRef)(null),
            R = (0, z.useRef)(null),
            S = (0, z.useRef)(null),
            D = (0, z.useRef)(null),
            N = (0, z.useRef)(null),
            T = (0, z.useRef)(null),
            k = (0, z.useRef)(null),
            [E = !1, L] = (0, je.ic)({
              prop: t || n,
              onChange: r
            }),
            V = (0, z.useRef)(null);
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
            children: (0, I.jsx)(us.Provider, {
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
                placeholderRef: j,
                captionRef: _,
                controlsRef: O,
                closeRef: P,
                zoomRef: R,
                zoomInRef: S,
                zoomSliderRef: D,
                zoomOutRef: N,
                resetRef: T,
                downloadRef: k,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: V.current
              },
              children: (0, I.jsx)(hs, {
                ...u
              })
            })
          })
        },
        ps = (0, z.createContext)({
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
        hs = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, z.useContext)(us), {
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
            } = (0, z.useContext)(us), p = (0, z.useRef)(null);
            p.current || (p.current = _e.os.timeline({
              defaults: Be
            }));
            const h = (0, z.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), _e.os.set([u.current, f.current], {
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
                }), _e.os.set([f.current], {
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
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Re(f.current), t.closing || (_e.os.set([f.current], {
                  visibility: "visible",
                  ...Ze
                }), _e.os.set([u.current], {
                  visibility: "hidden",
                  ...Ze
                }))))
              }),
              m = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, z.useCallback)(async e => {
                e || (window.addEventListener("click", h), await m(), window.removeEventListener("click", h)), r(e)
              }, [r]),
              b = (0, z.useCallback)(() => y(!1), [y]);
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
            } = (0, z.useContext)(us), d = t(async e => {
              r.zoomTo(e), _e.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              _e.os.to([s.current], {
                opacity: e,
                [qe]: t,
                ...Ze
              })
            }), p = t(async () => {
              _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              })
            }), h = (0, z.useCallback)(() => {
              n.current && o.current && (_e.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Ze
              }), _e.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Ze
              }), _e.os.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, z.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", h), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          return (0, I.jsx)(ps.Provider, {
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
            children: (0, I.jsx)(Go, {
              ...u
            })
          })
        },
        vs = (0, z.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, z.useContext)(us),
            d = (0, je.UP)(s, n),
            l = (0, q.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(it.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, I.jsx)(Ko, {
            ref: d,
            ...l,
            children: (0, I.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, I.jsx)(k.xV, {
                children: t
              })
            })
          })
        }),
        ms = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, z.useContext)(us), s = (0, je.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? k.DX : "img";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        ys = (0, z.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, z.useContext)(us), o = (0, je.UP)(n, r), s = (0, q.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? k.DX : at.Maximize2;
          return (0, I.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        bs = ({
          ...e
        }) => (0, I.jsx)(Yo, {
          ...e
        }),
        gs = (0, z.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, z.useContext)(us), o = (0, je.UP)(n, r), s = (0, q.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, I.jsx)(Jo, {
            ref: o,
            ...s
          })
        }),
        Cs = (0, z.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, z.useContext)(ps), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, z.useContext)(us), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, z.useContext)(us), [t, r] = (0, z.useState)(e.getCursor()), n = (0, z.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, z.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [ot.xW.tokens, ot.xW.typography, ot.xW.grid, st("dark")].join(" ");
          const c = (0, je.UP)(s, n),
            u = (0, q.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, T.$)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, I.jsxs)(ns, {
            ref: c,
            ...u,
            children: [(0, I.jsx)(k.s6, {
              children: (0, I.jsx)(is, {
                children: a
              })
            }), t]
          })
        }),
        ws = (0, z.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, z.useContext)(us);
          (() => {
            const {
              contextSafe: e
            } = (0, Oe.L)(), {
              toggleControls: t
            } = (0, z.useContext)(ps), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, z.useContext)(us), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (_e.os.to([n.current], {
                ...a.getCurrentTransform(),
                ...Ze
              }), _e.os.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Ze
              }), _e.os.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Ze
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || _e.os.to([n.current], {
                ...a.getCurrentTransform(),
                ...Ze
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (_e.os.to([n.current], {
                ...a.getCurrentTransform(),
                ...Ze
              }), _e.os.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Ze
              }), _e.os.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Ze
              })))
            }), c = (0, z.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, je.iQ)({
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
          const s = (0, je.UP)(o, n),
            a = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, I.jsx)("div", {
            ref: s,
            ...a,
            children: (0, I.jsxs)(xs, {
              children: [(0, I.jsx)(js, {}), t]
            })
          })
        }),
        xs = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, z.useContext)(us), s = (0, je.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? k.DX : "div";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        js = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, z.useContext)(us), s = (0, je.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? k.DX : "img";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        _s = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, z.useContext)(us), s = (0, je.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? k.DX : "img";
          return (0, I.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Os = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, z.useContext)(us), s = (0, je.UP)(o, n), a = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? k.DX : "p";
          return (0, I.jsx)(ds, {
            asChild: !0,
            children: (0, I.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Ps = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, z.useContext)(us);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, z.useContext)(ps);
            (0, ze.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, ze.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, ze.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, ze.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, je.UP)(o, n),
            a = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? k.DX : "div";
          return (0, I.jsx)(ze.Hb, {
            children: (0, I.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Rs = ({
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
          return (0, I.jsxs)(un, {
            delayDuration: 0,
            children: [(0, I.jsx)(fn, {
              children: n
            }), (0, I.jsxs)(pn, {
              ...s,
              children: [(0, I.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, I.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, I.jsx)(hn, {})]
            })]
          })
        },
        Ss = (0, z.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.v6)(e, {
            isInline: !0
          });
          return (0, I.jsx)(lt, {
            ref: t,
            ...r
          })
        }),
        Ds = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, z.useContext)(us),
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
              } = (0, z.useContext)(us), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, z.useContext)(ps), [o, s] = (0, z.useState)(!1), [a, i] = (0, z.useState)(!1), [d, l] = (0, z.useState)(0), [c, u] = (0, z.useState)(0), [f, p] = (0, z.useState)(0), h = (0, z.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), v = (0, z.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, z.useEffect)(() => (e.addEventListener("zoom", h), () => {
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
            m = (0, je.UP)(i, s),
            y = (0, q.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? k.DX : "div";
          return (0, I.jsxs)(b, {
            ref: m,
            ...y,
            children: [(0, I.jsx)(Rs, {
              side: "left",
              enabled: r,
              content: a.formatMessage(it.ZoomInButtonLabel),
              metadata: a.formatMessage(it.ZoomInButtonTooltip, {
                shortcut: (0, I.jsx)(Ss, {
                  shortcut: "+"
                })
              }),
              children: (0, I.jsx)(N.K, {
                label: a.formatMessage(it.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Fe({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, I.jsxs)(qn, {
              className: "foundry_1a74xwbt",
              max: h,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: v,
              children: [(0, I.jsx)($n, {
                className: "foundry_1a74xwbu",
                children: (0, I.jsx)(Qn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, I.jsx)(Rs, {
                side: "left",
                enabled: r,
                content: a.formatMessage(it.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, I.jsx)(oo, {
                  className: "foundry_1a74xwbw",
                  children: (0, I.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, I.jsx)(Rs, {
              side: "left",
              enabled: r,
              content: a.formatMessage(it.ZoomOutButtonLabel),
              metadata: a.formatMessage(it.ZoomOutButtonTooltip, {
                shortcut: (0, I.jsx)(Ss, {
                  shortcut: "-"
                })
              }),
              children: (0, I.jsx)(N.K, {
                label: a.formatMessage(it.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Fe({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, I.jsx)(k.xV, {
              children: n
            })]
          })
        }),
        Ns = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, Xe.tz)(),
            {
              closeRef: a
            } = (0, z.useContext)(us),
            i = (0, je.UP)(a, o),
            d = (0, q.v6)(n, {
              "data-testid": e,
              className: He({
                styled: !t
              })
            }),
            l = t ? (0, I.jsx)(k.DX, {
              ref: i,
              ...d
            }) : (0, I.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(it.CloseButtonLabel)
            });
          return (0, I.jsx)(Rs, {
            side: "right",
            enabled: r,
            content: s.formatMessage(it.CloseButtonLabel),
            metadata: s.formatMessage(it.CloseButtonTooltip, {
              shortcut: (0, I.jsx)(Ss, {
                shortcut: "Esc"
              })
            }),
            children: (0, I.jsx)(ls, {
              asChild: !0,
              children: l
            })
          })
        }),
        Is = (0, z.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, z.useContext)(us), {
                contextSafe: r
              } = (0, Oe.L)(), {
                resetZoom: n
              } = (0, z.useContext)(ps), [o, s] = (0, z.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                _e.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Ze
                })
              }), i = (0, z.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, z.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, z.useContext)(us),
            i = (0, je.UP)(a, n),
            d = (0, q.v6)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, I.jsx)(Rs, {
            side: "left",
            enabled: t,
            content: o.formatMessage(it.ResetZoomButtonLabel),
            metadata: o.formatMessage(it.ResetZoomButtonTooltip, {
              shortcut: (0, I.jsx)(Ss, {
                shortcut: "R"
              })
            }),
            children: (0, I.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(it.ResetZoomButtonLabel)
            })
          })
        }),
        Ts = (0, z.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, z.useContext)(us),
            i = (0, je.UP)(s, n),
            d = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, I.jsx)(Rs, {
            side: "left",
            enabled: t,
            content: o.formatMessage(it.DownloadButtonTooltip),
            children: (0, I.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(it.DownloadButtonTooltip),
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
      var ks = r(63368);

      function Es(e) {
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

      function Ls(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ls(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Es(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ls(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function As(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ms = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hs = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vs(Vs({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ms(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return As(e.variantClassNames, e => As(e, e => e.split(" ")[0]))
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
      const Fs = (0, z.createContext)(null);

      function Bs() {
        const e = (0, z.useContext)(Fs);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Zs = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, q.v6)({
              className: Hs({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? k.DX : "div";
          return (0, I.jsx)(Fs.Provider, {
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
        qs = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Bs(), s = (0, q.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: at.Check,
            invalid: at.X,
            neutral: at.TriangleAlert
          }, i = t ? k.DX : a[o];
          return (0, I.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        Xs = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Bs(), i = (0, q.v6)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? k.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Gs = Object.defineProperty,
        Ks = (e, t) => Gs(e, "name", {
          value: t,
          configurable: !0
        });

      function Ws(e, t) {
        return z.useReducer((e, r) => t[e][r] ?? e, e)
      }
      Ks(Ws, "useStateMachine");
      var Us = "ScrollArea",
        [$s, Ys] = (0, ht.A)(Us),
        [Qs, Js] = $s(Us),
        ea = z.forwardRef(Ks(function(e, t) {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = z.useState(null), [l, c] = z.useState(null), [u, f] = z.useState(null), [p, h] = z.useState(null), [v, m] = z.useState(null), [y, b] = z.useState(0), [g, C] = z.useState(0), [w, x] = z.useState(!1), [j, _] = z.useState(!1), O = (0, pt.s)(t, d), P = (0, yn.jH)(o);
          return (0, I.jsx)(Qs, {
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
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: _,
            onCornerWidthChange: b,
            onCornerHeightChange: C,
            children: (0, I.jsx)(vt.sG.div, {
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
        ta = z.forwardRef(Ks(function(e, t) {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = Js("ScrollAreaViewport", r), i = z.useRef(null), d = (0, pt.s)(t, i, a.onViewportChange);
          return (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(ra, {
              nonce: o
            }), (0, I.jsx)(vt.sG.div, {
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
        ra = z.memo(Ks(function({
          nonce: e
        }) {
          return (0, I.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
        na = "ScrollAreaScrollbar",
        oa = z.forwardRef(Ks(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Js(na, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return z.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, I.jsx)(sa, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, I.jsx)(aa, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, I.jsx)(ia, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, I.jsx)(da, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        sa = z.forwardRef(Ks(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Js(na, e.__scopeScrollArea), [s, a] = z.useState(!1);
          return z.useEffect(() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = Ks(() => {
                  window.clearTimeout(t), a(!0)
                }, "handlePointerEnter"),
                n = Ks(() => {
                  t = window.setTimeout(() => a(!1), o.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }, [o.scrollArea, o.scrollHideDelay]), (0, I.jsx)(vr, {
            present: r || s,
            children: (0, I.jsx)(ia, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarHover")),
        aa = z.forwardRef(Ks(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = Js(na, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = Sa(() => d("SCROLL_END"), 100), [i, d] = Ws("hidden", {
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
          return z.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), z.useEffect(() => {
            const e = o.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = Ks(() => {
                const n = e[t];
                r !== n && (d("SCROLL"), a()), r = n
              }, "handleScroll");
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, s, d, a]), (0, I.jsx)(vr, {
            present: r || "hidden" !== i,
            children: (0, I.jsx)(da, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ft.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ft.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        ia = z.forwardRef(Ks(function(e, t) {
          const r = Js(na, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = z.useState(!1),
            i = "horizontal" === e.orientation,
            d = Sa(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return Da(r.viewport, d), Da(r.content, d), (0, I.jsx)(vr, {
            present: n || s,
            children: (0, I.jsx)(da, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        da = z.forwardRef(Ks(function(e, t) {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Js(na, e.__scopeScrollArea), s = z.useRef(null), a = z.useRef(0), [i, d] = z.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = wa(i.viewport, i.content), c = {
            ...n,
            sizes: i,
            onSizesChange: d,
            hasThumb: Boolean(l > 0 && l < 1),
            onThumbChange: Ks(e => s.current = e, "onThumbChange"),
            onThumbPointerUp: Ks(() => a.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: Ks(e => a.current = e, "onThumbPointerDown")
          };

          function u(e, t) {
            return ja(e, a.current, i, t)
          }
          return Ks(u, "getScrollPosition"), "horizontal" === r ? (0, I.jsx)(la, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = _a(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, I.jsx)(ca, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = _a(o.viewport.scrollTop, i);
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
        la = z.forwardRef(Ks(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Js(na, e.__scopeScrollArea), [a, i] = z.useState(), d = z.useRef(null), l = (0, pt.s)(t, d, s.onScrollbarXChange);
          return z.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, I.jsx)(pa, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": xa(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Pa(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Ca(a.paddingLeft),
                  paddingEnd: Ca(a.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        ca = z.forwardRef(Ks(function(e, t) {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = Js(na, e.__scopeScrollArea), [a, i] = z.useState(), d = z.useRef(null), l = (0, pt.s)(t, d, s.onScrollbarYChange);
          return z.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, I.jsx)(pa, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": xa(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Pa(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Ca(a.paddingTop),
                  paddingEnd: Ca(a.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [ua, fa] = $s(na),
        pa = z.forwardRef(Ks(function(e, t) {
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
          } = e, p = Js(na, r), [h, v] = z.useState(null), m = (0, pt.s)(t, v), y = z.useRef(null), b = z.useRef(""), g = p.viewport, C = n.content - n.viewport, w = (0, mt.c)(c), x = (0, mt.c)(d), j = Sa(u, 10);

          function _(e) {
            if (y.current) {
              const t = e.clientX - y.current.left,
                r = e.clientY - y.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return Ks(_, "handleDragScroll"), z.useEffect(() => {
            const e = Ks(e => {
              const t = e.target,
                r = h?.contains(t);
              r && w(e, C)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, h, C, w]), z.useEffect(x, [n, x]), Da(h, j), Da(p.content, j), (0, I.jsx)(ua, {
            scope: r,
            scrollbar: h,
            hasThumb: o,
            onThumbChange: (0, mt.c)(s),
            onThumbPointerUp: (0, mt.c)(a),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, mt.c)(i),
            children: (0, I.jsx)(vt.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ft.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = h.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), _(e))
              }),
              onPointerMove: (0, ft.mK)(e.onPointerMove, _),
              onPointerUp: (0, ft.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }, "ScrollAreaScrollbarImpl")),
        ha = "ScrollAreaThumb",
        va = z.forwardRef(Ks(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = fa(ha, e.__scopeScrollArea);
          return (0, I.jsx)(vr, {
            present: r || o.hasThumb,
            children: (0, I.jsx)(ma, {
              ref: t,
              ...n
            })
          })
        }, "ScrollAreaThumb")),
        ma = z.forwardRef(Ks(function(e, t) {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = Js(ha, r), a = fa(ha, r), {
            onThumbPositionChange: i
          } = a, d = (0, pt.s)(t, a.onThumbChange), l = z.useRef(void 0), c = Sa(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return z.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = Ks(() => {
                if (c(), !l.current) {
                  const t = Ra(e, i);
                  l.current = t, i()
                }
              }, "handleScroll");
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, I.jsx)(vt.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ft.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ft.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        }, "ScrollAreaThumbImpl")),
        ya = "ScrollAreaCorner",
        ba = z.forwardRef(Ks(function(e, t) {
          const r = Js(ya, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, I.jsx)(ga, {
            ...e,
            ref: t
          }) : null
        }, "ScrollAreaCorner")),
        ga = z.forwardRef(Ks(function(e, t) {
          const {
            __scopeScrollArea: r,
            ...n
          } = e, o = Js(ya, r), [s, a] = z.useState(0), [i, d] = z.useState(0), l = Boolean(s && i), {
            onCornerWidthChange: c,
            onCornerHeightChange: u
          } = o;
          return Da(o.scrollbarX, () => {
            const e = o.scrollbarX?.offsetHeight || 0;
            o.onCornerHeightChange(e), d(e)
          }), Da(o.scrollbarY, () => {
            const e = o.scrollbarY?.offsetWidth || 0;
            o.onCornerWidthChange(e), a(e)
          }), z.useEffect(() => () => {
            c(0), u(0)
          }, [c, u]), l ? (0, I.jsx)(vt.sG.div, {
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

      function Ca(e) {
        return e ? parseInt(e, 10) : 0
      }

      function wa(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function xa(e) {
        const t = wa(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function ja(e, t, r, n = "ltr") {
        const o = xa(r),
          s = t || o / 2,
          a = o - s,
          i = r.scrollbar.paddingStart + s,
          d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
          l = r.content - r.viewport;
        return Oa([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
      }

      function _a(e, t, r = "ltr") {
        const n = xa(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = "ltr" === r ? [0, a] : [-1 * a, 0],
          l = (0, mn.q)(e, d);
        return Oa([0, a], [0, i])(l)
      }

      function Oa(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Pa(e, t) {
        return e > 0 && e < t
      }
      Ks(Ca, "toInt"), Ks(wa, "getThumbRatio"), Ks(xa, "getThumbSize"), Ks(ja, "getScrollPositionFromPointer"), Ks(_a, "getThumbOffsetFromScroll"), Ks(Oa, "linearScale"), Ks(Pa, "isScrollingWithinScrollbarBounds");
      var Ra = Ks((e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return Ks(function o() {
          const s = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = r.left !== s.left,
            i = r.top !== s.top;
          (a || i) && t(), r = s, n = window.requestAnimationFrame(o)
        }, "loop")(), () => window.cancelAnimationFrame(n)
      }, "addUnlinkedScrollListener");

      function Sa(e, t) {
        const r = (0, mt.c)(e),
          n = z.useRef(0);
        return z.useEffect(() => () => window.clearTimeout(n.current), []), z.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Da(e, t) {
        const r = (0, mt.c)(t);
        (0, At.N)(() => {
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
      Ks(Sa, "useDebounceCallback"), Ks(Da, "useResizeObserver");
      var Na = ea,
        Ia = ta,
        Ta = oa,
        za = va,
        ka = ba,
        Ea = Object.defineProperty,
        La = (e, t) => Ea(e, "name", {
          value: t,
          configurable: !0
        }),
        Va = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Aa = [" ", "Enter"],
        Ma = "Select",
        [Ha, Fa, Ba] = wn(Ma),
        [Za, qa] = (0, ht.A)(Ma, [Ba, qt]),
        Xa = qt(),
        [Ga, Ka] = Za(Ma),
        [Wa, Ua] = Za(Ma);

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
        } = e, m = Xa(t), [y, b] = z.useState(null), [g, C] = z.useState(null), [w, x] = z.useState(!1), j = (0, yn.jH)(l), [_, O] = (0, xr.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: s,
          caller: Ma
        }), [P, R] = (0, xr.i)({
          prop: a,
          defaultProp: i,
          onChange: d,
          caller: Ma
        }), S = z.useRef(null), D = z.useRef(P);
        z.useEffect(() => {
          const e = h ? y?.ownerDocument.getElementById(h) : y?.form;
          if (e instanceof HTMLFormElement) {
            const t = La(() => R(D.current), "reset");
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [h, y, R]);
        const N = !y || !!h || !!y.closest("form"),
          [T, k] = z.useState(new Set),
          E = (0, It.B)(),
          L = Array.from(T).map(e => e.props.value).join(";"),
          V = z.useCallback(e => {
            k(t => new Set(t).add(e))
          }, []),
          A = z.useCallback(e => {
            k(t => {
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
            open: _,
            onOpenChange: O,
            dir: j,
            triggerPointerDownPosRef: S,
            disabled: f,
            name: c,
            autoComplete: u,
            form: h,
            nativeOptions: T,
            nativeSelectKey: L,
            isFormControl: N
          };
        return (0, I.jsx)(or, {
          ...m,
          children: (0, I.jsx)(Ga, {
            scope: t,
            ...M,
            children: (0, I.jsx)(Ha.Provider, {
              scope: t,
              children: (0, I.jsx)(Wa, {
                scope: t,
                onNativeOptionAdd: V,
                onNativeOptionRemove: A,
                children: Ri(v) ? v(M) : r
              })
            })
          })
        })
      }
      La($a, "SelectProvider");
      var Ya = La(e => {
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
              children: [r, e ? (0, I.jsx)(Pi, {
                __scopeSelect: t
              }) : null]
            })
          })
        }, "Select"),
        Qa = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Xa(r), a = Ka("SelectTrigger", r), i = a.disabled || n, d = (0, pt.s)(t, a.onTriggerChange), l = Fa(r), c = z.useRef("touch"), [u, f, p] = Di(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Ni(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), h = La(e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          }, "handleOpen");
          return (0, I.jsx)(sr, {
            asChild: !0,
            ...s,
            children: (0, I.jsx)(vt.sG.button, {
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
              "data-placeholder": Si(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ft.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && h(e)
              }),
              onPointerDown: (0, ft.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e), e.preventDefault())
              }),
              onKeyDown: (0, ft.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Va.includes(e.key) && (h(), e.preventDefault())
              })
            })
          })
        }, "SelectTrigger")),
        Ja = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Ka("SelectValue", r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, pt.s)(t, d.onValueNodeChange);
          (0, At.N)(() => {
            l(c)
          }, [l, c]);
          const f = Si(d.value);
          return (0, I.jsx)(vt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, I.jsx)(z.Fragment, {
              children: f ? a : s
            }, f ? "placeholder" : "value")
          })
        }, "SelectValue")),
        ei = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            ...o
          } = e;
          return (0, I.jsx)(vt.sG.span, {
            "aria-hidden": !0,
            ...o,
            ref: t,
            children: n || "▼"
          })
        }, "SelectIcon")),
        [ti, ri] = Za("SelectPortal", {
          forceMount: void 0
        }),
        ni = La(e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, I.jsx)(ti, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, I.jsx)(ur, {
              asChild: !0,
              ...n
            })
          })
        }, "SelectPortal"),
        oi = "SelectContent",
        si = z.forwardRef(La(function(e, t) {
          const r = ri(oi, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Ka(oi, e.__scopeSelect),
            [a, i] = z.useState();
          return (0, At.N)(() => {
            i(new DocumentFragment)
          }, []), (0, I.jsx)(vr, {
            present: n || s.open,
            children: ({
              present: e
            }) => e ? (0, I.jsx)(ui, {
              ...o,
              ref: t
            }) : (0, I.jsx)(ai, {
              ...o,
              fragment: a
            })
          })
        }, "SelectContent")),
        ai = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            children: n,
            fragment: o
          } = e;
          return o ? dr.createPortal((0, I.jsx)(di, {
            scope: r,
            children: (0, I.jsx)(Ha.Slot, {
              scope: r,
              children: (0, I.jsx)("div", {
                ref: t,
                children: n
              })
            })
          }), o) : null
        }, "SelectContentFragment")),
        ii = 10,
        [di, li] = Za(oi),
        ci = (0, wr.TL)("SelectContent.RemoveScroll"),
        ui = z.forwardRef(La(function(e, t) {
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
          } = e, b = Ka(oi, r), [g, C] = z.useState(null), [w, x] = z.useState(null), j = (0, pt.s)(t, C), [_, O] = z.useState(null), [P, R] = z.useState(null), S = Fa(r), [D, N] = z.useState(!1), T = z.useRef(!1);
          z.useEffect(() => {
            if (g) return (0, Ao.Eq)(g)
          }, [g]), (0, Lo.Oh)();
          const k = z.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, w]),
            E = z.useCallback(() => k([_, g]), [k, _, g]);
          z.useEffect(() => {
            D && E()
          }, [D, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: V
          } = b;
          z.useEffect(() => {
            if (g) {
              let e = {
                x: 0,
                y: 0
              };
              const t = La(t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (V.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (V.current?.y ?? 0))
                  }
                }, "handlePointerMove"),
                r = La(r => {
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
          }, [g, L, V]), z.useEffect(() => {
            const e = La(() => L(!1), "close");
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [A, M] = Di(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ni(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), H = z.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (T.current = !0))
          }, [b.value]), F = z.useCallback(() => g?.focus(), [g]), B = z.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== b.value && b.value === t || n) && R(e)
          }, [b.value]), Z = "popper" === n ? pi : fi, q = Z === pi ? {
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
          return (0, I.jsx)(di, {
            scope: r,
            content: g,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: H,
            selectedItem: _,
            onItemLeave: F,
            itemTextRefCallback: B,
            focusSelectedItem: E,
            selectedItemText: P,
            position: n,
            isPositioned: D,
            searchRef: A,
            children: (0, I.jsx)(Vo.A, {
              as: ci,
              allowPinchZoom: !0,
              children: (0, I.jsx)(_o, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ft.mK)(o, e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, I.jsx)(wt, {
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
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, ft.mK)(y.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = S().filter(e => !e.disabled);
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
        }, "SelectContentImpl")),
        fi = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            onPlaced: n,
            ...o
          } = e, s = Ka(oi, r), a = li(oi, r), [i, d] = z.useState(null), [l, c] = z.useState(null), u = (0, pt.s)(t, c), f = Fa(r), p = z.useRef(!1), h = z.useRef(!0), {
            viewport: v,
            selectedItem: m,
            selectedItemText: y,
            focusSelectedItem: b
          } = a, g = z.useCallback(() => {
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
                  c = window.innerWidth - ii,
                  u = (0, mn.q)(s, [ii, Math.max(ii, c - l)]);
                i.style.minWidth = d + "px", i.style.left = u + "px"
              } else {
                const n = t.right - o.right,
                  s = window.innerWidth - r.right - n,
                  a = window.innerWidth - e.right - s,
                  d = e.width + a,
                  l = Math.max(d, t.width),
                  c = window.innerWidth - ii,
                  u = (0, mn.q)(s, [ii, Math.max(ii, c - l)]);
                i.style.minWidth = d + "px", i.style.right = u + "px"
              }
              const a = f(),
                d = window.innerHeight - 2 * ii,
                c = v.scrollHeight,
                u = window.getComputedStyle(l),
                h = parseInt(u.borderTopWidth, 10),
                b = parseInt(u.paddingTop, 10),
                g = parseInt(u.borderBottomWidth, 10),
                C = h + b + c + parseInt(u.paddingBottom, 10) + g,
                w = Math.min(5 * m.offsetHeight, C),
                x = window.getComputedStyle(v),
                j = parseInt(x.paddingTop, 10),
                _ = parseInt(x.paddingBottom, 10),
                O = e.top + e.height / 2 - ii,
                P = d - O,
                R = m.offsetHeight / 2,
                S = h + b + (m.offsetTop + R),
                D = C - S;
              if (S <= O) {
                const e = a.length > 0 && m === a[a.length - 1].ref.current;
                i.style.bottom = "0px";
                const t = l.clientHeight - v.offsetTop - v.offsetHeight,
                  r = S + Math.max(P, R + (e ? _ : 0) + t + g);
                i.style.height = r + "px"
              } else {
                const e = a.length > 0 && m === a[0].ref.current;
                i.style.top = "0px";
                const t = Math.max(O, h + v.offsetTop + (e ? j : 0) + R) + D;
                i.style.height = t + "px", v.scrollTop = S - O + v.offsetTop
              }
              i.style.margin = `${ii}px 0`, i.style.minHeight = w + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
            }
          }, [f, s.trigger, s.valueNode, i, l, v, m, y, s.dir, n]);
          (0, At.N)(() => g(), [g]);
          const [C, w] = z.useState();
          (0, At.N)(() => {
            l && w(window.getComputedStyle(l).zIndex)
          }, [l]);
          const x = z.useCallback(e => {
            e && !0 === h.current && (g(), b?.(), h.current = !1)
          }, [g, b]);
          return (0, I.jsx)(hi, {
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
              children: (0, I.jsx)(vt.sG.div, {
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
        pi = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = ii,
            ...s
          } = e, a = Xa(r);
          return (0, I.jsx)(ar, {
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
        [hi, vi] = Za(oi, {}),
        mi = "SelectViewport",
        yi = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            nonce: n,
            ...o
          } = e, s = li(mi, r), a = vi(mi, r), i = (0, pt.s)(t, s.onViewportChange), d = z.useRef(0);
          return (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: n
            }), (0, I.jsx)(Ha.Slot, {
              scope: r,
              children: (0, I.jsx)(vt.sG.div, {
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
                onScroll: (0, ft.mK)(o.onScroll, e => {
                  const t = e.currentTarget,
                    {
                      contentWrapper: r,
                      shouldExpandOnScrollRef: n
                    } = a;
                  if (n?.current && r) {
                    const e = Math.abs(d.current - t.scrollTop);
                    if (e > 0) {
                      const n = window.innerHeight - 2 * ii,
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
        [bi, gi] = Za("SelectGroup"),
        Ci = "SelectItem",
        [wi, xi] = Za(Ci),
        ji = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Ka(Ci, r), d = li(Ci, r), l = i.value === n, [c, u] = z.useState(s ?? ""), [f, p] = z.useState(!1), h = (0, mt.c)(e => d.itemRefCallback?.(e, n, o)), v = (0, pt.s)(t, h), m = (0, It.B)(), y = z.useRef("touch"), b = La(() => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          }, "handleSelect");
          return (0, I.jsx)(wi, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: l,
            onItemTextChange: z.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, I.jsx)(Ha.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, I.jsx)(vt.sG.div, {
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
                onFocus: (0, ft.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, ft.mK)(a.onBlur, () => p(!1)),
                onClick: (0, ft.mK)(a.onClick, () => {
                  "mouse" !== y.current && b()
                }),
                onPointerUp: (0, ft.mK)(a.onPointerUp, () => {
                  "mouse" === y.current && b()
                }),
                onPointerDown: (0, ft.mK)(a.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, ft.mK)(a.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ft.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ft.mK)(a.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (Aa.includes(e.key) && b(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        }, "SelectItem")),
        _i = "SelectItemText",
        Oi = z.forwardRef(La(function(e, t) {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Ka(_i, r), i = li(_i, r), d = xi(_i, r), l = Ua(_i, r), [c, u] = z.useState(null), f = (0, mt.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = (0, pt.s)(t, u, d.onItemTextChange, f), h = c?.textContent, v = z.useMemo(() => (0, I.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: h
          }, d.value), [d.disabled, d.value, h]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: y
          } = l;
          return (0, At.N)(() => (m(v), () => y(v)), [m, y, v]), (0, I.jsxs)(I.Fragment, {
            children: [(0, I.jsx)(vt.sG.span, {
              id: d.textId,
              ...s,
              ref: p
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren && !Si(a.value) ? dr.createPortal(s.children, a.valueNode) : null]
          })
        }, "SelectItemText")),
        Pi = z.forwardRef(La(function({
          __scopeSelect: e,
          ...t
        }, r) {
          const n = Ka("SelectBubbleInput", e),
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
            p = z.useRef(null),
            h = (0, pt.s)(r, p),
            v = o ?? "",
            m = (0, bn.Z)(v),
            y = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return z.useEffect(() => {
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
          }, [m, v]), (0, I.jsxs)(vt.sG.select, {
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
            children: [Si(o) && !y ? (0, I.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        }, "SelectBubbleInput"));

      function Ri(e) {
        return "function" == typeof e
      }

      function Si(e) {
        return "" === e || void 0 === e
      }

      function Di(e) {
        const t = (0, mt.c)(e),
          r = z.useRef(""),
          n = z.useRef(0),
          o = z.useCallback(e => {
            const o = r.current + e;
            t(o), La(function e(t) {
              r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
            }, "updateSearch")(o)
          }, [t]),
          s = z.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return z.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Ni(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = Ii(e, Math.max(o, 0));
        1 === n.length && (s = s.filter(e => e !== r));
        const a = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return a !== r ? a : void 0
      }

      function Ii(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }

      function Ti(e) {
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

      function ki(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zi(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ti(o)) in n ? Object.defineProperty(n, o, {
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

      function Ei(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      La(Ri, "isFunction"), La(Si, "shouldShowPlaceholder"), La(Di, "useTypeaheadSearch"), La(Ni, "findNextItem"), La(Ii, "wrapArray");
      var Li = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Vi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ki(ki({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Li(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ei(e.variantClassNames, e => Ei(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ai = Vi({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mi = Vi({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hi = Vi({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fi = Vi({
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
        Bi = Vi({
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
        Zi = Vi({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const qi = (0, z.createContext)(null);

      function Xi() {
        const e = (0, z.useContext)(qi);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Gi = (0, z.forwardRef)(({
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
          const m = (0, z.useRef)(null),
            y = (0, je.UP)(m, v),
            b = (0, z.useId)(),
            g = (0, z.useId)(),
            C = (0, z.useId)(),
            w = (0, z.useId)(),
            x = (0, z.useId)(),
            j = (0, z.useId)(),
            _ = (0, z.useRef)(null),
            O = (0, z.useRef)(null),
            P = (0, z.useRef)(null),
            [R = !1, S] = (0, je.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, q.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, h);
          return (0, I.jsx)(qi.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: C,
              triggerId: j,
              hintId: w,
              popoverId: x,
              labelRef: _,
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
            children: (0, I.jsx)(Ya, {
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
        Ki = (0, z.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = Xi(), a = (0, q.v6)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Ai({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, I.jsx)(si, {
            ...a,
            ref: o,
            children: (0, I.jsx)(yi, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Wi = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(yi, {
            ref: r,
            ...n
          })
        }),
        Ui = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, I.jsxs)(Na, {
            ...o,
            ref: n,
            children: [(0, I.jsx)(Wi, {
              asChild: !0,
              children: (0, I.jsx)(Ia, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, I.jsx)(Ta, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, I.jsx)(za, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        $i = (0, z.forwardRef)(({
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
          } = Xi(), {
            isPressed: C,
            pressProps: w
          } = (0, ks.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, j] = (0, z.useState)(!1), [_, O] = (0, z.useState)(!1);
          (0, z.useEffect)(() => {
            j(!!v.current || !!y.current), O(!!m.current)
          }, []);
          const P = (0, q.v6)({
              id: f,
              className: Bi({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!C,
                isDisabled: !!l
              }),
              "aria-labelledby": x ? (0, q.VW)(r, c, u) : r,
              "aria-describedby": _ ? (0, q.VW)(n, h) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": b ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!C
            }, (0, q.cJ)(w, "onKeyDown"), s),
            R = o ? k.DX : Qa;
          return (0, I.jsx)(R, {
            ...P,
            ref: a,
            children: e
          })
        }),
        Yi = (0, z.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? k.DX : "span";
          return (0, I.jsx)(a, {
            ...s,
            ref: o,
            children: (0, I.jsx)(Ja, {
              placeholder: e
            })
          })
        }),
        Qi = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = Xi(), i = a ? at.ChevronUp : at.ChevronDown, d = (0, q.v6)({
            asChild: !0,
            className: Zi({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, I.jsx)(ei, {
            ...d,
            ref: n,
            children: e || (0, I.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Ji = (0, z.forwardRef)(({
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
          } = Xi(), f = i && !o, p = (0, je.UP)(c, a), h = (0, q.v6)({
            id: s.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Fi({
              showAsterisk: f,
              isDisabled: d
            })
          }, s), v = t ? k.DX : "label";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(v, {
              ...h,
              ref: p,
              children: r
            })
          })
        }),
        ed = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a,
            descriptionRef: i
          } = Xi(), d = (0, je.UP)(i, o), l = (0, q.v6)({
            className: Mi({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? k.DX : "div";
          return (0, I.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        td = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            hintRef: a,
            isDisabled: i
          } = Xi(), d = (0, je.UP)(a, o), l = (0, q.v6)({
            className: Hi({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? k.DX : "div";
          return (0, I.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        rd = (0, z.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, z.useRef)(null),
            i = (0, je.UP)(a, s),
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
        nd = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, I.jsx)(Oi, {
            ref: n,
            asChild: !0,
            children: (0, I.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        od = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, I.jsx)(ei, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        sd = ni,
        ad = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Xi(), i = (0, q.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? k.DX : Zs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        id = qs,
        dd = Xs;
      var ld = r(35053),
        cd = r(34439);

      function ud(e) {
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

      function fd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function pd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fd(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ud(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        md = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pd(pd({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) vd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hd(e.variantClassNames, e => hd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        yd = md({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bd = md({
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
        gd = md({
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
        Cd = md({
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
        wd = md({
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
      const xd = (0, z.createContext)(null);

      function jd() {
        const e = (0, z.useContext)(xd);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const _d = (0, z.forwardRef)(({
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
            c = n ? k.DX : "div",
            u = (0, z.useId)(),
            f = (0, z.useId)(),
            p = (0, z.useId)();
          return (0, I.jsx)(xd.Provider, {
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
        Od = (0, z.forwardRef)(({
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
          const p = (0, z.useRef)(null),
            h = (0, je.UP)(p, f),
            {
              size: v,
              appearance: m,
              inputId: y,
              labelId: b,
              descriptionId: g,
              isDisabled: C,
              isReadOnly: w
            } = jd(),
            x = (0, cd.H)({
              isDisabled: C,
              isReadOnly: w,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, ld.K)({
              id: s || y,
              "aria-labelledby": (0, q.VW)(n, b),
              "aria-describedby": (0, q.VW)(o, g),
              name: l,
              value: c,
              isDisabled: C,
              isReadOnly: w
            }, x, p),
            _ = (0, q.v6)({
              className: wd({
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
            ..._,
            children: [(0, I.jsx)(k.s6, {
              children: (0, I.jsx)("input", {
                ...j,
                ref: h
              })
            }), (0, I.jsx)("div", {
              className: Cd({
                size: v
              }),
              "aria-hidden": "true",
              children: (0, I.jsx)("div", {
                className: bd({
                  size: v,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Pd = (0, z.forwardRef)(({
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
            className: gd({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? k.DX : "label";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Rd = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = jd(), i = n.id || a, d = (0, q.v6)({
            className: yd({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? k.DX : "div";
          return (0, I.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Sd = r(53681);
      const Dd = ({
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
        Nd = ({
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
        Id = ({
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
        Td = ({
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
        kd = ({
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

      function Ld(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ld(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ed(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach(function(t) {
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
      var Md = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vd(Vd({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Md(l, n, e.defaultVariants) && (r += " " + c);
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
        Fd = Hd({
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
        Bd = Hd({
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
        Zd = Hd({
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
        qd = Hd({
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
        Xd = Hd({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gd = Hd({
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
      const Kd = (0, z.createContext)(null);

      function Wd() {
        const e = (0, z.useContext)(Kd);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Ud = (0, z.forwardRef)(({
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
            d = n ? k.DX : "div",
            l = (0, z.useId)(),
            c = (0, z.useId)(),
            u = (0, z.useId)();
          return (0, I.jsx)(Kd.Provider, {
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
        $d = (0, z.forwardRef)(({
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
          } = Wd(), x = (0, z.useRef)(null), j = f.id || C, {
            isPressed: _,
            pressProps: O
          } = (0, ks.d)({
            ref: x
          }), {
            setSelected: P,
            toggle: R,
            ...S
          } = (0, cd.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: D,
            isSelected: N,
            isDisabled: E,
            isReadOnly: L
          } = (0, Sd.v)({
            "aria-label": "",
            id: j,
            name: o,
            ...w
          }, {
            ...S,
            toggle: R,
            setSelected: w.isReadOnly ? () => !1 : P
          }, x), V = (0, q.v6)({
            className: Bd({
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
            children: [(0, I.jsx)(k.s6, {
              children: (0, I.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, I.jsx)("div", {
              className: (0, T.$)(Fd({
                size: h,
                appearance: v
              }), u),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : N ? "checked" : "unchecked",
              "data-disabled": E || L,
              "data-testid": e,
              "data-pressed": _,
              children: (0, I.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (N || m) && (0, I.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Yd = (0, z.forwardRef)(({
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
          } = Wd(), u = s.id || d, f = c && !o, p = (0, q.v6)({
            className: Gd({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), h = t ? k.DX : "label";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(h, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        Qd = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Wd(), i = n.id || a, d = (0, q.v6)({
            className: Zd({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? k.DX : "div";
          return (0, I.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Jd = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Wd(), a = n.id || s, i = (0, q.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? k.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        el = (0, z.createContext)(null);

      function tl() {
        const e = (0, z.useContext)(el);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const rl = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, z.useState)(null), [l, c] = (0, z.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, q.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? k.DX : "fieldset";
          return (0, I.jsx)(el.Provider, {
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
        nl = (0, z.forwardRef)(({
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
          } = tl(), l = d && !s, c = (0, q.v6)({
            "data-testid": r,
            className: Xd({
              showAsterisk: l
            })
          }, a), u = t ? k.DX : "legend";
          return (0, I.jsx)(k.s6, {
            enabled: o,
            children: (0, I.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, I.jsx)(k.xV, {
                children: e
              }), !d && (0, I.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        ol = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = tl(), a = (0, z.useId)(), i = n.id || a;
          (0, z.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? k.DX : "div";
          return (0, I.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        sl = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = tl(), a = (0, q.v6)({
            "data-testid": r,
            className: qd({
              size: s
            })
          }, n), i = t ? k.DX : "div";
          return (0, I.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        al = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = tl(), a = (0, z.useId)(), i = n.id || a;
          (0, z.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, q.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = at.X,
            c = t ? k.DX : "div";
          return (0, I.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, I.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, I.jsx)(k.xV, {
              children: e
            })]
          })
        });

      function il(e) {
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

      function dl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ll(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dl(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = il(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ul = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ll(ll({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ul(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cl(e.variantClassNames, e => cl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pl = fl({
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
        hl = fl({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vl = fl({
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
        ml = fl({
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
      const yl = (0, z.createContext)(null);

      function bl() {
        const e = (0, z.useContext)(yl);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const gl = (0, z.forwardRef)(({
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
            c = e ? k.DX : "div",
            u = (0, z.useId)(),
            f = (0, z.useId)(),
            p = (0, z.useId)(),
            h = (0, z.useId)();
          return (0, I.jsx)(yl.Provider, {
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
        Cl = (0, z.forwardRef)(({
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
          } = bl(), u = (0, q.v6)({
            className: vl({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? k.DX : "label";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        wl = (0, z.forwardRef)(({
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
          } = bl(), g = (0, z.useRef)(null), C = (0, je.UP)(g, c), w = (0, q.v6)({
            className: ml({
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
          }, l), x = e ? k.DX : "textarea";
          return (0, I.jsx)(x, {
            ref: C,
            ...w,
            children: t
          })
        }),
        xl = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = bl(), i = (0, q.v6)({
            className: pl({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? k.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        jl = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = bl(), i = (0, q.v6)({
            className: hl({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? k.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        _l = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = bl(), i = (0, q.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? k.DX : Zs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ol = qs,
        Pl = Xs;
      var Rl = r(22718),
        Sl = r(61720);

      function Dl(e) {
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

      function Nl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Il(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nl(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Dl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nl(Object(r)).forEach(function(t) {
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
      var zl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Il(Il({}, e.defaultVariants), t);
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
              return Tl(e.variantClassNames, e => Tl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        El = kl({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ll = kl({
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
      const Vl = (0, z.createContext)(null);

      function Al() {
        const e = (0, z.useContext)(Vl);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Ml = (0, z.forwardRef)(({
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
          const f = (0, z.useRef)(null),
            p = (0, je.UP)(f, u),
            h = (0, z.useId)(),
            v = (0, z.useId)(),
            m = (0, z.useId)(),
            y = (0, Rl.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Sl.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, q.VW)(h, a),
              "aria-describedby": (0, q.VW)(v, m, i),
              "aria-errormessage": (0, q.VW)(m, d)
            }, y),
            g = (0, q.v6)({
              className: "foundry_njguqn0"
            }, b, (0, q.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            C = s ? k.DX : "div";
          return (0, I.jsx)(Vl.Provider, {
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
        Hl = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = Al(), i = (0, q.v6)({
            "data-testid": e,
            className: Ll({
              size: s,
              orientation: a
            })
          }, n), d = t ? k.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Fl = (0, z.forwardRef)(({
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
          } = Al(), l = i && !o, c = (0, q.v6)({
            id: s.id || d,
            "data-testid": e,
            className: El({
              showAsterisk: l
            })
          }, s), u = t ? k.DX : "div";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Bl = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = Al(), a = (0, q.v6)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? k.DX : "div";
          return (0, I.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        Zl = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = Al(), i = (0, q.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? k.DX : Zs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ql = qs,
        Xl = Xs;
      var Gl = r(7471),
        Kl = kl({
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
        Wl = kl({
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
        Ul = kl({
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
        $l = kl({
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
      const Yl = ({
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
        Ql = ({
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
        Jl = ({
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
        ec = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? k.DX : "label";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        tc = (0, z.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, z.useRef)(null),
            s = (0, je.UP)(o, n),
            a = (0, z.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Al(),
            {
              isPressed: p,
              pressProps: h
            } = (0, ks.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: v
            } = (0, Gl.z)({
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
            children: [(0, I.jsx)(k.s6, {
              children: (0, I.jsx)("input", {
                type: "radio",
                ...b,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, I.jsx)("div", {
              className: Ul({
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
        rc = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = Al(), d = (0, z.useId)(), l = (0, q.v6)({
            id: d,
            "data-testid": e,
            className: Wl({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? k.DX : "div";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        nc = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = Al(), a = (0, q.v6)({
            "data-testid": e,
            className: Kl({
              isDisabled: s
            })
          }, n), i = t ? k.DX : "span";
          return (0, I.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });
      var oc = r(58900);

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

      function ac(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ic(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ac(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = sc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ac(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var lc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        cc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ic(ic({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) lc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dc(e.variantClassNames, e => dc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        uc = cc({
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
        fc = cc({
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
        pc = cc({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hc = cc({
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
        vc = cc({
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
        mc = cc({
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
      const yc = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        bc = (0, z.createContext)(null);

      function gc() {
        const e = (0, z.useContext)(bc);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Cc = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, z.useState)("text"), u = `${(0,z.useId)()}-label`, f = `${(0,z.useId)()}-input`, p = `${(0,z.useId)()}-description`, h = (0, z.useRef)(null), v = (0, z.useRef)(yc), m = (0, q.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? k.DX : "div";
          return (0, I.jsx)(bc.Provider, {
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
        wc = (0, z.forwardRef)(({
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
          } = gc(), u = d && !o, f = (0, q.v6)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: mc({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? k.DX : "label";
          return (0, I.jsx)(k.s6, {
            enabled: n,
            children: (0, I.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        xc = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = gc(), a = (0, q.v6)({
            "data-testid": e,
            className: pc({
              isDisabled: s
            })
          }, n), i = t ? k.DX : "span";
          return (0, I.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        jc = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = gc(), d = (0, q.v6)({
            "data-testid": e,
            className: (0, T.$)(uc({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? k.DX : "div";
          return (0, I.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        _c = (0, z.forwardRef)(({
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
          } = gc();
          (0, z.useEffect)(() => g(l), []);
          const j = "invalid" === v,
            _ = (0, q.v6)({
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
              className: (0, T.$)(vc({
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
              ...j && {
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
            O = (0, oc.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            P = (0, je.UP)(r && n ? O : null, w, u),
            R = t ? k.DX : "input";
          return (0, I.jsx)(R, {
            ref: P,
            ..._
          })
        }),
        Oc = (0, z.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = gc(), i = (0, q.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, T.$)(hc({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? k.DX : at[e];
          return (0, I.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Pc = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          icon: r,
          iconElement: n,
          label: o,
          testId: s,
          preventFocusOnPress: a = !0,
          ...i
        }, d) => {
          const l = (0, z.useRef)(null),
            c = (0, je.UP)(l, d),
            {
              isDisabled: u
            } = gc(),
            {
              buttonProps: f
            } = (0, je.sL)((0, q.v6)(i, {
              isDisabled: u,
              preventFocusOnPress: a
            }), l),
            p = (0, q.v6)({
              className: (0, T.$)("foundry_8oytzon foundry_8kowh41 foundry_1d5mo5m0", "foundry_8oytzo3"),
              "data-testid": s
            }, f),
            h = n || (r ? at[r] : null),
            v = e ? k.DX : "button";
          return (0, I.jsxs)(v, {
            ref: c,
            ...p,
            children: [h && (0, I.jsx)(h, {
              label: o || "",
              size: "LG",
              className: "foundry_8oytzoo"
            }), (0, I.jsx)(k.xV, {
              children: t
            })]
          })
        }),
        Rc = (0, z.forwardRef)(({
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
          } = gc(), l = "password" === o, c = l ? e : t;
          (0, z.useEffect)(() => {
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
          return (0, I.jsxs)(un, {
            isDisabled: d,
            children: [(0, I.jsx)(fn, {
              children: (0, I.jsx)(Pc, {
                ref: n,
                ...u
              })
            }), (0, I.jsxs)(pn, {
              side: "bottom",
              align: "end",
              children: [c, (0, I.jsx)(hn, {})]
            })]
          })
        }),
        Sc = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = gc(), i = (0, q.v6)({
            className: fc({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? k.DX : "div";
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Dc = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = gc(), i = (0, q.v6)({
            className: "foundry_8oytzo14",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? k.DX : Zs;
          return (0, I.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Nc = qs,
        Ic = Xs;
      var Tc = r(909);

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

      function kc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = zc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ac = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ec(Ec({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lc(e.variantClassNames, e => Lc(e, e => e.split(" ")[0]))
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
      const Mc = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Hc = (0, z.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, z.useRef)(null),
            a = (0, je.UP)(s, o),
            {
              buttonProps: i
            } = (0, je.sL)(n, s),
            d = (0, q.v6)({
              "data-testid": r,
              className: Ac({
                size: t
              })
            }, i);
          return (0, I.jsx)("button", {
            ref: a,
            ...d,
            children: (0, I.jsx)(at.X, {
              label: e,
              size: Mc[t]
            })
          })
        });

      function Fc(e) {
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

      function Bc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Fc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bc(Object(r)).forEach(function(t) {
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
        Gc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zc(Zc({}, e.defaultVariants), t);
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
        },
        Kc = Gc({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wc = Gc({
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
        Uc = Gc({
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
      const $c = (0, z.createContext)(null);

      function Yc() {
        const e = (0, z.useContext)($c);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Qc = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? k.DX : "div",
            i = (0, q.v6)({
              className: Uc({
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
        Jc = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        eu = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        tu = {
          danger: at.CircleX,
          information: at.Info,
          success: at.CircleCheck,
          warning: at.TriangleAlert
        },
        ru = (0, z.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Yc(), s = e ? k.DX : tu[o], a = (0, q.v6)({
            className: Wc({
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
        nu = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        ou = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        su = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, z.useRef)(null),
            a = (0, je.UP)(s, o),
            i = e ? k.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Tc.i)(n, s),
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
        au = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? k.DX : "div",
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
        iu = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? k.DX : "div";
          return (0, I.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, T.$)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        du = (0, z.forwardRef)((e, t) => {
          const {
            background: r
          } = Yc(), n = "none" !== r, o = (0, q.v6)({
            className: Kc({
              hasBackground: n
            })
          }, e);
          return (0, I.jsx)(Hc, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var lu = r(64634),
        cu = r(7697),
        uu = r(17497);

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

      function pu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pu(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = fu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var mu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yu = "foundry_qmpv6yv",
        bu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hu(hu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) mu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vu(e.variantClassNames, e => vu(e, e => e.split(" ")[0]))
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
      const gu = (0, z.createContext)(null);

      function Cu() {
        const e = (0, z.useContext)(gu);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const wu = (0, z.forwardRef)(({
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
              const t = (0, je.rl)(),
                r = (0, je.jt)(),
                [n, o] = (0, z.useState)([]),
                s = n.length,
                [a, i] = (0, z.useState)(0),
                [d, l] = (0, lu.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [(0, cu.A)(), (0, uu.A)()]),
                c = (0, z.useRef)(0),
                u = (0, z.useRef)(!1),
                f = n[a],
                p = (0, z.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                h = (0, z.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                v = (0, z.useCallback)((e, t) => {
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
              return (0, z.useEffect)(() => {
                l && (h(l), v(l), l.on("reInit", h).on("reInit", v).on("scroll", v).on("slideFocus", v))
              }, [l, v]), (0, z.useEffect)(() => {
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
          (0, z.useEffect)(() => {
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
              className: bu(c)
            }, h, i),
            m = e ? k.DX : "div";
          return (0, I.jsx)(gu.Provider, {
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
        xu = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        ju = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Cu();
          if (!e && !n || !n?.status) return null;
          const o = e || xu[n.status],
            s = at[o],
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
        _u = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "div",
            s = (0, q.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Ou = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? k.DX : "div",
            d = (0, q.v6)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, I.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        Pu = (0, z.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = Cu(), i = (0, q.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, je.UP)(s, n), l = z.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, z.useEffect)(() => {
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
        Ru = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, z.useRef)(null),
            a = (0, je.UP)(s, o),
            i = e ? k.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Tc.i)(n, s),
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
        Su = (0, z.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, I.jsx)(Hc, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Du = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? k.DX : "div",
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
        Nu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Cu(), s = (0, q.v6)({
            className: yu
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
        Iu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Cu(), s = (0, q.v6)({
            className: yu
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
        Tu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Cu(), s = (0, q.v6)({
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

      function ku(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ku(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = zu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ku(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Lu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Au = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Eu(Eu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Lu(e.variantClassNames, e => Lu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Mu = Au({
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
        Hu = Au({
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
        Fu = Au({
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
      const Bu = (0, z.createContext)(null);

      function Zu() {
        const e = (0, z.useContext)(Bu);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const qu = (0, z.forwardRef)(({
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
              className: Hu(c)
            }, d),
            f = e ? k.DX : "div";
          return (0, I.jsx)(Bu.Provider, {
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
        Xu = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = Zu(), a = e ? k.DX : "div", i = (0, q.v6)({
            className: Fu({
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
        Gu = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
            o = (0, q.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, I.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        Ku = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Zu(), s = (0, q.v6)({
            className: Mu({
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
      var Wu = Object.defineProperty,
        Uu = (e, t) => Wu(e, "name", {
          value: t,
          configurable: !0
        }),
        $u = "ToastProvider",
        [Yu, Qu, Ju] = wn("Toast"),
        [ef, tf] = (0, ht.A)("Toast", [Ju]),
        [rf, nf] = ef($u),
        of = Uu(e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            announcerContainer: a,
            children: i
          } = e, [d, l] = z.useState(null), [c, u] = z.useState(0), f = z.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${$u}\`. Expected non-empty \`string\`.`), (0, I.jsx)(Yu.Provider, {
            scope: t,
            children: (0, I.jsx)(rf, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: z.useCallback(() => u(e => e + 1), []),
              onToastRemove: z.useCallback(() => u(e => e - 1), []),
              isClosePausedRef: f,
              announcerContainer: a,
              children: i
            })
          })
        }, "ToastProvider"),
        sf = ["F8"],
        af = "toast.viewportPause",
        df = "toast.viewportResume",
        lf = z.forwardRef(Uu(function(e, t) {
          const {
            __scopeToast: r,
            hotkey: n = sf,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = nf("ToastViewport", r), i = Qu(r), d = z.useRef(null), l = z.useRef(null), c = z.useRef(null), u = z.useRef(null), f = (0, pt.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), h = a.toastCount > 0;
          z.useEffect(() => {
            const e = Uu(e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            }, "handleKeyDown");
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), z.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (h && e && t) {
              const r = Uu(() => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(af);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                }, "handlePause"),
                n = Uu(() => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(df);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !1
                  }
                }, "handleResume"),
                o = Uu(t => {
                  !e.contains(t.relatedTarget) && n()
                }, "handleFocusOutResume"),
                s = Uu(() => {
                  e.contains(document.activeElement) || n()
                }, "handlePointerLeaveResume");
              return e.addEventListener("focusin", r), e.addEventListener("focusout", o), e.addEventListener("pointermove", r), e.addEventListener("pointerleave", s), window.addEventListener("blur", r), window.addEventListener("focus", n), () => {
                e.removeEventListener("focusin", r), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", r), e.removeEventListener("pointerleave", s), window.removeEventListener("blur", r), window.removeEventListener("focus", n)
              }
            }
          }, [h, a.isClosePausedRef]);
          const v = z.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Pf(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return z.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = Uu(t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = v({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    s = o.findIndex(e => e === r);
                  Rf(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              }, "handleKeyDown");
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, v]), (0, I.jsxs)(Nt, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: h ? void 0 : "none"
            },
            children: [h && (0, I.jsx)(cf, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Rf(v({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, I.jsx)(Yu.Slot, {
              scope: r,
              children: (0, I.jsx)(vt.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), h && (0, I.jsx)(cf, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Rf(v({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        }, "ToastViewport")),
        cf = z.forwardRef(Uu(function(e, t) {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = nf("ToastFocusProxy", r);
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
        uf = "Toast",
        ff = z.forwardRef(Uu(function(e, t) {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, xr.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: uf
          });
          return (0, I.jsx)(vr, {
            present: r || i,
            children: (0, I.jsx)(vf, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, mt.c)(e.onPause),
              onResume: (0, mt.c)(e.onResume),
              onSwipeStart: (0, ft.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ft.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ft.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ft.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        }, "Toast")),
        [pf, hf] = ef(uf, {
          onClose() {}
        }),
        vf = z.forwardRef(Uu(function(e, t) {
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
          } = e, v = nf(uf, r), m = Qu(r), [y, b] = z.useState(null), g = (0, pt.s)(t, b), C = z.useRef(null), w = z.useRef(null), x = o || v.duration, j = z.useRef(0), _ = z.useRef(x), O = z.useRef(0), {
            onToastAdd: P,
            onToastRemove: R
          } = v, S = (0, mt.c)(() => {
            const e = y?.contains(document.activeElement);
            e && v.viewport?.focus(), a()
          }), D = z.useCallback(e => {
            e && e !== 1 / 0 && (window.clearTimeout(O.current), j.current = (new Date).getTime(), O.current = window.setTimeout(S, e))
          }, [S]);
          z.useEffect(() => {
            const e = v.viewport;
            if (e) {
              const t = Uu(() => {
                  D(_.current), l?.()
                }, "handleResume"),
                r = Uu(() => {
                  const e = (new Date).getTime() - j.current;
                  _.current = _.current - e, window.clearTimeout(O.current), d?.()
                }, "handlePause");
              return e.addEventListener(af, r), e.addEventListener(df, t), () => {
                e.removeEventListener(af, r), e.removeEventListener(df, t)
              }
            }
          }, [v.viewport, x, d, l, D]), z.useEffect(() => {
            s && !v.isClosePausedRef.current && D(x)
          }, [s, x, v.isClosePausedRef, D]), z.useEffect(() => () => {
            window.clearTimeout(O.current)
          }, []), z.useEffect(() => (P(), () => R()), [P, R]);
          const N = z.useMemo(() => y ? wf(y) : null, [y]);
          return v.viewport ? (0, I.jsxs)(I.Fragment, {
            children: [N && (0, I.jsx)(mf, {
              __scopeToast: r,
              role: "status",
              "aria-live": "foreground" === n ? "assertive" : "polite",
              children: N
            }), (0, I.jsx)(pf, {
              scope: r,
              onClose: S,
              children: dr.createPortal((0, I.jsx)(Yu.ItemSlot, {
                scope: r,
                children: (0, I.jsx)(Dt, {
                  asChild: !0,
                  onEscapeKeyDown: (0, ft.mK)(i, e => {
                    const t = m().some(t => t.ref.current?.contains(e.target));
                    t || S()
                  }),
                  children: (0, I.jsx)(vt.sG.li, {
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
                    onKeyDown: (0, ft.mK)(e.onKeyDown, e => {
                      "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || S())
                    }),
                    onPointerDown: (0, ft.mK)(e.onPointerDown, e => {
                      0 === e.button && (C.current = {
                        x: e.clientX,
                        y: e.clientY
                      })
                    }),
                    onPointerMove: (0, ft.mK)(e.onPointerMove, e => {
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
                      n ? (w.current = l, xf("toast.swipeMove", u, f, {
                        discrete: !1
                      })) : jf(l, v.swipeDirection, d) ? (w.current = l, xf("toast.swipeStart", c, f, {
                        discrete: !1
                      }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (C.current = null)
                    }),
                    onPointerUp: (0, ft.mK)(e.onPointerUp, e => {
                      const t = w.current,
                        r = e.target;
                      if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, C.current = null, t) {
                        const r = e.currentTarget,
                          n = {
                            originalEvent: e,
                            delta: t
                          };
                        jf(t, v.swipeDirection, v.swipeThreshold) ? xf("toast.swipeEnd", p, n, {
                          discrete: !0
                        }) : xf("toast.swipeCancel", f, n, {
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
        mf = Uu(e => {
          const {
            __scopeToast: t,
            children: r,
            ...n
          } = e, o = nf(uf, t), [s, a] = z.useState(!1), [i, d] = z.useState(!1);
          return _f(() => a(!0)), z.useEffect(() => {
            const e = window.setTimeout(() => d(!0), 1e3);
            return () => window.clearTimeout(e)
          }, []), i ? null : (0, I.jsx)(ur, {
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
        yf = z.forwardRef(Uu(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e;
          return (0, I.jsx)(vt.sG.div, {
            ...n,
            ref: t
          })
        }, "ToastDescription")),
        bf = z.forwardRef(Uu(function(e, t) {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, I.jsx)(Cf, {
            altText: r,
            asChild: !0,
            children: (0, I.jsx)(gf, {
              ...n,
              ref: t
            })
          }) : (console.error("Invalid prop `altText` supplied to `ToastAction`. Expected non-empty `string`."), null)
        }, "ToastAction")),
        gf = z.forwardRef(Uu(function(e, t) {
          const {
            __scopeToast: r,
            ...n
          } = e, o = hf("ToastClose", r);
          return (0, I.jsx)(Cf, {
            asChild: !0,
            children: (0, I.jsx)(vt.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ft.mK)(e.onClick, o.onClose)
            })
          })
        }, "ToastClose")),
        Cf = z.forwardRef(Uu(function(e, t) {
          const {
            __scopeToast: r,
            altText: n,
            ...o
          } = e;
          return (0, I.jsx)(vt.sG.div, {
            "data-radix-toast-announce-exclude": "",
            "data-radix-toast-announce-alt": n || void 0,
            ...o,
            ref: t
          })
        }, "ToastAnnounceExclude"));

      function wf(e) {
        const t = [];
        return Array.from(e.childNodes).forEach(e => {
          if (e.nodeType === e.TEXT_NODE && e.textContent && t.push(e.textContent), Of(e)) {
            const r = e.ariaHidden || e.hidden || "none" === e.style.display,
              n = "" === e.dataset.radixToastAnnounceExclude;
            if (!r)
              if (n) {
                const r = e.dataset.radixToastAnnounceAlt;
                r && t.push(r)
              } else t.push(...wf(e))
          }
        }), t
      }

      function xf(e, t, r, {
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
        }), n ? (0, vt.hO)(o, s) : o.dispatchEvent(s)
      }
      Uu(wf, "getAnnounceTextContent"), Uu(xf, "handleAndDispatchCustomEvent");
      var jf = Uu((e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      }, "isDeltaInDirection");

      function _f(e = () => {}) {
        const t = (0, mt.c)(e);
        (0, At.N)(() => {
          let e = 0,
            r = 0;
          return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
          }
        }, [t])
      }

      function Of(e) {
        return e.nodeType === e.ELEMENT_NODE
      }

      function Pf(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: Uu(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function Rf(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      Uu(_f, "useNextFrame"), Uu(Of, "isHTMLElement"), Uu(Pf, "getTabbableCandidates"), Uu(Rf, "focusFirst");
      var Sf = of,
        Df = lf,
        Nf = ff,
        If = yf,
        Tf = bf,
        zf = gf;

      function kf(e) {
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

      function Ef(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ef(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = kf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ef(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Af = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lf(Lf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Af(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vf(e.variantClassNames, e => Vf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Hf = Mf({
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
        Ff = Mf({
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
        Bf = Mf({
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
      const Zf = ({
          testId: e,
          ...t
        }) => (0, I.jsx)(Sf, {
          "data-testid": e,
          ...t
        }),
        qf = (0, z.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: Bf({
              position: r
            })
          }, n);
          return (0, I.jsx)(Df, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        Xf = (0, z.createContext)(null);

      function Gf() {
        const e = (0, z.useContext)(Xf);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Kf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? k.DX : Nf,
            i = (0, q.v6)({
              className: Ff({
                appearance: n
              })
            }, o);
          return (0, I.jsx)(Xf.Provider, {
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
        Wf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? k.DX : If,
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
        Uf = {
          danger: at.CircleX,
          information: at.Info,
          success: at.CircleCheck,
          warning: at.TriangleAlert,
          avocado: at.CircleCheck
        },
        $f = (0, z.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Gf(), o = e ? k.DX : Uf[n], s = (0, q.v6)({
            className: Hf({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, I.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        Yf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, I.jsx)(Tf, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, I.jsx)(k.DX, {
              children: t
            }) : (0, I.jsx)(D.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Qf = (0, z.forwardRef)(({
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
            children: e ? (0, I.jsx)(k.DX, {
              children: t
            }) : (0, I.jsx)(Hc, {
              size: "SM",
              label: n
            })
          })
        });
      var Jf = r(20179);

      function ep(e) {
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

      function tp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ep(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function np(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var op = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rp(rp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) op(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return np(e.variantClassNames, e => np(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ap = sp({
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
        ip = sp({
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
        dp = sp({
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

      function lp() {
        const e = (0, z.useContext)(cp);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const cp = (0, z.createContext)(null),
        up = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, q.v6)({
              className: dp({
                size: n
              })
            }, o),
            i = r ? k.DX : "ol";
          return (0, I.jsx)(cp.Provider, {
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
        fp = (0, z.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, z.useRef)(null),
            {
              size: i
            } = lp(),
            {
              itemProps: d
            } = (0, Jf.I)({
              isCurrent: e,
              children: t
            }, a),
            l = r ? k.DX : "a",
            c = (0, q.v6)({
              className: (0, T.$)(ap({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, I.jsx)("li", {
            className: ip({
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
        pp = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e];
          return (0, I.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        hp = (0, z.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, z.useState)(r), {
            size: d
          } = lp(), l = (0, q.v6)({
            className: ip({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, I.jsx)("li", {
            ref: s,
            ...l,
            children: (0, I.jsxs)(Ya, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, I.jsx)(Qa, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, I.jsx)(ni, {
                children: (0, I.jsx)(si, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, I.jsx)(yi, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        vp = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? k.DX : ji,
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

      function mp(e) {
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

      function yp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function bp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = mp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function gp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bp(bp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gp(e.variantClassNames, e => gp(e, e => e.split(" ")[0]))
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
      const xp = (0, z.createContext)(null);

      function jp() {
        const e = (0, z.useContext)(xp);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const _p = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? k.DX : "div",
            d = (0, q.v6)({
              className: wp({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, I.jsx)(xp.Provider, {
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
        Op = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? k.DX : "div",
            s = (0, q.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, I.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        Pp = (0, z.forwardRef)(({
          icon: e,
          iconElement: t,
          label: r,
          ...n
        }, o) => {
          const s = t || (e ? at[e] : null),
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
        Rp = () => {
          const e = (0, je.Ub)(q.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Sp = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Dp(e) {
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

      function Np(e, t) {
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
          t % 2 ? Np(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Dp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Tp(e, t) {
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
        kp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ip(Ip({}, e.defaultVariants), t);
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
              return Tp(e.variantClassNames, e => Tp(e, e => e.split(" ")[0]))
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
      const Ep = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, I.jsx)(Na, {
            ref: r,
            ...n
          })
        }),
        Lp = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, I.jsx)(Ia, {
            ref: r,
            ...n
          })
        }),
        Vp = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, I.jsx)(Ta, {
            ref: r,
            ...n
          })
        }),
        Ap = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, je.rl)(),
            o = (0, q.v6)({
              "data-testid": e,
              className: kp({
                isTouchDevice: n
              })
            }, t);
          return (0, I.jsx)(za, {
            ref: r,
            ...o
          })
        }),
        Mp = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(ka, {
            ref: r,
            ...n
          })
        });

      function Hp(e) {
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

      function Fp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Bp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Hp(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Zp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Xp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bp(Bp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zp(e.variantClassNames, e => Zp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Gp = Xp({
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
        Kp = Xp({
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
      const Wp = (0, z.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, z.createRef)(),
          dialogSpringRef: (0, ut.$9)(),
          overlaySpringRef: (0, ut.$9)()
        }),
        Up = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [d, l] = (0, je.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, je.ZC)(d);
          return (0, I.jsx)(Wp.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, z.useId)(),
              descriptionId: (0, z.useId)(),
              triggerRef: (0, z.useRef)(null),
              dialogSpringRef: (0, ut.U2)(),
              overlaySpringRef: (0, ut.U2)()
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
          } = (0, z.useContext)(Wp), n = (0, q.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, I.jsx)(Go, {
            ...n
          })
        },
        Yp = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, z.useContext)(Wp), s = (0, je.UP)(o, r), a = (0, q.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, I.jsx)(Ko, {
            ...a,
            ref: s
          })
        }),
        Qp = e => (0, I.jsx)(Yo, {
          forceMount: !0,
          ...e
        }),
        Jp = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, z.useContext)(Wp), a = Sp(), i = (0, je.jt)(), d = (0, ut.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: ut.$W.stiff,
            immediate: i || s
          }), l = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, ut.CS)(Jo);
          return (0, z.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, I.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        eh = (0, z.forwardRef)(({
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
          } = (0, z.useContext)(Wp), y = (0, je.rl)(), b = (0, je.jt)(), g = (0, z.useRef)(null), C = Rp(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = Sp(),
              a = Rp(),
              i = (0, z.useRef)();
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
                  config: ut.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: ut.$W.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: ut.$W.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: ut.$W.stiff
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
          }), x = (0, ut.pn)(a, {
            from: C(0),
            enter: C(100),
            leave: C(0),
            delay: a ? 100 : 0,
            config: ut.$W.stiff,
            ref: v,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : h?.()
            }
          });
          (0, z.useEffect)(() => {
            v.start()
          }, [a]);
          const j = (0, je.UP)(g, s),
            _ = y && !b && !n && w(),
            O = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, _ || {}, o),
            P = (0, ut.CS)(ns);
          return x((t, r) => r ? (0, I.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, I.jsx)(P, {
              forceMount: !0,
              ref: j,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        th = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, I.jsx)(is, {
            ref: r,
            ...n
          })
        }),
        rh = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(ds, {
            ref: r,
            ...n
          })
        }),
        nh = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, I.jsxs)(Ep, {
            ref: n,
            ...o,
            children: [(0, I.jsx)(Lp, {
              className: "foundry_xov33ni",
              children: e
            }), (0, I.jsx)(Vp, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, I.jsx)(Ap, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        oh = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? k.DX : "div";
          return (0, I.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        sh = (0, z.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: Gp({
                align: e
              })
            }, n),
            a = t ? k.DX : "header";
          return (0, I.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        ah = (0, z.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            className: Kp({
              appearance: t
            })
          }, r);
          return (0, I.jsx)(is, {
            ref: n,
            ...o
          })
        }),
        ih = (0, z.forwardRef)((e, t) => {
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
        dh = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, I.jsx)(k.DX, {
              ref: n,
              ...o
            }) : (0, I.jsx)(Hc, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, I.jsx)(ls, {
            asChild: !0,
            children: s
          })
        }),
        lh = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? k.DX : "div";
          return (0, I.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        ch = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? k.DX : "footer";
          return (0, I.jsx)(s, {
            ref: n,
            ...o
          })
        });
      var uh = r(76733),
        fh = Object.defineProperty,
        ph = (e, t) => fh(e, "name", {
          value: t,
          configurable: !0
        }),
        hh = "Avatar",
        [vh, mh] = (0, ht.A)(hh),
        yh = [0, () => {}],
        [bh, gh] = vh(hh),
        Ch = z.forwardRef(ph(function(e, t) {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = z.useState("idle"), [a, i] = _h();
          return (0, I.jsx)(bh, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: s,
            imageCount: a,
            setImageCount: i,
            children: (0, I.jsx)(vt.sG.span, {
              ...n,
              ref: t
            })
          })
        }, "Avatar")),
        wh = z.forwardRef(ph(function(e, t) {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...s
          } = e, a = gh("AvatarImage", r);
          Oh(a.setImageCount);
          const i = xh(n, {
              referrerPolicy: s.referrerPolicy,
              crossOrigin: s.crossOrigin,
              loadingStatus: a.imageLoadingStatus,
              setLoadingStatus: a.setImageLoadingStatus
            }),
            d = (0, mt.c)(e => {
              o?.(e)
            }),
            l = z.useRef(i);
          return (0, At.N)(() => {
            const e = l.current;
            l.current = i, i !== e && d(i)
          }, [i, d]), "loaded" === i ? (0, I.jsx)(vt.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        }, "AvatarImage"));

      function xh(e, {
        loadingStatus: t,
        setLoadingStatus: r,
        referrerPolicy: n,
        crossOrigin: o
      }) {
        return (0, At.N)(() => {
          if (!e) return void r("error");
          const t = new window.Image,
            s = ph(e => {
              const t = e.currentTarget;
              r(jh(t))
            }, "handleLoad"),
            a = ph(() => r("error"), "handleError");
          return t.addEventListener("load", s), t.addEventListener("error", a), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(jh(t)), () => {
            t.removeEventListener("load", s), t.removeEventListener("error", a), r("idle")
          }
        }, [e, o, n, r]), t
      }

      function jh(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function _h() {
        let e = yh;
        if (uh.D) {
          e = z.useState(0);
          const [t] = e, r = z.useRef(!1);
          z.useEffect(() => {
            t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
          }, [t])
        }
        return e
      }

      function Oh(e) {
        uh.D && z.useEffect(() => (e(e => e + 1), () => {
          e(e => e - 1)
        }), [e])
      }

      function Ph(e) {
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

      function Rh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Sh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Rh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ph(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      ph(xh, "useImageLoadingStatus"), ph(jh, "getImageLoadingStatus"), ph(_h, "useImageCount"), ph(Oh, "useUpdateImageCount");
      var Nh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ih = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Sh(Sh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Nh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dh(e.variantClassNames, e => Dh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Th = Ih({
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
        kh = "var(--foundry_v912w23)",
        Eh = Ih({
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
        Lh = Ih({
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
        Vh = "var(--foundry_v912w21)",
        Ah = "var(--foundry_v912w20)",
        Mh = Ih({
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
      const Hh = (0, z.createContext)(null);

      function Fh() {
        const e = (0, z.useContext)(Hh);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Bh = (0, z.forwardRef)(({
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
            className: Th({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, I.jsx)(Hh.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, I.jsx)(Ch, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Zh = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = Fh(), [i, d] = (0, z.useState)(!1);
          (0, z.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, q.v6)({
              className: Eh({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, I.jsx)("span", {
            className: Lh({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, I.jsx)(wh, {
              ref: o,
              ...c
            })
          })
        }),
        qh = (0, z.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, z.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = Fh(),
            d = a || "online",
            l = (0, je.UP)(o, n),
            c = (0, q.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Mh({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [Ah]: t?.online,
                [Vh]: t?.offline,
                [zh]: t?.away,
                [kh]: t?.busy
              })
            }, r);
          return (0, I.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Xh(e) {
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

      function Gh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Kh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xh(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Uh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $h = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Kh(Kh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Uh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wh(e.variantClassNames, e => Wh(e, e => e.split(" ")[0]))
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
      const Yh = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? k.DX : "nav";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Qh = (0, z.forwardRef)(({
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
            a = e ? k.DX : "div";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        Jh = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, z.useRef)(null),
            i = (0, je.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = (0, Tc.i)(o, a),
            c = (0, q.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, T.$)($h({
                isActive: r
              }))
            }, d),
            u = e ? k.DX : "a";
          return (0, I.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        ev = (0, z.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, I.jsx)(Jh, {
            ref: n,
            ...o,
            children: (0, I.jsx)(at.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        tv = (0, z.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, I.jsx)(Jh, {
            ref: n,
            ...o,
            children: (0, I.jsx)(at.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        rv = ({
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
            s = e ? k.DX : "span";
          return (0, I.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        nv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? k.DX : "div";
          return (0, I.jsx)(s, {
            ...o,
            children: t
          })
        },
        ov = (0, z.createContext)(null);

      function sv() {
        const e = (0, z.useContext)(ov);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const av = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, z.useId)(),
            s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? k.DX : "div";
          return (0, I.jsx)(ov.Provider, {
            value: {
              labelId: o
            },
            children: (0, I.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        iv = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = sv(), a = (0, q.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? k.DX : "label";
          return (0, I.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        dv = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = sv(), a = (0, q.v6)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? k.DX : Gi;
          return (0, I.jsxs)(i, {
            ...a,
            children: [(0, I.jsxs)($i, {
              ref: o,
              children: [(0, I.jsx)(Yi, {
                placeholder: r
              }), (0, I.jsx)(Qi, {})]
            }), (0, I.jsx)(sd, {
              children: (0, I.jsx)(Ki, {
                children: (0, I.jsx)(Ui, {
                  children: t
                })
              })
            })]
          })
        }),
        lv = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r
            }, n),
            a = e ? k.DX : rd;
          return (0, I.jsx)(a, {
            ...s,
            ref: o,
            children: (0, I.jsx)(nd, {
              children: t
            })
          })
        }),
        cv = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? k.DX : "p";
          return (0, I.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var uv = r(25298),
        fv = Object.defineProperty,
        pv = (e, t) => fv(e, "name", {
          value: t,
          configurable: !0
        }),
        hv = "rovingFocusGroup.onEntryFocus",
        vv = {
          bubbles: !1,
          cancelable: !0
        },
        mv = "RovingFocusGroup",
        [yv, bv, gv] = wn(mv),
        [Cv, wv] = (0, ht.A)(mv, [gv]),
        [xv, jv] = Cv(mv),
        _v = z.forwardRef(pv(function(e, t) {
          return (0, I.jsx)(yv.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, I.jsx)(yv.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, I.jsx)(Ov, {
                ...e,
                ref: t
              })
            })
          })
        }, "RovingFocusGroup")),
        Ov = z.forwardRef(pv(function(e, t) {
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
          } = e, f = z.useRef(null), p = (0, pt.s)(t, f), h = (0, yn.jH)(s), [v, m] = (0, xr.i)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: mv
          }), [y, b] = z.useState(!1), g = (0, mt.c)(l), C = bv(r), w = z.useRef(!1), [x, j] = z.useState(0);
          return z.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(hv, g), () => e.removeEventListener(hv, g)
          }, [g]), (0, I.jsx)(xv, {
            scope: r,
            orientation: n,
            dir: h,
            loop: o,
            currentTabStopId: v,
            onItemFocus: z.useCallback(e => m(e), [m]),
            onItemShiftTab: z.useCallback(() => b(!0), []),
            onFocusableItemAdd: z.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: z.useCallback(() => j(e => e - 1), []),
            children: (0, I.jsx)(vt.sG.div, {
              tabIndex: y || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ft.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, ft.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(hv, vv);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = C().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === v),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Nv(n, c)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, ft.mK)(e.onBlur, () => b(!1))
            })
          })
        }, "RovingFocusGroupImpl")),
        Pv = z.forwardRef(pv(function(e, t) {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, It.B)(), l = s || d, c = jv("RovingFocusGroupItem", r), u = c.currentTabStopId === l, f = bv(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: h,
            currentTabStopId: v
          } = c, m = (0, uv.z)();
          return (0, At.N)(() => {
            if (m && n) return p(), () => h()
          }, [m, n, p, h]), z.useEffect(() => {
            if (!m && n) return p(), () => h()
          }, [m, n, p, h]), (0, I.jsx)(yv.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, I.jsx)(vt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, ft.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, ft.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, ft.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = Dv(e, c.orientation, c.dir);
                if (void 0 !== t) {
                  if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                  e.preventDefault();
                  const r = f().filter(e => e.focusable);
                  let n = r.map(e => e.ref.current);
                  if ("last" === t) n.reverse();
                  else if ("prev" === t || "next" === t) {
                    "prev" === t && n.reverse();
                    const r = n.indexOf(e.currentTarget);
                    n = c.loop ? Iv(n, r + 1) : n.slice(r + 1)
                  }
                  setTimeout(() => Nv(n))
                }
              }),
              children: "function" == typeof a ? a({
                isCurrentTabStop: u,
                hasTabStop: null != v
              }) : a
            })
          })
        }, "RovingFocusGroupItem")),
        Rv = {
          ArrowLeft: "prev",
          ArrowUp: "prev",
          ArrowRight: "next",
          ArrowDown: "next",
          PageUp: "first",
          Home: "first",
          PageDown: "last",
          End: "last"
        };

      function Sv(e, t) {
        return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
      }

      function Dv(e, t, r) {
        const n = Sv(e.key, r);
        if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return Rv[n]
      }

      function Nv(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }

      function Iv(e, t) {
        return e.map((r, n) => e[(t + n) % e.length])
      }
      pv(Sv, "getDirectionAwareKey"), pv(Dv, "getFocusIntent"), pv(Nv, "focusFirst"), pv(Iv, "wrapArray");
      var Tv = _v,
        zv = Pv,
        kv = Object.defineProperty,
        Ev = (e, t) => kv(e, "name", {
          value: t,
          configurable: !0
        }),
        Lv = z.forwardRef(Ev(function(e, t) {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, xr.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: "Toggle"
          });
          return (0, I.jsx)(vt.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, ft.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        }, "Toggle")),
        Vv = Object.defineProperty,
        Av = (e, t) => Vv(e, "name", {
          value: t,
          configurable: !0
        }),
        Mv = "ToggleGroup",
        [Hv, Fv] = (0, ht.A)(Mv, [wv]),
        Bv = wv(),
        Zv = z.forwardRef(Av(function(e, t) {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, I.jsx)(Gv, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, I.jsx)(Kv, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Mv}\``)
        }, "ToggleGroup")),
        [qv, Xv] = Hv(Mv),
        Gv = z.forwardRef(Av(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = Av(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, xr.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: Mv
          });
          return (0, I.jsx)(qv, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: z.useMemo(() => a ? [a] : [], [a]),
            onItemActivate: i,
            onItemDeactivate: z.useCallback(() => i(""), [i]),
            children: (0, I.jsx)($v, {
              ...s,
              ref: t
            })
          })
        }, "ToggleGroupImplSingle")),
        Kv = z.forwardRef(Av(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = Av(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, xr.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: Mv
          }), d = z.useCallback(e => i((t = []) => [...t, e]), [i]), l = z.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, I.jsx)(qv, {
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
        [Wv, Uv] = Hv(Mv),
        $v = z.forwardRef(Av(function(e, t) {
          const {
            __scopeToggleGroup: r,
            disabled: n = !1,
            rovingFocus: o = !0,
            orientation: s,
            dir: a,
            loop: i = !0,
            ...d
          } = e, l = Bv(r), c = (0, yn.jH)(a), u = {
            dir: c,
            ...d
          };
          return (0, I.jsx)(Wv, {
            scope: r,
            rovingFocus: o,
            disabled: n,
            children: o ? (0, I.jsx)(Tv, {
              asChild: !0,
              ...l,
              orientation: s,
              dir: c,
              loop: i,
              children: (0, I.jsx)(vt.sG.div, {
                ...u,
                ref: t
              })
            }) : (0, I.jsx)(vt.sG.div, {
              ...u,
              ref: t
            })
          })
        }, "ToggleGroupImpl")),
        Yv = "ToggleGroupItem",
        Qv = z.forwardRef(Av(function(e, t) {
          const r = Xv(Yv, e.__scopeToggleGroup),
            n = Uv(Yv, e.__scopeToggleGroup),
            o = Bv(e.__scopeToggleGroup),
            s = r.value.includes(e.value),
            a = n.disabled || e.disabled,
            i = {
              ...e,
              pressed: s,
              disabled: a
            },
            d = z.useRef(null);
          return n.rovingFocus ? (0, I.jsx)(zv, {
            asChild: !0,
            ...o,
            focusable: !a,
            active: s,
            ref: d,
            children: (0, I.jsx)(Jv, {
              ...i,
              ref: t
            })
          }) : (0, I.jsx)(Jv, {
            ...i,
            ref: t
          })
        }, "ToggleGroupItem")),
        Jv = z.forwardRef(Av(function(e, t) {
          const {
            __scopeToggleGroup: r,
            value: n,
            ...o
          } = e, s = Xv(Yv, r), a = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
          }, i = "single" === s.type ? a : void 0;
          return (0, I.jsx)(Lv, {
            ...i,
            ...o,
            ref: t,
            onPressedChange: e => {
              e ? s.onItemActivate(n) : s.onItemDeactivate(n)
            }
          })
        }, "ToggleGroupItemImpl"));

      function em(e) {
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

      function tm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rm(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = em(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var om = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rm(rm({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) om(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nm(e.variantClassNames, e => nm(e, e => e.split(" ")[0]))
            }
          }, t
        },
        am = "var(--foundry_zxwkyk2)",
        im = "var(--foundry_zxwkyk3)",
        dm = sm({
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
        lm = sm({
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
        cm = sm({
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
        um = "var(--foundry_zxwkyk1)",
        fm = "var(--foundry_zxwkyk0)",
        pm = sm({
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
      const hm = (0, z.createContext)(null);

      function vm() {
        const e = (0, z.useContext)(hm);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const mm = (0, z.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, q.v6)({
            "data-testid": e,
            className: dm({
              size: t
            }),
            type: r
          }, n);
          return (0, I.jsx)(hm.Provider, {
            value: {
              size: t
            },
            children: (0, I.jsx)(Zv, {
              ref: o,
              ...s
            })
          })
        }),
        ym = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = vm(), o = (0, q.v6)({
            "data-testid": e,
            className: lm({
              size: n
            })
          }, t);
          return (0, I.jsx)(Qv, {
            ref: r,
            ...o
          })
        }),
        bm = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = vm(), o = at[e];
          return (0, I.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        gm = (0, z.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, q.v6)({
            "data-testid": e,
            className: pm({
              status: r
            }),
            style: (0, X.DI)({
              [fm]: t?.online,
              [um]: t?.offline,
              [am]: t?.away,
              [im]: t?.busy
            })
          }, n);
          return (0, I.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        Cm = (0, z.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = vm(), s = (0, q.v6)({
            "data-testid": e,
            className: cm({
              variant: t,
              size: o
            })
          }, r);
          return (0, I.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var wm = Object.defineProperty,
        xm = (e, t) => wm(e, "name", {
          value: t,
          configurable: !0
        }),
        jm = "Popover",
        [_m, Om] = (0, ht.A)(jm, [qt]),
        Pm = qt(),
        [Rm, Sm] = _m(jm),
        Dm = xm(e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !1
          } = e, i = Pm(t), d = z.useRef(null), [l, c] = z.useState(!1), [u, f] = (0, xr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: jm
          });
          return (0, I.jsx)(or, {
            ...i,
            children: (0, I.jsx)(Rm, {
              scope: t,
              contentId: (0, It.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: z.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: z.useCallback(() => c(!0), []),
              onCustomAnchorRemove: z.useCallback(() => c(!1), []),
              modal: a,
              children: r
            })
          })
        }, "Popover"),
        Nm = z.forwardRef(xm(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Sm("PopoverAnchor", r), s = Pm(r), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: i
          } = o;
          return z.useEffect(() => (a(), () => i()), [a, i]), (0, I.jsx)(sr, {
            ...s,
            ...n,
            ref: t
          })
        }, "PopoverAnchor")),
        Im = z.forwardRef(xm(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Sm("PopoverTrigger", r), s = Pm(r), a = (0, pt.s)(t, o.triggerRef), i = (0, I.jsx)(vt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": qm(o.open),
            ...n,
            ref: a,
            onClick: (0, ft.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, I.jsx)(sr, {
            asChild: !0,
            ...s,
            children: i
          })
        }, "PopoverTrigger")),
        Tm = "PopoverPortal",
        [zm, km] = _m(Tm, {
          forceMount: void 0
        }),
        Em = xm(e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Sm(Tm, t);
          return (0, I.jsx)(zm, {
            scope: t,
            forceMount: r,
            children: (0, I.jsx)(vr, {
              present: r || s.open,
              children: (0, I.jsx)(ur, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        }, "PopoverPortal"),
        Lm = "PopoverContent",
        Vm = z.forwardRef(xm(function(e, t) {
          const r = km(Lm, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Sm(Lm, e.__scopePopover);
          return (0, I.jsx)(vr, {
            present: n || s.open,
            children: s.modal ? (0, I.jsx)(Mm, {
              ...o,
              ref: t
            }) : (0, I.jsx)(Hm, {
              ...o,
              ref: t
            })
          })
        }, "PopoverContent")),
        Am = (0, wr.TL)("PopoverContent.RemoveScroll"),
        Mm = z.forwardRef(xm(function(e, t) {
          const r = Sm(Lm, e.__scopePopover),
            n = z.useRef(null),
            o = (0, pt.s)(t, n),
            s = z.useRef(!1);
          return z.useEffect(() => {
            const e = n.current;
            if (e) return (0, Ao.Eq)(e)
          }, []), (0, I.jsx)(Vo.A, {
            as: Am,
            allowPinchZoom: !0,
            children: (0, I.jsx)(Fm, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ft.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ft.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ft.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "PopoverContentModal")),
        Hm = z.forwardRef(xm(function(e, t) {
          const r = Sm(Lm, e.__scopePopover),
            n = z.useRef(!1),
            o = z.useRef(!1);
          return (0, I.jsx)(Fm, {
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
        Fm = z.forwardRef(xm(function(e, t) {
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
          } = e, f = Sm(Lm, r), p = Pm(r);
          return (0, Lo.Oh)(), (0, I.jsx)(_o, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, I.jsx)(wt, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, I.jsx)(ar, {
                "data-state": qm(f.open),
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
        Bm = z.forwardRef(xm(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Sm("PopoverClose", r);
          return (0, I.jsx)(vt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ft.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        }, "PopoverClose")),
        Zm = z.forwardRef(xm(function(e, t) {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Pm(r);
          return (0, I.jsx)(ir, {
            ...o,
            ...n,
            ref: t
          })
        }, "PopoverArrow"));

      function qm(e) {
        return e ? "open" : "closed"
      }
      xm(qm, "getState");
      var Xm = Dm,
        Gm = Nm,
        Km = Im,
        Wm = Em,
        Um = Vm,
        $m = Bm,
        Ym = Zm;

      function Qm(e) {
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

      function Jm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jm(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Qm(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jm(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ty(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ry = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ny = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ey(ey({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ry(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ty(e.variantClassNames, e => ty(e, e => e.split(" ")[0]))
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
      const oy = (0, z.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        sy = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, je.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, q.v6)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, I.jsx)(oy.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, I.jsx)(Xm, {
              ...a
            })
          })
        },
        ay = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, I.jsx)(Km, {
            ref: r,
            ...n
          })
        }),
        iy = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        dy = (0, z.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, z.useContext)(oy), a = (0, z.useRef)(null), i = (0, je.UP)(a, o), {
            buttonProps: d
          } = (0, je.sL)(n, a), l = (0, q.v6)({
            "data-testid": r,
            className: ny({
              size: t
            })
          }, d), c = s ? at.ChevronUp : at.ChevronDown;
          return (0, I.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, I.jsx)(c, {
              label: "",
              size: iy[t]
            })]
          })
        }),
        ly = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, I.jsx)(Gm, {
            ref: r,
            ...n
          })
        }),
        cy = (0, z.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, I.jsx)(Um, {
            ref: n,
            ...o
          })
        }),
        uy = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, I.jsx)(Ym, {
            ref: r,
            ...n
          })
        }),
        fy = e => (0, I.jsx)(Wm, {
          ...e
        }),
        py = e => (0, I.jsx)($m, {
          ...e
        });

      function hy(e) {
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

      function my(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vy(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = hy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yy(e, t) {
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
        gy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = my(my({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) by(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yy(e.variantClassNames, e => yy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cy = "var(--foundry_rmorls2)",
        wy = gy({
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
        xy = "var(--foundry_rmorls0)",
        jy = gy({
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
        _y = "var(--foundry_rmorls3)",
        Oy = "var(--foundry_rmorls1)",
        Py = gy({
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
        Ry = Object.defineProperty,
        Sy = (e, t) => Ry(e, "name", {
          value: t,
          configurable: !0
        }),
        Dy = "Progress",
        [Ny, Iy] = (0, ht.A)(Dy),
        [Ty, zy] = Ny(Dy),
        ky = z.forwardRef(Sy(function(e, t) {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = Ly,
            ...a
          } = e;
          !o && 0 !== o || My(o) || console.error(Fy(`${o}`, "Progress"));
          const i = My(o) ? o : 100;
          null === n || Hy(n, i) || console.error(By(`${n}`, "Progress"));
          const d = Hy(n, i) ? n : null,
            l = Ay(d) ? s(d, i) : void 0;
          return (0, I.jsx)(Ty, {
            scope: r,
            value: d,
            max: i,
            children: (0, I.jsx)(vt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Ay(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Vy(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        }, "Progress")),
        Ey = z.forwardRef(Sy(function(e, t) {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = zy("ProgressIndicator", r);
          return (0, I.jsx)(vt.sG.div, {
            "data-state": Vy(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        }, "ProgressIndicator"));

      function Ly(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Vy(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Ay(e) {
        return "number" == typeof e
      }

      function My(e) {
        return Ay(e) && !isNaN(e) && e > 0
      }

      function Hy(e, t) {
        return Ay(e) && !isNaN(e) && e <= t && e >= 0
      }

      function Fy(e, t) {
        return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`
      }

      function By(e, t) {
        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
      }
      Sy(Ly, "defaultGetValueLabel"), Sy(Vy, "getProgressState"), Sy(Ay, "isNumber"), Sy(My, "isValidMaxNumber"), Sy(Hy, "isValidValueNumber"), Sy(Fy, "getInvalidMaxError"), Sy(By, "getInvalidValueError");
      var Zy = ky,
        qy = Ey;
      const Xy = (0, z.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Gy = (0, z.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, I.jsx)(Xy.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, I.jsx)(Ky, {
              ...n,
              ref: o
            })
          })
        }),
        Ky = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? k.DX : "div";
          return (0, I.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        Wy = (0, z.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, z.useContext)(Xy), i = (0, q.v6)({
            "data-testid": e,
            className: jy({
              size: a
            }),
            value: o,
            max: s,
            style: (0, X.DI)({
              [_y]: t
            }),
            "data-track": !0
          }, r);
          return (0, I.jsx)(Zy, {
            ref: n,
            ...i
          })
        }),
        Uy = (0, z.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, z.useContext)(Xy), i = a ? "-100%" : `-${100-s}%`, d = (0, q.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [xy]: i,
              [Oy]: `${t}ms`,
              [Cy]: r
            })
          }, n);
          return (0, I.jsx)(qy, {
            ref: o,
            ...d
          })
        }),
        $y = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, z.useContext)(Xy), s = (0, q.v6)({
            "data-testid": t,
            className: wy({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? k.DX : "span";
          return (0, I.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        Yy = (0, z.forwardRef)(({
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
          } = (0, z.useContext)(Xy), l = (0, q.v6)({
            "data-testid": e,
            className: wy({
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
              className: Py({
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
      var Qy = Object.defineProperty,
        Jy = (e, t) => Qy(e, "name", {
          value: t,
          configurable: !0
        }),
        eb = "Collapsible",
        [tb, rb] = (0, ht.A)(eb),
        [nb, ob] = tb(eb),
        sb = z.forwardRef(Jy(function(e, t) {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: s,
            onOpenChange: a,
            ...i
          } = e, [d, l] = (0, xr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: eb
          });
          return (0, I.jsx)(nb, {
            scope: r,
            disabled: s,
            contentId: (0, It.B)(),
            open: d,
            onOpenToggle: z.useCallback(() => l(e => !e), [l]),
            children: (0, I.jsx)(vt.sG.div, {
              "data-state": cb(d),
              "data-disabled": s ? "" : void 0,
              ...i,
              ref: t
            })
          })
        }, "Collapsible")),
        ab = z.forwardRef(Jy(function(e, t) {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = ob("CollapsibleTrigger", r);
          return (0, I.jsx)(vt.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": cb(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, ft.mK)(e.onClick, o.onOpenToggle)
          })
        }, "CollapsibleTrigger")),
        ib = "CollapsibleContent",
        db = z.forwardRef(Jy(function(e, t) {
          const {
            forceMount: r,
            ...n
          } = e, o = ob(ib, e.__scopeCollapsible);
          return (0, I.jsx)(vr, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, I.jsx)(lb, {
              ...n,
              ref: t,
              present: e
            })
          })
        }, "CollapsibleContent")),
        lb = z.forwardRef(Jy(function(e, t) {
          const {
            __scopeCollapsible: r,
            present: n,
            children: o,
            ...s
          } = e, a = ob(ib, r), [i, d] = z.useState(n), l = z.useRef(null), c = (0, pt.s)(t, l), u = z.useRef(0), f = u.current, p = z.useRef(0), h = p.current, v = a.open || i, m = z.useRef(v), y = z.useRef(void 0);
          return z.useEffect(() => {
            const e = requestAnimationFrame(() => m.current = !1);
            return () => cancelAnimationFrame(e)
          }, []), (0, At.N)(() => {
            const e = l.current;
            if (e) {
              y.current = y.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName
              }, e.style.transitionDuration = "0s", e.style.animationName = "none";
              const t = e.getBoundingClientRect();
              u.current = t.height, p.current = t.width, m.current || (e.style.transitionDuration = y.current.transitionDuration, e.style.animationName = y.current.animationName), d(n)
            }
          }, [a.open, n]), (0, I.jsx)(vt.sG.div, {
            "data-state": cb(a.open),
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

      function cb(e) {
        return e ? "open" : "closed"
      }
      Jy(cb, "getState");
      var ub = sb,
        fb = ab,
        pb = db,
        hb = Object.defineProperty,
        vb = (e, t) => hb(e, "name", {
          value: t,
          configurable: !0
        }),
        mb = "Accordion",
        yb = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [bb, gb, Cb] = wn(mb),
        [wb, xb] = (0, ht.A)(mb, [Cb, rb]),
        jb = rb(),
        _b = z.forwardRef(vb(function(e, t) {
          const {
            type: r,
            ...n
          } = e, o = n, s = n;
          return (0, I.jsx)(bb.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, I.jsx)(Nb, {
              ...s,
              ref: t
            }) : (0, I.jsx)(Db, {
              ...o,
              ref: t
            })
          })
        }, "Accordion")),
        [Ob, Pb] = wb(mb),
        [Rb, Sb] = wb(mb, {
          collapsible: !1
        }),
        Db = z.forwardRef(vb(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = vb(() => {}, "onValueChange"),
            collapsible: s = !1,
            ...a
          } = e, [i, d] = (0, xr.i)({
            prop: r,
            defaultProp: n ?? "",
            onChange: o,
            caller: mb
          });
          return (0, I.jsx)(Ob, {
            scope: e.__scopeAccordion,
            value: z.useMemo(() => i ? [i] : [], [i]),
            onItemOpen: d,
            onItemClose: z.useCallback(() => s && d(""), [s, d]),
            children: (0, I.jsx)(Rb, {
              scope: e.__scopeAccordion,
              collapsible: s,
              children: (0, I.jsx)(zb, {
                ...a,
                ref: t
              })
            })
          })
        }, "AccordionImplSingle")),
        Nb = z.forwardRef(vb(function(e, t) {
          const {
            value: r,
            defaultValue: n,
            onValueChange: o = vb(() => {}, "onValueChange"),
            ...s
          } = e, [a, i] = (0, xr.i)({
            prop: r,
            defaultProp: n ?? [],
            onChange: o,
            caller: mb
          }), d = z.useCallback(e => i((t = []) => [...t, e]), [i]), l = z.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
          return (0, I.jsx)(Ob, {
            scope: e.__scopeAccordion,
            value: a,
            onItemOpen: d,
            onItemClose: l,
            children: (0, I.jsx)(Rb, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, I.jsx)(zb, {
                ...s,
                ref: t
              })
            })
          })
        }, "AccordionImplMultiple")),
        [Ib, Tb] = wb(mb),
        zb = z.forwardRef(vb(function(e, t) {
          const {
            __scopeAccordion: r,
            disabled: n,
            dir: o,
            orientation: s = "vertical",
            ...a
          } = e, i = z.useRef(null), d = (0, pt.s)(i, t), l = gb(r), c = "ltr" === (0, yn.jH)(o), u = (0, ft.mK)(e.onKeyDown, e => {
            if (!yb.includes(e.key)) return;
            const t = e.target,
              r = l().filter(e => !e.ref.current?.disabled),
              n = r.findIndex(e => e.ref.current === t),
              o = r.length;
            if (-1 === n) return;
            e.preventDefault();
            let a = n;
            const i = o - 1,
              d = vb(() => {
                a = n + 1, a > i && (a = 0)
              }, "moveNext"),
              u = vb(() => {
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
          return (0, I.jsx)(Ib, {
            scope: r,
            disabled: n,
            direction: o,
            orientation: s,
            children: (0, I.jsx)(bb.Slot, {
              scope: r,
              children: (0, I.jsx)(vt.sG.div, {
                ...a,
                "data-orientation": s,
                ref: d,
                onKeyDown: n ? void 0 : u
              })
            })
          })
        }, "AccordionImpl")),
        kb = "AccordionItem",
        [Eb, Lb] = wb(kb),
        Vb = z.forwardRef(vb(function(e, t) {
          const {
            __scopeAccordion: r,
            value: n,
            ...o
          } = e, s = Tb(kb, r), a = Pb(kb, r), i = jb(r), d = (0, It.B)(), l = n && a.value.includes(n) || !1, c = s.disabled || e.disabled;
          return (0, I.jsx)(Eb, {
            scope: r,
            open: l,
            disabled: c,
            triggerId: d,
            children: (0, I.jsx)(ub, {
              "data-orientation": s.orientation,
              "data-state": Bb(l),
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
        Ab = z.forwardRef(vb(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Tb(mb, r), s = Lb("AccordionHeader", r);
          return (0, I.jsx)(vt.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": Bb(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        }, "AccordionHeader")),
        Mb = "AccordionTrigger",
        Hb = z.forwardRef(vb(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Tb(mb, r), s = Lb(Mb, r), a = Sb(Mb, r), i = jb(r);
          return (0, I.jsx)(bb.ItemSlot, {
            scope: r,
            children: (0, I.jsx)(fb, {
              "aria-disabled": s.open && !a.collapsible || void 0,
              "data-orientation": o.orientation,
              id: s.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        }, "AccordionTrigger")),
        Fb = z.forwardRef(vb(function(e, t) {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Tb(mb, r), s = Lb("AccordionContent", r), a = jb(r);
          return (0, I.jsx)(pb, {
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

      function Bb(e) {
        return e ? "open" : "closed"
      }
      vb(Bb, "getState");
      var Zb = _b,
        qb = Vb,
        Xb = Ab,
        Gb = Hb,
        Kb = Fb;

      function Wb(e) {
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

      function Ub(e, t) {
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
          t % 2 ? Ub(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Wb(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yb(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qb = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jb = "foundry_1vzsjid2",
        eg = "foundry_1vzsjidm",
        tg = (e => {
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
            for (var [l, c] of e.compoundVariants) Qb(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yb(e.variantClassNames, e => Yb(e, e => e.split(" ")[0]))
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
      const rg = (0, z.createContext)({
          mode: "solid",
          layer: 0
        }),
        ng = (0, z.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, I.jsx)(rg.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, I.jsx)(og, {
            ...n,
            ref: o,
            type: r
          })
        })),
        og = (0, z.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, I.jsx)(Zb, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        sg = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, z.useContext)(rg), s = (0, q.v6)({
            className: tg({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, I.jsx)(qb, {
            ref: r,
            ...s
          })
        }),
        ag = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, I.jsx)(Xb, {
            ref: r,
            ...n
          })
        }),
        ig = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, I.jsx)(Gb, {
            ref: n,
            ...o,
            children: r.asChild && (0, z.isValidElement)(e) ? (0, z.cloneElement)(e, {
              children: (0, I.jsx)("span", {
                className: Jb,
                children: e.props.children
              })
            }) : (0, I.jsx)("span", {
              className: Jb,
              children: e
            })
          })
        }),
        dg = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
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
        lg = (0, z.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = at[e],
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
        cg = (0, z.forwardRef)(({
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
          return (0, I.jsx)(Kb, {
            ref: o,
            ...s,
            children: t && (0, z.isValidElement)(e) ? (0, z.cloneElement)(e, {
              children: (0, I.jsx)("div", {
                className: eg,
                children: e.props.children
              })
            }) : (0, I.jsx)("div", {
              className: eg,
              children: e
            })
          })
        }),
        ug = {
          MD: X.LU.global.spacing.dimensions[200],
          LG: X.LU.global.spacing.dimensions[250],
          XL: X.LU.global.spacing.dimensions[300]
        },
        fg = (0, z.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: ug[t],
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
        pg = (0, z.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: ug[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, I.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        hg = (0, z.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: ug[t],
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
        vg = (0, z.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: ug[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, I.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        mg = (0, z.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, I.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: ug[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, I.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function yg(e) {
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

      function bg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function gg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bg(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = yg(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bg(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Cg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xg = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gg(gg({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wg(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cg(e.variantClassNames, e => Cg(e, e => e.split(" ")[0]))
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
      const jg = (0, z.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, s) => {
        const a = (0, q.v6)({
            className: xg({
              size: t
            }),
            size: t
          }, o),
          i = R[e];
        if (r && (0, z.isValidElement)(n)) {
          const e = (0, z.cloneElement)(n, n.props, (0, I.jsxs)(I.Fragment, {
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