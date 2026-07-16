try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "52463bbb-ecaa-4d93-bc91-770b3135531d", e._sentryDebugIdIdentifier = "sentry-dbid-52463bbb-ecaa-4d93-bc91-770b3135531d")
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
  [5894], {
    25894(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => O,
        Alert: () => p,
        AlertBanner: () => m,
        Avatar: () => x,
        Badge: () => g,
        Body: () => ce,
        Breadcrumbs: () => v,
        Button: () => R.$,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => fe,
        Dialog: () => w,
        Display: () => pe,
        Divider: () => B,
        Dropdown: () => s,
        Heading: () => he,
        IconButton: () => S.K,
        Label: () => ve,
        Lightbox: () => o,
        Loader: () => te,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => P,
        RadioGroup: () => u,
        ScrollArea: () => b,
        Spinner: () => re.y,
        Switch: () => a,
        Tag: () => h,
        Text: () => we,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => be,
        Toast: () => y,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Gr,
        Content: () => Xr,
        Portal: () => Kr,
        Root: () => Br,
        Trigger: () => qr,
        useTooltipContext: () => Fr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => To,
        Close: () => Vo,
        Content: () => So,
        Controls: () => ko,
        CssVars: () => Bo,
        Download: () => Fo,
        Image: () => zo,
        Keyboard: () => Lo,
        LightboxContext: () => bo,
        OpenIcon: () => Po,
        Overlay: () => Ro,
        Portal: () => Oo,
        Reset: () => Mo,
        Root: () => wo,
        RootImplContext: () => xo,
        Thumbnail: () => Co,
        Trigger: () => jo,
        Zoom: () => Ao,
        ZoomPan: () => No
      });
      var s = {};
      r.r(s), r.d(s, {
        Content: () => ai,
        Description: () => pi,
        Hint: () => mi,
        Label: () => fi,
        Option: () => hi,
        OptionIcon: () => vi,
        OptionText: () => yi,
        Portal: () => gi,
        Root: () => si,
        ScrollArea: () => di,
        StatusIcon: () => wi,
        StatusRoot: () => bi,
        StatusText: () => xi,
        Trigger: () => li,
        TriggerIcon: () => ui,
        TriggerText: () => ci,
        Viewport: () => ii,
        useDropdownContext: () => oi
      });
      var a = {};
      r.r(a), r.d(a, {
        Description: () => Fi,
        Input: () => Vi,
        Label: () => Mi,
        Root: () => Ai,
        useSwitchContext: () => Li
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Xi,
        CheckMD: () => qi,
        CheckXL: () => Gi,
        DashLG: () => Zi,
        DashMD: () => Ki,
        DashXL: () => Hi
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => ud,
        ErrorText: () => fd,
        Group: () => hd,
        GroupDescription: () => vd,
        GroupErrorText: () => bd,
        GroupItems: () => gd,
        GroupLabel: () => yd,
        Input: () => ld,
        Label: () => cd,
        Root: () => dd,
        useGroupContext: () => md
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ed,
        Hint: () => Ld,
        Input: () => kd,
        Label: () => Td,
        Root: () => zd,
        RootContext: () => Dd,
        StatusIcon: () => Vd,
        StatusRoot: () => Ad,
        StatusText: () => Md,
        useTextAreaContext: () => Id
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => ul,
        DotMD: () => cl,
        DotXL: () => fl
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => tl,
        Input: () => ml,
        Label: () => el,
        Option: () => pl,
        OptionDescription: () => yl,
        OptionLabel: () => hl,
        Options: () => Jd,
        Root: () => Qd,
        StatusIcon: () => nl,
        StatusRoot: () => rl,
        StatusText: () => ol,
        useRadioGroupContext: () => $d
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Ml,
        Control: () => Ll,
        Description: () => Bl,
        Hint: () => El,
        Icon: () => Vl,
        Input: () => Al,
        Label: () => kl,
        PasswordButton: () => Fl,
        Root: () => Tl,
        StatusIcon: () => Xl,
        StatusRoot: () => ql,
        StatusText: () => Gl
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => pc,
        CloseButton: () => xc,
        Description: () => vc,
        ErrorText: () => wc,
        Footer: () => bc,
        Header: () => fc,
        Icon: () => hc,
        Link: () => gc,
        Root: () => uc,
        RootContext: () => lc,
        Title: () => yc,
        iconStatusMap: () => mc,
        useAlertContext: () => cc
      });
      var m = {};
      r.r(m), r.d(m, {
        Alert: () => Vc,
        CloseButton: () => Bc,
        Description: () => Ac,
        Icon: () => Lc,
        Link: () => Fc,
        PaginationCounter: () => Kc,
        PaginationNav: () => qc,
        PaginationNextButton: () => Xc,
        PaginationPrevButton: () => Gc,
        PaginationViewport: () => Mc,
        Root: () => kc,
        RootContext: () => zc,
        iconStatusMap: () => Ec,
        useAlertBannerContext: () => Tc
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => au,
        Icon: () => su,
        Label: () => ou,
        Root: () => nu,
        RootContext: () => tu,
        useTagContext: () => ru
      });
      var y = {};
      r.r(y), r.d(y, {
        Action: () => cf,
        CloseButton: () => uf,
        Description: () => af,
        Icon: () => lf,
        Provider: () => tf,
        Root: () => sf,
        RootContext: () => nf,
        Viewport: () => rf,
        iconAppearanceMap: () => df,
        useToastContext: () => of
      });
      var v = {};
      r.r(v), r.d(v, {
        Icon: () => Of,
        Item: () => Pf,
        OverflowMenu: () => Rf,
        OverflowMenuItem: () => Sf,
        Root: () => Cf,
        RootContext: () => jf,
        useBreadcrumbsContext: () => _f
      });
      var g = {};
      r.r(g), r.d(g, {
        Icon: () => Mf,
        Label: () => Vf,
        Root: () => Af,
        useBadgeContext: () => Lf
      });
      var b = {};
      r.r(b), r.d(b, {
        Corner: () => Qf,
        Root: () => Wf,
        Scrollbar: () => Yf,
        Thumb: () => $f,
        Viewport: () => Uf
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => _p,
        CloseButton: () => xp,
        Content: () => pp,
        Description: () => hp,
        Footer: () => jp,
        Header: () => gp,
        HeaderButton: () => wp,
        HeaderTitle: () => bp,
        Layout: () => vp,
        Overlay: () => fp,
        Portal: () => up,
        Root: () => dp,
        ScrollArea: () => yp,
        Title: () => mp,
        Trigger: () => cp
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => Qp,
        Root: () => $p,
        StatusIndicator: () => Jp,
        useAvatarContext: () => Yp
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => fm,
        Dropdown: () => vm,
        DropdownLabel: () => ym,
        Ellipsis: () => um,
        Item: () => dm,
        Label: () => bm,
        Next: () => cm,
        Option: () => gm,
        Pages: () => im,
        Prev: () => lm,
        ResultsPerPage: () => hm,
        Root: () => am
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => bh,
        Item: () => gh,
        Label: () => xh,
        Root: () => vh,
        StatusIndicator: () => wh,
        useChipGroupContext: () => yh
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => uy,
        Arrow: () => py,
        Close: () => hy,
        Content: () => fy,
        Portal: () => my,
        Root: () => iy,
        RootContext: () => ay,
        Trigger: () => dy,
        TriggerButton: () => cy
      });
      var P = {};
      r.r(P), r.d(P, {
        Indicator: () => Wy,
        Label: () => Uy,
        Root: () => Ky,
        Track: () => Hy,
        UnitLabel: () => Yy
      });
      var O = {};
      r.r(O), r.d(O, {
        Content: () => mv,
        Header: () => cv,
        Icon: () => fv,
        Item: () => lv,
        Root: () => iv,
        Trigger: () => uv,
        TriggerIcon: () => pv
      });
      var R = r(72976),
        S = r(69066),
        N = r(39793),
        D = r(81270),
        I = r(93082),
        z = r(86361);

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

      function k(e, t) {
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
          t % 2 ? k(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = T(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function L(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var A, V, M = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        F = (A = {
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
        }, V = e => {
          var t = A.defaultClassName,
            r = E(E({}, A.defaultVariants), e);
          for (var n in r) {
            var o, s = null !== (o = r[n]) && void 0 !== o ? o : A.defaultVariants[n];
            if (null != s) {
              var a = s;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var i = A.variantClassNames[n][a];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of A.compoundVariants) M(d, r, A.defaultVariants) && (t += " " + l);
          return t
        }, V.variants = () => Object.keys(A.variantClassNames), V.classNames = {
          get base() {
            return A.defaultClassName.split(" ")[0]
          },
          get variants() {
            return L(A.variantClassNames, e => L(e, e => e.split(" ")[0]))
          }
        }, V);
      const B = (0, I.forwardRef)(({
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
        return (0, N.jsx)(c, {
          ref: i,
          className: (0, D.clsx)(F({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": s,
          ...a
        })
      });
      var q = r(39628),
        X = r(57030),
        G = r(43870);

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

      function W(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var U = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Y = "var(--foundry_9dxgbc2)",
        $ = "var(--foundry_9dxgbc3)",
        Q = (e => {
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
            for (var [l, c] of e.compoundVariants) U(l, n, e.defaultVariants) && (r += " " + c);
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
        J = "var(--foundry_9dxgbc0)",
        ee = "var(--foundry_9dxgbc1)";
      const te = (0, I.forwardRef)(({
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
          c = (0, q.mergeProps)({
            className: Q({
              size: l
            }),
            "data-testid": t,
            style: (0, X.DI)({
              [J]: n?.pulseColorBackground,
              [ee]: n?.pulseColorForeground,
              [Y]: n?.gradientColorBackground,
              [$]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, a),
          u = e ? z.DX : "div";
        return (0, N.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, N.jsx)(z.xV, {
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
      var re = r(24359);

      function ne(e) {
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

      function oe(e, t) {
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
          t % 2 ? oe(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ne(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach(function(t) {
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
      var ie = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        de = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = se(se({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ie(l, n, e.defaultVariants) && (r += " " + c);
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
        le = de({
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
      const ce = (0, I.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? z.DX : "p",
          i = (0, q.mergeProps)({
            className: le({
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
      var ue = de({
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
      const fe = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const s = e ? z.DX : "p",
            a = (0, q.mergeProps)({
              className: ue({
                appearance: r
              })
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        }),
        pe = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "h1",
            s = (0, q.mergeProps)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        });
      var me = de({
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
      const he = (0, I.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? z.DX : `h${7===t?6:t}`,
          a = (0, q.mergeProps)(n, {
            className: me({
              level: t
            })
          });
        return (0, N.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...a
        })
      });
      var ye = de({
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
      const ve = (0, I.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const a = e ? z.DX : "p",
          i = (0, q.mergeProps)({
            className: ye({
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
      var ge = de({
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
        we = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const s = e ? z.DX : be[r] || "span",
            a = (0, q.mergeProps)(n, {
              className: ge({
                semantic: r
              })
            });
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...a
          })
        });
      var xe = r(86057),
        _e = r(35812),
        je = r(67347),
        Ce = r(34811);
      const Pe = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Oe = ([e, t]) => ({
        x: e,
        y: t
      }), Re = (e, t) => (e.x = t.x, e.y = t.y, e), Se = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ne = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), De = (e, t, r) => Math.min(Math.max(e, t), r);
      var Ie = r(90004);

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

      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Te(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ze(o)) in n ? Object.defineProperty(n, o, {
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
      var Le = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ae = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ke(ke({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Le(l, n, e.defaultVariants) && (r += " " + c);
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
        Ve = Ae({
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
        Me = Ae({
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
      _e.gsap.registerPlugin(je.useGSAP);
      const Fe = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        Be = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        qe = (0, X.Tm)("var(--foundry_1a74xwb0)");
      var Xe = r(49764);
      const Ge = {
        "en-US": r.e(6984).then(r.bind(r, 56984)),
        "de-DE": r.e(7783).then(r.bind(r, 97783)),
        "es-ES": r.e(1205).then(r.bind(r, 41205)),
        "es-MX": r.e(1644).then(r.bind(r, 51644)),
        "fr-FR": r.e(1869).then(r.bind(r, 51869)),
        "it-IT": r.e(6543).then(r.bind(r, 36543)),
        "ja-JP": r.e(4592).then(r.bind(r, 34592)),
        "ko-KR": r.e(9046).then(r.bind(r, 59046)),
        "pl-PL": r.e(7465).then(r.bind(r, 97465)),
        "pt-BR": r.e(4693).then(r.bind(r, 24693)),
        "ru-RU": r.e(1039).then(r.bind(r, 71039)),
        "zh-CN": r.e(6898).then(r.bind(r, 26898)),
        "zh-TW": r.e(9538).then(r.bind(r, 9538))
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Re(this.prevTap, {
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
      class Ue {
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
          e.src = this.thumbnail.currentSrc ?? "", await Pe(e)
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
      class Ye {
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
      class Qe extends He {
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
      class Je {
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
            s = Re({
              x: 0,
              y: 0
            }, this.slide.pan);
          let a = Re({
            x: 0,
            y: 0
          }, s);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Re(this.startPan, s)), n && (a = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), a = {
            x: this.slide.bounds.correctPan("x", a.x),
            y: this.slide.bounds.correctPan("y", a.y)
          }, this.slide.setZoomLevel(t, !1), d = s, ((i = a).x !== d.x || i.y !== d.y || n || o) && (Re(this.slide.pan, a), this.slide.setZoomLevel(r))
        }
      }
      class et {
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
      class tt extends He {
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
          super(), this.width = e, this.height = t, this.opener = new Ue({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new We({
            options: s,
            slide: this
          }), this.scrollWheel = new Ye({
            slide: this
          }), this.zoomHandler = new Je({
            slide: this
          }), this.zoomLevels = new Ze({
            options: r,
            slide: this
          }), this.tapHandler = new Qe({
            options: n,
            slide: this
          }), this.panAreaSize = new et({
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
          e = Ne(e), r || (e = De(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Se(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Se(this.pan)
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
      var rt = r(37887);
      const nt = e => "dark" === e ? rt.xW.dark : rt.xW.light;
      var ot = r(20357);
      const st = (0, Xe.YK)({
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
      const it = (0, I.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, Ie.vC)(e, e => r?.(e), [r]), (0, N.jsx)(ce, {
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
      var dt, lt = r(71433),
        ct = r(39467),
        ut = r(64239),
        ft = r(54958),
        pt = r(80082),
        mt = r(94660),
        ht = r(61144),
        yt = "dismissableLayer.update",
        vt = I.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        gt = I.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: a,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = I.useContext(vt), [u, f] = I.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, m] = I.useState({}), h = (0, ut.s)(t, e => f(e)), y = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), g = y.indexOf(v), b = u ? y.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= g, _ = I.useRef(!1), j = function(e, t) {
            const {
              ownerDocument: r = globalThis?.document,
              deferPointerDownOutside: n = !1,
              isDeferredPointerDownOutsideRef: o,
              dismissableSurfaces: s
            } = t, a = (0, mt.c)(e), i = I.useRef(!1), d = I.useRef(!1), l = I.useRef(new Map), c = I.useRef(() => {});
            return I.useEffect(() => {
              function e() {
                d.current = !1, o.current = !1, l.current.clear()
              }

              function t(e) {
                if (!d.current) return;
                const t = e.target;
                t instanceof Node && [...s].some(e => e.contains(t)) || l.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  d.current && c.current()
                }, 0)
              }

              function u(e) {
                d.current && l.current.set(e.type, !1)
              }
              const f = t => {
                  if (t.target && !i.current) {
                    let s = function() {
                      r.removeEventListener("click", c.current);
                      const t = Array.from(l.current.values()).some(Boolean);
                      e(), t || xt("dismissableLayer.pointerDownOutside", a, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: t
                    };
                    d.current = !0, o.current = n && 0 === t.button, l.current.clear(), n && 0 === t.button ? (r.removeEventListener("click", c.current), c.current = s, r.addEventListener("click", c.current, {
                      once: !0
                    })) : s()
                  } else r.removeEventListener("click", c.current), e();
                  i.current = !1
                },
                p = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of p) r.addEventListener(e, t, !0), r.addEventListener(e, u);
              const m = window.setTimeout(() => {
                r.addEventListener("pointerdown", f)
              }, 0);
              return () => {
                window.clearTimeout(m), r.removeEventListener("pointerdown", f), r.removeEventListener("click", c.current);
                for (const e of p) r.removeEventListener(e, t, !0), r.removeEventListener(e, u)
              }
            }, [r, a, n, o, s]), {
              onPointerDownCapture: () => i.current = !0
            }
          }(e => {
            const t = e.target;
            if (!(t instanceof Node)) return;
            const r = [...c.branches].some(e => e.contains(t));
            x && !r && (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, {
            ownerDocument: p,
            deferPointerDownOutside: n,
            isDeferredPointerDownOutsideRef: _,
            dismissableSurfaces: c.dismissableSurfaces
          }), C = function(e, t = globalThis?.document) {
            const r = (0, mt.c)(e),
              n = I.useRef(!1);
            return I.useEffect(() => {
              const e = e => {
                e.target && !n.current && xt("dismissableLayer.focusOutside", r, {
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
            if (n && _.current) return;
            const t = e.target;
            [...c.branches].some(e => e.contains(t)) || (a?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p);
          return (0, ht.U)(e => {
            b === c.layers.size - 1 && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, p), I.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (dt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), wt(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = dt))
            }
          }, [u, p, r, c]), I.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), wt())
          }, [u, c]), I.useEffect(() => {
            const e = () => m({});
            return document.addEventListener(yt, e), () => document.removeEventListener(yt, e)
          }, []), (0, N.jsx)(pt.sG.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, ct.mK)(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: (0, ct.mK)(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: (0, ct.mK)(e.onPointerDownCapture, j.onPointerDownCapture)
          })
        });
      gt.displayName = "DismissableLayer";
      var bt = I.forwardRef((e, t) => {
        const r = I.useContext(vt),
          n = I.useRef(null),
          o = (0, ut.s)(t, n);
        return I.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, N.jsx)(pt.sG.div, {
          ...e,
          ref: o
        })
      });

      function wt() {
        const e = new CustomEvent(yt);
        document.dispatchEvent(e)
      }

      function xt(e, t, r, {
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
        }), n ? (0, pt.hO)(o, s) : o.dispatchEvent(s)
      }
      bt.displayName = "DismissableLayerBranch";
      var _t = gt,
        jt = bt,
        Ct = r(94296),
        Pt = r(17966),
        Ot = r(45750),
        Rt = I.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...s
          } = e;
          return (0, N.jsx)(pt.sG.svg, {
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
      Rt.displayName = "Arrow";
      var St = Rt,
        Nt = r(10198),
        Dt = r(5024),
        It = "Popper",
        [zt, Tt] = (0, ft.A)(It),
        [kt, Et] = zt(It),
        Lt = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = I.useState(null), [s, a] = I.useState(void 0);
          return (0, N.jsx)(kt, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: s,
            setPlacementState: a,
            children: r
          })
        };
      Lt.displayName = It;
      var At = "PopperAnchor",
        Vt = I.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, s = Et(At, r), a = I.useRef(null), i = s.onAnchorChange, d = I.useCallback(e => {
            a.current = e, e && i(e)
          }, [i]), l = (0, ut.s)(t, d), c = I.useRef(null);
          I.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = s.placementState && Wt(s.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, N.jsx)(pt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        });
      Vt.displayName = At;
      var Mt = "PopperContent",
        [Ft, Bt] = zt(Mt),
        qt = I.forwardRef((e, t) => {
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
          } = e, y = Et(Mt, r), [v, g] = I.useState(null), b = (0, ut.s)(t, e => g(e)), [w, x] = I.useState(null), _ = (0, Dt.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, P = n + ("center" !== s ? "-" + s : ""), O = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, R = Array.isArray(l) ? l : [l], S = R.length > 0, D = {
            padding: O,
            boundary: R.filter(Zt),
            altBoundary: S
          }, {
            refs: z,
            floatingStyles: T,
            placement: k,
            isPositioned: E,
            middlewareData: L
          } = (0, Pt.we)({
            strategy: "fixed",
            placement: P,
            whileElementsMounted: (...e) => (0, Ot.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(0, Pt.cY)({
              mainAxis: o + C,
              alignmentAxis: a
            }), d && (0, Pt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Pt.ER)() : void 0,
              ...D
            }), d && (0, Pt.UU)({
              ...D
            }), (0, Pt.Ej)({
              ...D,
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
            }), w && (0, Pt.UE)({
              element: w,
              padding: i
            }), Ht({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Pt.jD)({
              strategy: "referenceHidden",
              ...D,
              boundary: S ? D.boundary : void 0
            })]
          }), A = y.setPlacementState;
          (0, Nt.N)(() => (A(k), () => {
            A(void 0)
          }), [k, A]);
          const [V, M] = Wt(k), F = (0, mt.c)(m);
          (0, Nt.N)(() => {
            E && F?.()
          }, [E, F]);
          const B = L.arrow?.x,
            q = L.arrow?.y,
            X = 0 !== L.arrow?.centerOffset,
            [G, K] = I.useState();
          return (0, Nt.N)(() => {
            v && K(window.getComputedStyle(v).zIndex)
          }, [v]), (0, N.jsx)("div", {
            ref: z.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...T,
              transform: E ? T.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, N.jsx)(Ft, {
              scope: r,
              placedSide: V,
              placedAlign: M,
              onArrowChange: x,
              arrowX: B,
              arrowY: q,
              shouldHideArrow: X,
              children: (0, N.jsx)(pt.sG.div, {
                "data-side": V,
                "data-align": M,
                ...h,
                ref: b,
                style: {
                  ...h.style,
                  animation: E ? void 0 : "none"
                }
              })
            })
          })
        });
      qt.displayName = Mt;
      var Xt = "PopperArrow",
        Gt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Kt = I.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = Bt(Xt, r), s = Gt[o.placedSide];
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

      function Zt(e) {
        return null !== e
      }
      Kt.displayName = Xt;
      var Ht = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, s = 0 !== o.arrow?.centerOffset, a = s ? 0 : e.arrowWidth, i = s ? 0 : e.arrowHeight, [d, l] = Wt(r), c = {
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

      function Wt(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Ut = Lt,
        Yt = Vt,
        $t = qt,
        Qt = Kt,
        Jt = r(84017),
        er = I.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, s] = I.useState(!1);
          (0, Nt.N)(() => s(!0), []);
          const a = r || o && globalThis?.document?.body;
          return a ? Jt.createPortal((0, N.jsx)(pt.sG.div, {
            ...n,
            ref: t
          }), a) : null
        });
      er.displayName = "Portal";
      var tr = r(66624),
        rr = r(17172),
        nr = r(17038),
        or = r(92023),
        [sr, ar] = (0, ft.A)("Tooltip", [Tt]),
        ir = Tt(),
        dr = "TooltipProvider",
        lr = 700,
        cr = "tooltip.open",
        [ur, fr] = sr(dr),
        pr = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = lr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: s
          } = e, a = I.useRef(!0), i = I.useRef(!1), d = I.useRef(0);
          return I.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, N.jsx)(ur, {
            scope: t,
            isOpenDelayedRef: a,
            delayDuration: r,
            onOpen: I.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), a.current = !1)
            }, [n]),
            onClose: I.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => a.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: I.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: s
          })
        };
      pr.displayName = dr;
      var mr = "Tooltip",
        [hr, yr] = sr(mr),
        vr = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
          } = e, d = fr(mr, e.__scopeTooltip), l = ir(t), [c, u] = I.useState(null), f = (0, Ct.B)(), p = I.useRef(0), m = a ?? d.disableHoverableContent, h = i ?? d.delayDuration, y = I.useRef(!1), [v, g] = (0, nr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(cr))) : d.onClose(), s?.(e)
            },
            caller: mr
          }), b = I.useMemo(() => v ? y.current ? "delayed-open" : "instant-open" : "closed", [v]), w = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, y.current = !1, g(!0)
          }, [g]), x = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, g(!1)
          }, [g]), _ = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              y.current = !0, g(!0), p.current = 0
            }, h)
          }, [h, g]);
          return I.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, N.jsx)(Ut, {
            ...l,
            children: (0, N.jsx)(hr, {
              scope: t,
              contentId: f,
              open: v,
              stateAttribute: b,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: I.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: I.useCallback(() => {
                m ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, m]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: m,
              children: r
            })
          })
        };
      vr.displayName = mr;
      var gr = "TooltipTrigger",
        br = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = yr(gr, r), s = fr(gr, r), a = ir(r), i = I.useRef(null), d = (0, ut.s)(t, i, o.onTriggerChange), l = I.useRef(!1), c = I.useRef(!1), u = I.useCallback(() => l.current = !1, []);
          return I.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, N.jsx)(Yt, {
            asChild: !0,
            ...a,
            children: (0, N.jsx)(pt.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ct.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || s.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ct.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ct.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, ct.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, ct.mK)(e.onBlur, o.onClose),
              onClick: (0, ct.mK)(e.onClick, o.onClose)
            })
          })
        });
      br.displayName = gr;
      var wr = "TooltipPortal",
        [xr, _r] = sr(wr, {
          forceMount: void 0
        }),
        jr = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = yr(wr, t);
          return (0, N.jsx)(xr, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(tr.C, {
              present: r || s.open,
              children: (0, N.jsx)(er, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      jr.displayName = wr;
      var Cr = "TooltipContent",
        Pr = I.forwardRef((e, t) => {
          const r = _r(Cr, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...s
            } = e,
            a = yr(Cr, e.__scopeTooltip);
          return (0, N.jsx)(tr.C, {
            present: n || a.open,
            children: a.disableHoverableContent ? (0, N.jsx)(Dr, {
              side: o,
              ...s,
              ref: t
            }) : (0, N.jsx)(Or, {
              side: o,
              ...s,
              ref: t
            })
          })
        }),
        Or = I.forwardRef((e, t) => {
          const r = yr(Cr, e.__scopeTooltip),
            n = fr(Cr, e.__scopeTooltip),
            o = I.useRef(null),
            s = (0, ut.s)(t, o),
            [a, i] = I.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = I.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = I.useCallback((e, t) => {
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
          return I.useEffect(() => () => f(), [f]), I.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), I.useEffect(() => {
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
          }, [d, c, a, l, f]), (0, N.jsx)(Dr, {
            ...e,
            ref: s
          })
        }),
        [Rr, Sr] = sr(mr, {
          isInside: !1
        }),
        Nr = (0, rr.Dc)("TooltipContent"),
        Dr = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
          } = e, d = yr(Cr, r), l = ir(r), {
            onClose: c
          } = d;
          return I.useEffect(() => (document.addEventListener(cr, c), () => document.removeEventListener(cr, c)), [c]), I.useEffect(() => {
            if (d.trigger) {
              const e = e => {
                e.target instanceof Node && e.target.contains(d.trigger) && c()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }, [d.trigger, c]), (0, N.jsx)(gt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, N.jsxs)($t, {
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
              children: [(0, N.jsx)(Nr, {
                children: n
              }), (0, N.jsx)(Rr, {
                scope: r,
                isInside: !0,
                children: (0, N.jsx)(or.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Pr.displayName = Cr;
      var Ir = "TooltipArrow",
        zr = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = ir(r);
          return Sr(Ir, r).isInside ? null : (0, N.jsx)(Qt, {
            ...o,
            ...n,
            ref: t
          })
        });
      zr.displayName = Ir;
      var Tr = pr,
        kr = vr,
        Er = br,
        Lr = jr,
        Ar = Pr,
        Vr = zr;
      const Mr = (0, I.createContext)(null);

      function Fr() {
        const e = (0, I.useContext)(Mr);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Br = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [s = !1, a] = (0, xe.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, N.jsx)(Tr, {
            delayDuration: t,
            children: (0, N.jsx)(Mr.Provider, {
              value: {
                isOpen: s,
                ...o
              },
              children: (0, N.jsx)(kr, {
                open: s,
                onOpenChange: a,
                children: e
              })
            })
          })
        },
        qr = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, N.jsx)(Er, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Xr = (0, I.forwardRef)(({
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
          } = Fr(), c = (0, xe.jt)(), u = (0, lt.CS)(Ar), f = (0, lt.pn)(l, {
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
            config: lt.$W.stiff,
            immediate: c
          }), p = (0, q.mergeProps)({
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
        Gr = (0, I.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, q.mergeProps)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, N.jsx)(Vr, {
            ...r,
            ref: t
          })
        }),
        Kr = Lr;
      var Zr = r(81471),
        Hr = r(99136),
        Wr = r(52184),
        Ur = r(65324),
        Yr = ["PageUp", "PageDown"],
        $r = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Qr = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Jr = "Slider",
        [en, tn, rn] = (0, Ur.N)(Jr),
        [nn, on] = (0, ft.A)(Jr, [rn]),
        [sn, an] = nn(Jr),
        dn = I.forwardRef((e, t) => {
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
          } = e, y = I.useRef(new Set), v = I.useRef(0), g = I.useRef(!1), b = "horizontal" === a ? un : fn, [w = [], x] = (0, nr.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...y.current];
              t[v.current]?.focus({
                preventScroll: !0,
                focusVisible: g.current
              }), g.current = !1, u(e)
            }
          }), _ = I.useRef(w);

          function j(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                if (!Number.isFinite(e)) return 0;
                const t = e.toString();
                if (t.includes("e")) {
                  const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
                  return Math.max(0, n.length - o)
                }
                const r = t.split(".")[1];
                return r ? r.length : 0
              }(s),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / s) * s + n, a),
              l = (0, Zr.q)(i, [n, o]);
            x((e = []) => {
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
          return (0, N.jsx)(sn, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: v,
            thumbs: y.current,
            values: w,
            orientation: a,
            form: m,
            children: (0, N.jsx)(en.Provider, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(en.Slot, {
                scope: e.__scopeSlider,
                children: (0, N.jsx)(b, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: t,
                  onPointerDown: (0, ct.mK)(h.onPointerDown, () => {
                    i || (_.current = w, g.current = !1)
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
                    }(w, e);
                    j(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    j(e, v.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[v.current];
                    w[v.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => {
                    i || (g.current = !0, j(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (g.current = !0, j(o, w.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      g.current = !0;
                      const r = Yr.includes(e.key) || e.shiftKey && $r.includes(e.key) ? 10 : 1,
                        n = v.current;
                      j(w[n] + s * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      dn.displayName = Jr;
      var [ln, cn] = nn(Jr, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), un = I.forwardRef((e, t) => {
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
        } = e, [u, f] = I.useState(null), p = (0, ut.s)(t, e => f(e)), m = I.useRef(void 0), h = (0, Hr.jH)(o), y = "ltr" === h, v = y && !s || !y && s;

        function g(e) {
          const t = m.current || u.getBoundingClientRect(),
            o = Nn([0, t.width], v ? [r, n] : [n, r]);
          return m.current = t, o(e - t.left)
        }
        return (0, N.jsx)(ln, {
          scope: e.__scopeSlider,
          startEdge: v ? "left" : "right",
          endEdge: v ? "right" : "left",
          direction: v ? 1 : -1,
          size: "width",
          children: (0, N.jsx)(pn, {
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
              const t = Qr[v ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), fn = I.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: s,
          onSlideMove: a,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = I.useRef(null), u = (0, ut.s)(t, c), f = I.useRef(void 0), p = !o;

        function m(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Nn([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, N.jsx)(ln, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, N.jsx)(pn, {
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
              const t = Qr[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), pn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: s,
          onHomeKeyDown: a,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = an(Jr, r);
        return (0, N.jsx)(pt.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, ct.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (a(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Yr.concat($r).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, ct.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, ct.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), s(e))
          })
        })
      }), mn = "SliderTrack", hn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = an(mn, r);
        return (0, N.jsx)(pt.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      hn.displayName = mn;
      var yn = "SliderRange",
        vn = I.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = an(yn, r), s = cn(yn, r), a = I.useRef(null), i = (0, ut.s)(t, a), d = o.values.length, l = o.values.map(e => Sn(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, N.jsx)(pt.sG.span, {
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
      vn.displayName = yn;
      var gn = "SliderThumb",
        [bn, wn] = nn(gn),
        xn = "SliderThumbProvider";

      function _n(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, s = an(xn, t), a = tn(t), [i, d] = I.useState(null), l = I.useMemo(() => i ? a().findIndex(e => e.ref.current === i) : -1, [a, i]), c = (0, Dt.X)(i), u = !i || !!s.form || !!i.closest("form"), f = s.values[l], p = r ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0), m = void 0 === f ? 0 : Sn(f, s.min, s.max);
        I.useEffect(() => {
          if (i) return s.thumbs.add(i), () => {
            s.thumbs.delete(i)
          }
        }, [i, s.thumbs]);
        const h = {
          value: f,
          name: p,
          form: s.form,
          isFormControl: u,
          index: l,
          thumb: i,
          onThumbChange: d,
          percent: m,
          size: c
        };
        return (0, N.jsx)(bn, {
          scope: t,
          ...h,
          children: Dn(o) ? o(h) : n
        })
      }
      _n.displayName = xn;
      var jn = "SliderThumbTrigger",
        Cn = I.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = an(jn, r), s = cn(jn, r), {
            index: a,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = wn(jn, r), u = (0, ut.s)(t, e => c(e)), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(a, o.values.length), p = l?.[s.size], m = p ? function(e, t, r) {
            const n = e / 2;
            return (n - Nn([0, 50], [0, n])(t) * r) * r
          }(p, d, s.direction) : 0;
          return (0, N.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${d}% + ${m}px)`
            },
            children: (0, N.jsx)(en.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(pt.sG.span, {
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
                onFocus: (0, ct.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = a
                })
              })
            })
          })
        });
      Cn.displayName = jn;
      var Pn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, N.jsx)(_n, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(Cn, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, N.jsx)(Rn, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Pn.displayName = gn;
      var On = "SliderBubbleInput",
        Rn = I.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: s
          } = wn(On, e), a = I.useRef(null), i = (0, ut.s)(a, r), d = (0, Wr.Z)(n);
          return I.useEffect(() => {
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
          }, [d, n]), (0, N.jsx)(pt.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: s,
            ...t,
            ref: i,
            defaultValue: n
          })
        });

      function Sn(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, Zr.q)(n, [0, 100])
      }

      function Nn(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Dn(e) {
        return "function" == typeof e
      }
      Rn.displayName = On;
      var In = "focusScope.autoFocusOnMount",
        zn = "focusScope.autoFocusOnUnmount",
        Tn = {
          bubbles: !1,
          cancelable: !0
        },
        kn = I.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...a
          } = e, [i, d] = I.useState(null), l = (0, mt.c)(o), c = (0, mt.c)(s), u = I.useRef(null), f = (0, ut.s)(t, e => d(e)), p = I.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          I.useEffect(() => {
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
          }, [n, i, p.paused]), I.useEffect(() => {
            if (i) {
              Mn.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(In, Tn);
                i.addEventListener(In, l), i.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Vn(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(En(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Vn(i))
              }
              return () => {
                i.removeEventListener(In, l), setTimeout(() => {
                  const t = new CustomEvent(zn, Tn);
                  i.addEventListener(zn, c), i.dispatchEvent(t), t.defaultPrevented || Vn(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(zn, c), Mn.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const m = I.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, s] = function(e) {
                  const t = En(e);
                  return [Ln(t, e), Ln(t.reverse(), e)]
                }(t);
              n && s ? e.shiftKey || o !== s ? e.shiftKey && o === n && (e.preventDefault(), r && Vn(s, {
                select: !0
              })) : (e.preventDefault(), r && Vn(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, N.jsx)(pt.sG.div, {
            tabIndex: -1,
            ...a,
            ref: f,
            onKeyDown: m
          })
        });

      function En(e) {
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
      kn.displayName = "FocusScope";
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
      var Bn = r(38174),
        qn = r(38100),
        Xn = r(45787),
        Gn = "Dialog",
        [Kn, Zn] = (0, ft.A)(Gn),
        [Hn, Wn] = Kn(Gn),
        Un = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !0
          } = e, i = I.useRef(null), d = I.useRef(null), [l, c] = (0, nr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Gn
          });
          return (0, N.jsx)(Hn, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Ct.B)(),
            titleId: (0, Ct.B)(),
            descriptionId: (0, Ct.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: I.useCallback(() => c(e => !e), [c]),
            modal: a,
            children: r
          })
        };
      Un.displayName = Gn;
      var Yn = "DialogTrigger",
        $n = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(Yn, r), s = (0, ut.s)(t, o.triggerRef);
          return (0, N.jsx)(pt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": go(o.open),
            ...n,
            ref: s,
            onClick: (0, ct.mK)(e.onClick, o.onOpenToggle)
          })
        });
      $n.displayName = Yn;
      var Qn = "DialogPortal",
        [Jn, eo] = Kn(Qn, {
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
            children: I.Children.map(n, e => (0, N.jsx)(tr.C, {
              present: r || s.open,
              children: (0, N.jsx)(er, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      to.displayName = Qn;
      var ro = "DialogOverlay",
        no = I.forwardRef((e, t) => {
          const r = eo(ro, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Wn(ro, e.__scopeDialog);
          return s.modal ? (0, N.jsx)(tr.C, {
            present: n || s.open,
            children: (0, N.jsx)(so, {
              ...o,
              ref: t
            })
          }) : null
        });
      no.displayName = ro;
      var oo = (0, rr.TL)("DialogOverlay.RemoveScroll"),
        so = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(ro, r), s = function() {
            const e = I.useContext(vt),
              [t, r] = I.useState(null);
            return I.useEffect(() => {
              if (t) return e.dismissableSurfaces.add(t), () => {
                e.dismissableSurfaces.delete(t)
              }
            }, [t, e.dismissableSurfaces]), r
          }(), a = (0, ut.s)(t, s);
          return (0, N.jsx)(qn.A, {
            as: oo,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, N.jsx)(pt.sG.div, {
              "data-state": go(o.open),
              ...n,
              ref: a,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        ao = "DialogContent",
        io = I.forwardRef((e, t) => {
          const r = eo(ao, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Wn(ao, e.__scopeDialog);
          return (0, N.jsx)(tr.C, {
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
      var lo = I.forwardRef((e, t) => {
          const r = Wn(ao, e.__scopeDialog),
            n = I.useRef(null),
            o = (0, ut.s)(t, r.contentRef, n);
          return I.useEffect(() => {
            const e = n.current;
            if (e) return (0, Xn.Eq)(e)
          }, []), (0, N.jsx)(uo, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, ct.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, ct.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, ct.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        co = I.forwardRef((e, t) => {
          const r = Wn(ao, e.__scopeDialog),
            n = I.useRef(!1),
            o = I.useRef(!1);
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
        uo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...a
          } = e, i = Wn(ao, r);
          return (0, Bn.Oh)(), (0, N.jsx)(N.Fragment, {
            children: (0, N.jsx)(kn, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: s,
              children: (0, N.jsx)(gt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": go(i.open),
                ...a,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        fo = "DialogTitle",
        po = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(fo, r);
          return (0, N.jsx)(pt.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      po.displayName = fo;
      var mo = "DialogDescription",
        ho = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(mo, r);
          return (0, N.jsx)(pt.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      ho.displayName = mo;
      var yo = "DialogClose",
        vo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Wn(yo, r);
          return (0, N.jsx)(pt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function go(e) {
        return e ? "open" : "closed"
      }
      vo.displayName = yo;
      const bo = (0, I.createContext)({
          triggerRef: (0, I.createRef)(),
          triggerBorderRef: (0, I.createRef)(),
          thumbnailRef: (0, I.createRef)(),
          openIconRef: (0, I.createRef)(),
          overlayRef: (0, I.createRef)(),
          contentRef: (0, I.createRef)(),
          containerRef: (0, I.createRef)(),
          imageRef: (0, I.createRef)(),
          placeholderRef: (0, I.createRef)(),
          zoomPanRef: (0, I.createRef)(),
          captionRef: (0, I.createRef)(),
          controlsRef: (0, I.createRef)(),
          closeRef: (0, I.createRef)(),
          zoomRef: (0, I.createRef)(),
          zoomInRef: (0, I.createRef)(),
          zoomSliderRef: (0, I.createRef)(),
          zoomOutRef: (0, I.createRef)(),
          resetRef: (0, I.createRef)(),
          downloadRef: (0, I.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        wo = ({
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
            p = (0, xe.rl)(),
            m = (0, I.useRef)(null),
            h = (0, I.useRef)(null),
            y = (0, I.useRef)(null),
            v = (0, I.useRef)(null),
            g = (0, I.useRef)(null),
            b = (0, I.useRef)(null),
            w = (0, I.useRef)(null),
            x = (0, I.useRef)(null),
            _ = (0, I.useRef)(null),
            j = (0, I.useRef)(null),
            C = (0, I.useRef)(null),
            P = (0, I.useRef)(null),
            O = (0, I.useRef)(null),
            R = (0, I.useRef)(null),
            S = (0, I.useRef)(null),
            D = (0, I.useRef)(null),
            z = (0, I.useRef)(null),
            T = (0, I.useRef)(null),
            k = (0, I.useRef)(null),
            [E = !1, L] = (0, xe.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, I.useRef)(null);
          return A.current || (A.current = new tt({
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
          })), (0, N.jsx)(Xe.Dk, {
            messages: Ge,
            locale: f,
            children: (0, N.jsx)(bo.Provider, {
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
                zoomSliderRef: D,
                zoomOutRef: z,
                resetRef: T,
                downloadRef: k,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: A.current
              },
              children: (0, N.jsx)(_o, {
                ...u
              })
            })
          })
        },
        xo = (0, I.createContext)({
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
        _o = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, I.useContext)(bo), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, je.useGSAP)(), {
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
            } = (0, I.useContext)(bo), p = (0, I.useRef)(null);
            p.current || (p.current = _e.gsap.timeline({
              defaults: Fe
            }));
            const m = (0, I.useCallback)(e => {
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
                }), d.current && i.current && (t.opening = !0, t.setup(i.current, d.current), t.zoomAndPanToInitial(), _e.gsap.set([u.current, f.current], {
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
                }), _e.gsap.set([f.current], {
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
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Pe(f.current), t.closing || (_e.gsap.set([f.current], {
                  visibility: "visible",
                  ...Be
                }), _e.gsap.set([u.current], {
                  visibility: "hidden",
                  ...Be
                }))))
              }),
              y = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              v = (0, I.useCallback)(async e => {
                e || (window.addEventListener("click", m), await y(), window.removeEventListener("click", m)), r(e)
              }, [r]),
              g = (0, I.useCallback)(() => v(!1), [v]);
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
            } = (0, je.useGSAP)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: s,
              containerRef: a,
              placeholderRef: i
            } = (0, I.useContext)(bo), d = t(async e => {
              r.zoomTo(e), _e.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), _e.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), _e.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), _e.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              _e.gsap.to([s.current], {
                opacity: e,
                [qe]: t,
                ...Be
              })
            }), p = t(async () => {
              _e.gsap.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), m = (0, I.useCallback)(() => {
              n.current && o.current && (_e.gsap.set([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              }), _e.gsap.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Be
              }), _e.gsap.set([a.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, I.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", m), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          }), u = (0, q.mergeProps)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, N.jsx)(xo.Provider, {
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
            children: (0, N.jsx)(Un, {
              ...u
            })
          })
        },
        jo = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: s,
              triggerBorderRef: a,
              altText: i
            } = (0, I.useContext)(bo),
            d = (0, xe.UP)(s, n),
            l = (0, q.mergeProps)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(st.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, N.jsx)($n, {
            ref: d,
            ...l,
            children: (0, N.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: a,
              children: (0, N.jsx)(z.xV, {
                children: t
              })
            })
          })
        }),
        Co = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, I.useContext)(bo), s = (0, xe.UP)(o, n), a = (0, q.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? z.DX : "img";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Po = (0, I.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, I.useContext)(bo), o = (0, xe.UP)(n, r), s = (0, q.mergeProps)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), a = e ? z.DX : ot.Maximize2;
          return (0, N.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Oo = ({
          ...e
        }) => (0, N.jsx)(to, {
          ...e
        }),
        Ro = (0, I.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, I.useContext)(bo), o = (0, xe.UP)(n, r), s = (0, q.mergeProps)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, N.jsx)(no, {
            ref: o,
            ...s
          })
        }),
        So = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, I.useContext)(xo), {
            contentRef: s,
            altText: a,
            triggerRef: i
          } = (0, I.useContext)(bo), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, I.useContext)(bo), [t, r] = (0, I.useState)(e.getCursor()), n = (0, I.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, I.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [rt.xW.tokens, rt.xW.typography, rt.xW.grid, nt("dark")].join(" ");
          const c = (0, xe.UP)(s, n),
            u = (0, q.mergeProps)(r, {
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
          return (0, N.jsxs)(io, {
            ref: c,
            ...u,
            children: [(0, N.jsx)(z.s6, {
              children: (0, N.jsx)(po, {
                children: a
              })
            }), t]
          })
        }),
        No = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, I.useContext)(bo);
          (() => {
            const {
              contextSafe: e
            } = (0, je.useGSAP)(), {
              toggleControls: t
            } = (0, I.useContext)(xo), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: s,
              slide: a
            } = (0, I.useContext)(bo), i = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.dragHandler.handleDrag(e), a.dragHandler.animate && !a.closing && (_e.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...Be
              }), _e.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Be
              }), _e.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Be
              })))
            }), d = e(e => {
              e.pinching || a.zoomHandler.pinching || (a.scrollWheel.handleWheel(e), a.closing || _e.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...Be
              }))
            }), l = e(e => {
              !e.pinching && !a.zoomHandler.pinching || a.dragHandler.dragging || (a.zoomHandler.handleZoom(e), a.zoomHandler.animate && !a.closing && (_e.gsap.to([n.current], {
                ...a.getCurrentTransform(),
                ...Be
              }), _e.gsap.to([o.current], {
                opacity: a.getOverlayOpacity(),
                ...Be
              }), _e.gsap.to([s.current], {
                opacity: a.getControlsOpacity(),
                ...Be
              })))
            }), c = (0, I.useCallback)(() => {
              a.controlsVisible || t()
            }, [, t]);
            (0, xe.iQ)({
              ref: s,
              onFocusIn: c
            }), (0, Ce.NH)({
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
          const s = (0, xe.UP)(o, n),
            a = (0, q.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, N.jsx)("div", {
            ref: s,
            ...a,
            children: (0, N.jsxs)(Do, {
              children: [(0, N.jsx)(Io, {}), t]
            })
          })
        }),
        Do = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, I.useContext)(bo), s = (0, xe.UP)(o, n), a = (0, q.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? z.DX : "div";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        Io = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, I.useContext)(bo), s = (0, xe.UP)(o, n), a = (0, q.mergeProps)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? z.DX : "img";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        zo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, I.useContext)(bo), s = (0, xe.UP)(o, n), a = (0, q.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? z.DX : "img";
          return (0, N.jsx)(i, {
            ref: s,
            ...a
          })
        }),
        To = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, I.useContext)(bo), s = (0, xe.UP)(o, n), a = (0, q.mergeProps)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? z.DX : "p";
          return (0, N.jsx)(ho, {
            asChild: !0,
            children: (0, N.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        ko = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, I.useContext)(bo);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, I.useContext)(xo);
            (0, Ie.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Ie.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Ie.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, Ie.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const s = (0, xe.UP)(o, n),
            a = (0, q.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? z.DX : "div";
          return (0, N.jsx)(Ie.Hb, {
            children: (0, N.jsx)(i, {
              ref: s,
              ...a
            })
          })
        }),
        Eo = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, N.jsx)(N.Fragment, {
            children: n
          });
          const s = (0, q.mergeProps)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, N.jsxs)(Br, {
            delayDuration: 0,
            children: [(0, N.jsx)(qr, {
              children: n
            }), (0, N.jsxs)(Xr, {
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
        Lo = (0, I.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.mergeProps)(e, {
            isInline: !0
          });
          return (0, N.jsx)(it, {
            ref: t,
            ...r
          })
        }),
        Ao = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, s) {
          const a = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, I.useContext)(bo),
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
              } = (0, I.useContext)(bo), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, I.useContext)(xo), [o, s] = (0, I.useState)(!1), [a, i] = (0, I.useState)(!1), [d, l] = (0, I.useState)(0), [c, u] = (0, I.useState)(0), [f, p] = (0, I.useState)(0), m = (0, I.useCallback)(() => {
                s(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), h = (0, I.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, I.useEffect)(() => (e.addEventListener("zoom", m), () => {
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
            y = (0, xe.UP)(i, s),
            v = (0, q.mergeProps)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            g = t ? z.DX : "div";
          return (0, N.jsxs)(g, {
            ref: y,
            ...v,
            children: [(0, N.jsx)(Eo, {
              side: "left",
              enabled: r,
              content: a.formatMessage(st.ZoomInButtonLabel),
              metadata: a.formatMessage(st.ZoomInButtonTooltip, {
                shortcut: (0, N.jsx)(Lo, {
                  shortcut: "+"
                })
              }),
              children: (0, N.jsx)(S.K, {
                label: a.formatMessage(st.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Me({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, N.jsxs)(dn, {
              className: "foundry_1a74xwbt",
              max: m,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, N.jsx)(hn, {
                className: "foundry_1a74xwbu",
                children: (0, N.jsx)(vn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, N.jsx)(Eo, {
                side: "left",
                enabled: r,
                content: a.formatMessage(st.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, N.jsx)(Pn, {
                  className: "foundry_1a74xwbw",
                  children: (0, N.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, N.jsx)(Eo, {
              side: "left",
              enabled: r,
              content: a.formatMessage(st.ZoomOutButtonLabel),
              metadata: a.formatMessage(st.ZoomOutButtonTooltip, {
                shortcut: (0, N.jsx)(Lo, {
                  shortcut: "-"
                })
              }),
              children: (0, N.jsx)(S.K, {
                label: a.formatMessage(st.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Me({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, N.jsx)(z.xV, {
              children: n
            })]
          })
        }),
        Vo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const s = (0, Xe.tz)(),
            {
              closeRef: a
            } = (0, I.useContext)(bo),
            i = (0, xe.UP)(a, o),
            d = (0, q.mergeProps)(n, {
              "data-testid": e,
              className: Ve({
                styled: !t
              })
            }),
            l = t ? (0, N.jsx)(z.DX, {
              ref: i,
              ...d
            }) : (0, N.jsx)(S.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: s.formatMessage(st.CloseButtonLabel)
            });
          return (0, N.jsx)(Eo, {
            side: "right",
            enabled: r,
            content: s.formatMessage(st.CloseButtonLabel),
            metadata: s.formatMessage(st.CloseButtonTooltip, {
              shortcut: (0, N.jsx)(Lo, {
                shortcut: "Esc"
              })
            }),
            children: (0, N.jsx)(vo, {
              asChild: !0,
              children: l
            })
          })
        }),
        Mo = (0, I.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            s = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, I.useContext)(bo), {
                contextSafe: r
              } = (0, je.useGSAP)(), {
                resetZoom: n
              } = (0, I.useContext)(xo), [o, s] = (0, I.useState)(e.currZoomLevel !== e.zoomLevels.initial), a = r(e => {
                _e.gsap.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Be
                })
              }), i = (0, I.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                s(t), a(t)
              }, [s]);
              return (0, I.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: a
            } = (0, I.useContext)(bo),
            i = (0, xe.UP)(a, n),
            d = (0, q.mergeProps)(r, s, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, N.jsx)(Eo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(st.ResetZoomButtonLabel),
            metadata: o.formatMessage(st.ResetZoomButtonTooltip, {
              shortcut: (0, N.jsx)(Lo, {
                shortcut: "R"
              })
            }),
            children: (0, N.jsx)(S.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(st.ResetZoomButtonLabel)
            })
          })
        }),
        Fo = (0, I.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: s,
              imageRef: a
            } = (0, I.useContext)(bo),
            i = (0, xe.UP)(s, n),
            d = (0, q.mergeProps)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, N.jsx)(Eo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(st.DownloadButtonTooltip),
            children: (0, N.jsx)(S.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(st.DownloadButtonTooltip),
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
        Bo = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var qo = r(98905);

      function Xo(e) {
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

      function Go(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ko(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Go(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Xo(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Go(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Zo(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ho = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wo = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ko(Ko({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ho(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zo(e.variantClassNames, e => Zo(e, e => e.split(" ")[0]))
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
      const Uo = (0, I.createContext)(null);

      function Yo() {
        const e = (0, I.useContext)(Uo);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const $o = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: s = "neutral",
          ...a
        }, i) => {
          const d = (0, q.mergeProps)({
              className: Wo({
                status: s
              }),
              "data-testid": t
            }, a),
            l = r ? z.DX : "div";
          return (0, N.jsx)(Uo.Provider, {
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
        Qo = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Yo(), s = (0, q.mergeProps)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), a = {
            success: ot.Check,
            invalid: ot.X,
            neutral: ot.TriangleAlert
          }, i = t ? z.DX : a[o];
          return (0, N.jsx)(i, {
            ref: n,
            ...s
          })
        }),
        Jo = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            errorId: a
          } = Yo(), i = (0, q.mergeProps)({
            "data-testid": t,
            id: a || s
          }, n), d = r ? z.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var es = "ScrollArea",
        [ts, rs] = (0, ft.A)(es),
        [ns, os] = ts(es),
        ss = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...a
          } = e, [i, d] = I.useState(null), [l, c] = I.useState(null), [u, f] = I.useState(null), [p, m] = I.useState(null), [h, y] = I.useState(null), [v, g] = I.useState(0), [b, w] = I.useState(0), [x, _] = I.useState(!1), [j, C] = I.useState(!1), P = (0, ut.s)(t, e => d(e)), O = (0, Hr.jH)(o);
          return (0, N.jsx)(ns, {
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
            children: (0, N.jsx)(pt.sG.div, {
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
      ss.displayName = es;
      var as = "ScrollAreaViewport",
        is = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...s
          } = e, a = os(as, r), i = I.useRef(null), d = (0, ut.s)(t, i, a.onViewportChange);
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(ds, {
              nonce: o
            }), (0, N.jsx)(pt.sG.div, {
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
      is.displayName = as;
      var ds = I.memo(({
          nonce: e
        }) => (0, N.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        ls = "ScrollAreaScrollbar",
        cs = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = os(ls, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: a
          } = o, i = "horizontal" === e.orientation;
          return I.useEffect(() => (i ? s(!0) : a(!0), () => {
            i ? s(!1) : a(!1)
          }), [i, s, a]), "hover" === o.type ? (0, N.jsx)(us, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, N.jsx)(fs, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, N.jsx)(ps, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, N.jsx)(ms, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      cs.displayName = ls;
      var us = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = os(ls, e.__scopeScrollArea), [s, a] = I.useState(!1);
          return I.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, N.jsx)(tr.C, {
            present: r || s,
            children: (0, N.jsx)(ps, {
              "data-state": s ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        fs = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = os(ls, e.__scopeScrollArea), s = "horizontal" === e.orientation, a = Ts(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, I.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return I.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), I.useEffect(() => {
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
          }, [o.viewport, s, d, a]), (0, N.jsx)(tr.C, {
            present: r || "hidden" !== i,
            children: (0, N.jsx)(ms, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ct.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ct.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        ps = I.forwardRef((e, t) => {
          const r = os(ls, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [s, a] = I.useState(!1),
            i = "horizontal" === e.orientation,
            d = Ts(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                a(i ? e : t)
              }
            }, 10);
          return ks(r.viewport, d), ks(r.content, d), (0, N.jsx)(tr.C, {
            present: n || s,
            children: (0, N.jsx)(ms, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        ms = I.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = os(ls, e.__scopeScrollArea), s = I.useRef(null), a = I.useRef(0), [i, d] = I.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Rs(i.viewport, i.content), c = {
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
              const o = Ss(r),
                s = t || o / 2,
                a = o - s,
                i = r.scrollbar.paddingStart + s,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                l = r.content - r.viewport;
              return Ds([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, a.current, i, t)
          }
          return "horizontal" === r ? (0, N.jsx)(hs, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Ns(o.viewport.scrollLeft, i, o.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, N.jsx)(ys, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const e = Ns(o.viewport.scrollTop, i);
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
        hs = I.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = os(ls, e.__scopeScrollArea), [a, i] = I.useState(), d = I.useRef(null), l = (0, ut.s)(t, d, s.onScrollbarXChange);
          return I.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(bs, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Ss(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), Is(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Os(a.paddingLeft),
                  paddingEnd: Os(a.paddingRight)
                }
              })
            }
          })
        }),
        ys = I.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, s = os(ls, e.__scopeScrollArea), [a, i] = I.useState(), d = I.useRef(null), l = (0, ut.s)(t, d, s.onScrollbarYChange);
          return I.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(bs, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Ss(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (s.viewport) {
                const n = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), Is(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && s.viewport && a && n({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Os(a.paddingTop),
                  paddingEnd: Os(a.paddingBottom)
                }
              })
            }
          })
        }),
        [vs, gs] = ts(ls),
        bs = I.forwardRef((e, t) => {
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
          } = e, p = os(ls, r), [m, h] = I.useState(null), y = (0, ut.s)(t, e => h(e)), v = I.useRef(null), g = I.useRef(""), b = p.viewport, w = n.content - n.viewport, x = (0, mt.c)(c), _ = (0, mt.c)(d), j = Ts(u, 10);

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
          return I.useEffect(() => {
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
          }, [b, m, w, x]), I.useEffect(_, [n, _]), ks(m, j), ks(p.content, j), (0, N.jsx)(vs, {
            scope: r,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, mt.c)(s),
            onThumbPointerUp: (0, mt.c)(a),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, mt.c)(i),
            children: (0, N.jsx)(pt.sG.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ct.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), v.current = m.getBoundingClientRect(), g.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, ct.mK)(e.onPointerMove, C),
              onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = g.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null
              })
            })
          })
        }),
        ws = "ScrollAreaThumb",
        xs = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = gs(ws, e.__scopeScrollArea);
          return (0, N.jsx)(tr.C, {
            present: r || o.hasThumb,
            children: (0, N.jsx)(_s, {
              ref: t,
              ...n
            })
          })
        }),
        _s = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, s = os(ws, r), a = gs(ws, r), {
            onThumbPositionChange: i
          } = a, d = (0, ut.s)(t, e => a.onThumbChange(e)), l = I.useRef(void 0), c = Ts(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return I.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = zs(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [s.viewport, c, i]), (0, N.jsx)(pt.sG.div, {
            "data-state": a.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ct.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              a.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ct.mK)(e.onPointerUp, a.onThumbPointerUp)
          })
        });
      xs.displayName = ws;
      var js = "ScrollAreaCorner",
        Cs = I.forwardRef((e, t) => {
          const r = os(js, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, N.jsx)(Ps, {
            ...e,
            ref: t
          }) : null
        });
      Cs.displayName = js;
      var Ps = I.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = os(js, r), [s, a] = I.useState(0), [i, d] = I.useState(0), l = Boolean(s && i);
        return ks(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), ks(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), a(e)
        }), l ? (0, N.jsx)(pt.sG.div, {
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

      function Os(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Rs(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Ss(e) {
        const t = Rs(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Ns(e, t, r = "ltr") {
        const n = Ss(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          s = t.scrollbar.size - o,
          a = t.content - t.viewport,
          i = s - n,
          d = "ltr" === r ? [0, a] : [-1 * a, 0],
          l = (0, Zr.q)(e, d);
        return Ds([0, a], [0, i])(l)
      }

      function Ds(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Is(e, t) {
        return e > 0 && e < t
      }
      var zs = (e, t = () => {}) => {
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

      function Ts(e, t) {
        const r = (0, mt.c)(e),
          n = I.useRef(0);
        return I.useEffect(() => () => window.clearTimeout(n.current), []), I.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function ks(e, t) {
        const r = (0, mt.c)(t);
        (0, Nt.N)(() => {
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
      var Es = ss,
        Ls = is,
        As = cs,
        Vs = xs,
        Ms = Cs,
        Fs = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Bs = [" ", "Enter"],
        qs = "Select",
        [Xs, Gs, Ks] = (0, Ur.N)(qs),
        [Zs, Hs] = (0, ft.A)(qs, [Ks, Tt]),
        Ws = Tt(),
        [Us, Ys] = Zs(qs),
        [$s, Qs] = Zs(qs);

      function Js(e) {
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
          form: m,
          internal_do_not_use_render: h
        } = e, y = Ws(t), [v, g] = I.useState(null), [b, w] = I.useState(null), [x, _] = I.useState(!1), j = (0, Hr.jH)(l), [C, P] = (0, nr.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: s,
          caller: qs
        }), [O, R] = (0, nr.i)({
          prop: a,
          defaultProp: i,
          onChange: d,
          caller: qs
        }), S = I.useRef(null), D = !v || !!m || !!v.closest("form"), [z, T] = I.useState(new Set), k = (0, Ct.B)(), E = Array.from(z).map(e => e.props.value).join(";"), L = I.useCallback(e => {
          T(t => new Set(t).add(e))
        }, []), A = I.useCallback(e => {
          T(t => {
            const r = new Set(t);
            return r.delete(e), r
          })
        }, []), V = {
          required: p,
          trigger: v,
          onTriggerChange: g,
          valueNode: b,
          onValueNodeChange: w,
          valueNodeHasChildren: x,
          onValueNodeHasChildrenChange: _,
          contentId: k,
          value: O,
          onValueChange: R,
          open: C,
          onOpenChange: P,
          dir: j,
          triggerPointerDownPosRef: S,
          disabled: f,
          name: c,
          autoComplete: u,
          form: m,
          nativeOptions: z,
          nativeSelectKey: E,
          isFormControl: D
        };
        return (0, N.jsx)(Ut, {
          ...y,
          children: (0, N.jsx)(Us, {
            scope: t,
            ...V,
            children: (0, N.jsx)(Xs.Provider, {
              scope: t,
              children: (0, N.jsx)($s, {
                scope: t,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: Ba(h) ? h(V) : r
              })
            })
          })
        })
      }
      Js.displayName = "SelectProvider";
      var ea = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, N.jsx)(Js, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, N.jsxs)(N.Fragment, {
            children: [r, e ? (0, N.jsx)(Fa, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      ea.displayName = qs;
      var ta = "SelectTrigger",
        ra = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, s = Ws(r), a = Ys(ta, r), i = a.disabled || n, d = (0, ut.s)(t, a.onTriggerChange), l = Gs(r), c = I.useRef("touch"), [u, f, p] = Xa(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === a.value),
              n = Ga(t, e, r);
            void 0 !== n && a.onValueChange(n.value)
          }), m = e => {
            i || (a.onOpenChange(!0), p()), e && (a.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, N.jsx)(Yt, {
            asChild: !0,
            ...s,
            children: (0, N.jsx)(pt.sG.button, {
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
              "data-placeholder": qa(a.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ct.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && m(e)
              }),
              onPointerDown: (0, ct.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (m(e), e.preventDefault())
              }),
              onKeyDown: (0, ct.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Fs.includes(e.key) && (m(), e.preventDefault())
              })
            })
          })
        });
      ra.displayName = ta;
      var na = "SelectValue",
        oa = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: s,
            placeholder: a = "",
            ...i
          } = e, d = Ys(na, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== s, u = (0, ut.s)(t, d.onValueNodeChange);
          (0, Nt.N)(() => {
            l(c)
          }, [l, c]);
          const f = qa(d.value);
          return (0, N.jsx)(pt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, N.jsx)(I.Fragment, {
              children: f ? a : s
            }, f ? "placeholder" : "value")
          })
        });
      oa.displayName = na;
      var sa = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, N.jsx)(pt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      sa.displayName = "SelectIcon";
      var aa = "SelectPortal",
        [ia, da] = Zs(aa, {
          forceMount: void 0
        }),
        la = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, N.jsx)(ia, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, N.jsx)(er, {
              asChild: !0,
              ...n
            })
          })
        };
      la.displayName = aa;
      var ca = "SelectContent",
        ua = I.forwardRef((e, t) => {
          const r = da(ca, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Ys(ca, e.__scopeSelect),
            [a, i] = I.useState();
          return (0, Nt.N)(() => {
            i(new DocumentFragment)
          }, []), (0, N.jsx)(tr.C, {
            present: n || s.open,
            children: ({
              present: e
            }) => e ? (0, N.jsx)(va, {
              ...o,
              ref: t
            }) : (0, N.jsx)(fa, {
              ...o,
              fragment: a
            })
          })
        });
      ua.displayName = ca;
      var fa = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? Jt.createPortal((0, N.jsx)(ma, {
          scope: r,
          children: (0, N.jsx)(Xs.Slot, {
            scope: r,
            children: (0, N.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      fa.displayName = "SelectContentFragment";
      var pa = 10,
        [ma, ha] = Zs(ca),
        ya = (0, rr.TL)("SelectContent.RemoveScroll"),
        va = I.forwardRef((e, t) => {
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
            sticky: m,
            hideWhenDetached: h,
            avoidCollisions: y,
            ...v
          } = e, g = Ys(ca, r), [b, w] = I.useState(null), [x, _] = I.useState(null), j = (0, ut.s)(t, e => w(e)), [C, P] = I.useState(null), [O, R] = I.useState(null), S = Gs(r), [D, z] = I.useState(!1), T = I.useRef(!1);
          I.useEffect(() => {
            if (b) return (0, Xn.Eq)(b)
          }, [b]), (0, Bn.Oh)();
          const k = I.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, x]),
            E = I.useCallback(() => k([C, b]), [k, C, b]);
          I.useEffect(() => {
            D && E()
          }, [D, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = g;
          I.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(b) || L(!1), document.removeEventListener("pointermove", t), A.current = null
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
          }, [b, L, A]), I.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = Xa(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Ga(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), F = I.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== g.value && g.value === t || n) && (P(e), n && (T.current = !0))
          }, [g.value]), B = I.useCallback(() => b?.focus(), [b]), q = I.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== g.value && g.value === t || n) && R(e)
          }, [g.value]), X = "popper" === n ? ba : ga, G = X === ba ? {
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
          return (0, N.jsx)(ma, {
            scope: r,
            content: b,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: F,
            selectedItem: C,
            onItemLeave: B,
            itemTextRefCallback: q,
            focusSelectedItem: E,
            selectedItemText: O,
            position: n,
            isPositioned: D,
            searchRef: V,
            children: (0, N.jsx)(qn.A, {
              as: ya,
              allowPinchZoom: !0,
              children: (0, N.jsx)(kn, {
                asChild: !0,
                trapped: g.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ct.mK)(o, e => {
                  g.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, N.jsx)(gt, {
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
                    ...G,
                    onPlaced: () => z(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: (0, ct.mK)(v.onKeyDown, e => {
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
        });
      va.displayName = "SelectContentImpl";
      var ga = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, s = Ys(ca, r), a = ha(ca, r), [i, d] = I.useState(null), [l, c] = I.useState(null), u = (0, ut.s)(t, e => c(e)), f = Gs(r), p = I.useRef(!1), m = I.useRef(!0), {
          viewport: h,
          selectedItem: y,
          selectedItemText: v,
          focusSelectedItem: g
        } = a, b = I.useCallback(() => {
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
                c = window.innerWidth - pa,
                u = (0, Zr.q)(s, [pa, Math.max(pa, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                s = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - s,
                d = e.width + a,
                l = Math.max(d, t.width),
                c = window.innerWidth - pa,
                u = (0, Zr.q)(s, [pa, Math.max(pa, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const a = f(),
              d = window.innerHeight - 2 * pa,
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
              P = e.top + e.height / 2 - pa,
              O = d - P,
              R = y.offsetHeight / 2,
              S = m + g + (y.offsetTop + R),
              N = w - S;
            if (S <= P) {
              const e = a.length > 0 && y === a[a.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                r = S + Math.max(O, R + (e ? C : 0) + t + b);
              i.style.height = r + "px"
            } else {
              const e = a.length > 0 && y === a[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(P, m + h.offsetTop + (e ? j : 0) + R) + N;
              i.style.height = t + "px", h.scrollTop = S - P + h.offsetTop
            }
            i.style.margin = `${pa}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, s.trigger, s.valueNode, i, l, h, y, v, s.dir, n]);
        (0, Nt.N)(() => b(), [b]);
        const [w, x] = I.useState();
        (0, Nt.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = I.useCallback(e => {
          e && !0 === m.current && (b(), g?.(), m.current = !1)
        }, [b, g]);
        return (0, N.jsx)(wa, {
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
            children: (0, N.jsx)(pt.sG.div, {
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
      ga.displayName = "SelectItemAlignedPosition";
      var ba = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = pa,
          ...s
        } = e, a = Ws(r);
        return (0, N.jsx)($t, {
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
      ba.displayName = "SelectPopperPosition";
      var [wa, xa] = Zs(ca, {}), _a = "SelectViewport", ja = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, s = ha(_a, r), a = xa(_a, r), i = (0, ut.s)(t, s.onViewportChange), d = I.useRef(0);
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, N.jsx)(Xs.Slot, {
            scope: r,
            children: (0, N.jsx)(pt.sG.div, {
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
              onScroll: (0, ct.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = a;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * pa,
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
      ja.displayName = _a;
      var Ca = "SelectGroup",
        [Pa, Oa] = Zs(Ca);
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ct.B)();
        return (0, N.jsx)(Pa, {
          scope: r,
          id: o,
          children: (0, N.jsx)(pt.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Ca;
      var Ra = "SelectLabel";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Oa(Ra, r);
        return (0, N.jsx)(pt.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Ra;
      var Sa = "SelectItem",
        [Na, Da] = Zs(Sa),
        Ia = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: s,
            ...a
          } = e, i = Ys(Sa, r), d = ha(Sa, r), l = i.value === n, [c, u] = I.useState(s ?? ""), [f, p] = I.useState(!1), m = (0, ut.s)(t, e => d.itemRefCallback?.(e, n, o)), h = (0, Ct.B)(), y = I.useRef("touch"), v = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, N.jsx)(Na, {
            scope: r,
            value: n,
            disabled: o,
            textId: h,
            isSelected: l,
            onItemTextChange: I.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, N.jsx)(Xs.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, N.jsx)(pt.sG.div, {
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
                onFocus: (0, ct.mK)(a.onFocus, () => p(!0)),
                onBlur: (0, ct.mK)(a.onBlur, () => p(!1)),
                onClick: (0, ct.mK)(a.onClick, () => {
                  "mouse" !== y.current && v()
                }),
                onPointerUp: (0, ct.mK)(a.onPointerUp, () => {
                  "mouse" === y.current && v()
                }),
                onPointerDown: (0, ct.mK)(a.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, ct.mK)(a.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ct.mK)(a.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ct.mK)(a.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Bs.includes(e.key) && v(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      Ia.displayName = Sa;
      var za = "SelectItemText",
        Ta = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...s
          } = e, a = Ys(za, r), i = ha(za, r), d = Da(za, r), l = Qs(za, r), [c, u] = I.useState(null), f = (0, ut.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, m = I.useMemo(() => (0, N.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: y
          } = l;
          return (0, Nt.N)(() => (h(m), () => y(m)), [h, y, m]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(pt.sG.span, {
              id: d.textId,
              ...s,
              ref: f
            }), d.isSelected && a.valueNode && !a.valueNodeHasChildren && !qa(a.value) ? Jt.createPortal(s.children, a.valueNode) : null]
          })
        });
      Ta.displayName = za;
      var ka = "SelectItemIndicator";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Da(ka, r).isSelected ? (0, N.jsx)(pt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = ka;
      var Ea = "SelectScrollUpButton";
      I.forwardRef((e, t) => {
        const r = ha(Ea, e.__scopeSelect),
          n = xa(Ea, e.__scopeSelect),
          [o, s] = I.useState(!1),
          a = (0, ut.s)(t, n.onScrollButtonChange);
        return (0, Nt.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Aa, {
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
      }).displayName = Ea;
      var La = "SelectScrollDownButton";
      I.forwardRef((e, t) => {
        const r = ha(La, e.__scopeSelect),
          n = xa(La, e.__scopeSelect),
          [o, s] = I.useState(!1),
          a = (0, ut.s)(t, n.onScrollButtonChange);
        return (0, Nt.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              s(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Aa, {
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
      }).displayName = La;
      var Aa = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, s = ha("SelectScrollButton", r), a = I.useRef(null), i = Gs(r), d = I.useCallback(() => {
          null !== a.current && (window.clearInterval(a.current), a.current = null)
        }, []);
        return I.useEffect(() => () => d(), [d]), (0, Nt.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, N.jsx)(pt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ct.mK)(o.onPointerDown, () => {
            null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ct.mK)(o.onPointerMove, () => {
            s.onItemLeave?.(), null === a.current && (a.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, ct.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Va = "SelectArrow";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Ws(r);
        return "popper" === ha(Va, r).position ? (0, N.jsx)(Qt, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Va;
      var Ma = "SelectBubbleInput",
        Fa = I.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Ys(Ma, e),
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
            p = I.useRef(null),
            m = (0, ut.s)(r, p),
            h = o ?? "",
            y = (0, Wr.Z)(h),
            v = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return I.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (y !== h && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, h), e.dispatchEvent(t)
            }
          }, [y, h]), (0, N.jsxs)(pt.sG.select, {
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
              ...or.Qg,
              ...t.style
            },
            ref: m,
            defaultValue: h,
            children: [qa(o) && !v ? (0, N.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Ba(e) {
        return "function" == typeof e
      }

      function qa(e) {
        return "" === e || void 0 === e
      }

      function Xa(e) {
        const t = (0, mt.c)(e),
          r = I.useRef(""),
          n = I.useRef(0),
          o = I.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          s = I.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return I.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s]
      }

      function Ga(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let s = (a = e, i = Math.max(o, 0), a.map((e, t) => a[(i + t) % a.length]));
        var a, i;
        1 === n.length && (s = s.filter(e => e !== r));
        const d = s.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Ka(e) {
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

      function Za(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ha(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Za(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ka(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Za(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wa(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Fa.displayName = Ma;
      var Ua = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ya = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ha(Ha({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ua(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wa(e.variantClassNames, e => Wa(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $a = Ya({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qa = Ya({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ja = Ya({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ei = Ya({
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
        ti = Ya({
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
        ri = Ya({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ni = (0, I.createContext)(null);

      function oi() {
        const e = (0, I.useContext)(ni);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const si = (0, I.forwardRef)(({
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
          const y = (0, I.useRef)(null),
            v = (0, xe.UP)(y, h),
            g = (0, I.useId)(),
            b = (0, I.useId)(),
            w = (0, I.useId)(),
            x = (0, I.useId)(),
            _ = (0, I.useId)(),
            j = (0, I.useId)(),
            C = (0, I.useRef)(null),
            P = (0, I.useRef)(null),
            O = (0, I.useRef)(null),
            [R = !1, S] = (0, xe.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, q.mergeProps)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, m);
          return (0, N.jsx)(ni.Provider, {
            value: {
              labelId: g,
              errorId: b,
              descriptionId: w,
              triggerId: j,
              hintId: x,
              popoverId: _,
              labelRef: C,
              descriptionRef: P,
              hintRef: O,
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
            children: (0, N.jsx)(ea, {
              required: r,
              disabled: n,
              open: R,
              onOpenChange: () => S(!o && !R),
              value: d,
              defaultValue: s,
              onValueChange: a,
              name: i,
              children: (0, N.jsx)("div", {
                ref: v,
                ...D,
                children: e
              })
            })
          })
        }),
        ai = (0, I.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: s
          } = oi(), a = (0, q.mergeProps)({
            id: s,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: $a({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, N.jsx)(ua, {
            ...a,
            ref: o,
            children: (0, N.jsx)(ja, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        ii = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(ja, {
            ref: r,
            ...n
          })
        }),
        di = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(Es, {
            ...o,
            ref: n,
            children: [(0, N.jsx)(ii, {
              asChild: !0,
              children: (0, N.jsx)(Ls, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, N.jsx)(As, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, N.jsx)(Vs, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        li = (0, I.forwardRef)(({
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
            labelRef: h,
            descriptionRef: y,
            hintRef: v,
            isOpen: g,
            size: b
          } = oi(), {
            isPressed: w,
            pressProps: x
          } = (0, qo.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, j] = (0, I.useState)(!1), [C, P] = (0, I.useState)(!1);
          (0, I.useEffect)(() => {
            j(!!h.current || !!v.current), P(!!y.current)
          }, []);
          const O = (0, q.mergeProps)({
              id: f,
              className: ti({
                size: b,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, q.joinStrings)(r, c, u) : r,
              "aria-describedby": C ? (0, q.joinStrings)(n, m) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": g ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, q.omit)(x, "onKeyDown"), s),
            R = o ? z.DX : ra;
          return (0, N.jsx)(R, {
            ...O,
            ref: a,
            children: e
          })
        }),
        ci = (0, I.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            a = t ? z.DX : "span";
          return (0, N.jsx)(a, {
            ...s,
            ref: o,
            children: (0, N.jsx)(oa, {
              placeholder: e
            })
          })
        }),
        ui = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: s,
            isOpen: a
          } = oi(), i = a ? ot.ChevronUp : ot.ChevronDown, d = (0, q.mergeProps)({
            asChild: !0,
            className: ri({
              isDisabled: s || o
            }),
            "data-testid": t
          }, r);
          return (0, N.jsx)(sa, {
            ...d,
            ref: n,
            children: e || (0, N.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        fi = (0, I.forwardRef)(({
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
          } = oi(), f = i && !o, p = (0, xe.UP)(c, a), m = (0, q.mergeProps)({
            id: s.id || l,
            htmlFor: u,
            "data-testid": e,
            className: ei({
              showAsterisk: f,
              isDisabled: d
            })
          }, s), h = t ? z.DX : "label";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(h, {
              ...m,
              ref: p,
              children: r
            })
          })
        }),
        pi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a,
            descriptionRef: i
          } = oi(), d = (0, xe.UP)(i, o), l = (0, q.mergeProps)({
            className: Qa({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), c = r ? z.DX : "div";
          return (0, N.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        mi = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            hintRef: a,
            isDisabled: i
          } = oi(), d = (0, xe.UP)(a, o), l = (0, q.mergeProps)({
            className: Ja({
              isDisabled: i
            }),
            "data-testid": r,
            id: s
          }, n), c = t ? z.DX : "div";
          return (0, N.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        hi = (0, I.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, I.useRef)(null),
            i = (0, xe.UP)(a, s),
            d = (0, q.mergeProps)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, N.jsx)(Ia, {
            ref: i,
            ...d,
            children: e
          })
        }),
        yi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, N.jsx)(Ta, {
            ref: n,
            asChild: !0,
            children: (0, N.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        vi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, N.jsx)(sa, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        gi = la,
        bi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = oi(), i = (0, q.mergeProps)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? z.DX : $o;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        wi = Qo,
        xi = Jo;
      var _i = r(83588),
        ji = r(56728);

      function Ci(e) {
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

      function Pi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Oi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pi(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ci(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ri(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Si = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ni = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Oi(Oi({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Si(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ri(e.variantClassNames, e => Ri(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Di = Ni({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ii = Ni({
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
        zi = Ni({
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
        Ti = Ni({
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
        ki = Ni({
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
      const Ei = (0, I.createContext)(null);

      function Li() {
        const e = (0, I.useContext)(Ei);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Ai = (0, I.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: s = !1,
          isReadOnly: a = !1,
          ...i
        }, d) => {
          const l = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? z.DX : "div",
            u = (0, I.useId)(),
            f = (0, I.useId)(),
            p = (0, I.useId)();
          return (0, N.jsx)(Ei.Provider, {
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
        Vi = (0, I.forwardRef)(({
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
          const p = (0, I.useRef)(null),
            m = (0, xe.UP)(p, f),
            {
              size: h,
              appearance: y,
              inputId: v,
              labelId: g,
              descriptionId: b,
              isDisabled: w,
              isReadOnly: x
            } = Li(),
            _ = (0, ji.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: a,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, _i.K)({
              id: s || v,
              "aria-labelledby": (0, q.joinStrings)(n, g),
              "aria-describedby": (0, q.joinStrings)(o, b),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, q.mergeProps)({
              className: ki({
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
            children: [(0, N.jsx)(z.s6, {
              children: (0, N.jsx)("input", {
                ...j,
                ref: m
              })
            }), (0, N.jsx)("div", {
              className: Ti({
                size: h
              }),
              "aria-hidden": "true",
              children: (0, N.jsx)("div", {
                className: Ii({
                  size: h,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        Mi = (0, I.forwardRef)(({
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
          } = Li(), c = (0, q.mergeProps)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: zi({
              isDisabled: a,
              size: l
            })
          }, o), u = t ? z.DX : "label";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Fi = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Li(), i = n.id || a, d = (0, q.mergeProps)({
            className: Di({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? z.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Bi = r(26688);
      const qi = ({
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
        Xi = ({
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
        Gi = ({
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
        Ki = ({
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
        Zi = ({
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
        Hi = ({
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

      function Wi(e) {
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

      function Ui(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Yi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ui(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Wi(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ui(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $i(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qi = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ji = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Yi(Yi({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qi(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $i(e.variantClassNames, e => $i(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ed = Ji({
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
        td = Ji({
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
        rd = Ji({
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
        nd = Ji({
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
        od = Ji({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        sd = Ji({
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
      const ad = (0, I.createContext)(null);

      function id() {
        const e = (0, I.useContext)(ad);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const dd = (0, I.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...s
        }, a) => {
          const i = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, q.omit)(s, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? z.DX : "div",
            l = (0, I.useId)(),
            c = (0, I.useId)(),
            u = (0, I.useId)();
          return (0, N.jsx)(ad.Provider, {
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
        ld = (0, I.forwardRef)(({
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
          } = id(), _ = (0, I.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: P
          } = (0, qo.d)({
            ref: _
          }), {
            setSelected: O,
            toggle: R,
            ...S
          } = (0, ji.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: T,
            isSelected: k,
            isDisabled: E,
            isReadOnly: L
          } = (0, Bi.v)({
            "aria-label": "",
            id: j,
            name: o,
            ...x
          }, {
            ...S,
            toggle: R,
            setSelected: x.isReadOnly ? () => !1 : O
          }, _), A = (0, q.mergeProps)({
            className: td({
              size: m
            }),
            onClick: e => {
              s?.(e) ?? a?.(e), e.defaultPrevented || E || L || R()
            }
          }, P, f), V = (0, q.mergeProps)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, q.joinStrings)(c, b),
            "aria-describedby": (0, q.joinStrings)(d, g),
            "aria-errormessage": (0, q.joinStrings)(l, x.isInvalid ? g : void 0),
            "aria-required": v,
            required: v
          }, T), M = y ? i[`Dash${m}`] : i[`Check${m}`];
          return (0, N.jsxs)("div", {
            ...A,
            children: [(0, N.jsx)(z.s6, {
              children: (0, N.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, N.jsx)("div", {
              className: (0, D.clsx)(ed({
                size: m,
                appearance: h
              }), u),
              "aria-hidden": "true",
              "data-state": y ? "mixed" : k ? "checked" : "unchecked",
              "data-disabled": E || L,
              "data-testid": e,
              "data-pressed": C,
              children: (0, N.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (k || y) && (0, N.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        cd = (0, I.forwardRef)(({
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
          } = id(), u = s.id || d, f = c && !o, p = (0, q.mergeProps)({
            className: sd({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: s.htmlFor || l
          }, s), m = t ? z.DX : "label";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(m, {
              ...p,
              ref: a,
              children: e
            })
          })
        }),
        ud = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = id(), i = n.id || a, d = (0, q.mergeProps)({
            className: rd({
              isDisabled: s
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? z.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        fd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = id(), a = n.id || s, i = (0, q.mergeProps)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: a
          }, n), d = t ? z.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        pd = (0, I.createContext)(null);

      function md() {
        const e = (0, I.useContext)(pd);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const hd = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...s
        }, a) => {
          const [i, d] = (0, I.useState)(null), [l, c] = (0, I.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, q.mergeProps)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, s), p = t ? z.DX : "fieldset";
          return (0, N.jsx)(pd.Provider, {
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
        yd = (0, I.forwardRef)(({
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
          } = md(), l = d && !s, c = (0, q.mergeProps)({
            "data-testid": r,
            className: od({
              showAsterisk: l
            })
          }, a), u = t ? z.DX : "legend";
          return (0, N.jsx)(z.s6, {
            enabled: o,
            children: (0, N.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, N.jsx)(z.xV, {
                children: e
              }), !d && (0, N.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        vd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: s
          } = md(), a = (0, I.useId)(), i = n.id || a;
          (0, I.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? z.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        gd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = md(), a = (0, q.mergeProps)({
            "data-testid": r,
            className: nd({
              size: s
            })
          }, n), i = t ? z.DX : "div";
          return (0, N.jsx)(i, {
            ...a,
            ref: o,
            children: e
          })
        }),
        bd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: s
          } = md(), a = (0, I.useId)(), i = n.id || a;
          (0, I.useEffect)(() => {
            s(i)
          }, [s, i]);
          const d = (0, q.mergeProps)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = ot.X,
            c = t ? z.DX : "div";
          return (0, N.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, N.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, N.jsx)(z.xV, {
              children: e
            })]
          })
        });

      function wd(e) {
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

      function xd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xd(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = wd(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _d(_d({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jd(e.variantClassNames, e => jd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Od = Pd({
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
        Rd = Pd({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sd = Pd({
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
        Nd = Pd({
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
      const Dd = (0, I.createContext)(null);

      function Id() {
        const e = (0, I.useContext)(Dd);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const zd = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const l = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? z.DX : "div",
            u = (0, I.useId)(),
            f = (0, I.useId)(),
            p = (0, I.useId)(),
            m = (0, I.useId)();
          return (0, N.jsx)(Dd.Provider, {
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
        Td = (0, I.forwardRef)(({
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
          } = Id(), u = (0, q.mergeProps)({
            className: Sd({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, s), f = t ? z.DX : "label";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(f, {
              ...u,
              ref: a,
              children: e
            })
          })
        }),
        kd = (0, I.forwardRef)(({
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
          } = Id(), b = (0, I.useRef)(null), w = (0, xe.UP)(b, c), x = (0, q.mergeProps)({
            className: Nd({
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
            "aria-labelledby": (0, q.joinStrings)(l.id, f, m, i),
            "aria-describedby": (0, q.joinStrings)(u, d),
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
          }, l), _ = e ? z.DX : "textarea";
          return (0, N.jsx)(_, {
            ref: w,
            ...x,
            children: t
          })
        }),
        Ed = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = Id(), i = (0, q.mergeProps)({
            className: Od({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? z.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ld = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: s,
            isDisabled: a
          } = Id(), i = (0, q.mergeProps)({
            className: Rd({
              isDisabled: a
            }),
            "data-testid": r,
            id: s
          }, n), d = t ? z.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ad = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = Id(), i = (0, q.mergeProps)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? z.DX : $o;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Vd = Qo,
        Md = Jo;
      var Fd = r(707),
        Bd = r(5277);

      function qd(e) {
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

      function Xd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xd(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = qd(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gd(Gd({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Zd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kd(e.variantClassNames, e => Kd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Wd = Hd({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ud = Hd({
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
      const Yd = (0, I.createContext)(null);

      function $d() {
        const e = (0, I.useContext)(Yd);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Qd = (0, I.forwardRef)(({
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
          const f = (0, I.useRef)(null),
            p = (0, xe.UP)(f, u),
            m = (0, I.useId)(),
            h = (0, I.useId)(),
            y = (0, I.useId)(),
            v = (0, Fd.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: g
            } = (0, Bd.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, q.joinStrings)(m, a),
              "aria-describedby": (0, q.joinStrings)(h, y, i),
              "aria-errormessage": (0, q.joinStrings)(y, d)
            }, v),
            b = (0, q.mergeProps)({
              className: "foundry_njguqn0"
            }, g, (0, q.omit)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = s ? z.DX : "div";
          return (0, N.jsx)(Yd.Provider, {
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
        Jd = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: s,
            orientation: a
          } = $d(), i = (0, q.mergeProps)({
            "data-testid": e,
            className: Ud({
              size: s,
              orientation: a
            })
          }, n), d = t ? z.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        el = (0, I.forwardRef)(({
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
          } = $d(), l = i && !o, c = (0, q.mergeProps)({
            id: s.id || d,
            "data-testid": e,
            className: Wd({
              showAsterisk: l
            })
          }, s), u = t ? z.DX : "div";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        tl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: s
          } = $d(), a = (0, q.mergeProps)({
            id: s,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? z.DX : "div";
          return (0, N.jsx)(i, {
            ...a,
            ref: o,
            children: r
          })
        }),
        rl = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: s,
            status: a
          } = $d(), i = (0, q.mergeProps)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: s,
            status: a
          }, n), d = r ? z.DX : $o;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        nl = Qo,
        ol = Jo;
      var sl = r(80146),
        al = Hd({
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
        il = Hd({
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
        dl = Hd({
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
        ll = Hd({
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
      const cl = ({
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
        ul = ({
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
        fl = ({
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
        pl = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            a = e ? z.DX : "label";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        ml = (0, I.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, I.useRef)(null),
            s = (0, xe.UP)(o, n),
            a = (0, I.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = $d(),
            {
              isPressed: p,
              pressProps: m
            } = (0, qo.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, sl.z)({
              ...r,
              id: a,
              value: t,
              "aria-label": ""
            }, i, o),
            y = h.checked,
            v = h.disabled || i?.isReadOnly,
            g = (0, q.mergeProps)(h, {
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
            className: ll({
              size: l
            }),
            children: [(0, N.jsx)(z.s6, {
              children: (0, N.jsx)("input", {
                type: "radio",
                ...g,
                ref: s,
                className: "foundry_1pfduet1"
              })
            }), (0, N.jsx)("div", {
              className: dl({
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
        hl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, s) => {
          const {
            size: a,
            state: i
          } = $d(), d = (0, I.useId)(), l = (0, q.mergeProps)({
            id: d,
            "data-testid": e,
            className: il({
              size: a,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? z.DX : "div";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(c, {
              ...l,
              ref: s,
              children: r
            })
          })
        }),
        yl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = $d(), a = (0, q.mergeProps)({
            "data-testid": e,
            className: al({
              isDisabled: s
            })
          }, n), i = t ? z.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        });
      var vl = r(58900);

      function gl(e) {
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

      function bl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? bl(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = gl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _l = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wl(wl({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _l(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xl(e.variantClassNames, e => xl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cl = jl({
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
        Pl = jl({
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
        Ol = jl({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rl = jl({
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
        Sl = jl({
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
        Nl = jl({
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
      const Dl = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        Il = (0, I.createContext)(null);

      function zl() {
        const e = (0, I.useContext)(Il);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Tl = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: s = !1,
          status: a = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, I.useState)("text"), u = `${(0,I.useId)()}-label`, f = `${(0,I.useId)()}-input`, p = `${(0,I.useId)()}-description`, m = (0, I.useRef)(null), h = (0, I.useRef)(Dl), y = (0, q.mergeProps)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), v = e ? z.DX : "div";
          return (0, N.jsx)(Il.Provider, {
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
        kl = (0, I.forwardRef)(({
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
          } = zl(), u = d && !o, f = (0, q.mergeProps)({
            id: s.id || c,
            htmlFor: s.htmlFor || l,
            "data-testid": e,
            className: Nl({
              showAsterisk: u,
              isDisabled: i
            })
          }, s), p = t ? z.DX : "label";
          return (0, N.jsx)(z.s6, {
            enabled: n,
            children: (0, N.jsx)(p, {
              ref: a,
              ...f,
              children: r
            })
          })
        }),
        El = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s
          } = zl(), a = (0, q.mergeProps)({
            "data-testid": e,
            className: Ol({
              isDisabled: s
            })
          }, n), i = t ? z.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...a,
            children: r
          })
        }),
        Ll = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            isReadOnly: a,
            status: i
          } = zl(), d = (0, q.mergeProps)({
            "data-testid": e,
            className: (0, D.clsx)(Cl({
              isDisabled: s,
              isReadOnly: a,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? z.DX : "div";
          return (0, N.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Al = (0, I.forwardRef)(({
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
          } = zl();
          (0, I.useEffect)(() => b(l), []);
          const j = "invalid" === h,
            C = (0, q.mergeProps)({
              disabled: f,
              readOnly: p,
              required: m,
              id: v,
              type: w,
              spellCheck: !1,
              placeholder: a,
              "aria-labelledby": (0, q.joinStrings)(y, i),
              "aria-describedby": (0, q.joinStrings)(g, d),
              "data-testid": e,
              className: (0, D.clsx)(Sl({
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
            P = (0, vl.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: s
            }),
            O = (0, xe.UP)(r && n ? P : null, x, u),
            R = t ? z.DX : "input";
          return (0, N.jsx)(R, {
            ref: O,
            ...C
          })
        }),
        Vl = (0, I.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, s) => {
          const {
            isDisabled: a
          } = zl(), i = (0, q.mergeProps)({
            size: "LG",
            "data-testid": r,
            className: (0, D.clsx)(Rl({
              side: n,
              isDisabled: a
            }), "foundry_8oytzo0")
          }, o), d = t ? z.DX : ot[e];
          return (0, N.jsx)(d, {
            ref: s,
            ...i
          })
        }),
        Ml = (0, I.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = zl(), n = (0, q.mergeProps)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, D.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, N.jsx)(S.K, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        Fl = (0, I.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: s,
            inputRef: a,
            focusState: i
          } = zl(), d = "password" === o, l = d ? e : t;
          (0, I.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, q.mergeProps)({
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
          return (0, N.jsxs)(Br, {
            children: [(0, N.jsx)(qr, {
              children: (0, N.jsx)(Ml, {
                ref: n,
                ...c
              })
            }), (0, N.jsxs)(Xr, {
              side: "bottom",
              align: "end",
              children: [l, (0, N.jsx)(Gr, {})]
            })]
          })
        }),
        Bl = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: s,
            descriptionId: a
          } = zl(), i = (0, q.mergeProps)({
            className: Pl({
              isDisabled: s
            }),
            "data-testid": t,
            id: a
          }, n), d = r ? z.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ql = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: s,
            status: a
          } = zl(), i = (0, q.mergeProps)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: s,
            status: a
          }, n), d = r ? z.DX : $o;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Xl = Qo,
        Gl = Jo;
      var Kl = r(68196);

      function Zl(e) {
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

      function Hl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Wl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hl(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zl(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ul(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $l = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wl(Wl({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ul(e.variantClassNames, e => Ul(e, e => e.split(" ")[0]))
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
      const Ql = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Jl = (0, I.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const s = (0, I.useRef)(null),
            a = (0, xe.UP)(s, o),
            {
              buttonProps: i
            } = (0, xe.sL)(n, s),
            d = (0, q.mergeProps)({
              "data-testid": r,
              className: $l({
                size: t
              })
            }, i);
          return (0, N.jsx)("button", {
            ref: a,
            ...d,
            children: (0, N.jsx)(ot.X, {
              label: e,
              size: Ql[t]
            })
          })
        });

      function ec(e) {
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

      function tc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function rc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? tc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = ec(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function nc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var oc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = rc(rc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) oc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nc(e.variantClassNames, e => nc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ac = sc({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ic = sc({
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
        dc = sc({
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
      const lc = (0, I.createContext)(null);

      function cc() {
        const e = (0, I.useContext)(lc);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const uc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, s) => {
          const a = e ? z.DX : "div",
            i = (0, q.mergeProps)({
              className: dc({
                status: r,
                background: n
              })
            }, o);
          return (0, N.jsx)(lc.Provider, {
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
        fc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.mergeProps)({
              className: "foundry_1m368qha"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        pc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.mergeProps)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        mc = {
          danger: ot.CircleX,
          information: ot.Info,
          success: ot.CircleCheck,
          warning: ot.TriangleAlert
        },
        hc = (0, I.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = cc(), s = e ? z.DX : mc[o], a = (0, q.mergeProps)({
            className: ic({
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
        yc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.mergeProps)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        vc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.mergeProps)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        gc = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, I.useRef)(null),
            a = (0, xe.UP)(s, o),
            i = e ? z.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Kl.i)(n, s),
            c = (0, q.mergeProps)({
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
        bc = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? z.DX : "div",
            a = (0, q.mergeProps)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        wc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const s = e ? z.DX : "div";
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": t,
            className: (0, D.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        xc = (0, I.forwardRef)((e, t) => {
          const {
            background: r
          } = cc(), n = "none" !== r, o = (0, q.mergeProps)({
            className: ac({
              hasBackground: n
            })
          }, e);
          return (0, N.jsx)(Jl, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var _c = r(64634),
        jc = r(7697),
        Cc = r(17497);

      function Pc(e) {
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

      function Oc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Rc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Oc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Pc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Sc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Nc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Dc = "foundry_qmpv6yv",
        Ic = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rc(Rc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Nc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sc(e.variantClassNames, e => Sc(e, e => e.split(" ")[0]))
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
      const zc = (0, I.createContext)(null);

      function Tc() {
        const e = (0, I.useContext)(zc);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const kc = (0, I.forwardRef)(({
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
              const t = (0, xe.rl)(),
                r = (0, xe.jt)(),
                [n, o] = (0, I.useState)([]),
                s = n.length,
                [a, i] = (0, I.useState)(0),
                [d, l] = (0, _c.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && s > 1
                }, [(0, jc.A)(), (0, Cc.A)()]),
                c = (0, I.useRef)(0),
                u = (0, I.useRef)(!1),
                f = n[a],
                p = (0, I.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                m = (0, I.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                h = (0, I.useCallback)((e, t) => {
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
              return (0, I.useEffect)(() => {
                l && (m(l), h(l), l.on("reInit", m).on("reInit", h).on("scroll", h).on("slideFocus", h))
              }, [l, h]), (0, I.useEffect)(() => {
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
          (0, I.useEffect)(() => {
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
            h = (0, q.mergeProps)({
              className: Ic(c)
            }, m, i),
            y = e ? z.DX : "div";
          return (0, N.jsx)(zc.Provider, {
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
        Ec = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Lc = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Tc();
          if (!e && !n || !n?.status) return null;
          const o = e || Ec[n.status],
            s = ot[o],
            a = (0, q.mergeProps)({
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
        Ac = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.mergeProps)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        }),
        Vc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...s
        }, a) => {
          const i = e ? z.DX : "div",
            d = (0, q.mergeProps)({
              className: "foundry_qmpv6yo"
            }, s);
          return (0, N.jsx)(i, {
            ref: a,
            "data-testid": t,
            ...d
          })
        }),
        Mc = (0, I.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: s,
            emblaApi: a
          } = Tc(), i = (0, q.mergeProps)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, xe.UP)(s, n), l = I.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, I.useEffect)(() => {
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
        Fc = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, I.useRef)(null),
            a = (0, xe.UP)(s, o),
            i = e ? z.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Kl.i)(n, s),
            c = (0, q.mergeProps)({
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
        Bc = (0, I.forwardRef)((e, t) => {
          const r = (0, q.mergeProps)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, N.jsx)(Jl, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        qc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const s = e ? z.DX : "div",
            a = (0, q.mergeProps)({
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
        Xc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Tc(), s = (0, q.mergeProps)({
            className: Dc
          }, t);
          return (0, N.jsx)(S.K, {
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
        Gc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Tc(), s = (0, q.mergeProps)({
            className: Dc
          }, t);
          return (0, N.jsx)(S.K, {
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
        Kc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Tc(), s = (0, q.mergeProps)({
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

      function Zc(e) {
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

      function Hc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Wc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hc(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zc(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $c = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wc(Wc({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uc(e.variantClassNames, e => Uc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qc = $c({
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
        Jc = $c({
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
        eu = $c({
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
      const tu = (0, I.createContext)(null);

      function ru() {
        const e = (0, I.useContext)(tu);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const nu = (0, I.forwardRef)(({
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
            u = (0, q.mergeProps)({
              className: Jc(c)
            }, d),
            f = e ? z.DX : "div";
          return (0, N.jsx)(tu.Provider, {
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
        ou = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: s
          } = ru(), a = e ? z.DX : "div", i = (0, q.mergeProps)({
            className: eu({
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
        su = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.mergeProps)({
              className: "foundry_oahh5812"
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        au = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = ru(), s = (0, q.mergeProps)({
            className: Qc({
              background: n
            })
          }, t);
          return (0, N.jsx)(S.K, {
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
      var iu = "ToastProvider",
        [du, lu, cu] = (0, Ur.N)("Toast"),
        [uu, fu] = (0, ft.A)("Toast", [cu]),
        [pu, mu] = uu(iu),
        hu = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: s = 50,
            announcerContainer: a,
            children: i
          } = e, [d, l] = I.useState(null), [c, u] = I.useState(0), f = I.useRef(!1), p = I.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${iu}\`. Expected non-empty \`string\`.`), (0, N.jsx)(du.Provider, {
            scope: t,
            children: (0, N.jsx)(pu, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: s,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: I.useCallback(() => u(e => e + 1), []),
              onToastRemove: I.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: a,
              children: i
            })
          })
        };
      hu.displayName = iu;
      var yu = "ToastViewport",
        vu = ["F8"],
        gu = "toast.viewportPause",
        bu = "toast.viewportResume",
        wu = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = vu,
            label: o = "Notifications ({hotkey})",
            ...s
          } = e, a = mu(yu, r), i = lu(r), d = I.useRef(null), l = I.useRef(null), c = I.useRef(null), u = I.useRef(null), f = (0, ut.s)(t, u, a.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = a.toastCount > 0;
          I.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), I.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (m && e && t) {
              const r = () => {
                  if (!a.isClosePausedRef.current) {
                    const e = new CustomEvent(gu);
                    t.dispatchEvent(e), a.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (a.isClosePausedRef.current) {
                    const e = new CustomEvent(bu);
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
          const h = I.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Vu(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return I.useEffect(() => {
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
                  Mu(o.slice(s + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, h]), (0, N.jsxs)(jt, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: m ? void 0 : "none"
            },
            children: [m && (0, N.jsx)(_u, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Mu(h({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, N.jsx)(du.Slot, {
              scope: r,
              children: (0, N.jsx)(pt.sG.ol, {
                tabIndex: -1,
                ...s,
                ref: f
              })
            }), m && (0, N.jsx)(_u, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Mu(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      wu.displayName = yu;
      var xu = "ToastFocusProxy",
        _u = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, s = mu(xu, r);
          return (0, N.jsx)(or.s6, {
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
      _u.displayName = xu;
      var ju = "Toast",
        Cu = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            ...a
          } = e, [i, d] = (0, nr.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: s,
            caller: ju
          });
          return (0, N.jsx)(tr.C, {
            present: r || i,
            children: (0, N.jsx)(Ru, {
              open: i,
              ...a,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, mt.c)(e.onPause),
              onResume: (0, mt.c)(e.onResume),
              onSwipeStart: (0, ct.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ct.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ct.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ct.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      Cu.displayName = ju;
      var [Pu, Ou] = uu(ju, {
        onClose() {}
      }), Ru = I.forwardRef((e, t) => {
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
        } = e, h = mu(ju, r), [y, v] = I.useState(null), g = (0, ut.s)(t, e => v(e)), b = I.useRef(null), w = I.useRef(null), x = o || h.duration, _ = I.useRef(0), j = I.useRef(x), C = I.useRef(0), {
          onToastAdd: P,
          onToastRemove: O
        } = h, R = (0, mt.c)(() => {
          const e = y?.contains(document.activeElement);
          e && h.viewport?.focus(), a()
        }), S = I.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(R, e))
        }, [R]);
        I.useEffect(() => {
          const e = h.viewport;
          if (e) {
            const t = () => {
                S(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(gu, r), e.addEventListener(bu, t), () => {
              e.removeEventListener(gu, r), e.removeEventListener(bu, t)
            }
          }
        }, [h.viewport, x, d, l, S]), I.useEffect(() => {
          s && !h.isClosePausedRef.current && S(x)
        }, [s, x, h.isClosePausedRef, S]), I.useEffect(() => (P(), () => O()), [P, O]);
        const D = I.useMemo(() => y ? Eu(y) : null, [y]);
        return h.viewport ? (0, N.jsxs)(N.Fragment, {
          children: [D && (0, N.jsx)(Su, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: D
          }), (0, N.jsx)(Pu, {
            scope: r,
            onClose: R,
            children: Jt.createPortal((0, N.jsx)(du.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(_t, {
                asChild: !0,
                onEscapeKeyDown: (0, ct.mK)(i, () => {
                  h.isFocusedToastEscapeKeyDownRef.current || R(), h.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, N.jsx)(pt.sG.li, {
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
                  onKeyDown: (0, ct.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, R()))
                  }),
                  onPointerDown: (0, ct.mK)(e.onPointerDown, e => {
                    0 === e.button && (b.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ct.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = l, Lu("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Au(l, h.swipeDirection, d) ? (w.current = l, Lu("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (b.current = null)
                  }),
                  onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, b.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Au(t, h.swipeDirection, h.swipeThreshold) ? Lu("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Lu("toast.swipeCancel", f, n, {
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
      }), Su = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = mu(ju, t), [s, a] = I.useState(!1), [i, d] = I.useState(!1);
        return function(e = () => {}) {
          const t = (0, mt.c)(e);
          (0, Nt.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => a(!0)), I.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, N.jsx)(er, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, N.jsx)(or.s6, {
            ...n,
            children: s && (0, N.jsxs)(N.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Nu = I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(pt.sG.div, {
          ...n,
          ref: t
        })
      });
      Nu.displayName = "ToastDescription";
      var Du = "ToastAction",
        Iu = I.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, N.jsx)(ku, {
            altText: r,
            asChild: !0,
            children: (0, N.jsx)(Tu, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Du}\`. Expected non-empty \`string\`.`), null)
        });
      Iu.displayName = Du;
      var zu = "ToastClose",
        Tu = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Ou(zu, r);
          return (0, N.jsx)(ku, {
            asChild: !0,
            children: (0, N.jsx)(pt.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ct.mK)(e.onClick, o.onClose)
            })
          })
        });
      Tu.displayName = zu;
      var ku = I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, N.jsx)(pt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Eu(e) {
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
              } else t.push(...Eu(e))
          }
        }), t
      }

      function Lu(e, t, r, {
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
        }), n ? (0, pt.hO)(o, s) : o.dispatchEvent(s)
      }
      var Au = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          s = n > o;
        return "left" === t || "right" === t ? s && n > r : !s && o > r
      };

      function Vu(e) {
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

      function Mu(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Fu = hu,
        Bu = wu,
        qu = Cu,
        Xu = Nu,
        Gu = Iu,
        Ku = Tu;

      function Zu(e) {
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

      function Hu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Wu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hu(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Zu(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $u = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wu(Wu({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uu(e.variantClassNames, e => Uu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Qu = $u({
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
        Ju = $u({
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
        ef = $u({
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
      const tf = ({
          testId: e,
          ...t
        }) => (0, N.jsx)(Fu, {
          "data-testid": e,
          ...t
        }),
        rf = (0, I.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
            className: ef({
              position: r
            })
          }, n);
          return (0, N.jsx)(Bu, {
            ref: o,
            "data-testid": t,
            ...s,
            children: e
          })
        }),
        nf = (0, I.createContext)(null);

      function of() {
        const e = (0, I.useContext)(nf);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const sf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, s) => {
          const a = e ? z.DX : qu,
            i = (0, q.mergeProps)({
              className: Ju({
                appearance: n
              })
            }, o);
          return (0, N.jsx)(nf.Provider, {
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
        af = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = e ? z.DX : Xu,
            a = (0, q.mergeProps)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...a,
            children: t
          })
        }),
        df = {
          danger: ot.CircleX,
          information: ot.Info,
          success: ot.CircleCheck,
          warning: ot.TriangleAlert,
          avocado: ot.CircleCheck
        },
        lf = (0, I.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = of(), o = e ? z.DX : df[n], s = (0, q.mergeProps)({
            className: Qu({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, N.jsx)(o, {
            ref: r,
            ...s
          })
        }),
        cf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, N.jsx)(Gu, {
            ref: o,
            "data-testid": r,
            ...s,
            children: e ? (0, N.jsx)(z.DX, {
              children: t
            }) : (0, N.jsx)(R.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        uf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, s) => {
          const a = (0, q.mergeProps)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, N.jsx)(Ku, {
            ref: s,
            "data-testid": r,
            ...a,
            children: e ? (0, N.jsx)(z.DX, {
              children: t
            }) : (0, N.jsx)(Jl, {
              size: "SM",
              label: n
            })
          })
        });
      var ff = r(30259);

      function pf(e) {
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

      function mf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function hf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mf(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = pf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function yf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var vf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        gf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = hf(hf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) vf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return yf(e.variantClassNames, e => yf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        bf = gf({
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
        wf = gf({
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
        xf = gf({
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

      function _f() {
        const e = (0, I.useContext)(jf);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const jf = (0, I.createContext)(null),
        Cf = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, s) => {
          const a = (0, q.mergeProps)({
              className: xf({
                size: n
              })
            }, o),
            i = r ? z.DX : "ol";
          return (0, N.jsx)(jf.Provider, {
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
        Pf = (0, I.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, I.useRef)(null),
            {
              size: i
            } = _f(),
            {
              itemProps: d
            } = (0, ff.I)({
              isCurrent: e,
              children: t
            }, a),
            l = r ? z.DX : "a",
            c = (0, q.mergeProps)({
              className: (0, D.clsx)(bf({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, N.jsx)("li", {
            className: wf({
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
        Of = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e];
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Rf = (0, I.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, s) => {
          const [a, i] = (0, I.useState)(r), {
            size: d
          } = _f(), l = (0, q.mergeProps)({
            className: wf({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, N.jsx)("li", {
            ref: s,
            ...l,
            children: (0, N.jsxs)(ea, {
              open: a,
              onOpenChange: () => i(!a),
              children: [(0, N.jsx)(ra, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, N.jsx)(la, {
                children: (0, N.jsx)(ua, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, N.jsx)(ja, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Sf = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = t ? z.DX : Ia,
            a = (0, q.mergeProps)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: e
          })
        });

      function Nf(e) {
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

      function Df(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function If(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Df(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Nf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Df(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = If(If({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Tf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zf(e.variantClassNames, e => zf(e, e => e.split(" ")[0]))
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
      const Ef = (0, I.createContext)(null);

      function Lf() {
        const e = (0, I.useContext)(Ef);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Af = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...s
        }, a) => {
          const i = e ? z.DX : "div",
            d = (0, q.mergeProps)({
              className: kf({
                appearance: r,
                type: o,
                size: n
              })
            }, s);
          return (0, N.jsx)(Ef.Provider, {
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
        Vf = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? z.DX : "div",
            s = (0, q.mergeProps)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            ...s
          })
        }),
        Mf = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.mergeProps)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        Ff = () => {
          const e = (0, xe.Ub)(q.breakpoints.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Bf = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function qf(e) {
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

      function Xf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Gf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xf(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = qf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Kf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gf(Gf({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Zf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kf(e.variantClassNames, e => Kf(e, e => e.split(" ")[0]))
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
      const Wf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, N.jsx)(Es, {
            ref: r,
            ...n
          })
        }),
        Uf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, N.jsx)(Ls, {
            ref: r,
            ...n
          })
        }),
        Yf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, N.jsx)(As, {
            ref: r,
            ...n
          })
        }),
        $f = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, xe.rl)(),
            o = (0, q.mergeProps)({
              "data-testid": e,
              className: Hf({
                isTouchDevice: n
              })
            }, t);
          return (0, N.jsx)(Vs, {
            ref: r,
            ...o
          })
        }),
        Qf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Ms, {
            ref: r,
            ...n
          })
        });

      function Jf(e) {
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

      function ep(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ep(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Jf(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ep(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function rp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var np = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        op = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tp(tp({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) np(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rp(e.variantClassNames, e => rp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        sp = op({
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
        ap = op({
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
      const ip = (0, I.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, I.createRef)(),
          dialogSpringRef: (0, lt.$9)(),
          overlaySpringRef: (0, lt.$9)()
        }),
        dp = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: s,
          onCloseTransitionComplete: a,
          ...i
        }) => {
          const [d, l] = (0, xe.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, xe.ZC)(d);
          return (0, N.jsx)(ip.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: s,
              onCloseTransitionComplete: a,
              contentId: (0, I.useId)(),
              descriptionId: (0, I.useId)(),
              triggerRef: (0, I.useRef)(null),
              dialogSpringRef: (0, lt.U2)(),
              overlaySpringRef: (0, lt.U2)()
            },
            children: (0, N.jsx)(lp, {
              ...i
            })
          })
        },
        lp = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, I.useContext)(ip), n = (0, q.mergeProps)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, N.jsx)(Un, {
            ...n
          })
        },
        cp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, I.useContext)(ip), s = (0, xe.UP)(o, r), a = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, N.jsx)($n, {
            ...a,
            ref: s
          })
        }),
        up = e => (0, N.jsx)(to, {
          forceMount: !0,
          ...e
        }),
        fp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: s
          } = (0, I.useContext)(ip), a = Bf(), i = (0, xe.jt)(), d = (0, lt.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: a(0),
            enter: a(100),
            leave: a(0),
            config: lt.$W.stiff,
            immediate: i || s
          }), l = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, lt.CS)(no);
          return (0, I.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, N.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        pp = (0, I.forwardRef)(({
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
          } = (0, I.useContext)(ip), v = (0, xe.rl)(), g = (0, xe.jt)(), b = (0, I.useRef)(null), w = Ff(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const s = Bf(),
              a = Ff(),
              i = (0, I.useRef)();
            return {
              bindDrag: (0, Ce.i3)(({
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
                  config: lt.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...s(0),
                  immediate: !1,
                  config: lt.$W.stiff
                })) : (t.start({
                  ...a(100),
                  immediate: !1,
                  config: lt.$W.stiff
                }), r.start({
                  ...s(100),
                  immediate: !1,
                  config: lt.$W.stiff
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
          }), _ = (0, lt.pn)(a, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: a ? 100 : 0,
            config: lt.$W.stiff,
            ref: h,
            immediate: g || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : m?.()
            }
          });
          (0, I.useEffect)(() => {
            h.start()
          }, [a]);
          const j = (0, xe.UP)(b, s),
            C = v && !g && !n && x(),
            P = (0, q.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            O = (0, lt.CS)(io);
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
        mp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, N.jsx)(po, {
            ref: r,
            ...n
          })
        }),
        hp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(ho, {
            ref: r,
            ...n
          })
        }),
        yp = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(Wf, {
            ref: n,
            ...o,
            children: [(0, N.jsx)(Uf, {
              className: "foundry_xov33ni",
              children: e
            }), (0, N.jsx)(Yf, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, N.jsx)($f, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        vp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            s = e ? z.DX : "div";
          return (0, N.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        gp = (0, I.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              "data-testid": r,
              className: sp({
                align: e
              })
            }, n),
            a = t ? z.DX : "header";
          return (0, N.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        bp = (0, I.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            "data-testid": e,
            className: ap({
              appearance: t
            })
          }, r);
          return (0, N.jsx)(po, {
            ref: n,
            ...o
          })
        }),
        wp = (0, I.forwardRef)((e, t) => {
          const r = (0, q.mergeProps)({
            className: "foundry_xov33n4"
          }, e);
          return (0, N.jsx)(S.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        xp = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            s = t ? (0, N.jsx)(z.DX, {
              ref: n,
              ...o
            }) : (0, N.jsx)(Jl, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, N.jsx)(vo, {
            asChild: !0,
            children: s
          })
        }),
        _p = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            s = e ? z.DX : "div";
          return (0, N.jsx)(s, {
            ref: n,
            ...o
          })
        }),
        jp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            s = e ? z.DX : "footer";
          return (0, N.jsx)(s, {
            ref: n,
            ...o
          })
        });
      var Cp = "Avatar",
        [Pp, Op] = (0, ft.A)(Cp),
        Rp = [0, () => {}],
        [Sp, Np] = Pp(Cp),
        Dp = I.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, s] = I.useState("idle"), [a, i] = function() {
            let e = Rp; {
              e = I.useState(0);
              const [t] = e, r = I.useRef(!1);
              I.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, N.jsx)(Sp, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: s,
            imageCount: a,
            setImageCount: i,
            children: (0, N.jsx)(pt.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Dp.displayName = Cp;
      var Ip = "AvatarImage",
        zp = I.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...s
          } = e, a = Np(Ip, r);
          var i;
          i = a.setImageCount, I.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, Nt.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  s = e => {
                    const t = e.currentTarget;
                    r(kp(t))
                  },
                  a = () => r("error");
                return t.addEventListener("load", s), t.addEventListener("error", a), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(kp(t)), () => {
                  t.removeEventListener("load", s), t.removeEventListener("error", a), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: s.referrerPolicy,
              crossOrigin: s.crossOrigin,
              loadingStatus: a.imageLoadingStatus,
              setLoadingStatus: a.setImageLoadingStatus
            }),
            l = (0, mt.c)(e => {
              o?.(e)
            }),
            c = I.useRef(d);
          return (0, Nt.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, N.jsx)(pt.sG.img, {
            ...s,
            ref: t,
            src: n
          }) : null
        });
      zp.displayName = Ip;
      var Tp = "AvatarFallback";

      function kp(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Ep(e) {
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

      function Lp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ap(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lp(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Ep(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      I.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, s = Np(Tp, r), [a, i] = I.useState(void 0 === n);
        return I.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), a && "loaded" !== s.imageLoadingStatus ? (0, N.jsx)(pt.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Tp;
      var Mp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ap(Ap({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vp(e.variantClassNames, e => Vp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Bp = Fp({
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
        qp = "var(--foundry_v912w22)",
        Xp = "var(--foundry_v912w23)",
        Gp = Fp({
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
        Kp = Fp({
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
        Zp = "var(--foundry_v912w21)",
        Hp = "var(--foundry_v912w20)",
        Wp = Fp({
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
      const Up = (0, I.createContext)(null);

      function Yp() {
        const e = (0, I.useContext)(Up);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const $p = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: s = !1,
          ...a
        }, i) => {
          const d = (0, q.mergeProps)({
            "data-testid": r,
            "aria-disabled": s,
            className: Bp({
              isDisabled: s
            }),
            asChild: e
          }, a);
          return (0, N.jsx)(Up.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: s
            },
            children: (0, N.jsx)(Dp, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Qp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: s,
            isDisabled: a
          } = Yp(), [i, d] = (0, I.useState)(!1);
          (0, I.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, q.mergeProps)({
              className: Gp({
                isDisabled: a
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, N.jsx)("span", {
            className: Kp({
              size: s,
              isDisabled: a,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, N.jsx)(zp, {
              ref: o,
              ...c
            })
          })
        }),
        Jp = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, I.useRef)(null),
            {
              size: s,
              status: a,
              isDisabled: i
            } = Yp(),
            d = a || "online",
            l = (0, xe.UP)(o, n),
            c = (0, q.mergeProps)({
              "data-testid": e,
              "aria-hidden": !0,
              className: Wp({
                status: d,
                size: s,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [Hp]: t?.online,
                [Zp]: t?.offline,
                [qp]: t?.away,
                [Xp]: t?.busy
              })
            }, r);
          return (0, N.jsx)("span", {
            ref: l,
            ...c
          })
        });

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
        sm = (e => {
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
      const am = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            a = e ? z.DX : "nav";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        im = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            a = e ? z.DX : "div";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        }),
        dm = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, s) => {
          const a = (0, I.useRef)(null),
            i = (0, xe.UP)(a, s),
            {
              linkProps: d,
              isPressed: l
            } = (0, Kl.i)(o, a),
            c = (0, q.mergeProps)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, D.clsx)(sm({
                isActive: r
              }))
            }, d),
            u = e ? z.DX : "a";
          return (0, N.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        lm = (0, I.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(dm, {
            ref: n,
            ...o,
            children: (0, N.jsx)(ot.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        cm = (0, I.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(dm, {
            ref: n,
            ...o,
            children: (0, N.jsx)(ot.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        um = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.mergeProps)({
              role: "listitem",
              "data-testid": r,
              className: "foundry_2jlbzt7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj"
            }, n),
            s = e ? z.DX : "span";
          return (0, N.jsx)(s, {
            ...o,
            children: t || "..."
          })
        },
        fm = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            s = e ? z.DX : "div";
          return (0, N.jsx)(s, {
            ...o,
            children: t
          })
        },
        pm = (0, I.createContext)(null);

      function mm() {
        const e = (0, I.useContext)(pm);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const hm = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, I.useId)(),
            s = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            a = e ? z.DX : "div";
          return (0, N.jsx)(pm.Provider, {
            value: {
              labelId: o
            },
            children: (0, N.jsx)(a, {
              ...s,
              children: t
            })
          })
        },
        ym = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = mm(), a = (0, q.mergeProps)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? z.DX : "label";
          return (0, N.jsx)(i, {
            ref: o,
            id: s,
            ...a,
            children: t
          })
        }),
        vm = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: s
          } = mm(), a = (0, q.mergeProps)({
            "aria-labelledby": s,
            className: "foundry_2jlbztc"
          }, n), i = e ? z.DX : si;
          return (0, N.jsxs)(i, {
            ...a,
            children: [(0, N.jsxs)(li, {
              ref: o,
              children: [(0, N.jsx)(ci, {
                placeholder: r
              }), (0, N.jsx)(ui, {})]
            }), (0, N.jsx)(gi, {
              children: (0, N.jsx)(ai, {
                children: (0, N.jsx)(di, {
                  children: t
                })
              })
            })]
          })
        }),
        gm = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              "data-testid": r
            }, n),
            a = e ? z.DX : hi;
          return (0, N.jsx)(a, {
            ...s,
            ref: o,
            children: (0, N.jsx)(yi, {
              children: t
            })
          })
        }),
        bm = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            a = e ? z.DX : "p";
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: t
          })
        });
      var wm = "rovingFocusGroup.onEntryFocus",
        xm = {
          bubbles: !1,
          cancelable: !0
        },
        _m = "RovingFocusGroup",
        [jm, Cm, Pm] = (0, Ur.N)(_m),
        [Om, Rm] = (0, ft.A)(_m, [Pm]),
        [Sm, Nm] = Om(_m),
        Dm = I.forwardRef((e, t) => (0, N.jsx)(jm.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, N.jsx)(jm.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, N.jsx)(Im, {
              ...e,
              ref: t
            })
          })
        }));
      Dm.displayName = _m;
      var Im = I.forwardRef((e, t) => {
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
          } = e, f = I.useRef(null), p = (0, ut.s)(t, f), m = (0, Hr.jH)(s), [h, y] = (0, nr.i)({
            prop: a,
            defaultProp: i ?? null,
            onChange: d,
            caller: _m
          }), [v, g] = I.useState(!1), b = (0, mt.c)(l), w = Cm(r), x = I.useRef(!1), [_, j] = I.useState(0);
          return I.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(wm, b), () => e.removeEventListener(wm, b)
          }, [b]), (0, N.jsx)(Sm, {
            scope: r,
            orientation: n,
            dir: m,
            loop: o,
            currentTabStopId: h,
            onItemFocus: I.useCallback(e => y(e), [y]),
            onItemShiftTab: I.useCallback(() => g(!0), []),
            onFocusableItemAdd: I.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: I.useCallback(() => j(e => e - 1), []),
            children: (0, N.jsx)(pt.sG.div, {
              tabIndex: v || 0 === _ ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ct.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, ct.mK)(e.onFocus, e => {
                const t = !x.current;
                if (e.target === e.currentTarget && t && !v) {
                  const t = new CustomEvent(wm, xm);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Em(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, ct.mK)(e.onBlur, () => g(!1))
            })
          })
        }),
        zm = "RovingFocusGroupItem",
        Tm = I.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: s,
            children: a,
            ...i
          } = e, d = (0, Ct.B)(), l = s || d, c = Nm(zm, r), u = c.currentTabStopId === l, f = Cm(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: m,
            currentTabStopId: h
          } = c;
          return I.useEffect(() => {
            if (n) return p(), () => m()
          }, [n, p, m]), (0, N.jsx)(jm.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, N.jsx)(pt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, ct.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, ct.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, ct.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : km[n]
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
                  setTimeout(() => Em(s))
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
      Tm.displayName = zm;
      var km = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Em(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var Lm = Dm,
        Am = Tm,
        Vm = "Toggle",
        Mm = I.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...s
          } = e, [a, i] = (0, nr.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: Vm
          });
          return (0, N.jsx)(pt.sG.button, {
            type: "button",
            "aria-pressed": a,
            "data-state": a ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...s,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, () => {
              e.disabled || i(!a)
            })
          })
        });
      Mm.displayName = Vm;
      var Fm = "ToggleGroup",
        [Bm, qm] = (0, ft.A)(Fm, [Rm]),
        Xm = Rm(),
        Gm = I.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, N.jsx)(Hm, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, N.jsx)(Wm, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Fm}\``)
        });
      Gm.displayName = Fm;
      var [Km, Zm] = Bm(Fm), Hm = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, nr.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: Fm
        });
        return (0, N.jsx)(Km, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: I.useMemo(() => a ? [a] : [], [a]),
          onItemActivate: i,
          onItemDeactivate: I.useCallback(() => i(""), [i]),
          children: (0, N.jsx)($m, {
            ...s,
            ref: t
          })
        })
      }), Wm = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...s
        } = e, [a, i] = (0, nr.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: Fm
        }), d = I.useCallback(e => i((t = []) => [...t, e]), [i]), l = I.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, N.jsx)(Km, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: a,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, N.jsx)($m, {
            ...s,
            ref: t
          })
        })
      });
      Gm.displayName = Fm;
      var [Um, Ym] = Bm(Fm), $m = I.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: s,
          dir: a,
          loop: i = !0,
          ...d
        } = e, l = Xm(r), c = (0, Hr.jH)(a), u = {
          dir: c,
          ...d
        };
        return (0, N.jsx)(Um, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, N.jsx)(Lm, {
            asChild: !0,
            ...l,
            orientation: s,
            dir: c,
            loop: i,
            children: (0, N.jsx)(pt.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, N.jsx)(pt.sG.div, {
            ...u,
            ref: t
          })
        })
      }), Qm = "ToggleGroupItem", Jm = I.forwardRef((e, t) => {
        const r = Zm(Qm, e.__scopeToggleGroup),
          n = Ym(Qm, e.__scopeToggleGroup),
          o = Xm(e.__scopeToggleGroup),
          s = r.value.includes(e.value),
          a = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: s,
            disabled: a
          },
          d = I.useRef(null);
        return n.rovingFocus ? (0, N.jsx)(Am, {
          asChild: !0,
          ...o,
          focusable: !a,
          active: s,
          ref: d,
          children: (0, N.jsx)(eh, {
            ...i,
            ref: t
          })
        }) : (0, N.jsx)(eh, {
          ...i,
          ref: t
        })
      });
      Jm.displayName = Qm;
      var eh = I.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, s = Zm(Qm, r), a = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === s.type ? a : void 0;
        return (0, N.jsx)(Mm, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? s.onItemActivate(n) : s.onItemDeactivate(n)
          }
        })
      });

      function th(e) {
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

      function rh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rh(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = th(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function oh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ah = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nh(nh({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oh(e.variantClassNames, e => oh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ih = "var(--foundry_zxwkyk2)",
        dh = "var(--foundry_zxwkyk3)",
        lh = ah({
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
        ch = ah({
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
        uh = ah({
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
        fh = "var(--foundry_zxwkyk1)",
        ph = "var(--foundry_zxwkyk0)",
        mh = ah({
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
      const hh = (0, I.createContext)(null);

      function yh() {
        const e = (0, I.useContext)(hh);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const vh = (0, I.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
            "data-testid": e,
            className: lh({
              size: t
            }),
            type: r
          }, n);
          return (0, N.jsx)(hh.Provider, {
            value: {
              size: t
            },
            children: (0, N.jsx)(Gm, {
              ref: o,
              ...s
            })
          })
        }),
        gh = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = yh(), o = (0, q.mergeProps)({
            "data-testid": e,
            className: ch({
              size: n
            })
          }, t);
          return (0, N.jsx)(Jm, {
            ref: r,
            ...o
          })
        }),
        bh = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = yh(), o = ot[e];
          return (0, N.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        wh = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
            "data-testid": e,
            className: mh({
              status: r
            }),
            style: (0, X.DI)({
              [ph]: t?.online,
              [fh]: t?.offline,
              [ih]: t?.away,
              [dh]: t?.busy
            })
          }, n);
          return (0, N.jsx)("span", {
            ref: o,
            ...s
          })
        }),
        xh = (0, I.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = yh(), s = (0, q.mergeProps)({
            "data-testid": e,
            className: uh({
              variant: t,
              size: o
            })
          }, r);
          return (0, N.jsx)("span", {
            ref: n,
            ...s
          })
        });
      var _h = "Popover",
        [jh, Ch] = (0, ft.A)(_h, [Tt]),
        Ph = Tt(),
        [Oh, Rh] = jh(_h),
        Sh = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !1
          } = e, i = Ph(t), d = I.useRef(null), [l, c] = I.useState(!1), [u, f] = (0, nr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: _h
          });
          return (0, N.jsx)(Ut, {
            ...i,
            children: (0, N.jsx)(Oh, {
              scope: t,
              contentId: (0, Ct.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: I.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: I.useCallback(() => c(!0), []),
              onCustomAnchorRemove: I.useCallback(() => c(!1), []),
              modal: a,
              children: r
            })
          })
        };
      Sh.displayName = _h;
      var Nh = "PopoverAnchor",
        Dh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Rh(Nh, r), s = Ph(r), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: i
          } = o;
          return I.useEffect(() => (a(), () => i()), [a, i]), (0, N.jsx)(Yt, {
            ...s,
            ...n,
            ref: t
          })
        });
      Dh.displayName = Nh;
      var Ih = "PopoverTrigger",
        zh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Rh(Ih, r), s = Ph(r), a = (0, ut.s)(t, o.triggerRef), i = (0, N.jsx)(pt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": Zh(o.open),
            ...n,
            ref: a,
            onClick: (0, ct.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, N.jsx)(Yt, {
            asChild: !0,
            ...s,
            children: i
          })
        });
      zh.displayName = Ih;
      var Th = "PopoverPortal",
        [kh, Eh] = jh(Th, {
          forceMount: void 0
        }),
        Lh = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, s = Rh(Th, t);
          return (0, N.jsx)(kh, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(tr.C, {
              present: r || s.open,
              children: (0, N.jsx)(er, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Lh.displayName = Th;
      var Ah = "PopoverContent",
        Vh = I.forwardRef((e, t) => {
          const r = Eh(Ah, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            s = Rh(Ah, e.__scopePopover);
          return (0, N.jsx)(tr.C, {
            present: n || s.open,
            children: s.modal ? (0, N.jsx)(Fh, {
              ...o,
              ref: t
            }) : (0, N.jsx)(Bh, {
              ...o,
              ref: t
            })
          })
        });
      Vh.displayName = Ah;
      var Mh = (0, rr.TL)("PopoverContent.RemoveScroll"),
        Fh = I.forwardRef((e, t) => {
          const r = Rh(Ah, e.__scopePopover),
            n = I.useRef(null),
            o = (0, ut.s)(t, n),
            s = I.useRef(!1);
          return I.useEffect(() => {
            const e = n.current;
            if (e) return (0, Xn.Eq)(e)
          }, []), (0, N.jsx)(qn.A, {
            as: Mh,
            allowPinchZoom: !0,
            children: (0, N.jsx)(qh, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ct.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), s.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ct.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                s.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ct.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        Bh = I.forwardRef((e, t) => {
          const r = Rh(Ah, e.__scopePopover),
            n = I.useRef(!1),
            o = I.useRef(!1);
          return (0, N.jsx)(qh, {
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
        qh = I.forwardRef((e, t) => {
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
          } = e, f = Rh(Ah, r), p = Ph(r);
          return (0, Bn.Oh)(), (0, N.jsx)(kn, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: (0, N.jsx)(gt, {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, N.jsx)($t, {
                "data-state": Zh(f.open),
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
        Xh = "PopoverClose",
        Gh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Rh(Xh, r);
          return (0, N.jsx)(pt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      Gh.displayName = Xh;
      var Kh = I.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Ph(r);
        return (0, N.jsx)(Qt, {
          ...o,
          ...n,
          ref: t
        })
      });

      function Zh(e) {
        return e ? "open" : "closed"
      }
      Kh.displayName = "PopoverArrow";
      var Hh = Sh,
        Wh = Dh,
        Uh = zh,
        Yh = Lh,
        $h = Vh,
        Qh = Gh,
        Jh = Kh;

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
            var n, o, s;
            n = e, o = t, s = r[t], (o = ey(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
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
        sy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ry(ry({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) oy(l, n, e.defaultVariants) && (r += " " + c);
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
      const ay = (0, I.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        iy = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, s] = (0, xe.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), a = (0, q.mergeProps)({
            open: o,
            onOpenChange: s
          }, n);
          return (0, N.jsx)(ay.Provider, {
            value: {
              open: o,
              setOpen: s
            },
            children: (0, N.jsx)(Hh, {
              ...a
            })
          })
        },
        dy = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, N.jsx)(Uh, {
            ref: r,
            ...n
          })
        }),
        ly = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        cy = (0, I.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: s
          } = (0, I.useContext)(ay), a = (0, I.useRef)(null), i = (0, xe.UP)(a, o), {
            buttonProps: d
          } = (0, xe.sL)(n, a), l = (0, q.mergeProps)({
            "data-testid": r,
            className: sy({
              size: t
            })
          }, d), c = s ? ot.ChevronUp : ot.ChevronDown;
          return (0, N.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, N.jsx)(c, {
              label: "",
              size: ly[t]
            })]
          })
        }),
        uy = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Wh, {
            ref: r,
            ...n
          })
        }),
        fy = (0, I.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, N.jsx)($h, {
            ref: n,
            ...o
          })
        }),
        py = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, N.jsx)(Jh, {
            ref: r,
            ...n
          })
        }),
        my = e => (0, N.jsx)(Yh, {
          ...e
        }),
        hy = e => (0, N.jsx)(Qh, {
          ...e
        });

      function yy(e) {
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

      function gy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? vy(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = yy(o)) in n ? Object.defineProperty(n, o, {
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

      function by(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = gy(gy({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wy(l, n, e.defaultVariants) && (r += " " + c);
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
        _y = "var(--foundry_rmorls2)",
        jy = xy({
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
        Cy = "var(--foundry_rmorls0)",
        Py = xy({
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
        Ry = "var(--foundry_rmorls1)",
        Sy = xy({
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
        Ny = "Progress",
        [Dy, Iy] = (0, ft.A)(Ny),
        [zy, Ty] = Dy(Ny),
        ky = I.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: s = Ay,
            ...a
          } = e;
          !o && 0 !== o || Fy(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Fy(o) ? o : 100;
          null === n || By(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = By(n, i) ? n : null,
            l = My(d) ? s(d, i) : void 0;
          return (0, N.jsx)(zy, {
            scope: r,
            value: d,
            max: i,
            children: (0, N.jsx)(pt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": My(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Vy(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...a,
              ref: t
            })
          })
        });
      ky.displayName = Ny;
      var Ey = "ProgressIndicator",
        Ly = I.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Ty(Ey, r);
          return (0, N.jsx)(pt.sG.div, {
            "data-state": Vy(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function Ay(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Vy(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function My(e) {
        return "number" == typeof e
      }

      function Fy(e) {
        return My(e) && !isNaN(e) && e > 0
      }

      function By(e, t) {
        return My(e) && !isNaN(e) && e <= t && e >= 0
      }
      Ly.displayName = Ey;
      var qy = ky,
        Xy = Ly;
      const Gy = (0, I.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Ky = (0, I.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const s = Math.round(r / t * 100),
            a = "number" != typeof r || "number" != typeof t;
          return (0, N.jsx)(Gy.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: s,
              isInvalid: a
            },
            children: (0, N.jsx)(Zy, {
              ...n,
              ref: o
            })
          })
        }),
        Zy = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            s = t ? z.DX : "div";
          return (0, N.jsx)(s, {
            ...o,
            ref: n
          })
        }),
        Hy = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: s,
            size: a
          } = (0, I.useContext)(Gy), i = (0, q.mergeProps)({
            "data-testid": e,
            className: Py({
              size: a
            }),
            value: o,
            max: s,
            style: (0, X.DI)({
              [Oy]: t
            }),
            "data-track": !0
          }, r);
          return (0, N.jsx)(qy, {
            ref: n,
            ...i
          })
        }),
        Wy = (0, I.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: s,
            isInvalid: a
          } = (0, I.useContext)(Gy), i = a ? "-100%" : `-${100-s}%`, d = (0, q.mergeProps)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [Cy]: i,
              [Ry]: `${t}ms`,
              [_y]: r
            })
          }, n);
          return (0, N.jsx)(Xy, {
            ref: o,
            ...d
          })
        }),
        Uy = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, I.useContext)(Gy), s = (0, q.mergeProps)({
            "data-testid": t,
            className: jy({
              size: o
            }),
            "aria-hidden": !0
          }, r), a = e ? z.DX : "span";
          return (0, N.jsx)(a, {
            ref: n,
            ...s
          })
        }),
        Yy = (0, I.forwardRef)(({
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
          } = (0, I.useContext)(Gy), l = (0, q.mergeProps)({
            "data-testid": e,
            className: jy({
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
              className: Sy({
                size: a
              }),
              children: "%"
            })]
          }) : (0, N.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", s]
          })
        });
      var $y = r(41488);

      function Qy(e) {
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

      function Jy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ev(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jy(Object(r), !0).forEach(function(t) {
            var n, o, s;
            n = e, o = t, s = r[t], (o = Qy(o)) in n ? Object.defineProperty(n, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = s
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function tv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var rv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        nv = "foundry_1vzsjid2",
        ov = "foundry_1vzsjidm",
        sv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ev(ev({}, e.defaultVariants), t);
            for (var o in n) {
              var s, a = null !== (s = n[o]) && void 0 !== s ? s : e.defaultVariants[o];
              if (null != a) {
                var i = a;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) rv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tv(e.variantClassNames, e => tv(e, e => e.split(" ")[0]))
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
      const av = (0, I.createContext)({
          mode: "solid",
          layer: 0
        }),
        iv = (0, I.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, N.jsx)(av.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, N.jsx)(dv, {
            ...n,
            ref: o,
            type: r
          })
        })),
        dv = (0, I.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            "data-testid": e,
            type: t
          }, r);
          return (0, N.jsx)($y.Root, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        lv = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, I.useContext)(av), s = (0, q.mergeProps)({
            className: sv({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, N.jsx)($y.Item, {
            ref: r,
            ...s
          })
        }),
        cv = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.mergeProps)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, N.jsx)($y.Header, {
            ref: r,
            ...n
          })
        }),
        uv = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.mergeProps)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, N.jsx)($y.Trigger, {
            ref: n,
            ...o,
            children: r.asChild && (0, I.isValidElement)(e) ? (0, I.cloneElement)(e, {
              children: (0, N.jsx)("span", {
                className: nv,
                children: e.props.children
              })
            }) : (0, N.jsx)("span", {
              className: nv,
              children: e
            })
          })
        }),
        fv = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.mergeProps)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        pv = (0, I.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.mergeProps)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        mv = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const s = (0, q.mergeProps)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, N.jsx)($y.Content, {
            ref: o,
            ...s,
            children: t && (0, I.isValidElement)(e) ? (0, I.cloneElement)(e, {
              children: (0, N.jsx)("div", {
                className: ov,
                children: e.props.children
              })
            }) : (0, N.jsx)("div", {
              className: ov,
              children: e
            })
          })
        })
    }
  }
]);