try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04712711-38ef-417c-b3c2-e4613f68dcda", e._sentryDebugIdIdentifier = "sentry-dbid-04712711-38ef-417c-b3c2-e4613f68dcda")
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
  [7887], {
    82983(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => R,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => b,
        Body: () => ce,
        Breadcrumbs: () => m,
        Button: () => P.$,
        Checkbox: () => d,
        ChipGroup: () => j,
        Code: () => fe,
        Dialog: () => w,
        Display: () => pe,
        Divider: () => B,
        Dropdown: () => a,
        Heading: () => he,
        IconButton: () => N.K,
        Label: () => me,
        Lightbox: () => o,
        Loader: () => te,
        Pagination: () => _,
        Popover: () => C,
        ProgressBar: () => O,
        RadioGroup: () => u,
        ScrollArea: () => g,
        Spinner: () => re.y,
        Switch: () => s,
        Tag: () => h,
        Text: () => we,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => ge,
        Toast: () => y,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Zr,
        Content: () => Kr,
        Portal: () => Hr,
        Root: () => Xr,
        Trigger: () => Gr,
        useTooltipContext: () => qr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Eo,
        Close: () => Fo,
        Content: () => Do,
        Controls: () => Lo,
        CssVars: () => Xo,
        Download: () => qo,
        Image: () => ko,
        Keyboard: () => Vo,
        LightboxContext: () => xo,
        OpenIcon: () => Po,
        Overlay: () => So,
        Portal: () => No,
        Reset: () => Bo,
        Root: () => _o,
        RootImplContext: () => jo,
        Thumbnail: () => Ro,
        Trigger: () => Oo,
        Zoom: () => Mo,
        ZoomPan: () => Io
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => di,
        Description: () => hi,
        Hint: () => yi,
        Label: () => vi,
        Option: () => mi,
        OptionIcon: () => gi,
        OptionText: () => bi,
        Portal: () => wi,
        Root: () => ii,
        ScrollArea: () => ci,
        StatusIcon: () => _i,
        StatusRoot: () => xi,
        StatusText: () => ji,
        Trigger: () => ui,
        TriggerIcon: () => pi,
        TriggerText: () => fi,
        Viewport: () => li,
        useDropdownContext: () => si
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => qi,
        Input: () => Fi,
        Label: () => Bi,
        Root: () => Mi,
        useSwitchContext: () => Vi
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Ki,
        CheckMD: () => Gi,
        CheckXL: () => Zi,
        DashLG: () => Wi,
        DashMD: () => Hi,
        DashXL: () => Ui
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => pd,
        ErrorText: () => vd,
        Group: () => md,
        GroupDescription: () => gd,
        GroupErrorText: () => xd,
        GroupItems: () => wd,
        GroupLabel: () => bd,
        Input: () => ud,
        Label: () => fd,
        Root: () => cd,
        useGroupContext: () => yd
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Ad,
        Hint: () => Vd,
        Input: () => Ld,
        Label: () => Ed,
        Root: () => kd,
        RootContext: () => Td,
        StatusIcon: () => Fd,
        StatusRoot: () => Md,
        StatusText: () => Bd,
        useTextAreaContext: () => zd
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => pl,
        DotMD: () => fl,
        DotXL: () => vl
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => nl,
        Input: () => yl,
        Label: () => rl,
        Option: () => hl,
        OptionDescription: () => bl,
        OptionLabel: () => ml,
        Options: () => tl,
        Root: () => el,
        StatusIcon: () => al,
        StatusRoot: () => ol,
        StatusText: () => sl,
        useRadioGroupContext: () => Jd
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Bl,
        Control: () => Vl,
        Description: () => Xl,
        Hint: () => Al,
        Icon: () => Fl,
        Input: () => Ml,
        Label: () => Ll,
        PasswordButton: () => ql,
        Root: () => El,
        StatusIcon: () => Kl,
        StatusRoot: () => Gl,
        StatusText: () => Zl
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => hc,
        CloseButton: () => jc,
        Description: () => gc,
        ErrorText: () => _c,
        Footer: () => xc,
        Header: () => vc,
        Icon: () => mc,
        Link: () => wc,
        Root: () => pc,
        RootContext: () => uc,
        Title: () => bc,
        iconStatusMap: () => yc,
        useAlertContext: () => fc
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => Fc,
        CloseButton: () => Xc,
        Description: () => Mc,
        Icon: () => Vc,
        Link: () => qc,
        PaginationCounter: () => Hc,
        PaginationNav: () => Gc,
        PaginationNextButton: () => Kc,
        PaginationPrevButton: () => Zc,
        PaginationViewport: () => Bc,
        Root: () => Lc,
        RootContext: () => kc,
        iconStatusMap: () => Ac,
        useAlertBannerContext: () => Ec
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => du,
        Icon: () => iu,
        Label: () => su,
        Root: () => au,
        RootContext: () => nu,
        useTagContext: () => ou
      });
      var y = {};
      r.r(y), r.d(y, {
        Action: () => ff,
        CloseButton: () => pf,
        Description: () => lf,
        Icon: () => uf,
        Provider: () => nf,
        Root: () => df,
        RootContext: () => af,
        Viewport: () => of,
        iconAppearanceMap: () => cf,
        useToastContext: () => sf
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => Nf,
        Item: () => Pf,
        OverflowMenu: () => Sf,
        OverflowMenuItem: () => Df,
        Root: () => Rf,
        RootContext: () => Of,
        useBreadcrumbsContext: () => Cf
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => Bf,
        Label: () => Ff,
        Root: () => Mf,
        useBadgeContext: () => Vf
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => ep,
        Root: () => $f,
        Scrollbar: () => Qf,
        Thumb: () => Jf,
        Viewport: () => Yf
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => Cp,
        CloseButton: () => jp,
        Content: () => hp,
        Description: () => mp,
        Footer: () => Op,
        Header: () => wp,
        HeaderButton: () => _p,
        HeaderTitle: () => xp,
        Layout: () => gp,
        Overlay: () => vp,
        Portal: () => pp,
        Root: () => cp,
        ScrollArea: () => bp,
        Title: () => yp,
        Trigger: () => fp
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => ev,
        Root: () => Jp,
        StatusIndicator: () => tv,
        useAvatarContext: () => Qp
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => vv,
        Dropdown: () => gv,
        DropdownLabel: () => bv,
        Ellipsis: () => pv,
        Item: () => cv,
        Label: () => xv,
        Next: () => fv,
        Option: () => wv,
        Pages: () => lv,
        Prev: () => uv,
        ResultsPerPage: () => mv,
        Root: () => dv
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => xh,
        Item: () => wh,
        Label: () => jh,
        Root: () => gh,
        StatusIndicator: () => _h,
        useChipGroupContext: () => bh
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => py,
        Arrow: () => hy,
        Close: () => my,
        Content: () => vy,
        Portal: () => yy,
        Root: () => ly,
        RootContext: () => dy,
        Trigger: () => cy,
        TriggerButton: () => fy
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => $y,
        Label: () => Yy,
        Root: () => Hy,
        Track: () => Uy,
        UnitLabel: () => Qy
      });
      var R = {};
      r.r(R), r.d(R, {
        Content: () => cb,
        Header: () => sb,
        Icon: () => db,
        Item: () => ab,
        Root: () => nb,
        Trigger: () => ib,
        TriggerIcon: () => lb
      });
      var P = r(72976),
        N = r(69066),
        S = r(39793),
        D = r(4921),
        I = r(4637),
        T = r(86361);

      function z(e) {
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
            var n, o, a;
            n = e, o = t, a = r[t], (o = z(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : A.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = A.variantClassNames[n][s];
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
        testId: a,
        ...s
      }, i) => {
        const d = "horizontal" !== t || n ? "div" : "hr",
          l = n || "hr" === d ? void 0 : "separator",
          c = o ? T.DX : d;
        return (0, S.jsx)(c, {
          ref: i,
          className: (0, D.$)(F({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var q = r(36205),
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
      var U = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $ = "var(--foundry_9dxgbc2)",
        Y = "var(--foundry_9dxgbc3)",
        Q = (e => {
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
        size: a = "MD",
        ...s
      }, i) => {
        const d = (0, G.zQ)(),
          l = "string" == typeof a ? a : a?.[d] ?? a.default ?? "MD",
          c = (0, q.v6)({
            className: Q({
              size: l
            }),
            "data-testid": t,
            style: (0, X.DI)({
              [J]: n?.pulseColorBackground,
              [ee]: n?.pulseColorForeground,
              [$]: n?.gradientColorBackground,
              [Y]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? T.DX : "div";
        return (0, S.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, S.jsx)(T.xV, {
            children: r
          }) : (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, S.jsx)("div", {
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

      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oe(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ne(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach(function(t) {
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
              n = ae(ae({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
              return se(e.variantClassNames, e => se(e, e => e.split(" ")[0]))
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
      }, a) => {
        const s = e ? T.DX : "p",
          i = (0, q.v6)({
            className: le({
              size: n,
              appearance: r
            })
          }, o);
        return (0, S.jsx)(s, {
          ref: a,
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
          const a = e ? T.DX : "p",
            s = (0, q.v6)({
              className: ue({
                appearance: r
              })
            }, n);
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        pe = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "h1",
            a = (0, q.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var ve = de({
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
        const a = e ? T.DX : `h${7===t?6:t}`,
          s = (0, q.v6)(n, {
            className: ve({
              level: t
            })
          });
        return (0, S.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
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
      const me = (0, I.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? T.DX : "p",
          i = (0, q.v6)({
            className: ye({
              size: n,
              appearance: r
            })
          }, o);
        return (0, S.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...i
        })
      });
      var be = de({
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
        we = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? T.DX : ge[r] || "span",
            s = (0, q.v6)(n, {
              className: be({
                semantic: r
              })
            });
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var xe = r(2432),
        _e = r(93529),
        je = r(99206),
        Ce = r(34811);
      const Oe = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Re = ([e, t]) => ({
        x: e,
        y: t
      }), Pe = (e, t) => (e.x = t.x, e.y = t.y, e), Ne = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Se = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), De = (e, t, r) => Math.min(Math.max(e, t), r);
      var Ie = r(90004);

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

      function ze(e, t) {
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
          t % 2 ? ze(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Te(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(t) {
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
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
      _e.os.registerPlugin(je.L);
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = Se(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return Se(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return Se(this.initial + this.step * this.steps)
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Pe(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Pe(this.prevTap, {
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
          e.src = this.thumbnail.currentSrc ?? "", await Oe(e)
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
      class $e {
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
      class Ye extends Event {
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
          if (!this.dispatch(e, new Ye(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Re(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Pe(this.startPan, this.slide.pan)
        }
        change({
          origin: e,
          da: [t]
        }) {
          const r = this.slide.zoomLevels.min,
            n = this.slide.zoomLevels.max;
          this.zoomPoint = Re(e);
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
            a = Pe({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Pe({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Pe(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || n || o) && (Pe(this.slide.pan, s), this.slide.setZoomLevel(r))
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
          dragOptions: a
        }) {
          super(), this.width = e, this.height = t, this.opener = new Ue({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new We({
            options: a,
            slide: this
          }), this.scrollWheel = new $e({
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
          e = Se(e), r || (e = De(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), Ne(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), Ne(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Pe(this.pan, this.bounds.center)
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
      const at = (0, Xe.YK)({
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
      const it = (0, I.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, Ie.vC)(e, e => r?.(e), [r]), (0, S.jsx)(ce, {
        size: "XS",
        className: (0, D.$)("foundry_bc732x0", {
          [st]: t
        }),
        asChild: !0,
        children: (0, S.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var dt, lt = r(71433),
        ct = r(39467),
        ut = r(64239),
        ft = r(54958),
        pt = r(80082),
        vt = r(94660),
        ht = r(61144),
        yt = "dismissableLayer.update",
        mt = I.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set,
          dismissableSurfaces: new Set
        }),
        bt = I.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            deferPointerDownOutside: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = I.useContext(mt), [u, f] = I.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = I.useState({}), h = (0, ut.s)(t, e => f(e)), y = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(m), g = u ? y.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = g >= b, _ = I.useRef(!1), j = function(e, t) {
            const {
              ownerDocument: r = globalThis?.document,
              deferPointerDownOutside: n = !1,
              isDeferredPointerDownOutsideRef: o,
              dismissableSurfaces: a
            } = t, s = (0, vt.c)(e), i = I.useRef(!1), d = I.useRef(!1), l = I.useRef(new Map), c = I.useRef(() => {});
            return I.useEffect(() => {
              function e() {
                d.current = !1, o.current = !1, l.current.clear()
              }

              function t(e) {
                if (!d.current) return;
                const t = e.target;
                t instanceof Node && [...a].some(e => e.contains(t)) || l.current.set(e.type, !0), "click" === e.type && window.setTimeout(() => {
                  d.current && c.current()
                }, 0)
              }

              function u(e) {
                d.current && l.current.set(e.type, !1)
              }
              const f = t => {
                  if (t.target && !i.current) {
                    let a = function() {
                      r.removeEventListener("click", c.current);
                      const t = Array.from(l.current.values()).some(Boolean);
                      e(), t || xt("dismissableLayer.pointerDownOutside", s, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: t
                    };
                    d.current = !0, o.current = n && 0 === t.button, l.current.clear(), n && 0 === t.button ? (r.removeEventListener("click", c.current), c.current = a, r.addEventListener("click", c.current, {
                      once: !0
                    })) : a()
                  } else r.removeEventListener("click", c.current), e();
                  i.current = !1
                },
                p = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
              for (const e of p) r.addEventListener(e, t, !0), r.addEventListener(e, u);
              const v = window.setTimeout(() => {
                r.addEventListener("pointerdown", f)
              }, 0);
              return () => {
                window.clearTimeout(v), r.removeEventListener("pointerdown", f), r.removeEventListener("click", c.current);
                for (const e of p) r.removeEventListener(e, t, !0), r.removeEventListener(e, u)
              }
            }, [r, s, n, o, a]), {
              onPointerDownCapture: () => i.current = !0
            }
          }(e => {
            const t = e.target;
            if (!(t instanceof Node)) return;
            const r = [...c.branches].some(e => e.contains(t));
            x && !r && (a?.(e), i?.(e), e.defaultPrevented || d?.())
          }, {
            ownerDocument: p,
            deferPointerDownOutside: n,
            isDeferredPointerDownOutsideRef: _,
            dismissableSurfaces: c.dismissableSurfaces
          }), C = function(e, t = globalThis?.document) {
            const r = (0, vt.c)(e),
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
            [...c.branches].some(e => e.contains(t)) || (s?.(e), i?.(e), e.defaultPrevented || d?.())
          }, p);
          return (0, ht.U)(e => {
            g === c.layers.size - 1 && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, p), I.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (dt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), wt(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = dt))
            }
          }, [u, p, r, c]), I.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), wt())
          }, [u, c]), I.useEffect(() => {
            const e = () => v({});
            return document.addEventListener(yt, e), () => document.removeEventListener(yt, e)
          }, []), (0, S.jsx)(pt.sG.div, {
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
      bt.displayName = "DismissableLayer";
      var gt = I.forwardRef((e, t) => {
        const r = I.useContext(mt),
          n = I.useRef(null),
          o = (0, ut.s)(t, n);
        return I.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, S.jsx)(pt.sG.div, {
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
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, pt.hO)(o, a) : o.dispatchEvent(a)
      }
      gt.displayName = "DismissableLayerBranch";
      var _t = bt,
        jt = gt,
        Ct = r(94296),
        Ot = r(17966),
        Rt = r(10376),
        Pt = I.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, S.jsx)(pt.sG.svg, {
            ...a,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, S.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Pt.displayName = "Arrow";
      var Nt = Pt,
        St = r(10198),
        Dt = r(5024),
        It = "Popper",
        [Tt, zt] = (0, ft.A)(It),
        [kt, Et] = Tt(It),
        Lt = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = I.useState(null), [a, s] = I.useState(void 0);
          return (0, S.jsx)(kt, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: a,
            setPlacementState: s,
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
          } = e, a = Et(At, r), s = I.useRef(null), i = a.onAnchorChange, d = I.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, ut.s)(t, d), c = I.useRef(null);
          I.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && Wt(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, S.jsx)(pt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        });
      Vt.displayName = At;
      var Mt = "PopperContent",
        [Ft, Bt] = Tt(Mt),
        qt = I.forwardRef((e, t) => {
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
          } = e, y = Et(Mt, r), [m, b] = I.useState(null), g = (0, ut.s)(t, e => b(e)), [w, x] = I.useState(null), _ = (0, Dt.X)(w), j = _?.width ?? 0, C = _?.height ?? 0, O = n + ("center" !== a ? "-" + a : ""), R = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, P = Array.isArray(l) ? l : [l], N = P.length > 0, D = {
            padding: R,
            boundary: P.filter(Zt),
            altBoundary: N
          }, {
            refs: T,
            floatingStyles: z,
            placement: k,
            isPositioned: E,
            middlewareData: L
          } = (0, Ot.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Rt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(0, Ot.cY)({
              mainAxis: o + C,
              alignmentAxis: s
            }), d && (0, Ot.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Ot.ER)() : void 0,
              ...D
            }), d && (0, Ot.UU)({
              ...D
            }), (0, Ot.Ej)({
              ...D,
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
            }), w && (0, Ot.UE)({
              element: w,
              padding: i
            }), Ht({
              arrowWidth: j,
              arrowHeight: C
            }), f && (0, Ot.jD)({
              strategy: "referenceHidden",
              ...D,
              boundary: N ? D.boundary : void 0
            })]
          }), A = y.setPlacementState;
          (0, St.N)(() => (A(k), () => {
            A(void 0)
          }), [k, A]);
          const [V, M] = Wt(k), F = (0, vt.c)(v);
          (0, St.N)(() => {
            E && F?.()
          }, [E, F]);
          const B = L.arrow?.x,
            q = L.arrow?.y,
            X = 0 !== L.arrow?.centerOffset,
            [G, K] = I.useState();
          return (0, St.N)(() => {
            m && K(window.getComputedStyle(m).zIndex)
          }, [m]), (0, S.jsx)("div", {
            ref: T.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...z,
              transform: E ? z.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [L.transformOrigin?.x, L.transformOrigin?.y].join(" "),
              ...L.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, S.jsx)(Ft, {
              scope: r,
              placedSide: V,
              placedAlign: M,
              onArrowChange: x,
              arrowX: B,
              arrowY: q,
              shouldHideArrow: X,
              children: (0, S.jsx)(pt.sG.div, {
                "data-side": V,
                "data-align": M,
                ...h,
                ref: g,
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
          } = e, o = Bt(Xt, r), a = Gt[o.placedSide];
          return (0, S.jsx)("span", {
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
            children: (0, S.jsx)(Nt, {
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
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = Wt(r), c = {
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

      function Wt(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Ut = Lt,
        $t = Vt,
        Yt = qt,
        Qt = Kt,
        Jt = r(84017),
        er = I.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, a] = I.useState(!1);
          (0, St.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? Jt.createPortal((0, S.jsx)(pt.sG.div, {
            ...n,
            ref: t
          }), s) : null
        });
      er.displayName = "Portal";
      var tr = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = I.useState(), n = I.useRef(null), o = I.useRef(e), a = I.useRef("none"), s = e ? "mounted" : "unmounted", [i, d] = function(e, t) {
            return I.useReducer((e, r) => t[e][r] ?? e, e)
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
          return I.useEffect(() => {
            const e = nr(n.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, St.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                s = nr(t);
              d(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, d]), (0, St.N)(() => {
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
            ref: I.useCallback(e => {
              n.current = e ? getComputedStyle(e) : null, r(e)
            }, [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : I.Children.only(r), a = function(...e) {
          const t = I.useRef(e);
          return t.current = e, I.useCallback(e => {
            const r = t.current;
            let n = !1;
            const o = r.map(t => {
              const r = rr(t, e);
              return n || "function" != typeof r || (n = !0), r
            });
            if (n) return () => {
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                "function" == typeof t ? t() : rr(r[e], null)
              }
            }
          }, [])
        }(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? I.cloneElement(o, {
          ref: a
        }) : null
      };

      function rr(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function nr(e) {
        return e?.animationName || "none"
      }
      tr.displayName = "Presence";
      var or = r(17172),
        ar = r(17038),
        sr = r(92023),
        [ir, dr] = (0, ft.A)("Tooltip", [zt]),
        lr = zt(),
        cr = "TooltipProvider",
        ur = 700,
        fr = "tooltip.open",
        [pr, vr] = ir(cr),
        hr = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = ur,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = I.useRef(!0), i = I.useRef(!1), d = I.useRef(0);
          return I.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, S.jsx)(pr, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: I.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: I.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: I.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      hr.displayName = cr;
      var yr = "Tooltip",
        [mr, br] = ir(yr),
        gr = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = vr(yr, e.__scopeTooltip), l = lr(t), [c, u] = I.useState(null), f = (0, Ct.B)(), p = I.useRef(0), v = s ?? d.disableHoverableContent, h = i ?? d.delayDuration, y = I.useRef(!1), [m, b] = (0, ar.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(fr))) : d.onClose(), a?.(e)
            },
            caller: yr
          }), g = I.useMemo(() => m ? y.current ? "delayed-open" : "instant-open" : "closed", [m]), w = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, y.current = !1, b(!0)
          }, [b]), x = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
          }, [b]), _ = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              y.current = !0, b(!0), p.current = 0
            }, h)
          }, [h, b]);
          return I.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, S.jsx)(Ut, {
            ...l,
            children: (0, S.jsx)(mr, {
              scope: t,
              contentId: f,
              open: m,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: I.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: I.useCallback(() => {
                v ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, v]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: v,
              children: r
            })
          })
        };
      gr.displayName = yr;
      var wr = "TooltipTrigger",
        xr = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = br(wr, r), a = vr(wr, r), s = lr(r), i = I.useRef(null), d = (0, ut.s)(t, i, o.onTriggerChange), l = I.useRef(!1), c = I.useRef(!1), u = I.useCallback(() => l.current = !1, []);
          return I.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, S.jsx)($t, {
            asChild: !0,
            ...s,
            children: (0, S.jsx)(pt.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ct.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
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
      xr.displayName = wr;
      var _r = "TooltipPortal",
        [jr, Cr] = ir(_r, {
          forceMount: void 0
        }),
        Or = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = br(_r, t);
          return (0, S.jsx)(jr, {
            scope: t,
            forceMount: r,
            children: (0, S.jsx)(tr, {
              present: r || a.open,
              children: (0, S.jsx)(er, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Or.displayName = _r;
      var Rr = "TooltipContent",
        Pr = I.forwardRef((e, t) => {
          const r = Cr(Rr, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = br(Rr, e.__scopeTooltip);
          return (0, S.jsx)(tr, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, S.jsx)(Tr, {
              side: o,
              ...a,
              ref: t
            }) : (0, S.jsx)(Nr, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Nr = I.forwardRef((e, t) => {
          const r = br(Rr, e.__scopeTooltip),
            n = vr(Rr, e.__scopeTooltip),
            o = I.useRef(null),
            a = (0, ut.s)(t, o),
            [s, i] = I.useState(null),
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
          return I.useEffect(() => () => f(), [f]), I.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), I.useEffect(() => {
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
          }, [d, c, s, l, f]), (0, S.jsx)(Tr, {
            ...e,
            ref: a
          })
        }),
        [Sr, Dr] = ir(yr, {
          isInside: !1
        }),
        Ir = (0, or.Dc)("TooltipContent"),
        Tr = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = br(Rr, r), l = lr(r), {
            onClose: c
          } = d;
          return I.useEffect(() => (document.addEventListener(fr, c), () => document.removeEventListener(fr, c)), [c]), I.useEffect(() => {
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
          }, [d.trigger, c]), (0, S.jsx)(bt, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, S.jsxs)(Yt, {
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
              children: [(0, S.jsx)(Ir, {
                children: n
              }), (0, S.jsx)(Sr, {
                scope: r,
                isInside: !0,
                children: (0, S.jsx)(sr.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Pr.displayName = Rr;
      var zr = "TooltipArrow",
        kr = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = lr(r);
          return Dr(zr, r).isInside ? null : (0, S.jsx)(Qt, {
            ...o,
            ...n,
            ref: t
          })
        });
      kr.displayName = zr;
      var Er = hr,
        Lr = gr,
        Ar = xr,
        Vr = Or,
        Mr = Pr,
        Fr = kr;
      const Br = (0, I.createContext)(null);

      function qr() {
        const e = (0, I.useContext)(Br);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Xr = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, xe.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, S.jsx)(Er, {
            delayDuration: t,
            children: (0, S.jsx)(Br.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, S.jsx)(Lr, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        Gr = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, S.jsx)(Ar, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        Kr = (0, I.forwardRef)(({
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
          } = qr(), c = (0, xe.jt)(), u = (0, lt.CS)(Mr), f = (0, lt.pn)(l, {
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
          }), p = (0, q.v6)({
            "data-testid": e,
            side: t,
            align: n,
            sticky: s,
            sideOffset: r,
            alignOffset: o,
            avoidCollisions: a,
            className: "foundry_h3lgaa0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }, i);
          return f(e => (0, S.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        Zr = (0, I.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, q.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, S.jsx)(Fr, {
            ...r,
            ref: t
          })
        }),
        Hr = Vr;
      var Wr = r(3852),
        Ur = r(99136),
        $r = r(52184);

      function Yr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, ft.A)(t),
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
            } = e, n = I.useRef(null), a = I.useRef(new Map).current;
            return (0, S.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, or.TL)(i),
          l = I.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, ut.s)(t, o.collectionRef);
            return (0, S.jsx)(d, {
              ref: s,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, or.TL)(c),
          p = I.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = I.useRef(null), i = (0, ut.s)(t, s), d = a(c, r);
            return I.useEffect(() => (d.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              d.itemMap.delete(s)
            })), (0, S.jsx)(f, {
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
          return I.useCallback(() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
          }, [r.collectionRef, r.itemMap])
        }, n]
      }
      Map;
      var Qr = ["PageUp", "PageDown"],
        Jr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        en = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        tn = "Slider",
        [rn, nn, on] = Yr(tn),
        [an, sn] = (0, ft.A)(tn, [on]),
        [dn, ln] = an(tn),
        cn = I.forwardRef((e, t) => {
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
          } = e, y = I.useRef(new Set), m = I.useRef(0), b = I.useRef(!1), g = "horizontal" === s ? pn : vn, [w = [], x] = (0, ar.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...y.current];
              t[m.current]?.focus({
                preventScroll: !0,
                focusVisible: b.current
              }), b.current = !1, u(e)
            }
          }), _ = I.useRef(w);

          function j(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = function(e) {
                if (!Number.isFinite(e)) return 0;
                const t = e.toString();
                if (t.includes("e")) {
                  const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
                  return Math.max(0, n.length - o)
                }
                const r = t.split(".")[1];
                return r ? r.length : 0
              }(a),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, s),
              l = (0, Wr.q)(i, [n, o]);
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
                }(n, d * a)) {
                m.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && f(n), t ? n : e
              }
              return e
            })
          }
          return (0, S.jsx)(dn, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: y.current,
            values: w,
            orientation: s,
            form: v,
            children: (0, S.jsx)(rn.Provider, {
              scope: e.__scopeSlider,
              children: (0, S.jsx)(rn.Slot, {
                scope: e.__scopeSlider,
                children: (0, S.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: t,
                  onPointerDown: (0, ct.mK)(h.onPointerDown, () => {
                    i || (_.current = w, b.current = !1)
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
                    j(e, m.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[m.current];
                    w[m.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => {
                    i || (b.current = !0, j(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (b.current = !0, j(o, w.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      b.current = !0;
                      const r = Qr.includes(e.key) || e.shiftKey && Jr.includes(e.key) ? 10 : 1,
                        n = m.current;
                      j(w[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      cn.displayName = tn;
      var [un, fn] = an(tn, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), pn = I.forwardRef((e, t) => {
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
        } = e, [u, f] = I.useState(null), p = (0, ut.s)(t, e => f(e)), v = I.useRef(void 0), h = (0, Ur.jH)(o), y = "ltr" === h, m = y && !a || !y && a;

        function b(e) {
          const t = v.current || u.getBoundingClientRect(),
            o = In([0, t.width], m ? [r, n] : [n, r]);
          return v.current = t, o(e - t.left)
        }
        return (0, S.jsx)(un, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, S.jsx)(hn, {
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
              const t = en[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), vn = I.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = I.useRef(null), u = (0, ut.s)(t, c), f = I.useRef(void 0), p = !o;

        function v(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = In([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, S.jsx)(un, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, S.jsx)(hn, {
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
              const t = en[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), hn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = ln(tn, r);
        return (0, S.jsx)(pt.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, ct.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Qr.concat(Jr).includes(e.key) && (d(e), e.preventDefault())
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
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), yn = "SliderTrack", mn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = ln(yn, r);
        return (0, S.jsx)(pt.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      mn.displayName = yn;
      var bn = "SliderRange",
        gn = I.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = ln(bn, r), a = fn(bn, r), s = I.useRef(null), i = (0, ut.s)(t, s), d = o.values.length, l = o.values.map(e => Dn(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, S.jsx)(pt.sG.span, {
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
      gn.displayName = bn;
      var wn = "SliderThumb",
        [xn, _n] = an(wn),
        jn = "SliderThumbProvider";

      function Cn(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = ln(jn, t), s = nn(t), [i, d] = I.useState(null), l = I.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, Dt.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Dn(f, a.min, a.max);
        I.useEffect(() => {
          if (i) return a.thumbs.add(i), () => {
            a.thumbs.delete(i)
          }
        }, [i, a.thumbs]);
        const h = {
          value: f,
          name: p,
          form: a.form,
          isFormControl: u,
          index: l,
          thumb: i,
          onThumbChange: d,
          percent: v,
          size: c
        };
        return (0, S.jsx)(xn, {
          scope: t,
          ...h,
          children: Tn(o) ? o(h) : n
        })
      }
      Cn.displayName = jn;
      var On = "SliderThumbTrigger",
        Rn = I.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = ln(On, r), a = fn(On, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = _n(On, r), u = (0, ut.s)(t, e => c(e)), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(s, o.values.length), p = l?.[a.size], v = p ? function(e, t, r) {
            const n = e / 2;
            return (n - In([0, 50], [0, n])(t) * r) * r
          }(p, d, a.direction) : 0;
          return (0, S.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, S.jsx)(rn.ItemSlot, {
              scope: r,
              children: (0, S.jsx)(pt.sG.span, {
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
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Rn.displayName = On;
      var Pn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, S.jsx)(Cn, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(Rn, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, S.jsx)(Sn, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Pn.displayName = wn;
      var Nn = "SliderBubbleInput",
        Sn = I.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: a
          } = _n(Nn, e), s = I.useRef(null), i = (0, ut.s)(s, r), d = (0, $r.Z)(n);
          return I.useEffect(() => {
            const e = s.current;
            if (!e) return;
            const t = window.HTMLInputElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (d !== n && r) {
              const t = new Event("input", {
                bubbles: !0
              });
              r.call(e, n), e.dispatchEvent(t)
            }
          }, [d, n]), (0, S.jsx)(pt.sG.input, {
            style: {
              display: "none"
            },
            name: o,
            form: a,
            ...t,
            ref: i,
            defaultValue: n
          })
        });

      function Dn(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, Wr.q)(n, [0, 100])
      }

      function In(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Tn(e) {
        return "function" == typeof e
      }
      Sn.displayName = Nn;
      var zn = "focusScope.autoFocusOnMount",
        kn = "focusScope.autoFocusOnUnmount",
        En = {
          bubbles: !1,
          cancelable: !0
        },
        Ln = I.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = I.useState(null), l = (0, vt.c)(o), c = (0, vt.c)(a), u = I.useRef(null), f = (0, ut.s)(t, e => d(e)), p = I.useRef({
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
                  i.contains(t) ? u.current = t : Fn(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Fn(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Fn(i)
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
              Bn.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(zn, En);
                i.addEventListener(zn, l), i.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Fn(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(An(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Fn(i))
              }
              return () => {
                i.removeEventListener(zn, l), setTimeout(() => {
                  const t = new CustomEvent(kn, En);
                  i.addEventListener(kn, c), i.dispatchEvent(t), t.defaultPrevented || Fn(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(kn, c), Bn.remove(p)
                }, 0)
              }
            }
          }, [i, l, c, p]);
          const v = I.useCallback(e => {
            if (!r && !n) return;
            if (p.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = function(e) {
                  const t = An(e);
                  return [Vn(t, e), Vn(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && Fn(a, {
                select: !0
              })) : (e.preventDefault(), r && Fn(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, S.jsx)(pt.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function An(e) {
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

      function Vn(e, t) {
        for (const r of e)
          if (!Mn(r, {
              upTo: t
            })) return r
      }

      function Mn(e, {
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

      function Fn(e, {
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
      Ln.displayName = "FocusScope";
      var Bn = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = qn(e, t), e.unshift(t)
          },
          remove(t) {
            e = qn(e, t), e[0]?.resume()
          }
        }
      }();

      function qn(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Xn = r(38174),
        Gn = r(38100),
        Kn = r(45787),
        Zn = "Dialog",
        [Hn, Wn] = (0, ft.A)(Zn),
        [Un, $n] = Hn(Zn),
        Yn = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !0
          } = e, i = I.useRef(null), d = I.useRef(null), [l, c] = (0, ar.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Zn
          });
          return (0, S.jsx)(Un, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Ct.B)(),
            titleId: (0, Ct.B)(),
            descriptionId: (0, Ct.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: I.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        };
      Yn.displayName = Zn;
      var Qn = "DialogTrigger",
        Jn = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(Qn, r), a = (0, ut.s)(t, o.triggerRef);
          return (0, S.jsx)(pt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": wo(o.open),
            ...n,
            ref: a,
            onClick: (0, ct.mK)(e.onClick, o.onOpenToggle)
          })
        });
      Jn.displayName = Qn;
      var eo = "DialogPortal",
        [to, ro] = Hn(eo, {
          forceMount: void 0
        }),
        no = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = $n(eo, t);
          return (0, S.jsx)(to, {
            scope: t,
            forceMount: r,
            children: I.Children.map(n, e => (0, S.jsx)(tr, {
              present: r || a.open,
              children: (0, S.jsx)(er, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      no.displayName = eo;
      var oo = "DialogOverlay",
        ao = I.forwardRef((e, t) => {
          const r = ro(oo, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = $n(oo, e.__scopeDialog);
          return a.modal ? (0, S.jsx)(tr, {
            present: n || a.open,
            children: (0, S.jsx)(io, {
              ...o,
              ref: t
            })
          }) : null
        });
      ao.displayName = oo;
      var so = (0, or.TL)("DialogOverlay.RemoveScroll"),
        io = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(oo, r), a = function() {
            const e = I.useContext(mt),
              [t, r] = I.useState(null);
            return I.useEffect(() => {
              if (t) return e.dismissableSurfaces.add(t), () => {
                e.dismissableSurfaces.delete(t)
              }
            }, [t, e.dismissableSurfaces]), r
          }(), s = (0, ut.s)(t, a);
          return (0, S.jsx)(Gn.A, {
            as: so,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, S.jsx)(pt.sG.div, {
              "data-state": wo(o.open),
              ...n,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        lo = "DialogContent",
        co = I.forwardRef((e, t) => {
          const r = ro(lo, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = $n(lo, e.__scopeDialog);
          return (0, S.jsx)(tr, {
            present: n || a.open,
            children: a.modal ? (0, S.jsx)(uo, {
              ...o,
              ref: t
            }) : (0, S.jsx)(fo, {
              ...o,
              ref: t
            })
          })
        });
      co.displayName = lo;
      var uo = I.forwardRef((e, t) => {
          const r = $n(lo, e.__scopeDialog),
            n = I.useRef(null),
            o = (0, ut.s)(t, r.contentRef, n);
          return I.useEffect(() => {
            const e = n.current;
            if (e) return (0, Kn.Eq)(e)
          }, []), (0, S.jsx)(po, {
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
        fo = I.forwardRef((e, t) => {
          const r = $n(lo, e.__scopeDialog),
            n = I.useRef(!1),
            o = I.useRef(!1);
          return (0, S.jsx)(po, {
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
        po = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = $n(lo, r);
          return (0, Xn.Oh)(), (0, S.jsx)(S.Fragment, {
            children: (0, S.jsx)(Ln, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, S.jsx)(bt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": wo(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        vo = "DialogTitle",
        ho = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(vo, r);
          return (0, S.jsx)(pt.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      ho.displayName = vo;
      var yo = "DialogDescription",
        mo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(yo, r);
          return (0, S.jsx)(pt.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      mo.displayName = yo;
      var bo = "DialogClose",
        go = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(bo, r);
          return (0, S.jsx)(pt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function wo(e) {
        return e ? "open" : "closed"
      }
      go.displayName = bo;
      const xo = (0, I.createContext)({
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
        _o = ({
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
          const f = (0, G.Ym)(),
            p = (0, xe.rl)(),
            v = (0, I.useRef)(null),
            h = (0, I.useRef)(null),
            y = (0, I.useRef)(null),
            m = (0, I.useRef)(null),
            b = (0, I.useRef)(null),
            g = (0, I.useRef)(null),
            w = (0, I.useRef)(null),
            x = (0, I.useRef)(null),
            _ = (0, I.useRef)(null),
            j = (0, I.useRef)(null),
            C = (0, I.useRef)(null),
            O = (0, I.useRef)(null),
            R = (0, I.useRef)(null),
            P = (0, I.useRef)(null),
            N = (0, I.useRef)(null),
            D = (0, I.useRef)(null),
            T = (0, I.useRef)(null),
            z = (0, I.useRef)(null),
            k = (0, I.useRef)(null),
            [E = !1, L] = (0, xe.ic)({
              prop: t || n,
              onChange: r
            }),
            A = (0, I.useRef)(null);
          return A.current || (A.current = new tt({
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
          })), (0, S.jsx)(Xe.Dk, {
            messages: Ge,
            locale: f,
            children: (0, S.jsx)(xo.Provider, {
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
                placeholderRef: j,
                captionRef: C,
                controlsRef: O,
                closeRef: R,
                zoomRef: P,
                zoomInRef: N,
                zoomSliderRef: D,
                zoomOutRef: T,
                resetRef: z,
                downloadRef: k,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: A.current
              },
              children: (0, S.jsx)(Co, {
                ...u
              })
            })
          })
        },
        jo = (0, I.createContext)({
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
        Co = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, I.useContext)(xo), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, je.L)(), {
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
            } = (0, I.useContext)(xo), p = (0, I.useRef)(null);
            p.current || (p.current = _e.os.timeline({
              defaults: Fe
            }));
            const v = (0, I.useCallback)(e => {
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
                  [qe]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [qe]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Oe(f.current), t.closing || (_e.os.set([f.current], {
                  visibility: "visible",
                  ...Be
                }), _e.os.set([u.current], {
                  visibility: "hidden",
                  ...Be
                }))))
              }),
              y = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, I.useCallback)(async e => {
                e || (window.addEventListener("click", v), await y(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              b = (0, I.useCallback)(() => m(!1), [m]);
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
            } = (0, je.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, I.useContext)(xo), d = t(async e => {
              r.zoomTo(e), _e.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              _e.os.to([a.current], {
                opacity: e,
                [qe]: t,
                ...Be
              })
            }), p = t(async () => {
              _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              })
            }), v = (0, I.useCallback)(() => {
              n.current && o.current && (_e.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...Be
              }), _e.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...Be
              }), _e.os.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, I.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", v), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          }), u = (0, q.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, S.jsx)(jo.Provider, {
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
            children: (0, S.jsx)(Yn, {
              ...u
            })
          })
        },
        Oo = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, I.useContext)(xo),
            d = (0, xe.UP)(a, n),
            l = (0, q.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(at.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, S.jsx)(Jn, {
            ref: d,
            ...l,
            children: (0, S.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, S.jsx)(T.xV, {
                children: t
              })
            })
          })
        }),
        Ro = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, I.useContext)(xo), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? T.DX : "img";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Po = (0, I.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, I.useContext)(xo), o = (0, xe.UP)(n, r), a = (0, q.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? T.DX : ot.Maximize2;
          return (0, S.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        No = ({
          ...e
        }) => (0, S.jsx)(no, {
          ...e
        }),
        So = (0, I.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, I.useContext)(xo), o = (0, xe.UP)(n, r), a = (0, q.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, S.jsx)(ao, {
            ref: o,
            ...a
          })
        }),
        Do = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, I.useContext)(jo), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, I.useContext)(xo), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, I.useContext)(xo), [t, r] = (0, I.useState)(e.getCursor()), n = (0, I.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, I.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = [rt.xW.tokens, rt.xW.typography, rt.xW.grid, nt("dark")].join(" ");
          const c = (0, xe.UP)(a, n),
            u = (0, q.v6)(r, {
              "data-testid": e,
              onOpenAutoFocus: o,
              onCloseAutoFocus: e => ((e, t) => {
                e?.preventDefault(), t.current?.focus({
                  preventScroll: !0
                })
              })(e, i),
              className: (0, D.$)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, S.jsxs)(co, {
            ref: c,
            ...u,
            children: [(0, S.jsx)(T.s6, {
              children: (0, S.jsx)(ho, {
                children: s
              })
            }), t]
          })
        }),
        Io = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, I.useContext)(xo);
          (() => {
            const {
              contextSafe: e
            } = (0, je.L)(), {
              toggleControls: t
            } = (0, I.useContext)(jo), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, I.useContext)(xo), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (_e.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Be
              }), _e.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Be
              }), _e.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Be
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || _e.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Be
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (_e.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...Be
              }), _e.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...Be
              }), _e.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...Be
              })))
            }), c = (0, I.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, xe.iQ)({
              ref: a,
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
          const a = (0, xe.UP)(o, n),
            s = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, S.jsx)("div", {
            ref: a,
            ...s,
            children: (0, S.jsxs)(To, {
              children: [(0, S.jsx)(zo, {}), t]
            })
          })
        }),
        To = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, I.useContext)(xo), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? T.DX : "div";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        zo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, I.useContext)(xo), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? T.DX : "img";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        ko = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, I.useContext)(xo), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? T.DX : "img";
          return (0, S.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Eo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, I.useContext)(xo), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? T.DX : "p";
          return (0, S.jsx)(mo, {
            asChild: !0,
            children: (0, S.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Lo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, I.useContext)(xo);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, I.useContext)(jo);
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
          const a = (0, xe.UP)(o, n),
            s = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? T.DX : "div";
          return (0, S.jsx)(Ie.Hb, {
            children: (0, S.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ao = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, S.jsx)(S.Fragment, {
            children: n
          });
          const a = (0, q.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, S.jsxs)(Xr, {
            delayDuration: 0,
            children: [(0, S.jsx)(Gr, {
              children: n
            }), (0, S.jsxs)(Kr, {
              ...a,
              children: [(0, S.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, S.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, S.jsx)(Zr, {})]
            })]
          })
        },
        Vo = (0, I.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.v6)(e, {
            isInline: !0
          });
          return (0, S.jsx)(it, {
            ref: t,
            ...r
          })
        }),
        Mo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, I.useContext)(xo),
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
              } = (0, I.useContext)(xo), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, I.useContext)(jo), [o, a] = (0, I.useState)(!1), [s, i] = (0, I.useState)(!1), [d, l] = (0, I.useState)(0), [c, u] = (0, I.useState)(0), [f, p] = (0, I.useState)(0), v = (0, I.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), h = (0, I.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, I.useEffect)(() => (e.addEventListener("zoom", v), () => {
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
            y = (0, xe.UP)(i, a),
            m = (0, q.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? T.DX : "div";
          return (0, S.jsxs)(b, {
            ref: y,
            ...m,
            children: [(0, S.jsx)(Ao, {
              side: "left",
              enabled: r,
              content: s.formatMessage(at.ZoomInButtonLabel),
              metadata: s.formatMessage(at.ZoomInButtonTooltip, {
                shortcut: (0, S.jsx)(Vo, {
                  shortcut: "+"
                })
              }),
              children: (0, S.jsx)(N.K, {
                label: s.formatMessage(at.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Me({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, S.jsxs)(cn, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, S.jsx)(mn, {
                className: "foundry_1a74xwbu",
                children: (0, S.jsx)(gn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, S.jsx)(Ao, {
                side: "left",
                enabled: r,
                content: s.formatMessage(at.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, S.jsx)(Pn, {
                  className: "foundry_1a74xwbw",
                  children: (0, S.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, S.jsx)(Ao, {
              side: "left",
              enabled: r,
              content: s.formatMessage(at.ZoomOutButtonLabel),
              metadata: s.formatMessage(at.ZoomOutButtonTooltip, {
                shortcut: (0, S.jsx)(Vo, {
                  shortcut: "-"
                })
              }),
              children: (0, S.jsx)(N.K, {
                label: s.formatMessage(at.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Me({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, S.jsx)(T.xV, {
              children: n
            })]
          })
        }),
        Fo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, Xe.tz)(),
            {
              closeRef: s
            } = (0, I.useContext)(xo),
            i = (0, xe.UP)(s, o),
            d = (0, q.v6)(n, {
              "data-testid": e,
              className: Ve({
                styled: !t
              })
            }),
            l = t ? (0, S.jsx)(T.DX, {
              ref: i,
              ...d
            }) : (0, S.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(at.CloseButtonLabel)
            });
          return (0, S.jsx)(Ao, {
            side: "right",
            enabled: r,
            content: a.formatMessage(at.CloseButtonLabel),
            metadata: a.formatMessage(at.CloseButtonTooltip, {
              shortcut: (0, S.jsx)(Vo, {
                shortcut: "Esc"
              })
            }),
            children: (0, S.jsx)(go, {
              asChild: !0,
              children: l
            })
          })
        }),
        Bo = (0, I.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, I.useContext)(xo), {
                contextSafe: r
              } = (0, je.L)(), {
                resetZoom: n
              } = (0, I.useContext)(jo), [o, a] = (0, I.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                _e.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...Be
                })
              }), i = (0, I.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, I.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, I.useContext)(xo),
            i = (0, xe.UP)(s, n),
            d = (0, q.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, S.jsx)(Ao, {
            side: "left",
            enabled: t,
            content: o.formatMessage(at.ResetZoomButtonLabel),
            metadata: o.formatMessage(at.ResetZoomButtonTooltip, {
              shortcut: (0, S.jsx)(Vo, {
                shortcut: "R"
              })
            }),
            children: (0, S.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(at.ResetZoomButtonLabel)
            })
          })
        }),
        qo = (0, I.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, I.useContext)(xo),
            i = (0, xe.UP)(a, n),
            d = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, S.jsx)(Ao, {
            side: "left",
            enabled: t,
            content: o.formatMessage(at.DownloadButtonTooltip),
            children: (0, S.jsx)(N.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Download",
              appearance: "tertiary",
              label: o.formatMessage(at.DownloadButtonTooltip),
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
        Xo = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Go = r(98905);

      function Ko(e) {
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

      function Zo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zo(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ko(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zo(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wo(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Uo = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $o = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ho(Ho({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Uo(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wo(e.variantClassNames, e => Wo(e, e => e.split(" ")[0]))
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
      const Yo = (0, I.createContext)(null);

      function Qo() {
        const e = (0, I.useContext)(Yo);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Jo = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, q.v6)({
              className: $o({
                status: a
              }),
              "data-testid": t
            }, s),
            l = r ? T.DX : "div";
          return (0, S.jsx)(Yo.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, S.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        ea = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Qo(), a = (0, q.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ot.Check,
            invalid: ot.X,
            neutral: ot.TriangleAlert
          }, i = t ? T.DX : s[o];
          return (0, S.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        ta = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = Qo(), i = (0, q.v6)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? T.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var ra = "ScrollArea",
        [na, oa] = (0, ft.A)(ra),
        [aa, sa] = na(ra),
        ia = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = I.useState(null), [l, c] = I.useState(null), [u, f] = I.useState(null), [p, v] = I.useState(null), [h, y] = I.useState(null), [m, b] = I.useState(0), [g, w] = I.useState(0), [x, _] = I.useState(!1), [j, C] = I.useState(!1), O = (0, ut.s)(t, e => d(e)), R = (0, Ur.jH)(o);
          return (0, S.jsx)(aa, {
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
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, S.jsx)(pt.sG.div, {
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
      ia.displayName = ra;
      var da = "ScrollAreaViewport",
        la = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = sa(da, r), i = I.useRef(null), d = (0, ut.s)(t, i, s.onViewportChange);
          return (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(ca, {
              nonce: o
            }), (0, S.jsx)(pt.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, S.jsx)("div", {
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
      la.displayName = da;
      var ca = I.memo(({
          nonce: e
        }) => (0, S.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        ua = "ScrollAreaScrollbar",
        fa = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = sa(ua, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return I.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, S.jsx)(pa, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, S.jsx)(va, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, S.jsx)(ha, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, S.jsx)(ya, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      fa.displayName = ua;
      var pa = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = sa(ua, e.__scopeScrollArea), [a, s] = I.useState(!1);
          return I.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, S.jsx)(tr, {
            present: r || a,
            children: (0, S.jsx)(ha, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        va = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = sa(ua, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = Ea(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (d("SCROLL"), s()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }, [o.viewport, a, d, s]), (0, S.jsx)(tr, {
            present: r || "hidden" !== i,
            children: (0, S.jsx)(ya, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ct.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ct.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        ha = I.forwardRef((e, t) => {
          const r = sa(ua, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = I.useState(!1),
            i = "horizontal" === e.orientation,
            d = Ea(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return La(r.viewport, d), La(r.content, d), (0, S.jsx)(tr, {
            present: n || a,
            children: (0, S.jsx)(ya, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        ya = I.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = sa(ua, e.__scopeScrollArea), a = I.useRef(null), s = I.useRef(0), [i, d] = I.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Sa(i.viewport, i.content), c = {
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
              const o = Da(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return Ta([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, S.jsx)(ma, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ia(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, S.jsx)(ba, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ia(o.viewport.scrollTop, i);
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
        ma = I.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = sa(ua, e.__scopeScrollArea), [s, i] = I.useState(), d = I.useRef(null), l = (0, ut.s)(t, d, a.onScrollbarXChange);
          return I.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, S.jsx)(xa, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Da(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), za(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: Na(s.paddingLeft),
                  paddingEnd: Na(s.paddingRight)
                }
              })
            }
          })
        }),
        ba = I.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = sa(ua, e.__scopeScrollArea), [s, i] = I.useState(), d = I.useRef(null), l = (0, ut.s)(t, d, a.onScrollbarYChange);
          return I.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, S.jsx)(xa, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Da(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), za(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: Na(s.paddingTop),
                  paddingEnd: Na(s.paddingBottom)
                }
              })
            }
          })
        }),
        [ga, wa] = na(ua),
        xa = I.forwardRef((e, t) => {
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
          } = e, p = sa(ua, r), [v, h] = I.useState(null), y = (0, ut.s)(t, e => h(e)), m = I.useRef(null), b = I.useRef(""), g = p.viewport, w = n.content - n.viewport, x = (0, vt.c)(c), _ = (0, vt.c)(d), j = Ea(u, 10);

          function C(e) {
            if (m.current) {
              const t = e.clientX - m.current.left,
                r = e.clientY - m.current.top;
              l({
                x: t,
                y: r
              })
            }
          }
          return I.useEffect(() => {
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
          }, [g, v, w, x]), I.useEffect(_, [n, _]), La(v, j), La(p.content, j), (0, S.jsx)(ga, {
            scope: r,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: (0, vt.c)(a),
            onThumbPointerUp: (0, vt.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, vt.c)(i),
            children: (0, S.jsx)(pt.sG.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ct.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, ct.mK)(e.onPointerMove, C),
              onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        _a = "ScrollAreaThumb",
        ja = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = wa(_a, e.__scopeScrollArea);
          return (0, S.jsx)(tr, {
            present: r || o.hasThumb,
            children: (0, S.jsx)(Ca, {
              ref: t,
              ...n
            })
          })
        }),
        Ca = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = sa(_a, r), s = wa(_a, r), {
            onThumbPositionChange: i
          } = s, d = (0, ut.s)(t, e => s.onThumbChange(e)), l = I.useRef(void 0), c = Ea(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return I.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = ka(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, S.jsx)(pt.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
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
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ct.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      ja.displayName = _a;
      var Oa = "ScrollAreaCorner",
        Ra = I.forwardRef((e, t) => {
          const r = sa(Oa, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, S.jsx)(Pa, {
            ...e,
            ref: t
          }) : null
        });
      Ra.displayName = Oa;
      var Pa = I.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = sa(Oa, r), [a, s] = I.useState(0), [i, d] = I.useState(0), l = Boolean(a && i);
        return La(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), La(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), l ? (0, S.jsx)(pt.sG.div, {
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

      function Na(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Sa(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Da(e) {
        const t = Sa(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Ia(e, t, r = "ltr") {
        const n = Da(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, Wr.q)(e, d);
        return Ta([0, s], [0, i])(l)
      }

      function Ta(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function za(e, t) {
        return e > 0 && e < t
      }
      var ka = (e, t = () => {}) => {
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

      function Ea(e, t) {
        const r = (0, vt.c)(e),
          n = I.useRef(0);
        return I.useEffect(() => () => window.clearTimeout(n.current), []), I.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function La(e, t) {
        const r = (0, vt.c)(t);
        (0, St.N)(() => {
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
      var Aa = ia,
        Va = la,
        Ma = fa,
        Fa = ja,
        Ba = Ra,
        qa = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Xa = [" ", "Enter"],
        Ga = "Select",
        [Ka, Za, Ha] = Yr(Ga),
        [Wa, Ua] = (0, ft.A)(Ga, [Ha, zt]),
        $a = zt(),
        [Ya, Qa] = Wa(Ga),
        [Ja, es] = Wa(Ga);

      function ts(e) {
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
          form: v,
          internal_do_not_use_render: h
        } = e, y = $a(t), [m, b] = I.useState(null), [g, w] = I.useState(null), [x, _] = I.useState(!1), j = (0, Ur.jH)(l), [C, O] = (0, ar.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: Ga
        }), [R, P] = (0, ar.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: Ga
        }), N = I.useRef(null), D = !m || !!v || !!m.closest("form"), [T, z] = I.useState(new Set), k = (0, Ct.B)(), E = Array.from(T).map(e => e.props.value).join(";"), L = I.useCallback(e => {
          z(t => new Set(t).add(e))
        }, []), A = I.useCallback(e => {
          z(t => {
            const r = new Set(t);
            return r.delete(e), r
          })
        }, []), V = {
          required: p,
          trigger: m,
          onTriggerChange: b,
          valueNode: g,
          onValueNodeChange: w,
          valueNodeHasChildren: x,
          onValueNodeHasChildrenChange: _,
          contentId: k,
          value: R,
          onValueChange: P,
          open: C,
          onOpenChange: O,
          dir: j,
          triggerPointerDownPosRef: N,
          disabled: f,
          name: c,
          autoComplete: u,
          form: v,
          nativeOptions: T,
          nativeSelectKey: E,
          isFormControl: D
        };
        return (0, S.jsx)(Ut, {
          ...y,
          children: (0, S.jsx)(Ya, {
            scope: t,
            ...V,
            children: (0, S.jsx)(Ka.Provider, {
              scope: t,
              children: (0, S.jsx)(Ja, {
                scope: t,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: Xs(h) ? h(V) : r
              })
            })
          })
        })
      }
      ts.displayName = "SelectProvider";
      var rs = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, S.jsx)(ts, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, S.jsxs)(S.Fragment, {
            children: [r, e ? (0, S.jsx)(qs, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      rs.displayName = Ga;
      var ns = "SelectTrigger",
        os = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = $a(r), s = Qa(ns, r), i = s.disabled || n, d = (0, ut.s)(t, s.onTriggerChange), l = Za(r), c = I.useRef("touch"), [u, f, p] = Ks(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Zs(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, S.jsx)($t, {
            asChild: !0,
            ...a,
            children: (0, S.jsx)(pt.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.open ? s.contentId : void 0,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: i,
              "data-disabled": i ? "" : void 0,
              "data-placeholder": Gs(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ct.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, ct.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, ct.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || qa.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      os.displayName = ns;
      var as = "SelectValue",
        ss = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Qa(as, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, ut.s)(t, d.onValueNodeChange);
          (0, St.N)(() => {
            l(c)
          }, [l, c]);
          const f = Gs(d.value);
          return (0, S.jsx)(pt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, S.jsx)(I.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      ss.displayName = as;
      var is = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, S.jsx)(pt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      is.displayName = "SelectIcon";
      var ds = "SelectPortal",
        [ls, cs] = Wa(ds, {
          forceMount: void 0
        }),
        us = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, S.jsx)(ls, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, S.jsx)(er, {
              asChild: !0,
              ...n
            })
          })
        };
      us.displayName = ds;
      var fs = "SelectContent",
        ps = I.forwardRef((e, t) => {
          const r = cs(fs, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Qa(fs, e.__scopeSelect),
            [s, i] = I.useState();
          return (0, St.N)(() => {
            i(new DocumentFragment)
          }, []), (0, S.jsx)(tr, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, S.jsx)(gs, {
              ...o,
              ref: t
            }) : (0, S.jsx)(vs, {
              ...o,
              fragment: s
            })
          })
        });
      ps.displayName = fs;
      var vs = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? Jt.createPortal((0, S.jsx)(ys, {
          scope: r,
          children: (0, S.jsx)(Ka.Slot, {
            scope: r,
            children: (0, S.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      vs.displayName = "SelectContentFragment";
      var hs = 10,
        [ys, ms] = Wa(fs),
        bs = (0, or.TL)("SelectContent.RemoveScroll"),
        gs = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r
          } = e, {
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
          } = e, b = Qa(fs, r), [g, w] = I.useState(null), [x, _] = I.useState(null), j = (0, ut.s)(t, e => w(e)), [C, O] = I.useState(null), [R, P] = I.useState(null), N = Za(r), [D, T] = I.useState(!1), z = I.useRef(!1);
          I.useEffect(() => {
            if (g) return (0, Kn.Eq)(g)
          }, [g]), (0, Xn.Oh)();
          const k = I.useCallback(e => {
              const [t, ...r] = N().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [N, x]),
            E = I.useCallback(() => k([C, g]), [k, C, g]);
          I.useEffect(() => {
            D && E()
          }, [D, E]);
          const {
            onOpenChange: L,
            triggerPointerDownPosRef: A
          } = b;
          I.useEffect(() => {
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
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(g) || L(!1), document.removeEventListener("pointermove", t), A.current = null
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
          }, [g, L, A]), I.useEffect(() => {
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [V, M] = Ks(e => {
            const t = N().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Zs(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), F = I.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (z.current = !0))
          }, [b.value]), B = I.useCallback(() => g?.focus(), [g]), q = I.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== b.value && b.value === t || n) && P(e)
          }, [b.value]), X = "popper" === n ? xs : ws, G = X === xs ? {
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
          return (0, S.jsx)(ys, {
            scope: r,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: F,
            selectedItem: C,
            onItemLeave: B,
            itemTextRefCallback: q,
            focusSelectedItem: E,
            selectedItemText: R,
            position: n,
            isPositioned: D,
            searchRef: V,
            children: (0, S.jsx)(Gn.A, {
              as: bs,
              allowPinchZoom: !0,
              children: (0, S.jsx)(Ln, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ct.mK)(o, e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, S.jsx)(bt, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => b.onOpenChange(!1),
                  children: (0, S.jsx)(X, {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...G,
                    onPlaced: () => T(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, ct.mK)(m.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || M(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = N().filter(e => !e.disabled);
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
      gs.displayName = "SelectContentImpl";
      var ws = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Qa(fs, r), s = ms(fs, r), [i, d] = I.useState(null), [l, c] = I.useState(null), u = (0, ut.s)(t, e => c(e)), f = Za(r), p = I.useRef(!1), v = I.useRef(!0), {
          viewport: h,
          selectedItem: y,
          selectedItemText: m,
          focusSelectedItem: b
        } = s, g = I.useCallback(() => {
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
                c = window.innerWidth - hs,
                u = (0, Wr.q)(a, [hs, Math.max(hs, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - hs,
                u = (0, Wr.q)(a, [hs, Math.max(hs, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * hs,
              c = h.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              b = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + b + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(h),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - hs,
              R = d - O,
              P = y.offsetHeight / 2,
              N = v + b + (y.offsetTop + P),
              S = w - N;
            if (N <= O) {
              const e = s.length > 0 && y === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                r = N + Math.max(R, P + (e ? C : 0) + t + g);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && y === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, v + h.offsetTop + (e ? j : 0) + P) + S;
              i.style.height = t + "px", h.scrollTop = N - O + h.offsetTop
            }
            i.style.margin = `${hs}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, h, y, m, a.dir, n]);
        (0, St.N)(() => g(), [g]);
        const [w, x] = I.useState();
        (0, St.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = I.useCallback(e => {
          e && !0 === v.current && (g(), b?.(), v.current = !1)
        }, [g, b]);
        return (0, S.jsx)(_s, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: _,
          children: (0, S.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: w
            },
            children: (0, S.jsx)(pt.sG.div, {
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
      ws.displayName = "SelectItemAlignedPosition";
      var xs = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = hs,
          ...a
        } = e, s = $a(r);
        return (0, S.jsx)(Yt, {
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
      xs.displayName = "SelectPopperPosition";
      var [_s, js] = Wa(fs, {}), Cs = "SelectViewport", Os = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = ms(Cs, r), s = js(Cs, r), i = (0, ut.s)(t, a.onViewportChange), d = I.useRef(0);
        return (0, S.jsxs)(S.Fragment, {
          children: [(0, S.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, S.jsx)(Ka.Slot, {
            scope: r,
            children: (0, S.jsx)(pt.sG.div, {
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
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * hs,
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
      Os.displayName = Cs;
      var Rs = "SelectGroup",
        [Ps, Ns] = Wa(Rs);
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ct.B)();
        return (0, S.jsx)(Ps, {
          scope: r,
          id: o,
          children: (0, S.jsx)(pt.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Rs;
      var Ss = "SelectLabel";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Ns(Ss, r);
        return (0, S.jsx)(pt.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Ss;
      var Ds = "SelectItem",
        [Is, Ts] = Wa(Ds),
        zs = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Qa(Ds, r), d = ms(Ds, r), l = i.value === n, [c, u] = I.useState(a ?? ""), [f, p] = I.useState(!1), v = (0, ut.s)(t, e => d.itemRefCallback?.(e, n, o)), h = (0, Ct.B)(), y = I.useRef("touch"), m = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, S.jsx)(Is, {
            scope: r,
            value: n,
            disabled: o,
            textId: h,
            isSelected: l,
            onItemTextChange: I.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, S.jsx)(Ka.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, S.jsx)(pt.sG.div, {
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
                onFocus: (0, ct.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, ct.mK)(s.onBlur, () => p(!1)),
                onClick: (0, ct.mK)(s.onClick, () => {
                  "mouse" !== y.current && m()
                }),
                onPointerUp: (0, ct.mK)(s.onPointerUp, () => {
                  "mouse" === y.current && m()
                }),
                onPointerDown: (0, ct.mK)(s.onPointerDown, e => {
                  y.current = e.pointerType
                }),
                onPointerMove: (0, ct.mK)(s.onPointerMove, e => {
                  y.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ct.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ct.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Xa.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      zs.displayName = Ds;
      var ks = "SelectItemText",
        Es = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Qa(ks, r), i = ms(ks, r), d = Ts(ks, r), l = es(ks, r), [c, u] = I.useState(null), f = (0, ut.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = I.useMemo(() => (0, S.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: y
          } = l;
          return (0, St.N)(() => (h(v), () => y(v)), [h, y, v]), (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(pt.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Gs(s.value) ? Jt.createPortal(a.children, s.valueNode) : null]
          })
        });
      Es.displayName = ks;
      var Ls = "SelectItemIndicator";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Ts(Ls, r).isSelected ? (0, S.jsx)(pt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = Ls;
      var As = "SelectScrollUpButton";
      I.forwardRef((e, t) => {
        const r = ms(As, e.__scopeSelect),
          n = js(As, e.__scopeSelect),
          [o, a] = I.useState(!1),
          s = (0, ut.s)(t, n.onScrollButtonChange);
        return (0, St.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, S.jsx)(Ms, {
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
      }).displayName = As;
      var Vs = "SelectScrollDownButton";
      I.forwardRef((e, t) => {
        const r = ms(Vs, e.__scopeSelect),
          n = js(Vs, e.__scopeSelect),
          [o, a] = I.useState(!1),
          s = (0, ut.s)(t, n.onScrollButtonChange);
        return (0, St.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, S.jsx)(Ms, {
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
      }).displayName = Vs;
      var Ms = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = ms("SelectScrollButton", r), s = I.useRef(null), i = Za(r), d = I.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return I.useEffect(() => () => d(), [d]), (0, St.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, S.jsx)(pt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ct.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ct.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
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
        return (0, S.jsx)(pt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Fs = "SelectArrow";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = $a(r);
        return "popper" === ms(Fs, r).position ? (0, S.jsx)(Qt, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Fs;
      var Bs = "SelectBubbleInput",
        qs = I.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Qa(Bs, e),
            {
              value: o,
              onValueChange: a,
              required: s,
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
            v = (0, ut.s)(r, p),
            h = o ?? "",
            y = (0, $r.Z)(h),
            m = Array.from(u).some(e => "" === (e.props.value ?? ""));
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
          }, [y, h]), (0, S.jsxs)(pt.sG.select, {
            "aria-hidden": !0,
            required: s,
            tabIndex: -1,
            name: d,
            autoComplete: l,
            disabled: i,
            form: c,
            onChange: e => a(e.target.value),
            ...t,
            style: {
              ...sr.Qg,
              ...t.style
            },
            ref: v,
            defaultValue: h,
            children: [Gs(o) && !m ? (0, S.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Xs(e) {
        return "function" == typeof e
      }

      function Gs(e) {
        return "" === e || void 0 === e
      }

      function Ks(e) {
        const t = (0, vt.c)(e),
          r = I.useRef(""),
          n = I.useRef(0),
          o = I.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = I.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return I.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Zs(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Hs(e) {
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

      function Ws(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Us(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ws(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Hs(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ws(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function $s(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      qs.displayName = Bs;
      var Ys = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Qs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Us(Us({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ys(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $s(e.variantClassNames, e => $s(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Js = Qs({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ei = Qs({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ti = Qs({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ri = Qs({
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
        ni = Qs({
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
        oi = Qs({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ai = (0, I.createContext)(null);

      function si() {
        const e = (0, I.useContext)(ai);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const ii = (0, I.forwardRef)(({
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
          const y = (0, I.useRef)(null),
            m = (0, xe.UP)(y, h),
            b = (0, I.useId)(),
            g = (0, I.useId)(),
            w = (0, I.useId)(),
            x = (0, I.useId)(),
            _ = (0, I.useId)(),
            j = (0, I.useId)(),
            C = (0, I.useRef)(null),
            O = (0, I.useRef)(null),
            R = (0, I.useRef)(null),
            [P = !1, N] = (0, xe.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, q.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, S.jsx)(ai.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: w,
              triggerId: j,
              hintId: x,
              popoverId: _,
              labelRef: C,
              descriptionRef: O,
              hintRef: R,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: P,
              setIsOpen: N,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, S.jsx)(rs, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => N(!o && !P),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, S.jsx)("div", {
                ref: m,
                ...D,
                children: e
              })
            })
          })
        }),
        di = (0, I.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = si(), s = (0, q.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Js({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, S.jsx)(ps, {
            ...s,
            ref: o,
            children: (0, S.jsx)(Os, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        li = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(Os, {
            ref: r,
            ...n
          })
        }),
        ci = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, S.jsxs)(Aa, {
            ...o,
            ref: n,
            children: [(0, S.jsx)(li, {
              asChild: !0,
              children: (0, S.jsx)(Va, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, S.jsx)(Ma, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, S.jsx)(Fa, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        ui = (0, I.forwardRef)(({
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
            labelRef: h,
            descriptionRef: y,
            hintRef: m,
            isOpen: b,
            size: g
          } = si(), {
            isPressed: w,
            pressProps: x
          } = (0, Go.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, j] = (0, I.useState)(!1), [C, O] = (0, I.useState)(!1);
          (0, I.useEffect)(() => {
            j(!!h.current || !!m.current), O(!!y.current)
          }, []);
          const R = (0, q.v6)({
              id: f,
              className: ni({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, q.VW)(r, c, u) : r,
              "aria-describedby": C ? (0, q.VW)(n, v) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": b ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, q.cJ)(x, "onKeyDown"), a),
            P = o ? T.DX : os;
          return (0, S.jsx)(P, {
            ...R,
            ref: s,
            children: e
          })
        }),
        fi = (0, I.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? T.DX : "span";
          return (0, S.jsx)(s, {
            ...a,
            ref: o,
            children: (0, S.jsx)(ss, {
              placeholder: e
            })
          })
        }),
        pi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = si(), i = s ? ot.ChevronUp : ot.ChevronDown, d = (0, q.v6)({
            asChild: !0,
            className: oi({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, S.jsx)(is, {
            ...d,
            ref: n,
            children: e || (0, S.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        vi = (0, I.forwardRef)(({
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
            labelRef: c,
            triggerId: u
          } = si(), f = i && !o, p = (0, xe.UP)(c, s), v = (0, q.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: ri({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), h = t ? T.DX : "label";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(h, {
              ...v,
              ref: p,
              children: r
            })
          })
        }),
        hi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = si(), d = (0, xe.UP)(i, o), l = (0, q.v6)({
            className: ei({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? T.DX : "div";
          return (0, S.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        yi = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = si(), d = (0, xe.UP)(s, o), l = (0, q.v6)({
            className: ti({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? T.DX : "div";
          return (0, S.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        mi = (0, I.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, I.useRef)(null),
            i = (0, xe.UP)(s, a),
            d = (0, q.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, S.jsx)(zs, {
            ref: i,
            ...d,
            children: e
          })
        }),
        bi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, S.jsx)(Es, {
            ref: n,
            asChild: !0,
            children: (0, S.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        gi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, S.jsx)(is, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        wi = us,
        xi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = si(), i = (0, q.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? T.DX : Jo;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        _i = ea,
        ji = ta;
      var Ci = r(83588),
        Oi = r(56728);

      function Ri(e) {
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

      function Ni(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ri(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Si(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Di = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ii = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ni(Ni({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Di(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Si(e.variantClassNames, e => Si(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ti = Ii({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        zi = Ii({
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
        ki = Ii({
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
        Ei = Ii({
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
        Li = Ii({
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
      const Ai = (0, I.createContext)(null);

      function Vi() {
        const e = (0, I.useContext)(Ai);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Mi = (0, I.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, q.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? T.DX : "div",
            u = (0, I.useId)(),
            f = (0, I.useId)(),
            p = (0, I.useId)();
          return (0, S.jsx)(Ai.Provider, {
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
            children: (0, S.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Fi = (0, I.forwardRef)(({
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
          const p = (0, I.useRef)(null),
            v = (0, xe.UP)(p, f),
            {
              size: h,
              appearance: y,
              inputId: m,
              labelId: b,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = Vi(),
            _ = (0, Oi.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, Ci.K)({
              id: a || m,
              "aria-labelledby": (0, q.VW)(n, b),
              "aria-describedby": (0, q.VW)(o, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, q.v6)({
              className: Li({
                appearance: y
              }),
              "data-state": _.isSelected ? "selected" : "unselected",
              "data-disabled": w || x,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || w || x || _.toggle()
              }
            }, u);
          return (0, S.jsxs)("div", {
            ...C,
            children: [(0, S.jsx)(T.s6, {
              children: (0, S.jsx)("input", {
                ...j,
                ref: v
              })
            }), (0, S.jsx)("div", {
              className: Ei({
                size: h
              }),
              "aria-hidden": "true",
              children: (0, S.jsx)("div", {
                className: zi({
                  size: h,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        Bi = (0, I.forwardRef)(({
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
          } = Vi(), c = (0, q.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: ki({
              isDisabled: s,
              size: l
            })
          }, o), u = t ? T.DX : "label";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        qi = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Vi(), i = n.id || s, d = (0, q.v6)({
            className: Ti({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? T.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Xi = r(26688);
      const Gi = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ki = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Zi = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Hi = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Wi = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Ui = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, S.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function $i(e) {
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

      function Yi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Qi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $i(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ji(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ed = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        td = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qi(Qi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ed(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ji(e.variantClassNames, e => Ji(e, e => e.split(" ")[0]))
            }
          }, t
        },
        rd = td({
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
        nd = td({
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
        od = td({
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
        ad = td({
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
        sd = td({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        id = td({
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
      const dd = (0, I.createContext)(null);

      function ld() {
        const e = (0, I.useContext)(dd);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const cd = (0, I.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, q.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? T.DX : "div",
            l = (0, I.useId)(),
            c = (0, I.useId)(),
            u = (0, I.useId)();
          return (0, S.jsx)(dd.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, S.jsx)(d, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        ud = (0, I.forwardRef)(({
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
          } = ld(), _ = (0, I.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: O
          } = (0, Go.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: P,
            ...N
          } = (0, Oi.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: z,
            isSelected: k,
            isDisabled: E,
            isReadOnly: L
          } = (0, Xi.v)({
            "aria-label": "",
            id: j,
            name: o,
            ...x
          }, {
            ...N,
            toggle: P,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), A = (0, q.v6)({
            className: nd({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || E || L || P()
            }
          }, O, f), V = (0, q.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, q.VW)(c, g),
            "aria-describedby": (0, q.VW)(d, b),
            "aria-errormessage": (0, q.VW)(l, x.isInvalid ? b : void 0),
            "aria-required": m,
            required: m
          }, z), M = y ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, S.jsxs)("div", {
            ...A,
            children: [(0, S.jsx)(T.s6, {
              children: (0, S.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, S.jsx)("div", {
              className: (0, D.$)(rd({
                size: v,
                appearance: h
              }), u),
              "aria-hidden": "true",
              "data-state": y ? "mixed" : k ? "checked" : "unchecked",
              "data-disabled": E || L,
              "data-testid": e,
              "data-pressed": C,
              children: (0, S.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (k || y) && (0, S.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        fd = (0, I.forwardRef)(({
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
          } = ld(), u = a.id || d, f = c && !o, p = (0, q.v6)({
            className: id({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = t ? T.DX : "label";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        pd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = ld(), i = n.id || s, d = (0, q.v6)({
            className: od({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? T.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        vd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = ld(), s = n.id || a, i = (0, q.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, n), d = t ? T.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        hd = (0, I.createContext)(null);

      function yd() {
        const e = (0, I.useContext)(hd);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const md = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, I.useState)(null), [l, c] = (0, I.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, q.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? T.DX : "fieldset";
          return (0, S.jsx)(hd.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, S.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        bd = (0, I.forwardRef)(({
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
          } = yd(), l = d && !a, c = (0, q.v6)({
            "data-testid": r,
            className: sd({
              showAsterisk: l
            })
          }, s), u = t ? T.DX : "legend";
          return (0, S.jsx)(T.s6, {
            enabled: o,
            children: (0, S.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, S.jsx)(T.xV, {
                children: e
              }), !d && (0, S.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        gd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = yd(), s = (0, I.useId)(), i = n.id || s;
          (0, I.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, q.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? T.DX : "div";
          return (0, S.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        wd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = yd(), s = (0, q.v6)({
            "data-testid": r,
            className: ad({
              size: a
            })
          }, n), i = t ? T.DX : "div";
          return (0, S.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        xd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = yd(), s = (0, I.useId)(), i = n.id || s;
          (0, I.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, q.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = ot.X,
            c = t ? T.DX : "div";
          return (0, S.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, S.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, S.jsx)(T.xV, {
              children: e
            })]
          })
        });

      function _d(e) {
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

      function jd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = _d(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Od(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cd(Cd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Rd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Od(e.variantClassNames, e => Od(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nd = Pd({
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
        Sd = Pd({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Dd = Pd({
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
        Id = Pd({
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
      const Td = (0, I.createContext)(null);

      function zd() {
        const e = (0, I.useContext)(Td);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const kd = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, q.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? T.DX : "div",
            u = (0, I.useId)(),
            f = (0, I.useId)(),
            p = (0, I.useId)(),
            v = (0, I.useId)();
          return (0, S.jsx)(Td.Provider, {
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
            children: (0, S.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Ed = (0, I.forwardRef)(({
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
          } = zd(), u = (0, q.v6)({
            className: Dd({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, a), f = t ? T.DX : "label";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Ld = (0, I.forwardRef)(({
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
          } = zd(), g = (0, I.useRef)(null), w = (0, xe.UP)(g, c), x = (0, q.v6)({
            className: Id({
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
            "aria-labelledby": (0, q.VW)(l.id, f, v, i),
            "aria-describedby": (0, q.VW)(u, d),
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
          }, l), _ = e ? T.DX : "textarea";
          return (0, S.jsx)(_, {
            ref: w,
            ...x,
            children: t
          })
        }),
        Ad = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = zd(), i = (0, q.v6)({
            className: Nd({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? T.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Vd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = zd(), i = (0, q.v6)({
            className: Sd({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? T.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Md = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = zd(), i = (0, q.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? T.DX : Jo;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Fd = ea,
        Bd = ta;
      var qd = r(707),
        Xd = r(5277);

      function Gd(e) {
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

      function Kd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Zd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Gd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Hd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ud = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Zd(Zd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Wd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hd(e.variantClassNames, e => Hd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $d = Ud({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yd = Ud({
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
      const Qd = (0, I.createContext)(null);

      function Jd() {
        const e = (0, I.useContext)(Qd);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const el = (0, I.forwardRef)(({
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
          const f = (0, I.useRef)(null),
            p = (0, xe.UP)(f, u),
            v = (0, I.useId)(),
            h = (0, I.useId)(),
            y = (0, I.useId)(),
            m = (0, qd.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Xd.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, q.VW)(v, s),
              "aria-describedby": (0, q.VW)(h, y, i),
              "aria-errormessage": (0, q.VW)(y, d)
            }, m),
            g = (0, q.v6)({
              className: "foundry_njguqn0"
            }, b, (0, q.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? T.DX : "div";
          return (0, S.jsx)(Qd.Provider, {
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
            children: (0, S.jsx)(w, {
              ref: p,
              "data-testid": o,
              ...g,
              children: n
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
            size: a,
            orientation: s
          } = Jd(), i = (0, q.v6)({
            "data-testid": e,
            className: Yd({
              size: a,
              orientation: s
            })
          }, n), d = t ? T.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        rl = (0, I.forwardRef)(({
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
          } = Jd(), l = i && !o, c = (0, q.v6)({
            id: a.id || d,
            "data-testid": e,
            className: $d({
              showAsterisk: l
            })
          }, a), u = t ? T.DX : "div";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        nl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Jd(), s = (0, q.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? T.DX : "div";
          return (0, S.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        ol = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = Jd(), i = (0, q.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? T.DX : Jo;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        al = ea,
        sl = ta;
      var il = r(80146),
        dl = Ud({
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
        ll = Ud({
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
        cl = Ud({
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
        ul = Ud({
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
      const fl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        pl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        vl = ({
          color: e = "currentColor"
        }) => (0, S.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, S.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        hl = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? T.DX : "label";
          return (0, S.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        yl = (0, I.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, I.useRef)(null),
            a = (0, xe.UP)(o, n),
            s = (0, I.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Jd(),
            {
              isPressed: p,
              pressProps: v
            } = (0, Go.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, il.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            y = h.checked,
            m = h.disabled || i?.isReadOnly,
            b = (0, q.v6)(h, {
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
          return (0, S.jsxs)("div", {
            className: ul({
              size: l
            }),
            children: [(0, S.jsx)(T.s6, {
              children: (0, S.jsx)("input", {
                type: "radio",
                ...b,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, S.jsx)("div", {
              className: cl({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": y ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...v,
              children: (0, S.jsx)("span", {
                className: "foundry_1pfduet9",
                children: y && (0, S.jsx)(g, {})
              })
            })]
          })
        }),
        ml = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = Jd(), d = (0, I.useId)(), l = (0, q.v6)({
            id: d,
            "data-testid": e,
            className: ll({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? T.DX : "div";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(c, {
              ...l,
              ref: a,
              children: r
            })
          })
        }),
        bl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Jd(), s = (0, q.v6)({
            "data-testid": e,
            className: dl({
              isDisabled: a
            })
          }, n), i = t ? T.DX : "span";
          return (0, S.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var gl = r(58900);

      function wl(e) {
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

      function xl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function _l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = wl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function jl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ol = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _l(_l({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jl(e.variantClassNames, e => jl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Rl = Ol({
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
        Pl = Ol({
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
        Nl = Ol({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Sl = Ol({
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
        Dl = Ol({
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
        Il = Ol({
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
      const Tl = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        zl = (0, I.createContext)(null);

      function kl() {
        const e = (0, I.useContext)(zl);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const El = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, I.useState)("text"), u = `${(0,I.useId)()}-label`, f = `${(0,I.useId)()}-input`, p = `${(0,I.useId)()}-description`, v = (0, I.useRef)(null), h = (0, I.useRef)(Tl), y = (0, q.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), m = e ? T.DX : "div";
          return (0, S.jsx)(zl.Provider, {
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
            children: (0, S.jsx)(m, {
              ref: d,
              ...y,
              children: t
            })
          })
        }),
        Ll = (0, I.forwardRef)(({
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
          } = kl(), u = d && !o, f = (0, q.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: Il({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? T.DX : "label";
          return (0, S.jsx)(T.s6, {
            enabled: n,
            children: (0, S.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Al = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = kl(), s = (0, q.v6)({
            "data-testid": e,
            className: Nl({
              isDisabled: a
            })
          }, n), i = t ? T.DX : "span";
          return (0, S.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Vl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = kl(), d = (0, q.v6)({
            "data-testid": e,
            className: (0, D.$)(Rl({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? T.DX : "div";
          return (0, S.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Ml = (0, I.forwardRef)(({
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
          } = kl();
          (0, I.useEffect)(() => g(l), []);
          const j = "invalid" === h,
            C = (0, q.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, q.VW)(y, i),
              "aria-describedby": (0, q.VW)(b, d),
              "data-testid": e,
              className: (0, D.$)(Dl({
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
            O = (0, gl.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            R = (0, xe.UP)(r && n ? O : null, x, u),
            P = t ? T.DX : "input";
          return (0, S.jsx)(P, {
            ref: R,
            ...C
          })
        }),
        Fl = (0, I.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = kl(), i = (0, q.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, D.$)(Sl({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? T.DX : ot[e];
          return (0, S.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        Bl = (0, I.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = kl(), n = (0, q.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, D.$)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, S.jsx)(N.K, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        ql = (0, I.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = kl(), d = "password" === o, l = d ? e : t;
          (0, I.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, q.v6)({
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
          return (0, S.jsxs)(Xr, {
            children: [(0, S.jsx)(Gr, {
              children: (0, S.jsx)(Bl, {
                ref: n,
                ...c
              })
            }), (0, S.jsxs)(Kr, {
              side: "bottom",
              align: "end",
              children: [l, (0, S.jsx)(Zr, {})]
            })]
          })
        }),
        Xl = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = kl(), i = (0, q.v6)({
            className: Pl({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? T.DX : "div";
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Gl = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = kl(), i = (0, q.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? T.DX : Jo;
          return (0, S.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Kl = ea,
        Zl = ta;
      var Hl = r(68196);

      function Wl(e) {
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

      function Ul(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ul(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Wl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ul(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ql = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $l($l({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ql(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yl(e.variantClassNames, e => Yl(e, e => e.split(" ")[0]))
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
      const ec = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        tc = (0, I.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, I.useRef)(null),
            s = (0, xe.UP)(a, o),
            {
              buttonProps: i
            } = (0, xe.sL)(n, a),
            d = (0, q.v6)({
              "data-testid": r,
              className: Jl({
                size: t
              })
            }, i);
          return (0, S.jsx)("button", {
            ref: s,
            ...d,
            children: (0, S.jsx)(ot.X, {
              label: e,
              size: ec[t]
            })
          })
        });

      function rc(e) {
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

      function nc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ac(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ic = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oc(oc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ac(e.variantClassNames, e => ac(e, e => e.split(" ")[0]))
            }
          }, t
        },
        dc = ic({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lc = ic({
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
        cc = ic({
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
      const uc = (0, I.createContext)(null);

      function fc() {
        const e = (0, I.useContext)(uc);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const pc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? T.DX : "div",
            i = (0, q.v6)({
              className: cc({
                status: r,
                background: n
              })
            }, o);
          return (0, S.jsx)(uc.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, S.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        vc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        hc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        yc = {
          danger: ot.CircleX,
          information: ot.Info,
          success: ot.CircleCheck,
          warning: ot.TriangleAlert
        },
        mc = (0, I.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = fc(), a = e ? T.DX : yc[o], s = (0, q.v6)({
            className: lc({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, S.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        bc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        gc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        wc = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, I.useRef)(null),
            s = (0, xe.UP)(a, o),
            i = e ? T.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Hl.i)(n, a),
            c = (0, q.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, S.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        xc = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? T.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        _c = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? T.DX : "div";
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, D.$)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        jc = (0, I.forwardRef)((e, t) => {
          const {
            background: r
          } = fc(), n = "none" !== r, o = (0, q.v6)({
            className: dc({
              hasBackground: n
            })
          }, e);
          return (0, S.jsx)(tc, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var Cc = r(64634),
        Oc = r(7697),
        Rc = r(17497);

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

      function Nc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Sc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ic = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tc = "foundry_qmpv6yv",
        zc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Sc(Sc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ic(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dc(e.variantClassNames, e => Dc(e, e => e.split(" ")[0]))
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
      const kc = (0, I.createContext)(null);

      function Ec() {
        const e = (0, I.useContext)(kc);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Lc = (0, I.forwardRef)(({
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
              const t = (0, xe.rl)(),
                r = (0, xe.jt)(),
                [n, o] = (0, I.useState)([]),
                a = n.length,
                [s, i] = (0, I.useState)(0),
                [d, l] = (0, Cc.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, Oc.A)(), (0, Rc.A)()]),
                c = (0, I.useRef)(0),
                u = (0, I.useRef)(!1),
                f = n[s],
                p = (0, I.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                v = (0, I.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                h = (0, I.useCallback)((e, t) => {
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
              return (0, I.useEffect)(() => {
                l && (v(l), h(l), l.on("reInit", v).on("reInit", h).on("scroll", h).on("slideFocus", h))
              }, [l, h]), (0, I.useEffect)(() => {
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
          (0, I.useEffect)(() => {
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
            h = (0, q.v6)({
              className: zc(c)
            }, v, i),
            y = e ? T.DX : "div";
          return (0, S.jsx)(kc.Provider, {
            value: l,
            children: (0, S.jsx)(y, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...h,
              children: t
            })
          })
        }),
        Ac = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Vc = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Ec();
          if (!e && !n || !n?.status) return null;
          const o = e || Ac[n.status],
            a = ot[o],
            s = (0, q.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, S.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        Mc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Fc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? T.DX : "div",
            d = (0, q.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, S.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        Bc = (0, I.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Ec(), i = (0, q.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, xe.UP)(a, n), l = I.Children.map(t, e => {
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
          }, []), s?.on("slidesChanged", () => {
            l && o(l)
          }), (0, S.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, S.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        qc = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, I.useRef)(null),
            s = (0, xe.UP)(a, o),
            i = e ? T.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Hl.i)(n, a),
            c = (0, q.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, S.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...d,
            ...c,
            children: t
          })
        }),
        Xc = (0, I.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, S.jsx)(tc, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Gc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? T.DX : "div",
            s = (0, q.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Kc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Ec(), a = (0, q.v6)({
            className: Tc
          }, t);
          return (0, S.jsx)(N.K, {
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
        Zc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Ec(), a = (0, q.v6)({
            className: Tc
          }, t);
          return (0, S.jsx)(N.K, {
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
        Hc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Ec(), a = (0, q.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, S.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

      function Wc(e) {
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

      function Uc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Wc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $c($c({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yc(e.variantClassNames, e => Yc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        eu = Jc({
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
        tu = Jc({
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
        ru = Jc({
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
      const nu = (0, I.createContext)(null);

      function ou() {
        const e = (0, I.useContext)(nu);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const au = (0, I.forwardRef)(({
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
            u = (0, q.v6)({
              className: tu(c)
            }, d),
            f = e ? T.DX : "div";
          return (0, S.jsx)(nu.Provider, {
            value: c,
            children: (0, S.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        su = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = ou(), s = e ? T.DX : "div", i = (0, q.v6)({
            className: ru({
              size: a
            })
          }, n);
          return (0, S.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        iu = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        du = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = ou(), a = (0, q.v6)({
            className: eu({
              background: n
            })
          }, t);
          return (0, S.jsx)(N.K, {
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
      var lu = "ToastProvider",
        [cu, uu, fu] = Yr("Toast"),
        [pu, vu] = (0, ft.A)("Toast", [fu]),
        [hu, yu] = pu(lu),
        mu = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = I.useState(null), [c, u] = I.useState(0), f = I.useRef(!1), p = I.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${lu}\`. Expected non-empty \`string\`.`), (0, S.jsx)(cu.Provider, {
            scope: t,
            children: (0, S.jsx)(hu, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: I.useCallback(() => u(e => e + 1), []),
              onToastRemove: I.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: s,
              children: i
            })
          })
        };
      mu.displayName = lu;
      var bu = "ToastViewport",
        gu = ["F8"],
        wu = "toast.viewportPause",
        xu = "toast.viewportResume",
        _u = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = gu,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = yu(bu, r), i = uu(r), d = I.useRef(null), l = I.useRef(null), c = I.useRef(null), u = I.useRef(null), f = (0, ut.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          I.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), I.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (v && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(wu);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(xu);
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
          const h = I.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Fu(r)];
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
                    a = o.findIndex(e => e === r);
                  Bu(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, h]), (0, S.jsxs)(jt, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, S.jsx)(Cu, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Bu(h({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, S.jsx)(cu.Slot, {
              scope: r,
              children: (0, S.jsx)(pt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, S.jsx)(Cu, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Bu(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      _u.displayName = bu;
      var ju = "ToastFocusProxy",
        Cu = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = yu(ju, r);
          return (0, S.jsx)(sr.s6, {
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
      Cu.displayName = ju;
      var Ou = "Toast",
        Ru = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, ar.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: Ou
          });
          return (0, S.jsx)(tr, {
            present: r || i,
            children: (0, S.jsx)(Su, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, vt.c)(e.onPause),
              onResume: (0, vt.c)(e.onResume),
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
      Ru.displayName = Ou;
      var [Pu, Nu] = pu(Ou, {
        onClose() {}
      }), Su = I.forwardRef((e, t) => {
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
        } = e, h = yu(Ou, r), [y, m] = I.useState(null), b = (0, ut.s)(t, e => m(e)), g = I.useRef(null), w = I.useRef(null), x = o || h.duration, _ = I.useRef(0), j = I.useRef(x), C = I.useRef(0), {
          onToastAdd: O,
          onToastRemove: R
        } = h, P = (0, vt.c)(() => {
          const e = y?.contains(document.activeElement);
          e && h.viewport?.focus(), s()
        }), N = I.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(P, e))
        }, [P]);
        I.useEffect(() => {
          const e = h.viewport;
          if (e) {
            const t = () => {
                N(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(wu, r), e.addEventListener(xu, t), () => {
              e.removeEventListener(wu, r), e.removeEventListener(xu, t)
            }
          }
        }, [h.viewport, x, d, l, N]), I.useEffect(() => {
          a && !h.isClosePausedRef.current && N(x)
        }, [a, x, h.isClosePausedRef, N]), I.useEffect(() => (O(), () => R()), [O, R]);
        const D = I.useMemo(() => y ? Au(y) : null, [y]);
        return h.viewport ? (0, S.jsxs)(S.Fragment, {
          children: [D && (0, S.jsx)(Du, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: D
          }), (0, S.jsx)(Pu, {
            scope: r,
            onClose: P,
            children: Jt.createPortal((0, S.jsx)(cu.ItemSlot, {
              scope: r,
              children: (0, S.jsx)(_t, {
                asChild: !0,
                onEscapeKeyDown: (0, ct.mK)(i, () => {
                  h.isFocusedToastEscapeKeyDownRef.current || P(), h.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, S.jsx)(pt.sG.li, {
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
                  onKeyDown: (0, ct.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, P()))
                  }),
                  onPointerDown: (0, ct.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ct.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = l, Vu("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Mu(l, h.swipeDirection, d) ? (w.current = l, Vu("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, g.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Mu(t, h.swipeDirection, h.swipeThreshold) ? Vu("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Vu("toast.swipeCancel", f, n, {
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
      }), Du = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = yu(Ou, t), [a, s] = I.useState(!1), [i, d] = I.useState(!1);
        return function(e = () => {}) {
          const t = (0, vt.c)(e);
          (0, St.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), I.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, S.jsx)(er, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, S.jsx)(sr.s6, {
            ...n,
            children: a && (0, S.jsxs)(S.Fragment, {
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
        return (0, S.jsx)(pt.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Iu = I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, S.jsx)(pt.sG.div, {
          ...n,
          ref: t
        })
      });
      Iu.displayName = "ToastDescription";
      var Tu = "ToastAction",
        zu = I.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, S.jsx)(Lu, {
            altText: r,
            asChild: !0,
            children: (0, S.jsx)(Eu, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${Tu}\`. Expected non-empty \`string\`.`), null)
        });
      zu.displayName = Tu;
      var ku = "ToastClose",
        Eu = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Nu(ku, r);
          return (0, S.jsx)(Lu, {
            asChild: !0,
            children: (0, S.jsx)(pt.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ct.mK)(e.onClick, o.onClose)
            })
          })
        });
      Eu.displayName = ku;
      var Lu = I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, S.jsx)(pt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Au(e) {
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
              } else t.push(...Au(e))
          }
        }), t
      }

      function Vu(e, t, r, {
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
        }), n ? (0, pt.hO)(o, a) : o.dispatchEvent(a)
      }
      var Mu = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Fu(e) {
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

      function Bu(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var qu = mu,
        Xu = _u,
        Gu = Ru,
        Ku = Iu,
        Zu = zu,
        Hu = Eu;

      function Wu(e) {
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

      function Uu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Wu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Yu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ju = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $u($u({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yu(e.variantClassNames, e => Yu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ef = Ju({
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
        tf = Ju({
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
        rf = Ju({
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
      const nf = ({
          testId: e,
          ...t
        }) => (0, S.jsx)(qu, {
          "data-testid": e,
          ...t
        }),
        of = (0, I.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, q.v6)({
            className: rf({
              position: r
            })
          }, n);
          return (0, S.jsx)(Xu, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        af = (0, I.createContext)(null);

      function sf() {
        const e = (0, I.useContext)(af);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const df = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? T.DX : Gu,
            i = (0, q.v6)({
              className: tf({
                appearance: n
              })
            }, o);
          return (0, S.jsx)(af.Provider, {
            value: {
              appearance: n
            },
            children: (0, S.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        lf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? T.DX : Ku,
            s = (0, q.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, S.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        cf = {
          danger: ot.CircleX,
          information: ot.Info,
          success: ot.CircleCheck,
          warning: ot.TriangleAlert,
          avocado: ot.CircleCheck
        },
        uf = (0, I.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = sf(), o = e ? T.DX : cf[n], a = (0, q.v6)({
            className: ef({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, S.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        ff = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, S.jsx)(Zu, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, S.jsx)(T.DX, {
              children: t
            }) : (0, S.jsx)(P.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        pf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, q.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, S.jsx)(Hu, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, S.jsx)(T.DX, {
              children: t
            }) : (0, S.jsx)(tc, {
              size: "SM",
              label: n
            })
          })
        });
      var vf = r(52640);

      function hf(e) {
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

      function yf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = hf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        wf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mf(mf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bf(e.variantClassNames, e => bf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        xf = wf({
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
        _f = wf({
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
        jf = wf({
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

      function Cf() {
        const e = (0, I.useContext)(Of);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Of = (0, I.createContext)(null),
        Rf = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, q.v6)({
              className: jf({
                size: n
              })
            }, o),
            i = r ? T.DX : "ol";
          return (0, S.jsx)(Of.Provider, {
            value: {
              size: n
            },
            children: (0, S.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
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
        }, a) => {
          const s = (0, I.useRef)(null),
            {
              size: i
            } = Cf(),
            {
              itemProps: d
            } = (0, vf.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? T.DX : "a",
            c = (0, q.v6)({
              className: (0, D.$)(xf({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, S.jsx)("li", {
            className: _f({
              size: i
            }),
            ref: a,
            children: (0, S.jsx)(l, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        Nf = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e];
          return (0, S.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Sf = (0, I.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, I.useState)(r), {
            size: d
          } = Cf(), l = (0, q.v6)({
            className: _f({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, S.jsx)("li", {
            ref: a,
            ...l,
            children: (0, S.jsxs)(rs, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, S.jsx)(os, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, S.jsx)(us, {
                children: (0, S.jsx)(ps, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, S.jsx)(Os, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        Df = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? T.DX : zs,
            s = (0, q.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, S.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function If(e) {
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

      function Tf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = If(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ef = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Lf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zf(zf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ef(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kf(e.variantClassNames, e => kf(e, e => e.split(" ")[0]))
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
      const Af = (0, I.createContext)(null);

      function Vf() {
        const e = (0, I.useContext)(Af);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Mf = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? T.DX : "div",
            d = (0, q.v6)({
              className: Lf({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, S.jsx)(Af.Provider, {
            value: {
              type: o
            },
            children: (0, S.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...d
            })
          })
        }),
        Ff = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, S.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        Bf = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        qf = () => {
          const e = (0, xe.Ub)(q.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Xf = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Gf(e) {
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
            n = e, o = t, a = r[t], (o = Gf(o)) in n ? Object.defineProperty(n, o, {
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
        Uf = (e => {
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
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const $f = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, S.jsx)(Aa, {
            ref: r,
            ...n
          })
        }),
        Yf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, S.jsx)(Va, {
            ref: r,
            ...n
          })
        }),
        Qf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, S.jsx)(Ma, {
            ref: r,
            ...n
          })
        }),
        Jf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, xe.rl)(),
            o = (0, q.v6)({
              "data-testid": e,
              className: Uf({
                isTouchDevice: n
              })
            }, t);
          return (0, S.jsx)(Fa, {
            ref: r,
            ...o
          })
        }),
        ep = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(Ba, {
            ref: r,
            ...n
          })
        });

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
            var n, o, a;
            n = e, o = t, a = r[t], (o = tp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
      var ap = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = np(np({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
              return op(e.variantClassNames, e => op(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ip = sp({
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
        dp = sp({
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
      const lp = (0, I.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, I.createRef)(),
          dialogSpringRef: (0, lt.$9)(),
          overlaySpringRef: (0, lt.$9)()
        }),
        cp = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, xe.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, xe.ZC)(d);
          return (0, S.jsx)(lp.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, I.useId)(),
              descriptionId: (0, I.useId)(),
              triggerRef: (0, I.useRef)(null),
              dialogSpringRef: (0, lt.U2)(),
              overlaySpringRef: (0, lt.U2)()
            },
            children: (0, S.jsx)(up, {
              ...i
            })
          })
        },
        up = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, I.useContext)(lp), n = (0, q.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, S.jsx)(Yn, {
            ...n
          })
        },
        fp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, I.useContext)(lp), a = (0, xe.UP)(o, r), s = (0, q.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, S.jsx)(Jn, {
            ...s,
            ref: a
          })
        }),
        pp = e => (0, S.jsx)(no, {
          forceMount: !0,
          ...e
        }),
        vp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, I.useContext)(lp), s = Xf(), i = (0, xe.jt)(), d = (0, lt.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: lt.$W.stiff,
            immediate: i || a
          }), l = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, lt.CS)(ao);
          return (0, I.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, S.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        hp = (0, I.forwardRef)(({
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
          } = (0, I.useContext)(lp), m = (0, xe.rl)(), b = (0, xe.jt)(), g = (0, I.useRef)(null), w = qf(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = Xf(),
              s = qf(),
              i = (0, I.useRef)();
            return {
              bindDrag: (0, Ce.i3)(({
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
                  config: lt.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: lt.$W.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: lt.$W.stiff
                }), r.start({
                  ...a(100),
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
            dialogRef: g,
            overlaySpringRef: y,
            dialogSpringRef: h,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: v
          }), _ = (0, lt.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: lt.$W.stiff,
            ref: h,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : v?.()
            }
          });
          (0, I.useEffect)(() => {
            h.start()
          }, [s]);
          const j = (0, xe.UP)(g, a),
            C = m && !b && !n && x(),
            O = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            R = (0, lt.CS)(co);
          return _((t, r) => r ? (0, S.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, S.jsx)(R, {
              forceMount: !0,
              ref: j,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        yp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, S.jsx)(ho, {
            ref: r,
            ...n
          })
        }),
        mp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, S.jsx)(mo, {
            ref: r,
            ...n
          })
        }),
        bp = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, S.jsxs)($f, {
            ref: n,
            ...o,
            children: [(0, S.jsx)(Yf, {
              className: "foundry_xov33ni",
              children: e
            }), (0, S.jsx)(Qf, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, S.jsx)(Jf, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        gp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? T.DX : "div";
          return (0, S.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        wp = (0, I.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: ip({
                align: e
              })
            }, n),
            s = t ? T.DX : "header";
          return (0, S.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        xp = (0, I.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            className: dp({
              appearance: t
            })
          }, r);
          return (0, S.jsx)(ho, {
            ref: n,
            ...o
          })
        }),
        _p = (0, I.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, S.jsx)(N.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        jp = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, S.jsx)(T.DX, {
              ref: n,
              ...o
            }) : (0, S.jsx)(tc, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, S.jsx)(go, {
            asChild: !0,
            children: a
          })
        }),
        Cp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? T.DX : "div";
          return (0, S.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        Op = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? T.DX : "footer";
          return (0, S.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var Rp = "Avatar",
        [Pp, Np] = (0, ft.A)(Rp),
        Sp = [0, () => {}],
        [Dp, Ip] = Pp(Rp),
        Tp = I.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = I.useState("idle"), [s, i] = function() {
            let e = Sp; {
              e = I.useState(0);
              const [t] = e, r = I.useRef(!1);
              I.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, S.jsx)(Dp, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, S.jsx)(pt.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      Tp.displayName = Rp;
      var zp = "AvatarImage",
        kp = I.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = Ip(zp, r);
          var i;
          i = s.setImageCount, I.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, St.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  a = e => {
                    const t = e.currentTarget;
                    r(Lp(t))
                  },
                  s = () => r("error");
                return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Lp(t)), () => {
                  t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, vt.c)(e => {
              o?.(e)
            }),
            c = I.useRef(d);
          return (0, St.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, S.jsx)(pt.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      kp.displayName = zp;
      var Ep = "AvatarFallback";

      function Lp(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Ap(e) {
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

      function Vp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ap(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Fp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      I.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = Ip(Ep, r), [s, i] = I.useState(void 0 === n);
        return I.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, S.jsx)(pt.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Ep;
      var Bp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        qp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mp(Mp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Bp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fp(e.variantClassNames, e => Fp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xp = qp({
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
        Gp = "var(--foundry_v912w22)",
        Kp = "var(--foundry_v912w23)",
        Zp = qp({
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
        Hp = qp({
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
        Wp = "var(--foundry_v912w21)",
        Up = "var(--foundry_v912w20)",
        $p = qp({
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
      const Yp = (0, I.createContext)(null);

      function Qp() {
        const e = (0, I.useContext)(Yp);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Jp = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, q.v6)({
            "data-testid": r,
            "aria-disabled": a,
            className: Xp({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, S.jsx)(Yp.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, S.jsx)(Tp, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        ev = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = Qp(), [i, d] = (0, I.useState)(!1);
          (0, I.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, q.v6)({
              className: Zp({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, S.jsx)("span", {
            className: Hp({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, S.jsx)(kp, {
              ref: o,
              ...c
            })
          })
        }),
        tv = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, I.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Qp(),
            d = s || "online",
            l = (0, xe.UP)(o, n),
            c = (0, q.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: $p({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [Up]: t?.online,
                [Wp]: t?.offline,
                [Gp]: t?.away,
                [Kp]: t?.busy
              })
            }, r);
          return (0, S.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function rv(e) {
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

      function nv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ov(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = rv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function av(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        iv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ov(ov({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return av(e.variantClassNames, e => av(e, e => e.split(" ")[0]))
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
      const dv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? T.DX : "nav";
          return (0, S.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        lv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              role: "list",
              "data-testid": r,
              className: "foundry_2jlbzt1"
            }, n),
            s = e ? T.DX : "div";
          return (0, S.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        cv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, I.useRef)(null),
            i = (0, xe.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Hl.i)(o, s),
            c = (0, q.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, D.$)(iv({
                isActive: r
              }))
            }, d),
            u = e ? T.DX : "a";
          return (0, S.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        uv = (0, I.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, S.jsx)(cv, {
            ref: n,
            ...o,
            children: (0, S.jsx)(ot.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        fv = (0, I.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, S.jsx)(cv, {
            ref: n,
            ...o,
            children: (0, S.jsx)(ot.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        pv = ({
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
            a = e ? T.DX : "span";
          return (0, S.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        vv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? T.DX : "div";
          return (0, S.jsx)(a, {
            ...o,
            children: t
          })
        },
        hv = (0, I.createContext)(null);

      function yv() {
        const e = (0, I.useContext)(hv);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const mv = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, I.useId)(),
            a = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? T.DX : "div";
          return (0, S.jsx)(hv.Provider, {
            value: {
              labelId: o
            },
            children: (0, S.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        bv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = yv(), s = (0, q.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? T.DX : "label";
          return (0, S.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        gv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = yv(), s = (0, q.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? T.DX : ii;
          return (0, S.jsxs)(i, {
            ...s,
            children: [(0, S.jsxs)(ui, {
              ref: o,
              children: [(0, S.jsx)(fi, {
                placeholder: r
              }), (0, S.jsx)(pi, {})]
            }), (0, S.jsx)(wi, {
              children: (0, S.jsx)(di, {
                children: (0, S.jsx)(ci, {
                  children: t
                })
              })
            })]
          })
        }),
        wv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r
            }, n),
            s = e ? T.DX : mi;
          return (0, S.jsx)(s, {
            ...a,
            ref: o,
            children: (0, S.jsx)(bi, {
              children: t
            })
          })
        }),
        xv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            s = e ? T.DX : "p";
          return (0, S.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var _v = "rovingFocusGroup.onEntryFocus",
        jv = {
          bubbles: !1,
          cancelable: !0
        },
        Cv = "RovingFocusGroup",
        [Ov, Rv, Pv] = Yr(Cv),
        [Nv, Sv] = (0, ft.A)(Cv, [Pv]),
        [Dv, Iv] = Nv(Cv),
        Tv = I.forwardRef((e, t) => (0, S.jsx)(Ov.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, S.jsx)(Ov.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, S.jsx)(zv, {
              ...e,
              ref: t
            })
          })
        }));
      Tv.displayName = Cv;
      var zv = I.forwardRef((e, t) => {
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
          } = e, f = I.useRef(null), p = (0, ut.s)(t, f), v = (0, Ur.jH)(a), [h, y] = (0, ar.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Cv
          }), [m, b] = I.useState(!1), g = (0, vt.c)(l), w = Rv(r), x = I.useRef(!1), [_, j] = I.useState(0);
          return I.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(_v, g), () => e.removeEventListener(_v, g)
          }, [g]), (0, S.jsx)(Dv, {
            scope: r,
            orientation: n,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: I.useCallback(e => y(e), [y]),
            onItemShiftTab: I.useCallback(() => b(!0), []),
            onFocusableItemAdd: I.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: I.useCallback(() => j(e => e - 1), []),
            children: (0, S.jsx)(pt.sG.div, {
              tabIndex: m || 0 === _ ? -1 : 0,
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
                if (e.target === e.currentTarget && t && !m) {
                  const t = new CustomEvent(_v, jv);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Av(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, ct.mK)(e.onBlur, () => b(!1))
            })
          })
        }),
        kv = "RovingFocusGroupItem",
        Ev = I.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Ct.B)(), l = a || d, c = Iv(kv, r), u = c.currentTabStopId === l, f = Rv(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: h
          } = c;
          return I.useEffect(() => {
            if (n) return p(), () => v()
          }, [n, p, v]), (0, S.jsx)(Ov.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, S.jsx)(pt.sG.span, {
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
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : Lv[n]
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
                  setTimeout(() => Av(a))
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
      Ev.displayName = kv;
      var Lv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Av(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var Vv = Tv,
        Mv = Ev,
        Fv = "Toggle",
        Bv = I.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, ar.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: Fv
          });
          return (0, S.jsx)(pt.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      Bv.displayName = Fv;
      var qv = "ToggleGroup",
        [Xv, Gv] = (0, ft.A)(qv, [Sv]),
        Kv = Sv(),
        Zv = I.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, S.jsx)(Uv, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, S.jsx)($v, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${qv}\``)
        });
      Zv.displayName = qv;
      var [Hv, Wv] = Xv(qv), Uv = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, ar.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: qv
        });
        return (0, S.jsx)(Hv, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: I.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: I.useCallback(() => i(""), [i]),
          children: (0, S.jsx)(Jv, {
            ...a,
            ref: t
          })
        })
      }), $v = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, ar.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: qv
        }), d = I.useCallback(e => i((t = []) => [...t, e]), [i]), l = I.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, S.jsx)(Hv, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, S.jsx)(Jv, {
            ...a,
            ref: t
          })
        })
      });
      Zv.displayName = qv;
      var [Yv, Qv] = Xv(qv), Jv = I.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = Kv(r), c = (0, Ur.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, S.jsx)(Yv, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, S.jsx)(Vv, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, S.jsx)(pt.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, S.jsx)(pt.sG.div, {
            ...u,
            ref: t
          })
        })
      }), eh = "ToggleGroupItem", th = I.forwardRef((e, t) => {
        const r = Wv(eh, e.__scopeToggleGroup),
          n = Qv(eh, e.__scopeToggleGroup),
          o = Kv(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = I.useRef(null);
        return n.rovingFocus ? (0, S.jsx)(Mv, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, S.jsx)(rh, {
            ...i,
            ref: t
          })
        }) : (0, S.jsx)(rh, {
          ...i,
          ref: t
        })
      });
      th.displayName = eh;
      var rh = I.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, a = Wv(eh, r), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, S.jsx)(Bv, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? a.onItemActivate(n) : a.onItemDeactivate(n)
          }
        })
      });

      function nh(e) {
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

      function oh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ah(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oh(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = nh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oh(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ih = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ah(ah({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ih(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sh(e.variantClassNames, e => sh(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lh = "var(--foundry_zxwkyk2)",
        ch = "var(--foundry_zxwkyk3)",
        uh = dh({
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
        fh = dh({
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
        ph = dh({
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
        vh = "var(--foundry_zxwkyk1)",
        hh = "var(--foundry_zxwkyk0)",
        yh = dh({
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
      const mh = (0, I.createContext)(null);

      function bh() {
        const e = (0, I.useContext)(mh);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const gh = (0, I.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, q.v6)({
            "data-testid": e,
            className: uh({
              size: t
            }),
            type: r
          }, n);
          return (0, S.jsx)(mh.Provider, {
            value: {
              size: t
            },
            children: (0, S.jsx)(Zv, {
              ref: o,
              ...a
            })
          })
        }),
        wh = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = bh(), o = (0, q.v6)({
            "data-testid": e,
            className: fh({
              size: n
            })
          }, t);
          return (0, S.jsx)(th, {
            ref: r,
            ...o
          })
        }),
        xh = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = bh(), o = ot[e];
          return (0, S.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        _h = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
            "data-testid": e,
            className: yh({
              status: r
            }),
            style: (0, X.DI)({
              [hh]: t?.online,
              [vh]: t?.offline,
              [lh]: t?.away,
              [ch]: t?.busy
            })
          }, n);
          return (0, S.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        jh = (0, I.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = bh(), a = (0, q.v6)({
            "data-testid": e,
            className: ph({
              variant: t,
              size: o
            })
          }, r);
          return (0, S.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var Ch = "Popover",
        [Oh, Rh] = (0, ft.A)(Ch, [zt]),
        Ph = zt(),
        [Nh, Sh] = Oh(Ch),
        Dh = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Ph(t), d = I.useRef(null), [l, c] = I.useState(!1), [u, f] = (0, ar.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Ch
          });
          return (0, S.jsx)(Ut, {
            ...i,
            children: (0, S.jsx)(Nh, {
              scope: t,
              contentId: (0, Ct.B)(),
              triggerRef: d,
              open: u,
              onOpenChange: f,
              onOpenToggle: I.useCallback(() => f(e => !e), [f]),
              hasCustomAnchor: l,
              onCustomAnchorAdd: I.useCallback(() => c(!0), []),
              onCustomAnchorRemove: I.useCallback(() => c(!1), []),
              modal: s,
              children: r
            })
          })
        };
      Dh.displayName = Ch;
      var Ih = "PopoverAnchor",
        Th = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Sh(Ih, r), a = Ph(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return I.useEffect(() => (s(), () => i()), [s, i]), (0, S.jsx)($t, {
            ...a,
            ...n,
            ref: t
          })
        });
      Th.displayName = Ih;
      var zh = "PopoverTrigger",
        kh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Sh(zh, r), a = Ph(r), s = (0, ut.s)(t, o.triggerRef), i = (0, S.jsx)(pt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": Wh(o.open),
            ...n,
            ref: s,
            onClick: (0, ct.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, S.jsx)($t, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      kh.displayName = zh;
      var Eh = "PopoverPortal",
        [Lh, Ah] = Oh(Eh, {
          forceMount: void 0
        }),
        Vh = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Sh(Eh, t);
          return (0, S.jsx)(Lh, {
            scope: t,
            forceMount: r,
            children: (0, S.jsx)(tr, {
              present: r || a.open,
              children: (0, S.jsx)(er, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Vh.displayName = Eh;
      var Mh = "PopoverContent",
        Fh = I.forwardRef((e, t) => {
          const r = Ah(Mh, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Sh(Mh, e.__scopePopover);
          return (0, S.jsx)(tr, {
            present: n || a.open,
            children: a.modal ? (0, S.jsx)(qh, {
              ...o,
              ref: t
            }) : (0, S.jsx)(Xh, {
              ...o,
              ref: t
            })
          })
        });
      Fh.displayName = Mh;
      var Bh = (0, or.TL)("PopoverContent.RemoveScroll"),
        qh = I.forwardRef((e, t) => {
          const r = Sh(Mh, e.__scopePopover),
            n = I.useRef(null),
            o = (0, ut.s)(t, n),
            a = I.useRef(!1);
          return I.useEffect(() => {
            const e = n.current;
            if (e) return (0, Kn.Eq)(e)
          }, []), (0, S.jsx)(Gn.A, {
            as: Bh,
            allowPinchZoom: !0,
            children: (0, S.jsx)(Gh, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ct.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ct.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ct.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        Xh = I.forwardRef((e, t) => {
          const r = Sh(Mh, e.__scopePopover),
            n = I.useRef(!1),
            o = I.useRef(!1);
          return (0, S.jsx)(Gh, {
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
        Gh = I.forwardRef((e, t) => {
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
          } = e, f = Sh(Mh, r), p = Ph(r);
          return (0, Xn.Oh)(), (0, S.jsx)(Ln, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, S.jsx)(bt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, S.jsx)(Yt, {
                "data-state": Wh(f.open),
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
        Kh = "PopoverClose",
        Zh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Sh(Kh, r);
          return (0, S.jsx)(pt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      Zh.displayName = Kh;
      var Hh = I.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Ph(r);
        return (0, S.jsx)(Qt, {
          ...o,
          ...n,
          ref: t
        })
      });

      function Wh(e) {
        return e ? "open" : "closed"
      }
      Hh.displayName = "PopoverArrow";
      var Uh = Dh,
        $h = Th,
        Yh = kh,
        Qh = Vh,
        Jh = Fh,
        ey = Zh,
        ty = Hh;

      function ry(e) {
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

      function ny(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function oy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ny(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ry(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ay(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var sy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        iy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = oy(oy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) sy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ay(e.variantClassNames, e => ay(e, e => e.split(" ")[0]))
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
      const dy = (0, I.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        ly = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, xe.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, q.v6)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, S.jsx)(dy.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, S.jsx)(Uh, {
              ...s
            })
          })
        },
        cy = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, S.jsx)(Yh, {
            ref: r,
            ...n
          })
        }),
        uy = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        fy = (0, I.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, I.useContext)(dy), s = (0, I.useRef)(null), i = (0, xe.UP)(s, o), {
            buttonProps: d
          } = (0, xe.sL)(n, s), l = (0, q.v6)({
            "data-testid": r,
            className: iy({
              size: t
            })
          }, d), c = a ? ot.ChevronUp : ot.ChevronDown;
          return (0, S.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, S.jsx)(c, {
              label: "",
              size: uy[t]
            })]
          })
        }),
        py = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, S.jsx)($h, {
            ref: r,
            ...n
          })
        }),
        vy = (0, I.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, S.jsx)(Jh, {
            ref: n,
            ...o
          })
        }),
        hy = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, S.jsx)(ty, {
            ref: r,
            ...n
          })
        }),
        yy = e => (0, S.jsx)(Qh, {
          ...e
        }),
        my = e => (0, S.jsx)(ey, {
          ...e
        });

      function by(e) {
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

      function gy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = by(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _y = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wy(wy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _y(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xy(e.variantClassNames, e => xy(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cy = "var(--foundry_rmorls2)",
        Oy = jy({
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
        Ry = "var(--foundry_rmorls0)",
        Py = jy({
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
        Ny = "var(--foundry_rmorls3)",
        Sy = "var(--foundry_rmorls1)",
        Dy = jy({
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
        Iy = "Progress",
        [Ty, zy] = (0, ft.A)(Iy),
        [ky, Ey] = Ty(Iy),
        Ly = I.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = My,
            ...s
          } = e;
          !o && 0 !== o || qy(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = qy(o) ? o : 100;
          null === n || Xy(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Xy(n, i) ? n : null,
            l = By(d) ? a(d, i) : void 0;
          return (0, S.jsx)(ky, {
            scope: r,
            value: d,
            max: i,
            children: (0, S.jsx)(pt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": By(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Fy(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      Ly.displayName = Iy;
      var Ay = "ProgressIndicator",
        Vy = I.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Ey(Ay, r);
          return (0, S.jsx)(pt.sG.div, {
            "data-state": Fy(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function My(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Fy(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function By(e) {
        return "number" == typeof e
      }

      function qy(e) {
        return By(e) && !isNaN(e) && e > 0
      }

      function Xy(e, t) {
        return By(e) && !isNaN(e) && e <= t && e >= 0
      }
      Vy.displayName = Ay;
      var Gy = Ly,
        Ky = Vy;
      const Zy = (0, I.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Hy = (0, I.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, S.jsx)(Zy.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, S.jsx)(Wy, {
              ...n,
              ref: o
            })
          })
        }),
        Wy = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? T.DX : "div";
          return (0, S.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        Uy = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, I.useContext)(Zy), i = (0, q.v6)({
            "data-testid": e,
            className: Py({
              size: s
            }),
            value: o,
            max: a,
            style: (0, X.DI)({
              [Ny]: t
            }),
            "data-track": !0
          }, r);
          return (0, S.jsx)(Gy, {
            ref: n,
            ...i
          })
        }),
        $y = (0, I.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, I.useContext)(Zy), i = s ? "-100%" : `-${100-a}%`, d = (0, q.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [Ry]: i,
              [Sy]: `${t}ms`,
              [Cy]: r
            })
          }, n);
          return (0, S.jsx)(Ky, {
            ref: o,
            ...d
          })
        }),
        Yy = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, I.useContext)(Zy), a = (0, q.v6)({
            "data-testid": t,
            className: Oy({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? T.DX : "span";
          return (0, S.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Qy = (0, I.forwardRef)(({
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
          } = (0, I.useContext)(Zy), l = (0, q.v6)({
            "data-testid": e,
            className: Oy({
              size: s
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, S.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, S.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, S.jsx)("span", {
              className: Dy({
                size: s
              }),
              children: "%"
            })]
          }) : (0, S.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        });
      var Jy = "Collapsible",
        [em, tm] = (0, ft.A)(Jy),
        [rm, nm] = em(Jy),
        om = I.forwardRef((e, t) => {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, ar.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Jy
          });
          return (0, S.jsx)(rm, {
            scope: r,
            disabled: a,
            contentId: (0, Ct.B)(),
            open: d,
            onOpenToggle: I.useCallback(() => l(e => !e), [l]),
            children: (0, S.jsx)(pt.sG.div, {
              "data-state": cm(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: t
            })
          })
        });
      om.displayName = Jy;
      var am = "CollapsibleTrigger",
        sm = I.forwardRef((e, t) => {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = nm(am, r);
          return (0, S.jsx)(pt.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": cm(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, ct.mK)(e.onClick, o.onOpenToggle)
          })
        });
      sm.displayName = am;
      var im = "CollapsibleContent",
        dm = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = nm(im, e.__scopeCollapsible);
          return (0, S.jsx)(tr, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, S.jsx)(lm, {
              ...n,
              ref: t,
              present: e
            })
          })
        });
      dm.displayName = im;
      var lm = I.forwardRef((e, t) => {
        const {
          __scopeCollapsible: r,
          present: n,
          children: o,
          ...a
        } = e, s = nm(im, r), [i, d] = I.useState(n), l = I.useRef(null), c = (0, ut.s)(t, l), u = I.useRef(0), f = u.current, p = I.useRef(0), v = p.current, h = s.open || i, y = I.useRef(h), m = I.useRef(void 0);
        return I.useEffect(() => {
          const e = requestAnimationFrame(() => y.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, St.N)(() => {
          const e = l.current;
          if (e) {
            m.current = m.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const t = e.getBoundingClientRect();
            u.current = t.height, p.current = t.width, y.current || (e.style.transitionDuration = m.current.transitionDuration, e.style.animationName = m.current.animationName), d(n)
          }
        }, [s.open, n]), (0, S.jsx)(pt.sG.div, {
          "data-state": cm(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !h,
          ...a,
          ref: c,
          style: {
            "--radix-collapsible-content-height": f ? `${f}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
          },
          children: h && o
        })
      });

      function cm(e) {
        return e ? "open" : "closed"
      }
      var um = om,
        fm = sm,
        pm = dm,
        vm = "Accordion",
        hm = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [ym, mm, bm] = Yr(vm),
        [gm, wm] = (0, ft.A)(vm, [bm, tm]),
        xm = tm(),
        _m = I.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e, o = n, a = n;
          return (0, S.jsx)(ym.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, S.jsx)(Nm, {
              ...a,
              ref: t
            }) : (0, S.jsx)(Pm, {
              ...o,
              ref: t
            })
          })
        });
      _m.displayName = vm;
      var [jm, Cm] = gm(vm), [Om, Rm] = gm(vm, {
        collapsible: !1
      }), Pm = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, ar.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: vm
        });
        return (0, S.jsx)(jm, {
          scope: e.__scopeAccordion,
          value: I.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: I.useCallback(() => a && d(""), [a, d]),
          children: (0, S.jsx)(Om, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, S.jsx)(Im, {
              ...s,
              ref: t
            })
          })
        })
      }), Nm = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, ar.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: vm
        }), d = I.useCallback(e => i((t = []) => [...t, e]), [i]), l = I.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, S.jsx)(jm, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, S.jsx)(Om, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, S.jsx)(Im, {
              ...a,
              ref: t
            })
          })
        })
      }), [Sm, Dm] = gm(vm), Im = I.forwardRef((e, t) => {
        const {
          __scopeAccordion: r,
          disabled: n,
          dir: o,
          orientation: a = "vertical",
          ...s
        } = e, i = I.useRef(null), d = (0, ut.s)(i, t), l = mm(r), c = "ltr" === (0, Ur.jH)(o), u = (0, ct.mK)(e.onKeyDown, e => {
          if (!hm.includes(e.key)) return;
          const t = e.target,
            r = l().filter(e => !e.ref.current?.disabled),
            n = r.findIndex(e => e.ref.current === t),
            o = r.length;
          if (-1 === n) return;
          e.preventDefault();
          let s = n;
          const i = o - 1,
            d = () => {
              s = n + 1, s > i && (s = 0)
            },
            u = () => {
              s = n - 1, s < 0 && (s = i)
            };
          switch (e.key) {
            case "Home":
              s = 0;
              break;
            case "End":
              s = i;
              break;
            case "ArrowRight":
              "horizontal" === a && (c ? d() : u());
              break;
            case "ArrowDown":
              "vertical" === a && d();
              break;
            case "ArrowLeft":
              "horizontal" === a && (c ? u() : d());
              break;
            case "ArrowUp":
              "vertical" === a && u()
          }
          const f = s % o;
          r[f].ref.current?.focus()
        });
        return (0, S.jsx)(Sm, {
          scope: r,
          disabled: n,
          direction: o,
          orientation: a,
          children: (0, S.jsx)(ym.Slot, {
            scope: r,
            children: (0, S.jsx)(pt.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: n ? void 0 : u
            })
          })
        })
      }), Tm = "AccordionItem", [zm, km] = gm(Tm), Em = I.forwardRef((e, t) => {
        const {
          __scopeAccordion: r,
          value: n,
          ...o
        } = e, a = Dm(Tm, r), s = Cm(Tm, r), i = xm(r), d = (0, Ct.B)(), l = n && s.value.includes(n) || !1, c = a.disabled || e.disabled;
        return (0, S.jsx)(zm, {
          scope: r,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, S.jsx)(um, {
            "data-orientation": a.orientation,
            "data-state": qm(l),
            ...i,
            ...o,
            ref: t,
            disabled: c,
            open: l,
            onOpenChange: e => {
              e ? s.onItemOpen(n) : s.onItemClose(n)
            }
          })
        })
      });
      Em.displayName = Tm;
      var Lm = "AccordionHeader",
        Am = I.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Dm(vm, r), a = km(Lm, r);
          return (0, S.jsx)(pt.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": qm(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        });
      Am.displayName = Lm;
      var Vm = "AccordionTrigger",
        Mm = I.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Dm(vm, r), a = km(Vm, r), s = Rm(Vm, r), i = xm(r);
          return (0, S.jsx)(ym.ItemSlot, {
            scope: r,
            children: (0, S.jsx)(fm, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        });
      Mm.displayName = Vm;
      var Fm = "AccordionContent",
        Bm = I.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Dm(vm, r), a = km(Fm, r), s = xm(r);
          return (0, S.jsx)(pm, {
            role: "region",
            "aria-labelledby": a.triggerId,
            "data-orientation": o.orientation,
            ...s,
            ...n,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function qm(e) {
        return e ? "open" : "closed"
      }
      Bm.displayName = Fm;
      var Xm = _m,
        Gm = Em,
        Km = Am,
        Zm = Mm,
        Hm = Bm;

      function Wm(e) {
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

      function Um(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Um(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Wm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ym(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Qm = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Jm = "foundry_1vzsjid2",
        eb = "foundry_1vzsjidm",
        tb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $m($m({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ym(e.variantClassNames, e => Ym(e, e => e.split(" ")[0]))
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
      const rb = (0, I.createContext)({
          mode: "solid",
          layer: 0
        }),
        nb = (0, I.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, S.jsx)(rb.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, S.jsx)(ob, {
            ...n,
            ref: o,
            type: r
          })
        })),
        ob = (0, I.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, S.jsx)(Xm, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        ab = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, I.useContext)(rb), a = (0, q.v6)({
            className: tb({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, S.jsx)(Gm, {
            ref: r,
            ...a
          })
        }),
        sb = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, S.jsx)(Km, {
            ref: r,
            ...n
          })
        }),
        ib = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, S.jsx)(Zm, {
            ref: n,
            ...o,
            children: r.asChild && (0, I.isValidElement)(e) ? (0, I.cloneElement)(e, {
              children: (0, S.jsx)("span", {
                className: Jm,
                children: e.props.children
              })
            }) : (0, S.jsx)("span", {
              className: Jm,
              children: e
            })
          })
        }),
        db = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        lb = (0, I.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = ot[e],
            o = (0, q.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, S.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        cb = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, S.jsx)(Hm, {
            ref: o,
            ...a,
            children: t && (0, I.isValidElement)(e) ? (0, I.cloneElement)(e, {
              children: (0, S.jsx)("div", {
                className: eb,
                children: e.props.children
              })
            }) : (0, S.jsx)("div", {
              className: eb,
              children: e
            })
          })
        })
    }
  }
]);