try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bdccf957-5ad0-4bbd-b24f-8b41a38aa0e2", e._sentryDebugIdIdentifier = "sentry-dbid-bdccf957-5ad0-4bbd-b24f-8b41a38aa0e2")
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
  [9665], {
    33926(e, t, r) {
      r.r(t), r.d(t, {
        Accordion: () => R,
        Alert: () => p,
        AlertBanner: () => v,
        Avatar: () => w,
        Badge: () => b,
        Body: () => fe,
        Breadcrumbs: () => m,
        Button: () => N.$,
        Checkbox: () => d,
        ChipGroup: () => _,
        Code: () => ve,
        Dialog: () => C,
        Display: () => he,
        Divider: () => q,
        Dropdown: () => a,
        Heading: () => me,
        IconButton: () => D.K,
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
        Switch: () => s,
        Tag: () => h,
        Text: () => xe,
        TextArea: () => l,
        TextField: () => f,
        TextSemantics: () => we,
        Toast: () => y,
        Tooltip: () => n
      });
      var n = {};
      r.r(n), r.d(n, {
        Arrow: () => ir,
        Content: () => sr,
        Portal: () => dr,
        Root: () => or,
        Trigger: () => ar,
        useTooltipContext: () => nr
      });
      var o = {};
      r.r(o), r.d(o, {
        Caption: () => fn,
        Close: () => mn,
        Content: () => sn,
        Controls: () => pn,
        CssVars: () => Cn,
        Download: () => gn,
        Image: () => un,
        Keyboard: () => hn,
        LightboxContext: () => Qr,
        OpenIcon: () => nn,
        Overlay: () => an,
        Portal: () => on,
        Reset: () => bn,
        Root: () => $r,
        RootImplContext: () => Jr,
        Thumbnail: () => rn,
        Trigger: () => tn,
        Zoom: () => yn,
        ZoomPan: () => dn
      });
      var a = {};
      r.r(a), r.d(a, {
        Content: () => Ka,
        Description: () => es,
        Hint: () => ts,
        Label: () => Ja,
        Option: () => rs,
        OptionIcon: () => os,
        OptionText: () => ns,
        Portal: () => as,
        Root: () => Ga,
        ScrollArea: () => Ua,
        StatusIcon: () => is,
        StatusRoot: () => ss,
        StatusText: () => ds,
        Trigger: () => Ya,
        TriggerIcon: () => $a,
        TriggerText: () => Qa,
        Viewport: () => Wa,
        useDropdownContext: () => Xa
      });
      var s = {};
      r.r(s), r.d(s, {
        Description: () => Ps,
        Input: () => Os,
        Label: () => Rs,
        Root: () => js,
        useSwitchContext: () => _s
      });
      var i = {};
      r.r(i), r.d(i, {
        CheckLG: () => Ds,
        CheckMD: () => Ns,
        CheckXL: () => zs,
        DashLG: () => Ts,
        DashMD: () => Is,
        DashXL: () => Ls
      });
      var d = {};
      r.r(d), r.d(d, {
        Description: () => $s,
        ErrorText: () => Js,
        Group: () => ri,
        GroupDescription: () => oi,
        GroupErrorText: () => si,
        GroupItems: () => ai,
        GroupLabel: () => ni,
        Input: () => Ys,
        Label: () => Qs,
        Root: () => Us,
        useGroupContext: () => ti
      });
      var l = {};
      r.r(l), r.d(l, {
        Description: () => xi,
        Hint: () => _i,
        Input: () => wi,
        Label: () => Ci,
        Root: () => gi,
        RootContext: () => mi,
        StatusIcon: () => Oi,
        StatusRoot: () => ji,
        StatusText: () => Ri,
        useTextAreaContext: () => bi
      });
      var c = {};
      r.r(c), r.d(c, {
        DotLG: () => $i,
        DotMD: () => Qi,
        DotXL: () => Ji
      });
      var u = {};
      r.r(u), r.d(u, {
        Description: () => Zi,
        Input: () => td,
        Label: () => Bi,
        Option: () => ed,
        OptionDescription: () => nd,
        OptionLabel: () => rd,
        Options: () => Hi,
        Root: () => Ai,
        StatusIcon: () => Fi,
        StatusRoot: () => qi,
        StatusText: () => Xi,
        useRadioGroupContext: () => Mi
      });
      var f = {};
      r.r(f), r.d(f, {
        Button: () => Rd,
        Control: () => _d,
        Description: () => Sd,
        Hint: () => xd,
        Icon: () => Od,
        Input: () => jd,
        Label: () => wd,
        PasswordButton: () => Pd,
        Root: () => Cd,
        StatusIcon: () => Dd,
        StatusRoot: () => Nd,
        StatusText: () => zd
      });
      var p = {};
      r.r(p), r.d(p, {
        Body: () => el,
        CloseButton: () => dl,
        Description: () => ol,
        ErrorText: () => il,
        Footer: () => sl,
        Header: () => Jd,
        Icon: () => rl,
        Link: () => al,
        Root: () => $d,
        RootContext: () => Yd,
        Title: () => nl,
        iconStatusMap: () => tl,
        useAlertContext: () => Qd
      });
      var v = {};
      r.r(v), r.d(v, {
        Alert: () => Ol,
        CloseButton: () => Sl,
        Description: () => jl,
        Icon: () => _l,
        Link: () => Pl,
        PaginationCounter: () => Il,
        PaginationNav: () => Nl,
        PaginationNextButton: () => Dl,
        PaginationPrevButton: () => zl,
        PaginationViewport: () => Rl,
        Root: () => wl,
        RootContext: () => gl,
        iconStatusMap: () => xl,
        useAlertBannerContext: () => Cl
      });
      var h = {};
      r.r(h), r.d(h, {
        CloseButton: () => Kl,
        Icon: () => Gl,
        Label: () => Xl,
        Root: () => Fl,
        RootContext: () => Zl,
        useTagContext: () => ql
      });
      var y = {};
      r.r(y), r.d(y, {
        Action: () => Yc,
        CloseButton: () => Qc,
        Description: () => Kc,
        Icon: () => Uc,
        Provider: () => Zc,
        Root: () => Gc,
        RootContext: () => Fc,
        Viewport: () => qc,
        iconAppearanceMap: () => Wc,
        useToastContext: () => Xc
      });
      var m = {};
      r.r(m), r.d(m, {
        Icon: () => fu,
        Item: () => uu,
        OverflowMenu: () => pu,
        OverflowMenuItem: () => vu,
        Root: () => cu,
        RootContext: () => lu,
        useBreadcrumbsContext: () => du
      });
      var b = {};
      r.r(b), r.d(b, {
        Icon: () => Ou,
        Label: () => ju,
        Root: () => _u,
        useBadgeContext: () => xu
      });
      var g = {};
      r.r(g), r.d(g, {
        Corner: () => Mu,
        Root: () => Lu,
        Scrollbar: () => Vu,
        Thumb: () => Eu,
        Viewport: () => ku
      });
      var C = {};
      r.r(C), r.d(C, {
        ActionArea: () => lf,
        CloseButton: () => df,
        Content: () => Ju,
        Description: () => tf,
        Footer: () => cf,
        Header: () => of,
        HeaderButton: () => sf,
        HeaderTitle: () => af,
        Layout: () => nf,
        Overlay: () => $u,
        Portal: () => Qu,
        Root: () => Wu,
        ScrollArea: () => rf,
        Title: () => ef,
        Trigger: () => Yu
      });
      var w = {};
      r.r(w), r.d(w, {
        Image: () => Af,
        Root: () => Mf,
        StatusIndicator: () => Hf,
        useAvatarContext: () => Ef
      });
      var x = {};
      r.r(x), r.d(x, {
        Controls: () => Jf,
        Dropdown: () => op,
        DropdownLabel: () => np,
        Ellipsis: () => $f,
        Item: () => Uf,
        Label: () => sp,
        Next: () => Qf,
        Option: () => ap,
        Pages: () => Wf,
        Prev: () => Yf,
        ResultsPerPage: () => rp,
        Root: () => Kf
      });
      var _ = {};
      r.r(_), r.d(_, {
        Icon: () => iv,
        Item: () => sv,
        Label: () => lv,
        Root: () => av,
        StatusIndicator: () => dv,
        useChipGroupContext: () => ov
      });
      var j = {};
      r.r(j), r.d(j, {
        Anchor: () => xv,
        Arrow: () => jv,
        Close: () => Rv,
        Content: () => _v,
        Portal: () => Ov,
        Root: () => bv,
        RootContext: () => mv,
        Trigger: () => gv,
        TriggerButton: () => wv
      });
      var O = {};
      r.r(O), r.d(O, {
        Indicator: () => ah,
        Label: () => sh,
        Root: () => rh,
        Track: () => oh,
        UnitLabel: () => ih
      });
      var R = {};
      r.r(R), r.d(R, {
        Content: () => Oh,
        Header: () => wh,
        Icon: () => _h,
        Item: () => Ch,
        Root: () => bh,
        Trigger: () => xh,
        TriggerIcon: () => jh
      });
      var P = {};
      r.r(P), r.d(P, {
        PC: () => Nh,
        PS4: () => Ph,
        PS5: () => Sh,
        XboxOne: () => Dh,
        XboxSeriesXS: () => zh
      });
      var S = {};
      r.r(S), r.d(S, {
        PlatformButton: () => Mh
      });
      var N = r(46891),
        D = r(64716),
        z = r(39793),
        I = r(81270),
        T = r(93082),
        L = r(805);

      function k(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function V(e, t) {
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
          t % 2 ? V(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = k(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function M(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var A, H, B = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Z = (A = {
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
          for (var [d, l] of A.compoundVariants) B(d, r, A.defaultVariants) && (t += " " + l);
          return t
        }, H.variants = () => Object.keys(A.variantClassNames), H.classNames = {
          get base() {
            return A.defaultClassName.split(" ")[0]
          },
          get variants() {
            return M(A.variantClassNames, e => M(e, e => e.split(" ")[0]))
          }
        }, H);
      const q = (0, T.forwardRef)(({
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
          c = o ? L.DX : d;
        return (0, z.jsx)(c, {
          ref: i,
          className: (0, I.clsx)(Z({
            thickness: r,
            orientation: t
          }), e),
          role: l,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      });
      var F = r(6241),
        X = r(92800),
        G = r(9759);

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
            var n, o, a;
            n = e, o = t, a = r[t], (o = K(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
      var Q = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $ = "var(--foundry_9dxgbc2)",
        J = "var(--foundry_9dxgbc3)",
        ee = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = U(U({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Q(l, n, e.defaultVariants) && (r += " " + c);
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
      const ne = (0, T.forwardRef)(({
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
            className: ee({
              size: l
            }),
            "data-testid": t,
            style: (0, X.DI)({
              [te]: n?.pulseColorBackground,
              [re]: n?.pulseColorForeground,
              [$]: n?.gradientColorBackground,
              [J]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, s),
          u = e ? L.DX : "div";
        return (0, z.jsx)(u, {
          ref: i,
          ...c,
          children: e ? (0, z.jsx)(L.xV, {
            children: r
          }) : (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, z.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      });
      var oe = r(91999);

      function ae(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function se(e, t) {
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
          t % 2 ? se(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ae(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach(function(t) {
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
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
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
      const fe = (0, T.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? L.DX : "p",
          i = (0, F.v6)({
            className: ue({
              size: n,
              appearance: r
            })
          }, o);
        return (0, z.jsx)(s, {
          ref: a,
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
      const ve = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "default",
          ...n
        }, o) => {
          const a = e ? L.DX : "p",
            s = (0, F.v6)({
              className: pe({
                appearance: r
              })
            }, n);
          return (0, z.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        }),
        he = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "h1",
            a = (0, F.v6)({
              className: "foundry_gk65s80 foundry_tdsdcd1 foundry_tdsdcd0"
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        });
      var ye = ce({
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
      const me = (0, T.forwardRef)(({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const a = e ? L.DX : `h${7===t?6:t}`,
          s = (0, F.v6)(n, {
            className: ye({
              level: t
            })
          });
        return (0, z.jsx)(a, {
          ref: o,
          "data-testid": r,
          ...s
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
      const ge = (0, T.forwardRef)(({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? L.DX : "p",
          i = (0, F.v6)({
            className: be({
              size: n,
              appearance: r
            })
          }, o);
        return (0, z.jsx)(s, {
          ref: a,
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
        xe = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const a = e ? L.DX : we[r] || "span",
            s = (0, F.v6)(n, {
              className: Ce({
                semantic: r
              })
            });
          return (0, z.jsx)(a, {
            ref: o,
            "data-testid": t,
            ...s
          })
        });
      var _e = r(15036),
        je = r(93529),
        Oe = r(99206),
        Re = r(34811);
      const Pe = async e => e.decode ? e.decode().catch(() => {}) : e.complete ? Promise.resolve() : new Promise((t, r) => {
        e.onload = () => t(), e.onerror = r
      }), Se = ([e, t]) => ({
        x: e,
        y: t
      }), Ne = (e, t) => (e.x = t.x, e.y = t.y, e), De = e => {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, ze = (e, t = 3) => Number(parseFloat(`${e}`).toFixed(t)), Ie = (e, t, r) => Math.min(Math.max(e, t), r);
      var Te = r(90004);

      function Le(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function ke(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ke(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Le(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ke(Object(r)).forEach(function(t) {
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
      var Me = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ae = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ve(Ve({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Me(l, n, e.defaultVariants) && (r += " " + c);
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
        He = Ae({
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
        Be = Ae({
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
      const Ze = {
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
      var Xe = r(92117);
      const Ge = {
        "en-US": r.e(9017).then(r.bind(r, 89017)),
        "de-DE": r.e(2662).then(r.bind(r, 22662)),
        "es-ES": r.e(4).then(r.bind(r, 80004)),
        "es-MX": r.e(9629).then(r.bind(r, 69629)),
        "fr-FR": r.e(5296).then(r.bind(r, 35296)),
        "it-IT": r.e(9022).then(r.bind(r, 39022)),
        "ja-JP": r.e(8921).then(r.bind(r, 78921)),
        "ko-KR": r.e(6383).then(r.bind(r, 6383)),
        "pl-PL": r.e(5140).then(r.bind(r, 75140)),
        "pt-BR": r.e(700).then(r.bind(r, 70700)),
        "ru-RU": r.e(6994).then(r.bind(r, 26994)),
        "zh-CN": r.e(247).then(r.bind(r, 80247)),
        "zh-TW": r.e(3619).then(r.bind(r, 13619))
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
          return r ? t : Ie(t, this.max[e], this.min[e])
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
          this.elementSize = e, this.panAreaSize = this.slide.panAreaSize, this.vFill = ze(this.panAreaSize.h / this.elementSize.h), this.steps = this.getSteps(), this.initial = this.getInitial(), this.min = this.getMin(), this.vFill >= 1 ? (this.step = 1, this.max = this.options.max / this.options.step) : (this.step = this.vFill - this.initial, this.max = this.getMax())
        }
        getInitial() {
          const e = this.slide.panAreaSize.safeArea,
            t = e.w / this.elementSize.w,
            r = e.h / this.elementSize.h;
          return ze(r < t ? r : t)
        }
        getMin() {
          return this.initial
        }
        getMax() {
          return ze(this.initial + this.step * this.steps)
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
          this.animate = !0, this.slide.updateOverlayOpacity(1), this.dragAxis = Math.abs(e) > Math.abs(t) ? "x" : "y", Ne(this.startPan, this.slide.pan)
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
          })(this.prevTap, n) < 25 && this.slide.tapHandler.doubleTap(n, o)) : (Ne(this.prevTap, {
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
      class Qe {
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
          this.animate = !0, this.startZoomLevel = this.slide.currZoomLevel, this.startZoomPoint = Se(e), this.startZoomDistance = t, this.wasOverFitZoomLevel = !1, Ne(this.startPan, this.slide.pan)
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
            a = Ne({
              x: 0,
              y: 0
            }, this.slide.pan);
          let s = Ne({
            x: 0,
            y: 0
          }, a);
          var i, d;
          e && (this.zoomPoint.x = 0, this.zoomPoint.y = 0, this.startZoomPoint.x = 0, this.startZoomPoint.y = 0, this.startZoomLevel = t, Ne(this.startPan, a)), n && (s = {
            x: this.calculatePanForZoomLevel("x", r),
            y: this.calculatePanForZoomLevel("y", r)
          }), this.slide.setZoomLevel(r, !1), s = {
            x: this.slide.bounds.correctPan("x", s.x),
            y: this.slide.bounds.correctPan("y", s.y)
          }, this.slide.setZoomLevel(t, !1), d = a, ((i = s).x !== d.x || i.y !== d.y || n || o) && (Ne(this.slide.pan, s), this.slide.setZoomLevel(r))
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
          dragOptions: a
        }) {
          super(), this.width = e, this.height = t, this.opener = new Qe({
            slide: this
          }), this.bounds = new Ke({
            slide: this
          }), this.dragHandler = new Ye({
            options: a,
            slide: this
          }), this.scrollWheel = new $e({
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
          e = ze(e), r || (e = Ie(e, this.zoomLevels.initial, this.zoomLevels.max)), this.setZoomLevel(e), this.pan.x = this.calculateZoomToPanOffset("x", t, n), this.pan.y = this.calculateZoomToPanOffset("y", t, n), De(this.pan)
        }
        toggleZoom(e) {
          const t = this.currZoomLevel,
            r = this.currZoomLevel > this.zoomLevels.initial ? this.zoomLevels.initial : this.zoomLevels.vFill;
          this.setZoomLevel(r), this.pan.x = this.calculateZoomToPanOffset("x", e, t), this.pan.y = this.calculateZoomToPanOffset("y", e, t), De(this.pan)
        }
        zoomAndPanToInitial() {
          this.setZoomLevel(this.zoomLevels.initial), Ne(this.pan, this.bounds.center)
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
      var ot = r(38203),
        at = r(36616);
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
      const dt = (0, T.forwardRef)(({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => ((0, Te.vC)(e, e => r?.(e), [r]), (0, z.jsx)(fe, {
        size: "XS",
        className: (0, I.clsx)("foundry_bc732x0", {
          [it]: t
        }),
        asChild: !0,
        children: (0, z.jsx)("kbd", {
          ref: n,
          children: e
        })
      })));
      var lt = r(71433),
        ct = r(2458),
        ut = r(64239),
        ft = r(1913),
        pt = r(64334),
        vt = r(94296),
        ht = r(83082),
        yt = r(18268),
        mt = r(7470),
        bt = r(31270),
        gt = r(17172),
        Ct = r(17038),
        wt = r(32637),
        [xt, _t] = (0, ft.A)("Tooltip", [ht.Bk]),
        jt = (0, ht.Bk)(),
        Ot = "TooltipProvider",
        Rt = 700,
        Pt = "tooltip.open",
        [St, Nt] = xt(Ot),
        Dt = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Rt,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, s = T.useRef(!0), i = T.useRef(!1), d = T.useRef(0);
          return T.useEffect(() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }, []), (0, z.jsx)(St, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: r,
            onOpen: T.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), s.current = !1)
            }, [n]),
            onClose: T.useCallback(() => {
              n <= 0 || (window.clearTimeout(d.current), d.current = window.setTimeout(() => s.current = !0, n))
            }, [n]),
            isPointerInTransitRef: i,
            onPointerInTransitChange: T.useCallback(e => {
              i.current = e
            }, []),
            disableHoverableContent: o,
            children: a
          })
        };
      Dt.displayName = Ot;
      var zt = "Tooltip",
        [It, Tt] = xt(zt),
        Lt = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: s,
            delayDuration: i
          } = e, d = Nt(zt, e.__scopeTooltip), l = jt(t), [c, u] = T.useState(null), f = (0, vt.B)(), p = T.useRef(0), v = s ?? d.disableHoverableContent, h = i ?? d.delayDuration, y = T.useRef(!1), [m, b] = (0, Ct.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Pt))) : d.onClose(), a?.(e)
            },
            caller: zt
          }), g = T.useMemo(() => m ? y.current ? "delayed-open" : "instant-open" : "closed", [m]), C = T.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, y.current = !1, b(!0)
          }, [b]), w = T.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
          }, [b]), x = T.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
              y.current = !0, b(!0), p.current = 0
            }, h)
          }, [h, b]);
          return T.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
          }, []), (0, z.jsx)(ht.bL, {
            ...l,
            children: (0, z.jsx)(It, {
              scope: t,
              contentId: f,
              open: m,
              stateAttribute: g,
              trigger: c,
              onTriggerChange: u,
              onTriggerEnter: T.useCallback(() => {
                d.isOpenDelayedRef.current ? x() : C()
              }, [d.isOpenDelayedRef, x, C]),
              onTriggerLeave: T.useCallback(() => {
                v ? w() : (window.clearTimeout(p.current), p.current = 0)
              }, [w, v]),
              onOpen: C,
              onClose: w,
              disableHoverableContent: v,
              children: r
            })
          })
        };
      Lt.displayName = zt;
      var kt = "TooltipTrigger",
        Vt = T.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Tt(kt, r), a = Nt(kt, r), s = jt(r), i = T.useRef(null), d = (0, ut.s)(t, i, o.onTriggerChange), l = T.useRef(!1), c = T.useRef(!1), u = T.useCallback(() => l.current = !1, []);
          return T.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), (0, z.jsx)(ht.Mz, {
            asChild: !0,
            ...s,
            children: (0, z.jsx)(bt.sG.button, {
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
      Vt.displayName = kt;
      var Et = "TooltipPortal",
        [Mt, At] = xt(Et, {
          forceMount: void 0
        }),
        Ht = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = Tt(Et, t);
          return (0, z.jsx)(Mt, {
            scope: t,
            forceMount: r,
            children: (0, z.jsx)(mt.C, {
              present: r || a.open,
              children: (0, z.jsx)(yt.Z, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      Ht.displayName = Et;
      var Bt = "TooltipContent",
        Zt = T.forwardRef((e, t) => {
          const r = At(Bt, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Tt(Bt, e.__scopeTooltip);
          return (0, z.jsx)(mt.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, z.jsx)(Kt, {
              side: o,
              ...a,
              ref: t
            }) : (0, z.jsx)(qt, {
              side: o,
              ...a,
              ref: t
            })
          })
        }),
        qt = T.forwardRef((e, t) => {
          const r = Tt(Bt, e.__scopeTooltip),
            n = Nt(Bt, e.__scopeTooltip),
            o = T.useRef(null),
            a = (0, ut.s)(t, o),
            [s, i] = T.useState(null),
            {
              trigger: d,
              onClose: l
            } = r,
            c = o.current,
            {
              onPointerInTransitChange: u
            } = n,
            f = T.useCallback(() => {
              i(null), u(!1)
            }, [u]),
            p = T.useCallback((e, t) => {
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
          return T.useEffect(() => () => f(), [f]), T.useEffect(() => {
            if (d && c) {
              const e = e => p(e, c),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), c.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), c.removeEventListener("pointerleave", t)
              }
            }
          }, [d, c, p, f]), T.useEffect(() => {
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
          }, [d, c, s, l, f]), (0, z.jsx)(Kt, {
            ...e,
            ref: a
          })
        }),
        [Ft, Xt] = xt(zt, {
          isInside: !1
        }),
        Gt = (0, gt.Dc)("TooltipContent"),
        Kt = T.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            ...i
          } = e, d = Tt(Bt, r), l = jt(r), {
            onClose: c
          } = d;
          return T.useEffect(() => (document.addEventListener(Pt, c), () => document.removeEventListener(Pt, c)), [c]), T.useEffect(() => {
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
          }, [d.trigger, c]), (0, z.jsx)(pt.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: c,
            children: (0, z.jsxs)(ht.UC, {
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
              children: [(0, z.jsx)(Gt, {
                children: n
              }), (0, z.jsx)(Ft, {
                scope: r,
                isInside: !0,
                children: (0, z.jsx)(wt.bL, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        });
      Zt.displayName = Bt;
      var Wt = "TooltipArrow",
        Ut = T.forwardRef((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = jt(r);
          return Xt(Wt, r).isInside ? null : (0, z.jsx)(ht.i3, {
            ...o,
            ...n,
            ref: t
          })
        });
      Ut.displayName = Wt;
      var Yt = Dt,
        Qt = Lt,
        $t = Vt,
        Jt = Ht,
        er = Zt,
        tr = Ut;
      const rr = (0, T.createContext)(null);

      function nr() {
        const e = (0, T.useContext)(rr);
        if (!e) throw Error("useTooltipContext can only be used in a <Tooltip.Root />");
        return e
      }
      const or = ({
          children: e,
          delayDuration: t = 0,
          defaultOpen: r,
          onOpenChange: n,
          ...o
        }) => {
          const [a = !1, s] = (0, _e.ic)({
            defaultProp: r,
            prop: o.isOpen,
            onChange: n
          });
          return (0, z.jsx)(Yt, {
            delayDuration: t,
            children: (0, z.jsx)(rr.Provider, {
              value: {
                isOpen: a,
                ...o
              },
              children: (0, z.jsx)(Qt, {
                open: a,
                onOpenChange: s,
                children: e
              })
            })
          })
        },
        ar = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => (0, z.jsx)($t, {
          asChild: !0,
          "data-testid": t,
          ...r,
          ref: n,
          children: e
        })),
        sr = (0, T.forwardRef)(({
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
          } = nr(), c = (0, _e.jt)(), u = (0, lt.CS)(er), f = (0, lt.pn)(l, {
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
          return f(e => (0, z.jsx)(u, {
            ...p,
            style: e,
            ref: d
          }))
        }),
        ir = (0, T.forwardRef)(({
          testId: e
        }, t) => {
          const r = (0, F.v6)({
            className: "foundry_h3lgaa1",
            "data-testid": e
          });
          return (0, z.jsx)(tr, {
            ...r,
            ref: t
          })
        }),
        dr = Jt;
      var lr = r(81471),
        cr = r(99136),
        ur = r(52184),
        fr = r(5024),
        pr = r(85920),
        vr = ["PageUp", "PageDown"],
        hr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        yr = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        mr = "Slider",
        [br, gr, Cr] = (0, pr.N)(mr),
        [wr, xr] = (0, ft.A)(mr, [Cr]),
        [_r, jr] = wr(mr),
        Or = T.forwardRef((e, t) => {
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
          } = e, y = T.useRef(new Set), m = T.useRef(0), b = T.useRef(!1), g = "horizontal" === s ? Sr : Nr, [C, w] = T.useState(null), x = (0, ut.s)(t, w), [_ = [], j] = (0, Ct.i)({
            prop: c,
            defaultProp: l,
            onChange: e => {
              const t = [...y.current];
              t[m.current]?.focus({
                preventScroll: !0,
                focusVisible: b.current
              }), b.current = !1, u(e)
            }
          }), O = T.useRef(_), R = T.useRef(_);

          function P(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const s = Kr(a),
              i = Wr(Math.round((e - n) / a) * a + n, s),
              l = (0, lr.q)(i, [n, o]);
            j((e = []) => {
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
          return T.useEffect(() => {
            const e = v ? C?.ownerDocument.getElementById(v) : C?.closest("form");
            if (e instanceof HTMLFormElement) {
              const t = () => j(R.current);
              return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
            }
          }, [C, v, j]), (0, z.jsx)(_r, {
            scope: e.__scopeSlider,
            name: r,
            disabled: i,
            min: n,
            max: o,
            valueIndexToChangeRef: m,
            thumbs: y.current,
            values: _,
            orientation: s,
            form: v,
            children: (0, z.jsx)(br.Provider, {
              scope: e.__scopeSlider,
              children: (0, z.jsx)(br.Slot, {
                scope: e.__scopeSlider,
                children: (0, z.jsx)(g, {
                  "aria-disabled": i,
                  "data-disabled": i ? "" : void 0,
                  ...h,
                  ref: x,
                  onPointerDown: (0, ct.mK)(h.onPointerDown, () => {
                    i || (O.current = _, b.current = !1)
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
                    }(_, e);
                    P(e, t)
                  },
                  onSlideMove: i ? void 0 : function(e) {
                    P(e, m.current)
                  },
                  onSlideEnd: i ? void 0 : function() {
                    const e = O.current[m.current];
                    _[m.current] !== e && f(_)
                  },
                  onHomeKeyDown: () => {
                    i || (b.current = !0, P(n, 0, {
                      commit: !0
                    }))
                  },
                  onEndKeyDown: () => {
                    i || (b.current = !0, P(o, _.length - 1, {
                      commit: !0
                    }))
                  },
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!i) {
                      b.current = !0;
                      const r = vr.includes(e.key) || e.shiftKey && hr.includes(e.key) ? 10 : 1,
                        o = m.current,
                        s = function(e, {
                          min: t,
                          step: r,
                          direction: n,
                          multiplier: o
                        }) {
                          const a = Kr(r),
                            s = (e - t) / r,
                            i = Math.round(s);
                          let d;
                          return d = Wr(i * r + t, a) === Wr(e, a) ? i + o * n : n > 0 ? Math.ceil(s) : Math.floor(s), Wr(d * r + t, a)
                        }(_[o], {
                          min: n,
                          step: a,
                          direction: t,
                          multiplier: r
                        });
                      P(s, o, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        });
      Or.displayName = mr;
      var [Rr, Pr] = wr(mr, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Sr = T.forwardRef((e, t) => {
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
        } = e, [u, f] = T.useState(null), p = (0, ut.s)(t, f), v = T.useRef(void 0), h = (0, cr.jH)(o), y = "ltr" === h, m = y && !a || !y && a;

        function b(e) {
          const t = v.current || u.getBoundingClientRect(),
            o = Gr([0, t.width], m ? [r, n] : [n, r]);
          return v.current = t, o(e - t.left)
        }
        return (0, z.jsx)(Rr, {
          scope: e.__scopeSlider,
          startEdge: m ? "left" : "right",
          endEdge: m ? "right" : "left",
          direction: m ? 1 : -1,
          size: "width",
          children: (0, z.jsx)(Dr, {
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
              const t = yr[m ? "from-left" : "from-right"].includes(e.key);
              l?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Nr = T.forwardRef((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: s,
          onSlideEnd: i,
          onStepKeyDown: d,
          ...l
        } = e, c = T.useRef(null), u = (0, ut.s)(t, c), f = T.useRef(void 0), p = !o;

        function v(e) {
          const t = f.current || c.current.getBoundingClientRect(),
            o = Gr([0, t.height], p ? [n, r] : [r, n]);
          return f.current = t, o(e - t.top)
        }
        return (0, z.jsx)(Rr, {
          scope: e.__scopeSlider,
          startEdge: p ? "bottom" : "top",
          endEdge: p ? "top" : "bottom",
          size: "height",
          direction: p ? 1 : -1,
          children: (0, z.jsx)(Dr, {
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
              const t = yr[p ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      }), Dr = T.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: i,
          onStepKeyDown: d,
          ...l
        } = e, c = jr(mr, r);
        return (0, z.jsx)(bt.sG.span, {
          ...l,
          ref: t,
          onKeyDown: (0, ct.mK)(e.onKeyDown, e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (i(e), e.preventDefault()) : vr.concat(hr).includes(e.key) && (d(e), e.preventDefault())
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
      }), zr = "SliderTrack", Ir = T.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = jr(zr, r);
        return (0, z.jsx)(bt.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      });
      Ir.displayName = zr;
      var Tr = "SliderRange",
        Lr = T.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = jr(Tr, r), a = Pr(Tr, r), s = T.useRef(null), i = (0, ut.s)(t, s), d = o.values.length, l = o.values.map(e => Xr(e, o.min, o.max)), c = d > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
          return (0, z.jsx)(bt.sG.span, {
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
      Lr.displayName = Tr;
      var kr = "SliderThumb",
        [Vr, Er] = wr(kr),
        Mr = "SliderThumbProvider";

      function Ar(e) {
        const {
          __scopeSlider: t,
          name: r,
          children: n,
          internal_do_not_use_render: o
        } = e, a = jr(Mr, t), s = gr(t), [i, d] = T.useState(null), l = T.useMemo(() => i ? s().findIndex(e => e.ref.current === i) : -1, [s, i]), c = (0, fr.X)(i), u = !i || !!a.form || !!i.closest("form"), f = a.values[l], p = r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0), v = void 0 === f ? 0 : Xr(f, a.min, a.max);
        T.useEffect(() => {
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
        return (0, z.jsx)(Vr, {
          scope: t,
          ...h,
          children: Ur(o) ? o(h) : n
        })
      }
      Ar.displayName = Mr;
      var Hr = "SliderThumbTrigger",
        Br = T.forwardRef((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = jr(Hr, r), a = Pr(Hr, r), {
            index: s,
            value: i,
            percent: d,
            size: l,
            onThumbChange: c
          } = Er(Hr, r), u = (0, ut.s)(t, c), f = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(s, o.values.length), p = l?.[a.size], v = p ? function(e, t, r) {
            const n = e / 2;
            return (n - Gr([0, 50], [0, n])(t) * r) * r
          }(p, d, a.direction) : 0;
          return (0, z.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [a.startEdge]: `calc(${d}% + ${v}px)`
            },
            children: (0, z.jsx)(br.ItemSlot, {
              scope: r,
              children: (0, z.jsx)(bt.sG.span, {
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
      Br.displayName = Hr;
      var Zr = T.forwardRef((e, t) => {
        const {
          __scopeSlider: r,
          name: n,
          ...o
        } = e;
        return (0, z.jsx)(Ar, {
          __scopeSlider: r,
          name: n,
          internal_do_not_use_render: ({
            index: e,
            isFormControl: n
          }) => (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(Br, {
              ...o,
              ref: t,
              __scopeSlider: r
            }), n ? (0, z.jsx)(Fr, {
              __scopeSlider: r
            }, e) : null]
          })
        })
      });
      Zr.displayName = kr;
      var qr = "SliderBubbleInput",
        Fr = T.forwardRef(({
          __scopeSlider: e,
          ...t
        }, r) => {
          const {
            value: n,
            name: o,
            form: a
          } = Er(qr, e), s = T.useRef(null), i = (0, ut.s)(s, r), d = (0, ur.Z)(n);
          return T.useEffect(() => {
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
          }, [d, n]), (0, z.jsx)(bt.sG.input, {
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
        return (0, lr.q)(n, [0, 100])
      }

      function Gr(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function Kr(e) {
        if (!Number.isFinite(e)) return 0;
        const t = e.toString();
        if (t.includes("e")) {
          const [e, r] = t.split("e"), n = e.split(".")[1] || "", o = Number(r);
          return Math.max(0, n.length - o)
        }
        const r = t.split(".")[1];
        return r ? r.length : 0
      }

      function Wr(e, t) {
        const r = Math.pow(10, t);
        return Math.round(e * r) / r
      }

      function Ur(e) {
        return "function" == typeof e
      }
      Fr.displayName = qr;
      var Yr = r(1158);
      const Qr = (0, T.createContext)({
          triggerRef: (0, T.createRef)(),
          triggerBorderRef: (0, T.createRef)(),
          thumbnailRef: (0, T.createRef)(),
          openIconRef: (0, T.createRef)(),
          overlayRef: (0, T.createRef)(),
          contentRef: (0, T.createRef)(),
          containerRef: (0, T.createRef)(),
          imageRef: (0, T.createRef)(),
          placeholderRef: (0, T.createRef)(),
          zoomPanRef: (0, T.createRef)(),
          captionRef: (0, T.createRef)(),
          controlsRef: (0, T.createRef)(),
          closeRef: (0, T.createRef)(),
          zoomRef: (0, T.createRef)(),
          zoomInRef: (0, T.createRef)(),
          zoomSliderRef: (0, T.createRef)(),
          zoomOutRef: (0, T.createRef)(),
          resetRef: (0, T.createRef)(),
          downloadRef: (0, T.createRef)(),
          open: !1,
          setOpen: () => {},
          slide: null,
          altText: "",
          hideTrigger: !0
        }),
        $r = ({
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
            p = (0, _e.rl)(),
            v = (0, T.useRef)(null),
            h = (0, T.useRef)(null),
            y = (0, T.useRef)(null),
            m = (0, T.useRef)(null),
            b = (0, T.useRef)(null),
            g = (0, T.useRef)(null),
            C = (0, T.useRef)(null),
            w = (0, T.useRef)(null),
            x = (0, T.useRef)(null),
            _ = (0, T.useRef)(null),
            j = (0, T.useRef)(null),
            O = (0, T.useRef)(null),
            R = (0, T.useRef)(null),
            P = (0, T.useRef)(null),
            S = (0, T.useRef)(null),
            N = (0, T.useRef)(null),
            D = (0, T.useRef)(null),
            I = (0, T.useRef)(null),
            L = (0, T.useRef)(null),
            [k = !1, V] = (0, _e.ic)({
              prop: t || n,
              onChange: r
            }),
            E = (0, T.useRef)(null);
          return E.current || (E.current = new nt({
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
          })), (0, z.jsx)(Xe.Dk, {
            messages: Ge,
            locale: f,
            children: (0, z.jsx)(Qr.Provider, {
              value: {
                triggerRef: v,
                triggerBorderRef: h,
                thumbnailRef: y,
                openIconRef: m,
                overlayRef: b,
                contentRef: g,
                containerRef: C,
                zoomPanRef: w,
                imageRef: x,
                placeholderRef: _,
                captionRef: j,
                controlsRef: O,
                closeRef: R,
                zoomRef: P,
                zoomInRef: S,
                zoomSliderRef: N,
                zoomOutRef: D,
                resetRef: I,
                downloadRef: L,
                open: k,
                setOpen: V,
                altText: e,
                hideTrigger: c,
                slide: E.current
              },
              children: (0, z.jsx)(en, {
                ...u
              })
            })
          })
        },
        Jr = (0, T.createContext)({
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
        en = ({
          ...e
        }) => {
          const {
            open: t
          } = (0, T.useContext)(Qr), {
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
              controlsRef: a,
              triggerRef: s,
              triggerBorderRef: i,
              thumbnailRef: d,
              containerRef: l,
              zoomPanRef: c,
              placeholderRef: u,
              imageRef: f
            } = (0, T.useContext)(Qr), p = (0, T.useRef)(null);
            p.current || (p.current = je.os.timeline({
              defaults: Ze
            }));
            const v = (0, T.useCallback)(e => {
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
                }, "<+=33%"), await (p.current?.play()), t.opening = !1, t.dispatch("zoom"), t.closing || await Pe(f.current), t.closing || (je.os.set([f.current], {
                  visibility: "visible",
                  ...qe
                }), je.os.set([u.current], {
                  visibility: "hidden",
                  ...qe
                }))))
              }),
              y = e(async () => {
                t.close(), p.current.getChildren().filter(e => e.data?.invalidate).forEach(e => e.invalidate()), await p.current.reverse()
              }),
              m = (0, T.useCallback)(async e => {
                e || (window.addEventListener("click", v), await y(), window.removeEventListener("click", v)), r(e)
              }, [r]),
              b = (0, T.useCallback)(() => m(!1), [m]);
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
            } = (0, Oe.L)(), {
              slide: r,
              imageRef: n,
              zoomPanRef: o,
              controlsRef: a,
              containerRef: s,
              placeholderRef: i
            } = (0, T.useContext)(Qr), d = t(async e => {
              r.zoomTo(e), je.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), l = t(async () => {
              r.zoomTo(r.currZoomLevel + r.zoomLevels.step), je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), c = t(async () => {
              r.zoomTo(r.currZoomLevel - r.zoomLevels.step), je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), u = t(async () => {
              r.zoomAndPanToInitial(), je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), f = t(async () => {
              if (r.closing) return;
              r.toggleControls();
              const e = r.getControlsOpacity(),
                t = 1 === e ? "auto" : "none";
              je.os.to([a.current], {
                opacity: e,
                [Fe]: t,
                ...qe
              })
            }), p = t(async () => {
              je.os.to([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              })
            }), v = (0, T.useCallback)(() => {
              n.current && o.current && (je.os.set([o.current], {
                ...r.getCurrentTransform(),
                ...qe
              }), je.os.set([n.current, i.current], {
                ...r.getUpdatedContentSize(),
                ...qe
              }), je.os.set([s.current], {
                width: r.panAreaSize.w,
                height: r.panAreaSize.h
              }))
            }, []);
            return (0, T.useEffect)(() => (r.addEventListener("close", e), r.addEventListener("animate", p), r.addEventListener("toggle-controls", f), r.addEventListener("resize", v), window.addEventListener("resize", r.resize.bind(r)), () => {
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
          return (0, z.jsx)(Jr.Provider, {
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
            children: (0, z.jsx)(Yr.bL, {
              ...u
            })
          })
        },
        tn = (0, T.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              triggerRef: a,
              triggerBorderRef: s,
              altText: i
            } = (0, T.useContext)(Qr),
            d = (0, _e.UP)(a, n),
            l = (0, F.v6)(r, {
              "data-testid": e,
              "aria-label": o.formatMessage(st.OpenButtonLabel, {
                description: i
              }),
              className: "foundry_1a74xwb4 foundry_8kowh41"
            });
          return (0, z.jsx)(Yr.l9, {
            ref: d,
            ...l,
            children: (0, z.jsx)("div", {
              className: "foundry_1a74xwb5",
              ref: s,
              children: (0, z.jsx)(L.xV, {
                children: t
              })
            })
          })
        }),
        rn = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            thumbnailRef: o
          } = (0, T.useContext)(Qr), a = (0, _e.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            className: "foundry_1a74xwb6"
          }), i = t ? L.DX : "img";
          return (0, z.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        nn = (0, T.forwardRef)(function({
          asChild: e,
          ...t
        }, r) {
          const {
            openIconRef: n
          } = (0, T.useContext)(Qr), o = (0, _e.UP)(n, r), a = (0, F.v6)(t, {
            "aria-hidden": !0,
            className: "foundry_1a74xwb7",
            size: "SM"
          }), s = e ? L.DX : at.Maximize2;
          return (0, z.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        on = ({
          ...e
        }) => (0, z.jsx)(Yr.ZL, {
          ...e
        }),
        an = (0, T.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const {
            overlayRef: n
          } = (0, T.useContext)(Qr), o = (0, _e.UP)(n, r), a = (0, F.v6)(t, {
            "data-testid": e,
            className: "foundry_1a74xwb8"
          });
          return (0, z.jsx)(Yr.hJ, {
            ref: o,
            ...a
          })
        }),
        sn = (0, T.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            openAnim: o
          } = (0, T.useContext)(Jr), {
            contentRef: a,
            altText: s,
            triggerRef: i
          } = (0, T.useContext)(Qr), {
            cursor: d
          } = (() => {
            const {
              slide: e
            } = (0, T.useContext)(Qr), [t, r] = (0, T.useState)(e.getCursor()), n = (0, T.useCallback)(() => {
              r(e.getCursor())
            }, []);
            return (0, T.useEffect)(() => (e.addEventListener("zoom", n), () => {
              e.removeEventListener("zoom", n)
            }), [n]), {
              cursor: t
            }
          })(), l = (0, ot.m)("dark"), c = (0, _e.UP)(a, n), u = (0, F.v6)(r, {
            "data-testid": e,
            onOpenAutoFocus: o,
            onCloseAutoFocus: e => ((e, t) => {
              e?.preventDefault(), t.current?.focus({
                preventScroll: !0
              })
            })(e, i),
            className: (0, I.clsx)("foundry_1a74xwb9", l),
            style: {
              cursor: d
            }
          });
          return (0, z.jsxs)(Yr.UC, {
            ref: c,
            ...u,
            children: [(0, z.jsx)(L.s6, {
              children: (0, z.jsx)(Yr.hE, {
                children: s
              })
            }), t]
          })
        }),
        dn = (0, T.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, n) {
          const {
            containerRef: o
          } = (0, T.useContext)(Qr);
          (() => {
            const {
              contextSafe: e
            } = (0, Oe.L)(), {
              toggleControls: t
            } = (0, T.useContext)(Jr), {
              containerRef: r,
              zoomPanRef: n,
              overlayRef: o,
              controlsRef: a,
              slide: s
            } = (0, T.useContext)(Qr), i = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.dragHandler.handleDrag(e), s.dragHandler.animate && !s.closing && (je.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...qe
              }), je.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...qe
              }), je.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...qe
              })))
            }), d = e(e => {
              e.pinching || s.zoomHandler.pinching || (s.scrollWheel.handleWheel(e), s.closing || je.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...qe
              }))
            }), l = e(e => {
              !e.pinching && !s.zoomHandler.pinching || s.dragHandler.dragging || (s.zoomHandler.handleZoom(e), s.zoomHandler.animate && !s.closing && (je.os.to([n.current], {
                ...s.getCurrentTransform(),
                ...qe
              }), je.os.to([o.current], {
                opacity: s.getOverlayOpacity(),
                ...qe
              }), je.os.to([a.current], {
                opacity: s.getControlsOpacity(),
                ...qe
              })))
            }), c = (0, T.useCallback)(() => {
              s.controlsVisible || t()
            }, [, t]);
            (0, _e.iQ)({
              ref: a,
              onFocusIn: c
            }), (0, Re.NH)({
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
          const a = (0, _e.UP)(o, n),
            s = (0, F.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwba foundry_1a74xwb2"
            });
          return (0, z.jsx)("div", {
            ref: a,
            ...s,
            children: (0, z.jsxs)(ln, {
              children: [(0, z.jsx)(cn, {}), t]
            })
          })
        }),
        ln = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            zoomPanRef: o
          } = (0, T.useContext)(Qr), a = (0, _e.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbb foundry_1a74xwb2"
          }), i = t ? L.DX : "div";
          return (0, z.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        cn = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            placeholderRef: o
          } = (0, T.useContext)(Qr), a = (0, _e.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            "aria-hidden": !0,
            role: "presentation",
            draggable: !1,
            className: "foundry_1a74xwb3 foundry_1a74xwb2"
          }), i = t ? L.DX : "img";
          return (0, z.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        un = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            imageRef: o
          } = (0, T.useContext)(Qr), a = (0, _e.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwb3",
            draggable: !1
          }), i = t ? L.DX : "img";
          return (0, z.jsx)(i, {
            ref: a,
            ...s
          })
        }),
        fn = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            captionRef: o
          } = (0, T.useContext)(Qr), a = (0, _e.UP)(o, n), s = (0, F.v6)(r, {
            "data-testid": e,
            className: "foundry_1a74xwbh foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
          }), i = t ? L.DX : "p";
          return (0, z.jsx)(Yr.VY, {
            asChild: !0,
            children: (0, z.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        pn = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          ...r
        }, n) {
          const {
            controlsRef: o
          } = (0, T.useContext)(Qr);
          (({
            enabled: e = !0
          } = {}) => {
            const {
              zoomIn: t,
              zoomOut: r,
              resetZoom: n,
              close: o
            } = (0, T.useContext)(Jr);
            (0, Te.vC)(["+", "=", "add", "plus"], t, {
              enabled: e,
              preventDefault: !0
            }), (0, Te.vC)(["minus", "subtract"], r, {
              enabled: e,
              preventDefault: !0
            }), (0, Te.vC)("r", n, {
              enabled: e,
              preventDefault: !0
            }), (0, Te.vC)("esc", o, {
              enabled: e,
              preventDefault: !0
            })
          })();
          const a = (0, _e.UP)(o, n),
            s = (0, F.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbe foundry_1a74xwb2 foundry_1a74xwb3"
            }),
            i = t ? L.DX : "div";
          return (0, z.jsx)(Te.Hb, {
            children: (0, z.jsx)(i, {
              ref: a,
              ...s
            })
          })
        }),
        vn = ({
          content: e,
          metadata: t,
          enabled: r = !0,
          children: n,
          ...o
        }) => {
          if (!r) return (0, z.jsx)(z.Fragment, {
            children: n
          });
          const a = (0, F.v6)({
            onPointerDownOutside: e => e?.preventDefault()
          }, o);
          return (0, z.jsxs)(or, {
            delayDuration: 0,
            children: [(0, z.jsx)(ar, {
              children: n
            }), (0, z.jsxs)(sr, {
              ...a,
              children: [(0, z.jsxs)("div", {
                className: "foundry_1a74xwbf",
                children: [e, t && (0, z.jsx)("div", {
                  className: "foundry_1a74xwbg",
                  children: t
                })]
              }), (0, z.jsx)(ir, {})]
            })]
          })
        },
        hn = (0, T.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, F.v6)(e, {
            isInline: !0
          });
          return (0, z.jsx)(dt, {
            ref: t,
            ...r
          })
        }),
        yn = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          children: n,
          ...o
        }, a) {
          const s = (0, Xe.tz)(),
            {
              zoomRef: i
            } = (0, T.useContext)(Qr),
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
              } = (0, T.useContext)(Qr), {
                zoomIn: t,
                zoomOut: r,
                zoomTo: n
              } = (0, T.useContext)(Jr), [o, a] = (0, T.useState)(!1), [s, i] = (0, T.useState)(!1), [d, l] = (0, T.useState)(0), [c, u] = (0, T.useState)(0), [f, p] = (0, T.useState)(0), v = (0, T.useCallback)(() => {
                a(e.currZoomLevel < e.zoomLevels.max), i(e.currZoomLevel > e.zoomLevels.min), l(Math.ceil(100 * e.currZoomLevel)), u(Math.ceil(100 * e.zoomLevels.min)), p(Math.ceil(100 * e.zoomLevels.max))
              }, []), h = (0, T.useCallback)(([e]) => {
                n(e / 100)
              }, [n]);
              return (0, T.useEffect)(() => (e.addEventListener("zoom", v), () => {
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
            y = (0, _e.UP)(i, a),
            m = (0, F.v6)(o, {
              "data-testid": e,
              className: "foundry_1a74xwbp"
            }),
            b = t ? L.DX : "div";
          return (0, z.jsxs)(b, {
            ref: y,
            ...m,
            children: [(0, z.jsx)(vn, {
              side: "left",
              enabled: r,
              content: s.formatMessage(st.ZoomInButtonLabel),
              metadata: s.formatMessage(st.ZoomInButtonTooltip, {
                shortcut: (0, z.jsx)(hn, {
                  shortcut: "+"
                })
              }),
              children: (0, z.jsx)(D.K, {
                label: s.formatMessage(st.ZoomInButtonLabel),
                size: "LG",
                icon: "Plus",
                appearance: "tertiary",
                className: Be({
                  position: "top"
                }),
                onPress: l,
                isDisabled: !d
              })
            }), (0, z.jsxs)(Or, {
              className: "foundry_1a74xwbt",
              max: v,
              min: p,
              step: 1,
              value: [f],
              orientation: "vertical",
              onValueChange: h,
              children: [(0, z.jsx)(Ir, {
                className: "foundry_1a74xwbu",
                children: (0, z.jsx)(Lr, {
                  className: "foundry_1a74xwbv"
                })
              }), (0, z.jsx)(vn, {
                side: "left",
                enabled: r,
                content: s.formatMessage(st.ZoomSliderTooltip, {
                  zoom: f.toFixed(0)
                }),
                children: (0, z.jsx)(Zr, {
                  className: "foundry_1a74xwbw",
                  children: (0, z.jsx)("span", {
                    className: "foundry_1a74xwbx"
                  })
                })
              })]
            }), (0, z.jsx)(vn, {
              side: "left",
              enabled: r,
              content: s.formatMessage(st.ZoomOutButtonLabel),
              metadata: s.formatMessage(st.ZoomOutButtonTooltip, {
                shortcut: (0, z.jsx)(hn, {
                  shortcut: "-"
                })
              }),
              children: (0, z.jsx)(D.K, {
                label: s.formatMessage(st.ZoomOutButtonLabel),
                size: "LG",
                icon: "Minus",
                appearance: "tertiary",
                className: Be({
                  position: "bottom"
                }),
                onPress: u,
                isDisabled: !c
              })
            }), (0, z.jsx)(L.xV, {
              children: n
            })]
          })
        }),
        mn = (0, T.forwardRef)(function({
          testId: e,
          asChild: t,
          showTooltip: r = !0,
          ...n
        }, o) {
          const a = (0, Xe.tz)(),
            {
              closeRef: s
            } = (0, T.useContext)(Qr),
            i = (0, _e.UP)(s, o),
            d = (0, F.v6)(n, {
              "data-testid": e,
              className: He({
                styled: !t
              })
            }),
            l = t ? (0, z.jsx)(L.DX, {
              ref: i,
              ...d
            }) : (0, z.jsx)(D.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "X",
              appearance: "tertiary",
              label: a.formatMessage(st.CloseButtonLabel)
            });
          return (0, z.jsx)(vn, {
            side: "right",
            enabled: r,
            content: a.formatMessage(st.CloseButtonLabel),
            metadata: a.formatMessage(st.CloseButtonTooltip, {
              shortcut: (0, z.jsx)(hn, {
                shortcut: "Esc"
              })
            }),
            children: (0, z.jsx)(Yr.bm, {
              asChild: !0,
              children: l
            })
          })
        }),
        bn = (0, T.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            a = (() => {
              const {
                slide: e,
                resetRef: t
              } = (0, T.useContext)(Qr), {
                contextSafe: r
              } = (0, Oe.L)(), {
                resetZoom: n
              } = (0, T.useContext)(Jr), [o, a] = (0, T.useState)(e.currZoomLevel !== e.zoomLevels.initial), s = r(e => {
                je.os.to([t.current], {
                  scale: e ? 1 : .5,
                  opacity: e ? 1 : 0,
                  ...qe
                })
              }), i = (0, T.useCallback)(() => {
                const t = e.currZoomLevel !== e.zoomLevels.initial;
                a(t), s(t)
              }, [a]);
              return (0, T.useEffect)(() => (e.addEventListener("zoom", i), () => {
                e.removeEventListener("zoom", i)
              }), [i]), {
                isDisabled: !o,
                onPress: n,
                "aria-hidden": !o
              }
            })(),
            {
              resetRef: s
            } = (0, T.useContext)(Qr),
            i = (0, _e.UP)(s, n),
            d = (0, F.v6)(r, a, {
              "data-testid": e,
              className: "foundry_1a74xwbn foundry_1a74xwbj"
            });
          return (0, z.jsx)(vn, {
            side: "left",
            enabled: t,
            content: o.formatMessage(st.ResetZoomButtonLabel),
            metadata: o.formatMessage(st.ResetZoomButtonTooltip, {
              shortcut: (0, z.jsx)(hn, {
                shortcut: "R"
              })
            }),
            children: (0, z.jsx)(D.K, {
              ref: i,
              ...d,
              size: "LG",
              icon: "Undo",
              appearance: "tertiary",
              label: o.formatMessage(st.ResetZoomButtonLabel)
            })
          })
        }),
        gn = (0, T.forwardRef)(function({
          testId: e,
          showTooltip: t = !0,
          ...r
        }, n) {
          const o = (0, Xe.tz)(),
            {
              downloadRef: a,
              imageRef: s
            } = (0, T.useContext)(Qr),
            i = (0, _e.UP)(a, n),
            d = (0, F.v6)(r, {
              "data-testid": e,
              className: "foundry_1a74xwbo foundry_1a74xwbj"
            });
          return (0, z.jsx)(vn, {
            side: "left",
            enabled: t,
            content: o.formatMessage(st.DownloadButtonTooltip),
            children: (0, z.jsx)(D.K, {
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
        Cn = {
          TriggerBorder: "var(--foundry-lightbox-trigger-border-color)",
          TriggerIconFg: "var(--foundry-lightbox-trigger-icon-fg-color)",
          TriggerIconBg: "var(--foundry-lightbox-trigger-icon-bg-color)",
          TriggerIconFgActive: "var(--foundry-lightbox-trigger-active-icon-fg-color)",
          TriggerIconBgActive: "var(--foundry-lightbox-trigger-active-icon-bg-color)"
        };
      var wn = r(98905);

      function xn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function _n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _n(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _n(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function On(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Rn = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pn = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jn(jn({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Rn(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return On(e.variantClassNames, e => On(e, e => e.split(" ")[0]))
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
      const Sn = (0, T.createContext)(null);

      function Nn() {
        const e = (0, T.useContext)(Sn);
        if (!e) throw Error("useInputStatusContext can only be used in a <InputStatus.Root />");
        return e
      }
      const Dn = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          descriptionId: n = "",
          errorId: o = "",
          status: a = "neutral",
          ...s
        }, i) => {
          const d = (0, F.v6)({
              className: Pn({
                status: a
              }),
              "data-testid": t
            }, s),
            l = r ? L.DX : "div";
          return (0, z.jsx)(Sn.Provider, {
            value: {
              descriptionId: n,
              errorId: o,
              status: a,
              ...s
            },
            children: (0, z.jsx)(l, {
              ...d,
              ref: i,
              children: e
            })
          })
        }),
        zn = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const {
            status: o
          } = Nn(), a = (0, F.v6)({
            size: "SM",
            className: "foundry_i6k0ds4",
            "data-testid": e
          }, r), s = {
            success: at.Check,
            invalid: at.X,
            neutral: at.TriangleAlert
          }, i = t ? L.DX : s[o];
          return (0, z.jsx)(i, {
            ref: n,
            ...a
          })
        }),
        In = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            errorId: s
          } = Nn(), i = (0, F.v6)({
            "data-testid": t,
            id: s || a
          }, n), d = r ? L.DX : "div";
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        });
      var Tn = r(94660),
        Ln = r(10198),
        kn = "ScrollArea",
        [Vn, En] = (0, ft.A)(kn),
        [Mn, An] = Vn(kn),
        Hn = T.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...s
          } = e, [i, d] = T.useState(null), [l, c] = T.useState(null), [u, f] = T.useState(null), [p, v] = T.useState(null), [h, y] = T.useState(null), [m, b] = T.useState(0), [g, C] = T.useState(0), [w, x] = T.useState(!1), [_, j] = T.useState(!1), O = (0, ut.s)(t, d), R = (0, cr.jH)(o);
          return (0, z.jsx)(Mn, {
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
            scrollbarXEnabled: w,
            onScrollbarXEnabledChange: x,
            scrollbarY: h,
            onScrollbarYChange: y,
            scrollbarYEnabled: _,
            onScrollbarYEnabledChange: j,
            onCornerWidthChange: b,
            onCornerHeightChange: C,
            children: (0, z.jsx)(bt.sG.div, {
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
      Hn.displayName = kn;
      var Bn = "ScrollAreaViewport",
        Zn = T.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, s = An(Bn, r), i = T.useRef(null), d = (0, ut.s)(t, i, s.onViewportChange);
          return (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(qn, {
              nonce: o
            }), (0, z.jsx)(bt.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: d,
              style: {
                overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, z.jsx)("div", {
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
      Zn.displayName = Bn;
      var qn = T.memo(({
          nonce: e
        }) => (0, z.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: e
        }), (e, t) => e.nonce === t.nonce),
        Fn = "ScrollAreaScrollbar",
        Xn = T.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = An(Fn, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: s
          } = o, i = "horizontal" === e.orientation;
          return T.useEffect(() => (i ? a(!0) : s(!0), () => {
            i ? a(!1) : s(!1)
          }), [i, a, s]), "hover" === o.type ? (0, z.jsx)(Gn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, z.jsx)(Kn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, z.jsx)(Wn, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, z.jsx)(Un, {
            ...n,
            ref: t,
            "data-state": "visible"
          }) : null
        });
      Xn.displayName = Fn;
      var Gn = T.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = An(Fn, e.__scopeScrollArea), [a, s] = T.useState(!1);
          return T.useEffect(() => {
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
          }, [o.scrollArea, o.scrollHideDelay]), (0, z.jsx)(mt.C, {
            present: r || a,
            children: (0, z.jsx)(Wn, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        }),
        Kn = T.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = An(Fn, e.__scopeScrollArea), a = "horizontal" === e.orientation, s = ho(() => d("SCROLL_END"), 100), [i, d] = (l = {
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
          }, T.useReducer((e, t) => l[e][t] ?? e, "hidden"));
          var l;
          return T.useEffect(() => {
            if ("idle" === i) {
              const e = window.setTimeout(() => d("HIDE"), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [i, o.scrollHideDelay, d]), T.useEffect(() => {
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
          }, [o.viewport, a, d, s]), (0, z.jsx)(mt.C, {
            present: r || "hidden" !== i,
            children: (0, z.jsx)(Un, {
              "data-state": "hidden" === i ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, ct.mK)(e.onPointerEnter, () => d("POINTER_ENTER")),
              onPointerLeave: (0, ct.mK)(e.onPointerLeave, () => d("POINTER_LEAVE"))
            })
          })
        }),
        Wn = T.forwardRef((e, t) => {
          const r = An(Fn, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, s] = T.useState(!1),
            i = "horizontal" === e.orientation,
            d = ho(() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(i ? e : t)
              }
            }, 10);
          return yo(r.viewport, d), yo(r.content, d), (0, z.jsx)(mt.C, {
            present: n || a,
            children: (0, z.jsx)(Un, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        }),
        Un = T.forwardRef((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = An(Fn, e.__scopeScrollArea), a = T.useRef(null), s = T.useRef(0), [i, d] = T.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), l = lo(i.viewport, i.content), c = {
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
              const o = co(r),
                a = t || o / 2,
                s = o - a,
                i = r.scrollbar.paddingStart + a,
                d = r.scrollbar.size - r.scrollbar.paddingEnd - s,
                l = r.content - r.viewport;
              return fo([i, d], "ltr" === n ? [0, l] : [-1 * l, 0])(e)
            }(e, s.current, i, t)
          }
          return "horizontal" === r ? (0, z.jsx)(Yn, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = uo(o.viewport.scrollLeft, i, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = u(e, o.dir))
            }
          }) : "vertical" === r ? (0, z.jsx)(Qn, {
            ...c,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = uo(o.viewport.scrollTop, i);
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
        Yn = T.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = An(Fn, e.__scopeScrollArea), [s, i] = T.useState(), d = T.useRef(null), l = (0, ut.s)(t, d, a.onScrollbarXChange);
          return T.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, z.jsx)(eo, {
            "data-orientation": "horizontal",
            ...o,
            ref: l,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": co(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), po(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: io(s.paddingLeft),
                  paddingEnd: io(s.paddingRight)
                }
              })
            }
          })
        }),
        Qn = T.forwardRef((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = An(Fn, e.__scopeScrollArea), [s, i] = T.useState(), d = T.useRef(null), l = (0, ut.s)(t, d, a.onScrollbarYChange);
          return T.useEffect(() => {
            d.current && i(getComputedStyle(d.current))
          }, [d]), (0, z.jsx)(eo, {
            "data-orientation": "vertical",
            ...o,
            ref: l,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": co(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), po(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: io(s.paddingTop),
                  paddingEnd: io(s.paddingBottom)
                }
              })
            }
          })
        }),
        [$n, Jn] = Vn(Fn),
        eo = T.forwardRef((e, t) => {
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
          } = e, p = An(Fn, r), [v, h] = T.useState(null), y = (0, ut.s)(t, h), m = T.useRef(null), b = T.useRef(""), g = p.viewport, C = n.content - n.viewport, w = (0, Tn.c)(c), x = (0, Tn.c)(d), _ = ho(u, 10);

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
          return T.useEffect(() => {
            const e = e => {
              const t = e.target,
                r = v?.contains(t);
              r && w(e, C)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [g, v, C, w]), T.useEffect(x, [n, x]), yo(v, _), yo(p.content, _), (0, z.jsx)($n, {
            scope: r,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: (0, Tn.c)(a),
            onThumbPointerUp: (0, Tn.c)(s),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, Tn.c)(i),
            children: (0, z.jsx)(bt.sG.div, {
              ...f,
              ref: y,
              style: {
                position: "absolute",
                ...f.style
              },
              onPointerDown: (0, ct.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), m.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), j(e))
              }),
              onPointerMove: (0, ct.mK)(e.onPointerMove, j),
              onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = b.current, p.viewport && (p.viewport.style.scrollBehavior = ""), m.current = null
              })
            })
          })
        }),
        to = "ScrollAreaThumb",
        ro = T.forwardRef((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Jn(to, e.__scopeScrollArea);
          return (0, z.jsx)(mt.C, {
            present: r || o.hasThumb,
            children: (0, z.jsx)(no, {
              ref: t,
              ...n
            })
          })
        }),
        no = T.forwardRef((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = An(to, r), s = Jn(to, r), {
            onThumbPositionChange: i
          } = s, d = (0, ut.s)(t, s.onThumbChange), l = T.useRef(void 0), c = ho(() => {
            l.current && (l.current(), l.current = void 0)
          }, 100);
          return T.useEffect(() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (c(), !l.current) {
                  const t = vo(e, i);
                  l.current = t, i()
                }
              };
              return i(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }, [a.viewport, c, i]), (0, z.jsx)(bt.sG.div, {
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
      ro.displayName = to;
      var oo = "ScrollAreaCorner",
        ao = T.forwardRef((e, t) => {
          const r = An(oo, e.__scopeScrollArea),
            n = Boolean(r.scrollbarX && r.scrollbarY);
          return "scroll" !== r.type && n ? (0, z.jsx)(so, {
            ...e,
            ref: t
          }) : null
        });
      ao.displayName = oo;
      var so = T.forwardRef((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = An(oo, r), [a, s] = T.useState(0), [i, d] = T.useState(0), l = Boolean(a && i), {
          onCornerWidthChange: c,
          onCornerHeightChange: u
        } = o;
        return yo(o.scrollbarX, () => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        }), yo(o.scrollbarY, () => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        }), T.useEffect(() => () => {
          c(0), u(0)
        }, [c, u]), l ? (0, z.jsx)(bt.sG.div, {
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

      function io(e) {
        return e ? parseInt(e, 10) : 0
      }

      function lo(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function co(e) {
        const t = lo(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function uo(e, t, r = "ltr") {
        const n = co(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          s = t.content - t.viewport,
          i = a - n,
          d = "ltr" === r ? [0, s] : [-1 * s, 0],
          l = (0, lr.q)(e, d);
        return fo([0, s], [0, i])(l)
      }

      function fo(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function po(e, t) {
        return e > 0 && e < t
      }
      var vo = (e, t = () => {}) => {
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

      function ho(e, t) {
        const r = (0, Tn.c)(e),
          n = T.useRef(0);
        return T.useEffect(() => () => window.clearTimeout(n.current), []), T.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }, [r, t])
      }

      function yo(e, t) {
        const r = (0, Tn.c)(t);
        (0, Ln.N)(() => {
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
      var mo = Hn,
        bo = Zn,
        go = Xn,
        Co = ro,
        wo = ao,
        xo = r(84017),
        _o = r(38174),
        jo = r(64355),
        Oo = r(45787),
        Ro = r(38100),
        Po = [" ", "Enter", "ArrowUp", "ArrowDown"],
        So = [" ", "Enter"],
        No = "Select",
        [Do, zo, Io] = (0, pr.N)(No),
        [To, Lo] = (0, ft.A)(No, [Io, ht.Bk]),
        ko = (0, ht.Bk)(),
        [Vo, Eo] = To(No),
        [Mo, Ao] = To(No);

      function Ho(e) {
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
        } = e, y = ko(t), [m, b] = T.useState(null), [g, C] = T.useState(null), [w, x] = T.useState(!1), _ = (0, cr.jH)(l), [j, O] = (0, Ct.i)({
          prop: n,
          defaultProp: o ?? !1,
          onChange: a,
          caller: No
        }), [R, P] = (0, Ct.i)({
          prop: s,
          defaultProp: i,
          onChange: d,
          caller: No
        }), S = T.useRef(null), N = T.useRef(R);
        T.useEffect(() => {
          const e = v ? m?.ownerDocument.getElementById(v) : m?.form;
          if (e instanceof HTMLFormElement) {
            const t = () => P(N.current);
            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
          }
        }, [v, m, P]);
        const D = !m || !!v || !!m.closest("form"),
          [I, L] = T.useState(new Set),
          k = (0, vt.B)(),
          V = Array.from(I).map(e => e.props.value).join(";"),
          E = T.useCallback(e => {
            L(t => new Set(t).add(e))
          }, []),
          M = T.useCallback(e => {
            L(t => {
              const r = new Set(t);
              return r.delete(e), r
            })
          }, []),
          A = {
            required: p,
            trigger: m,
            onTriggerChange: b,
            valueNode: g,
            onValueNodeChange: C,
            valueNodeHasChildren: w,
            onValueNodeHasChildrenChange: x,
            contentId: k,
            value: R,
            onValueChange: P,
            open: j,
            onOpenChange: O,
            dir: _,
            triggerPointerDownPosRef: S,
            disabled: f,
            name: c,
            autoComplete: u,
            form: v,
            nativeOptions: I,
            nativeSelectKey: V,
            isFormControl: D
          };
        return (0, z.jsx)(ht.bL, {
          ...y,
          children: (0, z.jsx)(Vo, {
            scope: t,
            ...A,
            children: (0, z.jsx)(Do.Provider, {
              scope: t,
              children: (0, z.jsx)(Mo, {
                scope: t,
                onNativeOptionAdd: E,
                onNativeOptionRemove: M,
                children: Sa(h) ? h(A) : r
              })
            })
          })
        })
      }
      Ho.displayName = "SelectProvider";
      var Bo = e => {
        const {
          __scopeSelect: t,
          children: r,
          ...n
        } = e;
        return (0, z.jsx)(Ho, {
          __scopeSelect: t,
          ...n,
          internal_do_not_use_render: ({
            isFormControl: e
          }) => (0, z.jsxs)(z.Fragment, {
            children: [r, e ? (0, z.jsx)(Pa, {
              __scopeSelect: t
            }) : null]
          })
        })
      };
      Bo.displayName = No;
      var Zo = "SelectTrigger",
        qo = T.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = ko(r), s = Eo(Zo, r), i = s.disabled || n, d = (0, ut.s)(t, s.onTriggerChange), l = zo(r), c = T.useRef("touch"), [u, f, p] = Da(e => {
            const t = l().filter(e => !e.disabled),
              r = t.find(e => e.value === s.value),
              n = za(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          }), v = e => {
            i || (s.onOpenChange(!0), p()), e && (s.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, z.jsx)(ht.Mz, {
            asChild: !0,
            ...a,
            children: (0, z.jsx)(bt.sG.button, {
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
              "data-placeholder": Na(s.value) ? "" : void 0,
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
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Po.includes(e.key) && (v(), e.preventDefault())
              })
            })
          })
        });
      qo.displayName = Zo;
      var Fo = "SelectValue",
        Xo = T.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...i
          } = e, d = Eo(Fo, r), {
            onValueNodeHasChildrenChange: l
          } = d, c = void 0 !== a, u = (0, ut.s)(t, d.onValueNodeChange);
          (0, Ln.N)(() => {
            l(c)
          }, [l, c]);
          const f = Na(d.value);
          return (0, z.jsx)(bt.sG.span, {
            ...i,
            asChild: !f && i.asChild,
            ref: u,
            style: {
              pointerEvents: "none"
            },
            children: (0, z.jsx)(T.Fragment, {
              children: f ? s : a
            }, f ? "placeholder" : "value")
          })
        });
      Xo.displayName = Fo;
      var Go = T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, z.jsx)(bt.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      });
      Go.displayName = "SelectIcon";
      var Ko = "SelectPortal",
        [Wo, Uo] = To(Ko, {
          forceMount: void 0
        }),
        Yo = e => {
          const {
            __scopeSelect: t,
            forceMount: r,
            ...n
          } = e;
          return (0, z.jsx)(Wo, {
            scope: e.__scopeSelect,
            forceMount: r,
            children: (0, z.jsx)(yt.Z, {
              asChild: !0,
              ...n
            })
          })
        };
      Yo.displayName = Ko;
      var Qo = "SelectContent",
        $o = T.forwardRef((e, t) => {
          const r = Uo(Qo, e.__scopeSelect),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            a = Eo(Qo, e.__scopeSelect),
            [s, i] = T.useState();
          return (0, Ln.N)(() => {
            i(new DocumentFragment)
          }, []), (0, z.jsx)(mt.C, {
            present: n || a.open,
            children: ({
              present: e
            }) => e ? (0, z.jsx)(oa, {
              ...o,
              ref: t
            }) : (0, z.jsx)(Jo, {
              ...o,
              fragment: s
            })
          })
        });
      $o.displayName = Qo;
      var Jo = T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          fragment: o
        } = e;
        return o ? xo.createPortal((0, z.jsx)(ta, {
          scope: r,
          children: (0, z.jsx)(Do.Slot, {
            scope: r,
            children: (0, z.jsx)("div", {
              ref: t,
              children: n
            })
          })
        }), o) : null
      });
      Jo.displayName = "SelectContentFragment";
      var ea = 10,
        [ta, ra] = To(Qo),
        na = (0, gt.TL)("SelectContent.RemoveScroll"),
        oa = T.forwardRef((e, t) => {
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
          } = e, b = Eo(Qo, r), [g, C] = T.useState(null), [w, x] = T.useState(null), _ = (0, ut.s)(t, C), [j, O] = T.useState(null), [R, P] = T.useState(null), S = zo(r), [N, D] = T.useState(!1), I = T.useRef(!1);
          T.useEffect(() => {
            if (g) return (0, Oo.Eq)(g)
          }, [g]), (0, _o.Oh)();
          const L = T.useCallback(e => {
              const [t, ...r] = S().map(e => e.ref.current), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && w && (w.scrollTop = 0), r === n && w && (w.scrollTop = w.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }, [S, w]),
            k = T.useCallback(() => L([j, g]), [L, j, g]);
          T.useEffect(() => {
            N && k()
          }, [N, k]);
          const {
            onOpenChange: V,
            triggerPointerDownPosRef: E
          } = b;
          T.useEffect(() => {
            if (g) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (E.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (E.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : r.composedPath().includes(g) || V(!1), document.removeEventListener("pointermove", t), E.current = null
                };
              return null !== E.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }, [g, V, E]), T.useEffect(() => {
            const e = () => V(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }, [V]);
          const [M, A] = Da(e => {
            const t = S().filter(e => !e.disabled),
              r = t.find(e => e.ref.current === document.activeElement),
              n = za(t, e, r);
            n && setTimeout(() => n.ref.current?.focus())
          }), H = T.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== b.value && b.value === t || n) && (O(e), n && (I.current = !0))
          }, [b.value]), B = T.useCallback(() => g?.focus(), [g]), Z = T.useCallback((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== b.value && b.value === t || n) && P(e)
          }, [b.value]), q = "popper" === n ? sa : aa, F = q === sa ? {
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
          return (0, z.jsx)(ta, {
            scope: r,
            content: g,
            viewport: w,
            onViewportChange: x,
            itemRefCallback: H,
            selectedItem: j,
            onItemLeave: B,
            itemTextRefCallback: Z,
            focusSelectedItem: k,
            selectedItemText: R,
            position: n,
            isPositioned: N,
            searchRef: M,
            children: (0, z.jsx)(Ro.A, {
              as: na,
              allowPinchZoom: !0,
              children: (0, z.jsx)(jo.n, {
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
                children: (0, z.jsx)(pt.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: s,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => b.onOpenChange(!1),
                  children: (0, z.jsx)(q, {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...m,
                    ...F,
                    onPlaced: () => D(!0),
                    ref: _,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...m.style
                    },
                    onKeyDown: (0, ct.mK)(m.onKeyDown, e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || A(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = S().filter(e => !e.disabled);
                        let r = t.map(e => e.ref.current);
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout(() => L(r)), e.preventDefault()
                      }
                    })
                  })
                })
              })
            })
          })
        });
      oa.displayName = "SelectContentImpl";
      var aa = T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Eo(Qo, r), s = ra(Qo, r), [i, d] = T.useState(null), [l, c] = T.useState(null), u = (0, ut.s)(t, c), f = zo(r), p = T.useRef(!1), v = T.useRef(!0), {
          viewport: h,
          selectedItem: y,
          selectedItemText: m,
          focusSelectedItem: b
        } = s, g = T.useCallback(() => {
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
                c = window.innerWidth - ea,
                u = (0, lr.q)(a, [ea, Math.max(ea, c - l)]);
              i.style.minWidth = d + "px", i.style.left = u + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                s = window.innerWidth - e.right - a,
                d = e.width + s,
                l = Math.max(d, t.width),
                c = window.innerWidth - ea,
                u = (0, lr.q)(a, [ea, Math.max(ea, c - l)]);
              i.style.minWidth = d + "px", i.style.right = u + "px"
            }
            const s = f(),
              d = window.innerHeight - 2 * ea,
              c = h.scrollHeight,
              u = window.getComputedStyle(l),
              v = parseInt(u.borderTopWidth, 10),
              b = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              C = v + b + c + parseInt(u.paddingBottom, 10) + g,
              w = Math.min(5 * y.offsetHeight, C),
              x = window.getComputedStyle(h),
              _ = parseInt(x.paddingTop, 10),
              j = parseInt(x.paddingBottom, 10),
              O = e.top + e.height / 2 - ea,
              R = d - O,
              P = y.offsetHeight / 2,
              S = v + b + (y.offsetTop + P),
              N = C - S;
            if (S <= O) {
              const e = s.length > 0 && y === s[s.length - 1].ref.current;
              i.style.bottom = "0px";
              const t = l.clientHeight - h.offsetTop - h.offsetHeight,
                r = S + Math.max(R, P + (e ? j : 0) + t + g);
              i.style.height = r + "px"
            } else {
              const e = s.length > 0 && y === s[0].ref.current;
              i.style.top = "0px";
              const t = Math.max(O, v + h.offsetTop + (e ? _ : 0) + P) + N;
              i.style.height = t + "px", h.scrollTop = S - O + h.offsetTop
            }
            i.style.margin = `${ea}px 0`, i.style.minHeight = w + "px", i.style.maxHeight = d + "px", n?.(), requestAnimationFrame(() => p.current = !0)
          }
        }, [f, a.trigger, a.valueNode, i, l, h, y, m, a.dir, n]);
        (0, Ln.N)(() => g(), [g]);
        const [C, w] = T.useState();
        (0, Ln.N)(() => {
          l && w(window.getComputedStyle(l).zIndex)
        }, [l]);
        const x = T.useCallback(e => {
          e && !0 === v.current && (g(), b?.(), v.current = !1)
        }, [g, b]);
        return (0, z.jsx)(ia, {
          scope: r,
          contentWrapper: i,
          shouldExpandOnScrollRef: p,
          onScrollButtonChange: x,
          children: (0, z.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: C
            },
            children: (0, z.jsx)(bt.sG.div, {
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
      aa.displayName = "SelectItemAlignedPosition";
      var sa = T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = ea,
          ...a
        } = e, s = ko(r);
        return (0, z.jsx)(ht.UC, {
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
      sa.displayName = "SelectPopperPosition";
      var [ia, da] = To(Qo, {}), la = "SelectViewport", ca = T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = ra(la, r), s = da(la, r), i = (0, ut.s)(t, a.onViewportChange), d = T.useRef(0);
        return (0, z.jsxs)(z.Fragment, {
          children: [(0, z.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, z.jsx)(Do.Slot, {
            scope: r,
            children: (0, z.jsx)(bt.sG.div, {
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
                    const n = window.innerHeight - 2 * ea,
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
      ca.displayName = la;
      var ua = "SelectGroup",
        [fa, pa] = To(ua);
      T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, vt.B)();
        return (0, z.jsx)(fa, {
          scope: r,
          id: o,
          children: (0, z.jsx)(bt.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      }).displayName = ua;
      var va = "SelectLabel";
      T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = pa(va, r);
        return (0, z.jsx)(bt.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      }).displayName = va;
      var ha = "SelectItem",
        [ya, ma] = To(ha),
        ba = T.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...s
          } = e, i = Eo(ha, r), d = ra(ha, r), l = i.value === n, [c, u] = T.useState(a ?? ""), [f, p] = T.useState(!1), v = (0, Tn.c)(e => d.itemRefCallback?.(e, n, o)), h = (0, ut.s)(t, v), y = (0, vt.B)(), m = T.useRef("touch"), b = () => {
            o || (i.onValueChange(n), i.onOpenChange(!1))
          };
          return (0, z.jsx)(ya, {
            scope: r,
            value: n,
            disabled: o,
            textId: y,
            isSelected: l,
            onItemTextChange: T.useCallback(e => {
              u(t => t || (e?.textContent ?? "").trim())
            }, []),
            children: (0, z.jsx)(Do.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: c,
              children: (0, z.jsx)(bt.sG.div, {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": f ? "" : void 0,
                "aria-selected": l && f,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: h,
                onFocus: (0, ct.mK)(s.onFocus, () => p(!0)),
                onBlur: (0, ct.mK)(s.onBlur, () => p(!1)),
                onClick: (0, ct.mK)(s.onClick, () => {
                  "mouse" !== m.current && b()
                }),
                onPointerUp: (0, ct.mK)(s.onPointerUp, () => {
                  "mouse" === m.current && b()
                }),
                onPointerDown: (0, ct.mK)(s.onPointerDown, e => {
                  m.current = e.pointerType
                }),
                onPointerMove: (0, ct.mK)(s.onPointerMove, e => {
                  m.current = e.pointerType, o ? d.onItemLeave?.() : "mouse" === m.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                }),
                onPointerLeave: (0, ct.mK)(s.onPointerLeave, e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                }),
                onKeyDown: (0, ct.mK)(s.onKeyDown, e => {
                  o || e.target !== e.currentTarget || "" !== d.searchRef?.current && " " === e.key || (So.includes(e.key) && b(), " " === e.key && e.preventDefault())
                })
              })
            })
          })
        });
      ba.displayName = ha;
      var ga = "SelectItemText",
        Ca = T.forwardRef((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, s = Eo(ga, r), i = ra(ga, r), d = ma(ga, r), l = Ao(ga, r), [c, u] = T.useState(null), f = (0, Tn.c)(e => i.itemTextRefCallback?.(e, d.value, d.disabled)), p = (0, ut.s)(t, u, d.onItemTextChange, f), v = c?.textContent, h = T.useMemo(() => (0, z.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: v
          }, d.value), [d.disabled, d.value, v]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: m
          } = l;
          return (0, Ln.N)(() => (y(h), () => m(h)), [y, m, h]), (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(bt.sG.span, {
              id: d.textId,
              ...a,
              ref: p
            }), d.isSelected && s.valueNode && !s.valueNodeHasChildren && !Na(s.value) ? xo.createPortal(a.children, s.valueNode) : null]
          })
        });
      Ca.displayName = ga;
      var wa = "SelectItemIndicator";
      T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return ma(wa, r).isSelected ? (0, z.jsx)(bt.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      }).displayName = wa;
      var xa = "SelectScrollUpButton";
      T.forwardRef((e, t) => {
        const r = ra(xa, e.__scopeSelect),
          n = da(xa, e.__scopeSelect),
          [o, a] = T.useState(!1),
          s = (0, ut.s)(t, n.onScrollButtonChange);
        return (0, Ln.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, z.jsx)(ja, {
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
      }).displayName = xa;
      var _a = "SelectScrollDownButton";
      T.forwardRef((e, t) => {
        const r = ra(_a, e.__scopeSelect),
          n = da(_a, e.__scopeSelect),
          [o, a] = T.useState(!1),
          s = (0, ut.s)(t, n.onScrollButtonChange);
        return (0, Ln.N)(() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }, [r.viewport, r.isPositioned]), o ? (0, z.jsx)(ja, {
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
      }).displayName = _a;
      var ja = T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = ra("SelectScrollButton", r), s = T.useRef(null), i = zo(r), d = T.useCallback(() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }, []);
        return T.useEffect(() => () => d(), [d]), (0, Ln.N)(() => {
          const e = i().find(e => e.ref.current === document.activeElement);
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }, [i]), (0, z.jsx)(bt.sG.div, {
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
      T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, z.jsx)(bt.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      }).displayName = "SelectSeparator";
      var Oa = "SelectArrow";
      T.forwardRef((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = ko(r);
        return "popper" === ra(Oa, r).position ? (0, z.jsx)(ht.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      }).displayName = Oa;
      var Ra = "SelectBubbleInput",
        Pa = T.forwardRef(({
          __scopeSelect: e,
          ...t
        }, r) => {
          const n = Eo(Ra, e),
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
            p = T.useRef(null),
            v = (0, ut.s)(r, p),
            h = o ?? "",
            y = (0, ur.Z)(h),
            m = Array.from(u).some(e => "" === (e.props.value ?? ""));
          return T.useEffect(() => {
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
          }, [y, h]), (0, z.jsxs)(bt.sG.select, {
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
              ...wt.Qg,
              ...t.style
            },
            ref: v,
            defaultValue: h,
            children: [Na(o) && !m ? (0, z.jsx)("option", {
              value: ""
            }) : null, Array.from(u)]
          }, f)
        });

      function Sa(e) {
        return "function" == typeof e
      }

      function Na(e) {
        return "" === e || void 0 === e
      }

      function Da(e) {
        const t = (0, Tn.c)(e),
          r = T.useRef(""),
          n = T.useRef(0),
          o = T.useCallback(e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout(() => e(""), 1e3))
              }(o)
          }, [t]),
          a = T.useCallback(() => {
            r.current = "", window.clearTimeout(n.current)
          }, []);
        return T.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, a]
      }

      function za(e, t, r) {
        const n = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (s = e, i = Math.max(o, 0), s.map((e, t) => s[(i + t) % s.length]));
        var s, i;
        1 === n.length && (a = a.filter(e => e !== r));
        const d = a.find(e => e.textValue.toLowerCase().startsWith(n.toLowerCase()));
        return d !== r ? d : void 0
      }

      function Ia(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Ta(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function La(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ta(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ia(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ta(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ka(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Pa.displayName = Ra;
      var Va = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ea = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = La(La({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Va(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ka(e.variantClassNames, e => ka(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Ma = Ea({
          defaultClassName: "foundry_uaq1gwl",
          variantClassNames: {
            hideDividers: {
              true: "foundry_uaq1gwk"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Aa = Ea({
          defaultClassName: "foundry_uaq1gwp foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwq"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ha = Ea({
          defaultClassName: "foundry_uaq1gw4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gw5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ba = Ea({
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
        Za = Ea({
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
        qa = Ea({
          defaultClassName: "foundry_uaq1gwi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_uaq1gwj"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Fa = (0, T.createContext)(null);

      function Xa() {
        const e = (0, T.useContext)(Fa);
        if (!e) throw Error("useDropdownContext can only be used in a <Dropdown.Root />");
        return e
      }
      const Ga = (0, T.forwardRef)(({
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
          const y = (0, T.useRef)(null),
            m = (0, _e.UP)(y, h),
            b = (0, T.useId)(),
            g = (0, T.useId)(),
            C = (0, T.useId)(),
            w = (0, T.useId)(),
            x = (0, T.useId)(),
            _ = (0, T.useId)(),
            j = (0, T.useRef)(null),
            O = (0, T.useRef)(null),
            R = (0, T.useRef)(null),
            [P = !1, S] = (0, _e.ic)({
              prop: u,
              defaultProp: l,
              onChange: c
            }),
            N = (0, F.v6)({
              className: "foundry_uaq1gw0",
              "data-testid": t
            }, v);
          return (0, z.jsx)(Fa.Provider, {
            value: {
              labelId: b,
              errorId: g,
              descriptionId: C,
              triggerId: _,
              hintId: w,
              popoverId: x,
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
            children: (0, z.jsx)(Bo, {
              required: r,
              disabled: n,
              open: P,
              onOpenChange: () => S(!o && !P),
              value: d,
              defaultValue: a,
              onValueChange: s,
              name: i,
              children: (0, z.jsx)("div", {
                ref: m,
                ...N,
                children: e
              })
            })
          })
        }),
        Ka = (0, T.forwardRef)(({
          hideDividers: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            popoverId: a
          } = Xa(), s = (0, F.v6)({
            id: a,
            sideOffset: 8,
            position: "popper",
            align: "center",
            className: Ma({
              hideDividers: e
            }),
            "data-testid": r
          }, n);
          return (0, z.jsx)($o, {
            ...s,
            ref: o,
            children: (0, z.jsx)(ca, {
              className: "foundry_uaq1gwn",
              children: t
            })
          })
        }),
        Wa = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, z.jsx)(ca, {
            ref: r,
            ...n
          })
        }),
        Ua = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_uaq1gwt",
            type: "auto",
            "data-testid": t
          }, r);
          return (0, z.jsxs)(mo, {
            ...o,
            ref: n,
            children: [(0, z.jsx)(Wa, {
              asChild: !0,
              children: (0, z.jsx)(bo, {
                className: "foundry_uaq1gwu",
                style: {
                  overflowY: void 0
                },
                tabIndex: 0,
                children: e
              })
            }), (0, z.jsx)(go, {
              className: "foundry_uaq1gwv",
              orientation: "vertical",
              children: (0, z.jsx)(Co, {
                className: "foundry_uaq1gww"
              })
            })]
          })
        }),
        Ya = (0, T.forwardRef)(({
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
          } = Xa(), {
            isPressed: C,
            pressProps: w
          } = (0, wn.d)({
            preventFocusOnPress: !1,
            allowTextSelectionOnPress: !1
          }), [x, _] = (0, T.useState)(!1), [j, O] = (0, T.useState)(!1);
          (0, T.useEffect)(() => {
            _(!!h.current || !!m.current), O(!!y.current)
          }, []);
          const R = (0, F.v6)({
              id: f,
              className: Za({
                size: g,
                isReadOnly: !!i,
                isInvalid: "invalid" === d,
                isPressed: !!C,
                isDisabled: !!l
              }),
              "aria-labelledby": x ? (0, F.VW)(r, c, u) : r,
              "aria-describedby": j ? (0, F.VW)(n, v) : n,
              "aria-controls": p,
              "aria-invalid": "invalid" === d,
              "data-state": b ? "open" : "closed",
              "data-testid": t,
              "data-pressed": !!C
            }, (0, F.cJ)(w, "onKeyDown"), a),
            P = o ? L.DX : qo;
          return (0, z.jsx)(P, {
            ...R,
            ref: s,
            children: e
          })
        }),
        Qa = (0, T.forwardRef)(({
          placeholder: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              className: "foundry_uaq1gwh",
              "data-testid": r
            }, n),
            s = t ? L.DX : "span";
          return (0, z.jsx)(s, {
            ...a,
            ref: o,
            children: (0, z.jsx)(Xo, {
              placeholder: e
            })
          })
        }),
        $a = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const {
            isDisabled: o,
            isReadOnly: a,
            isOpen: s
          } = Xa(), i = s ? at.ChevronUp : at.ChevronDown, d = (0, F.v6)({
            asChild: !0,
            className: qa({
              isDisabled: a || o
            }),
            "data-testid": t
          }, r);
          return (0, z.jsx)(Go, {
            ...d,
            ref: n,
            children: e || (0, z.jsx)(i, {
              size: "LG",
              label: ""
            })
          })
        }),
        Ja = (0, T.forwardRef)(({
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
          } = Xa(), f = i && !o, p = (0, _e.UP)(c, s), v = (0, F.v6)({
            id: a.id || l,
            htmlFor: u,
            "data-testid": e,
            className: Ba({
              showAsterisk: f,
              isDisabled: d
            })
          }, a), h = t ? L.DX : "label";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(h, {
              ...v,
              ref: p,
              children: r
            })
          })
        }),
        es = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s,
            descriptionRef: i
          } = Xa(), d = (0, _e.UP)(i, o), l = (0, F.v6)({
            className: Aa({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), c = r ? L.DX : "div";
          return (0, z.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        ts = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            hintRef: s,
            isDisabled: i
          } = Xa(), d = (0, _e.UP)(s, o), l = (0, F.v6)({
            className: Ha({
              isDisabled: i
            }),
            "data-testid": r,
            id: a
          }, n), c = t ? L.DX : "div";
          return (0, z.jsx)(c, {
            ...l,
            ref: d,
            children: e
          })
        }),
        rs = (0, T.forwardRef)(({
          children: e,
          value: t,
          isDisabled: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, T.useRef)(null),
            i = (0, _e.UP)(s, a),
            d = (0, F.v6)({
              value: t,
              className: "foundry_uaq1gwo foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
              disabled: r,
              "data-testid": n
            }, o);
          return (0, z.jsx)(ba, {
            ref: i,
            ...d,
            children: e
          })
        }),
        ns = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_uaq1gwr",
            "data-testid": t
          }, r);
          return (0, z.jsx)(Ca, {
            ref: n,
            asChild: !0,
            children: (0, z.jsx)("span", {
              ...o,
              children: e
            })
          })
        }),
        os = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_uaq1gws",
            "data-testid": t
          }, r);
          return (0, z.jsx)(Go, {
            asChild: !0,
            ...o,
            ref: n,
            children: e
          })
        }),
        as = Yo,
        ss = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = Xa(), i = (0, F.v6)({
            className: "foundry_uaq1gwx",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? L.DX : Dn;
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        is = zn,
        ds = In;
      var ls = r(83588),
        cs = r(56728);

      function us(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fs(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function ps(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fs(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = us(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fs(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vs(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hs = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ys = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ps(ps({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hs(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vs(e.variantClassNames, e => vs(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ms = ys({
          defaultClassName: "foundry_okz6z2f foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2g"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bs = ys({
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
        gs = ys({
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
        Cs = ys({
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
        ws = ys({
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
      const xs = (0, T.createContext)(null);

      function _s() {
        const e = (0, T.useContext)(xs);
        if (!e) throw Error("useSwitchContext can only be used in a <Switch.Root />");
        return e
      }
      const js = (0, T.forwardRef)(({
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
            c = n ? L.DX : "div",
            u = (0, T.useId)(),
            f = (0, T.useId)(),
            p = (0, T.useId)();
          return (0, z.jsx)(xs.Provider, {
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
            children: (0, z.jsx)(c, {
              ...l,
              ref: d,
              children: o
            })
          })
        }),
        Os = (0, T.forwardRef)(({
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
          const p = (0, T.useRef)(null),
            v = (0, _e.UP)(p, f),
            {
              size: h,
              appearance: y,
              inputId: m,
              labelId: b,
              descriptionId: g,
              isDisabled: C,
              isReadOnly: w
            } = _s(),
            x = (0, cs.H)({
              isDisabled: C,
              isReadOnly: w,
              isSelected: s,
              defaultSelected: i,
              onChange: d
            }),
            {
              inputProps: _
            } = (0, ls.K)({
              id: a || m,
              "aria-labelledby": (0, F.VW)(n, b),
              "aria-describedby": (0, F.VW)(o, g),
              name: l,
              value: c,
              isDisabled: C,
              isReadOnly: w
            }, x, p),
            j = (0, F.v6)({
              className: ws({
                appearance: y
              }),
              "data-state": x.isSelected ? "selected" : "unselected",
              "data-disabled": C || w,
              "data-testid": e,
              onClick: e => {
                t?.(e) ?? r?.(e), e.defaultPrevented || C || w || x.toggle()
              }
            }, u);
          return (0, z.jsxs)("div", {
            ...j,
            children: [(0, z.jsx)(L.s6, {
              children: (0, z.jsx)("input", {
                ..._,
                ref: v
              })
            }), (0, z.jsx)("div", {
              className: Cs({
                size: h
              }),
              "aria-hidden": "true",
              children: (0, z.jsx)("div", {
                className: bs({
                  size: h,
                  isSelected: x.isSelected
                })
              })
            })]
          })
        }),
        Rs = (0, T.forwardRef)(({
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
          } = _s(), c = (0, F.v6)({
            id: o.id || i,
            htmlFor: d,
            "data-testid": e,
            className: gs({
              isDisabled: s,
              size: l
            })
          }, o), u = t ? L.DX : "label";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(u, {
              ...c,
              ref: a,
              children: r
            })
          })
        }),
        Ps = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = _s(), i = n.id || s, d = (0, F.v6)({
            className: ms({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? L.DX : "div";
          return (0, z.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        });
      var Ss = r(26688);
      const Ns = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, z.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Ds = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, z.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        zs = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, z.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Is = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, z.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Ts = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, z.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Ls = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, z.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function ks(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
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

      function Es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vs(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ks(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
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
      var As = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hs = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Es(Es({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) As(l, n, e.defaultVariants) && (r += " " + c);
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
        },
        Bs = Hs({
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
        Zs = Hs({
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
        qs = Hs({
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
        Fs = Hs({
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
        Xs = Hs({
          defaultClassName: "foundry_11gbdtyo foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_11gbdtyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gs = Hs({
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
      const Ks = (0, T.createContext)(null);

      function Ws() {
        const e = (0, T.useContext)(Ks);
        if (!e) throw Error("useCheckboxContext can only be used in a <Checkbox.Root />");
        return e
      }
      const Us = (0, T.forwardRef)(({
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
            d = n ? L.DX : "div",
            l = (0, T.useId)(),
            c = (0, T.useId)(),
            u = (0, T.useId)();
          return (0, z.jsx)(Ks.Provider, {
            value: {
              size: e,
              appearance: t,
              labelId: l,
              descriptionId: c,
              inputId: u,
              ...a
            },
            children: (0, z.jsx)(d, {
              ...i,
              ref: s,
              children: o
            })
          })
        }),
        Ys = (0, T.forwardRef)(({
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
            inputId: C,
            ...w
          } = Ws(), x = (0, T.useRef)(null), _ = f.id || C, {
            isPressed: j,
            pressProps: O
          } = (0, wn.d)({
            ref: x
          }), {
            setSelected: R,
            toggle: P,
            ...S
          } = (0, cs.H)({
            isSelected: t,
            defaultSelected: r,
            onChange: n
          }), {
            inputProps: N,
            isSelected: D,
            isDisabled: k,
            isReadOnly: V
          } = (0, Ss.v)({
            "aria-label": "",
            id: _,
            name: o,
            ...w
          }, {
            ...S,
            toggle: P,
            setSelected: w.isReadOnly ? () => !1 : R
          }, x), E = (0, F.v6)({
            className: Zs({
              size: v
            }),
            onClick: e => {
              a?.(e) ?? s?.(e), e.defaultPrevented || k || V || P()
            }
          }, O, f), M = (0, F.v6)({
            className: "foundry_11gbdty1",
            "aria-checked": t,
            "aria-labelledby": (0, F.VW)(c, g),
            "aria-describedby": (0, F.VW)(d, b),
            "aria-errormessage": (0, F.VW)(l, w.isInvalid ? b : void 0),
            "aria-required": m,
            required: m
          }, N), A = y ? i[`Dash${v}`] : i[`Check${v}`];
          return (0, z.jsxs)("div", {
            ...E,
            children: [(0, z.jsx)(L.s6, {
              children: (0, z.jsx)("input", {
                ...M,
                ref: p
              })
            }), (0, z.jsx)("div", {
              className: (0, I.clsx)(Bs({
                size: v,
                appearance: h
              }), u),
              "aria-hidden": "true",
              "data-state": y ? "mixed" : D ? "checked" : "unchecked",
              "data-disabled": k || V,
              "data-testid": e,
              "data-pressed": j,
              children: (0, z.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (D || y) && (0, z.jsx)(A, {
                  "aria-hidden": "true"
                })
              })
            })]
          })
        }),
        Qs = (0, T.forwardRef)(({
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
          } = Ws(), u = a.id || d, f = c && !o, p = (0, F.v6)({
            className: Gs({
              size: i,
              showAsterisk: f
            }),
            "data-testid": r,
            id: u,
            htmlFor: a.htmlFor || l
          }, a), v = t ? L.DX : "label";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(v, {
              ...p,
              ref: s,
              children: e
            })
          })
        }),
        $s = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = Ws(), i = n.id || s, d = (0, F.v6)({
            className: qs({
              isDisabled: a
            }),
            "data-testid": r,
            id: i
          }, n), l = t ? L.DX : "div";
          return (0, z.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        Js = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Ws(), s = n.id || a, i = (0, F.v6)({
            className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
            "data-testid": r,
            id: s
          }, n), d = t ? L.DX : "div";
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ei = (0, T.createContext)(null);

      function ti() {
        const e = (0, T.useContext)(ei);
        if (!e) throw Error("useGroupContext can only be used in a <Checkbox.Group />");
        return e
      }
      const ri = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          size: n = "MD",
          isRequired: o = !1,
          ...a
        }, s) => {
          const [i, d] = (0, T.useState)(null), [l, c] = (0, T.useState)(null), u = [i, l].filter(Boolean).join(" "), f = (0, F.v6)({
            "data-testid": e,
            "aria-describedby": u,
            className: "foundry_11gbdtyn foundry_8kowh41"
          }, a), p = t ? L.DX : "fieldset";
          return (0, z.jsx)(ei.Provider, {
            value: {
              size: n,
              isRequired: o,
              descriptionId: i,
              errorTextId: l,
              setDescriptionId: d,
              setErrorTextId: c
            },
            children: (0, z.jsx)(p, {
              ...f,
              ref: s,
              children: r
            })
          })
        }),
        ni = (0, T.forwardRef)(({
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
          } = ti(), l = d && !a, c = (0, F.v6)({
            "data-testid": r,
            className: Xs({
              showAsterisk: l
            })
          }, s), u = t ? L.DX : "legend";
          return (0, z.jsx)(L.s6, {
            enabled: o,
            children: (0, z.jsxs)(u, {
              ...c,
              ref: i,
              children: [(0, z.jsx)(L.xV, {
                children: e
              }), !d && (0, z.jsxs)("span", {
                className: "foundry_11gbdtyq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi",
                children: ["(", n, ")"]
              })]
            })
          })
        }),
        oi = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setDescriptionId: a
          } = ti(), s = (0, T.useId)(), i = n.id || s;
          (0, T.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, F.v6)({
              "data-testid": r,
              className: "foundry_11gbdtyr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi",
              id: i
            }, n),
            l = t ? L.DX : "div";
          return (0, z.jsx)(l, {
            ...d,
            ref: o,
            children: e
          })
        }),
        ai = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = ti(), s = (0, F.v6)({
            "data-testid": r,
            className: Fs({
              size: a
            })
          }, n), i = t ? L.DX : "div";
          return (0, z.jsx)(i, {
            ...s,
            ref: o,
            children: e
          })
        }),
        si = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            setErrorTextId: a
          } = ti(), s = (0, T.useId)(), i = n.id || s;
          (0, T.useEffect)(() => {
            a(i)
          }, [a, i]);
          const d = (0, F.v6)({
              "data-testid": r,
              id: i,
              className: "foundry_11gbdtyw foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdj"
            }, n),
            l = at.X,
            c = t ? L.DX : "div";
          return (0, z.jsxs)(c, {
            ...d,
            ref: o,
            children: [(0, z.jsx)(l, {
              label: "",
              size: "SM"
            }), (0, z.jsx)(L.xV, {
              children: e
            })]
          })
        });

      function ii(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function di(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function li(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? di(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ii(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : di(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ci(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ui = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        fi = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = li(li({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ui(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ci(e.variantClassNames, e => ci(e, e => e.split(" ")[0]))
            }
          }, t
        },
        pi = fi({
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
        vi = fi({
          defaultClassName: "foundry_vq8c3j4 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_vq8c3j5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hi = fi({
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
        yi = fi({
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
      const mi = (0, T.createContext)(null);

      function bi() {
        const e = (0, T.useContext)(mi);
        if (!e) throw Error("useTextAreaContext can only be used in a <TextArea.Root />");
        return e
      }
      const gi = (0, T.forwardRef)(({
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
            c = e ? L.DX : "div",
            u = (0, T.useId)(),
            f = (0, T.useId)(),
            p = (0, T.useId)(),
            v = (0, T.useId)();
          return (0, z.jsx)(mi.Provider, {
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
            children: (0, z.jsx)(c, {
              ref: d,
              ...l,
              children: t
            })
          })
        }),
        Ci = (0, T.forwardRef)(({
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
          } = bi(), u = (0, F.v6)({
            className: hi({
              isDisabled: l,
              showAsterisk: c && !o
            }),
            "data-testid": r,
            id: i,
            htmlFor: d
          }, a), f = t ? L.DX : "label";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(f, {
              ...u,
              ref: s,
              children: e
            })
          })
        }),
        wi = (0, T.forwardRef)(({
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
          } = bi(), g = (0, T.useRef)(null), C = (0, _e.UP)(g, c), w = (0, F.v6)({
            className: yi({
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
            ...h && {
              "aria-disabled": !0
            },
            ...y && {
              "aria-required": !0
            }
          }, l), x = e ? L.DX : "textarea";
          return (0, z.jsx)(x, {
            ref: C,
            ...w,
            children: t
          })
        }),
        xi = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = bi(), i = (0, F.v6)({
            className: pi({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? L.DX : "div";
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        _i = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const {
            hintId: a,
            isDisabled: s
          } = bi(), i = (0, F.v6)({
            className: vi({
              isDisabled: s
            }),
            "data-testid": r,
            id: a
          }, n), d = t ? L.DX : "div";
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        ji = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = bi(), i = (0, F.v6)({
            className: "foundry_vq8c3ji",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? L.DX : Dn;
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Oi = zn,
        Ri = In;
      var Pi = r(707),
        Si = r(5277);

      function Ni(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Di(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function zi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Di(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ni(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Di(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Ii(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ti = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Li = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = zi(zi({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ti(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ii(e.variantClassNames, e => Ii(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ki = Li({
          defaultClassName: "foundry_njguqn7 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdj",
          variantClassNames: {
            showAsterisk: {
              true: "foundry_njguqn8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vi = Li({
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
      const Ei = (0, T.createContext)(null);

      function Mi() {
        const e = (0, T.useContext)(Ei);
        if (!e) throw Error("useRadioGroupContext can only be used in a <RadioGroup.Root />");
        return e
      }
      const Ai = (0, T.forwardRef)(({
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
          const f = (0, T.useRef)(null),
            p = (0, _e.UP)(f, u),
            v = (0, T.useId)(),
            h = (0, T.useId)(),
            y = (0, T.useId)(),
            m = (0, Pi.Z)({
              ...c,
              isInvalid: "invalid" === l
            }),
            {
              radioGroupProps: b
            } = (0, Si.m)({
              ...c,
              orientation: r,
              "aria-labelledby": (0, F.VW)(v, s),
              "aria-describedby": (0, F.VW)(h, y, i),
              "aria-errormessage": (0, F.VW)(y, d)
            }, m),
            g = (0, F.v6)({
              className: "foundry_njguqn0"
            }, b, (0, F.cJ)(c, "isDisabled", "isRequired", "isReadOnly", "name")),
            C = a ? L.DX : "div";
          return (0, z.jsx)(Ei.Provider, {
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
            children: (0, z.jsx)(C, {
              ref: p,
              "data-testid": o,
              ...g,
              children: n
            })
          })
        }),
        Hi = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            size: a,
            orientation: s
          } = Mi(), i = (0, F.v6)({
            "data-testid": e,
            className: Vi({
              size: a,
              orientation: s
            })
          }, n), d = t ? L.DX : "div";
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: r
          })
        }),
        Bi = (0, T.forwardRef)(({
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
          } = Mi(), l = i && !o, c = (0, F.v6)({
            id: a.id || d,
            "data-testid": e,
            className: ki({
              showAsterisk: l
            })
          }, a), u = t ? L.DX : "div";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(u, {
              ...c,
              ref: s,
              children: r
            })
          })
        }),
        Zi = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            descriptionId: a
          } = Mi(), s = (0, F.v6)({
            id: a,
            "data-testid": e,
            className: "foundry_njguqn9 foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg foundry_tdsdcdi"
          }, n), i = t ? L.DX : "div";
          return (0, z.jsx)(i, {
            ...s,
            ref: o,
            children: r
          })
        }),
        qi = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            errorId: a,
            status: s
          } = Mi(), i = (0, F.v6)({
            className: "foundry_njguqnc",
            "data-testid": t,
            errorId: a,
            status: s
          }, n), d = r ? L.DX : Dn;
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Fi = zn,
        Xi = In;
      var Gi = r(80146),
        Ki = Li({
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
        Wi = Li({
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
        Ui = Li({
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
        Yi = Li({
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
      const Qi = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, z.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        $i = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, z.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        Ji = ({
          color: e = "currentColor"
        }) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, z.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        }),
        ed = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r,
              className: "foundry_1pfduet0"
            }, n),
            s = e ? L.DX : "label";
          return (0, z.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        td = (0, T.forwardRef)(({
          testId: e,
          value: t,
          ...r
        }, n) => {
          const o = (0, T.useRef)(null),
            a = (0, _e.UP)(o, n),
            s = (0, T.useId)(),
            {
              state: i,
              appearance: d,
              size: l,
              isReadOnly: u,
              isRequired: f
            } = Mi(),
            {
              isPressed: p,
              pressProps: v
            } = (0, wn.d)({
              allowTextSelectionOnPress: !0
            }),
            {
              inputProps: h
            } = (0, Gi.z)({
              ...r,
              id: s,
              value: t,
              "aria-label": ""
            }, i, o),
            y = h.checked,
            m = h.disabled || i?.isReadOnly,
            b = (0, F.v6)(h, {
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
          return (0, z.jsxs)("div", {
            className: Yi({
              size: l
            }),
            children: [(0, z.jsx)(L.s6, {
              children: (0, z.jsx)("input", {
                type: "radio",
                ...b,
                ref: a,
                className: "foundry_1pfduet1"
              })
            }), (0, z.jsx)("div", {
              className: Ui({
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": y ? "checked" : "unchecked",
              "data-disabled": m,
              "data-pressed": p,
              ...v,
              children: (0, z.jsx)("span", {
                className: "foundry_1pfduet9",
                children: y && (0, z.jsx)(g, {})
              })
            })]
          })
        }),
        rd = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          hideVisually: n = !1,
          ...o
        }, a) => {
          const {
            size: s,
            state: i
          } = Mi(), d = (0, T.useId)(), l = (0, F.v6)({
            id: d,
            "data-testid": e,
            className: Wi({
              size: s,
              isDisabled: i?.isDisabled
            })
          }, o), c = t ? L.DX : "div";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(c, {
              ...l,
              ref: a,
              children: r
            })
          })
        }),
        nd = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = Mi(), s = (0, F.v6)({
            "data-testid": e,
            className: Ki({
              isDisabled: a
            })
          }, n), i = t ? L.DX : "span";
          return (0, z.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        });
      var od = r(58900);

      function ad(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function sd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function id(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = ad(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sd(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function dd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ld = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        cd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = id(id({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ld(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dd(e.variantClassNames, e => dd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        ud = cd({
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
        fd = cd({
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
        pd = cd({
          defaultClassName: "foundry_8oytzoa foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdg",
          variantClassNames: {
            isDisabled: {
              true: "foundry_8oytzob"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vd = cd({
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
        hd = cd({
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
        yd = cd({
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
      const md = {
          clickTriggered: !1,
          selectionStart: null,
          selectionEnd: null
        },
        bd = (0, T.createContext)(null);

      function gd() {
        const e = (0, T.useContext)(bd);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }
      const Cd = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          isDisabled: n = !1,
          isReadOnly: o = !1,
          isRequired: a = !1,
          status: s = "neutral",
          ...i
        }, d) => {
          const [l, c] = (0, T.useState)("text"), u = `${(0,T.useId)()}-label`, f = `${(0,T.useId)()}-input`, p = `${(0,T.useId)()}-description`, v = (0, T.useRef)(null), h = (0, T.useRef)(md), y = (0, F.v6)({
            "data-testid": r,
            className: "foundry_8oytzo4"
          }, i), m = e ? L.DX : "div";
          return (0, z.jsx)(bd.Provider, {
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
            children: (0, z.jsx)(m, {
              ref: d,
              ...y,
              children: t
            })
          })
        }),
        wd = (0, T.forwardRef)(({
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
          } = gd(), u = d && !o, f = (0, F.v6)({
            id: a.id || c,
            htmlFor: a.htmlFor || l,
            "data-testid": e,
            className: yd({
              showAsterisk: u,
              isDisabled: i
            })
          }, a), p = t ? L.DX : "label";
          return (0, z.jsx)(L.s6, {
            enabled: n,
            children: (0, z.jsx)(p, {
              ref: s,
              ...f,
              children: r
            })
          })
        }),
        xd = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a
          } = gd(), s = (0, F.v6)({
            "data-testid": e,
            className: pd({
              isDisabled: a
            })
          }, n), i = t ? L.DX : "span";
          return (0, z.jsx)(i, {
            ref: o,
            ...s,
            children: r
          })
        }),
        _d = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          children: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            isReadOnly: s,
            status: i
          } = gd(), d = (0, F.v6)({
            "data-testid": e,
            className: (0, I.clsx)(ud({
              isDisabled: a,
              isReadOnly: s,
              isInvalid: "invalid" === i,
              isSuccess: "success" === i
            }), "foundry_8oytzo1")
          }, n), l = t ? L.DX : "div";
          return (0, z.jsx)(l, {
            ref: o,
            ...d,
            children: r
          })
        }),
        jd = (0, T.forwardRef)(({
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
            type: C,
            inputRef: w,
            focusState: x
          } = gd();
          (0, T.useEffect)(() => g(l), []);
          const _ = "invalid" === h,
            j = (0, F.v6)({
              disabled: f,
              readOnly: p,
              required: v,
              id: m,
              type: C,
              spellCheck: !1,
              placeholder: s,
              "aria-labelledby": (0, F.VW)(y, i),
              "aria-describedby": (0, F.VW)(b, d),
              "data-testid": e,
              className: (0, I.clsx)(hd({
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
            O = (0, od.A)({
              mask: r,
              replacement: n,
              showMask: o,
              track: a
            }),
            R = (0, _e.UP)(r && n ? O : null, w, u),
            P = t ? L.DX : "input";
          return (0, z.jsx)(P, {
            ref: R,
            ...j
          })
        }),
        Od = (0, T.forwardRef)(({
          icon: e,
          asChild: t,
          testId: r,
          side: n,
          ...o
        }, a) => {
          const {
            isDisabled: s
          } = gd(), i = (0, F.v6)({
            size: "LG",
            "data-testid": r,
            className: (0, I.clsx)(vd({
              side: n,
              isDisabled: s
            }), "foundry_8oytzo0")
          }, o), d = t ? L.DX : at[e];
          return (0, z.jsx)(d, {
            ref: a,
            ...i
          })
        }),
        Rd = (0, T.forwardRef)(({
          ...e
        }, t) => {
          const {
            isDisabled: r
          } = gd(), n = (0, F.v6)({
            isDisabled: r,
            size: "LG",
            appearance: "ghost",
            className: (0, I.clsx)("foundry_8oytzox", "foundry_8oytzo3"),
            preventFocusOnPress: !0
          }, e);
          return (0, z.jsx)(D.K, {
            ref: t,
            ...n,
            preventFocusOnPress: !1
          })
        }),
        Pd = (0, T.forwardRef)(({
          showPasswordLabel: e,
          hidePasswordLabel: t,
          ...r
        }, n) => {
          const {
            type: o,
            setType: a,
            inputRef: s,
            focusState: i
          } = gd(), d = "password" === o, l = d ? e : t;
          (0, T.useEffect)(() => {
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
          return (0, z.jsxs)(or, {
            children: [(0, z.jsx)(ar, {
              children: (0, z.jsx)(Rd, {
                ref: n,
                ...c
              })
            }), (0, z.jsxs)(sr, {
              side: "bottom",
              align: "end",
              children: [l, (0, z.jsx)(ir, {})]
            })]
          })
        }),
        Sd = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            isDisabled: a,
            descriptionId: s
          } = gd(), i = (0, F.v6)({
            className: fd({
              isDisabled: a
            }),
            "data-testid": t,
            id: s
          }, n), d = r ? L.DX : "div";
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Nd = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          ...n
        }, o) => {
          const {
            descriptionId: a,
            status: s
          } = gd(), i = (0, F.v6)({
            className: "foundry_8oytzo13",
            "data-testid": t,
            descriptionId: a,
            status: s
          }, n), d = r ? L.DX : Dn;
          return (0, z.jsx)(d, {
            ...i,
            ref: o,
            children: e
          })
        }),
        Dd = zn,
        zd = In;
      var Id = r(68196);

      function Td(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
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

      function kd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ld(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Td(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ld(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ed = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Md = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kd(kd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ed(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vd(e.variantClassNames, e => Vd(e, e => e.split(" ")[0]))
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
      const Ad = {
          SM: "SM",
          MD: "SM",
          LG: "LG",
          XL: "XL"
        },
        Hd = (0, T.forwardRef)(({
          label: e,
          size: t = "LG",
          testId: r,
          ...n
        }, o) => {
          const a = (0, T.useRef)(null),
            s = (0, _e.UP)(a, o),
            {
              buttonProps: i
            } = (0, _e.sL)(n, a),
            d = (0, F.v6)({
              "data-testid": r,
              className: Md({
                size: t
              })
            }, i);
          return (0, z.jsx)("button", {
            ref: s,
            ...d,
            children: (0, z.jsx)(at.X, {
              label: e,
              size: Ad[t]
            })
          })
        });

      function Bd(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
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

      function qd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zd(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Bd(o)) in n ? Object.defineProperty(n, o, {
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

      function Fd(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gd = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qd(qd({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xd(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fd(e.variantClassNames, e => Fd(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Kd = Gd({
          defaultClassName: "foundry_1m368qhn",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qho"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wd = Gd({
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
        Ud = Gd({
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
      const Yd = (0, T.createContext)(null);

      function Qd() {
        const e = (0, T.useContext)(Yd);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const $d = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          status: r,
          background: n,
          ...o
        }, a) => {
          const s = e ? L.DX : "div",
            i = (0, F.v6)({
              className: Ud({
                status: r,
                background: n
              })
            }, o);
          return (0, z.jsx)(Yd.Provider, {
            value: {
              status: r,
              background: n
            },
            children: (0, z.jsx)(s, {
              ref: a,
              "data-testid": t,
              ...i
            })
          })
        }),
        Jd = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qha"
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        el = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qhb"
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        tl = {
          danger: at.CircleX,
          information: at.Info,
          success: at.CircleCheck,
          warning: at.TriangleAlert
        },
        rl = (0, T.forwardRef)(({
          asChild: e,
          size: t = "XL",
          ...r
        }, n) => {
          const {
            status: o
          } = Qd(), a = e ? L.DX : tl[o], s = (0, F.v6)({
            className: Wd({
              status: o,
              size: t
            }),
            size: t
          }, r);
          return (0, z.jsx)(a, {
            label: "",
            ref: n,
            ...s
          })
        }),
        nl = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qhj foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        ol = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, F.v6)({
              className: "foundry_1m368qhk foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        al = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, T.useRef)(null),
            s = (0, _e.UP)(a, o),
            i = e ? L.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Id.i)(n, a),
            c = (0, F.v6)({
              className: "foundry_1m368qhl foundry_8kowh41 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, d);
          return (0, z.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...c,
            children: t
          })
        }),
        sl = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? L.DX : "div",
            s = (0, F.v6)({
              className: "foundry_1m368qhm"
            }, n);
          return (0, z.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        il = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          className: r,
          ...n
        }, o) => {
          const a = e ? L.DX : "div";
          return (0, z.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, I.clsx)(r, "foundry_1m368qhp foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"),
            ...n
          })
        }),
        dl = (0, T.forwardRef)((e, t) => {
          const {
            background: r
          } = Qd(), n = "none" !== r, o = (0, F.v6)({
            className: Kd({
              hasBackground: n
            })
          }, e);
          return (0, z.jsx)(Hd, {
            size: "SM",
            ref: t,
            ...o
          })
        });
      var ll = r(64634),
        cl = r(7697),
        ul = r(17497);

      function fl(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function pl(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function vl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pl(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = fl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pl(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function hl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var yl = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ml = "foundry_qmpv6yv",
        bl = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = vl(vl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) yl(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hl(e.variantClassNames, e => hl(e, e => e.split(" ")[0]))
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
      const gl = (0, T.createContext)(null);

      function Cl() {
        const e = (0, T.useContext)(gl);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }
      const wl = (0, T.forwardRef)(({
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
              const t = (0, _e.rl)(),
                r = (0, _e.jt)(),
                [n, o] = (0, T.useState)([]),
                a = n.length,
                [s, i] = (0, T.useState)(0),
                [d, l] = (0, ll.A)({
                  containScroll: !1,
                  loop: e,
                  watchDrag: t && a > 1
                }, [(0, cl.A)(), (0, ul.A)()]),
                c = (0, T.useRef)(0),
                u = (0, T.useRef)(!1),
                f = n[s],
                p = (0, T.useCallback)(e => {
                  const t = e.selectedScrollSnap();
                  e.slideNodes().forEach((e, r) => {
                    e.style.visibility = r === t ? "visible" : "hidden"
                  }), i(t), u.current = !0
                }, [l]),
                v = (0, T.useCallback)(e => {
                  c.current = .94 * e.scrollSnapList().length
                }, []),
                h = (0, T.useCallback)((e, t) => {
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
              return (0, T.useEffect)(() => {
                l && (v(l), h(l), l.on("reInit", v).on("reInit", h).on("scroll", h).on("slideFocus", h))
              }, [l, h]), (0, T.useEffect)(() => {
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
          (0, T.useEffect)(() => {
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
            h = (0, F.v6)({
              className: bl(c)
            }, v, i),
            y = e ? L.DX : "div";
          return (0, z.jsx)(gl.Provider, {
            value: l,
            children: (0, z.jsx)(y, {
              ref: d,
              "data-testid": r,
              "data-initialized": u,
              ...h,
              children: t
            })
          })
        }),
        xl = {
          danger: "CircleX",
          information: "Info",
          success: "CircleCheck",
          warning: "TriangleAlert"
        },
        _l = (0, T.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            currentAlert: n
          } = Cl();
          if (!e && !n || !n?.status) return null;
          const o = e || xl[n.status],
            a = at[o],
            s = (0, F.v6)({
              className: "foundry_qmpv6yp"
            }, t);
          return (0, z.jsx)(a, {
            label: "",
            ref: r,
            size: "MD",
            "data-icon": !0,
            ...s
          })
        }),
        jl = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, F.v6)({
              className: "foundry_qmpv6yq foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...a
          })
        }),
        Ol = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          align: r = "left",
          status: n,
          background: o,
          ...a
        }, s) => {
          const i = e ? L.DX : "div",
            d = (0, F.v6)({
              className: "foundry_qmpv6yo"
            }, a);
          return (0, z.jsx)(i, {
            ref: s,
            "data-testid": t,
            ...d
          })
        }),
        Rl = (0, T.forwardRef)(({
          testId: e,
          children: t,
          ...r
        }, n) => {
          const {
            setAlerts: o,
            emblaRef: a,
            emblaApi: s
          } = Cl(), i = (0, F.v6)({
            className: "foundry_qmpv6ym"
          }, r), d = (0, _e.UP)(a, n), l = T.Children.map(t, e => {
            const t = e;
            if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
            return {
              status: t.props.status,
              background: t.props.background,
              align: t.props.align
            }
          });
          return (0, T.useEffect)(() => {
            l && o(l)
          }, []), s?.on("slidesChanged", () => {
            l && o(l)
          }), (0, z.jsx)("div", {
            ref: d,
            "data-testid": e,
            ...i,
            children: (0, z.jsx)("div", {
              className: "foundry_qmpv6yn",
              children: t
            })
          })
        }),
        Pl = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, T.useRef)(null),
            s = (0, _e.UP)(a, o),
            i = e ? L.DX : "a",
            {
              linkProps: d,
              isPressed: l
            } = (0, Id.i)(n, a),
            c = (0, F.v6)({
              className: "foundry_qmpv6yr foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf foundry_tdsdcdk foundry_1d5mo5m0"
            }, n);
          return (0, z.jsx)(i, {
            "data-pressed": l,
            "data-testid": r,
            ref: s,
            ...d,
            ...c,
            children: t
          })
        }),
        Sl = (0, T.forwardRef)((e, t) => {
          const r = (0, F.v6)({
            className: "foundry_qmpv6ys"
          }, e);
          return (0, z.jsx)(Hd, {
            ref: t,
            "data-close-btn": !0,
            size: "SM",
            ...r
          })
        }),
        Nl = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          children: r,
          ...n
        }, o) => {
          const a = e ? L.DX : "div",
            s = (0, F.v6)({
              className: "foundry_qmpv6yt"
            }, n);
          return (0, z.jsx)(a, {
            ref: o,
            "data-testid": t,
            "data-pagination": !0,
            role: "group",
            ...s,
            children: r
          })
        }),
        Dl = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            nextAlert: n,
            canScrollNext: o
          } = Cl(), a = (0, F.v6)({
            className: ml
          }, t);
          return (0, z.jsx)(D.K, {
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
        zl = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            prevAlert: n,
            canScrollPrev: o
          } = Cl(), a = (0, F.v6)({
            className: ml
          }, t);
          return (0, z.jsx)(D.K, {
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
        Il = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            currentAlertIndex: n,
            numAlerts: o
          } = Cl(), a = (0, F.v6)({
            className: "foundry_qmpv6yu foundry_tdsdcdl foundry_tdsdcd0 foundry_tdsdcdp foundry_tdsdcdt"
          }, t);
          return (0, z.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...a,
            children: [n + 1, "/", o]
          })
        });

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

      function Ll(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kl(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ll(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tl(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ll(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Vl(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var El = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ml = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kl(kl({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) El(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Vl(e.variantClassNames, e => Vl(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Al = Ml({
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
        Hl = Ml({
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
        Bl = Ml({
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
      const Zl = (0, T.createContext)(null);

      function ql() {
        const e = (0, T.useContext)(Zl);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }
      const Fl = (0, T.forwardRef)(({
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
              className: Hl(c)
            }, d),
            f = e ? L.DX : "div";
          return (0, z.jsx)(Zl.Provider, {
            value: c,
            children: (0, z.jsx)(f, {
              ref: l,
              "data-testid": r,
              "aria-disabled": i,
              ...u,
              children: t
            })
          })
        }),
        Xl = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            size: a
          } = ql(), s = e ? L.DX : "div", i = (0, F.v6)({
            className: Bl({
              size: a
            })
          }, n);
          return (0, z.jsx)(s, {
            ref: o,
            "data-testid": r,
            ...i,
            children: t
          })
        }),
        Gl = (0, T.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
            o = (0, F.v6)({
              className: "foundry_oahh5812"
            }, t);
          return (0, z.jsx)(n, {
            ref: r,
            size: "SM",
            ...o
          })
        }),
        Kl = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            background: n,
            isDisabled: o
          } = ql(), a = (0, F.v6)({
            className: Al({
              background: n
            })
          }, t);
          return (0, z.jsx)(D.K, {
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
      var Wl = "ToastProvider",
        [Ul, Yl, Ql] = (0, pr.N)("Toast"),
        [$l, Jl] = (0, ft.A)("Toast", [Ql]),
        [ec, tc] = $l(Wl),
        rc = e => {
          const {
            __scopeToast: t,
            label: r = "Notification",
            duration: n = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: a = 50,
            announcerContainer: s,
            children: i
          } = e, [d, l] = T.useState(null), [c, u] = T.useState(0), f = T.useRef(!1), p = T.useRef(!1);
          return r.trim() || console.error(`Invalid prop \`label\` supplied to \`${Wl}\`. Expected non-empty \`string\`.`), (0, z.jsx)(Ul.Provider, {
            scope: t,
            children: (0, z.jsx)(ec, {
              scope: t,
              label: r,
              duration: n,
              swipeDirection: o,
              swipeThreshold: a,
              toastCount: c,
              viewport: d,
              onViewportChange: l,
              onToastAdd: T.useCallback(() => u(e => e + 1), []),
              onToastRemove: T.useCallback(() => u(e => e - 1), []),
              isFocusedToastEscapeKeyDownRef: f,
              isClosePausedRef: p,
              announcerContainer: s,
              children: i
            })
          })
        };
      rc.displayName = Wl;
      var nc = "ToastViewport",
        oc = ["F8"],
        ac = "toast.viewportPause",
        sc = "toast.viewportResume",
        ic = T.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            hotkey: n = oc,
            label: o = "Notifications ({hotkey})",
            ...a
          } = e, s = tc(nc, r), i = Yl(r), d = T.useRef(null), l = T.useRef(null), c = T.useRef(null), u = T.useRef(null), f = (0, ut.s)(t, u, s.onViewportChange), p = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
          T.useEffect(() => {
            const e = e => {
              0 !== n.length && n.every(t => e[t] || e.code === t) && u.current?.focus()
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
          }, [n]), T.useEffect(() => {
            const e = d.current,
              t = u.current;
            if (v && e && t) {
              const r = () => {
                  if (!s.isClosePausedRef.current) {
                    const e = new CustomEvent(ac);
                    t.dispatchEvent(e), s.isClosePausedRef.current = !0
                  }
                },
                n = () => {
                  if (s.isClosePausedRef.current) {
                    const e = new CustomEvent(sc);
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
          const h = T.useCallback(({
            tabbingDirection: e
          }) => {
            const t = i().map(t => {
              const r = t.ref.current,
                n = [r, ...Oc(r)];
              return "forwards" === e ? n : n.reverse()
            });
            return ("forwards" === e ? t.reverse() : t).flat()
          }, [i]);
          return T.useEffect(() => {
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
                  Rc(o.slice(a + 1)) ? t.preventDefault() : n ? l.current?.focus() : c.current?.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }
          }, [i, h]), (0, z.jsxs)(pt.lg, {
            ref: d,
            role: "region",
            "aria-label": o.replace("{hotkey}", p),
            tabIndex: -1,
            style: {
              pointerEvents: v ? void 0 : "none"
            },
            children: [v && (0, z.jsx)(lc, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                Rc(h({
                  tabbingDirection: "forwards"
                }))
              }
            }), (0, z.jsx)(Ul.Slot, {
              scope: r,
              children: (0, z.jsx)(bt.sG.ol, {
                tabIndex: -1,
                ...a,
                ref: f
              })
            }), v && (0, z.jsx)(lc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                Rc(h({
                  tabbingDirection: "backwards"
                }))
              }
            })]
          })
        });
      ic.displayName = nc;
      var dc = "ToastFocusProxy",
        lc = T.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            onFocusFromOutsideViewport: n,
            ...o
          } = e, a = tc(dc, r);
          return (0, z.jsx)(wt.s6, {
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
      lc.displayName = dc;
      var cc = "Toast",
        uc = T.forwardRef((e, t) => {
          const {
            forceMount: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            ...s
          } = e, [i, d] = (0, Ct.i)({
            prop: n,
            defaultProp: o ?? !0,
            onChange: a,
            caller: cc
          });
          return (0, z.jsx)(mt.C, {
            present: r || i,
            children: (0, z.jsx)(vc, {
              open: i,
              ...s,
              ref: t,
              onClose: () => d(!1),
              onPause: (0, Tn.c)(e.onPause),
              onResume: (0, Tn.c)(e.onResume),
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
      uc.displayName = cc;
      var [fc, pc] = $l(cc, {
        onClose() {}
      }), vc = T.forwardRef((e, t) => {
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
        } = e, h = tc(cc, r), [y, m] = T.useState(null), b = (0, ut.s)(t, m), g = T.useRef(null), C = T.useRef(null), w = o || h.duration, x = T.useRef(0), _ = T.useRef(w), j = T.useRef(0), {
          onToastAdd: O,
          onToastRemove: R
        } = h, P = (0, Tn.c)(() => {
          const e = y?.contains(document.activeElement);
          e && h.viewport?.focus(), s()
        }), S = T.useCallback(e => {
          e && e !== 1 / 0 && (window.clearTimeout(j.current), x.current = (new Date).getTime(), j.current = window.setTimeout(P, e))
        }, [P]);
        T.useEffect(() => {
          const e = h.viewport;
          if (e) {
            const t = () => {
                S(_.current), l?.()
              },
              r = () => {
                const e = (new Date).getTime() - x.current;
                _.current = _.current - e, window.clearTimeout(j.current), d?.()
              };
            return e.addEventListener(ac, r), e.addEventListener(sc, t), () => {
              e.removeEventListener(ac, r), e.removeEventListener(sc, t)
            }
          }
        }, [h.viewport, w, d, l, S]), T.useEffect(() => {
          a && !h.isClosePausedRef.current && S(w)
        }, [a, w, h.isClosePausedRef, S]), T.useEffect(() => () => {
          window.clearTimeout(j.current)
        }, []), T.useEffect(() => (O(), () => R()), [O, R]);
        const N = T.useMemo(() => y ? xc(y) : null, [y]);
        return h.viewport ? (0, z.jsxs)(z.Fragment, {
          children: [N && (0, z.jsx)(hc, {
            __scopeToast: r,
            role: "status",
            "aria-live": "foreground" === n ? "assertive" : "polite",
            children: N
          }), (0, z.jsx)(fc, {
            scope: r,
            onClose: P,
            children: xo.createPortal((0, z.jsx)(Ul.ItemSlot, {
              scope: r,
              children: (0, z.jsx)(pt.bL, {
                asChild: !0,
                onEscapeKeyDown: (0, ct.mK)(i, () => {
                  h.isFocusedToastEscapeKeyDownRef.current || P(), h.isFocusedToastEscapeKeyDownRef.current = !1
                }),
                children: (0, z.jsx)(bt.sG.li, {
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
                      n = Boolean(C.current),
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
                    n ? (C.current = l, _c("toast.swipeMove", u, f, {
                      discrete: !1
                    })) : jc(l, h.swipeDirection, d) ? (C.current = l, _c("toast.swipeStart", c, f, {
                      discrete: !1
                    }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > d || Math.abs(r) > d) && (g.current = null)
                  }),
                  onPointerUp: (0, ct.mK)(e.onPointerUp, e => {
                    const t = C.current,
                      r = e.target;
                    if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), C.current = null, g.current = null, t) {
                      const r = e.currentTarget,
                        n = {
                          originalEvent: e,
                          delta: t
                        };
                      jc(t, h.swipeDirection, h.swipeThreshold) ? _c("toast.swipeEnd", p, n, {
                        discrete: !0
                      }) : _c("toast.swipeCancel", f, n, {
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
      }), hc = e => {
        const {
          __scopeToast: t,
          children: r,
          ...n
        } = e, o = tc(cc, t), [a, s] = T.useState(!1), [i, d] = T.useState(!1);
        return function(e = () => {}) {
          const t = (0, Tn.c)(e);
          (0, Ln.N)(() => {
            let e = 0,
              r = 0;
            return e = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
              window.cancelAnimationFrame(e), window.cancelAnimationFrame(r)
            }
          }, [t])
        }(() => s(!0)), T.useEffect(() => {
          const e = window.setTimeout(() => d(!0), 1e3);
          return () => window.clearTimeout(e)
        }, []), i ? null : (0, z.jsx)(yt.Z, {
          asChild: !0,
          container: o.announcerContainer || void 0,
          children: (0, z.jsx)(wt.s6, {
            ...n,
            children: a && (0, z.jsxs)(z.Fragment, {
              children: [o.label, " ", r]
            })
          })
        })
      };
      T.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, z.jsx)(bt.sG.div, {
          ...n,
          ref: t
        })
      }).displayName = "ToastTitle";
      var yc = T.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          ...n
        } = e;
        return (0, z.jsx)(bt.sG.div, {
          ...n,
          ref: t
        })
      });
      yc.displayName = "ToastDescription";
      var mc = "ToastAction",
        bc = T.forwardRef((e, t) => {
          const {
            altText: r,
            ...n
          } = e;
          return r.trim() ? (0, z.jsx)(wc, {
            altText: r,
            asChild: !0,
            children: (0, z.jsx)(Cc, {
              ...n,
              ref: t
            })
          }) : (console.error(`Invalid prop \`altText\` supplied to \`${mc}\`. Expected non-empty \`string\`.`), null)
        });
      bc.displayName = mc;
      var gc = "ToastClose",
        Cc = T.forwardRef((e, t) => {
          const {
            __scopeToast: r,
            ...n
          } = e, o = pc(gc, r);
          return (0, z.jsx)(wc, {
            asChild: !0,
            children: (0, z.jsx)(bt.sG.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0, ct.mK)(e.onClick, o.onClose)
            })
          })
        });
      Cc.displayName = gc;
      var wc = T.forwardRef((e, t) => {
        const {
          __scopeToast: r,
          altText: n,
          ...o
        } = e;
        return (0, z.jsx)(bt.sG.div, {
          "data-radix-toast-announce-exclude": "",
          "data-radix-toast-announce-alt": n || void 0,
          ...o,
          ref: t
        })
      });

      function xc(e) {
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
              } else t.push(...xc(e))
          }
        }), t
      }

      function _c(e, t, r, {
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
        }), n ? (0, bt.hO)(o, a) : o.dispatchEvent(a)
      }
      var jc = (e, t, r = 0) => {
        const n = Math.abs(e.x),
          o = Math.abs(e.y),
          a = n > o;
        return "left" === t || "right" === t ? a && n > r : !a && o > r
      };

      function Oc(e) {
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

      function Rc(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }
      var Pc = rc,
        Sc = ic,
        Nc = uc,
        Dc = yc,
        zc = bc,
        Ic = Cc;

      function Tc(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Lc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function kc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lc(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Tc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lc(Object(r)).forEach(function(t) {
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
      var Ec = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Mc = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = kc(kc({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Ec(l, n, e.defaultVariants) && (r += " " + c);
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
        },
        Ac = Mc({
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
        Hc = Mc({
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
        Bc = Mc({
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
      const Zc = ({
          testId: e,
          ...t
        }) => (0, z.jsx)(Pc, {
          "data-testid": e,
          ...t
        }),
        qc = (0, T.forwardRef)(({
          children: e,
          testId: t,
          position: r = "bottomRight",
          ...n
        }, o) => {
          const a = (0, F.v6)({
            className: Bc({
              position: r
            })
          }, n);
          return (0, z.jsx)(Sc, {
            ref: o,
            "data-testid": t,
            ...a,
            children: e
          })
        }),
        Fc = (0, T.createContext)(null);

      function Xc() {
        const e = (0, T.useContext)(Fc);
        if (!e) throw Error("useToastContext can only be used in a <Toast.Root />");
        return e
      }
      const Gc = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          appearance: n = "success",
          ...o
        }, a) => {
          const s = e ? L.DX : Nc,
            i = (0, F.v6)({
              className: Hc({
                appearance: n
              })
            }, o);
          return (0, z.jsx)(Fc.Provider, {
            value: {
              appearance: n
            },
            children: (0, z.jsx)(s, {
              ref: a,
              "data-testid": r,
              ...i,
              children: t
            })
          })
        }),
        Kc = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = e ? L.DX : Dc,
            s = (0, F.v6)({
              className: "foundry_dnh2nzj foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdf"
            }, n);
          return (0, z.jsx)(a, {
            ref: o,
            "data-testid": r,
            ...s,
            children: t
          })
        }),
        Wc = {
          danger: at.CircleX,
          information: at.Info,
          success: at.CircleCheck,
          warning: at.TriangleAlert,
          avocado: at.CircleCheck
        },
        Uc = (0, T.forwardRef)(({
          asChild: e,
          ...t
        }, r) => {
          const {
            appearance: n
          } = Xc(), o = e ? L.DX : Wc[n], a = (0, F.v6)({
            className: Ac({
              appearance: n
            }),
            size: "LG"
          }, t);
          return (0, z.jsx)(o, {
            ref: r,
            ...a
          })
        }),
        Yc = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
            className: "foundry_dnh2nzq",
            asChild: !0
          }, n);
          return (0, z.jsx)(zc, {
            ref: o,
            "data-testid": r,
            ...a,
            children: e ? (0, z.jsx)(L.DX, {
              children: t
            }) : (0, z.jsx)(N.$, {
              size: "MD",
              appearance: "link",
              children: t
            })
          })
        }),
        Qc = (0, T.forwardRef)(({
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
          return (0, z.jsx)(Ic, {
            ref: a,
            "data-testid": r,
            ...s,
            children: e ? (0, z.jsx)(L.DX, {
              children: t
            }) : (0, z.jsx)(Hd, {
              size: "SM",
              label: n
            })
          })
        });
      var $c = r(52640);

      function Jc(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function eu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function tu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Jc(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function ru(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var nu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        ou = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tu(tu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) nu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ru(e.variantClassNames, e => ru(e, e => e.split(" ")[0]))
            }
          }, t
        },
        au = ou({
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
        su = ou({
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
        iu = ou({
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

      function du() {
        const e = (0, T.useContext)(lu);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const lu = (0, T.createContext)(null),
        cu = (0, T.forwardRef)(({
          children: e,
          testId: t,
          asChild: r,
          size: n = "MD",
          ...o
        }, a) => {
          const s = (0, F.v6)({
              className: iu({
                size: n
              })
            }, o),
            i = r ? L.DX : "ol";
          return (0, z.jsx)(lu.Provider, {
            value: {
              size: n
            },
            children: (0, z.jsx)(i, {
              ref: a,
              "data-testid": t,
              ...s,
              children: e
            })
          })
        }),
        uu = (0, T.forwardRef)(({
          isCurrent: e,
          children: t,
          asChild: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, T.useRef)(null),
            {
              size: i
            } = du(),
            {
              itemProps: d
            } = (0, $c.I)({
              isCurrent: e,
              children: t
            }, s),
            l = r ? L.DX : "a",
            c = (0, F.v6)({
              className: (0, I.clsx)(au({
                size: i
              }), e && "foundry_m1icrx9"),
              "data-testid": n
            }, d, o);
          return (0, z.jsx)("li", {
            className: su({
              size: i
            }),
            ref: a,
            children: (0, z.jsx)(l, {
              ref: s,
              ...c,
              children: t
            })
          })
        }),
        fu = (0, T.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e];
          return (0, z.jsx)(n, {
            ref: r,
            size: "LG",
            ...t
          })
        }),
        pu = (0, T.forwardRef)(({
          children: e,
          testId: t,
          defaultOpen: r = !1,
          label: n,
          ...o
        }, a) => {
          const [s, i] = (0, T.useState)(r), {
            size: d
          } = du(), l = (0, F.v6)({
            className: su({
              size: d
            }),
            "data-testid": t
          }, o);
          return (0, z.jsx)("li", {
            ref: a,
            ...l,
            children: (0, z.jsxs)(Bo, {
              open: s,
              onOpenChange: () => i(!s),
              children: [(0, z.jsx)(qo, {
                className: "foundry_m1icrxa foundry_1d5mo5m0 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdj",
                "aria-label": n,
                children: "..."
              }), (0, z.jsx)(Yo, {
                children: (0, z.jsx)($o, {
                  position: "popper",
                  sideOffset: 8,
                  align: "start",
                  className: "foundry_m1icrxb",
                  children: (0, z.jsx)(ca, {
                    className: "foundry_m1icrxc",
                    children: e
                  })
                })
              })]
            })
          })
        }),
        vu = (0, T.forwardRef)(({
          children: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = t ? L.DX : ba,
            s = (0, F.v6)({
              className: "foundry_m1icrxd foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcdi",
              "data-testid": r
            }, n);
          return (0, z.jsx)(a, {
            ref: o,
            ...s,
            children: e
          })
        });

      function hu(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function yu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function mu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = hu(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function bu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var gu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = mu(mu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) gu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return bu(e.variantClassNames, e => bu(e, e => e.split(" ")[0]))
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
      const wu = (0, T.createContext)(null);

      function xu() {
        const e = (0, T.useContext)(wu);
        if (!e) throw Error("useBadgeContext can only be used in a <Badge.Root />");
        return e
      }
      const _u = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          appearance: r = "primary",
          size: n = "SM",
          type: o = "text",
          ...a
        }, s) => {
          const i = e ? L.DX : "div",
            d = (0, F.v6)({
              className: Cu({
                appearance: r,
                type: o,
                size: n
              })
            }, a);
          return (0, z.jsx)(wu.Provider, {
            value: {
              type: o
            },
            children: (0, z.jsx)(i, {
              ref: s,
              "data-testid": t,
              ...d
            })
          })
        }),
        ju = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = e ? L.DX : "div",
            a = (0, F.v6)({
              className: "foundry_18omk9t9",
              "data-testid": t
            }, r);
          return (0, z.jsx)(o, {
            ref: n,
            ...a
          })
        }),
        Ou = (0, T.forwardRef)(({
          icon: e,
          iconElement: t,
          label: r,
          ...n
        }, o) => {
          const a = t || (e ? at[e] : null),
            s = (0, F.v6)({
              size: "SM",
              className: "foundry_18omk9t0",
              label: r || ""
            }, n);
          return a && (0, z.jsx)(a, {
            ref: o,
            ...s
          })
        }),
        Ru = () => {
          const e = (0, _e.Ub)(F.fi.mobile);
          return t => e ? {
            transform: `translate(0,${100-t}%)`
          } : {
            opacity: t / 100,
            transform: `scale(${.95+t/100*.05})`
          }
        },
        Pu = () => e => ({
          backgroundColor: `rgba(0,0,0,${Math.max(0,e)/100*.85})`
        });

      function Su(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Nu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Du(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Nu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Su(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function zu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Iu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Tu = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Du(Du({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Iu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zu(e.variantClassNames, e => zu(e, e => e.split(" ")[0]))
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
      const Lu = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, t);
          return (0, z.jsx)(mo, {
            ref: r,
            ...n
          })
        }),
        ku = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, t);
          return (0, z.jsx)(bo, {
            ref: r,
            ...n
          })
        }),
        Vu = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, t);
          return (0, z.jsx)(go, {
            ref: r,
            ...n
          })
        }),
        Eu = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, _e.rl)(),
            o = (0, F.v6)({
              "data-testid": e,
              className: Tu({
                isTouchDevice: n
              })
            }, t);
          return (0, z.jsx)(Co, {
            ref: r,
            ...o
          })
        }),
        Mu = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, z.jsx)(wo, {
            ref: r,
            ...n
          })
        });

      function Au(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
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

      function Bu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hu(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Au(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hu(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Zu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Fu = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Bu(Bu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) qu(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zu(e.variantClassNames, e => Zu(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Xu = Fu({
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
        Gu = Fu({
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
      const Ku = (0, T.createContext)({
          isControlled: !1,
          openImmediately: !1,
          setIsOpen: () => {},
          contentId: "",
          descriptionId: "",
          triggerRef: (0, T.createRef)(),
          dialogSpringRef: (0, lt.$9)(),
          overlaySpringRef: (0, lt.$9)()
        }),
        Wu = ({
          defaultOpen: e,
          onOpenChange: t,
          isOpen: r,
          onOpenTransitionStart: n,
          onOpenTransitionComplete: o,
          onCloseTransitionStart: a,
          onCloseTransitionComplete: s,
          ...i
        }) => {
          const [d, l] = (0, _e.ic)({
            prop: r,
            defaultProp: e ?? !1,
            onChange: t
          }), c = (0, _e.ZC)(d);
          return (0, z.jsx)(Ku.Provider, {
            value: {
              isOpen: d,
              isControlled: void 0 !== r,
              openImmediately: !(void 0 !== c || !e),
              setIsOpen: l,
              onOpenTransitionStart: n,
              onOpenTransitionComplete: o,
              onCloseTransitionStart: a,
              onCloseTransitionComplete: s,
              contentId: (0, T.useId)(),
              descriptionId: (0, T.useId)(),
              triggerRef: (0, T.useRef)(null),
              dialogSpringRef: (0, lt.U2)(),
              overlaySpringRef: (0, lt.U2)()
            },
            children: (0, z.jsx)(Uu, {
              ...i
            })
          })
        },
        Uu = e => {
          const {
            isOpen: t,
            setIsOpen: r
          } = (0, T.useContext)(Ku), n = (0, F.v6)({
            open: t,
            onOpenChange: r
          }, e);
          return (0, z.jsx)(Yr.bL, {
            ...n
          })
        },
        Yu = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            contentId: n,
            triggerRef: o
          } = (0, T.useContext)(Ku), a = (0, _e.UP)(o, r), s = (0, F.v6)({
            "data-testid": e,
            className: "foundry_8kowh41",
            type: "button",
            "aria-controls": n
          }, t);
          return (0, z.jsx)(Yr.l9, {
            ...s,
            ref: a
          })
        }),
        Qu = e => (0, z.jsx)(Yr.ZL, {
          forceMount: !0,
          ...e
        }),
        $u = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            isOpen: n,
            overlaySpringRef: o,
            openImmediately: a
          } = (0, T.useContext)(Ku), s = Pu(), i = (0, _e.jt)(), d = (0, lt.pn)(n, {
            ref: o,
            delay: n ? 0 : 100,
            from: s(0),
            enter: s(100),
            leave: s(0),
            config: lt.$W.stiff,
            immediate: i || a
          }), l = (0, F.v6)({
            "data-testid": e,
            className: "foundry_xov33n1"
          }, t), c = (0, lt.CS)(Yr.hJ);
          return (0, T.useEffect)(() => {
            o.start()
          }, [n]), d((e, t) => t ? (0, z.jsx)(c, {
            forceMount: !0,
            ref: r,
            ...l,
            style: e
          }) : null)
        }),
        Ju = (0, T.forwardRef)(({
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
          } = (0, T.useContext)(Ku), m = (0, _e.rl)(), b = (0, _e.jt)(), g = (0, T.useRef)(null), C = Ru(), {
            bindDrag: w
          } = function({
            dialogRef: e,
            dialogSpringRef: t,
            overlaySpringRef: r,
            onCloseTransitionStart: n,
            onCloseTransitionComplete: o
          }) {
            const a = Pu(),
              s = Ru(),
              i = (0, T.useRef)();
            return {
              bindDrag: (0, Re.i3)(({
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
          }), x = (0, lt.pn)(s, {
            from: C(0),
            enter: C(100),
            leave: C(0),
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
          (0, T.useEffect)(() => {
            h.start()
          }, [s]);
          const _ = (0, _e.UP)(g, a),
            j = m && !b && !n && w(),
            O = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33nd",
              onCloseAutoFocus: e => {
                r?.(e), e.defaultPrevented || c.current?.focus()
              },
              id: l
            }, j || {}, o),
            R = (0, lt.CS)(Yr.UC);
          return x((t, r) => r ? (0, z.jsx)("div", {
            className: "foundry_xov33n3",
            children: (0, z.jsx)(R, {
              forceMount: !0,
              ref: _,
              ...O,
              style: t,
              children: e
            })
          }) : null)
        }),
        ef = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_xov33n5 foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd9"
          }, t);
          return (0, z.jsx)(Yr.hE, {
            ref: r,
            ...n
          })
        }),
        tf = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, z.jsx)(Yr.VY, {
            ref: r,
            ...n
          })
        }),
        rf = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_xov33nh",
            "data-testid": t
          }, r);
          return (0, z.jsxs)(Lu, {
            ref: n,
            ...o,
            children: [(0, z.jsx)(ku, {
              className: "foundry_xov33ni",
              children: e
            }), (0, z.jsx)(Vu, {
              className: "foundry_xov33nj",
              orientation: "vertical",
              children: (0, z.jsx)(Eu, {
                className: "foundry_xov33nk"
              })
            })]
          })
        }),
        nf = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33ne"
            }, r),
            a = e ? L.DX : "div";
          return (0, z.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        of = (0, T.forwardRef)(({
          align: e,
          asChild: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r,
              className: Xu({
                align: e
              })
            }, n),
            s = t ? L.DX : "header";
          return (0, z.jsx)(s, {
            ref: o,
            ...a
          })
        }),
        af = (0, T.forwardRef)(({
          testId: e,
          appearance: t = "sentence",
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": e,
            className: Gu({
              appearance: t
            })
          }, r);
          return (0, z.jsx)(Yr.hE, {
            ref: n,
            ...o
          })
        }),
        sf = (0, T.forwardRef)((e, t) => {
          const r = (0, F.v6)({
            className: "foundry_xov33n4"
          }, e);
          return (0, z.jsx)(D.K, {
            ref: t,
            ...r,
            appearance: "ghost",
            size: "LG"
          })
        }),
        df = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": e,
              className: "foundry_xov33n9"
            }, r),
            a = t ? (0, z.jsx)(L.DX, {
              ref: n,
              ...o
            }) : (0, z.jsx)(Hd, {
              ref: n,
              ...o,
              size: "LG"
            });
          return (0, z.jsx)(Yr.bm, {
            asChild: !0,
            children: a
          })
        }),
        lf = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33nf"
            }, r),
            a = e ? L.DX : "div";
          return (0, z.jsx)(a, {
            ref: n,
            ...o
          })
        }),
        cf = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": t,
              className: "foundry_xov33ng"
            }, r),
            a = e ? L.DX : "footer";
          return (0, z.jsx)(a, {
            ref: n,
            ...o
          })
        });
      var uf = "Avatar",
        [ff, pf] = (0, ft.A)(uf),
        vf = [0, () => {}],
        [hf, yf] = ff(uf),
        mf = T.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            ...n
          } = e, [o, a] = T.useState("idle"), [s, i] = function() {
            let e = vf; {
              e = T.useState(0);
              const [t] = e, r = T.useRef(!1);
              T.useEffect(() => {
                t > 1 && !r.current && (r.current = !0, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))
              }, [t])
            }
            return e
          }();
          return (0, z.jsx)(hf, {
            scope: r,
            imageLoadingStatus: o,
            setImageLoadingStatus: a,
            imageCount: s,
            setImageCount: i,
            children: (0, z.jsx)(bt.sG.span, {
              ...n,
              ref: t
            })
          })
        });
      mf.displayName = uf;
      var bf = "AvatarImage",
        gf = T.forwardRef((e, t) => {
          const {
            __scopeAvatar: r,
            src: n,
            onLoadingStatusChange: o,
            ...a
          } = e, s = yf(bf, r);
          var i;
          i = s.setImageCount, T.useEffect(() => (i(e => e + 1), () => {
            i(e => e - 1)
          }), [i]);
          const d = function(e, {
              loadingStatus: t,
              setLoadingStatus: r,
              referrerPolicy: n,
              crossOrigin: o
            }) {
              return (0, Ln.N)(() => {
                if (!e) return void r("error");
                const t = new window.Image,
                  a = e => {
                    const t = e.currentTarget;
                    r(wf(t))
                  },
                  s = () => r("error");
                return t.addEventListener("load", a), t.addEventListener("error", s), n && (t.referrerPolicy = n), t.crossOrigin = o ?? null, t.src = e, r(wf(t)), () => {
                  t.removeEventListener("load", a), t.removeEventListener("error", s), r("idle")
                }
              }, [e, o, n, r]), t
            }(n, {
              referrerPolicy: a.referrerPolicy,
              crossOrigin: a.crossOrigin,
              loadingStatus: s.imageLoadingStatus,
              setLoadingStatus: s.setImageLoadingStatus
            }),
            l = (0, Tn.c)(e => {
              o?.(e)
            }),
            c = T.useRef(d);
          return (0, Ln.N)(() => {
            const e = c.current;
            c.current = d, d !== e && l(d)
          }, [d, l]), "loaded" === d ? (0, z.jsx)(bt.sG.img, {
            ...a,
            ref: t,
            src: n
          }) : null
        });
      gf.displayName = bf;
      var Cf = "AvatarFallback";

      function wf(e) {
        return e.complete ? e.naturalWidth > 0 ? "loaded" : "error" : "loading"
      }

      function xf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function _f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function jf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _f(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = xf(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _f(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Of(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      T.forwardRef((e, t) => {
        const {
          __scopeAvatar: r,
          delayMs: n,
          ...o
        } = e, a = yf(Cf, r), [s, i] = T.useState(void 0 === n);
        return T.useEffect(() => {
          if (void 0 !== n) {
            const e = window.setTimeout(() => i(!0), n);
            return () => window.clearTimeout(e)
          }
        }, [n]), s && "loaded" !== a.imageLoadingStatus ? (0, z.jsx)(bt.sG.span, {
          ...o,
          ref: t
        }) : null
      }).displayName = Cf;
      var Rf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = jf(jf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Rf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Of(e.variantClassNames, e => Of(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Sf = Pf({
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
        Nf = "var(--foundry_v912w22)",
        Df = "var(--foundry_v912w23)",
        zf = Pf({
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
        If = Pf({
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
        Tf = "var(--foundry_v912w21)",
        Lf = "var(--foundry_v912w20)",
        kf = Pf({
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
      const Vf = (0, T.createContext)(null);

      function Ef() {
        const e = (0, T.useContext)(Vf);
        if (!e) throw Error("useAvatarContext can only be used in a <Avatar.Root />");
        return e
      }
      const Mf = (0, T.forwardRef)(({
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
            className: Sf({
              isDisabled: a
            }),
            asChild: e
          }, s);
          return (0, z.jsx)(Vf.Provider, {
            value: {
              size: n,
              status: o,
              isDisabled: a
            },
            children: (0, z.jsx)(mf, {
              ref: i,
              ...d,
              children: t
            })
          })
        }),
        Af = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          src: r,
          ...n
        }, o) => {
          const {
            size: a,
            isDisabled: s
          } = Ef(), [i, d] = (0, T.useState)(!1);
          (0, T.useEffect)(() => {
            d(!1)
          }, [r]);
          const l = i || !r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAAAHjElEQVR4AeyQQQkAQAyA7N94jHEXw49aQOTJFMDJcM+1A/6BAlaGW1f/QAcKGBlmXfEPFFDAfNrJgFN2HgjD/f//62NRoREjoqqUigojIqgD953pbvdb9t6mOM+kkz1Jd9+n2T21bZQd05f1/ezPv+ut0eFtTUM/uVTwuQ606w3oNwcE9uaS9mVdODako92pvbuVvv/sX6ngnG8VTqCdnRN/I5cqauepgr2x7+0CuL2QdfYvuLDm/aeWepf2Eyh7cWEcpy+MwNvBx7rnXxMAadCoT8I5zd7OZf/FE/iZ3ahM/otDkInGUrMeVrtAaWYfSWKCRmH+RHfIz+paSzNdqc1FPki017izgsp4WcUe8Su8tlX7CVS2SAJeL0WT5RItdfFrLbe4IbAOI9K8xvyf4/BxyWsaS74nkBspdbKIUMhN8/kvSADBzz3ykp/b6XJpLXJ6ANq4vr+ZOHsKmi+dWOJZlJuqy81YIolHI881P+FS8+x1i2SiVDKjWmn/CjajEXrOU+FznfEyOCJo6W7C3q8ILINmy0O6pZzrzHXbg8STl0YMAb4hwFfkrK0EqwJBWtRFJaPq4pw+PqF0pZ2O80UBtOMnoBA5VTrgnHIercSrQsiHFHpTddxGZoNkjwK+cH7vpFSdCxKOyy0q0Ey7wGo0W3Omz4QaB+/UzjsXG9LvCyTO40DkSHB24XTCKfNgSPHOjnr3DbrEV8VyZWedd0+HrdSSn9S0PAZ6Yt1WEuy4vbp0wUvBIBxI8+M0jUoIwT4e1pPTsnYp6SbdlaIMtGgkG8DDDv0b4zzyD2jJanynLk9gw+AtT711wDqrM51gbbBEdnCGIuP2ezQIbAmVySBbBJ7Yo1tZJbUKa2bcfJduuyKJABtJf6HR71c4A5oZ8ZE5bjfp0vbvgoE49PbJMBzJ2k+NoR8W3gBaulXd1kJaHvYE2YfEh9PQwyBu63aTS4GI2tL40BiJHowxuKQDddFmQpS779LFK/BQKyNN0KAxhGOQNT3CFVFZktwe45pQsZEubhcVpffDC0P6U2dGiwsdG4pZtpdyWhhTU3WxgW19nDF9kGdU8PbZmLfALAI4L1yxmUuBFWOb/3uFmH6SJZHXU/a9GQzWRQ0CgpgtU7PAegkE6CHZRtuCZF2WaZtEQFE1KQx+jBBpoovrRUmW6TUFrTdnvGbNjw+BY2f7054ZqMbOAlE47/9EAQKCIAhIQBEZhkEGhLD0Ke6M2bul291asPz7w+03xhjdeE5OyrZQMu8GBruPE1D83lED+dxY+nZdilLSbgbkcB6+GcC3DFyaSzcDeBHh8/HuDfB19i37mH7MQDvaW/F7EHapwDp10rR8T18PMdBnLs2EGM431cYG2jGsSzxVtEL7aIB9F+/rrDMaii/6ubOOwe5LG6E7qvZpILZDp3qvVf01Gmmsau1SbJQ7qgz7RwaME2gHu3Ajnft2dBn7Wjfg+ei2nK9vu8eb9NfbjxNQkT1c8eXukfBmTg00bm/RxUtL7vbBYQJDLqkbOKHjozl4T8fTwe2oRtI/kk/txwwc3gdpoffcuJ3wRwNe05EMvC0XvhQfWoeHBriNqll/I/QttWnxxwSipANm74vOX29ug90XHtAaxpyvfwZm5HvcNR6Nid7YuNolvcej8dXpwdI/YRkFoPsdQmtyCPxhlTk4F/5ayLCbJKJyj3elKlSZAGtFfrL/MIF69kof3OfD0StOD2c2X2XXyi1YuTBGjs26bbXxaQL8DWqPsN6pn5YOis7FEmNM+usaGhOLgRwE/fJKaq7U46mBOub2/I/nabeBjv4Dd+jTU5+s5+s6suofrT5j4fp1CXzuqAb4feGWQqNgPHIlldbnr9rECrWG+2ZibefswxomcHtwOdPjeBi9cdTor6Pa0QzArR64iz9hbIB600555IGoobeWanfI/QYmjSis206tktTIwATE0sSBw0ZUpQSdbWhWn1sdsNAkIogiCM64cg1ED2K/maDDAQvV6dLWsjWpqyF2X3GzuXIfflnTCaA+MRJH40+xSkrNNsgQaZzALIjSKm6msI70sk9bV/Q0NICTqAZQ3ddQ+0gN9WYtVB0MWNTwfIGxhQCpEqRCqsrOJELAwZ3zCQCB9Gn1KgV131YLfWdvdjkNmTcghXUzBbByMqu1xuyVoH8/UxkbgEkyVMC8OiDKbt18xmCMB6ph8whYYMACOFcEBciskTGsq01YEYI1NhNsDtTAYIPpBApkyqunfVvNDoj9Wl8DWlNgzLwBRHSbc+vqgRBKKSS6btu8MQnLtIExmfbVbatLJHIo+jnLbDDrZoP4GRook0CpbjUmoGrpde6TEJ0xXgYjlgJzlTGtooQ3P2Ijq3Bymz+nvqylzIKbyQQPosneJMjjBGaJLmP+rANSexmz5FliopJKyXeUlCHllEcsJc9VhpJSyY9WRL4Ma8nziH4s+RPqqowTmJfvx2fO/6b8FwaKSEF65CDHbxhIP0CJOd0TNRdZSQOWlKdLeTypDG6eT+Be8F72H0hgjtcbiC/m9QZ+DezxpfV/SODFvPwVvD6BXwO/BsKLWfbw2np9Ar8JhBfzB4BpyDcLsTESAAAAAElFTkSuQmCC" : r,
            c = (0, F.v6)({
              className: zf({
                isDisabled: s
              }),
              src: l,
              onLoadingStatusChange: e => {
                "error" === e && d(!0)
              },
              asChild: e
            }, n);
          return (0, z.jsx)("span", {
            className: If({
              size: a,
              isDisabled: s,
              isFallback: i
            }),
            "data-testid": t,
            "aria-hidden": !0,
            children: (0, z.jsx)(gf, {
              ref: o,
              ...c
            })
          })
        }),
        Hf = (0, T.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const o = (0, T.useRef)(null),
            {
              size: a,
              status: s,
              isDisabled: i
            } = Ef(),
            d = s || "online",
            l = (0, _e.UP)(o, n),
            c = (0, F.v6)({
              "data-testid": e,
              "aria-hidden": !0,
              className: kf({
                status: d,
                size: a,
                isDisabled: i
              }),
              style: (0, X.DI)({
                [Lf]: t?.online,
                [Tf]: t?.offline,
                [Nf]: t?.away,
                [Df]: t?.busy
              })
            }, r);
          return (0, z.jsx)("span", {
            ref: l,
            ...c
          })
        });

      function Bf(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
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

      function qf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zf(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Bf(o)) in n ? Object.defineProperty(n, o, {
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

      function Ff(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Xf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gf = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qf(qf({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Xf(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ff(e.variantClassNames, e => Ff(e, e => e.split(" ")[0]))
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
      const Kf = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt0"
            }, n),
            s = e ? L.DX : "nav";
          return (0, z.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Wf = (0, T.forwardRef)(({
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
            s = e ? L.DX : "div";
          return (0, z.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        }),
        Uf = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          isActive: r,
          testId: n,
          ...o
        }, a) => {
          const s = (0, T.useRef)(null),
            i = (0, _e.UP)(s, a),
            {
              linkProps: d,
              isPressed: l
            } = (0, Id.i)(o, s),
            c = (0, F.v6)({
              role: "listitem",
              "data-testid": n,
              "data-pressed": l,
              "data-active": r,
              className: (0, I.clsx)(Gf({
                isActive: r
              }))
            }, d),
            u = e ? L.DX : "a";
          return (0, z.jsx)(u, {
            ref: i,
            ...c,
            children: t
          })
        }),
        Yf = (0, T.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt5 foundry_2jlbzt4"
          }, r);
          return (0, z.jsx)(Uf, {
            ref: n,
            ...o,
            children: (0, z.jsx)(at.ChevronLeft, {
              size: "LG",
              label: e
            })
          })
        }),
        Qf = (0, T.forwardRef)(({
          label: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": t,
            className: "foundry_2jlbzt6 foundry_2jlbzt4"
          }, r);
          return (0, z.jsx)(Uf, {
            ref: n,
            ...o,
            children: (0, z.jsx)(at.ChevronRight, {
              size: "LG",
              label: e
            })
          })
        }),
        $f = ({
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
            a = e ? L.DX : "span";
          return (0, z.jsx)(a, {
            ...o,
            children: t || "..."
          })
        },
        Jf = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, F.v6)({
              "data-testid": r,
              className: "foundry_2jlbzt8"
            }, n),
            a = e ? L.DX : "div";
          return (0, z.jsx)(a, {
            ...o,
            children: t
          })
        },
        ep = (0, T.createContext)(null);

      function tp() {
        const e = (0, T.useContext)(ep);
        if (!e) throw Error("useResultsPerPageContext can only be used in a <Pagination.ResultsPerPage />");
        return e
      }
      const rp = ({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }) => {
          const o = (0, T.useId)(),
            a = (0, F.v6)({
              "data-testid": r,
              className: "foundry_2jlbztb"
            }, n),
            s = e ? L.DX : "div";
          return (0, z.jsx)(ep.Provider, {
            value: {
              labelId: o
            },
            children: (0, z.jsx)(s, {
              ...a,
              children: t
            })
          })
        },
        np = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = tp(), s = (0, F.v6)({
            "data-testid": r,
            className: "foundry_2jlbzt9 foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
          }, n), i = e ? L.DX : "label";
          return (0, z.jsx)(i, {
            ref: o,
            id: a,
            ...s,
            children: t
          })
        }),
        op = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          placeholder: r,
          ...n
        }, o) => {
          const {
            labelId: a
          } = tp(), s = (0, F.v6)({
            "aria-labelledby": a,
            className: "foundry_2jlbztc"
          }, n), i = e ? L.DX : Ga;
          return (0, z.jsxs)(i, {
            ...s,
            children: [(0, z.jsxs)(Ya, {
              ref: o,
              children: [(0, z.jsx)(Qa, {
                placeholder: r
              }), (0, z.jsx)($a, {})]
            }), (0, z.jsx)(as, {
              children: (0, z.jsx)(Ka, {
                children: (0, z.jsx)(Ua, {
                  children: t
                })
              })
            })]
          })
        }),
        ap = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r
            }, n),
            s = e ? L.DX : rs;
          return (0, z.jsx)(s, {
            ...a,
            ref: o,
            children: (0, z.jsx)(ns, {
              children: t
            })
          })
        }),
        sp = (0, T.forwardRef)(({
          asChild: e,
          children: t,
          testId: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
              "data-testid": r,
              className: "foundry_2jlbzta foundry_tdsdcdb foundry_tdsdcd0 foundry_tdsdcde foundry_tdsdcdi"
            }, n),
            s = e ? L.DX : "p";
          return (0, z.jsx)(s, {
            ref: o,
            ...a,
            children: t
          })
        });
      var ip = r(18436),
        dp = "rovingFocusGroup.onEntryFocus",
        lp = {
          bubbles: !1,
          cancelable: !0
        },
        cp = "RovingFocusGroup",
        [up, fp, pp] = (0, pr.N)(cp),
        [vp, hp] = (0, ft.A)(cp, [pp]),
        [yp, mp] = vp(cp),
        bp = T.forwardRef((e, t) => (0, z.jsx)(up.Provider, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, z.jsx)(up.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, z.jsx)(gp, {
              ...e,
              ref: t
            })
          })
        }));
      bp.displayName = cp;
      var gp = T.forwardRef((e, t) => {
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
          } = e, f = T.useRef(null), p = (0, ut.s)(t, f), v = (0, cr.jH)(a), [h, y] = (0, Ct.i)({
            prop: s,
            defaultProp: i ?? null,
            onChange: d,
            caller: cp
          }), [m, b] = T.useState(!1), g = (0, Tn.c)(l), C = fp(r), w = T.useRef(!1), [x, _] = T.useState(0);
          return T.useEffect(() => {
            const e = f.current;
            if (e) return e.addEventListener(dp, g), () => e.removeEventListener(dp, g)
          }, [g]), (0, z.jsx)(yp, {
            scope: r,
            orientation: n,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: T.useCallback(e => y(e), [y]),
            onItemShiftTab: T.useCallback(() => b(!0), []),
            onFocusableItemAdd: T.useCallback(() => _(e => e + 1), []),
            onFocusableItemRemove: T.useCallback(() => _(e => e - 1), []),
            children: (0, z.jsx)(bt.sG.div, {
              tabIndex: m || 0 === x ? -1 : 0,
              "data-orientation": n,
              ...u,
              ref: p,
              style: {
                outline: "none",
                ...e.style
              },
              onMouseDown: (0, ct.mK)(e.onMouseDown, () => {
                w.current = !0
              }),
              onFocus: (0, ct.mK)(e.onFocus, e => {
                const t = !w.current;
                if (e.target === e.currentTarget && t && !m) {
                  const t = new CustomEvent(dp, lp);
                  if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                    const e = C().filter(e => e.focusable),
                      t = e.find(e => e.active),
                      r = e.find(e => e.id === h),
                      n = [t, r, ...e].filter(Boolean).map(e => e.ref.current);
                    _p(n, c)
                  }
                }
                w.current = !1
              }),
              onBlur: (0, ct.mK)(e.onBlur, () => b(!1))
            })
          })
        }),
        Cp = "RovingFocusGroupItem",
        wp = T.forwardRef((e, t) => {
          const {
            __scopeRovingFocusGroup: r,
            focusable: n = !0,
            active: o = !1,
            tabStopId: a,
            children: s,
            ...i
          } = e, d = (0, vt.B)(), l = a || d, c = mp(Cp, r), u = c.currentTabStopId === l, f = fp(r), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v,
            currentTabStopId: h
          } = c, y = (0, ip.z)();
          return (0, Ln.N)(() => {
            if (y && n) return p(), () => v()
          }, [y, n, p, v]), T.useEffect(() => {
            if (!y && n) return p(), () => v()
          }, [y, n, p, v]), (0, z.jsx)(up.ItemSlot, {
            scope: r,
            id: l,
            focusable: n,
            active: o,
            children: (0, z.jsx)(bt.sG.span, {
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
                  return "vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n) ? void 0 : xp[n]
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
                  setTimeout(() => _p(a))
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
      wp.displayName = Cp;
      var xp = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
      };

      function _p(e, t = !1) {
        const r = document.activeElement;
        for (const n of e) {
          if (n === r) return;
          if (n.focus({
              preventScroll: t
            }), document.activeElement !== r) return
        }
      }
      var jp = bp,
        Op = wp,
        Rp = "Toggle",
        Pp = T.forwardRef((e, t) => {
          const {
            pressed: r,
            defaultPressed: n,
            onPressedChange: o,
            ...a
          } = e, [s, i] = (0, Ct.i)({
            prop: r,
            onChange: o,
            defaultProp: n ?? !1,
            caller: Rp
          });
          return (0, z.jsx)(bt.sG.button, {
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
      Pp.displayName = Rp;
      var Sp = "ToggleGroup",
        [Np, Dp] = (0, ft.A)(Sp, [hp]),
        zp = hp(),
        Ip = T.forwardRef((e, t) => {
          const {
            type: r,
            ...n
          } = e;
          if ("single" === r) {
            const e = n;
            return (0, z.jsx)(kp, {
              role: "radiogroup",
              ...e,
              ref: t
            })
          }
          if ("multiple" === r) {
            const e = n;
            return (0, z.jsx)(Vp, {
              role: "toolbar",
              ...e,
              ref: t
            })
          }
          throw new Error(`Missing prop \`type\` expected on \`${Sp}\``)
        });
      Ip.displayName = Sp;
      var [Tp, Lp] = Np(Sp), kp = T.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, Ct.i)({
          prop: r,
          defaultProp: n ?? "",
          onChange: o,
          caller: Sp
        });
        return (0, z.jsx)(Tp, {
          scope: e.__scopeToggleGroup,
          type: "single",
          value: T.useMemo(() => s ? [s] : [], [s]),
          onItemActivate: i,
          onItemDeactivate: T.useCallback(() => i(""), [i]),
          children: (0, z.jsx)(Ap, {
            ...a,
            ref: t
          })
        })
      }), Vp = T.forwardRef((e, t) => {
        const {
          value: r,
          defaultValue: n,
          onValueChange: o = () => {},
          ...a
        } = e, [s, i] = (0, Ct.i)({
          prop: r,
          defaultProp: n ?? [],
          onChange: o,
          caller: Sp
        }), d = T.useCallback(e => i((t = []) => [...t, e]), [i]), l = T.useCallback(e => i((t = []) => t.filter(t => t !== e)), [i]);
        return (0, z.jsx)(Tp, {
          scope: e.__scopeToggleGroup,
          type: "multiple",
          value: s,
          onItemActivate: d,
          onItemDeactivate: l,
          children: (0, z.jsx)(Ap, {
            ...a,
            ref: t
          })
        })
      });
      Ip.displayName = Sp;
      var [Ep, Mp] = Np(Sp), Ap = T.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          disabled: n = !1,
          rovingFocus: o = !0,
          orientation: a,
          dir: s,
          loop: i = !0,
          ...d
        } = e, l = zp(r), c = (0, cr.jH)(s), u = {
          dir: c,
          ...d
        };
        return (0, z.jsx)(Ep, {
          scope: r,
          rovingFocus: o,
          disabled: n,
          children: o ? (0, z.jsx)(jp, {
            asChild: !0,
            ...l,
            orientation: a,
            dir: c,
            loop: i,
            children: (0, z.jsx)(bt.sG.div, {
              ...u,
              ref: t
            })
          }) : (0, z.jsx)(bt.sG.div, {
            ...u,
            ref: t
          })
        })
      }), Hp = "ToggleGroupItem", Bp = T.forwardRef((e, t) => {
        const r = Lp(Hp, e.__scopeToggleGroup),
          n = Mp(Hp, e.__scopeToggleGroup),
          o = zp(e.__scopeToggleGroup),
          a = r.value.includes(e.value),
          s = n.disabled || e.disabled,
          i = {
            ...e,
            pressed: a,
            disabled: s
          },
          d = T.useRef(null);
        return n.rovingFocus ? (0, z.jsx)(Op, {
          asChild: !0,
          ...o,
          focusable: !s,
          active: a,
          ref: d,
          children: (0, z.jsx)(Zp, {
            ...i,
            ref: t
          })
        }) : (0, z.jsx)(Zp, {
          ...i,
          ref: t
        })
      });
      Bp.displayName = Hp;
      var Zp = T.forwardRef((e, t) => {
        const {
          __scopeToggleGroup: r,
          value: n,
          ...o
        } = e, a = Lp(Hp, r), s = {
          role: "radio",
          "aria-checked": e.pressed,
          "aria-pressed": void 0
        }, i = "single" === a.type ? s : void 0;
        return (0, z.jsx)(Pp, {
          ...i,
          ...o,
          ref: t,
          onPressedChange: e => {
            e ? a.onItemActivate(n) : a.onItemDeactivate(n)
          }
        })
      });

      function qp(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
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

      function Xp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fp(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = qp(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fp(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Gp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Kp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Wp = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Xp(Xp({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Kp(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Gp(e.variantClassNames, e => Gp(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Up = "var(--foundry_zxwkyk2)",
        Yp = "var(--foundry_zxwkyk3)",
        Qp = Wp({
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
        $p = Wp({
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
        Jp = Wp({
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
        ev = "var(--foundry_zxwkyk1)",
        tv = "var(--foundry_zxwkyk0)",
        rv = Wp({
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
      const nv = (0, T.createContext)(null);

      function ov() {
        const e = (0, T.useContext)(nv);
        if (!e) throw Error("useChipGroupContext can only be used in a <ChipGroup.Root />");
        return e
      }
      const av = (0, T.forwardRef)(({
          testId: e,
          size: t,
          type: r = "single",
          ...n
        }, o) => {
          const a = (0, F.v6)({
            "data-testid": e,
            className: Qp({
              size: t
            }),
            type: r
          }, n);
          return (0, z.jsx)(nv.Provider, {
            value: {
              size: t
            },
            children: (0, z.jsx)(Ip, {
              ref: o,
              ...a
            })
          })
        }),
        sv = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            size: n
          } = ov(), o = (0, F.v6)({
            "data-testid": e,
            className: $p({
              size: n
            })
          }, t);
          return (0, z.jsx)(Bp, {
            ref: r,
            ...o
          })
        }),
        iv = (0, T.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const {
            size: n
          } = ov(), o = at[e];
          return (0, z.jsx)(o, {
            label: "",
            ref: r,
            size: n,
            className: "foundry_zxwkykb",
            ...t
          })
        }),
        dv = (0, T.forwardRef)(({
          testId: e,
          colorOverride: t,
          status: r,
          ...n
        }, o) => {
          const a = (0, F.v6)({
            "data-testid": e,
            className: rv({
              status: r
            }),
            style: (0, X.DI)({
              [tv]: t?.online,
              [ev]: t?.offline,
              [Up]: t?.away,
              [Yp]: t?.busy
            })
          }, n);
          return (0, z.jsx)("span", {
            ref: o,
            ...a
          })
        }),
        lv = (0, T.forwardRef)(({
          testId: e,
          variant: t = "default",
          ...r
        }, n) => {
          const {
            size: o
          } = ov(), a = (0, F.v6)({
            "data-testid": e,
            className: Jp({
              variant: t,
              size: o
            })
          }, r);
          return (0, z.jsx)("span", {
            ref: n,
            ...a
          })
        });
      var cv = r(56148);

      function uv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function fv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function pv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? fv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = uv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function vv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        yv = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pv(pv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) hv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vv(e.variantClassNames, e => vv(e, e => e.split(" ")[0]))
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
      const mv = (0, T.createContext)({
          open: !1,
          setOpen: () => {}
        }),
        bv = ({
          open: e,
          defaultOpen: t,
          onOpenChange: r,
          ...n
        }) => {
          const [o = !1, a] = (0, _e.ic)({
            prop: e,
            defaultProp: t ?? !1,
            onChange: r
          }), s = (0, F.v6)({
            open: o,
            onOpenChange: a
          }, n);
          return (0, z.jsx)(mv.Provider, {
            value: {
              open: o,
              setOpen: a
            },
            children: (0, z.jsx)(cv.bL, {
              ...s
            })
          })
        },
        gv = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_lroh6l0"
          }, t);
          return (0, z.jsx)(cv.l9, {
            ref: r,
            ...n
          })
        }),
        Cv = {
          SM: "SM",
          MD: "SM",
          LG: "MD",
          XL: "LG"
        },
        wv = (0, T.forwardRef)(({
          children: e,
          size: t = "MD",
          testId: r,
          ...n
        }, o) => {
          const {
            open: a
          } = (0, T.useContext)(mv), s = (0, T.useRef)(null), i = (0, _e.UP)(s, o), {
            buttonProps: d
          } = (0, _e.sL)(n, s), l = (0, F.v6)({
            "data-testid": r,
            className: yv({
              size: t
            })
          }, d), c = a ? at.ChevronUp : at.ChevronDown;
          return (0, z.jsxs)("button", {
            ref: i,
            ...l,
            children: [e, (0, z.jsx)(c, {
              label: "",
              size: Cv[t]
            })]
          })
        }),
        xv = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e
          }, t);
          return (0, z.jsx)(cv.Mz, {
            ref: r,
            ...n
          })
        }),
        _v = (0, T.forwardRef)(({
          sideOffset: e = 6,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            sideOffset: e,
            "data-testid": t,
            className: "foundry_lroh6l6"
          }, r);
          return (0, z.jsx)(cv.UC, {
            ref: n,
            ...o
          })
        }),
        jv = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            "data-testid": e,
            className: "foundry_lroh6l7"
          }, t);
          return (0, z.jsx)(cv.i3, {
            ref: r,
            ...n
          })
        }),
        Ov = e => (0, z.jsx)(cv.ZL, {
          ...e
        }),
        Rv = e => (0, z.jsx)(cv.bm, {
          ...e
        });

      function Pv(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Sv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Nv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sv(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Pv(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function Dv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Iv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Nv(Nv({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) zv(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dv(e.variantClassNames, e => Dv(e, e => e.split(" ")[0]))
            }
          }, t
        },
        Tv = "var(--foundry_rmorls2)",
        Lv = Iv({
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
        kv = "var(--foundry_rmorls0)",
        Vv = Iv({
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
        Ev = "var(--foundry_rmorls3)",
        Mv = "var(--foundry_rmorls1)",
        Av = Iv({
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
        Hv = "Progress",
        [Bv, Zv] = (0, ft.A)(Hv),
        [qv, Fv] = Bv(Hv),
        Xv = T.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            value: n = null,
            max: o,
            getValueLabel: a = Wv,
            ...s
          } = e;
          !o && 0 !== o || Qv(o) || console.error(`Invalid prop \`max\` of value \`${o}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
          const i = Qv(o) ? o : 100;
          null === n || $v(n, i) || console.error(`Invalid prop \`value\` of value \`${`${n}`}\` supplied to \`Progress\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`);
          const d = $v(n, i) ? n : null,
            l = Yv(d) ? a(d, i) : void 0;
          return (0, z.jsx)(qv, {
            scope: r,
            value: d,
            max: i,
            children: (0, z.jsx)(bt.sG.div, {
              "aria-valuemax": i,
              "aria-valuemin": 0,
              "aria-valuenow": Yv(d) ? d : void 0,
              "aria-valuetext": l,
              role: "progressbar",
              "data-state": Uv(d, i),
              "data-value": d ?? void 0,
              "data-max": i,
              ...s,
              ref: t
            })
          })
        });
      Xv.displayName = Hv;
      var Gv = "ProgressIndicator",
        Kv = T.forwardRef((e, t) => {
          const {
            __scopeProgress: r,
            ...n
          } = e, o = Fv(Gv, r);
          return (0, z.jsx)(bt.sG.div, {
            "data-state": Uv(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...n,
            ref: t
          })
        });

      function Wv(e, t) {
        return `${Math.round(e/t*100)}%`
      }

      function Uv(e, t) {
        return null == e ? "indeterminate" : e === t ? "complete" : "loading"
      }

      function Yv(e) {
        return "number" == typeof e
      }

      function Qv(e) {
        return Yv(e) && !isNaN(e) && e > 0
      }

      function $v(e, t) {
        return Yv(e) && !isNaN(e) && e <= t && e >= 0
      }
      Kv.displayName = Gv;
      var Jv = Xv,
        eh = Kv;
      const th = (0, T.createContext)({
          size: "MD",
          value: 0,
          max: 1,
          percentage: 0,
          isInvalid: !1
        }),
        rh = (0, T.forwardRef)(({
          size: e = "MD",
          max: t,
          value: r,
          ...n
        }, o) => {
          const a = Math.round(r / t * 100),
            s = "number" != typeof r || "number" != typeof t;
          return (0, z.jsx)(th.Provider, {
            value: {
              value: r,
              max: t,
              size: e,
              percentage: a,
              isInvalid: s
            },
            children: (0, z.jsx)(nh, {
              ...n,
              ref: o
            })
          })
        }),
        nh = (0, T.forwardRef)(({
          testId: e,
          asChild: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
              "data-testid": e,
              className: "foundry_rmorls4"
            }, r),
            a = t ? L.DX : "div";
          return (0, z.jsx)(a, {
            ...o,
            ref: n
          })
        }),
        oh = (0, T.forwardRef)(({
          testId: e,
          colorOverride: t,
          ...r
        }, n) => {
          const {
            value: o,
            max: a,
            size: s
          } = (0, T.useContext)(th), i = (0, F.v6)({
            "data-testid": e,
            className: Vv({
              size: s
            }),
            value: o,
            max: a,
            style: (0, X.DI)({
              [Ev]: t
            }),
            "data-track": !0
          }, r);
          return (0, z.jsx)(Jv, {
            ref: n,
            ...i
          })
        }),
        ah = (0, T.forwardRef)(({
          testId: e,
          transitionDuration: t = 500,
          colorOverride: r,
          ...n
        }, o) => {
          const {
            percentage: a,
            isInvalid: s
          } = (0, T.useContext)(th), i = s ? "-100%" : `-${100-a}%`, d = (0, F.v6)({
            "data-testid": e,
            className: "foundry_rmorls9",
            style: (0, X.DI)({
              [kv]: i,
              [Mv]: `${t}ms`,
              [Tv]: r
            })
          }, n);
          return (0, z.jsx)(eh, {
            ref: o,
            ...d
          })
        }),
        sh = (0, T.forwardRef)(({
          asChild: e,
          testId: t,
          ...r
        }, n) => {
          const {
            size: o
          } = (0, T.useContext)(th), a = (0, F.v6)({
            "data-testid": t,
            className: Lv({
              size: o
            }),
            "aria-hidden": !0
          }, r), s = e ? L.DX : "span";
          return (0, z.jsx)(s, {
            ref: n,
            ...a
          })
        }),
        ih = (0, T.forwardRef)(({
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
          } = (0, T.useContext)(th), l = (0, F.v6)({
            "data-testid": e,
            className: Lv({
              size: s
            }),
            "aria-hidden": !0
          }, r);
          return d ? (0, z.jsx)("span", {
            ref: n,
            ...l
          }) : "percentage" === t ? (0, z.jsxs)("span", {
            ref: n,
            ...l,
            children: [i, " ", (0, z.jsx)("span", {
              className: Av({
                size: s
              }),
              children: "%"
            })]
          }) : (0, z.jsxs)("span", {
            ref: n,
            ...l,
            children: [o, "/", a]
          })
        });
      var dh = r(69802);

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

      function fh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ph = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vh = "foundry_1vzsjid2",
        hh = "foundry_1vzsjidm",
        yh = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = uh(uh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) ph(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return fh(e.variantClassNames, e => fh(e, e => e.split(" ")[0]))
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
      const mh = (0, T.createContext)({
          mode: "solid",
          layer: 0
        }),
        bh = (0, T.forwardRef)(({
          mode: e,
          layer: t,
          type: r = "single",
          ...n
        }, o) => (0, z.jsx)(mh.Provider, {
          value: {
            mode: e,
            layer: t
          },
          children: (0, z.jsx)(gh, {
            ...n,
            ref: o,
            type: r
          })
        })),
        gh = (0, T.forwardRef)(({
          testId: e,
          type: t = "single",
          ...r
        }, n) => {
          const o = (0, F.v6)({
            "data-testid": e,
            type: t
          }, r);
          return (0, z.jsx)(dh.bL, {
            className: "foundry_1vzsjid0",
            ref: n,
            ...o
          })
        }),
        Ch = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const {
            mode: n,
            layer: o
          } = (0, T.useContext)(mh), a = (0, F.v6)({
            className: yh({
              mode: n,
              layer: o
            }),
            "data-testid": e
          }, t);
          return (0, z.jsx)(dh.q7, {
            ref: r,
            ...a
          })
        }),
        wh = (0, T.forwardRef)(({
          testId: e,
          ...t
        }, r) => {
          const n = (0, F.v6)({
            className: "foundry_1vzsjid1",
            "data-testid": e
          }, t);
          return (0, z.jsx)(dh.Y9, {
            ref: r,
            ...n
          })
        }),
        xh = (0, T.forwardRef)(({
          children: e,
          testId: t,
          ...r
        }, n) => {
          const o = (0, F.v6)({
            className: "foundry_1vzsjidk foundry_8kowh41 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcda",
            "data-testid": t
          }, r);
          return (0, z.jsx)(dh.l9, {
            ref: n,
            ...o,
            children: r.asChild && (0, T.isValidElement)(e) ? (0, T.cloneElement)(e, {
              children: (0, z.jsx)("span", {
                className: vh,
                children: e.props.children
              })
            }) : (0, z.jsx)("span", {
              className: vh,
              children: e
            })
          })
        }),
        _h = (0, T.forwardRef)(({
          icon: e,
          ...t
        }, r) => {
          const n = at[e],
            o = (0, F.v6)({
              className: "foundry_1vzsjid4",
              label: ""
            }, t);
          return (0, z.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        jh = (0, T.forwardRef)(({
          icon: e = "ChevronDown",
          ...t
        }, r) => {
          const n = at[e],
            o = (0, F.v6)({
              className: "foundry_1vzsjid3",
              label: ""
            }, t);
          return (0, z.jsx)(n, {
            ref: r,
            size: "LG",
            ...o
          })
        }),
        Oh = (0, T.forwardRef)(({
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
          return (0, z.jsx)(dh.UC, {
            ref: o,
            ...a,
            children: t && (0, T.isValidElement)(e) ? (0, T.cloneElement)(e, {
              children: (0, z.jsx)("div", {
                className: hh,
                children: e.props.children
              })
            }) : (0, z.jsx)("div", {
              className: hh,
              children: e
            })
          })
        }),
        Rh = {
          MD: X.LU.global.spacing.dimensions[200],
          LG: X.LU.global.spacing.dimensions[250],
          XL: X.LU.global.spacing.dimensions[300]
        },
        Ph = (0, T.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, z.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Rh[t],
          viewBox: "0 0 93 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, z.jsx)("path", {
            d: "M70.062 5.19368V4.08909C70.062 4.04208 70.015 3.99508 69.968 3.99508H62.1183C59.8387 3.99508 58.7341 5.40519 58.7341 7.21484V12.7613C58.7341 13.8894 58.1935 14.712 57.0654 14.712H49.7093C49.6623 14.712 49.6153 14.759 49.6153 14.806V15.9106C49.6153 15.9576 49.6623 16.0046 49.7093 16.0046H57.935C60.2147 16.0046 61.3193 14.618 61.3193 12.7848V7.23835C61.3193 6.11025 61.8598 5.28768 62.9879 5.28768H69.968C70.015 5.28768 70.062 5.24068 70.062 5.19368Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M46.8421 3.99508H32.6704C32.6234 3.99508 32.5764 4.04208 32.5764 4.08909V5.19368C32.5764 5.24068 32.6234 5.28768 32.6704 5.28768H45.996C47.1241 5.28768 47.6647 6.11025 47.6647 7.23835C47.6647 8.36644 47.1241 9.18901 45.996 9.18901H35.4436C33.7985 9.18901 32.5764 10.5756 32.5764 12.3853V15.9341C32.5764 15.9811 32.6234 16.0281 32.6704 16.0281H35.0676C35.1146 16.0281 35.1616 15.9811 35.1616 15.9341V12.3853C35.1616 11.2572 35.8197 10.4581 36.7362 10.4581H46.8421C49.1218 10.4581 50.2264 9.0715 50.2264 7.23835C50.2264 5.4052 49.1218 4.01858 46.8421 4.01858V3.99508Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M86.1844 13.4194C86.1374 13.4194 86.0903 13.3724 86.0903 13.3253V5.26418C86.0903 4.01858 85.2443 3.61905 84.0222 4.37111L69.5685 13.2548C69.0044 13.6074 68.8164 14.0069 68.9574 14.2889C69.0749 14.5475 69.3805 14.712 70.015 14.712H83.4346C83.4816 14.712 83.5051 14.7355 83.5051 14.7825V15.9106C83.5051 15.9576 83.5521 16.0046 83.5991 16.0046H86.0198C86.0668 16.0046 86.1138 15.9576 86.1138 15.9106V14.806C86.1138 14.759 86.1609 14.712 86.2079 14.712H88.6051C88.6521 14.712 88.6991 14.665 88.6991 14.618V13.5134C88.6991 13.4664 88.6521 13.4194 88.6051 13.4194H86.1844ZM83.5286 13.3253C83.5286 13.3724 83.4816 13.4194 83.4346 13.4194H72.1772C72.0832 13.4194 72.0362 13.3959 72.0362 13.3724C72.0362 13.3254 72.0362 13.2783 72.1302 13.2313L83.3171 6.34527C83.3876 6.29827 83.5286 6.29827 83.5286 6.46278V13.3489V13.3253Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M91.0246 13.9838C91.6121 13.9838 92.0117 14.4304 92.0117 14.9944C92.0117 15.5585 91.6121 16.005 91.0246 16.005C90.437 16.005 90.014 15.5585 90.014 14.9944C90.014 14.4304 90.4135 13.9838 91.0246 13.9838ZM91.0246 15.8405C91.5181 15.8405 91.8707 15.4645 91.8707 14.9944C91.8707 14.5244 91.5416 14.1484 91.0246 14.1484C90.5075 14.1484 90.1785 14.5244 90.1785 14.9944C90.1785 15.4645 90.5075 15.8405 91.0246 15.8405ZM90.6251 14.4069H91.0716C91.2831 14.4069 91.4476 14.4774 91.4476 14.7124C91.4476 14.9474 91.3771 14.9474 91.2361 14.9944C91.3066 15.0179 91.3536 15.0649 91.4006 15.2059C91.4476 15.3235 91.4711 15.4645 91.5181 15.5585H91.3066C91.2831 15.4645 91.2361 15.3235 91.2126 15.253C91.1891 15.1119 91.1421 15.0884 90.9776 15.0884H90.8366V15.582H90.6251V14.4069ZM90.8366 14.9239H91.0246C91.1656 14.9239 91.2596 14.8769 91.2596 14.7359C91.2596 14.5949 91.1421 14.5479 91.0481 14.5479H90.8601V14.9239H90.8366Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M15.5833 4.88841V11.1399C18.2155 12.409 20.2837 11.1399 20.2837 7.77915C20.2837 4.41837 19.0616 2.82023 15.4893 1.59813C14.0791 1.12809 11.4704 0.329027 9.68428 0V18.637L13.9146 19.9767V4.34786C13.9146 3.6193 14.2437 3.12576 14.7607 3.29027C15.4423 3.47829 15.5833 4.15985 15.5833 4.88841Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M23.9735 13.0906C22.2108 12.4325 19.9546 12.1975 18.1215 12.409C16.2883 12.597 14.9722 13.0671 14.9722 13.0671L14.7137 13.1611V15.6993L19.2261 14.1012C20.0016 13.8191 21.1297 13.7721 21.7643 13.9602C22.3753 14.1717 22.2578 14.5477 21.5058 14.8297L14.7137 17.2504V19.6946L23.9265 16.3809C23.9265 16.3809 25.1721 15.9108 25.6656 15.2763C26.1591 14.6417 25.9476 13.7016 23.95 13.0671L23.9735 13.0906Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M0.495017 14.5242C-0.445061 15.2293 -0.0925317 16.4279 1.95214 16.9919C4.13782 17.7205 6.3705 17.8615 8.46218 17.509C8.60319 17.509 8.7442 17.462 8.88521 17.4384V15.2528L6.79354 16.0048C6.01797 16.2869 4.91338 16.3574 4.27883 16.1458C3.66778 15.9343 3.78529 15.5583 4.53735 15.2763L8.88521 13.7251V11.2809L2.84521 13.4431C2.84521 13.4431 1.38809 13.9132 0.518519 14.5477L0.495017 14.5242Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M24.467 18.9896C24.608 18.9426 24.6785 18.8486 24.6785 18.7076C24.6785 18.4725 24.514 18.402 24.3025 18.402H23.856V19.5536H24.0675V19.0601H24.2085C24.373 19.0601 24.42 19.1071 24.4435 19.2246C24.467 19.2951 24.514 19.4596 24.5375 19.5301H24.749C24.7255 19.4126 24.6785 19.2951 24.6315 19.1776C24.5845 19.0366 24.5375 18.9896 24.467 18.9661V18.9896ZM24.232 18.9191H24.044V18.543H24.232C24.3495 18.543 24.4435 18.5665 24.4435 18.7311C24.4435 18.8956 24.3495 18.9191 24.2085 18.9191H24.232Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M24.2555 17.979C23.6679 17.979 23.2449 18.4255 23.2449 18.9896C23.2449 19.5536 23.6444 20.0002 24.2555 20.0002C24.8665 20.0002 25.2426 19.5536 25.2426 18.9896C25.2426 18.4255 24.843 17.979 24.2555 17.979ZM24.2555 19.8356C23.7384 19.8356 23.4094 19.4596 23.4094 18.9896C23.4094 18.5195 23.7384 18.1435 24.2555 18.1435C24.7725 18.1435 25.1016 18.5195 25.1016 18.9896C25.1016 19.4596 24.7725 19.8356 24.2555 19.8356Z",
            fill: e
          })]
        })),
        Sh = (0, T.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Rh[t],
          viewBox: "0 0 92 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, z.jsx)("path", {
            d: "M9.58333 0C11.3552 0.328638 13.9663 1.12676 15.3418 1.59624C18.8854 2.8169 20.0977 4.34272 20.0977 7.76995C20.0977 11.1972 18.0461 12.3944 15.435 11.1268V4.88263C15.435 4.15493 15.2951 3.47418 14.6191 3.28639C14.1062 3.12207 13.7798 3.61502 13.7798 4.34272V19.9531L9.58333 18.615V0ZM14.5724 19.6948L23.7113 16.385C23.7113 16.385 24.947 15.9155 25.4365 15.2817C25.9261 14.6479 25.7163 13.7089 23.7347 13.0986C21.9861 12.4413 19.748 12.2066 17.9296 12.4178C16.1111 12.6056 14.8056 13.0751 14.8056 13.0751L14.5491 13.169V15.7042L19.0253 14.108C19.7947 13.8263 20.9137 13.7793 21.5432 13.9671C22.1493 14.1784 22.0328 14.554 21.2867 14.8357L14.5491 17.2535V19.6948H14.5724ZM1.91317 16.9953C4.08133 17.723 6.29612 17.8638 8.37103 17.5117C8.51091 17.5117 8.65079 17.4648 8.79067 17.4413V15.2582L6.71576 16.0094C5.94642 16.2911 4.85068 16.3615 4.22122 16.1502C3.61506 15.939 3.73163 15.5634 4.47766 15.2817L8.79067 13.7324V11.2911L2.79909 13.4507C2.79909 13.4507 1.35365 13.9202 0.491048 14.554C-0.441493 15.2582 -0.0917898 16.4554 1.93649 17.0188M24.0377 17.9812C23.4549 17.9812 23.0352 18.4272 23.0352 18.9906C23.0352 19.554 23.4316 20 24.0377 20C24.6439 20 25.0169 19.554 25.0169 18.9906C25.0169 18.4272 24.6206 17.9812 24.0377 17.9812ZM24.0377 19.8122C23.5248 19.8122 23.1984 19.4366 23.1984 18.9671C23.1984 18.4977 23.5248 18.1221 24.0377 18.1221C24.5506 18.1221 24.877 18.4977 24.877 18.9671C24.877 19.4366 24.5506 19.8122 24.0377 19.8122ZM23.6414 19.554H23.8512V19.061H23.9911C24.1543 19.061 24.2009 19.108 24.2242 19.2254C24.2476 19.2958 24.2942 19.4601 24.3175 19.5305H24.5273C24.504 19.4131 24.4574 19.2958 24.4107 19.1784C24.3641 19.0376 24.3175 18.9906 24.2476 18.9671C24.3874 18.9202 24.4574 18.8263 24.4574 18.6854C24.4574 18.4507 24.2942 18.3803 24.0844 18.3803H23.6414V19.5305V19.554ZM23.8279 18.5446H24.0144C24.131 18.5446 24.2242 18.5681 24.2242 18.7324C24.2242 18.8967 24.131 18.9202 23.9911 18.9202H23.8046V18.5446H23.8279ZM56.4436 15.9859C58.2154 15.9859 59.6375 14.554 59.6375 12.77V7.23005C59.6375 6.15024 60.5001 5.28169 61.5725 5.28169H67.7739C67.8206 5.28169 67.8672 5.23474 67.8672 5.18779V4.08451C67.8672 4.03756 67.8206 3.99061 67.7739 3.99061H60.2903C58.5185 3.99061 57.0963 5.42253 57.0963 7.20657V12.7465C57.0963 13.8263 56.2337 14.6948 55.1613 14.6948H49.0532C49.0065 14.6948 48.9599 14.7418 48.9599 14.7887V15.892C48.9599 15.939 49.0065 15.9859 49.0532 15.9859H56.4436ZM70.4084 8.49765C70.4084 9.57746 71.271 10.446 72.3434 10.446H83.2774C84.4431 10.446 85.4223 11.4085 85.399 12.5822C85.399 13.7559 84.4431 14.6948 83.2774 14.6948C83.2774 14.6948 73.6956 14.6948 70.5016 14.6948C70.455 14.6948 70.4084 14.7418 70.4084 14.7887V15.892C70.4084 15.939 70.455 15.9859 70.5016 15.9859H84.5597C86.4248 15.9859 87.9402 14.4601 87.9402 12.5822C87.9402 10.7042 86.4248 9.1784 84.5597 9.1784H73.8821C73.3692 9.1784 72.9729 8.75587 72.9729 8.26291V5.37559C72.9729 5.32864 73.0195 5.28169 73.0661 5.28169H87.4273C87.4739 5.28169 87.5205 5.23474 87.5205 5.18779V4.08451C87.5205 4.03756 87.4739 3.99061 87.4273 3.99061H70.5249C70.4783 3.99061 70.4317 4.03756 70.4317 4.08451C70.4317 4.74178 70.4317 6.87793 70.4317 8.49765M35.4847 9.15493C33.7128 9.15493 32.2907 10.5869 32.2907 12.3709C32.2907 12.3709 32.2907 14.9296 32.2907 15.892C32.2907 15.939 32.3373 15.9859 32.384 15.9859H34.762C34.8086 15.9859 34.8552 15.939 34.8552 15.892V12.3709C34.8552 11.2911 35.7178 10.4225 36.7902 10.4225H46.6286C48.4004 10.4225 49.8225 8.99061 49.8225 7.20657C49.8225 5.42253 48.4004 3.99061 46.6286 3.99061H32.4073C32.3607 3.99061 32.314 4.03756 32.314 4.08451V5.18779C32.314 5.23474 32.3607 5.28169 32.4073 5.28169H45.3696C46.442 5.28169 47.3046 6.15024 47.3046 7.23005C47.3046 8.30986 46.442 9.1784 45.3696 9.1784H35.5313L35.4847 9.15493ZM91.2507 14.9531C91.2507 15.5164 90.8543 15.9624 90.2715 15.9624C89.6887 15.9624 89.269 15.5164 89.269 14.9531C89.269 14.3897 89.6654 13.9437 90.2715 13.9437C90.8777 13.9437 91.2507 14.3897 91.2507 14.9531ZM91.0875 14.9531C91.0875 14.4836 90.7611 14.108 90.2482 14.108C89.7353 14.108 89.4089 14.4836 89.4089 14.9531C89.4089 15.4225 89.7353 15.7981 90.2482 15.7981C90.7611 15.7981 91.0875 15.4225 91.0875 14.9531ZM90.6445 15.1643C90.6912 15.2817 90.7145 15.4225 90.7611 15.5164H90.5513C90.528 15.4225 90.4813 15.2817 90.458 15.2113C90.4347 15.0704 90.3881 15.0469 90.2249 15.0469H90.085V15.5399H89.8752V14.3897H90.3181C90.528 14.3897 90.6912 14.4601 90.6912 14.6948C90.6912 14.9296 90.6212 14.9296 90.4813 14.9765C90.5513 15 90.5979 15.0469 90.6445 15.1878V15.1643ZM90.4813 14.6948C90.4813 14.5305 90.3648 14.507 90.2715 14.507H90.085V14.8826H90.2715C90.4114 14.8826 90.5046 14.8357 90.5046 14.6948H90.4813Z",
            fill: e
          })
        })),
        Nh = (0, T.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, z.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Rh[t],
          viewBox: "0 0 33 20",
          fill: "none",
          ref: n,
          ...r,
          children: [(0, z.jsx)("path", {
            d: "M7.34117 9.61429C7.7883 9.61536 8.23491 9.59031 8.6778 9.53928C9.07276 9.49838 9.45591 9.40006 9.80952 9.24891C10.1317 9.10768 10.4019 8.89726 10.5916 8.63973C10.7887 8.3776 10.8873 8.03424 10.8873 7.60959C10.8873 7.18494 10.7887 6.8413 10.5916 6.57878C10.4014 6.32174 10.1314 6.1116 9.80952 5.97026C9.45578 5.81934 9.0727 5.72107 8.6778 5.6799C8.23491 5.6292 7.78824 5.6041 7.34117 5.60488H4.2033V9.61429H7.34117ZM8.44707 3.31884C9.59417 3.31884 10.5713 3.44063 11.3785 3.68422C12.1856 3.9278 12.8415 4.24941 13.3463 4.64907C13.8357 5.02963 14.2139 5.49737 14.4522 6.01681C14.9152 7.04079 14.9152 8.16864 14.4522 9.19267C14.2163 9.71592 13.8379 10.1872 13.3463 10.5701C12.84 10.9698 12.184 11.2913 11.3785 11.5349C10.5729 11.7785 9.59574 11.9003 8.44707 11.9003H4.2033V16.6968H0.166016V3.31884H8.44707Z",
            fill: e
          }), (0, z.jsx)("path", {
            d: "M28.2135 6.88796C27.966 6.60113 27.6617 6.35099 27.3133 6.14813C26.9401 5.9306 26.5279 5.76298 26.0916 5.65149C25.6303 5.53153 25.1494 5.4709 24.6658 5.47171C23.7565 5.47171 22.9848 5.59975 22.3508 5.85586C21.7447 6.09295 21.2157 6.44606 20.8077 6.886C20.4087 7.32589 20.1165 7.82544 19.9473 8.35721C19.7656 8.91334 19.674 9.48701 19.6752 10.0631C19.6741 10.6173 19.7652 11.1689 19.9457 11.7025C20.1182 12.2215 20.4104 12.7081 20.8061 13.1355C21.2166 13.5712 21.7452 13.9209 22.3492 14.1566C22.9838 14.4127 23.7555 14.5408 24.6643 14.5408C25.8974 14.5408 26.862 14.2659 27.5581 13.7163C28.2542 13.1666 28.6786 12.4421 28.8314 11.5428H32.742C32.6546 12.3356 32.382 13.1068 31.9395 13.8139C31.5214 14.4778 30.9439 15.0642 30.2423 15.5373C29.5097 16.0253 28.6718 16.3942 27.7732 16.6244C26.766 16.8824 25.7163 17.009 24.6619 16.9994C23.2542 16.9994 21.9895 16.8214 20.8679 16.4653C19.7463 16.1092 18.7992 15.6188 18.0265 14.9941C17.2558 14.3717 16.6513 13.6227 16.2518 12.7954C15.8351 11.9261 15.6265 10.9982 15.6379 10.0631C15.6275 9.11222 15.8369 8.16835 16.255 7.28242C16.6534 6.44298 17.2577 5.68074 18.0296 5.0436C18.8039 4.40641 19.751 3.9063 20.871 3.5433C21.991 3.1803 23.2559 2.99923 24.6658 3.00009C25.6348 2.99561 26.5999 3.10292 27.5331 3.3189C28.3948 3.51672 29.2114 3.82999 29.9506 4.24624C30.6544 4.64619 31.2534 5.15931 31.7119 5.75497C32.1855 6.3795 32.4842 7.08365 32.5863 7.81592H28.6757C28.6086 7.48158 28.4511 7.16421 28.2135 6.88796Z",
            fill: e
          })]
        })),
        Dh = (0, T.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Rh[t],
          viewBox: "0 0 104 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, z.jsx)("path", {
            d: "M9.97484 8.02222C9.98593 8.02222 10.0026 8.03333 10.0081 8.03889C12.9895 10.3111 18.0988 15.9389 16.5416 17.5278C14.7849 19.0667 12.4907 20 9.97484 20C7.45897 20 5.16475 19.0667 3.40807 17.5278C1.85089 15.9389 6.96022 10.3111 9.94159 8.03889C9.94713 8.03333 9.96376 8.02222 9.97484 8.02222ZM15.1728 1.46111C13.6434 0.55 11.992 0 9.97484 0C7.95771 0 6.30632 0.555556 4.77684 1.46111C4.76022 1.47222 4.74913 1.49444 4.76022 1.51111C4.76576 1.52778 4.78792 1.53333 4.81009 1.52778C6.7441 1.11111 9.6756 2.78333 9.95268 2.95C9.95822 2.95 9.96376 2.95556 9.97484 2.95556C9.98593 2.95556 9.99147 2.95556 9.99701 2.95C10.2741 2.78333 13.2111 1.11111 15.1396 1.52778C15.1618 1.52778 15.1784 1.52778 15.1895 1.51111C15.2006 1.49444 15.1895 1.47222 15.1728 1.46111ZM2.99245 2.86667C2.97583 2.87778 2.9592 2.88889 2.94812 2.9C1.13048 4.71111 0 7.22222 0 9.99444C0 12.7667 0.759196 14.3722 2.0393 16.0556C2.05038 16.0722 2.07255 16.0833 2.09472 16.0722C2.11134 16.0611 2.11134 16.0389 2.1058 16.0222C1.3466 13.6667 5.23125 7.95 7.24284 5.55556C7.24838 5.55 7.25393 5.53889 7.25393 5.52778C7.25393 5.51667 7.24839 5.50556 7.2373 5.49444C4.19498 2.46111 3.16424 2.78333 2.99245 2.86667ZM12.7179 5.49444C12.7068 5.5 12.7013 5.51111 12.7013 5.52778C12.7013 5.54444 12.7068 5.55 12.7124 5.55556C14.7184 7.95 18.6086 13.6667 17.8494 16.0222C17.8439 16.0389 17.8439 16.0611 17.8605 16.0722C17.8771 16.0833 17.8993 16.0722 17.9159 16.0556C19.196 14.3722 19.9552 12.2778 19.9552 9.99444C19.9552 7.71111 18.8247 4.71111 17.0071 2.9C16.996 2.88889 16.9794 2.87222 16.9628 2.86667C16.7965 2.77778 15.7603 2.45556 12.7179 5.49444ZM34.7125 16.1611H32.6731L29.1598 11.3111L25.6464 16.1611H23.6071L28.1401 9.90555L23.9618 4.13889H26.0011L29.1598 8.49444L32.3185 4.13889H34.3578L30.1794 9.90555L34.7125 16.1611ZM45.3079 12.7444C45.3079 13.8 44.9588 14.6444 44.2717 15.25C43.5845 15.8556 42.5815 16.1611 41.2958 16.1611H35.6711V10.8056H33.0001L34.114 9.27222H35.6767V4.13889H41.0631C42.2712 4.13889 43.2077 4.42778 43.8561 5C44.4989 5.57222 44.8258 6.33889 44.8258 7.26667C44.8258 8.19444 44.3049 9.3 43.2742 9.87222C43.9392 10.1278 44.449 10.5111 44.7926 11C45.1417 11.5 45.3135 12.0833 45.3135 12.7333L45.3079 12.7444ZM37.5054 9.27222H40.9412C41.6339 9.27222 42.1603 9.11667 42.5039 8.81111C42.8475 8.50556 43.0248 8.03889 43.0248 7.42222C43.0248 6.80556 42.8419 6.47222 42.4873 6.17222C42.1271 5.87222 41.6117 5.72222 40.9467 5.72222H37.5109V9.27222H37.5054ZM43.4626 12.7056C43.4626 12.0722 43.2742 11.5944 42.8974 11.2778C42.5205 10.9611 41.9498 10.8 41.1961 10.8H37.5054V14.5667H41.1961C41.9276 14.5667 42.4928 14.4056 42.8807 14.0833C43.2687 13.7611 43.4626 13.3 43.4626 12.7V12.7056ZM57.6269 10.15C57.6269 11.0778 57.4939 11.9333 57.2279 12.6833C56.9619 13.4389 56.5574 14.1111 56.0254 14.6889C55.4878 15.2667 54.8616 15.7056 54.1579 15.9944C53.4541 16.2833 52.6561 16.4278 51.7861 16.4278C50.916 16.4278 50.1014 16.2833 49.3976 15.9944C48.6939 15.7056 48.0677 15.2667 47.5467 14.6889C47.0092 14.1167 46.6047 13.4444 46.3331 12.6944C46.0671 11.9389 45.9286 11.0833 45.9286 10.15C45.9286 9.21667 46.0671 8.36667 46.3331 7.61111C46.5991 6.85556 47.0092 6.17778 47.5467 5.59445C48.0732 5.02222 48.6939 4.58889 49.3976 4.3C50.1014 4.01667 50.9049 3.87222 51.7861 3.87222C52.6672 3.87222 53.4541 4.01667 54.1579 4.3C54.8616 4.58333 55.4934 5.02222 56.0254 5.59445C56.5574 6.17778 56.9619 6.85556 57.2279 7.61111C57.4939 8.36667 57.6269 9.22222 57.6269 10.15ZM47.8183 10.15C47.8183 11.5667 48.184 12.7 48.9044 13.5222C49.6138 14.3556 50.5835 14.7778 51.7805 14.7778C52.9775 14.7778 53.9473 14.3556 54.6566 13.5222C55.3659 12.7111 55.7261 11.5778 55.7261 10.15C55.7261 8.72222 55.3659 7.58333 54.6566 6.76111C53.9362 5.93889 52.9664 5.52222 51.7805 5.52222C50.5946 5.52222 49.6248 5.93889 48.9044 6.76111C48.184 7.60556 47.8183 8.74444 47.8183 10.15ZM63.4123 9.90555L67.5906 4.13889H65.5513L62.3926 8.49444L59.2339 4.13889H57.1946L61.373 9.90555L56.84 16.1611H58.8793L62.3926 11.3111L65.906 16.1611H67.9453L63.4123 9.90555ZM81.4169 7.61111C81.1509 6.85556 80.7463 6.17778 80.2144 5.59445C79.6768 5.02222 79.0506 4.58889 78.3468 4.3C77.6431 4.01667 76.8451 3.87222 75.9751 3.87222C75.105 3.87222 74.2904 4.01667 73.5866 4.3C72.8829 4.58333 72.2567 5.02222 71.7357 5.59445C71.1982 6.17778 70.7937 6.85556 70.5221 7.61111C70.2561 8.36667 70.1176 9.22222 70.1176 10.15C70.1176 11.0778 70.2561 11.9389 70.5221 12.6944C70.7881 13.45 71.1982 14.1222 71.7357 14.6889C72.2622 15.2667 72.8829 15.7056 73.5866 15.9944C74.2904 16.2833 75.0939 16.4278 75.9751 16.4278C76.8562 16.4278 77.6431 16.2833 78.3468 15.9944C79.0506 15.7056 79.6824 15.2667 80.2144 14.6889C80.7463 14.1111 81.1509 13.4389 81.4169 12.6833C81.6829 11.9278 81.8159 11.0778 81.8159 10.15C81.8159 9.22222 81.6829 8.36667 81.4169 7.61111ZM78.8456 13.5222C78.1363 14.3556 77.1665 14.7778 75.9695 14.7778C74.7725 14.7778 73.8027 14.3556 73.0934 13.5222C72.373 12.7 72.0073 11.5667 72.0073 10.15C72.0073 8.73333 72.373 7.60556 73.0934 6.76111C73.8138 5.93889 74.7836 5.52222 75.9695 5.52222C77.1554 5.52222 78.1252 5.93889 78.8456 6.76111C79.5549 7.58333 79.9151 8.72222 79.9151 10.15C79.9151 11.5778 79.5549 12.7111 78.8456 13.5222ZM96.7504 5.78889V9.27222H102.708V10.8056H96.7504V14.5056H103.483V16.1556H94.9162V4.13333H103.483V5.78333H96.7504V5.78889ZM93.0874 4.13889V16.1611H90.9872C90.9872 16.1556 87.3076 10.3444 87.3076 10.3444C86.3101 8.77778 85.5564 7.54445 85.0743 6.67222V16.1611H83.2955V4.13889H85.3957C85.3957 4.14444 89.092 9.95556 89.092 9.95556C90.0285 11.4389 90.7766 12.6833 91.3252 13.65V4.13889H93.0874Z",
            fill: e
          })
        })),
        zh = (0, T.forwardRef)(({
          color: e = "currentColor",
          size: t = "MD",
          ...r
        }, n) => (0, z.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          height: Rh[t],
          viewBox: "0 0 158 20",
          fill: "none",
          ref: n,
          ...r,
          children: (0, z.jsx)("path", {
            d: "M10.02 8.01603C13.0261 10.3006 18.1563 15.9519 16.5932 17.515C14.8297 19.0381 12.5451 20 9.97996 20C7.41483 20 5.13026 19.0782 3.36673 17.515C1.80361 15.9118 6.93387 10.3006 9.93988 8.01603H10.02ZM15.2305 1.48297C13.7074 0.561122 12.024 0 10.02 0C8.01603 0 6.33266 0.561122 4.80962 1.48297C4.80962 1.48297 4.80962 1.48297 4.80962 1.52305C4.80962 1.52305 4.80962 1.52305 4.8497 1.52305C6.77355 1.12224 9.73948 2.76553 10.02 2.92585C10.3006 2.76553 13.2265 1.08216 15.1904 1.52305C15.1904 1.52305 15.1904 1.52305 15.2305 1.52305C15.2305 1.52305 15.2305 1.52305 15.2305 1.48297ZM3.00601 2.88577C3.00601 2.88577 3.00601 2.88577 2.96593 2.88577C1.12224 4.72946 0 7.25451 0 10.02C0 12.7856 0.761523 14.3888 2.04409 16.1122C2.04409 16.1122 2.04409 16.1122 2.08417 16.1122C2.08417 16.1122 2.08417 16.1122 2.08417 16.0721C1.32265 13.7074 5.21042 7.97595 7.25451 5.57114C4.20842 2.48497 3.16633 2.80561 3.00601 2.88577ZM12.7856 5.49098C14.7896 7.89579 18.7174 13.6273 17.9559 15.992C17.9559 15.992 17.9559 15.992 17.9559 16.0321C17.9559 16.0321 17.9559 16.0321 17.996 16.0321C19.2786 14.3487 20.0401 12.2244 20.0401 9.97996C20.0401 7.73547 18.9178 4.68938 17.0741 2.88577C17.0741 2.88577 17.0741 2.88577 17.0341 2.88577C16.8737 2.80561 15.8317 2.48497 12.7856 5.53106V5.49098ZM34.8697 16.1924H32.8256L29.2986 11.3427L25.7715 16.1924H23.7275L28.2966 9.93988L24.0882 4.16834H26.1323L29.2986 8.53707L32.4649 4.16834H34.509L30.3006 9.93988L34.8697 16.1924ZM45.5311 12.7856C45.5311 13.8277 45.1703 14.6693 44.489 15.3106C43.8076 15.9118 42.8056 16.2325 41.483 16.2325H35.8317V10.8617H33.1463L34.2685 9.33868H35.8317V4.20842H41.2425C42.4449 4.20842 43.4068 4.48898 44.0481 5.09018C44.6894 5.6513 45.01 6.41283 45.01 7.37475C45.01 8.33667 44.489 9.41884 43.4469 9.97996C44.1283 10.2204 44.6092 10.6212 44.9699 11.1022C45.3307 11.5832 45.491 12.1844 45.491 12.8257L45.5311 12.7856ZM37.6753 9.2986H41.1222C41.8036 9.2986 42.3647 9.13828 42.6854 8.81764C43.0461 8.49699 43.2064 8.05611 43.2064 7.41483C43.2064 6.77355 43.0461 6.45291 42.6854 6.17234C42.3246 5.8517 41.8036 5.73146 41.1222 5.73146H37.6753V9.2986ZM43.6473 12.7455C43.6473 12.1042 43.4469 11.6232 43.0862 11.3026C42.7254 10.982 42.1242 10.8216 41.3627 10.8216H37.6753V14.5892H41.3627C42.0842 14.5892 42.6453 14.4289 43.0461 14.1082C43.4469 13.7876 43.6473 13.3066 43.6473 12.7054V12.7455ZM57.8757 10.1804C57.8757 11.1022 57.7555 11.984 57.4749 12.7054C57.1944 13.4669 56.7936 14.1483 56.2725 14.7094C55.7515 15.2705 55.1102 15.7114 54.3888 16.0321C53.6673 16.3126 52.8657 16.4729 52.024 16.4729C51.1824 16.4729 50.3407 16.3126 49.6192 16.0321C48.8978 15.7515 48.2966 15.3106 47.7755 14.7094C47.2545 14.1483 46.8136 13.4669 46.5731 12.7054C46.3327 11.9439 46.1723 11.1022 46.1723 10.1403C46.1723 9.17836 46.2926 8.33667 46.5731 7.57515C46.8537 6.81363 47.2545 6.13226 47.7755 5.57114C48.2966 5.01002 48.9379 4.56914 49.6593 4.28858C50.3808 4.00802 51.1824 3.8477 52.0641 3.8477C52.9459 3.8477 53.7475 4.00802 54.4289 4.28858C55.1503 4.56914 55.7515 5.01002 56.3126 5.57114C56.8337 6.17234 57.2345 6.81363 57.515 7.57515C57.7956 8.33667 57.9158 9.17836 57.9158 10.1403L57.8757 10.1804ZM48.016 10.1804C48.016 11.5832 48.3768 12.7455 49.0982 13.5471C49.8196 14.3888 50.7816 14.7896 51.984 14.7896C53.1864 14.7896 54.1483 14.3487 54.8697 13.5471C55.5912 12.7455 55.9519 11.5832 55.9519 10.1804C55.9519 8.77756 55.5912 7.61523 54.8697 6.77355C54.1483 5.93186 53.1864 5.53106 51.984 5.53106C50.7816 5.53106 49.8196 5.93186 49.0982 6.77355C48.3768 7.61523 48.016 8.77756 48.016 10.1804ZM63.6874 9.93988L67.8958 4.16834H65.8517L62.6854 8.53707L59.519 4.16834H57.4749L61.6834 9.93988L57.1142 16.1924H59.1583L62.6854 11.3427L66.2124 16.1924H68.2565L63.6874 9.93988ZM83.5671 5.81162V9.2986H89.5391V10.8216H83.5671V14.509H90.3407V16.1523H81.7234V4.16834H90.3407V5.81162H83.5671ZM79.3186 10.6212C78.7174 10.0601 77.7154 9.65932 76.3527 9.33868L75.3106 9.13828C74.3086 8.93788 73.6272 8.65731 73.2665 8.37675C72.9058 8.09619 72.7054 7.69539 72.7054 7.13427C72.7054 6.57315 72.9058 6.17234 73.3066 5.89178C73.7074 5.61122 74.3086 5.4509 75.1102 5.4509C75.9118 5.4509 76.8337 5.6513 77.3146 6.01202C77.7555 6.37275 78.0361 6.93387 78.0761 7.69539H79.9198C79.9198 6.49299 79.479 5.57114 78.6774 4.88978C77.8757 4.20842 76.6733 3.88778 75.1102 3.88778C73.5471 3.88778 72.7455 4.20842 71.984 4.76954C71.2224 5.33066 70.8216 6.17234 70.8216 7.17435C70.8216 8.17635 71.1423 8.93788 71.7836 9.499C72.4248 10.0601 73.3467 10.4609 74.5892 10.7014L75.6313 10.9018C76.6333 11.1423 77.3547 11.3828 77.7555 11.6633C78.1563 11.9439 78.3166 12.3447 78.3166 12.8657C78.3166 13.3868 78.0761 13.988 77.5952 14.3487C77.1142 14.6693 76.4329 14.8697 75.5511 14.8697C74.6693 14.8697 73.6673 14.6293 73.1463 14.1884C72.6252 13.7475 72.3046 13.0661 72.3046 12.1844H70.4609C70.4609 13.5872 70.9419 14.6693 71.8236 15.3507C72.7054 16.0321 73.9479 16.4329 75.5511 16.4329C77.1543 16.4329 78.1563 16.1122 78.998 15.4709C79.8397 14.8297 80.2405 13.9479 80.2405 12.8257C80.2405 11.7034 79.9198 11.1423 79.3186 10.5812V10.6212ZM101.403 14.7094L101.283 12.8257C101.283 12.1443 101.122 11.6232 100.842 11.2224C100.561 10.8216 100.16 10.5411 99.5992 10.3808C100.2 10.1804 100.721 9.81964 101.042 9.33868C101.403 8.85772 101.563 8.21643 101.563 7.49499C101.563 6.45291 101.202 5.6513 100.441 5.0501C99.7194 4.4489 98.6773 4.16834 97.3948 4.16834H92.1443V16.1924H93.988V11.2625H97.4749C98.1563 11.2625 98.6773 11.4228 98.998 11.7435C99.3186 12.0641 99.479 12.6253 99.519 13.3868V14.6693C99.5992 15.3507 99.7194 15.8717 99.9198 16.1924H101.804C101.603 15.7916 101.443 15.3106 101.403 14.7094ZM94.0281 5.73146H97.3547C98.1162 5.73146 98.7174 5.89178 99.1182 6.21242C99.519 6.53307 99.7194 7.01403 99.7194 7.65531C99.7194 8.29659 99.519 8.81763 99.1182 9.17836C98.7174 9.53908 98.1563 9.6994 97.4749 9.6994H94.0281V5.73146ZM103.246 16.1924H105.09V4.16834H103.246V16.2325V16.1924ZM115.551 5.81162V4.16834H106.934V16.1924H115.551V14.5491H108.778V10.8617H114.749V9.33868H108.778V5.8517H115.551V5.81162ZM125.331 10.6212C124.729 10.0601 123.727 9.65932 122.365 9.33868L121.323 9.13828C120.321 8.93788 119.639 8.65731 119.279 8.37675C118.918 8.09619 118.717 7.69539 118.717 7.13427C118.717 6.57315 118.918 6.17234 119.319 5.89178C119.719 5.61122 120.321 5.4509 121.122 5.4509C121.924 5.4509 122.846 5.6513 123.327 6.01202C123.808 6.37275 124.048 6.93387 124.088 7.69539H125.892C125.892 6.49299 125.451 5.57114 124.649 4.88978C123.848 4.20842 122.645 3.88778 121.082 3.88778C119.519 3.88778 118.717 4.20842 117.956 4.76954C117.194 5.33066 116.794 6.17234 116.794 7.17435C116.794 8.17635 117.114 8.93788 117.755 9.499C118.397 10.0601 119.319 10.4609 120.561 10.7014L121.603 10.9018C122.605 11.1423 123.327 11.3828 123.727 11.6633C124.128 11.9439 124.329 12.3447 124.329 12.8657C124.329 13.3868 124.088 13.988 123.607 14.3487C123.126 14.6693 122.445 14.8697 121.563 14.8697C120.681 14.8697 119.679 14.6293 119.158 14.1884C118.637 13.7475 118.357 13.0661 118.317 12.1844H116.473C116.473 13.5872 116.954 14.6693 117.836 15.3507C118.717 16.0721 119.96 16.4329 121.563 16.4329C123.166 16.4329 124.168 16.1122 125.01 15.4709C125.852 14.8297 126.252 13.9479 126.252 12.8257C126.252 11.7034 125.932 11.1423 125.331 10.5812V10.6212ZM144.93 2.64529H144.008V17.7154H144.93V2.64529ZM136.513 9.93988L140.721 4.16834H138.677L135.511 8.53707L132.345 4.16834H130.301L134.509 9.93988L129.94 16.1924H131.984L135.511 11.3427L139.038 16.1924H141.082L136.513 9.93988ZM156.713 10.6212C156.112 10.0601 155.11 9.65932 153.747 9.33868L152.705 9.13828C151.703 8.93788 151.022 8.65731 150.661 8.37675C150.301 8.09619 150.1 7.69539 150.1 7.13427C150.1 6.57315 150.301 6.17234 150.701 5.89178C151.102 5.61122 151.703 5.4509 152.505 5.4509C153.307 5.4509 154.228 5.6513 154.709 6.01202C155.19 6.37275 155.431 6.93387 155.471 7.69539H157.275C157.275 6.49299 156.834 5.57114 156.032 4.88978C155.23 4.20842 154.028 3.88778 152.465 3.88778C150.902 3.88778 150.1 4.20842 149.339 4.76954C148.577 5.33066 148.176 6.17234 148.176 7.17435C148.176 8.17635 148.497 8.93788 149.138 9.499C149.78 10.0601 150.701 10.4609 151.944 10.7014L152.986 10.9018C153.988 11.1423 154.709 11.3828 155.11 11.6633C155.511 11.9439 155.711 12.3447 155.711 12.8657C155.711 13.3868 155.471 13.988 154.99 14.3487C154.509 14.6693 153.828 14.8697 152.946 14.8697C152.064 14.8697 151.062 14.6293 150.541 14.1884C150.02 13.7475 149.739 13.0661 149.699 12.1844H147.856C147.856 13.5872 148.337 14.6693 149.218 15.3507C150.1 16.0721 151.343 16.4329 152.946 16.4329C154.549 16.4329 155.551 16.1122 156.393 15.4709C157.234 14.8297 157.635 13.9479 157.635 12.8257C157.635 11.7034 157.315 11.1423 156.713 10.5812V10.6212Z",
            fill: e
          })
        }));

      function Ih(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t);
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : String(t)
      }

      function Th(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), r.push.apply(r, n)
        }
        return r
      }

      function Lh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Th(Object(r), !0).forEach(function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Ih(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Th(Object(r)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          })
        }
        return e
      }

      function kh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Vh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Eh = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lh(Lh({}, e.defaultVariants), t);
            for (var o in n) {
              var a, s = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != s) {
                var i = s;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var d = e.variantClassNames[o][i];
                d && (r += " " + d)
              }
            }
            for (var [l, c] of e.compoundVariants) Vh(l, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kh(e.variantClassNames, e => kh(e, e => e.split(" ")[0]))
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
      const Mh = (0, T.forwardRef)(({
        logo: e,
        size: t,
        asChild: r,
        children: n,
        ...o
      }, a) => {
        const s = (0, F.v6)({
            className: Eh({
              size: t
            }),
            size: t
          }, o),
          i = P[e];
        if (r && (0, T.isValidElement)(n)) {
          const e = (0, T.cloneElement)(n, n.props, (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(i, {
              size: t,
              "aria-hidden": !0
            }), n.props.children]
          }));
          return (0, z.jsx)(N.$, {
            asChild: !0,
            size: t,
            ref: a,
            ...o,
            children: e
          })
        }
        return (0, z.jsx)(N.$, {
          ...s,
          ref: a,
          children: (0, z.jsx)(i, {
            size: t,
            "aria-hidden": !0
          })
        })
      })
    }
  }
]);