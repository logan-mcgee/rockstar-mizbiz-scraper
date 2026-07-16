try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fcd902ff-1527-45f2-9eda-71fa4c97cfb4", e._sentryDebugIdIdentifier = "sentry-dbid-fcd902ff-1527-45f2-9eda-71fa4c97cfb4")
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
  [6414], {
    48647(e, t, r) {
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
        Divider: () => q,
        Dropdown: () => a,
        Heading: () => ye,
        IconButton: () => S.K,
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
        Tag: () => y,
        Text: () => we,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => ge,
        Toast: () => h,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => ar,
        Content: () => or,
        Portal: () => sr,
        Root: () => rr,
        Trigger: () => nr,
        useTooltipContext: () => tr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => dn,
        Close: () => pn,
        Content: () => rn,
        Controls: () => ln,
        CssVars: () => hn,
        Download: () => yn,
        Image: () => sn,
        Keyboard: () => un,
        LightboxContext: () => Hr,
        OpenIcon: () => Jr,
        Overlay: () => tn,
        Portal: () => en,
        Reset: () => vn,
        Root: () => Wr,
        RootImplContext: () => Ur,
        Thumbnail: () => $r,
        Trigger: () => Qr,
        Zoom: () => fn,
        ZoomPan: () => nn
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => Xa,
        Description: () => Ya,
        Hint: () => Qa,
        Label: () => Ua,
        Option: () => $a,
        OptionIcon: () => es,
        OptionText: () => Ja,
        Portal: () => ts,
        Root: () => Fa,
        ScrollArea: () => Za,
        StatusIcon: () => ns,
        StatusRoot: () => rs,
        StatusText: () => os,
        Trigger: () => Ka,
        TriggerIcon: () => Wa,
        TriggerText: () => Ha,
        Viewport: () => Ga,
        useDropdownContext: () => qa
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => js,
        Input: () => xs,
        Label: () => _s,
        Root: () => ws,
        useSwitchContext: () => gs
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Rs,
        CheckMD: () => Os,
        CheckXL: () => Ps,
        DashLG: () => Ns,
        DashMD: () => Ss,
        DashXL: () => Ds
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => Ws,
        ErrorText: () => Us,
        Group: () => $s,
        GroupDescription: () => ei,
        GroupErrorText: () => ri,
        GroupItems: () => ti,
        GroupLabel: () => Js,
        Input: () => Ks,
        Label: () => Hs,
        Root: () => Zs,
        useGroupContext: () => Qs
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => bi,
        Hint: () => gi,
        Input: () => mi,
        Label: () => hi,
        Root: () => yi,
        RootContext: () => pi,
        StatusIcon: () => xi,
        StatusRoot: () => wi,
        StatusText: () => _i,
        useTextAreaContext: () => vi
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => Wi,
        DotMD: () => Hi,
        DotXL: () => Ui
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Ai,
        Input: () => Qi,
        Label: () => Vi,
        Option: () => Yi,
        OptionDescription: () => Ji,
        OptionLabel: () => $i,
        Options: () => Li,
        Root: () => Ei,
        StatusIcon: () => Bi,
        StatusRoot: () => Mi,
        StatusText: () => qi,
        useRadioGroupContext: () => ki
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => _d,
        Control: () => gd,
        Description: () => Cd,
        Hint: () => bd,
        Icon: () => xd,
        Input: () => wd,
        Label: () => md,
        PasswordButton: () => jd,
        Root: () => hd,
        StatusIcon: () => Rd,
        StatusRoot: () => Od,
        StatusText: () => Pd
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => Yd,
        CloseButton: () => ol,
        Description: () => el,
        ErrorText: () => nl,
        Footer: () => rl,
        Header: () => Ud,
        Icon: () => $d,
        Link: () => tl,
        Root: () => Wd,
        RootContext: () => Kd,
        Title: () => Jd,
        iconStatusMap: () => Qd,
        useAlertContext: () => Hd
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => xl,
        CloseButton: () => Cl,
        Description: () => wl,
        Icon: () => gl,
        Link: () => jl,
        PaginationCounter: () => Sl,
        PaginationNav: () => Ol,
        PaginationNextButton: () => Rl,
        PaginationPrevButton: () => Pl,
        PaginationViewport: () => _l,
        Root: () => ml,
        RootContext: () => yl,
        iconStatusMap: () => bl,
        useAlertBannerContext: () => hl
      });
      var y = {};
      r.r(y), r.d(y, {
        CloseButton: () => Xl,
        Icon: () => Fl,
        Label: () => ql,
        Root: () => Bl,
        RootContext: () => Al,
        useTagContext: () => Ml
      });
      var h = {};
      r.r(h), r.d(h, {
        Action: () => Kc,
        CloseButton: () => Hc,
        Description: () => Xc,
        Icon: () => Zc,
        Provider: () => Ac,
        Root: () => Fc,
        RootContext: () => Bc,
        Viewport: () => Mc,
        iconAppearanceMap: () => Gc,
        useToastContext: () => qc
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => du,
        Item: () => iu,
        OverflowMenu: () => lu,
        OverflowMenuItem: () => cu,
        Root: () => su,
        RootContext: () => au,
        useBreadcrumbsContext: () => ou
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => xu,
        Label: () => wu,
        Root: () => gu,
        useBadgeContext: () => bu
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => ku,
        Root: () => Du,
        Scrollbar: () => Iu,
        Thumb: () => Tu,
        Viewport: () => zu
      });
      var w = {};
      r.r(w), r.d(w, {
        ActionArea: () => of,
        CloseButton: () => nf,
        Content: () => Uu,
        Description: () => Qu,
        Footer: () => af,
        Header: () => ef,
        HeaderButton: () => rf,
        HeaderTitle: () => tf,
        Layout: () => Ju,
        Overlay: () => Wu,
        Portal: () => Hu,
        Root: () => Gu,
        ScrollArea: () => $u,
        Title: () => Yu,
        Trigger: () => Ku
      });
      var x = {};
      r.r(x), r.d(x, {
        Image: () => Ef,
        Root: () => kf,
        StatusIndicator: () => Lf,
        useAvatarContext: () => Tf
      });
      var _ = {};
      r.r(_), r.d(_, {
        Controls: () => Uf,
        Dropdown: () => ep,
        DropdownLabel: () => Jf,
        Ellipsis: () => Wf,
        Item: () => Zf,
        Label: () => rp,
        Next: () => Hf,
        Option: () => tp,
        Pages: () => Gf,
        Prev: () => Kf,
        ResultsPerPage: () => $f,
        Root: () => Xf
      });
      var j = {};
      r.r(j), r.d(j, {
        Icon: () => rv,
        Item: () => tv,
        Label: () => ov,
        Root: () => ev,
        StatusIndicator: () => nv,
        useChipGroupContext: () => Jp
      });
      var C = {};
      r.r(C), r.d(C, {
        Anchor: () => mv,
        Arrow: () => gv,
        Close: () => xv,
        Content: () => bv,
        Portal: () => wv,
        Root: () => pv,
        RootContext: () => fv,
        Trigger: () => vv,
        TriggerButton: () => hv
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => ey,
        Label: () => ty,
        Root: () => Qv,
        Track: () => Jv,
        UnitLabel: () => ry
      });
      var R = {};
      r.r(R), r.d(R, {
        Content: () => wy,
        Header: () => hy,
        Icon: () => by,
        Item: () => yy,
        Root: () => py,
        Trigger: () => my,
        TriggerIcon: () => gy
      });
      var P = r(72976),
        S = r(69066),
        N = r(39793),
        D = r(81270),
        z = r(93082),
        I = r(86361);

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
            var n, o, a;
            n = e, o = t, a = r[t], (o = T(o)) in n ? Object.defineProperty(n, o, {
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
      var V, A, M = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        B = (V = {
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
          var t = V.defaultClassName,
            r = E(E({}, V.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : V.defaultVariants[n];
            if (null != a) {
              var s = a;
              "boolean" == typeof s && (s = !0 === s ? "true" : "false");
              var i = V.variantClassNames[n][s];
              i && (t += " " + i)
            }
          }
          for (var [d, l] of V.compoundVariants) M(d, r, V.defaultVariants) && (t += " " + l);
          return t
        }, A.variants = () => Object.keys(V.variantClassNames), A.classNames = {
          get base() {
            return V.defaultClassName.split(" ")[0]
          },
          get variants() {
            return L(V.variantClassNames, e => L(e, e => e.split(" ")[0]))
          }
        }, A);
      const q = (0, z.forwardRef)(({
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
          className: (0, D.clsx)(B({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var F = r(36205),
        X = r(57030),
        G = r(43870);

      function Z(e) {
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

      function K(e, t) {
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
          t % 2 ? K(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Z(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach(function(t) {
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
        Q = "var(--foundry_9dxgbc3)",
        $ = (e => {
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
      const te = (0, z.forwardRef)(({
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
          c = (0, F.v6)({
            className: $({
              size: l
            }),
            "data-testid": t,
            style: (0, X.DI)({
              [J]: n?.pulseColorBackground,
              [ee]: n?.pulseColorForeground,
              [Y]: n?.gradientColorBackground,
              [Q]: n?.gradientColorForeground
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
      const ce = (0, z.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? I.DX : "p",
          i = (0, F.v6)({
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
      const fe = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? I.DX : "p",
            s = (0, F.v6)({
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
        pe = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "h1",
            a = (0, F.v6)({
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
      const ye = (0, z.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? I.DX : `h${7===t?6:t}`,
          s = (0, F.v6)(n, {
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
      var he = de({
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
      const me = (0, z.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? I.DX : "p",
          i = (0, F.v6)({
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
        we = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? I.DX : ge[r] || "span",
            s = (0, F.v6)(n, {
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
        je = r(99206),
        Ce = r(34811);
      const Oe = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Re = ([e, t]) => ({
        x: e,
        y: t
      }), Pe = (e, t) => (e.x = t.x, e.y = t.y, e), Se = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Ne = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), De = (e, t, r) => Math.min(Math.max(e, t), r);
      var ze = r(90004);

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

      function ke(e) {
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
      var Le = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ve = e => {
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
        Ae = Ve({
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
        Me = Ve({
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
      const Be = {
          inherit: !1,
          overwrite: !0,
          duration: .6,
          ease: "power4.inOut"
        },
        qe = {
          inherit: !1,
          overwrite: !1,
          duration: .3,
          ease: "power2.out"
        },
        Fe = (0, X.Tm)("var(--foundry_1a74xwb0)");
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
      class Ze {
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
      class Ke {
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
      class Qe extends Event {
        point;
        tapTarget;
        originalEvent;
        constructor(e, t, r, n) {
          super(e), this.point = r, this.tapTarget = t, this.originalEvent = n
        }
      }
      class $e extends He {
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
          if (!this.dispatch(e, new Qe(e, t, r, n)).defaultPrevented) switch (this.options[e]) {
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
          }), this.bounds = new Ze({
            slide: this
          }), this.dragHandler = new We({
            options: a,
            slide: this
          }), this.scrollWheel = new Ye({
            slide: this
          }), this.zoomHandler = new Je({
            slide: this
          }), this.zoomLevels = new Ke({
            options: r,
            slide: this
          }), this.tapHandler = new $e({
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
      var rt = r(56550),
        nt = r(20357);
      const ot = (0, Xe.YK)({
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
      const st = (0, z.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, ze.vC)(e, e => r?.(e), [r]), (0, N.jsx)(ce, {
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
      var it = r(71433),
        dt = r(39467),
        lt = r(64239),
        ct = r(54958),
        ut = r(96356),
        ft = r(94296),
        pt = r(96585),
        vt = r(36810),
        yt = r(66624),
        ht = r(80082),
        mt = r(17172),
        bt = r(17038),
        gt = r(92023),
        [wt, xt] = (0, ct.A)("Tooltip", [pt.Bk]),
        _t = (0, pt.Bk)(),
        jt = "TooltipProvider",
        Ct = 700,
        Ot = "tooltip.open",
        [Rt, Pt] = wt(jt),
        St = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Ct,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = z.useRef(!0), i = z.useRef(!1), d = z.useRef(0);
          return z.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, N.jsx)(Rt, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: z.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: z.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: z.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      St.displayName = jt;
      var Nt = "Tooltip",
        [Dt, zt] = wt(Nt),
        It = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = Pt(Nt, e.__scopeTooltip), l = _t(t), [c, u] = z.useState(null), f = (0, ft.B)(), p = z.useRef(0), v = s ?? d.disableHoverableContent, y = i ?? d.delayDuration, h = z.useRef(!1), [m, b] = (0, bt.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Ot))) : d.onClose(), a?.(e)
            },
            caller: Nt
          }), g = z.useMemo(() => m ? h.current ? "delayed-open" : "instant-open" : "closed", [m]), w = z.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, h.current = !1, b(!0)
          }, [b]), x = z.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
          }, [b]), _ = z.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              h.current = !0, b(!0), p.current = 0
            }, y)
          }, [y, b]);
          return z.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, N.jsx)(pt.bL, {
            ...l,
            children: (0, N.jsx)(Dt, {
              scope: t,
              contentId: f,
              open: m,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: z.useCallback(() => {
                d.isOpenDelayedRef.current ? _() : w()
              }, [d.isOpenDelayedRef, _, w]),
              onTriggerLeave: z.useCallback(() => {
                v ? x() : (window.clearTimeout(p.current), p.current = 0)
              }, [x, v]),
              onOpen: w,
              onClose: x,
              disableHoverableContent: v,
              children: r
            })
          })
        };
      It.displayName = Nt;
      var Tt = "TooltipTrigger",
        kt = z.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = zt(Tt, r), a = Pt(Tt, r), s = _t(r), i = z.useRef(null), d = (0, lt.s)(t, i, o.onTriggerChange), l = z.useRef(!1), c = z.useRef(!1), u = z.useCallback(() => l.current = !1, []);
          return z.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, N.jsx)(pt.Mz, {
            asChild: !0,
            ...s,
            children: (0, N.jsx)(ht.sG.button, {
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
      kt.displayName = Tt;
      var Et = "TooltipPortal",
        [Lt, Vt] = wt(Et, {
          forceMount: void 0
        }),
        At = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = zt(Et, t);
          return (0, N.jsx)(Lt, {
            scope: t,
            forceMount: r,
            children: (0, N.jsx)(yt.C, {
              present: r || a.open,
              children: (0, N.jsx)(vt.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      At.displayName = Et;
      var Mt = "TooltipContent",
        Bt = z.forwardRef((e, t) => {
          const r = Vt(Mt, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = zt(Mt, e.__scopeTooltip);
          return (0, N.jsx)(yt.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, N.jsx)(Zt, {
              side: o,
              ...a,
              ref: t
            }) : (0, N.jsx)(qt, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        qt = z.forwardRef((e, t) => {
          const r = zt(Mt, e.__scopeTooltip),
            n = Pt(Mt, e.__scopeTooltip),
            o = z.useRef(null),
            a = (0, lt.s)(t, o),
            [s, i] = z.useState(null),
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
          return z.useEffect(() => () => f(), [f]), z.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), z.useEffect(() => {
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
          }, [d, c, s, l, f]), (0, N.jsx)(Zt, {
            ...e,
            ref: a
          })
        }),
        [Ft, Xt] = wt(Nt, {
          isInside: !1
        }),
        Gt = (0, mt.Dc)("TooltipContent"),
        Zt = z.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = zt(Mt, r), l = _t(r), {
            onClose: c
          } = d;
          return z.useEffect(() => (document.addEventListener(Ot, c), () => document.removeEventListener(Ot, c)), [c]), z.useEffect(() => {
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
          }, [d.trigger, c]), (0, N.jsx)(ut.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, N.jsxs)(pt.UC, {
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
              children: [(0, N.jsx)(Gt, {
                children: n
              }), (0, N.jsx)(Ft, {
                scope: r,
                isInside: !0,
                children: (0, N.jsx)(gt.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Bt.displayName = Mt;
      var Kt = "TooltipArrow",
        Ht = z.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = _t(r);
          return Xt(Kt, r).isInside ? null : (0, N.jsx)(pt.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      Ht.displayName = Kt;
      var Wt = St,
        Ut = It,
        Yt = kt,
        Qt = At,
        $t = Bt,
        Jt = Ht;
      const er = (0, z.createContext)(null);

      function tr() {
        const e = (0, z.useContext)(er);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const rr = ({
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
          return (0, N.jsx)(Wt, {
            delayDuration: t,
            children: (0, N.jsx)(er.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, N.jsx)(Ut, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        nr = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, N.jsx)(Yt, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        or = (0, z.forwardRef)(({
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
          } = tr(), c = (0, xe.jt)(), u = (0, it.CS)($t), f = (0, it.pn)(l, {
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
          }), p = (0, F.v6)({
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
        ar = (0, z.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, F.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, N.jsx)(Jt, {
            ...r,
            ref: t
          })
        }),
        sr = Qt;
      var ir = r(81471),
        dr = r(99136),
        lr = r(52184),
        cr = r(5024),
        ur = r(65324),
        fr = ["PageUp", "PageDown"],
        pr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        vr = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        yr = "Slider",
        [hr, mr, br] = (0, ur.N)(yr),
        [gr, wr] = (0, ct.A)(yr, [br]),
        [xr, _r] = gr(yr),
        jr = z.forwardRef((e, t) => {
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
            ...y
          } = e, h = z.useRef(new Set), m = z.useRef(0), b = z.useRef(!1), g = "horizontal" === s ? Rr : Pr, [w = [], x] = (0, bt.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...h.current];
              t[m.current]?.focus({
                preventScroll: !0,
                focusVisible: b.current
              }), b.current = !1, u(e)
            }
          }), _ = z.useRef(w);

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
              l = (0, ir.q)(i, [n, o]);
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
          return (0, N.jsx)(xr, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: h.current,
            values: w,
            orientation: s,
            form: v,
            children: (0, N.jsx)(hr.Provider, {
              scope: e.__scopeSlider,
              children: (0, N.jsx)(hr.Slot, {
                scope: e.__scopeSlider,
                children: (0, N.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...y,
                  ref: t,
                  onPointerDown: (0, dt.mK)(y.onPointerDown, () => {
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
                      const r = fr.includes(e.key) || e.shiftKey && pr.includes(e.key) ? 10 : 1,
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
      jr.displayName = yr;
      var [Cr, Or] = gr(yr, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Rr = z.forwardRef((e, t) => {
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
        } = e, [u, f] = z.useState(null), p = (0, lt.s)(t, e => f(e)), v = z.useRef(void 0), y = (0, dr.jH)(o), h = "ltr" === y, m = h && !a || !h && a;

        function b(e) {
          const t = v.current || u.getBoundingClientRect(),
            o = Gr([0, t.width], m ? [r, n] : [n, r]);
          return v.current = t, o(e - t.left)
        }
        return (0, N.jsx)(Cr, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, N.jsx)(Sr, {
            dir: y,
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
              const t = vr[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Pr = z.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = z.useRef(null), u = (0, lt.s)(t, c), f = z.useRef(void 0), p = !o;

        function v(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Gr([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, N.jsx)(Cr, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, N.jsx)(Sr, {
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
              const t = vr[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Sr = z.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = _r(yr, r);
        return (0, N.jsx)(ht.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : fr.concat(pr).includes(e.key) && (d(e), e.preventDefault())
          }),
          onPointerDown: (0, dt.mK)(e.onPointerDown, e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), c.thumbs.has(t) ? t.focus({
              preventScroll: !0,
              focusVisible: !1
            }) : n(e)
          }),
          onPointerMove: (0, dt.mK)(e.onPointerMove, e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          }),
          onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          })
        })
      }), Nr = "SliderTrack", Dr = z.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = _r(Nr, r);
        return (0, N.jsx)(ht.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Dr.displayName = Nr;
      var zr = "SliderRange",
        Ir = z.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = _r(zr, r), a = Or(zr, r), s = z.useRef(null), i = (0, lt.s)(t, s), d = o.values.length, l = o.values.map(e => Xr(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, N.jsx)(ht.sG.span, {
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
      Ir.displayName = zr;
      var Tr = "SliderThumb",
        [kr, Er] = gr(Tr),
        Lr = "SliderThumbProvider";

      function Vr(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = _r(Lr, t), s = mr(t), [i, d] = z.useState(null), l = z.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, cr.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Xr(f, a.min, a.max);
        z.useEffect(() => {
          if (i) return a.thumbs.add(i), () => {
            a.thumbs.delete(i)
          }
        }, [i, a.thumbs]);
        const y = {
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
        return (0, N.jsx)(kr, {
          scope: t,
          ...y,
          children: Zr(o) ? o(y) : n
        })
      }
      Vr.displayName = Lr;
      var Ar = "SliderThumbTrigger",
        Mr = z.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = _r(Ar, r), a = Or(Ar, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Er(Ar, r), u = (0, lt.s)(t, e => c(e)), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(s, o.values.length), p = l?.[a.size], v = p ? function(e, t, r) {
            const n = e / 2;
            return (n - Gr([0, 50], [0, n])(t) * r) * r
          }(p, d, a.direction) : 0;
          return (0, N.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, N.jsx)(hr.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(ht.sG.span, {
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
                onFocus: (0, dt.mK)(e.onFocus, () => {
                  o.valueIndexToChangeRef.current = s
                })
              })
            })
          })
        });
      Mr.displayName = Ar;
      var Br = z.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, N.jsx)(Vr, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(Mr, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, N.jsx)(Fr, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Br.displayName = Tr;
      var qr = "SliderBubbleInput",
        Fr = z.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: a
          } = Er(qr, e), s = z.useRef(null), i = (0, lt.s)(s, r), d = (0, lr.Z)(n);
          return z.useEffect(() => {
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
          }, [d, n]), (0, N.jsx)(ht.sG.input, {
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

      function Xr(e, t, r) {
        const n = 100 / (r - t) * (e - t);
        return (0, ir.q)(n, [0, 100])
      }

      function Gr(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Zr(e) {
        return "function" == typeof e
      }
      Fr.displayName = qr;
      var Kr = r(85339);
      const Hr = (0, z.createContext)({
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
        Wr = ({
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
            v = (0, z.useRef)(null),
            y = (0, z.useRef)(null),
            h = (0, z.useRef)(null),
            m = (0, z.useRef)(null),
            b = (0, z.useRef)(null),
            g = (0, z.useRef)(null),
            w = (0, z.useRef)(null),
            x = (0, z.useRef)(null),
            _ = (0, z.useRef)(null),
            j = (0, z.useRef)(null),
            C = (0, z.useRef)(null),
            O = (0, z.useRef)(null),
            R = (0, z.useRef)(null),
            P = (0, z.useRef)(null),
            S = (0, z.useRef)(null),
            D = (0, z.useRef)(null),
            I = (0, z.useRef)(null),
            T = (0, z.useRef)(null),
            k = (0, z.useRef)(null),
            [E = !1, L] = (0, xe.ic)({
              prop: t || n,
              onChange: r
            }),
            V = (0, z.useRef)(null);
          return V.current || (V.current = new tt({
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
            children: (0, N.jsx)(Hr.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: y,
                thumbnailRef: h,
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
                zoomInRef: S,
                zoomSliderRef: D,
                zoomOutRef: I,
                resetRef: T,
                downloadRef: k,
                open: E,
                setOpen: L,
                altText: e,
                hideTrigger: c,
                slide: V.current
              },
              children: (0, N.jsx)(Yr, {
                ...u
              })
            })
          })
        },
        Ur = (0, z.createContext)({
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
        Yr = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, z.useContext)(Hr), {
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
            } = (0, z.useContext)(Hr), p = (0, z.useRef)(null);
            p.current || (p.current = _e.os.timeline({
              defaults: Be
            }));
            const v = (0, z.useCallback)(e => {
                if (e.detail >= 2) return;
                if (e.target && "BUTTON" === e.target.nodeName) return;
                const t = document.elementsFromPoint(e.clientX, e.clientY);
                for (const e of t)
                  if ("BUTTON" === e.nodeName) {
                    e.click();
                    break
                  }
              }, []),
              y = e(async e => {
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
                  [Fe]: "none"
                }, {
                  opacity: () => t.getControlsOpacity(),
                  [Fe]: "auto",
                  data: {
                    invalidate: !0
                  }
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Oe(f.current), t.closing || (_e.os.set([f.current], {
                  visibility: "visible",
                  ...qe
                }), _e.os.set([u.current], {
                  visibility: "hidden",
                  ...qe
                }))))
              }),
              h = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, z.useCallback)(async e => {
                e || (window.addEventListener("click", v), await h(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              b = (0, z.useCallback)(() => m(!1), [m]);
            return {
              onOpenChange: m,
              openAnim: y,
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
            } = (0, z.useContext)(Hr), d = t(async e => {
              r.zoomTo(e), _e.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              _e.os.to([a.current], {
                opacity: e,
                [Fe]: t,
                ...qe
              })
            }), p = t(async () => {
              _e.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), v = (0, z.useCallback)(() => {
              n.current && o.current && (_e.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              }), _e.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...qe
              }), _e.os.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, z.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", v), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          }), u = (0, F.v6)(e, {
            open: t,
            onOpenChange: r
          });
          return (0, N.jsx)(Ur.Provider, {
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
            children: (0, N.jsx)(Kr.bL, {
              ...u
            })
          })
        },
        Qr = (0, z.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, z.useContext)(Hr),
            d = (0, xe.UP)(a, n),
            l = (0, F.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(ot.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, N.jsx)(Kr.l9, {
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
        $r = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, z.useContext)(Hr), a = (0, xe.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        Jr = (0, z.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, z.useContext)(Hr), o = (0, xe.UP)(n, r), a = (0, F.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? I.DX : nt.Maximize2;
          return (0, N.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        en = ({
          ...e
        }) => (0, N.jsx)(Kr.ZL, {
          ...e
        }),
        tn = (0, z.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, z.useContext)(Hr), o = (0, xe.UP)(n, r), a = (0, F.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, N.jsx)(Kr.hJ, {
            ref: o,
            ...a
          })
        }),
        rn = (0, z.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, z.useContext)(Ur), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, z.useContext)(Hr), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, z.useContext)(Hr), [t, r] = (0, z.useState)(e.getCursor()), n = (0, z.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, z.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, rt.m)("dark"), c = (0, xe.UP)(a, n), u = (0, F.v6)(r, {
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
          return (0, N.jsxs)(Kr.UC, {
            ref: c,
            ...u,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)(Kr.hE, {
                children: s
              })
            }), t]
          })
        }),
        nn = (0, z.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, z.useContext)(Hr);
          (() => {
            const {
              contextSafe: e
            } = (0, je.L)(), {
              toggleControls: t
            } = (0, z.useContext)(Ur), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, z.useContext)(Hr), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (_e.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...qe
              }), _e.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...qe
              }), _e.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...qe
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || _e.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...qe
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (_e.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...qe
              }), _e.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...qe
              }), _e.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...qe
              })))
            }), c = (0, z.useCallback)(() => {
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
            s = (0, F.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, N.jsx)("div", {
            ref: a,
            ...s,
            children: (0, N.jsxs)(on, {
              children: [(0, N.jsx)(an, {}), t]
            })
          })
        }),
        on = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, z.useContext)(Hr), a = (0, xe.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        an = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, z.useContext)(Hr), a = (0, xe.UP)(o, n), s = (0, F.v6)(r, {
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
        sn = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, z.useContext)(Hr), a = (0, xe.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? I.DX : "img";
          return (0, N.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        dn = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, z.useContext)(Hr), a = (0, xe.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? I.DX : "p";
          return (0, N.jsx)(Kr.VY, {
            asChild: !0,
            children: (0, N.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        ln = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, z.useContext)(Hr);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, z.useContext)(Ur);
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
          const a = (0, xe.UP)(o, n),
            s = (0, F.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? I.DX : "div";
          return (0, N.jsx)(ze.Hb, {
            children: (0, N.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        cn = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, N.jsx)(N.Fragment, {
            children: n
          });
          const a = (0, F.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, N.jsxs)(rr, {
            delayDuration: 0,
            children: [(0, N.jsx)(nr, {
              children: n
            }), (0, N.jsxs)(or, {
              ...a,
              children: [(0, N.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, N.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, N.jsx)(ar, {})]
            })]
          })
        },
        un = (0, z.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, F.v6)(e, {
            isInline: !0
          });
          return (0, N.jsx)(st, {
            ref: t,
            ...r
          })
        }),
        fn = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, z.useContext)(Hr),
            {
              canZoomIn: d,
              zoomIn: l,
              canZoomOut: c,
              zoomOut: u,
              zoomProgress: f,
              minZoomLevel: p,
              maxZoomLevel: v,
              zoomTo: y
            } = (() => {
              const {
                slide: e
              } = (0, z.useContext)(Hr), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, z.useContext)(Ur), [o, a] = (0, z.useState)(!1), [s, i] = (0, z.useState)(!1), [d, l] = (0, z.useState)(0), [c, u] = (0, z.useState)(0), [f, p] = (0, z.useState)(0), v = (0, z.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), y = (0, z.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, z.useEffect)(() => (e.addEventListener("zoom", v), () => {
                e.removeEventListener("zoom", v)
              }), [v]), {
                zoomTo: y,
                zoomIn: t,
                zoomOut: r,
                canZoomIn: o,
                canZoomOut: s,
                zoomProgress: d,
                minZoomLevel: c,
                maxZoomLevel: f
              }
            })(),
            h = (0, xe.UP)(i, a),
            m = (0, F.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? I.DX : "div";
          return (0, N.jsxs)(b, {
            ref: h,
            ...m,
            children: [(0, N.jsx)(cn, {
              side: "left",
              enabled: r,
              content: s.formatMessage(ot.ZoomInButtonLabel),
              metadata: s.formatMessage(ot.ZoomInButtonTooltip, {
                shortcut: (0, N.jsx)(un, {
                  shortcut: "+"
                })
              }),
              children: (0, N.jsx)(S.K, {
                label: s.formatMessage(ot.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Me({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, N.jsxs)(jr, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: y,
              children: [(0, N.jsx)(Dr, {
                className: "foundry_1a74xwbu",
                children: (0, N.jsx)(Ir, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, N.jsx)(cn, {
                side: "left",
                enabled: r,
                content: s.formatMessage(ot.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, N.jsx)(Br, {
                  className: "foundry_1a74xwbw",
                  children: (0, N.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, N.jsx)(cn, {
              side: "left",
              enabled: r,
              content: s.formatMessage(ot.ZoomOutButtonLabel),
              metadata: s.formatMessage(ot.ZoomOutButtonTooltip, {
                shortcut: (0, N.jsx)(un, {
                  shortcut: "-"
                })
              }),
              children: (0, N.jsx)(S.K, {
                label: s.formatMessage(ot.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Me({
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
        pn = (0, z.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, Xe.tz)(),
            {
              closeRef: s
            } = (0, z.useContext)(Hr),
            i = (0, xe.UP)(s, o),
            d = (0, F.v6)(n, {
              "data-testid": e,
              className: Ae({
                styled: !t
              })
            }),
            l = t ? (0, N.jsx)(I.DX, {
              ref: i,
              ...d
            }) : (0, N.jsx)(S.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(ot.CloseButtonLabel)
            });
          return (0, N.jsx)(cn, {
            side: "right",
            enabled: r,
            content: a.formatMessage(ot.CloseButtonLabel),
            metadata: a.formatMessage(ot.CloseButtonTooltip, {
              shortcut: (0, N.jsx)(un, {
                shortcut: "Esc"
              })
            }),
            children: (0, N.jsx)(Kr.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        vn = (0, z.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, z.useContext)(Hr), {
                contextSafe: r
              } = (0, je.L)(), {
                resetZoom: n
              } = (0, z.useContext)(Ur), [o, a] = (0, z.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                _e.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...qe
                })
              }), i = (0, z.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, z.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, z.useContext)(Hr),
            i = (0, xe.UP)(s, n),
            d = (0, F.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, N.jsx)(cn, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ot.ResetZoomButtonLabel),
            metadata: o.formatMessage(ot.ResetZoomButtonTooltip, {
              shortcut: (0, N.jsx)(un, {
                shortcut: "R"
              })
            }),
            children: (0, N.jsx)(S.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(ot.ResetZoomButtonLabel)
            })
          })
        }),
        yn = (0, z.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, z.useContext)(Hr),
            i = (0, xe.UP)(a, n),
            d = (0, F.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, N.jsx)(cn, {
            side: "left",
            enabled: t,
            content: o.formatMessage(ot.DownloadButtonTooltip),
            children: (0, N.jsx)(S.K, {
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
        hn = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var mn = r(98905);

      function bn(e) {
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

      function gn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gn(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gn(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _n = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wn(wn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _n(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xn(e.variantClassNames, e => xn(e, e => e.split(" ")[0]))
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
      const Cn = (0, z.createContext)(null);

      function On() {
        const e = (0, z.useContext)(Cn);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Rn = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, F.v6)({
              className: jn({
                status: a
              }),
              "data-testid": t
            }, s),
            l = r ? I.DX : "div";
          return (0, N.jsx)(Cn.Provider, {
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
        Pn = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = On(), a = (0, F.v6)({
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
        Sn = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = On(), i = (0, F.v6)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? I.DX : "div";
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Nn = r(94660),
        Dn = r(10198),
        zn = "ScrollArea",
        [In, Tn] = (0, ct.A)(zn),
        [kn, En] = In(zn),
        Ln = z.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = z.useState(null), [l, c] = z.useState(null), [u, f] = z.useState(null), [p, v] = z.useState(null), [y, h] = z.useState(null), [m, b] = z.useState(0), [g, w] = z.useState(0), [x, _] = z.useState(!1), [j, C] = z.useState(!1), O = (0, lt.s)(t, e => d(e)), R = (0, dr.jH)(o);
          return (0, N.jsx)(kn, {
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
            scrollbarY: y,
            onScrollbarYChange: h,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: b,
            onCornerHeightChange: w,
            children: (0, N.jsx)(ht.sG.div, {
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
      Ln.displayName = zn;
      var Vn = "ScrollAreaViewport",
        An = z.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = En(Vn, r), i = z.useRef(null), d = (0, lt.s)(t, i, s.onViewportChange);
          return (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(Mn, {
              nonce: o
            }), (0, N.jsx)(ht.sG.div, {
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
      An.displayName = Vn;
      var Mn = z.memo(({
          nonce: e
        }) => (0, N.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        Bn = "ScrollAreaScrollbar",
        qn = z.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = En(Bn, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return z.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, N.jsx)(Fn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, N.jsx)(Xn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, N.jsx)(Gn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, N.jsx)(Zn, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      qn.displayName = Bn;
      var Fn = z.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = En(Bn, e.__scopeScrollArea), [a, s] = z.useState(!1);
          return z.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, N.jsx)(yt.C, {
            present: r || a,
            children: (0, N.jsx)(Gn, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Xn = z.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = En(Bn, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = uo(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, z.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return z.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), z.useEffect(() => {
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
          }, [o.viewport, a, d, s]), (0, N.jsx)(yt.C, {
            present: r || "hidden" !== i,
            children: (0, N.jsx)(Zn, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, dt.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, dt.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Gn = z.forwardRef((e, t) => {
          const r = En(Bn, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = z.useState(!1),
            i = "horizontal" === e.orientation,
            d = uo(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return fo(r.viewport, d), fo(r.content, d), (0, N.jsx)(yt.C, {
            present: n || a,
            children: (0, N.jsx)(Zn, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Zn = z.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = En(Bn, e.__scopeScrollArea), a = z.useRef(null), s = z.useRef(0), [i, d] = z.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = oo(i.viewport, i.content), c = {
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
              const o = ao(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return io([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, N.jsx)(Kn, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = so(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, N.jsx)(Hn, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = so(o.viewport.scrollTop, i);
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
        Kn = z.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = En(Bn, e.__scopeScrollArea), [s, i] = z.useState(), d = z.useRef(null), l = (0, lt.s)(t, d, a.onScrollbarXChange);
          return z.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(Yn, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ao(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), lo(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: no(s.paddingLeft),
                  paddingEnd: no(s.paddingRight)
                }
              })
            }
          })
        }),
        Hn = z.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = En(Bn, e.__scopeScrollArea), [s, i] = z.useState(), d = z.useRef(null), l = (0, lt.s)(t, d, a.onScrollbarYChange);
          return z.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, N.jsx)(Yn, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ao(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), lo(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: no(s.paddingTop),
                  paddingEnd: no(s.paddingBottom)
                }
              })
            }
          })
        }),
        [Wn, Un] = In(Bn),
        Yn = z.forwardRef((e, t) => {
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
          } = e, p = En(Bn, r), [v, y] = z.useState(null), h = (0, lt.s)(t, e => y(e)), m = z.useRef(null), b = z.useRef(""), g = p.viewport, w = n.content - n.viewport, x = (0, Nn.c)(c), _ = (0, Nn.c)(d), j = uo(u, 10);

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
          return z.useEffect(() => {
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
          }, [g, v, w, x]), z.useEffect(_, [n, _]), fo(v, j), fo(p.content, j), (0, N.jsx)(Wn, {
            scope: r,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: (0, Nn.c)(a),
            onThumbPointerUp: (0, Nn.c)(s),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, Nn.c)(i),
            children: (0, N.jsx)(ht.sG.div, {
              ...f,
              ref: h,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, dt.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), C(e))
              }),
              onPointerMove: (0, dt.mK)(e.onPointerMove, C),
              onPointerUp: (0, dt.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        Qn = "ScrollAreaThumb",
        $n = z.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Un(Qn, e.__scopeScrollArea);
          return (0, N.jsx)(yt.C, {
            present: r || o.hasThumb,
            children: (0, N.jsx)(Jn, {
              ref: t,
              ...n
            })
          })
        }),
        Jn = z.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = En(Qn, r), s = Un(Qn, r), {
            onThumbPositionChange: i
          } = s, d = (0, lt.s)(t, e => s.onThumbChange(e)), l = z.useRef(void 0), c = uo(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return z.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = co(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, N.jsx)(ht.sG.div, {
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
      $n.displayName = Qn;
      var eo = "ScrollAreaCorner",
        to = z.forwardRef((e, t) => {
          const r = En(eo, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, N.jsx)(ro, {
            ...e,
            ref: t
          }) : null
        });
      to.displayName = eo;
      var ro = z.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = En(eo, r), [a, s] = z.useState(0), [i, d] = z.useState(0), l = Boolean(a && i);
        return fo(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), fo(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), l ? (0, N.jsx)(ht.sG.div, {
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

      function no(e) {
        return e ? parseInt(e, 10) : 0
      }

      function oo(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function ao(e) {
        const t = oo(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function so(e, t, r = "ltr") {
        const n = ao(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, ir.q)(e, d);
        return io([0, s], [0, i])(l)
      }

      function io(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function lo(e, t) {
        return e > 0 && e < t
      }
      var co = (e, t = () => {}) => {
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

      function uo(e, t) {
        const r = (0, Nn.c)(e),
          n = z.useRef(0);
        return z.useEffect(() => () => window.clearTimeout(n.current), []), z.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function fo(e, t) {
        const r = (0, Nn.c)(t);
        (0, Dn.N)(() => {
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
      var po = Ln,
        vo = An,
        yo = qn,
        ho = $n,
        mo = to,
        bo = r(84017),
        go = r(38174),
        wo = r(96739),
        xo = r(45787),
        _o = r(38100),
        jo = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Co = [" ", "Enter"],
        Oo = "Select",
        [Ro, Po, So] = (0, ur.N)(Oo),
        [No, Do] = (0, ct.A)(Oo, [So, pt.Bk]),
        zo = (0, pt.Bk)(),
        [Io, To] = No(Oo),
        [ko, Eo] = No(Oo);

      function Lo(e) {
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
          internal_do_not_use_render: y
        } = e, h = zo(t), [m, b] = z.useState(null), [g, w] = z.useState(null), [x, _] = z.useState(!1), j = (0, dr.jH)(l), [C, O] = (0, bt.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: Oo
        }), [R, P] = (0, bt.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: Oo
        }), S = z.useRef(null), D = !m || !!v || !!m.closest("form"), [I, T] = z.useState(new Set), k = (0, ft.B)(), E = Array.from(I).map(e => e.props.value).join(";"), L = z.useCallback(e => {
          T(t => new Set(t).add(e))
        }, []), V = z.useCallback(e => {
          T(t => {
            const r = new Set(t);
            return r.delete(e), r
          })
        }, []), A = {
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
          triggerPointerDownPosRef: S,
          disabled: f,
          name: c,
          autoComplete: u,
          form: v,
          nativeOptions: I,
          nativeSelectKey: E,
          isFormControl: D
        };
        return (0, N.jsx)(pt.bL, {
          ...h,
          children: (0, N.jsx)(Io, {
            scope: t,
            ...A,
            children: (0, N.jsx)(Ro.Provider, {
              scope: t,
              children: (0, N.jsx)(ko, {
                scope: t,
                onNativeOptionAdd: L,
                onNativeOptionRemove: V,
                children: Ca(y) ? y(A) : r
              })
            })
          })
        })
      }
      Lo.displayName = "SelectProvider";
      var Vo = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, N.jsx)(Lo, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, N.jsxs)(N.Fragment, {
            children: [r, e ? (0, N.jsx)(ja, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      Vo.displayName = Oo;
      var Ao = "SelectTrigger",
        Mo = z.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = zo(r), s = To(Ao, r), i = s.disabled || n, d = (0, lt.s)(t, s.onTriggerChange), l = Po(r), c = z.useRef("touch"), [u, f, p] = Ra(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = Pa(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, N.jsx)(pt.Mz, {
            asChild: !0,
            ...a,
            children: (0, N.jsx)(ht.sG.button, {
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
              "data-placeholder": Oa(s.value) ? "" : void 0,
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
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || jo.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      Mo.displayName = Ao;
      var Bo = "SelectValue",
        qo = z.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = To(Bo, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, lt.s)(t, d.onValueNodeChange);
          (0, Dn.N)(() => {
            l(c)
          }, [l, c]);
          const f = Oa(d.value);
          return (0, N.jsx)(ht.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, N.jsx)(z.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      qo.displayName = Bo;
      var Fo = z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, N.jsx)(ht.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Fo.displayName = "SelectIcon";
      var Xo = "SelectPortal",
        [Go, Zo] = No(Xo, {
          forceMount: void 0
        }),
        Ko = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, N.jsx)(Go, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, N.jsx)(vt.Z, {
              asChild: !0,
              ...n
            })
          })
        };
      Ko.displayName = Xo;
      var Ho = "SelectContent",
        Wo = z.forwardRef((e, t) => {
          const r = Zo(Ho, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = To(Ho, e.__scopeSelect),
            [s, i] = z.useState();
          return (0, Dn.N)(() => {
            i(new DocumentFragment)
          }, []), (0, N.jsx)(yt.C, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, N.jsx)(ea, {
              ...o,
              ref: t
            }) : (0, N.jsx)(Uo, {
              ...o,
              fragment: s
            })
          })
        });
      Wo.displayName = Ho;
      var Uo = z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? bo.createPortal((0, N.jsx)(Qo, {
          scope: r,
          children: (0, N.jsx)(Ro.Slot, {
            scope: r,
            children: (0, N.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      Uo.displayName = "SelectContentFragment";
      var Yo = 10,
        [Qo, $o] = No(Ho),
        Jo = (0, mt.TL)("SelectContent.RemoveScroll"),
        ea = z.forwardRef((e, t) => {
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
            hideWhenDetached: y,
            avoidCollisions: h,
            ...m
          } = e, b = To(Ho, r), [g, w] = z.useState(null), [x, _] = z.useState(null), j = (0, lt.s)(t, e => w(e)), [C, O] = z.useState(null), [R, P] = z.useState(null), S = Po(r), [D, I] = z.useState(!1), T = z.useRef(!1);
          z.useEffect(() => {
            if (g) return (0, xo.Eq)(g)
          }, [g]), (0, go.Oh)();
          const k = z.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, x]),
            E = z.useCallback(() => k([C, g]), [k, C, g]);
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
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (V.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (V.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(g) || L(!1), document.removeEventListener("pointermove", t), V.current = null
                };
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
            const e = () => L(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [L]);
          const [A, M] = Ra(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = Pa(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), B = z.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (T.current = !0))
          }, [b.value]), q = z.useCallback(() => g?.focus(), [g]), F = z.useCallback((e, t, r) => {
            const n = !T.current && !r;
            (void 0 !== b.value && b.value === t || n) && P(e)
          }, [b.value]), X = "popper" === n ? ra : ta, G = X === ra ? {
            side: i,
            sideOffset: d,
            align: l,
            alignOffset: c,
            arrowPadding: u,
            collisionBoundary: f,
            collisionPadding: p,
            sticky: v,
            hideWhenDetached: y,
            avoidCollisions: h
          } : {};
          return (0, N.jsx)(Qo, {
            scope: r,
            content: g,
            viewport: x,
            onViewportChange: _,
            itemRefCallback: B,
            selectedItem: C,
            onItemLeave: q,
            itemTextRefCallback: F,
            focusSelectedItem: E,
            selectedItemText: R,
            position: n,
            isPositioned: D,
            searchRef: A,
            children: (0, N.jsx)(_o.A, {
              as: Jo,
              allowPinchZoom: !0,
              children: (0, N.jsx)(wo.n, {
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
                children: (0, N.jsx)(ut.qW, {
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
                    ...G,
                    onPlaced: () => I(!0),
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, dt.mK)(m.onKeyDown, e => {
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
      ea.displayName = "SelectContentImpl";
      var ta = z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = To(Ho, r), s = $o(Ho, r), [i, d] = z.useState(null), [l, c] = z.useState(null), u = (0, lt.s)(t, e => c(e)), f = Po(r), p = z.useRef(!1), v = z.useRef(!0), {
          viewport: y,
          selectedItem: h,
          selectedItemText: m,
          focusSelectedItem: b
        } = s, g = z.useCallback(() => {
          if (a.trigger && a.valueNode && i && l && y && h && m) {
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
                c = window.innerWidth - Yo,
                u = (0, ir.q)(a, [Yo, Math.max(Yo, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - Yo,
                u = (0, ir.q)(a, [Yo, Math.max(Yo, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * Yo,
              c = y.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              b = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = v + b + c + parseInt(u.paddingBottom, 10) + g,
              x = Math.min(5 * h.offsetHeight, w),
              _ = window.getComputedStyle(y),
              j = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              O = e.top + e.height / 2 - Yo,
              R = d - O,
              P = h.offsetHeight / 2,
              S = v + b + (h.offsetTop + P),
              N = w - S;
            if (S <= O) {
              const e = s.length > 0 && h === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - y.offsetTop - y.offsetHeight,
                r = S + Math.max(R, P + (e ? C : 0) + t + g);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && h === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, v + y.offsetTop + (e ? j : 0) + P) + N;
              i.style.height = t + "px", y.scrollTop = S - O + y.offsetTop
            }
            i.style.margin = `${Yo}px 0`, i.style.minHeight = x + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, y, h, m, a.dir, n]);
        (0, Dn.N)(() => g(), [g]);
        const [w, x] = z.useState();
        (0, Dn.N)(() => {
          l && x(window.getComputedStyle(l).zIndex)
        }, [l]);
        const _ = z.useCallback(e => {
          e && !0 === v.current && (g(), b?.(), v.current = !1)
        }, [g, b]);
        return (0, N.jsx)(na, {
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
            children: (0, N.jsx)(ht.sG.div, {
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
      ta.displayName = "SelectItemAlignedPosition";
      var ra = z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Yo,
          ...a
        } = e, s = zo(r);
        return (0, N.jsx)(pt.UC, {
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
      ra.displayName = "SelectPopperPosition";
      var [na, oa] = No(Ho, {}), aa = "SelectViewport", sa = z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = $o(aa, r), s = oa(aa, r), i = (0, lt.s)(t, a.onViewportChange), d = z.useRef(0);
        return (0, N.jsxs)(N.Fragment, {
          children: [(0, N.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, N.jsx)(Ro.Slot, {
            scope: r,
            children: (0, N.jsx)(ht.sG.div, {
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
                    const n = window.innerHeight - 2 * Yo,
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
      sa.displayName = aa;
      var ia = "SelectGroup",
        [da, la] = No(ia);
      z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, ft.B)();
        return (0, N.jsx)(da, {
          scope: r,
          id: o,
          children: (0, N.jsx)(ht.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = ia;
      var ca = "SelectLabel";
      z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = la(ca, r);
        return (0, N.jsx)(ht.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = ca;
      var ua = "SelectItem",
        [fa, pa] = No(ua),
        va = z.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = To(ua, r), d = $o(ua, r), l = i.value === n, [c, u] = z.useState(a ?? ""), [f, p] = z.useState(!1), v = (0, lt.s)(t, e => d.itemRefCallback?.(e, n, o)), y = (0, ft.B)(), h = z.useRef("touch"), m = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, N.jsx)(fa, {
            scope: r,
            value: n,
            disabled: o,
            textId: y,
            isSelected: l,
            onItemTextChange: z.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, N.jsx)(Ro.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, N.jsx)(ht.sG.div, {
                role: "option",
                "aria-labelledby": y,
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
                  "mouse" !== h.current && m()
                }),
                onPointerUp: (0, dt.mK)(s.onPointerUp, () => {
                  "mouse" === h.current && m()
                }),
                onPointerDown: (0, dt.mK)(s.onPointerDown, e => {
                  h.current = e.pointerType
                }),
                onPointerMove: (0, dt.mK)(s.onPointerMove, e => {
                  h.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === h.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, dt.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, dt.mK)(s.onKeyDown, e => {
                  "" !== d.searchRef?.current && " " === e.key || (Co.includes(e.key) && m(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      va.displayName = ua;
      var ya = "SelectItemText",
        ha = z.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = To(ya, r), i = $o(ya, r), d = pa(ya, r), l = Eo(ya, r), [c, u] = z.useState(null), f = (0, lt.s)(t, e => u(e), d.onItemTextChange, e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = c?.textContent, v = z.useMemo(() => (0, N.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: p
          }, d.value), [d.disabled, d.value, p]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: h
          } = l;
          return (0, Dn.N)(() => (y(v), () => h(v)), [y, h, v]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(ht.sG.span, {
              id: d.textId,
              ...a,
              ref: f
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Oa(s.value) ? bo.createPortal(a.children, s.valueNode) : null]
          })
        });
      ha.displayName = ya;
      var ma = "SelectItemIndicator";
      z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return pa(ma, r).isSelected ? (0, N.jsx)(ht.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = ma;
      var ba = "SelectScrollUpButton";
      z.forwardRef((e, t) => {
        const r = $o(ba, e.__scopeSelect),
          n = oa(ba, e.__scopeSelect),
          [o, a] = z.useState(!1),
          s = (0, lt.s)(t, n.onScrollButtonChange);
        return (0, Dn.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(wa, {
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
      }).displayName = ba;
      var ga = "SelectScrollDownButton";
      z.forwardRef((e, t) => {
        const r = $o(ga, e.__scopeSelect),
          n = oa(ga, e.__scopeSelect),
          [o, a] = z.useState(!1),
          s = (0, lt.s)(t, n.onScrollButtonChange);
        return (0, Dn.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, N.jsx)(wa, {
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
      }).displayName = ga;
      var wa = z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = $o("SelectScrollButton", r), s = z.useRef(null), i = Po(r), d = z.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return z.useEffect(() => () => d(), [d]), (0, Dn.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, N.jsx)(ht.sG.div, {
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
      z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, N.jsx)(ht.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var xa = "SelectArrow";
      z.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = zo(r);
        return "popper" === $o(xa, r).position ? (0, N.jsx)(pt.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = xa;
      var _a = "SelectBubbleInput",
        ja = z.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = To(_a, e),
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
            p = z.useRef(null),
            v = (0, lt.s)(r, p),
            y = o ?? "",
            h = (0, lr.Z)(y),
            m = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return z.useEffect(() => {
            const e = p.current;
            if (!e) return;
            const t = window.HTMLSelectElement.prototype,
              r = Object.getOwnPropertyDescriptor(t, "value").set;
            if (h !== y && r) {
              const t = new Event("change", {
                bubbles: !0
              });
              r.call(e, y), e.dispatchEvent(t)
            }
          }, [h, y]), (0, N.jsxs)(ht.sG.select, {
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
              ...gt.Qg,
              ...t.style
            },
            ref: v,
            defaultValue: y,
            children: [Oa(o) && !m ? (0, N.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Ca(e) {
        return "function" == typeof e
      }

      function Oa(e) {
        return "" === e || void 0 === e
      }

      function Ra(e) {
        const t = (0, Nn.c)(e),
          r = z.useRef(""),
          n = z.useRef(0),
          o = z.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = z.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return z.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function Pa(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Sa(e) {
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

      function Na(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Na(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Sa(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Na(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function za(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      ja.displayName = _a;
      var Ia = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ta = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Da(Da({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ia(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return za(e.variantClassNames, e => za(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ka = Ta({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ea = Ta({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        La = Ta({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Va = Ta({
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
        Aa = Ta({
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
        Ma = Ta({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ba = (0, z.createContext)(null);

      function qa() {
        const e = (0, z.useContext)(Ba);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Fa = (0, z.forwardRef)(({
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
        }, y) => {
          const h = (0, z.useRef)(null),
            m = (0, xe.UP)(h, y),
            b = (0, z.useId)(),
            g = (0, z.useId)(),
            w = (0, z.useId)(),
            x = (0, z.useId)(),
            _ = (0, z.useId)(),
            j = (0, z.useId)(),
            C = (0, z.useRef)(null),
            O = (0, z.useRef)(null),
            R = (0, z.useRef)(null),
            [P = !1, S] = (0, xe.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            D = (0, F.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, N.jsx)(Ba.Provider, {
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
              setIsOpen: S,
              defaultOpen: l,
              onOpenChange: c,
              isRequired: r,
              isDisabled: n,
              isReadOnly: o,
              status: p,
              size: f
            },
            children: (0, N.jsx)(Vo, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => S(!o && !P),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, N.jsx)("div", {
                ref: m,
                ...D,
                children: e
              })
            })
          })
        }),
        Xa = (0, z.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = qa(), s = (0, F.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: ka({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, N.jsx)(Wo, {
            ...s,
            ref: o,
            children: (0, N.jsx)(sa, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Ga = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(sa, {
            ref: r,
            ...n
          })
        }),
        Za = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(po, {
            ...o,
            ref: n,
            children: [(0, N.jsx)(Ga, {
              asChild: !0,
              children: (0, N.jsx)(vo, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, N.jsx)(yo, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, N.jsx)(ho, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Ka = (0, z.forwardRef)(({
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
            labelRef: y,
            descriptionRef: h,
            hintRef: m,
            isOpen: b,
            size: g
          } = qa(), {
            isPressed: w,
            pressProps: x
          } = (0, mn.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [_, j] = (0, z.useState)(!1), [C, O] = (0, z.useState)(!1);
          (0, z.useEffect)(() => {
            j(!!y.current || !!m.current), O(!!h.current)
          }, []);
          const R = (0, F.v6)({
              id: f,
              className: Aa({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!w,
                isDisabled: !!l
              }),
              "aria-labelledby": _ ? (0, F.VW)(r, c, u) : r,
              "aria-describedby": C ? (0, F.VW)(n, v) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": b ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!w
            }, (0, F.cJ)(x, "onKeyDown"), a),
            P = o ? I.DX : Mo;
          return (0, N.jsx)(P, {
            ...R,
            ref: s,
            children: e
          })
        }),
        Ha = (0, z.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? I.DX : "span";
          return (0, N.jsx)(s, {
            ...a,
            ref: o,
            children: (0, N.jsx)(qo, {
              placeholder: e
            })
          })
        }),
        Wa = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = qa(), i = s ? nt.ChevronUp : nt.ChevronDown, d = (0, F.v6)({
            asChild: !0,
            className: Ma({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, N.jsx)(Fo, {
            ...d,
            ref: n,
            children: e || (0, N.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Ua = (0, z.forwardRef)(({
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
          } = qa(), f = i && !o, p = (0, xe.UP)(c, s), v = (0, F.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Va({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), y = t ? I.DX : "label";
          return (0, N.jsx)(I.s6, {
            enabled: n,
            children: (0, N.jsx)(y, {
              ...v,
              ref: p,
              children: r
            })
          })
        }),
        Ya = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = qa(), d = (0, xe.UP)(i, o), l = (0, F.v6)({
            className: Ea({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? I.DX : "div";
          return (0, N.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        Qa = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = qa(), d = (0, xe.UP)(s, o), l = (0, F.v6)({
            className: La({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? I.DX : "div";
          return (0, N.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        $a = (0, z.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, z.useRef)(null),
            i = (0, xe.UP)(s, a),
            d = (0, F.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, N.jsx)(va, {
            ref: i,
            ...d,
            children: e
          })
        }),
        Ja = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, N.jsx)(ha, {
            ref: n,
            asChild: !0,
            children: (0, N.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        es = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, N.jsx)(Fo, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        ts = Ko,
        rs = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = qa(), i = (0, F.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? I.DX : Rn;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ns = Pn,
        os = Sn;
      var as = r(83588),
        ss = r(56728);

      function is(e) {
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

      function ds(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ls(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ds(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = is(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ds(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function cs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var us = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ls(ls({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) us(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return cs(e.variantClassNames, e => cs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ps = fs({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vs = fs({
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
        ys = fs({
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
        hs = fs({
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
        ms = fs({
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
      const bs = (0, z.createContext)(null);

      function gs() {
        const e = (0, z.useContext)(bs);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const ws = (0, z.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          isDisabled: a = !1,
          isReadOnly: s = !1,
          ...i
        }, d) => {
          const l = (0, F.v6)({
              "data-testid": r,
              className: "foundry_okz6z20"
            }, i),
            c = n ? I.DX : "div",
            u = (0, z.useId)(),
            f = (0, z.useId)(),
            p = (0, z.useId)();
          return (0, N.jsx)(bs.Provider, {
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
        xs = (0, z.forwardRef)(({
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
          const p = (0, z.useRef)(null),
            v = (0, xe.UP)(p, f),
            {
              size: y,
              appearance: h,
              inputId: m,
              labelId: b,
              descriptionId: g,
              isDisabled: w,
              isReadOnly: x
            } = gs(),
            _ = (0, ss.H)({
              isDisabled: w,
              isReadOnly: x,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: j
            } = (0, as.K)({
              id: a || m,
              "aria-labelledby": (0, F.VW)(n, b),
              "aria-describedby": (0, F.VW)(o, g),
              name: l,
              value: c,
              isDisabled: w,
              isReadOnly: x
            }, _, p),
            C = (0, F.v6)({
              className: ms({
                appearance: h
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
                ref: v
              })
            }), (0, N.jsx)("div", {
              className: hs({
                size: y
              }),
              "aria-hidden": "true",
              children: (0, N.jsx)("div", {
                className: vs({
                  size: y,
                  isSelected: _.isSelected
                })
              })
            })]
          })
        }),
        _s = (0, z.forwardRef)(({
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
          } = gs(), c = (0, F.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: ys({
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
        js = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = gs(), i = n.id || s, d = (0, F.v6)({
            className: ps({
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
      var Cs = r(26688);
      const Os = ({
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
        Rs = ({
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
        Ps = ({
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
        Ss = ({
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
        Ns = ({
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
        Ds = ({
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

      function zs(e) {
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

      function Is(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ts(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Is(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = zs(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Is(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ks(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Es = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ls = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ts(Ts({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Es(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ks(e.variantClassNames, e => ks(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Vs = Ls({
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
        As = Ls({
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
        Ms = Ls({
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
        Bs = Ls({
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
        qs = Ls({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fs = Ls({
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
      const Xs = (0, z.createContext)(null);

      function Gs() {
        const e = (0, z.useContext)(Xs);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Zs = (0, z.forwardRef)(({
          size: e = "MD",
          appearance: t = "primary",
          testId: r,
          asChild: n,
          children: o,
          ...a
        }, s) => {
          const i = (0, F.v6)({
              "data-testid": r,
              className: "foundry_11gbdty0"
            }, (0, F.cJ)(a, "isDisabled", "isRequired", "isReadOnly", "isInvalid")),
            d = n ? I.DX : "div",
            l = (0, z.useId)(),
            c = (0, z.useId)(),
            u = (0, z.useId)();
          return (0, N.jsx)(Xs.Provider, {
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
        Ks = (0, z.forwardRef)(({
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
            appearance: y,
            isIndeterminate: h,
            isRequired: m,
            descriptionId: b,
            labelId: g,
            inputId: w,
            ...x
          } = Gs(), _ = (0, z.useRef)(null), j = f.id || w, {
            isPressed: C,
            pressProps: O
          } = (0, mn.d)({
            ref: _
          }), {
            setSelected: R,
            toggle: P,
            ...S
          } = (0, ss.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: T,
            isSelected: k,
            isDisabled: E,
            isReadOnly: L
          } = (0, Cs.v)({
            "aria-label": "",
            id: j,
            name: o,
            ...x
          }, {
            ...S,
            toggle: P,
            setSelected: x.isReadOnly ? () => !1 : R
          }, _), V = (0, F.v6)({
            className: As({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || E || L || P()
            }
          }, O, f), A = (0, F.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, F.VW)(c, g),
            "aria-describedby": (0, F.VW)(d, b),
            "aria-errormessage": (0, F.VW)(l, x.isInvalid ? b : void 0),
            "aria-required": m,
            required: m
          }, T), M = h ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, N.jsxs)("div", {
            ...V,
            children: [(0, N.jsx)(I.s6, {
              children: (0, N.jsx)("input", {
                ...A,
                ref: p
              })
            }), (0, N.jsx)("div", {
              className: (0, D.clsx)(Vs({
                size: v,
                appearance: y
              }), u),
              "aria-hidden": "true",
              "data-state": h ? "mixed" : k ? "checked" : "unchecked",
              "data-disabled": E || L,
              "data-testid": e,
              "data-pressed": C,
              children: (0, N.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (k || h) && (0, N.jsx)(M, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Hs = (0, z.forwardRef)(({
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
          } = Gs(), u = a.id || d, f = c && !o, p = (0, F.v6)({
            className: Fs({
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
        Ws = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Gs(), i = n.id || s, d = (0, F.v6)({
            className: Ms({
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
        Us = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Gs(), s = n.id || a, i = (0, F.v6)({
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
        Ys = (0, z.createContext)(null);

      function Qs() {
        const e = (0, z.useContext)(Ys);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const $s = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, z.useState)(null), [l, c] = (0, z.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, F.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? I.DX : "fieldset";
          return (0, N.jsx)(Ys.Provider, {
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
        Js = (0, z.forwardRef)(({
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
          } = Qs(), l = d && !a, c = (0, F.v6)({
            "data-testid": r,
            className: qs({
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
        ei = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = Qs(), s = (0, z.useId)(), i = n.id || s;
          (0, z.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, F.v6)({
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
        ti = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = Qs(), s = (0, F.v6)({
            "data-testid": r,
            className: Bs({
              size: a
            })
          }, n), i = t ? I.DX : "div";
          return (0, N.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        ri = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = Qs(), s = (0, z.useId)(), i = n.id || s;
          (0, z.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, F.v6)({
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

      function ni(e) {
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

      function oi(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ai(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? oi(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ni(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oi(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function si(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ii = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        di = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ai(ai({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ii(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return si(e.variantClassNames, e => si(e, e => e.split(" ")[0]))
            }
          }, t
        },
        li = di({
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
        ci = di({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ui = di({
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
        fi = di({
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
      const pi = (0, z.createContext)(null);

      function vi() {
        const e = (0, z.useContext)(pi);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const yi = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const l = (0, F.v6)({
              "data-testid": r,
              className: "foundry_vq8c3j0"
            }, i),
            c = e ? I.DX : "div",
            u = (0, z.useId)(),
            f = (0, z.useId)(),
            p = (0, z.useId)(),
            v = (0, z.useId)();
          return (0, N.jsx)(pi.Provider, {
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
        hi = (0, z.forwardRef)(({
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
          } = vi(), u = (0, F.v6)({
            className: ui({
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
        mi = (0, z.forwardRef)(({
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
            isDisabled: y,
            isRequired: h,
            isReadOnly: m,
            status: b
          } = vi(), g = (0, z.useRef)(null), w = (0, xe.UP)(g, c), x = (0, F.v6)({
            className: fi({
              isInvalid: "invalid" === b,
              isDisabled: y,
              isReadOnly: m,
              isSuccess: "success" === b
            }),
            name: a,
            id: l.id || p,
            rows: n,
            defaultValue: o,
            disabled: y,
            required: h,
            readOnly: m,
            placeholder: s,
            "aria-labelledby": (0, F.VW)(l.id, f, v, i),
            "aria-describedby": (0, F.VW)(u, d),
            "data-testid": r,
            ..."invalid" === b && {
              "aria-invalid": !0,
              "aria-errormessage": u
            },
            ..."success" === b && {
              "data-success": !0
            },
            ...y && {
              "aria-disabled": !0
            },
            ...h && {
              "aria-required": !0
            }
          }, l), _ = e ? I.DX : "textarea";
          return (0, N.jsx)(_, {
            ref: w,
            ...x,
            children: t
          })
        }),
        bi = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = vi(), i = (0, F.v6)({
            className: li({
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
        gi = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = vi(), i = (0, F.v6)({
            className: ci({
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
        wi = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = vi(), i = (0, F.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? I.DX : Rn;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        xi = Pn,
        _i = Sn;
      var ji = r(707),
        Ci = r(5277);

      function Oi(e) {
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

      function Ri(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Pi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ri(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Oi(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ri(Object(r)).forEach(function(t) {
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
      var Ni = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Di = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Pi(Pi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ni(l, n, e.defaultVariants) && (r += " " + c);
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
        zi = Di({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ii = Di({
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
      const Ti = (0, z.createContext)(null);

      function ki() {
        const e = (0, z.useContext)(Ti);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Ei = (0, z.forwardRef)(({
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
          const f = (0, z.useRef)(null),
            p = (0, xe.UP)(f, u),
            v = (0, z.useId)(),
            y = (0, z.useId)(),
            h = (0, z.useId)(),
            m = (0, ji.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Ci.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, F.VW)(v, s),
              "aria-describedby": (0, F.VW)(y, h, i),
              "aria-errormessage": (0, F.VW)(h, d)
            }, m),
            g = (0, F.v6)({
              className: "foundry_njguqn0"
            }, b, (0, F.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            w = a ? I.DX : "div";
          return (0, N.jsx)(Ti.Provider, {
            value: {
              state: m,
              size: e,
              appearance: t,
              orientation: r,
              descriptionId: y,
              labelId: v,
              errorId: h,
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
        Li = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = ki(), i = (0, F.v6)({
            "data-testid": e,
            className: Ii({
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
        Vi = (0, z.forwardRef)(({
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
          } = ki(), l = i && !o, c = (0, F.v6)({
            id: a.id || d,
            "data-testid": e,
            className: zi({
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
        Ai = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = ki(), s = (0, F.v6)({
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
        Mi = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = ki(), i = (0, F.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? I.DX : Rn;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Bi = Pn,
        qi = Sn;
      var Fi = r(80146),
        Xi = Di({
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
        Gi = Di({
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
        Zi = Di({
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
        Ki = Di({
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
      const Hi = ({
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
        Wi = ({
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
        Ui = ({
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
        Yi = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
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
        Qi = (0, z.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, z.useRef)(null),
            a = (0, xe.UP)(o, n),
            s = (0, z.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = ki(),
            {
              isPressed: p,
              pressProps: v
            } = (0, mn.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: y
            } = (0, Fi.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            h = y.checked,
            m = y.disabled || i?.isReadOnly,
            b = (0, F.v6)(y, {
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
            className: Ki({
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
              className: Zi({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": h ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...v,
              children: (0, N.jsx)("span", {
                className: "foundry_1pfduet9",
                children: h && (0, N.jsx)(g, {})
              })
            })]
          })
        }),
        $i = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = ki(), d = (0, z.useId)(), l = (0, F.v6)({
            id: d,
            "data-testid": e,
            className: Gi({
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
        Ji = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = ki(), s = (0, F.v6)({
            "data-testid": e,
            className: Xi({
              isDisabled: a
            })
          }, n), i = t ? I.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var ed = r(58900);

      function td(e) {
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

      function rd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function nd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = td(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function od(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ad = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = nd(nd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ad(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return od(e.variantClassNames, e => od(e, e => e.split(" ")[0]))
            }
          }, t
        },
        id = sd({
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
        dd = sd({
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
        ld = sd({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cd = sd({
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
        ud = sd({
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
        fd = sd({
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
      const pd = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        vd = (0, z.createContext)(null);

      function yd() {
        const e = (0, z.useContext)(vd);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const hd = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, z.useState)("text"), u = `${(0,z.useId)()}-label`, f = `${(0,z.useId)()}-input`, p = `${(0,z.useId)()}-description`, v = (0, z.useRef)(null), y = (0, z.useRef)(pd), h = (0, F.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), m = e ? I.DX : "div";
          return (0, N.jsx)(vd.Provider, {
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
              focusState: y,
              ...i
            },
            children: (0, N.jsx)(m, {
              ref: d,
              ...h,
              children: t
            })
          })
        }),
        md = (0, z.forwardRef)(({
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
          } = yd(), u = d && !o, f = (0, F.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: fd({
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
        bd = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = yd(), s = (0, F.v6)({
            "data-testid": e,
            className: ld({
              isDisabled: a
            })
          }, n), i = t ? I.DX : "span";
          return (0, N.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        gd = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = yd(), d = (0, F.v6)({
            "data-testid": e,
            className: (0, D.clsx)(id({
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
        wd = (0, z.forwardRef)(({
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
            status: y,
            labelId: h,
            inputId: m,
            descriptionId: b,
            setType: g,
            type: w,
            inputRef: x,
            focusState: _
          } = yd();
          (0, z.useEffect)(() => g(l), []);
          const j = "invalid" === y,
            C = (0, F.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: m,
              type: w,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, F.VW)(h, i),
              "aria-describedby": (0, F.VW)(b, d),
              "data-testid": e,
              className: (0, D.clsx)(ud({
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
              ..."success" === y && {
                "data-success": !0
              },
              ...f && {
                "aria-disabled": !0
              },
              ...v && {
                "aria-required": !0
              }
            }, c),
            O = (0, ed.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            R = (0, xe.UP)(r && n ? O : null, x, u),
            P = t ? I.DX : "input";
          return (0, N.jsx)(P, {
            ref: R,
            ...C
          })
        }),
        xd = (0, z.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = yd(), i = (0, F.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, D.clsx)(cd({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? I.DX : nt[e];
          return (0, N.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        _d = (0, z.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = yd(), n = (0, F.v6)({
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
        jd = (0, z.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = yd(), d = "password" === o, l = d ? e : t;
          (0, z.useEffect)(() => {
            i.current && (i.current.clickTriggered = !1)
          }, [i]);
          const c = (0, F.v6)({
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
          return (0, N.jsxs)(rr, {
            children: [(0, N.jsx)(nr, {
              children: (0, N.jsx)(_d, {
                ref: n,
                ...c
              })
            }), (0, N.jsxs)(or, {
              side: "bottom",
              align: "end",
              children: [l, (0, N.jsx)(ar, {})]
            })]
          })
        }),
        Cd = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = yd(), i = (0, F.v6)({
            className: dd({
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
        Od = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = yd(), i = (0, F.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? I.DX : Rn;
          return (0, N.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Rd = Pn,
        Pd = Sn;
      var Sd = r(68196);

      function Nd(e) {
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

      function Dd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Id(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Td = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zd(zd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Td(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Id(e.variantClassNames, e => Id(e, e => e.split(" ")[0]))
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
      const Ed = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Ld = (0, z.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.useRef)(null),
            s = (0, xe.UP)(a, o),
            {
              buttonProps: i
            } = (0, xe.sL)(n, a),
            d = (0, F.v6)({
              "data-testid": r,
              className: kd({
                size: t
              })
            }, i);
          return (0, N.jsx)("button", {
            ref: s,
            ...d,
            children: (0, N.jsx)(nt.X, {
              label: e,
              size: Ed[t]
            })
          })
        });

      function Vd(e) {
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

      function Ad(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Md(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ad(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vd(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Md(Md({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bd(e.variantClassNames, e => Bd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xd = Fd({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gd = Fd({
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
        Zd = Fd({
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
      const Kd = (0, z.createContext)(null);

      function Hd() {
        const e = (0, z.useContext)(Kd);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const Wd = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? I.DX : "div",
            i = (0, F.v6)({
              className: Zd({
                status: r,
                background: n
              })
            }, o);
          return (0, N.jsx)(Kd.Provider, {
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
        Ud = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Yd = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Qd = {
          danger: nt.CircleX,
          information: nt.Info,
          success: nt.CircleCheck,
          warning: nt.TriangleAlert
        },
        $d = (0, z.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Hd(), a = e ? I.DX : Qd[o], s = (0, F.v6)({
            className: Gd({
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
        Jd = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        el = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        tl = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.useRef)(null),
            s = (0, xe.UP)(a, o),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Sd.i)(n, a),
            c = (0, F.v6)({
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
        rl = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? I.DX : "div",
            s = (0, F.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        nl = (0, z.forwardRef)(({
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
        ol = (0, z.forwardRef)((e, t) => {
          const {
            background: r
          } = Hd(), n = "none" !== r, o = (0, F.v6)({
            className: Xd({
              hasBackground: n
            })
          }, e);
          return (0, N.jsx)(Ld, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var al = r(64634),
        sl = r(7697),
        il = r(17497);

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
            var n, o, a;
            n = e, o = t, a = r[t], (o = dl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
        pl = "foundry_qmpv6yv",
        vl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = cl(cl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
      const yl = (0, z.createContext)(null);

      function hl() {
        const e = (0, z.useContext)(yl);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const ml = (0, z.forwardRef)(({
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
                [n, o] = (0, z.useState)([]),
                a = n.length,
                [s, i] = (0, z.useState)(0),
                [d, l] = (0, al.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, sl.A)(), (0, il.A)()]),
                c = (0, z.useRef)(0),
                u = (0, z.useRef)(!1),
                f = n[s],
                p = (0, z.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                v = (0, z.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                y = (0, z.useCallback)((e, t) => {
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
              return (0, z.useEffect)(() => {
                l && (v(l), y(l), l.on("reInit", v).on("reInit", y).on("scroll", y).on("slideFocus", y))
              }, [l, y]), (0, z.useEffect)(() => {
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
          (0, z.useEffect)(() => {
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
            y = (0, F.v6)({
              className: vl(c)
            }, v, i),
            h = e ? I.DX : "div";
          return (0, N.jsx)(yl.Provider, {
            value: l,
            children: (0, N.jsx)(h, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...y,
              children: t
            })
          })
        }),
        bl = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        gl = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = hl();
          if (!e && !n || !n?.status) return null;
          const o = e || bl[n.status],
            a = nt[o],
            s = (0, F.v6)({
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
        wl = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, F.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        xl = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? I.DX : "div",
            d = (0, F.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, N.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        _l = (0, z.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = hl(), i = (0, F.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, xe.UP)(a, n), l = z.Children.map(t, e => {
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
        jl = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, z.useRef)(null),
            s = (0, xe.UP)(a, o),
            i = e ? I.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Sd.i)(n, a),
            c = (0, F.v6)({
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
        Cl = (0, z.forwardRef)((e, t) => {
          const r = (0, F.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, N.jsx)(Ld, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Ol = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? I.DX : "div",
            s = (0, F.v6)({
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
        Rl = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = hl(), a = (0, F.v6)({
            className: pl
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
        Pl = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = hl(), a = (0, F.v6)({
            className: pl
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
        Sl = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = hl(), a = (0, F.v6)({
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

      function Dl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Il(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Tl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        kl = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zl(zl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Tl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Il(e.variantClassNames, e => Il(e, e => e.split(" ")[0]))
            }
          }, t
        },
        El = kl({
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
        Ll = kl({
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
        Vl = kl({
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
      const Al = (0, z.createContext)(null);

      function Ml() {
        const e = (0, z.useContext)(Al);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Bl = (0, z.forwardRef)(({
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
            u = (0, F.v6)({
              className: Ll(c)
            }, d),
            f = e ? I.DX : "div";
          return (0, N.jsx)(Al.Provider, {
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
        ql = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = Ml(), s = e ? I.DX : "div", i = (0, F.v6)({
            className: Vl({
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
        Fl = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, F.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        Xl = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = Ml(), a = (0, F.v6)({
            className: El({
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
      var Gl = "ToastProvider",
        [Zl, Kl, Hl] = (0, ur.N)("Toast"),
        [Wl, Ul] = (0, ct.A)("Toast", [Hl]),
        [Yl, Ql] = Wl(Gl),
        $l = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = z.useState(null), [c, u] = z.useState(0), f = z.useRef(!1), p = z.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Gl}\`. Expected non-empty \`string\`.`), (0, N.jsx)(Zl.Provider, {
            scope: t,
            children: (0, N.jsx)(Yl, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: z.useCallback(() => u(e => e + 1), []),
              onToastRemove: z.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: s,
              children: i
            })
          })
        };
      $l.displayName = Gl;
      var Jl = "ToastViewport",
        ec = ["F8"],
        tc = "toast.viewportPause",
        rc = "toast.viewportResume",
        nc = z.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = ec,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = Ql(Jl, r), i = Kl(r), d = z.useRef(null), l = z.useRef(null), c = z.useRef(null), u = z.useRef(null), f = (0, lt.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          z.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), z.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (v && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(tc);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(rc);
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
          const y = z.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...xc(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return z.useEffect(() => {
            const e = u.current;
            if (e) {
              const t = t => {
                const r = t.altKey || t.ctrlKey || t.metaKey;
                if ("Tab" === t.key && !r) {
                  const r = document.activeElement,
                    n = t.shiftKey;
                  if (t.target === e && n) return void l.current?.focus();
                  const o = y({
                      tabbingDirection: n ? "backwards" : "forwards"
                    }),
                    a = o.findIndex(e => e === r);
                  _c(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, y]), (0, N.jsxs)(ut.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, N.jsx)(ac, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                _c(y({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, N.jsx)(Zl.Slot, {
              scope: r,
              children: (0, N.jsx)(ht.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, N.jsx)(ac, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                _c(y({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      nc.displayName = Jl;
      var oc = "ToastFocusProxy",
        ac = z.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = Ql(oc, r);
          return (0, N.jsx)(gt.s6, {
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
      ac.displayName = oc;
      var sc = "Toast",
        ic = z.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, bt.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: sc
          });
          return (0, N.jsx)(yt.C, {
            present: r || i,
            children: (0, N.jsx)(cc, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Nn.c)(e.onPause),
              onResume: (0, Nn.c)(e.onResume),
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
      ic.displayName = sc;
      var [dc, lc] = Wl(sc, {
        onClose() {}
      }), cc = z.forwardRef((e, t) => {
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
        } = e, y = Ql(sc, r), [h, m] = z.useState(null), b = (0, lt.s)(t, e => m(e)), g = z.useRef(null), w = z.useRef(null), x = o || y.duration, _ = z.useRef(0), j = z.useRef(x), C = z.useRef(0), {
          onToastAdd: O,
          onToastRemove: R
        } = y, P = (0, Nn.c)(() => {
          const e = h?.contains(document.activeElement);
          e && y.viewport?.focus(), s()
        }), S = z.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(C.current), _.current = (new Date).getTime(), C.current = window.setTimeout(P, e))
        }, [P]);
        z.useEffect(() => {
          const e = y.viewport;
          if (e) {
            const t = () => {
                S(j.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - _.current;
                j.current = j.current - e, window.clearTimeout(C.current), d?.()
              };
            return e.addEventListener(tc, r), e.addEventListener(rc, t), () => {
              e.removeEventListener(tc, r), e.removeEventListener(rc, t)
            }
          }
        }, [y.viewport, x, d, l, S]), z.useEffect(() => {
          a && !y.isClosePausedRef.current && S(x)
        }, [a, x, y.isClosePausedRef, S]), z.useEffect(() => (O(), () => R()), [O, R]);
        const D = z.useMemo(() => h ? bc(h) : null, [h]);
        return y.viewport ? (0, N.jsxs)(N.Fragment, {
          children: [D && (0, N.jsx)(uc, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: D
          }), (0, N.jsx)(dc, {
            scope: r,
            onClose: P,
            children: bo.createPortal((0, N.jsx)(Zl.ItemSlot, {
              scope: r,
              children: (0, N.jsx)(ut.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, dt.mK)(i, () => {
                  y.isFocusedToastEscapeKeyDownRef.current || P(), y.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, N.jsx)(ht.sG.li, {
                  tabIndex: 0,
                  "data-state": a ? "open" : "closed",
                  "data-swipe-direction": y.swipeDirection,
                  ...v,
                  ref: b,
                  style: {
                    userSelect: "none",
                    touchAction: "none",
                    ...e.style
                  },
                  onKeyDown: (0, dt.mK)(e.onKeyDown, e => {
                    "Escape" === e.key && (i?.(e.nativeEvent), e.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, P()))
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
                      o = ["left", "right"].includes(y.swipeDirection),
                      a = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
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
                    n ? (w.current = l, gc("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : wc(l, y.swipeDirection, d) ? (w.current = l, gc("toast.swipeStart", c, f, {
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
                      wc(t, y.swipeDirection, y.swipeThreshold) ? gc("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : gc("toast.swipeCancel", f, n, {
                        discrete: !0
                      }), r.addEventListener("click", e => e.preventDefault(), {
                        once: !0
                      })
                    }
                  })
                })
              })
            }), y.viewport)
          })]
        }) : null
      }), uc = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = Ql(sc, t), [a, s] = z.useState(!1), [i, d] = z.useState(!1);
        return function(e = () => {}) {
          const t = (0, Nn.c)(e);
          (0, Dn.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), z.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, N.jsx)(vt.Z, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, N.jsx)(gt.s6, {
            ...n,
            children: a && (0, N.jsxs)(N.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      z.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(ht.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var fc = z.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, N.jsx)(ht.sG.div, {
          ...n,
          ref: t
        })
      });
      fc.displayName = "ToastDescription";
      var pc = "ToastAction",
        vc = z.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, N.jsx)(mc, {
            altText: r,
            asChild: !0,
            children: (0, N.jsx)(hc, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${pc}\`. Expected non-empty \`string\`.`), null)
        });
      vc.displayName = pc;
      var yc = "ToastClose",
        hc = z.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = lc(yc, r);
          return (0, N.jsx)(mc, {
            asChild: !0,
            children: (0, N.jsx)(ht.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, dt.mK)(e.onClick, o.onClose)
            })
          })
        });
      hc.displayName = yc;
      var mc = z.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, N.jsx)(ht.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function bc(e) {
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
              } else t.push(...bc(e))
          }
        }), t
      }

      function gc(e, t, r, {
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
        }), n ? (0, ht.hO)(o, a) : o.dispatchEvent(a)
      }
      var wc = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function xc(e) {
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

      function _c(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var jc = $l,
        Cc = nc,
        Oc = ic,
        Rc = fc,
        Pc = vc,
        Sc = hc;

      function Nc(e) {
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

      function Dc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Nc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dc(Object(r)).forEach(function(t) {
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
        kc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zc(zc({}, e.defaultVariants), t);
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
        },
        Ec = kc({
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
        Lc = kc({
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
        Vc = kc({
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
      const Ac = ({
          testId: e,
          ...t
        }) => (0, N.jsx)(jc, {
          "data-testid": e,
          ...t
        }),
        Mc = (0, z.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, F.v6)({
            className: Vc({
              position: r
            })
          }, n);
          return (0, N.jsx)(Cc, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        Bc = (0, z.createContext)(null);

      function qc() {
        const e = (0, z.useContext)(Bc);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Fc = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? I.DX : Oc,
            i = (0, F.v6)({
              className: Lc({
                appearance: n
              })
            }, o);
          return (0, N.jsx)(Bc.Provider, {
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
        Xc = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? I.DX : Rc,
            s = (0, F.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Gc = {
          danger: nt.CircleX,
          information: nt.Info,
          success: nt.CircleCheck,
          warning: nt.TriangleAlert,
          avocado: nt.CircleCheck
        },
        Zc = (0, z.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = qc(), o = e ? I.DX : Gc[n], a = (0, F.v6)({
            className: Ec({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, N.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        Kc = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, N.jsx)(Pc, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, N.jsx)(I.DX, {
              children: t
            }) : (0, N.jsx)(P.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Hc = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          label: n,
          ...o
        }, a) => {
          const s = (0, F.v6)({
            className: "foundry_dnh2nzr",
            asChild: !0
          }, o);
          return (0, N.jsx)(Sc, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, N.jsx)(I.DX, {
              children: t
            }) : (0, N.jsx)(Ld, {
              size: "SM",
              label: n
            })
          })
        });
      var Wc = r(52640);

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

      function Qc(e) {
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

      function $c(e, t) {
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
              n = Qc(Qc({}, e.defaultVariants), t);
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
              return $c(e.variantClassNames, e => $c(e, e => e.split(" ")[0]))
            }
          }, t
        },
        tu = eu({
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
        ru = eu({
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
        nu = eu({
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

      function ou() {
        const e = (0, z.useContext)(au);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const au = (0, z.createContext)(null),
        su = (0, z.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, F.v6)({
              className: nu({
                size: n
              })
            }, o),
            i = r ? I.DX : "ol";
          return (0, N.jsx)(au.Provider, {
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
        iu = (0, z.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, z.useRef)(null),
            {
              size: i
            } = ou(),
            {
              itemProps: d
            } = (0, Wc.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? I.DX : "a",
            c = (0, F.v6)({
              className: (0, D.clsx)(tu({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, N.jsx)("li", {
            className: ru({
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
        du = (0, z.forwardRef)(({
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
        lu = (0, z.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, z.useState)(r), {
            size: d
          } = ou(), l = (0, F.v6)({
            className: ru({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, N.jsx)("li", {
            ref: a,
            ...l,
            children: (0, N.jsxs)(Vo, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, N.jsx)(Mo, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, N.jsx)(Ko, {
                children: (0, N.jsx)(Wo, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, N.jsx)(sa, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        cu = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? I.DX : va,
            s = (0, F.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, N.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function uu(e) {
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

      function fu(e, t) {
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
          t % 2 ? fu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = uu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fu(Object(r)).forEach(function(t) {
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
      var yu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        hu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pu(pu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
              return vu(e.variantClassNames, e => vu(e, e => e.split(" ")[0]))
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
      const mu = (0, z.createContext)(null);

      function bu() {
        const e = (0, z.useContext)(mu);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const gu = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? I.DX : "div",
            d = (0, F.v6)({
              className: hu({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, N.jsx)(mu.Provider, {
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
        wu = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? I.DX : "div",
            a = (0, F.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, N.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        xu = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, F.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            ...o
          })
        }),
        _u = () => {
          const e = (0, xe.Ub)(F.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        ju = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Cu(e) {
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

      function Ou(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ru(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ou(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Cu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ou(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Pu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Su = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ru(Ru({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Su(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pu(e.variantClassNames, e => Pu(e, e => e.split(" ")[0]))
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
      const Du = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, N.jsx)(po, {
            ref: r,
            ...n
          })
        }),
        zu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, N.jsx)(vo, {
            ref: r,
            ...n
          })
        }),
        Iu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, N.jsx)(yo, {
            ref: r,
            ...n
          })
        }),
        Tu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, xe.rl)(),
            o = (0, F.v6)({
              "data-testid": e,
              className: Nu({
                isTouchDevice: n
              })
            }, t);
          return (0, N.jsx)(ho, {
            ref: r,
            ...o
          })
        }),
        ku = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(mo, {
            ref: r,
            ...n
          })
        });

      function Eu(e) {
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

      function Lu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Vu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Eu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Au(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Mu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Bu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vu(Vu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Mu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Au(e.variantClassNames, e => Au(e, e => e.split(" ")[0]))
            }
          }, t
        },
        qu = Bu({
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
        Fu = Bu({
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
      const Xu = (0, z.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, z.createRef)(),
          dialogSpringRef: (0, it.$9)(),
          overlaySpringRef: (0, it.$9)()
        }),
        Gu = ({
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
          return (0, N.jsx)(Xu.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, z.useId)(),
              descriptionId: (0, z.useId)(),
              triggerRef: (0, z.useRef)(null),
              dialogSpringRef: (0, it.U2)(),
              overlaySpringRef: (0, it.U2)()
            },
            children: (0, N.jsx)(Zu, {
              ...i
            })
          })
        },
        Zu = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, z.useContext)(Xu), n = (0, F.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, N.jsx)(Kr.bL, {
            ...n
          })
        },
        Ku = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, z.useContext)(Xu), a = (0, xe.UP)(o, r), s = (0, F.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, N.jsx)(Kr.l9, {
            ...s,
            ref: a
          })
        }),
        Hu = e => (0, N.jsx)(Kr.ZL, {
          forceMount: !0,
          ...e
        }),
        Wu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, z.useContext)(Xu), s = ju(), i = (0, xe.jt)(), d = (0, it.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: it.$W.stiff,
            immediate: i || a
          }), l = (0, F.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, it.CS)(Kr.hJ);
          return (0, z.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, N.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        Uu = (0, z.forwardRef)(({
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
            dialogSpringRef: y,
            overlaySpringRef: h
          } = (0, z.useContext)(Xu), m = (0, xe.rl)(), b = (0, xe.jt)(), g = (0, z.useRef)(null), w = _u(), {
            bindDrag: x
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = ju(),
              s = _u(),
              i = (0, z.useRef)();
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
                  height: y
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
                  const e = 100 * (y - l) / y;
                  r.start({
                    ...a(e),
                    immediate: !0
                  }), t.start({
                    ...s(e),
                    immediate: !0
                  })
                }
                f && (l > .5 * y || d > .5 && c > 0 ? (t.start({
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
            overlaySpringRef: h,
            dialogSpringRef: y,
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
            ref: y,
            immediate: b || d,
            onStart: (e, t, r) => {
              r ? u?.() : p?.()
            },
            onRest: (e, t, r) => {
              r ? f?.() : v?.()
            }
          });
          (0, z.useEffect)(() => {
            y.start()
          }, [s]);
          const j = (0, xe.UP)(g, a),
            C = m && !b && !n && x(),
            O = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, C || {}, o),
            R = (0, it.CS)(Kr.UC);
          return _((t, r) => r ? (0, N.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, N.jsx)(R, {
              forceMount: !0,
              ref: j,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        Yu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd8"
          }, t);
          return (0, N.jsx)(Kr.hE, {
            ref: r,
            ...n
          })
        }),
        Qu = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(Kr.VY, {
            ref: r,
            ...n
          })
        }),
        $u = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, N.jsxs)(Du, {
            ref: n,
            ...o,
            children: [(0, N.jsx)(zu, {
              className: "foundry_xov33ni",
              children: e
            }), (0, N.jsx)(Iu, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, N.jsx)(Tu, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        Ju = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        ef = (0, z.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r,
              className: qu({
                align: e
              })
            }, n),
            s = t ? I.DX : "header";
          return (0, N.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        tf = (0, z.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": e,
            className: Fu({
              appearance: t
            })
          }, r);
          return (0, N.jsx)(Kr.hE, {
            ref: n,
            ...o
          })
        }),
        rf = (0, z.forwardRef)((e, t) => {
          const r = (0, F.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, N.jsx)(S.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        nf = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, N.jsx)(I.DX, {
              ref: n,
              ...o
            }) : (0, N.jsx)(Ld, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, N.jsx)(Kr.bm, {
            asChild: !0,
            children: a
          })
        }),
        of = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        af = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? I.DX : "footer";
          return (0, N.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var sf = "Avatar",
        [df, lf] = (0, ct.A)(sf),
        cf = [0, () => {}],
        [uf, ff] = df(sf),
        pf = z.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = z.useState("idle"), [s, i] = function() {
            let e = cf; {
              e = z.useState(0);
              const [t] = e, r = z.useRef(!1);
              z.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, N.jsx)(uf, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, N.jsx)(ht.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      pf.displayName = sf;
      var vf = "AvatarImage",
        yf = z.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = ff(vf, r);
          var i;
          i = s.setImageCount, z.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, Dn.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  a = e => {
                    const t = e.currentTarget;
                    r(mf(t))
                  },
                  s = () => r("error");
                return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(mf(t)), () => {
                  t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, Nn.c)(e => {
              o?.(e)
            }),
            c = z.useRef(d);
          return (0, Dn.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, N.jsx)(ht.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      yf.displayName = vf;
      var hf = "AvatarFallback";

      function mf(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function bf(e) {
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

      function gf(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function wf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = bf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gf(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function xf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      z.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = ff(hf, r), [s, i] = z.useState(void 0 === n);
        return z.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, N.jsx)(ht.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = hf;
      var _f = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = wf(wf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) _f(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xf(e.variantClassNames, e => xf(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Cf = jf({
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
        Of = "var(--foundry_v912w22)",
        Rf = "var(--foundry_v912w23)",
        Pf = jf({
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
        Sf = jf({
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
        Nf = "var(--foundry_v912w21)",
        Df = "var(--foundry_v912w20)",
        zf = jf({
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
      const If = (0, z.createContext)(null);

      function Tf() {
        const e = (0, z.useContext)(If);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const kf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          size: n,
          status: o,
          isDisabled: a = !1,
          ...s
        }, i) => {
          const d = (0, F.v6)({
            "data-testid": r,
            "aria-disabled": a,
            className: Cf({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, N.jsx)(If.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, N.jsx)(pf, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Ef = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = Tf(), [i, d] = (0, z.useState)(!1);
          (0, z.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, F.v6)({
              className: Pf({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, N.jsx)("span", {
            className: Sf({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, N.jsx)(yf, {
              ref: o,
              ...c
            })
          })
        }),
        Lf = (0, z.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, z.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Tf(),
            d = s || "online",
            l = (0, xe.UP)(o, n),
            c = (0, F.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: zf({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [Df]: t?.online,
                [Nf]: t?.offline,
                [Of]: t?.away,
                [Rf]: t?.busy
              })
            }, r);
          return (0, N.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Vf(e) {
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

      function Af(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Mf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Af(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Af(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Bf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ff = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mf(Mf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bf(e.variantClassNames, e => Bf(e, e => e.split(" ")[0]))
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
      const Xf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
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
        Gf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
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
        Zf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, z.useRef)(null),
            i = (0, xe.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Sd.i)(o, s),
            c = (0, F.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, D.clsx)(Ff({
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
        Kf = (0, z.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(Zf, {
            ref: n,
            ...o,
            children: (0, N.jsx)(nt.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Hf = (0, z.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, N.jsx)(Zf, {
            ref: n,
            ...o,
            children: (0, N.jsx)(nt.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        Wf = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.v6)({
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
        Uf = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? I.DX : "div";
          return (0, N.jsx)(a, {
            ...o,
            children: t
          })
        },
        Yf = (0, z.createContext)(null);

      function Qf() {
        const e = (0, z.useContext)(Yf);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const $f = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, z.useId)(),
            a = (0, F.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? I.DX : "div";
          return (0, N.jsx)(Yf.Provider, {
            value: {
              labelId: o
            },
            children: (0, N.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        Jf = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = Qf(), s = (0, F.v6)({
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
        ep = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = Qf(), s = (0, F.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? I.DX : Fa;
          return (0, N.jsxs)(i, {
            ...s,
            children: [(0, N.jsxs)(Ka, {
              ref: o,
              children: [(0, N.jsx)(Ha, {
                placeholder: r
              }), (0, N.jsx)(Wa, {})]
            }), (0, N.jsx)(ts, {
              children: (0, N.jsx)(Xa, {
                children: (0, N.jsx)(Za, {
                  children: t
                })
              })
            })]
          })
        }),
        tp = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r
            }, n),
            s = e ? I.DX : $a;
          return (0, N.jsx)(s, {
            ...a,
            ref: o,
            children: (0, N.jsx)(Ja, {
              children: t
            })
          })
        }),
        rp = (0, z.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
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
      var np = "rovingFocusGroup.onEntryFocus",
        op = {
          bubbles: !1,
          cancelable: !0
        },
        ap = "RovingFocusGroup",
        [sp, ip, dp] = (0, ur.N)(ap),
        [lp, cp] = (0, ct.A)(ap, [dp]),
        [up, fp] = lp(ap),
        pp = z.forwardRef((e, t) => (0, N.jsx)(sp.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, N.jsx)(sp.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, N.jsx)(vp, {
              ...e,
              ref: t
            })
          })
        }));
      pp.displayName = ap;
      var vp = z.forwardRef((e, t) => {
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
          } = e, f = z.useRef(null), p = (0, lt.s)(t, f), v = (0, dr.jH)(a), [y, h] = (0, bt.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: ap
          }), [m, b] = z.useState(!1), g = (0, Nn.c)(l), w = ip(r), x = z.useRef(!1), [_, j] = z.useState(0);
          return z.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(np, g), () => e.removeEventListener(np, g)
          }, [g]), (0, N.jsx)(up, {
            scope: r,
            orientation: n,
            dir: v,
            loop: o,
            currentTabStopId: y,
            onItemFocus: z.useCallback(e => h(e), [h]),
            onItemShiftTab: z.useCallback(() => b(!0), []),
            onFocusableItemAdd: z.useCallback(() => j(e => e + 1), []),
            onFocusableItemRemove: z.useCallback(() => j(e => e - 1), []),
            children: (0, N.jsx)(ht.sG.div, {
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
                  const t = new CustomEvent(np, op);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = w().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === y),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    bp(n, c)
                  }
                }
                x.current = !1
              }),
              onBlur: (0, dt.mK)(e.onBlur, () => b(!1))
            })
          })
        }),
        yp = "RovingFocusGroupItem",
        hp = z.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, ft.B)(), l = a || d, c = fp(yp, r), u = c.currentTabStopId === l, f = ip(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: y
          } = c;
          return z.useEffect(() => {
            if (n) return p(), () => v()
          }, [n, p, v]), (0, N.jsx)(sp.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, N.jsx)(ht.sG.span, {
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
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : mp[n]
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
                  setTimeout(() => bp(a))
                }
                var r, n
              }),
              children: "function" == typeof s ? s({
                isCurrentTabStop: u,
                hasTabStop: null != y
              }) : s
            })
          })
        });
      hp.displayName = yp;
      var mp = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function bp(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var gp = pp,
        wp = hp,
        xp = "Toggle",
        _p = z.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, bt.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: xp
          });
          return (0, N.jsx)(ht.sG.button, {
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
      _p.displayName = xp;
      var jp = "ToggleGroup",
        [Cp, Op] = (0, ct.A)(jp, [cp]),
        Rp = cp(),
        Pp = z.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, N.jsx)(Dp, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, N.jsx)(zp, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${jp}\``)
        });
      Pp.displayName = jp;
      var [Sp, Np] = Cp(jp), Dp = z.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, bt.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: jp
        });
        return (0, N.jsx)(Sp, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: z.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: z.useCallback(() => i(""), [i]),
          children: (0, N.jsx)(kp, {
            ...a,
            ref: t
          })
        })
      }), zp = z.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, bt.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: jp
        }), d = z.useCallback(e => i((t = []) => [...t, e]), [i]), l = z.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, N.jsx)(Sp, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, N.jsx)(kp, {
            ...a,
            ref: t
          })
        })
      });
      Pp.displayName = jp;
      var [Ip, Tp] = Cp(jp), kp = z.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = Rp(r), c = (0, dr.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, N.jsx)(Ip, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, N.jsx)(gp, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, N.jsx)(ht.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, N.jsx)(ht.sG.div, {
            ...u,
            ref: t
          })
        })
      }), Ep = "ToggleGroupItem", Lp = z.forwardRef((e, t) => {
        const r = Np(Ep, e.__scopeToggleGroup),
          n = Tp(Ep, e.__scopeToggleGroup),
          o = Rp(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = z.useRef(null);
        return n.rovingFocus ? (0, N.jsx)(wp, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, N.jsx)(Vp, {
            ...i,
            ref: t
          })
        }) : (0, N.jsx)(Vp, {
          ...i,
          ref: t
        })
      });
      Lp.displayName = Ep;
      var Vp = z.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, a = Np(Ep, r), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, N.jsx)(_p, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? a.onItemActivate(n) : a.onItemDeactivate(n)
          }
        })
      });

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

      function Bp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ap(o)) in n ? Object.defineProperty(n, o, {
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

      function qp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Fp = (e, t, r) => {
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
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Fp(l, n, e.defaultVariants) && (r += " " + c);
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
        Gp = "var(--foundry_zxwkyk2)",
        Zp = "var(--foundry_zxwkyk3)",
        Kp = Xp({
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
        Hp = Xp({
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
        Wp = Xp({
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
        Up = "var(--foundry_zxwkyk1)",
        Yp = "var(--foundry_zxwkyk0)",
        Qp = Xp({
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
      const $p = (0, z.createContext)(null);

      function Jp() {
        const e = (0, z.useContext)($p);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const ev = (0, z.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, F.v6)({
            "data-testid": e,
            className: Kp({
              size: t
            }),
            type: r
          }, n);
          return (0, N.jsx)($p.Provider, {
            value: {
              size: t
            },
            children: (0, N.jsx)(Pp, {
              ref: o,
              ...a
            })
          })
        }),
        tv = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Jp(), o = (0, F.v6)({
            "data-testid": e,
            className: Hp({
              size: n
            })
          }, t);
          return (0, N.jsx)(Lp, {
            ref: r,
            ...o
          })
        }),
        rv = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = Jp(), o = nt[e];
          return (0, N.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        nv = (0, z.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
            "data-testid": e,
            className: Qp({
              status: r
            }),
            style: (0, X.DI)({
              [Yp]: t?.online,
              [Up]: t?.offline,
              [Gp]: t?.away,
              [Zp]: t?.busy
            })
          }, n);
          return (0, N.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        ov = (0, z.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = Jp(), a = (0, F.v6)({
            "data-testid": e,
            className: Wp({
              variant: t,
              size: o
            })
          }, r);
          return (0, N.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var av = r(60241);

      function sv(e) {
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

      function iv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function dv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? iv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = sv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function lv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var cv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        uv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = dv(dv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) cv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lv(e.variantClassNames, e => lv(e, e => e.split(" ")[0]))
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
      const fv = (0, z.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        pv = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, xe.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, F.v6)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, N.jsx)(fv.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, N.jsx)(av.bL, {
              ...s
            })
          })
        },
        vv = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, N.jsx)(av.l9, {
            ref: r,
            ...n
          })
        }),
        yv = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        hv = (0, z.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, z.useContext)(fv), s = (0, z.useRef)(null), i = (0, xe.UP)(s, o), {
            buttonProps: d
          } = (0, xe.sL)(n, s), l = (0, F.v6)({
            "data-testid": r,
            className: uv({
              size: t
            })
          }, d), c = a ? nt.ChevronUp : nt.ChevronDown;
          return (0, N.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, N.jsx)(c, {
              label: "",
              size: yv[t]
            })]
          })
        }),
        mv = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, N.jsx)(av.Mz, {
            ref: r,
            ...n
          })
        }),
        bv = (0, z.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, N.jsx)(av.UC, {
            ref: n,
            ...o
          })
        }),
        gv = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, N.jsx)(av.i3, {
            ref: r,
            ...n
          })
        }),
        wv = e => (0, N.jsx)(av.ZL, {
          ...e
        }),
        xv = e => (0, N.jsx)(av.bm, {
          ...e
        });

      function _v(e) {
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

      function jv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Cv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = _v(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ov(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Cv(Cv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Rv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ov(e.variantClassNames, e => Ov(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sv = "var(--foundry_rmorls2)",
        Nv = Pv({
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
        Dv = "var(--foundry_rmorls0)",
        zv = Pv({
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
        Iv = "var(--foundry_rmorls3)",
        Tv = "var(--foundry_rmorls1)",
        kv = Pv({
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
        Ev = "Progress",
        [Lv, Vv] = (0, ct.A)(Ev),
        [Av, Mv] = Lv(Ev),
        Bv = z.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = Xv,
            ...s
          } = e;
          !o && 0 !== o || Kv(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Kv(o) ? o : 100;
          null === n || Hv(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = Hv(n, i) ? n : null,
            l = Zv(d) ? a(d, i) : void 0;
          return (0, N.jsx)(Av, {
            scope: r,
            value: d,
            max: i,
            children: (0, N.jsx)(ht.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Zv(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Gv(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      Bv.displayName = Ev;
      var qv = "ProgressIndicator",
        Fv = z.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Mv(qv, r);
          return (0, N.jsx)(ht.sG.div, {
            "data-state": Gv(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function Xv(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Gv(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Zv(e) {
        return "number" == typeof e
      }

      function Kv(e) {
        return Zv(e) && !isNaN(e) && e > 0
      }

      function Hv(e, t) {
        return Zv(e) && !isNaN(e) && e <= t && e >= 0
      }
      Fv.displayName = qv;
      var Wv = Bv,
        Uv = Fv;
      const Yv = (0, z.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        Qv = (0, z.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, N.jsx)(Yv.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, N.jsx)($v, {
              ...n,
              ref: o
            })
          })
        }),
        $v = (0, z.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? I.DX : "div";
          return (0, N.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        Jv = (0, z.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, z.useContext)(Yv), i = (0, F.v6)({
            "data-testid": e,
            className: zv({
              size: s
            }),
            value: o,
            max: a,
            style: (0, X.DI)({
              [Iv]: t
            }),
            "data-track": !0
          }, r);
          return (0, N.jsx)(Wv, {
            ref: n,
            ...i
          })
        }),
        ey = (0, z.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, z.useContext)(Yv), i = s ? "-100%" : `-${100-a}%`, d = (0, F.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [Dv]: i,
              [Tv]: `${t}ms`,
              [Sv]: r
            })
          }, n);
          return (0, N.jsx)(Uv, {
            ref: o,
            ...d
          })
        }),
        ty = (0, z.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, z.useContext)(Yv), a = (0, F.v6)({
            "data-testid": t,
            className: Nv({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? I.DX : "span";
          return (0, N.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        ry = (0, z.forwardRef)(({
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
          } = (0, z.useContext)(Yv), l = (0, F.v6)({
            "data-testid": e,
            className: Nv({
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
              className: kv({
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
      var ny = r(98706);

      function oy(e) {
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

      function ay(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function sy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ay(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = oy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function iy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var dy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ly = "foundry_1vzsjid2",
        cy = "foundry_1vzsjidm",
        uy = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sy(sy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) dy(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iy(e.variantClassNames, e => iy(e, e => e.split(" ")[0]))
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
      const fy = (0, z.createContext)({
          mode: "solid",
          layer: 0
        }),
        py = (0, z.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, N.jsx)(fy.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, N.jsx)(vy, {
            ...n,
            ref: o,
            type: r
          })
        })),
        vy = (0, z.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, N.jsx)(ny.bL, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        yy = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, z.useContext)(fy), a = (0, F.v6)({
            className: uy({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, N.jsx)(ny.q7, {
            ref: r,
            ...a
          })
        }),
        hy = (0, z.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, N.jsx)(ny.Y9, {
            ref: r,
            ...n
          })
        }),
        my = (0, z.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, N.jsx)(ny.l9, {
            ref: n,
            ...o,
            children: r.asChild && (0, z.isValidElement)(e) ? (0, z.cloneElement)(e, {
              children: (0, N.jsx)("span", {
                className: ly,
                children: e.props.children
              })
            }) : (0, N.jsx)("span", {
              className: ly,
              children: e
            })
          })
        }),
        by = (0, z.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, F.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        gy = (0, z.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = nt[e],
            o = (0, F.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, N.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        wy = (0, z.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
            className: "foundry_1vzsjidl foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde",
            "data-testid": r,
            asChild: t
          }, n);
          return (0, N.jsx)(ny.UC, {
            ref: o,
            ...a,
            children: t && (0, z.isValidElement)(e) ? (0, z.cloneElement)(e, {
              children: (0, N.jsx)("div", {
                className: cy,
                children: e.props.children
              })
            }) : (0, N.jsx)("div", {
              className: cy,
              children: e
            })
          })
        })
    }
  }
]);