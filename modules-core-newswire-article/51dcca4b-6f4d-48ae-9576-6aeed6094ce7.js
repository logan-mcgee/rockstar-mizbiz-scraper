try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "51dcca4b-6f4d-48ae-9576-6aeed6094ce7", e._sentryDebugIdIdentifier = "sentry-dbid-51dcca4b-6f4d-48ae-9576-6aeed6094ce7")
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
  [2983], {
    82983(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => R,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => x,
        Badge: () => b,
        Body: () => ce,
        Breadcrumbs: () => y,
        Button: () => P.$,
        Checkbox: () => d,
        ChipGroup: () => C,
        Code: () => fe,
        Dialog: () => w,
        Display: () => pe,
        Divider: () => B,
        Dropdown: () => a,
        Heading: () => he,
        IconButton: () => S.K,
        Label: () => ye,
        Lightbox: () => o,
        Loader: () => te,
        Pagination: () => _,
        Popover: () => j,
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
        Toast: () => m,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => Hr,
        Content: () => Zr,
        Portal: () => Wr,
        Root: () => Gr,
        Trigger: () => Kr,
        useTooltipContext: () => Xr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => Lo,
        Close: () => Bo,
        Content: () => Io,
        Controls: () => Ao,
        CssVars: () => Go,
        Download: () => Xo,
        Image: () => Eo,
        Keyboard: () => Mo,
        LightboxContext: () => _o,
        OpenIcon: () => So,
        Overlay: () => Do,
        Portal: () => No,
        Reset: () => qo,
        Root: () => Co,
        RootImplContext: () => jo,
        Thumbnail: () => Po,
        Trigger: () => Ro,
        Zoom: () => Fo,
        ZoomPan: () => To
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => li,
        Description: () => mi,
        Hint: () => yi,
        Label: () => hi,
        Option: () => bi,
        OptionIcon: () => wi,
        OptionText: () => gi,
        Portal: () => xi,
        Root: () => di,
        ScrollArea: () => ui,
        StatusIcon: () => Ci,
        StatusRoot: () => _i,
        StatusText: () => ji,
        Trigger: () => fi,
        TriggerIcon: () => vi,
        TriggerText: () => pi,
        Viewport: () => ci,
        useDropdownContext: () => ii
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Xi,
        Input: () => Bi,
        Label: () => qi,
        Root: () => Fi,
        useSwitchContext: () => Mi
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Zi,
        CheckMD: () => Ki,
        CheckXL: () => Hi,
        DashLG: () => Ui,
        DashMD: () => Wi,
        DashXL: () => Yi
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => vd,
        ErrorText: () => hd,
        Group: () => bd,
        GroupDescription: () => wd,
        GroupErrorText: () => _d,
        GroupItems: () => xd,
        GroupLabel: () => gd,
        Input: () => fd,
        Label: () => pd,
        Root: () => ud,
        useGroupContext: () => yd
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => Vd,
        Hint: () => Md,
        Input: () => Ad,
        Label: () => Ld,
        Root: () => Ed,
        RootContext: () => zd,
        StatusIcon: () => Bd,
        StatusRoot: () => Fd,
        StatusText: () => qd,
        useTextAreaContext: () => kd
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => vl,
        DotMD: () => pl,
        DotXL: () => hl
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => ol,
        Input: () => yl,
        Label: () => nl,
        Option: () => ml,
        OptionDescription: () => gl,
        OptionLabel: () => bl,
        Options: () => rl,
        Root: () => tl,
        StatusIcon: () => sl,
        StatusRoot: () => al,
        StatusText: () => il,
        useRadioGroupContext: () => el
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => ql,
        Control: () => Ml,
        Description: () => Gl,
        Hint: () => Vl,
        Icon: () => Bl,
        Input: () => Fl,
        Label: () => Al,
        PasswordButton: () => Xl,
        Root: () => Ll,
        StatusIcon: () => Zl,
        StatusRoot: () => Kl,
        StatusText: () => Hl
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => mc,
        CloseButton: () => jc,
        Description: () => wc,
        ErrorText: () => Cc,
        Footer: () => _c,
        Header: () => hc,
        Icon: () => bc,
        Link: () => xc,
        Root: () => vc,
        RootContext: () => fc,
        Title: () => gc,
        iconStatusMap: () => yc,
        useAlertContext: () => pc
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => Bc,
        CloseButton: () => Gc,
        Description: () => Fc,
        Icon: () => Mc,
        Link: () => Xc,
        PaginationCounter: () => Wc,
        PaginationNav: () => Kc,
        PaginationNextButton: () => Zc,
        PaginationPrevButton: () => Hc,
        PaginationViewport: () => qc,
        Root: () => Ac,
        RootContext: () => Ec,
        iconStatusMap: () => Vc,
        useAlertBannerContext: () => Lc
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => lu,
        Icon: () => du,
        Label: () => iu,
        Root: () => su,
        RootContext: () => ou,
        useTagContext: () => au
      });
      var m = {};
      r.r(m), r.d(m, {
        Action: () => pf,
        CloseButton: () => vf,
        Description: () => cf,
        Icon: () => ff,
        Provider: () => of,
        Root: () => lf,
        RootContext: () => sf,
        Viewport: () => af,
        iconAppearanceMap: () => uf,
        useToastContext: () => df
      });
      var y = {};
      r.r(y), r.d(y, {
        Icon: () => Nf,
        Item: () => Sf,
        OverflowMenu: () => Df,
        OverflowMenuItem: () => If,
        Root: () => Pf,
        RootContext: () => Rf,
        useBreadcrumbsContext: () => Of
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => qf,
        Label: () => Bf,
        Root: () => Ff,
        useBadgeContext: () => Mf
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => tp,
        Root: () => $f,
        Scrollbar: () => Jf,
        Thumb: () => ep,
        Viewport: () => Qf
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => Op,
        CloseButton: () => jp,
        Content: () => mp,
        Description: () => bp,
        Footer: () => Rp,
        Header: () => xp,
        HeaderButton: () => Cp,
        HeaderTitle: () => _p,
        Layout: () => wp,
        Overlay: () => hp,
        Portal: () => vp,
        Root: () => up,
        ScrollArea: () => gp,
        Title: () => yp,
        Trigger: () => pp
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => tv,
        Root: () => ev,
        StatusIndicator: () => rv,
        useAvatarContext: () => Jp
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => hv,
        Dropdown: () => wv,
        DropdownLabel: () => gv,
        Ellipsis: () => vv,
        Item: () => uv,
        Label: () => _v,
        Next: () => pv,
        Option: () => xv,
        Pages: () => cv,
        Prev: () => fv,
        ResultsPerPage: () => bv,
        Root: () => lv
      });
      var C = {};
      r.r(C), r.d(C, {
        Icon: () => _h,
        Item: () => xh,
        Label: () => jh,
        Root: () => wh,
        StatusIndicator: () => Ch,
        useChipGroupContext: () => gh
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => vm,
        Arrow: () => mm,
        Close: () => bm,
        Content: () => hm,
        Portal: () => ym,
        Root: () => cm,
        RootContext: () => lm,
        Trigger: () => um,
        TriggerButton: () => pm
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => $m,
        Label: () => Qm,
        Root: () => Wm,
        Track: () => Ym,
        UnitLabel: () => Jm
      });
      var R = {};
      r.r(R), r.d(R, {
        Content: () => ub,
        Header: () => ib,
        Icon: () => lb,
        Item: () => sb,
        Root: () => ob,
        Trigger: () => db,
        TriggerIcon: () => cb
      });
      var P = r(72976),
        S = r(69066),
        N = r(39793),
        D = r(81270),
        I = r(93082),
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
        return (0, N.jsx)(c, {
          ref: i,
          className: (0, D.clsx)(F({
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
        Y = "var(--foundry_9dxgbc2)",
        $ = "var(--foundry_9dxgbc3)",
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
              [Y]: n?.gradientColorBackground,
              [$]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? T.DX : "div";
        return (0, N.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, N.jsx)(T.xV, {
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
        return (0, N.jsx)(s, {
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
          return (0, N.jsx)(a, {
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
          return (0, N.jsx)(o, {
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
        return (0, N.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
        })
      });
      var me = de({
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
      const ye = (0, I.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? T.DX : "p",
          i = (0, q.v6)({
            className: me({
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
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var xe = r(2432),
        _e = r(93529),
        Ce = r(99206),
        je = r(34811);
      const Oe = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Re = ([e, t]) => ({
        x: e,
        y: t
      }), Pe = (e, t) => (e.x = t.x, e.y = t.y, e), Se = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ne = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), De = (e, t, r) => Math.min(Math.max(e, t), r);
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
      _e.os.registerPlugin(Ce.L);
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
      var ot = r(52321),
        at = {};
      r.r(at), r.d(at, {
        Activity: () => ot.Il,
        ArrowDown: () => ot.yd,
        ArrowLeft: () => ot.nk,
        ArrowRight: () => ot.Qp,
        ArrowRightLeft: () => ot.nF,
        ArrowUp: () => ot.Do,
        ArrowUpDown: () => ot.hD,
        Book: () => ot.E3,
        Bug: () => ot.zP,
        BugOff: () => ot.k_,
        Calendar: () => ot.Vv,
        CalendarOff: () => ot.is,
        Car: () => ot.TH,
        CarSide: () => ot.cY,
        ChartSpline: () => ot.m3,
        Check: () => ot.Jl,
        ChevronDown: () => ot.yQ,
        ChevronFirst: () => ot.mf,
        ChevronLast: () => ot.Ou,
        ChevronLeft: () => ot.JG,
        ChevronRight: () => ot.c_,
        ChevronUp: () => ot.rX,
        ChevronsDownUp: () => ot.WE,
        ChevronsLeftRight: () => ot.UQ,
        ChevronsUpDown: () => ot.Ml,
        Circle: () => ot.jl,
        CircleCheck: () => ot.rW,
        CircleCheckFilled: () => ot.Dw,
        CircleDollarSign: () => ot.OJ,
        CircleHelp: () => ot.YC,
        CircleMinus: () => ot.ZX,
        CircleMinusFilled: () => ot.r0,
        CirclePerson: () => ot.q_,
        CircleSlash: () => ot.o6,
        CircleX: () => ot.RT,
        Clipboard: () => ot.B0,
        Clock: () => ot.zD,
        CloudAlert: () => ot.K4,
        CloudDownload: () => ot.MQ,
        CloudUpload: () => ot.bK,
        CodeXml: () => ot.bv,
        Copy: () => ot.QR,
        Cpu: () => ot.fX,
        CreditCard: () => ot.y5,
        Database: () => ot.Wm,
        Discord: () => ot.bY,
        DollarSign: () => ot.G9,
        Download: () => ot.f5,
        EllipsisVertical: () => ot.Yb,
        Envelope: () => ot.Lh,
        EnvelopeOpen: () => ot.jd,
        EpicGames: () => ot.fk,
        ExternalLink: () => ot.Gr,
        Eye: () => ot.kU,
        EyeClosed: () => ot.Cz,
        EyeOff: () => ot.X_,
        Facebook: () => ot.f1,
        FastForward: () => ot.Ej,
        FileText: () => ot.iU,
        Files: () => ot.sv,
        Filter: () => ot.dJ,
        Flag: () => ot.lN,
        FlagOff: () => ot.Ih,
        Gear: () => ot.OB,
        Globe: () => ot.qz,
        Handshake: () => ot.g6,
        Headset: () => ot.BC,
        Heart: () => ot.B1,
        HeartPulse: () => ot.iY,
        House: () => ot.tT,
        Image: () => ot._V,
        Info: () => ot.R2,
        Instagram: () => ot.pd,
        LayoutGrid: () => ot.D6,
        Lightbulb: () => ot.g5,
        Link: () => ot.N_,
        List: () => ot.B8,
        ListFilter: () => ot.xt,
        ListMusic: () => ot.w7,
        LockKeyhole: () => ot.NT,
        LockPassword: () => ot.HI,
        LogOut: () => ot.nU,
        MapPin: () => ot.sD,
        Maximize: () => ot.hz,
        Maximize2: () => ot.h1,
        Menu: () => ot.W1,
        MessageSquareText: () => ot.AJ,
        Mic: () => ot.GO,
        MicFilled: () => ot.cX,
        Minimize: () => ot.Xj,
        Minimize2: () => ot.xq,
        Minus: () => ot.Hs,
        Monitor: () => ot.VA,
        Moon: () => ot.AX,
        NintendoSwitch: () => ot.Su,
        PaperPlane: () => ot.d8,
        Paperclip: () => ot.xv,
        PartialCircle: () => ot.IM,
        Pause: () => ot.vR,
        Pencil: () => ot.gH,
        PencilOff: () => ot.hE,
        Person: () => ot._A,
        PersonBlock: () => ot.hs,
        PersonMinus: () => ot._E,
        PersonPlus: () => ot.c1,
        Pin: () => ot.yU,
        PinFilled: () => ot.IF,
        Play: () => ot.jG,
        Playstation: () => ot.p6,
        Plus: () => ot.FW,
        Power: () => ot.aJ,
        Property: () => ot.mA,
        Reddit: () => ot.TZ,
        RefreshCcw: () => ot.PM,
        RefreshCw: () => ot.e9,
        RefreshCwOff: () => ot.X0,
        Replay: () => ot.eJ,
        Rewind: () => ot.Y8,
        Save: () => ot.eM,
        Search: () => ot.vj,
        Server: () => ot.gq,
        ShieldAlert: () => ot.yZ,
        ShieldCheck: () => ot.ox,
        ShoppingBag: () => ot.Nw,
        SkipBack: () => ot.L9,
        SkipForward: () => ot.xP,
        Star: () => ot.FE,
        StarOff: () => ot.UM,
        Steam: () => ot.Rv,
        Stop: () => ot.VG,
        Store: () => ot.il,
        Sun: () => ot.bd,
        ThumbsDown: () => ot.z9,
        ThumbsUp: () => ot.tw,
        Tiktok: () => ot.Tc,
        Trash: () => ot.lM,
        TriangleAlert: () => ot.lW,
        Trophy: () => ot.Xs,
        Truck: () => ot.No,
        Twitch: () => ot.YA,
        Twitter: () => ot.KK,
        TwoPeople: () => ot.LM,
        Undo: () => ot.Vn,
        Unlink: () => ot.c2,
        Upload: () => ot._O,
        UserCouple: () => ot.Cn,
        UserGroup: () => ot.zr,
        Volume: () => ot.fS,
        Volume1: () => ot.c6,
        Volume2: () => ot.jI,
        VolumeX: () => ot.XL,
        Wallet: () => ot.uW,
        Weapon: () => ot.Re,
        Wifi: () => ot.MJ,
        WifiOff: () => ot.RQ,
        Wrench: () => ot.pi,
        X: () => ot.X,
        Xbox: () => ot.ms,
        Youtube: () => ot.k,
        ZoomIn: () => ot.$Z,
        ZoomOut: () => ot.en
      });
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
      var it = "foundry_bc732x1";
      const dt = (0, I.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, Ie.vC)(e, e => r?.(e), [r]), (0, N.jsx)(ce, {
        size: "XS",
        className: (0, D.clsx)("foundry_bc732x0", {
          [it]: t
        }),
        asChild: !0,
        children: (0, N.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var lt, ct = r(71433),
        ut = r(39467),
        ft = r(64239),
        pt = r(54958),
        vt = r(80082),
        ht = r(94660),
        mt = r(61144),
        yt = "dismissableLayer.update",
        bt = I.createContext({
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
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: d,
            ...l
          } = e, c = I.useContext(bt), [u, f] = I.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = I.useState({}), h = (0, ft.s)(t, e => f(e)), m = Array.from(c.layers), [y] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(y), g = u ? m.indexOf(u) : -1, w = c.layersWithOutsidePointerEventsDisabled.size > 0, x = g >= b, _ = I.useRef(!1), C = function(e, t) {
            const {
              ownerDocument: r = globalThis?.document,
              deferPointerDownOutside: n = !1,
              isDeferredPointerDownOutsideRef: o,
              dismissableSurfaces: a
            } = t, s = (0, ht.c)(e), i = I.useRef(!1), d = I.useRef(!1), l = I.useRef(new Map), c = I.useRef(() => {});
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
                      e(), t || _t("dismissableLayer.pointerDownOutside", s, i, {
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
          }), j = function(e, t = globalThis?.document) {
            const r = (0, ht.c)(e),
              n = I.useRef(!1);
            return I.useEffect(() => {
              const e = e => {
                e.target && !n.current && _t("dismissableLayer.focusOutside", r, {
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
          return (0, mt.U)(e => {
            g === c.layers.size - 1 && (o?.(e), !e.defaultPrevented && d && (e.preventDefault(), d()))
          }, p), I.useEffect(() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (lt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), xt(), () => {
              r && (c.layersWithOutsidePointerEventsDisabled.delete(u), 0 === c.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = lt))
            }
          }, [u, p, r, c]), I.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), xt())
          }, [u, c]), I.useEffect(() => {
            const e = () => v({});
            return document.addEventListener(yt, e), () => document.removeEventListener(yt, e)
          }, []), (0, N.jsx)(vt.sG.div, {
            ...l,
            ref: h,
            style: {
              pointerEvents: w ? x ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, ut.mK)(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: (0, ut.mK)(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: (0, ut.mK)(e.onPointerDownCapture, C.onPointerDownCapture)
          })
        });
      gt.displayName = "DismissableLayer";
      var wt = I.forwardRef((e, t) => {
        const r = I.useContext(bt),
          n = I.useRef(null),
          o = (0, ft.s)(t, n);
        return I.useEffect(() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }, [r.branches]), (0, N.jsx)(vt.sG.div, {
          ...e,
          ref: o
        })
      });

      function xt() {
        const e = new CustomEvent(yt);
        document.dispatchEvent(e)
      }

      function _t(e, t, r, {
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
        }), n ? (0, vt.hO)(o, a) : o.dispatchEvent(a)
      }
      wt.displayName = "DismissableLayerBranch";
      var Ct = gt,
        jt = wt,
        Ot = r(94296),
        Rt = r(17966),
        Pt = r(10376),
        St = I.forwardRef((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, N.jsx)(vt.sG.svg, {
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
      St.displayName = "Arrow";
      var Nt = St,
        Dt = r(10198),
        It = r(5024),
        Tt = "Popper",
        [zt, kt] = (0, pt.A)(Tt),
        [Et, Lt] = zt(Tt),
        At = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = I.useState(null), [a, s] = I.useState(void 0);
          return (0, N.jsx)(Et, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            placementState: a,
            setPlacementState: s,
            children: r
          })
        };
      At.displayName = Tt;
      var Vt = "PopperAnchor",
        Mt = I.forwardRef((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, a = Lt(Vt, r), s = I.useRef(null), i = a.onAnchorChange, d = I.useCallback(e => {
            s.current = e, e && i(e)
          }, [i]), l = (0, ft.s)(t, d), c = I.useRef(null);
          I.useEffect(() => {
            if (!n) return;
            const e = c.current;
            c.current = n.current, e !== c.current && i(c.current)
          });
          const u = a.placementState && Ut(a.placementState),
            f = u?.[0],
            p = u?.[1];
          return n ? null : (0, N.jsx)(vt.sG.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...o,
            ref: l
          })
        });
      Mt.displayName = Vt;
      var Ft = "PopperContent",
        [Bt, qt] = zt(Ft),
        Xt = I.forwardRef((e, t) => {
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
          } = e, m = Lt(Ft, r), [y, b] = I.useState(null), g = (0, ft.s)(t, e => b(e)), [w, x] = I.useState(null), _ = (0, It.X)(w), C = _?.width ?? 0, j = _?.height ?? 0, O = n + ("center" !== a ? "-" + a : ""), R = "number" == typeof c ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
          }, P = Array.isArray(l) ? l : [l], S = P.length > 0, D = {
            padding: R,
            boundary: P.filter(Ht),
            altBoundary: S
          }, {
            refs: T,
            floatingStyles: z,
            placement: k,
            isPositioned: E,
            middlewareData: L
          } = (0, Rt.we)({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => (0, Pt.ll)(...e, {
              animationFrame: "always" === p
            }),
            elements: {
              reference: m.anchor
            },
            middleware: [(0, Rt.cY)({
              mainAxis: o + j,
              alignmentAxis: s
            }), d && (0, Rt.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === u ? (0, Rt.ER)() : void 0,
              ...D
            }), d && (0, Rt.UU)({
              ...D
            }), (0, Rt.Ej)({
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
            }), w && (0, Rt.UE)({
              element: w,
              padding: i
            }), Wt({
              arrowWidth: C,
              arrowHeight: j
            }), f && (0, Rt.jD)({
              strategy: "referenceHidden",
              ...D,
              boundary: S ? D.boundary : void 0
            })]
          }), A = m.setPlacementState;
          (0, Dt.N)(() => (A(k), () => {
            A(void 0)
          }), [k, A]);
          const [V, M] = Ut(k), F = (0, ht.c)(v);
          (0, Dt.N)(() => {
            E && F?.()
          }, [E, F]);
          const B = L.arrow?.x,
            q = L.arrow?.y,
            X = 0 !== L.arrow?.centerOffset,
            [G, K] = I.useState();
          return (0, Dt.N)(() => {
            y && K(window.getComputedStyle(y).zIndex)
          }, [y]), (0, N.jsx)("div", {
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
            children: (0, N.jsx)(Bt, {
              scope: r,
              placedSide: V,
              placedAlign: M,
              onArrowChange: x,
              arrowX: B,
              arrowY: q,
              shouldHideArrow: X,
              children: (0, N.jsx)(vt.sG.div, {
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
      Xt.displayName = Ft;
      var Gt = "PopperArrow",
        Kt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        Zt = I.forwardRef(function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = qt(Gt, r), a = Kt[o.placedSide];
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
            children: (0, N.jsx)(Nt, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        });

      function Ht(e) {
        return null !== e
      }
      Zt.displayName = Gt;
      var Wt = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, s = a ? 0 : e.arrowWidth, i = a ? 0 : e.arrowHeight, [d, l] = Ut(r), c = {
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

      function Ut(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Yt = At,
        $t = Mt,
        Qt = Xt,
        Jt = Zt,
        er = r(84017),
        tr = I.forwardRef((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, a] = I.useState(!1);
          (0, Dt.N)(() => a(!0), []);
          const s = r || o && globalThis?.document?.body;
          return s ? er.createPortal((0, N.jsx)(vt.sG.div, {
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
            const e = or(n.current);
            a.current = "mounted" === i ? e : "none"
          }, [i]), (0, Dt.N)(() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                s = or(t);
              d(e ? "MOUNT" : "none" === s || "none" === t?.display ? "UNMOUNT" : r && n !== s ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }, [e, d]), (0, Dt.N)(() => {
            if (t) {
              let e;
              const r = t.ownerDocument.defaultView ?? window,
                s = a => {
                  const s = or(n.current).includes(CSS.escape(a.animationName));
                  if (a.target === t && s && (d("ANIMATION_END"), !o.current)) {
                    const n = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards", e = r.setTimeout(() => {
                      "forwards" === t.style.animationFillMode && (t.style.animationFillMode = n)
                    })
                  }
                },
                i = e => {
                  e.target === t && (a.current = or(n.current))
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
              const r = nr(t, e);
              return n || "function" != typeof r || (n = !0), r
            });
            if (n) return () => {
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                "function" == typeof t ? t() : nr(r[e], null)
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

      function nr(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function or(e) {
        return e?.animationName || "none"
      }
      rr.displayName = "Presence";
      var ar = r(17172),
        sr = r(17038),
        ir = r(92023),
        [dr, lr] = (0, pt.A)("Tooltip", [kt]),
        cr = kt(),
        ur = "TooltipProvider",
        fr = 700,
        pr = "tooltip.open",
        [vr, hr] = dr(ur),
        mr = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = fr,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = I.useRef(!0), i = I.useRef(!1), d = I.useRef(0);
          return I.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, N.jsx)(vr, {
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
      mr.displayName = ur;
      var yr = "Tooltip",
        [br, gr] = dr(yr),
        wr = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = hr(yr, e.__scopeTooltip), l = cr(t), [c, u] = I.useState(null), f = (0, Ot.B)(), p = I.useRef(0), v = s ?? d.disableHoverableContent, h = i ?? d.delayDuration, m = I.useRef(!1), [y, b] = (0, sr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(pr))) : d.onClose(), a?.(e)
            },
            caller: yr
          }), g = I.useMemo(() => y ? m.current ? "delayed-open" : "instant-open" : "closed", [y]), w = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, m.current = !1, b(!0)
          }, [b]), x = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
          }, [b]), _ = I.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              m.current = !0, b(!0), p.current = 0
            }, h)
          }, [h, b]);
          return I.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, N.jsx)(Yt, {
            ...l,
            children: (0, N.jsx)(br, {
              scope: t,
              contentId: f,
              open: y,
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
      wr.displayName = yr;
      var xr = "TooltipTrigger",
        _r = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = gr(xr, r), a = hr(xr, r), s = cr(r), i = I.useRef(null), d = (0, ft.s)(t, i, o.onTriggerChange), l = I.useRef(!1), c = I.useRef(!1), u = I.useCallback(() => l.current = !1, []);
          return I.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, N.jsx)($t, {
            asChild: !0,
            ...s,
            children: (0, N.jsx)(vt.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: d,
              onPointerMove: (0, ut.mK)(e.onPointerMove, e => {
                "touch" !== e.pointerType && (c.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              }),
              onPointerLeave: (0, ut.mK)(e.onPointerLeave, () => {
                o.onTriggerLeave(), c.current = !1
              }),
              onPointerDown: (0, ut.mK)(e.onPointerDown, () => {
                o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              }),
              onFocus: (0, ut.mK)(e.onFocus, () => {
                l.current || o.onOpen()
              }),
              onBlur: (0, ut.mK)(e.onBlur, o.onClose),
              onClick: (0, ut.mK)(e.onClick, o.onClose)
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
        Sr = I.forwardRef((e, t) => {
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
            }) : (0, N.jsx)(Nr, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        Nr = I.forwardRef((e, t) => {
          const r = gr(Pr, e.__scopeTooltip),
            n = hr(Pr, e.__scopeTooltip),
            o = I.useRef(null),
            a = (0, ft.s)(t, o),
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
          }, [d, c, s, l, f]), (0, N.jsx)(zr, {
            ...e,
            ref: a
          })
        }),
        [Dr, Ir] = dr(yr, {
          isInside: !1
        }),
        Tr = (0, ar.Dc)("TooltipContent"),
        zr = I.forwardRef((e, t) => {
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
          return I.useEffect(() => (document.addEventListener(pr, c), () => document.removeEventListener(pr, c)), [c]), I.useEffect(() => {
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
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, N.jsxs)(Qt, {
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
                children: (0, N.jsx)(ir.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Sr.displayName = Pr;
      var kr = "TooltipArrow",
        Er = I.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = cr(r);
          return Ir(kr, r).isInside ? null : (0, N.jsx)(Jt, {
            ...o,
            ...n,
            ref: t
          })
        });
      Er.displayName = kr;
      var Lr = mr,
        Ar = wr,
        Vr = _r,
        Mr = Rr,
        Fr = Sr,
        Br = Er;
      const qr = (0, I.createContext)(null);

      function Xr() {
        const e = (0, I.useContext)(qr);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const Gr = ({
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
        Kr = (0, I.forwardRef)(({
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
        Zr = (0, I.forwardRef)(({
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
          } = Xr(), c = (0, xe.jt)(), u = (0, ct.CS)(Fr), f = (0, ct.pn)(l, {
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
            config: ct.$W.stiff,
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
          return f(e => (0, N.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        Hr = (0, I.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, q.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, N.jsx)(Br, {
            ...r,
            ref: t
          })
        }),
        Wr = Mr;
      var Ur = r(81471),
        Yr = r(99136),
        $r = r(52184);

      function Qr(e) {
        const t = e + "CollectionProvider",
          [r, n] = (0, pt.A)(t),
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
            return (0, N.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          };
        s.displayName = t;
        const i = e + "CollectionSlot",
          d = (0, ar.TL)(i),
          l = I.forwardRef((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = a(i, r), s = (0, ft.s)(t, o.collectionRef);
            return (0, N.jsx)(d, {
              ref: s,
              children: n
            })
          });
        l.displayName = i;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = (0, ar.TL)(c),
          p = I.forwardRef((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = I.useRef(null), i = (0, ft.s)(t, s), d = a(c, r);
            return I.useEffect(() => (d.itemMap.set(s, {
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
          return I.useCallback(() => {
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
        [sn, dn] = (0, pt.A)(rn, [an]),
        [ln, cn] = sn(rn),
        un = I.forwardRef((e, t) => {
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
          } = e, m = I.useRef(new Set), y = I.useRef(0), b = I.useRef(!1), g = "horizontal" === s ? vn : hn, [w = [], x] = (0, sr.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...m.current];
              t[y.current]?.focus({
                preventScroll: !0,
                focusVisible: b.current
              }), b.current = !1, u(e)
            }
          }), _ = I.useRef(w);

          function C(e, t, {
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
              l = (0, Ur.q)(i, [n, o]);
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
                y.current = n.indexOf(l);
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
            valueIndexToChangeRef: y,
            thumbs: m.current,
            values: w,
            orientation: s,
            form: v,
            children: (0, N.jsx)(nn.Provider, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(nn.Slot, {
                scope: e.__scopeSlider,
                children: (0, N.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: t,
                  onPointerDown: (0, ut.mK)(h.onPointerDown, () => {
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
                    C(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    C(e, y.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = _.current[y.current];
                    w[y.current] !== e && f(w)
                  },
                  onHomeKeyDown: () => {
                    i || (b.current = !0, C(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (b.current = !0, C(o, w.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      b.current = !0;
                      const r = Jr.includes(e.key) || e.shiftKey && en.includes(e.key) ? 10 : 1,
                        n = y.current;
                      C(w[n] + a * r * t, n, {
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
      }), vn = I.forwardRef((e, t) => {
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
        } = e, [u, f] = I.useState(null), p = (0, ft.s)(t, e => f(e)), v = I.useRef(void 0), h = (0, Yr.jH)(o), m = "ltr" === h, y = m && !a || !m && a;

        function b(e) {
          const t = v.current || u.getBoundingClientRect(),
            o = Tn([0, t.width], y ? [r, n] : [n, r]);
          return v.current = t, o(e - t.left)
        }
        return (0, N.jsx)(fn, {
          scope: e.__scopeSlider,
          startEdge: y ? "left" : "right",
          endEdge: y ? "right" : "left",
          direction: y ? 1 : -1,
          size: "width",
          children: (0, N.jsx)(mn, {
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
              const t = tn[y ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), hn = I.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = I.useRef(null), u = (0, ft.s)(t, c), f = I.useRef(void 0), p = !o;

        function v(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Tn([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, N.jsx)(fn, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, N.jsx)(mn, {
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
      }), mn = I.forwardRef((e, t) => {
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
        return (0, N.jsx)(vt.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, ut.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : Jr.concat(en).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, ut.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, ut.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, ut.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), yn = "SliderTrack", bn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = cn(yn, r);
        return (0, N.jsx)(vt.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      bn.displayName = yn;
      var gn = "SliderRange",
        wn = I.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = cn(gn, r), a = pn(gn, r), s = I.useRef(null), i = (0, ft.s)(t, s), d = o.values.length, l = o.values.map(e => In(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, N.jsx)(vt.sG.span, {
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
        [_n, Cn] = sn(xn),
        jn = "SliderThumbProvider";

      function On(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = cn(jn, t), s = on(t), [i, d] = I.useState(null), l = I.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, It.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : In(f, a.min, a.max);
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
        return (0, N.jsx)(_n, {
          scope: t,
          ...h,
          children: zn(o) ? o(h) : n
        })
      }
      On.displayName = jn;
      var Rn = "SliderThumbTrigger",
        Pn = I.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = cn(Rn, r), a = pn(Rn, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Cn(Rn, r), u = (0, ft.s)(t, e => c(e)), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(s, o.values.length), p = l?.[a.size], v = p ? function(e, t, r) {
            const n = e / 2;
            return (n - Tn([0, 50], [0, n])(t) * r) * r
          }(p, d, a.direction) : 0;
          return (0, N.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, N.jsx)(nn.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(vt.sG.span, {
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
                onFocus: (0, ut.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Pn.displayName = Rn;
      var Sn = I.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, N.jsx)(On, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(Pn, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, N.jsx)(Dn, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Sn.displayName = xn;
      var Nn = "SliderBubbleInput",
        Dn = I.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: a
          } = Cn(Nn, e), s = I.useRef(null), i = (0, ft.s)(s, r), d = (0, $r.Z)(n);
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
          }, [d, n]), (0, N.jsx)(vt.sG.input, {
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

      function In(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, Ur.q)(n, [0, 100])
      }

      function Tn(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function zn(e) {
        return "function" == typeof e
      }
      Dn.displayName = Nn;
      var kn = "focusScope.autoFocusOnMount",
        En = "focusScope.autoFocusOnUnmount",
        Ln = {
          bubbles: !1,
          cancelable: !0
        },
        An = I.forwardRef((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...s
          } = e, [i, d] = I.useState(null), l = (0, ht.c)(o), c = (0, ht.c)(a), u = I.useRef(null), f = (0, ft.s)(t, e => d(e)), p = I.useRef({
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
                  i.contains(t) ? u.current = t : Bn(u.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (p.paused || !i) return;
                  const t = e.relatedTarget;
                  null !== t && (i.contains(t) || Bn(u.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Bn(i)
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
              qn.add(p);
              const e = document.activeElement;
              if (!i.contains(e)) {
                const t = new CustomEvent(kn, Ln);
                i.addEventListener(kn, l), i.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (Bn(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(Vn(i).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && Bn(i))
              }
              return () => {
                i.removeEventListener(kn, l), setTimeout(() => {
                  const t = new CustomEvent(En, Ln);
                  i.addEventListener(En, c), i.dispatchEvent(t), t.defaultPrevented || Bn(e ?? document.body, {
                    select: !0
                  }), i.removeEventListener(En, c), qn.remove(p)
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
                  const t = Vn(e);
                  return [Mn(t, e), Mn(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && Bn(a, {
                select: !0
              })) : (e.preventDefault(), r && Bn(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [r, n, p.paused]);
          return (0, N.jsx)(vt.sG.div, {
            tabIndex: -1,
            ...s,
            ref: f,
            onKeyDown: v
          })
        });

      function Vn(e) {
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

      function Mn(e, t) {
        for (const r of e)
          if (!Fn(r, {
              upTo: t
            })) return r
      }

      function Fn(e, {
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

      function Bn(e, {
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
      An.displayName = "FocusScope";
      var qn = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = Xn(e, t), e.unshift(t)
          },
          remove(t) {
            e = Xn(e, t), e[0]?.resume()
          }
        }
      }();

      function Xn(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var Gn = r(38174),
        Kn = r(38100),
        Zn = r(45787),
        Hn = "Dialog",
        [Wn, Un] = (0, pt.A)(Hn),
        [Yn, $n] = Wn(Hn),
        Qn = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !0
          } = e, i = I.useRef(null), d = I.useRef(null), [l, c] = (0, sr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Hn
          });
          return (0, N.jsx)(Yn, {
            scope: t,
            triggerRef: i,
            contentRef: d,
            contentId: (0, Ot.B)(),
            titleId: (0, Ot.B)(),
            descriptionId: (0, Ot.B)(),
            open: l,
            onOpenChange: c,
            onOpenToggle: I.useCallback(() => c(e => !e), [c]),
            modal: s,
            children: r
          })
        };
      Qn.displayName = Hn;
      var Jn = "DialogTrigger",
        eo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(Jn, r), a = (0, ft.s)(t, o.triggerRef);
          return (0, N.jsx)(vt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": xo(o.open),
            ...n,
            ref: a,
            onClick: (0, ut.mK)(e.onClick, o.onOpenToggle)
          })
        });
      eo.displayName = Jn;
      var to = "DialogPortal",
        [ro, no] = Wn(to, {
          forceMount: void 0
        }),
        oo = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = $n(to, t);
          return (0, N.jsx)(ro, {
            scope: t,
            forceMount: r,
            children: I.Children.map(n, e => (0, N.jsx)(rr, {
              present: r || a.open,
              children: (0, N.jsx)(tr, {
                asChild: !0,
                container: o,
                children: e
              })
            }))
          })
        };
      oo.displayName = to;
      var ao = "DialogOverlay",
        so = I.forwardRef((e, t) => {
          const r = no(ao, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = $n(ao, e.__scopeDialog);
          return a.modal ? (0, N.jsx)(rr, {
            present: n || a.open,
            children: (0, N.jsx)(lo, {
              ...o,
              ref: t
            })
          }) : null
        });
      so.displayName = ao;
      var io = (0, ar.TL)("DialogOverlay.RemoveScroll"),
        lo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(ao, r), a = function() {
            const e = I.useContext(bt),
              [t, r] = I.useState(null);
            return I.useEffect(() => {
              if (t) return e.dismissableSurfaces.add(t), () => {
                e.dismissableSurfaces.delete(t)
              }
            }, [t, e.dismissableSurfaces]), r
          }(), s = (0, ft.s)(t, a);
          return (0, N.jsx)(Kn.A, {
            as: io,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, N.jsx)(vt.sG.div, {
              "data-state": xo(o.open),
              ...n,
              ref: s,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        }),
        co = "DialogContent",
        uo = I.forwardRef((e, t) => {
          const r = no(co, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = $n(co, e.__scopeDialog);
          return (0, N.jsx)(rr, {
            present: n || a.open,
            children: a.modal ? (0, N.jsx)(fo, {
              ...o,
              ref: t
            }) : (0, N.jsx)(po, {
              ...o,
              ref: t
            })
          })
        });
      uo.displayName = co;
      var fo = I.forwardRef((e, t) => {
          const r = $n(co, e.__scopeDialog),
            n = I.useRef(null),
            o = (0, ft.s)(t, r.contentRef, n);
          return I.useEffect(() => {
            const e = n.current;
            if (e) return (0, Zn.Eq)(e)
          }, []), (0, N.jsx)(vo, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: r.open,
            onCloseAutoFocus: (0, ut.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, ut.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            }),
            onFocusOutside: (0, ut.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        po = I.forwardRef((e, t) => {
          const r = $n(co, e.__scopeDialog),
            n = I.useRef(!1),
            o = I.useRef(!1);
          return (0, N.jsx)(vo, {
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
        vo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...s
          } = e, i = $n(co, r);
          return (0, Gn.Oh)(), (0, N.jsx)(N.Fragment, {
            children: (0, N.jsx)(An, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, N.jsx)(gt, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": xo(i.open),
                ...s,
                ref: t,
                deferPointerDownOutside: !0,
                onDismiss: () => i.onOpenChange(!1)
              })
            })
          })
        }),
        ho = "DialogTitle",
        mo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(ho, r);
          return (0, N.jsx)(vt.sG.h2, {
            id: o.titleId,
            ...n,
            ref: t
          })
        });
      mo.displayName = ho;
      var yo = "DialogDescription",
        bo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(yo, r);
          return (0, N.jsx)(vt.sG.p, {
            id: o.descriptionId,
            ...n,
            ref: t
          })
        });
      bo.displayName = yo;
      var go = "DialogClose",
        wo = I.forwardRef((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = $n(go, r);
          return (0, N.jsx)(vt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ut.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });

      function xo(e) {
        return e ? "open" : "closed"
      }
      wo.displayName = go;
      const _o = (0, I.createContext)({
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
        Co = ({
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
            m = (0, I.useRef)(null),
            y = (0, I.useRef)(null),
            b = (0, I.useRef)(null),
            g = (0, I.useRef)(null),
            w = (0, I.useRef)(null),
            x = (0, I.useRef)(null),
            _ = (0, I.useRef)(null),
            C = (0, I.useRef)(null),
            j = (0, I.useRef)(null),
            O = (0, I.useRef)(null),
            R = (0, I.useRef)(null),
            P = (0, I.useRef)(null),
            S = (0, I.useRef)(null),
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
          })), (0, N.jsx)(Xe.Dk, {
            messages: Ge,
            locale: f,
            children: (0, N.jsx)(_o.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: h,
                thumbnailRef: m,
                openIconRef: y,
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
                zoomInRef: S,
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
              children: (0, N.jsx)(Oo, {
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
        Oo = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, I.useContext)(_o), {
            onOpenChange: r,
            openAnim: n,
            close: o
          } = (() => {
            const {
              contextSafe: e
            } = (0, Ce.L)(), {
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
            } = (0, I.useContext)(_o), p = (0, I.useRef)(null);
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
              m = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              y = (0, I.useCallback)(async e => {
                e || (window.addEventListener("click", v), await m(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              b = (0, I.useCallback)(() => y(!1), [y]);
            return {
              onOpenChange: y,
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
            } = (0, Ce.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, I.useContext)(_o), d = t(async e => {
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
          return (0, N.jsx)(jo.Provider, {
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
            children: (0, N.jsx)(Qn, {
              ...u
            })
          })
        },
        Ro = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, I.useContext)(_o),
            d = (0, xe.UP)(a, n),
            l = (0, q.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(st.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, N.jsx)(eo, {
            ref: d,
            ...l,
            children: (0, N.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, N.jsx)(T.xV, {
                children: t
              })
            })
          })
        }),
        Po = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, I.useContext)(_o), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? T.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        So = (0, I.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, I.useContext)(_o), o = (0, xe.UP)(n, r), a = (0, q.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? T.DX : ot.h1;
          return (0, N.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        No = ({
          ...e
        }) => (0, N.jsx)(oo, {
          ...e
        }),
        Do = (0, I.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, I.useContext)(_o), o = (0, xe.UP)(n, r), a = (0, q.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, N.jsx)(so, {
            ref: o,
            ...a
          })
        }),
        Io = (0, I.forwardRef)(function({
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
          } = (0, I.useContext)(_o), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, I.useContext)(_o), [t, r] = (0, I.useState)(e.getCursor()), n = (0, I.useCallback)(() => {
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
              className: (0, D.clsx)("foundry_1a74xwb9", l),
              style: {
                cursor: d
              }
            });
          return (0, N.jsxs)(uo, {
            ref: c,
            ...u,
            children: [(0, N.jsx)(T.s6, {
              children: (0, N.jsx)(mo, {
                children: s
              })
            }), t]
          })
        }),
        To = (0, I.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, I.useContext)(_o);
          (() => {
            const {
              contextSafe: e
            } = (0, Ce.L)(), {
              toggleControls: t
            } = (0, I.useContext)(jo), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, I.useContext)(_o), i = e(e => {
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
            }), (0, je.NH)({
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
          return (0, N.jsx)("div", {
            ref: a,
            ...s,
            children: (0, N.jsxs)(zo, {
              children: [(0, N.jsx)(ko, {}), t]
            })
          })
        }),
        zo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, I.useContext)(_o), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? T.DX : "div";
          return (0, N.jsx)(i, {
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
            placeholderRef: o
          } = (0, I.useContext)(_o), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? T.DX : "img";
          return (0, N.jsx)(i, {
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
            imageRef: o
          } = (0, I.useContext)(_o), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? T.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Lo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, I.useContext)(_o), a = (0, xe.UP)(o, n), s = (0, q.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? T.DX : "p";
          return (0, N.jsx)(bo, {
            asChild: !0,
            children: (0, N.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Ao = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, I.useContext)(_o);
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
          return (0, N.jsx)(Ie.Hb, {
            children: (0, N.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        Vo = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, N.jsx)(N.Fragment, {
            children: n
          });
          const a = (0, q.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, N.jsxs)(Gr, {
            delayDuration: 0,
            children: [(0, N.jsx)(Kr, {
              children: n
            }), (0, N.jsxs)(Zr, {
              ...a,
              children: [(0, N.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, N.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, N.jsx)(Hr, {})]
            })]
          })
        },
        Mo = (0, I.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, q.v6)(e, {
            isInline: !0
          });
          return (0, N.jsx)(dt, {
            ref: t,
            ...r
          })
        }),
        Fo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, I.useContext)(_o),
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
              } = (0, I.useContext)(_o), {
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
            m = (0, xe.UP)(i, a),
            y = (0, q.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? T.DX : "div";
          return (0, N.jsxs)(b, {
            ref: m,
            ...y,
            children: [(0, N.jsx)(Vo, {
              side: "left",
              enabled: r,
              content: s.formatMessage(st.ZoomInButtonLabel),
              metadata: s.formatMessage(st.ZoomInButtonTooltip, {
                shortcut: (0, N.jsx)(Mo, {
                  shortcut: "+"
                })
              }),
              children: (0, N.jsx)(S.K, {
                label: s.formatMessage(st.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Me({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, N.jsxs)(un, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, N.jsx)(bn, {
                className: "foundry_1a74xwbu",
                children: (0, N.jsx)(wn, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, N.jsx)(Vo, {
                side: "left",
                enabled: r,
                content: s.formatMessage(st.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, N.jsx)(Sn, {
                  className: "foundry_1a74xwbw",
                  children: (0, N.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, N.jsx)(Vo, {
              side: "left",
              enabled: r,
              content: s.formatMessage(st.ZoomOutButtonLabel),
              metadata: s.formatMessage(st.ZoomOutButtonTooltip, {
                shortcut: (0, N.jsx)(Mo, {
                  shortcut: "-"
                })
              }),
              children: (0, N.jsx)(S.K, {
                label: s.formatMessage(st.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Me({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, N.jsx)(T.xV, {
              children: n
            })]
          })
        }),
        Bo = (0, I.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, Xe.tz)(),
            {
              closeRef: s
            } = (0, I.useContext)(_o),
            i = (0, xe.UP)(s, o),
            d = (0, q.v6)(n, {
              "data-testid": e,
              className: Ve({
                styled: !t
              })
            }),
            l = t ? (0, N.jsx)(T.DX, {
              ref: i,
              ...d
            }) : (0, N.jsx)(S.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(st.CloseButtonLabel)
            });
          return (0, N.jsx)(Vo, {
            side: "right",
            enabled: r,
            content: a.formatMessage(st.CloseButtonLabel),
            metadata: a.formatMessage(st.CloseButtonTooltip, {
              shortcut: (0, N.jsx)(Mo, {
                shortcut: "Esc"
              })
            }),
            children: (0, N.jsx)(wo, {
              asChild: !0,
              children: l
            })
          })
        }),
        qo = (0, I.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, I.useContext)(_o), {
                contextSafe: r
              } = (0, Ce.L)(), {
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
            } = (0, I.useContext)(_o),
            i = (0, xe.UP)(s, n),
            d = (0, q.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, N.jsx)(Vo, {
            side: "left",
            enabled: t,
            content: o.formatMessage(st.ResetZoomButtonLabel),
            metadata: o.formatMessage(st.ResetZoomButtonTooltip, {
              shortcut: (0, N.jsx)(Mo, {
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
        Xo = (0, I.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, I.useContext)(_o),
            i = (0, xe.UP)(a, n),
            d = (0, q.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, N.jsx)(Vo, {
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
              })(s.current)
            })
          })
        }),
        Go = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var Ko = r(98905);

      function Zo(e) {
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

      function Ho(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Wo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ho(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Zo(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ho(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Uo(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Yo = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $o = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wo(Wo({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Yo(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Uo(e.variantClassNames, e => Uo(e, e => e.split(" ")[0]))
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
      const Qo = (0, I.createContext)(null);

      function Jo() {
        const e = (0, I.useContext)(Qo);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const ea = (0, I.forwardRef)(({
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
          return (0, N.jsx)(Qo.Provider, {
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
        ta = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Jo(), a = (0, q.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: ot.Jl,
            invalid: ot.X,
            neutral: ot.lW
          }, i = t ? T.DX : s[o];
          return (0, N.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        ra = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = Jo(), i = (0, q.v6)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? T.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var na = "ScrollArea",
        [oa, aa] = (0, pt.A)(na),
        [sa, ia] = oa(na),
        da = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = I.useState(null), [l, c] = I.useState(null), [u, f] = I.useState(null), [p, v] = I.useState(null), [h, m] = I.useState(null), [y, b] = I.useState(0), [g, w] = I.useState(0), [x, _] = I.useState(!1), [C, j] = I.useState(!1), O = (0, ft.s)(t, e => d(e)), R = (0, Yr.jH)(o);
          return (0, N.jsx)(sa, {
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
            onScrollbarYChange: m,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, N.jsx)(vt.sG.div, {
              dir: R,
              ...s,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": g + "px",
                ...e.style
              }
            })
          })
        });
      da.displayName = na;
      var la = "ScrollAreaViewport",
        ca = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = ia(la, r), i = I.useRef(null), d = (0, ft.s)(t, i, s.onViewportChange);
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(ua, {
              nonce: o
            }), (0, N.jsx)(vt.sG.div, {
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
      ca.displayName = la;
      var ua = I.memo(({
          nonce: e
        }) => (0, N.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        fa = "ScrollAreaScrollbar",
        pa = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ia(fa, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return I.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, N.jsx)(va, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, N.jsx)(ha, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, N.jsx)(ma, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, N.jsx)(ya, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      pa.displayName = fa;
      var va = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ia(fa, e.__scopeScrollArea), [a, s] = I.useState(!1);
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, N.jsx)(rr, {
            present: r || a,
            children: (0, N.jsx)(ma, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        ha = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = ia(fa, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = La(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, [o.viewport, a, d, s]), (0, N.jsx)(rr, {
            present: r || "hidden" !== i,
            children: (0, N.jsx)(ya, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ut.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ut.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        ma = I.forwardRef((e, t) => {
          const r = ia(fa, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = I.useState(!1),
            i = "horizontal" === e.orientation,
            d = La(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return Aa(r.viewport, d), Aa(r.content, d), (0, N.jsx)(rr, {
            present: n || a,
            children: (0, N.jsx)(ya, {
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
          } = e, o = ia(fa, e.__scopeScrollArea), a = I.useRef(null), s = I.useRef(0), [i, d] = I.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = Da(i.viewport, i.content), c = {
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
              const o = Ia(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return za([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, N.jsx)(ba, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ta(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, N.jsx)(ga, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ta(o.viewport.scrollTop, i);
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
        ba = I.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = ia(fa, e.__scopeScrollArea), [s, i] = I.useState(), d = I.useRef(null), l = (0, ft.s)(t, d, a.onScrollbarXChange);
          return I.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(_a, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Ia(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), ka(n, r) && t.preventDefault()
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
        ga = I.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = ia(fa, e.__scopeScrollArea), [s, i] = I.useState(), d = I.useRef(null), l = (0, ft.s)(t, d, a.onScrollbarYChange);
          return I.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(_a, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Ia(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), ka(n, r) && t.preventDefault()
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
        [wa, xa] = oa(fa),
        _a = I.forwardRef((e, t) => {
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
          } = e, p = ia(fa, r), [v, h] = I.useState(null), m = (0, ft.s)(t, e => h(e)), y = I.useRef(null), b = I.useRef(""), g = p.viewport, w = n.content - n.viewport, x = (0, ht.c)(c), _ = (0, ht.c)(d), C = La(u, 10);

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
          }, [g, v, w, x]), I.useEffect(_, [n, _]), Aa(v, C), Aa(p.content, C), (0, N.jsx)(wa, {
            scope: r,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: (0, ht.c)(a),
            onThumbPointerUp: (0, ht.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, ht.c)(i),
            children: (0, N.jsx)(vt.sG.div, {
              ...f,
              ref: m,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ut.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), y.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, ut.mK)(e.onPointerMove, j),
              onPointerUp: (0, ut.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), y.current = null
              })
            })
          })
        }),
        Ca = "ScrollAreaThumb",
        ja = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = xa(Ca, e.__scopeScrollArea);
          return (0, N.jsx)(rr, {
            present: r || o.hasThumb,
            children: (0, N.jsx)(Oa, {
              ref: t,
              ...n
            })
          })
        }),
        Oa = I.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = ia(Ca, r), s = xa(Ca, r), {
            onThumbPositionChange: i
          } = s, d = (0, ft.s)(t, e => s.onThumbChange(e)), l = I.useRef(void 0), c = La(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return I.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = Ea(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, N.jsx)(vt.sG.div, {
            "data-state": s.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, ut.mK)(e.onPointerDownCapture, e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              s.onThumbPointerDown({
                x: r,
                y: n
              })
            }),
            onPointerUp: (0, ut.mK)(e.onPointerUp, s.onThumbPointerUp)
          })
        });
      ja.displayName = Ca;
      var Ra = "ScrollAreaCorner",
        Pa = I.forwardRef((e, t) => {
          const r = ia(Ra, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, N.jsx)(Sa, {
            ...e,
            ref: t
          }) : null
        });
      Pa.displayName = Ra;
      var Sa = I.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = ia(Ra, r), [a, s] = I.useState(0), [i, d] = I.useState(0), l = Boolean(a && i);
        return Aa(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), Aa(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), l ? (0, N.jsx)(vt.sG.div, {
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

      function Da(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Ia(e) {
        const t = Da(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Ta(e, t, r = "ltr") {
        const n = Ia(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, Ur.q)(e, d);
        return za([0, s], [0, i])(l)
      }

      function za(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function ka(e, t) {
        return e > 0 && e < t
      }
      var Ea = (e, t = () => {}) => {
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

      function La(e, t) {
        const r = (0, ht.c)(e),
          n = I.useRef(0);
        return I.useEffect(() => () => window.clearTimeout(n.current), []), I.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function Aa(e, t) {
        const r = (0, ht.c)(t);
        (0, Dt.N)(() => {
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
      var Va = da,
        Ma = ca,
        Fa = pa,
        Ba = ja,
        qa = Pa,
        Xa = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ga = [" ", "Enter"],
        Ka = "Select",
        [Za, Ha, Wa] = Qr(Ka),
        [Ua, Ya] = (0, pt.A)(Ka, [Wa, kt]),
        $a = kt(),
        [Qa, Ja] = Ua(Ka),
        [es, ts] = Ua(Ka);

      function rs(e) {
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
        } = e, m = $a(t), [y, b] = I.useState(null), [g, w] = I.useState(null), [x, _] = I.useState(!1), C = (0, Yr.jH)(l), [j, O] = (0, sr.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: Ka
        }), [R, P] = (0, sr.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: Ka
        }), S = I.useRef(null), D = !y || !!v || !!y.closest("form"), [T, z] = I.useState(new Set), k = (0, Ot.B)(), E = Array.from(T).map(e => e.props.value).join(";"), L = I.useCallback(e => {
          z(t => new Set(t).add(e))
        }, []), A = I.useCallback(e => {
          z(t => {
            const r = new Set(t);
            return r.delete(e), r
          })
        }, []), V = {
          required: p,
          trigger: y,
          onTriggerChange: b,
          valueNode: g,
          onValueNodeChange: w,
          valueNodeHasChildren: x,
          onValueNodeHasChildrenChange: _,
          contentId: k,
          value: R,
          onValueChange: P,
          open: j,
          onOpenChange: O,
          dir: C,
          triggerPointerDownPosRef: S,
          disabled: f,
          name: c,
          autoComplete: u,
          form: v,
          nativeOptions: T,
          nativeSelectKey: E,
          isFormControl: D
        };
        return (0, N.jsx)(Yt, {
          ...m,
          children: (0, N.jsx)(Qa, {
            scope: t,
            ...V,
            children: (0, N.jsx)(Za.Provider, {
              scope: t,
              children: (0, N.jsx)(es, {
                scope: t,
                onNativeOptionAdd: L,
                onNativeOptionRemove: A,
                children: Gs(h) ? h(V) : r
              })
            })
          })
        })
      }
      rs.displayName = "SelectProvider";
      var ns = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, N.jsx)(rs, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, N.jsxs)(N.Fragment, {
            children: [r, e ? (0, N.jsx)(Xs, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      ns.displayName = Ka;
      var os = "SelectTrigger",
        as = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = $a(r), s = Ja(os, r), i = s.disabled || n, d = (0, ft.s)(t, s.onTriggerChange), l = Ha(r), c = I.useRef("touch"), [u, f, p] = Zs(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Hs(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, N.jsx)($t, {
            asChild: !0,
            ...a,
            children: (0, N.jsx)(vt.sG.button, {
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
              "data-placeholder": Ks(s.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: (0, ut.mK)(o.onClick, e => {
                e.currentTarget.focus(), "mouse" !== c.current && v(e)
              }),
              onPointerDown: (0, ut.mK)(o.onPointerDown, e => {
                c.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (v(e), e.preventDefault())
              }),
              onKeyDown: (0, ut.mK)(o.onKeyDown, e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Xa.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      as.displayName = os;
      var ss = "SelectValue",
        is = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Ja(ss, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, ft.s)(t, d.onValueNodeChange);
          (0, Dt.N)(() => {
            l(c)
          }, [l, c]);
          const f = Ks(d.value);
          return (0, N.jsx)(vt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, N.jsx)(I.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      is.displayName = ss;
      var ds = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, N.jsx)(vt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      ds.displayName = "SelectIcon";
      var ls = "SelectPortal",
        [cs, us] = Ua(ls, {
          forceMount: void 0
        }),
        fs = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, N.jsx)(cs, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, N.jsx)(tr, {
              asChild: !0,
              ...n
            })
          })
        };
      fs.displayName = ls;
      var ps = "SelectContent",
        vs = I.forwardRef((e, t) => {
          const r = us(ps, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Ja(ps, e.__scopeSelect),
            [s, i] = I.useState();
          return (0, Dt.N)(() => {
            i(new DocumentFragment)
          }, []), (0, N.jsx)(rr, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, N.jsx)(ws, {
              ...o,
              ref: t
            }) : (0, N.jsx)(hs, {
              ...o,
              fragment: s
            })
          })
        });
      vs.displayName = ps;
      var hs = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? er.createPortal((0, N.jsx)(ys, {
          scope: r,
          children: (0, N.jsx)(Za.Slot, {
            scope: r,
            children: (0, N.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      hs.displayName = "SelectContentFragment";
      var ms = 10,
        [ys, bs] = Ua(ps),
        gs = (0, ar.TL)("SelectContent.RemoveScroll"),
        ws = I.forwardRef((e, t) => {
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
            avoidCollisions: m,
            ...y
          } = e, b = Ja(ps, r), [g, w] = I.useState(null), [x, _] = I.useState(null), C = (0, ft.s)(t, e => w(e)), [j, O] = I.useState(null), [R, P] = I.useState(null), S = Ha(r), [D, T] = I.useState(!1), z = I.useRef(!1);
          I.useEffect(() => {
            if (g) return (0, Zn.Eq)(g)
          }, [g]), (0, Gn.Oh)();
          const k = I.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, x]),
            E = I.useCallback(() => k([j, g]), [k, j, g]);
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
          const [V, M] = Zs(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Hs(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), F = I.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (z.current = !0))
          }, [b.value]), B = I.useCallback(() => g?.focus(), [g]), q = I.useCallback((e, t, r) => {
            const n = !z.current && !r;
            (void 0 !== b.value && b.value === t || n) && P(e)
          }, [b.value]), X = "popper" === n ? _s : xs, G = X === _s ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: h,
            avoidCollisions: m
          } : {};
          return (0, N.jsx)(ys, {
            scope: r,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: F,
            selectedItem: j,
            onItemLeave: B,
            itemTextRefCallback: q,
            focusSelectedItem: E,
            selectedItemText: R,
            position: n,
            isPositioned: D,
            searchRef: V,
            children: (0, N.jsx)(Kn.A, {
              as: gs,
              allowPinchZoom: !0,
              children: (0, N.jsx)(An, {
                asChild: !0,
                trapped: b.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, ut.mK)(o, e => {
                  b.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                }),
                children: (0, N.jsx)(gt, {
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
                    ...y,
                    ...G,
                    onPlaced: () => T(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: (0, ut.mK)(y.onKeyDown, e => {
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
      ws.displayName = "SelectContentImpl";
      var xs = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Ja(ps, r), s = bs(ps, r), [i, d] = I.useState(null), [l, c] = I.useState(null), u = (0, ft.s)(t, e => c(e)), f = Ha(r), p = I.useRef(!1), v = I.useRef(!0), {
          viewport: h,
          selectedItem: m,
          selectedItemText: y,
          focusSelectedItem: b
        } = s, g = I.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && h && m && y) {
            const e = a.trigger.getBoundingClientRect(),
              t = l.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = y.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                s = e.left - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - ms,
                u = (0, Ur.q)(a, [ms, Math.max(ms, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - ms,
                u = (0, Ur.q)(a, [ms, Math.max(ms, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * ms,
              c = h.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              b = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + b + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * m.offsetHeight, w),
              _ = window.getComputedStyle(h),
              C = parseInt(_.paddingTop, 10),
              j = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - ms,
              R = d - O,
              P = m.offsetHeight / 2,
              S = v + b + (m.offsetTop + P),
              N = w - S;
            if (S <= O) {
              const e = s.length > 0 && m === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                r = S + Math.max(R, P + (e ? j : 0) + t + g);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && m === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, v + h.offsetTop + (e ? C : 0) + P) + N;
              i.style.height = t + "px", h.scrollTop = S - O + h.offsetTop
            }
            i.style.margin = `${ms}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, h, m, y, a.dir, n]);
        (0, Dt.N)(() => g(), [g]);
        const [w, x] = I.useState();
        (0, Dt.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = I.useCallback(e => {
          e && !0 === v.current && (g(), b?.(), v.current = !1)
        }, [g, b]);
        return (0, N.jsx)(Cs, {
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
            children: (0, N.jsx)(vt.sG.div, {
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
      xs.displayName = "SelectItemAlignedPosition";
      var _s = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = ms,
          ...a
        } = e, s = $a(r);
        return (0, N.jsx)(Qt, {
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
      _s.displayName = "SelectPopperPosition";
      var [Cs, js] = Ua(ps, {}), Os = "SelectViewport", Rs = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = bs(Os, r), s = js(Os, r), i = (0, ft.s)(t, a.onViewportChange), d = I.useRef(0);
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, N.jsx)(Za.Slot, {
            scope: r,
            children: (0, N.jsx)(vt.sG.div, {
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
              onScroll: (0, ut.mK)(o.onScroll, e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = s;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * ms,
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
      Rs.displayName = Os;
      var Ps = "SelectGroup",
        [Ss, Ns] = Ua(Ps);
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Ot.B)();
        return (0, N.jsx)(Ss, {
          scope: r,
          id: o,
          children: (0, N.jsx)(vt.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = Ps;
      var Ds = "SelectLabel";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Ns(Ds, r);
        return (0, N.jsx)(vt.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = Ds;
      var Is = "SelectItem",
        [Ts, zs] = Ua(Is),
        ks = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Ja(Is, r), d = bs(Is, r), l = i.value === n, [c, u] = I.useState(a ?? ""), [f, p] = I.useState(!1), v = (0, ft.s)(t, e => d.itemRefCallback?.(e, n, o)), h = (0, Ot.B)(), m = I.useRef("touch"), y = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, N.jsx)(Ts, {
            scope: r,
            value: n,
            disabled: o,
            textId: h,
            isSelected: l,
            onItemTextChange: I.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, N.jsx)(Za.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, N.jsx)(vt.sG.div, {
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
                onFocus: (0, ut.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, ut.mK)(s.onBlur, () => p(!1)),
                onClick: (0, ut.mK)(s.onClick, () => {
                  "mouse" !== m.current && y()
                }),
                onPointerUp: (0, ut.mK)(s.onPointerUp, () => {
                  "mouse" === m.current && y()
                }),
                onPointerDown: (0, ut.mK)(s.onPointerDown, e => {
                  m.current = e.pointerType
                }),
                onPointerMove: (0, ut.mK)(s.onPointerMove, e => {
                  m.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === m.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ut.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ut.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Ga.includes(e.key) && y(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ks.displayName = Is;
      var Es = "SelectItemText",
        Ls = I.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Ja(Es, r), i = bs(Es, r), d = zs(Es, r), l = ts(Es, r), [c, u] = I.useState(null), f = (0, ft.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = I.useMemo(() => (0, N.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: h,
            onNativeOptionRemove: m
          } = l;
          return (0, Dt.N)(() => (h(v), () => m(v)), [h, m, v]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(vt.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Ks(s.value) ? er.createPortal(a.children, s.valueNode) : null]
          })
        });
      Ls.displayName = Es;
      var As = "SelectItemIndicator";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return zs(As, r).isSelected ? (0, N.jsx)(vt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = As;
      var Vs = "SelectScrollUpButton";
      I.forwardRef((e, t) => {
        const r = bs(Vs, e.__scopeSelect),
          n = js(Vs, e.__scopeSelect),
          [o, a] = I.useState(!1),
          s = (0, ft.s)(t, n.onScrollButtonChange);
        return (0, Dt.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Fs, {
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
      }).displayName = Vs;
      var Ms = "SelectScrollDownButton";
      I.forwardRef((e, t) => {
        const r = bs(Ms, e.__scopeSelect),
          n = js(Ms, e.__scopeSelect),
          [o, a] = I.useState(!1),
          s = (0, ft.s)(t, n.onScrollButtonChange);
        return (0, Dt.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(Fs, {
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
      }).displayName = Ms;
      var Fs = I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = bs("SelectScrollButton", r), s = I.useRef(null), i = Ha(r), d = I.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return I.useEffect(() => () => d(), [d]), (0, Dt.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, N.jsx)(vt.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, ut.mK)(o.onPointerDown, () => {
            null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerMove: (0, ut.mK)(o.onPointerMove, () => {
            a.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          }),
          onPointerLeave: (0, ut.mK)(o.onPointerLeave, () => {
            d()
          })
        })
      });
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, N.jsx)(vt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Bs = "SelectArrow";
      I.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = $a(r);
        return "popper" === bs(Bs, r).position ? (0, N.jsx)(Jt, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Bs;
      var qs = "SelectBubbleInput",
        Xs = I.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Ja(qs, e),
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
            v = (0, ft.s)(r, p),
            h = o ?? "",
            m = (0, $r.Z)(h),
            y = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return I.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (m !== h && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, h), e.dispatchEvent(t)
            }
          }, [m, h]), (0, N.jsxs)(vt.sG.select, {
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
              ...ir.Qg,
              ...t.style
            },
            ref: v,
            defaultValue: h,
            children: [Ks(o) && !y ? (0, N.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Gs(e) {
        return "function" == typeof e
      }

      function Ks(e) {
        return "" === e || void 0 === e
      }

      function Zs(e) {
        const t = (0, ht.c)(e),
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

      function Hs(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Ws(e) {
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

      function Us(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ys(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Us(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ws(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Us(Object(r)).forEach(function(t) {
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
      Xs.displayName = qs;
      var Qs = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Js = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ys(Ys({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Qs(l, n, e.defaultVariants) && (r += " " + c);
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
        ei = Js({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ti = Js({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ri = Js({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ni = Js({
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
        oi = Js({
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
        ai = Js({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const si = (0, I.createContext)(null);

      function ii() {
        const e = (0, I.useContext)(si);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const di = (0, I.forwardRef)(({
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
          const m = (0, I.useRef)(null),
            y = (0, xe.UP)(m, h),
            b = (0, I.useId)(),
            g = (0, I.useId)(),
            w = (0, I.useId)(),
            x = (0, I.useId)(),
            _ = (0, I.useId)(),
            C = (0, I.useId)(),
            j = (0, I.useRef)(null),
            O = (0, I.useRef)(null),
            R = (0, I.useRef)(null),
            [P = !1, S] = (0, xe.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, q.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, N.jsx)(si.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: w,
              triggerId: C,
              hintId: x,
              popoverId: _,
              labelRef: j,
              descriptionRef: O,
              hintRef: R,
              defaultValue: a,
              onValueChange: s,
              value: d,
              isOpen: P,
              setIsOpen: S,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, N.jsx)(ns, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => S(!o && !P),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, N.jsx)("div", {
                ref: y,
                ...D,
                children: e
              })
            })
          })
        }),
        li = (0, I.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = ii(), s = (0, q.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: ei({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, N.jsx)(vs, {
            ...s,
            ref: o,
            children: (0, N.jsx)(Rs, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        ci = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Rs, {
            ref: r,
            ...n
          })
        }),
        ui = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(Va, {
            ...o,
            ref: n,
            children: [(0, N.jsx)(ci, {
              asChild: !0,
              children: (0, N.jsx)(Ma, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, N.jsx)(Fa, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, N.jsx)(Ba, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        fi = (0, I.forwardRef)(({
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
            descriptionRef: m,
            hintRef: y,
            isOpen: b,
            size: g
          } = ii(), {
            isPressed: w,
            pressProps: x
          } = (0, Ko.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, C] = (0, I.useState)(!1), [j, O] = (0, I.useState)(!1);
          (0, I.useEffect)(() => {
            C(!!h.current || !!y.current), O(!!m.current)
          }, []);
          const R = (0, q.v6)({
              id: f,
              className: oi({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, q.VW)(r, c, u) : r,
              "aria-describedby": j ? (0, q.VW)(n, v) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": b ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, q.cJ)(x, "onKeyDown"), a),
            P = o ? T.DX : as;
          return (0, N.jsx)(P, {
            ...R,
            ref: s,
            children: e
          })
        }),
        pi = (0, I.forwardRef)(({
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
          return (0, N.jsx)(s, {
            ...a,
            ref: o,
            children: (0, N.jsx)(is, {
              placeholder: e
            })
          })
        }),
        vi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = ii(), i = s ? ot.rX : ot.yQ, d = (0, q.v6)({
            asChild: !0,
            className: ai({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, N.jsx)(ds, {
            ...d,
            ref: n,
            children: e || (0, N.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        hi = (0, I.forwardRef)(({
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
          } = ii(), f = i && !o, p = (0, xe.UP)(c, s), v = (0, q.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: ni({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), h = t ? T.DX : "label";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(h, {
              ...v,
              ref: p,
              children: r
            })
          })
        }),
        mi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = ii(), d = (0, xe.UP)(i, o), l = (0, q.v6)({
            className: ti({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? T.DX : "div";
          return (0, N.jsx)(c, {
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
          } = ii(), d = (0, xe.UP)(s, o), l = (0, q.v6)({
            className: ri({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? T.DX : "div";
          return (0, N.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        bi = (0, I.forwardRef)(({
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
          return (0, N.jsx)(ks, {
            ref: i,
            ...d,
            children: e
          })
        }),
        gi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, N.jsx)(Ls, {
            ref: n,
            asChild: !0,
            children: (0, N.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        wi = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, N.jsx)(ds, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        xi = fs,
        _i = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = ii(), i = (0, q.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? T.DX : ea;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Ci = ta,
        ji = ra;
      var Oi = r(83588),
        Ri = r(56728);

      function Pi(e) {
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

      function Si(e, t) {
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
          t % 2 ? Si(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Si(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Di(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ii = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ti = e => {
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
            for (var [l, c] of e.compoundVariants) Ii(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Di(e.variantClassNames, e => Di(e, e => e.split(" ")[0]))
            }
          }, t
        },
        zi = Ti({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ki = Ti({
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
        Ei = Ti({
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
        Li = Ti({
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
        Ai = Ti({
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
      const Vi = (0, I.createContext)(null);

      function Mi() {
        const e = (0, I.useContext)(Vi);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const Fi = (0, I.forwardRef)(({
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
          return (0, N.jsx)(Vi.Provider, {
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
        Bi = (0, I.forwardRef)(({
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
              appearance: m,
              inputId: y,
              labelId: b,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = Mi(),
            _ = (0, Ri.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: C
            } = (0, Oi.K)({
              id: a || y,
              "aria-labelledby": (0, q.VW)(n, b),
              "aria-describedby": (0, q.VW)(o, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            j = (0, q.v6)({
              className: Ai({
                appearance: m
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
            children: [(0, N.jsx)(T.s6, {
              children: (0, N.jsx)("input", {
                ...C,
                ref: v
              })
            }), (0, N.jsx)("div", {
              className: Li({
                size: h
              }),
              "aria-hidden": "true",
              children: (0, N.jsx)("div", {
                className: ki({
                  size: h,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        qi = (0, I.forwardRef)(({
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
          } = Mi(), c = (0, q.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: Ei({
              isDisabled: s,
              size: l
            })
          }, o), u = t ? T.DX : "label";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Xi = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Mi(), i = n.id || s, d = (0, q.v6)({
            className: zi({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? T.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Gi = r(26688);
      const Ki = ({
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
        Zi = ({
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
        Hi = ({
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
        Wi = ({
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
        Ui = ({
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
        Yi = ({
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

      function Qi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ji(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = $i(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ed(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var td = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        rd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ji(Ji({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) td(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ed(e.variantClassNames, e => ed(e, e => e.split(" ")[0]))
            }
          }, t
        },
        nd = rd({
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
        od = rd({
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
        ad = rd({
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
        sd = rd({
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
        id = rd({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dd = rd({
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
      const ld = (0, I.createContext)(null);

      function cd() {
        const e = (0, I.useContext)(ld);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const ud = (0, I.forwardRef)(({
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
          return (0, N.jsx)(ld.Provider, {
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
        fd = (0, I.forwardRef)(({
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
            isIndeterminate: m,
            isRequired: y,
            descriptionId: b,
            labelId: g,
            inputId: w,
            ...x
          } = cd(), _ = (0, I.useRef)(null), C = f.id || w, {
            isPressed: j,
            pressProps: O
          } = (0, Ko.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: P,
            ...S
          } = (0, Ri.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: z,
            isSelected: k,
            isDisabled: E,
            isReadOnly: L
          } = (0, Gi.v)({
            "aria-label": "",
            id: C,
            name: o,
            ...x
          }, {
            ...S,
            toggle: P,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), A = (0, q.v6)({
            className: od({
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
            "aria-required": y,
            required: y
          }, z), M = m ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, N.jsxs)("div", {
            ...A,
            children: [(0, N.jsx)(T.s6, {
              children: (0, N.jsx)("input", {
                ...V,
                ref: p
              })
            }), (0, N.jsx)("div", {
              className: (0, D.clsx)(nd({
                size: v,
                appearance: h
              }), u),
              "aria-hidden": "true",
              "data-state": m ? "mixed" : k ? "checked" : "unchecked",
              "data-disabled": E || L,
              "data-testid": e,
              "data-pressed": j,
              children: (0, N.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (k || m) && (0, N.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        pd = (0, I.forwardRef)(({
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
          } = cd(), u = a.id || d, f = c && !o, p = (0, q.v6)({
            className: dd({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = t ? T.DX : "label";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(v, {
              ...p,
              ref: s,
              children: e
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
            isDisabled: a,
            descriptionId: s
          } = cd(), i = n.id || s, d = (0, q.v6)({
            className: ad({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? T.DX : "div";
          return (0, N.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        hd = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = cd(), s = n.id || a, i = (0, q.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, n), d = t ? T.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        md = (0, I.createContext)(null);

      function yd() {
        const e = (0, I.useContext)(md);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const bd = (0, I.forwardRef)(({
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
          return (0, N.jsx)(md.Provider, {
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
        gd = (0, I.forwardRef)(({
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
            className: id({
              showAsterisk: l
            })
          }, s), u = t ? T.DX : "legend";
          return (0, N.jsx)(T.s6, {
            enabled: o,
            children: (0, N.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, N.jsx)(T.xV, {
                children: e
              }), !d && (0, N.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        wd = (0, I.forwardRef)(({
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
          return (0, N.jsx)(l, {
            ...d,
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
            size: a
          } = yd(), s = (0, q.v6)({
            "data-testid": r,
            className: sd({
              size: a
            })
          }, n), i = t ? T.DX : "div";
          return (0, N.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        _d = (0, I.forwardRef)(({
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
          return (0, N.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, N.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, N.jsx)(T.xV, {
              children: e
            })]
          })
        });

      function Cd(e) {
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

      function Od(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Cd(o)) in n ? Object.defineProperty(n, o, {
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

      function Rd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Pd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Sd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Od(Od({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Pd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rd(e.variantClassNames, e => Rd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Nd = Sd({
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
        Dd = Sd({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Id = Sd({
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
        Td = Sd({
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
      const zd = (0, I.createContext)(null);

      function kd() {
        const e = (0, I.useContext)(zd);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const Ed = (0, I.forwardRef)(({
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
          return (0, N.jsx)(zd.Provider, {
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
        Ld = (0, I.forwardRef)(({
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
          } = kd(), u = (0, q.v6)({
            className: Id({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, a), f = t ? T.DX : "label";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        Ad = (0, I.forwardRef)(({
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
            isRequired: m,
            isReadOnly: y,
            status: b
          } = kd(), g = (0, I.useRef)(null), w = (0, xe.UP)(g, c), x = (0, q.v6)({
            className: Td({
              isInvalid: "invalid" === b,
              isDisabled: h,
              isReadOnly: y,
              isSuccess: "success" === b
            }),
            name: a,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: h,
            required: m,
            readOnly: y,
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
            ...m && {
              "aria-required": !0
            }
          }, l), _ = e ? T.DX : "textarea";
          return (0, N.jsx)(_, {
            ref: w,
            ...x,
            children: t
          })
        }),
        Vd = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = kd(), i = (0, q.v6)({
            className: Nd({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? T.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Md = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = kd(), i = (0, q.v6)({
            className: Dd({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? T.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Fd = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = kd(), i = (0, q.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? T.DX : ea;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Bd = ta,
        qd = ra;
      var Xd = r(707),
        Gd = r(5277);

      function Kd(e) {
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

      function Zd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Kd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ud = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hd(Hd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ud(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wd(e.variantClassNames, e => Wd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        $d = Yd({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qd = Yd({
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
      const Jd = (0, I.createContext)(null);

      function el() {
        const e = (0, I.useContext)(Jd);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const tl = (0, I.forwardRef)(({
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
            m = (0, I.useId)(),
            y = (0, Xd.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Gd.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, q.VW)(v, s),
              "aria-describedby": (0, q.VW)(h, m, i),
              "aria-errormessage": (0, q.VW)(m, d)
            }, y),
            g = (0, q.v6)({
              className: "foundry_njguqn0"
            }, b, (0, q.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? T.DX : "div";
          return (0, N.jsx)(Jd.Provider, {
            value: {
              state: y,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: h,
              labelId: v,
              errorId: m,
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
        rl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = el(), i = (0, q.v6)({
            "data-testid": e,
            className: Qd({
              size: a,
              orientation: s
            })
          }, n), d = t ? T.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        nl = (0, I.forwardRef)(({
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
          } = el(), l = i && !o, c = (0, q.v6)({
            id: a.id || d,
            "data-testid": e,
            className: $d({
              showAsterisk: l
            })
          }, a), u = t ? T.DX : "div";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        ol = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = el(), s = (0, q.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? T.DX : "div";
          return (0, N.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        al = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = el(), i = (0, q.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? T.DX : ea;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        sl = ta,
        il = ra;
      var dl = r(80146),
        ll = Yd({
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
        cl = Yd({
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
        ul = Yd({
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
        fl = Yd({
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
      const pl = ({
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
        vl = ({
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
        hl = ({
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
        ml = (0, I.forwardRef)(({
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
          return (0, N.jsx)(s, {
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
            } = el(),
            {
              isPressed: p,
              pressProps: v
            } = (0, Ko.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, dl.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            m = h.checked,
            y = h.disabled || i?.isReadOnly,
            b = (0, q.v6)(h, {
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
          return (0, N.jsxs)("div", {
            className: fl({
              size: l
            }),
            children: [(0, N.jsx)(T.s6, {
              children: (0, N.jsx)("input", {
                type: "radio",
                ...b,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, N.jsx)("div", {
              className: ul({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": m ? "checked" : "unchecked",
              "data-disabled": y,
              "data-pressed": p,
              ...v,
              children: (0, N.jsx)("span", {
                className: "foundry_1pfduet9",
                children: m && (0, N.jsx)(g, {})
              })
            })]
          })
        }),
        bl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = el(), d = (0, I.useId)(), l = (0, q.v6)({
            id: d,
            "data-testid": e,
            className: cl({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? T.DX : "div";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(c, {
              ...l,
              ref: a,
              children: r
            })
          })
        }),
        gl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = el(), s = (0, q.v6)({
            "data-testid": e,
            className: ll({
              isDisabled: a
            })
          }, n), i = t ? T.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var wl = r(58900);

      function xl(e) {
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

      function _l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _l(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _l(Object(r)).forEach(function(t) {
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
      var Ol = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Rl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cl(Cl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ol(l, n, e.defaultVariants) && (r += " " + c);
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
        Pl = Rl({
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
        Sl = Rl({
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
        Nl = Rl({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Dl = Rl({
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
        Il = Rl({
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
        Tl = Rl({
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
      const zl = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        kl = (0, I.createContext)(null);

      function El() {
        const e = (0, I.useContext)(kl);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Ll = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, I.useState)("text"), u = `${(0,I.useId)()}-label`, f = `${(0,I.useId)()}-input`, p = `${(0,I.useId)()}-description`, v = (0, I.useRef)(null), h = (0, I.useRef)(zl), m = (0, q.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), y = e ? T.DX : "div";
          return (0, N.jsx)(kl.Provider, {
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
            children: (0, N.jsx)(y, {
              ref: d,
              ...m,
              children: t
            })
          })
        }),
        Al = (0, I.forwardRef)(({
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
          } = El(), u = d && !o, f = (0, q.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: Tl({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? T.DX : "label";
          return (0, N.jsx)(T.s6, {
            enabled: n,
            children: (0, N.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        Vl = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = El(), s = (0, q.v6)({
            "data-testid": e,
            className: Nl({
              isDisabled: a
            })
          }, n), i = t ? T.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        Ml = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = El(), d = (0, q.v6)({
            "data-testid": e,
            className: (0, D.clsx)(Pl({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? T.DX : "div";
          return (0, N.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        Fl = (0, I.forwardRef)(({
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
            labelId: m,
            inputId: y,
            descriptionId: b,
            setType: g,
            type: w,
            inputRef: x,
            focusState: _
          } = El();
          (0, I.useEffect)(() => g(l), []);
          const C = "invalid" === h,
            j = (0, q.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: y,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, q.VW)(m, i),
              "aria-describedby": (0, q.VW)(b, d),
              "data-testid": e,
              className: (0, D.clsx)(Il({
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
            O = (0, wl.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            R = (0, xe.UP)(r && n ? O : null, x, u),
            P = t ? T.DX : "input";
          return (0, N.jsx)(P, {
            ref: R,
            ...j
          })
        }),
        Bl = (0, I.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = El(), i = (0, q.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, D.clsx)(Dl({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? T.DX : at[e];
          return (0, N.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        ql = (0, I.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = El(), n = (0, q.v6)({
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
        Xl = (0, I.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = El(), d = "password" === o, l = d ? e : t;
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
          return (0, N.jsxs)(Gr, {
            children: [(0, N.jsx)(Kr, {
              children: (0, N.jsx)(ql, {
                ref: n,
                ...c
              })
            }), (0, N.jsxs)(Zr, {
              side: "bottom",
              align: "end",
              children: [l, (0, N.jsx)(Hr, {})]
            })]
          })
        }),
        Gl = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = El(), i = (0, q.v6)({
            className: Sl({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? T.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Kl = (0, I.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = El(), i = (0, q.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? T.DX : ea;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Zl = ta,
        Hl = ra;
      var Wl = r(68196);

      function Ul(e) {
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

      function Yl(e, t) {
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
          t % 2 ? Yl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ul(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ql(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ec = (e => {
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
            for (var [l, c] of e.compoundVariants) Jl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ql(e.variantClassNames, e => Ql(e, e => e.split(" ")[0]))
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
      const tc = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        rc = (0, I.forwardRef)(({
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
              className: ec({
                size: t
              })
            }, i);
          return (0, N.jsx)("button", {
            ref: s,
            ...d,
            children: (0, N.jsx)(ot.X, {
              label: e,
              size: tc[t]
            })
          })
        });

      function nc(e) {
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

      function oc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ac(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = nc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ic = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ac(ac({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ic(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sc(e.variantClassNames, e => sc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        lc = dc({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cc = dc({
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
        uc = dc({
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
      const fc = (0, I.createContext)(null);

      function pc() {
        const e = (0, I.useContext)(fc);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const vc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? T.DX : "div",
            i = (0, q.v6)({
              className: uc({
                status: r,
                background: n
              })
            }, o);
          return (0, N.jsx)(fc.Provider, {
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
        hc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        mc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        yc = {
          danger: ot.RT,
          information: ot.R2,
          success: ot.rW,
          warning: ot.lW
        },
        bc = (0, I.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = pc(), a = e ? T.DX : yc[o], s = (0, q.v6)({
            className: cc({
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
        gc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        wc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        xc = (0, I.forwardRef)(({
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
            } = (0, Wl.i)(n, a),
            c = (0, q.v6)({
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
        _c = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? T.DX : "div",
            s = (0, q.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Cc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? T.DX : "div";
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, D.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        jc = (0, I.forwardRef)((e, t) => {
          const {
            background: r
          } = pc(), n = "none" !== r, o = (0, q.v6)({
            className: lc({
              hasBackground: n
            })
          }, e);
          return (0, N.jsx)(rc, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var Oc = r(64634),
        Rc = r(7697),
        Pc = r(17497);

      function Sc(e) {
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

      function Dc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Sc(o)) in n ? Object.defineProperty(n, o, {
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

      function Ic(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        zc = "foundry_qmpv6yv",
        kc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Dc(Dc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Tc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ic(e.variantClassNames, e => Ic(e, e => e.split(" ")[0]))
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
      const Ec = (0, I.createContext)(null);

      function Lc() {
        const e = (0, I.useContext)(Ec);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const Ac = (0, I.forwardRef)(({
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
                [d, l] = (0, Oc.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, Rc.A)(), (0, Pc.A)()]),
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
              className: kc(c)
            }, v, i),
            m = e ? T.DX : "div";
          return (0, N.jsx)(Ec.Provider, {
            value: l,
            children: (0, N.jsx)(m, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...h,
              children: t
            })
          })
        }),
        Vc = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        Mc = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Lc();
          if (!e && !n || !n?.status) return null;
          const o = e || Vc[n.status],
            a = at[o],
            s = (0, q.v6)({
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
        Fc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Bc = (0, I.forwardRef)(({
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
          return (0, N.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        qc = (0, I.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Lc(), i = (0, q.v6)({
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
        Xc = (0, I.forwardRef)(({
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
            } = (0, Wl.i)(n, a),
            c = (0, q.v6)({
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
        Gc = (0, I.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, N.jsx)(rc, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Kc = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? T.DX : "div",
            s = (0, q.v6)({
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
        Zc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Lc(), a = (0, q.v6)({
            className: zc
          }, t);
          return (0, N.jsx)(S.K, {
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
        Hc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Lc(), a = (0, q.v6)({
            className: zc
          }, t);
          return (0, N.jsx)(S.K, {
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
        Wc = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Lc(), a = (0, q.v6)({
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

      function Uc(e) {
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

      function Yc(e, t) {
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
          t % 2 ? Yc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Uc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yc(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        eu = e => {
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
            for (var [l, c] of e.compoundVariants) Jc(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qc(e.variantClassNames, e => Qc(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tu = eu({
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
        ru = eu({
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
        nu = eu({
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
      const ou = (0, I.createContext)(null);

      function au() {
        const e = (0, I.useContext)(ou);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const su = (0, I.forwardRef)(({
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
              className: ru(c)
            }, d),
            f = e ? T.DX : "div";
          return (0, N.jsx)(ou.Provider, {
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
        iu = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = au(), s = e ? T.DX : "div", i = (0, q.v6)({
            className: nu({
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
        du = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
            o = (0, q.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        lu = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = au(), a = (0, q.v6)({
            className: tu({
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
            ...a
          })
        });
      var cu = "ToastProvider",
        [uu, fu, pu] = Qr("Toast"),
        [vu, hu] = (0, pt.A)("Toast", [pu]),
        [mu, yu] = vu(cu),
        bu = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = I.useState(null), [c, u] = I.useState(0), f = I.useRef(!1), p = I.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${cu}\`. Expected non-empty \`string\`.`), (0, N.jsx)(uu.Provider, {
            scope: t,
            children: (0, N.jsx)(mu, {
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
      bu.displayName = cu;
      var gu = "ToastViewport",
        wu = ["F8"],
        xu = "toast.viewportPause",
        _u = "toast.viewportResume",
        Cu = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = wu,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = yu(gu, r), i = fu(r), d = I.useRef(null), l = I.useRef(null), c = I.useRef(null), u = I.useRef(null), f = (0, ft.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
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
                    const e = new CustomEvent(xu);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(_u);
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
                n = [r, ...Bu(r)];
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
                  qu(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
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
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, N.jsx)(Ou, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                qu(h({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, N.jsx)(uu.Slot, {
              scope: r,
              children: (0, N.jsx)(vt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, N.jsx)(Ou, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                qu(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      Cu.displayName = gu;
      var ju = "ToastFocusProxy",
        Ou = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = yu(ju, r);
          return (0, N.jsx)(ir.s6, {
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
      Ou.displayName = ju;
      var Ru = "Toast",
        Pu = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, sr.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: Ru
          });
          return (0, N.jsx)(rr, {
            present: r || i,
            children: (0, N.jsx)(Du, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, ht.c)(e.onPause),
              onResume: (0, ht.c)(e.onResume),
              onSwipeStart: (0, ut.mK)(e.onSwipeStart, e => {
                e.currentTarget.setAttribute("data-swipe", "start")
              }),
              onSwipeMove: (0, ut.mK)(e.onSwipeMove, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${r}px`)
              }),
              onSwipeCancel: (0, ut.mK)(e.onSwipeCancel, e => {
                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
              }),
              onSwipeEnd: (0, ut.mK)(e.onSwipeEnd, e => {
                const {
                  x: t,
                  y: r
                } = e.detail.delta;
                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${t}px`), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${r}px`), d(!1)
              })
            })
          })
        });
      Pu.displayName = Ru;
      var [Su, Nu] = vu(Ru, {
        onClose() {}
      }), Du = I.forwardRef((e, t) => {
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
        } = e, h = yu(Ru, r), [m, y] = I.useState(null), b = (0, ft.s)(t, e => y(e)), g = I.useRef(null), w = I.useRef(null), x = o || h.duration, _ = I.useRef(0), C = I.useRef(x), j = I.useRef(0), {
          onToastAdd: O,
          onToastRemove: R
        } = h, P = (0, ht.c)(() => {
          const e = m?.contains(document.activeElement);
          e && h.viewport?.focus(), s()
        }), S = I.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), _.current = (new Date).getTime(), j.current = window.setTimeout(P, e))
        }, [P]);
        I.useEffect(() => {
          const e = h.viewport;
          if (e) {
            const t = () => {
                S(C.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                C.current = C.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(xu, r), e.addEventListener(_u, t), () => {
              e.removeEventListener(xu, r), e.removeEventListener(_u, t)
            }
          }
        }, [h.viewport, x, d, l, S]), I.useEffect(() => {
          a && !h.isClosePausedRef.current && S(x)
        }, [a, x, h.isClosePausedRef, S]), I.useEffect(() => (O(), () => R()), [O, R]);
        const D = I.useMemo(() => m ? Vu(m) : null, [m]);
        return h.viewport ? (0, N.jsxs)(N.Fragment, {
          children: [D && (0, N.jsx)(Iu, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: D
          }), (0, N.jsx)(Su, {
            scope: r,
            onClose: P,
            children: er.createPortal((0, N.jsx)(uu.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(Ct, {
                asChild: !0,
                onEscapeKeyDown: (0, ut.mK)(i, () => {
                  h.isFocusedToastEscapeKeyDownRef.current || P(), h.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, N.jsx)(vt.sG.li, {
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
                  onKeyDown: (0, ut.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, P()))
                  }),
                  onPointerDown: (0, ut.mK)(e.onPointerDown, e => {
                    0 === e.button && (g.current = {
                      x: e.clientX,
                      y: e.clientY
                    })
                  }),
                  onPointerMove: (0, ut.mK)(e.onPointerMove, e => {
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
                    n ? (w.current = l, Mu("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : Fu(l, h.swipeDirection, d) ? (w.current = l, Mu("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, ut.mK)(e.onPointerUp, e => {
                    const t = w.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), w.current = null, g.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      Fu(t, h.swipeDirection, h.swipeThreshold) ? Mu("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : Mu("toast.swipeCancel", f, n, {
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
      }), Iu = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = yu(Ru, t), [a, s] = I.useState(!1), [i, d] = I.useState(!1);
        return function(e = () => {}) {
          const t = (0, ht.c)(e);
          (0, Dt.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), I.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, N.jsx)(tr, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, N.jsx)(ir.s6, {
            ...n,
            children: a && (0, N.jsxs)(N.Fragment, {
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
        return (0, N.jsx)(vt.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var Tu = I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(vt.sG.div, {
          ...n,
          ref: t
        })
      });
      Tu.displayName = "ToastDescription";
      var zu = "ToastAction",
        ku = I.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, N.jsx)(Au, {
            altText: r,
            asChild: !0,
            children: (0, N.jsx)(Lu, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${zu}\`. Expected non-empty \`string\`.`), null)
        });
      ku.displayName = zu;
      var Eu = "ToastClose",
        Lu = I.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = Nu(Eu, r);
          return (0, N.jsx)(Au, {
            asChild: !0,
            children: (0, N.jsx)(vt.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ut.mK)(e.onClick, o.onClose)
            })
          })
        });
      Lu.displayName = Eu;
      var Au = I.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, N.jsx)(vt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function Vu(e) {
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
              } else t.push(...Vu(e))
          }
        }), t
      }

      function Mu(e, t, r, {
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
        }), n ? (0, vt.hO)(o, a) : o.dispatchEvent(a)
      }
      var Fu = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Bu(e) {
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

      function qu(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Xu = bu,
        Gu = Cu,
        Ku = Pu,
        Zu = Tu,
        Hu = ku,
        Wu = Lu;

      function Uu(e) {
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

      function Yu(e, t) {
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
          t % 2 ? Yu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Uu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ju = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ef = e => {
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
            for (var [l, c] of e.compoundVariants) Ju(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qu(e.variantClassNames, e => Qu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tf = ef({
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
        rf = ef({
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
        nf = ef({
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
      const of = ({
        testId: e,
        ...t
      }) => (0, N.jsx)(Xu, {
        "data-testid": e,
        ...t
      }), af = (0, I.forwardRef)(({
        children: e,
        testId: t,
        position: r = "bottomRight",
        ...n
      }, o) => {
        const a = (0, q.v6)({
          className: nf({
            position: r
          })
        }, n);
        return (0, N.jsx)(Gu, {
          ref: o,
          "data-testid": t,
          ...a,
          children: e
        })
      }), sf = (0, I.createContext)(null);

      function df() {
        const e = (0, I.useContext)(sf);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const lf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? T.DX : Ku,
            i = (0, q.v6)({
              className: rf({
                appearance: n
              })
            }, o);
          return (0, N.jsx)(sf.Provider, {
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
        cf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? T.DX : Zu,
            s = (0, q.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        uf = {
          danger: ot.RT,
          information: ot.R2,
          success: ot.rW,
          warning: ot.lW,
          avocado: ot.rW
        },
        ff = (0, I.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = df(), o = e ? T.DX : uf[n], a = (0, q.v6)({
            className: tf({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, N.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        pf = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, N.jsx)(Hu, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, N.jsx)(T.DX, {
              children: t
            }) : (0, N.jsx)(P.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        vf = (0, I.forwardRef)(({
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
          return (0, N.jsx)(Wu, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, N.jsx)(T.DX, {
              children: t
            }) : (0, N.jsx)(rc, {
              size: "SM",
              label: n
            })
          })
        });
      var hf = r(30259);

      function mf(e) {
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

      function bf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = mf(o)) in n ? Object.defineProperty(n, o, {
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

      function gf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var wf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bf(bf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) wf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gf(e.variantClassNames, e => gf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        _f = xf({
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
        Cf = xf({
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
        jf = xf({
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

      function Of() {
        const e = (0, I.useContext)(Rf);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Rf = (0, I.createContext)(null),
        Pf = (0, I.forwardRef)(({
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
          return (0, N.jsx)(Rf.Provider, {
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
        Sf = (0, I.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, I.useRef)(null),
            {
              size: i
            } = Of(),
            {
              itemProps: d
            } = (0, hf.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? T.DX : "a",
            c = (0, q.v6)({
              className: (0, D.clsx)(_f({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, N.jsx)("li", {
            className: Cf({
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
        Nf = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e];
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        Df = (0, I.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, I.useState)(r), {
            size: d
          } = Of(), l = (0, q.v6)({
            className: Cf({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, N.jsx)("li", {
            ref: a,
            ...l,
            children: (0, N.jsxs)(ns, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, N.jsx)(as, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, N.jsx)(fs, {
                children: (0, N.jsx)(vs, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, N.jsx)(Rs, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        If = (0, I.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? T.DX : ks,
            s = (0, q.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function Tf(e) {
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

      function zf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ef(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Af = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kf(kf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Lf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ef(e.variantClassNames, e => Ef(e, e => e.split(" ")[0]))
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
      const Vf = (0, I.createContext)(null);

      function Mf() {
        const e = (0, I.useContext)(Vf);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const Ff = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? T.DX : "div",
            d = (0, q.v6)({
              className: Af({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, N.jsx)(Vf.Provider, {
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
        Bf = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? T.DX : "div",
            a = (0, q.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        qf = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
            o = (0, q.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        Xf = () => {
          const e = (0, xe.Ub)(q.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Gf = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Kf(e) {
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

      function Zf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Hf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Kf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Wf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Uf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Yf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hf(Hf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Uf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wf(e.variantClassNames, e => Wf(e, e => e.split(" ")[0]))
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
          return (0, N.jsx)(Va, {
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
            className: "foundry_hwzz172"
          }, t);
          return (0, N.jsx)(Ma, {
            ref: r,
            ...n
          })
        }),
        Jf = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, N.jsx)(Fa, {
            ref: r,
            ...n
          })
        }),
        ep = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, xe.rl)(),
            o = (0, q.v6)({
              "data-testid": e,
              className: Yf({
                isTouchDevice: n
              })
            }, t);
          return (0, N.jsx)(Ba, {
            ref: r,
            ...o
          })
        }),
        tp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(qa, {
            ref: r,
            ...n
          })
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
        ip = e => {
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
        },
        dp = ip({
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
        lp = ip({
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
      const cp = (0, I.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, I.createRef)(),
          dialogSpringRef: (0, ct.$9)(),
          overlaySpringRef: (0, ct.$9)()
        }),
        up = ({
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
          return (0, N.jsx)(cp.Provider, {
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
              dialogSpringRef: (0, ct.U2)(),
              overlaySpringRef: (0, ct.U2)()
            },
            children: (0, N.jsx)(fp, {
              ...i
            })
          })
        },
        fp = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, I.useContext)(cp), n = (0, q.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, N.jsx)(Qn, {
            ...n
          })
        },
        pp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, I.useContext)(cp), a = (0, xe.UP)(o, r), s = (0, q.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, N.jsx)(eo, {
            ...s,
            ref: a
          })
        }),
        vp = e => (0, N.jsx)(oo, {
          forceMount: !0,
          ...e
        }),
        hp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, I.useContext)(cp), s = Gf(), i = (0, xe.jt)(), d = (0, ct.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: ct.$W.stiff,
            immediate: i || a
          }), l = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, ct.CS)(so);
          return (0, I.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, N.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        mp = (0, I.forwardRef)(({
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
            overlaySpringRef: m
          } = (0, I.useContext)(cp), y = (0, xe.rl)(), b = (0, xe.jt)(), g = (0, I.useRef)(null), w = Xf(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = Gf(),
              s = Xf(),
              i = (0, I.useRef)();
            return {
              bindDrag: (0, je.i3)(({
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
                  config: ct.$W.stiff,
                  onStart: n,
                  onRest: o
                }), r.start({
                  ...a(0),
                  immediate: !1,
                  config: ct.$W.stiff
                })) : (t.start({
                  ...s(100),
                  immediate: !1,
                  config: ct.$W.stiff
                }), r.start({
                  ...a(100),
                  immediate: !1,
                  config: ct.$W.stiff
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
            dialogSpringRef: h,
            onCloseTransitionStart: () => {
              i(!1), p?.()
            },
            onCloseTransitionComplete: v
          }), _ = (0, ct.pn)(s, {
            from: w(0),
            enter: w(100),
            leave: w(0),
            delay: s ? 100 : 0,
            config: ct.$W.stiff,
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
          const C = (0, xe.UP)(g, a),
            j = y && !b && !n && x(),
            O = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            R = (0, ct.CS)(uo);
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
        yp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, N.jsx)(mo, {
            ref: r,
            ...n
          })
        }),
        bp = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(bo, {
            ref: r,
            ...n
          })
        }),
        gp = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, N.jsxs)($f, {
            ref: n,
            ...o,
            children: [(0, N.jsx)(Qf, {
              className: "foundry_xov33ni",
              children: e
            }), (0, N.jsx)(Jf, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, N.jsx)(ep, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        wp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? T.DX : "div";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        xp = (0, I.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r,
              className: dp({
                align: e
              })
            }, n),
            s = t ? T.DX : "header";
          return (0, N.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        _p = (0, I.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            className: lp({
              appearance: t
            })
          }, r);
          return (0, N.jsx)(mo, {
            ref: n,
            ...o
          })
        }),
        Cp = (0, I.forwardRef)((e, t) => {
          const r = (0, q.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, N.jsx)(S.K, {
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
            a = t ? (0, N.jsx)(T.DX, {
              ref: n,
              ...o
            }) : (0, N.jsx)(rc, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, N.jsx)(wo, {
            asChild: !0,
            children: a
          })
        }),
        Op = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? T.DX : "div";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        Rp = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? T.DX : "footer";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var Pp = "Avatar",
        [Sp, Np] = (0, pt.A)(Pp),
        Dp = [0, () => {}],
        [Ip, Tp] = Sp(Pp),
        zp = I.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = I.useState("idle"), [s, i] = function() {
            let e = Dp; {
              e = I.useState(0);
              const [t] = e, r = I.useRef(!1);
              I.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, N.jsx)(Ip, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, N.jsx)(vt.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      zp.displayName = Pp;
      var kp = "AvatarImage",
        Ep = I.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = Tp(kp, r);
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
              return (0, Dt.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  a = e => {
                    const t = e.currentTarget;
                    r(Ap(t))
                  },
                  s = () => r("error");
                return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(Ap(t)), () => {
                  t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, ht.c)(e => {
              o?.(e)
            }),
            c = I.useRef(d);
          return (0, Dt.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, N.jsx)(vt.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      Ep.displayName = kp;
      var Lp = "AvatarFallback";

      function Ap(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function Vp(e) {
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

      function Mp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Fp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      I.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = Tp(Lp, r), [s, i] = I.useState(void 0 === n);
        return I.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, N.jsx)(vt.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Lp;
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
              n = Fp(Fp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
              return Bp(e.variantClassNames, e => Bp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Gp = Xp({
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
        Kp = "var(--foundry_v912w22)",
        Zp = "var(--foundry_v912w23)",
        Hp = Xp({
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
        Wp = Xp({
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
        Up = "var(--foundry_v912w21)",
        Yp = "var(--foundry_v912w20)",
        $p = Xp({
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
      const Qp = (0, I.createContext)(null);

      function Jp() {
        const e = (0, I.useContext)(Qp);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const ev = (0, I.forwardRef)(({
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
            className: Gp({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, N.jsx)(Qp.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, N.jsx)(zp, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        tv = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = Jp(), [i, d] = (0, I.useState)(!1);
          (0, I.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, q.v6)({
              className: Hp({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, N.jsx)("span", {
            className: Wp({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, N.jsx)(Ep, {
              ref: o,
              ...c
            })
          })
        }),
        rv = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, I.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Jp(),
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
                [Yp]: t?.online,
                [Up]: t?.offline,
                [Kp]: t?.away,
                [Zp]: t?.busy
              })
            }, r);
          return (0, N.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function nv(e) {
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

      function ov(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function av(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ov(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = nv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ov(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var iv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = av(av({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) iv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sv(e.variantClassNames, e => sv(e, e => e.split(" ")[0]))
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
      const lv = (0, I.forwardRef)(({
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
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        cv = (0, I.forwardRef)(({
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
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        uv = (0, I.forwardRef)(({
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
            } = (0, Wl.i)(o, s),
            c = (0, q.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, D.clsx)(dv({
                isActive: r
              }))
            }, d),
            u = e ? T.DX : "a";
          return (0, N.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        fv = (0, I.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(uv, {
            ref: n,
            ...o,
            children: (0, N.jsx)(ot.JG, {
              size: "LG",
              label: e
            })
          })
        }),
        pv = (0, I.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(uv, {
            ref: n,
            ...o,
            children: (0, N.jsx)(ot.c_, {
              size: "LG",
              label: e
            })
          })
        }),
        vv = ({
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
          return (0, N.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        hv = ({
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
          return (0, N.jsx)(a, {
            ...o,
            children: t
          })
        },
        mv = (0, I.createContext)(null);

      function yv() {
        const e = (0, I.useContext)(mv);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const bv = ({
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
          return (0, N.jsx)(mv.Provider, {
            value: {
              labelId: o
            },
            children: (0, N.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        gv = (0, I.forwardRef)(({
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
          return (0, N.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        wv = (0, I.forwardRef)(({
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
          }, n), i = e ? T.DX : di;
          return (0, N.jsxs)(i, {
            ...s,
            children: [(0, N.jsxs)(fi, {
              ref: o,
              children: [(0, N.jsx)(pi, {
                placeholder: r
              }), (0, N.jsx)(vi, {})]
            }), (0, N.jsx)(xi, {
              children: (0, N.jsx)(li, {
                children: (0, N.jsx)(ui, {
                  children: t
                })
              })
            })]
          })
        }),
        xv = (0, I.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, q.v6)({
              "data-testid": r
            }, n),
            s = e ? T.DX : bi;
          return (0, N.jsx)(s, {
            ...a,
            ref: o,
            children: (0, N.jsx)(gi, {
              children: t
            })
          })
        }),
        _v = (0, I.forwardRef)(({
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
          return (0, N.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var Cv = "rovingFocusGroup.onEntryFocus",
        jv = {
          bubbles: !1,
          cancelable: !0
        },
        Ov = "RovingFocusGroup",
        [Rv, Pv, Sv] = Qr(Ov),
        [Nv, Dv] = (0, pt.A)(Ov, [Sv]),
        [Iv, Tv] = Nv(Ov),
        zv = I.forwardRef((e, t) => (0, N.jsx)(Rv.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, N.jsx)(Rv.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, N.jsx)(kv, {
              ...e,
              ref: t
            })
          })
        }));
      zv.displayName = Ov;
      var kv = I.forwardRef((e, t) => {
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
          } = e, f = I.useRef(null), p = (0, ft.s)(t, f), v = (0, Yr.jH)(a), [h, m] = (0, sr.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: Ov
          }), [y, b] = I.useState(!1), g = (0, ht.c)(l), w = Pv(r), x = I.useRef(!1), [_, C] = I.useState(0);
          return I.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(Cv, g), () => e.removeEventListener(Cv, g)
          }, [g]), (0, N.jsx)(Iv, {
            scope: r,
            orientation: n,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: I.useCallback(e => m(e), [m]),
            onItemShiftTab: I.useCallback(() => b(!0), []),
            onFocusableItemAdd: I.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: I.useCallback(() => C(e => e - 1), []),
            children: (0, N.jsx)(vt.sG.div, {
              tabIndex: y || 0 === _ ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ut.mK)(e.onMouseDown, () => {
                x.current = !0
              }),
              onFocus: (0, ut.mK)(e.onFocus, e => {
                const t = !x.current;
                if (e.target === e.currentTarget && t && !y) {
                  const t = new CustomEvent(Cv, jv);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    Vv(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, ut.mK)(e.onBlur, () => b(!1))
            })
          })
        }),
        Ev = "RovingFocusGroupItem",
        Lv = I.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, Ot.B)(), l = a || d, c = Tv(Ev, r), u = c.currentTabStopId === l, f = Pv(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: h
          } = c;
          return I.useEffect(() => {
            if (n) return p(), () => v()
          }, [n, p, v]), (0, N.jsx)(Rv.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, N.jsx)(vt.sG.span, {
              tabIndex: u ? 0 : -1,
              "data-orientation": c.orientation,
              ...i,
              ref: t,
              onMouseDown: (0, ut.mK)(e.onMouseDown, e => {
                n ? c.onItemFocus(l) : e.preventDefault()
              }),
              onFocus: (0, ut.mK)(e.onFocus, () => c.onItemFocus(l)),
              onKeyDown: (0, ut.mK)(e.onKeyDown, e => {
                if ("Tab" === e.key && e.shiftKey) return void c.onItemShiftTab();
                if (e.target !== e.currentTarget) return;
                const t = function(e, t, r) {
                  const n = function(e, t) {
                    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
                  }(e.key, r);
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : Av[n]
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
                  setTimeout(() => Vv(a))
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
      Lv.displayName = Ev;
      var Av = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function Vv(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var Mv = zv,
        Fv = Lv,
        Bv = "Toggle",
        qv = I.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, sr.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: Bv
          });
          return (0, N.jsx)(vt.sG.button, {
            type: "button",
            "aria-pressed": s,
            "data-state": s ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...a,
            ref: t,
            onClick: (0, ut.mK)(e.onClick, () => {
              e.disabled || i(!s)
            })
          })
        });
      qv.displayName = Bv;
      var Xv = "ToggleGroup",
        [Gv, Kv] = (0, pt.A)(Xv, [Dv]),
        Zv = Dv(),
        Hv = I.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, N.jsx)(Yv, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, N.jsx)($v, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Xv}\``)
        });
      Hv.displayName = Xv;
      var [Wv, Uv] = Gv(Xv), Yv = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, sr.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: Xv
        });
        return (0, N.jsx)(Wv, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: I.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: I.useCallback(() => i(""), [i]),
          children: (0, N.jsx)(eh, {
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
        } = e, [s, i] = (0, sr.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: Xv
        }), d = I.useCallback(e => i((t = []) => [...t, e]), [i]), l = I.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, N.jsx)(Wv, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, N.jsx)(eh, {
            ...a,
            ref: t
          })
        })
      });
      Hv.displayName = Xv;
      var [Qv, Jv] = Gv(Xv), eh = I.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = Zv(r), c = (0, Yr.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, N.jsx)(Qv, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, N.jsx)(Mv, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, N.jsx)(vt.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, N.jsx)(vt.sG.div, {
            ...u,
            ref: t
          })
        })
      }), th = "ToggleGroupItem", rh = I.forwardRef((e, t) => {
        const r = Uv(th, e.__scopeToggleGroup),
          n = Jv(th, e.__scopeToggleGroup),
          o = Zv(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = I.useRef(null);
        return n.rovingFocus ? (0, N.jsx)(Fv, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, N.jsx)(nh, {
            ...i,
            ref: t
          })
        }) : (0, N.jsx)(nh, {
          ...i,
          ref: t
        })
      });
      rh.displayName = th;
      var nh = I.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, a = Uv(th, r), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, N.jsx)(qv, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? a.onItemActivate(n) : a.onItemDeactivate(n)
          }
        })
      });

      function oh(e) {
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

      function ah(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ah(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = oh(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ah(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ih(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        lh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sh(sh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) dh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ih(e.variantClassNames, e => ih(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ch = "var(--foundry_zxwkyk2)",
        uh = "var(--foundry_zxwkyk3)",
        fh = lh({
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
        ph = lh({
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
        vh = lh({
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
        hh = "var(--foundry_zxwkyk1)",
        mh = "var(--foundry_zxwkyk0)",
        yh = lh({
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
      const bh = (0, I.createContext)(null);

      function gh() {
        const e = (0, I.useContext)(bh);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const wh = (0, I.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, q.v6)({
            "data-testid": e,
            className: fh({
              size: t
            }),
            type: r
          }, n);
          return (0, N.jsx)(bh.Provider, {
            value: {
              size: t
            },
            children: (0, N.jsx)(Hv, {
              ref: o,
              ...a
            })
          })
        }),
        xh = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = gh(), o = (0, q.v6)({
            "data-testid": e,
            className: ph({
              size: n
            })
          }, t);
          return (0, N.jsx)(rh, {
            ref: r,
            ...o
          })
        }),
        _h = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = gh(), o = at[e];
          return (0, N.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        Ch = (0, I.forwardRef)(({
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
              [mh]: t?.online,
              [hh]: t?.offline,
              [ch]: t?.away,
              [uh]: t?.busy
            })
          }, n);
          return (0, N.jsx)("span", {
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
          } = gh(), a = (0, q.v6)({
            "data-testid": e,
            className: vh({
              variant: t,
              size: o
            })
          }, r);
          return (0, N.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var Oh = "Popover",
        [Rh, Ph] = (0, pt.A)(Oh, [kt]),
        Sh = kt(),
        [Nh, Dh] = Rh(Oh),
        Ih = e => {
          const {
            __scopePopover: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: s = !1
          } = e, i = Sh(t), d = I.useRef(null), [l, c] = I.useState(!1), [u, f] = (0, sr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Oh
          });
          return (0, N.jsx)(Yt, {
            ...i,
            children: (0, N.jsx)(Nh, {
              scope: t,
              contentId: (0, Ot.B)(),
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
      Ih.displayName = Oh;
      var Th = "PopoverAnchor",
        zh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Dh(Th, r), a = Sh(r), {
            onCustomAnchorAdd: s,
            onCustomAnchorRemove: i
          } = o;
          return I.useEffect(() => (s(), () => i()), [s, i]), (0, N.jsx)($t, {
            ...a,
            ...n,
            ref: t
          })
        });
      zh.displayName = Th;
      var kh = "PopoverTrigger",
        Eh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Dh(kh, r), a = Sh(r), s = (0, ft.s)(t, o.triggerRef), i = (0, N.jsx)(vt.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.open ? o.contentId : void 0,
            "data-state": Uh(o.open),
            ...n,
            ref: s,
            onClick: (0, ut.mK)(e.onClick, o.onOpenToggle)
          });
          return o.hasCustomAnchor ? i : (0, N.jsx)($t, {
            asChild: !0,
            ...a,
            children: i
          })
        });
      Eh.displayName = kh;
      var Lh = "PopoverPortal",
        [Ah, Vh] = Rh(Lh, {
          forceMount: void 0
        }),
        Mh = e => {
          const {
            __scopePopover: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Dh(Lh, t);
          return (0, N.jsx)(Ah, {
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
      Mh.displayName = Lh;
      var Fh = "PopoverContent",
        Bh = I.forwardRef((e, t) => {
          const r = Vh(Fh, e.__scopePopover),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Dh(Fh, e.__scopePopover);
          return (0, N.jsx)(rr, {
            present: n || a.open,
            children: a.modal ? (0, N.jsx)(Xh, {
              ...o,
              ref: t
            }) : (0, N.jsx)(Gh, {
              ...o,
              ref: t
            })
          })
        });
      Bh.displayName = Fh;
      var qh = (0, ar.TL)("PopoverContent.RemoveScroll"),
        Xh = I.forwardRef((e, t) => {
          const r = Dh(Fh, e.__scopePopover),
            n = I.useRef(null),
            o = (0, ft.s)(t, n),
            a = I.useRef(!1);
          return I.useEffect(() => {
            const e = n.current;
            if (e) return (0, Zn.Eq)(e)
          }, []), (0, N.jsx)(Kn.A, {
            as: qh,
            allowPinchZoom: !0,
            children: (0, N.jsx)(Kh, {
              ...e,
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, ut.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), a.current || r.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, ut.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey,
                  n = 2 === t.button || r;
                a.current = n
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, ut.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        Gh = I.forwardRef((e, t) => {
          const r = Dh(Fh, e.__scopePopover),
            n = I.useRef(!1),
            o = I.useRef(!1);
          return (0, N.jsx)(Kh, {
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
        Kh = I.forwardRef((e, t) => {
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
          } = e, f = Dh(Fh, r), p = Sh(r);
          return (0, Gn.Oh)(), (0, N.jsx)(An, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: (0, N.jsx)(gt, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: c,
              onEscapeKeyDown: i,
              onPointerDownOutside: d,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              deferPointerDownOutside: !0,
              children: (0, N.jsx)(Qt, {
                "data-state": Uh(f.open),
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
        Zh = "PopoverClose",
        Hh = I.forwardRef((e, t) => {
          const {
            __scopePopover: r,
            ...n
          } = e, o = Dh(Zh, r);
          return (0, N.jsx)(vt.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, ut.mK)(e.onClick, () => o.onOpenChange(!1))
          })
        });
      Hh.displayName = Zh;
      var Wh = I.forwardRef((e, t) => {
        const {
          __scopePopover: r,
          ...n
        } = e, o = Sh(r);
        return (0, N.jsx)(Jt, {
          ...o,
          ...n,
          ref: t
        })
      });

      function Uh(e) {
        return e ? "open" : "closed"
      }
      Wh.displayName = "PopoverArrow";
      var Yh = Ih,
        $h = zh,
        Qh = Eh,
        Jh = Mh,
        em = Bh,
        tm = Hh,
        rm = Wh;

      function nm(e) {
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

      function om(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function am(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? om(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = nm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : om(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function sm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var im = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        dm = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = am(am({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) im(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return sm(e.variantClassNames, e => sm(e, e => e.split(" ")[0]))
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
      const lm = (0, I.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        cm = ({
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
          return (0, N.jsx)(lm.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, N.jsx)(Yh, {
              ...s
            })
          })
        },
        um = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, N.jsx)(Qh, {
            ref: r,
            ...n
          })
        }),
        fm = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        pm = (0, I.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, I.useContext)(lm), s = (0, I.useRef)(null), i = (0, xe.UP)(s, o), {
            buttonProps: d
          } = (0, xe.sL)(n, s), l = (0, q.v6)({
            "data-testid": r,
            className: dm({
              size: t
            })
          }, d), c = a ? ot.rX : ot.yQ;
          return (0, N.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, N.jsx)(c, {
              label: "",
              size: fm[t]
            })]
          })
        }),
        vm = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)($h, {
            ref: r,
            ...n
          })
        }),
        hm = (0, I.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, N.jsx)(em, {
            ref: n,
            ...o
          })
        }),
        mm = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, N.jsx)(rm, {
            ref: r,
            ...n
          })
        }),
        ym = e => (0, N.jsx)(Jh, {
          ...e
        }),
        bm = e => (0, N.jsx)(tm, {
          ...e
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
            n = e, o = t, a = r[t], (o = gm(o)) in n ? Object.defineProperty(n, o, {
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

      function _m(e, t) {
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
        jm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xm(xm({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Cm(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return _m(e.variantClassNames, e => _m(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Om = "var(--foundry_rmorls2)",
        Rm = jm({
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
        Pm = "var(--foundry_rmorls0)",
        Sm = jm({
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
        Nm = "var(--foundry_rmorls3)",
        Dm = "var(--foundry_rmorls1)",
        Im = jm({
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
        Tm = "Progress",
        [zm, km] = (0, pt.A)(Tm),
        [Em, Lm] = zm(Tm),
        Am = I.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = Fm,
            ...s
          } = e;
          !o && 0 !== o || Xm(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Xm(o) ? o : 100;
          null === n || Gm(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Gm(n, i) ? n : null,
            l = qm(d) ? a(d, i) : void 0;
          return (0, N.jsx)(Em, {
            scope: r,
            value: d,
            max: i,
            children: (0, N.jsx)(vt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": qm(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Bm(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      Am.displayName = Tm;
      var Vm = "ProgressIndicator",
        Mm = I.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Lm(Vm, r);
          return (0, N.jsx)(vt.sG.div, {
            "data-state": Bm(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function Fm(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Bm(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function qm(e) {
        return "number" == typeof e
      }

      function Xm(e) {
        return qm(e) && !isNaN(e) && e > 0
      }

      function Gm(e, t) {
        return qm(e) && !isNaN(e) && e <= t && e >= 0
      }
      Mm.displayName = Vm;
      var Km = Am,
        Zm = Mm;
      const Hm = (0, I.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Wm = (0, I.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, N.jsx)(Hm.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, N.jsx)(Um, {
              ...n,
              ref: o
            })
          })
        }),
        Um = (0, I.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? T.DX : "div";
          return (0, N.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        Ym = (0, I.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, I.useContext)(Hm), i = (0, q.v6)({
            "data-testid": e,
            className: Sm({
              size: s
            }),
            value: o,
            max: a,
            style: (0, X.DI)({
              [Nm]: t
            }),
            "data-track": !0
          }, r);
          return (0, N.jsx)(Km, {
            ref: n,
            ...i
          })
        }),
        $m = (0, I.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, I.useContext)(Hm), i = s ? "-100%" : `-${100-a}%`, d = (0, q.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [Pm]: i,
              [Dm]: `${t}ms`,
              [Om]: r
            })
          }, n);
          return (0, N.jsx)(Zm, {
            ref: o,
            ...d
          })
        }),
        Qm = (0, I.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, I.useContext)(Hm), a = (0, q.v6)({
            "data-testid": t,
            className: Rm({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? T.DX : "span";
          return (0, N.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        Jm = (0, I.forwardRef)(({
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
          } = (0, I.useContext)(Hm), l = (0, q.v6)({
            "data-testid": e,
            className: Rm({
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
              className: Im({
                size: s
              }),
              children: "%"
            })]
          }) : (0, N.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        });
      var ey = "Collapsible",
        [ty, ry] = (0, pt.A)(ey),
        [ny, oy] = ty(ey),
        ay = I.forwardRef((e, t) => {
          const {
            __scopeCollapsible: r,
            open: n,
            defaultOpen: o,
            disabled: a,
            onOpenChange: s,
            ...i
          } = e, [d, l] = (0, sr.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: s,
            caller: ey
          });
          return (0, N.jsx)(ny, {
            scope: r,
            disabled: a,
            contentId: (0, Ot.B)(),
            open: d,
            onOpenToggle: I.useCallback(() => l(e => !e), [l]),
            children: (0, N.jsx)(vt.sG.div, {
              "data-state": uy(d),
              "data-disabled": a ? "" : void 0,
              ...i,
              ref: t
            })
          })
        });
      ay.displayName = ey;
      var sy = "CollapsibleTrigger",
        iy = I.forwardRef((e, t) => {
          const {
            __scopeCollapsible: r,
            ...n
          } = e, o = oy(sy, r);
          return (0, N.jsx)(vt.sG.button, {
            type: "button",
            "aria-controls": o.open ? o.contentId : void 0,
            "aria-expanded": o.open || !1,
            "data-state": uy(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...n,
            ref: t,
            onClick: (0, ut.mK)(e.onClick, o.onOpenToggle)
          })
        });
      iy.displayName = sy;
      var dy = "CollapsibleContent",
        ly = I.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = oy(dy, e.__scopeCollapsible);
          return (0, N.jsx)(rr, {
            present: r || o.open,
            children: ({
              present: e
            }) => (0, N.jsx)(cy, {
              ...n,
              ref: t,
              present: e
            })
          })
        });
      ly.displayName = dy;
      var cy = I.forwardRef((e, t) => {
        const {
          __scopeCollapsible: r,
          present: n,
          children: o,
          ...a
        } = e, s = oy(dy, r), [i, d] = I.useState(n), l = I.useRef(null), c = (0, ft.s)(t, l), u = I.useRef(0), f = u.current, p = I.useRef(0), v = p.current, h = s.open || i, m = I.useRef(h), y = I.useRef(void 0);
        return I.useEffect(() => {
          const e = requestAnimationFrame(() => m.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, Dt.N)(() => {
          const e = l.current;
          if (e) {
            y.current = y.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const t = e.getBoundingClientRect();
            u.current = t.height, p.current = t.width, m.current || (e.style.transitionDuration = y.current.transitionDuration, e.style.animationName = y.current.animationName), d(n)
          }
        }, [s.open, n]), (0, N.jsx)(vt.sG.div, {
          "data-state": uy(s.open),
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

      function uy(e) {
        return e ? "open" : "closed"
      }
      var fy = ay,
        py = iy,
        vy = ly,
        hy = "Accordion",
        my = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [yy, by, gy] = Qr(hy),
        [wy, xy] = (0, pt.A)(hy, [gy, ry]),
        _y = ry(),
        Cy = I.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e, o = n, a = n;
          return (0, N.jsx)(yy.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === r ? (0, N.jsx)(Ny, {
              ...a,
              ref: t
            }) : (0, N.jsx)(Sy, {
              ...o,
              ref: t
            })
          })
        });
      Cy.displayName = hy;
      var [jy, Oy] = wy(hy), [Ry, Py] = wy(hy, {
        collapsible: !1
      }), Sy = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          collapsible: a = !1,
          ...s
        } = e, [i, d] = (0, sr.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: hy
        });
        return (0, N.jsx)(jy, {
          scope: e.__scopeAccordion,
          value: I.useMemo(() => i ? [i] : [], [i]),
          onItemOpen: d,
          onItemClose: I.useCallback(() => a && d(""), [a, d]),
          children: (0, N.jsx)(Ry, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, N.jsx)(Ty, {
              ...s,
              ref: t
            })
          })
        })
      }), Ny = I.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, sr.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: hy
        }), d = I.useCallback(e => i((t = []) => [...t, e]), [i]), l = I.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, N.jsx)(jy, {
          scope: e.__scopeAccordion,
          value: s,
          onItemOpen: d,
          onItemClose: l,
          children: (0, N.jsx)(Ry, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, N.jsx)(Ty, {
              ...a,
              ref: t
            })
          })
        })
      }), [Dy, Iy] = wy(hy), Ty = I.forwardRef((e, t) => {
        const {
          __scopeAccordion: r,
          disabled: n,
          dir: o,
          orientation: a = "vertical",
          ...s
        } = e, i = I.useRef(null), d = (0, ft.s)(i, t), l = by(r), c = "ltr" === (0, Yr.jH)(o), u = (0, ut.mK)(e.onKeyDown, e => {
          if (!my.includes(e.key)) return;
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
        return (0, N.jsx)(Dy, {
          scope: r,
          disabled: n,
          direction: o,
          orientation: a,
          children: (0, N.jsx)(yy.Slot, {
            scope: r,
            children: (0, N.jsx)(vt.sG.div, {
              ...s,
              "data-orientation": a,
              ref: d,
              onKeyDown: n ? void 0 : u
            })
          })
        })
      }), zy = "AccordionItem", [ky, Ey] = wy(zy), Ly = I.forwardRef((e, t) => {
        const {
          __scopeAccordion: r,
          value: n,
          ...o
        } = e, a = Iy(zy, r), s = Oy(zy, r), i = _y(r), d = (0, Ot.B)(), l = n && s.value.includes(n) || !1, c = a.disabled || e.disabled;
        return (0, N.jsx)(ky, {
          scope: r,
          open: l,
          disabled: c,
          triggerId: d,
          children: (0, N.jsx)(fy, {
            "data-orientation": a.orientation,
            "data-state": Xy(l),
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
      Ly.displayName = zy;
      var Ay = "AccordionHeader",
        Vy = I.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Iy(hy, r), a = Ey(Ay, r);
          return (0, N.jsx)(vt.sG.h3, {
            "data-orientation": o.orientation,
            "data-state": Xy(a.open),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: t
          })
        });
      Vy.displayName = Ay;
      var My = "AccordionTrigger",
        Fy = I.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Iy(hy, r), a = Ey(My, r), s = Py(My, r), i = _y(r);
          return (0, N.jsx)(yy.ItemSlot, {
            scope: r,
            children: (0, N.jsx)(py, {
              "aria-disabled": a.open && !s.collapsible || void 0,
              "data-orientation": o.orientation,
              id: a.triggerId,
              ...i,
              ...n,
              ref: t
            })
          })
        });
      Fy.displayName = My;
      var By = "AccordionContent",
        qy = I.forwardRef((e, t) => {
          const {
            __scopeAccordion: r,
            ...n
          } = e, o = Iy(hy, r), a = Ey(By, r), s = _y(r);
          return (0, N.jsx)(vy, {
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

      function Xy(e) {
        return e ? "open" : "closed"
      }
      qy.displayName = By;
      var Gy = Cy,
        Ky = Ly,
        Zy = Vy,
        Hy = Fy,
        Wy = qy;

      function Uy(e) {
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

      function Yy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function $y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Yy(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Uy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yy(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Qy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Jy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        eb = "foundry_1vzsjid2",
        tb = "foundry_1vzsjidm",
        rb = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $y($y({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Jy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Qy(e.variantClassNames, e => Qy(e, e => e.split(" ")[0]))
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
      const nb = (0, I.createContext)({
          mode: "solid",
          layer: 0
        }),
        ob = (0, I.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, N.jsx)(nb.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, N.jsx)(ab, {
            ...n,
            ref: o,
            type: r
          })
        })),
        ab = (0, I.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, q.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, N.jsx)(Gy, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        sb = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, I.useContext)(nb), a = (0, q.v6)({
            className: rb({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, N.jsx)(Ky, {
            ref: r,
            ...a
          })
        }),
        ib = (0, I.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, q.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, N.jsx)(Zy, {
            ref: r,
            ...n
          })
        }),
        db = (0, I.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, q.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, N.jsx)(Hy, {
            ref: n,
            ...o,
            children: r.asChild && (0, I.isValidElement)(e) ? (0, I.cloneElement)(e, {
              children: (0, N.jsx)("span", {
                className: eb,
                children: e.props.children
              })
            }) : (0, N.jsx)("span", {
              className: eb,
              children: e
            })
          })
        }),
        lb = (0, I.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
            o = (0, q.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        cb = (0, I.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = at[e],
            o = (0, q.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        ub = (0, I.forwardRef)(({
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
          return (0, N.jsx)(Wy, {
            ref: o,
            ...a,
            children: t && (0, I.isValidElement)(e) ? (0, I.cloneElement)(e, {
              children: (0, N.jsx)("div", {
                className: tb,
                children: e.props.children
              })
            }) : (0, N.jsx)("div", {
              className: tb,
              children: e
            })
          })
        })
    }
  }
]);